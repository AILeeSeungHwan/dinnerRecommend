#!/usr/bin/env node
/**
 * 브라우저 크롤링 결과({region}-browser.json)를 기존 data/{region}.js에 병합
 *
 * naver-crawl-browser.mjs + naver-detail-v3.mjs 파이프라인 후 실행
 *
 * 사용법: node scripts/merge-browser-data.mjs [region]
 *   예시: node scripts/merge-browser-data.mjs jamsil
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const NAVER_DIR = path.join(__dirname, 'naver-data')
const BACKUP_DIR = path.join(ROOT, 'data', 'backup')

const REGIONS = {
  samseong:    { label: '삼성역',   dataFile: 'data/samseong.js' },
  jamsil:      { label: '잠실',     dataFile: 'data/jamsil.js' },
  pangyo:      { label: '판교',     dataFile: 'data/pangyo.js' },
  yeongtong:   { label: '영통',     dataFile: 'data/yeongtong.js' },
  mangpo:      { label: '망포',     dataFile: 'data/mangpo.js' },
  yeongtongGu: { label: '영통구청', dataFile: 'data/yeongtongGu.js' },
}

// §11 키워드 → 태그 매핑
const TAG_PATTERNS = [
  { pattern: /혼밥|혼자|1인/, tag: '혼밥가능' },
  { pattern: /가성비|저렴|착한/, tag: '가성비' },
  { pattern: /점심|런치/, tag: '점심추천' },
  { pattern: /주차|파킹/, tag: '주차가능' },
  { pattern: /단체|회식|룸/, tag: '단체가능' },
  { pattern: /데이트|분위기|커플/, tag: '데이트' },
  { pattern: /웨이팅|줄서/, tag: '웨이팅맛집' },
  { pattern: /심야|새벽|24시/, tag: '심야영업' },
  { pattern: /깔끔|청결/, tag: '깔끔한곳' },
  { pattern: /친절|서비스/, tag: '서비스좋음' },
  { pattern: /뷰|전망|야경/, tag: '뷰맛집' },
]

const DESC_PATTERN = /입니다|메뉴입|드리는|즐기는|만들어진|준비했|묻어있는|볶은|우려낸|넣어|한상차림|맛볼 수|내어드리는|일품입니다|추천드립니다|즐길 수|차려지는/

function migrateMenuItem(item) {
  if ('menuName' in item) return item
  const name = (item.name || '').trim()
  const price = item.price || 0
  const isDesc = name.length > 20 || DESC_PATTERN.test(name)
  return {
    menuName: isDesc ? '' : name,
    price,
    description: isDesc ? name : ''
  }
}

// 카테고리 → type 매핑
function inferType(categories) {
  const cats = (categories || []).join(' ')
  if (/한식|국밥|찌개|백반|불고기/.test(cats)) return '한식'
  if (/일식|스시|초밥|라멘|돈카츠|우동/.test(cats)) return '일식'
  if (/중식|마라|짬뽕|짜장/.test(cats)) return '중식'
  if (/양식|파스타|스테이크|피자/.test(cats)) return '양식'
  if (/고기|삼겹|갈비|소고기|한우|돼지/.test(cats)) return '고기'
  if (/치킨|닭/.test(cats)) return '치킨'
  if (/해산물|회|횟집|해물/.test(cats)) return '해산물'
  if (/카페|디저트|베이커리|브런치/.test(cats)) return '카페'
  if (/술집|이자카야|포차|바|주점/.test(cats)) return '술집'
  if (/분식|떡볶이/.test(cats)) return '분식'
  if (/베트남|태국|인도|아시안/.test(cats)) return '아시안'
  if (/족발|보쌈|곱창/.test(cats)) return '족발보쌈'
  if (/뷔페|샤브/.test(cats)) return '뷔페'
  if (/햄버거|샌드위치|패스트/.test(cats)) return '패스트푸드'
  return '기타'
}

function extractTags(r) {
  const tags = [...(r.tags || [])]
  const allText = [r.name, ...(r.categories || []), ...(r.rv || [])].join(' ')
  for (const { pattern, tag } of TAG_PATTERNS) {
    if (pattern.test(allText) && !tags.includes(tag)) tags.push(tag)
  }
  if (r.cnt >= 500 && !tags.includes('리뷰많음')) tags.push('리뷰많음')
  return tags
}

function normalizeForMatch(name) {
  return (name || '').trim().toLowerCase().replace(/\s+/g, '').replace(/[·\-()（）]/g, '')
}

async function main() {
  const region = process.argv[2]
  if (!region || !REGIONS[region]) {
    console.error(`사용법: node scripts/merge-browser-data.mjs [region]`)
    console.error(`지역: ${Object.keys(REGIONS).join(', ')}`)
    process.exit(1)
  }

  const config = REGIONS[region]
  const browserFile = path.join(NAVER_DIR, `${region}-browser.json`)

  if (!fs.existsSync(browserFile)) {
    console.error(`브라우저 데이터 없음: ${browserFile}`)
    process.exit(1)
  }

  const naverData = JSON.parse(fs.readFileSync(browserFile, 'utf-8'))
  console.log(`[${config.label}] 브라우저 데이터: ${naverData.length}개`)

  // 기존 데이터 로드
  const dataPath = path.join(ROOT, config.dataFile)
  const mod = await import('file://' + dataPath + '?t=' + Date.now())
  const existing = JSON.parse(JSON.stringify(mod.default))
  console.log(`기존 데이터: ${existing.length}개`)

  // 이름 매칭 맵
  const existingMap = new Map()
  for (const r of existing) {
    existingMap.set(normalizeForMatch(r.name), r)
  }

  let matched = 0, added = 0

  // 1) 기존 데이터에 네이버 정보 보강
  for (const nr of naverData) {
    const key = normalizeForMatch(nr.name)
    const ex = existingMap.get(key)
    if (ex) {
      // 보강
      if (nr.naverPlaceId) ex.naverPlaceId = nr.naverPlaceId
      if (nr.cnt > 0) ex.cnt = nr.cnt
      if (nr.naverBlogCnt > 0) ex.naverBlogCnt = nr.naverBlogCnt
      if (nr.tel) ex.tel = nr.tel
      if (nr.hours) ex.hours = nr.hours
      if (nr.parking) ex.parking = true
      if (nr.reservation) ex.reservation = true
      if (nr.menuItems?.length > 0) {
        ex.menuItems = nr.menuItems.map(migrateMenuItem)
      }
      if (nr.rv?.length > 0) ex.rv = nr.rv
      if (nr.priceRange) ex.priceRange = nr.priceRange
      if (nr.imageUrl && !ex.imageUrl) ex.imageUrl = nr.imageUrl
      ex.tags = extractTags({ ...ex, ...nr })
      ex.updatedAt = new Date().toISOString().split('T')[0]
      matched++
    }
  }

  // 2) 신규 식당 추가
  const existingNames = new Set([...existingMap.keys()])
  for (const nr of naverData) {
    const key = normalizeForMatch(nr.name)
    if (existingNames.has(key)) continue
    if (!nr.name || nr.name.length < 2) continue
    existingNames.add(key)

    const newR = {
      name: nr.name,
      type: inferType(nr.categories),
      e: '',
      rt: nr.rt || 0,
      cnt: nr.cnt || 0,
      addr: nr.addr || '',
      hours: nr.hours || '',
      tel: nr.tel || '',
      priceRange: nr.priceRange || '',
      lat: nr.lat || 0,
      lng: nr.lng || 0,
      cat: (nr.categories || []).join(', '),
      tags: extractTags(nr),
      moods: [],
      wx: [],
      scene: [],
      rv: nr.rv || [],
      naverPlaceId: nr.naverPlaceId || '',
      naverBlogCnt: nr.naverBlogCnt || 0,
      menuItems: (nr.menuItems || []).map(migrateMenuItem),
      keywords: [],
      naverUrl: nr.naverPlaceId ? `https://pcmap.place.naver.com/restaurant/${nr.naverPlaceId}/home` : '',
      updatedAt: new Date().toISOString().split('T')[0],
      parking: nr.parking || false,
      reservation: nr.reservation || false,
    }
    existing.push(newR)
    added++
  }

  console.log(`매칭 보강: ${matched}개`)
  console.log(`신규 추가: ${added}개`)
  console.log(`최종 식당 수: ${existing.length}개`)

  // 백업
  fs.mkdirSync(BACKUP_DIR, { recursive: true })
  const bk = path.join(BACKUP_DIR, `${region}_merge_${new Date().toISOString().slice(0,10)}.js`)
  fs.copyFileSync(dataPath, bk)
  console.log(`백업: ${bk}`)

  // 저장
  const json = JSON.stringify(existing, null, 2)
  fs.writeFileSync(dataPath, `const restaurants = ${json}\n\nexport default restaurants\n`)

  // 구문 검증
  try {
    execSync(`node --check "${dataPath}"`, { stdio: 'pipe' })
    console.log(`구문 검증 통과`)
  } catch (e) {
    console.error(`구문 검증 실패!`)
    // 복원
    fs.copyFileSync(bk, dataPath)
    console.error(`백업에서 복원됨`)
    process.exit(1)
  }

  // 리포트
  const totalMenu = existing.reduce((s, r) => s + (r.menuItems?.length || 0), 0)
  const emptyMenu = existing.reduce((s, r) => s + (r.menuItems?.filter(m => !m.menuName).length || 0), 0)
  const withNaver = existing.filter(r => r.naverPlaceId).length
  const withCnt = existing.filter(r => r.cnt > 0).length
  const withMenu = existing.filter(r => r.menuItems?.length > 0).length

  console.log(`\n=== ${config.label} 최종 리포트 ===`)
  console.log(`  총 식당: ${existing.length}`)
  console.log(`  네이버ID 보유: ${withNaver}`)
  console.log(`  리뷰수 보유: ${withCnt}`)
  console.log(`  메뉴 보유: ${withMenu}`)
  console.log(`  총 menuItems: ${totalMenu}`)
  console.log(`  빈 menuName: ${emptyMenu}`)
}

main().catch(e => { console.error(e); process.exit(1) })
