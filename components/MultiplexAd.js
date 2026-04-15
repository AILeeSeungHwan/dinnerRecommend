import { useEffect, useRef } from 'react'

/**
 * MultiplexAd — Google AdSense 멀티플렉스 광고 단위
 * slot: 6619129290 (autorelaxed)
 *
 * 변경: maxHeight / overflow:hidden 제거 → 광고 클리핑 방지
 */
export default function MultiplexAd({ style = {}, className = '' }) {
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}
  }, [])

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
