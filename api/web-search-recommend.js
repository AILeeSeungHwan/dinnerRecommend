// 외부 웹 검색 기반 맛집 추천 API
// DB에 없는 메뉴 요청 시 Claude web_search로 실제 식당 발굴

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { menuQuery, area, usageCount } = req.body
  if (!menuQuery) return res.status(400).json({ error: 'No menuQuery' })

  const MODEL = 'claude-sonnet-4-6'
  const count = parseInt(usageCount) || 0
  const maxTokens = count >= 5 ? 800 : count >= 3 ? 1000 : 1200

  const systemPrompt = `당신은 ${area || '삼성역'} 맛집 큐레이터입니다. 웹 검색을 통해 실제 존재하는 식당 3곳을 찾아 추천합니다.

반드시 지켜야 할 규칙:
1. 반드시 웹 검색으로 실제 식당을 찾아야 합니다 (허구 금지)
2. 추천 이유는 3개 식당이 각각 완전히 다른 형식·톤으로 작성 (형식 다양화 필수):
   - 1번: 메뉴 설명 중심 (가격대, 시그니처 메뉴, 맛 특징)
   - 2번: 분위기·상황 중심 (왜 이 상황에서 이 식당인지)
   - 3번: 방문객 반응·평판 중심 (리뷰 키워드, 단골 증언 스타일)
3. 사용자 의도 반영: 해당 메뉴를 찾는 이유가 있을 것 → 그 맥락을 reason에 녹여라
4. JSON만 출력, 마크다운 금지

출력 형식:
{"recommendations":[
  {"rank":1,"restaurantName":"실제식당명","priceInfo":"1인 약 XX,000원","reason":"메뉴 중심 추천 이유 2~3문장","reviewHighlight":"핵심 키워드 15자 이내","address":"주소 또는 위치 설명","hours":"영업시간"},
  {"rank":2,"restaurantName":"실제식당명","priceInfo":"1인 약 XX,000원","reason":"상황·분위기 중심 추천 이유 2~3문장","reviewHighlight":"핵심 키워드 15자 이내","address":"주소 또는 위치 설명","hours":"영업시간"},
  {"rank":3,"restaurantName":"실제식당명","priceInfo":"1인 약 XX,000원","reason":"평판·반응 중심 추천 이유 2~3문장","reviewHighlight":"핵심 키워드 15자 이내","address":"주소 또는 위치 설명","hours":"영업시간"}
]}`

  const userPrompt = `${area || '삼성역'} 근처에서 "${menuQuery}" 맛집 3곳을 웹 검색으로 찾아 추천해주세요.
시사모(삼성역 직장인 커뮤니티), 네이버 지역, 카카오맵 등에서 실제 검색해서 찾아주세요.`

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'interleaved-thinking-2025-05-14'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: maxTokens,
        system: systemPrompt,
        tools: [{
          type: 'web_search_20250305',
          name: 'web_search',
          max_uses: 3
        }],
        messages: [{ role: 'user', content: userPrompt }]
      })
    })

    if (!response.ok) {
      let errBody = {}
      try { errBody = await response.json() } catch { errBody = { raw: await response.text().catch(()=>'') } }
      const errType = errBody?.error?.type || ''
      const errMsg = errBody?.error?.message || JSON.stringify(errBody).slice(0, 150)
      console.error(`Web search API ${response.status} [${errType}]:`, errMsg)

      let userMsg = `API 오류 (${response.status})`
      if (response.status === 401) userMsg = 'API 키 오류'
      else if (response.status === 429) userMsg = '요청이 너무 많아요. 잠시 후 다시 시도하세요'
      else if (errType === 'insufficient_quota' || response.status === 402) userMsg = '##QUOTA_EXCEEDED##'
      else userMsg = errMsg.slice(0, 100)

      return res.status(502).json({ error: userMsg, status: response.status, type: errType })
    }

    const data = await response.json()

    // content 블록에서 텍스트만 추출 (web_search 툴 결과 제외)
    const text = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text || '')
      .join('')

    if (!text) {
      return res.status(502).json({ error: '검색 결과를 가져오지 못했어요' })
    }

    // JSON 추출
    const cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim()
    const start = cleaned.indexOf('{')
    const end = cleaned.lastIndexOf('}')
    if (start === -1 || end === -1) {
      return res.status(502).json({ error: `외부 검색 응답 파싱 실패: "${text.slice(0, 60)}"` })
    }

    let parsed
    try {
      parsed = JSON.parse(cleaned.slice(start, end + 1))
    } catch {
      // 따옴표 정리 후 재시도
      const fixed = cleaned.slice(start, end + 1)
        .replace(/"(reason|reviewHighlight)":\s*"((?:[^"\\]|\\.)*)"/g, (_, k, v) =>
          `"${k}": "${v.replace(/(?<!\\)"/g, "'")}"`)
      try { parsed = JSON.parse(fixed) }
      catch { return res.status(502).json({ error: 'JSON 파싱 실패' }) }
    }

    if (!Array.isArray(parsed.recommendations) || parsed.recommendations.length === 0) {
      return res.status(502).json({ error: '추천 결과가 없어요' })
    }

    return res.status(200).json({
      recommendations: parsed.recommendations,
      isExternal: true,  // 외부 검색 결과임을 표시
      usage: data.usage || null
    })

  } catch (err) {
    console.error('Web search handler error:', err)
    return res.status(500).json({ error: err.message || '서버 내부 오류' })
  }
}
