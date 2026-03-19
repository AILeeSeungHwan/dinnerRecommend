import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import restaurants from '../../../../data/yeongtong'


// ── 주사위 오버레이 ──────────────────────────────────────────────
// 네이버 지도 URL - 이름에서 지역 suffix 제거 + 좌표 중심 검색
// 가격 구분자 포맷: "25000~40000" → "25,000~40,000"
function fmtPrice(p) {
  if (!p) return ''
  return p.split('~').map(n => parseInt(n).toLocaleString('ko-KR')).join('~')
}

function naverMapUrl(name, lat, lng) {
  const cleaned = name
    .replace(/ (영통점|영통역점|망포점|수원점|영통본점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const hasRegion = /(영통|망포|수원|삼성전자)/.test(cleaned)
  const query = hasRegion ? cleaned : cleaned + ' 영통'
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
  meat:     { name: '고기구이·삼겹살',  emoji: '🥩', cats: ['고기구이'],              tags: ['한우','갈비','삼겹살','목살'],         keywords: '영통역 고기, 영통역 삼겹살, 영통 한우, 수원 고기구이' },
  gukbap:   { name: '국밥·해장·칼국수', emoji: '🥣', cats: ['국밥','국물','칼국수'],  tags: ['해장','설렁탕','순대국밥'],           keywords: '영통역 국밥, 영통역 해장국, 영통 칼국수, 수원 해장' },
  izakaya:  { name: '이자카야·포차',    emoji: '🏮', cats: ['이자카야','야장'],       tags: ['포차','하이볼','수제맥주'],           keywords: '영통역 이자카야, 영통역 포차, 영통 술집, 수원 이자카야' },
  japanese: { name: '일식·스시·돈카츠', emoji: '🍣', cats: ['일식'],                  tags: ['스시','사시미','돈카츠','규동'],      keywords: '영통역 일식, 영통역 스시, 영통 돈카츠, 수원 일식' },
  chinese:  { name: '중식·마라탕',      emoji: '🍜', cats: ['중식','훠궈'],           tags: ['마라탕','양꼬치','짬뽕'],            keywords: '영통역 중식, 영통역 마라탕, 영통 짬뽕, 수원 양꼬치' },
  western:  { name: '양식·파스타',      emoji: '🍝', cats: ['양식','이탈리안','스테이크'], tags: ['파스타','피자','스테이크'],       keywords: '영통역 양식, 영통역 파스타, 영통 이탈리안, 수원 스테이크' },
  chicken:  { name: '치킨·분식',        emoji: '🐔', cats: ['치킨'],                  tags: ['통닭','치킨','떡볶이','분식'],       keywords: '영통역 치킨, 영통역 분식, 영통 떡볶이, 수원 치킨' },
  group:    { name: '회식·단체',        emoji: '🎉', cats: [],                        tags: ['단체가능','회식','룸있음'],           keywords: '영통역 회식, 영통역 단체, 영통 회식장소, 수원 단체식사' },
  date:     { name: '데이트·분위기',    emoji: '💑', cats: [],                        tags: ['데이트','뷰맛집','프라이빗'],        keywords: '영통역 데이트, 영통역 분위기, 영통 데이트 코스' },
  budget:   { name: '가성비·혼밥·점심', emoji: '💰', cats: [],                        tags: ['가성비','점심','혼밥가능','점심특선'], keywords: '영통역 점심, 영통역 혼밥, 영통 가성비, 수원 점심' },
  premium:  { name: '접대·파인다이닝',  emoji: '✨', cats: [],                        tags: ['오마카세','예약제','코스요리','프라이빗'], keywords: '영통역 고급, 영통역 접대, 영통 오마카세, 수원 파인다이닝' },
  korean:   { name: '한식·정식·보쌈',   emoji: '🍱', cats: ['한식'],                  tags: ['족발','보쌈','갈비찜','한정식'],     keywords: '영통역 한식, 영통역 한정식, 영통 보쌈, 수원 족발' },
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
    ()=>tags.length?tags.slice(0,3).map(t=>`#${t}`).join('  '):null,
    ()=>cnt>=50?`${cnt.toLocaleString()}명이 다녀간 곳.${tags[0]?' '+tagToLabel(tags[0])+'.':''}`.trim():null,
    ()=>{ const sc=(scene[0]||'').replace(/에$/,''); return sc?`${sc}, 딱 맞는 곳.${tags[0]?' #'+tags[0]:''}`:null },
    ()=>tags[0]?`${tagToLabel(tags[0])}으로 알려진 곳.`:null,
    ()=>tags[0]?`${tagToLabel(tags[0])}으로 알려진 곳.${tags[1]?' #'+tags[1]:''}`:null,
    ()=>{ const moodMap={'기분 좋음':'기분 좋을 때','피곤함':'피곤할 때','스트레스 받음':'스트레스받을 때','혼밥':'혼밥할 때','데이트':'데이트할 때','회식':'회식 자리에','축하':'축하하는 날'}; const m=moods[0]||''; const when=moodMap[m]||(m?m+'일 때':''); return when?`${when} 추천하는 ${r.type||'식당'}.`:null },
    ()=>rt?`⭐${rt}점${cnt>0?' · '+cnt.toLocaleString()+'명 방문':''}`:null,
  ]
  const order = [idx%pool.length, (idx+1)%pool.length, (idx+2)%pool.length, 0, 3, 1]
  for(const i of order){ const r2=pool[i](); if(r2&&r2.trim()) return { reason: r2.trim(), highlight: (tags[0]||'') } }
  return { reason: tags[0]||r.type||'', highlight: tags[0]||'' }
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
        <title>영통역 {catInfo.name} 맛집 추천 {restaurants.length}곳 | 2026 | 오늘뭐먹지</title>
        <meta name="description" content={`영통역·영통 먹자골목 주변 ${catInfo.name} 맛집 ${restaurants.length}개 정리. ${catInfo.keywords}.`} />
        <meta name="keywords" content={catInfo.keywords} />
        <link rel="canonical" href={`https://dinner.ambitstock.com/samsungElectronics/yeongtong/category/${slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": `영통역 ${catInfo.name} 맛집`,
          "url": `https://dinner.ambitstock.com/samsungElectronics/yeongtong/category/${slug}`,
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
            <Link href="/samsungElectronics/yeongtong">영통역</Link> <span>›</span>
            <span style={{ color:'var(--text)' }}>{catInfo.name}</span>
          </div>
        </div>
      </div>

      {/* 히어로 */}
      <section style={{ padding:'40px 16px 28px', background:'var(--surface)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ fontSize:'2.5rem', marginBottom:10 }}>{catInfo.emoji}</div>
          <h1 style={{ fontSize:'clamp(1.4rem, 4vw, 2rem)', fontWeight:900, marginBottom:8 }}>
            영통역 {catInfo.name} 맛집 추천
          </h1>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', marginBottom:20 }}>
            영통역 {catInfo.name} 맛집 <strong style={{ color:'var(--text)' }}>{restaurants.length}곳</strong> 정리
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
              <Link key={i} href={`/samsungElectronics/yeongtong/restaurant/${encodeURIComponent(r.name)}`}
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
            <Link href={`/samsungElectronics/yeongtong/restaurant/${encodeURIComponent(r.name)}`} key={i}>
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
              </div>
            </Link>
          ))}
        </div>

        <article style={{ marginTop:48, padding:'28px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1.1rem', fontWeight:800, marginBottom:16 }}>
            영통역 {catInfo.name} 맛집 선택 가이드
          </h2>

          {slug === 'meat' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 고기구이·삼겹살 맛집은 영통 먹자골목과 영통역 인근 상가에 집중되어 있습니다. 삼성전자 DS사업부 직장인들의 저녁 회식 수요가 높아 대형 홀과 단체석을 갖춘 삼겹살·목살 전문점이 많습니다. 한우 특수부위 전문점도 일부 운영 중이며, 영통 로컬 식당들은 강남 대비 합리적인 가격에 품질 좋은 고기를 제공하는 편입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼겹살 1인분 기준 1만 2천~1만 8천 원, 한우 코스는 1인 3만 5천~6만 원대입니다. 삼성전자 사업부 식당가와 인접한 구역은 점심보다 퇴근 시간대인 오후 6~7시에 혼잡하므로, 팀 단위 회식이라면 예약 후 방문이 편리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/group" style={{ color:'var(--primary)' }}>영통역 회식·단체</Link> · <Link href="/samsungElectronics/yeongtong/category/korean" style={{ color:'var(--primary)' }}>영통역 한식·정식</Link> · <Link href="/samsungElectronics/yeongtong/category/izakaya" style={{ color:'var(--primary)' }}>영통역 이자카야·포차</Link>
            </p>
          </>}

          {slug === 'gukbap' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 국밥·해장·칼국수 맛집은 삼성전자 출근 전 아침 식사와 야근 후 해장 수요를 동시에 충족하는 카테고리입니다. 영통 먹자골목 안쪽과 영통역 인근 골목에 순대국밥·돼지국밥·설렁탕 전문점이 다수 자리하며, 칼국수 겸 국밥을 함께 판매하는 복합 메뉴 식당도 여럿입니다. 수원 지역 특산 전통 국밥인 수원갈비탕을 메뉴에 포함한 식당도 만날 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인분 7천~1만 2천 원으로 가성비가 높은 편입니다. 점심 피크 시간(12~13시)에는 삼성전자 직원들이 몰리는 식당에 웨이팅이 생기므로, 1인 혼밥이라면 카운터석 또는 가장자리 1인석이 있는 곳을 찾는 것이 편리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/budget" style={{ color:'var(--primary)' }}>영통역 가성비·혼밥</Link> · <Link href="/samsungElectronics/yeongtong/category/korean" style={{ color:'var(--primary)' }}>영통역 한식·정식</Link> · <Link href="/samsungElectronics/yeongtong/category/meat" style={{ color:'var(--primary)' }}>영통역 고기구이</Link>
            </p>
          </>}

          {slug === 'izakaya' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 이자카야·포차는 삼성전자 직원들의 퇴근 후 회식 2차 또는 팀 회식 1차로 자주 활용되는 카테고리입니다. 영통 먹자골목 주변에 하이볼·사케·수제맥주를 중심으로 한 카운터 이자카야와 야키토리 전문점, 포장마차 스타일 포차가 고루 분포합니다. 영통 상권은 강남 대비 가격이 낮고 분위기가 부담 없어 직장인 소모임 장소로 인기가 높습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 안주 기준 1만~2만 원, 2인 주류 포함 4만~7만 원대입니다. 주말 저녁에는 예약이 필요한 곳이 있으니 인원이 3인 이상이라면 당일 오전에 예약 여부를 확인하세요. 심야 영업 식당은 가게별로 상이하므로 늦은 2차를 계획한다면 미리 영업 마감 시간을 체크하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/japanese" style={{ color:'var(--primary)' }}>영통역 일식·스시</Link> · <Link href="/samsungElectronics/yeongtong/category/group" style={{ color:'var(--primary)' }}>영통역 회식·단체</Link> · <Link href="/samsungElectronics/yeongtong/category/date" style={{ color:'var(--primary)' }}>영통역 데이트·분위기</Link>
            </p>
          </>}

          {slug === 'japanese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 일식·스시·돈카츠 맛집은 영통 상권에서 가장 빠르게 늘고 있는 카테고리 중 하나입니다. 삼성전자 직원 수요를 배경으로 점심 도시락·규동·돈카츠 중심의 캐주얼 일식 식당과 저녁 오마카세 스시 바가 공존합니다. 강남 오마카세보다 예약 난이도가 낮고 가격도 합리적인 편입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 세트 1만 2천~1만 9천 원, 저녁 오마카세는 1인 6만~14만 원 수준입니다. 접대나 기념일에는 예약 시 개인석·룸 가능 여부를 먼저 확인하세요. 영통역 인근 일식 레스토랑은 주차 공간이 협소한 경우가 있으니 차량 방문 시 미리 확인하는 것이 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/premium" style={{ color:'var(--primary)' }}>영통역 접대·파인다이닝</Link> · <Link href="/samsungElectronics/yeongtong/category/izakaya" style={{ color:'var(--primary)' }}>영통역 이자카야·포차</Link> · <Link href="/samsungElectronics/yeongtong/category/date" style={{ color:'var(--primary)' }}>영통역 데이트·분위기</Link>
            </p>
          </>}

          {slug === 'chinese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 중식·마라탕 맛집은 영통 먹자골목 상가 밀집 구역에 분포합니다. 마라탕 전문점이 꾸준히 늘고 있으며, 점심 짬뽕·짜장 세트를 저렴하게 제공하는 중화요리 식당도 운영 중입니다. 양꼬치 전문점은 저녁 회식 후 2차 또는 소규모 모임 장소로 활용 빈도가 높습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 세트 8천~1만 5천 원, 마라탕 1인 1만~1만 8천 원, 양꼬치 2인 기준 2만 5천~4만 5천 원대입니다. 마라 레벨을 직접 조절할 수 있는 곳과 고정된 맵기로만 제공하는 곳이 다르니, 매운 음식을 잘 못 먹는 동행이 있다면 주문 전 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/group" style={{ color:'var(--primary)' }}>영통역 회식·단체</Link> · <Link href="/samsungElectronics/yeongtong/category/budget" style={{ color:'var(--primary)' }}>영통역 가성비·혼밥</Link> · <Link href="/samsungElectronics/yeongtong/category/korean" style={{ color:'var(--primary)' }}>영통역 한식·정식</Link>
            </p>
          </>}

          {slug === 'western' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 양식·파스타 맛집은 수원 영통 상권에서 비교적 최근에 확장된 카테고리입니다. 파스타·피자 전문점은 영통역 상가 1~2층에 자리하며, 주말 브런치 메뉴를 운영하는 곳도 늘고 있습니다. 스테이크 전문점은 수원 특성상 외곽 도로변에 위치한 경우가 많으며 넓은 주차 공간을 갖추고 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 파스타·피자 1만 2천~2만 원, 저녁 스테이크 코스는 1인 4만~8만 원 수준입니다. 영통 지역 양식 레스토랑은 강남 대비 가격이 낮으면서 음식 퀄리티를 유지하는 편이라 데이트나 소규모 기념일 자리로 활용하기 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/date" style={{ color:'var(--primary)' }}>영통역 데이트·분위기</Link> · <Link href="/samsungElectronics/yeongtong/category/premium" style={{ color:'var(--primary)' }}>영통역 접대·파인다이닝</Link> · <Link href="/samsungElectronics/yeongtong/category/japanese" style={{ color:'var(--primary)' }}>영통역 일식·스시</Link>
            </p>
          </>}

          {slug === 'chicken' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 치킨·분식 맛집은 삼성전자 직원들의 빠른 점심과 퇴근 후 간편 저녁 수요를 충족하는 카테고리입니다. 치킨 전문점 외에 떡볶이·순대·튀김을 함께 파는 분식 전문점과 포장 전문 치킨집이 영통역 인근에 자리합니다. 배달 수요가 높아 홀 매장 운영 여부를 미리 확인하는 것이 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              치킨 1인분 기준 1만 2천~1만 8천 원, 분식 세트 6천~1만 원대입니다. 저녁 치맥 모임을 계획한다면 홀 테이블 수와 좌석 수용 인원을 미리 확인하세요. 영통역 인근 치킨집은 포장 중심으로 운영되는 곳도 있어 홀 착석이 필요하다면 사전에 확인이 필요합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/budget" style={{ color:'var(--primary)' }}>영통역 가성비·혼밥</Link> · <Link href="/samsungElectronics/yeongtong/category/gukbap" style={{ color:'var(--primary)' }}>영통역 국밥·해장</Link> · <Link href="/samsungElectronics/yeongtong/category/izakaya" style={{ color:'var(--primary)' }}>영통역 이자카야·포차</Link>
            </p>
          </>}

          {slug === 'group' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 회식·단체 맛집은 삼성전자 DS사업부 팀 회식 수요에 특화된 카테고리입니다. 영통 먹자골목을 중심으로 삼겹살·이자카야·한식 코스 등 다양한 장르의 단체 식당이 분포하며, 10인 이상 단체석을 갖춘 곳도 다수입니다. 접근성 측면에서는 영통역 출구 인근 식당이 지하철 이용 직원들에게 편리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 기준 2만~3만 5천 원이 영통 회식의 일반적 예산입니다. 룸 예약은 2~3일 전 전화 확인을 권장합니다. 삼성전자 사원 식당 이용 가능 여부가 제한된 기간(연말, 프로젝트 마감 등) 전후에는 인근 식당 수요가 급증하므로 서둘러 예약하는 것이 안전합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/meat" style={{ color:'var(--primary)' }}>영통역 고기구이</Link> · <Link href="/samsungElectronics/yeongtong/category/izakaya" style={{ color:'var(--primary)' }}>영통역 이자카야·포차</Link> · <Link href="/samsungElectronics/yeongtong/category/premium" style={{ color:'var(--primary)' }}>영통역 접대·파인다이닝</Link>
            </p>
          </>}

          {slug === 'date' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 데이트·분위기 맛집은 수원 영통 상권에서 분위기 있는 식사를 원하는 커플과 소규모 모임을 위한 카테고리입니다. 영통 로컬 상권에는 아늑한 인테리어의 이탈리안 레스토랑, 감성적인 분위기의 이자카야, 테이블 간격이 넓은 일식 레스토랑이 자리합니다. 수원 화성이나 광교 호수공원과 함께 연계하는 데이트 코스로도 활용할 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              2인 기준 4만~9만 원 예산으로 코스·세트 메뉴를 선택할 수 있습니다. 주말 저녁 분위기 있는 레스토랑은 예약이 필요한 경우가 많으므로 방문 전 예약 여부를 확인하세요. 영통 지역은 주차 환경이 좋은 편이라 차량 데이트 코스로도 적합합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/western" style={{ color:'var(--primary)' }}>영통역 양식·파스타</Link> · <Link href="/samsungElectronics/yeongtong/category/japanese" style={{ color:'var(--primary)' }}>영통역 일식·스시</Link> · <Link href="/samsungElectronics/yeongtong/category/premium" style={{ color:'var(--primary)' }}>영통역 접대·파인다이닝</Link>
            </p>
          </>}

          {slug === 'budget' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 가성비·혼밥·점심 맛집은 삼성전자 직원들의 빠른 점심 수요에 맞게 회전이 빠르고 가격이 합리적인 식당으로 구성됩니다. 국밥·순두부찌개·제육볶음·김치찌개 정식 등 단품 메뉴 위주이며, 영통 먹자골목 안쪽 이면도로에서 가성비 식당을 집중적으로 찾을 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 단품 7천~1만 2천 원, 런치 세트 1만~1만 5천 원이 이 지역 가성비 기준입니다. 피크 시간(12~12시 30분) 전후로 방문하면 줄이 없이 앉을 수 있는 경우가 많습니다. 카운터석이나 1인 테이블을 갖춘 식당은 혼밥 방문 시 시선 부담 없이 이용 가능합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/gukbap" style={{ color:'var(--primary)' }}>영통역 국밥·해장</Link> · <Link href="/samsungElectronics/yeongtong/category/korean" style={{ color:'var(--primary)' }}>영통역 한식·정식</Link> · <Link href="/samsungElectronics/yeongtong/category/chicken" style={{ color:'var(--primary)' }}>영통역 치킨·분식</Link>
            </p>
          </>}

          {slug === 'premium' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 접대·파인다이닝 식당은 삼성전자 DS사업부 협력사 미팅과 임원급 접대 자리에 활용됩니다. 영통 상권에서 고급 식당으로 꼽히는 오마카세·한정식·스테이크 전문점이 꾸준히 늘고 있으며, 강남 대비 예약 경쟁이 낮고 가격도 합리적입니다. 주차가 편리한 외곽 도로변 레스토랑은 차량 접대 자리에 유리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 코스 기준 7만~16만 원대입니다. 예약은 최소 3~5일 전에 완료하는 것이 안전하며, 중요한 접대 자리라면 룸 또는 개인석 가능 여부와 주차 가능 여부를 예약 시 함께 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/japanese" style={{ color:'var(--primary)' }}>영통역 일식·스시</Link> · <Link href="/samsungElectronics/yeongtong/category/western" style={{ color:'var(--primary)' }}>영통역 양식·파스타</Link> · <Link href="/samsungElectronics/yeongtong/category/date" style={{ color:'var(--primary)' }}>영통역 데이트·분위기</Link>
            </p>
          </>}

          {slug === 'korean' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 한식·정식·보쌈 맛집은 영통 먹자골목과 영통 주거 지역 인근에 고루 분포합니다. 삼성전자 직원 점심 수요에 맞춰 빠른 서비스와 밑반찬을 갖춘 백반식 한식 정식 식당이 많으며, 저녁에는 족발·보쌈·갈비찜 전문점이 소규모 모임을 받습니다. 수원갈비 전통을 잇는 갈비 전문점도 영통 인근에서 찾아볼 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 정식 7천~1만 3천 원, 저녁 족발·보쌈 2인 기준 2만 5천~4만 원대입니다. 한정식 코스나 수원갈비 전문점은 예약이 필요한 경우가 많습니다. 저녁 6인 이상 단체 방문이라면 미리 단체석 확보 여부를 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/yeongtong/category/budget" style={{ color:'var(--primary)' }}>영통역 가성비·혼밥</Link> · <Link href="/samsungElectronics/yeongtong/category/gukbap" style={{ color:'var(--primary)' }}>영통역 국밥·해장</Link> · <Link href="/samsungElectronics/yeongtong/category/group" style={{ color:'var(--primary)' }}>영통역 회식·단체</Link>
            </p>
          </>}

          {!['meat','gukbap','izakaya','japanese','chinese','western','chicken','group','date','budget','premium','korean'].includes(slug) && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              영통역 주변 {catInfo.name} 맛집은 수원 영통·망포 일대에 다양하게 분포되어 있습니다. 각 식당의 영업시간·가격대·특징을 확인하고 방문하세요.
            </p>
          </>}

          <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8 }}>
            날씨·기분·예산을 입력하면 <Link href="/samsungElectronics/yeongtong" style={{ color:'var(--primary)' }}>영통역 AI 맛집 추천</Link>이 {catInfo.name} 포함 전체 카테고리에서 맞춤 식당 3곳을 바로 골라드립니다.
          </p>
        </article>

        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Link href="/samsungElectronics/yeongtong" className="btn btn-ghost">← 영통역 전체 맛집</Link>
          <Link href="/samsungElectronics/yeongtong" className="btn btn-primary">✨ AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
