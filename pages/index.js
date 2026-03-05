import Layout from '../components/Layout'
import Link from 'next/link'

const stations = [
  { slug:'samseong', name:'삼성역', emoji:'🏙️', desc:'코엑스·파르나스·테헤란로', count:170, ready:true },
  { slug:'gangnam',  name:'강남역', emoji:'🌆', desc:'강남역·신논현·먹자골목', count:null, ready:false },
  { slug:'jamsil',   name:'잠실역', emoji:'🎡', desc:'롯데타워·석촌호수', count:null, ready:false },
  { slug:'seocho',   name:'서초역', emoji:'🌿', desc:'서초·교대·방배', count:null, ready:false },
]

const CATS = [
  {emoji:'🥣', name:'국밥·해장', slug:'gukbap'},
  {emoji:'🥩', name:'고기·한우', slug:'meat'},
  {emoji:'🏮', name:'이자카야', slug:'izakaya'},
  {emoji:'🍜', name:'중식·훠궈', slug:'chinese'},
  {emoji:'🍝', name:'양식·스테이크', slug:'western'},
  {emoji:'🎉', name:'회식·단체', slug:'group'},
]

export default function Home() {
  return (
    <Layout
      title="강남 맛집 AI 추천"
      description="강남·삼성역·잠실역 맛집을 AI가 날씨·기분·예산에 맞게 추천합니다."
      canonical="https://gangnamwhat.com"
    >
      {/* 히어로 */}
      <section style={{ padding:'40px 16px 28px', textAlign:'center' }}>
        <h1 style={{ fontSize:'clamp(1.6rem,6vw,2.6rem)', fontWeight:900, lineHeight:1.2, marginBottom:10 }}>
          강남 맛집,<br /><span style={{ color:'var(--primary)' }}>AI가 골라드립니다</span>
        </h1>
        <p style={{ fontSize:'.9rem', color:'var(--muted)', marginBottom:24, lineHeight:1.6 }}>
          날씨·기분·예산만 말하면 딱 맞는 식당 TOP3 추천
        </p>
        <Link href="/dinner/samseong">
          <button style={{ padding:'13px 28px', borderRadius:12, background:'var(--primary)', color:'#fff', border:'none', fontSize:'1rem', fontWeight:700, cursor:'pointer' }}>
            🏙️ 삼성역 맛집 찾기
          </button>
        </Link>
      </section>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'0 16px 48px' }}>
        {/* 지역 선택 */}
        <h2 style={{ fontSize:'.88rem', fontWeight:700, color:'var(--muted)', marginBottom:12 }}>📍 지역 선택</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:12, marginBottom:36 }}>
          {stations.map(s => (
            <div key={s.slug}>
              {s.ready ? (
                <Link href={`/dinner/${s.slug}`}>
                  <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:'18px 16px', cursor:'pointer', position:'relative', overflow:'hidden' }}>
                    <div style={{ fontSize:'1.8rem', marginBottom:6 }}>{s.emoji}</div>
                    <div style={{ fontSize:'1rem', fontWeight:800, marginBottom:3 }}>{s.name}</div>
                    <div style={{ fontSize:'.78rem', color:'var(--muted)', marginBottom:8 }}>{s.desc}</div>
                    {s.count && <span style={{ fontSize:'.7rem', background:'#1a2a1a', color:'#6fcf6f', padding:'2px 8px', borderRadius:100, border:'1px solid #2a4a2a' }}>식당 {s.count}개+</span>}
                    <div style={{ position:'absolute', top:12, right:12, background:'var(--primary)', color:'#fff', fontSize:'.62rem', padding:'2px 7px', borderRadius:100, fontWeight:700 }}>LIVE</div>
                  </div>
                </Link>
              ) : (
                <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:'18px 16px', opacity:0.45 }}>
                  <div style={{ fontSize:'1.8rem', marginBottom:6 }}>{s.emoji}</div>
                  <div style={{ fontSize:'1rem', fontWeight:800, marginBottom:3 }}>{s.name}</div>
                  <div style={{ fontSize:'.78rem', color:'var(--muted)', marginBottom:8 }}>{s.desc}</div>
                  <span style={{ fontSize:'.7rem', color:'var(--muted)', background:'var(--surface2)', padding:'2px 8px', borderRadius:100, border:'1px solid var(--border)' }}>준비중</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 카테고리 */}
        <h2 style={{ fontSize:'.88rem', fontWeight:700, color:'var(--muted)', marginBottom:12 }}>🍽️ 카테고리별 맛집</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:10, marginBottom:36 }}>
          {CATS.map(cat=>(
            <Link href={`/dinner/samseong/category/${cat.slug}`} key={cat.slug}>
              <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 10px', textAlign:'center', cursor:'pointer' }}>
                <div style={{ fontSize:'1.6rem', marginBottom:5 }}>{cat.emoji}</div>
                <div style={{ fontSize:'.78rem', fontWeight:600 }}>{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO 텍스트 */}
        <article style={{ padding:'24px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1rem', fontWeight:800, marginBottom:10 }}>강남 맛집 추천, AI로 빠르게</h2>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:10 }}>
            <strong>강남뭐먹</strong>은 삼성역·강남역·잠실역 주변 맛집을 AI가 즉시 추천하는 서비스입니다. 오늘 날씨, 기분, 예산을 입력하면 딱 맞는 식당 TOP3를 바로 알려드립니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8 }}>
            삼성역 맛집은 코엑스몰부터 테헤란로 골목까지 국밥·한우·이자카야·딤섬·훠궈·스테이크 등 170개+ 식당을 엄선했습니다. 회식 장소, 데이트 코스, 혼밥 맛집 모두 추천 가능합니다.
          </p>
        </article>
      </div>
    </Layout>
  )
}
