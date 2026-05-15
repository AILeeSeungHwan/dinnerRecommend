import '../styles/globals.css'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const DOMAIN = 'https://dinner.ambitstock.com'

function detectSource(referrer) {
  if (!referrer) return { source: 'direct', keyword: null }
  try {
    const u = new URL(referrer)
    const host = u.hostname
    let source = 'other'
    if (host.includes('google.'))  source = 'google'
    else if (host.includes('naver.')) source = 'naver'
    else if (host.includes('daum.') || host.includes('kakao.')) source = 'daum'
    else if (host.includes('bing.'))  source = 'bing'
    else if (host.includes('zum.'))   source = 'zum'
    else if (host.includes('yahoo.')) source = 'yahoo'
    else if (referrer.startsWith(DOMAIN)) source = 'internal'

    const keyword = u.searchParams.get('q') || u.searchParams.get('query') || u.searchParams.get('wd') || null
    return { source, keyword }
  } catch {
    return { source: 'other', keyword: null }
  }
}

function trackPageview(slug) {
  try {
    const { source, keyword } = detectSource(document.referrer)
    const title = (typeof document !== 'undefined' && document.title) || null
    fetch('/api/pageview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, title, source, keyword }),
    }).catch(() => {})
  } catch {}
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const tracked = useRef(false)

  // 최초 페이지 로드 트래킹
  useEffect(() => {
    if (!tracked.current) {
      tracked.current = true
      trackPageview(window.location.pathname)
    }
  }, [])

  // SPA 라우팅 후 트래킹
  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageview(url.split('?')[0])
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  // 자동광고: DOM 완전히 그려진 후 enable_page_level_ads push
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: 'ca-pub-8640254349508671',
        enable_page_level_ads: true,
      })
    } catch (e) {}
  }, [])

  // SPA 라우팅 후 자동광고 재활성화
  useEffect(() => {
    const handleAd = () => {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (e) {}
    }
    router.events.on('routeChangeComplete', handleAd)
    return () => router.events.off('routeChangeComplete', handleAd)
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
