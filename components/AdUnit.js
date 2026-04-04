import { useEffect, useRef } from 'react'

/**
 * AdUnit — Google AdSense 광고 단위
 * slot: AdSense 광고 슬롯 ID
 * format: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
 * style: 추가 인라인 스타일
 */
export default function AdUnit({ slot, format = 'auto', style = {}, className = '' }) {
  const ref = useRef(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    try {
      if (ref.current && ref.current.offsetWidth > 0) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        pushed.current = true
      }
    } catch (e) {
      // AdSense not loaded yet
    }
  }, [])

  return (
    <div className={className} style={{ overflow: 'hidden', textAlign: 'center', ...style }}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8640254349508671"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
