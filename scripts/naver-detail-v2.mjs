#!/usr/bin/env node
/**
 * 네이버 플레이스 상세 정보 수집 v2
 * Puppeteer API 인터셉트 방식으로 평점/메뉴/리뷰 수집
 *
 * 체크포인트의 708개 식당에 대해 네이버 플레이스 페이지 방문 시
 * 브라우저가 호출하는 내부 API 응답을 가로채서 데이터 추출
 */

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, 'naver-data')
const CHECKPOINT_FILE = path.join(OUT_DIR, 'samseong-browser-checkpoint.json')
const FINAL_FILE = path.join(OUT_DIR, 'samseong-browser.json')
const DETAIL_PROGRESS_FILE = path.join(OUT_DIR, 'detail-progress.json')

// 체크포인트 로드
let data = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf-8'))
console.log(`로드: ${data.restaurants.length}개 식당`)

// 이미 상세 수집 완료된 ID 추적
let detailDone = new Set()
try {
  const prog = JSON.parse(fs.readFileSync(DETAIL_PROGRESS_FILE, 'utf-8'))
  detailDone = new Set(prog.done || [])
  console.log(`이미 처리: ${detailDone.size}개`)
} catch (e) { /* 첫 실행 */ }

function saveProgress() {
  fs.writeFileSync(DETAIL_PROGRESS_FILE, JSON.stringify({ done: [...detailDone] }))
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify({
    restaurants: data.restaurants,
    completedQueries: data.completedQueries,
    timestamp: new Date().toISOString()
  }, null, 2))
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 1080 })
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')

  // 이미지/폰트 차단으로 속도 개선
  await page.setRequestInterception(true)
  page.on('request', (req) => {
    const type = req.resourceType()
    if (['image', 'font', 'media', 'stylesheet'].includes(type)) {
      req.abort()
    } else {
      req.continue()
    }
  })

  const needDetail = data.restaurants.filter(r =>
    r.naverPlaceId && !detailDone.has(r.naverPlaceId) && r.rt === 0
  )
  console.log(`상세 수집 필요: ${needDetail.length}개\n`)

  let processed = 0
  let gotRating = 0

  for (const r of needDetail) {
    processed++
    if (processed % 10 === 0) {
      console.log(`진행: ${processed}/${needDetail.length} (평점 획득: ${gotRating})`)
      saveProgress()
    }

    try {
      // API 응답 수집용
      let placeData = null

      // 응답 인터셉트 핸들러
      const responseHandler = async (response) => {
        const url = response.url()
        try {
          // 네이버 플레이스 내부 API 응답 감지
          if (url.includes('/graphql') || url.includes('/api/') || url.includes('place-api')) {
            const text = await response.text().catch(() => '')
            if (text.includes(r.naverPlaceId) || text.includes('visitorReview') || text.includes('menuInfo')) {
              try {
                const json = JSON.parse(text)
                if (!placeData) placeData = {}
                // GraphQL 응답 병합
                if (json.data) Object.assign(placeData, json.data)
                if (json[0]?.data) json.forEach(item => { if (item.data) Object.assign(placeData, item.data) })
              } catch (e) { /* not JSON */ }
            }
          }
        } catch (e) { /* ignore */ }
      }

      page.on('response', responseHandler)

      // 네이버 지도에서 해당 식당 페이지 열기
      const url = `https://map.naver.com/v5/entry/place/${r.naverPlaceId}?c=15,0,0,0,dh`
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 }).catch(() => {})
      await sleep(3000)

      // iframe 내부로 진입 시도 (네이버 지도는 iframe 사용)
      const frames = page.frames()
      for (const frame of frames) {
        const frameUrl = frame.url()
        if (frameUrl.includes('place.naver.com') || frameUrl.includes('pcmap.place')) {
          try {
            await frame.waitForSelector('[class*="rating"], [class*="score"], .PXMot', { timeout: 5000 }).catch(() => {})

            const info = await frame.evaluate(() => {
              const result = { rt: 0, cnt: 0, menuItems: [], hours: '', reviews: [] }

              // 평점 추출 - 여러 셀렉터 시도
              const selectors = [
                '.PXMot .LXIwF', '.PXMot em', '.place_section_content em',
                '[class*="rating"] em', '[class*="score"] em',
                '.dAsGb em', '.orXYY em'
              ]
              for (const sel of selectors) {
                const el = document.querySelector(sel)
                if (el) {
                  const val = parseFloat(el.textContent)
                  if (val > 0 && val <= 5) { result.rt = val; break }
                }
              }

              // 방문자 리뷰 수
              const cntSelectors = ['.PXMot .place_section_count', '.dAsGb .place_section_count', '[class*="count"]']
              for (const sel of cntSelectors) {
                const el = document.querySelector(sel)
                if (el) {
                  const num = parseInt((el.textContent || '').replace(/[^0-9]/g, ''))
                  if (num > 0) { result.cnt = num; break }
                }
              }

              // 메뉴
              document.querySelectorAll('[class*="menu"] li, .E2jtL, .VQvNs').forEach(el => {
                const name = (el.querySelector('[class*="name"], .lPzHi, .MENsT') || {}).textContent?.trim()
                const price = (el.querySelector('[class*="price"], .GXS1X, .mkBm3') || {}).textContent?.trim()
                if (name) result.menuItems.push({
                  name,
                  price: parseInt((price || '').replace(/[^0-9]/g, '')) || 0
                })
              })

              // 영업시간
              const hoursEl = document.querySelector('[class*="bizHour"], .A_cdD, .MkTHd, .place_section_content .O8qbU')
              if (hoursEl) result.hours = hoursEl.textContent?.trim()?.split('\n')[0] || ''

              // 리뷰
              document.querySelectorAll('[class*="review"] .zPfVt, [class*="review"] .pui__vn15t2').forEach(el => {
                const text = el.textContent?.trim()
                if (text && text.length > 5) result.reviews.push(text.slice(0, 200))
              })

              return result
            }).catch(() => ({}))

            if (info.rt > 0) { r.rt = info.rt; gotRating++ }
            if (info.cnt > 0) r.cnt = info.cnt
            if (info.menuItems?.length) r.menuItems = info.menuItems.slice(0, 10)
            if (info.hours && info.hours.length > 2) r.hours = info.hours
            if (info.reviews?.length) r.rv = info.reviews.slice(0, 5)
          } catch (e) { /* frame access failed */ }
        }
      }

      // GraphQL 데이터에서도 추출 시도
      if (placeData) {
        const extractFromGql = (obj) => {
          if (!obj || typeof obj !== 'object') return
          // 재귀적으로 visitorReviewScore 등 찾기
          for (const [key, val] of Object.entries(obj)) {
            if (key === 'visitorReviewScore' && val && r.rt === 0) {
              r.rt = parseFloat(val) || 0
              if (r.rt > 0) gotRating++
            }
            if (key === 'visitorReviewCount' && val) r.cnt = parseInt(val) || r.cnt
            if (key === 'menus' && Array.isArray(val) && !r.menuItems?.length) {
              r.menuItems = val.slice(0, 10).map(m => ({
                name: (m.name || m.menuName || '').trim(),
                price: parseInt((m.price || '').toString().replace(/[^0-9]/g, '')) || 0
              })).filter(m => m.name)
            }
            if (key === 'items' && Array.isArray(val) && val[0]?.body && !r.rv?.length) {
              r.rv = val.slice(0, 5).map(v => (v.body || '').trim()).filter(Boolean)
            }
            if (typeof val === 'object' && val !== null) extractFromGql(val)
          }
        }
        extractFromGql(placeData)
      }

      // 태그 업데이트
      if (r.rt >= 4.5 && !r.tags.includes('고평점')) r.tags.push('고평점')
      if (r.cnt >= 500 && !r.tags.includes('리뷰많음')) r.tags.push('리뷰많음')

      page.removeListener('response', responseHandler)
      detailDone.add(r.naverPlaceId)

      await sleep(1500 + Math.random() * 1000)
    } catch (e) {
      detailDone.add(r.naverPlaceId)
      await sleep(2000)
    }
  }

  await browser.close()

  // 최종 저장
  saveProgress()

  // 기존 식당명 중복 제거 후 최종 파일 저장
  let existingNames = new Set()
  try {
    const raw = fs.readFileSync('/tmp/samseong_names.json', 'utf-8')
    existingNames = new Set(JSON.parse(raw).map(n => n.trim().toLowerCase()))
  } catch (e) {}

  const results = data.restaurants.filter(r => {
    const norm = r.name.trim().toLowerCase().replace(/\s+/g, '')
    for (const ex of existingNames) {
      if (norm === ex.replace(/\s+/g, '')) return false
    }
    return true
  })

  fs.writeFileSync(FINAL_FILE, JSON.stringify(results, null, 2))

  console.log(`\n✅ 완료!`)
  console.log(`   총: ${results.length}개`)
  console.log(`   평점 있음: ${results.filter(r => r.rt > 0).length}`)
  console.log(`   메뉴 있음: ${results.filter(r => r.menuItems?.length > 0).length}`)
  console.log(`   리뷰 있음: ${results.filter(r => r.rv?.length > 0).length}`)
  console.log(`   이미지 있음: ${results.filter(r => r.imageUrl).length}`)
}

main().catch(e => {
  console.error('오류:', e)
  saveProgress()
  process.exit(1)
})
