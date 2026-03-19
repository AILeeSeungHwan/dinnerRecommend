import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import restaurants from '../../../../data/mangpo'


// ── 주사위 오버레이 ──────────────────────────────────────────────
// 네이버 지도 URL - 이름에서 지역 suffix 제거 + 좌표 중심 검색
// 가격 구분자 포맷: "25000~40000" → "25,000~40,000"
function fmtPrice(p) {
  if (!p) return ''
  return p.split('~').map(n => parseInt(n).toLocaleString('ko-KR')).join('~')
}

function naverMapUrl(name, lat, lng) {
  const cleaned = name
    .replace(/ (망포점|영통점|수원점|망포역점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const hasRegion = /(망포|영통|수원|삼성전자)/.test(cleaned)
  const query = hasRegion ? cleaned : cleaned + ' 망포'
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
  meat:     { name: '고기구이·삼겹살',  emoji: '🥩', cats: ['고기구이'],              tags: ['한우','갈비','삼겹살','목살'],         keywords: '망포역 고기, 망포역 삼겹살, 영통 한우, 수원 고기구이' },
  gukbap:   { name: '국밥·해장·칼국수', emoji: '🥣', cats: ['국밥','국물','칼국수'],  tags: ['해장','설렁탕','순대국밥'],           keywords: '망포역 국밥, 망포역 해장국, 영통 칼국수, 수원 해장' },
  izakaya:  { name: '이자카야·포차',    emoji: '🏮', cats: ['이자카야','야장'],       tags: ['포차','하이볼','수제맥주'],           keywords: '망포역 이자카야, 망포역 포차, 영통 술집, 수원 이자카야' },
  japanese: { name: '일식·스시·돈카츠', emoji: '🍣', cats: ['일식'],                  tags: ['스시','사시미','돈카츠','규동'],      keywords: '망포역 일식, 망포역 스시, 영통 돈카츠, 수원 일식' },
  chinese:  { name: '중식·마라탕',      emoji: '🍜', cats: ['중식','훠궈'],           tags: ['마라탕','양꼬치','짬뽕'],            keywords: '망포역 중식, 망포역 마라탕, 영통 짬뽕, 수원 양꼬치' },
  western:  { name: '양식·파스타',      emoji: '🍝', cats: ['양식','이탈리안','스테이크'], tags: ['파스타','피자','스테이크'],       keywords: '망포역 양식, 망포역 파스타, 영통 이탈리안, 수원 스테이크' },
  chicken:  { name: '치킨·분식',        emoji: '🐔', cats: ['치킨'],                  tags: ['통닭','치킨','떡볶이','분식'],       keywords: '망포역 치킨, 망포역 분식, 영통 떡볶이, 수원 치킨' },
  group:    { name: '회식·단체',        emoji: '🎉', cats: [],                        tags: ['단체가능','회식','룸있음'],           keywords: '망포역 회식, 망포역 단체, 영통 회식장소, 수원 단체식사' },
  date:     { name: '데이트·분위기',    emoji: '💑', cats: [],                        tags: ['데이트','뷰맛집','프라이빗'],        keywords: '망포역 데이트, 망포역 분위기, 영통 데이트 코스' },
  budget:   { name: '가성비·혼밥·점심', emoji: '💰', cats: [],                        tags: ['가성비','점심','혼밥가능','점심특선'], keywords: '망포역 점심, 망포역 혼밥, 영통 가성비, 수원 점심' },
  premium:  { name: '접대·파인다이닝',  emoji: '✨', cats: [],                        tags: ['오마카세','예약제','코스요리','프라이빗'], keywords: '망포역 고급, 망포역 접대, 영통 오마카세, 수원 파인다이닝' },
  korean:   { name: '한식·정식·보쌈',   emoji: '🍱', cats: ['한식'],                  tags: ['족발','보쌈','갈비찜','한정식'],     keywords: '망포역 한식, 망포역 한정식, 영통 보쌈, 수원 족발' },
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
        <title>망포역 {catInfo.name} 맛집 추천 {restaurants.length}곳 | 2026 | 오늘뭐먹지</title>
        <meta name="description" content={`망포역·삼성전자 생활가전 주변 ${catInfo.name} 맛집 ${restaurants.length}개 정리. ${catInfo.keywords}.`} />
        <meta name="keywords" content={catInfo.keywords} />
        <link rel="canonical" href={`https://dinner.ambitstock.com/samsungElectronics/mangpo/category/${slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": `망포역 ${catInfo.name} 맛집`,
          "url": `https://dinner.ambitstock.com/samsungElectronics/mangpo/category/${slug}`,
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
            <Link href="/samsungElectronics/mangpo">망포역</Link> <span>›</span>
            <span style={{ color:'var(--text)' }}>{catInfo.name}</span>
          </div>
        </div>
      </div>

      {/* 히어로 */}
      <section style={{ padding:'40px 16px 28px', background:'var(--surface)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ fontSize:'2.5rem', marginBottom:10 }}>{catInfo.emoji}</div>
          <h1 style={{ fontSize:'clamp(1.4rem, 4vw, 2rem)', fontWeight:900, marginBottom:8 }}>
            망포역 {catInfo.name} 맛집 추천
          </h1>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', marginBottom:20 }}>
            망포역 {catInfo.name} 맛집 <strong style={{ color:'var(--text)' }}>{restaurants.length}곳</strong> 정리
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
              <Link key={i} href={`/samsungElectronics/mangpo/restaurant/${encodeURIComponent(r.name)}`}
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
            <Link href={`/samsungElectronics/mangpo/restaurant/${encodeURIComponent(r.name)}`} key={i}>
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
            망포역 {catInfo.name} 맛집 선택 가이드
          </h2>

          {slug === 'meat' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 고기구이·삼겹살 맛집은 망포역 인근 상가와 영통 방향 이면도로에 분포합니다. 삼성전자 생활가전사업부 직원들의 퇴근 후 회식 수요를 받는 삼겹살·목살 전문점이 주를 이루며, 비교적 조용한 로컬 분위기에서 부담 없이 식사할 수 있습니다. 영통역 대비 유동인구가 적어 웨이팅 없이 앉을 수 있는 경우가 많습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              삼겹살 1인분 기준 1만 2천~1만 7천 원, 2인 이상 고기 코스는 3만~5만 원대입니다. 망포 상권은 영통보다 상대적으로 작은 편이라, 특정 식당에 예약이 집중될 수 있습니다. 금요일 저녁이나 삼성전자 행사 시즌에는 예약을 미리 해두는 것이 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/group" style={{ color:'var(--primary)' }}>망포역 회식·단체</Link> · <Link href="/samsungElectronics/mangpo/category/korean" style={{ color:'var(--primary)' }}>망포역 한식·정식</Link> · <Link href="/samsungElectronics/mangpo/category/izakaya" style={{ color:'var(--primary)' }}>망포역 이자카야·포차</Link>
            </p>
          </>}

          {slug === 'gukbap' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 국밥·해장·칼국수 맛집은 망포역 출구 인근과 영통 방향 이면도로에 자리합니다. 삼성전자 생활가전 직원들의 아침·점심·야근 후 해장을 모두 해결할 수 있는 국밥 전문점이 망포 상권에서도 확인됩니다. 주거 지역 인근 특성상 가정식 느낌의 백반·정식 식당과 함께 운영되는 경우가 많습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인분 7천~1만 2천 원으로 가성비가 높습니다. 망포역 상권은 영통역보다 점심 피크가 짧아 12시 10분 이후에는 비교적 여유롭게 자리를 잡을 수 있습니다. 1인 혼밥 시에는 카운터석이 있는 국밥 전문점을 우선으로 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/budget" style={{ color:'var(--primary)' }}>망포역 가성비·혼밥</Link> · <Link href="/samsungElectronics/mangpo/category/korean" style={{ color:'var(--primary)' }}>망포역 한식·정식</Link> · <Link href="/samsungElectronics/mangpo/category/meat" style={{ color:'var(--primary)' }}>망포역 고기구이</Link>
            </p>
          </>}

          {slug === 'izakaya' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 이자카야·포차는 망포 상권의 로컬 분위기 속에서 소규모로 운영되는 곳들이 주를 이룹니다. 하이볼이나 사케를 중심으로 한 카운터 이자카야와 야키토리 전문점이 영통 방향 이면도로에 위치합니다. 영통역 이자카야보다 손님 회전이 적어 조용한 분위기를 선호하는 방문객에게 적합합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 안주 기준 1만~1만 8천 원, 2인 주류 포함 4만~6만 원대입니다. 망포역 이자카야 일부는 소규모 운영으로 인원 제한이 있을 수 있으니, 4인 이상 방문 시 사전 예약이나 전화 확인이 필요합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/japanese" style={{ color:'var(--primary)' }}>망포역 일식·스시</Link> · <Link href="/samsungElectronics/mangpo/category/group" style={{ color:'var(--primary)' }}>망포역 회식·단체</Link> · <Link href="/samsungElectronics/mangpo/category/date" style={{ color:'var(--primary)' }}>망포역 데이트·분위기</Link>
            </p>
          </>}

          {slug === 'japanese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 일식·스시·돈카츠 맛집은 영통·망포 상권 전반에 걸쳐 점차 늘고 있는 카테고리입니다. 점심 돈카츠·규동 단품 식당이 삼성전자 직원들의 빠른 점심을 담당하며, 저녁에는 스시 바·이자카야 겸 일식 레스토랑이 소모임 자리로 활용됩니다. 영통역 주변 일식 식당까지 함께 선택 폭을 넓히면 다양한 옵션을 비교할 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 단품 1만 2천~1만 8천 원, 저녁 스시 코스는 1인 6만~12만 원 수준입니다. 접대 또는 기념일 방문 시에는 반드시 예약 후 개인석 가능 여부를 확인하세요. 망포 지역은 주차 환경이 좋은 편이라 차량 방문에 유리합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/premium" style={{ color:'var(--primary)' }}>망포역 접대·파인다이닝</Link> · <Link href="/samsungElectronics/mangpo/category/izakaya" style={{ color:'var(--primary)' }}>망포역 이자카야·포차</Link> · <Link href="/samsungElectronics/mangpo/category/date" style={{ color:'var(--primary)' }}>망포역 데이트·분위기</Link>
            </p>
          </>}

          {slug === 'chinese' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 중식·마라탕 맛집은 망포역 상가 인근과 영통 방향으로 이동하는 대로변에 자리합니다. 점심 짬뽕·짜장 세트를 저렴하게 제공하는 중화 식당과 마라탕 전문점이 운영 중입니다. 양꼬치는 저녁 소모임 자리로 주로 활용되며, 영통역 방향 이면도로의 양꼬치 전문점도 접근 거리 내에 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 세트 8천~1만 4천 원, 마라탕 1인 1만~1만 8천 원대입니다. 망포역 중식 식당 수는 영통역 대비 적은 편이므로, 원하는 스타일의 식당이 없다면 영통역 방향 이동을 고려하세요. 훠궈 모임은 영통역 쪽 훠궈 전문점을 이용하는 것이 선택지가 넓습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/budget" style={{ color:'var(--primary)' }}>망포역 가성비·혼밥</Link> · <Link href="/samsungElectronics/mangpo/category/group" style={{ color:'var(--primary)' }}>망포역 회식·단체</Link> · <Link href="/samsungElectronics/mangpo/category/korean" style={{ color:'var(--primary)' }}>망포역 한식·정식</Link>
            </p>
          </>}

          {slug === 'western' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 양식·파스타 맛집은 망포·영통 상권에서 가장 빠르게 성장 중인 카테고리 중 하나입니다. 망포역 인근 상가에 파스타·피자 캐주얼 레스토랑이 자리하며, 주말 브런치 메뉴를 제공하는 곳도 증가하는 추세입니다. 스테이크를 원한다면 영통 방향 도로변 스테이크 전문점으로 이동하는 것이 선택지가 다양합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 파스타·피자 1만 2천~2만 원, 저녁 코스 레스토랑은 1인 4만~7만 원 수준입니다. 망포역 지역 양식 레스토랑은 주차 공간이 넉넉한 편이어서 차량 데이트 방문에 편리합니다. 기념일·소규모 접대 자리에는 예약 가능 여부와 테이블 배치를 미리 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/date" style={{ color:'var(--primary)' }}>망포역 데이트·분위기</Link> · <Link href="/samsungElectronics/mangpo/category/premium" style={{ color:'var(--primary)' }}>망포역 접대·파인다이닝</Link> · <Link href="/samsungElectronics/mangpo/category/japanese" style={{ color:'var(--primary)' }}>망포역 일식·스시</Link>
            </p>
          </>}

          {slug === 'chicken' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 치킨·분식 맛집은 삼성전자 생활가전사업부 직원들의 빠른 점심과 퇴근 후 간단한 저녁 수요를 충족합니다. 치킨 전문점은 포장·배달 중심으로 운영되는 곳이 많으며, 홀 착석 가능 여부를 사전에 확인하는 것이 좋습니다. 분식 전문점은 망포역 상가 1층에서 떡볶이·순대·튀김을 함께 판매합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              치킨 기준 1인분 1만 2천~1만 8천 원, 분식 세트 6천~1만 원대입니다. 망포역 치킨집은 소규모 운영이 많아 홀 테이블 수가 적습니다. 3인 이상 저녁 치맥 자리를 계획한다면 홀 좌석 수를 미리 확인하거나 영통역 방향의 치킨 홀 전문점을 고려하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/budget" style={{ color:'var(--primary)' }}>망포역 가성비·혼밥</Link> · <Link href="/samsungElectronics/mangpo/category/gukbap" style={{ color:'var(--primary)' }}>망포역 국밥·해장</Link> · <Link href="/samsungElectronics/mangpo/category/izakaya" style={{ color:'var(--primary)' }}>망포역 이자카야·포차</Link>
            </p>
          </>}

          {slug === 'group' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 회식·단체 맛집은 삼성전자 생활가전사업부의 팀·부서 회식 수요를 중심으로 형성됩니다. 규모는 영통역보다 작지만, 삼겹살·이자카야·한식 정식 중심의 단체석 식당이 망포역 인근에 운영 중입니다. 단체 인원이 많다면 영통역 방향 대형 홀 식당을 함께 검토하는 것이 선택 폭을 넓힐 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 기준 2만~3만 5천 원이 망포 회식의 일반적 예산입니다. 10인 이상 단체 모임은 식당 측과 사전 협의를 통해 단체 메뉴와 좌석 배치를 확인하는 것이 중요합니다. 식당 선택이 제한적이라면 영통·망포 두 지역을 함께 고려하면 좋습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/meat" style={{ color:'var(--primary)' }}>망포역 고기구이</Link> · <Link href="/samsungElectronics/mangpo/category/izakaya" style={{ color:'var(--primary)' }}>망포역 이자카야·포차</Link> · <Link href="/samsungElectronics/mangpo/category/korean" style={{ color:'var(--primary)' }}>망포역 한식·정식</Link>
            </p>
          </>}

          {slug === 'date' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 데이트·분위기 맛집은 조용한 망포 로컬 상권의 특성을 살린 아늑하고 소박한 분위기의 레스토랑들입니다. 대형 상업지구의 번잡함 없이 여유 있게 식사를 즐길 수 있다는 점이 특징이며, 파스타·이탈리안·일식 레스토랑이 소규모로 운영 중입니다. 수원 화성이나 광교 호수공원을 방문한 뒤 식사 장소로 활용하기에도 좋은 위치입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              2인 기준 4만~8만 원 예산으로 여유 있는 식사가 가능합니다. 분위기 있는 식당의 수가 많지 않으므로 주말 저녁에는 예약 후 방문하는 것이 좋습니다. 차량 접근이 편리한 지역이라 드라이브 데이트 코스로도 활용하기 적합합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/western" style={{ color:'var(--primary)' }}>망포역 양식·파스타</Link> · <Link href="/samsungElectronics/mangpo/category/japanese" style={{ color:'var(--primary)' }}>망포역 일식·스시</Link> · <Link href="/samsungElectronics/mangpo/category/premium" style={{ color:'var(--primary)' }}>망포역 접대·파인다이닝</Link>
            </p>
          </>}

          {slug === 'budget' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 가성비·혼밥·점심 맛집은 삼성전자 생활가전사업부 직원들의 빠른 점심 수요를 반영해 회전 빠르고 가격이 합리적인 식당들로 구성됩니다. 국밥·정식·칼국수 등 단품 메뉴 식당이 주를 이루며, 망포역 주변 소규모 상가에 분포합니다. 영통역 대비 경쟁이 적어 피크 시간에도 비교적 여유 있게 앉을 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 단품 7천~1만 2천 원, 런치 세트 1만~1만 5천 원이 망포 가성비 기준입니다. 망포 상권 식당은 가게 수가 적어 특정 식당에 집중 현상이 생길 수 있습니다. 선호 식당이 있다면 오픈 시간에 맞춰 방문하는 것이 안전합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/gukbap" style={{ color:'var(--primary)' }}>망포역 국밥·해장</Link> · <Link href="/samsungElectronics/mangpo/category/korean" style={{ color:'var(--primary)' }}>망포역 한식·정식</Link> · <Link href="/samsungElectronics/mangpo/category/chicken" style={{ color:'var(--primary)' }}>망포역 치킨·분식</Link>
            </p>
          </>}

          {slug === 'premium' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 접대·파인다이닝 식당은 삼성전자 생활가전사업부 협력사 접대와 팀장·임원급 회식에 활용됩니다. 망포 상권에서 고급 식당으로 분류되는 스시 바·한정식·스테이크 전문점이 소수 운영 중이며, 더 넓은 선택이 필요하다면 영통역 방향 식당을 함께 검토하는 것이 좋습니다. 접근성과 주차 편의를 동시에 고려하면 차량 접대 자리에 유리한 위치입니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              1인 코스 기준 7만~15만 원대입니다. 예약은 최소 3~5일 전에 완료하는 것이 안전하며, 중요한 자리일수록 룸 또는 개인석 가능 여부를 반드시 미리 확인하세요.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/japanese" style={{ color:'var(--primary)' }}>망포역 일식·스시</Link> · <Link href="/samsungElectronics/mangpo/category/western" style={{ color:'var(--primary)' }}>망포역 양식·파스타</Link> · <Link href="/samsungElectronics/mangpo/category/group" style={{ color:'var(--primary)' }}>망포역 회식·단체</Link>
            </p>
          </>}

          {slug === 'korean' && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 한식·정식·보쌈 맛집은 망포 주거 지역 인근에 가정식 스타일의 한식 정식 식당들이 자리합니다. 삼성전자 직원 점심 수요를 받는 백반·정식 식당이 망포역 상가 주변에 운영 중이며, 저녁에는 족발·보쌈·갈비찜을 제공하는 한식 전문점이 소규모 모임 수요를 담당합니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              점심 정식 7천~1만 3천 원, 저녁 족발·보쌈 2인 기준 2만 5천~4만 원대입니다. 망포 한식 식당은 주거 지역 특성상 단골손님 중심으로 운영되는 경우가 많아 조용하고 편안한 분위기에서 식사할 수 있습니다.
            </p>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:16 }}>
              관련 카테고리: <Link href="/samsungElectronics/mangpo/category/budget" style={{ color:'var(--primary)' }}>망포역 가성비·혼밥</Link> · <Link href="/samsungElectronics/mangpo/category/gukbap" style={{ color:'var(--primary)' }}>망포역 국밥·해장</Link> · <Link href="/samsungElectronics/mangpo/category/group" style={{ color:'var(--primary)' }}>망포역 회식·단체</Link>
            </p>
          </>}

          {!['meat','gukbap','izakaya','japanese','chinese','western','chicken','group','date','budget','premium','korean'].includes(slug) && <>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8, marginBottom:10 }}>
              망포역 주변 {catInfo.name} 맛집은 수원 영통·망포 일대에 다양하게 분포되어 있습니다. 각 식당의 영업시간·가격대·특징을 확인하고 방문하세요.
            </p>
          </>}

          <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.8 }}>
            날씨·기분·예산을 입력하면 <Link href="/samsungElectronics/mangpo" style={{ color:'var(--primary)' }}>망포역 AI 맛집 추천</Link>이 {catInfo.name} 포함 전체 카테고리에서 맞춤 식당 3곳을 바로 골라드립니다.
          </p>
        </article>

        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Link href="/samsungElectronics/mangpo" className="btn btn-ghost">← 망포역 전체 맛집</Link>
          <Link href="/samsungElectronics/mangpo" className="btn btn-primary">✨ AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
