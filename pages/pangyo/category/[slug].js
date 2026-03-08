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
      }))
    }
  }
}

function buildCatReason(r, idx) {
  function cleanRv(v) {
    return (v||'').replace(/\[\d+\.?\d*★\]\s*/g,'').replace(/\(실제 Google 리뷰.*?\)/g,'').trim().slice(0,70)
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
        <title>판교역 {catInfo.name} 맛집 추천 {restaurants.length}선 | 오늘뭐먹지</title>
        <meta name="description" content={`판교역·판교테크노밸리·백현동 주변 ${catInfo.name} 맛집 ${restaurants.length}개 정리. ${catInfo.keywords}.`} />
        <meta name="keywords" content={catInfo.keywords} />
        <link rel="canonical" href={`https://dinner.ambitstock.com/pangyo/category/${slug}`} />
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
                    💬 {r.rv[0].replace(/\[\d+\.?\d*★\]\s*/, '').slice(0, 60)}...
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <article style={{ marginTop:48, padding:'28px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1.1rem', fontWeight:800, marginBottom:12 }}>
            판교역 {catInfo.name} 맛집 선택 가이드
          </h2>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', lineHeight:1.8, marginBottom:10 }}>
            판교역 주변 {catInfo.name} 맛집은 판교테크노밸리 알파/베타, 백현동 카페거리, 아브뉴프랑까지
            다양하게 분포되어 있습니다. 평점과 리뷰 수를 기준으로 {restaurants.length}곳을 엄선했습니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', lineHeight:1.8 }}>
            <Link href="/pangyo" style={{ color:'var(--primary)' }}>판교역 AI 맛집 추천</Link>을 이용하면
            오늘 날씨, 기분, 예산에 맞는 {catInfo.name} 맛집을 바로 추천받을 수 있습니다.
          </p>
        </article>

        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Link href="/pangyo" className="btn btn-ghost">← 판교역 전체 맛집</Link>
          <Link href="/pangyo" className="btn btn-primary">✨ AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
