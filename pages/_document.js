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

        {/* ── 모바일 뷰포트 고정 (확대/가로스크롤 방지) ── */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />

        {/* ── 기본 SEO ── */}
        <meta name="author" content="오늘뭐먹지" />
        <meta name="keywords" content="오늘뭐먹지, 맛집추천, AI맛집, 삼성역맛집, 잠실맛집, 영통맛집, 강남맛집, 회식장소, 점심추천, 오늘뭐먹지추천" />
        <meta name="robots" content="index, follow" />

        {/* ── OG (카카오·페이스북·슬랙 등 공유 미리보기) ── */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="오늘뭐먹지" />
        <meta property="og:title" content="오늘뭐먹지 — AI 맛집 추천" />
        <meta property="og:description" content="삼성역·잠실역·영통역 맛집을 AI가 날씨·기분·예산에 맞게 추천. 오늘 뭐 먹지 고민 끝!" />
        <meta property="og:url" content={BASE} />
        <meta property="og:image" content={`${BASE}/og-image.png?v=3`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="오늘뭐먹지 — AI 맛집 추천" />
        <meta property="og:locale" content="ko_KR" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="오늘뭐먹지 — AI 맛집 추천" />
        <meta name="twitter:description" content="삼성역·잠실역·영통역 맛집을 AI가 날씨·기분·예산에 맞게 추천. 오늘 뭐 먹지 고민 끝!" />
        <meta name="twitter:image" content={`${BASE}/og-image.png?v=3`} />
        <meta name="twitter:image:alt" content="오늘뭐먹지 — AI 맛집 추천" />

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
        <link rel="alternate" type="application/rss+xml" title="오늘뭐먹지 RSS" href="https://dinner.ambitstock.com/rss.xml" />

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

      {/* ── 테마 깜빡임 방지: 렌더 전 light 기본값 고정 ── */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var saved = localStorage.getItem('gm-theme');
          var lightVars = '--bg:#ffffff;--surface:#f8f9fa;--surface2:#f1f3f5;--text:#111827;--muted:#6b7280;--border:#e5e7eb;--primary:#6366f1;--primary2:#818cf8;';
          if (!saved || saved === 'light') {
            var s = document.documentElement.style;
            lightVars.split(';').forEach(function(v){ if(v){ var p=v.split(':'); s.setProperty(p[0], p[1]); } });
          }
        })();
      `}} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
