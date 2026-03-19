import samseongRestaurants from '../data/samseong'
import jamsilRestaurants from '../data/jamsil'
import yeongtongRestaurants from '../data/yeongtong'
import mangpoRestaurants from '../data/mangpo'
import yeongtongGuRestaurants from '../data/yeongtongGu'
import pangyoRestaurants from '../data/pangyo'

const BASE = 'https://dinner.ambitstock.com'

export async function getServerSideProps({ res }) {
  const buildDate = new Date().toUTCString()

  // 두 지역 합산 후 평점 TOP 50
  const allRestaurants = [
    ...samseongRestaurants.map(r => ({ ...r, _area:'samseong', _areaName:'삼성역', _base:'/dinner' })),
    ...jamsilRestaurants.map(r => ({ ...r, _area:'jamsil', _areaName:'잠실', _base:'/dinner' })),
    ...yeongtongRestaurants.map(r => ({ ...r, _area:'yeongtong', _areaName:'영통역', _base:'/samsungElectronics' })),
    ...mangpoRestaurants.map(r => ({ ...r, _area:'mangpo', _areaName:'망포역', _base:'/samsungElectronics' })),
    ...yeongtongGuRestaurants.map(r => ({ ...r, _area:'yeongtongGu', _areaName:'영통구청', _base:'/samsungElectronics' })),
    ...pangyoRestaurants.map(r => ({ ...r, _area:'pangyo', _areaName:'판교역', _base:'' })),
  ]
  const topRated = [...allRestaurants].sort((a, b) => b.rt - a.rt).slice(0, 50)

  const items = topRated.map(r => {
    const url = `${BASE}${r._base || '/dinner'}/${r._area}/restaurant/${encodeURIComponent(r.name)}`
    const tags = (r.tags || []).slice(0, 5).join(', ')
    const desc = [
      `${r._areaName} ${r.type} | ⭐${r.rt}점 (${r.cnt?.toLocaleString() || '?'}개 리뷰)`,
      r.priceRange ? `💰 ${r.priceRange}원` : '',
      `📍 ${r.addr}`,
      `🕐 ${r.hours}`,
      tags ? `🏷️ ${tags}` : '',
    ].filter(Boolean).join(' | ')

    return `
    <item>
      <title><![CDATA[${r.e || ''} ${r.name} — ${r._areaName} ${r.type} (⭐${r.rt})]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${desc}]]></description>
      <pubDate>${buildDate}</pubDate>
      <category><![CDATA[${r._areaName} ${r.type}]]></category>
    </item>`
  }).join('')

  const totalCount = samseongRestaurants.length + jamsilRestaurants.length + yeongtongRestaurants.length + mangpoRestaurants.length + yeongtongGuRestaurants.length
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>오늘뭐먹지 — AI 맛집 추천</title>
    <link>${BASE}</link>
    <description>삼성역·잠실·영통·망포 맛집 ${totalCount}개+ AI 추천. 국밥·이자카야·고기구이·중식·양식.</description>
    <language>ko</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE}/og-image.png</url>
      <title>오늘뭐먹지</title>
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
