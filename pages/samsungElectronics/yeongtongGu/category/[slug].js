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
        <title>잠실역 {catInfo.name} 맛집 추천 {restaurants.length}선 | 오늘뭐먹지</title>
        <meta name="description" content={`잠실역·방이동·석촌호수 주변 ${catInfo.name} 맛집 ${restaurants.length}개 정리. ${catInfo.keywords}.`} />
        <meta name="keywords" content={catInfo.keywords} />
        <link rel="canonical" href={`https://dinner.ambitstock.com/samsungElectronics/yeongtongGu/category/${slug}`} />
      </Head>

      {/* 헤더 */}
      <div style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'12px 16px' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">홈</Link> <span>›</span>
            <Link href="/samsungElectronics/yeongtongGu">잠실역</Link> <span>›</span>
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
                    💬 {r.rv[0].replace(/ \(실제 Google 리뷰.*?\)/, '').slice(0, 60)}...
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <article style={{ marginTop:48, padding:'28px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1.1rem', fontWeight:800, marginBottom:12 }}>
            잠실역 {catInfo.name} 맛집 선택 가이드
          </h2>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', lineHeight:1.8, marginBottom:10 }}>
            잠실역 주변 {catInfo.name} 맛집은 방이동 먹자골목, 석촌호수 주변, 롯데타워 인근까지
            다양하게 분포되어 있습니다. 평점과 리뷰 수를 기준으로 {restaurants.length}곳을 엄선했습니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', lineHeight:1.8 }}>
            <Link href="/samsungElectronics/yeongtongGu" style={{ color:'var(--primary)' }}>영통구청 AI 맛집 추천</Link>을 이용하면
            오늘 날씨, 기분, 예산에 맞는 {catInfo.name} 맛집을 바로 추천받을 수 있습니다.
          </p>
        </article>

        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Link href="/samsungElectronics/yeongtongGu" className="btn btn-ghost">← 잠실역 전체 맛집</Link>
          <Link href="/samsungElectronics/yeongtongGu" className="btn btn-primary">✨ AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
