import { useState, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import restaurants from '../../../data/samseong'
import {
  scoreRestaurants, detectCategories,
  parsePriceFilter, filterByPrice,
  formatLocalResults
} from '../../../lib/scorer'

const WEATHER = ['맑음','흐림','비','눈','쌀쌀함','덥고 습함']
const MOODS   = ['기분 좋음','피곤함','스트레스','혼밥','축하','허전함','데이트','회식']
const CATS = [
  {emoji:'🥣', name:'국밥·해장', slug:'gukbap', cats:['국밥','국물']},
  {emoji:'🥩', name:'고기·한우', slug:'meat',   cats:['고기구이','한식']},
  {emoji:'🏮', name:'이자카야',  slug:'izakaya', cats:['이자카야']},
  {emoji:'🍜', name:'중식',      slug:'chinese', cats:['중식','훠궈']},
  {emoji:'🍝', name:'양식·스테이크', slug:'western', cats:['양식','이탈리안','스테이크']},
  {emoji:'🎉', name:'회식·단체', slug:'group',   cats:['회식']},
  {emoji:'🐔', name:'치킨·야장', slug:'chicken', cats:['치킨','야장']},
  {emoji:'🍣', name:'일식·스시', slug:'japanese',cats:['이자카야','일식']},
]

// ── AI 추천 앱 ──────────────────────────────────────────────
function AiApp() {
  const [ctx,        setCtx]        = useState('')
  const [weather,    setWeather]    = useState('')
  const [moods,      setMoods]      = useState([])
  const [exit4Only,  setExit4Only]  = useState(false)
  const [loading,    setLoading]    = useState(false)
  const [results,    setResults]    = useState(null)
  const [error,      setError]      = useState(false)
  const [mode,       setMode]       = useState(null) // 'local' | 'random'
  const resultsRef = useRef(null)

  function scrollToResults() {
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior:'smooth', block:'start' }), 100)
  }

  // ── 로컬 스코어링 추천 (무료) ──
  function getLocalRecommendations() {
    setLoading(true); setError(false); setResults(null)
    setTimeout(() => { // 살짝 딜레이로 UX 자연스럽게
      try {
        const pf = parsePriceFilter(ctx)
        const detectedCats = detectCategories(ctx, moods, weather)

        let pool = restaurants
        if (exit4Only) pool = pool.filter(r => r.exit4)

        // 카테고리 필터 (감지된 경우만)
        if (detectedCats.length > 0) {
          const filtered = pool.filter(r => detectedCats.some(c => r.cat?.includes(c)))
          if (filtered.length >= 5) pool = filtered
        }

        // 가격 필터
        if (pf) {
          const priceFiltered = filterByPrice(pool, pf)
          if (priceFiltered.length >= 3) pool = priceFiltered
        }

        const scored = scoreRestaurants(ctx, moods, weather, pool)
        const formatted = formatLocalResults(scored, ctx, moods, weather)
        setResults(formatted)
        setMode('local')
        setLoading(false)
        scrollToResults()
      } catch(e) {
        setLoading(false); setError(true)
      }
    }, 300)
  }

  // ── 랜덤 추천 ──
  function getRandom() {
    const pool = exit4Only ? restaurants.filter(r => r.exit4) : restaurants
    const picks = [...pool].sort(() => Math.random() - 0.5).slice(0, 3)
    setResults(picks.map((r, i) => ({
      rank: i+1,
      restaurantName: r.name,
      reason: `평점 ⭐${r.rt} (${r.cnt?.toLocaleString()}개 리뷰). ${r.tags?.slice(0,3).join(', ')} 특징의 ${r.type} 맛집입니다.`,
      reviewHighlight: r.rv?.[0]?.replace(/ \(실제 Google 리뷰.*?\)/g, '') || '',
      matchScore: Math.floor(Math.random()*15)+75,
      _random: true,
    })))
    setMode('random')
    scrollToResults()
  }

  // ── 버튼 스타일 ──
  const chip = (active, accent) => ({
    padding:'7px 14px', borderRadius:100, fontSize:'.8rem', cursor:'pointer', whiteSpace:'nowrap',
    border:`1px solid ${active ? (accent||'var(--primary)') : 'var(--border)'}`,
    background: active ? (accent||'var(--primary)') : 'var(--surface2)',
    color: active ? '#fff' : 'var(--text)',
  })

  return (
    <div style={{ padding:'20px 16px' }}>

      {/* 자유 입력 */}
      <div style={{ marginBottom:16 }}>
        <textarea value={ctx} onChange={e=>setCtx(e.target.value)}
          placeholder="예: 야근했는데 해장국 먹고싶어, 오늘 데이트인데 분위기 좋은 데, 법인카드 쓸 수 있는 회식장소..."
          style={{ width:'100%', minHeight:68, background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:10, color:'var(--text)', padding:'10px 14px', fontSize:'.88rem', resize:'none', outline:'none', fontFamily:'inherit', boxSizing:'border-box', lineHeight:1.6 }}
          onKeyDown={e=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();getLocalRecommendations()} }}
        />
      </div>

      {/* 날씨 */}
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:'.73rem', color:'var(--muted)', marginBottom:6 }}>🌤️ 오늘 날씨</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
          {WEATHER.map(w => (
            <button key={w} onClick={()=>setWeather(weather===w?'':w)} style={chip(weather===w)}>{w}</button>
          ))}
        </div>
      </div>

      {/* 기분 */}
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:'.73rem', color:'var(--muted)', marginBottom:6 }}>😊 지금 기분</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
          {MOODS.map(m => (
            <button key={m} onClick={()=>setMoods(prev=>prev.includes(m)?prev.filter(x=>x!==m):[...prev,m])}
              style={chip(moods.includes(m),'var(--accent)')}>{m}</button>
          ))}
        </div>
      </div>

      {/* 4번출구 필터 */}
      <div style={{ marginBottom:20 }}>
        <button onClick={()=>setExit4Only(!exit4Only)} style={{
          ...chip(exit4Only,'#2a2200'),
          border:`1px solid ${exit4Only?'#ffd700':'var(--border)'}`,
          color: exit4Only?'#ffd700':'var(--muted)', fontWeight: exit4Only?700:400,
        }}>
          🚇 4번출구 근처만 ({restaurants.filter(r=>r.exit4).length}개)
        </button>
      </div>

      {/* 추천 버튼 */}
      <div style={{ display:'flex', gap:8 }}>
        <button onClick={getLocalRecommendations} disabled={loading} style={{
          flex:1, padding:'13px', borderRadius:10, background:'var(--primary)', color:'#fff',
          border:'none', fontSize:'.95rem', fontWeight:700, cursor:loading?'not-allowed':'pointer', opacity:loading?0.7:1,
        }}>
          {loading ? '🔍 찾는 중...' : '🔍 맛집 찾기'}
        </button>
        <button onClick={getRandom} disabled={loading} title="랜덤 3개 뽑기" style={{
          padding:'13px 16px', borderRadius:10, background:'var(--surface2)',
          color:'var(--text)', border:'1px solid var(--border)', fontSize:'1.1rem', cursor:'pointer',
        }}>🎲</button>
      </div>

      {/* 로컬 모드 안내 */}
      <div style={{ marginTop:8, fontSize:'.71rem', color:'var(--muted)', textAlign:'center' }}>
        ⚡ 즉시 추천 · AI 비용 없음
      </div>

      {error && (
        <div style={{ marginTop:14, padding:12, background:'#2a1111', borderRadius:10, color:'#ff8888', fontSize:'.84rem' }}>
          추천을 불러오지 못했습니다. 다시 시도해주세요.
        </div>
      )}

      {/* 결과 */}
      {results && (
        <div ref={resultsRef} style={{ marginTop:24 }}>
          {mode === 'random' && (
            <div style={{ fontSize:'.72rem', color:'var(--muted)', marginBottom:10, textAlign:'center' }}>🎲 랜덤 추천</div>
          )}
          {mode === 'local' && (
            <div style={{ fontSize:'.72rem', color:'var(--muted)', marginBottom:10, textAlign:'center' }}>⚡ 로컬 스코어링 결과 (즉시·무료)</div>
          )}

          {results.map((rec, i) => {
            const r = restaurants.find(x => x.name === rec.restaurantName)
            if (!r) return null
            const borderColors = ['#ffd700','#c0c0c0','#cd7f32']
            const medals = ['🥇','🥈','🥉']
            return (
              <div key={i} style={{ background:'var(--surface2)', border:`1px solid var(--border)`, borderRadius:14, padding:'14px 14px', marginBottom:10, borderLeft:`3px solid ${borderColors[i]}` }}>
                <div style={{ display:'flex', gap:10, marginBottom:8 }}>
                  <span style={{ fontSize:'1.3rem', flexShrink:0 }}>{medals[i]}</span>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:'.92rem', fontWeight:700, marginBottom:5 }}>{r.e} {r.name}</div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                      <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--muted)' }}>{r.type}</span>
                      <span style={{ fontSize:'.7rem', background:'#1a2a1a', padding:'2px 7px', borderRadius:100, border:'1px solid #2a4a2a', color:'#6fcf6f' }}>⭐{r.rt}</span>
                      {r.priceRange && <span style={{ fontSize:'.7rem', background:'#2a2200', padding:'2px 7px', borderRadius:100, border:'1px solid #4a3a00', color:'#f5c842' }}>💰{r.priceRange}원</span>}
                      {r.exit4 && <span style={{ fontSize:'.7rem', background:'#1a1a00', padding:'2px 7px', borderRadius:100, border:'1px solid #4a4a00', color:'#ffd700' }}>🚇4번출구</span>}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize:'.83rem', color:'#d0d0e0', marginBottom:7, lineHeight:1.6 }}>{rec.reason}</p>

                {rec.reviewHighlight && (
                  <div style={{ background:'var(--surface)', borderLeft:'3px solid var(--primary)', borderRadius:'0 8px 8px 0', padding:'6px 11px', fontSize:'.77rem', color:'var(--muted)', marginBottom:8, lineHeight:1.5 }}>
                    💬 "{rec.reviewHighlight}"
                  </div>
                )}

                <div style={{ display:'flex', gap:6, marginTop:6, flexWrap:'wrap' }}>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name+' 삼성역')}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontSize:'.73rem', padding:'4px 10px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)', textDecoration:'none' }}>
                    📍 지도
                  </a>
                  <span style={{ fontSize:'.73rem', padding:'4px 10px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)' }}>
                    🕐 {r.hours}
                  </span>
                  <Link href={`/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`}
                    style={{ fontSize:'.73rem', padding:'4px 10px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--primary)', textDecoration:'none' }}>
                    상세 보기 →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ── 전체 목록 탭 ────────────────────────────────────────────
function BrowseTab({ restaurants }) {
  const [search,    setSearch]    = useState('')
  const [activeCat, setActiveCat] = useState('전체')
  const [exit4Only, setExit4Only] = useState(false)

  const allCats = ['전체','국밥','고기구이','이자카야','중식','양식','치킨','야장','버거','칼국수']
  const filtered = restaurants.filter(r => {
    if (exit4Only && !r.exit4) return false
    const matchCat = activeCat==='전체' || r.cat?.includes(activeCat)
    const matchSearch = !search || r.name.includes(search) || r.type.includes(search) || r.tags?.some(t=>t.includes(search))
    return matchCat && matchSearch
  })

  return (
    <div>
      <div style={{ display:'flex', gap:8, marginBottom:12 }}>
        <input value={search} onChange={e=>setSearch(e.target.value)}
          placeholder="🔍 식당명·종류·태그"
          style={{ flex:1, padding:'9px 14px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.88rem', outline:'none' }} />
        <button onClick={()=>setExit4Only(!exit4Only)} style={{
          padding:'9px 12px', borderRadius:10, fontSize:'.78rem', whiteSpace:'nowrap', cursor:'pointer',
          border:`1px solid ${exit4Only?'#ffd700':'var(--border)'}`,
          background: exit4Only?'#2a2200':'var(--surface2)', color: exit4Only?'#ffd700':'var(--muted)',
        }}>🚇 4번출구</button>
      </div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:14 }}>
        {allCats.map(cat => (
          <button key={cat} onClick={()=>setActiveCat(cat)} style={{
            padding:'4px 11px', borderRadius:100, fontSize:'.75rem', cursor:'pointer',
            border:`1px solid ${activeCat===cat?'var(--primary)':'var(--border)'}`,
            background: activeCat===cat?'var(--primary)':'var(--surface2)',
            color: activeCat===cat?'#fff':'var(--text)',
          }}>{cat}{activeCat===cat?` (${filtered.length})`:''}</button>
        ))}
      </div>
      <div className="restaurant-grid">
        {filtered.map((r,i) => (
          <Link href={`/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`} key={i}>
            <div className="restaurant-card">
              <div className="card-name">{r.e} {r.name}{r.exit4&&<span style={{ marginLeft:5, fontSize:'.62rem', color:'#ffd700' }}>🚇</span>}</div>
              <div className="card-meta">
                <span className="tag">{r.type}</span>
                <span className="tag rating">⭐{r.rt}</span>
                {r.priceRange&&<span className="tag price">💰{r.priceRange}원</span>}
              </div>
              <div className="card-addr">📍 {r.addr}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ── 메인 페이지 ─────────────────────────────────────────────
export default function SamseongPage() {
  const [activeTab, setActiveTab] = useState('ai')
  const topRated = [...restaurants].sort((a,b)=>b.rt-a.rt).slice(0,6)

  return (
    <Layout
      title="삼성역 맛집 AI 추천"
      description="삼성역·코엑스 주변 맛집 추천. 국밥·이자카야·한우·중식 170개+ 식당 정보."
      canonical="https://gangnamwhat.com/dinner/samseong"
    >
      <Head>
        <title>삼성역 맛집 추천 | 코엑스·4번출구 170개+ | 강남뭐먹</title>
        <meta name="description" content="삼성역 맛집 즉시 추천. 4번출구·코엑스 주변 국밥·이자카야·한우·중식 170개+ 식당을 날씨·기분·예산에 맞게 추천합니다." />
        <link rel="canonical" href="https://gangnamwhat.com/dinner/samseong" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"ItemList",
          "name":"삼성역 맛집 추천","url":"https://gangnamwhat.com/dinner/samseong",
          "numberOfItems":restaurants.length,
          "itemListElement":topRated.slice(0,5).map((r,i)=>({ "@type":"ListItem","position":i+1,"name":r.name,"description":`${r.type} | ⭐${r.rt} | ${r.addr}` }))
        })}} />
      </Head>

      {/* 히어로 */}
      <section style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'28px 16px 20px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div style={{ fontSize:'.73rem', color:'var(--muted)', marginBottom:8 }}>
            <Link href="/" style={{ color:'var(--muted)' }}>강남뭐먹</Link> › 삼성역
          </div>
          <h1 style={{ fontSize:'clamp(1.3rem,5vw,2rem)', fontWeight:900, marginBottom:6, lineHeight:1.2 }}>
            🏙️ 삼성역 맛집
          </h1>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', marginBottom:12 }}>
            코엑스·파르나스·테헤란로 <strong style={{ color:'var(--text)' }}>{restaurants.length}개+</strong> 식당 즉시 추천
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
            {['#국밥','#한우','#이자카야','#중식','#회식','#4번출구'].map(t=>(
              <span key={t} style={{ fontSize:'.7rem', color:'var(--muted)', background:'var(--surface2)', padding:'3px 9px', borderRadius:100, border:'1px solid var(--border)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'16px 16px' }}>
        {/* 탭 */}
        <div style={{ display:'flex', borderBottom:'1px solid var(--border)', marginBottom:18 }}>
          {[{id:'ai',label:'🔍 추천'},{id:'browse',label:'📋 전체'},{id:'categories',label:'🗂️ 카테고리'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} style={{
              padding:'9px 16px', fontSize:'.84rem', fontWeight:activeTab===tab.id?700:400,
              background:'none', border:'none', cursor:'pointer', whiteSpace:'nowrap',
              color:activeTab===tab.id?'var(--primary)':'var(--muted)',
              borderBottom:activeTab===tab.id?'2px solid var(--primary)':'2px solid transparent',
              marginBottom:-1,
            }}>{tab.label}</button>
          ))}
        </div>

        {activeTab==='ai' && (
          <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, overflow:'hidden' }}>
            <AiApp />
          </div>
        )}

        {activeTab==='browse' && <BrowseTab restaurants={restaurants} />}

        {activeTab==='categories' && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(130px, 1fr))', gap:10 }}>
            {CATS.map(cat=>{
              const count = restaurants.filter(r=>cat.cats.some(c=>r.cat?.includes(c))).length
              return (
                <Link href={`/dinner/samseong/category/${cat.slug}`} key={cat.slug}>
                  <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 12px', textAlign:'center', cursor:'pointer' }}>
                    <div style={{ fontSize:'1.7rem', marginBottom:5 }}>{cat.emoji}</div>
                    <div style={{ fontSize:'.8rem', fontWeight:600, marginBottom:2 }}>{cat.name}</div>
                    <div style={{ fontSize:'.7rem', color:'var(--muted)' }}>{count}개</div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {/* SEO 블록 */}
        <article style={{ marginTop:44, padding:'22px 18px', background:'var(--surface)', borderRadius:12, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'.95rem', fontWeight:800, marginBottom:10 }}>삼성역 맛집 가이드</h2>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:8 }}>
            삼성역 맛집은 코엑스몰, 파르나스타워, 현대백화점 무역센터 등 대형 상권과 테헤란로 골목의 숨은 맛집들이 공존합니다. 4번출구 방향에는 직장인 점심 맛집이 즐비하고, 코엑스 지하에는 다양한 레스토랑이 자리합니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8 }}>
            회식 장소로는 웨어하우스43, 대도식당, 하이딜라오 훠궈 등이 인기이며, 가성비 점심은 중앙해장, 연화산 짬뽕, 리춍 중식당을 추천합니다.
          </p>
        </article>
      </div>
    </Layout>
  )
}
