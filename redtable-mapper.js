/**
 * 서울관광재단 Redtable API → dinner-app 데이터 매핑 스크립트
 * 
 * 사용법: node redtable-mapper.js
 * 결과물:
 *   - mapping-report.json     : 매핑 결과 리포트
 *   - data-enriched/*.js      : 네이버 평점 + 이미지 + 메뉴 추가된 데이터 파일
 *   - data-new/*.js           : API 기반 신규 식당 데이터 (매핑 안된 식당)
 */

const https = require('https')
const fs    = require('fs')
const path  = require('path')

const TOKEN = 'veCLrz4uNeyhQFUdrkvoQ7pSKq54QKiXJErBMxfZ0GiL6JBgpT3AeuSrgSISfslb'
const BASE  = 'https://seoul.openapi.redtable.global'

// ── 지역별 중심 좌표 + 반경 ──────────────────────────────────────
const AREAS = {
  samseong:    { lat: 37.5088, lng: 127.0632, radius: 1.5, label: '삼성역' },
  jamsil:      { lat: 37.5130, lng: 127.1001, radius: 1.5, label: '잠실' },
  yeongtong:   { lat: 37.2518, lng: 127.0543, radius: 1.2, label: '영통역' },
  mangpo:      { lat: 37.2457, lng: 127.0726, radius: 1.2, label: '망포역' },
  yeongtongGu: { lat: 37.2617, lng: 127.0431, radius: 1.2, label: '영통구청' },
  pangyo:      { lat: 37.3956, lng: 127.1098, radius: 1.5, label: '판교' },
}

// ── 유틸 ─────────────────────────────────────────────────────────
function dist(lat1, lng1, lat2, lng2) {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = ''
      res.on('data', d => data += d)
      res.on('end', () => {
        try { resolve(JSON.parse(data)) }
        catch(e) { reject(new Error('JSON parse fail: ' + data.slice(0, 200))) }
      })
    }).on('error', reject)
  })
}

async function fetchAll(endpoint) {
  const all = []
  let page = 1
  while (true) {
    const url = `${BASE}${endpoint}?serviceKey=${encodeURIComponent(TOKEN)}&pageNo=${page}`
    process.stdout.write(`\r  ${endpoint} page ${page}...`)
    const res = await get(url)
    if (!res.body || res.body.length === 0) break
    all.push(...res.body)
    const { numOfRows, totalCount } = res.header
    if (all.length >= totalCount) break
    page++
    await sleep(300)
  }
  console.log(` → ${all.length}건`)
  return all
}

// ── 퍼지 매칭 ─────────────────────────────────────────────────────
function normalize(s) {
  return s.replace(/\s+/g, '').replace(/[^\uAC00-\uD7A3a-zA-Z0-9]/g, '').toLowerCase()
}

function fuzzyScore(a, b) {
  const na = normalize(a), nb = normalize(b)
  if (na === nb) return 1.0
  if (na.includes(nb) || nb.includes(na)) return 0.85
  // 앞 4글자 일치
  const short = Math.min(na.length, nb.length, 4)
  if (na.slice(0, short) === nb.slice(0, short)) return 0.7
  return 0
}

function matchRestaurant(existingName, apiList) {
  let best = null, bestScore = 0
  for (const r of apiList) {
    const score = fuzzyScore(existingName, r.RSTR_NM)
    if (score > bestScore) { bestScore = score; best = r }
  }
  return bestScore >= 0.7 ? { match: best, score: bestScore } : null
}

// ── 카테고리 추론 ──────────────────────────────────────────────────
function inferCat(bzcnd) {
  if (!bzcnd) return ['기타']
  const map = {
    '한식': ['한식'], '중식': ['중식'], '일식': ['일식'], '양식': ['양식'],
    '분식': ['분식'], '치킨': ['치킨'], '피자': ['양식'], '카페': ['카페'],
    '술집': ['이자카야'], '호프': ['이자카야']
  }
  for (const [k, v] of Object.entries(map)) {
    if (bzcnd.includes(k)) return v
  }
  return [bzcnd]
}

// ── 메인 ──────────────────────────────────────────────────────────
async function main() {
  console.log('\n🍽  서울관광재단 API → dinner-app 매핑 시작\n')

  // 1. API 전체 수집
  console.log('📡 API 데이터 수집 중...')
  const [rstrList, qltList, menuList, rstrImgList, foodImgList] = await Promise.all([
    fetchAll('/api/rstr').catch(e => { console.error('/api/rstr 오류:', e.message); return [] }),
    fetchAll('/api/rstr/qlt').catch(e => { console.error('/api/rstr/qlt 오류:', e.message); return [] }),
    fetchAll('/api/menu/korean').catch(e => { console.error('/api/menu/korean 오류:', e.message); return [] }),
    fetchAll('/api/rstr/img').catch(e => { console.error('/api/rstr/img 오류:', e.message); return [] }),
    fetchAll('/api/food/img').catch(e => { console.error('/api/food/img 오류:', e.message); return [] }),
  ])

  // 2. RSTR_ID 기준 인덱싱
  const qltById   = Object.fromEntries(qltList.map(q => [q.RSTR_ID, q]))
  const menuByRstr = {}
  for (const m of menuList) {
    if (!menuByRstr[m.RSTR_ID]) menuByRstr[m.RSTR_ID] = []
    menuByRstr[m.RSTR_ID].push(m)
  }
  const imgByRstr = {}
  for (const i of rstrImgList) {
    if (!imgByRstr[i.RSTR_ID]) imgByRstr[i.RSTR_ID] = []
    imgByRstr[i.RSTR_ID].push(i.RSTR_IMG_URL)
  }
  const foodImgByRstr = {}
  for (const i of foodImgList) {
    if (!foodImgByRstr[i.RSTR_ID]) foodImgByRstr[i.RSTR_ID] = []
    foodImgByRstr[i.RSTR_ID].push(i.FOOD_IMG_URL)
  }

  // 3. 지역별 처리
  const report = {}
  fs.mkdirSync('data-enriched', { recursive: true })
  fs.mkdirSync('data-new', { recursive: true })

  for (const [areaKey, area] of Object.entries(AREAS)) {
    console.log(`\n🗺  ${area.label} (${areaKey}) 처리 중...`)

    // API 식당 중 이 지역에 속하는 것 필터
    const areaApi = rstrList.filter(r => {
      if (!r.RSTR_LA || !r.RSTR_LO) return false
      const d = dist(area.lat, area.lng, parseFloat(r.RSTR_LA), parseFloat(r.RSTR_LO))
      return d <= area.radius
    })
    console.log(`  API 반경 내 식당: ${areaApi.length}개`)

    // 기존 데이터 파일 로드
    const dataFile = path.join(__dirname, `data/${areaKey}.js`)
    let existingRestaurants = []
    if (fs.existsSync(dataFile)) {
      const raw = fs.readFileSync(dataFile, 'utf8')
        .replace(/^const restaurants\s*=\s*/, '')
        .replace(/;\s*$/, '')
        .replace(/^module\.exports.*$/m, '')
        .trim()
      try { existingRestaurants = JSON.parse(raw) } catch(e) {
        // JS 객체 형식이면 eval 대신 아래처럼
        try { existingRestaurants = eval('(' + raw + ')') } catch(e2) {
          console.log(`  ⚠️  ${areaKey}.js 파싱 오류, 건너뜁니다`)
        }
      }
    }
    console.log(`  기존 식당: ${existingRestaurants.length}개`)

    // 매핑
    const matched = [], unmatched = [], apiOnly = []
    const usedApiIds = new Set()

    for (const existing of existingRestaurants) {
      const result = matchRestaurant(existing.name, areaApi)
      if (result) {
        const api = result.match
        usedApiIds.add(api.RSTR_ID)
        const qlt = qltById[api.RSTR_ID] || {}
        const menus = menuByRstr[api.RSTR_ID] || []
        const imgs = imgByRstr[api.RSTR_ID] || []
        const foodImgs = foodImgByRstr[api.RSTR_ID] || []

        // 기존 데이터에 API 데이터 병합
        const enriched = {
          ...existing,
          rstr_id: api.RSTR_ID,
          // 네이버 평점이 있으면 덮어씀
          ...(qlt.NAVER_GRAD ? { rt: parseFloat(parseFloat(qlt.NAVER_GRAD).toFixed(2)) } : {}),
          // 이미지
          ...(imgs.length ? { imgs } : {}),
          ...(foodImgs.length ? { foodImgs } : {}),
          // 메뉴 (상위 5개)
          ...(menus.length ? { apiMenus: menus.slice(0, 5).map(m => ({
            name: m.MENU_NM,
            price: m.MENU_PRICE,
            special: m.SPCLT_MENU_YN === 'Y'
          }))} : {}),
          // 수상
          ...(qlt.AWARD_INFO_DSCRN ? { award: qlt.AWARD_INFO_DSCRN } : {}),
        }
        matched.push({ existing: existing.name, api: api.RSTR_NM, score: result.score, enriched })
      } else {
        unmatched.push({ existing: existing.name })
      }
    }

    // API에만 있는 식당 (기존에 없는 것)
    for (const api of areaApi) {
      if (usedApiIds.has(api.RSTR_ID)) continue
      const qlt = qltById[api.RSTR_ID] || {}
      const menus = menuByRstr[api.RSTR_ID] || []
      const imgs = imgByRstr[api.RSTR_ID] || []
      const foodImgs = foodImgByRstr[api.RSTR_ID] || []

      apiOnly.push({
        name: api.RSTR_NM,
        rstr_id: api.RSTR_ID,
        type: api.BSNS_STATM_BZCND_NM || '기타',
        cat: inferCat(api.BSNS_STATM_BZCND_NM),
        e: '🍽',
        rt: qlt.NAVER_GRAD ? parseFloat(parseFloat(qlt.NAVER_GRAD).toFixed(2)) : null,
        addr: api.RSTR_RDNMADR || api.RSTR_LNNO_ADRES || '',
        lat: parseFloat(api.RSTR_LA),
        lng: parseFloat(api.RSTR_LO),
        tel: api.RSTR_TELNO || null,
        ...(imgs.length ? { imgs } : {}),
        ...(foodImgs.length ? { foodImgs } : {}),
        ...(menus.length ? { apiMenus: menus.slice(0, 5).map(m => ({
          name: m.MENU_NM, price: m.MENU_PRICE, special: m.SPCLT_MENU_YN === 'Y'
        }))} : {}),
        ...(qlt.AWARD_INFO_DSCRN ? { award: qlt.AWARD_INFO_DSCRN } : {}),
        // 기존 필드 플레이스홀더
        priceRange: menus.length ? (() => {
          const prices = menus.map(m => m.MENU_PRICE).filter(Boolean).sort((a,b)=>a-b)
          if (!prices.length) return '가격 미확인'
          return prices.length === 1 ? `${prices[0]}` : `${prices[0]}~${prices[prices.length-1]}`
        })() : '가격 미확인',
        tags: [],
        moods: [],
        scene: [],
        rv: [],
        wx: [],
        hours: api.BSNS_TM_CN || '영업시간 미확인',
      })
    }

    report[areaKey] = {
      area: area.label,
      existing: existingRestaurants.length,
      apiInArea: areaApi.length,
      matched: matched.length,
      unmatched: unmatched.length,
      apiOnly: apiOnly.length,
      unmatchedList: unmatched.map(u => u.existing),
      matchedList: matched.map(m => `${m.existing} → ${m.api} (${m.score.toFixed(2)})`),
      apiOnlyList: apiOnly.map(a => a.name),
    }

    console.log(`  ✅ 매핑됨: ${matched.length}  ❌ 미매핑: ${unmatched.length}  🆕 API신규: ${apiOnly.length}`)

    // enriched 파일 저장
    const enrichedData = matched.map(m => m.enriched)
    fs.writeFileSync(
      `data-enriched/${areaKey}.js`,
      `const restaurants = ${JSON.stringify(enrichedData, null, 2)}\n\nmodule.exports = restaurants\n`
    )

    // API 신규 식당 파일 저장
    if (apiOnly.length > 0) {
      fs.writeFileSync(
        `data-new/${areaKey}-api-new.js`,
        `// API에서 발견된 신규 식당 후보 (기존 데이터와 매핑 안됨)\n` +
        `// 검토 후 필요한 필드(tags, moods, scene, rv 등) 추가해서 사용하세요\n` +
        `const newRestaurants = ${JSON.stringify(apiOnly, null, 2)}\n\nmodule.exports = newRestaurants\n`
      )
    }
  }

  // 최종 리포트 저장
  fs.writeFileSync('mapping-report.json', JSON.stringify(report, null, 2))

  console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('📊 최종 리포트')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  for (const [key, r] of Object.entries(report)) {
    console.log(`\n${r.area} (${key})`)
    console.log(`  기존 ${r.existing}개 / API반경내 ${r.apiInArea}개`)
    console.log(`  매핑 성공: ${r.matched}개 | 미매핑(기존만): ${r.unmatched}개 | API신규: ${r.apiOnly}개`)
    if (r.unmatchedList.length > 0) {
      console.log(`  ⚠  미매핑 식당:`)
      r.unmatchedList.forEach(n => console.log(`     - ${n}`))
    }
  }
  console.log('\n✅ 완료!')
  console.log('   data-enriched/  → 기존 데이터 + API 데이터 병합본')
  console.log('   data-new/       → API에서 새로 발견된 식당 후보')
  console.log('   mapping-report.json → 전체 매핑 리포트\n')
}

main().catch(console.error)
