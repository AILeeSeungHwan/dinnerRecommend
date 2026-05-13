#!/usr/bin/env node
/**
 * import-tour.mjs — 한국관광공사 TourAPI 4.0 → Supabase tour_restaurants
 * API: areaBasedList2  contentTypeId=39 (음식점)
 *   areaCode 1=서울, 31=경기
 *   sigunguCode: 강남구 등은 별도 매핑 — 일단 도 단위 전체 후 region 필터
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import { createClient } from '@supabase/supabase-js'

const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY, { auth: { persistSession: false } })
const KEY = process.env.TOUR_API_KEY  // Decoding 키 사용 (URL에 안전하게 들어감)
const BASE = 'https://apis.data.go.kr/B551011/KorService2/areaBasedList2'

const REGION_FILTERS = {
  samseong: ['역삼동', '대치동', '삼성동', '논현동', '청담동'],
  jamsil:   ['잠실', '신천', '방이', '석촌', '송파'],
  gangnam:  ['역삼', '신논현', '서초', '논현'],
  pangyo:   ['판교', '백현', '삼평', '분당'],
  suji:     ['수지'],
  yeongtong: ['영통'],
  mangpo:   ['망포'],
  yeongtongGu: ['매탄'],
}

function detectRegion(addr) {
  if (!addr) return null
  for (const [r, ks] of Object.entries(REGION_FILTERS)) {
    if (ks.some(k => addr.includes(k))) return r
  }
  return null
}

async function fetchPage(areaCode, pageNo) {
  const params = new URLSearchParams({
    serviceKey: KEY, MobileOS: 'ETC', MobileApp: 'dinner',
    _type: 'json', arrange: 'A', contentTypeId: '39',
    areaCode: String(areaCode), numOfRows: '100', pageNo: String(pageNo),
  })
  const url = `${BASE}?${params}`
  const r = await fetch(url)
  const body = await r.json()
  const items = body?.response?.body?.items?.item || []
  return items
}

async function importArea(areaCode, label) {
  let kept = 0, page = 1, batch = []
  while (true) {
    const items = await fetchPage(areaCode, page).catch(() => [])
    if (!items.length) break
    for (const it of items) {
      const addr = it.addr1 || ''
      const region = detectRegion(addr)
      if (!region) continue
      kept++
      batch.push({
        contentid: String(it.contentid),
        business_name: it.title,
        address: addr,
        main_image_url: it.firstimage || null,
        thumbnail_url: it.firstimage2 || null,
        category: it.cat3 || it.cat2 || null,
        region_code: region,
        lat: it.mapy ? parseFloat(it.mapy) : null,
        lng: it.mapx ? parseFloat(it.mapx) : null,
      })
      if (batch.length >= 200) {
        const { error } = await sb.from('tour_restaurants').upsert(batch, { onConflict: 'contentid' })
        if (error) console.error('err:', error.message); else console.log(`  ${label}: upserted ${batch.length} (kept ${kept})`)
        batch = []
      }
    }
    if (items.length < 100) break
    page++
    if (page > 200) break  // 안전 상한
  }
  if (batch.length) await sb.from('tour_restaurants').upsert(batch, { onConflict: 'contentid' })
  console.log(`  ${label} 완료: ${kept}`)
}

await importArea(1, '서울')
await importArea(31, '경기')
console.log('tour-import 완료')
