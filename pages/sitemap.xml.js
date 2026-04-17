import posts from '../data/posts'
import samseongRestaurants  from '../data/samseong'
import jamsilRestaurants    from '../data/jamsil'
import pangyoRestaurants    from '../data/pangyo'
import yeongtongRestaurants from '../data/yeongtong'
import mangpoRestaurants    from '../data/mangpo'
import yeongtongGuRestaurants from '../data/yeongtongGu'
import sujiRestaurants from '../data/suji'

const BASE = 'https://dinner.ambitstock.com'

const CATEGORIES = [
  'meat','gukbap','izakaya','japanese','chinese',
  'western','chicken','group','date','budget','premium','korean'
]

const REGIONS = [
  { basePath: '/dinner/samseong',               restaurants: samseongRestaurants   },
  { basePath: '/dinner/jamsil',                 restaurants: jamsilRestaurants     },
  { basePath: '/pangyo',                        restaurants: pangyoRestaurants     },
  { basePath: '/samsungElectronics/yeongtong',  restaurants: yeongtongRestaurants  },
  { basePath: '/samsungElectronics/mangpo',     restaurants: mangpoRestaurants     },
  { basePath: '/samsungElectronics/yeongtongGu',restaurants: yeongtongGuRestaurants},
  { basePath: '/suji',                         restaurants: sujiRestaurants       },
]

export async function getServerSideProps({ res }) {
  const today = new Date().toISOString().split('T')[0]

  // 1. 메인 페이지 (priority 1.0)
  const staticPages = [
    { url: '/', priority: '1.0' },
  ]

  // 2. 지역 페이지 (priority 0.9)
  const regionPages = REGIONS.map(r => ({
    url: r.basePath, priority: '0.9'
  }))

  // 3. 카테고리 페이지 6지역 × 12카테고리 (priority 0.8)
  const categoryPages = REGIONS.flatMap(r =>
    CATEGORIES.map(slug => ({
      url: `${r.basePath}/category/${slug}`, priority: '0.8'
    }))
  )

  // 4. 식당 상세 페이지 전 지역 (priority 0.6)
  const restaurantPages = REGIONS.flatMap(r =>
    r.restaurants.map(restaurant => ({
      url: `${r.basePath}/restaurant/${encodeURIComponent(restaurant.name)}`,
      priority: '0.6'
    }))
  )

  // 5. 포스트 페이지 (priority 0.7)
  const postPages = (posts || []).map(p => ({
    url: `/posts/${p.slug}`, priority: '0.7'
  }))

  const all = [...staticPages, ...regionPages, ...categoryPages, ...postPages, ...restaurantPages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(p => `  <url><loc>${BASE}${p.url}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`).join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=43200')
  res.write(xml)
  res.end()
  return { props: {} }
}

export default function Sitemap() { return null }
