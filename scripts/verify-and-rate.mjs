#!/usr/bin/env node
/**
 * 식당 실존 검증 + 품질 필터링 (Puppeteer)
 * naverPlaceId 기반 → 네이버 플레이스 접속 → 존재/폐업 확인
 * + 리뷰 5건 미만 신규 식당 제거
 *
 * 사용법: node scripts/verify-and-rate.mjs [region|all]
 */

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REGION = process.argv[2] || 'all'
const REGIONS = REGION === 'all'
  ? ['samseong', 'jamsil', 'pangyo', 'yeongtong', 'mangpo', 'yeongtongGu']
  : [REGION]

const PROGRESS_DIR = path.join(__dirname, 'naver-data')
const MIN_REVIEWS = 5

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function processRegion(region, browser) {
  const dataPath = path.join(__dirname, '..', 'data', `${region}.js`)
  const progressFile = path.join(PROGRESS_DIR, `${region}-verify-progress.json`)

  const mod = await import(dataPath + '?t=' + Date.now())
  const restaurants = [...mod.default]

  let progress = {}
  try { progress = JSON.parse(fs.readFileSync(progressFile, 'utf-8')) } catch {}

  const toVerify = restaurants.filter(r => r.naverPlaceId && !progress[r.naverPlaceId])
  const alreadyDone = Object.keys(progress).length

  console.log(`\n=== ${region} ===`)
  console.log(`총: ${restaurants.length} | 검증필요: ${toVerify.length} | 완료: ${alreadyDone}`)

  if (toVerify.length > 0) {
    const page = await browser.newPage()
    await page.setViewport({ width: 430, height: 932 })
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15')
    await page.setRequestInterception(true)
    page.on('request', req => {
      const t = req.resourceType()
      if (['image', 'font', 'media', 'stylesheet'].includes(t)) req.abort()
      else req.continue()
    })

    let notExist = 0, closed = 0, updated = 0

    for (let i = 0; i < toVerify.length; i++) {
      const r = toVerify[i]

      try {
        await page.goto(`https://m.place.naver.com/restaurant/${r.naverPlaceId}/home`, {
          waitUntil: 'domcontentloaded', timeout: 12000
        }).catch(() => {})
        await sleep(1800)

        const info = await page.evaluate(() => {
          const text = document.body?.innerText || ''
          const notFound = text.includes('찾을 수 없습니다') || text.includes('존재하지 않는') || text.includes('삭제된 업체')
          const isClosed = text.includes('영업종료') || text.includes('폐업')

          let cnt = 0
          const cm = text.match(/방문자\s*리뷰\s*([\d,]+)/)
          if (cm) cnt = parseInt(cm[1].replace(/,/g, ''))

          return { exists: !notFound && !isClosed, notFound, closed: isClosed, cnt }
        }).catch(() => ({ exists: true, cnt: 0 }))

        progress[r.naverPlaceId] = {
          exists: info.exists,
          notFound: info.notFound || false,
          closed: info.closed || false,
          cnt: info.cnt || 0
        }

        if (info.notFound) notExist++
        if (info.closed) closed++
        if (info.cnt > 0) updated++

      } catch (e) {
        progress[r.naverPlaceId] = { exists: true, cnt: 0 }
      }

      if ((i + 1) % 30 === 0) {
        console.log(`  진행: ${i + 1}/${toVerify.length} (미존재: ${notExist}, 폐업: ${closed}, 리뷰갱신: ${updated})`)
        fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2))
      }
    }

    fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2))
    await page.close()
    console.log(`  검증 완료 (미존재: ${notExist}, 폐업: ${closed})`)
  }

  // === 결과 적용 ===
  let removedNotExist = 0, removedLowReview = 0, cntUpdated = 0

  const filtered = restaurants.filter(r => {
    if (!r.naverPlaceId) return true // 기존 데이터 유지

    const p = progress[r.naverPlaceId]
    if (p && !p.exists) { removedNotExist++; return false }

    // 리뷰 수 갱신
    if (p && p.cnt > 0 && p.cnt !== (r.cnt || 0)) { r.cnt = p.cnt; cntUpdated++ }

    // 리뷰 5건 미만 제거
    if ((r.cnt || 0) < MIN_REVIEWS) { removedLowReview++; return false }

    return true
  })

  console.log(`  미존재/폐업 제거: ${removedNotExist}`)
  console.log(`  리뷰<${MIN_REVIEWS} 제거: ${removedLowReview}`)
  console.log(`  리뷰수 갱신: ${cntUpdated}`)
  console.log(`  최종: ${filtered.length}개 (기존 ${restaurants.length}개)`)

  fs.writeFileSync(dataPath, 'const restaurants = ' + JSON.stringify(filtered, null, 2) + '\n\nexport default restaurants\n')

  return {
    total: restaurants.length,
    final: filtered.length,
    removedNotExist,
    removedLowReview,
    cntUpdated
  }
}

async function main() {
  console.log('식당 실존 검증 + 품질 필터링')
  console.log('대상:', REGIONS.join(', '))
  console.log('최소 리뷰:', MIN_REVIEWS)

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  })

  const results = {}
  for (const region of REGIONS) {
    results[region] = await processRegion(region, browser)
  }

  await browser.close()

  console.log('\n=== 최종 요약 ===')
  let totalRemoved = 0, totalFinal = 0
  for (const [region, r] of Object.entries(results)) {
    const removed = r.total - r.final
    totalRemoved += removed
    totalFinal += r.final
    console.log(`${region}: ${r.total} → ${r.final} (-${removed} | 미존재:${r.removedNotExist} 저리뷰:${r.removedLowReview})`)
  }
  console.log(`총: -${totalRemoved}개 제거 → ${totalFinal}개 유지`)
}

main().catch(e => { console.error(e); process.exit(1) })
