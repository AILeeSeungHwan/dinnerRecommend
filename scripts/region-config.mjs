/**
 * 지역별 크롤링 설정
 * naver-crawl-browser.mjs / naver-detail-v3.mjs 에서 공용 사용
 *
 * 사용법: import { getRegionConfig } from './region-config.mjs'
 */

const REGIONS = {
  samseong: {
    label: '삼성역',
    dataFile: 'data/samseong.js',
    center: { lat: 37.5088, lng: 127.0631 },
    radius: 1.5, // km
    bounds: { latMin: 37.495, latMax: 37.525, lngMin: 127.045, lngMax: 127.080 },
    searchKeywords: ['삼성역', '코엑스', '삼성동', '봉은사역', '테헤란로', '대치동', '코엑스몰'],
  },
  jamsil: {
    label: '잠실',
    dataFile: 'data/jamsil.js',
    center: { lat: 37.5133, lng: 127.1001 },
    radius: 1.5,
    bounds: { latMin: 37.500, latMax: 37.530, lngMin: 127.080, lngMax: 127.115 },
    searchKeywords: ['잠실역', '잠실', '잠실새내역', '송파', '방이동', '잠실나루', '올림픽공원'],
  },
  pangyo: {
    label: '판교',
    dataFile: 'data/pangyo.js',
    center: { lat: 37.3947, lng: 127.1112 },
    radius: 2.0,
    bounds: { latMin: 37.378, latMax: 37.415, lngMin: 127.090, lngMax: 127.130 },
    searchKeywords: ['판교역', '판교', '판교테크노밸리', '삼평동', '백현동', '정자역'],
  },
  yeongtong: {
    label: '영통',
    dataFile: 'data/yeongtong.js',
    center: { lat: 37.2506, lng: 127.0563 },
    radius: 1.5,
    bounds: { latMin: 37.237, latMax: 37.265, lngMin: 127.040, lngMax: 127.075 },
    searchKeywords: ['영통역', '영통', '영통동', '매탄동'],
  },
  mangpo: {
    label: '망포',
    dataFile: 'data/mangpo.js',
    center: { lat: 37.2440, lng: 127.0363 },
    radius: 1.5,
    bounds: { latMin: 37.230, latMax: 37.258, lngMin: 127.020, lngMax: 127.055 },
    searchKeywords: ['망포역', '망포', '망포동', '매탄동'],
  },
  yeongtongGu: {
    label: '영통구청',
    dataFile: 'data/yeongtongGu.js',
    center: { lat: 37.2560, lng: 127.0480 },
    radius: 1.5,
    bounds: { latMin: 37.242, latMax: 37.270, lngMin: 127.032, lngMax: 127.065 },
    searchKeywords: ['영통구청', '영통구', '봉영로', '이의동'],
  },
}

// 카테고리 검색어 (지역 키워드와 조합)
const CATEGORY_SUFFIXES = [
  '맛집', '음식점', '식당',
  '한식', '고기', '삼겹살',
  '이자카야', '술집', '포차',
  '일식', '스시', '초밥',
  '중식', '마라탕', '짬뽕',
  '양식', '파스타', '스테이크',
  '치킨', '카페', '브런치',
  '국밥', '해장', '설렁탕',
  '족발', '곱창', '보쌈',
  '분식', '떡볶이',
  '베트남', '태국', '인도',
  '회', '횟집', '해산물',
  '돈카츠', '라멘', '우동',
  '피자', '햄버거', '샌드위치',
  '뷔페', '샤브샤브',
  '점심', '저녁', '혼밥',
  '회식', '데이트',
]

/**
 * 지역 설정 조회
 * @param {string} region - 지역 키 (samseong, jamsil, pangyo, ...)
 * @returns {Object} 지역 설정 + 생성된 검색 쿼리
 */
export function getRegionConfig(region) {
  const config = REGIONS[region]
  if (!config) {
    const available = Object.keys(REGIONS).join(', ')
    throw new Error(`알 수 없는 지역: ${region}\n사용 가능: ${available}`)
  }

  // 검색 쿼리 자동 생성: 지역 키워드 × 카테고리
  const queries = []
  for (const kw of config.searchKeywords) {
    for (const cat of CATEGORY_SUFFIXES) {
      queries.push(`${kw} ${cat}`)
    }
  }

  // 중복 제거
  const uniqueQueries = [...new Set(queries)]

  return {
    ...config,
    region,
    queries: uniqueQueries,
    isInArea(lat, lng) {
      if (!lat || !lng) return true
      const { latMin, latMax, lngMin, lngMax } = config.bounds
      return lat >= latMin && lat <= latMax && lng >= lngMin && lng <= lngMax
    },
  }
}

export function listRegions() {
  return Object.entries(REGIONS).map(([key, val]) => ({
    key,
    label: val.label,
    dataFile: val.dataFile,
  }))
}

export { REGIONS }
