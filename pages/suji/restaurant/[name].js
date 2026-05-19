import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import AdUnit from '../../../components/AdUnit'
import { fetchGovData } from '../../../lib/govData'
import GovBadges, { GovSourceFooter } from '../../../components/GovBadges'
import CategorySuggestButton from '../../../components/CategorySuggestButton'
import FaqAccordion from '../../../components/FaqAccordion'
import { VerdictBox, OperatorNote, AudienceCards, VisitChecklist, PostMidCategoryBanner, SimilarRestaurantCard } from '../../../components/RestaurantInsights'
import restaurants from '../../../data/suji'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  let name
  try { name = decodeURIComponent(params.name) } catch { name = params.name }
  const r = restaurants.find(x => x.name === name)
  if (!r) return { notFound: true }

  const sameCat = restaurants.filter(x =>
    x.name !== r.name
    && Array.isArray(x.cat) && Array.isArray(r.cat)
    && x.cat.some(c => r.cat.includes(c))
    && (x.rt > 0 || x.cnt > 0)
  )
  const refLo = parseInt((r.priceRange || '').split('~')[0]) || 0
  const distSq = (a, b) => Math.pow((a.lat||0)-(b.lat||0), 2) + Math.pow((a.lng||0)-(b.lng||0), 2)
  const picks = []
  const used = new Set()
  const hasImg = (x) => !!(x.imageUrl)
  const sortKey = (a, b) => ((hasImg(b)?1:0) - (hasImg(a)?1:0)) || (b.rt - a.rt) || (b.cnt - a.cnt)
  const best = [...sameCat].sort(sortKey)[0]
  if (best) { picks.push({ ...best, reason: `평점 ${best.rt}점·리뷰 ${(best.cnt||0).toLocaleString()}건 — 카테고리 상위권` }); used.add(best.name) }
  if (refLo) {
    const pm = sameCat
      .filter(x => !used.has(x.name) && x.priceRange)
      .map(x => { const lo = parseInt(x.priceRange.split('~')[0]) || 0; return { x, diff: Math.abs(lo - refLo) } })
      .filter(o => o.diff <= Math.max(refLo * 0.4, 8000))
      .sort((a,b) => ((hasImg(b.x)?1:0) - (hasImg(a.x)?1:0)) || (a.diff - b.diff))[0]
    if (pm) {
      const lo = parseInt(pm.x.priceRange.split('~')[0])
      const hi = parseInt(pm.x.priceRange.split('~')[1]) || lo
      picks.push({ ...pm.x, reason: `비슷한 가격대 (1인 ${lo.toLocaleString()}~${hi.toLocaleString()}원)` })
      used.add(pm.x.name)
    }
  }
  if (r.lat && r.lng) {
    const near = sameCat.filter(x => !used.has(x.name) && x.lat && x.lng).sort((a,b) => ((hasImg(b)?1:0) - (hasImg(a)?1:0)) || (distSq(a, r) - distSq(b, r)))[0]
    if (near) { picks.push({ ...near, reason: '도보 이동 가능한 가까운 거리' }); used.add(near.name) }
  }
  if (picks.length < 3) {
    for (const x of [...sameCat].sort(sortKey)) {
      if (used.has(x.name)) continue
      picks.push({ ...x, reason: `평점 ${x.rt}점, 같은 카테고리 추천` })
      used.add(x.name)
      if (picks.length >= 3) break
    }
  }
  const similar = picks.slice(0, 3).map(x => ({ name: x.name, type: x.type, e: x.e, rt: x.rt, priceRange: x.priceRange || null, imageUrl: x.imageUrl || '', cat: Array.isArray(x.cat) ? x.cat : [], reason: x.reason || '' }))

  const govData = await fetchGovData('suji', r.name)
  return { props: { restaurant: { ...r, rv: r.rv || [], tags: r.tags || [], moods: r.moods || [], scene: r.scene || [], cat: r.cat || [], keywords: r.keywords || [], menuItems: r.menuItems || [], imageUrl: r.imageUrl || '', imageUrl2: r.imageUrl2 || '', imageUrl3: r.imageUrl3 || '', imageUrl4: r.imageUrl4 || '', imageUrl5: r.imageUrl5 || '', imageUrl6: r.imageUrl6 || '', imageUrl7: r.imageUrl7 || '', imageUrl8: r.imageUrl8 || '' }, similar, govData }, revalidate: 300 }
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


// ── 식당별 고유 감성 인트로 생성 ─────────────────────────────
function buildIntro(r) {
  const cats  = r.cat   || []
  const wx    = r.wx    || []
  const moods = r.moods || []
  const tags  = r.tags  || []
  const name  = r.name
  const rt    = r.rt || 4.0
  const cnt   = r.cnt?.toLocaleString() || '다수'
  const type  = r.type  || ''
  const isBusy    = r.cnt >= 1000
  const isCheap   = r.priceRange && parseInt(r.priceRange.split('~')[0]) <= 15000
  const isPremium = r.priceRange && parseInt((r.priceRange.split('~')[1]||'0').replace(/[^0-9]/g,'')) >= 40000
  const isHighRated = rt >= 4.5

  // ── 국밥·해장 ──
  if (cats.includes('국밥') || cats.includes('국물')) {
    if (wx.includes('비') || wx.includes('눈') || wx.includes('쌀쌀함')) {
      return { emoji:'🌧️', lines:[
        '추적추적 비가 내리는 날, 우산 접으며 "오늘 뭐 먹지" 멍하니 서 있던 적 있으시죠.',
        `그 순간 딱 떠오르는 이름. ${name}.`,
        `뚝배기에서 펄펄 끓는 ${type} 한 그릇, 첫 숟가락에 오늘 하루가 다 녹아버립니다.`,
        isBusy ? `${cnt}명이 다녀간 이유가 한 모금에 이해됩니다.` : '이 따뜻함, 오늘 꼭 필요합니다.',
      ]}
    }
    if (moods.includes('혼밥') || tags.includes('혼밥가능')) {
      return { emoji:'🥣', lines:[
        '혼자 밥 먹는 게 전혀 어색하지 않은 공간이 있습니다.',
        `카운터 자리에 조용히 앉아 뚝배기 하나 시켜두는 것. ${name}에서의 점심은 그런 식입니다.`,
        `⭐${rt}점으로 검증된 맛. 혼밥의 완성도까지 책임집니다.`,
      ]}
    }
    if (isHighRated) {
      return { emoji:'🍲', lines:[
        `수지에서 ${type}으로 ⭐${rt}점을 유지한다는 게 어떤 의미인지,`,
        `${name} 뚝배기 한 그릇을 받아 들면 압니다.`,
        isCheap ? '가격도, 맛도, 양도. 이 세 박자를 다 잡았습니다.' : '진한 국물 한 그릇. "아, 살겠다" 소리가 절로 납니다.',
      ]}
    }
    return { emoji:'🍲', lines:[
      '야근 끝내고 수지 나오는 길. 발은 무겁고 배는 고프고.',
      `비싼 거 먹을 기력도 없는 그 타이밍에 딱 떠오르는 집, ${name}.`,
      `${type} 한 그릇 앞에 앉는 순간 "아, 살겠다" 소리가 절로 납니다.`,
    ]}
  }

  // ── 이자카야·야장·술집 ──
  if (cats.includes('이자카야') || cats.includes('야장') || cats.includes('와인바')) {
    if (isPremium || tags.some(t => t.includes('와인') || t.includes('위스키'))) {
      return { emoji:'🍷', lines:[
        '오늘 저녁, 조금 특별하게 마셔도 되는 날 있잖아요.',
        `${name}. 분위기도, 안주도, 잔 비우는 속도도 다른 곳입니다.`,
        `⭐${rt}점, ${cnt}개의 리뷰가 말해주는 수지 프리미엄 술자리.`,
      ]}
    }
    if (moods.includes('회식') || tags.includes('단체가능')) {
      return { emoji:'🎉', lines:[
        '"오늘 회식 어디 가지?" 팀원들 눈치 보며 검색하는 시간, 이제 끝냅니다.',
        `${name}. 수지에서 ⭐${rt}점으로 검증된 회식 장소입니다.`,
        `안주 첫 접시 나오는 순간 팀워크가 생성됩니다. (${cnt}명이 검증함)`,
      ]}
    }
    if (moods.includes('스트레스') || moods.includes('피곤함')) {
      return { emoji:'😤🍺', lines:[
        '회의는 길었고, 슬랙은 계속 울렸고, 퇴근은 늦었고.',
        `${name} 문 열고 들어가 첫 잔 따르는 순간. 그제야 어깨가 내려갑니다.`,
        isBusy ? `${cnt}명이 선택한 이 퇴근길 루틴. 오늘도 수고했습니다.` : '오늘 하루, 수고했습니다.',
      ]}
    }
    return { emoji:'🏮', lines:[
      '집에 가기엔 이른 밤. 그렇다고 거창한 곳도 아닌, 딱 맥주 한두 잔.',
      `${name}이 그런 곳입니다.`,
      `가볍게 들어와서 은근히 오래 있게 되는, ⭐${rt}점짜리 단골집.`,
    ]}
  }

  // ── 고기구이·한우 ──
  if (cats.includes('고기구이') || tags.some(t => t.includes('한우') || t.includes('등심'))) {
    if (isPremium || tags.some(t => t.includes('한우'))) {
      return { emoji:'🥩✨', lines:[
        `생일이든, 승진이든, 그냥 오늘 기분이 좋든.`,
        `${name}. ${tags.some(t=>t.includes('한우')) ? '한우' : '고기'} 한 점이 지갑은 울려도 입은 웃게 합니다.`,
        `⭐${rt}점, ${cnt}명이 인정한 수지 ${type} 맛집.`,
      ]}
    }
    if (moods.includes('데이트')) {
      return { emoji:'🔥❤️', lines:[
        '데이트 장소 고민에 에너지를 쓰지 않아도 됩니다.',
        `${name}. 불 앞에서 마주 앉아 고기 굽다 보면 분위기는 자동으로 만들어집니다.`,
        `수지 ${type} 맛집, ⭐${rt}점으로 검증 완료.`,
      ]}
    }
    return { emoji:'🔥', lines:[
      '고기 굽는 연기 냄새가 코를 자극하는 순간, 일상의 스트레스가 연기 따라 올라갑니다.',
      `${name}. ${isCheap ? '합리적인 가격에 ' : ''}직화 불향 앞에서 인간은 평등합니다.`,
      `팀장도, 사원도, ⭐${rt}점짜리 고기 앞에서는 모두 행복합니다.`,
    ]}
  }

  // ── 중식·훠궈·마라 ──
  if (cats.includes('중식') || cats.includes('훠궈')) {
    if (tags.some(t => t.includes('마라') || t.includes('훠궈'))) {
      return { emoji:'🌶️', lines:[
        '스트레스를 매운맛으로 해소하는 분들이 있습니다.',
        `${name}의 마라. 얼얼한 향이 코를 찌르는 순간 기분이 반쯤 풀립니다.`,
        `땀 흘리며 먹다 보면 오늘 일은 다 잊어버립니다. ⭐${rt}점, ${cnt}개 리뷰.`,
      ]}
    }
    if (isHighRated) {
      return { emoji:'🥢', lines:[
        `짜장이냐 짬뽕이냐, 그 행복한 고민 앞에 서게 만드는 집.`,
        `${name}. ⭐${rt}점이 말해주는 건, 어떤 걸 시켜도 실망이 없다는 겁니다.`,
        `${cnt}명이 선택한 수지 ${type} 맛집.`,
      ]}
    }
    return { emoji:'🥢', lines:[
      '짜장이냐 짬뽕이냐, 그 고민이 사실 제일 행복한 순간입니다.',
      `${name} 앞에 서면 항상 그 고민이 시작됩니다.`,
      '오늘도 그 행복한 선택, 즐겨보세요.',
    ]}
  }

  // ── 일식·스시·오마카세 ──
  if (cats.includes('일식') || tags.some(t => t.includes('오마카세') || t.includes('스시') || t.includes('초밥'))) {
    if (tags.some(t => t.includes('오마카세'))) {
      return { emoji:'🍣🌙', lines:[
        '셰프가 그날의 최선을 담아 한 점씩 올려주는 경험.',
        `${name} 오마카세. 지갑은 울지만 입은 웃습니다.`,
        `⭐${rt}점. 수지에서 이 수준이라면 충분히 특별한 저녁입니다.`,
      ]}
    }
    return { emoji:'🍣', lines:[
      `신선한 네타 한 점, 샤리와의 황금 비율.`,
      `${name}에서 그 완성도를 느껴보세요.`,
      `⭐${rt}점, ${isCheap ? '부담 없는 가격까지 챙긴' : '수지 숨은'} 일식 맛집.`,
    ]}
  }

  // ── 양식·파스타·스테이크 ──
  if (cats.includes('양식') || cats.includes('이탈리안') || cats.includes('스테이크')) {
    if (moods.includes('데이트')) {
      return { emoji:'🍷', lines:[
        '데이트 장소 고민, 더 이상 안 해도 됩니다.',
        `${name}. 분위기·맛·가격 세 박자가 맞는 수지 ${type} 맛집.`,
        `⭐${rt}점. 상대방이 먼저 "여기 또 오자"를 말하게 됩니다.`,
      ]}
    }
    return { emoji:'🍝', lines:[
      '오늘은 뭔가 다르게 먹고 싶은 날.',
      `${name}. 파스타 면발이 소스를 머금는 찰진 식감, 혹은 육즙 가득한 스테이크.`,
      `⭐${rt}점이 검증한 수지 ${type}.`,
    ]}
  }

  // ── 치킨·야장 ──
  if (cats.includes('치킨')) {
    return { emoji:'🍺🐔', lines:[
      '오늘 같은 날엔 역시 치맥입니다.',
      `${name}. 바삭한 튀김옷 한 입에 시원한 맥주 한 모금.`,
      `⭐${rt}점, ${cnt}명이 선택한 수지 치킨 맛집.`,
    ]}
  }

  // ── fallback ──
  return { emoji: r.e || '🍽️', lines:[
    `수지에서 ${type}을 찾는다면, 선택지를 좁혀드립니다.`,
    `${name}. ⭐${rt}점에 ${cnt}개의 리뷰.`,
    isBusy ? `이 많은 분들이 그냥 오신 게 아닙니다.` : (isCheap ? `${fmtPrice(r.priceRange)}원, 가성비까지 챙겼습니다.` : '한 번 드셔보시면 압니다.'),
  ]}
}
// ── 이미지 검색 URL 생성 (Unsplash 기반) ─────────────────────


// 네이버 지도 URL - 이름에서 지역 suffix 제거 + 좌표 중심 검색
// 가격 구분자 포맷: "25000~40000" → "25,000~40,000"
function fmtPrice(p) {
  if (!p) return ''
  return p.split('~').map(n => parseInt(n).toLocaleString('ko-KR')).join('~')
}


function formatHours(h) {
  if (!h) return h
  return h.replace(/AM (\d+:\d+)/g, '$1 AM').replace(/PM (\d+:\d+)/g, '$1 PM')
}
function naverMapUrl(name, lat, lng) {
  const cleaned = name
    .replace(/ (수지점|성남점|분당점|정자점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const query = cleaned + ' 수지'
  if (lat && lng) return `https://map.naver.com/v5/search/${encodeURIComponent(query)}?c=${lng},${lat},15,0,0,0,dh`
  return `https://map.naver.com/v5/search/${encodeURIComponent(query)}`
}

export default function RestaurantPage({ restaurant: r, similar, govData }) {
  const slug = CAT_TO_SLUG[r.cat?.[0]] || null
  const catName = slug ? CAT_NAMES[slug] : null
  const mapUrl = naverMapUrl(r.name, r.lat, r.lng)
  const pageUrl = `https://dinner.ambitstock.com/suji/restaurant/${encodeURIComponent(r.name)}`

  // 날씨·기분 매칭
  const matchedWx = r.wx?.map(w => WX_COPY[w]).filter(Boolean) || []
  const matchedMoods = r.moods?.map(m => ({ mood: m, copy: MOOD_COPY[m] })).filter(x => x.copy) || []


  // 가격 파싱
  const priceMin = r.priceRange ? parseInt(r.priceRange.split('~')[0]).toLocaleString() : null
  const priceMax = r.priceRange ? parseInt(r.priceRange.split('~')[1] || r.priceRange.split('~')[0]).toLocaleString() : null

  // 감성 인트로 + 이미지
  const intro = buildIntro(r)

  // 메타 desc
  const metaDesc = `${r.name} — 수지 ${r.type} 맛집. ${r.addr} 위치, 영업시간 ${formatHours(r.hours)}. 카카오맵 평점 ⭐${r.rt} (${r.cnt?.toLocaleString()}개 리뷰). ${r.tags?.slice(0,3).join('·')} 특징. 오늘뭐먹지 AI 추천.`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": r.name,
    "description": metaDesc,
    "url": pageUrl,
    ...(r.imageUrl ? { "image": r.imageUrl2 ? [r.imageUrl, r.imageUrl2] : r.imageUrl } : {}),
    ...(r.tel ? { "telephone": r.tel } : {}),
    "servesCuisine": r.type,
    "address": { "@type":"PostalAddress", "streetAddress":r.addr !== 'South Korea' ? r.addr : '', "addressLocality":"경기도 용인시 수지구", "addressCountry":"KR" },
    "geo": { "@type":"GeoCoordinates", "latitude":r.lat, "longitude":r.lng },
    "aggregateRating": { "@type":"AggregateRating", "ratingValue":r.rt, "reviewCount":r.cnt, "bestRating":5, "worstRating":1 },
    "openingHours": r.hours,
    "priceRange": r.priceRange ? `₩${fmtPrice(r.priceRange)}` : undefined,
    "acceptsReservations": r.reservation ? "True" : "False",
    ...(r.menuItems && r.menuItems.length > 0 ? { "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": { "@type":"MenuSection", "name":"대표 메뉴", "hasMenuItem": r.menuItems.slice(0, 8).map(m => ({
        "@type": "MenuItem", "name": m.menuName,
        ...(m.price ? { "offers": { "@type":"Offer", "price": m.price, "priceCurrency":"KRW" } } : {}),
        ...(m.description ? { "description": m.description } : {})
      }))}
    }} : {}),
    ...(r.keywords && r.keywords.length > 0 ? { "keywords": r.keywords.join(', ') } : {}),
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type":"Question", "name":`${r.name} 영업시간은?`, "acceptedAnswer":{ "@type":"Answer", "text":r.hours || '매장에 직접 문의 바랍니다.' } },
      { "@type":"Question", "name":`${r.name} 위치(주소)는?`, "acceptedAnswer":{ "@type":"Answer", "text":`경기 용인시 ${r.addr} (수지구청역 근처)` } },
      { "@type":"Question", "name":`${r.name} 가격대는?`, "acceptedAnswer":{ "@type":"Answer", "text": r.priceRange ? `1인 기준 약 ${fmtPrice(r.priceRange)}원입니다.` : '가격 정보는 매장에 직접 문의 바랍니다.' } },
      { "@type":"Question", "name":`${r.name} 주차 가능한가요?`, "acceptedAnswer":{ "@type":"Answer", "text": r.parking ? '주차 가능합니다. 상세한 주차 정보는 매장에 문의하세요.' : '수지구청역 인근 공영주차장을 이용하시거나 대중교통을 권장합니다.' } },
      { "@type":"Question", "name":`${r.name} 예약 가능한가요?`, "acceptedAnswer":{ "@type":"Answer", "text": r.reservation ? '예약 가능합니다. 전화 또는 네이버 예약을 이용하세요.' : '예약 없이 방문 가능합니다. 웨이팅이 있을 수 있습니다.' } },
      ...(r.menuItems && r.menuItems.length > 0 ? [{ "@type":"Question", "name":`${r.name} 대표 메뉴와 가격은?`, "acceptedAnswer":{ "@type":"Answer", "text": r.menuItems.slice(0,5).map(m => `${m.menuName}${m.price ? ` ${m.price.toLocaleString()}원` : ''}`).join(', ') } }] : []),
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type":"ListItem", "position":1, "name":"오늘뭐먹지", "item":"https://dinner.ambitstock.com" },
      { "@type":"ListItem", "position":2, "name":"수지 맛집", "item":"https://dinner.ambitstock.com/suji" },
      slug && { "@type":"ListItem", "position":3, "name":`수지 ${catName}`, "item":`https://dinner.ambitstock.com/suji/category/${slug}` },
      { "@type":"ListItem", "position": slug ? 4 : 3, "name":r.name, "item":pageUrl },
    ].filter(Boolean)
  }

  return (
    <Layout title={`${r.name} | 수지 ${r.type}`} description={metaDesc} canonical={pageUrl}>
      <Head>
        <meta name="keywords" content={`${r.name}, 수지 ${r.type}, 수지구청역 ${r.type}, ${r.tags?.join(', ')}`} />
        <meta property="og:title" content={`${r.name} — 수지 ${r.type} 맛집`} />
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
          <Link href="/suji" style={{ color:'var(--muted)' }}>수지 맛집</Link> <span>›</span>
          {slug && <><Link href={`/suji/category/${slug}`} style={{ color:'var(--muted)' }}>수지 {catName}</Link> <span>›</span></>}
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
                {r.priceRange && <span className="tag price">💰 {fmtPrice(r.priceRange)}원</span>}
                {r.exit4 && <span style={{ fontSize:'.7rem', background:'#1a1a00', padding:'2px 8px', borderRadius:100, border:'1px solid #4a4a00', color:'#ffd700' }}>🚇 수지구청역 근처</span>}
              </div>
              {r.addr && r.addr !== 'South Korea' && <p style={{ fontSize:'.84rem', color:'var(--muted)', marginBottom:4 }}>📍 경기 용인시 {r.addr}</p>}
              <p style={{ fontSize:'.84rem', color:'var(--muted)' }}>🕐 {formatHours(r.hours)}</p>
            </div>
          </div>
          <div style={{ display:'flex', gap:8, marginTop:16, flexWrap:'wrap' }}>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer"
              style={{ padding:'9px 18px', borderRadius:10, background:'var(--primary)', color:'#fff', fontSize:'.85rem', fontWeight:700, textDecoration:'none' }}>
              📍 지도로 보기
            </a>
            <Link href="/suji"
              style={{ padding:'9px 18px', borderRadius:10, background:'var(--surface2)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.85rem', textDecoration:'none' }}>
              ✨ AI 맞춤 추천 받기
            </Link>
            <Link href="/suji?tab=roulette"
              style={{ padding:'9px 18px', borderRadius:10, background:'#FF6B35', color:'#fff', fontSize:'.85rem', fontWeight:700, textDecoration:'none' }}>
              🎡 수지구청역 뭐먹지? 룰렛돌리기
            </Link>
          </div>
        </div>
      </section>

      {/* 본문 */}
      <article style={{ maxWidth:760, margin:'0 auto', padding:'28px 16px 60px' }}>

        {/* CTA 배너 — 지역 AI 추천 유도 */}
        <a href="/suji?tab=roulette" style={{ textDecoration:'none', display:'block', marginBottom:20 }}>
          <div style={{
            background:'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FFB347 100%)',
            borderRadius:16, padding:'18px 20px',
            boxShadow:'0 4px 20px rgba(255,107,53,.35)',
            display:'flex', alignItems:'center', gap:14,
            cursor:'pointer',
          }}>
            <div style={{ fontSize:'2rem', flexShrink:0 }}>🎯</div>
            <div style={{ flex:1 }}>
              <div style={{ color:'#fff', fontWeight:900, fontSize:'1rem', marginBottom:4, lineHeight:1.3 }}>
                수지구청역 뭐 먹을지 아직 못 정하셨나요?
              </div>
              <div style={{ color:'rgba(255,255,255,.85)', fontSize:'.8rem', marginBottom:10 }}>
                수지·죽전·광교 맛집 AI 추천 — 날씨·기분·예산에 맞게 AI가 바로 골라드려요
              </div>
              <span style={{
                display:'inline-block', background:'#fff',
                color:'#FF6B35', fontWeight:800, fontSize:'.82rem',
                padding:'6px 16px', borderRadius:20,
                boxShadow:'0 2px 8px rgba(0,0,0,.15)',
              }}>✨ 무료 AI 추천 받기 →</span>
            </div>
          </div>
        </a>
        {/* 상단 광고 */}
        <AdUnit slot="9138210374" format="auto" style={{ marginBottom:20 }} />

        {/* 기본 정보 표 */}
        <GovBadges govData={govData} />
        <VerdictBox restaurant={r} govData={govData} />
        <h2 style={h2style}>📋 기본 정보</h2>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.88rem', marginBottom:28 }}>
          <tbody>
            {[
              ['식당 종류', r.type],
              ['주소', r.addr && r.addr !== 'South Korea' ? `경기 용인시 ${r.addr}` : '위치 정보 준비 중'],
              ['영업시간', r.hours || '영업일 매장 확인 (미제공)'],
              ['가격대', r.priceRange ? `1인 약 ${fmtPrice(r.priceRange)}원` : '매장 문의'],
              ['평점 (카카오맵)', r.rt > 0 ? `⭐ ${r.rt}점 · 리뷰 ${(r.cnt||0).toLocaleString()}건` : ((r.cnt||0) > 0 ? `카카오맵 후기 미제공 · 누적 리뷰 ${(r.cnt||0).toLocaleString()}건` : '카카오맵 후기 미제공')],
              ['수지구청역', r.exit4 ? '✅ 도보 5분 이내' : '수지 도보권 내'],
            ].map(([label, val], i) => (
              <tr key={i} style={{ borderBottom:'1px solid var(--border)', background: i%2===0 ? 'transparent' : 'var(--surface)' }}>
                <td style={{ padding:'10px 14px', color:'var(--muted)', whiteSpace:'nowrap', width:110 }}>{label}</td>
                <td style={{ padding:'10px 14px' }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <OperatorNote restaurant={r} regionName="수지" totalRegionRestaurants={678} govData={govData} />


        {/* 방문자 키워드 뱃지 */}
        {r.keywords?.length > 0 && (
          <>
        <h2 style={h2style}>🏷️ 방문자 키워드</h2>
            <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:24 }}>
              {r.keywords.map((kw, i) => (
                <span key={i} style={{ padding:'5px 12px', borderRadius:100, fontSize:'.78rem', background:'linear-gradient(135deg, rgba(99,102,241,.15), rgba(168,85,247,.15))', border:'1px solid rgba(99,102,241,.3)', color:'#a78bfa' }}>
                  {kw}
                </span>
              ))}
            </div>
          </>
        )}
        {/* 식당 이미지 갤러리 (최대 4장 분배) */}
        {(() => {
          const imgs = [r.imageUrl, r.imageUrl2, r.imageUrl3, r.imageUrl4].filter(Boolean)
          if (!imgs.length) return (() => {
            const cat = (Array.isArray(r.cat) && r.cat[0]) || r.type || '맛집'
            const CAT_FB = { '한식':{e:'🍚',g:'linear-gradient(135deg, #F97316 0%, #DC2626 100%)'}, '국밥':{e:'🍲',g:'linear-gradient(135deg, #EA580C 0%, #B45309 100%)'}, '고기구이':{e:'🥩',g:'linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)'}, '중식':{e:'🥢',g:'linear-gradient(135deg, #DC2626 0%, #F59E0B 100%)'}, '일식':{e:'🍣',g:'linear-gradient(135deg, #0EA5E9 0%, #1E40AF 100%)'}, '이자카야':{e:'🍶',g:'linear-gradient(135deg, #4338CA 0%, #1E1B4B 100%)'}, '야장':{e:'🍻',g:'linear-gradient(135deg, #D97706 0%, #92400E 100%)'}, '양식':{e:'🍝',g:'linear-gradient(135deg, #C026D3 0%, #7C3AED 100%)'}, '카페':{e:'☕',g:'linear-gradient(135deg, #92400E 0%, #451A03 100%)'}, '치킨':{e:'🍗',g:'linear-gradient(135deg, #F59E0B 0%, #DC2626 100%)'}, '분식':{e:'🍢',g:'linear-gradient(135deg, #F472B6 0%, #DB2777 100%)'}, '아시안':{e:'🍜',g:'linear-gradient(135deg, #059669 0%, #064E3B 100%)'}, '기타':{e:'🍽️',g:'linear-gradient(135deg, #6B7280 0%, #1F2937 100%)'} }
            let fb = CAT_FB['기타']
            for (const k of Object.keys(CAT_FB)) { if (cat.includes(k)) { fb = CAT_FB[k]; break } }
            return (
              <div style={{ position:'relative', width:'100%', height:240, borderRadius:12, marginBottom:24, overflow:'hidden', background:fb.g, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <div style={{ fontSize:'5rem', opacity:.5 }}>{fb.e}</div>
                <div style={{ position:'absolute', bottom:14, left:18, color:'#fff', fontWeight:800, fontSize:'.95rem', textShadow:'0 2px 8px rgba(0,0,0,.4)' }}>📷 식당 이미지 수집 중 — {cat} 카테고리</div>
              </div>
            )
          })()
          const main = imgs[0]
          const rest = imgs.slice(1, 4)
          return (
            <div style={{ display:'grid', gap:8, marginBottom:24, gridTemplateColumns: rest.length === 0 ? '1fr' : rest.length === 1 ? '1fr 1fr' : '2fr 1fr' }}>
              <img referrerPolicy="no-referrer" src={main} alt={`${r.name} 대표 사진`} loading="lazy"
                style={{ width:'100%', height: rest.length ? 320 : 240, objectFit:'cover', borderRadius:12, display:'block' }}
                onError={(e) => { e.target.style.display = 'none' }} />
              {rest.length > 0 && (
                <div style={{ display:'grid', gap:8, gridTemplateRows: `repeat(${rest.length}, 1fr)`, height: 320 }}>
                  {rest.map((u, idx) => (
                    <img referrerPolicy="no-referrer" key={idx} src={u} alt={`${r.name} 사진 ${idx+2}`} loading="lazy"
                      style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:12, display:'block', minHeight: 0 }}
                      onError={(e) => { e.target.style.display = 'none' }} />
                  ))}
                </div>
              )}
            </div>
          )
        })()}

        {/* 메뉴 & 가격 */}
        <AdUnit slot="9138210374" format="auto" style={{ marginBottom:12 }} />
        <h2 style={h2style}>🍽️ 메뉴 & 가격</h2>
        {r.menuItems?.length > 0 ? (
          <>
            <p style={pstyle}><strong>{r.name}</strong>의 대표 메뉴와 가격입니다. 실제 가격은 방문 시 확인하세요.</p>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.88rem', marginBottom:28 }}>
              <thead>
                <tr style={{ borderBottom:'2px solid var(--border)' }}>
                  <th style={{ padding:'10px 14px', textAlign:'left', color:'var(--muted)', fontWeight:600 }}>메뉴</th>
                  <th style={{ padding:'10px 14px', textAlign:'right', color:'var(--muted)', fontWeight:600 }}>가격</th>
                </tr>
              </thead>
              <tbody>
                {r.menuItems.map((mi, i) => (
                  <tr key={i} style={{ borderBottom:'1px solid var(--border)', background: i%2===0 ? 'transparent' : 'var(--surface)' }}>
                    <td style={{ padding:'10px 14px' }}>{mi.menuName ? <><strong>{mi.menuName}</strong>{mi.description && <><br/><span style={{ fontSize:'.8rem', color:'var(--muted)' }}>{mi.description}</span></>}</> : (mi.description || mi.name || '-')}</td>
                    <td style={{ padding:'10px 14px', textAlign:'right', fontWeight:600 }}>{mi.price ? `${mi.price.toLocaleString()}원` : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <p style={pstyle}><strong>{r.name}</strong>의 대표 메뉴와 가격대입니다. 정확한 메뉴는 방문 전 매장에 확인하세요.</p>
            <ul style={{ ...ulstyle }}>
              {r.tags?.filter(t => !['리뷰5000+','리뷰1000+','리뷰500+','아침가능','주차가능','혼밥가능','단체가능',
                '깔끔','친절','빠름','넓음','조용함','가성비','혼밥','데이트','뷰맛집','분위기좋음','노포',
                '힙함','모던','캐주얼','라이브음악','포차감성','프라이빗','룸'].includes(t)
                && !['깔끔','친절','빠름','넓음','조용함','가성비','힙한 곳','모던','캐주얼','라이브음악',
                  '포차감성','프라이빗','분위기최고'].some(kw => t.includes(kw))
              ).map((tag, i) => (
                <li key={i} style={listyle}><strong>{tag}</strong></li>
              ))}
              {r.priceRange && (
                <li style={listyle}>1인 평균 가격: <strong>{priceMin}원 ~ {priceMax}원</strong></li>
              )}
            </ul>
          </>
        )}        <PostMidCategoryBanner region="suji" regionName="수지" restaurant={r} />

        <h2 style={h2style}>👥 이런 분에게 추천</h2>
        <AudienceCards restaurant={r} />


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

        {/* 방문자 키워드 */}
        {((r.tags?.length > 0) || (r.keywords?.length > 0) || (r.moods?.length > 0)) && (
          <>
        <h2 style={h2style}>🏷️ 방문자 키워드</h2>
            <p style={pstyle}>실제 방문자들이 자주 언급한 키워드입니다.</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:16 }}>
              {[...(r.tags||[]), ...(r.keywords||[]), ...(r.moods||[])].filter((v,i,a)=>a.indexOf(v)===i).slice(0,12).map((kw, i) => (
                <span key={i} style={{ padding:'6px 14px', borderRadius:100, fontSize:'.82rem', background:'var(--surface)', border:'1px solid var(--border)' }}>
                  {kw}
                </span>
              ))}
            </div>
            <a href={naverMapUrl(r.name)}
              target="_blank" rel="noopener noreferrer"
              style={{
                display:'inline-flex', alignItems:'center', gap:6,
                marginTop:4, marginBottom:24,
                fontSize:'.78rem', color:'var(--muted)',
                border:'1px solid var(--border)', borderRadius:8,
                padding:'6px 12px', textDecoration:'none',
                background:'var(--surface)', transition:'all .15s',
              }}>
              🗺️ 네이버에서 실제 리뷰 보러가기 →
            </a>
          </>
        )}


        {/* 위치 & 찾아가는 법 */}
        
        {/* 추가 갤러리 (5~6번째 이미지) */}
        {(r.imageUrl5 || r.imageUrl6) && (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:24 }}>
            {[r.imageUrl5, r.imageUrl6].filter(Boolean).map((u, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img referrerPolicy="no-referrer" key={i} src={u} alt={`${r.name} 사진 ${i+5}`} loading="lazy"
                style={{ width:'100%', height:220, objectFit:'cover', borderRadius:12, display:'block' }}
                onError={(e) => { e.target.style.display = 'none' }} />
            ))}
          </div>
        )}
        <AdUnit slot="9138210374" format="auto" style={{ marginBottom:12 }} />

        <h2 style={h2style}>🗺️ 위치 & 찾아가는 법</h2>
        <p style={pstyle}>
          <strong>{r.name}</strong>은 경기 용인시 {r.addr}에 위치한 수지 맛집입니다.
          {r.exit4
            ? ' 수지구청역에서 도보 5분 이내로 접근성이 매우 좋습니다.'
            : ' 수지에서 도보로 이동 가능합니다. 정확한 경로는 지도를 참고해주세요.'}
        </p>
        <ul style={ulstyle}>
          <li style={listyle}><strong>지하철</strong> — 신분당선 수지구청역 하차</li>
          {r.exit4
            ? <li style={listyle}><strong>도보</strong> — 수지구청역 기준 약 5분 이내</li>
            : <li style={listyle}><strong>도보</strong> — 수지구청역 각 출구에서 도보 5~10분 내외</li>}
          <li style={listyle}><strong>주차</strong> — 인근 공영주차장 이용 가능</li>
        </ul>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'9px 18px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.85rem', textDecoration:'none', marginBottom:28 }}>
          📍 네이버 지도에서 경로 보기
        </a>

        {/* ── 감성 인트로 ── */}
        <div style={{
          background:'linear-gradient(135deg, var(--surface2) 0%, var(--surface) 100%)',
          border:'1px solid var(--border)',
          borderRadius:14,
          padding:'22px 20px',
          marginBottom:28,
        }}>
          <div style={{ fontSize:'1.8rem', marginBottom:10 }}>{intro.emoji}</div>
          {intro.lines.map((line, i) => (
            <p key={i} style={{
              fontSize: i === 0 ? '.97rem' : '.9rem',
              color: i === 0 ? 'var(--text)' : 'var(--muted)',
              fontWeight: i === 0 ? 700 : 400,
              lineHeight: 1.85,
              marginBottom: i === intro.lines.length - 1 ? 0 : 4,
            }}>{line}</p>
          ))}
        </div>

        {/* FAQ */}
        {/* 추가 갤러리 (7~8번째 이미지) */}
        {(r.imageUrl7 || r.imageUrl8) && (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:24 }}>
            {[r.imageUrl7, r.imageUrl8].filter(Boolean).map((u, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img referrerPolicy="no-referrer" key={i} src={u} alt={`${r.name} 사진 ${i+7}`} loading="lazy"
                style={{ width:'100%', height:200, objectFit:'cover', borderRadius:12, display:'block' }}
                onError={(e) => { e.target.style.display = 'none' }} />
            ))}
          </div>
        )}

        <h2 style={h2style}>📌 방문 전 체크포인트</h2>
        <VisitChecklist restaurant={r} />
        
                <AdUnit slot="9138210374" format="auto" style={{ marginBottom:12 }} />
        <h2 style={h2style}>❓ 자주 묻는 질문 (FAQ)</h2>
        <FaqAccordion defaultOpenAll items={[
          [`${r.name} 영업시간이 어떻게 되나요?`, `${r.name}의 영업시간은 ${formatHours(r.hours)}입니다. 방문 전 변경 여부를 확인하시길 권장합니다.`],
          [`${r.name} 주소(위치)는 어디인가요?`, `경기도 용인시 수지구 ${r.addr}에 위치합니다. 수지${r.exit4 ? ' 인근' : ' 인근'}입니다.`],
          [`${r.name} 가격이 얼마인가요?`, r.priceRange ? `1인 기준 약 ${fmtPrice(r.priceRange)}원 선입니다. 메뉴와 구성에 따라 다를 수 있습니다.` : '정확한 가격은 매장에 문의하거나 방문 시 메뉴판을 확인해 주세요.'],
          [`${r.name} 혼밥 가능한가요?`, r.moods?.includes('혼밥') ? '네, 혼밥하기 좋은 분위기입니다. 혼자 방문해도 전혀 어색하지 않아요.' : '매장 좌석 구성에 따라 다르니 방문 전 확인을 권장합니다.'],
        ]} />

        {/* 비슷한 맛집 */}
        {similar?.length > 0 && (
          <>
        <h2 style={h2style}>🍽️ 수지 {(r.cat && r.cat[0]) || r.type} 맛집 더 보기</h2>
            <p style={pstyle}>
              <strong>{r.name}</strong>와 같은 카테고리에서 평점·가격·거리 기준으로 한 곳씩 골라봤습니다.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(180px, 1fr))', gap:12, marginBottom:28 }}>
              {similar.map((s, i) => (
                <SimilarRestaurantCard key={i} restaurant={s} regionPath="/suji" />
              ))}
            </div>
          </>
        )}

        {/* 하단 네비 */}
        <div style={{ display:'flex', gap:10, flexWrap:'wrap', paddingTop:20, borderTop:'1px solid var(--border)' }}>
          {slug && (
            <Link href={`/suji/category/${slug}`}
              style={{ padding:'9px 16px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.84rem', textDecoration:'none' }}>
              ← 수지 {catName} 전체 보기
            </Link>
          )}
          <Link href="/suji"
            style={{ padding:'9px 16px', borderRadius:10, background:'var(--primary)', color:'#fff', fontSize:'.84rem', fontWeight:700, textDecoration:'none' }}>
            ✨ AI 맞춤 추천 받기
          </Link>
        </div>
        <GovSourceFooter govData={govData} />

      </article>
    </Layout>
  )
}

// 스타일 상수
const h2style = { fontSize:'1rem', fontWeight:800, marginBottom:12, marginTop:32, paddingBottom:8, borderBottom:'1px solid var(--border)', color:'var(--text)' }
const pstyle  = { fontSize:'.88rem', color:'var(--muted)', lineHeight:1.8, marginBottom:14 }
const ulstyle = { paddingLeft:0, marginBottom:24, listStyle:'none' }
const listyle = { fontSize:'.87rem', color:'var(--text)', padding:'7px 0', borderBottom:'1px solid var(--border)', lineHeight:1.7, paddingLeft:14, position:'relative' }
