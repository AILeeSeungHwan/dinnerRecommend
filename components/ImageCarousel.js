import { useState, useEffect } from 'react'

/**
 * ImageCarousel — 1~4장 이미지 자동 페이드 슬라이드쇼
 *  - 1장: 정적 이미지
 *  - 2장+: 2초 간격 페이드 전환
 *  - 하단 인디케이터
 */
export default function ImageCarousel({ imgs, alt, caption }) {
  const valid = (imgs || []).filter(Boolean)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (valid.length <= 1) return
    const t = setInterval(() => setIdx(i => (i + 1) % valid.length), 2200)
    return () => clearInterval(t)
  }, [valid.length])

  if (!valid.length) return null

  return (
    <figure style={{ margin: '24px 0' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: 12,
          overflow: 'hidden',
          background: '#1a1a22',
          border: '1px solid var(--border)',
        }}
      >
        {valid.map((src, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={i}
            src={src}
            alt={alt || caption || '맛집 추천 이미지'}
            loading={i === 0 ? 'eager' : 'lazy'}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%', objectFit: 'cover',
              opacity: i === idx ? 1 : 0,
              transition: 'opacity 0.7s ease',
            }}
            onError={(e) => { e.target.style.display = 'none' }}
          />
        ))}
        {valid.length > 1 && (
          <div style={{
            position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: 6,
            background: 'rgba(0,0,0,0.35)', borderRadius: 100, padding: '4px 8px',
          }}>
            {valid.map((_, i) => (
              <span key={i} style={{
                width: 6, height: 6, borderRadius: '50%',
                background: i === idx ? '#fff' : 'rgba(255,255,255,0.5)',
                transition: 'background 0.3s',
              }} />
            ))}
          </div>
        )}
      </div>
      {caption && (
        <figcaption style={{ marginTop: 8, fontSize: '.75rem', color: 'var(--muted)', textAlign: 'center' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
