/**
 * 구글 Places API로 평점(rt, cnt) 일괄 업데이트
 *
 * 사용법:
 *   GOOGLE_API_KEY=your_key node scripts/update-ratings.mjs
 *   GOOGLE_API_KEY=your_key node scripts/update-ratings.mjs --region samseong
 *   GOOGLE_API_KEY=your_key node scripts/update-ratings.mjs --region samseong --region jamsil
 *
 * 동작:
 *   - 기존 데이터의 rt, cnt 필드만 Google 최신값으로 교체
 *   - 나머지 필드(name, tags, moods, rv 등) 절대 건드리지 않음
 *   - 미발견 식당은 기존값 유지 (덮어쓰지 않음)
 */

import fs from 'fs'

const API_KEY = process.env.GOOGLE_API_KEY
if (!API_KEY) {
  console.error('❌ GOOGLE_API_KEY 환경변수를 설정하세요')
  console.error('   export GOOGLE_API_KEY=AIza...')
  process.exit(1)
}

const DATA_FILES = {
  samseong:    'data/samseong.js',
  jamsil:      'data/jamsil.js',
  pangyo:      'data/pangyo.js',
  yeongtong:   'data/yeongtong.js',
  mangpo:      'data/mangpo.js',
  yeongtongGu: 'data/yeongtongGu.js',
}

// CLI --region 파싱 (복수 허용)
const args = process.argv.slice(2)
const regions = []
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--region' && args[i + 1]) {
    regions.push(args[++i])
  }
}
const targets = regions.length
  ? Object.fromEntries(regions.map(r => [r, DATA_FILES[r]]))
  : DATA_FILES

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

// ── Google Find Place from Text ──────────────────────────────
async function fetchRating(name, lat, lng) {
  const params = new URLSearchParams({
    input: name,
    inputtype: 'textquery',
    fields: 'rating,user_ratings_total',
    language: 'ko',
    key: API_KEY,
  })
  // 좌표가 있으면 반경 300m 이내로 한정 → 동명이업 방지
  if (lat && lng) {
    params.set('locationbias', `circle:300@${lat},${lng}`)
  }

  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?${params}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)

  const data = await res.json()
  if (data.status === 'REQUEST_DENIED') throw new Error(`API 거부: ${data.error_message}`)
  if (data.status !== 'OK' || !data.candidates?.length) return null

  const c = data.candidates[0]
  if (c.rating == null) return null   // 평점 없는 신규 장소 제외
  return {
    rt:  Math.round(c.rating * 10) / 10,          // 소수 1자리
    cnt: c.user_ratings_total || 0,
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

// ── 메인 ────────────────────────────────────────────────────
async function main() {
  const summary = {}

  for (const [region, filePath] of Object.entries(targets)) {
    if (!filePath) {
      console.log(`⏭️  알 수 없는 지역: ${region}`)
      continue
    }
    if (!fs.existsSync(filePath)) {
      console.log(`⏭️  파일 없음: ${filePath}`)
      continue
    }

    console.log(`\n${'='.repeat(50)}`)
    console.log(`  ${region}  (${filePath})`)
    console.log('='.repeat(50))

    const restaurants = parseDataFile(filePath)
    let updated = 0, same = 0, notFound = 0, errors = 0

    for (let i = 0; i < restaurants.length; i++) {
      const r = restaurants[i]
      const prefix = `  [${String(i + 1).padStart(3)}/${restaurants.length}] ${r.name.slice(0, 20).padEnd(20)}`

      try {
        const result = await fetchRating(r.name, r.lat, r.lng)
        await sleep(120)   // ~8 req/sec — findplacefromtext 무료 한도 여유있음

        if (!result) {
          console.log(`${prefix} — 미발견 (기존 rt:${r.rt} 유지)`)
          notFound++
          continue
        }

        if (result.rt === r.rt && result.cnt === r.cnt) {
          console.log(`${prefix} = rt:${r.rt} cnt:${r.cnt?.toLocaleString()} (동일)`)
          same++
        } else {
          const rtDiff  = result.rt  !== r.rt  ? ` rt:${r.rt}→${result.rt}`   : ''
          const cntDiff = result.cnt !== r.cnt  ? ` cnt:${(r.cnt||0).toLocaleString()}→${result.cnt.toLocaleString()}` : ''
          console.log(`${prefix} ✅${rtDiff}${cntDiff}`)
          restaurants[i] = { ...r, rt: result.rt, cnt: result.cnt }
          updated++
        }
      } catch (e) {
        console.log(`${prefix} 💥 ${e.message}`)
        errors++
        await sleep(1000)
      }
    }

    // 평점 내림차순 재정렬
    restaurants.sort((a, b) => (b.rt - a.rt) || (b.cnt - a.cnt))

    fs.writeFileSync(filePath, toJsFile(restaurants))
    summary[region] = { total: restaurants.length, updated, same, notFound, errors }
    console.log(`\n  ✅ 저장: ${filePath}`)
    console.log(`     업데이트 ${updated} / 동일 ${same} / 미발견 ${notFound} / 오류 ${errors}`)
  }

  // 최종 요약
  console.log('\n' + '='.repeat(50))
  console.log('  최종 요약')
  console.log('='.repeat(50))
  let totalUpdated = 0
  for (const [region, s] of Object.entries(summary)) {
    console.log(`  ${region.padEnd(14)} 총 ${s.total}개 | 변경 ${s.updated} | 동일 ${s.same} | 미발견 ${s.notFound} | 오류 ${s.errors}`)
    totalUpdated += s.updated
  }
  console.log(`\n  전체 변경: ${totalUpdated}개 식당 평점 업데이트 완료`)
  console.log('\n  다음 단계: node --check data/*.js 로 구문 검사 후 배포')
}

main().catch(e => {
  console.error('\n💥 실행 오류:', e.message)
  process.exit(1)
})
