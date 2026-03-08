export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { prompt } = req.body
  if (!prompt) return res.status(400).json({ error: 'No prompt' })

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1200,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Anthropic API error:', response.status, errText)
      return res.status(502).json({ error: 'Upstream API error', status: response.status, detail: errText.slice(0, 200) })
    }

    const data = await response.json()
    const text = (data.content || []).map(i => i.text || '').join('')

    // ── JSON 추출: 코드블록 제거 → { } 블록 추출 ──
    const cleaned = text
      .replace(/```json\s*/gi, '')
      .replace(/```\s*/g, '')
      .trim()

    // { 부터 마지막 } 까지 추출 (greedy)
    const start = cleaned.indexOf('{')
    const end   = cleaned.lastIndexOf('}')
    if (start === -1 || end === -1) {
      console.error('No JSON block in response:', text.slice(0, 300))
      return res.status(502).json({ error: 'No JSON in response', raw: text.slice(0, 200) })
    }
    const jsonStr = cleaned.slice(start, end + 1)

    // ── 1차 시도: 직접 파싱 ──
    let parsed
    try {
      parsed = JSON.parse(jsonStr)
    } catch (e1) {
      // ── 2차 시도: 큰따옴표 중첩 수정 후 재파싱 ──
      // reason/reviewHighlight 필드값 안의 큰따옴표를 작은따옴표로 교체
      const fixed = jsonStr
        .replace(/"(reason|reviewHighlight)"\s*:\s*"((?:[^"\\]|\\.)*)"/g, (match, key, val) => {
          // val 안의 이스케이프되지 않은 큰따옴표 → 작은따옴표
          const safeVal = val.replace(/(?<!\\)"/g, "'")
          return `"${key}": "${safeVal}"`
        })
      try {
        parsed = JSON.parse(fixed)
        console.warn('JSON fixed with quote replacement')
      } catch (e2) {
        // ── 3차 시도: regex로 필드 직접 추출 ──
        console.warn('JSON parse failed twice, attempting regex extraction:', e2.message)
        const recs = []
        const rankRe = /"rank"\s*:\s*(\d)/g
        const nameRe = /"restaurantName"\s*:\s*"([^"]+)"/g
        const reasonRe = /"reason"\s*:\s*"((?:[^"\\]|\\.)*)"/g
        const hlRe = /"reviewHighlight"\s*:\s*"([^"]{0,30})"/g

        const ranks = [...jsonStr.matchAll(/"rank"\s*:\s*(\d)/g)].map(m => parseInt(m[1]))
        const names = [...jsonStr.matchAll(/"restaurantName"\s*:\s*"([^"]+)"/g)].map(m => m[1])
        const reasons = [...jsonStr.matchAll(/"reason"\s*:\s*"((?:[^"\\]|\\.){0,400})"/g)].map(m => m[1])
        const highlights = [...jsonStr.matchAll(/"reviewHighlight"\s*:\s*"([^"]{0,40})"/g)].map(m => m[1])

        for (let i = 0; i < Math.min(names.length, 3); i++) {
          recs.push({
            rank: ranks[i] || i + 1,
            restaurantName: names[i],
            reason: reasons[i] || '',
            reviewHighlight: highlights[i] || ''
          })
        }

        if (recs.length === 0) {
          console.error('All parse attempts failed. Raw:', jsonStr.slice(0, 300))
          return res.status(502).json({ error: 'JSON parse failed', raw: jsonStr.slice(0, 200) })
        }
        parsed = { recommendations: recs }
      }
    }

    if (!Array.isArray(parsed.recommendations) || parsed.recommendations.length === 0) {
      console.error('No recommendations in parsed:', JSON.stringify(parsed).slice(0, 200))
      return res.status(502).json({ error: 'No recommendations', parsed })
    }

    return res.status(200).json({ recommendations: parsed.recommendations, usage: data.usage || null })

  } catch (err) {
    console.error('Handler error:', err)
    return res.status(500).json({ error: 'Internal error', message: err.message })
  }
}
