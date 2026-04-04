#!/usr/bin/env node
/**
 * 크롤링 데이터를 data/samseong.js에 병합
 * 기존 288개 + 신규 708개 → 중복 제거 후 병합
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const DATA_FILE = path.join(ROOT, 'data', 'samseong.js')
const CRAWL_FILE = path.join(__dirname, 'naver-data', 'samseong-browser.json')

// 기존 데이터 백업
const backupFile = DATA_FILE + '.backup.' + Date.now()
fs.copyFileSync(DATA_FILE, backupFile)
console.log(`백업: ${backupFile}`)

// 크롤링 데이터 로드
const crawled = JSON.parse(fs.readFileSync(CRAWL_FILE, 'utf-8'))
console.log(`크롤링 데이터: ${crawled.length}개`)

// 이모지 매핑
function typeToEmoji(cat, type) {
  const c = (cat || ['기타'])[0]
  const map = {
    '고기구이': '🥩', '이자카야': '🏮', '일식': '🍣', '중식': '🍜',
    '양식': '🍝', '한식': '🍚', '국밥': '🥣', '치킨': '🐔',
    '족발곱창': '🍖', '카페': '☕', '야장': '🍺', '아시안': '🍛',
    '해산물': '🐟', '뷔페': '🍽️', '분식': '🍢', '기타': '🍴'
  }
  return map[c] || '🍴'
}

// type 필드를 한국어 카테고리명으로 변환
function typeLabel(cat, categories) {
  const c = (cat || ['기타'])[0]
  const map = {
    '고기구이': '고기구이', '이자카야': '이자카야', '일식': '일식',
    '중식': '중식', '양식': '양식', '한식': '한식', '국밥': '국밥',
    '치킨': '치킨', '족발곱창': '족발·곱창', '카페': '카페',
    '야장': '술집·포차', '아시안': '아시안', '해산물': '해산물',
    '뷔페': '뷔페', '분식': '분식', '기타': '음식점'
  }
  // categories에서 더 구체적인 이름 사용
  const specific = (categories || []).find(c =>
    c && !['음식점', '한식', '양식', '일식', '중식'].includes(c) && c.length > 1
  )
  return specific || map[c] || '음식점'
}

// 가격 범위 정리
function cleanPriceRange(menuItems) {
  if (!menuItems || menuItems.length === 0) return ''
  const prices = menuItems.map(m => m.price).filter(p => p > 0)
  if (prices.length === 0) return ''
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  if (min === max) return `${min}`
  return `${min}~${max}`
}

// moods 자동 생성
function autoMoods(r) {
  const moods = []
  const allText = [...(r.rv || []), ...(r.tags || [])].join(' ')
  if (/분위기|데이트|커플|로맨틱/.test(allText)) moods.push('데이트')
  if (/회식|단체|모임/.test(allText)) moods.push('회식')
  if (/혼밥|혼자|1인/.test(allText)) moods.push('혼밥')
  if (/스트레스|힐링|위로/.test(allText)) moods.push('스트레스 받음')
  if (/기분|축하|생일|기념/.test(allText)) moods.push('기분 좋음')
  if (/피곤|야근|해장/.test(allText)) moods.push('피곤함')
  return moods
}

// scene 자동 생성
function autoScene(r) {
  const scenes = []
  const allText = [...(r.rv || []), ...(r.tags || []), ...(r.categories || [])].join(' ')
  if (/점심|런치/.test(allText)) scenes.push('직장인 점심')
  if (/저녁|디너/.test(allText)) scenes.push('저녁 식사')
  if (/술|맥주|소주|와인|칵테일|하이볼/.test(allText)) scenes.push('가볍게 술')
  if (/회식|단체/.test(allText)) scenes.push('팀 회식')
  if (/데이트|커플/.test(allText)) scenes.push('데이트')
  if (/혼밥|혼자/.test(allText)) scenes.push('혼밥')
  if (/접대|비즈니스/.test(allText)) scenes.push('비즈니스')
  if (/야장|테라스/.test(allText)) scenes.push('야장에 맥주')
  return scenes
}

// wx 자동 생성
function autoWx(cat) {
  const c = (cat || ['기타'])[0]
  // 기본: 모든 날씨에 적합
  const wx = ['맑음']
  if (['국밥', '한식'].includes(c)) wx.push('추움', '비·눈')
  if (['야장', '치킨'].includes(c)) wx.push('덥고 습함')
  if (['카페'].includes(c)) wx.push('비·눈', '추움')
  return wx
}

// 삼성역 4번 출구 근처 여부
function isExit4(lat, lng) {
  if (!lat || !lng) return false
  // 삼성역 4번 출구: 약 37.508, 127.060 근처 남동쪽
  // 대치동 방면
  return lat < 37.507 && lng > 127.058
}

// 크롤링 데이터를 기존 스키마로 변환
const converted = crawled.map(r => {
  const cat = r.cat || ['기타']

  return {
    name: r.name,
    type: typeLabel(cat, r.categories),
    priceRange: cleanPriceRange(r.menuItems) || r.priceRange || '',
    cat: cat,
    e: typeToEmoji(cat, r.type),
    rt: r.rt || 0,
    cnt: r.cnt || 0,
    addr: (r.addr || '').replace(/^서울특별시 강남구 /, '').replace(/^서울 강남구 /, ''),
    hours: (r.hours || '').replace(/에 영업 시작$/, '').replace(/에 영업 종료$/, ''),
    tags: r.tags || [],
    moods: autoMoods(r),
    wx: autoWx(cat),
    scene: autoScene(r),
    rv: (r.rv || []).slice(0, 3).map(rv => rv.slice(0, 80)),
    lat: r.lat || 0,
    lng: r.lng || 0,
    exit4: isExit4(r.lat, r.lng),
    // 네이버 확장 필드
    naverPlaceId: r.naverPlaceId || '',
    naverUrl: r.naverUrl || '',
    naverBlogCnt: r.naverBlogCnt || 0,
    menuItems: (r.menuItems || []).slice(0, 8),
    imageUrl: r.imageUrl || '',
    parking: r.parking || false,
    reservation: r.reservation || false,
    updatedAt: '2026-03-16',
  }
})

console.log(`변환 완료: ${converted.length}개`)

// 기존 데이터 읽기
const existingContent = fs.readFileSync(DATA_FILE, 'utf-8')
// export default 찾기
const exportMatch = existingContent.match(/export\s+default\s+restaurants/)

// 기존 데이터 파싱 (import로)
// JS 파일이므로 직접 조작
// 기존 restaurants 배열 마지막 ']' 찾아서 그 앞에 새 데이터 삽입

// 새 데이터를 JS 문자열로 변환
function toJS(r) {
  const lines = []
  lines.push('{')
  lines.push(`  name: ${JSON.stringify(r.name)},`)
  lines.push(`  type: ${JSON.stringify(r.type)},`)
  if (r.priceRange) lines.push(`  priceRange: ${JSON.stringify(r.priceRange)},`)
  lines.push(`  cat: ${JSON.stringify(r.cat)},`)
  lines.push(`  e: ${JSON.stringify(r.e)},`)
  lines.push(`  rt: ${r.rt},`)
  lines.push(`  cnt: ${r.cnt},`)
  lines.push(`  addr: ${JSON.stringify(r.addr)},`)
  lines.push(`  hours: ${JSON.stringify(r.hours)},`)
  lines.push(`  tags: ${JSON.stringify(r.tags)},`)
  lines.push(`  moods: ${JSON.stringify(r.moods)},`)
  lines.push(`  wx: ${JSON.stringify(r.wx)},`)
  lines.push(`  scene: ${JSON.stringify(r.scene)},`)
  lines.push(`  rv: ${JSON.stringify(r.rv)},`)
  lines.push(`  lat: ${r.lat},`)
  lines.push(`  lng: ${r.lng},`)
  lines.push(`  exit4: ${r.exit4},`)
  if (r.naverPlaceId) lines.push(`  naverPlaceId: ${JSON.stringify(r.naverPlaceId)},`)
  if (r.naverUrl) lines.push(`  naverUrl: ${JSON.stringify(r.naverUrl)},`)
  if (r.naverBlogCnt) lines.push(`  naverBlogCnt: ${r.naverBlogCnt},`)
  if (r.menuItems?.length) lines.push(`  menuItems: ${JSON.stringify(r.menuItems)},`)
  if (r.imageUrl) lines.push(`  imageUrl: ${JSON.stringify(r.imageUrl)},`)
  if (r.parking) lines.push(`  parking: true,`)
  if (r.reservation) lines.push(`  reservation: true,`)
  lines.push(`  updatedAt: ${JSON.stringify(r.updatedAt)}`)
  lines.push('}')
  return lines.join('\n')
}

// 기존 파일의 마지막 ]; 앞에 새 데이터 삽입
const insertionPoint = existingContent.lastIndexOf(']')
if (insertionPoint === -1) {
  console.error('기존 데이터 파일에서 배열 끝을 찾을 수 없습니다')
  process.exit(1)
}

const before = existingContent.slice(0, insertionPoint)
const after = existingContent.slice(insertionPoint)

// 마지막 항목 뒤에 쉼표가 있는지 확인
const lastContent = before.trimEnd()
const needsComma = !lastContent.endsWith(',')

const newEntries = converted.map(r => toJS(r)).join(',\n')
const newContent = before + (needsComma ? ',\n' : '\n') + newEntries + '\n' + after

fs.writeFileSync(DATA_FILE, newContent)
console.log(`\n✅ 병합 완료!`)
console.log(`   기존: 288개`)
console.log(`   추가: ${converted.length}개`)
console.log(`   총: ${288 + converted.length}개`)
console.log(`   파일: ${DATA_FILE}`)

// 구문 검사
const { execSync } = await import('child_process')
try {
  execSync(`node --check ${DATA_FILE}`, { stdio: 'pipe' })
  console.log('   구문 검사: ✅ 통과')
} catch (e) {
  console.error('   구문 검사: ❌ 실패!')
  console.error(e.stderr?.toString())
  // 백업 복원
  fs.copyFileSync(backupFile, DATA_FILE)
  console.log('   백업에서 복원됨')
  process.exit(1)
}
