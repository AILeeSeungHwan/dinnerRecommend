export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('User-agent: *\nAllow: /\nSitemap: https://dinner.ambitstock.com/sitemap.xml')
  res.end()
  return { props: {} }
}

export default function Robots() { return null }
