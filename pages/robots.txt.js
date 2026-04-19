export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('User-agent: *\nAllow: /\nSitemap: https://gangnamwhat.com/sitemap.xml\n\n#DaumWebMasterTool:bd3db93374dc88b88cc2ba965753c2fde8759f5a5c7ccaa4b99f6b4e169e2934:lnJIfW6J3SEu/tDeE4/ZJg==')
  res.end()
  return { props: {} }
}

export default function Robots() { return null }
