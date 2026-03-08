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
    .replace(/ (삼성역점|삼성역|삼성동점|삼성점|코엑스점|대치점|선릉점|강남점|삼성본점)$/, '')
    .replace(/ (영통점|영통역점|망포점|수원점|영통본점)$/, '')
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

const CATEGORY_MAP = {
  meat:      { name: '고기구이·한우',       emoji: '🥩',
               cats: ['고기구이'],
               tags: ['한우','갈비','삼겹살','목살','오마카세','짚불구이'],
               keywords: '잠실역 고기집, 방이동 한우, 잠실 삼겹살, 방이동 갈비, 방이동먹자골목 고기' },
  seafood:   { name: '해산물·조개·아구찜',   emoji: '🦪',
               cats: ['해산물'],
               tags: ['조개찜','아구찜','물회','쭈꾸미','활문어','해산물'],
               keywords: '잠실역 해산물, 방이동 조개구이, 잠실 아구찜, 방이동 물회, 잠실 활문어' },
  gopchang:  { name: '곱창·막창·내장',      emoji: '🫀',
               cats: [],
               tags: ['곱창','막창','소곱창','내장','돼지곱창'],
               keywords: '잠실역 곱창, 방이동 막창, 잠실 소곱창, 방이동먹자골목 곱창' },
  izakaya:   { name: '이자카야·포차',        emoji: '🏮',
               cats: ['이자카야','야장'],
               tags: ['포차감성','수제맥주','전골','한식주점','야장'],
               keywords: '잠실역 이자카야, 방이동 포차, 잠실 술집, 방이동먹자골목 이자카야' },
  japanese:  { name: '일식·스시·오마카세',   emoji: '🍣',
               cats: ['일식'],
               tags: ['스시','사시미','규동','후토마끼','오마카세','일식다이닝','연어'],
               keywords: '잠실역 일식, 방이동 스시, 잠실 오마카세, 잠실 일식당, 방이동 연어덮밥' },
  gukbap:    { name: '국밥·칼국수·해장',     emoji: '🥣',
               cats: ['국밥','칼국수'],
               tags: ['해장','감자탕','칼국수','순대국밥','설렁탕'],
               keywords: '잠실역 국밥, 방이동 해장국, 잠실 칼국수, 방이동 감자탕, 잠실 순대국밥' },
  chinese:   { name: '중식·마라·양꼬치',     emoji: '🍜',
               cats: ['중식','훠궈'],
               tags: ['마라탕','마라샹궈','양꼬치','짜장','짬뽕','마라'],
               keywords: '잠실역 중식, 방이동 마라탕, 잠실 훠궈, 방이동 양꼬치, 잠실 짬뽕' },
  western:   { name: '양식·파스타·피자',     emoji: '🍝',
               cats: ['양식','이탈리안'],
               tags: ['파스타','피자','스테이크','화덕피자','이탈리안'],
               keywords: '잠실역 파스타, 방이동 이탈리안, 잠실 스테이크, 방이동 피자, 잠실 양식' },
  korean:    { name: '한식·갈비찜·족발',     emoji: '🍱',
               cats: ['한식'],
               tags: ['갈비찜','족발','보쌈','한정식','백반','부대찌개'],
               keywords: '잠실역 한식, 방이동 갈비찜, 잠실 족발, 방이동 한정식, 방이동 보쌈' },
  group:     { name: '회식·단체모임',         emoji: '🎉',
               cats: [],
               tags: ['단체가능','회식','주차가능'],
               keywords: '잠실역 회식장소, 방이동 단체식사, 잠실 회식, 방이동 단체모임' },
  date:      { name: '데이트·분위기',         emoji: '💑',
               cats: [],
               tags: ['데이트','뷰맛집','인스타감성','프라이빗','인스타'],
               keywords: '잠실역 데이트, 방이동 분위기맛집, 잠실 커플식당, 석촌호수 맛집' },
  budget:    { name: '가성비·혼밥·점심',      emoji: '💰',
               cats: [],
               tags: ['가성비','점심','혼밥가능'],
               keywords: '잠실역 점심 가성비, 방이동 혼밥, 잠실 저렴한 맛집, 방이동 점심특선' },
  premium:   { name: '프리미엄·오마카세',      emoji: '✨',
               cats: [],
               tags: ['오마카세','예약제','미슐랭','프라이빗','고급'],
               keywords: '잠실 오마카세, 방이동 한우 오마카세, 잠실 고급맛집, 방이동 미슐랭' },
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
        <link rel="canonical" href={`https://dinner.ambitstock.com/samsungElectronics/yeongtong/category/${slug}`} />
      </Head>

      {/* 헤더 */}
      <div style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'12px 16px' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">홈</Link> <span>›</span>
            <Link href="/samsungElectronics/yeongtong">잠실역</Link> <span>›</span>
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
            <Link href="/samsungElectronics/yeongtong" style={{ color:'var(--primary)' }}>잠실역 AI 맛집 추천</Link>을 이용하면
            오늘 날씨, 기분, 예산에 맞는 {catInfo.name} 맛집을 바로 추천받을 수 있습니다.
          </p>
        </article>

        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Link href="/samsungElectronics/yeongtong" className="btn btn-ghost">← 잠실역 전체 맛집</Link>
          <Link href="/samsungElectronics/yeongtong" className="btn btn-primary">✨ AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
