import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../../components/Layout'
import restaurants from '../../../../data/samseong'

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

  return { props: { restaurant: { ...r, rv: r.rv || [], tags: r.tags || [], moods: r.moods || [], scene: r.scene || [], cat: r.cat || [] }, similar } }
}

const CAT_TO_SLUG = {
  '국밥':'gukbap','국물':'gukbap','고기구이':'meat','한우':'meat',
  '이자카야':'izakaya','일식':'izakaya','중식':'chinese','훠궈':'chinese',
  '양식':'western','이탈리안':'western','스테이크':'western',
  '치킨':'chicken','야장':'chicken',
}
const CAT_NAMES = {
  gukbap:'국밥·해장국', meat:'고기구이·한우', izakaya:'이자카야',
  chinese:'중식·훠궈', western:'양식·스테이크', chicken:'치킨·야장'
}

// 날씨별 추천 문구
const WX_COPY = {
  '비':   { emoji:'🌧️', copy:'비 오는 날엔 역시 따끈한 국물 한 그릇이 제격이죠. 우산 접고 바로 들어가세요.' },
  '눈':   { emoji:'❄️', copy:'눈 내리는 날, 뜨끈한 국물로 몸을 녹이고 싶을 때 딱입니다.' },
  '쌀쌀함': { emoji:'🍂', copy:'쌀쌀한 날씨에 국물 한 그릇이면 체온이 올라가는 게 느껴집니다.' },
  '맑음': { emoji:'☀️', copy:'맑은 날 기분 좋게 한 끼 제대로 챙기고 싶을 때 방문해보세요.' },
  '흐림': { emoji:'☁️', copy:'흐린 날 왠지 모르게 국물이 당길 때 바로 이 집입니다.' },
  '덥고 습함': { emoji:'😅', copy:'더운 날도 뜨거운 국물 한 그릇이면 오히려 땀 빼면서 시원해지는 느낌!' },
}

// 기분별 추천 문구
const MOOD_COPY = {
  '피곤함':      '야근 후 녹초가 됐을 때, 몸이 알아서 찾게 되는 맛입니다.',
  '스트레스 받음': '스트레스받을 때 국물 한 그릇이면 마음이 좀 풀려요. 뜨겁게 훌훌.',
  '허전함':      '뭔가 허전하고 텅 빈 느낌일 때, 뱃속부터 채워주는 메뉴입니다.',
  '혼밥':        '혼자 와도 전혀 어색하지 않아요. 카운터석에서 조용히 한 그릇.',
  '기분 좋음':   '기분 좋은 날 가볍게 맛있는 한 끼 즐기기 좋습니다.',
  '회식':        '팀원들과 부담 없이 즐기기 좋은 메뉴와 분위기입니다.',
  '데이트':      '편안한 분위기에서 부담 없이 즐기기 좋습니다.',
  '축하':        '소소한 기념일이나 축하 자리에도 잘 어울립니다.',
}

// 카테고리별 효능 (유머)
const FOOD_EFFECT = {
  '국밥': {
    title: '해장국·국밥의 과학적 효능 (진지주의)',
    items: [
      '숙취 해소 — 뜨거운 국물이 알코올 분해 효소를 자극한다는 설이 있습니다 (출처: 직장인 5,000명 체감 조사)',
      '영혼 충전 — 첫 한 숟가락에 "아 살겠다"는 탄성이 자동 발생합니다',
      '업무 효율 200% — 점심에 국밥 한 그릇이면 오후 회의도 버틸 수 있다는 임상 결과가 있습니다',
      '인간관계 회복 — 팀장도 국밥 앞에서는 한없이 부드러워집니다',
      '절약 정신 함양 — 1만원 이하로 이 퀄리티라니, 자연스럽게 감사함이 생깁니다',
    ]
  },
  '이자카야': {
    title: '이자카야 맥주의 효능 (진지주의)',
    items: [
      '스트레스 수치 급감 — 첫 잔 원샷 이후 어깨가 자연스럽게 내려갑니다',
      '팀빌딩 효과 최대치 — 안주 시키는 순간 팀워크가 생성됩니다',
      '창의력 향상 — 2잔째부터 평소엔 없던 아이디어가 쏟아집니다 (퀄리티는 보장 못 함)',
      '솔직함 증가 — 평소 하지 못했던 말도 자연스럽게 나옵니다 (단, 다음날 후회 주의)',
    ]
  },
  '고기구이': {
    title: '고기 구이의 과학적 효능 (진지주의)',
    items: [
      '행복 호르몬 분비 — 고기 굽는 냄새만으로도 세로토닌이 분비된다는 설이 있습니다',
      '체력 회복 — 단백질 충전으로 퇴근 후 피로도가 눈에 띄게 줄어듭니다',
      '인생관 전환 — 한우 등심 한 점을 입에 넣는 순간 모든 고민이 사라집니다',
      '소비 만족감 극대화 — "내가 이걸 먹는 사람이구나"라는 자부심이 생깁니다',
    ]
  },
  '중식': {
    title: '중식의 효능 (진지주의)',
    items: [
      '마라 중독 효과 — 매운맛이 엔돌핀을 자극해 일종의 러너스하이를 경험할 수 있습니다',
      '빠른 포만감 — 짜장 한 그릇으로 4시간은 거뜬합니다',
      '기분 전환 — 훠궈 특유의 향이 일상의 스트레스를 날려줍니다',
      '친목 도모 — 같이 먹을수록 맛있어지는 신기한 현상이 있습니다',
    ]
  },
}

export default function RestaurantPage({ restaurant: r, similar }) {
  const slug = CAT_TO_SLUG[r.cat?.[0]] || null
  const catName = slug ? CAT_NAMES[slug] : null
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' 삼성역')}`
  const pageUrl = `https://gangnamwhat.com/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`

  // 날씨·기분 매칭
  const matchedWx = r.wx?.map(w => WX_COPY[w]).filter(Boolean) || []
  const matchedMoods = r.moods?.map(m => ({ mood: m, copy: MOOD_COPY[m] })).filter(x => x.copy) || []

  // 효능 콘텐츠
  const effectKey = r.cat?.find(c => FOOD_EFFECT[c])
  const effect = effectKey ? FOOD_EFFECT[effectKey] : null

  // 가격 파싱
  const priceMin = r.priceRange ? parseInt(r.priceRange.split('~')[0]).toLocaleString() : null
  const priceMax = r.priceRange ? parseInt(r.priceRange.split('~')[1] || r.priceRange.split('~')[0]).toLocaleString() : null

  // 메타 desc
  const metaDesc = `${r.name} — 삼성역 ${r.type} 맛집. ${r.addr} 위치, 영업시간 ${r.hours}. Google 평점 ⭐${r.rt} (${r.cnt?.toLocaleString()}개 리뷰). ${r.tags?.slice(0,3).join('·')} 특징. 강남뭐먹 AI 추천.`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": r.name,
    "description": metaDesc,
    "url": pageUrl,
    "servesCuisine": r.type,
    "address": { "@type":"PostalAddress", "streetAddress":r.addr, "addressLocality":"서울특별시 강남구", "addressCountry":"KR" },
    "geo": { "@type":"GeoCoordinates", "latitude":r.lat, "longitude":r.lng },
    "aggregateRating": { "@type":"AggregateRating", "ratingValue":r.rt, "reviewCount":r.cnt, "bestRating":5, "worstRating":1 },
    "openingHours": r.hours,
    "priceRange": r.priceRange ? `₩${r.priceRange}` : undefined,
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type":"Question", "name":`${r.name} 영업시간은?`, "acceptedAnswer":{ "@type":"Answer", "text":r.hours } },
      { "@type":"Question", "name":`${r.name} 위치(주소)는?`, "acceptedAnswer":{ "@type":"Answer", "text":`서울 강남구 ${r.addr} (삼성역 근처)` } },
      { "@type":"Question", "name":`${r.name} 가격대는?`, "acceptedAnswer":{ "@type":"Answer", "text": r.priceRange ? `1인 기준 약 ${r.priceRange}원입니다.` : '가격 정보는 매장에 직접 문의 바랍니다.' } },
      { "@type":"Question", "name":`${r.name} 주차 가능한가요?`, "acceptedAnswer":{ "@type":"Answer", "text":'삼성역 인근 공영주차장 또는 코엑스 주차장을 이용하시거나 대중교통을 권장합니다.' } },
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type":"ListItem", "position":1, "name":"강남뭐먹", "item":"https://gangnamwhat.com" },
      { "@type":"ListItem", "position":2, "name":"삼성역 맛집", "item":"https://gangnamwhat.com/dinner/samseong" },
      slug && { "@type":"ListItem", "position":3, "name":`삼성역 ${catName}`, "item":`https://gangnamwhat.com/dinner/samseong/category/${slug}` },
      { "@type":"ListItem", "position": slug ? 4 : 3, "name":r.name, "item":pageUrl },
    ].filter(Boolean)
  }

  return (
    <Layout title={`${r.name} — 삼성역 ${r.type} 맛집`} description={metaDesc} canonical={pageUrl}>
      <Head>
        <title>{r.name} | 삼성역 {r.type} 맛집 — 위치·메뉴·리뷰 | 강남뭐먹</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`${r.name}, 삼성역 ${r.type} 맛집, 삼성역 맛집 추천, 강남 ${r.type}, ${r.addr}, ${r.tags?.join(', ')}`} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`${r.name} — 삼성역 ${r.type} 맛집`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={pageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      {/* 브레드크럼 */}
      <div style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'10px 16px' }}>
        <div style={{ maxWidth:760, margin:'0 auto', fontSize:'.75rem', color:'var(--muted)', display:'flex', gap:5, flexWrap:'wrap', alignItems:'center' }}>
          <Link href="/" style={{ color:'var(--muted)' }}>강남뭐먹</Link> <span>›</span>
          <Link href="/dinner/samseong" style={{ color:'var(--muted)' }}>삼성역 맛집</Link> <span>›</span>
          {slug && <><Link href={`/dinner/samseong/category/${slug}`} style={{ color:'var(--muted)' }}>삼성역 {catName}</Link> <span>›</span></>}
          <span style={{ color:'var(--text)' }}>{r.name}</span>
        </div>
      </div>

      {/* 히어로 */}
      <section style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'28px 16px' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
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
                {r.exit4 && <span style={{ fontSize:'.7rem', background:'#1a1a00', padding:'2px 8px', borderRadius:100, border:'1px solid #4a4a00', color:'#ffd700' }}>🚇 4번출구 근처</span>}
              </div>
              <p style={{ fontSize:'.84rem', color:'var(--muted)', marginBottom:4 }}>📍 서울 강남구 {r.addr}</p>
              <p style={{ fontSize:'.84rem', color:'var(--muted)' }}>🕐 {r.hours}</p>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div style={{ display:'flex', gap:8, marginTop:16, flexWrap:'wrap' }}>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer"
              style={{ padding:'9px 18px', borderRadius:10, background:'var(--primary)', color:'#fff', fontSize:'.85rem', fontWeight:700, textDecoration:'none' }}>
              📍 지도로 보기
            </a>
            <Link href="/dinner/samseong"
              style={{ padding:'9px 18px', borderRadius:10, background:'var(--surface2)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.85rem', textDecoration:'none' }}>
              ✨ AI 맞춤 추천 받기
            </Link>
          </div>
        </div>
      </section>

      {/* 본문 */}
      <article style={{ maxWidth:760, margin:'0 auto', padding:'28px 16px 60px' }}>

        {/* 기본 정보 표 */}
        <h2 style={h2style}>📋 기본 정보</h2>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.88rem', marginBottom:28 }}>
          <tbody>
            {[
              ['식당 종류', r.type],
              ['주소', `서울 강남구 ${r.addr}`],
              ['영업시간', r.hours],
              ['가격대', r.priceRange ? `1인 약 ${r.priceRange}원` : '매장 문의'],
              ['Google 평점', `⭐ ${r.rt}점 (${r.cnt?.toLocaleString()}개 리뷰 기준)`],
              ['삼성역 4번출구', r.exit4 ? '✅ 도보 3분 이내' : '삼성역 도보권 내'],
            ].map(([label, val], i) => (
              <tr key={i} style={{ borderBottom:'1px solid var(--border)', background: i%2===0 ? 'transparent' : 'var(--surface)' }}>
                <td style={{ padding:'10px 14px', color:'var(--muted)', whiteSpace:'nowrap', width:110 }}>{label}</td>
                <td style={{ padding:'10px 14px' }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 메뉴 & 가격 */}
        <h2 style={h2style}>🍽️ 메뉴 & 가격</h2>
        <p style={pstyle}>
          <strong>{r.name}</strong>의 대표 메뉴와 가격대입니다. 정확한 메뉴는 방문 전 매장에 확인하세요.
        </p>
        <ul style={{ ...ulstyle }}>
          {r.tags?.filter(t => !['리뷰5000+','리뷰1000+','리뷰500+','아침가능','주차가능','혼밥가능','단체가능'].includes(t)).map((tag, i) => (
            <li key={i} style={listyle}>
              <strong>{tag}</strong>
              {r.priceRange && ` — ${priceMin}원~${priceMax}원 선`}
            </li>
          ))}
          {r.priceRange && (
            <li style={listyle}>평균 식사 가격: 1인 <strong>{priceMin}원 ~ {priceMax}원</strong></li>
          )}
        </ul>

        {/* 날씨별 추천 */}
        {matchedWx.length > 0 && (
          <>
            <h2 style={h2style}>🌤️ 이런 날씨에 특히 추천해요</h2>
            {matchedWx.map((wx, i) => (
              <div key={i} style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px', marginBottom:10, display:'flex', gap:12, alignItems:'flex-start' }}>
                <span style={{ fontSize:'1.5rem', flexShrink:0 }}>{wx.emoji}</span>
                <p style={{ ...pstyle, margin:0 }}>{wx.copy}</p>
              </div>
            ))}
          </>
        )}

        {/* 기분별 추천 */}
        {matchedMoods.length > 0 && (
          <>
            <h2 style={h2style}>😊 이런 기분일 때 추천</h2>
            <ul style={ulstyle}>
              {matchedMoods.map(({ mood, copy }, i) => (
                <li key={i} style={listyle}>
                  <strong>{mood}일 때</strong> — {copy}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* 이런 상황에 */}
        {r.scene?.length > 0 && (
          <>
            <h2 style={h2style}>💡 이런 상황에 딱입니다</h2>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7, marginBottom:24 }}>
              {r.scene.map((s, i) => (
                <span key={i} style={{ padding:'6px 14px', borderRadius:100, fontSize:'.82rem', background:'var(--surface)', border:'1px solid var(--border)' }}>
                  {s}
                </span>
              ))}
            </div>
          </>
        )}

        {/* 실제 리뷰 */}
        {r.rv?.length > 0 && (
          <>
            <h2 style={h2style}>💬 실제 방문자 리뷰</h2>
            <p style={pstyle}>
              삼성역 맛집 <strong>{r.name}</strong>에 실제 방문한 손님들의 Google 리뷰입니다.
            </p>
            {r.rv.map((rv, i) => (
              <div key={i} style={{ background:'var(--surface)', borderLeft:'3px solid var(--primary)', borderRadius:'0 10px 10px 0', padding:'12px 16px', marginBottom:10, fontSize:'.88rem', color:'#d0d0e0', lineHeight:1.7 }}>
                <span style={{ color:'var(--primary)', marginRight:6 }}>⭐ {r.rt}</span>
                {rv.replace(/ \(실제 Google 리뷰.*?\)/g, '')}
              </div>
            ))}
            <p style={{ fontSize:'.74rem', color:'var(--muted)', marginBottom:24 }}>
              * Google Maps 실제 방문 리뷰 기반입니다.
            </p>
          </>
        )}

        {/* 효능 섹션 (유머) */}
        {effect && (
          <>
            <h2 style={h2style}>🔬 {effect.title}</h2>
            <p style={pstyle}>
              과학적 근거는 없지만, 수많은 직장인의 체감 데이터를 기반으로 정리했습니다. (진지주의 금지)
            </p>
            <ul style={ulstyle}>
              {effect.items.map((item, i) => (
                <li key={i} style={listyle}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* 위치 & 찾아가는 법 */}
        <h2 style={h2style}>🗺️ 위치 & 찾아가는 법</h2>
        <p style={pstyle}>
          <strong>{r.name}</strong>은 서울 강남구 {r.addr}에 위치한 삼성역 맛집입니다.
          {r.exit4
            ? ' 삼성역 4번출구에서 도보 3분 이내로 접근성이 매우 좋습니다.'
            : ' 삼성역에서 도보로 이동 가능합니다. 정확한 경로는 지도를 참고해주세요.'}
        </p>
        <ul style={ulstyle}>
          <li style={listyle}><strong>지하철</strong> — 2호선·수인분당선 삼성역 하차</li>
          {r.exit4
            ? <li style={listyle}><strong>도보</strong> — 4번출구 기준 약 3분 이내</li>
            : <li style={listyle}><strong>도보</strong> — 삼성역 각 출구에서 도보 5~10분 내외</li>}
          <li style={listyle}><strong>주차</strong> — 코엑스 주차장 또는 인근 공영주차장 이용 가능</li>
        </ul>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'9px 18px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.85rem', textDecoration:'none', marginBottom:28 }}>
          📍 Google 지도에서 경로 보기
        </a>

        {/* FAQ */}
        <h2 style={h2style}>❓ 자주 묻는 질문 (FAQ)</h2>
        {[
          [`${r.name} 영업시간이 어떻게 되나요?`, `${r.name}의 영업시간은 ${r.hours}입니다. 방문 전 변경 여부를 확인하시길 권장합니다.`],
          [`${r.name} 주소(위치)는 어디인가요?`, `서울특별시 강남구 ${r.addr}에 위치합니다. 삼성역${r.exit4 ? ' 4번출구에서 도보 3분 거리' : ' 인근'}입니다.`],
          [`${r.name} 가격이 얼마인가요?`, r.priceRange ? `1인 기준 약 ${r.priceRange}원 선입니다. 메뉴와 구성에 따라 다를 수 있습니다.` : '정확한 가격은 매장에 문의하거나 방문 시 메뉴판을 확인해 주세요.'],
          [`${r.name} 혼밥 가능한가요?`, r.moods?.includes('혼밥') ? '네, 혼밥하기 좋은 분위기입니다. 혼자 방문해도 전혀 어색하지 않아요.' : '매장 좌석 구성에 따라 다르니 방문 전 확인을 권장합니다.'],
        ].map(([q, a], i) => (
          <div key={i} style={{ marginBottom:14, background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, overflow:'hidden' }}>
            <div style={{ padding:'12px 16px', fontWeight:700, fontSize:'.88rem', borderBottom:'1px solid var(--border)' }}>Q. {q}</div>
            <div style={{ padding:'12px 16px', fontSize:'.86rem', color:'var(--muted)', lineHeight:1.7 }}>A. {a}</div>
          </div>
        ))}

        {/* 비슷한 맛집 */}
        {similar?.length > 0 && (
          <>
            <h2 style={h2style}>🍽️ 삼성역 {r.type} 맛집 더 보기</h2>
            <p style={pstyle}>
              <strong>{r.name}</strong>와 비슷한 삼성역 {r.type} 맛집을 더 추천해드립니다.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:10, marginBottom:28 }}>
              {similar.map((s, i) => (
                <Link href={`/dinner/samseong/restaurant/${encodeURIComponent(s.name)}`} key={i}>
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
          {slug && (
            <Link href={`/dinner/samseong/category/${slug}`}
              style={{ padding:'9px 16px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.84rem', textDecoration:'none' }}>
              ← 삼성역 {catName} 전체 보기
            </Link>
          )}
          <Link href="/dinner/samseong"
            style={{ padding:'9px 16px', borderRadius:10, background:'var(--primary)', color:'#fff', fontSize:'.84rem', fontWeight:700, textDecoration:'none' }}>
            ✨ AI 맞춤 추천 받기
          </Link>
        </div>
      </article>
    </Layout>
  )
}

// 스타일 상수
const h2style = { fontSize:'1rem', fontWeight:800, marginBottom:12, marginTop:32, paddingBottom:8, borderBottom:'1px solid var(--border)' }
const pstyle  = { fontSize:'.88rem', color:'#c8c8d8', lineHeight:1.8, marginBottom:14 }
const ulstyle = { paddingLeft:0, marginBottom:24, listStyle:'none' }
const listyle = { fontSize:'.87rem', color:'#c0c0d0', padding:'7px 0', borderBottom:'1px solid var(--border)', lineHeight:1.7, paddingLeft:14, position:'relative' }
