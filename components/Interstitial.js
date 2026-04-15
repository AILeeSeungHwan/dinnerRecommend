import { useEffect, useRef, useState } from 'react'

// ── 통합 쿨다운 (모든 트리거 공유) ──────────────────────────────────────
// 탭·링크·룰렛·AI 어느 경로든 전면광고 노출 후 2분이 지나야 다시 노출
const KEY_LAST   = 'interstitial_last'       // 통합 쿨다운 키
const KEY_AUTO   = 'interstitial_auto_last'  // 자동 노출 전용 주기 키
const COOLDOWN   = 2 * 60 * 1000            // 2분 — 모든 트리거 공유
const COOLDOWN_AUTO = 5 * 60 * 1000         // 자동 노출 주기 (5분)
const AUTO_SHOW_DELAY = 60 * 1000           // 페이지 진입 1분 후 자동 시도
const AUTO_CLOSE_SEC  = 5                   // 닫기 버튼 활성화까지 카운트다운

/** 통합 쿨다운 통과 여부 */
const canShow = () => {
  const last = parseInt(sessionStorage.getItem(KEY_LAST) || '0', 10)
  return Date.now() - last >= COOLDOWN
}

/** 통합 쿨다운 시각 기록 */
const recordShow = () => {
  sessionStorage.setItem(KEY_LAST, String(Date.now()))
}

export default function Interstitial() {
  const [visible, setVisible]   = useState(false)
  const [seconds, setSeconds]   = useState(AUTO_CLOSE_SEC)
  const timerRef    = useRef(null)
  const pushed      = useRef(false)
  const pendingHref = useRef(null)
  const pendingBlank = useRef(false)

  // AdSense push (전면광고 1회만)
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
        if (prev <= 1) { clearInterval(timerRef.current); return 0 }
        return prev - 1
      })
    }, 1000)
  }

  // ── window.__showInterstitial (탭·룰렛·AI 버튼에서 호출) ────────────────
  // 통합 쿨다운 2분 공유 — 탭 누르기 전에 이미 전면광고 떴으면 2분 안지나면 무시
  useEffect(() => {
    window.__showInterstitial = () => {
      if (!canShow()) return
      recordShow()
      pendingHref.current  = null
      pendingBlank.current = false
      openAd()
    }
    return () => { delete window.__showInterstitial }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // visible 시 광고 push
  useEffect(() => {
    if (visible) setTimeout(pushAd, 100)
  }, [visible])

  // ── 링크 클릭 인터셉트 (capture phase) ──────────────────────────────────
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      if (!href || href.startsWith('#') || href.startsWith('javascript:')) return

      // 통합 쿨다운 체크 (2분)
      if (!canShow()) return

      e.preventDefault()
      e.stopPropagation()

      recordShow()
      pendingHref.current  = href
      pendingBlank.current = anchor.target === '_blank'
      openAd()
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── 1분 후 자동 노출 ─────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return

    const autoTimer = setTimeout(() => {
      if (visible) return

      const now = Date.now()

      // 자동 노출 자체 주기 (5분)
      const lastAuto = parseInt(sessionStorage.getItem(KEY_AUTO) || '0', 10)
      if (now - lastAuto < COOLDOWN_AUTO) return

      // 통합 쿨다운 (2분) — 탭·링크로 최근에 떴으면 자동도 안 뜸
      if (!canShow()) return

      sessionStorage.setItem(KEY_AUTO, String(now))
      recordShow()
      pendingHref.current = null
      openAd()
    }, AUTO_SHOW_DELAY)

    return () => clearTimeout(autoTimer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── 닫기 ─────────────────────────────────────────────────────────────────
  const closeAd = () => {
    clearInterval(timerRef.current)
    setVisible(false)
    if (pendingHref.current) {
      const href    = pendingHref.current
      const isBlank = pendingBlank.current
      pendingHref.current  = null
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
        .interstitial-box { width: 70vw; height: 70vh; }
        @media (max-width: 768px) { .interstitial-box { width: 90vw; height: 90vh; } }
      `}</style>
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
              lineHeight: 1, transition: 'all .3s',
            }}
          >
            {seconds > 0 ? seconds : '✕'}
          </button>

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
