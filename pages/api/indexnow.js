// IndexNow API - 검색엔진 URL 제출
// 이 파일은 recommend.js와 독립된 함수입니다 (Vercel dedup 방지)

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const SITE_HOST = 'dinner.ambitstock.com'
const SITE_BASE = `https://${SITE_HOST}`
const INDEXNOW_KEY = '699c79d934824e84b1302ac527943497'
const KEY_LOCATION = `${SITE_BASE}/${INDEXNOW_KEY}.txt`

async function fetchSitemapUrls() {
  const r = await fetch(`${SITE_BASE}/sitemap.xml`)
  if (!r.ok) return [SITE_BASE]
  const xml = await r.text()
  const matches = xml.match(/<loc>([^<]+)<\/loc>/g) || []
  return matches.length > 0
    ? matches.map(m => m.replace(/<\/?loc>/g, ''))
    : [SITE_BASE]
}

async function submitToIndexNow(urls) {
  return fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  })
}

const STATUS_MESSAGES = {
  200: '✅ 성공적으로 제출됨',
  202: '✅ 수락됨 (처리 중)',
  400: '❌ 잘못된 요청',
  403: '❌ 키 인증 실패',
  422: '❌ URL 형식 오류',
  429: '❌ 요청 한도 초과 (잠시 후 재시도)',
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      message: 'IndexNow 제출 준비 완료',
      key: INDEXNOW_KEY,
      host: SITE_HOST,
      usage: 'POST /api/indexnow',
    })
  }
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const urls = await fetchSitemapUrls()
    const r = await submitToIndexNow(urls)
    return res.status(200).json({
      submitted: urls.length,
      indexnowStatus: r.status,
      message: STATUS_MESSAGES[r.status] || `응답 코드: ${r.status}`,
      preview: urls.slice(0, 5).concat(urls.length > 5 ? [`... 외 ${urls.length - 5}개`] : []),
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
