import Layout from '../components/Layout'
import Link from 'next/link'

const stations = [
  {
    slug: 'samseong',
    name: '삼성역',
    emoji: '🏙️',
    desc: '코엑스·파르나스·테헤란로 주변 170개+ 식당',
    count: 170,
    ready: true,
    keywords: ['삼성역 맛집', '코엑스 맛집', '강남구 삼성동 맛집']
  },
  {
    slug: 'gangnam',
    name: '강남역',
    emoji: '🌆',
    desc: '강남역 10번출구 · 먹자골목 · 신논현 맛집',
    count: null,
    ready: false,
    keywords: ['강남역 맛집', '강남 맛집 추천']
  },
  {
    slug: 'jamsil',
    name: '잠실역',
    emoji: '🎡',
    desc: '롯데타워·석촌호수·잠실새내 맛집',
    count: null,
    ready: false,
    keywords: ['잠실역 맛집', '잠실 맛집 추천']
  },
  {
    slug: 'seocho',
    name: '서초역',
    emoji: '🌿',
    desc: '서초·교대·방배 주변 맛집',
    count: null,
    ready: false,
    keywords: ['서초역 맛집', '교대 맛집']
  },
]

const categories = [
  { emoji: '🥣', name: '국밥·해장', slug: 'gukbap' },
  { emoji: '🥩', name: '고기구이·한우', slug: 'meat' },
  { emoji: '🏮', name: '이자카야', slug: 'izakaya' },
  { emoji: '🍜', name: '중식', slug: 'chinese' },
  { emoji: '🍝', name: '이탈리안·양식', slug: 'western' },
  { emoji: '🍖', name: '회식·단체', slug: 'group' },
]

export default function Home() {
  return (
    <Layout
      title="강남·삼성역 맛집 AI 추천"
      description="삼성역, 강남역, 잠실역 주변 맛집을 AI가 날씨·기분·예산에 맞게 추천합니다. 국밥, 이자카야, 고기구이, 중식 등 170개+ 식당 정보."
      canonical="https://dinner.ambitstock.com"
    >
      {/* 히어로 */}
      <section className="hero">
        <div className="container">
          <h1>강남 맛집, <em>AI가 골라드립니다</em></h1>
          <p>날씨·기분·예산만 말하면 딱 맞는 식당을 추천해드립니다<br />
          삼성역·강남역·잠실역 주변 170개+ 식당 데이터베이스</p>
        </div>
      </section>

      {/* 지역 선택 */}
      <section className="container" style={{ paddingBottom: 48 }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16, color: 'var(--muted)' }}>
          📍 지역 선택
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {stations.map(s => (
            <div key={s.slug}>
              {s.ready ? (
                <Link href={`/dinner/${s.slug}`}>
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 14,
                    padding: '20px 18px',
                    cursor: 'pointer',
                    transition: 'all .2s',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--primary)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: 8 }}>{s.emoji}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 4 }}>{s.name}</div>
                    <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: 10 }}>{s.desc}</div>
                    {s.count && (
                      <span className="tag rating">식당 {s.count}개+</span>
                    )}
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      background: 'var(--primary)', color: '#fff',
                      fontSize: '.65rem', padding: '2px 8px', borderRadius: 100, fontWeight: 700
                    }}>LIVE</div>
                  </div>
                </Link>
              ) : (
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '20px 18px',
                  opacity: 0.5
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>{s.emoji}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 4 }}>{s.name}</div>
                  <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: 10 }}>{s.desc}</div>
                  <span className="tag">준비중</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 카테고리 바로가기 */}
        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '48px 0 16px', color: 'var(--muted)' }}>
          🍽️ 카테고리별 맛집
        </h2>
        <div className="cat-grid">
          {categories.map(cat => (
            <Link href={`/dinner/samseong/category/${cat.slug}`} key={cat.slug}>
              <div className="cat-card">
                <div className="cat-emoji">{cat.emoji}</div>
                <div className="cat-name">{cat.name}</div>
                <div className="cat-count">삼성역</div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO 텍스트 블록 */}
        <article style={{
          marginTop: 60,
          padding: '32px 24px',
          background: 'var(--surface)',
          borderRadius: 16,
          border: '1px solid var(--border)'
        }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16 }}>
            강남 맛집 추천, AI로 더 쉽게
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.92rem', lineHeight: 1.8 }}>
            <strong>dinner.ambitstock</strong>는 삼성역·강남역·잠실역 등 강남권 주요 역 주변 맛집 정보를
            AI 기반으로 추천해드리는 서비스입니다. 오늘 날씨, 지금 기분, 예산을 입력하면
            딱 맞는 식당 TOP 3를 즉시 추천해드립니다.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '.92rem', lineHeight: 1.8, marginTop: 12 }}>
            <strong>삼성역 맛집</strong>으로는 코엑스몰 내 다양한 레스토랑부터 테헤란로 골목의 숨은 맛집까지,
            국밥·해장국부터 프리미엄 한우, 이자카야, 딤섬, 훠궈, 스테이크까지 170개+ 식당을 엄선했습니다.
            회식 장소, 데이트 코스, 혼밥 맛집까지 모든 상황에 맞는 추천이 가능합니다.
          </p>
        </article>
      </section>
    </Layout>
  )
}
