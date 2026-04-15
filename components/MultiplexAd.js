import { useEffect, useRef, useState } from 'react'

/**
 * MultiplexAd — 데스크톱: autorelaxed 멀티플렉스 / 모바일: 일반 auto AdUnit
 * 모바일(≤768px)에서 autorelaxed는 페이지를 세로로 늘리므로 일반 광고로 대체
 */
export default function MultiplexAd({ style = {}, className = '' }) {
  const pushed = useRef(false)
  const [mobile, setMobile] = useState(null) // null = 아직 미판단 (SSR)

  useEffect(() => {
    setMobile(window.innerWidth <= 768)
  }, [])

  // 데스크톱 멀티플렉스 push (mobile 확정 후 false일 때만)
  useEffect(() => {
    if (mobile !== false) return
    if (pushed.current) return
    pushed.current = true
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}
  }, [mobile])

  // SSR / 초기 렌더: hydration mismatch 방지
  if (mobile === null) return null

  // 모바일: 멀티플렉스 미노출 (페이지 세로 늘어남 방지)
  if (mobile) return null

  // 데스크톱: 멀티플렉스
  return (
    <div className={className} style={{ textAlign: 'center', margin: '32px 0', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8640254349508671"
        data-ad-slot="6619129290"
        data-ad-format="autorelaxed"
      />
    </div>
  )
}
