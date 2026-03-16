#!/usr/bin/env node
/**
 * 네이버 지도 브라우저 크롤링 — 지역별 식당 수집
 * Puppeteer 기반, 기존 data/{region}.js 중복 제거
 *
 * 사용법: node scripts/naver-crawl-browser.mjs [region]
 *   예시: node scripts/naver-crawl-browser.mjs jamsil
 *         node scripts/naver-crawl-browser.mjs pangyo
 *         node scripts/naver-crawl-browser.mjs samseong (기본값)
 *
 * 출력: scripts/naver-data/{region}-browser.json
 */

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getRegionConfig, listRegions } from './region-config.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, 'naver-data')

// 지역 인자 파싱
const REGION = process.argv[2] || 'samseong'
if (REGION === '--help' || REGION === '-h') {
  console.log('사용법: node scripts/naver-crawl-browser.mjs [region]')
  console.log('지역:', listRegions().map(r => `${r.key} (${r.label})`).join(', '))
  process.exit(0)
}

let regionConfig
try {
  regionConfig = getRegionConfig(REGION)
} catch (e) {
  console.error(e.message)
  process.exit(1)
}

const OUT_FILE = path.join(OUT_DIR, `${REGION}-browser.json`)
const CHECKPOINT_FILE = path.join(OUT_DIR, `${REGION}-browser-checkpoint.json`)
const SEARCH_QUERIES = regionConfig.queries

console.log(`[${regionConfig.label}] 크롤링 시작`)

// 기존 식당명 로드 (중복 제거용)
let existingNames = new Set()
try {
  const namesFile = `/tmp/${REGION}_names.json`
  const raw = fs.readFileSync(namesFile, 'utf-8')
  existingNames = new Set(JSON.parse(raw).map(n => n.trim().toLowerCase()))
  console.log(`기존 식당: ${existingNames.size}개 로드`)
} catch (e) {
  // data 파일에서 직접 로드 시도
  try {
    const dataPath = path.join(__dirname, '..', regionConfig.dataFile)
    const mod = await import('file://' + dataPath)
    const data = mod.default || []
    existingNames = new Set(data.map(r => (r.name || '').trim().toLowerCase()))
    console.log(`기존 식당 (data 파일): ${existingNames.size}개 로드`)
  } catch (e2) {
    console.warn('기존 식당명 로드 실패, 중복 체크 없이 진행')
  }
}

// 체크포인트 로드
let collected = new Map() // placeId → restaurant data
let completedQueries = new Set()
try {
  if (fs.existsSync(CHECKPOINT_FILE)) {
    const cp = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf-8'))
    for (const r of cp.restaurants || []) {
      collected.set(r.naverPlaceId || r.name, r)
    }
    completedQueries = new Set(cp.completedQueries || [])
    console.log(`체크포인트 로드: ${collected.size}개 식당, ${completedQueries.size}개 쿼리 완료`)
  }
} catch (e) {
  console.warn('체크포인트 로드 실패, 처음부터 시작')
}

// 체크포인트 저장
function saveCheckpoint() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const data = {
    restaurants: [...collected.values()],
    completedQueries: [...completedQueries],
    timestamp: new Date().toISOString()
  }
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(data, null, 2))
}

// 유사 이름 매칭 (기존 데이터와 비교)
function isDuplicate(name) {
  const norm = name.trim().toLowerCase()
    .replace(/\s+/g, '')
    .replace(/(삼성역점|삼성점|삼성동점|코엑스점|강남점|판교점|잠실점|영통점|망포점|본점|직영점)$/, '')

  for (const existing of existingNames) {
    const existNorm = existing.replace(/\s+/g, '')
      .replace(/(삼성역점|삼성점|삼성동점|코엑스점|강남점|판교점|잠실점|영통점|망포점|본점|직영점)$/, '')
    if (norm === existNorm) return true
    // 포함 관계 체크 (짧은 쪽이 긴 쪽에 포함)
    if (norm.length >= 2 && existNorm.length >= 2) {
      if (norm.includes(existNorm) || existNorm.includes(norm)) {
        // 길이 차이가 적으면 같은 곳으로 판단
        if (Math.abs(norm.length - existNorm.length) <= 4) return true
      }
    }
  }
  return false
}

// 카테고리 매핑
function detectCat(categories) {
  const catStr = (categories || []).join(' ')
  if (/고기|구이|삼겹|갈비|한우|소고기|불고기/.test(catStr)) return ['고기구이']
  if (/이자카야|야키토리|사케/.test(catStr)) return ['이자카야']
  if (/일식|초밥|스시|사시미|오마카세|롤/.test(catStr)) return ['일식']
  if (/중식|중국|마라|짬뽕|짜장|훠궈/.test(catStr)) return ['중식']
  if (/양식|이탈리|파스타|피자|스테이크|프렌치/.test(catStr)) return ['양식']
  if (/한식|한정식|백반|정식|찌개|전골/.test(catStr)) return ['한식']
  if (/국밥|국물|설렁탕|곰탕|해장|순대/.test(catStr)) return ['국밥']
  if (/치킨|닭/.test(catStr)) return ['치킨']
  if (/족발|곱창|보쌈|막창/.test(catStr)) return ['족발곱창']
  if (/카페|커피|디저트|베이커리/.test(catStr)) return ['카페']
  if (/술집|포차|바|호프|펍/.test(catStr)) return ['야장']
  if (/베트남|쌀국수|분짜|반미/.test(catStr)) return ['아시안']
  if (/태국|팟타이|똠양/.test(catStr)) return ['아시안']
  if (/인도|커리|탄두리|난/.test(catStr)) return ['아시안']
  if (/횟집|회|해산물|조개/.test(catStr)) return ['해산물']
  if (/돈카츠|돈까스|라멘|라면|우동/.test(catStr)) return ['일식']
  if (/햄버거|버거/.test(catStr)) return ['양식']
  if (/뷔페|샤브/.test(catStr)) return ['뷔페']
  if (/분식|떡볶이|김밥/.test(catStr)) return ['분식']
  return ['기타']
}

// 태그 자동 생성
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
  if (/깔끔|청결/.test(allText)) tags.push('깔끔한곳')
  if (r.rt >= 4.5) tags.push('고평점')
  if (r.cnt >= 500) tags.push('리뷰많음')
  return tags
}

// 지역 좌표 범위 체크
function isInArea(lat, lng) {
  return regionConfig.isInArea(lat, lng)
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function main() {
  console.log('🚀 네이버 지도 브라우저 크롤링 시작')
  console.log(`검색 쿼리: ${SEARCH_QUERIES.length}개`)

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--window-size=1920,1080'
    ]
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 1080 })
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')

  // 네이버 지도 API 응답 인터셉트
  const apiResponses = []

  page.on('response', async (response) => {
    const url = response.url()
    try {
      if (url.includes('/api/search/allSearch') || url.includes('/api/search/instant-search')) {
        const json = await response.json().catch(() => null)
        if (json) apiResponses.push({ type: 'search', data: json })
      }
      if (url.includes('/graphql')) {
        const json = await response.json().catch(() => null)
        if (json) apiResponses.push({ type: 'graphql', data: json })
      }
    } catch (e) { /* ignore */ }
  })

  let totalNew = 0
  const pendingQueries = SEARCH_QUERIES.filter(q => !completedQueries.has(q))
  console.log(`남은 쿼리: ${pendingQueries.length}개`)

  for (const query of pendingQueries) {
    console.log(`\n🔍 검색: "${query}" (현재 수집: ${collected.size}개, 신규: ${totalNew}개)`)

    try {
      apiResponses.length = 0 // 이전 응답 클리어

      // 네이버 지도 검색
      const searchUrl = `https://map.naver.com/v5/search/${encodeURIComponent(query)}`
      await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 })
      await sleep(3000)

      // 검색 결과 리스트가 로드될 때까지 대기
      // iframe 내부에 결과가 있을 수 있음
      const frames = page.frames()
      let searchFrame = null
      for (const frame of frames) {
        const url = frame.url()
        if (url.includes('search') || url.includes('list')) {
          searchFrame = frame
          break
        }
      }

      const targetFrame = searchFrame || page

      // 스크롤하여 더 많은 결과 로드
      let scrollCount = 0
      const maxScrolls = 15

      while (scrollCount < maxScrolls) {
        try {
          // 결과 리스트 스크롤
          await targetFrame.evaluate(() => {
            const scrollable = document.querySelector('.Ryr1F') ||
                              document.querySelector('#_pcmap_list_scroll_container') ||
                              document.querySelector('[class*="scroll"]') ||
                              document.querySelector('.search_list_wrap')
            if (scrollable) {
              scrollable.scrollTop = scrollable.scrollHeight
            } else {
              window.scrollTo(0, document.body.scrollHeight)
            }
          }).catch(() => {})

          await sleep(1500)
          scrollCount++

          // "더보기" 버튼 클릭 시도
          try {
            const moreBtn = await targetFrame.$('a.btn_more, button[class*="more"], [class*="더보기"]')
            if (moreBtn) {
              await moreBtn.click()
              await sleep(2000)
            }
          } catch (e) { /* no more button */ }

        } catch (e) {
          break
        }
      }

      // API 응답에서 식당 데이터 추출
      let foundInQuery = 0
      for (const resp of apiResponses) {
        if (resp.type === 'search' && resp.data?.result?.place?.list) {
          const places = resp.data.result.place.list
          for (const p of places) {
            const placeId = p.id || p.sid || ''
            const name = (p.name || p.display || '').trim()
            if (!name) continue

            // 중복 체크 (이미 수집 or 기존 데이터)
            if (collected.has(placeId) || collected.has(name)) continue
            if (isDuplicate(name)) {
              // console.log(`  ⏭ 중복: ${name}`)
              continue
            }

            // 카테고리가 음식점인지 확인
            const cats = (p.category || []).map(c => typeof c === 'string' ? c : c?.name || '')
            const catStr = cats.join(' ')
            if (/숙박|호텔|모텔|병원|약국|편의점|마트|주유소|학교|학원|미용|네일|피부|운동|헬스|요가|은행|우체국|공원|주차/.test(catStr)) {
              continue
            }
            if (!/음식|식당|맛집|카페|레스토랑|구이|한식|일식|중식|양식|치킨|분식|국밥|면|밥|요리|주점|포차|이자카야|피자|버거|베이커리/.test(catStr) && catStr.length > 0) {
              continue // 음식점 관련이 아니면 스킵
            }

            // 좌표 체크
            const lat = parseFloat(p.y || p.lat || 0)
            const lng = parseFloat(p.x || p.lng || 0)
            if (!isInArea(lat, lng)) continue

            const restaurant = {
              naverPlaceId: placeId,
              name,
              type: cats[0] || '음식점',
              categories: cats,
              cat: detectCat(cats),
              rt: parseFloat(p.visitorReviewScore || p.reviewScore || 0) || 0,
              cnt: parseInt(p.visitorReviewCount || p.reviewCount || 0) || 0,
              addr: (p.address || p.roadAddress || '').trim(),
              hours: (p.businessHours || p.openHours || '').trim(),
              tel: (p.tel || p.phone || '').trim(),
              lat, lng,
              priceRange: '',
              tags: [],
              moods: [],
              scene: [],
              wx: [],
              rv: [],
              menuItems: [],
              keywords: [],
              naverUrl: placeId ? `https://map.naver.com/v5/entry/place/${placeId}` : '',
              imageUrl: (p.thumUrl || p.thumbnailUrl || p.imageUrl || '').trim(),
            }

            restaurant.tags = autoTags(restaurant)
            collected.set(placeId || name, restaurant)
            foundInQuery++
            totalNew++
          }
        }
      }

      // DOM에서 직접 추출 시도 (API 응답이 없는 경우)
      if (foundInQuery === 0) {
        try {
          const places = await targetFrame.evaluate(() => {
            const items = document.querySelectorAll('.CHC5F a, .TYaxT, [class*="place_bluelink"], li[data-sid]')
            return Array.from(items).map(el => {
              const nameEl = el.querySelector('.place_bluelink, .TYaxT, .O_Uah') || el
              const ratingEl = el.querySelector('.h69bs, [class*="rating"]')
              const catEl = el.querySelector('.KCMnt, [class*="category"]')
              const addrEl = el.querySelector('.LDgIH, [class*="address"]')
              return {
                name: (nameEl.textContent || '').trim(),
                rating: (ratingEl?.textContent || '').trim(),
                category: (catEl?.textContent || '').trim(),
                address: (addrEl?.textContent || '').trim(),
                sid: el.getAttribute('data-sid') || el.closest('[data-sid]')?.getAttribute('data-sid') || ''
              }
            }).filter(p => p.name)
          }).catch(() => [])

          for (const p of places) {
            if (!p.name || isDuplicate(p.name)) continue
            if (collected.has(p.sid) || collected.has(p.name)) continue

            const restaurant = {
              naverPlaceId: p.sid,
              name: p.name,
              type: p.category || '음식점',
              categories: [p.category],
              cat: detectCat([p.category]),
              rt: parseFloat((p.rating || '').match(/[\d.]+/)?.[0] || 0),
              cnt: 0,
              addr: p.address,
              hours: '',
              tel: '',
              lat: 0, lng: 0,
              priceRange: '',
              tags: [],
              moods: [],
              scene: [],
              wx: [],
              rv: [],
              menuItems: [],
              keywords: [],
              naverUrl: p.sid ? `https://map.naver.com/v5/entry/place/${p.sid}` : '',
              imageUrl: '',
            }
            restaurant.tags = autoTags(restaurant)
            collected.set(p.sid || p.name, restaurant)
            foundInQuery++
            totalNew++
          }
        } catch (e) {
          console.log(`  DOM 추출 실패: ${e.message}`)
        }
      }

      console.log(`  → 이 쿼리에서 ${foundInQuery}개 신규 발견`)
      completedQueries.add(query)

      // 체크포인트 저장 (매 쿼리마다)
      saveCheckpoint()

      // rate limit
      await sleep(2000 + Math.random() * 2000)

    } catch (e) {
      console.error(`  ❌ 쿼리 실패: ${e.message}`)
      await sleep(5000)
    }
  }

  // 상세 정보 수집 (placeId가 있는 식당)
  console.log('\n📋 상세 정보 수집 시작...')
  const needDetail = [...collected.values()].filter(r =>
    r.naverPlaceId && (!r.menuItems?.length || !r.hours)
  )

  let detailCount = 0
  for (const r of needDetail.slice(0, 500)) { // 최대 500개까지 상세 수집
    if (detailCount % 20 === 0) {
      console.log(`  상세 진행: ${detailCount}/${needDetail.length}`)
      saveCheckpoint()
    }

    try {
      const detailUrl = `https://map.naver.com/v5/entry/place/${r.naverPlaceId}?c=15,0,0,0,dh`
      apiResponses.length = 0

      await page.goto(detailUrl, { waitUntil: 'networkidle2', timeout: 20000 })
      await sleep(2000)

      // GraphQL 응답에서 상세 정보 추출
      for (const resp of apiResponses) {
        if (resp.type === 'graphql' && resp.data?.data) {
          const place = resp.data.data.restaurant || resp.data.data.place || resp.data.data
          if (place) {
            if (place.visitorReviews?.items) {
              r.rv = place.visitorReviews.items
                .slice(0, 5)
                .map(rv => (rv.body || rv.text || '').trim())
                .filter(Boolean)
            }
            if (place.menus) {
              r.menuItems = place.menus.slice(0, 10).map(m => {
                const rawName = (m.name || '').trim()
                const rawDesc = (m.description || m.desc || '').trim()
                const price = parseInt((m.price || '').replace(/[^0-9]/g, '')) || 0

                const isNameActuallyDesc = rawName.length > 20
                  || /입니다|메뉴입|드리는|즐기는|만들어진|준비했|묻어있는|볶은|우려낸|넣어|한상차림/.test(rawName)

                return {
                  menuName: isNameActuallyDesc ? '' : rawName,
                  price,
                  description: isNameActuallyDesc ? rawName : rawDesc
                }
              }).filter(m => m.menuName || m.description)
            }
            if (place.businessHours) {
              r.hours = typeof place.businessHours === 'string'
                ? place.businessHours
                : (place.businessHours[0]?.businessHours || '')
            }
            if (place.imageUrl || place.images?.[0]?.url) {
              r.imageUrl = place.imageUrl || place.images[0].url
            }
            if (place.address || place.roadAddress) {
              r.addr = r.addr || place.roadAddress || place.address
            }
            if (place.phone) r.tel = place.phone
          }
        }
      }

      // DOM에서 직접 추출 시도
      try {
        const details = await page.evaluate(() => {
          const menuItems = []
          document.querySelectorAll('.K0PDV, [class*="menu_item"], [class*="menuItem"], .E2jtL').forEach(el => {
            const nameEl = el.querySelector('.lPzHi, [class*="name"], [class*="menuName"]')
            const descEl = el.querySelector('.kPogF, [class*="desc"], [class*="detail"]')
            const priceEl = el.querySelector('.GXS1X, [class*="price"]')
            const menuName = nameEl?.textContent?.trim() || ''
            const description = descEl?.textContent?.trim() || ''
            const price = parseInt((priceEl?.textContent||'').replace(/[^0-9]/g,''))||0
            if (menuName) menuItems.push({ menuName, price, description })
          })

          const hours = document.querySelector('.A_cdD, [class*="bizHour"]')?.textContent?.trim() || ''
          const tel = document.querySelector('.xlx7Q, [class*="phone"]')?.textContent?.trim() || ''
          const reviewEls = document.querySelectorAll('.zPfVt, [class*="visitor_review"] .text')
          const reviews = Array.from(reviewEls).slice(0,5).map(el => el.textContent?.trim()).filter(Boolean)

          // 이미지 URL
          const imgEl = document.querySelector('.K0PDV img, .place_thumb img, [class*="image"] img, .cb_thumb img')
          const imgUrl = imgEl?.src || imgEl?.getAttribute('data-src') || ''

          return { menuItems, hours, tel, reviews, imgUrl }
        }).catch(() => ({}))

        if (details.menuItems?.length && !r.menuItems?.length) r.menuItems = details.menuItems
        if (details.hours && !r.hours) r.hours = details.hours
        if (details.tel && !r.tel) r.tel = details.tel
        if (details.reviews?.length && !r.rv?.length) r.rv = details.reviews
        if (details.imgUrl && !r.imageUrl) r.imageUrl = details.imgUrl
      } catch (e) { /* ignore */ }

      // 태그 업데이트
      r.tags = autoTags(r)
      detailCount++

      await sleep(1500 + Math.random() * 1500)
    } catch (e) {
      console.log(`  상세 실패: ${r.name} - ${e.message}`)
      await sleep(3000)
    }
  }

  await browser.close()

  // 최종 저장
  const results = [...collected.values()]
    .filter(r => r.name && r.name.length >= 2)
    .filter(r => !isDuplicate(r.name))

  fs.mkdirSync(OUT_DIR, { recursive: true })
  fs.writeFileSync(OUT_FILE, JSON.stringify(results, null, 2))

  console.log(`\n✅ 크롤링 완료!`)
  console.log(`   총 수집: ${results.length}개`)
  console.log(`   기존 데이터: ${existingNames.size}개`)
  console.log(`   저장: ${OUT_FILE}`)
}

main().catch(e => {
  console.error('치명적 오류:', e)
  saveCheckpoint()
  process.exit(1)
})
