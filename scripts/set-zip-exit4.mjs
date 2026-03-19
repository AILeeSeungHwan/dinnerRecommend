/**
 * 삼성역 식당 우편번호 조회 + exit4 재판정
 *
 * 사용법:
 *   node scripts/set-zip-exit4.mjs               # 실제 저장
 *   node scripts/set-zip-exit4.mjs --dry-run     # 변경 확인만
 *   GOOGLE_API_KEY=AIza... node scripts/set-zip-exit4.mjs  # Google API 사용
 *
 * exit4 판정:
 *   - 우편번호 06181~06196 → exit4: true (삼성역 3·4번 출구 / 대치동 권역)
 *   - 대치동이 아닌 주소(삼성동·역삼동·청담동 등)는 자동 exit4: false
 *     → 대치동만 API 조회하므로 Nominatim 기준 약 6분 소요
 *
 * 우편번호 조회:
 *   GOOGLE_API_KEY 있으면 Google Geocoding (빠름)
 *   없으면 Nominatim / OpenStreetMap (무료, 키 불필요, 1req/s)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_FILE = path.join(__dirname, '../data/samseong.js')
const DRY_RUN = process.argv.includes('--dry-run')
const GOOGLE_KEY = process.env.GOOGLE_API_KEY
const DELAY_MS = GOOGLE_KEY ? 300 : 1100

// 삼성역 3·4번 출구 우편번호 범위
const EXIT4_ZIP_MIN = 6181
const EXIT4_ZIP_MAX = 6196

// API 조회 필요 지역 (이 외 지역은 자동 exit4: false)
const NEED_API_DONG = ['대치동']

// ── 데이터 파싱 ──────────────────────────────────────────────
function parseDataFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const match = content.match(/const restaurants = (\[[\s\S]*?\])\s*\n\nexport default/)
  if (!match) throw new Error(`파싱 실패: ${filePath}`)
  return JSON.parse(match[1])
}

function toJsFile(restaurants) {
  return `const restaurants = ${JSON.stringify(restaurants, null, 2)}\n\nexport default restaurants\n`
}

function getDong(addr) {
  const m = addr.match(/^(\S+동)/)
  return m ? m[1] : null
}

function needApiLookup(addr) {
  const dong = getDong(addr)
  return NEED_API_DONG.includes(dong)
}

// ── Google Geocoding ─────────────────────────────────────────
async function getZipGoogle(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_KEY}&language=ko`
  const res = await fetch(url)
  const json = await res.json()
  if (json.status !== 'OK') return null
  for (const result of json.results) {
    for (const comp of result.address_components) {
      if (comp.types.includes('postal_code')) return comp.long_name
    }
  }
  return null
}

// ── Nominatim (OpenStreetMap) ────────────────────────────────
async function getZipNominatim(lat, lng) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`
  const res = await fetch(url, {
    headers: { 'User-Agent': 'dinnerRecommend-zipcode/1.0 (contact@ambitstock.com)' }
  })
  const json = await res.json()
  return json?.address?.postcode ?? null
}

async function getPostalCode(lat, lng) {
  return GOOGLE_KEY ? getZipGoogle(lat, lng) : getZipNominatim(lat, lng)
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

function isExit4(zip) {
  if (!zip) return false
  const num = parseInt(String(zip).replace(/\D/g, ''), 10)
  return num >= EXIT4_ZIP_MIN && num <= EXIT4_ZIP_MAX
}

// ── 메인 ────────────────────────────────────────────────────
async function main() {
  const source = GOOGLE_KEY ? 'Google Geocoding API' : 'Nominatim (OpenStreetMap, 무료)'
  console.log('📍 삼성역 우편번호 조회 + exit4 재판정')
  console.log(`   소스: ${source}`)
  console.log(`   exit4 범위: ${EXIT4_ZIP_MIN}~${EXIT4_ZIP_MAX} (삼성역 3·4번 출구)`)
  console.log(`   API 조회 대상: ${NEED_API_DONG.join(', ')} (나머지는 exit4:false 자동)`)
  if (DRY_RUN) console.log('   🔍 DRY-RUN: 파일 저장 안 함')
  console.log()

  const restaurants = parseDataFile(DATA_FILE)
  const apiTargets = restaurants.filter(r => needApiLookup(r.addr))
  console.log(`   총 식당: ${restaurants.length}개 | API 조회 대상: ${apiTargets.length}개`)
  const etaSec = Math.ceil(apiTargets.length * DELAY_MS / 1000)
  console.log(`   예상 소요: ~${Math.ceil(etaSec / 60)}분 (${etaSec}초)\n`)

  const zipCache = {}  // 동일 좌표 캐싱
  const results = []
  let apiCnt = 0
  let failCnt = 0
  let exit4TrueCnt = 0
  let changedCnt = 0

  for (let i = 0; i < restaurants.length; i++) {
    const r = restaurants[i]

    if (!needApiLookup(r.addr)) {
      // 대치동 외: 우편번호 조회 없이 exit4: false
      const newExit4 = false
      if (r.exit4 !== newExit4) changedCnt++
      results.push({ ...r, exit4: newExit4 })
      continue
    }

    // 대치동: API 조회
    if (!r.lat || !r.lng) {
      console.log(`[${i + 1}] ⚠️  lat/lng 없음: ${r.name}`)
      results.push(r)
      failCnt++
      continue
    }

    const cacheKey = `${r.lat.toFixed(4)},${r.lng.toFixed(4)}`
    let zip = zipCache[cacheKey]

    if (!zip) {
      try {
        zip = await getPostalCode(r.lat, r.lng)
        apiCnt++
        if (zip) zipCache[cacheKey] = zip
        await sleep(DELAY_MS)
      } catch (err) {
        console.log(`[${i + 1}] ❌ API 오류: ${r.name} — ${err.message}`)
        failCnt++
        results.push(r)
        continue
      }
    }

    const newExit4 = isExit4(zip)
    const oldExit4 = r.exit4
    const exitChanged = oldExit4 !== newExit4
    if (exitChanged) changedCnt++
    if (newExit4) exit4TrueCnt++

    const marker = newExit4 ? '🟢' : '⚪'
    const flag = exitChanged ? ` ← exit4 변경 (${oldExit4}→${newExit4})` : ''
    if (exitChanged || !zip) {
      console.log(`[${String(i + 1).padStart(3, '0')}] ${marker} zip:${zip ?? '미조회'} | ${r.name}${flag}`)
    }

    results.push({ ...r, zip: zip ?? r.zip, exit4: newExit4 })
  }

  // 대치동 중 exit4:true인 것 + 대치동 이외 false는 이미 count됨
  const finalExit4True = results.filter(r => r.exit4 === true).length
  const finalExit4False = results.filter(r => r.exit4 === false).length

  console.log('\n── 결과 요약 ──────────────────────────────')
  console.log(`API 호출: ${apiCnt}회 | 실패: ${failCnt}개`)
  console.log(`exit4 true:  ${finalExit4True}개 (기존 127개)`)
  console.log(`exit4 false: ${finalExit4False}개`)
  console.log(`exit4 변경:  ${changedCnt}개`)

  if (!DRY_RUN) {
    fs.writeFileSync(DATA_FILE, toJsFile(results), 'utf8')
    console.log(`\n✅ 저장 완료: ${DATA_FILE}`)
    console.log('   검증: node --check data/samseong.js')
  } else {
    console.log('\n🔍 DRY-RUN — 저장하려면 --dry-run 없이 실행')
  }
}

main().catch(err => {
  console.error('❌ 오류:', err.message)
  process.exit(1)
})
