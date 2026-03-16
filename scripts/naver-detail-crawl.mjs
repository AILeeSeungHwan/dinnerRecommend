#!/usr/bin/env node
/**
 * 네이버 지도 상세 정보 크롤링 + 추가 식당 수집
 * 기존 체크포인트의 212개 식당에 대해 상세 정보(평점, 메뉴, 리뷰) 수집
 * + 추가 검색어로 더 많은 식당 수집
 */

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, 'naver-data')
const CHECKPOINT_FILE = path.join(OUT_DIR, 'samseong-browser-checkpoint.json')
const FINAL_FILE = path.join(OUT_DIR, 'samseong-browser.json')

// 기존 식당명 로드 (중복 제거용)
let existingNames = new Set()
try {
  const raw = fs.readFileSync('/tmp/samseong_names.json', 'utf-8')
  existingNames = new Set(JSON.parse(raw).map(n => n.trim().toLowerCase()))
  console.log(`기존 식당: ${existingNames.size}개 로드`)
} catch (e) {
  console.warn('기존 식당명 로드 실패')
}

// 체크포인트 로드
let data = { restaurants: [], completedQueries: [] }
try {
  data = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf-8'))
  console.log(`체크포인트: ${data.restaurants.length}개 식당, ${data.completedQueries.length}개 쿼리`)
} catch (e) {
  console.error('체크포인트 로드 실패')
  process.exit(1)
}

function isDuplicate(name) {
  const norm = name.trim().toLowerCase()
    .replace(/\s+/g, '')
    .replace(/(삼성역점|삼성점|삼성동점|코엑스점|강남점|본점|직영점)$/, '')
  for (const existing of existingNames) {
    const existNorm = existing.replace(/\s+/g, '')
      .replace(/(삼성역점|삼성점|삼성동점|코엑스점|강남점|본점|직영점)$/, '')
    if (norm === existNorm) return true
    if (norm.length >= 2 && existNorm.length >= 2) {
      if (norm.includes(existNorm) || existNorm.includes(norm)) {
        if (Math.abs(norm.length - existNorm.length) <= 4) return true
      }
    }
  }
  return false
}

function detectCat(categories) {
  const catStr = (categories || []).join(' ')
  if (/고기|구이|삼겹|갈비|한우|소고기|불고기/.test(catStr)) return ['고기구이']
  if (/이자카야|야키토리|사케/.test(catStr)) return ['이자카야']
  if (/일식|초밥|스시|사시미|오마카세|롤|돈카츠|라멘|우동/.test(catStr)) return ['일식']
  if (/중식|중국|마라|짬뽕|짜장|훠궈/.test(catStr)) return ['중식']
  if (/양식|이탈리|파스타|피자|스테이크|프렌치|버거/.test(catStr)) return ['양식']
  if (/한식|한정식|백반|정식|찌개|전골|불백/.test(catStr)) return ['한식']
  if (/국밥|국물|설렁탕|곰탕|해장|순대/.test(catStr)) return ['국밥']
  if (/치킨|닭/.test(catStr)) return ['치킨']
  if (/족발|곱창|보쌈|막창/.test(catStr)) return ['족발곱창']
  if (/카페|커피|디저트|베이커리|브런치/.test(catStr)) return ['카페']
  if (/술집|포차|바|호프|펍/.test(catStr)) return ['야장']
  if (/베트남|쌀국수|태국|인도|아시안/.test(catStr)) return ['아시안']
  if (/횟집|회|해산물|조개|수산/.test(catStr)) return ['해산물']
  if (/뷔페|샤브/.test(catStr)) return ['뷔페']
  if (/분식|떡볶이|김밥/.test(catStr)) return ['분식']
  return ['기타']
}

function autoTags(r) {
  const tags = []
  const allText = [r.name, ...(r.categories||[]), ...(r.keywords||[])].join(' ')
  if (/혼밥|1인|혼자/.test(allText)) tags.push('혼밥가능')
  if (/가성비|저렴|착한/.test(allText)) tags.push('가성비')
  if (/점심|런치/.test(allText)) tags.push('점심추천')
  if (/주차/.test(allText)) tags.push('주차가능')
  if (/단체|회식|룸/.test(allText)) tags.push('단체가능')
  if (/데이트|분위기|커플/.test(allText)) tags.push('데이트')
  if (/웨이팅|줄서/.test(allText)) tags.push('웨이팅맛집')
  if (/심야|새벽|늦게/.test(allText)) tags.push('심야영업')
  if (r.rt >= 4.5) tags.push('고평점')
  if (r.cnt >= 500) tags.push('리뷰많음')
  return tags
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

// 추가 검색어 (기존 체크포인트에서 완료되지 않은 것 + 새로운 것)
const EXTRA_QUERIES = [
  '삼성역 해장', '삼성역 설렁탕',
  '삼성역 족발', '삼성역 곱창', '삼성역 보쌈',
  '삼성역 분식', '삼성역 떡볶이',
  '삼성역 베트남', '삼성역 태국', '삼성역 인도',
  '삼성역 회', '삼성역 횟집', '삼성역 해산물',
  '삼성역 돈카츠', '삼성역 라멘', '삼성역 우동',
  '삼성역 피자', '삼성역 햄버거', '삼성역 샌드위치',
  '삼성역 뷔페', '삼성역 샤브샤브',
  '대치동 맛집', '대치동 식당',
  '코엑스몰 맛집', '코엑스몰 식당',
  '삼성역 점심', '삼성역 저녁', '삼성역 혼밥',
  '삼성역 회식', '삼성역 데이트',
  // 추가 검색어
  '삼성역 백반', '삼성역 정식', '삼성역 불백',
  '삼성역 쌀국수', '삼성역 커리',
  '삼성역 냉면', '삼성역 칼국수', '삼성역 수제비',
  '삼성역 닭갈비', '삼성역 닭볶음탕',
  '삼성역 감자탕', '삼성역 찌개',
  '삼성역 한정식', '삼성역 쭈꾸미',
  '삼성역 양꼬치', '삼성역 탕수육',
  '봉은사로 맛집', '봉은사로 식당',
  '대치역 맛집', '선릉역 맛집',
  '삼성역 오마카세', '삼성역 코스요리',
  '삼성역 와인바', '삼성역 칵테일',
  '삼성역 고깃집', '삼성역 소고기',
  '삼성역 곱도리', '삼성역 대창',
  '삼성역 디저트', '삼성역 베이커리',
  '삼성역 주점', '삼성역 호프',
  '코엑스 점심', '코엑스 저녁',
  '삼성동 한식', '삼성동 일식', '삼성동 양식',
  '삼성동 중식', '삼성동 고기', '삼성동 술집',
  '테헤란로 점심', '테헤란로 한식',
  '삼성역 김밥', '삼성역 도시락',
  '삼성역 순두부', '삼성역 제육',
  '삼성역 돈까스', '삼성역 카레',
  '삼성역 타코', '삼성역 멕시칸',
]

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 1080 })
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')

  const collected = new Map()
  for (const r of data.restaurants) {
    collected.set(r.naverPlaceId || r.name, r)
  }
  const completedQueries = new Set(data.completedQueries || [])

  // API 응답 인터셉트
  const apiResponses = []
  page.on('response', async (response) => {
    const url = response.url()
    try {
      if (url.includes('/api/search/allSearch') || url.includes('/api/search/instant-search')) {
        const json = await response.json().catch(() => null)
        if (json) apiResponses.push({ type: 'search', data: json })
      }
    } catch (e) { /* ignore */ }
  })

  // Phase 1: 추가 검색으로 더 많은 식당 수집
  const pendingQueries = EXTRA_QUERIES.filter(q => !completedQueries.has(q))
  console.log(`\n📍 Phase 1: 추가 검색 (${pendingQueries.length}개 쿼리)`)

  for (const query of pendingQueries) {
    console.log(`🔍 "${query}" (수집: ${collected.size})`)
    try {
      apiResponses.length = 0
      await page.goto(`https://map.naver.com/v5/search/${encodeURIComponent(query)}`, {
        waitUntil: 'networkidle2', timeout: 30000
      })
      await sleep(3000)

      // 스크롤
      for (let i = 0; i < 10; i++) {
        await page.evaluate(() => {
          const el = document.querySelector('.Ryr1F') || document.querySelector('#_pcmap_list_scroll_container')
          if (el) el.scrollTop = el.scrollHeight
          else window.scrollTo(0, document.body.scrollHeight)
        }).catch(() => {})
        await sleep(1200)
      }

      let found = 0
      for (const resp of apiResponses) {
        if (resp.type === 'search' && resp.data?.result?.place?.list) {
          for (const p of resp.data.result.place.list) {
            const placeId = p.id || p.sid || ''
            const name = (p.name || p.display || '').trim()
            if (!name || collected.has(placeId) || collected.has(name) || isDuplicate(name)) continue

            const cats = (p.category || []).map(c => typeof c === 'string' ? c : c?.name || '')
            const catStr = cats.join(' ')
            if (/숙박|호텔|모텔|병원|약국|편의점|마트|주유소|학교|학원|미용|네일|피부|운동|헬스|요가|은행|주차/.test(catStr)) continue

            const lat = parseFloat(p.y || p.lat || 0)
            const lng = parseFloat(p.x || p.lng || 0)
            if (lat && lng && (lat < 37.495 || lat > 37.525 || lng < 127.045 || lng > 127.080)) continue

            const restaurant = {
              naverPlaceId: placeId, name,
              type: cats[0] || '음식점', categories: cats,
              cat: detectCat(cats),
              rt: parseFloat(p.visitorReviewScore || p.reviewScore || 0) || 0,
              cnt: parseInt(p.visitorReviewCount || p.reviewCount || 0) || 0,
              addr: (p.address || p.roadAddress || '').trim(),
              hours: (p.businessHours || p.openHours || '').trim(),
              tel: (p.tel || p.phone || '').trim(),
              lat, lng,
              priceRange: '', tags: [], moods: [], scene: [], wx: [], rv: [],
              menuItems: [], keywords: [],
              naverUrl: placeId ? `https://map.naver.com/v5/entry/place/${placeId}` : '',
              imageUrl: (p.thumUrl || p.thumbnailUrl || p.imageUrl || '').trim(),
            }
            restaurant.tags = autoTags(restaurant)
            collected.set(placeId || name, restaurant)
            found++
          }
        }
      }
      console.log(`  → ${found}개 신규`)
      completedQueries.add(query)
      await sleep(2000 + Math.random() * 2000)
    } catch (e) {
      console.error(`  ❌ ${e.message}`)
      await sleep(5000)
    }
  }

  // Phase 2: placeId가 있는 식당의 상세 페이지에서 평점/메뉴/리뷰 수집
  console.log(`\n📋 Phase 2: 상세 정보 수집 (${collected.size}개 식당)`)

  const needDetail = [...collected.values()].filter(r => r.naverPlaceId && r.rt === 0)
  console.log(`  평점 없는 식당: ${needDetail.length}개`)

  let detailIdx = 0
  for (const r of needDetail) {
    detailIdx++
    if (detailIdx % 10 === 0) {
      console.log(`  진행: ${detailIdx}/${needDetail.length}`)
      // 중간 저장
      const saveData = { restaurants: [...collected.values()], completedQueries: [...completedQueries], timestamp: new Date().toISOString() }
      fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(saveData, null, 2))
    }

    try {
      // 네이버 플레이스 페이지 직접 방문
      const placeUrl = `https://pcmap.place.naver.com/restaurant/${r.naverPlaceId}/home`
      await page.goto(placeUrl, { waitUntil: 'networkidle2', timeout: 15000 })
      await sleep(2000)

      // DOM에서 정보 추출
      const details = await page.evaluate(() => {
        const result = { rt: 0, cnt: 0, menuItems: [], hours: '', tel: '', reviews: [], imageUrl: '' }

        // 평점
        const ratingEl = document.querySelector('.PXMot em, .LXIwF em, .place_section_content .total_rating em')
        if (ratingEl) result.rt = parseFloat(ratingEl.textContent) || 0

        // 방문자 리뷰 수
        const cntEls = document.querySelectorAll('.place_section_count em, .PXMot .total_count')
        for (const el of cntEls) {
          const num = parseInt((el.textContent || '').replace(/[^0-9]/g, ''))
          if (num > 0) { result.cnt = num; break }
        }

        // 리뷰 수 대안
        if (!result.cnt) {
          const reviewTab = document.querySelector('a[href*="review"] .place_blind + span, .flicking_panel a span')
          if (reviewTab) {
            const num = parseInt((reviewTab.textContent || '').replace(/[^0-9]/g, ''))
            if (num > 0) result.cnt = num
          }
        }

        // 메뉴
        document.querySelectorAll('.E2jtL, .VQvNs, [class*="menu_item"]').forEach(el => {
          const nameEl = el.querySelector('.lPzHi, .MENsT, [class*="name"]')
          const priceEl = el.querySelector('.GXS1X, .mkBm3, [class*="price"]')
          const name = nameEl?.textContent?.trim()
          const price = parseInt((priceEl?.textContent || '').replace(/[^0-9]/g, '')) || 0
          if (name) result.menuItems.push({ name, price })
        })

        // 영업시간
        const hoursEl = document.querySelector('.A_cdD, .MkTHd, [class*="bizHour"]')
        if (hoursEl) result.hours = hoursEl.textContent?.trim() || ''

        // 전화번호
        const telEl = document.querySelector('.xlx7Q, .jO09N, [class*="phone"] span')
        if (telEl) result.tel = telEl.textContent?.trim() || ''

        // 이미지
        const imgEl = document.querySelector('.K0PDV img, .place_thumb img, .fNygA img, .CB8aP img')
        if (imgEl) result.imageUrl = imgEl.src || imgEl.getAttribute('data-src') || ''

        // 방문자 리뷰 (처음 5개)
        document.querySelectorAll('.zPfVt, .pui__vn15t2, [class*="review_text"]').forEach(el => {
          const text = el.textContent?.trim()
          if (text && text.length > 5) result.reviews.push(text.slice(0, 200))
        })

        return result
      }).catch(() => ({}))

      if (details.rt > 0) r.rt = details.rt
      if (details.cnt > 0) r.cnt = details.cnt
      if (details.menuItems?.length) r.menuItems = details.menuItems.slice(0, 10)
      if (details.hours) r.hours = details.hours
      if (details.tel) r.tel = details.tel
      if (details.reviews?.length) r.rv = details.reviews.slice(0, 5)
      if (details.imageUrl && !r.imageUrl) r.imageUrl = details.imageUrl

      // 태그 업데이트
      r.tags = autoTags(r)

      await sleep(1500 + Math.random() * 1500)
    } catch (e) {
      // timeout 등 무시
      await sleep(2000)
    }
  }

  await browser.close()

  // 최종 저장
  const results = [...collected.values()]
    .filter(r => r.name && r.name.length >= 2)
    .filter(r => !isDuplicate(r.name))

  fs.writeFileSync(FINAL_FILE, JSON.stringify(results, null, 2))
  const saveData = { restaurants: results, completedQueries: [...completedQueries], timestamp: new Date().toISOString() }
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(saveData, null, 2))

  console.log(`\n✅ 완료!`)
  console.log(`   총 식당: ${results.length}개`)
  console.log(`   평점 있는 수: ${results.filter(r => r.rt > 0).length}`)
  console.log(`   메뉴 있는 수: ${results.filter(r => r.menuItems?.length > 0).length}`)
  console.log(`   이미지 있는 수: ${results.filter(r => r.imageUrl).length}`)
  console.log(`   저장: ${FINAL_FILE}`)
}

main().catch(e => {
  console.error('오류:', e)
  process.exit(1)
})
