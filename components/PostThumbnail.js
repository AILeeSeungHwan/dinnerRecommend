/**
 * PostThumbnail — 포스트 리스트용 정사각형 썸네일
 *
 * 동작:
 *  - 식당 이미지 1장을 백그라운드(투명도 30%)로 깔고
 *  - 후킹 텍스트를 전방에 그라디언트 컬러로 표시
 *  - slug 해시로 패턴(텍스트·색상) 결정 — 동일 포스트는 항상 같은 썸네일
 *
 * Props:
 *  - imageUrl: 백그라운드 이미지 URL (없으면 컬러 배경만)
 *  - region:   지역명 (강남역, 잠실, 판교 등)
 *  - category: 카테고리 (chinese, meat, izakaya 등)
 *  - slug:     해시 시드용
 *  - size:     선택. px 단위 정사각형 변 길이 (기본 200)
 */
const CATEGORY_LABEL = {
  meat: '고기 맛집', chinese: '중식', izakaya: '이자카야',
  japanese: '일식', gukbap: '국밥·해장', western: '양식',
  date: '데이트', group: '회식', lunch: '점심', budget: '가성비',
  chicken: '치킨·야장', special: '특별 추천',
}

// 후킹 텍스트 패턴 — 12개 (slug 해시로 결정)
const TEXT_PATTERNS = [
  (region, cat) => [region, `${cat}`, '찾는다면?'],
  (region, cat) => ['오늘 점심', '뭐 먹지?', `→ ${region} ${cat}`],
  (region, cat) => [`${region}`, `${cat}`, 'TOP 픽'],
  (region, cat) => ['직장인 점심', `${region} ${cat}`, 'BEST'],
  (region, cat) => [`${region}`, `${cat} 가이드`, '2026'],
  (region, cat) => ['회식 장소', '고민 끝.', `${region} ${cat}`],
  (region, cat) => ['혼밥 OK', `${region}`, `${cat} 5곳`],
  (region, cat) => [`${region}`, `${cat}`, '선정 기준'],
  (region, cat) => ['리뷰 검증', `${region}`, `${cat} 맛집`],
  (region, cat) => ['실데이터', '기반 추천', `${region} ${cat}`],
  (region, cat) => [`${region}`, '진짜 맛집', `${cat} 가이드`],
  (region, cat) => ['놓치면 후회', `${region}`, `${cat} 베스트`],
]

// 컬러 팔레트 — 12개 그라디언트 (카테고리·해시별 결정)
const PALETTES = [
  { from: '#FF6B6B', to: '#4ECDC4', text: '#fff' },
  { from: '#4facfe', to: '#00f2fe', text: '#0b1320' },
  { from: '#43e97b', to: '#38f9d7', text: '#0b1320' },
  { from: '#fa709a', to: '#fee140', text: '#0b1320' },
  { from: '#667EEA', to: '#764BA2', text: '#fff' },
  { from: '#f7971e', to: '#ffd200', text: '#0b1320' },
  { from: '#ff9966', to: '#ff5e62', text: '#fff' },
  { from: '#a18cd1', to: '#fbc2eb', text: '#0b1320' },
  { from: '#30cfd0', to: '#330867', text: '#fff' },
  { from: '#ff758c', to: '#ff7eb3', text: '#fff' },
  { from: '#13547a', to: '#80d0c7', text: '#fff' },
  { from: '#ee9ca7', to: '#ffdde1', text: '#0b1320' },
]

function hash(str) {
  let h = 0
  for (let i = 0; i < (str || '').length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

export default function PostThumbnail({ imageUrl, region, category, slug, size = 200 }) {
  const seed = hash(slug || '')
  const cat = CATEGORY_LABEL[category] || category || '맛집'
  const reg = region || ''
  const lines = TEXT_PATTERNS[seed % TEXT_PATTERNS.length](reg, cat)
  const palette = PALETTES[(seed >> 4) % PALETTES.length]

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        borderRadius: 12,
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${palette.from} 0%, ${palette.to} 100%)`,
        flexShrink: 0,
      }}
    >
      {/* 배경 이미지 — 투명도 30% (사용자 요청 70% 투명도 = 30% opacity) */}
      {imageUrl && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            opacity: 0.3,
          }}
        />
      )}
      {/* 어두운 그라디언트 오버레이 — 텍스트 가독성 */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${palette.from}cc 0%, ${palette.to}cc 100%)`,
          mixBlendMode: 'multiply',
        }}
      />
      {/* 텍스트 — 정렬 & 줄바꿈 강제 */}
      <div
        style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'flex-start',
          padding: '14px 16px',
          color: palette.text,
          fontWeight: 900,
          lineHeight: 1.18,
          letterSpacing: '-0.02em',
          fontSize: Math.max(13, Math.round(size / 11)),
          textShadow: palette.text === '#fff' ? '0 2px 6px rgba(0,0,0,.3)' : '0 2px 4px rgba(255,255,255,.4)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {lines.map((line, i) => (
          <div key={i} style={{ width: '100%' }}>{line}</div>
        ))}
      </div>
    </div>
  )
}
