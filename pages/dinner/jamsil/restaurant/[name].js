import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../../components/Layout'
import restaurants from '../../../../data/jamsil'

export async function getStaticPaths() {
  return {
    paths: restaurants.map(r => ({ params: { name: encodeURIComponent(r.name) } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const name = decodeURIComponent(params.name)
  const r = restaurants.find(x => x.name === name)
  if (!r) return { notFound: true }

  const similar = restaurants
    .filter(x => x.name !== r.name && x.cat?.some(c => r.cat?.includes(c)))
    .sort((a, b) => b.rt - a.rt)
    .slice(0, 4)
    .map(x => ({ name: x.name, type: x.type, e: x.e, rt: x.rt, priceRange: x.priceRange || null }))

  return {
    props: {
      restaurant: {
        ...r,
        rv: r.rv || [],
        tags: r.tags || [],
        moods: r.moods || [],
        scene: r.scene || [],
        cat: r.cat || [],
        menu: r.menu || [],
      },
      similar
    }
  }
}

const WX_COPY = {
  '비':       { emoji:'🌧️', copy:'비 오는 날엔 역시 따끈한 국물 한 그릇이 제격이죠. 우산 접고 바로 들어가세요.' },
  '눈':       { emoji:'❄️', copy:'눈 내리는 날, 뜨끈한 국물로 몸을 녹이고 싶을 때 딱입니다.' },
  '쌀쌀함':  { emoji:'🍂', copy:'쌀쌀한 날씨에 국물 한 그릇이면 체온이 올라가는 게 느껴집니다.' },
  '맑음':    { emoji:'☀️', copy:'맑은 날 기분 좋게 한 끼 제대로 챙기고 싶을 때 방문해보세요.' },
  '흐림':    { emoji:'☁️', copy:'흐린 날 왠지 모르게 국물이 당길 때 바로 이 집입니다.' },
  '덥고 습함': { emoji:'😅', copy:'더운 날도 뜨거운 국물 한 그릇이면 오히려 땀 빼면서 시원해지는 느낌!' },
}

const MOOD_COPY = {
  '피곤함':        '야근 후 녹초가 됐을 때, 몸이 알아서 찾게 되는 맛입니다.',
  '스트레스 받음': '스트레스받을 때 국물 한 그릇이면 마음이 좀 풀려요. 뜨겁게 훌훌.',
  '허전함':        '뭔가 허전하고 텅 빈 느낌일 때, 뱃속부터 채워주는 메뉴입니다.',
  '혼밥':          '혼자 와도 전혀 어색하지 않아요. 조용히 한 그릇.',
  '기분 좋음':     '기분 좋은 날 가볍게 맛있는 한 끼 즐기기 좋습니다.',
  '회식':          '팀원들과 부담 없이 즐기기 좋은 메뉴와 분위기입니다.',
  '데이트':        '편안한 분위기에서 부담 없이 즐기기 좋습니다.',
  '축하':          '소소한 기념일이나 축하 자리에도 잘 어울립니다.',
}

const FOOD_EFFECT = {
  '국밥': {
    title: '해장국·국밥의 과학적 효능',
    items: [
      '숙취 해소 — 뜨거운 국물이 알코올 분해 효소를 자극한다는 설이 있습니다 (출처: 직장인 5,000명 체감 조사)',
      '영혼 충전 — 첫 한 숟가락에 "아 살겠다"는 탄성이 자동 발생합니다',
      '업무 효율 200% — 점심에 국밥 한 그릇이면 오후 회의도 버틸 수 있다는 임상 결과가 있습니다',
      '절약 정신 함양 — 1만원 이하로 이 퀄리티라니, 자연스럽게 감사함이 생깁니다',
    ]
  },
  '고기구이': {
    title: '고기 구이의 과학적 효능',
    items: [
      '행복 호르몬 분비 — 고기 굽는 냄새만으로도 세로토닌이 분비된다는 설이 있습니다',
      '체력 회복 — 단백질 충전으로 퇴근 후 피로도가 눈에 띄게 줄어듭니다',
      '인생관 전환 — 참숯갈비 한 점을 입에 넣는 순간 모든 고민이 사라집니다',
      '소비 만족감 극대화 — "내가 이걸 먹는 사람이구나"라는 자부심이 생깁니다',
    ]
  },
  '이자카야': {
    title: '이자카야 하이볼의 효능',
    items: [
      '스트레스 수치 급감 — 첫 잔 원샷 이후 어깨가 자연스럽게 내려갑니다',
      '팀빌딩 효과 최대치 — 안주 시키는 순간 팀워크가 생성됩니다',
      '창의력 향상 — 2잔째부터 평소엔 없던 아이디어가 쏟아집니다 (퀄리티는 보장 못 함)',
      '솔직함 증가 — 평소 하지 못했던 말도 자연스럽게 나옵니다 (단, 다음날 후회 주의)',
    ]
  },
  '중식': {
    title: '중식의 효능',
    items: [
      '마라 중독 효과 — 매운맛이 엔돌핀을 자극해 일종의 러너스하이를 경험할 수 있습니다',
      '빠른 포만감 — 짬뽕 한 그릇으로 4시간은 거뜬합니다',
      '기분 전환 — 딤섬 특유의 향이 일상의 스트레스를 날려줍니다',
      '친목 도모 — 같이 먹을수록 맛있어지는 신기한 현상이 있습니다',
    ]
  },
}

// ── 컨텍스트 기반 감성 인트로 생성 ──────────────────────────
function buildIntro(r) {
  const cats  = r.cat   || []
  const wx    = r.wx    || []
  const moods = r.moods || []
  const tags  = r.tags  || []
  const scene = r.scene || []
  const name  = r.name

  // 곱창 / 막창 계열 — 잠실/방이동 특화
  if (tags.some(t => /곱창|막창|양념구이/.test(t)) || scene.some(s => /곱창|방이동/.test(s))) {
    if (wx.includes('비') || moods.includes('스트레스')) {
      return { emoji:'🌧️🍶', lines:[
        '그런 날 있죠.',
        '비 오고 야근하고 집에 가기 싫은 그 밤.',
        '방이동 곱창골목에서 소주 한 잔이면 세상을 다 가진 것 같은 그 기분.',
        `그런 분들을 위해 준비했습니다. 잠실 ${name} 추천, 바로 갑니다.`,
      ]}
    }
    return { emoji:'🫀🔥', lines:[
      '방이동에 오면 꼭 들러야 하는 곳이 있습니다.',
      '직화로 구워내는 곱창의 냄새가 골목을 가득 채우는 그곳.',
      `${name}. 소주 한 병과 곱창 한 판이면 오늘 하루가 완성됩니다.`,
    ]}
  }

  // 국밥 / 해장
  if (cats.includes('국밥') || cats.includes('국물')) {
    if (moods.includes('피곤함') || wx.includes('비')) {
      return { emoji:'🌧️🥣', lines:[
        '비가 추적추적, 발도 무겁고 배도 고프고.',
        `${name} 뚝배기 앞에 앉으면 그제야 숨이 쉬어집니다.`,
        '첫 국물 한 숟갈에 "아, 살겠다" 소리가 절로 나오는 그 맛.',
      ]}
    }
    return { emoji:'🥣', lines:[
      '잠실역 나와서 어디 갈지 고민될 때,',
      '기름기 없이 깔끔하게 한 끼 챙기고 싶을 때.',
      `${name}. 뜨끈한 국물 한 그릇이면 충분합니다.`,
    ]}
  }

  // 이자카야 / 야장 / 술집
  if (cats.includes('이자카야') || cats.includes('야장') || cats.includes('와인바')) {
    if (wx.includes('비')) {
      return { emoji:'🌧️🍶', lines:[
        '비 오는 날 밤, 갑자기 오뎅탕에 소주 한 잔이 생각나는 밤.',
        '모든 것을 가진 것 같은 그 따뜻한 기분.',
        `그런 분들을 위해 준비했습니다. 잠실 ${name}, 지금 바로 시작합니다.`,
      ]}
    }
    if (moods.includes('스트레스') || moods.includes('피곤함')) {
      return { emoji:'😮‍💨🍺', lines:[
        '오늘 진짜 힘들었죠.',
        '석촌호수 불빛 보면서 맥주 한 잔 하고 싶었던 그 마음.',
        `${name} 문 열고 들어가는 순간, 퇴근이 시작됩니다.`,
      ]}
    }
    return { emoji:'🏮', lines:[
      '롯데타워 불빛 아래, 가볍게 한 잔 하기 좋은 밤.',
      '거창하지 않아도 좋아요. 맥주 한 두 잔에 안주 하나.',
      `${name}이 그런 곳입니다.`,
    ]}
  }

  // 고기구이
  if (cats.includes('고기구이') || tags.some(t => t.includes('한우'))) {
    if (moods.includes('축하') || moods.includes('데이트')) {
      return { emoji:'🥩✨', lines:[
        '특별한 날, 잠실에서 제대로 먹고 싶을 때.',
        `${name} 불판 위에서 고기 굽는 소리가 오늘 저녁을 완성합니다.`,
        '육즙 흐르는 한 점, 딱 그 순간을 위해 왔습니다.',
      ]}
    }
    return { emoji:'🔥', lines:[
      '방이동 골목에서 고기 굽는 냄새 따라 걷다 보면 자연스럽게 도착하게 됩니다.',
      `${name}. 직화 불향 앞에서 오늘의 스트레스가 연기 따라 올라갑니다.`,
    ]}
  }

  // 오마카세 / 고급 일식
  if (tags.some(t => /오마카세|스시|초밥/.test(t))) {
    return { emoji:'🍣🌙', lines:[
      '특별한 날의 저녁은 달라야 합니다.',
      '롯데타워 불빛이 창밖에 걸리는 밤,',
      `${name} 셰프가 그날의 최선을 한 점씩 올려드립니다.`,
      '지갑은 울지만 입은 웃는, 그런 저녁.',
    ]}
  }

  // 데이트 / 석촌호수 분위기
  if (moods.includes('데이트') || scene.some(s => /석촌|호수|뷰/.test(s))) {
    return { emoji:'🌸🌙', lines:[
      '석촌호수 벚꽃 지는 길, 어디 가야 할지 고민되셨죠.',
      `${name}. 분위기는 있고, 음식은 맛있고.`,
      '이런 날엔 멀리 갈 필요 없습니다. 잠실에 다 있어요.',
    ]}
  }

  // 기본 fallback
  return { emoji: r.e || '🍽️', lines:[
    `잠실에서 ${r.type} 맛집을 찾고 계시다면,`,
    `${name}을 추천드립니다.`,
    `⭐${r.rt}점, ${r.cnt?.toLocaleString()}개 리뷰가 말해주는 검증된 맛집입니다.`,
  ]}
}

// ── 이미지 검색 URL (Unsplash) ─────────────────────────────
function getFoodImages(r) {
  const cats = r.cat || []
  const tags = r.tags || []

  let foodQ = 'korean-restaurant-food'
  if (tags.some(t => /곱창|막창/.test(t)))                   foodQ = 'korean-gopchang-grilled-offal'
  else if (cats.includes('국밥') || cats.includes('국물'))    foodQ = 'korean-gukbap-soup-bowl'
  else if (tags.some(t => /오마카세/.test(t)))                foodQ = 'japanese-omakase-sushi'
  else if (cats.includes('이자카야') || cats.includes('일식'))foodQ = 'japanese-izakaya-food'
  else if (cats.includes('고기구이'))                          foodQ = 'korean-bbq-grilling'
  else if (tags.some(t => /마라|훠궈/.test(t)))               foodQ = 'chinese-hot-pot'
  else if (cats.includes('중식'))                              foodQ = 'chinese-food'
  else if (cats.includes('양식') || cats.includes('이탈리안'))foodQ = 'pasta-italian-food'
  else if (cats.includes('와인바'))                            foodQ = 'wine-bar-drinks'

  let ambiQ = 'cozy-restaurant-interior-night'
  if (r.moods?.includes('데이트'))       ambiQ = 'romantic-restaurant-dinner'
  else if (r.moods?.includes('회식'))    ambiQ = 'group-dining-korean'
  else if (r.moods?.includes('혼밥'))    ambiQ = 'solo-dining-japanese-counter'

  return [
    `https://source.unsplash.com/800x500/?${foodQ}`,
    `https://source.unsplash.com/800x500/?${ambiQ}`,
  ]
}

export default function RestaurantPage({ restaurant: r, similar }) {
  const BASE = 'https://dinner.ambitstock.com'
  const pageUrl = `${BASE}/dinner/jamsil/restaurant/${encodeURIComponent(r.name)}`
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' 잠실')}`

  const matchedWx    = r.wx?.map(w => WX_COPY[w]).filter(Boolean) || []
  const matchedMoods = r.moods?.map(m => ({ mood: m, copy: MOOD_COPY[m] })).filter(x => x.copy) || []
  const effectKey    = r.cat?.find(c => FOOD_EFFECT[c])
  const effect       = effectKey ? FOOD_EFFECT[effectKey] : null

  const priceMin = r.priceRange ? parseInt(r.priceRange.split('~')[0]).toLocaleString() : null
  const priceMax = r.priceRange ? parseInt(r.priceRange.split('~')[1] || r.priceRange.split('~')[0]).toLocaleString() : null

  // 감성 인트로 + 이미지
  const intro = buildIntro(r)
  const foodImages = getFoodImages(r)

  const metaDesc = `${r.name} — 잠실 ${r.type} 맛집. ${r.addr} 위치, 영업시간 ${r.hours}. Google 평점 ⭐${r.rt} (${r.cnt?.toLocaleString()}개 리뷰). ${r.tags?.slice(0,3).join('·')} 특징. 강남뭐먹 AI 추천.`

  const schema = {
    "@context": "https://schema.org", "@type": "Restaurant",
    "name": r.name, "description": metaDesc, "url": pageUrl,
    "servesCuisine": r.type,
    "address": { "@type":"PostalAddress", "streetAddress":r.addr, "addressLocality":"서울특별시 송파구", "addressCountry":"KR" },
    "geo": { "@type":"GeoCoordinates", "latitude":r.lat, "longitude":r.lng },
    "aggregateRating": { "@type":"AggregateRating", "ratingValue":r.rt, "reviewCount":r.cnt, "bestRating":5, "worstRating":1 },
    "openingHours": r.hours,
    "priceRange": r.priceRange ? `₩${r.priceRange}` : undefined,
  }

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type":"Question", "name":`${r.name} 영업시간은?`, "acceptedAnswer":{ "@type":"Answer", "text":r.hours } },
      { "@type":"Question", "name":`${r.name} 위치(주소)는?`, "acceptedAnswer":{ "@type":"Answer", "text":`서울 송파구 ${r.addr} (잠실역 근처)` } },
      { "@type":"Question", "name":`${r.name} 가격대는?`, "acceptedAnswer":{ "@type":"Answer", "text": r.priceRange ? `1인 기준 약 ${r.priceRange}원입니다.` : '가격 정보는 매장에 직접 문의 바랍니다.' } },
      { "@type":"Question", "name":`${r.name} 웨이팅 있나요?`, "acceptedAnswer":{ "@type":"Answer", "text": r.waiting === '웨이팅 있음' ? '웨이팅이 있을 수 있습니다. 방문 전 확인 권장합니다.' : r.waiting === '예약 가능' ? '예약이 가능합니다. 방문 전 예약을 추천합니다.' : '일반적으로 바로 입장 가능합니다.' } },
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type":"ListItem", "position":1, "name":"강남뭐먹", "item":BASE },
      { "@type":"ListItem", "position":2, "name":"잠실 맛집", "item":`${BASE}/dinner/jamsil` },
      { "@type":"ListItem", "position":3, "name":r.name, "item":pageUrl },
    ]
  }

  return (
    <Layout title={`${r.name} — 잠실 ${r.type} 맛집`} description={metaDesc} canonical={pageUrl}>
      <Head>
        <title>{r.name} | 잠실 {r.type} 맛집 — 위치·메뉴·리뷰 | 강남뭐먹</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`${r.name}, 잠실 ${r.type} 맛집, 방이동 맛집, 잠실역 맛집, ${r.addr}, ${r.tags?.join(', ')}`} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`${r.name} — 잠실 ${r.type} 맛집`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={pageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      {/* ── 감성 인트로 배너 ── */}
      <section style={{
        background:'linear-gradient(180deg, var(--surface2) 0%, var(--surface) 100%)',
        borderBottom:'1px solid var(--border)',
        padding:'32px 16px 28px',
      }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <div style={{ fontSize:'2.2rem', marginBottom:14 }}>{intro.emoji}</div>
          {intro.lines.map((line, i) => (
            <p key={i} style={{
              fontSize: i === 0 ? '1rem' : '.92rem',
              color: i === 0 ? 'var(--text)' : 'var(--muted)',
              fontWeight: i === 0 ? 700 : 400,
              lineHeight: 1.85,
              marginBottom: i === intro.lines.length - 1 ? 0 : 4,
            }}>{line}</p>
          ))}
        </div>
      </section>

      {/* 브레드크럼 */}
      <div style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'10px 16px' }}>
        <div style={{ maxWidth:760, margin:'0 auto', fontSize:'.75rem', color:'var(--muted)', display:'flex', gap:5, flexWrap:'wrap', alignItems:'center' }}>
          <Link href="/" style={{ color:'var(--muted)' }}>강남뭐먹</Link> <span>›</span>
          <Link href="/dinner/jamsil" style={{ color:'var(--muted)' }}>잠실 맛집</Link> <span>›</span>
          <span style={{ color:'var(--text)' }}>{r.name}</span>
        </div>
      </div>

      {/* 히어로 — 대표 이미지 포함 */}
      <section style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'0 0 24px' }}>
        <div style={{ width:'100%', height:'220px', overflow:'hidden', position:'relative', marginBottom:20 }}>
          <img
            src={foodImages[0]}
            alt={`${r.name} 음식 사진`}
            style={{ width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.75)' }}
            loading="lazy"
            onError={e => { e.target.style.display='none' }}
          />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,.5) 100%)' }} />
          <div style={{ position:'absolute', bottom:16, left:16 }}>
            <span style={{ fontSize:'.72rem', background:'rgba(0,0,0,.6)', color:'#fff', padding:'4px 10px', borderRadius:100, backdropFilter:'blur(4px)' }}>
              📸 유사 이미지 참고용
            </span>
          </div>
        </div>

        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
            <div style={{ fontSize:'3rem', flexShrink:0, lineHeight:1 }}>{r.e}</div>
            <div style={{ flex:1, minWidth:0 }}>
              <h1 style={{ fontSize:'clamp(1.3rem,4vw,1.9rem)', fontWeight:900, marginBottom:8, lineHeight:1.25 }}>
                {r.name}
              </h1>
              <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:10 }}>
                <span className="tag">{r.type}</span>
                <span className="tag rating">⭐ {r.rt} ({r.cnt?.toLocaleString()}리뷰)</span>
                {r.priceRange && <span className="tag price">💰 {r.priceRange}원</span>}
                {r.exit2 && <span style={{ fontSize:'.7rem', background:'#1a1a00', padding:'2px 8px', borderRadius:100, border:'1px solid #4a4a00', color:'#ffd700' }}>🚇 2번출구 근처</span>}
                {r.waiting && r.waiting !== '바로 입장' && (
                  <span style={{ fontSize:'.7rem', background:'#1a1a2a', padding:'2px 8px', borderRadius:100, border:'1px solid #2a2a5a', color:'#9999ff' }}>
                    {r.waiting === '웨이팅 있음' ? '⏳ 웨이팅 있음' : '📞 예약 가능'}
                  </span>
                )}
              </div>
              <p style={{ fontSize:'.84rem', color:'var(--muted)', marginBottom:4 }}>📍 서울 송파구 {r.addr}</p>
              <p style={{ fontSize:'.84rem', color:'var(--muted)' }}>🕐 {r.hours}</p>
            </div>
          </div>
          <div style={{ display:'flex', gap:8, marginTop:16, flexWrap:'wrap' }}>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer"
              style={{ padding:'9px 18px', borderRadius:10, background:'var(--primary)', color:'#fff', fontSize:'.85rem', fontWeight:700, textDecoration:'none' }}>
              📍 지도로 보기
            </a>
            <Link href="/dinner/jamsil"
              style={{ padding:'9px 18px', borderRadius:10, background:'var(--surface2)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.85rem', textDecoration:'none' }}>
              ✨ AI 맞춤 추천 받기
            </Link>
          </div>
        </div>
      </section>

      {/* 본문 */}
      <article style={{ maxWidth:760, margin:'0 auto', padding:'28px 16px 60px' }}>

        {/* 기본 정보 */}
        <h2 style={h2s}>📋 기본 정보</h2>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.88rem', marginBottom:28 }}>
          <tbody>
            {[
              ['식당 종류', r.type],
              ['주소', `서울 송파구 ${r.addr}`],
              ['영업시간', r.hours],
              ['가격대', r.priceRange ? `1인 약 ${r.priceRange}원` : '매장 문의'],
              ['Google 평점', `⭐ ${r.rt}점 (${r.cnt?.toLocaleString()}개 리뷰 기준)`],
              ['웨이팅·예약', r.waiting || '바로 입장 가능'],
              ['주차', r.parking ? '✅ 주차 가능' : '주차 어려움 (대중교통 권장)'],
              ['잠실역 2번출구', r.exit2 ? '✅ 도보 5분 이내' : '잠실역 도보권 내'],
            ].map(([label, val], i) => (
              <tr key={i} style={{ borderBottom:'1px solid var(--border)', background: i%2===0 ? 'transparent' : 'var(--surface)' }}>
                <td style={{ padding:'10px 14px', color:'var(--muted)', whiteSpace:'nowrap', width:120 }}>{label}</td>
                <td style={{ padding:'10px 14px' }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 대표 메뉴 & 가격 */}
        {r.menu?.length > 0 && (
          <>
            <h2 style={h2s}>🍽️ 대표 메뉴 & 가격</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(160px, 1fr))', gap:8, marginBottom:24 }}>
              {r.menu.map((m, i) => (
                <div key={i} style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:10, padding:'12px 14px' }}>
                  <div style={{ fontSize:'.9rem', fontWeight:700, marginBottom:4 }}>{m.name}</div>
                  <div style={{ fontSize:'.85rem', color:'#f5c842' }}>{m.price?.toLocaleString()}원~</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* 날씨별 추천 */}
        {matchedWx.length > 0 && (
          <>
            <h2 style={h2s}>🌤️ 이런 날씨에 특히 추천해요</h2>
            {matchedWx.map((wx, i) => (
              <div key={i} style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px', marginBottom:10, display:'flex', gap:12, alignItems:'flex-start' }}>
                <span style={{ fontSize:'1.5rem', flexShrink:0 }}>{wx.emoji}</span>
                <p style={{ ...ps, margin:0 }}>{wx.copy}</p>
              </div>
            ))}
          </>
        )}

        {/* 기분별 추천 */}
        {matchedMoods.length > 0 && (
          <>
            <h2 style={h2s}>😊 이런 기분일 때 추천</h2>
            <ul style={uls}>
              {matchedMoods.map(({ mood, copy }, i) => (
                <li key={i} style={lis}><strong>{mood}일 때</strong> — {copy}</li>
              ))}
            </ul>
          </>
        )}

        {/* 이런 상황에 */}
        {r.scene?.length > 0 && (
          <>
            <h2 style={h2s}>💡 이런 상황에 딱입니다</h2>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7, marginBottom:24 }}>
              {r.scene.map((s, i) => (
                <span key={i} style={{ padding:'6px 14px', borderRadius:100, fontSize:'.82rem', background:'var(--surface)', border:'1px solid var(--border)' }}>{s}</span>
              ))}
            </div>
          </>
        )}

        {/* 실제 리뷰 */}
        {r.rv?.length > 0 && (
          <>
            <h2 style={h2s}>💬 실제 방문자 리뷰</h2>
            <p style={ps}>잠실 맛집 <strong>{r.name}</strong>에 실제 방문한 손님들의 Google 리뷰입니다.</p>
            {r.rv.map((rv, i) => (
              <div key={i} style={{ background:'var(--surface)', borderLeft:'3px solid var(--primary)', borderRadius:'0 10px 10px 0', padding:'12px 16px', marginBottom:10, fontSize:'.88rem', color:'#d0d0e0', lineHeight:1.7 }}>
                <span style={{ color:'var(--primary)', marginRight:6 }}>⭐ {r.rt}</span>
                {rv.replace(/ \(실제 Google 리뷰.*?\)/g, '')}
              </div>
            ))}
            <p style={{ fontSize:'.74rem', color:'var(--muted)', marginBottom:24 }}>* Google Maps 실제 방문 리뷰 기반입니다.</p>
          </>
        )}

        {/* 분위기 이미지 */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:28 }}>
          {foodImages.map((src, i) => (
            <div key={i} style={{ borderRadius:12, overflow:'hidden', height:150, position:'relative', background:'var(--surface2)' }}>
              <img
                src={src}
                alt={i === 0 ? `${r.name} 음식` : `${r.name} 분위기`}
                style={{ width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.8)' }}
                loading="lazy"
                onError={e => { e.target.parentElement.style.display='none' }}
              />
              <div style={{ position:'absolute', bottom:7, left:9, fontSize:'.63rem', color:'rgba(255,255,255,.75)', background:'rgba(0,0,0,.45)', padding:'2px 8px', borderRadius:100 }}>
                {i === 0 ? '🍽️ 음식' : '🏠 분위기'} 참고 이미지
              </div>
            </div>
          ))}
        </div>

        {/* 효능 섹션 */}
        {effect && (
          <>
            <h2 style={h2s}>🔬 {effect.title}</h2>
            <p style={ps}>과학적 근거는 없지만, 수많은 직장인의 체감 데이터를 기반으로 정리했습니다. (진지주의)</p>
            <ul style={uls}>
              {effect.items.map((item, i) => (<li key={i} style={lis}>{item}</li>))}
            </ul>
          </>
        )}

        {/* 위치 & 찾아가는 법 */}
        <h2 style={h2s}>🗺️ 위치 & 찾아가는 법</h2>
        <p style={ps}>
          <strong>{r.name}</strong>은 서울 송파구 {r.addr}에 위치한 잠실 맛집입니다.
          {r.exit2
            ? ' 잠실역 2번출구에서 도보 5분 이내로 접근성이 좋습니다.'
            : ' 잠실역에서 도보로 이동 가능합니다. 정확한 경로는 지도를 참고해주세요.'}
        </p>
        <ul style={uls}>
          <li style={lis}><strong>지하철</strong> — 2호선·8호선 잠실역 하차</li>
          {r.exit2
            ? <li style={lis}><strong>도보</strong> — 2번출구 기준 약 5분 이내</li>
            : <li style={lis}><strong>도보</strong> — 잠실역 각 출구에서 도보 5~10분 내외</li>}
          <li style={lis}><strong>주차</strong> — {r.parking ? '주차 가능 (매장 문의)' : '롯데월드몰·잠실 공영주차장 이용 권장'}</li>
        </ul>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'9px 18px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.85rem', textDecoration:'none', marginBottom:28 }}>
          📍 Google 지도에서 경로 보기
        </a>

        {/* FAQ */}
        <h2 style={h2s}>❓ 자주 묻는 질문 (FAQ)</h2>
        {[
          [`${r.name} 영업시간이 어떻게 되나요?`, `${r.name}의 영업시간은 ${r.hours}입니다. 방문 전 변경 여부를 확인하시길 권장합니다.`],
          [`${r.name} 주소(위치)는 어디인가요?`, `서울특별시 송파구 ${r.addr}에 위치합니다. 잠실역${r.exit2 ? ' 2번출구에서 도보 5분 거리' : ' 인근'}입니다.`],
          [`${r.name} 가격이 얼마인가요?`, r.priceRange ? `1인 기준 약 ${r.priceRange}원 선입니다.` : '정확한 가격은 방문 시 메뉴판을 확인해 주세요.'],
          [`${r.name} 웨이팅이 있나요?`, r.waiting === '웨이팅 있음' ? '인기 맛집으로 웨이팅이 있을 수 있습니다. 오픈 시간에 맞춰 방문하거나 여유 있게 방문하세요.' : r.waiting === '예약 가능' ? '예약이 가능합니다. 방문 전 전화 예약을 추천드립니다.' : '일반적으로 바로 입장 가능합니다.'],
        ].map(([q, a], i) => (
          <div key={i} style={{ marginBottom:14, background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, overflow:'hidden' }}>
            <div style={{ padding:'12px 16px', fontWeight:700, fontSize:'.88rem', borderBottom:'1px solid var(--border)' }}>Q. {q}</div>
            <div style={{ padding:'12px 16px', fontSize:'.86rem', color:'var(--muted)', lineHeight:1.7 }}>A. {a}</div>
          </div>
        ))}

        {/* 비슷한 맛집 */}
        {similar?.length > 0 && (
          <>
            <h2 style={h2s}>🍽️ 잠실 {r.type} 맛집 더 보기</h2>
            <p style={ps}><strong>{r.name}</strong>와 비슷한 잠실 {r.type} 맛집을 더 추천해드립니다.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:10, marginBottom:28 }}>
              {similar.map((s, i) => (
                <Link href={`/dinner/jamsil/restaurant/${encodeURIComponent(s.name)}`} key={i}>
                  <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:10, padding:'12px 14px', cursor:'pointer' }}>
                    <div style={{ fontWeight:700, fontSize:'.9rem', marginBottom:5 }}>{s.e} {s.name}</div>
                    <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
                      <span className="tag">⭐ {s.rt}</span>
                      {s.priceRange && <span className="tag price">💰 {s.priceRange}원</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* 하단 네비 */}
        <div style={{ display:'flex', gap:10, flexWrap:'wrap', paddingTop:20, borderTop:'1px solid var(--border)' }}>
          <Link href="/dinner/jamsil"
            style={{ padding:'9px 16px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.84rem', textDecoration:'none' }}>
            ← 잠실 전체 맛집
          </Link>
          <Link href="/dinner/jamsil"
            style={{ padding:'9px 16px', borderRadius:10, background:'var(--primary)', color:'#fff', fontSize:'.84rem', fontWeight:700, textDecoration:'none' }}>
            ✨ AI 맞춤 추천 받기
          </Link>
        </div>
      </article>
    </Layout>
  )
}

const h2s = { fontSize:'1rem', fontWeight:800, marginBottom:12, marginTop:32, paddingBottom:8, borderBottom:'1px solid var(--border)' }
const ps  = { fontSize:'.88rem', color:'#c8c8d8', lineHeight:1.8, marginBottom:14 }
const uls = { paddingLeft:0, marginBottom:24, listStyle:'none' }
const lis = { fontSize:'.87rem', color:'#c0c0d0', padding:'7px 0', borderBottom:'1px solid var(--border)', lineHeight:1.7, paddingLeft:14 }
