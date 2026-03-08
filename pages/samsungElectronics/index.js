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
    desc: '삼성전자 DS부문·영통역 먹자골목',
    count: yeongtongData.length,
    ready: yeongtongData.length > 0,
    line: '수인분당선 K245',
    color: '#FFCC00',
  },
  {
    slug: 'mangpo',
    name: '망포역',
    emoji: '🌿',
    desc: '삼성전자 생활가전·망포 맛집',
    count: mangpoData.length,
    ready: mangpoData.length > 0,
    line: '수인분당선 K244',
    color: '#FFCC00',
  },
  {
    slug: 'yeongtongGu',
    name: '영통구청',
    emoji: '🏢',
    desc: '영통구 관공서·주변 맛집',
    count: yeongtongGuData.length,
    ready: yeongtongGuData.length > 0,
    line: '영통구청 인근',
    color: '#888',
  },
]

export default function SamsungElectronicsHome() {
  const totalCount = yeongtongData.length + mangpoData.length + yeongtongGuData.length

  return (
    <Layout
      title="삼성전자 맛집 AI 추천 — 영통 뭐 먹지?"
      description="영통역·망포역·영통구청 맛집을 AI가 기분·예산에 맞게 추천합니다. 삼성전자 임직원을 위한 회식·점심 맛집 가이드."
      canonical="https://dinner.ambitstock.com/samsungElectronics"
    >
      {/* 히어로 */}
      <section style={{ padding: '44px 16px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: 12, letterSpacing: '0.05em' }}>
          삼성전자 임직원을 위한
        </div>
        <h1 style={{ fontSize: 'clamp(1.7rem,6vw,2.8rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
          영통 맛집,<br />
          <span style={{ color: 'var(--primary)' }}>3초면 끝</span>
        </h1>
        <p style={{ fontSize: '.9rem', color: 'var(--muted)', marginBottom: 28, lineHeight: 1.6 }}>
          날씨·기분·예산만 말하면 AI가 딱 맞는 식당 TOP3 추천<br />
          {totalCount > 0
            ? <span style={{ fontSize: '.8rem' }}>영통·망포·구청 주변 <strong style={{ color: 'var(--text)' }}>{totalCount}개+</strong> 식당</span>
            : <span style={{ fontSize: '.8rem', color: 'var(--muted)' }}>데이터 수집 중 — 곧 오픈 예정</span>
          }
        </p>

        {/* 강남 링크 버튼 */}
        <div style={{ marginBottom: 16 }}>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', borderRadius: 20,
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            color: 'var(--muted)', fontSize: '.82rem',
            textDecoration: 'none',
          }}>
            🏙️ 강남·잠실 맛집 보러 가기 →
          </Link>
        </div>
      </section>

      {/* 강남 추천 배너 */}
      <section style={{ padding: '0 16px 24px', maxWidth: 480, margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--primary)18, var(--surface))',
          border: '1px solid var(--primary)40',
          borderRadius: 16, padding: '16px 20px',
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{ fontSize: '2rem' }}>🍽️</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '.9rem', marginBottom: 4 }}>
              강남·잠실 맛집도 원하신다면?
            </div>
            <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: 8, lineHeight: 1.5 }}>
              삼성역·잠실역 주변 {yeongtongData.length + mangpoData.length + yeongtongGuData.length > 0 ? '400개+' : '235개+'} 식당 AI 추천 서비스
            </div>
            <Link href="/" style={{
              display: 'inline-block', padding: '6px 14px',
              background: 'var(--primary)', color: '#fff',
              borderRadius: 8, fontSize: '.8rem', fontWeight: 700,
              textDecoration: 'none',
            }}>
              dinner.ambitstock.com 바로가기
            </Link>
          </div>
        </div>
      </section>

      {/* 역 카드 목록 */}
      <section style={{ padding: '0 16px 40px', maxWidth: 480, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16, color: 'var(--muted)' }}>
          지역 선택
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {stations.map(st => (
            <div key={st.slug}>
              {st.ready ? (
                <Link href={`/samsungElectronics/${st.slug}`} style={{ textDecoration: 'none' }}>
                  <StationCard st={st} />
                </Link>
              ) : (
                <div style={{ opacity: 0.6, cursor: 'default' }}>
                  <StationCard st={st} coming />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 하단 안내 */}
      <section style={{ padding: '0 16px 48px', maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '.78rem', color: 'var(--muted)', lineHeight: 1.8 }}>
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
      border: '1px solid var(--border)',
      borderRadius: 16, padding: '20px',
      display: 'flex', alignItems: 'center', gap: 16,
      transition: 'box-shadow .15s',
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: coming ? 'var(--border)' : 'var(--primary)15',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.6rem', flexShrink: 0,
      }}>
        {st.emoji}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ fontWeight: 800, fontSize: '1.05rem' }}>{st.name}</span>
          <span style={{
            fontSize: '.7rem', padding: '2px 7px', borderRadius: 6,
            background: coming ? 'var(--border)' : 'var(--primary)20',
            color: coming ? 'var(--muted)' : 'var(--primary)',
            fontWeight: 600,
          }}>
            {coming ? '준비중' : `${st.count}개`}
          </span>
        </div>
        <div style={{ fontSize: '.82rem', color: 'var(--muted)', marginBottom: 4 }}>{st.desc}</div>
        <div style={{ fontSize: '.74rem', color: 'var(--muted)', opacity: .7 }}>{st.line}</div>
      </div>
      {!coming && (
        <div style={{ fontSize: '1.2rem', color: 'var(--muted)' }}>›</div>
      )}
    </div>
  )
}
