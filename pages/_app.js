import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

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
    const handleRouteChange = () => {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (e) {}
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return <Component {...pageProps} />
}
