#!/usr/bin/env node
/**
 * import-hygiene.mjs — 식약처 음식점 위생등급 → Supabase
 * API: https://openapi.foodsafetykorea.go.kr/api/{KEY}/I2853/json/{start}/{end}
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import { createClient } from '@supabase/supabase-js'

const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY, { auth: { persistSession: false } })
const KEY = process.env.MFDS_API_KEY
const BASE = `https://openapi.foodsafetykorea.go.kr/api/${KEY}/I2853/json`

const REGION_FILTERS = {
  samseong: ['역삼동', '대치동', '삼성동', '논현동', '청담동', '도곡동'],
  jamsil:   ['잠실동', '신천동', '방이동', '석촌동', '송파동', '오금동'],
  gangnam:  ['역삼동', '신논현', '서초동', '논현동'],
  pangyo:   ['판교동', '백현동', '삼평동', '운중동', '정자동'],
  suji:     ['수지구', '풍덕천동', '동천동'],
  yeongtong: ['영통동', '영통구'],
  mangpo:   ['망포동'],
  yeongtongGu: ['매탄동', '영통구'],
}

function detectRegion(addr) {
  if (!addr) return null
  for (const [r, ks] of Object.entries(REGION_FILTERS)) {
    if (ks.some(k => addr.includes(k))) return r
  }
  return null
}

function mapGrade(g) {
  if (!g) return null
  if (g.includes('매우')) return 'very_excellent'
  if (g.includes('우수')) return 'excellent'
  if (g.includes('좋음')) return 'good'
  return g
}

async function main() {
  let kept = 0, total = 0
  let start = 1, batch = []
  while (true) {
    const end = start + 999
    const url = `${BASE}/${start}/${end}`
    const r = await fetch(url)
    const body = await r.json()
    const root = body.I2853 || {}
    const rows = root.row || []
    if (!rows.length) break
    for (const row of rows) {
      total++
      const addr = row.SITE_ADDR || row.ADDR || ''
      const region = detectRegion(addr)
      if (!region) continue
      kept++
      batch.push({
        business_name: row.UPSO_NM || row.BSSH_NM,
        address: addr,
        hygiene_grade: mapGrade(row.GRADE),
        certified_at: row.DESGN_DT ? `${row.DESGN_DT.slice(0,4)}-${row.DESGN_DT.slice(4,6)}-${row.DESGN_DT.slice(6,8)}` : null,
        region_code: region,
      })
      if (batch.length >= 500) {
        const { error } = await sb.from('restaurant_hygiene_ratings').insert(batch)
        if (error) console.error('err:', error.message); else console.log(`  inserted ${batch.length} (total kept ${kept})`)
        batch = []
      }
    }
    if (rows.length < 1000) break
    start = end + 1
  }
  if (batch.length) await sb.from('restaurant_hygiene_ratings').insert(batch)
  console.log(`완료: scanned ${total}, kept ${kept}`)
}
main().catch(e => { console.error(e); process.exit(1) })
