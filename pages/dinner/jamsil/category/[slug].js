import Head from 'next/head'
import Link from 'next/link'
import restaurants from '../../../../data/jamsil'

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
        priceRange: r.priceRange || null,
        rv: r.rv || []
      }))
    }
  }
}

export default function CategoryPage({ slug, catInfo, restaurants }) {
  const sorted = [...restaurants].sort((a, b) => b.rt - a.rt)

  return (
    <>
      <Head>
        <title>잠실역 {catInfo.name} 맛집 추천 {restaurants.length}선 | 강남뭐먹</title>
        <meta name="description" content={`방이동·석촌호수·잠실 주변 ${catInfo.name} 맛집 ${restaurants.length}개 정리. ${catInfo.keywords}.`} />
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
            "name": r.name,
            "description": `${r.type} | ⭐${r.rt} (${r.cnt?.toLocaleString()}리뷰) | ${r.addr}`,
            "url": `https://dinner.ambitstock.com/dinner/jamsil/restaurant/${encodeURIComponent(r.name)}`
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
          <p style={{ color:'var(--muted)', fontSize:'.9rem' }}>
            방이동·석촌호수·올림픽로 주변 {catInfo.name} 맛집{' '}
            <strong style={{ color:'var(--text)' }}>{restaurants.length}곳</strong> 정리
          </p>
        </div>
      </section>

      <div className="container" style={{ padding:'24px 16px' }}>

        {restaurants.length === 0 ? (
          <div style={{ textAlign:'center', padding:'60px 0', color:'var(--muted)' }}>
            <div style={{ fontSize:'2.5rem', marginBottom:12 }}>🍽️</div>
            <p style={{ marginBottom:16 }}>해당 카테고리 식당을 준비 중입니다.</p>
            <Link href="/dinner/jamsil" style={{ color:'var(--primary)', fontWeight:600 }}>← 잠실역 전체 목록 보기</Link>
          </div>
        ) : (
          <>
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
                      {r.priceRange && <span className="tag price">💰 {r.priceRange}원</span>}
                    </div>
                    <div className="card-addr" style={{ marginBottom:6 }}>📍 {r.addr}</div>
                    {r.rv?.[0] && (
                      <div style={{ fontSize:'.75rem', color:'var(--muted)', lineHeight:1.4, marginTop:6 }}>
                        💬 {String(r.rv[0]).replace(/^\[[0-9.★]+\]\s*/, '').slice(0, 55)}...
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* SEO 콘텐츠 */}
        <article style={{ marginTop:48, padding:'28px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1.1rem', fontWeight:800, marginBottom:12 }}>
            잠실역 {catInfo.name} 맛집 선택 가이드
          </h2>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', lineHeight:1.8, marginBottom:10 }}>
            잠실역 {catInfo.name} 맛집은 방이동 먹자골목, 석촌호수 송리단길,
            올림픽로32길 일대에 폭넓게 분포되어 있습니다.
            평점·리뷰 수 기준으로 {restaurants.length}곳을 엄선했습니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.9rem', lineHeight:1.8 }}>
            <Link href="/dinner/jamsil" style={{ color:'var(--primary)' }}>잠실역 AI 맛집 추천</Link>을 이용하면
            오늘 날씨·기분·예산에 맞는 {catInfo.name} 맛집을 바로 추천받을 수 있습니다.
          </p>
        </article>

        {/* 다른 카테고리 빠른 탐색 */}
        <div style={{ marginTop:28 }}>
          <h3 style={{ fontSize:'.82rem', color:'var(--muted)', marginBottom:10, fontWeight:600 }}>다른 카테고리 보기</h3>
          <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
            {Object.entries(CATEGORY_MAP).filter(([s]) => s !== slug).map(([s, c]) => (
              <Link key={s} href={`/dinner/jamsil/category/${s}`}
                style={{ padding:'5px 12px', borderRadius:100, fontSize:'.76rem',
                  background:'var(--surface)', border:'1px solid var(--border)',
                  color:'var(--muted)', textDecoration:'none', whiteSpace:'nowrap' }}>
                {c.emoji} {c.name}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop:24, display:'flex', gap:10 }}>
          <Link href="/dinner/jamsil" className="btn btn-ghost">← 잠실역 전체 맛집</Link>
          <Link href="/dinner/jamsil" className="btn btn-primary">✨ AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
