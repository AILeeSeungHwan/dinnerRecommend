import Layout from '../components/Layout'
import Link from 'next/link'
import samseongData from '../data/samseong'
import jamsilData from '../data/jamsil'

const stations = [
  {
    slug:'samseong', name:'삼성역', emoji:'🏙️',
    desc:'코엑스·파르나스·테헤란로',
    count: samseongData.length, ready:true,
  },
  {
    slug:'jamsil', name:'잠실역', emoji:'🎡',
    desc:'방이동·석촌호수·롯데타워',
    count: jamsilData.length, ready:true,
  },
  {
    slug:'gangnam', name:'강남역', emoji:'🌆',
    desc:'강남역·신논현·먹자골목',
    count:null, ready:false,
  },
  {
    slug:'seocho', name:'서초역', emoji:'🌿',
    desc:'서초·교대·방배',
    count:null, ready:false,
  },
]

const CATS = [
  {emoji:'🥣', name:'국밥·해장', slug:'gukbap'},
  {emoji:'🥩', name:'고기·한우', slug:'meat'},
  {emoji:'🏮', name:'이자카야',  slug:'izakaya'},
  {emoji:'🍜', name:'중식·훠궈', slug:'chinese'},
  {emoji:'🍝', name:'양식·스테이크', slug:'western'},
  {emoji:'🎉', name:'회식·단체', slug:'group'},
]

export default function Home() {
  const totalCount = samseongData.length + jamsilData.length

  return (
    <Layout
      title="강남 맛집 AI 추천 — 오늘 뭐 먹지?"
      description="강남·삼성역·잠실 맛집을 AI가 날씨·기분·예산에 맞게 3초 만에 추천합니다."
      canonical="https://dinner.ambitstock.com"
    >
      {/* 히어로 */}
      <section style={{ padding:'44px 16px 32px', textAlign:'center' }}>
        <div style={{ fontSize:'.78rem', color:'var(--muted)', marginBottom:12, letterSpacing:'0.05em' }}>
          오늘 뭐 먹지?
        </div>
        <h1 style={{ fontSize:'clamp(1.7rem,6vw,2.8rem)', fontWeight:900, lineHeight:1.15, marginBottom:12 }}>
          강남 맛집,<br />
          <span style={{ color:'var(--primary)' }}>3초면 끝</span>
        </h1>
        <p style={{ fontSize:'.9rem', color:'var(--muted)', marginBottom:28, lineHeight:1.6 }}>
          날씨·기분·예산만 말하면 AI가 딱 맞는 식당 TOP3 추천<br />
          <span style={{ fontSize:'.8rem' }}>삼성역 {samseongData.length}개 + 잠실·방이동 {jamsilData.length}개 = <strong style={{ color:'var(--text)' }}>{totalCount}개+</strong> 식당</span>
        </p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/dinner/samseong">
            <button style={{ padding:'13px 24px', borderRadius:12, background:'var(--primary)', color:'#fff', border:'none', fontSize:'.95rem', fontWeight:700, cursor:'pointer' }}>
              🏙️ 삼성역 맛집 찾기
            </button>
          </Link>
          <Link href="/dinner/jamsil">
            <button style={{ padding:'13px 24px', borderRadius:12, background:'var(--surface)', color:'var(--text)', border:'1px solid var(--border)', fontSize:'.95rem', fontWeight:700, cursor:'pointer' }}>
              🎡 잠실 맛집 찾기
            </button>
          </Link>
        </div>
      </section>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'0 16px 56px' }}>

        {/* 지역 선택 */}
        <h2 style={{ fontSize:'.82rem', fontWeight:700, color:'var(--muted)', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.06em' }}>📍 지역 선택</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(190px, 1fr))', gap:12, marginBottom:40 }}>
          {stations.map(s => (
            <div key={s.slug}>
              {s.ready ? (
                <Link href={`/dinner/${s.slug}`} style={{ textDecoration:'none' }}>
                  <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:'18px 16px', cursor:'pointer', position:'relative', overflow:'hidden', transition:'border-color .15s' }}>
                    <div style={{ fontSize:'1.8rem', marginBottom:6 }}>{s.emoji}</div>
                    <div style={{ fontSize:'1rem', fontWeight:800, marginBottom:3 }}>{s.name}</div>
                    <div style={{ fontSize:'.78rem', color:'var(--muted)', marginBottom:10 }}>{s.desc}</div>
                    <span style={{ fontSize:'.7rem', background:'#1a2a1a', color:'#6fcf6f', padding:'2px 8px', borderRadius:100, border:'1px solid #2a4a2a' }}>
                      식당 {s.count}개+
                    </span>
                    <div style={{ position:'absolute', top:12, right:12, background:'var(--primary)', color:'#fff', fontSize:'.6rem', padding:'2px 7px', borderRadius:100, fontWeight:700 }}>
                      LIVE
                    </div>
                  </div>
                </Link>
              ) : (
                <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:'18px 16px', opacity:0.4 }}>
                  <div style={{ fontSize:'1.8rem', marginBottom:6 }}>{s.emoji}</div>
                  <div style={{ fontSize:'1rem', fontWeight:800, marginBottom:3 }}>{s.name}</div>
                  <div style={{ fontSize:'.78rem', color:'var(--muted)', marginBottom:10 }}>{s.desc}</div>
                  <span style={{ fontSize:'.7rem', color:'var(--muted)', background:'var(--surface2)', padding:'2px 8px', borderRadius:100, border:'1px solid var(--border)' }}>준비중</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 카테고리 (삼성역 기준) */}
        <h2 style={{ fontSize:'.82rem', fontWeight:700, color:'var(--muted)', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.06em' }}>🍽️ 카테고리별 맛집</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:10, marginBottom:40 }}>
          {CATS.map(cat => (
            <Link href={`/dinner/samseong/category/${cat.slug}`} key={cat.slug} style={{ textDecoration:'none' }}>
              <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 10px', textAlign:'center', cursor:'pointer' }}>
                <div style={{ fontSize:'1.6rem', marginBottom:5 }}>{cat.emoji}</div>
                <div style={{ fontSize:'.78rem', fontWeight:600 }}>{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO 텍스트 */}
        <article style={{ padding:'24px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1rem', fontWeight:800, marginBottom:10 }}>강남 맛집 추천, AI로 3초 만에</h2>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:10 }}>
            <strong>강남뭐먹</strong>은 삼성역·잠실역·방이동 주변 맛집 {totalCount}개를 AI가 즉시 추천하는 서비스입니다.
            오늘 뭐 먹지 고민될 때, 날씨·기분·예산만 입력하면 딱 맞는 식당 TOP3를 바로 알려드립니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:10 }}>
            <strong>삼성역·코엑스</strong> 주변은 국밥·한우·이자카야·딤섬·훠궈·스테이크 등 {samseongData.length}개 식당을 엄선했습니다.
            4번출구 근처 맛집 필터와 AI 추천으로 회식·데이트·혼밥 어디든 딱 맞는 곳을 찾을 수 있습니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8 }}>
            <strong>잠실·방이동</strong>은 곱창·삼겹살 골목의 로컬 맛집부터 석촌호수 카페·송리단길 브런치·롯데타워 오마카세까지
            {jamsilData.length}개 식당을 담았습니다. 잠실에서 오늘 뭐 먹지 고민이라면 AI 추천을 써보세요.
          </p>
        </article>
      </div>
    </Layout>
  )
}
