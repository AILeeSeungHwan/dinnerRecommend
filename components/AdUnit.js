import { useEffect, useRef } from 'react'

/**
 * AdUnit — Google AdSense 광고 단위
 * slot: AdSense 광고 슬롯 ID
 * format: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
 * style: 추가 인라인 스타일
 *
 * 변경: IntersectionObserver 제거 → mount 시 즉시 push
 * 이유: lazy loading 중 push 실패 시 재시도 로직 없어 영구 미노출 버그
 */
export default function AdUnit({ slot = '9138210374', format = 'auto', style = {}, className = '' }) {
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      // adsbygoogle 스크립트 아직 로드 전 — 자동 큐잉됨
    }
  }, [])

  return (
    <div className={className} style={{ textAlign: 'center', minHeight: 50, ...style }}>
      <ins
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
