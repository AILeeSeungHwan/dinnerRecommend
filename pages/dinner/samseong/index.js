import { useState, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import restaurants from '../../../data/samseong'

const NL_MENU_MAP = [
  {patterns:/야장|포장마차|포차|노천|치킨.*야외/i, cats:['야장','치킨','이자카야']},
  {patterns:/치맥|치킨.*맥주|후라이드|양념치킨|통닭/i, cats:['치킨','야장']},
  {patterns:/맥주|이자카야|안주|사케|일본술/i, cats:['이자카야','야장','와인바']},
  {patterns:/국밥|해장|해장국|뼈해장|순대국|설렁탕|곰탕/i, cats:['국밥','국물','한식']},
  {patterns:/칼국수|수제비|칼제비/i, cats:['칼국수','면류','한식']},
  {patterns:/고기|구이|삼겹살|목살|갈비살|한우|등심|소고기|BBQ/i, cats:['고기구이','한식']},
  {patterns:/회식|단체|단체석|프라이빗|룸/i, cats:['이자카야','고기구이','중식']},
  {patterns:/중식|짜장|짬뽕|탕수육|딤섬|마라탕|훠궈/i, cats:['중식','훠궈']},
  {patterns:/파스타|피자|이탈리안|리조또|양식/i, cats:['양식','이탈리안']},
  {patterns:/스테이크|립아이|ribeye/i, cats:['스테이크','양식']},
  {patterns:/일식|스시|초밥|사시미|오마카세/i, cats:['이자카야','일식']},
  {patterns:/혼밥|혼자|1인/i, cats:['국밥','칼국수','한식']},
  {patterns:/술|와인|소주|막걸리/i, cats:['이자카야','야장','와인바']},
]

const WEATHER = ['맑음','흐림','비','눈','쌀쌀함','덥고 습함']
const MOODS = ['기분 좋음','피곤함','스트레스','혼밥','축하','허전함','데이트','회식']
const CATS = [
  {emoji:'🥣', name:'국밥·해장', slug:'gukbap', cats:['국밥','국물']},
  {emoji:'🥩', name:'고기·한우', slug:'meat', cats:['고기구이','한식']},
  {emoji:'🏮', name:'이자카야', slug:'izakaya', cats:['이자카야']},
  {emoji:'🍜', name:'중식', slug:'chinese', cats:['중식','훠궈']},
  {emoji:'🍝', name:'양식·스테이크', slug:'western', cats:['양식','이탈리안','스테이크']},
  {emoji:'🎉', name:'회식·단체', slug:'group', cats:['회식']},
  {emoji:'🐔', name:'치킨·야장', slug:'chicken', cats:['치킨','야장']},
  {emoji:'🍣', name:'일식·스시', slug:'japanese', cats:['이자카야','일식']},
]

// 스코어링
function detectMenu(q, moods, wx) {
  const t = `${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  for (const m of NL_MENU_MAP) { if (m.patterns.test(t)) return m }
  return null
}

function preScore(q, moods, wx, cands) {
  const qt = `${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  return cands.map(r => {
    let s = 0
    const blob = `${r.name} ${r.type} ${(r.tags||[]).join(' ')} ${(r.scene||[]).join(' ')} ${(r.moods||[]).join(' ')} ${(r.wx||[]).join(' ')}`
    moods.forEach(m => { if (blob.includes(m)) s += 15 })
    if (blob.includes(wx)) s += 10
    ;(r.tags||[]).forEach(t => { if (qt.includes(t.toLowerCase())) s += 20 })
    ;(r.scene||[]).forEach(sc => { if (qt.includes(sc.toLowerCase())) s += 18 })
    qt.split(/\s+/).filter(w => w.length > 1).forEach(w => { if (blob.toLowerCase().includes(w)) s += 5 })
    s += (r.rt||0) * 3
    return { ...r, _score: s }
  }).sort((a,b) => b._score - a._score)
}

function parsePriceFilter(q) {
  const m = q.match(/(\d+)[,.]?(\d{3})?원?\s*(이하|미만|대|이상|초과)?/)
  if (!m) return null
  const val = parseInt(m[1] + (m[2]||''))
  return { val, dir: m[3]||'이하' }
}

function filterByPrice(cands, pf) {
  if (!pf) return cands
  return cands.filter(r => {
    if (!r.priceRange) return false
    const [a,b] = r.priceRange.split('~')
    const avg = (parseInt(a) + parseInt(b||a)) / 2
    if (pf.dir==='이하'||pf.dir==='미만') return avg <= pf.val
    if (pf.dir==='이상'||pf.dir==='초과') return avg >= pf.val
    return avg >= pf.val*0.7 && avg <= pf.val*1.4
  })
}

// 토큰 비용 계산 (claude-sonnet-4 기준)
function calcCost(inputTokens, outputTokens) {
  return (inputTokens / 1000000) * 3 + (outputTokens / 1000000) * 15
}

// AI 추천 앱
function AiApp() {
  const [ctx, setCtx] = useState('')
  const [weather, setWeather] = useState('')
  const [moods, setMoods] = useState([])
  const [exit4Only, setExit4Only] = useState(false)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(false)
  const [loadingMsg, setLoadingMsg] = useState('')
  const resultsRef = useRef(null)

  const msgs = ['🤔 맛집 찾는 중...','📍 위치 분석 중...','⭐ 리뷰 검토 중...','🎯 최적 매칭 중...']

  // 랜덤 3개 추천
  function getRandom() {
    const pool = exit4Only ? restaurants.filter(r => r.exit4) : restaurants
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    const picks = shuffled.slice(0, 3)
    setResults(picks.map((r, i) => ({
      rank: i+1,
      restaurantName: r.name,
      reason: `평점 ⭐${r.rt} (${r.cnt?.toLocaleString()}개 리뷰). ${r.tags?.slice(0,3).join(', ')} 특징의 ${r.type} 맛집입니다.`,
      reviewHighlight: r.rv?.[0]?.replace(/ \(실제 Google 리뷰.*?\)/,'') || '',
      matchScore: Math.floor(Math.random()*15)+80,
      _random: true,
    })))
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior:'smooth', block:'start' }), 100)
  }

  async function getRecommendations() {
    if (!ctx && !weather && moods.length === 0) {
      getRandom(); return
    }
    setLoading(true); setError(false); setResults(null)
    let mi = 0; setLoadingMsg(msgs[0])
    const iv = setInterval(() => { mi=(mi+1)%msgs.length; setLoadingMsg(msgs[mi]) }, 1200)

    try {
      const mm = detectMenu(ctx, moods, weather)
      const pf = parsePriceFilter(ctx)
      let cands = restaurants
      if (exit4Only) cands = cands.filter(r => r.exit4)
      if (mm) cands = cands.filter(r => mm.cats.some(c => r.cat?.includes(c)))
      if (pf) cands = filterByPrice(cands, pf)
      if (cands.length < 5) cands = exit4Only ? restaurants.filter(r=>r.exit4) : restaurants
      const top20 = preScore(ctx, moods, weather, cands).slice(0, 20)

      const prompt = `삼성역 맛집 추천 AI. TOP3 추천. reviewHighlight는 actualReviews에서만 발췌.
입력: "${ctx||'없음'}" / 날씨:${weather||'무관'} / 기분:${moods.join(',')||'무관'}${exit4Only?' / 4번출구 근처만':''}
후보(${top20.length}개): ${JSON.stringify(top20.map(r=>({name:r.name,type:r.type,rt:r.rt,cnt:r.cnt,addr:r.addr,hours:r.hours,tags:r.tags,priceRange:r.priceRange||null,actualReviews:r.rv})))}
JSON만 응답: {"recommendations":[{"rank":1,"restaurantName":"이름","reason":"이유2~3문장","reviewHighlight":"리뷰발췌","matchScore":95},{"rank":2,"restaurantName":"","reason":"","reviewHighlight":"","matchScore":90},{"rank":3,"restaurantName":"","reason":"","reviewHighlight":"","matchScore":85}]}`

      const res = await fetch('/api/recommend', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      clearInterval(iv); setLoading(false)

      // 토큰 비용 업데이트
      if (data.usage) {
        const cost = calcCost(data.usage.input_tokens||0, data.usage.output_tokens||0)
        window.dispatchEvent(new CustomEvent('token-used', { detail: cost }))
      }

      setResults(data.recommendations)
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior:'smooth', block:'start' }), 100)
    } catch(err) {
      clearInterval(iv); setLoading(false); setError(true)
    }
  }

  const btnStyle = (active) => ({
    padding:'7px 14px', borderRadius:100, fontSize:'.8rem',
    border:`1px solid ${active ? 'var(--primary)' : 'var(--border)'}`,
    background: active ? 'var(--primary)' : 'var(--surface2)',
    color: active ? '#fff' : 'var(--text)', cursor:'pointer', whiteSpace:'nowrap',
  })

  return (
    <div style={{ padding:'20px 16px' }}>
      {/* 입력 */}
      <div style={{ marginBottom:16 }}>
        <textarea value={ctx} onChange={e=>setCtx(e.target.value)}
          placeholder="예: 회식 장소, 8천원대 해장국, 데이트 코스..."
          style={{ width:'100%', minHeight:64, background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:10, color:'var(--text)', padding:'10px 14px', fontSize:'.9rem', resize:'none', outline:'none', fontFamily:'inherit', boxSizing:'border-box' }}
          onKeyDown={e=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();getRecommendations()} }}
        />
      </div>

      {/* 날씨 */}
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:'.75rem', color:'var(--muted)', marginBottom:6 }}>🌤️ 오늘 날씨</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
          {WEATHER.map(w=>(
            <button key={w} onClick={()=>setWeather(weather===w?'':w)} style={btnStyle(weather===w)}>{w}</button>
          ))}
        </div>
      </div>

      {/* 기분 */}
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:'.75rem', color:'var(--muted)', marginBottom:6 }}>😊 기분 (복수선택)</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
          {MOODS.map(m=>(
            <button key={m} onClick={()=>setMoods(prev=>prev.includes(m)?prev.filter(x=>x!==m):[...prev,m])}
              style={{...btnStyle(moods.includes(m)), border:`1px solid ${moods.includes(m)?'var(--accent)':'var(--border)'}`, background:moods.includes(m)?'var(--accent)':'var(--surface2)'}}>{m}</button>
          ))}
        </div>
      </div>

      {/* 4번출구 필터 */}
      <div style={{ marginBottom:20 }}>
        <button onClick={()=>setExit4Only(!exit4Only)} style={{ ...btnStyle(exit4Only), border:`1px solid ${exit4Only?'#ffd700':'var(--border)'}`, background:exit4Only?'#2a2200':'var(--surface2)', color:exit4Only?'#ffd700':'var(--muted)', fontWeight:exit4Only?700:400 }}>
          🚇 4번출구 근처만 ({restaurants.filter(r=>r.exit4).length}개)
        </button>
      </div>

      {/* 버튼 영역 */}
      <div style={{ display:'flex', gap:8 }}>
        <button onClick={getRecommendations} disabled={loading}
          style={{ flex:1, padding:'13px', borderRadius:10, background:'var(--primary)', color:'#fff', border:'none', fontSize:'.95rem', fontWeight:700, cursor:loading?'not-allowed':'pointer', opacity:loading?0.7:1 }}>
          {loading ? loadingMsg : '✨ AI 추천받기'}
        </button>
        <button onClick={getRandom} disabled={loading}
          title="랜덤으로 3개 뽑기"
          style={{ padding:'13px 16px', borderRadius:10, background:'var(--surface2)', color:'var(--text)', border:'1px solid var(--border)', fontSize:'1.1rem', cursor:'pointer' }}>
          🎲
        </button>
      </div>

      {error && (
        <div style={{ marginTop:14, padding:14, background:'#2a1111', borderRadius:10, color:'#ff8888', fontSize:'.85rem' }}>
          추천을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
        </div>
      )}

      {/* 결과 */}
      {results && (
        <div ref={resultsRef} style={{ marginTop:24 }}>
          {results[0]?._random && (
            <div style={{ fontSize:'.75rem', color:'var(--muted)', marginBottom:12, textAlign:'center' }}>🎲 랜덤 추천 결과</div>
          )}
          {results.map((rec, i) => {
            const r = restaurants.find(x=>x.name===rec.restaurantName) || null
            if (!r) return null
            const medals = ['🥇','🥈','🥉']
            const borderColors = ['#ffd700','#c0c0c0','#cd7f32']
            return (
              <div key={i} style={{ background:'var(--surface2)', border:`1px solid var(--border)`, borderRadius:14, padding:'16px 14px', marginBottom:12, borderLeft:`3px solid ${borderColors[i]}` }}>
                <div style={{ display:'flex', gap:10, marginBottom:8 }}>
                  <span style={{ fontSize:'1.4rem', flexShrink:0 }}>{medals[i]}</span>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:'.95rem', fontWeight:700, marginBottom:5 }}>{r.e} {r.name}</div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                      <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--muted)' }}>{r.type}</span>
                      <span style={{ fontSize:'.7rem', background:'#1a2a1a', padding:'2px 7px', borderRadius:100, border:'1px solid #2a4a2a', color:'#6fcf6f' }}>⭐{r.rt}</span>
                      {r.priceRange && <span style={{ fontSize:'.7rem', background:'#2a2200', padding:'2px 7px', borderRadius:100, border:'1px solid #4a3a00', color:'#f5c842' }}>💰{r.priceRange}원</span>}
                      {r.exit4 && <span style={{ fontSize:'.7rem', background:'#1a1a00', padding:'2px 7px', borderRadius:100, border:'1px solid #4a4a00', color:'#ffd700' }}>🚇4번출구</span>}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize:'.84rem', color:'#d0d0e0', marginBottom:8, lineHeight:1.6 }}>{rec.reason}</p>
                {rec.reviewHighlight && (
                  <div style={{ background:'var(--surface)', borderLeft:'3px solid var(--primary)', borderRadius:'0 8px 8px 0', padding:'7px 11px', fontSize:'.78rem', color:'var(--muted)', marginBottom:8 }}>
                    💬 "{rec.reviewHighlight}"
                  </div>
                )}
                <div style={{ display:'flex', gap:6, marginTop:6 }}>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name+' 삼성역')}`} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)', textDecoration:'none' }}>
                    📍 지도
                  </a>
                  <span style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)' }}>
                    🕐 {r.hours}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// 전체 목록 탭
function BrowseTab({ restaurants }) {
  const [search, setSearch] = useState('')
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
      <div style={{ display:'flex', gap:8, marginBottom:14 }}>
        <input value={search} onChange={e=>setSearch(e.target.value)}
          placeholder="🔍 식당명·종류·태그 검색"
          style={{ flex:1, padding:'9px 14px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.88rem', outline:'none' }} />
        <button onClick={()=>setExit4Only(!exit4Only)}
          style={{ padding:'9px 12px', borderRadius:10, border:`1px solid ${exit4Only?'#ffd700':'var(--border)'}`, background:exit4Only?'#2a2200':'var(--surface2)', color:exit4Only?'#ffd700':'var(--muted)', cursor:'pointer', fontSize:'.8rem', whiteSpace:'nowrap' }}>
          🚇 4번출구
        </button>
      </div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:16 }}>
        {allCats.map(cat=>(
          <button key={cat} onClick={()=>setActiveCat(cat)}
            style={{ padding:'4px 11px', borderRadius:100, fontSize:'.76rem', border:`1px solid ${activeCat===cat?'var(--primary)':'var(--border)'}`, background:activeCat===cat?'var(--primary)':'var(--surface2)', color:activeCat===cat?'#fff':'var(--text)', cursor:'pointer' }}>
            {cat}{activeCat===cat?` (${filtered.length})`:''}</button>
        ))}
      </div>
      <div className="restaurant-grid">
        {filtered.map((r,i)=>(
          <Link href={`/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`} key={i}>
            <div className="restaurant-card">
              <div className="card-name">{r.e} {r.name}{r.exit4&&<span style={{ marginLeft:6, fontSize:'.65rem', color:'#ffd700' }}>🚇4번출구</span>}</div>
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

export default function SamseongPage() {
  const [activeTab, setActiveTab] = useState('ai')
  const topRated = [...restaurants].sort((a,b)=>b.rt-a.rt).slice(0,6)

  return (
    <Layout
      title="삼성역 맛집 AI 추천"
      description="삼성역·코엑스 주변 맛집 AI 추천. 국밥·이자카야·한우·중식 170개+ 식당 정보."
      canonical="https://gangnamwhat.com/dinner/samseong"
    >
      <Head>
        <title>삼성역 맛집 추천 | 코엑스·4번출구 170개+ | 강남뭐먹</title>
        <meta name="description" content="삼성역 맛집 AI 추천. 4번출구·코엑스 주변 국밥·이자카야·한우·중식 170개+ 식당을 날씨·기분·예산에 맞게 추천합니다." />
        <meta name="keywords" content="삼성역 맛집, 삼성역 4번출구 맛집, 코엑스 맛집, 삼성동 맛집, 강남 맛집 추천" />
        <link rel="canonical" href="https://gangnamwhat.com/dinner/samseong" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"ItemList",
          "name":"삼성역 맛집 추천","url":"https://gangnamwhat.com/dinner/samseong",
          "numberOfItems":restaurants.length,
          "itemListElement":topRated.slice(0,5).map((r,i)=>({ "@type":"ListItem","position":i+1,"name":r.name,"description":`${r.type} | ⭐${r.rt} | ${r.addr}` }))
        })}} />
      </Head>

      {/* 히어로 */}
      <section style={{ background:'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)', padding:'32px 16px 24px', borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div style={{ fontSize:'.75rem', color:'var(--muted)', marginBottom:8 }}>
            <Link href="/" style={{ color:'var(--muted)' }}>강남뭐먹</Link> › 삼성역
          </div>
          <h1 style={{ fontSize:'clamp(1.4rem,5vw,2.2rem)', fontWeight:900, marginBottom:8, lineHeight:1.2 }}>
            🏙️ 삼성역 맛집
          </h1>
          <p style={{ color:'var(--muted)', fontSize:'.88rem', marginBottom:14 }}>
            코엑스·파르나스·테헤란로 <strong style={{ color:'var(--text)' }}>{restaurants.length}개+</strong> 식당 AI 추천
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
            {['#국밥','#한우','#이자카야','#중식','#회식','#4번출구'].map(t=>(
              <span key={t} style={{ fontSize:'.72rem', color:'var(--muted)', background:'var(--surface2)', padding:'3px 9px', borderRadius:100, border:'1px solid var(--border)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'20px 16px' }}>
        {/* 탭 */}
        <div style={{ display:'flex', borderBottom:'1px solid var(--border)', marginBottom:20 }}>
          {[{id:'ai',label:'✨ AI 추천'},{id:'browse',label:'📋 전체 목록'},{id:'categories',label:'🗂️ 카테고리'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} style={{
              padding:'10px 16px', fontSize:'.85rem', fontWeight:activeTab===tab.id?700:400,
              background:'none', border:'none', cursor:'pointer',
              color:activeTab===tab.id?'var(--primary)':'var(--muted)',
              borderBottom:activeTab===tab.id?'2px solid var(--primary)':'2px solid transparent',
              marginBottom:-1, whiteSpace:'nowrap',
            }}>{tab.label}</button>
          ))}
        </div>

        {activeTab==='ai' && (
          <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, overflow:'hidden' }}>
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
                  <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, padding:'18px 12px', textAlign:'center', cursor:'pointer' }}>
                    <div style={{ fontSize:'1.8rem', marginBottom:6 }}>{cat.emoji}</div>
                    <div style={{ fontSize:'.82rem', fontWeight:600, marginBottom:3 }}>{cat.name}</div>
                    <div style={{ fontSize:'.72rem', color:'var(--muted)' }}>{count}개</div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {/* SEO 블록 */}
        <article style={{ marginTop:48, padding:'24px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1rem', fontWeight:800, marginBottom:12 }}>삼성역 맛집 가이드</h2>
          <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
            삼성역 맛집은 코엑스몰, 파르나스타워, 현대백화점 무역센터 등 대형 상권과 함께 테헤란로 골목의 숨은 맛집들이 공존합니다. 4번출구 방향에는 직장인 점심 맛집이 즐비하고, 코엑스 지하에는 다양한 레스토랑이 자리합니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8 }}>
            회식 장소로는 웨어하우스43, 대도식당, 하이딜라오 훠궈 등이 인기이며, 가성비 점심을 찾는다면 중앙해장, 연화산 짬뽕, 리춍 중식당을 추천합니다.
          </p>
        </article>
      </div>
    </Layout>
  )
}
