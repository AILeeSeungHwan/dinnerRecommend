#!/usr/bin/env node
/**
 * 빈 menuName 재크롤링 — 기존 데이터에서 menuName이 비어있는 식당만 대상으로
 * 네이버 플레이스 메뉴 페이지를 방문하여 menuName을 확보
 *
 * 사용법: node scripts/fix-empty-menuname.mjs [region]
 *   예시: node scripts/fix-empty-menuname.mjs samseong
 *
 * 진행 상황: scripts/naver-data/{region}-menufix-progress.json에 저장
 * 중단 후 재실행 시 이어서 진행
 */

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, 'naver-data')

const REGION = process.argv[2] || 'samseong'
const REGION_DATA_FILES = {
  samseong: 'data/samseong.js',
  jamsil: 'data/jamsil.js',
  pangyo: 'data/pangyo.js',
  yeongtong: 'data/yeongtong.js',
  mangpo: 'data/mangpo.js',
  yeongtongGu: 'data/yeongtongGu.js',
}

const dataFile = REGION_DATA_FILES[REGION]
if (!dataFile) {
  console.error(`알 수 없는 지역: ${REGION}`)
  process.exit(1)
}

const DATA_PATH = path.join(__dirname, '..', dataFile)
const PROGRESS_FILE = path.join(OUT_DIR, `${REGION}-menufix-progress.json`)

fs.mkdirSync(OUT_DIR, { recursive: true })

// 진행 상황 로드
let doneIds = new Set()
try {
  doneIds = new Set(JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8')))
  console.log(`이전 진행: ${doneIds.size}개 완료`)
} catch (e) {}

function saveProgress() {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify([...doneIds]))
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

const DESC_PATTERN = /입니다|메뉴입|드리는|즐기는|만들어진|준비했|묻어있는|볶은|우려낸|넣어|한상차림|맛볼 수|내어드리는|일품입니다|추천드립니다|즐길 수|차려지는/

async function main() {
  // 데이터 로드
  const mod = await import('file://' + DATA_PATH)
  const restaurants = JSON.parse(JSON.stringify(mod.default))

  // 빈 menuName이 있는 식당 중 naverPlaceId가 있는 것만 대상
  const targets = restaurants.filter(r =>
    r.naverPlaceId &&
    r.menuItems?.some(m => !m.menuName) &&
    !doneIds.has(r.naverPlaceId)
  )

  console.log(`[${REGION}] 빈 menuName 재크롤링`)
  console.log(`  대상: ${targets.length}개 식당`)
  console.log(`  이미 완료: ${doneIds.size}개`)

  if (targets.length === 0) {
    console.log('  모두 완료. 종료.')
    return
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')

  await page.setRequestInterception(true)
  page.on('request', req => {
    const t = req.resourceType()
    if (['image', 'font', 'media'].includes(t)) req.abort()
    else req.continue()
  })

  let processed = 0, fixed = 0

  for (const r of targets) {
    processed++
    if (processed % 10 === 0) {
      console.log(`  진행: ${processed}/${targets.length} (수정: ${fixed})`)
      saveProgress()
    }

    try {
      await page.goto(`https://pcmap.place.naver.com/restaurant/${r.naverPlaceId}/menu/list`, {
        waitUntil: 'networkidle2', timeout: 12000
      }).catch(() => {})
      await sleep(2000)

      const menuInfo = await page.evaluate(() => {
        const menus = []

        // 방법 1: 구조화된 요소
        document.querySelectorAll('.E2jtL, [class*="menu_item"], [class*="MenuItem"], .K0PDV').forEach(el => {
          const nameEl = el.querySelector('.lPzHi, .name, [class*="menuName"], [class*="item_name"]')
          const descEl = el.querySelector('.kPogF, .desc, [class*="menuDesc"], [class*="item_desc"], [class*="detail"]')
          const priceEl = el.querySelector('.GXS1X, .price, [class*="price"]')

          const menuName = nameEl?.textContent?.trim() || ''
          const description = descEl?.textContent?.trim() || ''
          const priceText = priceEl?.textContent?.trim() || ''
          const price = parseInt((priceText).replace(/[^0-9]/g, '')) || 0

          if (menuName && menuName.length >= 1) {
            menus.push({ menuName, price, description })
          }
        })

        // 방법 2: 텍스트 폴백
        if (menus.length === 0) {
          const text = document.body?.innerText || ''
          const lines = text.split('\n').map(l => l.trim()).filter(Boolean)

          for (let i = 0; i < lines.length - 1; i++) {
            const line = lines[i]
            const next = lines[i + 1]
            const priceMatch = next.match(/^([\d,]+)원$/)

            if (priceMatch && line.length >= 2 && line.length <= 30
                && !/^(대표|인기|추천|메뉴|홈|소식|리뷰|사진|정보|더보기)$/.test(line)) {
              const price = parseInt(priceMatch[1].replace(/,/g, ''))
              menus.push({ menuName: line, price, description: '' })
            }
          }
        }

        return menus.slice(0, 10)
      }).catch(() => [])

      if (menuInfo.length > 0) {
        // 기존 menuItems의 빈 menuName을 가격 매칭으로 채우기
        let fixedCount = 0
        for (const mi of r.menuItems) {
          if (mi.menuName) continue // 이미 있으면 스킵

          // 가격으로 매칭 시도
          const match = menuInfo.find(m =>
            m.price === mi.price && m.menuName && m.menuName.length <= 30
          )
          if (match) {
            mi.menuName = match.menuName
            if (!mi.description && match.description) mi.description = match.description
            fixedCount++
          }
        }

        // 매칭 안 된 항목은 크롤링 결과로 전체 교체
        if (fixedCount === 0 && menuInfo.length >= r.menuItems.length) {
          r.menuItems = menuInfo.slice(0, 10).map(m => ({
            menuName: m.menuName || '',
            price: m.price || 0,
            description: m.description || ''
          }))
          fixedCount = menuInfo.filter(m => m.menuName).length
        }

        if (fixedCount > 0) fixed++
      }

      doneIds.add(r.naverPlaceId)

      if (processed <= 3) {
        console.log(`  [${r.name}] menus=${menuInfo.length}, fixed=${r.menuItems.filter(m => m.menuName).length}/${r.menuItems.length}`)
      }

      await sleep(1500 + Math.random() * 1000)
    } catch (e) {
      doneIds.add(r.naverPlaceId)
      await sleep(2000)
    }
  }

  await browser.close()
  saveProgress()

  // 데이터 파일에 반영
  // 원본 데이터에 수정사항 적용
  const origMod = await import('file://' + DATA_PATH + '?t=' + Date.now())
  const origData = JSON.parse(JSON.stringify(origMod.default))

  const targetMap = new Map(restaurants.map(r => [r.naverPlaceId || r.name, r]))

  for (const orig of origData) {
    const updated = targetMap.get(orig.naverPlaceId || orig.name)
    if (updated && updated.menuItems) {
      orig.menuItems = updated.menuItems
    }
  }

  // 백업 + 저장
  const backupDir = path.join(__dirname, '..', 'data', 'backup')
  fs.mkdirSync(backupDir, { recursive: true })
  fs.copyFileSync(DATA_PATH, path.join(backupDir, `${REGION}_menufix_${new Date().toISOString().slice(0,10)}.js`))

  const json = JSON.stringify(origData, null, 2)
  fs.writeFileSync(DATA_PATH, `const restaurants = ${json}\n\nexport default restaurants\n`)

  // 검증
  const { execSync } = await import('child_process')
  try {
    execSync(`node --check "${DATA_PATH}"`, { stdio: 'pipe' })
    console.log(`\n구문 검증 통과`)
  } catch (e) {
    console.error(`구문 검증 실패!`)
  }

  // 리포트
  const totalMenuItems = origData.reduce((s, r) => s + (r.menuItems?.length || 0), 0)
  const emptyMenuName = origData.reduce((s, r) => s + (r.menuItems?.filter(m => !m.menuName).length || 0), 0)

  console.log(`\n✅ 완료!`)
  console.log(`  처리: ${processed}개 식당`)
  console.log(`  수정 성공: ${fixed}개 식당`)
  console.log(`  총 menuItems: ${totalMenuItems}`)
  console.log(`  빈 menuName (잔여): ${emptyMenuName}`)
  console.log(`  menuName 확보율: ${totalMenuItems > 0 ? Math.round((totalMenuItems - emptyMenuName) / totalMenuItems * 100) : 0}%`)
}

main().catch(e => { console.error(e); saveProgress(); process.exit(1) })
