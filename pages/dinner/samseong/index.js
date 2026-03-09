import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import restaurants from '../../../data/samseong'

const NL_MENU_MAP = [
  {patterns:/야장|포장마차|포차|노천|치킨.*야외/i,                       cats:['야장','치킨','이자카야']},
  {patterns:/치맥|치킨.*맥주|후라이드|양념치킨|통닭/i,                   cats:['치킨','야장']},
  {patterns:/맥주|이자카야|안주|사케|일본술|하이볼/i,                     cats:['이자카야','야장','와인바']},
  {patterns:/국밥|해장|해장국|뼈해장|순대국|설렁탕|곰탕/i,               cats:['국밥','국물','한식']},
  {patterns:/칼국수|수제비|칼제비/i,                                      cats:['칼국수','면류','한식']},
  {patterns:/고기|구이|삼겹살|목살|갈비살|한우|등심|소고기|BBQ/i,        cats:['고기구이','한식']},
  {patterns:/중식|짜장|짬뽕|탕수육|딤섬|마라탕|훠궈/i,                   cats:['중식','훠궈']},
  {patterns:/파스타|피자|이탈리안|리조또|양식/i,                          cats:['양식','이탈리안']},
  {patterns:/스테이크|립아이|ribeye|와규|티본/i,                          cats:['스테이크','양식']},
  {patterns:/일식|스시|초밥|사시미|오마카세|돈카츠|덮밥/i,               cats:['이자카야','일식']},
  {patterns:/혼밥|혼자|1인/i,                                             cats:['국밥','칼국수','한식']},
  {patterns:/술|와인|소주|막걸리|사케/i,                                  cats:['이자카야','야장','와인바']},
  {patterns:/회식|단체|단체석|프라이빗|룸/i,                             cats:['이자카야','고기구이','중식']},
  {patterns:/임원|상무|전무|부사장|사장님|대표님|VIP|어르신|웃어른/i,     cats:['일식','스테이크','양식']},
  {patterns:/접대|대접|모시|귀빈|중요한 자리|중요한 미팅|중요한 손님/i,   cats:['일식','스테이크','양식']},
  {patterns:/오마카세|파인다이닝|코스요리|고급식당|럭셔리|프리미엄|격식/i, cats:['일식','스테이크','양식']},
  {patterns:/클라이언트|거래처|바이어|파트너|비즈니스 미팅|계약|협상/i,   cats:['일식','스테이크','양식']},
  {patterns:/기념일|생일 파티|승진 축하|특별한 날|프로포즈/i,             cats:['양식','일식','스테이크']},
  {patterns:/개인실|룸 있는|독립 공간|조용한 자리|프라이빗 룸/i,          cats:['일식','양식','스테이크']},
]

const WEATHER = ['맑음','흐림','비','눈','쌀쌀함','덥고 습함']
const MOODS   = ['기분 좋음','피곤함','스트레스','혼밥','축하','허전함','데이트','회식']
const CATS = [
  {emoji:'🥩', name:'고기·한우',       slug:'meat',     cats:['고기구이'],              tags:['한우','갈비','삼겹살','목살','항정살']},
  {emoji:'🥣', name:'국밥·해장',       slug:'gukbap',   cats:['국밥','국물'],           tags:['해장','설렁탕','곰탕','순대국밥']},
  {emoji:'🏮', name:'이자카야·술집',   slug:'izakaya',  cats:['이자카야','야장'],       tags:['포차','하이볼','사케','수제맥주']},
  {emoji:'🍣', name:'일식·스시',       slug:'japanese', cats:['일식'],                  tags:['스시','사시미','오마카세','돈카츠']},
  {emoji:'🍜', name:'중식·마라탕',     slug:'chinese',  cats:['중식','훠궈'],           tags:['마라탕','양꼬치','짬뽕','훠궈']},
  {emoji:'🍝', name:'양식·스테이크',   slug:'western',  cats:['양식','이탈리안','스테이크'], tags:['파스타','피자','스테이크','와규']},
  {emoji:'🐔', name:'치킨·야장',       slug:'chicken',  cats:['치킨','야장'],           tags:['통닭','치킨','야장','치맥']},
  {emoji:'🎉', name:'회식·단체',       slug:'group',    cats:[],                        tags:['단체가능','회식','룸있음','주차가능']},
  {emoji:'💑', name:'데이트·분위기',   slug:'date',     cats:[],                        tags:['데이트','뷰맛집','프라이빗','인스타감성']},
  {emoji:'💰', name:'가성비·혼밥',     slug:'budget',   cats:[],                        tags:['가성비','점심','혼밥가능','점심특선']},
  {emoji:'✨', name:'접대·파인다이닝', slug:'premium',  cats:[],                        tags:['오마카세','예약제','코스요리','프라이빗']},
  {emoji:'🍖', name:'족발·곱창·보쌈',  slug:'special',  cats:[],                        tags:['족발','곱창','보쌈','막창']},
  {emoji:'🚇', name:'4번출구',         slug:'exit4',    cats:[],                        exit4Only:true},
]

// ── 랜덤 추천 결과 문구 템플릿 ──────────────────────────────
function buildRandomReason(r, idx, usedTemplates) {
  // rv에서 별점 접두사·불필요한 괄호 제거, 최대 70자
  function cleanRv(v) {
    return (v || '')
      .replace(/\[\d+\.?\d*★\]\s*/g, '')
      .replace(/\(실제 Google 리뷰.*?\)/g, '')
      .trim()
      .slice(0, 70)
  }
  // 한글 받침에 따른 조사 선택
  function josa(word, j1, j2) {
    if (!word) return j2
    const code = word.charCodeAt(word.length - 1)
    if (code >= 0xAC00 && code <= 0xD7A3) return (code - 0xAC00) % 28 !== 0 ? j1 : j2
    return j2
  }
  // 태그를 자연어 수식어로 변환
  function tagToLabel(tag) {
    const map = {
      '고평점':'맛집','SNS맛집':'SNS 핫플','웨이팅맛집':'웨이팅 맛집',
      '가성비':'가성비 맛집','혼밥가능':'혼밥 맛집','단체가능':'단체 맛집',
      '점심추천':'점심 맛집','심야영업':'심야 맛집','예약필수':'예약제 맛집',
      '주차가능':'주차 가능한 곳','리뷰많음':'리뷰 많은 곳',
    }
    return map[tag] || tag + ' 맛집'
  }


  const rv    = (r.rv || []).map(cleanRv).filter(Boolean)
  const rv0   = rv[0] || ''
  const rv1   = rv[1] || ''
  const tags  = (r.tags  || []).slice(0, 4)
  const scene = (r.scene || []).slice(0, 2)
  const moods = (r.moods || []).slice(0, 2)
  const cnt   = r.cnt || 0
  const rt    = r.rt  || ''

  const templates = [
    // 0: 리뷰 두 개로 말한다
    () => {
      if (!rv0) return templates[2]()
      const reason = rv1
        ? `"${rv0}" 또 다른 방문객은, "${rv1}"`
        : `"${rv0}"`
      return { reason, highlight: rv0.slice(0, 20) }
    },

    // 1: 방문자 수 + 대표 태그 + 리뷰
    () => {
      const tagStr = tags.slice(0, 2).join(' · ')
      const base = cnt >= 100
        ? `${cnt.toLocaleString()}명이 다녀갔다.`
        : `${cnt}명이 다녀갔다.`
      const reason = `${base}${tagStr ? ` ${tagStr}.` : ''}${rv0 ? ` "${rv0}"` : ''}`
      return { reason, highlight: rv0.slice(0, 20) || tagStr }
    },

    // 2: scene 맥락 + 리뷰
    () => {
      const sc = (scene[0] || moods[0] || '').replace(/에$/,'')
      const intro = sc ? `${sc}, 딱 맞는 곳.` : (tags[0] ? `${tags[0]}${josa(tags[0],'으로','로')} 알려진 곳.` : '한 번 가볼 만한 곳.')
      const reason = rv0 ? `${intro} "${rv0}"` : intro
      return { reason, highlight: rv0.slice(0, 20) || sc }
    },

    // 3: 해시태그 나열 + 리뷰
    () => {
      if (!tags.length) return templates[0]()
      const tagStr = tags.slice(0, 4).map(t => `#${t}`).join('  ')
      const reason = rv0 ? `${tagStr}  "${rv0}"` : tagStr
      return { reason, highlight: rv0.slice(0, 20) || `#${tags[0]}` }
    },

    // 4: 리뷰 한 개를 길게 (80자)
    () => {
      const rv0long = (r.rv || []).map(cleanRv).filter(Boolean).map(v => v.slice(0, 80))[0] || ''
      if (!rv0long) return templates[1]()
      return {
        reason: `"${rv0long}"`,
        highlight: rv0long.slice(0, 20)
      }
    },

    // 5: moods 자연어 + 리뷰
    () => {
      const m = moods[0] || scene[0] || ''
      // "기분 좋음" → "기분 좋을 때", "회식" → "회식할 때", "혼밥" → "혼밥할 때"
      const moodMap = {
        '기분 좋음': '기분 좋을 때',
        '피곤함': '피곤할 때',
        '스트레스 받음': '스트레스받을 때',
        '혼밥': '혼밥할 때',
        '축하': '축하하는 날',
        '허전함': '허전할 때',
        '데이트': '데이트할 때',
        '회식': '회식 자리에',
      }
      const when = moodMap[m] || (m ? `${m}일 때` : '오늘')
      const reason = rv0 ? `${when} 당기는 곳. "${rv0}"` : `${when} 추천하는 ${r.type || '식당'}.`
      return { reason, highlight: rv0.slice(0, 20) || when }
    },

    // 6: 대표 태그 한 개 강조 + 리뷰 두 개
    () => {
      if (!tags[0]) return templates[0]()
      const t0 = tags[0]
      const label = tagToLabel(t0)
      const particle = josa(label, '으로', '로')
      const intro = `${label}${particle} 알려진 곳.`
      const reason = rv0 && rv1
        ? `${intro} "${rv0}" "${rv1}"`
        : rv0
          ? `${intro} "${rv0}"`
          : intro
      return { reason, highlight: rv0.slice(0, 20) || t0 }
    },

    // 7: cnt 없을 때 — 태그 + 리뷰만
    () => {
      const intro = tags[0] ? `#${tags.slice(0,3).join(' #')}.` : ''
      const reason = rv0 ? `${intro ? intro + ' ' : ''}"${rv0}"` : (intro || `${r.type || ''} 한 곳.`)
      return { reason, highlight: rv0.slice(0, 20) || (tags[0] ? `#${tags[0]}` : '') }
    },
  ]

  const available = templates.map((_,i) => i).filter(i => !usedTemplates.includes(i))
  const pick = available[Math.floor(Math.random() * available.length)]
  const result = templates[pick]()
  return { ...result, templateIdx: pick }
}


// ── 컨텍스트 추출 (자연어 → 구조화) ─────────────────────────
function extractContext(q, moods, wx) {
  const text = `${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  return {
    vipScore:       /vip|임원|접대|대표|사장|클라이언트|거래처|중요한/.test(text) ? 3
                  : /팀장|부장|상무|전무|이사|본부장/.test(text) ? 2
                  : /손님|고객|파트너/.test(text) ? 1 : 0,
    isCelebration:  /기념일|생일|축하|승진|합격|졸업|결혼/.test(text),
    needsPrivate:   /프라이빗|룸|개인실|조용|단독/.test(text),
    needsParking:   /주차|차/.test(text),
    isSolo:         /혼밥|혼자|1인|솔로/.test(text) || moods.includes('혼밥'),
    isGroup:        /단체|회식|팀|부서|모임|여럿|여러명/.test(text) || moods.includes('회식'),
    isDate:         /데이트|연인|커플|애인|여자친구|남자친구/.test(text) || moods.includes('데이트'),
    isQuick:        /빠른|빠르게|급하게|후다닥|빨리|패스트/.test(text),
    isLunch:        /점심|런치|lunch/.test(text),
    isLate:         /심야|늦게|야식|새벽/.test(text),
    isStress:       /스트레스|힘들|지침|지쳤|피곤|치팅/.test(text) || moods.includes('스트레스') || moods.includes('피곤함'),
    isHangover:     /해장|숙취|속풀이/.test(text),
  }
}

// ── 자연어 → 카테고리 매칭 ───────────────────────────────────
function detectMenu(q, moods, wx) {
  const text = `${q} ${moods.join(' ')}`.toLowerCase()
  for (const cat of CATS) {
    if (cat.exit4Only) continue
    const allTerms = [...(cat.cats||[]), ...(cat.tags||[])].map(t => t.toLowerCase())
    if (allTerms.some(t => text.includes(t))) return cat
  }
  // 추가 키워드 매핑
  if (/고기|구이|갈비|삼겹|목살|한우|소고기|돼지/.test(text)) return CATS.find(c=>c.slug==='meat')
  if (/국밥|해장|설렁|곰탕|순대국|뼈해장/.test(text))         return CATS.find(c=>c.slug==='gukbap')
  if (/일식|스시|초밥|사시미|오마카세|돈카츠|라멘/.test(text)) return CATS.find(c=>c.slug==='japanese')
  if (/중식|마라|양꼬치|훠궈|짬뽕|탕수육/.test(text))         return CATS.find(c=>c.slug==='chinese')
  if (/양식|파스타|피자|스테이크|이탈리안/.test(text))         return CATS.find(c=>c.slug==='western')
  if (/치킨|닭|맥주|야장|포차/.test(text))                    return CATS.find(c=>c.slug==='chicken')
  if (/이자카야|하이볼|사케|술집/.test(text))                  return CATS.find(c=>c.slug==='izakaya')
  if (/데이트|커플|연인|분위기/.test(text))                    return CATS.find(c=>c.slug==='date')
  if (/회식|단체|모임/.test(text))                             return CATS.find(c=>c.slug==='group')
  if (/가성비|혼밥|혼자|점심/.test(text))                      return CATS.find(c=>c.slug==='budget')
  if (/접대|vip|임원|파인다이닝|오마카세/.test(text))          return CATS.find(c=>c.slug==='premium')
  if (/족발|곱창|보쌈|막창/.test(text))                        return CATS.find(c=>c.slug==='special')
  return null
}

function preScore(q, moods, wx, cands, selectedCat) {
  const qt  = `${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  const ctx = extractContext(q, moods, wx)

  return cands.map(r => {
    let s = (r.rt || 0) * 3

    const blob = [r.name, r.type,
      ...(r.tags||[]), ...(r.scene||[]), ...(r.moods||[]), ...(r.wx||[]), ...(r.cat||[])
    ].join(' ').toLowerCase()

    const priceAvg = (() => {
      if (!r.priceRange) return 20000
      const [a, b] = r.priceRange.split('~').map(Number)
      return (a + (b || a)) / 2
    })()

    // ① 카테고리 선택 최우선
    if (selectedCat && !selectedCat.exit4Only) {
      const catMatch = (selectedCat.cats||[]).some(c => (r.cat||[]).includes(c))
      const tagMatch = (selectedCat.tags||[]).some(t => (r.tags||[]).includes(t))
      if (catMatch)               s += 60
      else if (tagMatch)          s += 30
      else                        s -= 30
    }

    // ② VIP·접대·임원 (핵심)
    if (ctx.vipScore > 0) {
      const v = ctx.vipScore
      const isHighEnd =
        (r.cat||[]).some(c => ['일식','스테이크','양식','이탈리안'].includes(c)) ||
        (r.tags||[]).some(t => ['오마카세','한우코스','코스요리','룸있음','개인실','프라이빗','파인다이닝'].includes(t))
      if (isHighEnd)         s += v * 25
      if (priceAvg >= 50000) s += v * 20
      else if (priceAvg >= 35000) s += v * 12
      else if (priceAvg >= 20000) s += v * 4
      else                   s -= v * 10   // 저가 패널티
      if ((r.rt||0) < 4.4)   s -= v * 15  // 저평점 패널티
      else if ((r.rt||0) >= 4.7) s += v * 10
      if ((r.cnt||0) >= 500) s += v * 4
      if ((r.tags||[]).some(t => ['룸있음','개인실','프라이빗'].includes(t))) s += v * 15
    }

    // ③ 기념일·축하
    if (ctx.isCelebration) {
      if ((r.moods||[]).some(m => ['축하','데이트'].includes(m))) s += 20
      if (priceAvg >= 30000)  s += 10
      if ((r.tags||[]).includes('기념일')) s += 15
    }

    // ④ 프라이빗·룸
    if (ctx.needsPrivate) {
      if ((r.tags||[]).some(t => ['룸있음','개인실','프라이빗','조용한'].includes(t))) s += 25
    }

    // ⑤ 주차
    if (ctx.needsParking) {
      if (r.parking === true || (r.tags||[]).includes('주차가능')) s += 20
    }

    // ⑥ 기분·날씨 보조
    moods.forEach(m => { if (blob.includes(m.toLowerCase())) s += 10 })
    if (wx && blob.includes(wx)) s += 8

    // ⑦ 태그·씬 텍스트 매칭
    ;(r.tags||[]).forEach(t   => { if (qt.includes(t.toLowerCase()))   s += 15 })
    ;(r.scene||[]).forEach(sc => { if (qt.includes(sc.toLowerCase()))  s += 12 })
    qt.split(/\s+/).filter(w => w.length > 1).forEach(w => { if (blob.includes(w)) s += 5 })

    // ⑧ vector 스코어 (있는 식당만)
    if (r.vector) {
      if (ctx.isSolo)              s += (r.vector.solo        ||0) * 14
      if (ctx.isGroup)             s += (r.vector.group       ||0) * 14
      if (ctx.isDate)              s += (r.vector.date        ||0) * 14
      if (ctx.isQuick||ctx.isLunch) s += (r.vector.fast_meal  ||0) * 12
      if (ctx.isStress||ctx.isHangover) s += (r.vector.comfort_food||0) * 12
      if (['비','눈','쌀쌀함'].includes(wx)) s += (r.vector.warm_food||0) * 10
      if (new RegExp('술|맥주|소주|와인').test(qt)) s += (r.vector.alcohol||0) * 10
      if (ctx.vipScore>0  && r.vector.vip_friendly) s += r.vector.vip_friendly * ctx.vipScore * 12
      if (ctx.needsPrivate && r.vector.private_room) s += r.vector.private_room * 18
      if (ctx.needsParking && r.vector.parking)      s += r.vector.parking * 14
      if (ctx.isCelebration && r.vector.celebration) s += r.vector.celebration * 14
      if (ctx.isLate       && r.vector.late_night)   s += r.vector.late_night * 10
    }

    return { ...r, _score: s }
  }).sort((a, b) => b._score - a._score)
}


// ── 가격·평점 필터 ───────────────────────────────────────────
function parsePriceFilter(q) {
  const m = q.match(/(\d+)[,.]?(\d{3})?원?\s*(이하|미만|대|이상|초과)?/)
  if (!m) return null
  return { val: parseInt(m[1]+(m[2]||'')), dir: m[3]||'이하' }
}

function filterByPrice(cands, pf) {
  if (!pf) return cands
  return cands.filter(r => {
    if (!r.priceRange) return false
    const [a,b] = r.priceRange.split('~')
    const avg = (parseInt(a)+parseInt(b||a))/2
    if (pf.dir==='이하'||pf.dir==='미만') return avg <= pf.val
    if (pf.dir==='이상'||pf.dir==='초과') return avg >= pf.val
    return avg >= pf.val*0.7 && avg <= pf.val*1.4
  })
}

// 평점 필터: "4점 이상", "4.5 이상", "별 4개" 등
function parseRatingFilter(q) {
  const m = q.match(/([3-5](?:[.,]\d)?)\s*(?:점|별|★|⭐)?\s*(이상|이하|넘|초과)?/) ||
            q.match(/(?:평점|별점|rating)\s*([3-5](?:[.,]\d)?)/)
  if (!m) return null
  const val = parseFloat((m[1]||m[2]).replace(',','.'))
  if (isNaN(val) || val < 3 || val > 5) return null
  const dir = (m[2]||'').includes('이하') ? 'lte' : 'gte'
  return { val, dir }
}

function filterByRating(cands, rf) {
  if (!rf) return cands
  return cands.filter(r => {
    if (rf.dir === 'lte') return (r.rt||0) <= rf.val
    return (r.rt||0) >= rf.val
  })
}

// ── 비용 계산 ────────────────────────────────────────────────
function calcCost(i, o) { return (i/1e6)*0.8 + (o/1e6)*4 }  // haiku

// ── 로딩 오버레이 ─────────────────────────────────────────────
function LoadingOverlay() {
  const frames = ['🍚','🥢','🍜','🥩','🏮','🍣','🥣','✨']
  const msgs   = ['맛집 탐색 중...','리뷰 분석 중...','최적 매칭 중...','거의 다 됐어요!']
  const [f, setF] = useState(0)
  const [m, setM] = useState(0)
  // 어드민 무제한 unlock
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('dev') === 'wizet1923') {
      localStorage.setItem('gm-admin-unlock', '1')
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  useEffect(() => {
    const t1 = setInterval(() => setF(x=>(x+1)%frames.length), 180)
    const t2 = setInterval(() => setM(x=>(x+1)%msgs.length), 1100)
    return () => { clearInterval(t1); clearInterval(t2) }
  }, [])
  return (
    <div style={{ position:'fixed',inset:0,zIndex:300,background:'rgba(0,0,0,.75)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center' }}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:20,padding:'40px 48px',textAlign:'center',boxShadow:'0 20px 60px rgba(0,0,0,.5)' }}>
        <div style={{ fontSize:'3.5rem',marginBottom:16 }}>{frames[f]}</div>
        <div style={{ fontSize:'1rem',fontWeight:700,color:'var(--text)',marginBottom:6 }}>AI가 고르는 중</div>
        <div style={{ fontSize:'.84rem',color:'var(--muted)',marginBottom:20 }}>{msgs[m]}</div>
        <div style={{ display:'flex',gap:6,justifyContent:'center' }}>
          {[0,1,2].map(i=><div key={i} style={{ width:8,height:8,borderRadius:'50%',background:'var(--primary)',animation:`bounce 1s ease-in-out ${i*0.2}s infinite` }}/>)}
        </div>
        <style>{`@keyframes bounce{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(-8px);opacity:1}}`}</style>
      </div>
    </div>
  )
}

// ── 주사위 오버레이 ───────────────────────────────────────────
// 네이버 지도 URL - 이름에서 지역 suffix 제거 + 좌표 중심 검색
// 가격 구분자 포맷: "25000~40000" → "25,000~40,000"
function fmtPrice(p) {
  if (!p) return ''
  return p.split('~').map(n => parseInt(n).toLocaleString('ko-KR')).join('~')
}

function naverMapUrl(name) {
  const cleaned = name
    .replace(/ (삼성역점|삼성역|삼성동점|삼성점|코엑스점|대치점|선릉점|강남점|삼성본점)$/, '')
    .replace(/ (잠실점|잠실역점|방이점|송파점|석촌점|잠실새내점|잠실본점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  // 식당명에 삼성/강남/코엑스/선릉/대치 등 지역이 포함되면 그대로, 아니면 " 삼성" 추가
  const hasRegion = /(삼성|강남|코엑스|선릉|대치|봉은사|테헤란)/.test(name)
  const query = hasRegion ? cleaned : cleaned + ' 삼성'
  return `https://map.naver.com/v5/search/${encodeURIComponent(query)}`
}

function DiceOverlay({ onDone }) {
  const dice = ['⚀','⚁','⚂','⚃','⚄','⚅','🎲']
  const [face, setFace] = useState('🎲')
  const [n, setN] = useState(0)
  useEffect(() => {
    let c = 0
    const t = setInterval(() => {
      setFace(dice[Math.floor(Math.random()*dice.length)])
      c++; setN(c)
      if (c >= 18) { clearInterval(t); setTimeout(onDone, 200) }
    }, 170)
    return () => clearInterval(t)
  }, [])
  return (
    <div style={{ position:'fixed',inset:0,zIndex:300,background:'rgba(0,0,0,.75)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center' }}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:20,padding:'40px 56px',textAlign:'center',boxShadow:'0 20px 60px rgba(0,0,0,.5)' }}>
        <div style={{ fontSize:'5rem',lineHeight:1,marginBottom:16,filter:`hue-rotate(${n*20}deg)` }}>{face}</div>
        <div style={{ fontSize:'1rem',fontWeight:700,color:'var(--text)',marginBottom:6 }}>주사위 굴리는 중...</div>
        <div style={{ fontSize:'.82rem',color:'var(--muted)' }}>오늘의 맛집을 랜덤으로 뽑고 있어요 🍀</div>
      </div>
    </div>
  )
}

// ── 사용 횟수 관리 (localStorage, 하루 기준) ─────────────────
const DAILY_WARN  = 3   // 3회째부터 경고
const DAILY_LIMIT = 5   // 5회 초과 시 AI 차단

function getTodayKey() {
  return 'ai_count_' + new Date().toISOString().slice(0,10)
}
function getUsageCount() {
  try { return parseInt(localStorage.getItem(getTodayKey()) || '0') } catch { return 0 }
}
function incrementUsage() {
  try {
    const k = getTodayKey(); const n = getUsageCount() + 1
    localStorage.setItem(k, n)
    Object.keys(localStorage).filter(x=>x.startsWith('ai_count_')&&x!==k).forEach(x=>localStorage.removeItem(x))
    return n
  } catch { return 1 }
}

// ── 검색 힌트 (placeholder 회전용) ───────────────────────────
const HINTS = [
  '예: 비 오는 날 따뜻한 국밥집',
  '예: 평점 4.7점 이상 이자카야',
  '예: 야근 후 해장할 곳',
  '예: 1만원 이하 혼밥 가능한 곳',
  '예: 10명 회식 가능한 룸 있는 곳',
  '예: 데이트하기 좋은 분위기 맛집',
  '예: 눈 오는 날 생각나는 칼국수',
  '예: 4번출구 근처 점심 빠른 곳',
  '예: 가성비 좋은 한우 구이',
  '예: 스트레스 풀리는 마라탕 훠궈',
  '예: 평점 4.5 이상 4번출구 근처',
  '예: 2만원대 분위기 좋은 이자카야',
  '예: 쌀쌀한 날 뜨끈한 순대국밥',
  '예: 혼자 조용히 먹을 수 있는 곳',
  '예: 회식 후 2차로 가기 좋은 바',
]

// ── 경고 모달 (3~4회) ────────────────────────────────────────
function WarnModal({ count, onConfirm, onCancel }) {
  const is4th = count >= 4
  return (
    <div style={{ position:'fixed',inset:0,zIndex:400,background:'rgba(0,0,0,.85)',backdropFilter:'blur(10px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px' }}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:24,padding:'36px 28px',maxWidth:360,width:'100%',textAlign:'center',boxShadow:'0 24px 64px rgba(0,0,0,.7)' }}>
        <div style={{ fontSize:'3.8rem',marginBottom:14 }}>{is4th ? '😰' : '🍜'}</div>
        <div style={{ fontSize:'1.1rem',fontWeight:900,color:'var(--text)',marginBottom:10,lineHeight:1.35 }}>
          {is4th ? '개발자 통장이\n비어가고 있어요...' : '잠깐,\n개발자가 굶을 수도 있어요'}
        </div>
        <div style={{ fontSize:'.84rem',color:'var(--muted)',marginBottom:6,lineHeight:1.75,whiteSpace:'pre-line' }}>
          {is4th
            ? `오늘 벌써 ${count}번째 AI 검색이에요 🥲\nAI 한 번 쓸 때마다 개발자 통장에서\n조금씩 빠져나가고 있답니다 💸`
            : `오늘 ${count}번째 AI 검색이에요 👀\nAI 검색은 매 요청마다 서버 비용이 발생해요.\n국밥 한 그릇 값이면 100번 검색이 가능해요 🥣`
          }
        </div>
        {/* 토스 QR */}
        <div style={{ background:'#fff',borderRadius:14,padding:14,marginBottom:8,display:'inline-block',boxShadow:'0 2px 12px rgba(0,0,0,.15)' }}>
          <img src="/toss-qr.png" alt="토스 후원 QR" style={{ width:110,height:110,display:'block' }} />
        </div>
        <div style={{ fontSize:'.7rem',color:'var(--muted)',marginBottom:4 }}>📱 토스앱으로 스캔하면 개발자가 국밥을 먹어요</div>
        <div style={{ marginBottom:16 }}>
          <button onClick={()=>{ const a=document.createElement('a');a.href='/toss-qr.png';a.download='toss-qr.png';a.click() }}
            style={{ fontSize:'.7rem',padding:'4px 12px',borderRadius:100,background:'var(--surface2)',border:'1px solid var(--border)',color:'var(--muted)',cursor:'pointer' }}>
            📥 QR 저장 (모바일 갤러리용)
          </button>
        </div>
        <div style={{ display:'flex',flexDirection:'column',gap:8 }}>
          <button onClick={onConfirm} style={{ padding:'13px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.9rem',fontWeight:700,cursor:'pointer' }}>
            {is4th ? '그래도 검색할게요 (마지막 기회 🙏)' : '그래도 검색할게요'}
          </button>
          <button onClick={onCancel} style={{ padding:'13px',borderRadius:12,background:'var(--surface2)',color:'var(--muted)',border:'1px solid var(--border)',fontSize:'.88rem',cursor:'pointer' }}>
            🎲 랜덤으로 할게요 (무료)
          </button>
        </div>
      </div>
    </div>
  )
}

// ── 이스터에그 모달 (우회/시크릿 첫 검색) ────────────────────
function EasterEggModal({ onClose }) {
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    // 살짝 딜레이 후 페이드인
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])
  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position:'fixed',inset:0,zIndex:500,
        background:`rgba(0,0,0,${visible ? '.82' : '0'})`,
        backdropFilter:'blur(10px)',
        display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px',
        transition:'background .35s',
      }}>
      <div style={{
        background:'linear-gradient(145deg, #0f1e2e 0%, #0a1628 100%)',
        border:'1px solid rgba(99,179,237,.35)',
        borderRadius:24,padding:'36px 28px',maxWidth:360,width:'100%',
        textAlign:'center',
        boxShadow:'0 0 60px rgba(99,179,237,.18), 0 24px 80px rgba(0,0,0,.8)',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(.96)',
        opacity: visible ? 1 : 0,
        transition:'transform .35s cubic-bezier(.22,1,.36,1), opacity .35s',
      }}>
        {/* 배지 */}
        <div style={{
          display:'inline-block',background:'rgba(99,179,237,.12)',
          border:'1px solid rgba(99,179,237,.3)',borderRadius:100,
          padding:'4px 14px',fontSize:'.7rem',color:'#63b3ed',
          letterSpacing:'.08em',fontWeight:700,marginBottom:16,
        }}>🔍 EASTER EGG FOUND</div>

        <div style={{ fontSize:'3rem',marginBottom:10 }}>🎉</div>

        <div style={{ fontSize:'1.15rem',fontWeight:900,color:'#e2e8f0',marginBottom:10,lineHeight:1.4 }}>
          축하합니다
        </div>
        <div style={{ fontSize:'.88rem',color:'#a0aec0',lineHeight:1.8,marginBottom:20 }}>
          우회경로를 발견하셨군요.<br/>
          이 정도 노력과 애정이라면<br/>
          <strong style={{ color:'#e2e8f0' }}>마음껏 사용하세요 🙌</strong><br/>
          <span style={{ fontSize:'.76rem',opacity:.65 }}>
            (단, 개발자 텅장이 비면<br/>불시에 막힐 수도 있습니다 😅)
          </span>
        </div>

        {/* 반짝이는 별 효과 */}
        <div style={{ fontSize:'1.1rem',letterSpacing:8,marginBottom:22,opacity:.7 }}>✦ ✦ ✦</div>

        <button
          onClick={onClose}
          style={{
            width:'100%',padding:'13px',borderRadius:12,
            background:'linear-gradient(135deg, #2b6cb0, #3182ce)',
            color:'#fff',border:'none',fontSize:'.92rem',fontWeight:700,
            cursor:'pointer',letterSpacing:'.02em',
            boxShadow:'0 4px 20px rgba(49,130,206,.4)',
          }}>
          ✨ 검색하러 가기
        </button>
        <div style={{ fontSize:'.68rem',color:'#4a5568',marginTop:10 }}>
          배경을 탭하면 닫혀요
        </div>
      </div>
    </div>
  )
}

// ── 한도 초과 모달 (5회 이후) ────────────────────────────────
function LimitModal({ onClose }) {
  const [showMoGuide, setShowMoGuide] = React.useState(false)

  function saveQR() {
    const link = document.createElement('a')
    link.href = '/toss-qr.png'
    link.download = 'toss-qr.png'
    link.click()
  }

  return (
    <div style={{ position:'fixed',inset:0,zIndex:400,background:'rgba(0,0,0,.88)',backdropFilter:'blur(12px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px' }}
      onClick={e=>{ if(e.target===e.currentTarget) onClose() }}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:24,padding:'32px 24px',maxWidth:360,width:'100%',textAlign:'center',boxShadow:'0 24px 80px rgba(0,0,0,.8)' }}>

        {/* 타이틀 */}
        <div style={{ fontSize:'3.2rem',marginBottom:10 }}>🫙</div>
        <div style={{ fontSize:'1.15rem',fontWeight:900,color:'var(--text)',marginBottom:8,lineHeight:1.35 }}>
          AI 토큰을 다 썼어요
        </div>
        <div style={{ fontSize:'.83rem',color:'var(--muted)',marginBottom:18,lineHeight:1.75 }}>
          개발자가 밥값 벌어올 때까지는<br/>
          오늘은 <strong style={{ color:'var(--primary)' }}>랜덤 추천</strong>으로 버텨야 할 것 같아요 😅<br/>
          <span style={{ fontSize:'.76rem',opacity:.7 }}>자정이 지나면 다시 {DAILY_LIMIT}회 충전돼요 🌙</span>
        </div>

        {/* 토스 QR */}
        <div style={{ background:'#fff',borderRadius:16,padding:14,marginBottom:10,display:'inline-block',boxShadow:'0 4px 20px rgba(0,0,0,.2)' }}>
          <img src="/toss-qr.png" id="toss-qr-img" alt="토스 후원 QR" style={{ width:120,height:120,display:'block' }} />
        </div>
        <div style={{ fontSize:'.72rem',color:'var(--muted)',marginBottom:4 }}>
          📱 토스앱으로 스캔하면 개발자가 국밥을 먹어요
        </div>

        {/* 모바일 QR 저장 버튼 */}
        <div style={{ marginBottom:16 }}>
          <button onClick={saveQR}
            style={{ fontSize:'.72rem',padding:'5px 14px',borderRadius:100,background:'var(--surface2)',border:'1px solid var(--border)',color:'var(--muted)',cursor:'pointer',marginBottom:4 }}>
            📥 QR 이미지 저장 (갤러리)
          </button>
          <div style={{ fontSize:'.68rem',color:'var(--muted)',opacity:.7,marginTop:2 }}>
            저장 후 토스앱 → 송금 → QR스캔 또는 갤러리에서 불러오기
          </div>
          {/* 모바일에서 QR 인식 방법 토글 */}
          <button onClick={()=>setShowMoGuide(v=>!v)}
            style={{ fontSize:'.68rem',color:'var(--primary)',background:'none',border:'none',cursor:'pointer',marginTop:4,textDecoration:'underline',opacity:.8 }}>
            📲 모바일에서 QR 인식하는 법 {showMoGuide ? '▲' : '▼'}
          </button>
          {showMoGuide && (
            <div style={{ marginTop:8,padding:'12px 14px',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:12,textAlign:'left',fontSize:'.72rem',color:'var(--muted)',lineHeight:1.8 }}>
              <strong style={{ color:'var(--text)',display:'block',marginBottom:4 }}>📱 토스앱으로 후원하는 법</strong>
              1. 아래 버튼으로 QR 이미지 저장<br/>
              2. 토스앱 열기 → 하단 <strong style={{ color:'var(--text)' }}>송금</strong> 탭<br/>
              3. 우측 상단 <strong style={{ color:'var(--text)' }}>QR 아이콘</strong> 탭<br/>
              4. 카메라 화면 하단 <strong style={{ color:'var(--text)' }}>갤러리에서 불러오기</strong><br/>
              5. 저장한 QR 이미지 선택 → 후원 완료 🎉<br/>
              <span style={{ fontSize:'.65rem',opacity:.6,marginTop:4,display:'block' }}>
                * 기본 카메라앱 → QR인식 → 갤러리불러오기도 가능해요
              </span>
            </div>
          )}
        </div>

        {/* 버튼 */}
        <button onClick={onClose}
          style={{ width:'100%',padding:'13px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.92rem',fontWeight:700,cursor:'pointer' }}>
          🎲 랜덤 추천으로 볼게요
        </button>
        <div style={{ fontSize:'.7rem',color:'var(--muted)',marginTop:10,opacity:.6 }}>
          탭 밖을 누르면 닫혀요
        </div>
      </div>
    </div>
  )
}

// ── AI 추천 앱 ───────────────────────────────────────────────
// 제외 목록 관리: 50개 초과 시 자동 리셋
const EXCLUDE_RESET = 50

function AiApp({ pendingCat, onPendingCatUsed }) {
  const [ctx,        setCtx]       = useState('')
  const [weather,    setWeather]   = useState('')
  const [moods,      setMoods]     = useState([])
  const [exit4Only,  setExit4Only] = useState(false)
  const [selectedCat,setSelectedCat]= useState(null)   // 카테고리 필터
  const [loading,    setLoading]   = useState(false)
  const [dicing,     setDicing]    = useState(false)
  const [pendingRnd, setPendingRnd]= useState(null)
  const [results,    setResults]   = useState(null)
  const [error,      setError]     = useState(null)  // null | string
  const [warnCount,  setWarnCount] = useState(null)
  const [showLimit,  setShowLimit] = useState(false)
  const [showEaster, setShowEaster] = useState(false)
  const [hintIdx,    setHintIdx]   = useState(0)
  const [usedToday,  setUsedToday] = useState(0)
  const excludedRef = useRef(new Set())
  const resultsRef  = useRef(null)

  useEffect(() => {
    setUsedToday(getUsageCount())
    const t = setInterval(() => setHintIdx(i => (i + 1) % HINTS.length), 3200)
    // 이스터에그: 시크릿 모드 감지 (storage estimate 기반)
    let easterTimer = null
    async function detectIncognito() {
      try {
        if (navigator.storage && navigator.storage.estimate) {
          const { quota } = await navigator.storage.estimate()
          if (quota < 500 * 1024 * 1024) return true
        }
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        if (isSafari) {
          return await new Promise(resolve => {
            const db = window.indexedDB.open('__test__')
            db.onerror = () => resolve(true)
            db.onsuccess = e => { e.target.result.close(); resolve(false) }
          })
        }
        return false
      } catch { return false }
    }
    try {
      const seenThisSession = sessionStorage.getItem('easter_seen')
      if (!seenThisSession) {
        detectIncognito().then(isIncognito => {
          if (isIncognito) {
            sessionStorage.setItem('easter_seen', '1')
            easterTimer = setTimeout(() => setShowEaster(true), 600)
          }
        })
      }
    } catch(e) {}
    return () => { clearInterval(t); if (easterTimer) clearTimeout(easterTimer) }
  }, [])

  // 카테고리 바로뽑기 - 외부에서 pendingCat 전달 시 자동 실행
  useEffect(() => {
    if (!pendingCat) return
    setSelectedCat(pendingCat)
    setTimeout(() => {
      getRandom(pendingCat)
      if (onPendingCatUsed) onPendingCatUsed()
    }, 80)
  }, [pendingCat])

  function scrollTo() {
    setTimeout(() => {
      if (!resultsRef.current) return
      // 첫번째 결과 카드가 화면 상단에서 약간 아래 보이도록 offset 스크롤
      const el = resultsRef.current
      const top = el.getBoundingClientRect().top + window.pageYOffset - 16
      window.scrollTo({ top, behavior: 'smooth' })
    }, 150)
  }

  function markShown(recs) {
    recs.forEach(r => excludedRef.current.add(r.restaurantName))
    // 50개 초과 시 가장 오래된 것부터 제거 → Set 기반으로 전체 리셋
    if (excludedRef.current.size >= EXCLUDE_RESET) {
      excludedRef.current.clear()
    }
  }

  // 후보 풀에서 이전 결과 제외
  function filterExcluded(pool) {
    const exc = excludedRef.current
    const avail = pool.filter(r => !exc.has(r.name))
    // 남은 게 3개 미만이면 리셋 후 전체 사용
    if (avail.length < 3) {
      exc.clear()
      return pool
    }
    return avail
  }

  // ── 랜덤 (필터 + 카테고리 반영) ──
  function getRandom(catOverride) {
    const cat = catOverride || selectedCat
    let base = exit4Only ? restaurants.filter(r=>r.exit4) : restaurants
    // 카테고리 필터
    if (cat) {
      if (cat.exit4Only) base = restaurants.filter(r=>r.exit4)
      else base = base.filter(r =>
        cat.cats.some(c=>r.cat?.includes(c)) ||
        (cat.tags||[]).some(t=>r.tags?.includes(t))
      )
    }
    // 날씨 필터
    if (weather) base = base.filter(r=>!r.wx||r.wx.includes(weather))
    // 기분 필터
    if (moods.length>0) base = base.filter(r=>moods.some(m=>r.moods?.includes(m)))
    // 풀 너무 작으면 날씨·기분 완화
    if (base.length < 5) {
      base = cat
        ? (cat.exit4Only ? restaurants.filter(r=>r.exit4) : restaurants.filter(r=>cat.cats.some(c=>r.cat?.includes(c))||(cat.tags||[]).some(t=>r.tags?.includes(t))))
        : (exit4Only ? restaurants.filter(r=>r.exit4) : restaurants)
    }
    const pool = filterExcluded(base)
    const picks = [...pool].sort(() => Math.random()-0.5).slice(0, 3)
    const filterDesc = [cat?.name, weather, ...moods, (!cat&&exit4Only)?'4번출구':''].filter(Boolean)
    const usedTpl = []
    const res = picks.map((r,i) => {
      const { reason, highlight, templateIdx } = buildRandomReason(r, i, usedTpl)
      usedTpl.push(templateIdx)
      return {
        rank:i+1, restaurantName:r.name,
        reason,
        reviewHighlight: highlight,
        matchScore:Math.floor(Math.random()*15)+80, _random:true,
      }
    })
    setPendingRnd(res); setDicing(true)
  }

  function onDiceFinish() {
    setDicing(false)
    if (pendingRnd) { markShown(pendingRnd); setResults(pendingRnd); setPendingRnd(null) }
    scrollTo()
  }

  // ── AI 추천 (횟수 체크 포함) ──
  function handleRecommendClick() {
    if (!ctx && !weather && moods.length===0) { getRandom(null); return }
    const isAdmin = localStorage.getItem('gm-admin-unlock') === '1'
    const count = getUsageCount()
    if (!isAdmin && count >= DAILY_LIMIT) { setShowLimit(true); return }
    if (!isAdmin && count >= DAILY_WARN - 1) { setWarnCount(count + 1); return }
    getRecommendations()
  }

  function confirmFromWarn() { setWarnCount(null); getRecommendations() }
  function cancelFromWarn()  { setWarnCount(null); getRandom(null) }

  async function getRecommendations() {
    setLoading(true); setError(null); setResults(null)

    try {
      const mm = detectMenu(ctx, moods, weather)
      const pf = parsePriceFilter(ctx)
      const rf = parseRatingFilter(ctx)
      let base = restaurants
      if (exit4Only) base = base.filter(r=>r.exit4)
      // 카테고리 선택이 최우선 필터 — mm(자연어)보다 명시적 선택이 우선
      if (selectedCat && !selectedCat.exit4Only) {
        base = base.filter(r =>
          (selectedCat.cats||[]).some(c => r.cat?.includes(c)) ||
          (selectedCat.tags||[]).some(t => r.tags?.includes(t))
        )
        if (base.length < 5) base = restaurants  // 풀 너무 작으면 완화
      } else if (mm) {
        base = base.filter(r=>mm.cats.some(c=>r.cat?.includes(c)))
      }
      if (pf) base = filterByPrice(base, pf)
      if (rf) base = filterByRating(base, rf)
      if (base.length < 5) base = exit4Only ? restaurants.filter(r=>r.exit4) : restaurants

      // 이전 결과 제외 후 스코어링
      const pool = filterExcluded(base)
      // top20 스코어링 후 → 매번 다른 6개 뽑기 (로테이션으로 다양성 확보)
      const scored = preScore(ctx, moods, weather, pool, selectedCat)
      const top20 = scored.slice(0, 20)
      // 상위 8개 중 3개 고정(최고점) + 나머지 풀에서 랜덤 3개 → 매번 다른 조합
      const fixed3 = top20.slice(0, 3)
      const rest = top20.slice(3)
      const rand3 = [...rest].sort(()=>Math.random()-0.5).slice(0,5)
      const top6 = [...fixed3, ...rand3].sort(()=>Math.random()-0.5)
      // 후보 포맷: 식당별 블록으로 분리 — rv 120자, scene/addr 포함
      const compact = top6.map((r, idx) => {
        const rvLines = (r.rv || []).slice(0, 3)
          .map(v => '  · ' + v.replace(/"/g, '\u2019').slice(0, 120))
          .join('\n')
        const tagsStr  = (r.tags  || []).slice(0, 6).join(' ')
        const sceneStr = (r.scene || []).slice(0, 4).join('·')
        const moodStr  = (r.moods || []).slice(0, 4).join('·')
        return `[후보${idx+1}] ${r.name}
  종류: ${r.type} | 가격: ${r.priceRange||'미정'}원 | 영업: ${r.hours||'확인필요'}
  태그: ${tagsStr} | 어울리는상황: ${sceneStr} | 분위기: ${moodStr}
  리뷰:
${rvLines}`
      }).join('\n\n')
      const ctx_full = (ctx||'').slice(0, 120)
      const mood_str = moods.join(', ')
      const filter_str = [weather&&`날씨:${weather}`, mood_str&&`기분:${mood_str}`, exit4Only&&'4번출구근처', selectedCat&&`카테고리:${selectedCat.name}`].filter(Boolean).join(' / ')
      const prompt = `당신은 삼성역·코엑스 상권을 손바닥처럼 아는 맛집 큐레이터입니다.
사용자의 요청에 담긴 상황과 감정을 먼저 파악하고, 후보 목록 중 가장 잘 맞는 식당 3곳을 골라 풍부하게 추천해주세요.

[사용자 요청]
${ctx_full ? `"${ctx_full}"` : '특별한 요청 없음'}
${filter_str ? `[조건] ${filter_str}` : ''}

[후보 식당 목록]
${compact}

[추천 작성 규칙 — 반드시 준수]
- restaurantName: 후보 목록의 이름 그대로 복사 (절대 수정 금지)
- reason: 반드시 4문장. 각 문장은 최소 40자 이상, reason 전체 합계 최소 200자 이상 작성할 것
  ① [상황 공감 — 최소 40자] 사용자 요청의 숨은 의도·상황·감정을 구체적으로 풀어 공감. 검색어 단순 반복 금지, 반드시 상황·감정으로 승화
    좋은 예: '야근 후 혼밥' → '긴 하루를 혼자 조용히 마무리하고 싶을 때, 대충 때우기 싫고 제대로 된 한 끼가 필요한 그 느낌.'
    나쁜 예: '야근 후 혼밥을 원하시는군요.'
  ② [시그니처 메뉴 — 최소 45자] 이 식당의 대표 메뉴 1~2가지를 구체적 이름과 함께 설명. 왜 그 메뉴가 특별한지 언급
  ③ [선정 이유 — 최소 40자] 분위기·접근성·서비스·공간 중 이 요청에 이 식당을 고른 결정적 이유 한 문장
  ④ [리뷰 인용 — 최소 40자] 제공된 리뷰 중 가장 인상적인 손님 반응을 자연스럽게 녹여서. 핵심 표현은 작은따옴표로 직접 인용
- reviewHighlight: 사용자 상황과 이 식당을 잇는 임팩트 있는 한 줄 (15자 이내, 평점·가격 언급 금지)
- 3개 식당은 반드시 서로 다른 매력 포인트 강조 — 3개가 같은 톤·같은 표현이면 실격
- '최고 평점', '높은 평점', '⭐숫자', '리뷰 수' 같은 수치 서술 절대 금지
- reason·reviewHighlight 안에 큰따옴표(") 절대 사용 금지 — 작은따옴표(')나 「」만 사용
- JSON만 출력, 마크다운 금지

{"recommendations":[{"rank":1,"restaurantName":"이름그대로","reason":"4문장·합계200자이상","reviewHighlight":"15자이내"},{"rank":2,"restaurantName":"...","reason":"...","reviewHighlight":"..."},{"rank":3,"restaurantName":"...","reason":"...","reviewHighlight":"..."}]}`

      const res = await fetch('/api/recommend', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ prompt })
      })

      // HTTP 오류 체크
      if (!res.ok) {
        const errData = await res.json().catch(()=>({}))
        console.error('API HTTP error', res.status, errData)
        const msg = errData.detail || errData.error || `서버 오류 (${res.status})`
        setLoading(false); setError(msg); return
      }

      const data = await res.json()
      setLoading(false)

      // 유효한 추천 결과 확인
      const recs = Array.isArray(data.recommendations) ? data.recommendations : []
      if (recs.length === 0) {
        console.error('Empty recommendations:', data)
        setError(data.error || '추천 결과가 비어있어요'); return
      }

      // 실제 DB에 있는 식당인지 검증 (매칭 실패 제거)
      const matched = recs.filter(rec => {
        const found = restaurants.find(x => x.name === rec.restaurantName)
                   || restaurants.find(x => rec.restaurantName?.includes(x.name) || x.name?.includes(rec.restaurantName))
        return !!found
      })
      if (matched.length === 0) {
        console.error('No matched restaurants:', recs)
        setError('AI가 목록에 없는 식당을 추천했어요 (매칭 실패)'); return
      }

      if (data.usage) {
        window.dispatchEvent(new CustomEvent('token-used', {
          detail: calcCost(data.usage.input_tokens||0, data.usage.output_tokens||0)
        }))
      }

      const newCount = incrementUsage()
      setUsedToday(newCount)
      markShown(matched)
      setResults(matched)
      scrollTo()
    } catch (err) {
      console.error('getRecommendations error:', err)
      setLoading(false); setError(err.message || '알 수 없는 오류')
    }
  }

  const chip = (active, accent) => ({
    padding:'7px 14px', borderRadius:100, fontSize:'.8rem', cursor:'pointer', whiteSpace:'nowrap',
    border:`1px solid ${active?(accent||'var(--primary)'):'var(--border)'}`,
    background: active?(accent||'var(--primary)'):'var(--surface2)',
    color: active?'#fff':'var(--text)',
  })

  return (
    <>
      {loading && <LoadingOverlay />}
      {dicing  && <DiceOverlay onDone={onDiceFinish} />}
      {warnCount  !== null && <WarnModal  count={warnCount}  onConfirm={confirmFromWarn} onCancel={cancelFromWarn} />}
      {showEaster && <EasterEggModal onClose={() => setShowEaster(false)} />}
      {showLimit  && <LimitModal onClose={() => { setShowLimit(false); getRandom(null) }} />}

      <div style={{ padding:'20px 16px' }}>
        {/* 사용 횟수 뱃지 */}
        <div style={{ display:'flex',justifyContent:'flex-end',marginBottom:8 }}>
          <span style={{
            fontSize:'.7rem', padding:'3px 10px', borderRadius:100,
            background: usedToday >= DAILY_LIMIT ? '#2a1111' : usedToday >= DAILY_WARN-1 ? '#2a2000' : 'var(--surface2)',
            border: `1px solid ${usedToday >= DAILY_LIMIT ? '#ff4444' : usedToday >= DAILY_WARN-1 ? '#f5c842' : 'var(--border)'}`,
            color: usedToday >= DAILY_LIMIT ? '#ff6666' : usedToday >= DAILY_WARN-1 ? '#f5c842' : 'var(--muted)',
          }}>
            {usedToday >= DAILY_LIMIT ? '🚫 오늘 AI 검색 소진' : `✨ AI 검색 ${usedToday}/${DAILY_LIMIT}회`}
          </span>
        </div>
        <div style={{ marginBottom:16, position:'relative' }}>
          <textarea value={ctx} onChange={e=>setCtx(e.target.value)}
            placeholder={HINTS[hintIdx]}
            style={{ width:'100%',minHeight:72,background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10,color:'var(--text)',padding:'10px 14px',fontSize:'.9rem',resize:'none',outline:'none',fontFamily:'inherit',boxSizing:'border-box',transition:'border-color .2s' }}
            onKeyDown={e=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();handleRecommendClick()} }}
          />
        </div>

        {/* 필터 - 항상 노출 */}
        <div style={{ marginBottom:16, padding:'16px', background:'var(--surface)', borderRadius:12, border:'1px solid var(--border)' }}>
          <div style={{ fontSize:'.73rem',fontWeight:700,color:'var(--muted)',marginBottom:10 }}>🎛️ 필터 옵션</div>
          <div style={{ marginBottom:12 }}>
            <div style={{ fontSize:'.73rem',color:'var(--muted)',marginBottom:6 }}>🌤️ 날씨</div>
            <div style={{ display:'flex',flexWrap:'wrap',gap:5 }}>
              {WEATHER.map(w=><button key={w} onClick={()=>setWeather(weather===w?'':w)} style={chip(weather===w)}>{w}</button>)}
            </div>
          </div>
          <div style={{ marginBottom:12 }}>
            <div style={{ fontSize:'.73rem',color:'var(--muted)',marginBottom:6 }}>😊 기분</div>
            <div style={{ display:'flex',flexWrap:'wrap',gap:5 }}>
              {MOODS.map(m=><button key={m} onClick={()=>setMoods(p=>p.includes(m)?p.filter(x=>x!==m):[...p,m])} style={chip(moods.includes(m),'var(--accent)')}>{m}</button>)}
            </div>
          </div>
          <div style={{ marginBottom:12 }}>
            <div style={{ fontSize:'.73rem',color:'var(--muted)',marginBottom:6 }}>🗂️ 카테고리</div>
            <div style={{ display:'flex',flexWrap:'wrap',gap:5 }}>
              {CATS.map(cat=>(
                <button key={cat.slug} onClick={()=>setSelectedCat(selectedCat?.slug===cat.slug?null:cat)}
                  style={{ ...chip(selectedCat?.slug===cat.slug,'var(--primary)'), fontSize:'.72rem' }}>
                  {cat.emoji} {cat.name}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>setExit4Only(!exit4Only)} style={{
            ...chip(exit4Only),
            border:`1px solid ${exit4Only?'#ffd700':'var(--border)'}`,
            background:exit4Only?'#2a2200':'var(--surface2)',
            color:exit4Only?'#ffd700':'var(--muted)', fontWeight:exit4Only?700:400,
          }}>
            🚇 4번출구 근처만 ({restaurants.filter(r=>r.exit4).length}개)
          </button>
        </div>


        <div style={{ display:'flex',gap:8 }}>
          <button onClick={handleRecommendClick} disabled={loading||dicing} style={{
            flex:1,padding:'13px',borderRadius:10,background:'var(--primary)',
            color:'#fff',border:'none',fontSize:'.95rem',fontWeight:700,
            cursor:(loading||dicing)?'not-allowed':'pointer',opacity:(loading||dicing)?0.7:1,
          }}>✨ AI 추천받기</button>
          <button onClick={()=>getRandom(null)} disabled={loading||dicing}
            style={{ padding:'13px 18px',borderRadius:10,background:'var(--surface2)',color:'var(--text)',border:'1px solid var(--border)',fontSize:'.88rem',fontWeight:700,cursor:(loading||dicing)?'not-allowed':'pointer',opacity:(loading||dicing)?0.6:1,whiteSpace:'nowrap' }}>
            🎲 랜덤
          </button>
        </div>

        {/* 제외 현황 표시 */}
        {excludedRef.current.size > 0 && (
          <div style={{ marginTop:8,fontSize:'.68rem',color:'var(--muted)',textAlign:'center' }}>
            지금까지 {excludedRef.current.size}개 식당 추천됨
            {excludedRef.current.size >= EXCLUDE_RESET-5 && ' · 곧 처음부터 다시 추천'}
          </div>
        )}

        {error && (
          <div style={{ marginTop:14,padding:14,background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10,fontSize:'.82rem' }}>
            <div style={{ color:'#fc8181',fontWeight:700,marginBottom:4 }}>⚠️ 추천을 불러오지 못했어요</div>
            <div style={{ color:'var(--muted)',fontSize:'.76rem',marginBottom:8 }}>{error}</div>
            <div style={{ color:'var(--muted)',fontSize:'.74rem' }}>잠시 후 다시 시도하거나 🎲 랜덤 추천을 이용해주세요</div>
          </div>
        )}

        {results && (
          <div ref={resultsRef} style={{ marginTop:24, maxWidth:'100%', overflowX:'hidden' }}>
            {results[0]?._random && (
              <div style={{ marginBottom:14,padding:'10px 14px',background:'rgba(99,179,237,.07)',border:'1px solid rgba(99,179,237,.2)',borderRadius:10,textAlign:'center' }}>
                {usedToday >= DAILY_LIMIT
                  ? <><div style={{ fontSize:'.8rem',fontWeight:700,color:'var(--primary)',marginBottom:2 }}>🎲 오늘의 AI 기회를 모두 소진했어요</div>
                      <div style={{ fontSize:'.72rem',color:'var(--muted)' }}>대신 랜덤 추천으로 보여드려요 — 의외로 딱 맞을 수도 있어요 😄{selectedCat ? ` · ${selectedCat.emoji} ${selectedCat.name}` : ''}</div></>
                  : <div style={{ fontSize:'.74rem',color:'var(--muted)' }}>🎲 랜덤 추천 결과{selectedCat ? ` — ${selectedCat.emoji} ${selectedCat.name}` : ''}</div>
                }
              </div>
            )}
            {results.map((rec,i)=>{
              const r = restaurants.find(x=>x.name===rec.restaurantName)
                     || restaurants.find(x=>rec.restaurantName?.includes(x.name) || x.name?.includes(rec.restaurantName))
              if (!r) return null
              const medals=['🥇','🥈','🥉'], borders=['#ffd700','#c0c0c0','#cd7f32']
              return (
                <Link key={i} href={`/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`}
                  style={{ textDecoration:'none', display:'block', color:'inherit' }}>
                  <div style={{ background:'var(--surface2)',border:'1px solid var(--border)',borderLeft:`3px solid ${borders[i]}`,borderRadius:14,padding:'16px 14px',marginBottom:12,cursor:'pointer',transition:'border-color .15s' }}
                    onMouseEnter={e=>e.currentTarget.style.borderColor=borders[i]}
                    onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}
                  >
                    <div style={{ display:'flex',gap:10,marginBottom:8 }}>
                      <span style={{ fontSize:'1.4rem',flexShrink:0 }}>{medals[i]}</span>
                      <div style={{ flex:1,minWidth:0 }}>
                        <div style={{ fontSize:'.95rem',fontWeight:700,marginBottom:5 }}>{r.e} {r.name}</div>
                        <div style={{ display:'flex',flexWrap:'wrap',gap:4 }}>
                          <span style={{ fontSize:'.7rem',background:'var(--surface)',padding:'2px 7px',borderRadius:100,border:'1px solid var(--border)',color:'var(--muted)' }}>{r.type}</span>
                          <span style={{ fontSize:'.7rem',background:'var(--surface)',padding:'2px 7px',borderRadius:100,border:'1px solid var(--border)',color:'var(--text)' }}>⭐{r.rt}</span>
                          {r.priceRange&&<span style={{ fontSize:'.7rem',background:'var(--surface)',padding:'2px 7px',borderRadius:100,border:'1px solid var(--border)',color:'var(--primary)' }}>💰{fmtPrice(r.priceRange)}원</span>}
                          {r.exit4&&<span style={{ fontSize:'.7rem',background:'var(--surface)',padding:'2px 7px',borderRadius:100,border:'1px solid var(--border)',color:'var(--accent)' }}>🚇4번출구</span>}
                        </div>
                      </div>
                    </div>
                    <p style={{ fontSize:'.84rem',color:'var(--text)',marginBottom:10,lineHeight:1.7,opacity:.9,wordBreak:'break-word',whiteSpace:'pre-line' }}>{rec.reason}</p>
                    {rec.reviewHighlight&&(
                      <div style={{ background:'var(--surface)',borderLeft:'3px solid var(--primary)',borderRadius:'0 8px 8px 0',padding:'8px 11px',fontSize:'.78rem',color:'var(--muted)',marginBottom:8,wordBreak:'break-word' }}>
                        💬 &ldquo;{rec.reviewHighlight}&rdquo;
                      </div>
                    )}
                    <div style={{ display:'flex',gap:6,marginTop:8,alignItems:'center' }}>
                      <a href={naverMapUrl(r.name)}
                        target="_blank" rel="noopener noreferrer"
                        onClick={e=>e.stopPropagation()}
                        style={{ fontSize:'.75rem',padding:'5px 12px',borderRadius:8,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)',textDecoration:'none',position:'relative',zIndex:1 }}>
                        📍 지도
                      </a>
                      <span style={{ fontSize:'.75rem',padding:'5px 12px',borderRadius:8,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)' }}>
                        🕐 {r.hours}
                      </span>
                      <span style={{ marginLeft:'auto',fontSize:'.72rem',color:'var(--muted)',opacity:.6 }}>상세보기 →</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

// ── 전체 목록 탭 ─────────────────────────────────────────────
function BrowseTab() {
  const [search,s]       = useState('')
  const [activeCat,ac]   = useState('전체')
  const [exit4Only,e4]   = useState(false)
  const allCats = ['전체','고기구이','국밥','이자카야','일식','중식','양식','치킨','야장','족발보쌈','해산물','분식','한식']
  const filtered = restaurants.filter(r => {
    if (exit4Only && !r.exit4) return false
    return (activeCat==='전체'||r.cat?.includes(activeCat)) &&
      (!search||r.name.includes(search)||r.type.includes(search)||r.tags?.some(t=>t.includes(search)))
  })
  return (
    <div>
      <div style={{ display:'flex',gap:8,marginBottom:14 }}>
        <input value={search} onChange={e=>s(e.target.value)} placeholder="🔍 식당명·종류·태그"
          style={{ flex:1,padding:'9px 14px',borderRadius:10,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text)',fontSize:'.88rem',outline:'none' }} />
        <button onClick={()=>e4(!exit4Only)}
          style={{ padding:'9px 12px',borderRadius:10,border:`1px solid ${exit4Only?'#ffd700':'var(--border)'}`,background:exit4Only?'#2a2200':'var(--surface2)',color:exit4Only?'#ffd700':'var(--muted)',cursor:'pointer',fontSize:'.8rem',whiteSpace:'nowrap' }}>
          🚇 4번출구
        </button>
      </div>
      <div style={{ display:'flex',flexWrap:'wrap',gap:5,marginBottom:16 }}>
        {allCats.map(cat=>(
          <button key={cat} onClick={()=>ac(cat)}
            style={{ padding:'4px 11px',borderRadius:100,fontSize:'.76rem',border:`1px solid ${activeCat===cat?'var(--primary)':'var(--border)'}`,background:activeCat===cat?'var(--primary)':'var(--surface2)',color:activeCat===cat?'#fff':'var(--text)',cursor:'pointer' }}>
            {cat}{activeCat===cat?` (${filtered.length})`:''}</button>
        ))}
      </div>
      <div className="restaurant-grid">
        {filtered.map((r,i)=>(
          <Link href={`/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`} key={i}>
            <div className="restaurant-card">
              <div className="card-name">{r.e} {r.name}{r.exit4&&<span style={{marginLeft:6,fontSize:'.65rem',color:'var(--accent)'}}>🚇</span>}</div>
              <div className="card-meta">
                <span className="tag">{r.type}</span>
                <span className="tag rating">⭐{r.rt}</span>
                {r.priceRange&&<span className="tag price">💰{fmtPrice(r.priceRange)}원</span>}
              </div>
              <div className="card-addr">📍 {r.addr}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ── 메인 ─────────────────────────────────────────────────────
export default function SamseongPage() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') return sessionStorage.getItem('samseong-tab') || 'ai'
    return 'ai'
  })
  const [pendingCat, setPendingCat] = useState(null)
  const switchTab = (tab) => { setActiveTab(tab); sessionStorage.setItem('samseong-tab', tab) }
  const topRated = [...restaurants].sort((a,b)=>b.rt-a.rt).slice(0,6)

  return (
    <Layout title="삼성역 맛집 AI 추천" description="삼성역·코엑스 주변 맛집 AI 추천. 국밥·이자카야·한우·중식 170개+ 식당." canonical="https://dinner.ambitstock.com/dinner/samseong">
      <Head>
        <title>삼성역 맛집 추천 | 코엑스·강남 AI 추천 | 오늘뭐먹지</title>
        <meta name="description" content="삼성역 맛집 AI 추천. 4번출구·코엑스 주변 국밥·이자카야·한우·중식 170개+ 식당." />
        <link rel="canonical" href="https://dinner.ambitstock.com/dinner/samseong" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"ItemList","name":"삼성역 맛집 추천",
          "url":"https://dinner.ambitstock.com/dinner/samseong","numberOfItems":restaurants.length,
          "itemListElement":topRated.slice(0,5).map((r,i)=>({ "@type":"ListItem","position":i+1,"name":r.name,"description":`${r.type} | ⭐${r.rt}` }))
        })}} />
      </Head>

      <section style={{ background:'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',padding:'32px 16px 24px',borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:900,margin:'0 auto' }}>
          <div style={{ fontSize:'.75rem',color:'var(--muted)',marginBottom:8 }}>
            <Link href="/" style={{ color:'var(--muted)' }}>오늘뭐먹지</Link> › 삼성역
          </div>
          <h1 style={{ fontSize:'clamp(1.4rem,5vw,2.2rem)',fontWeight:900,marginBottom:8,lineHeight:1.2 }}>🏙️ 삼성역 맛집</h1>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',marginBottom:14 }}>
            코엑스·파르나스·테헤란로 <strong style={{ color:'var(--text)' }}>{restaurants.length}개+</strong> 식당 AI 추천
          </p>
          <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
            {['#국밥','#한우','#이자카야','#중식','#회식','#4번출구'].map(t=>(
              <span key={t} style={{ fontSize:'.72rem',color:'var(--muted)',background:'var(--surface2)',padding:'3px 9px',borderRadius:100,border:'1px solid var(--border)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth:900,margin:'0 auto',padding:'20px 16px' }}>
        <div style={{ display:'flex',borderBottom:'1px solid var(--border)',marginBottom:20 }}>
          {[{id:'ai',label:'✨ AI 추천'},{id:'browse',label:'📋 전체 목록'},{id:'categories',label:'🗂️ 카테고리'}].map(tab=>(
            <button key={tab.id} onClick={()=>switchTab(tab.id)} style={{
              padding:'10px 16px',fontSize:'.85rem',fontWeight:activeTab===tab.id?700:400,
              background:'none',border:'none',cursor:'pointer',
              color:activeTab===tab.id?'var(--primary)':'var(--muted)',
              borderBottom:activeTab===tab.id?'2px solid var(--primary)':'2px solid transparent',
              marginBottom:-1,whiteSpace:'nowrap',
            }}>{tab.label}</button>
          ))}
        </div>

        {activeTab==='ai' && (
          <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:16,overflow:'hidden',marginTop:4 }}>
            <AiApp pendingCat={pendingCat} onPendingCatUsed={()=>setPendingCat(null)} />
          </div>
        )}
        {activeTab==='browse' && <BrowseTab />}
        {activeTab==='categories' && (
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(130px, 1fr))',gap:10,padding:'4px 0' }}>
            {CATS.map(cat=>{
              const count = cat.exit4Only ? restaurants.filter(r=>r.exit4).length : restaurants.filter(r=>cat.cats.some(c=>r.cat?.includes(c))).length
              return (
                <div key={cat.slug} style={{ position:'relative' }}>
                  <Link href={`/dinner/samseong/category/${cat.slug}`}>
                    <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,padding:'14px 12px 44px',textAlign:'center',cursor:'pointer',transition:'border-color .15s' }}
                      onMouseEnter={e=>e.currentTarget.style.borderColor='var(--primary)'}
                      onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
                      <div style={{ fontSize:'1.8rem',marginBottom:6 }}>{cat.emoji}</div>
                      <div style={{ fontSize:'.82rem',fontWeight:600,marginBottom:3 }}>{cat.name}</div>
                      <div style={{ fontSize:'.72rem',color:'var(--muted)' }}>{count}개</div>
                    </div>
                  </Link>
                  <button
                    onClick={e=>{ e.preventDefault(); setPendingCat(cat); switchTab('ai') }}
                    style={{ position:'absolute',bottom:8,left:'50%',transform:'translateX(-50%)',
                      padding:'4px 14px',borderRadius:8,fontSize:'.72rem',fontWeight:700,
                      background:'var(--primary)',color:'#fff',border:'none',cursor:'pointer',
                      whiteSpace:'nowrap',boxShadow:'0 2px 8px rgba(108,99,255,.3)' }}>
                    🎲 바로 뽑기
                  </button>
                </div>
              )
            })}
          </div>
        )}
        <article style={{ marginTop:48,padding:'24px 20px',background:'var(--surface)',borderRadius:14,border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1rem',fontWeight:800,marginBottom:12 }}>삼성역 맛집 가이드</h2>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8,marginBottom:10 }}>
            삼성역 맛집은 코엑스몰, 파르나스타워, 현대백화점 무역센터 등 대형 상권과 테헤란로 골목의 숨은 맛집들이 공존합니다. 4번출구 방향에는 직장인 점심 맛집이 즐비하고, 코엑스 지하에는 다양한 레스토랑이 자리합니다.
          </p>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8 }}>
            회식 장소로는 웨어하우스43, 대도식당, 하이딜라오 훠궈 등이 인기이며, 가성비 점심을 찾는다면 중앙해장, 연화산 짬뽕, 리춍 중식당을 추천합니다.
          </p>
        </article>
      </div>
    </Layout>
  )
}
