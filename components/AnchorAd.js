import { useEffect, useRef, useState } from 'react'

/**
 * AnchorAd — 화면 하단 sticky 앵커 광고 (모바일·데스크톱 공통)
 *
 * 효과:
 *  - viewable 95%+ 슬롯 (첫 화면부터 노출)
 *  - 본문 가독성 방해 최소화 (항상 화면 하단에 고정)
 *  - 사용자 닫기 가능 → 세션 동안만 숨김 (sessionStorage)
 *
 * 광고 정책 가이드라인:
 *  - 닫기 버튼 필수 (Google 정책)
 *  - 본문 광고와 너무 인접해도 OK (slot 다름)
 */
export default function AnchorAd() {
  const [closed, setClosed] = useState(true) // 초기엔 숨김 — 마운트 후 sessionStorage 체크하고 보이도록
  const insRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const dismissed = sessionStorage.getItem('anchorAdDismissed')
      if (dismissed === '1') return
      setClosed(false)
    } catch {
      setClosed(false)
    }
  }, [])

  useEffect(() => {
    if (closed) return
    if (typeof window === 'undefined') return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [closed])

  if (closed) return null

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9998,
        background: 'rgba(20,20,28,.92)',
        borderTop: '1px solid rgba(255,255,255,.08)',
        boxShadow: '0 -4px 16px rgba(0,0,0,.25)',
        backdropFilter: 'blur(8px)',
        padding: '6px 8px 8px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 6,
          marginBottom: 4,
          paddingRight: 4,
        }}
      >
        <span style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.04em' }}>광고</span>
        <button
          type="button"
          aria-label="광고 닫기"
          onClick={() => {
            try { sessionStorage.setItem('anchorAdDismissed', '1') } catch {}
            setClosed(true)
          }}
          style={{
            background: 'rgba(255,255,255,.12)',
            border: 'none',
            color: 'rgba(255,255,255,.85)',
            width: 22,
            height: 22,
            borderRadius: 11,
            fontSize: 12,
            lineHeight: 1,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          ×
        </button>
      </div>
      <div style={{ maxWidth: 728, margin: '0 auto', minHeight: 50 }}>
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: 60 }}
          data-ad-client="ca-pub-8640254349508671"
          data-ad-slot="9138210374"
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  )
}
