/**
 * 네이버 지도 맛집 데이터 수집 스크립트
 *
 * 사용법:
 *   node scripts/naver-crawl.mjs [region]
 *   node scripts/naver-crawl.mjs all
 *   node scripts/naver-crawl.mjs pangyo
 *
 * 출력: scripts/naver-data/{region}.json
 *
 * ---
 * 크롤링 윤리 준수:
 *   - 요청 간 최소 1.5~3초 랜덤 딜레이
 *   - 동시 요청 1개
 *   - 개인정보(이름·전화번호) 리뷰에서 제거
 *   - robots.txt: map.naver.com/robots.txt — /p/api/ 경로 비제한 확인됨
 *     (공개 지도 검색 API와 동일 경로 사용)
 *
 * Step 1: 지역 키워드 검색 → placeId 목록 수집
 * Step 2: placeId별 상세 정보 수집 (평점, 리뷰, 메뉴, 편의시설)
 * Step 3: 기존 data/{region}.js의 식당과 fuzzy match
 * Step 4: 결과 저장 → scripts/naver-data/{region}.json
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUTPUT_DIR = path.join(__dirname, 'naver-data')
const CHECKPOINT_DIR = path.join(__dirname, 'naver-data', 'checkpoints')

// ─────────────────────────────────────────────
// 설정
// ─────────────────────────────────────────────

const CRAWL_CONFIG = {
  requestDelay: [1500, 3000],   // [min, max] ms 랜덤
  detailDelay: [2000, 3500],    // 상세 페이지 딜레이
  maxRetries: 3,
  retryDelay: 5000,
  maxConcurrent: 1,
  checkpointInterval: 30,       // N개마다 체크포인트 저장
  searchResultsPerQuery: 50,    // 검색당 최대 수집 수
  reviewsPerRestaurant: 20,     // 리뷰 최대 수집 수
}

// User-Agent 로테이션 (실제 브라우저 UA)
const USER_AGENTS = [
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
]

let uaIndex = 0
function getUA() {
  const ua = USER_AGENTS[uaIndex % USER_AGENTS.length]
  uaIndex++
  return ua
}

// ─────────────────────────────────────────────
// 지역 정의
// ─────────────────────────────────────────────

const REGIONS = {
  samseong: {
    label: '삼성역',
    dataFile: 'data/samseong.js',
    coords: { x: '127.0630', y: '37.5088' }, // 검색 기준 좌표 (경도;위도)
    keywords: [
      '삼성역 맛집',
      '코엑스 맛집',
      '봉은사역 맛집',
      '테헤란로 맛집',
      '삼성역 고기',
      '삼성역 이자카야',
      '삼성역 국밥',
      '삼성역 일식',
      '삼성역 중식',
      '삼성역 회식',
      '삼성역 혼밥',
      '삼성역 점심',
    ],
  },
  jamsil: {
    label: '잠실',
    dataFile: 'data/jamsil.js',
    coords: { x: '127.1000', y: '37.5133' },
    keywords: [
      '잠실역 맛집',
      '잠실나루역 맛집',
      '석촌호수 맛집',
      '방이동 맛집',
      '송리단길 맛집',
      '잠실 고기',
      '잠실 이자카야',
      '잠실 국밥',
      '잠실 일식',
      '잠실 회식',
      '잠실 혼밥',
      '잠실 데이트',
    ],
  },
  pangyo: {
    label: '판교',
    dataFile: 'data/pangyo.js',
    coords: { x: '127.1097', y: '37.3949' },
    keywords: [
      '판교역 맛집',
      '판교 테크노밸리 맛집',
      '백현동 맛집',
      '아브뉴프랑 맛집',
      '판교 고기',
      '판교 이자카야',
      '판교 국밥',
      '판교 일식',
      '판교 중식',
      '판교 점심',
      '판교 회식',
      '판교 혼밥',
    ],
  },
  yeongtong: {
    label: '영통',
    dataFile: 'data/yeongtong.js',
    coords: { x: '127.0736', y: '37.2517' },
    keywords: [
      '영통역 맛집',
      '영통 먹자골목',
      '영통 고기',
      '영통 이자카야',
      '영통 국밥',
      '영통 일식',
      '영통 점심',
      '영통 회식',
    ],
  },
  mangpo: {
    label: '망포',
    dataFile: 'data/mangpo.js',
    coords: { x: '127.0659', y: '37.2470' },
    keywords: [
      '망포역 맛집',
      '망포동 맛집',
      '망포 고기',
      '망포 이자카야',
      '망포 점심',
      '망포 회식',
    ],
  },
  yeongtongGu: {
    label: '영통구청',
    dataFile: 'data/yeongtongGu.js',
    coords: { x: '127.0571', y: '37.2576' },
    keywords: [
      '영통구청역 맛집',
      '매탄동 맛집',
      '매탄 고기',
      '매탄 점심',
      '영통구청 회식',
      '영통구청 이자카야',
    ],
  },
}

// ─────────────────────────────────────────────
// 유틸
// ─────────────────────────────────────────────

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

function randomDelay(range) {
  const [min, max] = range
  return min + Math.floor(Math.random() * (max - min))
}

/**
 * 개인정보 제거: 이름, 전화번호 패턴 마스킹
 * 리뷰 원문은 내부 분석 전용 — 외부 절대 노출 금지
 */
function sanitizeReview(text) {
  if (!text) return ''
  return text
    // 전화번호 (010-XXXX-XXXX, 02-XXXX-XXXX 등)
    .replace(/\d{2,3}[-.\s]?\d{3,4}[-.\s]?\d{4}/g, '[전화번호 제거]')
    // 한국 이름 패턴 (성 1자 + 이름 1-2자) — 단어 경계 기준
    .replace(/[가-힣]{1}[가-힣]{1,2}(씨|님|이|가|은|는|을|를|의|과|와|한테|에게)\b/g, '[이름 제거]')
    // URL
    .replace(/https?:\/\/[^\s]+/g, '[링크 제거]')
    .trim()
}

/**
 * 이름 정규화: fuzzy match용
 */
function normalizeName(name) {
  return name
    .replace(/\s+/g, '')
    .replace(/[()（）\[\]【】]/g, '')
    .replace(/[·•]/g, '')
    .toLowerCase()
}

/**
 * 이름 유사도: Levenshtein 기반 (0~1)
 */
function nameSimilarity(a, b) {
  const na = normalizeName(a)
  const nb = normalizeName(b)
  if (na === nb) return 1.0
  if (na.includes(nb) || nb.includes(na)) return 0.85

  // Levenshtein distance
  const m = na.length
  const n = nb.length
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  )
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (na[i - 1] === nb[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
      }
    }
  }
  const dist = dp[m][n]
  const maxLen = Math.max(m, n)
  return maxLen === 0 ? 1 : 1 - dist / maxLen
}

/**
 * 주소 정규화: 공통 부분 추출
 */
function normalizeAddr(addr) {
  if (!addr) return ''
  return addr
    .replace(/^(경기도|서울특별시|서울시|경기)\s+/, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * 두 식당 매칭 스코어 (0~1)
 */
function matchScore(existingRestaurant, naverItem) {
  const nameSim = nameSimilarity(existingRestaurant.name, naverItem.name)
  const addrSim = naverItem.address
    ? normalizeAddr(existingRestaurant.addr).includes(
        normalizeAddr(naverItem.address).split(' ').slice(-2).join(' ')
      )
      ? 0.9
      : 0.1
    : 0.5

  return nameSim * 0.7 + addrSim * 0.3
}

// ─────────────────────────────────────────────
// HTTP 요청
// ─────────────────────────────────────────────

/**
 * fetch with retry + rate limit
 */
async function fetchWithRetry(url, options = {}, retries = CRAWL_CONFIG.maxRetries) {
  const headers = {
    'User-Agent': getUA(),
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Referer': 'https://map.naver.com/',
    'Origin': 'https://map.naver.com',
    'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    ...options.headers,
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { ...options, headers })

      if (res.status === 429) {
        console.warn(`  [rate limit] 30초 대기 후 재시도...`)
        await sleep(30000)
        continue
      }

      if (res.status === 403 || res.status === 401) {
        console.warn(`  [${res.status}] 접근 거부: ${url}`)
        return null
      }

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${url}`)
      }

      return res
    } catch (err) {
      if (attempt === retries) {
        console.error(`  [실패 ${attempt}/${retries}] ${err.message}`)
        return null
      }
      console.warn(`  [재시도 ${attempt}/${retries}] ${err.message}`)
      await sleep(CRAWL_CONFIG.retryDelay)
    }
  }
  return null
}

// ─────────────────────────────────────────────
// Step 1: 네이버 지도 검색 API
// ─────────────────────────────────────────────

/**
 * 네이버 지도 내부 allSearch API
 * GET https://map.naver.com/p/api/search/allSearch
 *   ?query=판교역+맛집
 *   &type=all
 *   &searchCoord=127.1097;37.3949   (경도;위도)
 *   &displayCount=50
 *   &isPlaceHome=false
 */
async function searchNaverMap(query, coords, start = 1) {
  const params = new URLSearchParams({
    query,
    type: 'all',
    searchCoord: `${coords.x};${coords.y}`,
    displayCount: String(CRAWL_CONFIG.searchResultsPerQuery),
    isPlaceHome: 'false',
    lang: 'ko',
  })
  if (start > 1) params.set('start', String(start))

  const url = `https://map.naver.com/p/api/search/allSearch?${params}`

  const res = await fetchWithRetry(url)
  if (!res) return []

  let data
  try {
    data = await res.json()
  } catch {
    console.error('  JSON 파싱 실패')
    return []
  }

  // 응답 구조: data.result.place.list 또는 data.result.restaurant.list
  const places = []

  const tryExtractList = (obj) => {
    if (!obj || typeof obj !== 'object') return
    // 네이버 지도 검색 결과 구조
    if (Array.isArray(obj.list)) {
      obj.list.forEach(item => {
        if (!item.id) return
        const category = (item.category || []).join(' ')
        // 식당/카페/술집만
        if (!/음식점|식당|카페|주점|이자카야|고기|국밥|초밥|라멘|중식|일식|양식|치킨|버거|분식|족발|냉면|갈비/.test(category)) {
          // category 없어도 포함 (기본값)
        }
        places.push({
          id: String(item.id),
          name: (item.name || '').trim(),
          category: item.category || [],
          address: item.roadAddress || item.address || '',
          telephone: item.telephone || '',
          businessHours: item.businessHours || null,
          lat: item.y ? parseFloat(item.y) : null,
          lng: item.x ? parseFloat(item.x) : null,
          rating: item.reviewScore ? parseFloat(item.reviewScore) : null,
          reviewCount: item.reviewCount ? parseInt(item.reviewCount, 10) : null,
          blogReviewCount: item.blogCafeReviewCount ? parseInt(item.blogCafeReviewCount, 10) : null,
          imageUrl: item.imageUrl || null,
          // 일부 버전에서 제공
          menus: item.menus || [],
        })
      })
    }
    // 재귀적으로 하위 키 탐색 (result.place, result.restaurant 등)
    if (typeof obj === 'object') {
      ['place', 'restaurant', 'food', 'cafe', 'drink'].forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') tryExtractList(obj[key])
      })
    }
  }

  if (data && data.result) tryExtractList(data.result)
  else if (Array.isArray(data)) data.forEach(d => tryExtractList(d))

  return places
}

/**
 * 지역 키워드로 전체 검색 (중복 placeId 제거)
 */
async function collectPlaceIds(region) {
  const regionConfig = REGIONS[region]
  const seen = new Set()
  const allPlaces = []

  console.log(`\n[${regionConfig.label}] 검색 시작 (${regionConfig.keywords.length}개 키워드)`)

  for (const keyword of regionConfig.keywords) {
    process.stdout.write(`  검색: "${keyword}" ... `)
    await sleep(randomDelay(CRAWL_CONFIG.requestDelay))

    const places = await searchNaverMap(keyword, regionConfig.coords)
    const newPlaces = places.filter(p => p.id && !seen.has(p.id))
    newPlaces.forEach(p => seen.add(p.id))
    allPlaces.push(...newPlaces)

    process.stdout.write(`${newPlaces.length}개 신규 (누적 ${allPlaces.length}개)\n`)
  }

  console.log(`[${regionConfig.label}] 총 ${allPlaces.length}개 식당 수집`)
  return allPlaces
}

// ─────────────────────────────────────────────
// Step 2: 네이버 플레이스 상세 API
// ─────────────────────────────────────────────

/**
 * pcmap.place.naver.com API 엔드포인트들
 * (비공식 내부 API — 구조 변경될 수 있음)
 */

/**
 * 식당 기본 정보 + 메뉴 조회
 * GET https://pcmap-api.place.naver.com/restaurant/{id}/home
 */
async function fetchPlaceHome(placeId) {
  const url = `https://pcmap-api.place.naver.com/place/home?id=${placeId}`
  const res = await fetchWithRetry(url, {
    headers: {
      Referer: `https://pcmap.place.naver.com/restaurant/${placeId}/home`,
    },
  })
  if (!res) return null
  try {
    return await res.json()
  } catch {
    return null
  }
}

/**
 * 방문자 리뷰 조회
 * GET https://pcmap-api.place.naver.com/restaurant/{id}/review/visitor
 */
async function fetchVisitorReviews(placeId) {
  const url = `https://pcmap-api.place.naver.com/place/review/visitor?id=${placeId}&page=1&display=${CRAWL_CONFIG.reviewsPerRestaurant}&reviewSort=recent`
  const res = await fetchWithRetry(url, {
    headers: {
      Referer: `https://pcmap.place.naver.com/restaurant/${placeId}/review/visitor`,
    },
  })
  if (!res) return []
  try {
    const data = await res.json()
    // 응답 구조: data.items 또는 data.result.reviewList
    const list = data?.items || data?.result?.reviewList || data?.reviews || []
    return list.slice(0, CRAWL_CONFIG.reviewsPerRestaurant)
  } catch {
    return []
  }
}

/**
 * 네이버 플레이스 GraphQL API (더 안정적인 대안)
 * 일부 버전에서 사용
 */
async function fetchPlaceGraphQL(placeId) {
  const url = 'https://pcmap-api.place.naver.com/graphql'
  const query = {
    operationName: 'getRestaurantSummary',
    variables: { id: placeId },
    query: `query getRestaurantSummary($id: String!) {
      restaurant(id: $id) {
        id name category address roadAddress telephone
        businessHours { day startTime endTime }
        menus { name price imageUrl }
        facilitiesSummary
        reservationUrl
        reviewStats { averageRating reviewCount blogCafeReviewCount }
      }
    }`,
  }

  const res = await fetchWithRetry(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Referer: `https://pcmap.place.naver.com/restaurant/${placeId}/home`,
    },
    body: JSON.stringify(query),
  })
  if (!res) return null
  try {
    const data = await res.json()
    return data?.data?.restaurant || null
  } catch {
    return null
  }
}

/**
 * placeId로 상세 정보 수집 (여러 엔드포인트 순차 시도)
 */
async function fetchPlaceDetail(placeId, placeName) {
  const detail = {
    placeId,
    name: placeName,
    rating: null,
    reviewCount: null,
    blogReviewCount: null,
    menuItems: [],
    reviews: [],
    hours: null,
    telephone: null,
    parking: null,
    reservation: null,
    naverUrl: `https://naver.me/x${placeId}`,  // 단축 URL 패턴
    address: null,
  }

  // 시도 1: GraphQL API
  const gql = await fetchPlaceGraphQL(placeId)
  if (gql) {
    detail.name = gql.name || placeName
    detail.address = gql.roadAddress || gql.address || null
    detail.telephone = gql.telephone || null
    if (gql.reviewStats) {
      detail.rating = gql.reviewStats.averageRating
        ? parseFloat(gql.reviewStats.averageRating)
        : null
      detail.reviewCount = gql.reviewStats.reviewCount
        ? parseInt(gql.reviewStats.reviewCount, 10)
        : null
      detail.blogReviewCount = gql.reviewStats.blogCafeReviewCount
        ? parseInt(gql.reviewStats.blogCafeReviewCount, 10)
        : null
    }
    if (Array.isArray(gql.menus)) {
      detail.menuItems = gql.menus.slice(0, 10).map(m => ({
        name: (m.name || '').trim(),
        price: m.price ? parseInt(String(m.price).replace(/[^0-9]/g, ''), 10) : null,
      })).filter(m => m.name)
    }
    if (gql.businessHours) {
      detail.hours = formatBusinessHours(gql.businessHours)
    }
    if (gql.facilitiesSummary) {
      const f = gql.facilitiesSummary.toLowerCase()
      detail.parking = /주차|parking/.test(f)
      detail.reservation = /예약|reservation/.test(f)
    }
    if (gql.reservationUrl) detail.reservation = true
  }

  await sleep(randomDelay(CRAWL_CONFIG.detailDelay))

  // 시도 2: home API (GraphQL 실패 또는 데이터 부족 시)
  if (!detail.rating || !detail.menuItems.length) {
    const home = await fetchPlaceHome(placeId)
    if (home) {
      const r = home?.restaurant || home?.result || home
      if (!detail.rating && r?.reviewScore) {
        detail.rating = parseFloat(r.reviewScore)
      }
      if (!detail.reviewCount && r?.reviewCount) {
        detail.reviewCount = parseInt(r.reviewCount, 10)
      }
      if (!detail.blogReviewCount && r?.blogCafeReviewCount) {
        detail.blogReviewCount = parseInt(r.blogCafeReviewCount, 10)
      }
      if (!detail.menuItems.length && Array.isArray(r?.menus)) {
        detail.menuItems = r.menus.slice(0, 10).map(m => ({
          name: (m.name || '').trim(),
          price: m.price ? parseInt(String(m.price).replace(/[^0-9]/g, ''), 10) : null,
        })).filter(m => m.name)
      }
      if (!detail.hours && r?.businessHours) {
        detail.hours = formatBusinessHours(r.businessHours)
      }
    }
    await sleep(randomDelay(CRAWL_CONFIG.requestDelay))
  }

  // 방문자 리뷰
  const rawReviews = await fetchVisitorReviews(placeId)
  if (rawReviews.length > 0) {
    detail.reviews = rawReviews
      .map(rv => {
        const text = rv.body || rv.contents || rv.text || rv.review || ''
        return sanitizeReview(text)
      })
      .filter(t => t.length > 5)
      .slice(0, CRAWL_CONFIG.reviewsPerRestaurant)
  }

  return detail
}

/**
 * 영업시간 배열 → 문자열 변환
 */
function formatBusinessHours(hours) {
  if (!hours) return null
  if (typeof hours === 'string') return hours

  if (Array.isArray(hours)) {
    // [{ day: '월', startTime: '11:00', endTime: '21:00' }, ...]
    const days = ['월', '화', '수', '목', '금']
    const weekday = hours.find(h => days.includes(h.day) || h.day === 'MON')
    if (weekday) {
      const start = weekday.startTime || weekday.start || ''
      const end = weekday.endTime || weekday.end || ''
      if (start && end) return `${start}~${end}`
    }
    if (hours[0]) {
      const h = hours[0]
      const start = h.startTime || h.start || ''
      const end = h.endTime || h.end || ''
      if (start && end) return `${start}~${end}`
    }
  }

  if (typeof hours === 'object') {
    const start = hours.startTime || hours.start || hours.openTime || ''
    const end = hours.endTime || hours.end || hours.closeTime || ''
    if (start && end) return `${start}~${end}`
  }

  return null
}

// ─────────────────────────────────────────────
// Step 3: 기존 데이터와 매칭
// ─────────────────────────────────────────────

/**
 * 기존 data/{region}.js 로드
 * CommonJS export 없는 형식이므로 텍스트 파싱
 */
function loadExistingData(dataFile) {
  const filePath = path.join(ROOT, dataFile)
  if (!fs.existsSync(filePath)) {
    console.warn(`  기존 데이터 파일 없음: ${filePath}`)
    return []
  }

  const src = fs.readFileSync(filePath, 'utf-8')

  // const restaurants = [...] export default restaurants 형식
  // JSON.parse 불가 → eval 대신 임시 모듈 트릭 사용
  // 안전하게: 정규식으로 배열 추출
  const match = src.match(/const restaurants\s*=\s*(\[[\s\S]*?\])\s*\n?\s*export default/)
  if (!match) {
    console.warn(`  데이터 파싱 실패: ${dataFile}`)
    return []
  }

  try {
    // JSON5 비슷하게 파싱 (trailing comma 허용 안 되므로 제거)
    const jsonStr = match[1]
      .replace(/,\s*([}\]])/g, '$1')     // trailing comma 제거
      .replace(/\/\/[^\n]*/g, '')          // 주석 제거
      .replace(/\/\*[\s\S]*?\*\//g, '')    // 블록 주석 제거
    return JSON.parse(jsonStr)
  } catch (e) {
    console.warn(`  JSON 파싱 실패 (${dataFile}): ${e.message}`)
    return []
  }
}

/**
 * 네이버 수집 결과와 기존 식당 매칭
 * 반환: { matched: [{existing, naver, score}], unmatched: [naver items] }
 */
function matchRestaurants(existingList, naverList) {
  const matched = []
  const usedNaverIds = new Set()

  for (const existing of existingList) {
    let best = null
    let bestScore = 0.45  // 임계값

    for (const naver of naverList) {
      if (usedNaverIds.has(naver.id)) continue
      const score = matchScore(existing, naver)
      if (score > bestScore) {
        bestScore = score
        best = naver
      }
    }

    if (best) {
      matched.push({ existing, naver: best, score: bestScore })
      usedNaverIds.add(best.id)
    }
  }

  const unmatched = naverList.filter(n => !usedNaverIds.has(n.id))
  return { matched, unmatched }
}

// ─────────────────────────────────────────────
// 체크포인트
// ─────────────────────────────────────────────

function saveCheckpoint(region, data) {
  fs.mkdirSync(CHECKPOINT_DIR, { recursive: true })
  const file = path.join(CHECKPOINT_DIR, `${region}.json`)
  fs.writeFileSync(file, JSON.stringify(data, null, 2))
}

function loadCheckpoint(region) {
  const file = path.join(CHECKPOINT_DIR, `${region}.json`)
  if (!fs.existsSync(file)) return null
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8'))
  } catch {
    return null
  }
}

function clearCheckpoint(region) {
  const file = path.join(CHECKPOINT_DIR, `${region}.json`)
  if (fs.existsSync(file)) fs.unlinkSync(file)
}

// ─────────────────────────────────────────────
// Step 4: 결과 저장
// ─────────────────────────────────────────────

function saveResult(region, result) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  const file = path.join(OUTPUT_DIR, `${region}.json`)
  fs.writeFileSync(file, JSON.stringify(result, null, 2))
  console.log(`  저장: ${file}`)
}

// ─────────────────────────────────────────────
// 메인 크롤링 로직
// ─────────────────────────────────────────────

async function crawlRegion(region) {
  const config = REGIONS[region]
  if (!config) {
    console.error(`알 수 없는 지역: ${region}`)
    console.error(`사용 가능: ${Object.keys(REGIONS).join(', ')}`)
    return
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`  ${config.label} (${region}) 크롤링 시작`)
  console.log(`${'='.repeat(60)}`)
  console.log(`  시작 시각: ${new Date().toLocaleString('ko-KR')}`)

  // 체크포인트 확인
  let checkpoint = loadCheckpoint(region)
  let searchResults = []
  let detailResults = []
  let detailStartIdx = 0

  if (checkpoint) {
    console.log(`  체크포인트 발견 — 이어서 진행 (${checkpoint.detailDone || 0}/${checkpoint.total || 0} 완료)`)
    searchResults = checkpoint.searchResults || []
    detailResults = checkpoint.detailResults || []
    detailStartIdx = detailResults.length
  } else {
    // Step 1: 검색
    searchResults = await collectPlaceIds(region)

    if (searchResults.length === 0) {
      console.warn(`  경고: 검색 결과 없음`)
      console.warn(`  네이버 지도 API가 응답하지 않습니다.`)
      console.warn(`  → robots.txt 정책 변경 또는 API 엔드포인트 변경 가능성`)
      console.warn(`  → 대안: Puppeteer/Playwright 사용 권장 (NAVER_CRAWL.md §3-2 참조)`)

      // 기존 데이터만으로 빈 결과 저장
      saveResult(region, {
        region,
        label: config.label,
        crawledAt: new Date().toISOString(),
        searchResults: [],
        details: [],
        matchedCount: 0,
        warning: 'API 응답 없음 — Puppeteer 방식으로 전환 필요',
      })
      return
    }

    saveCheckpoint(region, {
      searchResults,
      detailResults: [],
      total: searchResults.length,
      detailDone: 0,
    })
  }

  // Step 2: 상세 정보 수집
  console.log(`\n[${config.label}] 상세 정보 수집 (${searchResults.length}개)`)

  for (let i = detailStartIdx; i < searchResults.length; i++) {
    const place = searchResults[i]
    const idx = i + 1
    const total = searchResults.length

    process.stdout.write(`  [${config.label} ${idx}/${total}] ${place.name} ... `)
    await sleep(randomDelay(CRAWL_CONFIG.detailDelay))

    try {
      const detail = await fetchPlaceDetail(place.id, place.name)

      // searchResults에서 이미 수집된 기본 정보로 보완
      if (detail.rating === null && place.rating !== null) detail.rating = place.rating
      if (detail.reviewCount === null && place.reviewCount !== null) detail.reviewCount = place.reviewCount
      if (detail.blogReviewCount === null && place.blogReviewCount !== null) detail.blogReviewCount = place.blogReviewCount
      if (!detail.address && place.address) detail.address = place.address
      if (!detail.telephone && place.telephone) detail.telephone = place.telephone
      if (!detail.menuItems.length && place.menus?.length) {
        detail.menuItems = place.menus.map(m => ({
          name: (m.name || '').trim(),
          price: m.price ? parseInt(String(m.price).replace(/[^0-9]/g, ''), 10) : null,
        })).filter(m => m.name)
      }

      // 좌표
      detail.lat = place.lat
      detail.lng = place.lng
      detail.category = place.category || []

      const ratingStr = detail.rating ? `${detail.rating}점` : '평점없음'
      const reviewStr = detail.reviewCount ? `리뷰${detail.reviewCount}` : ''
      const menuStr = detail.menuItems.length ? `메뉴${detail.menuItems.length}개` : ''
      process.stdout.write(`${ratingStr} ${reviewStr} ${menuStr}\n`)

      detailResults.push(detail)
    } catch (err) {
      process.stdout.write(`실패: ${err.message}\n`)
      detailResults.push({
        placeId: place.id,
        name: place.name,
        lat: place.lat,
        lng: place.lng,
        address: place.address,
        category: place.category || [],
        rating: place.rating,
        reviewCount: place.reviewCount,
        blogReviewCount: place.blogReviewCount,
        menuItems: [],
        reviews: [],
        hours: null,
        telephone: place.telephone,
        parking: null,
        reservation: null,
        naverUrl: `https://map.naver.com/p/entry/place/${place.id}`,
        _fetchError: err.message,
      })
    }

    // 체크포인트
    if (idx % CRAWL_CONFIG.checkpointInterval === 0) {
      saveCheckpoint(region, {
        searchResults,
        detailResults,
        total: searchResults.length,
        detailDone: idx,
      })
      console.log(`  [체크포인트 저장] ${idx}/${total}`)
    }
  }

  // Step 3: 기존 데이터와 매칭
  console.log(`\n[${config.label}] 기존 데이터와 매칭 중...`)
  const existingData = loadExistingData(config.dataFile)
  console.log(`  기존: ${existingData.length}개 / 네이버 수집: ${detailResults.length}개`)

  const { matched, unmatched } = matchRestaurants(existingData, detailResults)
  console.log(`  매칭 성공: ${matched.length}개 / 신규 발견: ${unmatched.length}개`)

  // Step 4: 결과 저장
  const result = {
    region,
    label: config.label,
    crawledAt: new Date().toISOString(),
    stats: {
      searchTotal: searchResults.length,
      detailTotal: detailResults.length,
      matchedToExisting: matched.length,
      existingCount: existingData.length,
      newDiscovered: unmatched.length,
    },
    // 매칭된 식당: 기존 + 네이버 데이터 합본
    matched: matched.map(({ existing, naver, score }) => ({
      _matchScore: Math.round(score * 100) / 100,
      // 기존 필드 (참조용)
      existingName: existing.name,
      existingAddr: existing.addr,
      // 네이버 데이터 (merge-naver-data.mjs에서 사용)
      naverPlaceId: naver.placeId,
      naverName: naver.name,
      naverAddr: naver.address,
      naverRating: naver.rating,
      naverReviewCount: naver.reviewCount,
      naverBlogCnt: naver.blogReviewCount,
      menuItems: naver.menuItems,
      reviews: naver.reviews,         // 내부 전용 — 외부 노출 금지
      hours: naver.hours,
      telephone: naver.telephone,
      parking: naver.parking,
      reservation: naver.reservation,
      naverUrl: naver.naverUrl,
      lat: naver.lat || existing.lat,
      lng: naver.lng || existing.lng,
      category: naver.category,
    })),
    // 신규 발견 (기존 데이터에 없는 식당)
    newRestaurants: unmatched.map(naver => ({
      naverPlaceId: naver.placeId,
      name: naver.name,
      address: naver.address,
      category: naver.category,
      lat: naver.lat,
      lng: naver.lng,
      naverRating: naver.rating,
      naverReviewCount: naver.reviewCount,
      naverBlogCnt: naver.blogReviewCount,
      menuItems: naver.menuItems,
      reviews: naver.reviews,         // 내부 전용 — 외부 노출 금지
      hours: naver.hours,
      telephone: naver.telephone,
      parking: naver.parking,
      reservation: naver.reservation,
      naverUrl: naver.naverUrl,
    })),
  }

  saveResult(region, result)
  clearCheckpoint(region)

  // 요약
  console.log(`\n${'─'.repeat(60)}`)
  console.log(`  [${config.label}] 크롤링 완료`)
  console.log(`  검색 수집: ${result.stats.searchTotal}개`)
  console.log(`  상세 수집: ${result.stats.detailTotal}개`)
  console.log(`  기존 매칭: ${result.stats.matchedToExisting}/${result.stats.existingCount}개 (${Math.round(result.stats.matchedToExisting / Math.max(result.stats.existingCount, 1) * 100)}%)`)
  console.log(`  신규 발견: ${result.stats.newDiscovered}개`)
  console.log(`  종료 시각: ${new Date().toLocaleString('ko-KR')}`)
}

// ─────────────────────────────────────────────
// 진입점
// ─────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2)
  const target = args[0] || 'all'

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  if (target === 'all') {
    console.log('전체 지역 크롤링 시작')
    console.log(`지역: ${Object.keys(REGIONS).join(', ')}`)
    for (const region of Object.keys(REGIONS)) {
      await crawlRegion(region)
      // 지역 간 추가 딜레이
      if (region !== Object.keys(REGIONS).slice(-1)[0]) {
        console.log('\n다음 지역 시작까지 10초 대기...')
        await sleep(10000)
      }
    }
    console.log('\n전체 크롤링 완료')
  } else if (REGIONS[target]) {
    await crawlRegion(target)
  } else {
    console.error(`알 수 없는 지역: ${target}`)
    console.error(`사용법: node scripts/naver-crawl.mjs [${Object.keys(REGIONS).join('|')}|all]`)
    process.exit(1)
  }
}

main().catch(err => {
  console.error('크롤링 중 치명적 오류:', err)
  process.exit(1)
})
