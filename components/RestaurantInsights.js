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
  // 식당명 기반 시드 (같은 식당은 항상 같은 문장 선택)
  const seed = (r.name || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  const pick = (arr, off = 0) => arr[(seed + off) % arr.length]

  // ── 단락 1: 객관적 위치 (평점·리뷰 구간별 + 다양한 표현) ──
  const ratingTier = rating >= 4.7 ? 'top' : rating >= 4.3 ? 'high' : rating >= 4.0 ? 'mid' : rating > 0 ? 'low' : 'none'
  const cntTier = cnt >= 1000 ? 'huge' : cnt >= 300 ? 'many' : cnt >= 80 ? 'mid' : cnt >= 20 ? 'low' : 'tiny'
  const P1 = {
    top_huge: [
      `${regionName} ${catLabel} 카테고리에서 평점 ${rating}점에 누적 리뷰 ${cnt.toLocaleString()}건이 쌓인, 표본·평가 모두 상위권에 자리한 식당입니다.`,
      `${cnt.toLocaleString()}건의 방문자 리뷰가 평균 ${rating}점을 유지하고 있는 곳으로, ${regionName} ${catLabel} 안에서 검증이 끝난 축에 속합니다.`,
      `${regionName} ${catLabel} 가운데서도 평점 ${rating}점·리뷰 ${cnt.toLocaleString()}건이라는 표본 규모가 의미 있는 식당입니다.`,
    ],
    top_many: [
      `평점 ${rating}점, 누적 리뷰 ${cnt.toLocaleString()}건으로 ${regionName} ${catLabel} 카테고리에서 평균 위에 자리하는 식당입니다.`,
      `${regionName} ${catLabel}에서 평점 ${rating}점을 ${cnt.toLocaleString()}건 표본으로 유지하고 있는 곳으로, 안정적인 평가가 누적된 편입니다.`,
    ],
    high_huge: [
      `${cnt.toLocaleString()}건이라는 표본이 누적된 ${regionName} ${catLabel} 식당으로, 평점 ${rating}점이 평균선 위에 위치합니다.`,
      `리뷰 ${cnt.toLocaleString()}건이 쌓일 정도로 방문 빈도가 높은 ${regionName} ${catLabel} 식당이며, 평균 평점은 ${rating}점입니다.`,
    ],
    high_many: [
      `${regionName} ${catLabel} 카테고리에 평점 ${rating}점·리뷰 ${cnt.toLocaleString()}건이 누적된 식당입니다.`,
      `평점 ${rating}점·${cnt.toLocaleString()}건의 표본으로 ${regionName} ${catLabel} 안에서 무난한 평가를 받고 있는 곳입니다.`,
    ],
    mid_mid: [
      `${regionName} ${catLabel} 카테고리에 속해 있고, 평점 ${rating}점·리뷰 ${cnt.toLocaleString()}건 정도의 표본이 누적된 식당입니다.`,
      `평점 ${rating}점에 ${cnt.toLocaleString()}건이 쌓인 ${regionName} ${catLabel} 식당입니다. 호불호가 갈리는 평균선 근처에 위치합니다.`,
    ],
    low_low: [
      `${regionName} ${catLabel} 카테고리에서 평점 ${rating}점, 리뷰 ${cnt.toLocaleString()}건 정도의 표본을 가진 식당입니다.`,
      `평점 ${rating}점·${cnt.toLocaleString()}건이 누적된 ${regionName} ${catLabel} 식당입니다. 평가 표본이 많지 않은 만큼 본인 취향과 맞는지 살펴볼 필요가 있습니다.`,
    ],
    none_tiny: [
      `${regionName} ${catLabel} 카테고리에 새로 자리 잡은 듯한 식당으로, 아직 평점·리뷰 표본이 충분히 쌓이지는 않은 상태입니다.`,
      `${regionName} ${catLabel} 카테고리에 속해 있으나, 평점·리뷰 표본이 적어 현재 상태로는 평가가 어렵습니다.`,
    ],
    none_low: [
      `${regionName} ${catLabel} 카테고리의 식당으로, 평점은 아직 집계되지 않았지만 리뷰 ${cnt.toLocaleString()}건이 누적되어 있습니다.`,
      `평점 데이터가 별도로 수집되지 않았으나, ${regionName} ${catLabel} 카테고리에 ${cnt.toLocaleString()}건의 방문자 리뷰가 쌓인 식당입니다.`,
    ],
    none_mid: [
      `평점 집계는 미수집 상태이지만 리뷰 ${cnt.toLocaleString()}건이 누적된 ${regionName} ${catLabel} 식당입니다.`,
      `${regionName} ${catLabel} 카테고리에 자리한 식당으로, 평점 데이터는 아직 매칭되지 않았지만 ${cnt.toLocaleString()}건의 리뷰가 확인됩니다.`,
    ],
    none_many: [
      `${cnt.toLocaleString()}건의 리뷰가 누적된 ${regionName} ${catLabel} 식당입니다. 평점 데이터는 별도로 수집되지 않은 상태이지만 방문 빈도 자체가 높은 매장입니다.`,
      `평점 자체는 미수집 상태이나, 리뷰 ${cnt.toLocaleString()}건이 쌓일 정도로 방문이 잦은 ${regionName} ${catLabel} 식당입니다.`,
    ],
    none_huge: [
      `${cnt.toLocaleString()}건 규모의 리뷰가 누적된 ${regionName} ${catLabel} 식당으로, 평점 데이터는 미수집 상태이지만 표본 규모만으로도 인지도가 큰 매장입니다.`,
      `평점 집계가 별도로 잡히지 않았으나, ${cnt.toLocaleString()}건의 리뷰가 쌓일 정도로 방문 빈도가 매우 높은 ${regionName} ${catLabel} 식당입니다.`,
    ],
    default: [
      `${regionName} ${catLabel} 카테고리의 식당으로, ${rating > 0 ? `평점 ${rating}점에 ` : ''}리뷰 ${cnt.toLocaleString()}건이 현재까지의 표본입니다.`,
      `${regionName} ${catLabel} 카테고리에 자리한 식당입니다. ${rating > 0 ? `평점 ${rating}점, ` : ''}리뷰 ${cnt.toLocaleString()}건이 누적되어 있습니다.`,
    ],
  }
  const key = `${ratingTier}_${cntTier}`
  let p1 = pick(P1[key] || P1.default, 0)

  if (govData?.license_date) {
    const y = parseInt(govData.license_date.slice(0, 4))
    const years = new Date().getFullYear() - y
    if (years >= 15) {
      p1 += ' ' + pick([
        `행정안전부 인허가 기록상 ${y}년부터 영업 중인 ${years}년차 노포로 분류되는 곳이기도 합니다.`,
        `${y}년부터 같은 자리에서 운영되어 온 ${years}년차 매장이라는 점이 함께 검색됩니다 (행정안전부 인허가 기준).`,
      ], 7)
    } else if (years >= 10) {
      p1 += ' ' + pick([
        `행정안전부 인허가 기준으로 ${years}년차 매장이라는 점도 참고할 만합니다.`,
        `${y}년부터 영업 중인 ${years}년차 식당으로 행정 데이터상 확인됩니다.`,
      ], 7)
    } else if (years >= 5) {
      p1 += ` 행정안전부 데이터로는 ${y}년부터 영업 중인 ${years}년차 식당입니다.`
    }
  }

  // ── 단락 2: 단점·주의점 (조건별 풀 확장 + 시드 선택) ──
  const cons = []
  if (!r.parking) {
    cons.push(pick([
      '전용 주차장이 없는 편이라 차량보다 대중교통이 편하다는 점',
      '주차 시설이 따로 없어 차량 방문은 인근 공영주차장 이용을 염두에 두어야 한다는 점',
      '주차 부담이 있어 차량보다 도보·대중교통 동선을 추천한다는 점',
    ], 11))
  }
  if (!r.reservation && (r.tags || []).includes('웨이팅맛집')) {
    cons.push(pick([
      '예약 시스템이 별도로 운영되지 않아 피크 시간 웨이팅이 길어지기 쉽다는 점',
      '예약 없이 운영되는 매장 특성상 금·토 저녁은 대기가 발생할 수 있다는 점',
      '주말·저녁 시간대에는 웨이팅이 30분 이상 발생하기도 한다는 점',
    ], 13))
  } else if (!r.reservation) {
    cons.push(pick([
      '예약 시스템이 별도로 운영되지 않을 수 있어 방문 전 매장 확인이 필요하다는 점',
      '온라인 예약 채널 운영 여부가 변동될 수 있어 방문 직전 한 번 확인하는 편이 안전하다는 점',
    ], 13))
  }
  if (!r.hours || r.hours.length < 5) {
    cons.push(pick([
      '영업시간 표기가 자주 변동되어 방문 전 매장 공지를 확인할 필요가 있다는 점',
      '시즌·요일에 따라 영업시간이 달라지는 편이라 방문 직전 확인이 권장된다는 점',
    ], 17))
  }
  if (cnt < 30) {
    cons.push(pick([
      '리뷰 표본 자체가 적어 본인 취향과 맞는지 별도 자료로 보완할 필요가 있다는 점',
      '평가 데이터가 충분히 쌓이지 않은 단계라 호불호 판단에는 추가 정보가 필요하다는 점',
      '리뷰 수가 적어 평균 평점만으로 판단하기엔 표본이 부족한 점',
    ], 19))
  } else if (cnt < 80 && rating > 0 && rating < 4.0) {
    cons.push(pick([
      '평점 자체가 평균선 아래에 있어 호불호가 갈릴 가능성이 있다는 점',
      '낮은 평점·작은 표본이 함께 보여 호평·혹평이 엇갈리는 매장이라는 점',
    ], 23))
  }
  if ((r.tags || []).includes('웨이팅맛집') && r.parking) {
    cons.push(pick([
      '주차는 가능하지만 피크 시간대 웨이팅이 발생할 수 있는 매장이라는 점',
    ], 29))
  }

  let p2 = ''
  if (cons.length > 0) {
    const intros = [
      '운영자 관점에서 미리 짚어두면 좋을 부분이 있습니다.',
      '데이터를 종합해 보면 미리 알아두면 좋을 포인트가 보입니다.',
      '방문 전에 한 번 더 확인해 두면 좋을 부분이 있습니다.',
      '운영자가 정리해 둔 주의 포인트는 다음과 같습니다.',
    ]
    const intro = pick(intros, 31)
    const ordWords = ['먼저', '그리고', '또한']
    const picked = cons.slice(0, Math.min(2, cons.length))
    p2 = intro + ' ' + picked.map((c, i) => `${ordWords[i] || '추가로'} ${c}.`).join(' ')
  } else {
    p2 = pick([
      '운영자 관점에서 두드러진 단점은 보이지 않습니다. 다만 영업시간·메뉴는 매장 사정에 따라 변동될 수 있어 방문 전 한 번 확인해 두는 편이 안전합니다.',
      '데이터상 큰 결격 사유는 없는 편입니다. 다만 표기된 영업시간·가격이 시즌에 따라 달라질 수 있어 방문 직전 확인을 권장합니다.',
      '주차·예약·표본 어느 쪽에서도 큰 약점은 보이지 않는 편이지만, 매장 사정에 따라 운영 정책이 바뀔 수 있어 방문 전 매장 공지를 확인하시면 안전합니다.',
    ], 37)
  }

  // ── 단락 3: 실용 추천·예산 (다양한 표현) ──
  const price = (r.priceRange || '').trim()
  const lo = price.includes('~') ? parseInt(price.split('~')[0]) : 0
  const hi = price.includes('~') ? parseInt(price.split('~')[1]) : 0
  let p3 = ''
  if (lo && hi) {
    const avg = Math.round((lo + hi) / 2 / 1000) * 1000
    const for2 = avg * 2
    const for4 = avg * 4
    const variants = [
      `2명 기준 약 ${for2.toLocaleString()}원, 4명 기준 약 ${for4.toLocaleString()}원선에서 예산을 잡으시면 무난합니다.`,
      `메뉴 구성에 따라 다르지만 1인 ${lo.toLocaleString()}~${hi.toLocaleString()}원선이며, 2명이면 ${for2.toLocaleString()}원, 4명이면 ${for4.toLocaleString()}원 수준이 평균 조합입니다.`,
      `시그니처 메뉴 위주로 2명이면 ${for2.toLocaleString()}원 안팎, 인원이 늘어나면 인당 평균 ${avg.toLocaleString()}원선이 표준입니다.`,
      `예산은 1인 ${avg.toLocaleString()}원선이 평균값으로, 2명 ${for2.toLocaleString()}원·4명 ${for4.toLocaleString()}원 정도가 일반적인 조합입니다.`,
    ]
    p3 = pick(variants, 41)
  } else if (lo) {
    p3 = pick([
      `시작 가격은 ${lo.toLocaleString()}원선이며, 메뉴 구성에 따라 인당 예산이 달라집니다. 본문 메뉴 표를 참고하시면 정확합니다.`,
      `1인 시작 ${lo.toLocaleString()}원에서 출발하지만 메뉴별 편차가 있어 본문 메뉴 표로 실제 가격을 확인하시는 편이 좋습니다.`,
    ], 43)
  } else {
    p3 = pick([
      `정확한 예산은 본문 메뉴 표를 참고하시는 편이 좋습니다. ${catLabel} 카테고리 평균 가격대와 비교해 보시면 본인 예산 범위에 맞는지 판단하기 수월합니다.`,
      `가격대 데이터가 충분치 않아 본문 메뉴 표로 실제 가격을 확인하시는 편이 정확합니다. ${catLabel} 카테고리의 평균선과 비교해 보시면 도움이 됩니다.`,
      `예산은 메뉴 구성에 따라 편차가 큰 편이라 본문 메뉴 표를 참고하시는 게 가장 정확합니다.`,
    ], 47)
  }
  const closers = [
    ' 본 정보는 데이터 매칭 기반이며, 영업·가격은 매장 사정에 따라 변동될 수 있습니다.',
    ' 본 페이지는 공공 데이터·플랫폼 데이터를 종합한 결과이며, 매장 영업 상황은 별도 확인을 권장드립니다.',
    ' 본 정보는 자동 매칭 데이터이므로 영업시간·가격은 매장 공지를 우선으로 확인 부탁드립니다.',
  ]
  p3 += pick(closers, 53)

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

const CAT_FALLBACK = {
  '한식':         { emoji:'🍚', grad:'linear-gradient(135deg, #F97316 0%, #DC2626 100%)' },
  '국밥':         { emoji:'🍲', grad:'linear-gradient(135deg, #EA580C 0%, #B45309 100%)' },
  '고기구이':     { emoji:'🥩', grad:'linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)' },
  '중식':         { emoji:'🥢', grad:'linear-gradient(135deg, #DC2626 0%, #F59E0B 100%)' },
  '일식':         { emoji:'🍣', grad:'linear-gradient(135deg, #0EA5E9 0%, #1E40AF 100%)' },
  '이자카야':     { emoji:'🍶', grad:'linear-gradient(135deg, #4338CA 0%, #1E1B4B 100%)' },
  '야장':         { emoji:'🍻', grad:'linear-gradient(135deg, #D97706 0%, #92400E 100%)' },
  '양식':         { emoji:'🍝', grad:'linear-gradient(135deg, #C026D3 0%, #7C3AED 100%)' },
  '카페':         { emoji:'☕', grad:'linear-gradient(135deg, #92400E 0%, #451A03 100%)' },
  '치킨':         { emoji:'🍗', grad:'linear-gradient(135deg, #F59E0B 0%, #DC2626 100%)' },
  '분식':         { emoji:'🍢', grad:'linear-gradient(135deg, #F472B6 0%, #DB2777 100%)' },
  '아시안':       { emoji:'🍜', grad:'linear-gradient(135deg, #059669 0%, #064E3B 100%)' },
  '기타':         { emoji:'🍽️', grad:'linear-gradient(135deg, #6B7280 0%, #1F2937 100%)' },
}
function getCatFallback(cat) {
  if (!cat) return CAT_FALLBACK['기타']
  for (const [k, v] of Object.entries(CAT_FALLBACK)) {
    if (cat.includes(k)) return v
  }
  return CAT_FALLBACK['기타']
}

export function SimilarRestaurantCard({ restaurant: s, regionPath }) {
  const href = `${regionPath}/restaurant/${encodeURIComponent(s.name)}`
  const img = (s.imageUrl || s.tourImageUrl || '').replace(/&amp;/g, '&')
  const cat = Array.isArray(s.cat) && s.cat.length > 0 ? s.cat[0] : (s.type || '맛집')
  const price = (s.priceRange || '').trim()
  const lo = price.includes('~') ? parseInt(price.split('~')[0]) : 0
  const hi = price.includes('~') ? parseInt(price.split('~')[1]) : 0
  const priceLabel = (lo && hi) ? `${lo.toLocaleString()}~${hi.toLocaleString()}원` : (lo ? `${lo.toLocaleString()}원~` : '가격 매장 문의')
  const fb = getCatFallback(cat)

  return (
    <a href={href} style={{ textDecoration:'none', display:'block' }}>
      <div style={{
        position:'relative', borderRadius:16, overflow:'hidden',
        aspectRatio:'3 / 4', height:'100%',
        background: img ? `url(${img}) center/cover no-repeat` : fb.grad,
        boxShadow:'0 6px 16px rgba(0,0,0,.12)',
        cursor:'pointer',
      }}>
        {/* 이미지 없을 때 큰 이모지 배경 */}
        {!img && (
          <div style={{
            position:'absolute', inset:0, display:'flex',
            alignItems:'center', justifyContent:'center',
            fontSize:'5.5rem', opacity:.28, pointerEvents:'none',
          }}>{fb.emoji}</div>
        )}
        <div style={{
          position:'absolute', inset:0,
          background: img
            ? 'linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.85) 100%)'
            : 'linear-gradient(180deg, rgba(0,0,0,.05) 0%, rgba(0,0,0,.35) 60%, rgba(0,0,0,.75) 100%)',
          opacity:.9,
        }} />
        <div style={{
          position:'absolute', top:12, left:12,
          padding:'4px 10px', borderRadius:100,
          background:'rgba(255,255,255,.92)',
          color:'#111827', fontSize:'.7rem', fontWeight:800,
          letterSpacing:'.02em',
        }}>{fb.emoji} {cat}</div>
        <div style={{
          position:'absolute', top:12, right:12,
          padding:'4px 10px', borderRadius:100,
          background: s.rt > 0 ? 'rgba(252,211,77,.95)' : 'rgba(255,255,255,.85)',
          color:'#111827', fontSize:'.72rem', fontWeight:900,
        }}>⭐ {s.rt > 0 ? s.rt : '신규'}</div>
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
            marginBottom: s.reason ? 6 : 0,
          }}>💰 {priceLabel}</div>
          {s.reason && (
            <div style={{
              fontSize:'.7rem', lineHeight:1.4,
              color:'rgba(255,255,255,.92)',
              textShadow:'0 1px 3px rgba(0,0,0,.55)',
              marginTop:2,
            }}>✨ {s.reason}</div>
          )}
        </div>
      </div>
    </a>
  )
}

export default { VerdictBox, OperatorNote, AudienceCards, VisitChecklist, PostMidCategoryBanner, SimilarRestaurantCard }
