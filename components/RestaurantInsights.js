/**
 * RestaurantInsights — 식당 상세 페이지 인사이트 섹션들
 *  - VerdictBox: 한 줄 결론 박스
 *  - OperatorNote: 운영자 노트 (큐레이터 페르소나 + 3단락)
 *  - AudienceCards: 이런 분에게 추천 3가지 시나리오
 *  - VisitChecklist: 방문 전 체크포인트 5개+
 *  - PostMidCategoryBanner: 포스트 중간 카테고리 모두 보기 배너
 */

const CAT_LABEL_BY_SLUG = {
  meat:'고기집', chinese:'중식', izakaya:'이자카야·술집', japanese:'일식·스시',
  gukbap:'국밥·해장', western:'양식·스테이크', chicken:'치킨·야장',
  date:'데이트 식당', group:'회식 장소', lunch:'점심 식당', budget:'가성비 식당',
}

function cat_from_restaurant(r) {
  const cats = Array.isArray(r.cat) ? r.cat : (r.cat ? [r.cat] : [])
  const text = cats.join(' ') + ' ' + (r.type || '')
  const map = [
    ['고기','meat'], ['구이','meat'], ['삼겹','meat'], ['갈비','meat'], ['한우','meat'], ['족발','meat'], ['보쌈','meat'],
    ['중식','chinese'], ['중국','chinese'], ['마라','chinese'], ['짜장','chinese'], ['짬뽕','chinese'], ['훠궈','chinese'],
    ['일식','japanese'], ['스시','japanese'], ['오마카세','japanese'], ['라멘','japanese'], ['돈카츠','japanese'], ['우동','japanese'],
    ['이자카야','izakaya'], ['술집','izakaya'], ['포차','izakaya'], ['야장','izakaya'],
    ['국밥','gukbap'], ['순대','gukbap'], ['곰탕','gukbap'], ['설렁탕','gukbap'], ['해장','gukbap'],
    ['양식','western'], ['이탈리안','western'], ['파스타','western'], ['피자','western'], ['스테이크','western'],
    ['치킨','chicken'],
  ]
  for (const [kw, slug] of map) {
    if (text.includes(kw)) return slug
  }
  return null
}

export function VerdictBox({ restaurant: r, govData }) {
  const rating = r.rt || 0
  const cnt = r.cnt || 0
  const price = (r.priceRange || '').trim()
  const lo = price.includes('~') ? parseInt(price.split('~')[0]) : 0
  const hi = price.includes('~') ? parseInt(price.split('~')[1]) : 0
  const cat = cat_from_restaurant(r) || ''
  const catLabel = CAT_LABEL_BY_SLUG[cat] || (r.type || '식당')

  const lines = []
  if (lo && hi) {
    lines.push(`1인 ${lo.toLocaleString()}~${hi.toLocaleString()}원 가격대의 ${catLabel}입니다`)
  } else {
    lines.push(`${catLabel} 카테고리에 속하는 식당입니다`)
  }
  if (rating >= 4.5 && cnt >= 100) {
    lines.push(`평점 ${rating}점, 누적 리뷰 ${cnt.toLocaleString()}건으로 카테고리 평균 위에 자리한 곳`)
  } else if (rating > 0) {
    lines.push(`평점 ${rating}점, 리뷰 ${cnt}건이 누적된 상태`)
  }
  if (govData?.business_status === 'active' && govData?.license_date) {
    const y = govData.license_date.slice(0, 4)
    lines.push(`${y}년부터 영업 중`)
  }
  if (govData?.hygiene_grade) {
    lines.push(`식약처 위생등급 인증`)
  }
  const verdict = lines.join(' · ') + '입니다.'

  return (
    <div style={{
      margin:'18px 0 22px', padding:'18px 22px',
      background:'linear-gradient(135deg, rgba(99,102,241,.08), rgba(168,85,247,.06))',
      border:'1px solid rgba(99,102,241,.25)',
      borderRadius:14,
    }}>
      <div style={{ fontSize:'.74rem', fontWeight:700, color:'var(--primary)', letterSpacing:'.06em', marginBottom:8 }}>💡 한 줄 결론</div>
      <p style={{ margin:0, fontSize:'.95rem', lineHeight:1.7, color:'var(--text)' }}>{verdict}</p>
    </div>
  )
}

export function OperatorNote({ restaurant: r, regionName, totalRegionRestaurants, govData }) {
  const rating = r.rt || 0
  const cnt = r.cnt || 0
  const cat = cat_from_restaurant(r) || ''
  const catLabel = CAT_LABEL_BY_SLUG[cat] || (r.type || '식당')

  // 단락 1: 객관적 위치
  let p1 = `${regionName} ${catLabel} 카테고리에서 평점 ${rating}점, 리뷰 ${cnt.toLocaleString()}건의 표본이 누적된 식당입니다.`
  if (govData?.license_date) {
    const y = parseInt(govData.license_date.slice(0, 4))
    const years = new Date().getFullYear() - y
    if (years >= 10) p1 += ` 행정안전부 인허가 기준 ${years}년 운영된 노포 분류에 들어갑니다.`
    else if (years >= 5) p1 += ` 행정안전부 데이터로 보면 ${y}년부터 영업 중인 ${years}년차 식당입니다.`
  }

  // 단락 2: 짚어야 할 단점
  const cons = []
  if (!r.parking) cons.push('전용 주차장이 없어 차량 방문은 인근 공영 주차장을 고려')
  if (!r.reservation && (r.tags || []).includes('웨이팅맛집')) cons.push('예약 시스템이 없는 데다 피크 시간 웨이팅이 길어지는 편')
  if (!r.hours || r.hours.length < 5) cons.push('영업시간 표기가 매장 사정에 따라 자주 변동되어 방문 전 확인 권장')
  if (cnt < 50) cons.push('리뷰 표본이 작아 호불호 판단에 추가 정보 필요')
  let p2 = ''
  if (cons.length > 0) {
    p2 = '다만 운영자 관점에서 짚어야 할 부분이 있습니다. ' + cons.slice(0,2).map((c,i)=>`${i===0?'첫째':'둘째'}, ${c}`).join('. ') + '.'
  } else {
    p2 = '운영자 관점에서 큰 단점은 보이지 않지만, 영업시간·메뉴는 방문 전 매장에 한 번 확인해 두는 편이 안전합니다.'
  }

  // 단락 3: 실용 추천
  const price = (r.priceRange || '').trim()
  const lo = price.includes('~') ? parseInt(price.split('~')[0]) : 0
  const hi = price.includes('~') ? parseInt(price.split('~')[1]) : 0
  let p3 = ''
  if (lo && hi) {
    const for4 = Math.round((lo + hi) / 2 * 4 / 1000) * 1000
    p3 = `2명이면 인당 ${lo.toLocaleString()}원선, 4명이면 평균 ${for4.toLocaleString()}원선 예산이 표준 조합입니다.`
  } else {
    p3 = `예산은 메뉴 구성에 따라 달라지므로 본문 메뉴 표를 참고해 ${catLabel} 카테고리 평균 가격대와 비교해 보시면 됩니다.`
  }
  p3 += ' 본 정보는 데이터 매칭 기반이며, 영업·가격은 매장 사정에 따라 변동될 수 있습니다.'

  return (
    <div style={{
      margin:'28px 0', padding:'22px 24px',
      background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14,
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
        <div style={{
          width:42, height:42, borderRadius:'50%',
          background:'linear-gradient(135deg, #6366F1, #A855F7)',
          color:'#fff', fontWeight:900, fontSize:'1.1rem',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>M</div>
        <div>
          <div style={{ fontWeight:800, fontSize:'.92rem', color:'var(--text)' }}>오늘뭐먹지 큐레이터</div>
          <div style={{ fontSize:'.72rem', color:'var(--muted)', marginTop:2 }}>{regionName} {totalRegionRestaurants?.toLocaleString() || ''}곳 데이터 검증 · 정부 데이터 매칭</div>
        </div>
      </div>
      <div style={{ fontSize:'.88rem', lineHeight:1.75, color:'var(--text)' }}>
        <p style={{ margin:'0 0 12px' }}>{p1}</p>
        <p style={{ margin:'0 0 12px' }}>{p2}</p>
        <p style={{ margin:0 }}>{p3}</p>
      </div>
    </div>
  )
}

export function AudienceCards({ restaurant: r }) {
  const tags = new Set(r.tags || [])
  const moods = new Set(r.moods || [])
  const price = (r.priceRange || '').trim()
  const lo = price.includes('~') ? parseInt(price.split('~')[0]) : 0
  const cards = []
  if (tags.has('단체가능') || tags.has('룸있음')) cards.push({
    icon:'🎉', title:'단체 회식·모임',
    body:`룸·단체석이 마련된 매장입니다. 5~10인 회식 자리에 안정적이며, 예약을 미리 잡으시면 자리 확보가 수월합니다.`,
  })
  if (tags.has('데이트') || moods.has('데이트') || tags.has('인스타감성')) cards.push({
    icon:'💑', title:'분위기 데이트',
    body:`테이블 간격·분위기가 데이트에 적합한 매장입니다. 평일 저녁 또는 주말 점심 시간대가 무난합니다.`,
  })
  if (tags.has('혼밥가능') || (lo && lo <= 12000)) cards.push({
    icon:'🍴', title:'혼밥·점심 한 끼',
    body:`혼자 빠르게 한 끼 해결하기 좋은 식당입니다. 평일 점심 시간대 회전이 빠른 편이라 직장인 점심으로 적당합니다.`,
  })
  if (tags.has('가성비') && cards.length < 3) cards.push({
    icon:'💰', title:'가성비 한 끼',
    body:`가격 대비 양·구성이 합리적이라는 평가가 누적된 곳입니다. 메뉴 표를 참고해 시그니처 위주로 주문하시면 만족도가 안정적입니다.`,
  })
  if (cards.length < 3) cards.push({
    icon:'🍽', title:'평일 점심·저녁 식사',
    body:`특별한 약속 없이 가볍게 한 끼 챙기기 좋은 매장입니다. 평일은 피크 시간을 피하시면 자리 잡기 수월합니다.`,
  })
  if (cards.length < 3) cards.push({
    icon:'🥢', title:'약속·접대 자리',
    body:`상대방을 데려가도 부담 없는 평가가 쌓인 식당입니다. 약속 전 영업시간·예약 가능 여부는 한 번 확인해 두시는 편이 안전합니다.`,
  })

  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:10, margin:'14px 0 24px' }}>
      {cards.slice(0, 3).map((c, i) => (
        <div key={i} style={{
          padding:'14px 16px', background:'var(--surface)',
          border:'1px solid var(--border)', borderRadius:12,
        }}>
          <div style={{ fontSize:'1.5rem', marginBottom:6 }}>{c.icon}</div>
          <div style={{ fontWeight:800, fontSize:'.92rem', marginBottom:6, color:'var(--text)' }}>{c.title}</div>
          <p style={{ margin:0, fontSize:'.82rem', color:'var(--muted)', lineHeight:1.65 }}>{c.body}</p>
        </div>
      ))}
    </div>
  )
}

export function VisitChecklist({ restaurant: r }) {
  const tags = new Set(r.tags || [])
  const items = []
  if (tags.has('예약필수') || r.reservation) items.push('금·토 저녁은 예약 권장 (당일 방문 시 대기 시간 발생 가능)')
  else items.push('예약 시스템 별도 운영되지 않을 수 있어, 방문 전 매장에 직접 확인을 권장합니다')
  if (r.parking) items.push('주차 가능 매장이지만, 피크 시간에는 만차될 수 있어 대중교통도 함께 고려')
  else items.push('전용 주차장이 없는 편이라 대중교통이 더 편합니다 (인근 공영주차장 활용)')
  if (tags.has('웨이팅맛집')) items.push('점심 12시, 저녁 7시 같은 피크 시간은 웨이팅 30분 내외 각오')
  else items.push('피크 시간(점심 12시·저녁 7시)을 30분 정도만 비켜 가셔도 대기 없이 입장 가능')
  if (r.hours) items.push(`영업시간 ${r.hours} — 휴무일·브레이크 타임은 매장 공지 확인 권장`)
  else items.push('영업시간 표기가 매장 사정에 따라 자주 변동되므로 방문 직전 한 번 확인 권장')
  items.push('메뉴 가격·구성은 시즌·재료 수급에 따라 변동될 수 있어 본 페이지 기준일 이후 변경 가능')

  return (
    <ul style={{ margin:'12px 0 24px', padding:'0 0 0 20px', listStyle:'disc', color:'var(--text)' }}>
      {items.slice(0, 6).map((it, i) => (
        <li key={i} style={{ margin:'8px 0', fontSize:'.88rem', lineHeight:1.7 }}>{it}</li>
      ))}
    </ul>
  )
}

export function PostMidCategoryBanner({ region, regionName, restaurant: r }) {
  const slug = cat_from_restaurant(r)
  const REGION_PATH = {
    samseong:'/dinner/samseong', jamsil:'/dinner/jamsil', pangyo:'/pangyo', suji:'/suji',
    gangnam:'/dinner/gangnam', yeongtong:'/samsungElectronics/yeongtong',
    mangpo:'/samsungElectronics/mangpo', yeongtongGu:'/samsungElectronics/yeongtongGu',
  }
  const regPath = REGION_PATH[region] || `/dinner/${region}`
  const href = slug ? `${regPath}/category/${slug}` : regPath
  const catLabel = slug ? (CAT_LABEL_BY_SLUG[slug] || slug) : '맛집'
  return (
    <div style={{ margin:'18px 0 22px' }}>
      <a href={href} style={{ textDecoration:'none' }}>
        <div style={{
          padding:'18px 22px', borderRadius:14,
          background:'linear-gradient(135deg, #FF6B6B 0%, #FFA94D 100%)',
          color:'#fff', textAlign:'center',
          boxShadow:'0 8px 22px rgba(255,107,107,.35)',
          cursor:'pointer',
        }}>
          <div style={{ fontSize:'.78rem', opacity:.95, marginBottom:6, fontWeight:600 }}>🔎 {regionName} {catLabel} 맛집을 찾으시나요?</div>
          <div style={{ fontSize:'1.08rem', fontWeight:900 }}>{catLabel} 카테고리 전체 보기 →</div>
        </div>
      </a>
    </div>
  )
}

export function SimilarRestaurantCard({ restaurant: s, regionPath }) {
  const href = `${regionPath}/restaurant/${encodeURIComponent(s.name)}`
  const img = (s.imageUrl || '').replace(/&amp;/g, '&')
  const cat = Array.isArray(s.cat) && s.cat.length > 0 ? s.cat[0] : (s.type || '맛집')
  const price = (s.priceRange || '').trim()
  const lo = price.includes('~') ? parseInt(price.split('~')[0]) : 0
  const hi = price.includes('~') ? parseInt(price.split('~')[1]) : 0
  const priceLabel = (lo && hi) ? `${lo.toLocaleString()}~${hi.toLocaleString()}원` : (lo ? `${lo.toLocaleString()}원~` : '가격 문의')

  return (
    <a href={href} style={{ textDecoration:'none', display:'block' }}>
      <div style={{
        position:'relative', borderRadius:16, overflow:'hidden',
        aspectRatio:'4 / 5', minHeight:280,
        background: img ? `url(${img}) center/cover no-repeat` : 'linear-gradient(135deg, #6366F1, #A855F7)',
        boxShadow:'0 6px 16px rgba(0,0,0,.12)',
        cursor:'pointer',
      }}>
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.85) 100%)',
          opacity:.85,
        }} />
        <div style={{
          position:'absolute', top:12, left:12,
          padding:'4px 10px', borderRadius:100,
          background:'rgba(255,255,255,.92)',
          color:'#111827', fontSize:'.7rem', fontWeight:800,
          letterSpacing:'.02em',
        }}>{cat}</div>
        <div style={{
          position:'absolute', top:12, right:12,
          padding:'4px 10px', borderRadius:100,
          background:'rgba(252,211,77,.95)',
          color:'#111827', fontSize:'.72rem', fontWeight:900,
        }}>⭐ {s.rt > 0 ? s.rt : '-'}</div>
        <div style={{
          position:'absolute', bottom:14, left:14, right:14,
          color:'#fff',
        }}>
          <div style={{ fontSize:'1.05rem', fontWeight:900, lineHeight:1.3, marginBottom:6, textShadow:'0 2px 6px rgba(0,0,0,.5)' }}>{s.name}</div>
          <div style={{
            display:'inline-block',
            padding:'4px 10px', borderRadius:100,
            background:'rgba(255,255,255,.18)',
            backdropFilter:'blur(8px)',
            border:'1px solid rgba(255,255,255,.3)',
            fontSize:'.72rem', fontWeight:700,
          }}>💰 {priceLabel}</div>
        </div>
      </div>
    </a>
  )
}

export default { VerdictBox, OperatorNote, AudienceCards, VisitChecklist, PostMidCategoryBanner, SimilarRestaurantCard }
