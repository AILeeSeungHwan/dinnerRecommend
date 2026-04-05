import { useEffect, useRef, useState } from 'react'

/**
 * AdUnit — Google AdSense 광고 단위
 * slot: AdSense 광고 슬롯 ID
 * format: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
 * style: 추가 인라인 스타일
 *
 * IntersectionObserver lazy loading:
 * 뷰포트 200px 이내 진입 시에만 ins 렌더 + push → Active View 개선
 */
export default function AdUnit({ slot = '9138210374', format = 'auto', style = {}, className = '' }) {
  const containerRef = useRef(null)
  const pushed = useRef(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    if (pushed.current) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushed.current = true
    } catch (e) {
      // AdSense not loaded yet
    }
  }, [visible])

  return (
    <div ref={containerRef} className={className} style={{ overflow: 'hidden', textAlign: 'center', ...style }}>
      {visible && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8640254349508671"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      )}
    </div>
  )
}
