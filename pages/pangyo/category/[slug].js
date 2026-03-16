import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import restaurants from '../../../data/pangyo'

function fmtPrice(p) {
  if (!p) return ''
  return p.split('~').map(n => parseInt(n).toLocaleString('ko-KR')).join('~')
}

function naverMapUrl(name, lat, lng) {
  const cleaned = name
    .replace(/ (판교점|판교역점|판교본점|분당점|백현점|아브뉴프랑점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const hasRegion = /(판교|분당|성남|테크노밸리)/.test(cleaned)
  const query = hasRegion ? cleaned : cleaned + ' 판교'
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
  meat:     { name: '고기구이·삼겹살',  emoji: '🥩', cats: ['고기구이'],              tags: ['한우','갈비','삼겹살','목살'],         keywords: '판교역 고기, 판교역 삼겹살, 판교 한우, 분당 고기구이' },
  gukbap:   { name: '국밥·해장·칼국수', emoji: '🥣', cats: ['국밥','국물','칼국수'],  tags: ['해장','설렁탕','순대국밥'],           keywords: '판교역 국밥, 판교역 해장국, 판교 칼국수, 분당 해장' },
  izakaya:  { name: '이자카야·포차',    emoji: '🏮', cats: ['이자카야','야장'],       tags: ['포차','하이볼','수제맥주'],           keywords: '판교역 이자카야, 판교역 포차, 판교 술집, 분당 이자카야' },
  japanese: { name: '일식·스시·돈카츠', emoji: '🍣', cats: ['일식'],                  tags: ['스시','사시미','돈카츠','규동'],      keywords: '판교역 일식, 판교역 스시, 판교 돈카츠, 판교 오마카세' },
  chinese:  { name: '중식·마라탕',      emoji: '🍜', cats: ['중식','훠궈'],           tags: ['마라탕','양꼬치','짬뽕'],            keywords: '판교역 중식, 판교역 마라탕, 판교 짬뽕, 분당 양꼬치' },
  western:  { name: '양식·파스타',      emoji: '🍝', cats: ['양식','이탈리안','스테이크'], tags: ['파스타','피자','스테이크'],       keywords: '판교역 양식, 판교역 파스타, 판교 이탈리안, 분당 스테이크' },
  chicken:  { name: '치킨·분식',        emoji: '🐔', cats: ['치킨'],                  tags: ['통닭','치킨','떡볶이','분식'],       keywords: '판교역 치킨, 판교역 분식, 판교 떡볶이, 분당 치킨' },
  group:    { name: '회식·단체',        emoji: '🎉', cats: ['회식'],                  tags: ['단체가능','회식','룸있음'],           keywords: '판교역 회식, 판교역 단체, 판교 회식장소, 테크노밸리 회식' },
  date:     { name: '데이트·분위기',    emoji: '💑', cats: [],                        tags: ['데이트','뷰맛집','프라이빗'],        keywords: '판교역 데이트, 판교역 분위기, 백현동 카페거리 데이트' },
  budget:   { name: '가성비·혼밥·점심', emoji: '💰', cats: [],                        tags: ['가성비','점심','혼밥가능','점심특선'], keywords: '판교역 점심, 판교역 혼밥, 판교 가성비, 테크노밸리 점심' },
  premium:  { name: '접대·파인다이닝',  emoji: '✨', cats: [],                        tags: ['오마카세','예약제','코스요리','프라이빗'], keywords: '판교역 고급, 판교역 접대, 판교 오마카세, 분당 파인다이닝' },
  korean:   { name: '한식·정식·보쌈',   emoji: '🍱', cats: ['한식'],                  tags: ['족발','보쌈','갈비찜','한정식'],     keywords: '판교역 한식, 판교역 한정식, 판교 보쌈, 분당 족발' },
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
  const rv = (r.rv||[]).map(cleanRv).filter(Boolean)
  const rv0 = rv[0]||'', rv1 = rv[1]||''
  const tags = (r.tags||[]).slice(0,4)
  const cnt = r.cnt||0
  const pool = [
    ()=>rv1?`"${rv0}" 또 다른 방문객은, "${rv1}"`:rv0?`"${rv0}"`:null,
    ()=>cnt>=50?`${cnt.toLocaleString()}명이 다녀갔다.${tags[0]?' '+tagToLabel(tags[0])+'.':''} ${rv0?'"'+rv0+'"':''}`.trim():null,
    ()=>rv0?`"${rv0}"`:null,
    ()=>tags.length?`${tags.slice(0,3).map(t=>'#'+t).join('  ')}${rv0?'  "'+rv0+'"':''}`:null,
    ()=>tags[0]?`${tagToLabel(tags[0])}으로 알려진 곳.${rv0?' "'+rv0+'"':''}`:null,
    ()=>rv0?`"${rv0}"`:null,
  ]
  const order = [idx%pool.length, (idx+1)%pool.length, (idx+2)%pool.length, 2, 3, 0]
  for(const i of order){ const r2=pool[i](); if(r2&&r2.trim()) return { reason: r2.trim(), highlight: rv0.slice(0,20)||'' } }
  return { reason: rv0?`"${rv0}"`:r.type||'', highlight: rv0.slice(0,20)||'' }
}

export default function CategoryPage({ slug, catInfo, restaurants }) {
  const sorted = [...restaurants].sort((a, b) => b.rt - a.rt)
  const [dicing, setDicing] = useState(false)
  const [picks, setPicks] = useState(null)
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
        <title>판교역 {catInfo.name} 맛집 추천 {restaurants.length}곳 | 2026 | 오늘뭐먹지</title>
        <meta name="description" content={`판교역·판교테크노밸리·백현동 주변 ${catInfo.name} 맛집 ${restaurants.length}개 정리. ${catInfo.keywords}.`} />
        <meta name="keywords" content={catInfo.keywords} />
        <link rel="canonical" href={`https://dinner.ambitstock.com/pangyo/category/${slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": `판교역 ${catInfo.name} 맛집`,
          "url": `https://dinner.ambitstock.com/pangyo/category/${slug}`,
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
            <Link href="/pangyo">판교역 맛집</Link> <span>›</span>
            <span style={{ color:'var(--text)' }}>{catInfo.name}</span>
          </div>
        </div>
      </div>

      {/* 히어로 */}
      <section style={{ padding:'40px 16px 28px', background:'var(--surface)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ fontSize:'2.5rem', marginBottom:10 }}>{catInfo.emoji}</div>
          <h1 style={{ fontSize:'clamp(1.4rem, 4vw, 2rem)', fontWeight:900, marginBottom:8 }}>
            판교역 {catInfo.name} 맛집 추천
          </h1>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', marginBottom:20 }}>
            판교역·판교테크노밸리·백현동 주변 {catInfo.name} 맛집 <strong style={{ color:'var(--text)' }}>{restaurants.length}곳</strong> 정리
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
              <Link key={i} href={`/pangyo/restaurant/${encodeURIComponent(r.name)}`}
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
                  <div style={{ display:'flex', gap:6, alignItems:'center', flexWrap:'wrap' }}>
                    <a href={naverMapUrl(r.name, r.lat, r.lng)}
                      target="_blank" rel="noopener noreferrer"
                      onClick={e=>e.stopPropagation()}
                      style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)', textDecoration:'none', position:'relative', zIndex:1 }}>
                      📍 지도
                    </a>
                    <span style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)' }}>
                      🕐 {r.hours}
                    </span>
                  </div>
                  {(() => { const {reason, highlight} = buildCatReason(r, i); return reason ? (
                    <div style={{ margin:'8px 0 4px', fontSize:'.78rem', color:'var(--muted)', lineHeight:1.5 }}>
                      {highlight && <span style={{ display:'inline-block', background:'var(--surface)', border:'1px solid var(--border)', borderRadius:6, padding:'1px 7px', fontSize:'.7rem', color:'var(--primary)', marginBottom:4 }}>💬 {highlight}</span>}
                      <div style={{ marginTop:highlight?4:0 }}>{reason}</div>
                    </div>
                  ) : null })()}
                  <span style={{ marginLeft:'auto', fontSize:'.72rem', color:'var(--muted)', opacity:.6, display:'block', textAlign:'right', marginTop:4 }}>상세보기 →</span>
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
            <Link href={`/pangyo/restaurant/${encodeURIComponent(r.name)}`} key={i}>
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
                    💬 {r.rv[0].replace(/\[\d+\.?\d*★\]\s*/, '').slice(0, 40)}...
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <article style={{ marginTop:48, padding:'28px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1.1rem', fontWeight:800, marginBottom:16 }}>
            판교역 {catInfo.name} 맛집 선택 가이드
          </h2>

          {slug === 'meat' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 고기구이 맛집은 테크노밸리 직장인 회식 수요가 집중되는 만큼 규모 있는 홀과 넉넉한 주차 공간을 갖춘 곳이 많습니다. 한우 특수부위부터 돼지 삼겹살·목살까지 선택지가 다양하며, 백현동 카페거리 인근에는 분위기를 겸한 고급 고기집도 자리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              상황별로 보면, 팀 회식에는 단체석과 룸을 갖춘 대형 구이 전문점이 적합하고, 1~2인 저녁이라면 1인분 주문이 가능한 곳을 먼저 확인하는 것이 좋습니다. 가격대는 1인 기준 점심 런치 메뉴가 1만 2천~1만 8천 원 선, 저녁 한우 코스는 4만~7만 원대로 폭이 넓습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교에서 고기구이를 선택할 때는 예약 가능 여부를 미리 체크하세요. 금·토 저녁과 월요일 회식 시즌에는 웨이팅이 발생하는 곳도 있습니다. 아브뉴프랑 인근 고기집은 테이블 간격이 넓어 조용한 자리를 선호하는 접대 식사에도 활용도가 높습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/korean" style={{ color:'var(--primary)' }}>판교역 한식·정식</Link> · <Link href="/pangyo/category/group" style={{ color:'var(--primary)' }}>판교역 회식·단체</Link> · <Link href="/pangyo/category/premium" style={{ color:'var(--primary)' }}>판교역 접대·파인다이닝</Link>
            </p>
          </>}

          {slug === 'gukbap' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 국밥·해장 맛집은 아침 일찍 출근하는 테크노밸리 직장인과 야근 후 늦은 저녁을 챙기는 수요가 모두 높습니다. 순대국밥·돼지국밥·설렁탕 등 기본 국밥류 외에 뼈해장국·선지해장·황태해장까지 선택지가 다양합니다. 칼국수와 함께 파는 복합 메뉴 식당도 여럿 있어 점심 한 끼로 부담 없이 이용하기 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              가격대는 1인분 7천~1만 2천 원 수준으로 비교적 균일합니다. 점심 혼밥에는 카운터석이 있는 국밥 전문점, 팀 점심에는 테이블이 넓은 칼국수·국밥 복합 식당이 편리합니다. 해장이 필요한 아침에는 판교역 근처 24시 영업 국밥집을 우선 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/budget" style={{ color:'var(--primary)' }}>판교역 가성비·혼밥</Link> · <Link href="/pangyo/category/korean" style={{ color:'var(--primary)' }}>판교역 한식·정식</Link> · <Link href="/pangyo/category/meat" style={{ color:'var(--primary)' }}>판교역 고기구이</Link>
            </p>
          </>}

          {slug === 'izakaya' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 이자카야·포차는 IT·바이오 직장인들의 퇴근 후 1차·2차 장소로 자주 이용됩니다. 카운터 중심의 소규모 이자카야부터 단체석을 갖춘 대형 야키토리 전문점까지 스타일이 다양합니다. 백현동 카페거리 인근에는 분위기 있는 와인바 겸 이자카야도 운영 중입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 안주 기준 1만~2만 원, 2인 기준 음식+주류 포함 5만~8만 원대가 일반적입니다. 하이볼·사케·수제맥주를 기준으로 주류 라인업이 다른 경우가 많으니, 주류 취향이 뚜렷하다면 메뉴판을 미리 확인하는 것이 좋습니다. 심야 영업 여부는 가게별로 다르므로 늦은 2차에는 영업 시간을 미리 체크하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/japanese" style={{ color:'var(--primary)' }}>판교역 일식·스시</Link> · <Link href="/pangyo/category/date" style={{ color:'var(--primary)' }}>판교역 데이트·분위기</Link> · <Link href="/pangyo/category/group" style={{ color:'var(--primary)' }}>판교역 회식·단체</Link>
            </p>
          </>}

          {slug === 'japanese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 일식·스시 맛집은 아브뉴프랑과 현대백화점 판교점 인근에 집중되어 있습니다. 점심 도시락·돈카츠·규동 등 단품 메뉴를 파는 캐주얼 일식부터 예약제 오마카세 코스 레스토랑까지 가격대 폭이 넓습니다. 분당·판교 상권 특성상 스시 바 형태의 카운터 석이 있는 식당이 많아 혼밥에도 편리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 세트는 1만 2천~2만 원대, 저녁 오마카세 코스는 1인 8만~15만 원 수준입니다. 접대·기념일 용도라면 예약 필수 여부와 개인실 유무를 먼저 확인하세요. 백현동 카페거리 인근 일식집은 접근성이 좋고 주차가 편리해 외부 손님을 모시기에도 적합합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/premium" style={{ color:'var(--primary)' }}>판교역 접대·파인다이닝</Link> · <Link href="/pangyo/category/izakaya" style={{ color:'var(--primary)' }}>판교역 이자카야·포차</Link> · <Link href="/pangyo/category/date" style={{ color:'var(--primary)' }}>판교역 데이트·분위기</Link>
            </p>
          </>}

          {slug === 'chinese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 중식 맛집은 마라탕·훠궈부터 전통 중화요리까지 다양하게 분포합니다. 테크노밸리 직장인의 점심 수요가 높아 짬뽕·짜장·탕수육 세트를 합리적 가격에 제공하는 런치 특선 식당이 많습니다. 양꼬치 골목도 별도로 형성되어 있어 저녁 모임 장소로 활용도가 높습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 세트 8천~1만 5천 원, 마라탕 1인 1만~1만 8천 원, 훠궈 2인 기준 3만~5만 원대입니다. 마라탕·훠궈는 매운 정도를 선택할 수 있는지 주문 전 확인하세요. 단체 방문 시 훠궈 전골 형태는 예약이 필수인 경우가 많습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/group" style={{ color:'var(--primary)' }}>판교역 회식·단체</Link> · <Link href="/pangyo/category/budget" style={{ color:'var(--primary)' }}>판교역 가성비·혼밥</Link> · <Link href="/pangyo/category/korean" style={{ color:'var(--primary)' }}>판교역 한식·정식</Link>
            </p>
          </>}

          {slug === 'western' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 양식·파스타 맛집은 아브뉴프랑과 현대백화점 판교점 주변에 집중되어 있습니다. 캐주얼 파스타·피자 전문점부터 스테이크 하우스, 분위기 있는 이탈리안 레스토랑까지 선택지가 풍부합니다. 주말 브런치 메뉴를 운영하는 곳이 많아 늦은 점심 방문에도 어울립니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 파스타·피자는 1만 3천~2만 원대, 스테이크 코스는 1인 4만~8만 원 수준입니다. 데이트나 소규모 접대 자리에는 테이블 간격이 넉넉한 레스토랑을 우선 고르세요. 아브뉴프랑의 양식 레스토랑은 예약 후 방문을 권장하는 편입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/date" style={{ color:'var(--primary)' }}>판교역 데이트·분위기</Link> · <Link href="/pangyo/category/premium" style={{ color:'var(--primary)' }}>판교역 접대·파인다이닝</Link> · <Link href="/pangyo/category/japanese" style={{ color:'var(--primary)' }}>판교역 일식·스시</Link>
            </p>
          </>}

          {slug === 'chicken' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 치킨·분식은 점심 빠른 한 끼와 퇴근 후 가볍게 한 잔 할 때 모두 쓸 수 있는 카테고리입니다. 치킨 전문점 외에 떡볶이·튀김·라볶이를 함께 파는 분식 포장 전문점도 다수 운영 중입니다. 판교테크노밸리 지하 푸드코트에도 치킨·분식 옵션이 있어 짧은 점심 시간에 이용하기 편리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              치킨 1인분 기준 1만 2천~1만 8천 원, 분식 세트 6천~1만 원대입니다. 저녁 치맥 모임에는 단체 테이블 좌석 수를 미리 확인하고 방문하세요. 배달 전용 브랜드의 홀 매장은 회전이 빠른 편이라 대기 없이 이용할 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/budget" style={{ color:'var(--primary)' }}>판교역 가성비·혼밥</Link> · <Link href="/pangyo/category/gukbap" style={{ color:'var(--primary)' }}>판교역 국밥·해장</Link> · <Link href="/pangyo/category/group" style={{ color:'var(--primary)' }}>판교역 회식·단체</Link>
            </p>
          </>}

          {slug === 'group' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 회식·단체 맛집은 판교테크노밸리 IT·바이오 기업의 팀 회식 수요에 맞게 대형 홀과 별도 룸을 갖춘 곳이 많습니다. 삼겹살·한우 구이, 이자카야, 중식 코스 등 메뉴가 다양하며, 10인 이상 단체 예약을 받는 식당도 상당수입니다. 알파돔시티와 아브뉴프랑 주변에 회식 장소로 자주 쓰이는 식당들이 분포합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 기준 2만~3만 5천 원대가 판교 회식의 일반적인 예산입니다. 룸 예약은 적어도 2~3일 전 전화 확인을 권장합니다. 주차 지원이 되는 곳인지도 함께 체크하면 원거리 손님도 부담 없이 참석할 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/meat" style={{ color:'var(--primary)' }}>판교역 고기구이</Link> · <Link href="/pangyo/category/izakaya" style={{ color:'var(--primary)' }}>판교역 이자카야·포차</Link> · <Link href="/pangyo/category/premium" style={{ color:'var(--primary)' }}>판교역 접대·파인다이닝</Link>
            </p>
          </>}

          {slug === 'date' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 데이트 맛집으로는 백현동 카페거리와 아브뉴프랑 일대가 손꼽힙니다. 개방감 있는 테라스 레스토랑, 조명이 차분한 이탈리안 다이닝, 오마카세 스타일의 카운터 코스까지 분위기 선택지가 넓습니다. 현대백화점 판교점 5~6층 식당가도 쇼핑과 식사를 함께 즐기는 데이트 코스로 자주 활용됩니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              2인 기준 5만~10만 원대 예산으로 코스·세트 메뉴를 선택할 수 있습니다. 인기 레스토랑은 주말 저녁 예약이 빠르게 찼으므로 1주일 전 예약을 권장합니다. 창가 자리나 테라스 자리를 원한다면 예약 시 미리 요청하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/western" style={{ color:'var(--primary)' }}>판교역 양식·파스타</Link> · <Link href="/pangyo/category/japanese" style={{ color:'var(--primary)' }}>판교역 일식·스시</Link> · <Link href="/pangyo/category/premium" style={{ color:'var(--primary)' }}>판교역 접대·파인다이닝</Link>
            </p>
          </>}

          {slug === 'budget' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 가성비·혼밥 맛집은 테크노밸리 점심 수요에 맞춰 빠른 서비스와 합리적인 가격을 내세운 식당이 많습니다. 국밥·칼국수·순두부찌개·김치찌개·제육볶음 정식 등 단품 메뉴 중심으로 구성되어 있으며, 혼자 앉기 편한 1인석 또는 카운터석을 갖춘 식당도 늘어나는 추세입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 단품 7천~1만 2천 원, 런치 세트 1만~1만 5천 원이 일반적입니다. 11시 30분~12시 30분 피크 시간대를 피하면 웨이팅 없이 앉을 수 있는 경우가 많습니다. 판교테크노밸리 지하 푸드코트도 1만 원 내외의 다양한 메뉴로 구성되어 있어 빠른 점심에 적합합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/gukbap" style={{ color:'var(--primary)' }}>판교역 국밥·해장</Link> · <Link href="/pangyo/category/korean" style={{ color:'var(--primary)' }}>판교역 한식·정식</Link> · <Link href="/pangyo/category/chicken" style={{ color:'var(--primary)' }}>판교역 치킨·분식</Link>
            </p>
          </>}

          {slug === 'premium' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 접대·파인다이닝 식당은 중요한 비즈니스 미팅이나 임원 접대, 계약 성사 자리에 활용도가 높습니다. 아브뉴프랑과 현대백화점 판교점 인근에 예약제 오마카세, 코스 요리 레스토랑이 집중되어 있으며, 주차 편의와 조용한 분위기를 갖춘 곳을 우선 추려놓았습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 코스 기준 8만~20만 원 이상으로 범위가 넓습니다. 예약은 최소 3~5일 전에 완료하는 것이 안전하며, 특정 와인 페어링이나 케이크 옵션 등 추가 요청은 예약 시 함께 안내해야 합니다. 개인실(룸) 운영 여부를 꼭 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/japanese" style={{ color:'var(--primary)' }}>판교역 일식·스시</Link> · <Link href="/pangyo/category/western" style={{ color:'var(--primary)' }}>판교역 양식·파스타</Link> · <Link href="/pangyo/category/date" style={{ color:'var(--primary)' }}>판교역 데이트·분위기</Link>
            </p>
          </>}

          {slug === 'korean' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 한식·정식 맛집은 점심 한정식 세트부터 저녁 족발·보쌈까지 한국인 직장인 입맛에 맞는 메뉴를 다양하게 갖추고 있습니다. 판교테크노밸리 인근에는 밑반찬과 찌개를 포함한 백반 스타일 한식당이 밀집해 있어 점심 이용 편의성이 높습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 정식 8천~1만 5천 원, 저녁 족발·보쌈 2인 기준 3만~5만 원대입니다. 한정식 코스는 예약이 필요한 경우가 많으며, 저녁 인원이 6인 이상이라면 보쌈·족발 전문 식당에 단체석 확인 후 방문하는 것이 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/pangyo/category/budget" style={{ color:'var(--primary)' }}>판교역 가성비·혼밥</Link> · <Link href="/pangyo/category/gukbap" style={{ color:'var(--primary)' }}>판교역 국밥·해장</Link> · <Link href="/pangyo/category/group" style={{ color:'var(--primary)' }}>판교역 회식·단체</Link>
            </p>
          </>}

          {!['meat','gukbap','izakaya','japanese','chinese','western','chicken','group','date','budget','premium','korean'].includes(slug) && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              판교역 주변 {catInfo.name} 맛집은 판교테크노밸리 알파/베타, 백현동 카페거리, 아브뉴프랑까지 다양하게 분포되어 있습니다. 평점과 리뷰 수를 기준으로 {restaurants.length}곳을 엄선했습니다.
            </p>
          </>}

          <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8 }}>
            오늘 날씨·기분·예산을 입력하면 <Link href="/pangyo" style={{ color:'var(--primary)' }}>판교역 AI 맛집 추천</Link>이 {catInfo.name} 포함 전체 카테고리에서 맞춤 식당 3곳을 바로 골라드립니다.
          </p>
        </article>

        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Link href="/pangyo" className="btn btn-ghost">← 판교역 전체 맛집</Link>
          <Link href="/pangyo" className="btn btn-primary">AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
