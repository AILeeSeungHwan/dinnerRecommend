/**
 * govData.js — build-time Supabase fetch (식당 상세 페이지용)
 */
import { createClient } from '@supabase/supabase-js'

let _sb = null
function sb() {
  if (_sb) return _sb
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_KEY
  if (!url || !key) return null
  _sb = createClient(url, key, { auth: { persistSession: false } })
  return _sb
}

export async function fetchGovData(region, restaurantName) {
  const client = sb()
  if (!client) return null
  const { data, error } = await client
    .from('restaurant_gov_match')
    .select('license_date,business_status,business_type,hygiene_grade,hygiene_certified_at,tour_contentid,tour_description,tour_image_url,last_matched_at')
    .eq('site', 'dinner')
    .eq('region', region)
    .eq('restaurant_name', restaurantName)
    .maybeSingle()
  if (error || !data) return null
  return data
}

export function operatingYears(licenseDate) {
  if (!licenseDate) return null
  const y = parseInt(licenseDate.slice(0, 4))
  if (!y) return null
  return new Date().getFullYear() - y
}
