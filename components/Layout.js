import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title, description, canonical }) {
  const siteTitle = title ? `${title} | dinner.ambitstock` : 'dinner.ambitstock — 삼성역·강남 맛집 AI 추천'
  const siteDesc = description || '삼성역, 강남역 주변 맛집을 AI가 날씨·기분·예산에 맞게 추천합니다. 국밥, 이자카야, 고기구이, 중식 등 170개+ 식당 정보.'

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta name="robots" content="index, follow" />
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:site_name" content="dinner.ambitstock" />

        {/* 구조화 데이터 - 사이트링크 검색박스 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "dinner.ambitstock",
          "url": "https://dinner.ambitstock.com",
          "description": siteDesc
        })}} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="site-header">
        <nav>
          <Link href="/" className="logo">🍽️ dinner.ambitstock</Link>
          <div className="nav-links">
            <Link href="/dinner/samseong">삼성역</Link>
            <Link href="/dinner/gangnam">강남역</Link>
            <Link href="/dinner/jamsil">잠실역</Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 16px',
        textAlign: 'center',
        color: 'var(--muted)',
        fontSize: '.8rem',
        marginTop: '60px'
      }}>
        <p>© 2025 dinner.ambitstock.com — 강남 맛집 AI 추천 서비스</p>
        <p style={{ marginTop: 6 }}>삼성역 · 강남역 · 잠실역 주변 식당 정보 및 추천</p>
      </footer>
    </>
  )
}
