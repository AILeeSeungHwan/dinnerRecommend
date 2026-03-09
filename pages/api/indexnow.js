// IndexNow 제출 API - 사이트맵 기반 URL 수집
const BASE = 'https://dinner.ambitstock.com'
const INDEXNOW_KEY = '699c79d934824e84b1302ac527943497'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      message: 'IndexNow 제출 준비 완료',
      key: INDEXNOW_KEY,
      usage: 'POST /api/indexnow 으로 제출'
    })
  }

  if (req.method !== 'POST') return res.status(405).end()

  try {
    // 사이트맵에서 URL 수집
    const sitemapRes = await fetch(`${BASE}/sitemap.xml`)
    let urls = [BASE]

    if (sitemapRes.ok) {
      const xml = await sitemapRes.text()
      const matches = xml.match(/<loc>([^<]+)<\/loc>/g) || []
      urls = matches.map(m => m.replace(/<\/?loc>/g, ''))
    }

    if (urls.length === 0) {
      return res.status(400).json({ error: '사이트맵에서 URL을 찾을 수 없어요' })
    }

    const body = {
      host: 'dinner.ambitstock.com',
      key: INDEXNOW_KEY,
      keyLocation: `${BASE}/${INDEXNOW_KEY}.txt`,
      urlList: urls
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body)
    })

    const statusMsg = {
      200: '✅ 성공적으로 제출됨',
      202: '✅ 수락됨 (처리 중)',
      400: '❌ 잘못된 요청',
      403: '❌ 키 인증 실패',
      422: '❌ URL 형식 오류',
      429: '❌ 요청 한도 초과 (잠시 후 재시도)',
    }

    return res.status(200).json({
      submitted: urls.length,
      indexnowStatus: response.status,
      message: statusMsg[response.status] || `응답 코드: ${response.status}`,
      urls: urls.slice(0, 5).concat([`... 외 ${urls.length - 5}개`])
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
