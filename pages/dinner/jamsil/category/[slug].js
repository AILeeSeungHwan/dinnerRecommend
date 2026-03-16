import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import restaurants from '../../../../data/jamsil'


// ── 주사위 오버레이 ──────────────────────────────────────────────
// 네이버 지도 URL - 이름에서 지역 suffix 제거 + 좌표 중심 검색
// 가격 구분자 포맷: "25000~40000" → "25,000~40,000"
function fmtPrice(p) {
  if (!p) return ''
  return p.split('~').map(n => parseInt(n).toLocaleString('ko-KR')).join('~')
}

function naverMapUrl(name, lat, lng) {
  const cleaned = name
    .replace(/ (잠실점|잠실역점|방이점|송파점|석촌점|잠실새내점|잠실본점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const hasRegion = /(잠실|송파|방이|석촌|롯데월드)/.test(cleaned)
  const query = hasRegion ? cleaned : cleaned + ' 잠실'
  const coord = (lat && lng) ? `?c=${lng},${lat},17,0,0,0,dh` : ''
  return `https://map.naver.com/v5/search/${encodeURIComponent(query)}${coord}`
}

function DiceOverlay({ onDone }) {
  const DICE = ['⚀','⚁','⚂','⚃','⚄','⚅','🎲']
  const [face, setFace] = useState('🎲')
  useEffect(() => {
    let cnt = 0
    const id = setInterval(() => {
      setFace(DICE[Math.floor(Math.random()*DICE.length)])
      cnt++
      if (cnt >= 22) { clearInterval(id); setTimeout(onDone, 300) }
    }, 90)
    return () => clearInterval(id)
  }, [])
  return (
    <div style={{ position:'fixed',inset:0,zIndex:300,background:'rgba(0,0,0,.8)',backdropFilter:'blur(8px)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
      <div style={{ fontSize:'6rem',animation:'spin .6s linear infinite' }}>{face}</div>
      <p style={{ color:'#aaa',marginTop:16,fontSize:'.95rem' }}>이 카테고리에서 뽑는 중...</p>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}

const CATEGORY_MAP = {
  meat:     { name: '고기구이·한우',     emoji: '🥩', cats: ['고기구이'],              tags: ['한우','갈비','삼겹살','목살'],         keywords: '잠실역 한우, 잠실역 고기집, 방이동 BBQ, 석촌 고기구이' },
  seafood:  { name: '해산물·조개·아구',  emoji: '🦪', cats: ['해산물'],               tags: ['조개찜','아구찜','물회','쭈꾸미'],     keywords: '잠실역 해산물, 잠실 조개찜, 방이동 아구찜, 석촌 물회' },
  gopchang: { name: '곱창·막창·내장',   emoji: '🫀', cats: [],                        tags: ['곱창','막창','소곱창','내장'],         keywords: '잠실역 곱창, 방이동 곱창, 방이 막창, 잠실 내장구이' },
  izakaya:  { name: '이자카야·포차',     emoji: '🏮', cats: ['이자카야','야장'],       tags: ['포차감성','하이볼','수제맥주'],        keywords: '잠실역 이자카야, 잠실 포차, 석촌 이자카야, 방이동 술집' },
  japanese: { name: '일식·스시·오마카세', emoji: '🍣', cats: ['일식'],                tags: ['스시','사시미','오마카세','규동'],     keywords: '잠실역 일식, 잠실 스시, 잠실역 오마카세, 롯데타워 일식' },
  gukbap:   { name: '국밥·칼국수·해장', emoji: '🥣', cats: ['국밥','칼국수'],         tags: ['해장','감자탕','순대국밥'],           keywords: '잠실역 국밥, 잠실 해장국, 방이동 국밥, 석촌 칼국수' },
  chinese:  { name: '중식·마라·양꼬치', emoji: '🍜', cats: ['중식','훠궈'],           tags: ['마라탕','양꼬치','짬뽕'],            keywords: '잠실역 중식, 잠실 마라탕, 방이동 양꼬치, 석촌 짬뽕' },
  western:  { name: '양식·파스타·피자', emoji: '🍝', cats: ['양식','이탈리안'],       tags: ['파스타','피자','스테이크'],           keywords: '잠실역 파스타, 잠실 이탈리안, 방이동 양식, 석촌호수 레스토랑' },
  korean:   { name: '한식·족발·보쌈',   emoji: '🍱', cats: ['한식'],                  tags: ['갈비찜','족발','보쌈'],               keywords: '잠실 한식, 방이동 족발, 잠실 보쌈, 석촌 한정식' },
  group:    { name: '회식·단체모임',    emoji: '🎉', cats: [],                        tags: ['단체가능','회식','주차가능'],          keywords: '잠실 회식장소, 방이동 단체식사, 잠실역 회식, 롯데타워 회식' },
  date:     { name: '데이트·분위기',    emoji: '💑', cats: [],                        tags: ['데이트','뷰맛집','프라이빗','인스타감성'], keywords: '잠실 데이트, 석촌호수 데이트, 롯데타워 뷰, 잠실 분위기' },
  budget:   { name: '가성비·혼밥·점심', emoji: '💰', cats: [],                        tags: ['가성비','점심','혼밥가능'],           keywords: '잠실 점심, 방이동 혼밥, 잠실역 점심특선, 잠실 가성비' },
  premium:  { name: '프리미엄·오마카세', emoji: '✨', cats: [],                       tags: ['오마카세','예약제','미슐랭','프라이빗'], keywords: '잠실 오마카세, 롯데타워 파인다이닝, 잠실 고급식당, 잠실 접대' },
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(CATEGORY_MAP).map(slug => ({ params: { slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const catInfo = CATEGORY_MAP[slug]
  if (!catInfo) return { notFound: true }

  const filtered = restaurants.filter(r => {
    const catMatch = catInfo.cats.length > 0 && catInfo.cats.some(c => r.cat?.includes(c))
    const tagMatch = catInfo.tags?.some(t =>
      r.tags?.some(rt => rt.toLowerCase().includes(t.toLowerCase())) ||
      r.cat?.some(c => c.toLowerCase().includes(t.toLowerCase()))
    )
    return catMatch || tagMatch
  })

  return {
    props: {
      slug,
      catInfo,
      restaurants: filtered.map(r => ({
        name: r.name, type: r.type, e: r.e,
        rt: r.rt, cnt: r.cnt, addr: r.addr,
        hours: r.hours, tags: r.tags || [],
        priceRange: r.priceRange || null, cat: r.cat || [],
        rv: r.rv || [], lat: r.lat || null, lng: r.lng || null,
        scene: r.scene || [], moods: r.moods || [],
      }))
    }
  }
}


// ── 랜덤 결과 문구 ──────────────────────────────────────────────
function buildCatReason(r, idx) {
  function cleanRv(v) {
    return (v||'').replace(/\[\d+\.?\d*★\]\s*/g,'').replace(/\(실제 Google 리뷰.*?\)/g,'').trim().slice(0, 40)
  }
  function tagToLabel(tag) {
    const map = {
      '고평점':'맛집','SNS맛집':'SNS 핫플','웨이팅맛집':'웨이팅 맛집',
      '가성비':'가성비 맛집','혼밥가능':'혼밥 맛집','단체가능':'단체 맛집',
      '점심추천':'점심 맛집','심야영업':'심야 맛집','예약필수':'예약제 맛집',
      '주차가능':'주차 가능한 곳','리뷰많음':'리뷰 많은 곳',
    }
    return map[tag] || tag + ' 맛집'
  }
  const rv    = (r.rv||[]).map(cleanRv).filter(Boolean)
  const rv0   = rv[0]||''
  const rv1   = rv[1]||''
  const tags  = (r.tags||[]).slice(0,4)
  const scene = (r.scene||[])
  const moods = (r.moods||[])
  const cnt   = r.cnt||0
  const pool = [
    ()=>rv1?`"${rv0}" 또 다른 방문객은, "${rv1}"`:rv0?`"${rv0}"`:null,
    ()=>cnt>=50?`${cnt.toLocaleString()}명이 다녀갔다.${tags[0]?' '+tagToLabel(tags[0])+'.':''} ${rv0?'"'+rv0+'"':''}`.trim():null,
    ()=>{ const sc=(scene[0]||'').replace(/에$/,''); return sc&&rv0?`${sc}, 딱 맞는 곳. "${rv0}"`:null },
    ()=>tags.length?`${tags.slice(0,3).map(t=>'#'+t).join('  ')}${rv0?'  "'+rv0+'"':''}`:null,
    ()=>tags[0]?`${tagToLabel(tags[0])}으로 알려진 곳.${rv0?' "'+rv0+'"':''}`:null,
    ()=>{ const moodMap={'기분 좋음':'기분 좋을 때','피곤함':'피곤할 때','스트레스 받음':'스트레스받을 때','혼밥':'혼밥할 때','데이트':'데이트할 때','회식':'회식 자리에','축하':'축하하는 날'}; const m=moods[0]||''; const when=moodMap[m]||(m?m+'일 때':''); return when&&rv0?`${when} 당기는 곳. "${rv0}"`:null },
    ()=>rv0?`"${rv0}"`:null,
  ]
  const order = [idx%pool.length, (idx+1)%pool.length, (idx+2)%pool.length, 6, 3, 0]
  for(const i of order){ const r2=pool[i](); if(r2&&r2.trim()) return { reason: r2.trim(), highlight: rv0.slice(0,20)||'' } }
  return { reason: rv0?`"${rv0}"`:r.type||'', highlight: rv0.slice(0,20)||'' }
}


export default function CategoryPage({ slug, catInfo, restaurants }) {
  const sorted = [...restaurants].sort((a, b) => b.rt - a.rt)
  const [dicing,  setDicing]  = useState(false)
  const [picks,   setPicks]   = useState(null)
  const [pending, setPending] = useState(null)

  
  function doRandom() {
    const pool = [...restaurants].sort(() => Math.random() - 0.5).slice(0, 3)
    setPending(pool)
    setDicing(true)
  }

  function onDone() {
    setDicing(false)
    if (pending) { setPicks(pending); setPending(null) }
  }

  const medals = ['🥇','🥈','🥉']
  const borders = ['#ffd700','#c0c0c0','#cd7f32']
  const resultRef = useRef(null)

  useEffect(() => {
    if (picks && resultRef.current) {
      const top = resultRef.current.getBoundingClientRect().top + window.pageYOffset - 16
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [picks])

  return (
    <>
      {dicing && <DiceOverlay onDone={onDone} />}
      <Head>
        <title>잠실역 {catInfo.name} 맛집 추천 {restaurants.length}곳 | 2026 | 오늘뭐먹지</title>
        <meta name="description" content={`잠실역·방이동·석촌호수 주변 ${catInfo.name} 맛집 ${restaurants.length}개 정리. ${catInfo.keywords}.`} />
        <meta name="keywords" content={catInfo.keywords} />
        <link rel="canonical" href={`https://dinner.ambitstock.com/dinner/jamsil/category/${slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": `잠실역 ${catInfo.name} 맛집`,
          "url": `https://dinner.ambitstock.com/dinner/jamsil/category/${slug}`,
          "numberOfItems": restaurants.length,
          "itemListElement": sorted.slice(0, 10).map((r, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Restaurant",
              "name": r.name,
              "address": r.addr,
              ...(r.rt ? { "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": String(r.rt),
                "reviewCount": String(r.cnt || 0)
              }} : {})
            }
          }))
        })}} />
      </Head>

      {/* 헤더 */}
      <div style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'12px 16px' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">홈</Link> <span>›</span>
            <Link href="/dinner/jamsil">잠실역</Link> <span>›</span>
            <span style={{ color:'var(--text)' }}>{catInfo.name}</span>
          </div>
        </div>
      </div>

      {/* 히어로 */}
      <section style={{ padding:'40px 16px 28px', background:'var(--surface)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ fontSize:'2.5rem', marginBottom:10 }}>{catInfo.emoji}</div>
          <h1 style={{ fontSize:'clamp(1.4rem, 4vw, 2rem)', fontWeight:900, marginBottom:8 }}>
            잠실역 {catInfo.name} 맛집 추천
          </h1>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', marginBottom:20 }}>
            잠실역·방이동·석촌호수 주변 {catInfo.name} 맛집 <strong style={{ color:'var(--text)' }}>{restaurants.length}곳</strong> 정리
          </p>
          <button onClick={doRandom}
            style={{ display:'inline-flex', alignItems:'center', gap:8,
              padding:'12px 22px', borderRadius:12, fontSize:'.95rem', fontWeight:700,
              background:'var(--primary)', color:'#fff', border:'none', cursor:'pointer',
              boxShadow:'0 4px 16px rgba(108,99,255,.35)' }}>
            🎲 {catInfo.name} 랜덤 뽑기
          </button>
        </div>
      </section>

      <div className="container" style={{ padding:'24px 16px' }}>

        {/* 랜덤 결과 */}
        {picks && (
          <div ref={resultRef} style={{ marginBottom:24 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
              <span style={{ fontSize:'.8rem', color:'var(--muted)' }}>🎲 {catInfo.name}에서 랜덤 추천</span>
              <button onClick={doRandom}
                style={{ fontSize:'.78rem', padding:'5px 12px', borderRadius:8,
                  background:'var(--surface)', border:'1px solid var(--border)',
                  color:'var(--muted)', cursor:'pointer' }}>
                🔄 다시 뽑기
              </button>
            </div>
            {picks.map((r, i) => (
              <Link key={i} href={`/dinner/jamsil/restaurant/${encodeURIComponent(r.name)}`}
                style={{ textDecoration:'none', display:'block', color:'inherit' }}>
                <div style={{ background:'var(--surface2)', border:'1px solid var(--border)',
                  borderLeft:`3px solid ${borders[i]}`, borderRadius:14,
                  padding:'16px 14px', marginBottom:12, cursor:'pointer' }}>
                  <div style={{ display:'flex', gap:10, marginBottom:8 }}>
                    <span style={{ fontSize:'1.4rem', flexShrink:0 }}>{medals[i]}</span>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:'.95rem', fontWeight:700, marginBottom:5 }}>{r.e} {r.name}</div>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                        <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--muted)' }}>{r.type}</span>
                        <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--text)' }}>⭐{r.rt}</span>
                        {r.priceRange && <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--primary)' }}>💰{fmtPrice(r.priceRange)}원</span>}
                      </div>
                    </div>
                  </div>
                  <div style={{ display:'flex', gap:6, alignItems:'center' }}>
                    <a href={naverMapUrl(r.name, r.lat, r.lng)}
                      target="_blank" rel="noopener noreferrer"
                      onClick={e=>e.stopPropagation()}
                      style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)', textDecoration:'none', position:'relative', zIndex:1 }}>
                      📍 지도
                    </a>
                    <span style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)' }}>
                      🕐 {r.hours}
                    </span>
                {(() => { const {reason, highlight} = buildCatReason(r, i); return reason ? (
                  <div style={{ margin:'8px 0 4px', fontSize:'.78rem', color:'var(--muted)', lineHeight:1.5 }}>
                    {highlight && <span style={{ display:'inline-block', background:'var(--surface)', border:'1px solid var(--border)', borderRadius:6, padding:'1px 7px', fontSize:'.7rem', color:'var(--primary)', marginBottom:4 }}>💬 {highlight}</span>}
                    <div style={{ marginTop:highlight?4:0 }}>{reason}</div>
                  </div>
                ) : null })()}
              <span style={{ marginLeft:'auto', fontSize:'.72rem', color:'var(--muted)', opacity:.6 }}>상세보기 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* TOP 랭킹 */}
        <h2 style={{ fontSize:'1rem', fontWeight:700, marginBottom:16, color:'var(--muted)' }}>
          ⭐ 평점 순 랭킹
        </h2>
        <div className="restaurant-grid">
          {sorted.map((r, i) => (
            <Link href={`/dinner/jamsil/restaurant/${encodeURIComponent(r.name)}`} key={i}>
              <div className="restaurant-card">
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
                  <div className="card-name">{r.e} {r.name}</div>
                  <span style={{ fontSize:'.75rem', color:'var(--muted)', flexShrink:0 }}>#{i+1}</span>
                </div>
                <div className="card-meta">
                  <span className="tag">{r.type}</span>
                  <span className="tag rating">⭐ {r.rt} ({r.cnt?.toLocaleString()})</span>
                  {r.priceRange && <span className="tag price">💰 {fmtPrice(r.priceRange)}원</span>}
                </div>
                <div className="card-addr" style={{ marginBottom:6 }}>📍 {r.addr}</div>
                {r.rv?.[0] && (
                  <div style={{ fontSize:'.75rem', color:'var(--muted)', lineHeight:1.4, marginTop:6 }}>
                    💬 {r.rv[0].replace(/ \(실제 Google 리뷰.*?\)/, '').slice(0, 40)}...
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <article style={{ marginTop:48, padding:'28px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1.1rem', fontWeight:800, marginBottom:16 }}>
            잠실역 {catInfo.name} 맛집 선택 가이드
          </h2>

          {slug === 'meat' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 고기구이·한우 맛집은 방이동 먹자골목과 롯데타워 인근에 집중되어 있습니다. 방이동은 삼겹살·목살·대창 구이 전문 로컬 식당들이 저녁 모임 손님을 주로 받으며, 롯데타워 주변은 한우 코스·숙성육 전문점이 접대 수요를 충족합니다. 단체석과 주차 공간을 동시에 갖춘 구이 전문점을 원한다면 방이동 이면도로를 우선 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              방이동 삼겹살 기준 1인분 1만 5천~2만 원, 롯데타워 인근 한우 코스는 1인 5만~9만 원대입니다. 저녁 퇴근 후 방문 시 방이동 인기 구이집은 웨이팅이 발생할 수 있으므로, 5인 이상이라면 예약 후 방문을 권장합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/group" style={{ color:'var(--primary)' }}>잠실 회식·단체모임</Link> · <Link href="/dinner/jamsil/category/korean" style={{ color:'var(--primary)' }}>잠실 한식·족발·보쌈</Link> · <Link href="/dinner/jamsil/category/premium" style={{ color:'var(--primary)' }}>잠실 프리미엄·오마카세</Link>
            </p>
          </>}

          {slug === 'seafood' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 해산물·조개·아구 맛집은 방이동 인근에 조개구이·아구찜 전문점이 밀집해 있습니다. 수도권 내륙 지역임에도 산지 당일 직송 방식으로 신선도를 유지하는 곳이 늘어나고 있으며, 조개찜 세트·물회·쭈꾸미볶음을 함께 제공하는 복합 메뉴 식당도 운영 중입니다. 석촌호수 주변에는 분위기와 해산물을 동시에 즐길 수 있는 레스토랑도 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              조개찜 2인 기준 3만~5만 원, 아구찜 중 기준 3만~4만 5천 원대입니다. 해산물 특성상 주문 후 준비 시간이 길 수 있으니 급하게 식사해야 하는 점심보다는 저녁 모임에 더 적합합니다. 알레르기 재료(조개류·갑각류)가 있는 동행이 있다면 미리 주방에 알려주세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/korean" style={{ color:'var(--primary)' }}>잠실 한식·족발·보쌈</Link> · <Link href="/dinner/jamsil/category/group" style={{ color:'var(--primary)' }}>잠실 회식·단체모임</Link> · <Link href="/dinner/jamsil/category/date" style={{ color:'var(--primary)' }}>잠실 데이트·분위기</Link>
            </p>
          </>}

          {slug === 'gopchang' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 곱창·막창·내장 맛집은 방이동 먹자골목에 집중되어 있습니다. 방이동은 강남·송파 지역에서 곱창 마니아들이 즐겨 찾는 로컬 곱창 골목이 형성되어 있으며, 소·돼지 곱창 전문점이 모두 운영 중입니다. 연기 제거 설비를 갖춘 최신 시설의 식당도 늘고 있어 여성 방문객도 부담 없이 이용할 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              곱창 1인분 기준 1만 2천~2만 원, 막창은 1만~1만 8천 원대입니다. 금·토 저녁 방이동 곱창집은 대기 손님이 많으므로 웨이팅 앱 또는 전화 예약이 가능한 곳을 먼저 확인하세요. 곱창 후 2차로 이자카야나 야장을 이어가는 동선은 방이동 먹자골목 내에서 해결 가능합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/meat" style={{ color:'var(--primary)' }}>잠실 고기구이·한우</Link> · <Link href="/dinner/jamsil/category/izakaya" style={{ color:'var(--primary)' }}>잠실 이자카야·포차</Link> · <Link href="/dinner/jamsil/category/korean" style={{ color:'var(--primary)' }}>잠실 한식·족발·보쌈</Link>
            </p>
          </>}

          {slug === 'izakaya' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 이자카야·포차는 석촌호수 주변과 방이동 먹자골목 두 축으로 나뉩니다. 석촌호수 인근 이자카야는 호수 뷰를 즐길 수 있는 테라스나 창가 자리를 갖춘 곳이 있어 데이트 겸 음주 자리로 적합합니다. 방이동 이자카야·포차는 회식 후 2차 장소로 자주 활용되며 가격 부담이 상대적으로 낮습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 안주 기준 1만~2만 5천 원, 2인 주류 포함 5만~9만 원대입니다. 롯데월드몰 주변 이자카야는 쇼핑 후 저녁 방문이 많아 주말 예약이 필요한 경우가 있습니다. 심야 영업 여부는 가게마다 다르니 늦은 방문 계획이 있다면 미리 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/japanese" style={{ color:'var(--primary)' }}>잠실 일식·스시·오마카세</Link> · <Link href="/dinner/jamsil/category/date" style={{ color:'var(--primary)' }}>잠실 데이트·분위기</Link> · <Link href="/dinner/jamsil/category/group" style={{ color:'var(--primary)' }}>잠실 회식·단체모임</Link>
            </p>
          </>}

          {slug === 'japanese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 일식·스시·오마카세 맛집은 롯데타워와 석촌호수 주변에 집중되어 있습니다. 롯데타워 고층의 뷰 레스토랑 형태 일식집부터 골목의 소규모 오마카세 스시 바까지 선택 폭이 넓습니다. 송파구 특성상 강남 대비 가격은 낮추면서 퀄리티를 높인 가성비 오마카세 식당도 여럿 운영 중입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 일식 세트 1만 5천~2만 5천 원, 저녁 오마카세는 1인 8만~18만 원 수준입니다. 잠실 오마카세는 강남 대비 예약 난이도가 낮은 편이나, 주말 저녁만큼은 사전 예약이 필요합니다. 기념일이나 접대 자리에는 개인실 유무와 와인 반입 가능 여부를 먼저 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/premium" style={{ color:'var(--primary)' }}>잠실 프리미엄·오마카세</Link> · <Link href="/dinner/jamsil/category/izakaya" style={{ color:'var(--primary)' }}>잠실 이자카야·포차</Link> · <Link href="/dinner/jamsil/category/date" style={{ color:'var(--primary)' }}>잠실 데이트·분위기</Link>
            </p>
          </>}

          {slug === 'gukbap' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 국밥·칼국수·해장 맛집은 방이동 주거 지역과 잠실역 인근 직장인 밀집 구역에 분포합니다. 순대국밥·돼지국밥·뼈해장국·감자탕 등 국물 요리 전문점이 주를 이루며, 점심 혼밥·빠른 식사·아침 해장 세 가지 수요를 모두 충족하는 메뉴 구성을 갖춘 곳이 많습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인분 7천~1만 3천 원으로 비교적 균일합니다. 주말 점심에는 가족 단위 손님이 많아 웨이팅이 생기는 곳도 있습니다. 롯데타워 방향보다 방이동·잠실 2동 방향 이면도로에 가성비 국밥 식당이 집중되어 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/budget" style={{ color:'var(--primary)' }}>잠실 가성비·혼밥·점심</Link> · <Link href="/dinner/jamsil/category/korean" style={{ color:'var(--primary)' }}>잠실 한식·족발·보쌈</Link> · <Link href="/dinner/jamsil/category/meat" style={{ color:'var(--primary)' }}>잠실 고기구이·한우</Link>
            </p>
          </>}

          {slug === 'chinese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 중식·마라·양꼬치 맛집은 잠실역 상권과 방이동 일대에 걸쳐 분포합니다. 마라탕 전문점은 잠실역 주변 상가 1~2층에 집중되어 있으며, 양꼬치 식당은 방이동 먹자골목 안쪽에서 찾을 수 있습니다. 고전적인 중화요리를 원한다면 롯데월드몰 인근 대형 중식당도 선택지가 됩니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 세트 9천~1만 6천 원, 마라탕 1인 1만~1만 9천 원, 양꼬치 2인 기준 3만~5만 원대입니다. 마라탕은 재료와 마라 레벨을 직접 조합하는 방식과 세트 구성 방식이 다르므로 주문 전 확인하세요. 단체 훠궈 모임은 예약이 필요한 경우가 많습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/group" style={{ color:'var(--primary)' }}>잠실 회식·단체모임</Link> · <Link href="/dinner/jamsil/category/budget" style={{ color:'var(--primary)' }}>잠실 가성비·혼밥·점심</Link> · <Link href="/dinner/jamsil/category/korean" style={{ color:'var(--primary)' }}>잠실 한식·족발·보쌈</Link>
            </p>
          </>}

          {slug === 'western' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 양식·파스타·피자 맛집은 석촌호수 주변과 롯데월드몰 인근에 집중되어 있습니다. 석촌호수 뷰를 즐길 수 있는 테라스 레스토랑과 롯데타워 내 레스토랑은 데이트·기념일 방문지로 높은 인지도를 가집니다. 잠실새내역 방향 골목에는 가성비 파스타·피자 전문점이 저녁 손님을 기다립니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 파스타·피자 1만 3천~2만 원, 저녁 코스 레스토랑은 1인 4만~10만 원 수준입니다. 석촌호수 뷰 자리를 원한다면 예약 시 창가 또는 테라스 자리를 미리 요청하세요. 롯데타워 입주 레스토랑은 주차 연계 할인이 가능한 경우가 있어 차량 방문 시 유리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/date" style={{ color:'var(--primary)' }}>잠실 데이트·분위기</Link> · <Link href="/dinner/jamsil/category/premium" style={{ color:'var(--primary)' }}>잠실 프리미엄·오마카세</Link> · <Link href="/dinner/jamsil/category/japanese" style={{ color:'var(--primary)' }}>잠실 일식·스시</Link>
            </p>
          </>}

          {slug === 'korean' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 한식·족발·보쌈 맛집은 방이동 먹자골목과 잠실 2동 주거 지역에 고루 분포합니다. 족발은 방이동이 유명한 로컬 골목을 형성하고 있으며, 한정식·갈비찜·된장찌개 등 전통 한식 정식 식당도 가족 모임과 점심 수요를 받습니다. 보쌈 전문점은 저녁 막걸리 모임 장소로 선호됩니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 정식 8천~1만 5천 원, 족발 소·중 2만~3만 5천 원, 보쌈 세트 2만~4만 원대입니다. 방이동 족발 거리는 식당마다 양념 비율과 스타일이 달라 재방문 취향이 형성되는 곳이 많습니다. 6인 이상 단체 방문에는 예약 후 단체석을 확보하는 것이 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/budget" style={{ color:'var(--primary)' }}>잠실 가성비·혼밥·점심</Link> · <Link href="/dinner/jamsil/category/gukbap" style={{ color:'var(--primary)' }}>잠실 국밥·칼국수·해장</Link> · <Link href="/dinner/jamsil/category/group" style={{ color:'var(--primary)' }}>잠실 회식·단체모임</Link>
            </p>
          </>}

          {slug === 'group' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 회식·단체모임 맛집은 방이동 먹자골목·롯데타워·석촌호수 세 구역으로 나뉩니다. 방이동은 삼겹살·곱창·족발 등 구이·보쌈 중심의 로컬 단체 식당이 밀집하고, 롯데타워 인근은 프라이빗 룸과 발레파킹이 가능한 고급 식당 위주입니다. 10~20인 단체 모임은 방이동 대형 홀 식당이 예산 대비 효율적입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 기준 2만~4만 원이 잠실 회식의 일반적 예산입니다. 룸 예약은 3~5일 전 전화 확인을 권장하며, 롯데월드몰·롯데타워 주차 연계를 활용하면 차량 참석자가 많은 모임도 수월하게 진행됩니다. 저녁 1차 후 이자카야·포차 2차로 이어지는 동선은 방이동 내에서 해결 가능합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/meat" style={{ color:'var(--primary)' }}>잠실 고기구이·한우</Link> · <Link href="/dinner/jamsil/category/izakaya" style={{ color:'var(--primary)' }}>잠실 이자카야·포차</Link> · <Link href="/dinner/jamsil/category/premium" style={{ color:'var(--primary)' }}>잠실 프리미엄·오마카세</Link>
            </p>
          </>}

          {slug === 'date' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 데이트 맛집은 석촌호수 뷰 레스토랑, 롯데타워 고층 다이닝, 송리단길 카페·브런치 거리로 구성됩니다. 석촌호수 봄 벚꽃 시즌에는 호수 뷰 테라스 자리가 수 주 전에 예약이 채워지는 경우가 있으니 성수기에는 미리 준비하세요. 롯데타워 하이엔드 레스토랑은 도심 야경과 함께 식사가 가능한 특별한 경험을 제공합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              2인 기준 5만~12만 원 예산으로 코스·세트 메뉴를 선택할 수 있습니다. 캐주얼한 데이트에는 송리단길 이탈리안·파스타 전문점, 특별한 날에는 롯데타워 레스토랑이 적합합니다. 롯데월드 어트랙션과 저녁 식사를 연계하는 풀데이 코스로도 활용하기 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/western" style={{ color:'var(--primary)' }}>잠실 양식·파스타·피자</Link> · <Link href="/dinner/jamsil/category/japanese" style={{ color:'var(--primary)' }}>잠실 일식·스시·오마카세</Link> · <Link href="/dinner/jamsil/category/premium" style={{ color:'var(--primary)' }}>잠실 프리미엄·오마카세</Link>
            </p>
          </>}

          {slug === 'budget' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 가성비·혼밥·점심 맛집은 롯데타워 주변의 고가 식당 이미지와 달리, 방이동 이면도로와 잠실 2동 주거 지역에 합리적인 가격의 식당이 다수 분포합니다. 국밥·순두부찌개·제육볶음·칼국수 등 단품 위주 식당이 점심 혼밥 수요를 담당하며, 1인석을 갖춘 곳도 점차 늘고 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 단품 7천~1만 3천 원, 런치 세트 1만~1만 6천 원이 이 지역 가성비 기준입니다. 롯데월드몰 지하 푸드코트는 빠른 점심을 1만 원 내외로 해결하기 좋습니다. 1~2인 방문 시 카운터석이나 소규모 테이블이 있는 곳을 선택하면 혼자 앉기에 부담이 없습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/gukbap" style={{ color:'var(--primary)' }}>잠실 국밥·칼국수·해장</Link> · <Link href="/dinner/jamsil/category/korean" style={{ color:'var(--primary)' }}>잠실 한식·족발·보쌈</Link> · <Link href="/dinner/jamsil/category/chinese" style={{ color:'var(--primary)' }}>잠실 중식·마라·양꼬치</Link>
            </p>
          </>}

          {slug === 'premium' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 프리미엄·오마카세 식당은 롯데타워와 석촌호수 주변에 집중되어 있습니다. 롯데타워 내 레스토랑은 도심 전망과 함께 고급 식사를 즐길 수 있으며, 인근 골목의 소규모 오마카세 스시 바는 강남 대비 합리적인 가격에 코스 식사를 경험할 수 있어 미식가들 사이에서 주목받고 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 코스 기준 8만~20만 원대입니다. 예약은 최소 5~7일 전에 완료하는 것이 안전하며, 특별 요청 사항(알레르기·케이크·와인 반입)은 예약 시 함께 안내해야 합니다. 롯데타워 레스토랑은 주차 연계가 편리해 차량 방문 손님을 모시기에 유리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/jamsil/category/japanese" style={{ color:'var(--primary)' }}>잠실 일식·스시·오마카세</Link> · <Link href="/dinner/jamsil/category/western" style={{ color:'var(--primary)' }}>잠실 양식·파스타·피자</Link> · <Link href="/dinner/jamsil/category/date" style={{ color:'var(--primary)' }}>잠실 데이트·분위기</Link>
            </p>
          </>}

          {!['meat','seafood','gopchang','izakaya','japanese','gukbap','chinese','western','korean','group','date','budget','premium'].includes(slug) && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              잠실역 주변 {catInfo.name} 맛집은 방이동 먹자골목, 석촌호수 주변, 롯데타워 인근까지 다양하게 분포되어 있습니다. 각 식당의 영업시간·가격대·특징을 확인하고 방문하세요.
            </p>
          </>}

          <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8 }}>
            날씨·기분·예산을 입력하면 <Link href="/dinner/jamsil" style={{ color:'var(--primary)' }}>잠실역 AI 맛집 추천</Link>이 {catInfo.name} 포함 전체 카테고리에서 맞춤 식당 3곳을 바로 골라드립니다.
          </p>
        </article>

        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Link href="/dinner/jamsil" className="btn btn-ghost">← 잠실역 전체 맛집</Link>
          <Link href="/dinner/jamsil" className="btn btn-primary">✨ AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
