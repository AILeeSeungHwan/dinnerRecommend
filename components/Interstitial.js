import { useEffect, useRef, useState } from 'react'

const KEY_LINK = 'interstitial_link_last'   // 링크 클릭 쿨다운 (1분)
const KEY_AUTO = 'interstitial_auto_last'   // 자동 노출 쿨다운 (5분)
const COOLDOWN_LINK = 1 * 60 * 1000        // 1분
const COOLDOWN_AUTO = 5 * 60 * 1000        // 5분
const AUTO_SHOW_DELAY = 60 * 1000          // 1분 후 자동 노출
const AUTO_CLOSE_SEC = 5                   // 5초 카운트다운 (이후 수동 닫기만 가능)

export default function Interstitial() {
  const [visible, setVisible] = useState(false)
  const [seconds, setSeconds] = useState(AUTO_CLOSE_SEC)
  const timerRef = useRef(null)
  const pushed = useRef(false)
  const pendingHref = useRef(null)
  const pendingBlank = useRef(false)

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
          // 자동 닫기 없음 — X 버튼 클릭 시만 닫힘
          return 0
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

      // 제외: #, javascript:, 빈 값
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('javascript:')
      ) return

      // 쿨다운 체크 (1분)
      const last = parseInt(sessionStorage.getItem(KEY_LINK) || '0', 10)
      const now = Date.now()
      if (now - last < COOLDOWN_LINK) return

      // 광고 표시
      e.preventDefault()
      e.stopPropagation()

      sessionStorage.setItem(KEY_LINK, now)
      pendingHref.current = href
      pendingBlank.current = anchor.target === '_blank'
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
      const isBlank = pendingBlank.current
      pendingHref.current = null
      pendingBlank.current = false
      if (isBlank) {
        window.open(href, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = href
      }
    }
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        .interstitial-box {
          width: 70vw;
          height: 70vh;
        }
        @media (max-width: 768px) {
          .interstitial-box {
            width: 90vw;
            height: 90vh;
          }
        }
      `}</style>
      {/* 배경 클릭 닫기 없음 — cursor default */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,.85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'default',
        }}
      >
        <div
          className="interstitial-box"
          style={{
            background: '#fff', borderRadius: 16, overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0,0,0,.6)',
          }}
        >
          {/* 닫기 버튼 — 우상단 절대위치 */}
          <button
            onClick={seconds > 0 ? undefined : closeAd}
            style={{
              position: 'absolute', top: 10, right: 10, zIndex: 10,
              background: seconds > 0 ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.5)',
              color: seconds > 0 ? 'rgba(255,255,255,0.6)' : '#fff',
              border: 'none',
              borderRadius: '50%', width: 28, height: 28,
              cursor: seconds > 0 ? 'not-allowed' : 'pointer',
              fontSize: seconds > 0 ? 12 : 15, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              lineHeight: 1,
              transition: 'all .3s',
            }}
          >
            {seconds > 0 ? seconds : '✕'}
          </button>

          {/* 광고 영역 — 100%×100% */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '100%' }}
            data-ad-client="ca-pub-8640254349508671"
            data-ad-slot="6297515693"
            data-ad-format="rectangle"
          />
        </div>
      </div>
    </>
  )
}
