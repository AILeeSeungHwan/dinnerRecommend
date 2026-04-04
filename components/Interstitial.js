import { useEffect, useRef, useState } from 'react'

const KEY_LINK = 'interstitial_link_last'   // 링크 클릭 쿨다운 (2분)
const KEY_AUTO = 'interstitial_auto_last'   // 자동 노출 쿨다운 (5분)
const COOLDOWN_LINK = 2 * 60 * 1000        // 2분
const COOLDOWN_AUTO = 5 * 60 * 1000        // 5분
const AUTO_SHOW_DELAY = 60 * 1000          // 1분 후 자동 노출
const AUTO_CLOSE_SEC = 5                   // 5초 자동 닫기

export default function Interstitial() {
  const [visible, setVisible] = useState(false)
  const [seconds, setSeconds] = useState(AUTO_CLOSE_SEC)
  const timerRef = useRef(null)
  const pushed = useRef(false)
  const pendingHref = useRef(null)

  // AdSense push (한 번만)
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
          // 링크 클릭으로 열린 경우 href 이동
          if (pendingHref.current) {
            const href = pendingHref.current
            pendingHref.current = null
            window.location.href = href
          }
          return AUTO_CLOSE_SEC
        }
        return prev - 1
      })
    }, 1000)
  }

  // visible 시 광고 push
  useEffect(() => {
    if (visible) {
      setTimeout(pushAd, 100)
    }
  }, [visible])

  // ── 링크 클릭 인터셉트 (capture phase) ──────────────────────────────
  useEffect(() => {
    const handleClick = (e) => {
      // a 태그 찾기 (이벤트 버블링 대신 capture 사용)
      const anchor = e.target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''

      // 제외: #, javascript:, 빈 값, 새 탭(_blank)
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('javascript:') ||
        anchor.target === '_blank'
      ) return

      // 쿨다운 체크 (2분)
      const last = parseInt(sessionStorage.getItem(KEY_LINK) || '0', 10)
      const now = Date.now()
      if (now - last < COOLDOWN_LINK) return

      // 광고 표시
      e.preventDefault()
      e.stopPropagation()

      sessionStorage.setItem(KEY_LINK, now)
      pendingHref.current = href
      openAd()
    }

    document.addEventListener('click', handleClick, true) // capture phase
    return () => document.removeEventListener('click', handleClick, true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── 1분 후 자동 노출 ─────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return

    const autoTimer = setTimeout(() => {
      if (visible) return // 이미 광고 중이면 스킵

      // 이미 한 번 자동 노출 했는지 체크 (5분 쿨다운)
      const last = parseInt(sessionStorage.getItem(KEY_AUTO) || '0', 10)
      const now = Date.now()
      if (now - last < COOLDOWN_AUTO) return

      sessionStorage.setItem(KEY_AUTO, now)
      pendingHref.current = null
      openAd()
    }, AUTO_SHOW_DELAY)

    return () => clearTimeout(autoTimer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── 닫기 ─────────────────────────────────────────────────────────────
  const closeAd = () => {
    clearInterval(timerRef.current)
    setVisible(false)
    // 닫기 버튼으로 직접 닫은 경우에도 href 이동
    if (pendingHref.current) {
      const href = pendingHref.current
      pendingHref.current = null
      window.location.href = href
    }
  }

  if (!visible) return null

  return (
    <div
      onClick={closeAd}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
        cursor: 'pointer',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 16, overflow: 'hidden',
          width: '100%', maxWidth: 360, position: 'relative',
          boxShadow: '0 20px 60px rgba(0,0,0,.6)',
          cursor: 'default',
        }}
      >
        {/* 헤더 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 14px',
          background: '#f8f8f8', borderBottom: '1px solid #e0e0e0',
        }}>
          <span style={{ fontSize: '.72rem', color: '#888' }}>광고</span>
          <button
            onClick={closeAd}
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
        <div style={{
          padding: '8px 0', minHeight: 260,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
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
