// 쿠팡 파트너스 배너 컴포넌트
// 파트너스 ID: AF0512369

const COUPANG_ID = 'AF0512369'

// 카테고리별 검색어 + 라벨 매핑
const CAT_QUERY = {
  '고기구이': ['고기구이 밀키트 소고기', '🥩 고기구이 밀키트'],
  '한식':     ['한식 가정간편식 밀키트', '🍱 한식 간편식'],
  '이자카야': ['이자카야 안주세트 맥주안주', '🍻 안주 세트'],
  '야장':     ['야장 안주 캔맥주', '🍺 야장 안주'],
  '일식':     ['일식 밀키트 스시재료', '🍣 일식 간편식'],
  '중식':     ['마라탕 밀키트 중식', '🍜 중식 간편식'],
  '양식':     ['파스타 밀키트 이탈리안', '🍝 파스타 재료'],
  '국밥':     ['국밥 밀키트 해장국', '🥣 국밥 간편식'],
  '국물':     ['찌개 국물요리 밀키트', '🍲 찌개 간편식'],
  '해산물':   ['해산물 밀키트 조개찜', '🦪 해산물 세트'],
  '치킨':     ['냉동치킨 에어프라이어 치킨', '🍗 집에서 치킨'],
  '버거':     ['수제버거 냉동버거 패티', '🍔 버거 재료'],
  '이탈리안': ['파스타면 토마토소스', '🍝 파스타 재료'],
  '스테이크': ['소고기 스테이크 냉장육', '🥩 스테이크 재료'],
  '훠궈':     ['훠궈 밀키트 마라탕세트', '🍲 훠궈 세트'],
  '와인바':   ['와인 와인잔 와인오프너', '🍷 와인 용품'],
  '카페':     ['핸드드립 커피원두 드립백', '☕ 커피 용품'],
  '칼국수':   ['칼국수 밀키트 손칼국수', '🍜 칼국수 세트'],
  '뷔페':     ['가정간편식 밀키트 세트', '🍽 간편식 세트'],
  '한식중식': ['밀키트 가정간편식', '🥡 간편식'],
}
const DEFAULT_QUERY = ['가정간편식 밀키트 인기', '🛒 오늘의 추천 식품']

function getCoupangUrl(query) {
  const q = encodeURIComponent(query)
  return `https://www.coupang.com/np/search?q=${q}&itemsCount=36&searchMethod=RELEVANCE&sourceType=affiliate&affiliate=${COUPANG_ID}`
}

function getQueryForCats(cats) {
  if (!cats || cats.length === 0) return DEFAULT_QUERY
  for (const cat of cats) {
    if (CAT_QUERY[cat]) return CAT_QUERY[cat]
  }
  return DEFAULT_QUERY
}

// ── 상세페이지용 배너 (큰 버전) ─────────────────────────────
export function CoupangDetailBanner({ cats }) {
  const [query, label] = getQueryForCats(cats)
  const url = getCoupangUrl(query)
  return (
    <div style={{
      margin: '28px 0',
      padding: '18px 20px',
      background: 'linear-gradient(135deg, #fff5f0 0%, #fff9f5 100%)',
      border: '1px solid #ffd4b8',
      borderRadius: 14,
      borderLeft: '4px solid #ff6b35',
    }}>
      <div style={{ fontSize: '.72rem', color: '#ff6b35', fontWeight: 700, marginBottom: 8, letterSpacing: '.03em' }}>
        💡 집에서도 즐기고 싶다면?
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          textDecoration: 'none',
        }}
      >
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: '#ff6b35',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem', flexShrink: 0,
        }}>
          🛒
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '.88rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 2 }}>
            {label} 쿠팡에서 보기
          </div>
          <div style={{ fontSize: '.73rem', color: '#888' }}>
            로켓배송 · 최저가 비교
          </div>
        </div>
        <div style={{
          padding: '7px 14px', borderRadius: 8,
          background: '#ff6b35', color: '#fff',
          fontSize: '.78rem', fontWeight: 700, flexShrink: 0,
        }}>
          바로가기 →
        </div>
      </a>
      <div style={{ fontSize: '.62rem', color: '#bbb', marginTop: 10 }}>
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </div>
    </div>
  )
}

// ── 카테고리/카드용 인라인 버튼 (작은 버전) ─────────────────
export function CoupangInlineBtn({ cats, style }) {
  const [query, label] = getQueryForCats(cats)
  const url = getCoupangUrl(query)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={e => e.stopPropagation()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '5px 11px',
        borderRadius: 8,
        background: '#fff4ee',
        border: '1px solid #ffd4b8',
        color: '#ff6b35',
        fontSize: '.72rem',
        fontWeight: 700,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        ...style,
      }}
    >
      🛒 쿠팡
    </a>
  )
}

export default CoupangDetailBanner
