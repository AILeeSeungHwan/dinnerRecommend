import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const SESSION_KEY = 'gm-interstitial-count'
const PAGE_KEY    = 'gm-page-count'
const MAX_PER_SESSION = 3
const PAGES_PER_AD    = 3
const AUTO_CLOSE_SEC  = 5

export default function Interstitial() {
  const router   = useRouter()
  const [visible, setVisible] = useState(false)
  const [seconds, setSeconds] = useState(AUTO_CLOSE_SEC)
  const timerRef = useRef(null)
  const pushed   = useRef(false)

  // 광고 push (한 번만)
  const pushAd = () => {
    if (pushed.current) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushed.current = true
    } catch (e) {}
  }

  const openAd = () => {
    setVisible(true)
    setSeconds(AUTO_CLOSE_SEC)
    pushed.current = false

    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          setVisible(false)
          return AUTO_CLOSE_SEC
        }
        return prev - 1
      })
    }, 1000)
  }

  // 광고 ins가 렌더링되면 push
  useEffect(() => {
    if (visible) {
      setTimeout(pushAd, 100)
    }
  }, [visible])

  useEffect(() => {
    const handleRouteChange = () => {
      // 모바일 전용 (768px 이하)
      if (window.innerWidth > 768) return

      // 페이지 카운트
      const pageCount = parseInt(sessionStorage.getItem(PAGE_KEY) || '0', 10) + 1
      sessionStorage.setItem(PAGE_KEY, pageCount)

      // 3페이지마다 1번
      if (pageCount % PAGES_PER_AD !== 0) return

      // 세션당 최대 3회
      const shownCount = parseInt(sessionStorage.getItem(SESSION_KEY) || '0', 10)
      if (shownCount >= MAX_PER_SESSION) return

      sessionStorage.setItem(SESSION_KEY, shownCount + 1)
      openAd()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      clearInterval(timerRef.current)
    }
  }, [router.events])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
      }}
    >
      <div style={{
        background: '#fff', borderRadius: 16, overflow: 'hidden',
        width: '100%', maxWidth: 360, position: 'relative',
        boxShadow: '0 20px 60px rgba(0,0,0,.6)',
      }}>
        {/* 헤더 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 14px',
          background: '#f8f8f8', borderBottom: '1px solid #e0e0e0',
        }}>
          <span style={{ fontSize: '.72rem', color: '#888' }}>광고</span>
          <button
            onClick={() => { clearInterval(timerRef.current); setVisible(false) }}
            style={{
              background: '#333', color: '#fff', border: 'none',
              borderRadius: 100, width: 26, height: 26, cursor: 'pointer',
              fontSize: '.75rem', fontWeight: 700, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}
          >
            {seconds > 0 ? seconds : '✕'}
          </button>
        </div>

        {/* 광고 영역 */}
        <div style={{ padding: '8px 0', minHeight: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: 320, height: 250 }}
            data-ad-client="ca-pub-8640254349508671"
            data-ad-slot="6297515693"
            data-ad-format="rectangle"
          />
        </div>

        {/* 닫기 안내 */}
        <div style={{
          padding: '8px 14px 12px', textAlign: 'center',
          fontSize: '.7rem', color: '#aaa',
        }}>
          {seconds > 0 ? `${seconds}초 후 자동 닫힘` : '닫기 버튼을 눌러주세요'}
        </div>
      </div>
    </div>
  )
}
