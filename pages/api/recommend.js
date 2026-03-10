export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { prompt, usageCount } = req.body
  if (!prompt) return res.status(400).json({ error: 'No prompt' })

  const MODEL = 'claude-haiku-4-5-20251001'

  // 7원 수준: 입력 약 800토큰 × 0.8$/M + 출력 약 700토큰 × 4$/M ≈ 7원
  // max_tokens 700~800으로 이성/감성 분리된 3개 결과를 충분히 담음
  const count = parseInt(usageCount) || 0
  const maxTokens = count >= 3 ? 700 : 800

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: maxTokens,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    if (!response.ok) {
      let errBody = {}
      try { errBody = await response.json() } catch { errBody = { raw: await response.text().catch(()=>'') } }
      const errType = errBody?.error?.type || ''
      const errMsg  = errBody?.error?.message || JSON.stringify(errBody).slice(0, 150)
      console.error(`Anthropic API ${response.status} [${errType}]:`, errMsg)

      let userMsg = `API 오류 (${response.status})`
      if (response.status === 401) userMsg = 'API 키 오류 — 환경변수를 확인하세요'
      else if (response.status === 404) userMsg = `모델을 찾을 수 없어요 (${MODEL})`
      else if (response.status === 429) userMsg = '요청이 너무 많아요. 잠시 후 다시 시도하세요'
      else if (errType === 'insufficient_quota' || response.status === 402) userMsg = '##QUOTA_EXCEEDED##'
      else userMsg = errMsg.slice(0, 100)

      return res.status(502).json({ error: userMsg, status: response.status, type: errType })
    }

    const data = await response.json()
    const text = (data.content || []).map(i => i.text || '').join('')

    const cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim()
    const start = cleaned.indexOf('{')
    const end   = cleaned.lastIndexOf('}')
    if (start === -1 || end === -1) {
      console.error('No JSON block:', text.slice(0, 200))
      return res.status(502).json({ error: `JSON 블록 없음 — AI 응답: "${text.slice(0,80)}"` })
    }
    const jsonStr = cleaned.slice(start, end + 1)

    let parsed
    try {
      parsed = JSON.parse(jsonStr)
    } catch (e1) {
      const fixed = jsonStr.replace(/"(reason|reviewHighlight|highlight)"\s*:\s*"((?:[^"\\]|\\.)*)"/g, (_, key, val) =>
        `"${key}": "${val.replace(/(?<!\\)"/g, "'")}"`)
      try {
        parsed = JSON.parse(fixed)
      } catch (e2) {
        const names = [...jsonStr.matchAll(/"restaurantName"\s*:\s*"([^"]+)"/g)].map(m => m[1])
        const reasons = [...jsonStr.matchAll(/"reason"\s*:\s*"((?:[^"\\]|\\.){0,500})"/g)].map(m => m[1])
        const highlights = [...jsonStr.matchAll(/"(?:reviewHighlight|highlight)"\s*:\s*"([^"]{0,50})"/g)].map(m => m[1])
        const ranks = [...jsonStr.matchAll(/"rank"\s*:\s*(\d)/g)].map(m => parseInt(m[1]))
        if (names.length === 0) {
          console.error('All parse failed:', jsonStr.slice(0, 200))
          return res.status(502).json({ error: `JSON 파싱 실패: ${e2.message.slice(0,60)}` })
        }
        parsed = { recommendations: names.map((name, i) => ({
          rank: ranks[i] || i + 1, restaurantName: name,
          reason: reasons[i] || '', reviewHighlight: highlights[i] || ''
        }))}
      }
    }

    if (!Array.isArray(parsed.recommendations) || parsed.recommendations.length === 0) {
      return res.status(502).json({ error: 'recommendations 배열이 비어있어요' })
    }

    const recs = parsed.recommendations
      .map(r => ({
        ...r,
        // 다양한 키명 호환 (restaurantName, name, restaurant_name 등)
        restaurantName: r.restaurantName || r.name || r.restaurant_name || r.restaurant || '',
        reviewHighlight: r.reviewHighlight || r.highlight || r.review_highlight || ''
      }))
      .filter(r => r.restaurantName && r.restaurantName.trim() !== '' && r.restaurantName !== 'undefined')
    if (recs.length === 0) {
      return res.status(502).json({ error: 'restaurantName 필드가 없는 응답' })
    }
    return res.status(200).json({ recommendations: recs, usage: data.usage || null })

  } catch (err) {
    console.error('Handler error:', err)
    return res.status(500).json({ error: err.message || '서버 내부 오류' })
  }
}
