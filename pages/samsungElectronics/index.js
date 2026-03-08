import Layout from '../../components/Layout'
import Link from 'next/link'
import yeongtongData from '../../data/yeongtong'
import mangpoData from '../../data/mangpo'
import yeongtongGuData from '../../data/yeongtongGu'

const stations = [
  {
    slug: 'yeongtong',
    name: '영통역',
    emoji: '🚇',
    desc: '삼성전자 DS부문 · 영통역 먹자골목',
    count: yeongtongData.length,
    ready: yeongtongData.length > 0,
    line: '수인분당선 K245',
    highlight: '점심·회식·이자카야',
  },
  {
    slug: 'mangpo',
    name: '망포역',
    emoji: '🌿',
    desc: '삼성전자 생활가전 · 망포 로컬 맛집',
    count: mangpoData.length,
    ready: mangpoData.length > 0,
    line: '수인분당선 K244',
    highlight: '고기구이·국밥·한식',
  },
  {
    slug: 'yeongtongGu',
    name: '영통구청',
    emoji: '🏢',
    desc: '매탄동 · 삼성전기 · 구청 인근',
    count: yeongtongGuData.length,
    ready: yeongtongGuData.length > 0,
    line: '영통구청 인근',
    highlight: '직장인 점심 · 실비식당',
  },
]

const QUICK_CATS = [
  { emoji: '🥩', label: '고기·회식' },
  { emoji: '🥣', label: '국밥·해장' },
  { emoji: '🍶', label: '이자카야' },
  { emoji: '🍱', label: '점심·혼밥' },
  { emoji: '🥟', label: '중식·양꼬치' },
  { emoji: '🍣', label: '일식·스시' },
]

export default function SamsungElectronicsHome() {
  const totalCount = yeongtongData.length + mangpoData.length + yeongtongGuData.length

  return (
    <Layout
      title="영통 맛집 추천 — 삼성전자 임직원 AI 맛집 가이드"
      description="영통역·망포역·영통구청 삼성전자 임직원을 위한 회식장소·점심 맛집 추천. AI가 기분·예산에 맞게 골라드립니다."
      canonical="https://dinner.ambitstock.com/samsungElectronics"
    >
      {/* 히어로 */}
      <section style={{ padding: '40px 16px 28px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: '.75rem', color: 'var(--primary)', fontWeight: 700,
          background: 'var(--primary)12', borderRadius: 20,
          padding: '4px 12px', marginBottom: 16, letterSpacing: '.03em',
        }}>
          🏭 삼성전자 임직원을 위한 회식장소 추천
        </div>
        <h1 style={{ fontSize: 'clamp(1.6rem,5.5vw,2.6rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: 12 }}>
          영통 맛집 추천<br />
          <span style={{ color: 'var(--primary)' }}>AI가 골라드립니다</span>
        </h1>
        <p style={{ fontSize: '.88rem', color: 'var(--muted)', marginBottom: 24, lineHeight: 1.7 }}>
          기분·날씨·예산만 말하면 3초 만에 TOP3 추천<br />
          <strong style={{ color: 'var(--text)', fontWeight: 700 }}>{totalCount}개+</strong> 검증된 영통 맛집 DB
        </p>

        {/* 카테고리 빠른 탐색 칩 */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 28 }}>
          {QUICK_CATS.map(c => (
            <span key={c.label} style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '6px 12px', borderRadius: 20,
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              fontSize: '.8rem', color: 'var(--text)', fontWeight: 500,
            }}>
              {c.emoji} {c.label}
            </span>
          ))}
        </div>

        {/* 강남·잠실 링크 — 서비스 소개 맥락으로 */}
        <div style={{ fontSize: '.78rem', color: 'var(--muted)' }}>
          강남·잠실 쪽 회식도 찾으신다면 →{' '}
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
            오늘뭐먹지
          </Link>
        </div>
      </section>

      {/* 지역 선택 카드 */}
      <section style={{ padding: '0 16px 16px', maxWidth: 760, margin: '0 auto' }}>
        <div style={{
          fontSize: '.72rem', fontWeight: 700, color: 'var(--muted)',
          letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12,
          textAlign: 'center',
        }}>
          📍 지역 선택
        </div>
        {/* 데스크탑: 가로 1줄 / 모바일: 세로 */}
        <style>{`
          @media (min-width: 600px) {
            .se-station-grid { flex-direction: row !important; }
            .se-station-grid > div { flex: 1; }
          }
        `}</style>
        <div className="se-station-grid" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {stations.map(st => (
            <div key={st.slug}>
              {st.ready ? (
                <Link href={`/samsungElectronics/${st.slug}`} style={{ textDecoration: 'none' }}>
                  <StationCard st={st} />
                </Link>
              ) : (
                <div style={{ opacity: 0.5, cursor: 'default', pointerEvents: 'none' }}>
                  <StationCard st={st} coming />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 사용법 안내 */}
      <section style={{ padding: '24px 16px 16px', maxWidth: 760, margin: '0 auto' }}>
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 16, padding: '18px 20px',
        }}>
          <div style={{ fontWeight: 700, fontSize: '.88rem', marginBottom: 14 }}>💡 이렇게 사용하세요</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { step: '1', text: '지역 선택 (영통역 / 망포역 / 구청)' },
              { step: '2', text: '"오늘 기분·날씨·예산" 입력' },
              { step: '3', text: 'AI가 딱 맞는 식당 TOP3 추천' },
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: 'var(--primary)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.75rem', fontWeight: 800, flexShrink: 0,
                }}>
                  {s.step}
                </div>
                <div style={{ fontSize: '.84rem', color: 'var(--muted)' }}>{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 하단 안내 */}
      <section style={{ padding: '12px 16px 48px', maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '.74rem', color: 'var(--muted)', lineHeight: 1.9, opacity: .8 }}>
          데이터는 구글 지도 기반으로 수집됩니다.<br />
          영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인하세요.
        </p>
      </section>
    </Layout>
  )
}

function StationCard({ st, coming }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: `1px solid ${coming ? 'var(--border)' : 'var(--border)'}`,
      borderRadius: 16, padding: '16px 18px',
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 13,
        background: coming ? 'var(--border)' : 'var(--primary)15',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', flexShrink: 0,
      }}>
        {st.emoji}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 3 }}>
          <span style={{ fontWeight: 800, fontSize: '1rem' }}>{st.name}</span>
          <span style={{
            fontSize: '.68rem', padding: '2px 7px', borderRadius: 6,
            background: coming ? 'var(--border)' : 'var(--primary)20',
            color: coming ? 'var(--muted)' : 'var(--primary)',
            fontWeight: 700,
          }}>
            {coming ? '준비중' : `${st.count}개`}
          </span>
        </div>
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {st.desc}
        </div>
        <div style={{ fontSize: '.72rem', color: 'var(--primary)', fontWeight: 600, opacity: coming ? .4 : .85 }}>
          {st.highlight}
        </div>
      </div>
      {!coming && (
        <div style={{ fontSize: '1.1rem', color: 'var(--muted)', flexShrink: 0 }}>›</div>
      )}
    </div>
  )
}
