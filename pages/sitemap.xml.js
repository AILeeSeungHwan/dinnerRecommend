import samseongRestaurants from '../data/samseong'
import jamsilRestaurants from '../data/jamsil'

const BASE = 'https://dinner.ambitstock.com'
const CATEGORIES = ['gukbap','meat','izakaya','chinese','western','group','chicken','japanese']

export async function getServerSideProps({ res }) {
  const today = new Date().toISOString().split('T')[0]

  const staticPages = [
    { url: '/',                   priority: '1.0' },
    { url: '/dinner/samseong',    priority: '0.9' },
    { url: '/dinner/jamsil',      priority: '0.9' },
    { url: '/dinner/gangnam',     priority: '0.5' },
  ]

  const categoryPages = CATEGORIES.map(slug => ({
    url: `/dinner/samseong/category/${slug}`, priority: '0.8'
  }))

  const samseongPages = samseongRestaurants.map(r => ({
    url: `/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`,
    priority: '0.6'
  }))

  const jamsilPages = jamsilRestaurants.map(r => ({
    url: `/dinner/jamsil/restaurant/${encodeURIComponent(r.name)}`,
    priority: '0.6'
  }))

  const all = [...staticPages, ...categoryPages, ...samseongPages, ...jamsilPages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(p => `  <url><loc>${BASE}${p.url}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`).join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(xml)
  res.end()
  return { props: {} }
}

export default function Sitemap() { return null }
