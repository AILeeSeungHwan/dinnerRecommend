import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import restaurants from '../../../data/pangyo'

export async function getStaticPaths() {
  return {
    paths: restaurants.map(r => ({ params: { name: r.name } })),
    fallback: 'blocking'
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
      restaurant: { ...r, rv: r.rv||[], tags: r.tags||[], moods: r.moods||[], scene: r.scene||[], cat: r.cat||[], menu: r.menu||[] },
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

const EFFECT_POOL = {
  '국밥': { title:'해장국·국밥의 과학적 효능', items:['숙취 해소 — 뜨거운 국물이 알코올 분해 효소를 자극한다는 설이 있습니다','영혼 충전 — 첫 한 숟가락에 \"아 살겠다\"는 탄성이 자동 발생합니다','업무 효율 200% — 점심 국밥 한 그릇이면 오후 회의도 버텨냅니다','절약 정신 함양 — 1만원 이하로 이 퀄리티라니, 자연스럽게 감사함이 생깁니다','포만감 지속 — 단백질+국물 조합이 공복감을 4시간은 막아줍니다','단골 형성 — 한 번 맛들이면 다른 국밥집으로 돌아가기가 어렵습니다','혈액순환 개선 — 뜨거운 음식이 말초 혈관을 확장시킵니다','고독 치유 — 혼자 먹어도 전혀 어색하지 않은 유일한 음식입니다'] },
  '이자카야': { title:'이자카야·술자리의 놀라운 효능', items:['스트레스 수치 급감 — 첫 잔 이후 어깨가 자연스럽게 내려갑니다','팀빌딩 효과 최대치 — 안주 시키는 순간 팀워크가 생성됩니다','창의력 향상 — 2잔째부터 평소엔 없던 아이디어가 쏟아집니다 (퀄리티는 보장 못 함)','솔직함 증가 — 평소 못 했던 말이 자연스럽게 나옵니다 (다음날 후회 주의)','대화량 증가 — 평소 말수 적은 사람도 2잔 이후 수다쟁이가 됩니다','넷플릭스 절약 — 이자카야 2시간이 드라마 10화보다 재밌습니다','관계 깊어짐 — 술 한 잔 같이 한 사람과는 괜히 더 친해진 기분이 납니다'] },
  '고기구이': { title:'고기 구이의 과학적·감성적 효능', items:['행복 호르몬 분비 — 고기 굽는 냄새만으로 세로토닌이 분비됩니다','체력 회복 — 단백질 충전으로 퇴근 후 피로도가 눈에 띄게 줄어듭니다','인생관 전환 — 한우 등심 한 점 입에 넣는 순간 모든 고민이 사라집니다','소비 만족감 극대화 — \"내가 이걸 먹는 사람이구나\" 자부심이 생깁니다','팀 결속력 강화 — 고기 앞에서 직급이 사라집니다 (인류 보편 현상)','인간관계 강화 — 같이 고기 구워 먹으면 그날부로 친구입니다','축하 의식 완성 — 어떤 기념일도 고기 한 판으로 완성됩니다'] },
  '중식': { title:'중식의 놀라운 효능', items:['마라 중독 효과 — 매운맛이 엔돌핀을 자극해 러너스하이를 경험합니다','빠른 포만감 — 짜장 한 그릇으로 4시간은 거뜬합니다','기분 전환 — 훠궈 특유의 향이 일상 스트레스를 날려줍니다','친목 도모 — 같이 먹을수록 맛있어지는 신기한 현상이 있습니다','가성비 최고 — 양 대비 가격이 가장 합리적인 외식입니다','재방문율 1위 — 한 번 맛들이면 다음에도 여기만 생각납니다'] },
}
const EFFECT_FALLBACK = { title:'맛있는 음식의 보편적 효능', items:['행복 호르몬 분비 — 맛있는 음식은 도파민과 세로토닌을 동시에 분비시킵니다','스트레스 완화 — 좋아하는 음식 먹는 10분이 명상 1시간보다 효과적입니다','에너지 충전 — 제대로 된 한 끼가 오후 업무 효율을 30% 높입니다','인간관계 개선 — 같이 밥 먹는 사람과는 자연스럽게 친해집니다','오늘의 보상 — 열심히 일한 내게 주는 가장 확실한 선물입니다'] }

function getEffects(r) {
  const key = r.cat?.find(c => EFFECT_POOL[c])
  const pool = key ? EFFECT_POOL[key] : EFFECT_FALLBACK
  const seed = r.name.split('').reduce((a,c)=>a+c.charCodeAt(0),0)+new Date().getMinutes()
  const arr = [...pool.items]
  for (let i=arr.length-1;i>0;i--) { const j=(seed*(i+3))%(i+1);[arr[i],arr[j]]=[arr[j],arr[i]] }
  return { title:pool.title, items:arr.slice(0,5) }
}

function fmtPrice(p) {
  if (!p) return ''
  return p.split('~').map(n=>parseInt(n).toLocaleString('ko-KR')).join('~')
}

function formatHours(h) {
  if (!h) return h
  return h.replace(/AM (\d+:\d+)/g,'$1 AM').replace(/PM (\d+:\d+)/g,'$1 PM')
}

function naverMapUrl(name) {
  const cleaned = name
    .replace(/ (판교점|판교역점|판교본점|분당점|백현점|아브뉴프랑점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const hasRegion = /(판교|분당|성남|테크노밸리)/.test(name)
  const query = hasRegion ? cleaned : cleaned + ' 판교'
  return `https://map.naver.com/v5/search/${encodeURIComponent(query)}`
}

function buildIntro(r) {
  const cats=r.cat||[], wx=r.wx||[], moods=r.moods||[], tags=r.tags||[]
  const name=r.name, rt=r.rt||4.0, cnt=r.cnt?.toLocaleString()||'다수', type=r.type||''
  const isBusy=r.cnt>=1000, isCheap=r.priceRange&&parseInt(r.priceRange.split('~')[0])<=15000
  const isPremium=r.priceRange&&parseInt((r.priceRange.split('~')[1]||'0').replace(/[^0-9]/g,''))>=40000
  const isHighRated=rt>=4.5

  if (cats.includes('국밥')||cats.includes('국물')) {
    if (wx.includes('비')||wx.includes('눈')||wx.includes('쌀쌀함')) {
      return {emoji:'🌧️', lines:[
        '추적추적 비가 내리는 날, 우산 접으며 "오늘 뭐 먹지" 멍하니 서 있던 적 있으시죠.',
        `그 순간 딱 떠오르는 이름. ${name}.`,
        `뚝배기에서 펄펄 끓는 ${type} 한 그릇, 첫 숟가락에 오늘 하루가 다 녹아버립니다.`,
        isBusy?`${cnt}명이 다녀간 이유가 한 모금에 이해됩니다.`:'이 따뜻함, 오늘 꼭 필요합니다.',
      ]}
    }
    if (isHighRated) {
      return {emoji:'🍲', lines:[
        `판교에서 ${type}으로 ⭐${rt}점을 유지한다는 게 어떤 의미인지,`,
        `${name} 뚝배기 한 그릇을 받아 들면 압니다.`,
        isCheap?'가격도, 맛도, 양도. 이 세 박자를 다 잡았습니다.':'진한 국물 한 그릇. "아, 살겠다" 소리가 절로 납니다.',
      ]}
    }
    return {emoji:'🍲', lines:[
      '야근 끝내고 판교역 나오는 길. 발은 무겁고 배는 고프고.',
      `비싼 거 먹을 기력도 없는 그 타이밍에 딱 떠오르는 집, ${name}.`,
      `${type} 한 그릇 앞에 앉는 순간 "아, 살겠다" 소리가 절로 납니다.`,
    ]}
  }

  if (cats.includes('이자카야')||cats.includes('야장')) {
    if (moods.includes('회식')||tags.includes('단체가능')) {
      return {emoji:'🎉', lines:[
        '"오늘 회식 어디 가지?" 팀원들 눈치 보며 검색하는 시간, 이제 끝냅니다.',
        `${name}. 판교에서 ⭐${rt}점으로 검증된 회식 장소입니다.`,
        `안주 첫 접시 나오는 순간 팀워크가 생성됩니다. (${cnt}명이 검증함)`,
      ]}
    }
    return {emoji:'🏮', lines:[
      '집에 가기엔 이른 밤. 그렇다고 거창한 곳도 아닌, 딱 맥주 한두 잔.',
      `${name}이 그런 곳입니다.`,
      `가볍게 들어와서 은근히 오래 있게 되는, ⭐${rt}점짜리 단골집.`,
    ]}
  }

  if (cats.includes('고기구이')) {
    if (isPremium||tags.some(t=>t.includes('한우'))) {
      return {emoji:'🥩✨', lines:[
        `생일이든, 승진이든, 그냥 오늘 기분이 좋든.`,
        `${name}. ${tags.some(t=>t.includes('한우'))?'한우':'고기'} 한 점이 지갑은 울려도 입은 웃게 합니다.`,
        `⭐${rt}점, ${cnt}명이 인정한 판교 ${type} 맛집.`,
      ]}
    }
    return {emoji:'🔥', lines:[
      '고기 굽는 연기 냄새가 코를 자극하는 순간, 일상의 스트레스가 연기 따라 올라갑니다.',
      `${name}. ${isCheap?'합리적인 가격에 ':''}직화 불향 앞에서 인간은 평등합니다.`,
      `팀장도, 사원도, ⭐${rt}점짜리 고기 앞에서는 모두 행복합니다.`,
    ]}
  }

  if (cats.includes('중식')||cats.includes('훠궈')) {
    return {emoji:'🥢', lines:[
      `짜장이냐 짬뽕이냐, 그 행복한 고민 앞에 서게 만드는 집.`,
      `${name}. ⭐${rt}점이 말해주는 건, 어떤 걸 시켜도 실망이 없다는 겁니다.`,
      `${cnt}명이 선택한 판교 ${type} 맛집.`,
    ]}
  }

  if (cats.includes('일식')) {
    if (tags.some(t=>t.includes('오마카세'))) {
      return {emoji:'🍣🌙', lines:[
        '셰프가 그날의 최선을 담아 한 점씩 올려주는 경험.',
        `${name} 오마카세. 지갑은 울지만 입은 웃습니다.`,
        `⭐${rt}점. 판교에서 이 수준이라면 충분히 특별한 저녁입니다.`,
      ]}
    }
    return {emoji:'🍣', lines:[
      `신선한 네타 한 점, 샤리와의 황금 비율.`,
      `${name}에서 그 완성도를 느껴보세요.`,
      `⭐${rt}점, ${isCheap?'부담 없는 가격까지 챙긴':'판교 숨은'} 일식 맛집.`,
    ]}
  }

  if (cats.includes('양식')||cats.includes('이탈리안')) {
    if (moods.includes('데이트')) {
      return {emoji:'🍷', lines:[
        '데이트 장소 고민, 더 이상 안 해도 됩니다.',
        `${name}. 분위기·맛·가격 세 박자가 맞는 판교 ${type} 맛집.`,
        `⭐${rt}점. 상대방이 먼저 "여기 또 오자"를 말하게 됩니다.`,
      ]}
    }
    return {emoji:'🍝', lines:[
      '오늘은 뭔가 다르게 먹고 싶은 날.',
      `${name}. 파스타 면발이 소스를 머금는 찰진 식감, 혹은 육즙 가득한 스테이크.`,
      `⭐${rt}점이 검증한 판교 ${type}.`,
    ]}
  }

  if (cats.includes('치킨')) {
    return {emoji:'🍺🐔', lines:[
      '오늘 같은 날엔 역시 치맥입니다.',
      `${name}. 바삭한 튀김옷 한 입에 시원한 맥주 한 모금.`,
      `⭐${rt}점, ${cnt}명이 선택한 판교역 치킨 맛집.`,
    ]}
  }

  return {emoji:r.e||'🍽️', lines:[
    `판교에서 ${type}을 찾는다면, 선택지를 좁혀드립니다.`,
    `${name}. ⭐${rt}점에 ${cnt}개의 리뷰.`,
    isBusy?`이 많은 분들이 그냥 오신 게 아닙니다.`:(isCheap?`${fmtPrice(r.priceRange)}원, 가성비까지 챙겼습니다.`:'한 번 드셔보시면 압니다.'),
  ]}
}

export default function RestaurantPage({ restaurant: r, similar }) {
  const BASE = 'https://dinner.ambitstock.com'
  const pageUrl = `${BASE}/pangyo/restaurant/${encodeURIComponent(r.name)}`
  const mapUrl = naverMapUrl(r.name)

  const matchedWx    = r.wx?.map(w=>WX_COPY[w]).filter(Boolean)||[]
  const matchedMoods = r.moods?.map(m=>({mood:m,copy:MOOD_COPY[m]})).filter(x=>x.copy)||[]
  const effects      = getEffects(r)
  const intro        = buildIntro(r)

  const priceMin = r.priceRange?parseInt(r.priceRange.split('~')[0]).toLocaleString():null
  const priceMax = r.priceRange?parseInt(r.priceRange.split('~')[1]||r.priceRange.split('~')[0]).toLocaleString():null

  const metaDesc = `${r.name} — 판교 ${r.type} 맛집. 경기도 성남시 분당구 ${r.addr} 위치, 영업시간 ${formatHours(r.hours)}. Google 평점 ⭐${r.rt} (${r.cnt?.toLocaleString()}개 리뷰). ${r.tags?.slice(0,3).join('·')} 특징. 오늘뭐먹지 AI 추천.`

  const schema = {
    "@context":"https://schema.org","@type":"Restaurant",
    "name":r.name,"description":metaDesc,"url":pageUrl,"servesCuisine":r.type,
    "address":{"@type":"PostalAddress","streetAddress":r.addr,"addressLocality":"경기도 성남시 분당구","addressCountry":"KR"},
    "geo":{"@type":"GeoCoordinates","latitude":r.lat,"longitude":r.lng},
    "aggregateRating":{"@type":"AggregateRating","ratingValue":r.rt,"reviewCount":r.cnt,"bestRating":5,"worstRating":1},
    "openingHours":r.hours,
    "priceRange":r.priceRange?`₩${fmtPrice(r.priceRange)}`:undefined,
  }

  const faqSchema = {
    "@context":"https://schema.org","@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":`${r.name} 영업시간은?`,"acceptedAnswer":{"@type":"Answer","text":r.hours}},
      {"@type":"Question","name":`${r.name} 위치(주소)는?`,"acceptedAnswer":{"@type":"Answer","text":`경기도 성남시 분당구 ${r.addr} (판교역 근처)`}},
      {"@type":"Question","name":`${r.name} 가격대는?`,"acceptedAnswer":{"@type":"Answer","text":r.priceRange?`1인 기준 약 ${fmtPrice(r.priceRange)}원입니다.`:'가격 정보는 매장에 직접 문의 바랍니다.'}},
      {"@type":"Question","name":`${r.name} 웨이팅 있나요?`,"acceptedAnswer":{"@type":"Answer","text":r.waiting==='웨이팅 있음'?'웨이팅이 있을 수 있습니다. 방문 전 확인 권장합니다.':r.waiting==='예약 가능'?'예약이 가능합니다. 방문 전 예약을 추천합니다.':'일반적으로 바로 입장 가능합니다.'}},
    ]
  }

  const breadcrumbSchema = {
    "@context":"https://schema.org","@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"오늘뭐먹지","item":BASE},
      {"@type":"ListItem","position":2,"name":"판교역 맛집","item":`${BASE}/pangyo`},
      {"@type":"ListItem","position":3,"name":r.name,"item":pageUrl},
    ]
  }

  return (
    <Layout title={`${r.name} | 판교 ${r.type}`} description={metaDesc} canonical={pageUrl}>
      <Head>
        <meta name="keywords" content={`${r.name}, 판교 ${r.type}, 판교역 맛집, ${r.tags?.join(', ')}`} />
        <meta property="og:title" content={`${r.name} — 판교 ${r.type} 맛집`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={pageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      {/* 브레드크럼 */}
      <div style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'10px 16px' }}>
        <div style={{ maxWidth:760, margin:'0 auto', fontSize:'.75rem', color:'var(--muted)', display:'flex', gap:5, flexWrap:'wrap', alignItems:'center' }}>
          <Link href="/" style={{ color:'var(--muted)' }}>오늘뭐먹지</Link> <span>›</span>
          <Link href="/pangyo" style={{ color:'var(--muted)' }}>판교역 맛집</Link> <span>›</span>
          <span style={{ color:'var(--text)' }}>{r.name}</span>
        </div>
      </div>

      {/* 히어로 */}
      <section style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'28px 16px' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
            <div style={{ fontSize:'3rem', flexShrink:0, lineHeight:1 }}>{r.e}</div>
            <div style={{ flex:1, minWidth:0 }}>
              <h1 style={{ fontSize:'clamp(1.3rem,4vw,1.9rem)', fontWeight:900, marginBottom:8, lineHeight:1.25 }}>{r.name}</h1>
              <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:10 }}>
                <span className="tag">{r.type}</span>
                <span className="tag rating">⭐ {r.rt} ({r.cnt?.toLocaleString()}리뷰)</span>
                {r.priceRange && <span className="tag price">💰 {fmtPrice(r.priceRange)}원</span>}
                {r.waiting && r.waiting !== '바로 입장' && (
                  <span style={{ fontSize:'.7rem', background:'#1a1a2a', padding:'2px 8px', borderRadius:100, border:'1px solid #2a2a5a', color:'#9999ff' }}>
                    {r.waiting === '웨이팅 있음' ? '⏳ 웨이팅 있음' : '📞 예약 가능'}
                  </span>
                )}
              </div>
              <p style={{ fontSize:'.84rem', color:'var(--muted)', marginBottom:4 }}>📍 경기도 성남시 분당구 {r.addr}</p>
              <p style={{ fontSize:'.84rem', color:'var(--muted)' }}>🕐 {formatHours(r.hours)}</p>
            </div>
          </div>
          <div style={{ display:'flex', gap:8, marginTop:16, flexWrap:'wrap' }}>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer"
              style={{ padding:'9px 18px', borderRadius:10, background:'var(--primary)', color:'#fff', fontSize:'.85rem', fontWeight:700, textDecoration:'none' }}>
              📍 지도로 보기
            </a>
            <Link href="/pangyo"
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
              ['주소', `경기도 성남시 분당구 ${r.addr}`],
              ['영업시간', r.hours],
              ['가격대', r.priceRange ? `1인 약 ${fmtPrice(r.priceRange)}원` : '매장 문의'],
              ['Google 평점', `⭐ ${r.rt}점 (${r.cnt?.toLocaleString()}개 리뷰 기준)`],
              ['웨이팅·예약', r.waiting || '바로 입장 가능'],
              ['주차', r.parking ? '✅ 주차 가능' : '주차 어려움 (대중교통 권장)'],
            ].map(([label, val], i) => (
              <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'transparent':'var(--surface)' }}>
                <td style={{ padding:'10px 14px', color:'var(--muted)', whiteSpace:'nowrap', width:120 }}>{label}</td>
                <td style={{ padding:'10px 14px' }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 감성 인트로 */}
        <div style={{ background:'linear-gradient(135deg, var(--surface2) 0%, var(--surface) 100%)', border:'1px solid var(--border)', borderRadius:14, padding:'22px 20px', marginBottom:28 }}>
          <div style={{ fontSize:'1.8rem', marginBottom:10 }}>{intro.emoji}</div>
          {intro.lines.map((line, i) => (
            <p key={i} style={{ fontSize:i===0?'.97rem':'.9rem', color:i===0?'var(--text)':'var(--muted)', fontWeight:i===0?700:400, lineHeight:1.85, marginBottom:i===intro.lines.length-1?0:4 }}>{line}</p>
          ))}
        </div>

        {/* 날씨별 추천 */}
        {matchedWx.length > 0 && (<>
          <h2 style={h2s}>🌤️ 이런 날씨에 특히 추천해요</h2>
          {matchedWx.map((wx, i) => (
            <div key={i} style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px', marginBottom:10, display:'flex', gap:12, alignItems:'flex-start' }}>
              <span style={{ fontSize:'1.5rem', flexShrink:0 }}>{wx.emoji}</span>
              <p style={{ ...ps, margin:0 }}>{wx.copy}</p>
            </div>
          ))}
        </>)}

        {/* 기분별 추천 */}
        {matchedMoods.length > 0 && (<>
          <h2 style={h2s}>😊 이런 기분일 때 추천</h2>
          <ul style={uls}>
            {matchedMoods.map(({ mood, copy }, i) => (
              <li key={i} style={lis}><strong>{mood}일 때</strong> — {copy}</li>
            ))}
          </ul>
        </>)}

        {/* 이런 상황에 */}
        {r.scene?.length > 0 && (<>
          <h2 style={h2s}>💡 이런 상황에 딱입니다</h2>
          <div style={{ display:'flex', flexWrap:'wrap', gap:7, marginBottom:24 }}>
            {r.scene.map((s, i) => (
              <span key={i} style={{ padding:'6px 14px', borderRadius:100, fontSize:'.82rem', background:'var(--surface)', border:'1px solid var(--border)' }}>{s}</span>
            ))}
          </div>
        </>)}

        {/* 실제 리뷰 */}
        {r.rv?.length > 0 && (<>
          <h2 style={h2s}>💬 방문자 후기 요약</h2>
          <p style={ps}>실제 방문자들이 자주 언급한 키워드를 요약했습니다.</p>
          {r.rv.map((rv, i) => {
            const rm = rv.match(/^\[([0-9.]+)★\]\s*/)
            const indivRt = rm ? parseFloat(rm[1]) : null
            const keywords = rv.replace(/^\[\d+\.?\d*★\]\s*/, '').split(' · ')
            return (
              <div key={i} style={{ marginBottom:10, display:'flex', flexWrap:'wrap', alignItems:'center', gap:6 }}>
                {indivRt && <span style={{ fontSize:'.75rem', fontWeight:700, color:'var(--primary)', flexShrink:0 }}>⭐ {indivRt}</span>}
                {keywords.map((kw, j) => (
                  <span key={j} style={{ fontSize:'.78rem', padding:'3px 10px', borderRadius:100, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', whiteSpace:'nowrap' }}>{kw}</span>
                ))}
              </div>
            )
          })}
          <a href={naverMapUrl(r.name)} target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-flex', alignItems:'center', gap:6, marginTop:4, marginBottom:24, fontSize:'.78rem', color:'var(--muted)', border:'1px solid var(--border)', borderRadius:8, padding:'6px 12px', textDecoration:'none', background:'var(--surface)' }}>
            🗺️ 네이버에서 실제 리뷰 보러가기 →
          </a>
        </>)}

        {/* 효능 섹션 */}
        <h2 style={h2s}>🔬 {effects.title}</h2>
        <p style={ps}>과학적 근거는 없지만, 수많은 직장인의 체감 데이터를 기반으로 정리했습니다. (진지주의)</p>
        <ul style={uls}>
          {effects.items.map((item, i) => (<li key={i} style={lis}>{item}</li>))}
        </ul>

        {/* 위치 & 찾아가는 법 */}
        <h2 style={h2s}>🗺️ 위치 & 찾아가는 법</h2>
        <p style={ps}>
          <strong>{r.name}</strong>은 경기도 성남시 분당구 {r.addr}에 위치한 판교 맛집입니다.
          신분당선 판교역에서 도보로 이동 가능합니다. 정확한 경로는 지도를 참고해주세요.
        </p>
        <ul style={uls}>
          <li style={lis}><strong>지하철</strong> — 신분당선 판교역 하차 (5번출구 방면)</li>
          <li style={lis}><strong>도보</strong> — 판교역 출구에서 도보 5~15분 내외</li>
          <li style={lis}><strong>주차</strong> — {r.parking?'주차 가능 (매장 문의)':'판교테크노밸리 공영주차장 또는 인근 유료주차장 이용'}</li>
        </ul>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'9px 18px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.85rem', textDecoration:'none', marginBottom:28 }}>
          📍 네이버 지도에서 경로 보기
        </a>

        {/* FAQ */}
        <h2 style={h2s}>❓ 자주 묻는 질문 (FAQ)</h2>
        {[
          [`${r.name} 영업시간이 어떻게 되나요?`, `${r.name}의 영업시간은 ${formatHours(r.hours)}입니다. 방문 전 변경 여부를 확인하시길 권장합니다.`],
          [`${r.name} 주소(위치)는 어디인가요?`, `경기도 성남시 분당구 ${r.addr}에 위치합니다. 신분당선 판교역 근처입니다.`],
          [`${r.name} 가격이 얼마인가요?`, r.priceRange?`1인 기준 약 ${fmtPrice(r.priceRange)}원 선입니다.`:'정확한 가격은 방문 시 메뉴판을 확인해 주세요.'],
          [`${r.name} 웨이팅이 있나요?`, r.waiting==='웨이팅 있음'?'인기 맛집으로 웨이팅이 있을 수 있습니다. 오픈 시간에 맞춰 방문하거나 여유 있게 방문하세요.':r.waiting==='예약 가능'?'예약이 가능합니다. 방문 전 전화 예약을 추천드립니다.':'일반적으로 바로 입장 가능합니다.'],
        ].map(([q, a], i) => (
          <div key={i} style={{ marginBottom:14, background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, overflow:'hidden' }}>
            <div style={{ padding:'12px 16px', fontWeight:700, fontSize:'.88rem', borderBottom:'1px solid var(--border)' }}>Q. {q}</div>
            <div style={{ padding:'12px 16px', fontSize:'.86rem', color:'var(--muted)', lineHeight:1.7 }}>A. {a}</div>
          </div>
        ))}

        {/* 비슷한 맛집 */}
        {similar?.length > 0 && (<>
          <h2 style={h2s}>🍽️ 판교 {r.type} 맛집 더 보기</h2>
          <p style={ps}><strong>{r.name}</strong>와 비슷한 판교 {r.type} 맛집을 더 추천해드립니다.</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:10, marginBottom:28 }}>
            {similar.map((s, i) => (
              <Link href={`/pangyo/restaurant/${encodeURIComponent(s.name)}`} key={i}>
                <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:10, padding:'12px 14px', cursor:'pointer' }}>
                  <div style={{ fontWeight:700, fontSize:'.9rem', marginBottom:5 }}>{s.e} {s.name}</div>
                  <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
                    <span className="tag">⭐ {s.rt}</span>
                    {s.priceRange && <span className="tag price">💰 {fmtPrice(s.priceRange)}원</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>)}

        {/* 하단 네비 */}
        <div style={{ display:'flex', gap:10, flexWrap:'wrap', paddingTop:20, borderTop:'1px solid var(--border)' }}>
          <Link href="/pangyo"
            style={{ padding:'9px 16px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.84rem', textDecoration:'none' }}>
            ← 판교 전체 맛집
          </Link>
          <Link href="/pangyo"
            style={{ padding:'9px 16px', borderRadius:10, background:'var(--primary)', color:'#fff', fontSize:'.84rem', fontWeight:700, textDecoration:'none' }}>
            ✨ AI 맞춤 추천 받기
          </Link>
        </div>

      </article>
    </Layout>
  )
}

const h2s = { fontSize:'1rem', fontWeight:800, marginBottom:12, marginTop:32, paddingBottom:8, borderBottom:'1px solid var(--border)', color:'var(--text)' }
const ps  = { fontSize:'.88rem', color:'var(--muted)', lineHeight:1.8, marginBottom:14 }
const uls = { paddingLeft:0, marginBottom:24, listStyle:'none' }
const lis = { fontSize:'.87rem', color:'var(--text)', padding:'7px 0', borderBottom:'1px solid var(--border)', lineHeight:1.7, paddingLeft:14 }
