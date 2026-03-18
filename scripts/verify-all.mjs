#!/usr/bin/env node
/**
 * 식당 전수 실존 검증 (Puppeteer)
 * - naverPlaceId 있는 식당: 네이버 플레이스 직접 방문 → 폐업/미존재 확인
 * - naverPlaceId 없는 식당: 네이버 지도에서 이름+주소 검색 → 존재 확인
 *
 * 사용법: node scripts/verify-all.mjs [region]
 */

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REGION = process.argv[2] || 'samseong'
const PROGRESS_DIR = path.join(__dirname, 'naver-data')

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

const AREA_KEYWORDS = {
  samseong: '삼성역',
  jamsil: '잠실',
  pangyo: '판교',
  yeongtong: '영통',
  mangpo: '망포',
  yeongtongGu: '영통구청'
}

async function verifyByPlaceId(page, placeId) {
  try {
    await page.goto(`https://m.place.naver.com/restaurant/${placeId}/home`, {
      waitUntil: 'domcontentloaded', timeout: 12000
    }).catch(() => {})
    await sleep(2000)

    return await page.evaluate(() => {
      const text = document.body?.innerText || ''
      const notFound = text.includes('찾을 수 없습니다') || text.includes('존재하지 않는') || text.includes('삭제된 업체')
      const closed = text.includes('영업종료') || text.includes('폐업')

      let cnt = 0
      const cm = text.match(/방문자\s*리뷰\s*([\d,]+)/)
      if (cm) cnt = parseInt(cm[1].replace(/,/g, ''))

      return { exists: !notFound && !closed, notFound, closed, cnt, method: 'placeId' }
    }).catch(() => ({ exists: true, cnt: 0, method: 'placeId' }))
  } catch {
    return { exists: true, cnt: 0, method: 'placeId' }
  }
}

async function verifyBySearch(page, name, area) {
  try {
    const query = encodeURIComponent(name + ' ' + area)
    await page.goto(`https://m.map.naver.com/search2/search.naver?query=${query}`, {
      waitUntil: 'domcontentloaded', timeout: 12000
    }).catch(() => {})
    await sleep(2500)

    return await page.evaluate((restaurantName) => {
      const text = document.body?.innerText || ''

      // 검색 결과에서 식당명이 있는지 확인
      // 정확히 일치하거나 포함하는 결과가 있으면 존재
      const nameNorm = restaurantName.replace(/\s+/g, '').toLowerCase()
      const textNorm = text.replace(/\s+/g, '').toLowerCase()

      const found = textNorm.includes(nameNorm)

      // "검색 결과가 없습니다" 체크
      const noResult = text.includes('검색 결과가 없습니다') || text.includes('결과가 없습니다')

      // 영업종료/폐업 표시 확인
      const closed = text.includes('영업종료') || text.includes('폐업')

      return {
        exists: found && !noResult && !closed,
        notFound: noResult || !found,
        closed,
        cnt: 0,
        method: 'search'
      }
    }, name).catch(() => ({ exists: true, cnt: 0, method: 'search' }))
  } catch {
    return { exists: true, cnt: 0, method: 'search' }
  }
}

async function main() {
  const region = REGION
  const area = AREA_KEYWORDS[region] || region
  const dataPath = path.join(__dirname, '..', 'data', `${region}.js`)
  const progressFile = path.join(PROGRESS_DIR, `${region}-verify-all-progress.json`)

  const mod = await import(dataPath + '?t=' + Date.now())
  const restaurants = [...mod.default]

  let progress = {}
  try { progress = JSON.parse(fs.readFileSync(progressFile, 'utf-8')) } catch {}

  const toVerify = restaurants.filter(r => !progress[r.name])
  const alreadyDone = Object.keys(progress).length

  console.log(`=== ${region} (${area}) 전수 검증 ===`)
  console.log(`총: ${restaurants.length} | 검증필요: ${toVerify.length} | 완료: ${alreadyDone}`)

  if (toVerify.length === 0) {
    console.log('검증 완료 — 결과 적용만 진행')
  } else {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    })
    const page = await browser.newPage()
    await page.setViewport({ width: 430, height: 932 })
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15')
    await page.setRequestInterception(true)
    page.on('request', req => {
      const t = req.resourceType()
      if (['image', 'font', 'media', 'stylesheet'].includes(t)) req.abort()
      else req.continue()
    })

    let notExist = 0, closedCnt = 0

    for (let i = 0; i < toVerify.length; i++) {
      const r = toVerify[i]

      let info
      if (r.naverPlaceId) {
        info = await verifyByPlaceId(page, r.naverPlaceId)
      } else {
        info = await verifyBySearch(page, r.name, area)
      }

      progress[r.name] = {
        exists: info.exists,
        notFound: info.notFound || false,
        closed: info.closed || false,
        cnt: info.cnt || 0,
        method: info.method
      }

      if (!info.exists) {
        notExist++
        const reason = info.closed ? '폐업' : '미존재'
        console.log(`  ❌ ${r.name} (${reason}) [${info.method}]`)
      }

      if ((i + 1) % 30 === 0) {
        console.log(`  진행: ${i + 1}/${toVerify.length} (미존재/폐업: ${notExist})`)
        fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2))
      }
    }

    fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2))
    await browser.close()
    console.log(`\n검증 완료: ${toVerify.length}건 (미존재/폐업: ${notExist})`)
  }

  // 결과 적용
  let removedCount = 0
  const removed = []
  const filtered = restaurants.filter(r => {
    const p = progress[r.name]
    if (p && !p.exists) {
      removedCount++
      removed.push(r.name + (p.closed ? ' (폐업)' : ' (미존재)'))
      return false
    }
    return true
  })

  console.log(`\n제거: ${removedCount}건`)
  if (removed.length) {
    console.log('제거 목록:')
    removed.forEach(n => console.log('  -', n))
  }
  console.log(`최종: ${filtered.length}개 (기존 ${restaurants.length}개)`)

  fs.writeFileSync(dataPath, 'const restaurants = ' + JSON.stringify(filtered, null, 2) + '\n\nexport default restaurants\n')
  console.log(`저장 완료`)
}

main().catch(e => { console.error(e); process.exit(1) })
