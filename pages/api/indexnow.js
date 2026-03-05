import restaurants from '../../data/samseong'

const BASE = 'https://dinner.ambitstock.com'
const INDEXNOW_KEY = '699c79d934824e84b1302ac527943497'
const CATEGORIES = ['gukbap','meat','izakaya','chinese','western','group','chicken','japanese']

// 전체 URL 목록 생성
function getAllUrls() {
  const static_ = ['/', '/dinner/samseong', '/dinner/gangnam', '/dinner/jamsil']
  const cats = CATEGORIES.map(s => `/dinner/samseong/category/${s}`)
  const rests = restaurants.map(r => `/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`)
  return [...static_, ...cats, ...rests].map(u => `${BASE}${u}`)
}

export default async function handler(req, res) {
  // GET: 상태 확인
  if (req.method === 'GET') {
    const urls = getAllUrls()
    return res.status(200).json({
      message: 'IndexNow 제출 준비 완료',
      totalUrls: urls.length,
      key: INDEXNOW_KEY,
      usage: 'POST /api/indexnow 으로 제출'
    })
  }

  if (req.method !== 'POST') return res.status(405).end()

  try {
    const urls = getAllUrls()

    // IndexNow는 한 번에 최대 10,000개 허용 — 우리는 ~180개라 한 번에 가능
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

    // IndexNow 응답 코드
    // 200: 성공, 202: 수락됨, 400: 잘못된 요청, 403: 키 오류, 422: URL 오류, 429: 요청 과다
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
