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
        max_tokens: 300,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Anthropic API error:', response.status, errText)
      return res.status(502).json({ error: 'Upstream API error', status: response.status })
    }

    const data = await response.json()

    // content 블록에서 텍스트 추출
    const text = (data.content || []).map(i => i.text || '').join('')

    // JSON 추출 - 코드블록, 앞뒤 텍스트 제거 후 { } 블록만 파싱
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      console.error('No JSON in response:', text)
      return res.status(502).json({ error: 'No JSON in response', raw: text.slice(0, 200) })
    }

    let parsed
    try {
      parsed = JSON.parse(jsonMatch[0])
    } catch (parseErr) {
      console.error('JSON parse error:', parseErr.message, '\nRaw:', jsonMatch[0].slice(0, 300))
      return res.status(502).json({ error: 'JSON parse failed', raw: jsonMatch[0].slice(0, 200) })
    }

    // recommendations 배열 없으면 에러
    if (!Array.isArray(parsed.recommendations) || parsed.recommendations.length === 0) {
      console.error('No recommendations in parsed:', parsed)
      return res.status(502).json({ error: 'No recommendations', parsed })
    }

    return res.status(200).json({ recommendations: parsed.recommendations, usage: data.usage || null })

  } catch (err) {
    console.error('Handler error:', err)
    return res.status(500).json({ error: 'Internal error', message: err.message })
  }
}
