#!/usr/bin/env node
/**
 * match-restaurants.mjs — 본인 식당 ↔ 정부 데이터 매칭 → restaurant_gov_match upsert
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import fs from 'fs'
import path from 'path'
import { createClient } from '@supabase/supabase-js'

const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY, { auth: { persistSession: false } })
const REGIONS = ['samseong','jamsil','pangyo','yeongtong','mangpo','yeongtongGu','suji','gangnam']

function loadRestaurants(region) {
  const text = fs.readFileSync(`data/${region}.js`, 'utf-8')
  const m = text.match(/(\[[\s\S]*\])/)
  if (!m) return []
  let arr = m[1]
  arr = arr.replace(/,(\s*[}\]])/g, '$1')
  try { return JSON.parse(arr) } catch { return [] }
}

// 이름 정규화 — 매장명·점명·공백 제거
function normalize(s) {
  if (!s) return ''
  return s.replace(/\s+/g, '').replace(/[()【】\[\]]/g, '').toLowerCase()
}

async function fetchAllLicenses() {
  const out = []
  let from = 0
  while (true) {
    const { data, error } = await sb.from('restaurant_licenses')
      .select('business_name,road_address,license_date,business_status,business_type,region_code')
      .range(from, from + 999)
    if (error || !data?.length) break
    out.push(...data)
    if (data.length < 1000) break
    from += 1000
  }
  return out
}

async function fetchAllTour() {
  const { data } = await sb.from('tour_restaurants')
    .select('contentid,business_name,address,description,main_image_url,region_code')
  return data || []
}

async function main() {
  console.log('정부 데이터 로딩...')
  const licenses = await fetchAllLicenses()
  const tours = await fetchAllTour()
  console.log(`licenses ${licenses.length}, tours ${tours.length}`)

  // 인덱스: 정규화 이름 → 정부 데이터
  const licByName = new Map()
  for (const l of licenses) {
    const k = normalize(l.business_name)
    if (!licByName.has(k)) licByName.set(k, [])
    licByName.get(k).push(l)
  }
  const tourByName = new Map()
  for (const t of tours) tourByName.set(normalize(t.business_name), t)

  const upserts = []
  for (const region of REGIONS) {
    const rests = loadRestaurants(region)
    for (const r of rests) {
      const k = normalize(r.name)
      // license — region 일치 우선
      let lic = null
      const cands = licByName.get(k) || []
      if (cands.length) {
        lic = cands.find(c => c.region_code === region) || cands[0]
      }
      const tour = tourByName.get(k) || null
      if (!lic && !tour) continue
      upserts.push({
        site: 'dinner',
        region,
        restaurant_name: r.name,
        license_date: lic?.license_date || null,
        business_status: lic?.business_status || null,
        business_type: lic?.business_type || null,
        tour_contentid: tour?.contentid || null,
        tour_description: tour?.description || null,
        tour_image_url: tour?.main_image_url || null,
        match_confidence: lic ? (tour ? 100 : 85) : 70,
      })
    }
  }
  console.log(`매칭 ${upserts.length}건`)

  // 500개씩 upsert
  for (let i = 0; i < upserts.length; i += 500) {
    const batch = upserts.slice(i, i + 500)
    const { error } = await sb.from('restaurant_gov_match').upsert(batch, { onConflict: 'site,region,restaurant_name' })
    if (error) console.error('err:', error.message); else console.log(`  upserted ${i+batch.length}/${upserts.length}`)
  }
  console.log('완료')
}
main().catch(e => { console.error(e); process.exit(1) })
