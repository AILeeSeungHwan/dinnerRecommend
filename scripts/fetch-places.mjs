/**
 * 구글 Places API로 맛집 데이터 수집
 * 
 * 사용법:
 *   GOOGLE_API_KEY=your_key node scripts/fetch-places.mjs
 * 
 * 출력: data/yeongtong.js, data/mangpo.js, data/yeongtongGu.js
 */

import fs from 'fs'

const API_KEY = process.env.GOOGLE_API_KEY
if (!API_KEY) {
  console.error('GOOGLE_API_KEY 환경변수를 설정하세요')
  process.exit(1)
}

// 수집 대상 지역
const TARGETS = [
  {
    name: '영통역',
    outputFile: 'data/yeongtong.js',
    lat: 37.2517,
    lng: 127.0736,
    radius: 600,   // 반경 600m
    keyword: '맛집 식당',
  },
  {
    name: '망포역',
    outputFile: 'data/mangpo.js',
    lat: 37.2470,
    lng: 127.0659,
    radius: 600,
    keyword: '맛집 식당',
  },
  {
    name: '영통구청',
    outputFile: 'data/yeongtongGu.js',
    lat: 37.2576,
    lng: 127.0571,
    radius: 500,
    keyword: '맛집 식당',
  },
]

// 카테고리 매핑 (구글 types → 우리 cat)
function mapCategory(types, name) {
  const t = types.join(' ')
  const n = name

  if (/삼겹|갈비|구이|고기|한우|돼지|목살/.test(n)) return ['고기구이', '한식']
  if (/국밥|해장|설렁|곰탕|순대/.test(n)) return ['국밥', '국물', '한식']
  if (/칼국수|수제비/.test(n)) return ['칼국수', '국물', '한식']
  if (/이자카야|선술/.test(n)) return ['이자카야', '야장']
  if (/훠궈|마라탕|마라/.test(n)) return ['훠궈', '중식']
  if (/중식|짜장|짬뽕|중화|딤섬/.test(n)) return ['중식']
  if (/초밥|스시|라멘|우동|돈카츠|일식/.test(n)) return ['일식']
  if (/파스타|피자|이탈리안|양식/.test(n)) return ['양식', '이탈리안']
  if (/스테이크|립/.test(n)) return ['스테이크', '양식']
  if (/치킨|통닭/.test(n)) return ['치킨']
  if (/카페|커피|베이커리/.test(n) || t.includes('cafe')) return ['카페']
  if (/버거/.test(n)) return ['버거']
  if (t.includes('korean_restaurant') || t.includes('restaurant')) return ['한식']
  return ['한식']
}

// 이모지 매핑
function mapEmoji(cats) {
  const c = cats[0]
  const map = {
    '고기구이': '🥩', '국밥': '🥣', '국물': '🍲', '칼국수': '🍜',
    '이자카야': '🍶', '훠궈': '🫕', '중식': '🥟', '일식': '🍣',
    '양식': '🍝', '이탈리안': '🍝', '스테이크': '🥩', '치킨': '🍗',
    '카페': '☕', '버거': '🍔', '한식': '🍱', '야장': '🍺',
  }
  return map[c] || '🍽️'
}

// priceLevel → priceRange 변환
function mapPrice(priceLevel) {
  const map = { 1: '8000~12000', 2: '12000~20000', 3: '20000~40000', 4: '40000~80000' }
  return map[priceLevel] || '10000~20000'
}

// 영업시간 정리
function formatHours(openingHours) {
  if (!openingHours?.weekday_text?.length) return '영업시간 확인 필요'
  // 월요일 기준으로 단순화
  const mon = openingHours.weekday_text[0] || ''
  return mon.replace('Monday: ', '').replace('월요일: ', '') || '영업시간 확인 필요'
}

// Nearby Search (최대 60개, 페이지당 20개)
async function fetchNearby(target) {
  const results = []
  let pageToken = null
  let page = 0

  do {
    const params = new URLSearchParams({
      location: `${target.lat},${target.lng}`,
      radius: target.radius,
      type: 'restaurant',
      language: 'ko',
      key: API_KEY,
    })
    if (target.keyword) params.set('keyword', target.keyword)
    if (pageToken) params.set('pagetoken', pageToken)

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${params}`
    console.log(`  [${target.name}] 페이지 ${page + 1} 요청 중...`)

    const res = await fetch(url)
    const data = await res.json()

    if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
      console.error(`  API 오류: ${data.status} - ${data.error_message || ''}`)
      break
    }

    results.push(...(data.results || []))
    pageToken = data.next_page_token || null
    page++

    // next_page_token은 2초 후 유효
    if (pageToken) await new Promise(r => setTimeout(r, 2200))
  } while (pageToken && page < 3)

  return results
}

// Place Details (전화번호, 영업시간, 리뷰)
async function fetchDetails(placeId) {
  const params = new URLSearchParams({
    place_id: placeId,
    fields: 'name,formatted_phone_number,opening_hours,reviews,price_level,editorial_summary',
    language: 'ko',
    key: API_KEY,
  })
  const url = `https://maps.googleapis.com/maps/api/place/details/json?${params}`
  const res = await fetch(url)
  const data = await res.json()
  return data.result || {}
}

// 식당 1개 변환
async function convertPlace(place, i, total) {
  console.log(`    ${i}/${total} ${place.name}`)

  // Details API (전화번호, 영업시간, 리뷰 3개)
  let detail = {}
  try {
    detail = await fetchDetails(place.place_id)
    await new Promise(r => setTimeout(r, 200)) // rate limit
  } catch (e) {
    console.error(`    상세 조회 실패: ${e.message}`)
  }

  const cats = mapCategory(place.types || [], place.name)
  const reviews = (detail.reviews || [])
    .slice(0, 3)
    .map(r => `[${r.rating}★] ${(r.text || '').slice(0, 60)}`)

  // 태그 자동 생성
  const tags = []
  if (place.user_ratings_total > 500) tags.push('리뷰많음')
  if ((place.rating || 0) >= 4.5) tags.push('고평점')
  if (cats.includes('혼밥')) tags.push('혼밥가능')

  return {
    name: place.name,
    type: detail.editorial_summary?.overview || cats.join('·'),
    e: mapEmoji(cats),
    rt: place.rating || 4.0,
    cnt: place.user_ratings_total || 0,
    addr: (place.vicinity || '').replace('대한민국 경기도 수원시 영통구 ', ''),
    hours: formatHours(detail.opening_hours),
    tel: detail.formatted_phone_number || '',
    priceRange: mapPrice(detail.price_level || place.price_level),
    lat: place.geometry.location.lat,
    lng: place.geometry.location.lng,
    cat: cats,
    tags,
    moods: [],
    scene: [],
    rv: reviews.length ? reviews : [`[${place.rating || 4.0}★] 리뷰 없음`],
  }
}

// JS 파일로 직렬화
function toJsFile(restaurants) {
  const json = JSON.stringify(restaurants, null, 2)
  return `const restaurants = ${json}\n\nexport default restaurants\n`
}

// 메인
async function main() {
  for (const target of TARGETS) {
    console.log(`\n===== ${target.name} 수집 시작 =====`)

    const places = await fetchNearby(target)
    console.log(`  총 ${places.length}개 장소 발견`)

    // 식당만 필터 (카페 포함)
    const filtered = places.filter(p =>
      (p.types || []).some(t =>
        ['restaurant', 'food', 'cafe', 'bar', 'meal_takeaway', 'meal_delivery'].includes(t)
      )
    )
    console.log(`  식당/카페 ${filtered.length}개 필터링`)

    const restaurants = []
    for (let i = 0; i < filtered.length; i++) {
      try {
        const r = await convertPlace(filtered[i], i + 1, filtered.length)
        restaurants.push(r)
      } catch (e) {
        console.error(`  변환 실패: ${filtered[i].name} - ${e.message}`)
      }
    }

    // 평점 순 정렬
    restaurants.sort((a, b) => (b.rt - a.rt) || (b.cnt - a.cnt))

    fs.writeFileSync(target.outputFile, toJsFile(restaurants))
    console.log(`  ✅ ${target.outputFile} 저장 (${restaurants.length}개)`)
  }

  console.log('\n✅ 전체 완료')
  console.log('이제 next dev로 확인하세요')
}

main().catch(console.error)
