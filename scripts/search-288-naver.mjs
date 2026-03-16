#!/usr/bin/env node
/**
 * 기존 288개 식당 → 네이버 placeId 찾기 (map.naver.com API intercept)
 * map.naver.com/p/search/{query} 에서 API 호출을 가로채서 placeId 추출
 */

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, 'naver-data')
const PROGRESS_FILE = path.join(OUT_DIR, 'update-288-progress.json')
const CHECKPOINT_FILE = path.join(OUT_DIR, 'samseong-browser-checkpoint.json')

// 기존 288개 추출
function extractExisting288() {
  const content = fs.readFileSync(path.join(__dirname, '..', 'data', 'samseong.js'), 'utf-8')
  const restaurants = []
  const regex = /\{\s*name:\s*['"]([^'"]+)['"]/g
  let match
  while ((match = regex.exec(content)) !== null) {
    const blockEnd = content.indexOf('},', match.index)
    const block = content.slice(match.index, blockEnd > 0 ? blockEnd : match.index + 2000)
    if (!block.includes('naverPlaceId')) {
      const addrMatch = block.match(/addr:\s*['"]([^'"]+)['"]/)
      restaurants.push({
        name: match[1],
        addr: addrMatch ? addrMatch[1] : '',
      })
    }
  }
  return restaurants
}

// 이미 708개에서 크롤링한 데이터에서 이름 매칭 시도
function matchFromExisting708() {
  try {
    const data = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf-8'))
    const map = new Map()
    for (const r of data.restaurants) {
      if (r.naverPlaceId) {
        // 정규화된 이름 → placeId 매핑
        const normName = r.name.replace(/\s+/g, '').toLowerCase()
        map.set(normName, r)
        // 짧은 이름으로도 매핑 (접미사 제거)
        const short = r.name.replace(/ (삼성역점|삼성점|삼성동점|코엑스점|본점|삼성역|삼성본점)$/, '').replace(/\s+/g, '').toLowerCase()
        if (short !== normName) map.set(short, r)
      }
    }
    return map
  } catch (e) { return new Map() }
}

const existing = extractExisting288()
console.log(`기존 식당: ${existing.length}개`)

// 먼저 708개 데이터에서 이름 매칭 시도
const existing708Map = matchFromExisting708()
console.log(`708개 데이터에서 매칭 가능: ${existing708Map.size}개 엔트리`)

let progress = { searched: {}, detailed: {} }
try {
  progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'))
} catch (e) {}

// 이름 매칭으로 먼저 찾기
let matchedFromDB = 0
for (const r of existing) {
  if (progress.searched[r.name]?.naverPlaceId) continue

  const normName = r.name.replace(/\s+/g, '').toLowerCase()
  const shortName = r.name.replace(/ (삼성역점|삼성점|삼성동점|코엑스점|본점|삼성역|삼성본점|강남점|대치점|삼성코엑스|2호점|3호점)$/, '').replace(/\s+/g, '').toLowerCase()

  const match = existing708Map.get(normName) || existing708Map.get(shortName)
  if (match) {
    progress.searched[r.name] = {
      naverPlaceId: match.naverPlaceId,
      naverName: match.name,
      imageUrl: match.imageUrl || '',
    }
    matchedFromDB++
  }
}
console.log(`708개 DB에서 매칭: ${matchedFromDB}개\n`)

function saveProgress() {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2))
}
saveProgress()

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')

  // 이미지/폰트/스타일 차단
  await page.setRequestInterception(true)
  page.on('request', req => {
    const t = req.resourceType()
    if (['image', 'font', 'media', 'stylesheet'].includes(t)) req.abort()
    else req.continue()
  })

  // ========== 검색으로 placeId 찾기 ==========
  const needSearch = existing.filter(r => {
    const s = progress.searched[r.name]
    return !s || (!s.naverPlaceId && !s.notFound)
  })
  console.log(`네이버 검색 필요: ${needSearch.length}개\n`)

  let searchCount = 0
  let foundCount = Object.values(progress.searched).filter(s => s.naverPlaceId).length

  for (const r of needSearch) {
    searchCount++
    if (searchCount % 10 === 0) {
      console.log(`검색: ${searchCount}/${needSearch.length} (총 발견: ${foundCount})`)
      saveProgress()
    }

    try {
      const query = encodeURIComponent(`${r.name} 삼성역`)
      let apiResult = null

      const responseHandler = async (response) => {
        const url = response.url()
        // 네이버 지도 검색 API 응답 감지
        if (url.includes('search') && (url.includes('allSearch') || url.includes('place') || url.includes('nx/search'))) {
          try {
            const text = await response.text().catch(() => '')
            if (text.length > 200) {
              try {
                const json = JSON.parse(text)
                if (!apiResult) apiResult = json
              } catch (e) {}
            }
          } catch (e) {}
        }
      }

      page.on('response', responseHandler)

      await page.goto(`https://map.naver.com/p/search/${query}`, {
        waitUntil: 'networkidle0', timeout: 15000
      }).catch(() => {})
      await sleep(2500)

      page.off('response', responseHandler)

      // API 결과에서 placeId 추출
      if (apiResult) {
        const places = apiResult?.result?.place?.list ||
                       apiResult?.result?.place?.items ||
                       apiResult?.place?.list ||
                       []

        if (places.length > 0) {
          const nameNorm = r.name.replace(/\s+/g, '').toLowerCase()
          let best = places[0]

          for (const p of places) {
            const pName = (p.name || p.title || '').replace(/<[^>]*>/g, '').replace(/\s+/g, '').toLowerCase()
            if (pName === nameNorm) { best = p; break }
            if (pName.includes(nameNorm) || nameNorm.includes(pName)) { best = p }
          }

          const cats = best.category ? (typeof best.category === 'string' ? best.category.split(',') : Array.isArray(best.category) ? best.category : []) : []

          progress.searched[r.name] = {
            naverPlaceId: best.id || best.placeId || '',
            naverName: (best.name || best.title || '').replace(/<[^>]*>/g, ''),
            imageUrl: best.thumUrl || best.imageUrl || '',
            categories: cats.map(c => c.trim()),
          }
          foundCount++
        } else {
          progress.searched[r.name] = { notFound: true }
        }
      } else {
        // API 가로채기 실패 — HTML에서 직접 추출
        const htmlResult = await page.evaluate(() => {
          const html = document.body?.innerHTML || ''
          const match = html.match(/\/restaurant\/(\d+)/)
          if (match) return { naverPlaceId: match[1] }

          // iframe 확인
          const iframes = document.querySelectorAll('iframe')
          for (const iframe of iframes) {
            const src = iframe.src || ''
            const m = src.match(/\/restaurant\/(\d+)/)
            if (m) return { naverPlaceId: m[1] }
          }
          return null
        }).catch(() => null)

        if (htmlResult?.naverPlaceId) {
          progress.searched[r.name] = {
            naverPlaceId: htmlResult.naverPlaceId,
            naverName: '',
            imageUrl: '',
          }
          foundCount++
        } else {
          progress.searched[r.name] = { notFound: true }
        }
      }

      await sleep(1500 + Math.random() * 500)
    } catch (e) {
      progress.searched[r.name] = { error: e.message }
      await sleep(1500)
    }
  }

  saveProgress()

  const totalFound = Object.values(progress.searched).filter(s => s.naverPlaceId).length
  console.log(`\n검색 완료: ${totalFound}개 발견\n`)

  // ========== 상세 수집 ==========
  console.log('=== 상세 수집 시작 ===\n')

  const needDetail = existing.filter(r => {
    const s = progress.searched[r.name]
    return s?.naverPlaceId && !progress.detailed[r.name]
  })
  console.log(`상세 필요: ${needDetail.length}개`)

  let detailCount = 0, gotCnt = 0, gotMenu = 0, gotRv = 0

  for (const r of needDetail) {
    detailCount++
    if (detailCount % 10 === 0) {
      console.log(`상세: ${detailCount}/${needDetail.length} (cnt:${gotCnt}, menu:${gotMenu}, rv:${gotRv})`)
      saveProgress()
    }

    const placeId = progress.searched[r.name].naverPlaceId

    try {
      // 홈
      await page.goto(`https://pcmap.place.naver.com/restaurant/${placeId}/home`, {
        waitUntil: 'networkidle2', timeout: 12000
      }).catch(() => {})
      await sleep(2000)

      const homeInfo = await page.evaluate(() => {
        const text = document.body?.innerText || ''
        const res = { cnt: 0, blogCnt: 0, hours: '', tel: '', parking: false, reservation: false }
        const rm = text.match(/방문자\s*리뷰\s*([\d,]+)/); if (rm) res.cnt = parseInt(rm[1].replace(/,/g, ''))
        const bm = text.match(/블로그\s*리뷰\s*([\d,]+)/); if (bm) res.blogCnt = parseInt(bm[1].replace(/,/g, ''))
        const tm = text.match(/(0\d{1,2}-\d{3,4}-\d{4})/); if (tm) res.tel = tm[1]
        const hm = text.match(/(\d{1,2}:\d{2}에 영업 시작)|(\d{1,2}:\d{2}에 영업 종료)/); if (hm) res.hours = hm[0]
        const fm = text.match(/편의\n(.+)/); if (fm) { res.parking = /주차/.test(fm[1]); res.reservation = /예약/.test(fm[1]) }
        const img = document.querySelector('img[src*="pstatic.net"]'); if (img) res.imageUrl = img.src
        return res
      }).catch(() => ({}))

      // 메뉴
      await page.goto(`https://pcmap.place.naver.com/restaurant/${placeId}/menu/list`, {
        waitUntil: 'networkidle2', timeout: 8000
      }).catch(() => {})
      await sleep(1200)

      const menuInfo = await page.evaluate(() => {
        const text = document.body?.innerText || ''
        const menus = []
        const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
        for (let i = 0; i < lines.length - 1; i++) {
          const name = lines[i]
          const next = lines[i + 1]
          const pm = next.match(/^([\d,]+)원$/)
          if (pm && name.length >= 2 && name.length <= 30 && !/^(대표|인기|추천|메뉴|홈|소식|리뷰|사진|정보)$/.test(name)) {
            menus.push({ name, price: parseInt(pm[1].replace(/,/g, '')) })
          }
        }
        return menus
      }).catch(() => [])

      // 리뷰
      await page.goto(`https://pcmap.place.naver.com/restaurant/${placeId}/review/visitor`, {
        waitUntil: 'networkidle2', timeout: 8000
      }).catch(() => {})
      await sleep(1200)

      const reviews = await page.evaluate(() => {
        const els = document.querySelectorAll('[class*="review"] [class*="text"], [class*="zPfVt"], [class*="pui__vn15t2"]')
        if (els.length > 0) return Array.from(els).slice(0, 5).map(el => el.textContent?.trim()).filter(t => t && t.length > 10)
        const text = document.body?.innerText || ''
        return text.split('\n').filter(l => l.trim().length > 20 && l.trim().length < 200).slice(0, 5)
      }).catch(() => [])

      const detail = {
        naverPlaceId: placeId,
        naverUrl: `https://map.naver.com/p/entry/place/${placeId}`,
        cnt: homeInfo.cnt || 0,
        naverBlogCnt: homeInfo.blogCnt || 0,
        hours: homeInfo.hours || '',
        tel: homeInfo.tel || '',
        parking: homeInfo.parking || false,
        reservation: homeInfo.reservation || false,
        imageUrl: progress.searched[r.name].imageUrl || homeInfo.imageUrl || '',
        menuItems: menuInfo.slice(0, 10),
        rv: (reviews || []).slice(0, 5).map(rv => rv.slice(0, 200)),
      }

      if (detail.cnt > 0) gotCnt++
      if (detail.menuItems.length > 0) gotMenu++
      if (detail.rv.length > 0) gotRv++

      progress.detailed[r.name] = detail

      if (detailCount <= 5) {
        console.log(`  [${r.name}] cnt=${detail.cnt}, menus=${detail.menuItems.length}, rv=${detail.rv.length}`)
      }

      await sleep(1500 + Math.random() * 800)
    } catch (e) {
      progress.detailed[r.name] = { error: e.message }
      await sleep(1500)
    }
  }

  await browser.close()
  saveProgress()

  // 결과 파일 저장
  const results = existing.map(r => {
    const s = progress.searched[r.name] || {}
    const d = progress.detailed[r.name] || {}
    return { originalName: r.name, originalAddr: r.addr, ...s, ...d }
  })
  fs.writeFileSync(path.join(OUT_DIR, 'existing-288-updated.json'), JSON.stringify(results, null, 2))

  console.log(`\n✅ 완료!`)
  console.log(`   총: ${results.length}개`)
  console.log(`   placeId 발견: ${totalFound}`)
  console.log(`   리뷰수: ${gotCnt}`)
  console.log(`   메뉴: ${gotMenu}`)
  console.log(`   리뷰: ${gotRv}`)
}

main().catch(e => { console.error(e); saveProgress(); process.exit(1) })
