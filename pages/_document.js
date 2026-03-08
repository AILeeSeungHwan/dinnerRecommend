import { Html, Head, Main, NextScript } from 'next/document'

const BASE = 'https://dinner.ambitstock.com'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* ── 검색엔진 소유권 인증 ── */}
        <meta name="google-site-verification" content="2DAD_BGWxdRXKWrw6lYKe6e0p3BLAiAXbMHVYXrU48k" />
        <meta name="naver-site-verification" content="68bdc2991328a363a86a07694fc809c701117a77" />
        <meta name="msvalidate.01" content="1E4F2FA1D46763B9C53162346F20C68D" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8640254349508671"
        {/* ── 모바일 뷰포트 고정 (확대/가로스크롤 방지) ── */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />

        {/* ── 기본 SEO ── */}
        <meta name="author" content="강남뭐먹" />
        <meta name="robots" content="index, follow" />

        {/* ── OG (카카오·페이스북·슬랙 등 공유 미리보기) ── */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="강남뭐먹" />
        <meta property="og:title" content="강남뭐먹 — AI 맛집 추천" />
        <meta property="og:description" content="삼성역·잠실역 170개+ 맛집을 AI가 날씨·기분·예산에 맞게 추천해드려요." />
        <meta property="og:url" content={BASE} />
        <meta property="og:image" content={`${BASE}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="강남뭐먹 — AI 맛집 추천" />
        <meta property="og:locale" content="ko_KR" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="강남뭐먹 — AI 맛집 추천" />
        <meta name="twitter:description" content="삼성역·잠실역 170개+ 맛집을 AI가 날씨·기분·예산에 맞게 추천해드려요." />
        <meta name="twitter:image" content={`${BASE}/og-image.png`} />
        <meta name="twitter:image:alt" content="강남뭐먹 — AI 맛집 추천" />

        {/* ── 카카오톡 공유 SDK ── */}
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.0/kakao.min.js"
          integrity="sha384-Lvrr4dmJLLhBimcAC4GfpNV3oEGKgfd26Mp7KkvDz8PxGrhUhUT3zoax7EirW8fu"
          crossOrigin="anonymous"
          async
        />

        {/* ── Google Analytics GA4 ── */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YNZGYTGP41" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YNZGYTGP41');
        `}} />

        {/* ── Microsoft Clarity ── */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","vr2ysvpg8z");
        `}} />


        {/* ── RSS ── */}
        <link rel="alternate" type="application/rss+xml" title="강남뭐먹 RSS" href="https://dinner.ambitstock.com/rss.xml" />

        {/* ── 파비콘 & 아이콘 ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* ── PWA / 검색엔진 아이콘 ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d1117" />
        <meta name="msapplication-TileColor" content="#0d1117" />
        <meta name="msapplication-TileImage" content="/icon-192x192.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
