/**
 * PostThumbnail — 정사각형 썸네일 (이미지 배경 + 텍스트 오버레이)
 *
 * 정책:
 *  - 배경: 식당 이미지 (full opacity), 컬러 그라디언트 X
 *  - 위에 어두운 그라디언트 오버레이 (가독성)
 *  - 텍스트: 좌측 하단 정렬, 흰색 + 노란 강조
 */
const CATEGORY_LABEL = {
  meat: '고기 맛집', chinese: '중식', izakaya: '이자카야',
  japanese: '일식', gukbap: '국밥·해장', western: '양식',
  date: '데이트', group: '회식', lunch: '점심', budget: '가성비',
  chicken: '치킨·야장', special: '특별 추천',
}

// 후킹 텍스트 패턴 — 12개 (slug 해시로 결정)
// [헤드라인(작게), 메인(크게), 서브(작게)] 3줄 구조
const TEXT_PATTERNS = [
  (r, c) => ['오늘 점심', `${r} ${c}`, '뭐 먹지?'],
  (r, c) => [r, `${c} TOP`, '실데이터 가이드'],
  (r, c) => ['직장인 추천', `${r} ${c}`, 'BEST 픽'],
  (r, c) => [`${r} 가이드`, `${c}`, '2026'],
  (r, c) => ['회식 고민?', `${r} ${c}`, '여기서 끝'],
  (r, c) => ['혼밥 OK', `${r} ${c}`, '5곳 추천'],
  (r, c) => [`${r} ${c}`, '선정 기준', '평점·리뷰'],
  (r, c) => ['리뷰 검증', `${r} ${c}`, '맛집 가이드'],
  (r, c) => ['데이터 기반', `${r} ${c}`, '진짜 추천'],
  (r, c) => [r, `${c} BEST`, '놓치지 말 것'],
  (r, c) => [`${r}에서`, `${c} 한 끼`, '가이드'],
  (r, c) => ['찐 맛집', `${r} ${c}`, '실리뷰 검증'],
]

// 강조 컬러 — slug 해시로 결정 (메인 텍스트용 노란/주황/민트 등)
const ACCENTS = ['#FFD93D', '#FFA94D', '#FFE066', '#74C0FC', '#63E6BE', '#FF8787', '#B197FC', '#FFC078']

function hash(s) {
  let h = 0
  for (let i = 0; i < (s || '').length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i); h |= 0
  }
  return Math.abs(h)
}

export default function PostThumbnail({ imageUrl, region, category, slug, size = 200 }) {
  const seed = hash(slug || '')
  const cat = CATEGORY_LABEL[category] || category || '맛집'
  const reg = region || ''
  const lines = TEXT_PATTERNS[seed % TEXT_PATTERNS.length](reg, cat)
  const accent = ACCENTS[(seed >> 3) % ACCENTS.length]
  // size가 '100%'이면 부모 너비에 맞추되 정사각형 유지 (aspectRatio)
  const isFluid = size === '100%' || size === 'auto'
  const numSize = isFluid ? 200 : size
  const fontMain = Math.max(15, Math.round(numSize / 9))
  const fontSub  = Math.max(11, Math.round(numSize / 16))

  return (
    <div
      style={{
        position: 'relative',
        width: isFluid ? '100%' : size,
        height: isFluid ? 'auto' : size,
        aspectRatio: isFluid ? '1 / 1' : undefined,
        borderRadius: 12, overflow: 'hidden', flexShrink: 0,
        background: '#1a1a22',
      }}
    >
      {imageUrl && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}
        />
      )}
      {/* 가독성 오버레이 — 하단으로 갈수록 진해짐 */}
      <div
        style={{
          position:'absolute', inset:0,
          background:'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)',
        }}
      />
      {/* 텍스트 — 좌측 정렬, 하단 배치, 영역 내 강제 수용 */}
      <div
        style={{
          position:'absolute', left:0, right:0, bottom:0,
          padding:'10px 12px',
          display:'flex', flexDirection:'column',
          alignItems:'flex-start', textAlign:'left',
          gap: 2,
          maxWidth:'100%', overflow:'hidden',
        }}
      >
        <div style={{
          fontSize: fontSub, fontWeight: 600, color:'rgba(255,255,255,0.85)',
          lineHeight: 1.2, textShadow:'0 1px 3px rgba(0,0,0,0.6)',
          maxWidth:'100%', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
        }}>{lines[0]}</div>
        <div style={{
          fontSize: fontMain, fontWeight: 900, color: accent,
          letterSpacing:'-0.02em', lineHeight: 1.15,
          textShadow:'0 2px 6px rgba(0,0,0,0.7)',
          maxWidth:'100%',
          wordBreak:'keep-all', overflowWrap:'break-word',
          display:'-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient:'vertical', overflow:'hidden',
        }}>{lines[1]}</div>
        <div style={{
          fontSize: fontSub, fontWeight: 600, color:'#fff',
          lineHeight: 1.2, textShadow:'0 1px 3px rgba(0,0,0,0.6)',
          maxWidth:'100%', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
        }}>{lines[2]}</div>
      </div>
    </div>
  )
}
