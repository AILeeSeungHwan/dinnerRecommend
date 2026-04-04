import posts from '../data/posts'
import samseongRestaurants from '../data/samseong'
import jamsilRestaurants from '../data/jamsil'
import yeongtongRestaurants from '../data/yeongtong'
import mangpoRestaurants from '../data/mangpo'
import yeongtongGuRestaurants from '../data/yeongtongGu'
import pangyoRestaurants from '../data/pangyo'
import sujiRestaurants from '../data/suji'

const BASE = 'https://dinner.ambitstock.com'

export async function getServerSideProps({ res }) {
  const buildDate = new Date().toUTCString()

  // 전 지역 합산 후 평점 TOP 50
  const allRestaurants = [
    ...samseongRestaurants.map(r => ({ ...r, _area:'samseong', _areaName:'삼성역', _basePath:'/dinner/samseong' })),
    ...jamsilRestaurants.map(r => ({ ...r, _area:'jamsil', _areaName:'잠실', _basePath:'/dinner/jamsil' })),
    ...yeongtongRestaurants.map(r => ({ ...r, _area:'yeongtong', _areaName:'영통역', _basePath:'/samsungElectronics/yeongtong' })),
    ...mangpoRestaurants.map(r => ({ ...r, _area:'mangpo', _areaName:'망포역', _basePath:'/samsungElectronics/mangpo' })),
    ...yeongtongGuRestaurants.map(r => ({ ...r, _area:'yeongtongGu', _areaName:'영통구청', _basePath:'/samsungElectronics/yeongtongGu' })),
    ...pangyoRestaurants.map(r => ({ ...r, _area:'pangyo', _areaName:'판교역', _basePath:'/pangyo' })),
    ...sujiRestaurants.map(r => ({ ...r, _area:'suji', _areaName:'수지구청', _basePath:'/suji' })),
  ]
  const topRated = [...allRestaurants].sort((a, b) => b.rt - a.rt).slice(0, 50)

  const restaurantItems = topRated.map(r => {
    const url = `${BASE}${r._basePath}/restaurant/${encodeURIComponent(r.name)}`
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

  const postItems = (posts || []).map(p => {
    const url = `${BASE}/posts/${p.slug}`
    return `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${p.description}]]></description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category><![CDATA[맛집 가이드]]></category>
    </item>`
  }).join('')

  const totalCount = samseongRestaurants.length + jamsilRestaurants.length + yeongtongRestaurants.length + mangpoRestaurants.length + yeongtongGuRestaurants.length + pangyoRestaurants.length + sujiRestaurants.length
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>오늘뭐먹지 — AI 맛집 추천</title>
    <link>${BASE}</link>
    <description>삼성역·잠실·판교·수지·영통·망포 맛집 ${totalCount}개+ AI 추천. 국밥·이자카야·고기구이·중식·양식.</description>
    <language>ko</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE}/og-image.png</url>
      <title>오늘뭐먹지</title>
      <link>${BASE}</link>
    </image>
    ${postItems}
    ${restaurantItems}
  </channel>
</rss>`

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
  res.write(xml)
  res.end()
  return { props: {} }
}

export default function RSS() { return null }
