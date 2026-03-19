import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import restaurants from '../../../../data/samseong'

const CATEGORY_MAP = {
  meat:     { name: '고기·한우',        emoji: '🥩', cats: ['고기구이'],              tags: ['한우','갈비','삼겹살','목살','항정살'],  keywords: '삼성역 한우, 삼성역 고기집, 삼성동 BBQ, 코엑스 고기구이' },
  gukbap:   { name: '국밥·해장',        emoji: '🥣', cats: ['국밥','국물'],           tags: ['해장','설렁탕','곰탕','순대국밥'],      keywords: '삼성역 국밥, 삼성역 해장국, 코엑스 국밥, 삼성동 해장' },
  izakaya:  { name: '이자카야·술집',    emoji: '🏮', cats: ['이자카야','야장'],       tags: ['포차','하이볼','수제맥주'],            keywords: '삼성역 이자카야, 삼성역 술집, 삼성동 포차, 코엑스 이자카야' },
  japanese: { name: '일식·스시',        emoji: '🍣', cats: ['일식'],                  tags: ['스시','사시미','오마카세','돈카츠'],    keywords: '삼성역 일식, 삼성역 스시, 삼성동 초밥, 코엑스 오마카세' },
  chinese:  { name: '중식·마라탕',      emoji: '🍜', cats: ['중식','훠궈'],           tags: ['마라탕','양꼬치','짬뽕'],             keywords: '삼성역 중식당, 삼성역 마라탕, 코엑스 중식, 삼성동 마라탕' },
  western:  { name: '양식·스테이크',    emoji: '🍝', cats: ['양식','이탈리안','스테이크'], tags: ['파스타','피자','스테이크','와규'], keywords: '삼성역 이탈리안, 삼성역 파스타, 코엑스 스테이크, 삼성동 양식' },
  chicken:  { name: '치킨·야장',        emoji: '🐔', cats: ['치킨','야장'],           tags: ['통닭','치킨','치맥'],               keywords: '삼성역 치킨, 삼성역 야장, 삼성동 포차, 코엑스 치킨' },
  group:    { name: '회식·단체',        emoji: '🎉', cats: [],                        tags: ['단체가능','회식','룸있음','주차가능'], keywords: '삼성역 회식장소, 코엑스 단체식사, 삼성동 회식, 삼성역 프라이빗룸' },
  date:     { name: '데이트·분위기',    emoji: '💑', cats: [],                        tags: ['데이트','뷰맛집','프라이빗','인스타감성'], keywords: '삼성역 데이트, 삼성역 분위기좋은곳, 코엑스 데이트, 삼성동 분위기' },
  budget:   { name: '가성비·혼밥',      emoji: '💰', cats: [],                        tags: ['가성비','점심','혼밥가능','점심특선'], keywords: '삼성역 점심, 삼성역 혼밥, 코엑스 점심특선, 삼성동 가성비' },
  premium:  { name: '접대·파인다이닝',  emoji: '✨', cats: [],                        tags: ['오마카세','예약제','코스요리','프라이빗'], keywords: '삼성역 오마카세, 삼성역 접대, 코엑스 파인다이닝, 삼성동 고급식당' },
  special:  { name: '족발·곱창·보쌈',  emoji: '🍖', cats: [],                        tags: ['족발','곱창','보쌈','막창'],          keywords: '삼성역 족발, 삼성역 곱창, 코엑스 보쌈, 삼성동 곱창' },
  exit4:    { name: '4번출구 근처',     emoji: '🚇', cats: [],                        exit4Only: true, keywords: '삼성역 4번출구 맛집, 삼성역 4번출구 식당, 대치동 맛집' },
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(CATEGORY_MAP).map(slug => ({ params: { slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { slug: category } = params
  const catInfo = CATEGORY_MAP[category]
  if (!catInfo) return { notFound: true }

  const filtered = restaurants.filter(r => {
    if (catInfo.exit4Only) return r.exit4 === true
    if (catInfo.tags) {
      return catInfo.cats.some(c => r.cat?.includes(c)) ||
             catInfo.tags.some(t => r.tags?.includes(t))
    }
    return catInfo.cats.some(c => r.cat?.includes(c))
  })

  return {
    props: {
      category,
      catInfo,
      restaurants: filtered.map(r => ({
        name: r.name, type: r.type, e: r.e,
        rt: r.rt, cnt: r.cnt, addr: r.addr,
        hours: r.hours, tags: r.tags || [],
        priceRange: r.priceRange || null, cat: r.cat || [],
        rv: r.rv || [], lat: r.lat, lng: r.lng,
        scene: r.scene || [], moods: r.moods || [],
      }))
    }
  }
}

// ── 주사위 오버레이 ──────────────────────────────────────────────
// 네이버 지도 URL - 이름에서 지역 suffix 제거 + 좌표 중심 검색
// 가격 구분자 포맷: "25000~40000" → "25,000~40,000"
function fmtPrice(p) {
  if (!p) return ''
  return p.split('~').map(n => parseInt(n).toLocaleString('ko-KR')).join('~')
}

function naverMapUrl(name, lat, lng) {
  const cleaned = name
    .replace(/ (삼성역점|삼성역|삼성동점|삼성점|코엑스점|대치점|선릉점|강남점|삼성본점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const hasRegion = /(삼성|강남|코엑스|선릉|대치|봉은사|테헤란)/.test(cleaned)
  const query = hasRegion ? cleaned : cleaned + ' 삼성역'
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

// ── 랜덤 결과 카드 ───────────────────────────────────────────────

// ── 랜덤 결과 문구 ──────────────────────────────────────────────
function buildCatReason(r, idx) {
  function tagToLabel(tag) {
    const map = {
      '고평점':'맛집','SNS맛집':'SNS 핫플','웨이팅맛집':'웨이팅 맛집',
      '가성비':'가성비 맛집','혼밥가능':'혼밥 맛집','단체가능':'단체 맛집',
      '점심추천':'점심 맛집','심야영업':'심야 맛집','예약필수':'예약제 맛집',
      '주차가능':'주차 가능한 곳','리뷰많음':'리뷰 많은 곳',
    }
    return map[tag] || tag + ' 맛집'
  }

  const tags  = (r.tags||[]).slice(0,4)
  const scene = (r.scene||[])
  const moods = (r.moods||[])
  const cnt   = r.cnt||0
  const rt    = r.rt||''

  const pool = [
    // 해시태그 나열
    ()=>tags.length?tags.slice(0,3).map(t=>`#${t}`).join('  '):null,
    // 방문자 + 태그
    ()=>cnt>=50?`${cnt.toLocaleString()}명이 다녀간 곳.${tags[0]?' '+tagToLabel(tags[0])+'.':''}`.trim():null,
    // scene + 태그
    ()=>{
      const sc=(scene[0]||'').replace(/에$/,'')
      return sc?`${sc}, 딱 맞는 곳.${tags[0]?' #'+tags[0]:''}`:null
    },
    // 태그 맛집 라벨
    ()=>tags[0]?`${tagToLabel(tags[0])}으로 알려진 곳.`:null,
    // 태그 맛집 라벨 + 추가 태그
    ()=>tags[0]?`${tagToLabel(tags[0])}으로 알려진 곳.${tags[1]?' #'+tags[1]:''}`:null,
    // moods 자연어
    ()=>{
      const moodMap={'기분 좋음':'기분 좋을 때','피곤함':'피곤할 때','스트레스 받음':'스트레스받을 때','혼밥':'혼밥할 때','데이트':'데이트할 때','회식':'회식 자리에','축하':'축하하는 날'}
      const m=moods[0]||''
      const when=moodMap[m]||(m?m+'일 때':'')
      return when?`${when} 추천하는 ${r.type||'식당'}.`:null
    },
    // 평점 + 방문자
    ()=>rt?`⭐${rt}점${cnt>0?' · '+cnt.toLocaleString()+'명 방문':''}`:null,
  ]

  const order = [idx%pool.length, (idx+1)%pool.length, (idx+2)%pool.length, 0, 3, 1]
  for(const i of order){
    const r2 = pool[i]()
    if(r2 && r2.trim()) return { reason: r2.trim(), highlight: tags[0]||'' }
  }
  return { reason: tags[0]||r.type||'', highlight: tags[0]||'' }
}

function RandomResult({ picks, catName, onRetry }) {
  const medals = ['🥇','🥈','🥉']
  const borders = ['#ffd700','#c0c0c0','#cd7f32']
  const resultRef = useRef(null)
  useEffect(() => {
    if (resultRef.current) {
      const top = resultRef.current.getBoundingClientRect().top + window.pageYOffset - 16
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])
  return (
    <div ref={resultRef} style={{ marginBottom: 24 }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
        <span style={{ fontSize:'.8rem', color:'var(--muted)' }}>🎲 {catName}에서 랜덤 추천</span>
        <button onClick={onRetry}
          style={{ fontSize:'.78rem', padding:'5px 12px', borderRadius:8,
            background:'var(--surface)', border:'1px solid var(--border)',
            color:'var(--muted)', cursor:'pointer' }}>
          🔄 다시 뽑기
        </button>
      </div>
      {picks.map((r, i) => (
        <Link key={i} href={`/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`}
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
  )
}

export default function CategoryPage({ category, catInfo, restaurants }) {
  const sortedByRating = [...restaurants].sort((a, b) => b.rt - a.rt)
  const [dicing, setDicing]     = useState(false)
  const [picks,  setPicks]      = useState(null)
  const [pending, setPending]   = useState(null)

  function doRandom() {
    const pool = [...restaurants].sort(() => Math.random() - 0.5).slice(0, 3)
    setPending(pool)
    setDicing(true)
  }

  function onDone() {
    setDicing(false)
    if (pending) { setPicks(pending); setPending(null) }
  }

  return (
    <>
      {dicing && <DiceOverlay onDone={onDone} />}
      <Head>
        <title>삼성역 {catInfo.name} 맛집 추천 {restaurants.length}곳 | 2026 | 오늘뭐먹지</title>
        <meta name="description" content={`삼성역·코엑스 주변 ${catInfo.name} 맛집 ${restaurants.length}개 정리. ${catInfo.keywords}.`} />
        <meta name="keywords" content={catInfo.keywords} />
        <link rel="canonical" href={`https://dinner.ambitstock.com/dinner/samseong/category/${category}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": `삼성역 ${catInfo.name} 맛집`,
          "url": `https://dinner.ambitstock.com/dinner/samseong/category/${category}`,
          "numberOfItems": restaurants.length,
          "itemListElement": sortedByRating.slice(0, 10).map((r, i) => ({
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
            <Link href="/dinner/samseong">삼성역</Link> <span>›</span>
            <span style={{ color:'var(--text)' }}>{catInfo.name}</span>
          </div>
        </div>
      </div>

      {/* 히어로 */}
      <section style={{ padding:'40px 16px 28px', background:'var(--surface)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ fontSize:'2.5rem', marginBottom:10 }}>{catInfo.emoji}</div>
          <h1 style={{ fontSize:'clamp(1.4rem, 4vw, 2rem)', fontWeight:900, marginBottom:8 }}>
            삼성역 {catInfo.name} 맛집 추천
          </h1>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', marginBottom:20 }}>
            코엑스·테헤란로·삼성동 주변 {catInfo.name} 맛집 <strong style={{ color:'var(--text)' }}>{restaurants.length}곳</strong> 정리
          </p>
          {/* 랜덤뽑기 버튼 */}
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
          <RandomResult picks={picks} catName={catInfo.name} onRetry={doRandom} />
        )}

        {/* TOP 랭킹 */}
        <h2 style={{ fontSize:'1rem', fontWeight:700, marginBottom:16, color:'var(--muted)' }}>
          ⭐ 평점 순 랭킹
        </h2>
        <div className="restaurant-grid">
          {sortedByRating.map((r, i) => (
            <Link href={`/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`} key={i}>
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
                <div style={{ marginTop:8 }}>
                    </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO 콘텐츠 */}
        <article style={{ marginTop:48, padding:'28px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1.1rem', fontWeight:800, marginBottom:16 }}>
            삼성역 {catInfo.name} 맛집 선택 가이드
          </h2>

          {category === 'meat' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 고기 맛집은 코엑스 파르나스 인근과 테헤란로 이면 골목에 집중되어 있습니다. 한우 전문점부터 흑돼지·숙성 삼겹살 전문점까지 다양하며, 강남 상권 특성상 좌석 수 대비 서비스 수준이 높은 편입니다. 단체 룸을 갖춘 프라이빗 고기집도 여럿 있어 팀장·임원급 회식 장소로 자주 활용됩니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              상황별로 보면, 4~5인 팀 회식에는 삼성동 이면도로 대형 구이 전문점이 편리하고, 2인 데이트나 접대 자리에는 한우 오마카세 형태의 소규모 고기집이 적합합니다. 가격대는 점심 런치 세트 1만 5천~2만 원 선, 저녁 한우 코스는 1인 4만~8만 원대입니다. 삼성동·대치동 방향 이면도로는 코엑스 정문 대비 가격이 10~20% 낮은 경우가 많습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/group" style={{ color:'var(--primary)' }}>삼성역 회식·단체</Link> · <Link href="/dinner/samseong/category/premium" style={{ color:'var(--primary)' }}>삼성역 접대·파인다이닝</Link> · <Link href="/dinner/samseong/category/korean" style={{ color:'var(--primary)' }}>삼성역 한식·정식</Link>
            </p>
          </>}

          {category === 'gukbap' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 국밥·해장 맛집은 테헤란로 직장인 점심 수요와 밤새 일한 야근자 해장 수요가 모두 모이는 카테고리입니다. 코엑스 주변보다 봉은사로·삼성동 이면도로에 국밥 전문점이 집중되어 있으며, 순대국밥·곰탕·선지해장국·뼈해장국 등 선택지가 다양합니다. 칼국수·수제비를 함께 제공하는 복합 메뉴 식당도 있어 점심 모임에 활용하기 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인분 8천~1만 3천 원대로 가성비가 높습니다. 점심 피크 시간(12~13시)에는 줄이 길 수 있으므로 11시 40분 전후로 입장하거나, 1인 카운터석을 갖춘 곳을 선택하면 대기를 줄일 수 있습니다. 24시간 영업 여부는 가게별로 다르므로 늦은 야식·해장 목적이라면 미리 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/budget" style={{ color:'var(--primary)' }}>삼성역 가성비·혼밥</Link> · <Link href="/dinner/samseong/category/korean" style={{ color:'var(--primary)' }}>삼성역 한식·정식</Link> · <Link href="/dinner/samseong/category/meat" style={{ color:'var(--primary)' }}>삼성역 고기·한우</Link>
            </p>
          </>}

          {category === 'izakaya' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 이자카야·술집은 강남 직장인의 퇴근 후 1차·2차로 가장 선호되는 카테고리입니다. 코엑스 인근 대형 야키토리 전문점부터 봉은사로의 소규모 카운터 이자카야까지 분위기 스펙트럼이 넓습니다. 하이볼·사케·수제맥주를 중심으로 주류 라인업을 구성한 곳이 많아 주류 취향에 따라 선택할 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              안주 1인 기준 1만 5천~2만 5천 원, 주류 포함 2인 기준 6만~10만 원대가 일반적입니다. 금·토 저녁에는 예약 없이 입장이 어려운 곳이 많으니 인기 이자카야는 당일 오전에 예약을 완료하세요. 단체 회식 1차로 이자카야를 선택한다면 단체석 또는 방 예약 가능 여부를 반드시 확인해야 합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/japanese" style={{ color:'var(--primary)' }}>삼성역 일식·스시</Link> · <Link href="/dinner/samseong/category/date" style={{ color:'var(--primary)' }}>삼성역 데이트·분위기</Link> · <Link href="/dinner/samseong/category/group" style={{ color:'var(--primary)' }}>삼성역 회식·단체</Link>
            </p>
          </>}

          {category === 'japanese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 일식·스시 맛집은 코엑스 인근과 파르나스호텔 주변에 집중되어 있습니다. 런치 도시락·돈카츠 등 단품 캐주얼 일식부터 예약제 오마카세 스시 바까지 가격대 폭이 넓습니다. 강남 비즈니스 상권 특성상 접대용 개인실을 갖춘 일식 레스토랑이 다른 지역보다 많은 편입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 세트 1만 5천~2만 5천 원, 저녁 오마카세는 1인 10만~25만 원 수준입니다. 접대·기념일 방문이라면 예약 시 개인실 가능 여부, 와인 반입 여부, 특별 케이크 주문 가능 여부를 미리 안내받는 것이 좋습니다. 코엑스몰 내부 일식 레스토랑은 주차 연결이 편리해 외부 손님 접대에 활용도가 높습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/premium" style={{ color:'var(--primary)' }}>삼성역 접대·파인다이닝</Link> · <Link href="/dinner/samseong/category/izakaya" style={{ color:'var(--primary)' }}>삼성역 이자카야·술집</Link> · <Link href="/dinner/samseong/category/date" style={{ color:'var(--primary)' }}>삼성역 데이트·분위기</Link>
            </p>
          </>}

          {category === 'chinese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 중식·마라탕 맛집은 코엑스몰 인근 대형 중화요리 식당과 삼성동 이면도로의 마라탕·훠궈 전문점으로 나뉩니다. 테헤란로 직장인 점심 수요가 높아 런치 짬뽕·짜장 세트를 합리적 가격에 제공하는 식당이 많습니다. 저녁에는 훠궈 모임 수요도 활발해 2인부터 이용 가능한 소규모 훠궈집도 운영 중입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 세트 9천~1만 6천 원, 마라탕 1인 1만~2만 원, 훠궈 2인 기준 4만~7만 원대입니다. 마라 레벨(맵기)을 주문 전 직접 조절할 수 있는 곳과 고정 레시피를 사용하는 곳이 다르니 매운 음식 섭취가 어려운 동행이 있다면 미리 확인하세요. 단체 훠궈 모임은 예약이 필수인 경우가 대부분입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/group" style={{ color:'var(--primary)' }}>삼성역 회식·단체</Link> · <Link href="/dinner/samseong/category/budget" style={{ color:'var(--primary)' }}>삼성역 가성비·혼밥</Link> · <Link href="/dinner/samseong/category/korean" style={{ color:'var(--primary)' }}>삼성역 한식·정식</Link>
            </p>
          </>}

          {category === 'western' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 양식·스테이크 맛집은 코엑스몰·파르나스·봉은사로 일대에 분포합니다. 캐주얼 파스타·피자 전문점부터 드라이에이징 스테이크 레스토랑, 코스 요리 이탈리안 다이닝까지 선택 폭이 넓습니다. 강남 지역 특성상 와인 리스트를 갖춘 레스토랑이 많아 특별한 자리에 어울리는 선택지가 풍부합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 파스타·피자 1만 5천~2만 5천 원, 스테이크 코스는 1인 5만~12만 원 수준입니다. 주말 저녁 인기 레스토랑은 2주 전부터 예약이 채워지는 경우가 있으니 기념일이나 접대 자리에는 미리 예약하세요. 테이블 배치가 넉넉한 레스토랑은 봉은사로 이면 골목에서 찾는 것이 유리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/date" style={{ color:'var(--primary)' }}>삼성역 데이트·분위기</Link> · <Link href="/dinner/samseong/category/premium" style={{ color:'var(--primary)' }}>삼성역 접대·파인다이닝</Link> · <Link href="/dinner/samseong/category/japanese" style={{ color:'var(--primary)' }}>삼성역 일식·스시</Link>
            </p>
          </>}

          {category === 'group' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 회식·단체 맛집은 코엑스·테헤란로 대기업·금융사·IT 직장인들의 팀 회식 수요를 충족하는 대형 식당들이 많습니다. 고기구이·이자카야·중식 코스·한식 정식 등 메뉴가 다양하며, 10~30인 단체를 수용하는 별도 룸·홀 식당이 삼성동 이면도로에 집중되어 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 기준 2만 5천~4만 원이 삼성역 회식의 일반적 예산입니다. 룸 예약은 3~5일 전 전화 확인이 안전하며, 코엑스몰 연계 주차를 활용하면 원거리 참석자도 불편 없이 이동할 수 있습니다. 회식 후 2차 자리까지 고려한다면 이자카야 밀집 구역과 가까운 식당을 1차로 선택하는 것이 동선상 효율적입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/meat" style={{ color:'var(--primary)' }}>삼성역 고기·한우</Link> · <Link href="/dinner/samseong/category/izakaya" style={{ color:'var(--primary)' }}>삼성역 이자카야·술집</Link> · <Link href="/dinner/samseong/category/premium" style={{ color:'var(--primary)' }}>삼성역 접대·파인다이닝</Link>
            </p>
          </>}

          {category === 'date' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 데이트 맛집으로는 봉은사 인근 분위기 좋은 레스토랑, 코엑스몰 고층 뷰 레스토랑, 파르나스호텔 주변 고급 다이닝이 대표적입니다. 조명이 차분하고 테이블 간격이 넉넉한 이탈리안 레스토랑, 카운터석 오마카세, 프라이빗 룸을 갖춘 일식 레스토랑까지 분위기 선택지가 다양합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              2인 기준 6만~15만 원대 예산으로 코스·세트 메뉴를 선택할 수 있습니다. 주말 저녁 인기 레스토랑은 예약 경쟁이 치열하므로 1~2주 전 예약을 권장합니다. 기념일 케이크나 꽃 준비가 필요하다면 예약 시 미리 문의하세요. 코엑스몰 쇼핑과 연계한 저녁 코스로 활용하기에도 편리한 지역입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/western" style={{ color:'var(--primary)' }}>삼성역 양식·스테이크</Link> · <Link href="/dinner/samseong/category/japanese" style={{ color:'var(--primary)' }}>삼성역 일식·스시</Link> · <Link href="/dinner/samseong/category/premium" style={{ color:'var(--primary)' }}>삼성역 접대·파인다이닝</Link>
            </p>
          </>}

          {category === 'budget' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 가성비·혼밥 맛집은 코엑스 주변의 고가 식당들 사이에서 찾기 어렵게 느껴질 수 있지만, 테헤란로 이면 골목과 삼성동 주택가 인근에는 합리적인 가격의 식당이 다수 자리합니다. 국밥·정식·칼국수·제육볶음·순두부찌개 등 단품 중심 메뉴 식당이 점심 혼밥 수요를 충족합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 단품 8천~1만 3천 원, 런치 세트 1만~1만 8천 원이 이 지역의 가성비 기준입니다. 코엑스몰 지하 푸드코트는 다양한 메뉴를 1만 원 내외에 해결할 수 있어 빠른 점심에 적합합니다. 1인석·카운터석이 있는 식당 목록을 미리 확인하면 혼자 방문할 때 불편함을 줄일 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/gukbap" style={{ color:'var(--primary)' }}>삼성역 국밥·해장</Link> · <Link href="/dinner/samseong/category/korean" style={{ color:'var(--primary)' }}>삼성역 한식·정식</Link> · <Link href="/dinner/samseong/category/chinese" style={{ color:'var(--primary)' }}>삼성역 중식·마라탕</Link>
            </p>
          </>}

          {category === 'premium' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 접대·파인다이닝은 강남 비즈니스 상권의 핵심 카테고리입니다. 파르나스호텔·그랜드인터컨티넨탈 인근의 호텔 레스토랑, 봉은사로 예약제 오마카세, 코엑스 인근 코스 다이닝 레스토랑이 중요한 비즈니스 미팅과 임원 접대에 활용됩니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 코스 기준 10만~30만 원 이상으로 범위가 넓습니다. 예약은 최소 1주일 전에 완료하는 것이 안전하며, 개인실(룸) 사용료가 별도인 경우가 있으니 예약 시 함께 확인하세요. 와인 페어링·특별 케이크·꽃 장식 등의 추가 요청도 사전에 안내해야 준비가 가능합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/japanese" style={{ color:'var(--primary)' }}>삼성역 일식·스시</Link> · <Link href="/dinner/samseong/category/western" style={{ color:'var(--primary)' }}>삼성역 양식·스테이크</Link> · <Link href="/dinner/samseong/category/date" style={{ color:'var(--primary)' }}>삼성역 데이트·분위기</Link>
            </p>
          </>}

          {category === 'special' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 족발·곱창·보쌈 맛집은 테헤란로 이면 골목과 삼성동 주택가 인근에 분포합니다. 족발 전문점은 양념·생족발 선택이 가능한 곳이 많고, 소·돼지 곱창구이 전문점은 저녁 퇴근 후 1차 회식 장소로 자주 쓰입니다. 보쌈은 막걸리와 함께 즐기는 코스로 단체 모임에도 적합합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              족발 소·중 기준 2만~3만 5천 원, 곱창 1인분 1만 2천~2만 원대입니다. 곱창·막창 전문점은 냄새와 연기가 많이 나는 편이어서 환기 시설이 좋은 곳을 선택하면 쾌적하게 이용할 수 있습니다. 단체로 족발·보쌈을 주문할 때는 추가 반찬 구성을 미리 확인하면 예산 계획이 수월합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/meat" style={{ color:'var(--primary)' }}>삼성역 고기·한우</Link> · <Link href="/dinner/samseong/category/korean" style={{ color:'var(--primary)' }}>삼성역 한식·정식</Link> · <Link href="/dinner/samseong/category/group" style={{ color:'var(--primary)' }}>삼성역 회식·단체</Link>
            </p>
          </>}

          {category === 'exit4' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 4번출구는 코엑스와 반대 방향으로, 대치동 학원가 및 삼성동 주거 지역과 연결됩니다. 학원 밀집 지역 특성상 간단한 식사와 분식 전문점이 많으며, 조용한 분위기의 국밥·한식 식당도 인근에 자리합니다. 코엑스 상권의 혼잡을 피하고 싶을 때 활용하기 좋은 동선입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              가격대는 코엑스 방향보다 전반적으로 낮은 편이며, 점심 단품 8천~1만 3천 원대에서 선택할 수 있습니다. 저녁 늦은 시간에는 영업을 마치는 식당이 많으니 방문 전 영업시간을 꼭 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/dinner/samseong/category/budget" style={{ color:'var(--primary)' }}>삼성역 가성비·혼밥</Link> · <Link href="/dinner/samseong/category/gukbap" style={{ color:'var(--primary)' }}>삼성역 국밥·해장</Link> · <Link href="/dinner/samseong/category/korean" style={{ color:'var(--primary)' }}>삼성역 한식·정식</Link>
            </p>
          </>}

          {!['meat','gukbap','izakaya','japanese','chinese','western','group','date','budget','premium','special','exit4'].includes(category) && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼성역 주변 {catInfo.name} 맛집은 코엑스몰 내부와 테헤란로 골목, 삼성동 이면도로까지 다양하게 분포되어 있습니다. 각 식당의 영업시간·가격대·특징을 확인하고 방문하세요.
            </p>
          </>}

          <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8 }}>
            날씨·기분·예산을 입력하면 <Link href="/dinner/samseong" style={{ color:'var(--primary)' }}>삼성역 AI 맛집 추천</Link>이 {catInfo.name} 포함 전체 카테고리에서 맞춤 식당 3곳을 바로 골라드립니다.
          </p>
        </article>

        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Link href="/dinner/samseong" className="btn btn-ghost">← 삼성역 전체 맛집</Link>
          <Link href="/dinner/samseong" className="btn btn-primary">✨ AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
