import restaurants from '../data/samseong'

const BASE = 'https://dinner.ambitstock.com'

export async function getServerSideProps({ res }) {
  const topRated = [...restaurants]
    .sort((a, b) => b.rt - a.rt)
    .slice(0, 50)

  const buildDate = new Date().toUTCString()

  const items = topRated.map(r => {
    const url = `${BASE}/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`
    const review = (r.rv?.[0] || '').replace(/ \(실제 Google 리뷰.*?\)/g, '')
    const tags = (r.tags || []).slice(0, 5).join(', ')
    const desc = [
      `${r.type} | ⭐${r.rt}점 (${r.cnt?.toLocaleString() || '?'}개 리뷰)`,
      r.priceRange ? `💰 ${r.priceRange}원` : '',
      `📍 ${r.addr}`,
      `🕐 ${r.hours}`,
      tags ? `🏷️ ${tags}` : '',
      review ? `💬 "${review}"` : '',
    ].filter(Boolean).join(' | ')

    return `
    <item>
      <title><![CDATA[${r.e || ''} ${r.name} — ${r.type} (⭐${r.rt})]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${desc}]]></description>
      <pubDate>${buildDate}</pubDate>
      <category><![CDATA[${r.type}]]></category>
    </item>`
  }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>강남뭐먹 — 삼성역 맛집 추천</title>
    <link>${BASE}</link>
    <description>삼성역·코엑스 주변 맛집 ${restaurants.length}개+ AI 추천. 국밥·이자카야·한우·중식·양식.</description>
    <language>ko</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE}/og-image.png</url>
      <title>강남뭐먹</title>
      <link>${BASE}</link>
    </image>
    ${items}
  </channel>
</rss>`

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
  res.write(xml)
  res.end()
  return { props: {} }
}

export default function RSS() { return null }
