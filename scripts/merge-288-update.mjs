#!/usr/bin/env node
/**
 * 기존 288개 식당 데이터에 네이버 크롤링 결과 병합
 * - naverPlaceId가 있는 식당: 네이버 데이터로 업데이트
 * - 못 찾은 식당: 기존 데이터 유지하되 tags/moods/scene 보강
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const DATA_FILE = path.join(ROOT, 'data', 'samseong.js')
const RESULT_FILE = path.join(__dirname, 'naver-data', 'existing-288-updated.json')

// 크롤링 결과 로드
let crawled = []
try {
  crawled = JSON.parse(fs.readFileSync(RESULT_FILE, 'utf-8'))
  console.log(`크롤링 결과: ${crawled.length}개`)
  console.log(`  placeId 있음: ${crawled.filter(r => r.naverPlaceId).length}`)
  console.log(`  상세 있음: ${crawled.filter(r => r.cnt > 0 || r.menuItems?.length > 0).length}`)
} catch (e) {
  console.error('크롤링 결과 파일 없음:', RESULT_FILE)
  process.exit(1)
}

// 크롤링 결과를 이름 → 데이터 맵으로 변환
const updateMap = new Map()
for (const r of crawled) {
  const name = r.originalName || r.name
  if (name) updateMap.set(name, r)
}

// 기존 samseong.js 읽기
const content = fs.readFileSync(DATA_FILE, 'utf-8')

// 백업
const backupFile = DATA_FILE + '.backup.' + Date.now()
fs.copyFileSync(DATA_FILE, backupFile)
console.log(`\n백업: ${backupFile}`)

// 각 식당 블록을 찾아서 업데이트
// 1단계: 식당 배열에서 개별 객체 파싱
const arrStartMatch = content.match(/const\s+restaurants\s*=\s*\[/)
if (!arrStartMatch) {
  console.error('restaurants 배열을 찾을 수 없습니다')
  process.exit(1)
}

const arrStart = arrStartMatch.index + arrStartMatch[0].length
const arrEnd = content.lastIndexOf(']')

// 기존 데이터 파일을 직접 수정하는 대신,
// 모든 식당을 import → 수정 → 다시 JS로 출력

// Dynamic import로 기존 데이터 로드
const samseongModule = await import(DATA_FILE)
const restaurants = samseongModule.default

console.log(`\n기존 식당 수: ${restaurants.length}개`)

let updated = 0, enriched = 0

for (let i = 0; i < restaurants.length; i++) {
  const r = restaurants[i]

  // 이미 naverPlaceId가 있는 식당은 건너뜀 (708개 신규)
  if (r.naverPlaceId) continue

  const crawlData = updateMap.get(r.name)
  if (!crawlData) continue

  // naverPlaceId가 있으면 상세 데이터 업데이트
  if (crawlData.naverPlaceId) {
    r.naverPlaceId = crawlData.naverPlaceId
    r.naverUrl = crawlData.naverUrl || `https://map.naver.com/p/entry/place/${crawlData.naverPlaceId}`

    if (crawlData.cnt > 0) r.cnt = crawlData.cnt
    if (crawlData.naverBlogCnt > 0) r.naverBlogCnt = crawlData.naverBlogCnt
    if (crawlData.hours) r.hours = crawlData.hours.replace(/에 영업 시작$/, '').replace(/에 영업 종료$/, '')
    if (crawlData.tel) r.tel = crawlData.tel
    if (crawlData.parking) r.parking = true
    if (crawlData.reservation) r.reservation = true
    if (crawlData.imageUrl) r.imageUrl = crawlData.imageUrl
    if (crawlData.menuItems?.length > 0) {
      r.menuItems = crawlData.menuItems.slice(0, 10)
      // 가격대 업데이트
      const prices = r.menuItems.map(m => m.price).filter(p => p > 0)
      if (prices.length >= 2) {
        r.priceRange = `${Math.min(...prices)}~${Math.max(...prices)}`
      }
    }
    if (crawlData.rv?.length > 0) {
      r.rv = crawlData.rv.slice(0, 5).map(rv => rv.slice(0, 200))
    }

    r.updatedAt = '2026-03-16'
    updated++

    // 리뷰 기반 태그 보강
    const allText = [...(r.rv || []), ...(r.tags || [])].join(' ')
    if (/혼밥|혼자|1인/.test(allText) && !(r.tags||[]).includes('혼밥가능')) (r.tags = r.tags || []).push('혼밥가능')
    if (/가성비|저렴|착한/.test(allText) && !(r.tags||[]).includes('가성비')) (r.tags = r.tags || []).push('가성비')
    if (/점심|런치/.test(allText) && !(r.tags||[]).includes('점심추천')) (r.tags = r.tags || []).push('점심추천')
    if (r.parking && !(r.tags||[]).includes('주차가능')) (r.tags = r.tags || []).push('주차가능')
    if (/단체|회식|룸/.test(allText) && !(r.tags||[]).includes('단체가능')) (r.tags = r.tags || []).push('단체가능')
    if (/데이트|분위기|커플/.test(allText) && !(r.tags||[]).includes('데이트')) (r.tags = r.tags || []).push('데이트')
    if (r.cnt >= 500 && !(r.tags||[]).includes('리뷰많음')) (r.tags = r.tags || []).push('리뷰많음')

    enriched++
  }
}

console.log(`\n업데이트: ${updated}개`)
console.log(`태그 보강: ${enriched}개`)

// JS 파일로 다시 출력
function toJS(r) {
  const lines = ['  {']
  lines.push(`    name: ${JSON.stringify(r.name)},`)
  lines.push(`    type: ${JSON.stringify(r.type || '')},`)
  if (r.priceRange) lines.push(`    priceRange: ${JSON.stringify(r.priceRange)},`)
  lines.push(`    cat: ${JSON.stringify(r.cat || [])},`)
  lines.push(`    e: ${JSON.stringify(r.e || '🍴')},`)
  lines.push(`    rt: ${r.rt || 0},`)
  lines.push(`    cnt: ${r.cnt || 0},`)
  lines.push(`    addr: ${JSON.stringify(r.addr || '')},`)
  lines.push(`    hours: ${JSON.stringify(r.hours || '')},`)
  if (r.tel) lines.push(`    tel: ${JSON.stringify(r.tel)},`)
  lines.push(`    tags: ${JSON.stringify(r.tags || [])},`)
  lines.push(`    moods: ${JSON.stringify(r.moods || [])},`)
  lines.push(`    wx: ${JSON.stringify(r.wx || [])},`)
  lines.push(`    scene: ${JSON.stringify(r.scene || [])},`)
  lines.push(`    rv: ${JSON.stringify(r.rv || [])},`)
  lines.push(`    lat: ${r.lat || 0},`)
  lines.push(`    lng: ${r.lng || 0},`)
  lines.push(`    exit4: ${r.exit4 || false},`)
  if (r.naverPlaceId) lines.push(`    naverPlaceId: ${JSON.stringify(r.naverPlaceId)},`)
  if (r.naverUrl) lines.push(`    naverUrl: ${JSON.stringify(r.naverUrl)},`)
  if (r.naverBlogCnt) lines.push(`    naverBlogCnt: ${r.naverBlogCnt},`)
  if (r.menuItems?.length) lines.push(`    menuItems: ${JSON.stringify(r.menuItems)},`)
  if (r.imageUrl) lines.push(`    imageUrl: ${JSON.stringify(r.imageUrl)},`)
  if (r.parking) lines.push(`    parking: true,`)
  if (r.reservation) lines.push(`    reservation: true,`)
  if (r.updatedAt) lines.push(`    updatedAt: ${JSON.stringify(r.updatedAt)},`)
  lines.push('  }')
  return lines.join('\n')
}

const output = `const restaurants = [\n${restaurants.map(r => toJS(r)).join(',\n')}\n]\n\nexport default restaurants\n`

fs.writeFileSync(DATA_FILE, output)
console.log(`\n파일 저장: ${DATA_FILE}`)

// 구문 검사
const { execSync } = await import('child_process')
try {
  execSync(`node --check ${DATA_FILE}`, { stdio: 'pipe' })
  console.log('구문 검사: ✅ 통과')
} catch (e) {
  console.error('구문 검사: ❌ 실패!')
  console.error(e.stderr?.toString())
  fs.copyFileSync(backupFile, DATA_FILE)
  console.log('백업에서 복원됨')
  process.exit(1)
}

console.log(`\n✅ 완료!`)
console.log(`   총 식당: ${restaurants.length}개`)
console.log(`   네이버 데이터 업데이트: ${updated}개`)
console.log(`   태그 보강: ${enriched}개`)
