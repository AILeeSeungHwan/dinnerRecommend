#!/usr/bin/env node
/**
 * import-licenses.mjs — 식품_일반음식점_서울특별시.csv → Supabase restaurant_licenses
 *
 * 정책:
 *  - 우리 7개 region 관련 동·구 식당만 필터링 (53만 → 수만 건)
 *  - upsert by mgmt_no (중복 차단)
 *  - 1000건 batch
 *  - EUC-KR/CP949 디코딩
 *
 * 실행: node scripts/govdata/import-licenses.mjs
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import fs from 'fs'
import path from 'path'
import { createReadStream } from 'fs'
import { parse } from 'csv-parse'
import iconv from 'iconv-lite'
import { createClient } from '@supabase/supabase-js'

const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY, {
  auth: { persistSession: false },
})

const CSV_PATH = path.resolve('scripts/govdata/식품_일반음식점_서울특별시.csv')

// 우리 region에 매칭되는 동·구 (서울만 — 판교/수원/용인은 별도)
const REGION_FILTERS = {
  samseong: ['역삼동', '대치동', '삼성동', '논현동', '청담동', '도곡동', '선릉'],
  jamsil:   ['잠실동', '신천동', '방이동', '석촌동', '송파동', '오금동'],
  gangnam:  ['역삼동', '신논현', '서초동', '논현동', '강남대로'],
}

function detectRegion(addr) {
  if (!addr) return null
  for (const [region, keywords] of Object.entries(REGION_FILTERS)) {
    if (keywords.some(k => addr.includes(k))) return region
  }
  return null
}

function parseDate(s) {
  if (!s || s.length < 8) return null
  const v = s.replace(/[^0-9]/g, '').slice(0, 8)
  if (v.length !== 8) return null
  return `${v.slice(0,4)}-${v.slice(4,6)}-${v.slice(6,8)}`
}

function statusEng(s) {
  if (!s) return null
  if (s.includes('영업')) return 'active'
  if (s.includes('폐업')) return 'closed'
  if (s.includes('휴업')) return 'suspended'
  return s
}

async function upsertBatch(rows) {
  if (!rows.length) return 0
  const { error } = await sb.from('restaurant_licenses').upsert(rows, { onConflict: 'mgmt_no' })
  if (error) { console.error('upsert err:', error.message); return 0 }
  return rows.length
}

async function main() {
  let total = 0, kept = 0, upserted = 0
  let batch = []
  const stream = createReadStream(CSV_PATH).pipe(iconv.decodeStream('cp949'))
  const parser = parse({ columns: true, skip_empty_lines: true, relax_quotes: true, relax_column_count: true })

  stream.pipe(parser)
  for await (const row of parser) {
    total++
    const status = row['상세영업상태명'] || row['영업상태명']
    if (!status || !status.includes('영업')) continue   // 영업 중만
    const addr = row['도로명주소'] || row['소재지전체주소'] || ''
    const region = detectRegion(addr)
    if (!region) continue
    kept++
    batch.push({
      mgmt_no: row['관리번호'],
      business_name: row['사업장명'],
      road_address: row['도로명주소'] || null,
      jibun_address: row['소재지전체주소'] || null,
      license_date: parseDate(row['인허가일자']),
      business_status: statusEng(row['영업상태명']),
      detail_status: row['상세영업상태명'] || null,
      business_type: row['업태구분명'] || null,
      area_size: parseFloat(row['소재지면적']) || null,
      seat_count: parseInt(row['좌석수']) || null,
      region_code: region,
      district: addr.split(' ').slice(0, 3).join(' '),
    })
    if (batch.length >= 1000) {
      upserted += await upsertBatch(batch); batch = []
      if (upserted % 5000 === 0) console.log(`  upserted ${upserted} (scanned ${total}, kept ${kept})`)
    }
  }
  upserted += await upsertBatch(batch)
  console.log(`\n완료: scanned ${total}, kept ${kept}, upserted ${upserted}`)
}

main().catch(e => { console.error(e); process.exit(1) })
