export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { prompt, usageCount } = req.body
  if (!prompt) return res.status(400).json({ error: 'No prompt' })

  const MODEL = 'claude-haiku-4-5-20251001'

  // 사용 횟수별 max_tokens 분기 (3회~부터 절약 모드)
  const count = parseInt(usageCount) || 0
  const maxTokens = count >= 5 ? 600
                  : count >= 4 ? 800
                  : count >= 3 ? 1200
                  : 2000

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

    // API 키 없음 / 모델명 오류 / 크레딧 소진 등 모두 여기서 잡힘
    if (!response.ok) {
      let errBody = {}
      try { errBody = await response.json() } catch { errBody = { raw: await response.text().catch(()=>'') } }
      const errType = errBody?.error?.type || ''
      const errMsg  = errBody?.error?.message || JSON.stringify(errBody).slice(0, 150)
      console.error(`Anthropic API ${response.status} [${errType}]:`, errMsg)

      // 사용자에게 보여줄 메시지
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

    // ── JSON 추출 ──
    const cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim()
    const start = cleaned.indexOf('{')
    const end   = cleaned.lastIndexOf('}')
    if (start === -1 || end === -1) {
      console.error('No JSON block:', text.slice(0, 200))
      return res.status(502).json({ error: `JSON 블록 없음 — AI 응답: "${text.slice(0,80)}"` })
    }
    const jsonStr = cleaned.slice(start, end + 1)

    // ── 1차: 직접 파싱 ──
    let parsed
    try {
      parsed = JSON.parse(jsonStr)
    } catch (e1) {
      // ── 2차: 따옴표 교체 후 재파싱 ──
      const fixed = jsonStr.replace(/"(reason|reviewHighlight)"\s*:\s*"((?:[^"\\]|\\.)*)"/g, (_, key, val) =>
        `"${key}": "${val.replace(/(?<!\\)"/g, "'")}"`)
      try {
        parsed = JSON.parse(fixed)
      } catch (e2) {
        // ── 3차: regex 직접 추출 ──
        const names = [...jsonStr.matchAll(/"restaurantName"\s*:\s*"([^"]+)"/g)].map(m => m[1])
        const reasons = [...jsonStr.matchAll(/"reason"\s*:\s*"((?:[^"\\]|\\.){0,400})"/g)].map(m => m[1])
        const highlights = [...jsonStr.matchAll(/"reviewHighlight"\s*:\s*"([^"]{0,40})"/g)].map(m => m[1])
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

    return res.status(200).json({ recommendations: parsed.recommendations, usage: data.usage || null })

  } catch (err) {
    console.error('Handler error:', err)
    return res.status(500).json({ error: err.message || '서버 내부 오류' })
  }
}
