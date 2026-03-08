import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import restaurants from '../../../../data/samseong'

const CATEGORY_MAP = {
  gukbap:   { name: '국밥·해장국', emoji: '🥣', cats: ['국밥','국물'], keywords: '삼성역 국밥, 삼성역 해장국, 코엑스 국밥, 삼성동 해장' },
  meat:     { name: '고기구이·한우', emoji: '🥩', cats: ['고기구이','한식'], keywords: '삼성역 한우, 삼성역 고기집, 삼성동 BBQ, 코엑스 고기구이' },
  izakaya:  { name: '이자카야·일식', emoji: '🏮', cats: ['이자카야','일식'], keywords: '삼성역 이자카야, 삼성역 일식, 삼성동 술집, 코엑스 이자카야' },
  chinese:  { name: '중식', emoji: '🍜', cats: ['중식','훠궈'], keywords: '삼성역 중식당, 삼성역 짬뽕, 코엑스 중식, 삼성동 마라탕' },
  western:  { name: '이탈리안·양식·스테이크', emoji: '🍝', cats: ['양식','이탈리안','스테이크'], keywords: '삼성역 이탈리안, 삼성역 파스타, 코엑스 스테이크, 삼성동 양식' },
  group:    { name: '회식·단체', emoji: '🎉', cats: [], tags: ['회식','단체석'], keywords: '삼성역 회식장소, 코엑스 단체식사, 삼성동 회식, 삼성역 프라이빗룸' },
  chicken:  { name: '치킨·야장', emoji: '🐔', cats: ['치킨','야장'], keywords: '삼성역 치킨, 삼성역 야장, 삼성동 포차, 코엑스 치킨' },
  japanese: { name: '일식·스시', emoji: '🍣', cats: ['이자카야','일식'], keywords: '삼성역 일식, 삼성역 스시, 삼성동 초밥, 코엑스 오마카세' },
  exit4:    { name: '4번출구 근처', emoji: '🚇', cats: [], exit4Only: true, keywords: '삼성역 4번출구 맛집, 삼성역 4번출구 식당, 대치동 맛집, 강남경찰서 맛집' },
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
        rv: r.rv || [], lat: r.lat, lng: r.lng
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
    .replace(/ (잠실점|잠실역점|방이점|송파점|석촌점|잠실새내점|잠실본점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const coord = (lat && lng) ? `?c=${lng},${lat},17,0,0,0,dh` : ''
  return `https://map.naver.com/v5/search/${encodeURIComponent(cleaned)}${coord}`
}

function DiceOverlay({ onDone }) {
  const DICE = ['⚀','⚁','⚂','⚃','⚄','⚅','🎲']
  const [face, setFace] = useState('🎲')
  useEffect(() => {
    let cnt = 0
    const id = setInterval(() => {
      setFace(DICE[Math.floor(Math.random()*DICE.length)])
      cnt++
      if (cnt >= 14) { clearInterval(id); setTimeout(onDone, 200) }
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
              <span style={{ marginLeft:'auto', fontSize:'.72rem', color:'var(--muted)', opacity:.6 }}>탭해서 상세보기 →</span>
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
        <title>삼성역 {catInfo.name} 맛집 추천 {restaurants.length}선 | 오늘뭐먹지</title>
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
            "name": r.name,
            "description": `${r.type} | ⭐${r.rt} (${r.cnt?.toLocaleString()}리뷰) | ${r.addr}`,
            "url": `https://dinner.ambitstock.com/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`
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
                {r.rv?.[0] && (
                  <div style={{ fontSize:'.75rem', color:'var(--muted)', lineHeight:1.4, marginTop:6 }}>
                    💬 {r.rv[0].replace(/ \(실제 Google 리뷰.*?\)/, '').slice(0, 60)}...
                  </div>
                )}
                <div style={{ marginTop:8 }}>
                    </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO 콘텐츠 */}
        <article style={{ marginTop:48, padding:'28px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1.1rem', fontWeight:800, marginBottom:12 }}>
            삼성역 {catInfo.name} 맛집 선택 가이드
          </h2>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', lineHeight:1.8, marginBottom:10 }}>
            삼성역 주변 {catInfo.name} 맛집은 코엑스몰 내부와 테헤란로 골목, 삼성동 이면도로까지
            다양하게 분포되어 있습니다. 평점과 리뷰 수를 기준으로 {restaurants.length}곳을 엄선했으며,
            각 식당의 영업시간·가격대·특징을 확인하고 방문하세요.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', lineHeight:1.8 }}>
            <Link href="/dinner/samseong" style={{ color:'var(--primary)' }}>삼성역 AI 맛집 추천</Link>을 이용하면
            오늘 날씨, 기분, 예산에 맞는 {catInfo.name} 맛집을 바로 추천받을 수 있습니다.
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
