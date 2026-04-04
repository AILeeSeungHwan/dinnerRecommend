#!/usr/bin/env node
/**
 * 기존 288개 식당 네이버 데이터 업데이트
 * 1단계: 식당명으로 네이버 플레이스 검색 → placeId 획득 (innerText 파싱)
 * 2단계: 상세 페이지 방문 → cnt, menuItems, rv, imageUrl 등 수집
 */

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, 'naver-data')
const PROGRESS_FILE = path.join(OUT_DIR, 'update-288-progress.json')
const RESULT_FILE = path.join(OUT_DIR, 'existing-288-updated.json')

// 기존 288개 식당 추출
function extractExisting288() {
  const content = fs.readFileSync(path.join(__dirname, '..', 'data', 'samseong.js'), 'utf-8')
  const restaurants = []
  const regex = /\{\s*name:\s*['"]([^'"]+)['"]/g
  let match
  let idx = 0

  while ((match = regex.exec(content)) !== null) {
    idx++
    const blockEnd = content.indexOf('},', match.index)
    const block = content.slice(match.index, blockEnd > 0 ? blockEnd : match.index + 2000)

    if (!block.includes('naverPlaceId')) {
      const addrMatch = block.match(/addr:\s*['"]([^'"]+)['"]/)
      const catMatch = block.match(/cat:\s*\[([^\]]*)\]/)

      restaurants.push({
        name: match[1],
        addr: addrMatch ? addrMatch[1] : '',
        cat: catMatch ? catMatch[1].replace(/['"]/g, '').split(',').map(s => s.trim()).filter(Boolean) : [],
        idx: idx - 1
      })
    }
  }
  return restaurants
}

const existing = extractExisting288()
console.log(`기존 식당: ${existing.length}개`)

// 진행 상태 로드
let progress = { searched: {}, detailed: {} }
try {
  progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'))
  console.log(`이미 검색: ${Object.keys(progress.searched).length}개`)
  console.log(`이미 상세: ${Object.keys(progress.detailed).length}개`)
} catch (e) {}

function saveProgress() {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2))
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
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
    if (['font', 'media'].includes(t)) req.abort()
    else req.continue()
  })

  // ========== 1단계: 검색 → placeId 찾기 ==========
  console.log('\n=== 1단계: 검색 → placeId 찾기 ===\n')

  const needSearch = existing.filter(r => !progress.searched[r.name])
  console.log(`검색 필요: ${needSearch.length}개`)

  let searchCount = 0
  let foundCount = Object.values(progress.searched).filter(s => s.naverPlaceId).length

  for (const r of needSearch) {
    searchCount++
    if (searchCount % 10 === 0) {
      console.log(`검색 진행: ${searchCount}/${needSearch.length} (발견: ${foundCount})`)
      saveProgress()
    }

    try {
      const query = encodeURIComponent(`삼성역 ${r.name}`)

      // 네이버 플레이스 검색 사용 (pcmap)
      await page.goto(`https://pcmap.place.naver.com/place/list?query=${query}`, {
        waitUntil: 'networkidle2', timeout: 15000
      }).catch(() => {})
      await sleep(3000)

      // 검색 결과에서 첫 번째 식당 링크 추출
      const searchResult = await page.evaluate((targetName) => {
        // 검색 결과 리스트에서 링크 찾기
        const links = document.querySelectorAll('a[href*="/restaurant/"]')
        if (links.length > 0) {
          const nameNorm = targetName.replace(/\s+/g, '').toLowerCase()

          for (const link of links) {
            const text = link.textContent || ''
            const linkName = text.replace(/\s+/g, '').toLowerCase()
            const href = link.href || ''
            const idMatch = href.match(/\/restaurant\/(\d+)/)

            if (idMatch && (linkName.includes(nameNorm) || nameNorm.includes(linkName.slice(0, 3)))) {
              return {
                naverPlaceId: idMatch[1],
                name: text.trim()
              }
            }
          }

          // 첫 번째 결과라도 반환
          const first = links[0]
          const idMatch = (first.href || '').match(/\/restaurant\/(\d+)/)
          if (idMatch) {
            return {
              naverPlaceId: idMatch[1],
              name: (first.textContent || '').trim()
            }
          }
        }

        // 링크가 없으면 텍스트에서 placeId 추출 시도
        const bodyText = document.body?.innerHTML || ''
        const placeMatch = bodyText.match(/\/restaurant\/(\d+)/)
        if (placeMatch) {
          return { naverPlaceId: placeMatch[1], name: '' }
        }

        return null
      }, r.name).catch(() => null)

      if (searchResult && searchResult.naverPlaceId) {
        // 이미지도 검색 결과에서 가져오기
        const imageUrl = await page.evaluate(() => {
          const img = document.querySelector('img[src*="pstatic.net"][src*="place"]')
          return img ? img.src : ''
        }).catch(() => '')

        progress.searched[r.name] = {
          naverPlaceId: searchResult.naverPlaceId,
          naverName: searchResult.name,
          imageUrl: imageUrl
        }
        foundCount++
      } else {
        // 일반 네이버 지도 검색으로 재시도
        await page.goto(`https://map.naver.com/p/search/${query}`, {
          waitUntil: 'networkidle2', timeout: 15000
        }).catch(() => {})
        await sleep(3000)

        // iframe 내부 검사
        const frames = page.frames()
        let found = false

        for (const frame of frames) {
          try {
            const frameResult = await frame.evaluate((targetName) => {
              const links = document.querySelectorAll('a[href*="/restaurant/"], a[href*="place/"]')
              for (const link of links) {
                const href = link.href || ''
                const idMatch = href.match(/(?:restaurant|place)\/(\d+)/)
                if (idMatch) {
                  return { naverPlaceId: idMatch[1], name: link.textContent?.trim() || '' }
                }
              }
              // HTML에서 placeId 추출
              const html = document.body?.innerHTML || ''
              const m = html.match(/(?:restaurant|place)\/(\d+)/)
              if (m) return { naverPlaceId: m[1], name: '' }
              return null
            }, r.name).catch(() => null)

            if (frameResult?.naverPlaceId) {
              progress.searched[r.name] = {
                naverPlaceId: frameResult.naverPlaceId,
                naverName: frameResult.name,
                imageUrl: ''
              }
              foundCount++
              found = true
              break
            }
          } catch (e) {}
        }

        if (!found) {
          progress.searched[r.name] = { notFound: true }
        }
      }

      await sleep(1500 + Math.random() * 1000)
    } catch (e) {
      progress.searched[r.name] = { error: e.message }
      await sleep(2000)
    }
  }

  saveProgress()

  const found = Object.values(progress.searched).filter(s => s.naverPlaceId)
  console.log(`\n검색 완료: ${found.length}개 발견 / ${existing.length}개 중\n`)

  // ========== 2단계: 상세 정보 수집 ==========
  console.log('=== 2단계: 상세 정보 수집 ===\n')

  const needDetail = existing.filter(r => {
    const s = progress.searched[r.name]
    return s && s.naverPlaceId && !progress.detailed[r.name]
  })
  console.log(`상세 수집 필요: ${needDetail.length}개`)

  let detailCount = 0
  let gotCnt = 0, gotMenu = 0, gotRv = 0

  for (const r of needDetail) {
    detailCount++
    if (detailCount % 10 === 0) {
      console.log(`상세 진행: ${detailCount}/${needDetail.length} (cnt:${gotCnt}, menu:${gotMenu}, rv:${gotRv})`)
      saveProgress()
    }

    const s = progress.searched[r.name]
    const placeId = s.naverPlaceId

    try {
      // 홈 탭
      await page.goto(`https://pcmap.place.naver.com/restaurant/${placeId}/home`, {
        waitUntil: 'networkidle2', timeout: 15000
      }).catch(() => {})
      await sleep(2500)

      const homeInfo = await page.evaluate(() => {
        const text = document.body?.innerText || ''
        const res = { cnt: 0, blogCnt: 0, hours: '', tel: '', parking: false, reservation: false, imageUrl: '' }

        const reviewMatch = text.match(/방문자\s*리뷰\s*([\d,]+)/)
        if (reviewMatch) res.cnt = parseInt(reviewMatch[1].replace(/,/g, ''))

        const blogMatch = text.match(/블로그\s*리뷰\s*([\d,]+)/)
        if (blogMatch) res.blogCnt = parseInt(blogMatch[1].replace(/,/g, ''))

        const telMatch = text.match(/(0\d{1,2}-\d{3,4}-\d{4})/)
        if (telMatch) res.tel = telMatch[1]

        const hoursMatch = text.match(/(\d{1,2}:\d{2}에 영업 시작)|(\d{1,2}:\d{2}에 영업 종료)/)
        if (hoursMatch) res.hours = hoursMatch[0]

        const facMatch = text.match(/편의\n(.+)/)
        if (facMatch) {
          const facs = facMatch[1]
          res.parking = /주차/.test(facs)
          res.reservation = /예약/.test(facs)
        }

        // 이미지
        const imgEl = document.querySelector('img[src*="pstatic.net"]')
        if (imgEl && imgEl.src) res.imageUrl = imgEl.src

        return res
      }).catch(() => ({}))

      // 메뉴 탭
      await page.goto(`https://pcmap.place.naver.com/restaurant/${placeId}/menu/list`, {
        waitUntil: 'networkidle2', timeout: 10000
      }).catch(() => {})
      await sleep(1500)

      const menuInfo = await page.evaluate(() => {
        const text = document.body?.innerText || ''
        const menus = []
        const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
        for (let i = 0; i < lines.length - 1; i++) {
          const name = lines[i]
          const next = lines[i + 1]
          const priceMatch = next.match(/^([\d,]+)원$/)
          if (priceMatch && name.length >= 2 && name.length <= 30 && !/^(대표|인기|추천|메뉴|홈|소식|리뷰|사진|정보)$/.test(name)) {
            menus.push({
              name,
              price: parseInt(priceMatch[1].replace(/,/g, ''))
            })
          }
        }
        return menus
      }).catch(() => [])

      // 리뷰 탭
      await page.goto(`https://pcmap.place.naver.com/restaurant/${placeId}/review/visitor`, {
        waitUntil: 'networkidle2', timeout: 10000
      }).catch(() => {})
      await sleep(1500)

      const reviews = await page.evaluate(() => {
        const rvEls = document.querySelectorAll('[class*="review"] [class*="text"], [class*="zPfVt"], [class*="pui__vn15t2"]')
        if (rvEls.length > 0) {
          return Array.from(rvEls).slice(0, 5).map(el => el.textContent?.trim()).filter(t => t && t.length > 10)
        }
        const text = document.body?.innerText || ''
        const lines = text.split('\n').filter(l => l.trim().length > 20 && l.trim().length < 200)
        return lines.slice(0, 5)
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
        imageUrl: s.imageUrl || homeInfo.imageUrl || '',
        menuItems: menuInfo.slice(0, 10),
        rv: (reviews || []).slice(0, 5).map(rv => rv.slice(0, 200)),
      }

      if (detail.cnt > 0) gotCnt++
      if (detail.menuItems.length > 0) gotMenu++
      if (detail.rv.length > 0) gotRv++

      progress.detailed[r.name] = detail

      if (detailCount <= 5) {
        console.log(`  [${r.name}] cnt=${detail.cnt}, menus=${detail.menuItems.length}, rv=${detail.rv.length}, tel=${detail.tel}`)
      }

      await sleep(1500 + Math.random() * 1000)
    } catch (e) {
      progress.detailed[r.name] = { error: e.message }
      await sleep(2000)
    }
  }

  await browser.close()
  saveProgress()

  // 최종 결과
  const results = existing.map(r => {
    const s = progress.searched[r.name] || {}
    const d = progress.detailed[r.name] || {}
    return { originalName: r.name, originalAddr: r.addr, originalCat: r.cat, ...s, ...d }
  })
  fs.writeFileSync(RESULT_FILE, JSON.stringify(results, null, 2))

  const withCnt = results.filter(r => r.cnt > 0).length
  const withMenu = results.filter(r => r.menuItems?.length > 0).length
  const withRv = results.filter(r => r.rv?.length > 0).length
  const withImage = results.filter(r => r.imageUrl).length

  console.log(`\n✅ 완료!`)
  console.log(`   총: ${results.length}개`)
  console.log(`   placeId 발견: ${found.length}개`)
  console.log(`   리뷰수 있음: ${withCnt}`)
  console.log(`   메뉴 있음: ${withMenu}`)
  console.log(`   리뷰 있음: ${withRv}`)
  console.log(`   이미지 있음: ${withImage}`)
}

main().catch(e => { console.error(e); saveProgress(); process.exit(1) })
