import { createClient } from '@supabase/supabase-js'

function getHealthClient() {
  const url = process.env.HEALTH_SUPABASE_URL
  const key = process.env.HEALTH_SUPABASE_SERVICE_KEY
  if (!url || !key) return null
  return createClient(url, key, { auth: { persistSession: false } })
}

function kstDate(isoStr) {
  return new Date(new Date(isoStr).getTime() + 9 * 3600000).toISOString().slice(0, 10)
}

const SEARCH_SOURCES = ['google', 'naver', 'daum', 'bing', 'zum', 'yahoo']

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()

  const supabase = getHealthClient()
  if (!supabase) return res.status(500).json({ error: 'HEALTH_SUPABASE_URL / HEALTH_SUPABASE_SERVICE_KEY not configured' })

  const { from, to } = req.query
  const fromDate = from || new Date(Date.now() + 9 * 3600000 - 7 * 86400000).toISOString().slice(0, 10)
  const toDate   = to   || new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 10)

  // KST 기준으로 UTC 범위 계산
  const fromUTC = fromDate + 'T00:00:00+09:00'
  const toUTC   = toDate   + 'T23:59:59+09:00'

  const { data: rows, error } = await supabase
    .from('pageview_events')
    .select('slug, title, source, keyword, created_at, device')
    .eq('site', 'dinner')
    .gte('date', fromDate)
    .lte('date', toDate)
    .order('created_at', { ascending: false })
    .limit(10000)

  if (error) return res.status(500).json({ error: error.message })
  if (!rows) return res.json({ summary: {}, by_source: [], by_page: [], by_date: [], recent: [] })

  // 집계
  const total = rows.length
  const srcMap = {}
  const pageMap = {}
  const dateMap = {}

  rows.forEach(r => {
    const src = r.source || 'unknown'
    srcMap[src] = (srcMap[src] || 0) + 1

    const slug = r.slug || '/'
    if (!pageMap[slug]) pageMap[slug] = { slug, title: r.title, views: 0, search_views: 0, keywords: new Set() }
    pageMap[slug].views++
    if (SEARCH_SOURCES.includes(src)) {
      pageMap[slug].search_views++
      if (r.keyword) pageMap[slug].keywords.add(r.keyword)
    }

    const date = kstDate(r.created_at)
    if (!dateMap[date]) dateMap[date] = { date, total: 0, search: 0, by_source: {} }
    dateMap[date].total++
    if (SEARCH_SOURCES.includes(src)) dateMap[date].search++
    dateMap[date].by_source[src] = (dateMap[date].by_source[src] || 0) + 1
  })

  const search = SEARCH_SOURCES.reduce((a, s) => a + (srcMap[s] || 0), 0)
  const direct = srcMap['direct'] || 0

  const by_source = Object.entries(srcMap)
    .map(([source, count]) => ({ source, count, pct: total > 0 ? (count / total * 100).toFixed(1) : '0' }))
    .sort((a, b) => b.count - a.count)

  const by_page = Object.values(pageMap)
    .map(p => ({ ...p, keyword_count: p.keywords.size, keywords: undefined }))
    .sort((a, b) => b.search_views - a.search_views)

  const by_date = Object.values(dateMap).sort((a, b) => a.date.localeCompare(b.date))

  const recent = rows.slice(0, 100).map(r => ({
    time: new Date(new Date(r.created_at).getTime() + 9 * 3600000).toISOString().slice(11, 19),
    date: kstDate(r.created_at),
    slug: r.slug,
    title: r.title,
    source: r.source || 'unknown',
    keyword: r.keyword || null,
  }))

  return res.json({
    summary: { total, search, direct, other: total - search - direct },
    by_source,
    by_page,
    by_date,
    recent,
    meta: { from: fromDate, to: toDate },
  })
}
