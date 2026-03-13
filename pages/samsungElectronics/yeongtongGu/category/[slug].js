import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import restaurants from '../../../../data/yeongtongGu'


// ── 주사위 오버레이 ──────────────────────────────────────────────
// 네이버 지도 URL - 이름에서 지역 suffix 제거 + 좌표 중심 검색
// 가격 구분자 포맷: "25000~40000" → "25,000~40,000"
function fmtPrice(p) {
  if (!p) return ''
  return p.split('~').map(n => parseInt(n).toLocaleString('ko-KR')).join('~')
}

function naverMapUrl(name, lat, lng) {
  const cleaned = name
    .replace(/ (영통점|수원점|매탄점|영통구청점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const hasRegion = /(영통|수원|매탄|삼성전자)/.test(cleaned)
  const query = hasRegion ? cleaned : cleaned + ' 영통구청'
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
  meat:     { name: '고기구이·삼겹살',  emoji: '🥩', cats: ['고기구이'],              tags: ['한우','갈비','삼겹살','목살'],         keywords: '영통구청 고기, 영통구청 삼겹살, 영통 한우, 수원 고기구이' },
  gukbap:   { name: '국밥·해장·칼국수', emoji: '🥣', cats: ['국밥','국물','칼국수'],  tags: ['해장','설렁탕','순대국밥'],           keywords: '영통구청 국밥, 영통구청 해장국, 영통 칼국수, 수원 해장' },
  izakaya:  { name: '이자카야·포차',    emoji: '🏮', cats: ['이자카야','야장'],       tags: ['포차','하이볼','수제맥주'],           keywords: '영통구청 이자카야, 영통구청 포차, 영통 술집, 수원 이자카야' },
  japanese: { name: '일식·스시·돈카츠', emoji: '🍣', cats: ['일식'],                  tags: ['스시','사시미','돈카츠','규동'],      keywords: '영통구청 일식, 영통구청 스시, 영통 돈카츠, 수원 일식' },
  chinese:  { name: '중식·마라탕',      emoji: '🍜', cats: ['중식','훠궈'],           tags: ['마라탕','양꼬치','짬뽕'],            keywords: '영통구청 중식, 영통구청 마라탕, 영통 짬뽕, 수원 양꼬치' },
  western:  { name: '양식·파스타',      emoji: '🍝', cats: ['양식','이탈리안','스테이크'], tags: ['파스타','피자','스테이크'],       keywords: '영통구청 양식, 영통구청 파스타, 영통 이탈리안, 수원 스테이크' },
  chicken:  { name: '치킨·분식',        emoji: '🐔', cats: ['치킨'],                  tags: ['통닭','치킨','떡볶이','분식'],       keywords: '영통구청 치킨, 영통구청 분식, 영통 떡볶이, 수원 치킨' },
  group:    { name: '회식·단체',        emoji: '🎉', cats: [],                        tags: ['단체가능','회식','룸있음'],           keywords: '영통구청 회식, 영통구청 단체, 영통 회식장소, 수원 단체식사' },
  date:     { name: '데이트·분위기',    emoji: '💑', cats: [],                        tags: ['데이트','뷰맛집','프라이빗'],        keywords: '영통구청 데이트, 영통구청 분위기, 영통 데이트 코스' },
  budget:   { name: '가성비·혼밥·점심', emoji: '💰', cats: [],                        tags: ['가성비','점심','혼밥가능','점심특선'], keywords: '영통구청 점심, 영통구청 혼밥, 영통 가성비, 수원 점심' },
  premium:  { name: '접대·파인다이닝',  emoji: '✨', cats: [],                        tags: ['오마카세','예약제','코스요리','프라이빗'], keywords: '영통구청 고급, 영통구청 접대, 영통 오마카세, 수원 파인다이닝' },
  korean:   { name: '한식·정식·보쌈',   emoji: '🍱', cats: ['한식'],                  tags: ['족발','보쌈','갈비찜','한정식'],     keywords: '영통구청 한식, 영통구청 한정식, 영통 보쌈, 수원 족발' },
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
        rv: r.rv || []
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
        <title>영통구청 {catInfo.name} 맛집 추천 {restaurants.length}곳 | 2026 | 오늘뭐먹지</title>
        <meta name="description" content={`영통구청·매탄동 인근 주변 ${catInfo.name} 맛집 ${restaurants.length}개 정리. ${catInfo.keywords}.`} />
        <meta name="keywords" content={catInfo.keywords} />
        <link rel="canonical" href={`https://dinner.ambitstock.com/samsungElectronics/yeongtongGu/category/${slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": `영통구청 ${catInfo.name} 맛집`,
          "url": `https://dinner.ambitstock.com/samsungElectronics/yeongtongGu/category/${slug}`,
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
            <Link href="/samsungElectronics/yeongtongGu">영통구청</Link> <span>›</span>
            <span style={{ color:'var(--text)' }}>{catInfo.name}</span>
          </div>
        </div>
      </div>

      {/* 히어로 */}
      <section style={{ padding:'40px 16px 28px', background:'var(--surface)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ fontSize:'2.5rem', marginBottom:10 }}>{catInfo.emoji}</div>
          <h1 style={{ fontSize:'clamp(1.4rem, 4vw, 2rem)', fontWeight:900, marginBottom:8 }}>
            영통구청 {catInfo.name} 맛집 추천
          </h1>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', marginBottom:20 }}>
            영통구청 {catInfo.name} 맛집 <strong style={{ color:'var(--text)' }}>{restaurants.length}곳</strong> 정리
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
              <Link key={i} href={`/samsungElectronics/yeongtongGu/restaurant/${encodeURIComponent(r.name)}`}
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
            <Link href={`/samsungElectronics/yeongtongGu/restaurant/${encodeURIComponent(r.name)}`} key={i}>
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
            영통구청 {catInfo.name} 맛집 선택 가이드
          </h2>

          {slug === 'meat' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 고기구이·삼겹살 맛집은 매탄동 상가 지역과 영통구청 인근 이면도로에 분포합니다. 삼성전기·삼성전자 인근 직장인들의 퇴근 후 회식 수요를 받는 삼겹살·목살 전문점이 주를 이루며, 구청 인근 로컬 상권 특성상 대형 체인보다 독립 운영 식당이 많아 분위기가 편안합니다. 조용한 환경에서 여유 있게 고기를 즐기기 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼겹살 1인분 기준 1만 2천~1만 7천 원, 한우 코스는 1인 3만~5만 5천 원대입니다. 매탄동 구이 식당은 상권 크기가 아담한 편이라 주말 저녁에는 특정 식당에 수요가 집중될 수 있습니다. 4인 이상이라면 예약을 통해 단체석을 미리 확보하는 것이 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/group" style={{ color:'var(--primary)' }}>영통구청 회식·단체</Link> · <Link href="/samsungElectronics/yeongtongGu/category/korean" style={{ color:'var(--primary)' }}>영통구청 한식·정식</Link> · <Link href="/samsungElectronics/yeongtongGu/category/izakaya" style={{ color:'var(--primary)' }}>영통구청 이자카야·포차</Link>
            </p>
          </>}

          {slug === 'gukbap' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 국밥·해장·칼국수 맛집은 매탄동 주거 지역과 구청 인근 직장인 상권이 겹치는 위치에 자리합니다. 순대국밥·돼지국밥·설렁탕 전문점이 매탄동 골목에 분포하며, 아침 출근 전 빠른 식사부터 야근 후 해장까지 폭넓게 활용됩니다. 주거 지역 특성상 가정식 느낌의 국밥·정식 복합 식당도 운영 중입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인분 7천~1만 2천 원이 일반적입니다. 매탄동 국밥 식당은 단골 중심으로 운영되는 곳이 많아 메뉴 구성이 일정하고 서비스가 친근한 편입니다. 1인 혼밥 방문 시에는 카운터석 여부를 미리 확인하면 편리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/budget" style={{ color:'var(--primary)' }}>영통구청 가성비·혼밥</Link> · <Link href="/samsungElectronics/yeongtongGu/category/korean" style={{ color:'var(--primary)' }}>영통구청 한식·정식</Link> · <Link href="/samsungElectronics/yeongtongGu/category/meat" style={{ color:'var(--primary)' }}>영통구청 고기구이</Link>
            </p>
          </>}

          {slug === 'izakaya' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 이자카야·포차는 매탄동 상가 지역에 소규모로 운영 중인 이자카야와 포차들로 구성됩니다. 삼성전기·삼성전자 인근 직원들의 퇴근 후 1차·2차 장소로 활용되며, 조용한 분위기에서 가볍게 한잔할 수 있는 환경이 특징입니다. 영통역 이자카야 방향으로 이동하면 선택 폭이 더 넓어집니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 안주 기준 1만~1만 8천 원, 2인 주류 포함 3만 5천~6만 원대입니다. 영통구청 이자카야는 소규모 운영이 많아 단체 방문 시 사전 예약이 필수입니다. 더 다양한 선택이 필요하다면 영통역·망포역 방향 이자카야를 함께 고려하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/japanese" style={{ color:'var(--primary)' }}>영통구청 일식·스시</Link> · <Link href="/samsungElectronics/yeongtongGu/category/group" style={{ color:'var(--primary)' }}>영통구청 회식·단체</Link> · <Link href="/samsungElectronics/yeongtongGu/category/meat" style={{ color:'var(--primary)' }}>영통구청 고기구이</Link>
            </p>
          </>}

          {slug === 'japanese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 일식·스시·돈카츠 맛집은 매탄동 상가와 영통구청 인근에 소수 운영 중입니다. 돈카츠·규동 등 캐주얼 일식 단품 식당이 점심 빠른 식사 수요를 담당하며, 저녁에는 스시 코스를 제공하는 식당도 일부 운영 중입니다. 선택지가 제한적일 경우 영통역·망포역 방향 일식 식당을 함께 검토하면 다양한 옵션이 가능합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 단품 1만 2천~1만 8천 원, 저녁 스시 코스는 1인 6만~12만 원 수준입니다. 접대 또는 기념일 방문 시에는 예약 시 개인석·룸 가능 여부를 반드시 확인하세요. 영통구청 지역은 주차가 편리한 편이어서 차량 방문에 유리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/premium" style={{ color:'var(--primary)' }}>영통구청 접대·파인다이닝</Link> · <Link href="/samsungElectronics/yeongtongGu/category/izakaya" style={{ color:'var(--primary)' }}>영통구청 이자카야·포차</Link> · <Link href="/samsungElectronics/yeongtongGu/category/date" style={{ color:'var(--primary)' }}>영통구청 데이트·분위기</Link>
            </p>
          </>}

          {slug === 'chinese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 중식·마라탕 맛집은 매탄동 상가 지역에서 찾을 수 있습니다. 점심 짬뽕·짜장 세트를 저렴하게 제공하는 중화요리 식당이 직장인 점심 수요를 받으며, 마라탕·마라샹궈 전문점도 매탄동 상가에 운영 중입니다. 더 다양한 중식 선택이 필요하다면 영통역 방향 이동을 고려하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 세트 8천~1만 5천 원, 마라탕 1인 1만~1만 8천 원대입니다. 매탄동 중식 식당은 소규모 운영이 많아 메뉴 변동이 있을 수 있으므로, 특정 메뉴를 원한다면 방문 전 전화 확인이 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/budget" style={{ color:'var(--primary)' }}>영통구청 가성비·혼밥</Link> · <Link href="/samsungElectronics/yeongtongGu/category/group" style={{ color:'var(--primary)' }}>영통구청 회식·단체</Link> · <Link href="/samsungElectronics/yeongtongGu/category/korean" style={{ color:'var(--primary)' }}>영통구청 한식·정식</Link>
            </p>
          </>}

          {slug === 'western' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 양식·파스타 맛집은 매탄동과 영통구청 인근에 소수 운영 중인 카테고리입니다. 파스타·피자 캐주얼 레스토랑이 저녁 식사와 소규모 데이트 자리에 활용됩니다. 스테이크를 원한다면 영통역 방향 스테이크 전문점이 더 다양한 선택지를 제공합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 파스타·피자 1만 2천~2만 원, 저녁 코스는 1인 4만~7만 원 수준입니다. 영통구청 지역 양식 레스토랑은 조용한 주거 상권에 위치해 소규모 기념일·데이트 자리로 아늑한 분위기를 제공합니다. 예약 가능 여부는 방문 전 확인이 필요합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/date" style={{ color:'var(--primary)' }}>영통구청 데이트·분위기</Link> · <Link href="/samsungElectronics/yeongtongGu/category/premium" style={{ color:'var(--primary)' }}>영통구청 접대·파인다이닝</Link> · <Link href="/samsungElectronics/yeongtongGu/category/japanese" style={{ color:'var(--primary)' }}>영통구청 일식·스시</Link>
            </p>
          </>}

          {slug === 'chicken' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 치킨·분식 맛집은 매탄동 주거 지역 인근과 영통구청 상가 지역에 분포합니다. 삼성전기·삼성전자 직원들의 빠른 점심과 퇴근 후 간편한 저녁을 해결하기 좋은 카테고리입니다. 치킨 전문점 외에 분식 전문점도 운영 중이며, 포장·배달 위주 운영 여부는 가게별로 다르므로 홀 착석 전 확인이 필요합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              치킨 1인분 기준 1만 2천~1만 8천 원, 분식 세트 6천~1만 원대입니다. 매탄동 치킨집은 소규모 운영이 많아 저녁 늦은 시간 영업 여부를 사전에 확인하세요. 단체 치맥 자리는 영통역 방향의 홀 전문 치킨집이 더 적합합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/budget" style={{ color:'var(--primary)' }}>영통구청 가성비·혼밥</Link> · <Link href="/samsungElectronics/yeongtongGu/category/gukbap" style={{ color:'var(--primary)' }}>영통구청 국밥·해장</Link> · <Link href="/samsungElectronics/yeongtongGu/category/izakaya" style={{ color:'var(--primary)' }}>영통구청 이자카야·포차</Link>
            </p>
          </>}

          {slug === 'group' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 회식·단체 맛집은 삼성전기·삼성전자 인근 직장인들의 팀 회식 수요를 중심으로 형성됩니다. 매탄동 상가 지역에 삼겹살·한식 정식·이자카야 중심의 단체 식당이 운영 중입니다. 상권 규모가 작은 편이라 10인 이상 대규모 단체 모임은 영통역 방향 대형 홀 식당을 함께 검토하는 것이 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 기준 2만~3만 5천 원이 영통구청 회식의 일반적 예산입니다. 6인 이상 단체 모임이라면 2~3일 전 전화 예약으로 단체석을 확보하는 것을 권장합니다. 주차 가능한 식당이 많아 차량 참석자가 많은 모임에도 적합합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/meat" style={{ color:'var(--primary)' }}>영통구청 고기구이</Link> · <Link href="/samsungElectronics/yeongtongGu/category/izakaya" style={{ color:'var(--primary)' }}>영통구청 이자카야·포차</Link> · <Link href="/samsungElectronics/yeongtongGu/category/korean" style={{ color:'var(--primary)' }}>영통구청 한식·정식</Link>
            </p>
          </>}

          {slug === 'date' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 데이트·분위기 맛집은 매탄동 상권의 조용하고 아늑한 분위기를 살린 소규모 레스토랑들입니다. 대형 상업지구 대비 한적한 환경에서 여유 있게 식사할 수 있으며, 이탈리안·일식·분위기 있는 한식 레스토랑이 자리합니다. 영통구청 인근은 수원 화성, 광교 호수공원과 연계하는 데이트 동선에서 식사 장소로 적합합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              2인 기준 4만~8만 원 예산으로 여유 있는 저녁 식사가 가능합니다. 주거 상권에 위치한 분위기 있는 식당은 수가 많지 않으므로 주말 저녁에는 예약을 미리 완료하세요. 차량 이용 시 주차 환경이 넉넉한 편이라 드라이브 데이트 코스로 활용하기 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/western" style={{ color:'var(--primary)' }}>영통구청 양식·파스타</Link> · <Link href="/samsungElectronics/yeongtongGu/category/japanese" style={{ color:'var(--primary)' }}>영통구청 일식·스시</Link> · <Link href="/samsungElectronics/yeongtongGu/category/premium" style={{ color:'var(--primary)' }}>영통구청 접대·파인다이닝</Link>
            </p>
          </>}

          {slug === 'budget' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 가성비·혼밥·점심 맛집은 삼성전기·삼성전자 인근 직장인의 빠른 점심 수요를 반영합니다. 국밥·정식·제육볶음·순두부찌개 등 단품 위주 식당이 매탄동 상가와 구청 인근에 분포하며, 주거 지역 특성상 가격이 합리적인 편입니다. 1인석·카운터석을 갖춘 식당도 일부 운영 중입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 단품 7천~1만 2천 원, 런치 세트 1만~1만 5천 원이 이 지역 가성비 기준입니다. 영통구청 상권은 비교적 한산해 점심 피크 시간에도 여유 있게 앉을 수 있는 경우가 많습니다. 반면 식당 수가 적어 선호 메뉴가 좁다면 영통역 방향 이동을 고려하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/gukbap" style={{ color:'var(--primary)' }}>영통구청 국밥·해장</Link> · <Link href="/samsungElectronics/yeongtongGu/category/korean" style={{ color:'var(--primary)' }}>영통구청 한식·정식</Link> · <Link href="/samsungElectronics/yeongtongGu/category/chicken" style={{ color:'var(--primary)' }}>영통구청 치킨·분식</Link>
            </p>
          </>}

          {slug === 'premium' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 접대·파인다이닝 식당은 삼성전기·삼성전자 협력사 접대와 임원급 회식에 활용됩니다. 매탄동 인근에서 고급 식당으로 꼽히는 스시 바·한정식 전문점이 소수 운영 중이며, 선택지가 제한적일 경우 영통역·망포역 방향 파인다이닝 식당을 함께 검토하면 좋습니다. 주차가 편리하고 조용한 환경이어서 중요한 미팅 자리에 적합합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 코스 기준 7만~15만 원대입니다. 예약은 최소 3~5일 전에 완료해야 하며, 룸 또는 개인석 가능 여부와 주차 현황을 예약 시 함께 확인하세요. 접대 자리에 적합한 분위기와 메뉴 구성을 갖춘 곳인지 방문 전 리뷰 확인을 권장합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/japanese" style={{ color:'var(--primary)' }}>영통구청 일식·스시</Link> · <Link href="/samsungElectronics/yeongtongGu/category/western" style={{ color:'var(--primary)' }}>영통구청 양식·파스타</Link> · <Link href="/samsungElectronics/yeongtongGu/category/group" style={{ color:'var(--primary)' }}>영통구청 회식·단체</Link>
            </p>
          </>}

          {slug === 'korean' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 한식·정식·보쌈 맛집은 매탄동 주거 지역 인근에 가정식 스타일의 한식 정식 식당들이 자리합니다. 삼성전기·삼성전자 직원들의 점심 수요를 받는 백반·정식 식당이 구청 인근 상가에 운영 중이며, 저녁에는 족발·보쌈·된장찌개 한식 전문점이 소규모 가족 모임과 직장인 저녁 수요를 받습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 정식 7천~1만 3천 원, 저녁 족발·보쌈 2인 기준 2만 5천~4만 원대입니다. 매탄동 한식 식당은 주거 지역 특성상 단골손님 중심으로 운영되어 편안하고 익숙한 분위기에서 식사할 수 있습니다. 6인 이상 단체 방문은 사전에 단체석 확인이 필요합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtongGu/category/budget" style={{ color:'var(--primary)' }}>영통구청 가성비·혼밥</Link> · <Link href="/samsungElectronics/yeongtongGu/category/gukbap" style={{ color:'var(--primary)' }}>영통구청 국밥·해장</Link> · <Link href="/samsungElectronics/yeongtongGu/category/group" style={{ color:'var(--primary)' }}>영통구청 회식·단체</Link>
            </p>
          </>}

          {!['meat','gukbap','izakaya','japanese','chinese','western','chicken','group','date','budget','premium','korean'].includes(slug) && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통구청 주변 {catInfo.name} 맛집은 매탄동·영통구청 일대에 다양하게 분포되어 있습니다. 각 식당의 영업시간·가격대·특징을 확인하고 방문하세요.
            </p>
          </>}

          <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8 }}>
            날씨·기분·예산을 입력하면 <Link href="/samsungElectronics/yeongtongGu" style={{ color:'var(--primary)' }}>영통구청 AI 맛집 추천</Link>이 {catInfo.name} 포함 전체 카테고리에서 맞춤 식당 3곳을 바로 골라드립니다.
          </p>
        </article>

        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Link href="/samsungElectronics/yeongtongGu" className="btn btn-ghost">← 영통구청 전체 맛집</Link>
          <Link href="/samsungElectronics/yeongtongGu" className="btn btn-primary">✨ AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
