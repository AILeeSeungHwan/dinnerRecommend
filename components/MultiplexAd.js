import { useEffect, useRef } from 'react'

/**
 * MultiplexAd — Google AdSense 멀티플렉스 광고 단위
 * slot: 6619129290 (autorelaxed)
 */
export default function MultiplexAd({ style = {}, className = '' }) {
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
    <div className={className + ' multiplex-ad-wrap'} style={{ overflow: 'hidden', textAlign: 'center', margin: '32px 0', maxHeight: 400, ...style }}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8640254349508671"
        data-ad-slot="6619129290"
        data-ad-format="autorelaxed"
      />
      <style>{`.multiplex-ad-wrap { max-height: 400px; } @media (max-width: 768px) { .multiplex-ad-wrap { max-height: 300px !important; } }`}</style>
    </div>
  )
}
