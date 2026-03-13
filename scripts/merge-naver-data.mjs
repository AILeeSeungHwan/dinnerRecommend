/**
 * 네이버 크롤링 데이터를 기존 data/{region}.js에 병합
 *
 * 사용법:
 *   node scripts/merge-naver-data.mjs [region]
 *   node scripts/merge-naver-data.mjs all
 *   node scripts/merge-naver-data.mjs pangyo
 *
 * 파이프라인:
 *   1. scripts/naver-data/{region}.json 로드
 *   2. 리뷰 텍스트 → 키워드 추출 → tags/moods/scene 자동 매핑
 *   3. 기존 data/{region}.js 백업 (data/backup/)
 *   4. 확장 스키마로 data/{region}.js 업데이트
 *   5. node --check 구문 검증
 *   6. 검증 리포트 출력
 *
 * 주의:
 *   - rv 필드는 내부 분석 전용. 사이트에 절대 직접 출력 금지.
 *   - 기존 tags/moods/scene은 네이버 분석 결과와 합산 (기존 유지 + 신규 추가)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const NAVER_DATA_DIR = path.join(__dirname, 'naver-data')
const BACKUP_DIR = path.join(ROOT, 'data', 'backup')

// ─────────────────────────────────────────────
// 지역 설정
// ─────────────────────────────────────────────

const REGIONS = {
  samseong:   { label: '삼성역',   dataFile: 'data/samseong.js' },
  jamsil:     { label: '잠실',     dataFile: 'data/jamsil.js' },
  pangyo:     { label: '판교',     dataFile: 'data/pangyo.js' },
  yeongtong:  { label: '영통',     dataFile: 'data/yeongtong.js' },
  mangpo:     { label: '망포',     dataFile: 'data/mangpo.js' },
  yeongtongGu:{ label: '영통구청', dataFile: 'data/yeongtongGu.js' },
}

// ─────────────────────────────────────────────
// §11 키워드 분석 → 태그 매핑 룰 (CLAUDE.md 기준)
// NAVER_CRAWL.md §6 확장 버전
// ─────────────────────────────────────────────

const TAG_PATTERNS = [
  { pattern: /혼밥|혼자|1인|카운터|혼술/, tag: '혼밥가능' },
  { pattern: /가성비|저렴|착한가격|착한|싸다|가격대비|가격이 좋|저가/, tag: '가성비' },
  { pattern: /점심|런치|점심특선|백반|런치세트|점심 메뉴/, tag: '점심추천' },
  { pattern: /주차|파킹|발렛|주차장|주차 가능/, tag: '주차가능' },
  { pattern: /단체|회식|룸|프라이빗|단체석|회식 장소|단체 예약/, tag: '단체가능' },
  { pattern: /데이트|분위기|커플|로맨틱|분위기 좋|인테리어/, tag: '데이트' },
  { pattern: /웨이팅|줄서|대기|예약 필수|웨이트|기다/, tag: '웨이팅맛집' },
  { pattern: /심야|새벽|늦게까지|야식|밤늦게|24시/, tag: '심야영업' },
  { pattern: /깔끔|청결|위생|깨끗|청소|위생적/, tag: '깔끔한곳' },
  { pattern: /친절|서비스|응대|친절하|서비스 좋/, tag: '서비스좋음' },
  { pattern: /뷰|전망|야경|루프탑|경치|풍경/, tag: '뷰맛집' },
  { pattern: /인스타|SNS|사진|포토|촬영|감성/, tag: 'SNS맛집' },
  { pattern: /예약|예약필수|콜키지|예약 가능|사전 예약/, tag: '예약제' },
  { pattern: /배달|포장|테이크아웃|포장 가능|배달 가능/, tag: '포장가능' },
  { pattern: /아이|가족|어린이|키즈|어린이 메뉴|가족 모임/, tag: '가족모임' },
  { pattern: /반찬|정갈|한정식|백반/, tag: '한식정식' },
  { pattern: /신선|재료|산지|직접|당일/, tag: '신선재료' },
  { pattern: /매운|불닭|마라|매콤|화끈/, tag: '매운맛' },
]

const MOOD_PATTERNS = [
  { pattern: /스트레스|힐링|위로|지쳐|피곤|힘들/, mood: '스트레스 받음' },
  { pattern: /회식|팀|동료|환영회|송년|신년|회사/, mood: '회식' },
  { pattern: /데이트|기념일|프로포즈|생일 선물|연인|애인/, mood: '데이트' },
  { pattern: /혼자|혼밥|편하게|조용히|1인|나홀로/, mood: '혼밥' },
  { pattern: /축하|생일|승진|결혼|기념/, mood: '축하' },
  { pattern: /가벼운|간단|빠르게|빠른|간단히|가볍게/, mood: '기분 좋음' },
  { pattern: /특별|프리미엄|고급|럭셔리|스페셜/, mood: '특별한 날' },
  { pattern: /친구|동창|모임|미팅|약속/, mood: '친구모임' },
]

const SCENE_PATTERNS = [
  { pattern: /야장|야외|테라스|루프탑/, scene: '야장에 맥주' },
  { pattern: /국밥|해장|해장국|뼈해장/, scene: '해장하고 싶을 때' },
  { pattern: /고기|삼겹|갈비|등심/, scene: '고기 구우며' },
  { pattern: /초밥|스시|오마카세/, scene: '일식 특식' },
  { pattern: /파스타|피자|이탈리안/, scene: '이탈리안 디너' },
  { pattern: /이자카야|선술|포차|호프/, scene: '가볍게 술' },
  { pattern: /라멘|우동|소바|면요리/, scene: '면 한 그릇' },
  { pattern: /점심|런치|직장인/, scene: '점심 한 끼' },
  { pattern: /카페|브런치|디저트/, scene: '카페 브런치' },
  { pattern: /마라|훠궈|중식|짜장/, scene: '중식 회식' },
]

// ─────────────────────────────────────────────
// 키워드 분석
// ─────────────────────────────────────────────

/**
 * 리뷰 목록 + 카테고리 → 태그/무드/씬 추출
 * rv 원문은 이 함수 내에서만 사용, 반환값에 원문 불포함
 */
function analyzeReviews(reviews, category = []) {
  const allText = [
    ...reviews,
    ...(category || []),
  ].join(' ')

  const extractedTags = new Set()
  const extractedMoods = new Set()
  const extractedScenes = new Set()
  const extractedKeywords = new Set()

  // 태그 추출
  for (const { pattern, tag } of TAG_PATTERNS) {
    if (pattern.test(allText)) extractedTags.add(tag)
  }

  // 무드 추출
  for (const { pattern, mood } of MOOD_PATTERNS) {
    if (pattern.test(allText)) extractedMoods.add(mood)
  }

  // 씬 추출
  for (const { pattern, scene } of SCENE_PATTERNS) {
    if (pattern.test(allText)) extractedScenes.add(scene)
  }

  // 빈출 키워드 추출 (2자 이상 한국어 단어, 상위 10개)
  const wordFreq = {}
  const wordMatches = allText.match(/[가-힣]{2,6}/g) || []
  const stopwords = new Set([
    '맛있', '정말', '너무', '진짜', '완전', '이집', '가서', '그냥',
    '여기', '이곳', '이번', '다음', '항상', '자주', '매번', '나중',
    '음식', '식당', '맛집', '추천', '음식점', '가게', '가격', '분위기',
    '직원', '서비스', '주문', '메뉴', '요리', '맛이', '먹은', '먹고',
  ])
  for (const word of wordMatches) {
    if (stopwords.has(word) || word.length < 2) continue
    wordFreq[word] = (wordFreq[word] || 0) + 1
  }
  const topKeywords = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .filter(([, count]) => count >= 2)
    .map(([word]) => word)

  topKeywords.forEach(k => extractedKeywords.add(k))

  return {
    tags: [...extractedTags],
    moods: [...extractedMoods],
    scenes: [...extractedScenes],
    keywords: [...extractedKeywords],
  }
}

/**
 * 편의시설 정보로 추가 태그 생성
 */
function tagsFromFacilities(parking, reservation) {
  const tags = []
  if (parking === true) tags.push('주차가능')
  if (reservation === true) tags.push('예약제')
  return tags
}

// ─────────────────────────────────────────────
// 데이터 파일 파싱 / 직렬화
// ─────────────────────────────────────────────

/**
 * data/{region}.js 파싱
 */
function parseDataFile(filePath) {
  if (!fs.existsSync(filePath)) return { src: null, restaurants: [] }
  const src = fs.readFileSync(filePath, 'utf-8')

  // const restaurants = [...] 추출
  const match = src.match(/const restaurants\s*=\s*(\[[\s\S]*?\])\s*\n?\s*export default/)
  if (!match) return { src, restaurants: [] }

  try {
    const jsonStr = match[1]
      .replace(/,\s*([}\]])/g, '$1')
      .replace(/\/\/[^\n]*/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
    const restaurants = JSON.parse(jsonStr)
    return { src, restaurants }
  } catch (e) {
    console.warn(`  파싱 실패: ${filePath}: ${e.message}`)
    return { src, restaurants: [] }
  }
}

/**
 * 식당 배열 → JS 파일 문자열
 * trailing comma 없는 JSON5 호환 형식
 */
function toJsFile(restaurants) {
  const json = JSON.stringify(restaurants, null, 2)
  return `const restaurants = ${json}\n\nexport default restaurants\n`
}

/**
 * name 필드 안전 검증 (CLAUDE.md §14 규칙)
 */
function validateName(name) {
  if (typeof name !== 'string' || name.length === 0) return false
  if (/\//.test(name)) return false       // 슬래시 금지
  if (/[\u3040-\u30FF]/.test(name)) {     // 일본어 히라가나/카타카나 경고 (단독 사용 시)
    if (!/[가-힣]/.test(name)) return false
  }
  return true
}

// ─────────────────────────────────────────────
// 병합 로직
// ─────────────────────────────────────────────

/**
 * 기존 식당 1개 + 네이버 데이터 → 확장 스키마 적용
 */
function mergeRestaurant(existing, naverMatch) {
  if (!naverMatch) {
    // 매칭 실패 — 기존 데이터 그대로 유지 + updatedAt만 추가
    return {
      ...existing,
      updatedAt: new Date().toISOString().split('T')[0],
    }
  }

  const {
    naverPlaceId, naverRating, naverReviewCount, naverBlogCnt,
    menuItems, reviews, hours, telephone, parking, reservation,
    naverUrl, lat, lng,
  } = naverMatch

  // 리뷰 분석 (rv 원문은 이 블록에서만 처리)
  const analysis = analyzeReviews(reviews || [], existing.cat || [])
  const facilityTags = tagsFromFacilities(parking, reservation)

  // 기존 tags/moods/scene과 신규 분석 결과 합산 (중복 제거)
  const mergedTags = [...new Set([
    ...(existing.tags || []),
    ...analysis.tags,
    ...facilityTags,
  ])]

  const mergedMoods = [...new Set([
    ...(existing.moods || []),
    ...analysis.moods,
  ])]

  const mergedScene = [...new Set([
    ...(existing.scene || []),
    ...analysis.scenes,
  ])]

  // rv: 원문 요약만 저장 (내부 전용, 사이트 출력 절대 금지)
  // 원문 그대로 저장하되 개인정보는 이미 sanitizeReview()에서 제거됨
  const rvSummary = (reviews || []).slice(0, 5)

  return {
    // ── 기존 필드 유지 ──────────────────────
    name: existing.name,
    type: existing.type,
    e: existing.e,
    priceRange: existing.priceRange,
    cat: existing.cat,

    // ── 네이버로 교체 ───────────────────────
    rt: naverRating !== null && naverRating !== undefined
      ? Math.round(naverRating * 10) / 10
      : existing.rt,
    cnt: naverReviewCount !== null && naverReviewCount !== undefined
      ? naverReviewCount
      : existing.cnt,

    // ── 보강된 필드 ─────────────────────────
    addr: existing.addr,   // 기존 주소 유지 (네이버 주소는 참조용)
    hours: hours || existing.hours,
    tel: telephone || existing.tel || '',

    lat: lat || existing.lat,
    lng: lng || existing.lng,

    // ── 태그/무드/씬 (기존 + 신규 합산) ────
    tags: mergedTags,
    moods: mergedMoods,
    wx: existing.wx || [],
    scene: mergedScene,

    // ── rv (내부 전용 — 사이트 직접 출력 절대 금지) ──
    rv: rvSummary.length > 0 ? rvSummary : existing.rv,

    // ── 기존 유지 필드 ──────────────────────
    ...(existing.exit4 !== undefined && { exit4: existing.exit4 }),

    // ── 신규 추가 필드 ──────────────────────
    naverPlaceId: naverPlaceId || null,
    naverBlogCnt: naverBlogCnt || null,
    menuItems: menuItems && menuItems.length > 0 ? menuItems : [],
    keywords: analysis.keywords,
    naverUrl: naverUrl || '',
    parking: parking !== null && parking !== undefined ? parking : null,
    reservation: reservation !== null && reservation !== undefined ? reservation : null,
    updatedAt: new Date().toISOString().split('T')[0],
  }
}

// ─────────────────────────────────────────────
// 메인 병합 로직
// ─────────────────────────────────────────────

async function mergeRegion(region) {
  const config = REGIONS[region]
  if (!config) {
    console.error(`알 수 없는 지역: ${region}`)
    return false
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`  [${config.label}] 병합 시작`)
  console.log(`${'='.repeat(60)}`)

  // 네이버 크롤링 결과 로드
  const naverFile = path.join(NAVER_DATA_DIR, `${region}.json`)
  if (!fs.existsSync(naverFile)) {
    console.error(`  네이버 데이터 없음: ${naverFile}`)
    console.error(`  먼저 실행: node scripts/naver-crawl.mjs ${region}`)
    return false
  }

  let naverData
  try {
    naverData = JSON.parse(fs.readFileSync(naverFile, 'utf-8'))
  } catch (e) {
    console.error(`  JSON 파싱 실패: ${e.message}`)
    return false
  }

  // 매칭 맵 생성: existingName → naverMatch
  const matchMap = new Map()
  for (const m of (naverData.matched || [])) {
    matchMap.set(m.existingName, m)
  }

  console.log(`  네이버 매칭: ${matchMap.size}개`)
  console.log(`  신규 발견: ${(naverData.newRestaurants || []).length}개`)

  // 기존 데이터 로드
  const dataFilePath = path.join(ROOT, config.dataFile)
  const { restaurants: existingRestaurants } = parseDataFile(dataFilePath)
  if (existingRestaurants.length === 0) {
    console.error(`  기존 데이터 없음 또는 파싱 실패: ${dataFilePath}`)
    return false
  }

  console.log(`  기존 식당 수: ${existingRestaurants.length}개`)

  // 백업
  fs.mkdirSync(BACKUP_DIR, { recursive: true })
  const backupDate = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const backupFile = path.join(BACKUP_DIR, `${region}_${backupDate}.js`)
  fs.copyFileSync(dataFilePath, backupFile)
  console.log(`  백업: ${backupFile}`)

  // 병합 실행
  let mergedCount = 0
  let unchangedCount = 0

  const mergedRestaurants = existingRestaurants.map(existing => {
    // name 검증
    if (!validateName(existing.name)) {
      console.warn(`  경고: 잘못된 name 필드 — "${existing.name}" (그대로 유지)`)
      return existing
    }

    const naverMatch = matchMap.get(existing.name)
    if (naverMatch) {
      mergedCount++
      return mergeRestaurant(existing, naverMatch)
    } else {
      unchangedCount++
      return mergeRestaurant(existing, null)  // updatedAt만 추가
    }
  })

  // 신규 식당 추가 여부 확인 (기본: 추가하지 않음, 수동 검토 권장)
  const newRestaurants = naverData.newRestaurants || []
  if (newRestaurants.length > 0) {
    const newFile = path.join(NAVER_DATA_DIR, `${region}-new.json`)
    fs.writeFileSync(newFile, JSON.stringify(newRestaurants, null, 2))
    console.log(`  신규 식당 ${newRestaurants.length}개 → ${newFile} (수동 검토 후 추가)`)
  }

  // 파일 저장
  const newSrc = toJsFile(mergedRestaurants)
  fs.writeFileSync(dataFilePath, newSrc, 'utf-8')
  console.log(`  저장: ${dataFilePath}`)

  // 구문 검증
  console.log(`  구문 검증 중...`)
  try {
    execSync(`node --check "${dataFilePath}"`, { stdio: 'pipe' })
    console.log(`  구문 검증 통과`)
  } catch (e) {
    console.error(`  구문 검증 실패! 백업으로 복원 중...`)
    fs.copyFileSync(backupFile, dataFilePath)
    console.error(`  복원 완료: ${backupFile}`)
    console.error(e.stderr?.toString() || e.message)
    return false
  }

  // 태그 통계
  const emptyTagsCount = mergedRestaurants.filter(r => !r.tags || r.tags.length === 0).length
  const withNaverIdCount = mergedRestaurants.filter(r => r.naverPlaceId).length
  const withMenuCount = mergedRestaurants.filter(r => r.menuItems && r.menuItems.length > 0).length

  console.log(`\n  ─ 결과 요약 ─`)
  console.log(`  전체: ${mergedRestaurants.length}개`)
  console.log(`  네이버 데이터 적용: ${mergedCount}개`)
  console.log(`  기존 유지 (미매칭): ${unchangedCount}개`)
  console.log(`  빈 tags: ${emptyTagsCount}개 (${Math.round(emptyTagsCount / mergedRestaurants.length * 100)}%)`)
  console.log(`  naverPlaceId 보유: ${withNaverIdCount}개`)
  console.log(`  메뉴 정보 보유: ${withMenuCount}개`)

  return true
}

// ─────────────────────────────────────────────
// 전체 검증 리포트
// ─────────────────────────────────────────────

function runValidationReport() {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`  전체 데이터 검증 리포트`)
  console.log(`${'='.repeat(60)}`)

  let allPassed = true

  for (const [region, config] of Object.entries(REGIONS)) {
    const filePath = path.join(ROOT, config.dataFile)
    if (!fs.existsSync(filePath)) {
      console.log(`  ⏭  ${config.dataFile} — 없음`)
      continue
    }

    let syntaxOk = false
    try {
      execSync(`node --check "${filePath}"`, { stdio: 'pipe' })
      syntaxOk = true
    } catch {
      syntaxOk = false
      allPassed = false
    }

    const src = fs.readFileSync(filePath, 'utf-8')
    const nameCount = (src.match(/^\s+"name":/mg) || []).length
    const emptyTags = (src.match(/"tags":\s*\[\]/g) || []).length
    const withNaver = (src.match(/"naverPlaceId":/g) || []).length
    const withMenu = (src.match(/"menuItems":\s*\[(?!\])/g) || []).length

    const status = syntaxOk ? 'OK' : 'FAIL'
    console.log(
      `  [${status}] ${config.label.padEnd(6)} ${String(nameCount).padStart(4)}개` +
      `  빈태그: ${String(emptyTags).padStart(3)}` +
      `  네이버ID: ${String(withNaver).padStart(4)}` +
      `  메뉴: ${String(withMenu).padStart(4)}`
    )
  }

  if (allPassed) {
    console.log(`\n  모든 파일 구문 검증 통과`)
  } else {
    console.log(`\n  구문 오류 파일이 있습니다. 위 FAIL 항목을 확인하세요.`)
  }

  return allPassed
}

// ─────────────────────────────────────────────
// 진입점
// ─────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2)
  const target = args[0] || 'all'
  const dryRun = args.includes('--dry-run')

  if (dryRun) {
    console.log('[dry-run 모드] 파일을 수정하지 않고 분석만 수행합니다.')
  }

  if (target === 'report') {
    runValidationReport()
    return
  }

  const regionsToProcess = target === 'all'
    ? Object.keys(REGIONS)
    : [target]

  for (const region of regionsToProcess) {
    if (!REGIONS[region]) {
      console.error(`알 수 없는 지역: ${region}`)
      console.error(`사용법: node scripts/merge-naver-data.mjs [${Object.keys(REGIONS).join('|')}|all|report]`)
      process.exit(1)
    }

    if (dryRun) {
      // dry-run: 네이버 데이터 분석만
      const naverFile = path.join(NAVER_DATA_DIR, `${region}.json`)
      if (!fs.existsSync(naverFile)) {
        console.log(`  [${region}] 네이버 데이터 없음: ${naverFile}`)
        continue
      }
      const naverData = JSON.parse(fs.readFileSync(naverFile, 'utf-8'))
      const config = REGIONS[region]
      console.log(`\n[${config.label}] 분석 결과:`)
      console.log(`  매칭: ${(naverData.matched || []).length}개`)
      console.log(`  신규: ${(naverData.newRestaurants || []).length}개`)

      // 샘플 리뷰 분석
      const sample = (naverData.matched || []).slice(0, 3)
      for (const m of sample) {
        const analysis = analyzeReviews(m.reviews || [], m.category || [])
        console.log(`\n  "${m.existingName}"`)
        console.log(`    추출 태그: ${analysis.tags.join(', ') || '없음'}`)
        console.log(`    추출 무드: ${analysis.moods.join(', ') || '없음'}`)
        console.log(`    추출 씬: ${analysis.scenes.join(', ') || '없음'}`)
        console.log(`    키워드: ${analysis.keywords.join(', ') || '없음'}`)
      }
      continue
    }

    const success = await mergeRegion(region)
    if (!success) {
      console.error(`[${region}] 병합 실패`)
      process.exit(1)
    }
  }

  // 최종 검증 리포트
  if (!dryRun) {
    runValidationReport()
  }

  console.log('\n병합 완료')
}

main().catch(err => {
  console.error('병합 중 오류:', err)
  process.exit(1)
})
