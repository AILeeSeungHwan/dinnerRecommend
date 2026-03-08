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
    desc: '삼성전자 DS · 영통 먹자골목',
    count: yeongtongData.length,
    highlight: '점심·회식·이자카야',
  },
  {
    slug: 'mangpo',
    name: '망포역',
    emoji: '🌿',
    desc: '삼성전자 생활가전 · 망포 로컬',
    count: mangpoData.length,
    highlight: '고기구이·국밥·한식',
  },
  {
    slug: 'yeongtongGu',
    name: '영통구청',
    emoji: '🏢',
    desc: '매탄동 · 삼성전기 · 구청 인근',
    count: yeongtongGuData.length,
    highlight: '직장인 점심·실비식당',
  },
]

const CATS = [
  { emoji: '🥩', name: '고기·한우', slug: 'meat' },
  { emoji: '🥣', name: '국밥·해장', slug: 'gukbap' },
  { emoji: '🏮', name: '이자카야',  slug: 'izakaya' },
  { emoji: '🍱', name: '일식·스시', slug: 'japanese' },
  { emoji: '🍜', name: '중식·훠궈', slug: 'chinese' },
  { emoji: '🎉', name: '회식·단체', slug: 'group' },
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
      <section style={{ padding: '44px 16px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.7rem,6vw,2.8rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
          삼성전자 회식장소<br />
          <span style={{ color: 'var(--primary)' }}>AI가 골라드립니다</span>
        </h1>
        <p style={{ fontSize: '.88rem', color: 'var(--muted)', marginBottom: 28, lineHeight: 1.7 }}>
          기분·날씨·예산만 말하면 3초 만에 TOP3 추천<br />
          <strong style={{ color: 'var(--text)', fontWeight: 700 }}>{totalCount}개+</strong> 검증된 영통 맛집 DB
        </p>
      </section>

      <section style={{ padding: '0 16px 40px', maxWidth: 640, margin: '0 auto' }}>

        {/* 지역 선택 */}
        <h2 style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          📍 지역 선택
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:10, marginBottom:40 }}>
          {stations.map(s => (
            <Link key={s.slug} href={`/samsungElectronics/${s.slug}`} style={{ textDecoration:'none' }}>
              <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:'16px 12px', cursor:'pointer', position:'relative', overflow:'hidden' }}>
                <div style={{ fontSize:'1.6rem', marginBottom:5 }}>{s.emoji}</div>
                <div style={{ fontSize:'.92rem', fontWeight:800, marginBottom:3 }}>{s.name}</div>
                <div style={{ fontSize:'.72rem', color:'var(--muted)', marginBottom:10, lineHeight:1.4 }}>{s.desc}</div>
                <span style={{ fontSize:'.68rem', background:'#1a2a2a', color:'#6fcfcf', padding:'2px 8px', borderRadius:100, border:'1px solid #2a4a4a', whiteSpace:'nowrap' }}>
                  식당 {s.count}개+
                </span>
                <div style={{ position:'absolute', top:10, right:10, background:'#1e3a5f', color:'#7eb8f7', fontSize:'.58rem', padding:'2px 6px', borderRadius:100, fontWeight:700 }}>
                  SE
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 카테고리 */}
        <h2 style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          🍽️ 카테고리별 맛집
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 40 }}>
          {CATS.map(cat => (
            <Link href={`/samsungElectronics/yeongtong/category/${cat.slug}`} key={cat.slug} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '16px 10px', textAlign: 'center', cursor: 'pointer',
              }}>
                <div style={{ fontSize: '1.6rem', marginBottom: 5 }}>{cat.emoji}</div>
                <div style={{ fontSize: '.78rem', fontWeight: 600 }}>{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* 사용법 */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 16, padding: '18px 20px', marginBottom: 24,
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

        {/* 강남·잠실 링크 */}
        <div style={{ textAlign: 'center', fontSize: '.78rem', color: 'var(--muted)' }}>
          강남·잠실 쪽 회식도 찾으신다면 →{' '}
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
            오늘뭐먹지
          </Link>
        </div>

      </section>

      <section style={{ padding: '0 16px 48px', maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '.74rem', color: 'var(--muted)', lineHeight: 1.9, opacity: .8 }}>
          데이터는 구글 지도 기반으로 수집됩니다.<br />
          영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인하세요.
        </p>
      </section>
    </Layout>
  )
}
