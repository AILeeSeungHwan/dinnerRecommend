import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* ── 검색엔진 소유권 인증 ── */}
        <meta name="google-site-verification" content="2DAD_BGWxdRXKWrw6lYKe6e0p3BLAiAXbMHVYXrU48k" />
        <meta name="naver-site-verification" content="68bdc2991328a363a86a07694fc809c701117a77" />

        {/* ── 기본 SEO ── */}
        <meta name="author" content="강남뭐먹" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="강남뭐먹" />
        <meta property="og:image" content="https://dinner.ambitstock.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="강남뭐먹 — AI 맛집 추천" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://dinner.ambitstock.com/og-image.png" />

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

        {/* ── Google AdSense ── */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8640254349508671"
          crossOrigin="anonymous"
        />

        {/* ── 파비콘 ── */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/og-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
