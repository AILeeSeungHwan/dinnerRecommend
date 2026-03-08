import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import restaurants from '../../../data/jamsil'

const NL_MENU_MAP = [
  {patterns:/야장|포장마차|포차|노천|치킨.*야외/i, cats:['야장','치킨','이자카야']},
  {patterns:/치맥|치킨.*맥주|후라이드|양념치킨|통닭/i, cats:['치킨','야장']},
  {patterns:/맥주|이자카야|안주|사케|일본술/i, cats:['이자카야','야장','와인바']},
  {patterns:/국밥|해장|해장국|뼈해장|순대국|설렁탕|곰탕/i, cats:['국밥','국물','한식']},
  {patterns:/칼국수|수제비|칼제비/i, cats:['칼국수','면류','한식']},
  {patterns:/고기|구이|삼겹살|목살|갈비살|한우|등심|소고기|BBQ/i, cats:['고기구이','한식']},
  {patterns:/회식|단체|단체석|프라이빗|룸/i, cats:['이자카야','고기구이','중식']},
  {patterns:/중식|짜장|짬뽕|탕수육|딤섬|마라탕|훠궈/i, cats:['중식','훠궈']},
  {patterns:/파스타|피자|이탈리안|리조또|양식/i, cats:['양식','이탈리안']},
  {patterns:/스테이크|립아이|ribeye/i, cats:['스테이크','양식']},
  {patterns:/일식|스시|초밥|사시미|오마카세/i, cats:['이자카야','일식']},
  {patterns:/혼밥|혼자|1인/i, cats:['국밥','칼국수','한식']},
  {patterns:/술|와인|소주|막걸리/i, cats:['이자카야','야장','와인바']},
  {patterns:/곱창|막창|양념구이/i, cats:['고기구이','야장']},
  {patterns:/족발|보쌈/i, cats:['한식']},
]

const WEATHER = ['맑음','흐림','비','눈','쌀쌀함','덥고 습함']
const MOODS   = ['기분 좋음','피곤함','스트레스','혼밥','축하','허전함','데이트','회식']
const CATS = [
  {emoji:'🥩', name:'고기구이·한우',     slug:'meat',     cats:['고기구이'],                     tags:['한우','갈비','삼겹살','목살']},
  {emoji:'🦪', name:'해산물·조개·아구찜', slug:'seafood',  cats:['해산물'],                       tags:['조개찜','아구찜','물회','쭈꾸미','활문어']},
  {emoji:'🫀', name:'곱창·막창·내장',    slug:'gopchang', cats:[],                               tags:['곱창','막창','소곱창','내장','돼지곱창']},
  {emoji:'🏮', name:'이자카야·포차',     slug:'izakaya',  cats:['이자카야','야장'],               tags:['포차감성','전골','수제맥주']},
  {emoji:'🍣', name:'일식·스시·오마카세', slug:'japanese', cats:['일식'],                         tags:['스시','사시미','규동','오마카세']},
  {emoji:'🥣', name:'국밥·칼국수·해장',  slug:'gukbap',   cats:['국밥','칼국수'],                tags:['해장','감자탕','순대국밥']},
  {emoji:'🍜', name:'중식·마라·양꼬치',  slug:'chinese',  cats:['중식','훠궈'],                  tags:['마라탕','양꼬치','짬뽕']},
  {emoji:'🍝', name:'양식·파스타·피자',  slug:'western',  cats:['양식','이탈리안'],              tags:['파스타','피자','스테이크']},
  {emoji:'🍱', name:'한식·갈비찜·족발',  slug:'korean',   cats:['한식'],                         tags:['갈비찜','족발','보쌈','한정식']},
  {emoji:'🎉', name:'회식·단체모임',     slug:'group',    cats:[],                               tags:['단체가능','회식','주차가능']},
  {emoji:'💑', name:'데이트·분위기',     slug:'date',     cats:[],                               tags:['데이트','뷰맛집','프라이빗','인스타감성']},
  {emoji:'💰', name:'가성비·혼밥·점심',  slug:'budget',   cats:[],                               tags:['가성비','점심','혼밥가능']},
  {emoji:'✨', name:'프리미엄·오마카세', slug:'premium',  cats:[],                               tags:['오마카세','예약제','미슐랭','프라이빗']},
]

// ── 유틸 ──────────────────────────────────────────────────────
function detectMenu(q, moods, wx) {
  const t = `${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  for (const m of NL_MENU_MAP) { if (m.patterns.test(t)) return m }
  return null
}

function preScore(q, moods, wx, cands) {
  const qt = `${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  return cands.map(r => {
    let s = (r.rt||0) * 3
    const blob = `${r.name} ${r.type} ${(r.tags||[]).join(' ')} ${(r.scene||[]).join(' ')} ${(r.moods||[]).join(' ')} ${(r.wx||[]).join(' ')}`
    moods.forEach(m => { if (blob.includes(m)) s += 15 })
    if (blob.includes(wx)) s += 10
    ;(r.tags||[]).forEach(t => { if (qt.includes(t.toLowerCase())) s += 20 })
    ;(r.scene||[]).forEach(sc => { if (qt.includes(sc.toLowerCase())) s += 18 })
    qt.split(/\s+/).filter(w => w.length > 1).forEach(w => { if (blob.toLowerCase().includes(w)) s += 5 })
    // vector 필드 있으면 추가 스코어
    if (r.vector) {
      if (qt.includes('혼밥')||qt.includes('혼자')) s += r.vector.solo * 12
      if (qt.includes('회식')||qt.includes('단체')) s += r.vector.group * 12
      if (qt.includes('술')||qt.includes('맥주')||qt.includes('소주')) s += r.vector.alcohol * 10
      if (['비','눈','쌀쌀함'].includes(wx)) s += r.vector.warm_food * 8
      if (qt.includes('데이트')) s += r.vector.date * 12
      if (qt.includes('빠르게')||qt.includes('점심')) s += r.vector.fast_meal * 8
    }
    return { ...r, _score: s }
  }).sort((a,b) => b._score - a._score)
}

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

function calcCost(i, o) { return (i/1e6)*0.8 + (o/1e6)*4 }  // haiku

// ── 로딩 오버레이 ──────────────────────────────────────────────
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

// ── 주사위 오버레이 ────────────────────────────────────────────
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
  // 식당명에 잠실/송파/방이/석촌 등 지역이 포함되면 그대로, 아니면 " 잠실" 추가
  const hasRegion = /(잠실|송파|방이|석촌|롯데월드|올림픽공원)/.test(name)
  const query = hasRegion ? cleaned : cleaned + ' 잠실'
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

// ── 사용 횟수 관리 ─────────────────────────────────────────────
const DAILY_WARN  = 3
const DAILY_LIMIT = 5

function getTodayKey() { return 'ai_count_' + new Date().toISOString().slice(0,10) }
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

// ── 검색 힌트 ─────────────────────────────────────────────────
const HINTS = [
  '예: 비 오는 날 따뜻한 국밥집',
  '예: 방이동 곱창 소주 한잔',
  '예: 야근 후 해장할 곳',
  '예: 1만원 이하 혼밥 가능한 곳',
  '예: 롯데타워 근처 데이트 코스',
  '예: 석촌호수 뷰 카페',
  '예: 회식하기 좋은 고기집',
  '예: 쌀쌀한 날 뜨끈한 칼국수',
  '예: 평점 4.5 이상 이자카야',
  '예: 오마카세 기념일 코스',
  '예: 송리단길 브런치 데이트',
  '예: 늦은 밤 야식 족발',
  '예: 혼자 조용히 먹을 수 있는 곳',
  '예: 스트레스 풀리는 마라탕',
]

// ── 경고 모달 ──────────────────────────────────────────────────
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
        <div style={{ background:'#fff',borderRadius:14,padding:14,marginBottom:20,display:'inline-block',boxShadow:'0 2px 12px rgba(0,0,0,.15)' }}>
          <img src="/toss-qr.png" alt="토스 후원 QR" style={{ width:110,height:110,display:'block' }} />
        </div>
        <div style={{ fontSize:'.7rem',color:'var(--muted)',marginBottom:18 }}>📱 토스앱으로 스캔하면 개발자가 국밥을 먹어요</div>
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

// ── 한도 초과 모달 ─────────────────────────────────────────────
function LimitModal({ onClose }) {
  return (
    <div style={{ position:'fixed',inset:0,zIndex:400,background:'rgba(0,0,0,.85)',backdropFilter:'blur(10px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px' }}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:24,padding:'36px 28px',maxWidth:360,width:'100%',textAlign:'center',boxShadow:'0 24px 64px rgba(0,0,0,.7)' }}>
        <div style={{ fontSize:'3.8rem',marginBottom:14 }}>😭</div>
        <div style={{ fontSize:'1.1rem',fontWeight:900,color:'var(--text)',marginBottom:10,lineHeight:1.35 }}>
          오늘 AI 검색을<br/>다 쓰셨어요
        </div>
        <div style={{ fontSize:'.84rem',color:'var(--muted)',marginBottom:6,lineHeight:1.75 }}>
          하루 {DAILY_LIMIT}회 무료 AI 검색을 모두 사용했어요.<br/>
          자정이 지나면 다시 {DAILY_LIMIT}회가 충전돼요 🌙<br/><br/>
          <strong style={{ color:'var(--text)' }}>랜덤 뽑기는 무제한</strong>으로 사용 가능해요!
        </div>
        <div style={{ background:'#fff',borderRadius:14,padding:14,marginBottom:20,display:'inline-block',boxShadow:'0 2px 12px rgba(0,0,0,.15)' }}>
          <img src="/toss-qr.png" alt="토스 후원 QR" style={{ width:110,height:110,display:'block' }} />
        </div>
        <div style={{ fontSize:'.7rem',color:'var(--muted)',marginBottom:18 }}>☕ 커피 한 잔 후원하시면 개발자가 기뻐해요</div>
        <button onClick={onClose} style={{ width:'100%',padding:'13px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.9rem',fontWeight:700,cursor:'pointer' }}>
          🎲 랜덤 뽑기로 할게요
        </button>
      </div>
    </div>
  )
}

// ── AI 추천 앱 ────────────────────────────────────────────────
const EXCLUDE_RESET = 50

function AiApp({ pendingCat, onPendingCatUsed }) {
  const [ctx,        setCtx]       = useState('')
  const [weather,    setWeather]   = useState('')
  const [moods,      setMoods]     = useState([])
  const [selectedCat,setSelectedCat]= useState(null)   // 카테고리 필터
  const [loading,    setLoading]   = useState(false)
  const [dicing,     setDicing]    = useState(false)
  const [pendingRnd, setPendingRnd]= useState(null)
  const [results,    setResults]   = useState(null)
  const [error,      setError]     = useState(false)
  const [warnCount,  setWarnCount] = useState(null)
  const [showLimit,  setShowLimit] = useState(false)
  const [hintIdx,    setHintIdx]   = useState(0)
  const [usedToday,  setUsedToday] = useState(0)
  const excludedRef = useRef(new Set())
  const resultsRef  = useRef(null)

  useEffect(() => {
    setUsedToday(getUsageCount())
    const t = setInterval(() => setHintIdx(i => (i + 1) % HINTS.length), 3200)
    return () => clearInterval(t)
  }, [])

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

  // ── 랜덤 ──
  function getRandom(catOverride) {
    const cat = catOverride || selectedCat
    let base = restaurants
    if (cat) {
      base = base.filter(r =>
        (cat.cats.length>0 && cat.cats.some(c=>r.cat?.includes(c))) ||
        (cat.tags||[]).some(t=>r.tags?.some(rt=>rt.includes(t))||r.cat?.some(c=>c.includes(t)))
      )
    }
    if (weather) base = base.filter(r=>!r.wx||r.wx.includes(weather))
    if (moods.length>0) base = base.filter(r=>moods.some(m=>r.moods?.includes(m)))
    if (base.length < 5) {
      base = cat
        ? restaurants.filter(r=>(cat.cats.length>0&&cat.cats.some(c=>r.cat?.includes(c)))||(cat.tags||[]).some(t=>r.tags?.some(rt=>rt.includes(t))))
        : restaurants
    }
    const pool = filterExcluded(base)
    const picks = [...pool].sort(() => Math.random()-0.5).slice(0, 3)
    const filterDesc = [cat?.name, weather, ...moods].filter(Boolean)
    const res = picks.map((r,i) => ({
      rank:i+1, restaurantName:r.name,
      reason:`평점 ⭐${r.rt} (${r.cnt?.toLocaleString()}개 리뷰). ${(r.tags||[]).slice(0,3).join(', ')} 특징의 ${r.type} 맛집입니다.${filterDesc.length?` [${filterDesc.join('·')}]`:''}`,
      reviewHighlight:(r.rv?.[0]||'').replace(/ \(실제 Google 리뷰.*?\)/g,''),
      matchScore:Math.floor(Math.random()*15)+80, _random:true,
    }))
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
    setLoading(true); setError(false); setResults(null)

    try {
      const mm = detectMenu(ctx, moods, weather)
      const pf = parsePriceFilter(ctx)
      const rf = parseRatingFilter(ctx)
      let base = restaurants
      if (mm) base = base.filter(r=>mm.cats.some(c=>r.cat?.includes(c)))
      if (pf) base = filterByPrice(base, pf)
      if (rf) base = filterByRating(base, rf)
      if (base.length < 5) base = restaurants

      // 이전 결과 제외 후 스코어링
      const pool = filterExcluded(base)
      // top20 스코어링 → 매번 다른 6개 (top3 고정 + 랜덤3)
      const scored = preScore(ctx, moods, weather, pool)
      const top20 = scored.slice(0, 20)
      const fixed3 = top20.slice(0, 3)
      const rest = top20.slice(3)
      const rand3 = [...rest].sort(()=>Math.random()-0.5).slice(0,3)
      const top6 = [...fixed3, ...rand3].sort(()=>Math.random()-0.5)
      const compact = top6.map(r => {
        const rvSnippet = (r.rv || []).slice(0, 2)
          .map(v => v.replace(/^\[.*?\u2605\]\s*/, '').slice(0, 50))
          .join(' / ')
        const moodStr = (r.moods || []).slice(0, 3).join('·')
        const tagsStr = (r.tags || []).slice(0, 5).join('/')
        return `${r.name}|타입:${r.type}|평점:⭐${r.rt}(${r.cnt}개리뷰)|가격:${r.priceRange||'미정'}원|태그:${tagsStr}|분위기:${moodStr}|리뷰:"${rvSnippet}"|영업:${r.hours||'확인필요'}`
      }).join('\n')
      const ctx_full = (ctx||'').slice(0, 80)
      const mood_str = moods.join(', ')
      const filter_str = [weather&&`날씨:${weather}`, mood_str&&`기분:${mood_str}`, selectedCat&&`카테고리:${selectedCat.name}`].filter(Boolean).join(' / ')
      const prompt = `당신은 잠실·방이동 맛집 전문가입니다. 아래 사용자의 요청에 딱 맞는 식당 3곳을 후보 목록에서 골라 추천해주세요.

[사용자 요청]
${ctx_full ? `\"${ctx_full}\"` : '특별한 요청 없음 (상황에 맞는 추천)'}
${filter_str ? `조건: ${filter_str}` : ''}

[후보 식당 목록 — 각 항목: 이름|타입|평점|가격|태그|분위기|리뷰|영업시간]
${compact}

[추천 작성 규칙]
- restaurantName: 후보 목록 이름 그대로 (절대 수정 금지)
- reason: 반드시 3~4문장, 아래 요소를 자연스럽게 녹일 것
  ① 사용자 요청·기분·날씨와 이 식당이 왜 맞는지 (구체적으로)
  ② 이 식당만의 시그니처 메뉴·분위기·특징 (다른 식당과 차별화)
  ③ 실제 리뷰에서 나온 손님 반응이나 분위기
- reviewHighlight: 이 식당을 강렬하게 한 줄 표현 (리뷰 키워드 활용, 20자 이내)
- 3개 식당이 각자 다른 매력을 강조 (비슷한 문구 반복 절대 금지)
- JSON만 출력, 마크다운·설명 없음

{"recommendations":[{"rank":1,"restaurantName":"이름그대로","reason":"3~4문장구체설명","reviewHighlight":"핵심한줄"},{"rank":2,"restaurantName":"...","reason":"...","reviewHighlight":"..."},{"rank":3,"restaurantName":"...","reason":"...","reviewHighlight":"..."}]}`

      const res = await fetch('/api/recommend', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ prompt })
      })

      // HTTP 오류 체크
      if (!res.ok) {
        const errData = await res.json().catch(()=>({}))
        console.error('API HTTP error', res.status, errData)
        setLoading(false); setError(true); return
      }

      const data = await res.json()
      setLoading(false)

      // 유효한 추천 결과 확인
      const recs = Array.isArray(data.recommendations) ? data.recommendations : []
      if (recs.length === 0) {
        console.error('Empty recommendations:', data)
        setError(true); return
      }

      // 실제 DB에 있는 식당인지 검증 (매칭 실패 제거)
      const matched = recs.filter(rec => {
        const found = restaurants.find(x => x.name === rec.restaurantName)
                   || restaurants.find(x => rec.restaurantName?.includes(x.name) || x.name?.includes(rec.restaurantName))
        return !!found
      })
      if (matched.length === 0) {
        console.error('No matched restaurants:', recs)
        setError(true); return
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
      setLoading(false); setError(true)
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
          <div style={{ marginTop:14,padding:14,background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10,color:'var(--primary)',fontSize:'.85rem' }}>
            추천을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
          </div>
        )}

        {results && (
          <div ref={resultsRef} style={{ marginTop:24, maxWidth:'100%', overflowX:'hidden' }}>
            {results[0]?._random && (
              <div style={{ fontSize:'.75rem',color:'var(--muted)',marginBottom:12,textAlign:'center' }}>
                🎲 랜덤 추천 결과{selectedCat ? ` — ${selectedCat.emoji} ${selectedCat.name}` : ''}
              </div>
            )}
            {results.map((rec,i)=>{
              const r = restaurants.find(x=>x.name===rec.restaurantName)
                     || restaurants.find(x=>rec.restaurantName?.includes(x.name) || x.name?.includes(rec.restaurantName))
              if (!r) return null
              const medals=['🥇','🥈','🥉'], borders=['#ffd700','#c0c0c0','#cd7f32']
              return (
                <Link key={i} href={`/dinner/jamsil/restaurant/${encodeURIComponent(r.name)}`}
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
                        </div>
                      </div>
                    </div>
                    <p style={{ fontSize:'.84rem',color:'var(--text)',marginBottom:rec.reviewHighlight?8:0,lineHeight:1.65,opacity:.9 }}>{rec.reason}</p>
                    {rec.reviewHighlight&&(
                      <div style={{ background:'var(--surface)',borderLeft:'3px solid var(--primary)',borderRadius:'0 8px 8px 0',padding:'7px 11px',fontSize:'.78rem',color:'var(--muted)',marginBottom:8 }}>
                        💬 {`"${rec.reviewHighlight}"`}
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
  const [search, s]      = useState('')
  const [activeCat, ac]  = useState('전체')
  const allCats = ['전체','국밥','고기구이','이자카야','중식','양식','치킨','야장','버거','칼국수','일식']
  const filtered = restaurants.filter(r => {
    return (activeCat==='전체'||r.cat?.includes(activeCat)) &&
      (!search||r.name.includes(search)||r.type.includes(search)||r.tags?.some(t=>t.includes(search)))
  })
  return (
    <div>
      <div style={{ display:'flex',gap:8,marginBottom:14 }}>
        <input value={search} onChange={e=>s(e.target.value)} placeholder="🔍 식당명·종류·태그"
          style={{ flex:1,padding:'9px 14px',borderRadius:10,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text)',fontSize:'.88rem',outline:'none' }} />
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
          <Link href={`/dinner/jamsil/restaurant/${encodeURIComponent(r.name)}`} key={i}>
            <div className="restaurant-card">
              <div className="card-name">{r.e} {r.name}</div>
              <div className="card-meta">
                <span className="tag">{r.type}</span>
                <span className="tag rating">⭐{r.rt}</span>
                {r.priceRange&&<span className="tag price">💰{fmtPrice(r.priceRange)}원</span>}
                {r.waiting&&r.waiting!=='바로 입장'&&<span className="tag" style={{color:'var(--muted)'}}>{r.waiting}</span>}
              </div>
              <div className="card-addr">📍 {r.addr}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ── 메인 ──────────────────────────────────────────────────────
export default function JamsilPage() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') return sessionStorage.getItem('jamsil-tab') || 'ai'
    return 'ai'
  })
  const [pendingCat, setPendingCat] = useState(null)
  const switchTab = (tab) => { setActiveTab(tab); sessionStorage.setItem('jamsil-tab', tab) }
  const topRated = [...restaurants].sort((a,b)=>b.rt-a.rt).slice(0,6)

  return (
    <Layout
      title="잠실 맛집 AI 추천"
      description="잠실역·방이동·석촌호수 주변 맛집 AI 추천. 곱창·국밥·이자카야·롯데타워 맛집."
      canonical="https://dinner.ambitstock.com/dinner/jamsil"
    >
      <Head>
        <title>잠실 맛집 추천 | 방이동·석촌호수 AI 추천 | 오늘뭐먹지</title>
        <meta name="description" content={`잠실역·방이동·석촌호수 주변 맛집 AI 추천. 곱창·삼겹살·국밥·이자카야·오마카세 ${restaurants.length}개+ 식당.`} />
        <link rel="canonical" href="https://dinner.ambitstock.com/dinner/jamsil" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"ItemList","name":"잠실역 맛집 추천",
          "url":"https://dinner.ambitstock.com/dinner/jamsil","numberOfItems":restaurants.length,
          "itemListElement":topRated.slice(0,5).map((r,i)=>({ "@type":"ListItem","position":i+1,"name":r.name,"description":`${r.type} | ⭐${r.rt}` }))
        })}} />
      </Head>

      {/* 히어로 */}
      <section style={{ background:'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',padding:'32px 16px 24px',borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:900,margin:'0 auto' }}>
          <div style={{ fontSize:'.75rem',color:'var(--muted)',marginBottom:8 }}>
            <Link href="/" style={{ color:'var(--muted)' }}>오늘뭐먹지</Link> › 잠실
          </div>
          <h1 style={{ fontSize:'clamp(1.4rem,5vw,2.2rem)',fontWeight:900,marginBottom:8,lineHeight:1.2 }}>🎡 잠실 맛집</h1>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',marginBottom:14 }}>
            방이동·석촌호수·롯데타워 <strong style={{ color:'var(--text)' }}>{restaurants.length}개+</strong> 식당 AI 추천
          </p>
          <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
            {['#곱창','#국밥','#고기구이','#오마카세','#데이트','#방이동맛집'].map(t=>(
              <span key={t} style={{ fontSize:'.72rem',color:'var(--muted)',background:'var(--surface2)',padding:'3px 9px',borderRadius:100,border:'1px solid var(--border)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth:900,margin:'0 auto',padding:'20px 16px' }}>
        {/* 탭 */}
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
              const count = restaurants.filter(r=>{
                const catMatch = cat.cats.length > 0 && cat.cats.some(c=>r.cat?.includes(c))
                const tagMatch = cat.tags?.some(t=>r.tags?.some(rt=>rt.includes(t))||r.cat?.some(c=>c.includes(t)))
                return catMatch||tagMatch
              }).length
              return (
                <div key={cat.slug} style={{ position:'relative' }}>
                  <Link href={`/dinner/jamsil/category/${cat.slug}`}>
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
        {/* ── 카테고리 항상 노출 ── */}
        <div style={{ marginBottom:36, paddingTop:8 }}>
          <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12 }}>
            <span style={{ fontSize:'.8rem',fontWeight:700,color:'var(--muted)' }}>🗂️ 카테고리별 탐색</span>
            <button onClick={()=>switchTab('categories')} style={{ fontSize:'.72rem',color:'var(--primary)',background:'none',border:'none',cursor:'pointer',padding:0 }}>전체 보기 →</button>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(120px, 1fr))',gap:8 }}>
            {CATS.map(cat=>{
              const count = restaurants.filter(r=>{
                const catMatch = cat.cats.length > 0 && cat.cats.some(c=>r.cat?.includes(c))
                const tagMatch = cat.tags?.some(t=>r.tags?.some(rt=>rt.includes(t))||r.cat?.some(c=>c.includes(t)))
                return catMatch||tagMatch
              }).length
              return (
                <div key={cat.slug} style={{ position:'relative' }}>
                  <Link href={`/dinner/jamsil/category/${cat.slug}`} style={{ textDecoration:'none' }}>
                    <div
                      style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,padding:'12px 10px 40px',textAlign:'center',cursor:'pointer',transition:'border-color .15s' }}
                      onMouseEnter={e=>e.currentTarget.style.borderColor='var(--primary)'}
                      onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}
                    >
                      <div style={{ fontSize:'1.6rem',marginBottom:4 }}>{cat.emoji}</div>
                      <div style={{ fontSize:'.78rem',fontWeight:600,marginBottom:2,lineHeight:1.3,color:'var(--text)' }}>{cat.name}</div>
                      <div style={{ fontSize:'.68rem',color:'var(--muted)' }}>{count}개</div>
                    </div>
                  </Link>
                  <button
                    onClick={e=>{ e.preventDefault(); setPendingCat(cat); switchTab('ai') }}
                    style={{ position:'absolute',bottom:7,left:'50%',transform:'translateX(-50%)',
                      padding:'3px 12px',borderRadius:7,fontSize:'.68rem',fontWeight:700,
                      background:'var(--primary)',color:'#fff',border:'none',cursor:'pointer',
                      whiteSpace:'nowrap',boxShadow:'0 2px 8px rgba(108,99,255,.25)' }}>
                    🎲 뽑기
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* SEO 콘텐츠 */}
        <article style={{ marginTop:48,padding:'24px 20px',background:'var(--surface)',borderRadius:14,border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1rem',fontWeight:800,marginBottom:12 }}>잠실 맛집 가이드</h2>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8,marginBottom:10 }}>
            잠실 맛집의 핵심은 <strong style={{ color:'var(--text)' }}>방이동 먹자골목</strong>입니다. 곱창·삼겹살·족발 골목으로 유명하며, 30~40년 전통 노포부터 트렌디한 신상 가게까지 다양합니다. 저녁에는 소주 한 잔 곁들이는 로컬 분위기가 압권입니다.
          </p>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8,marginBottom:10 }}>
            <strong style={{ color:'var(--text)' }}>석촌호수 주변</strong>은 송리단길을 중심으로 브런치 카페·와인바·이탈리안 레스토랑이 즐비합니다. 봄 벚꽃 시즌에는 호수뷰 카페가 특히 인기입니다. 데이트 코스와 주말 나들이에 제격입니다.
          </p>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8 }}>
            <strong style={{ color:'var(--text)' }}>롯데월드몰·잠실역 상권</strong>에는 딘타이펑·샤오롱바오·오마카세 등 프리미엄 맛집이 집중되어 있습니다. 특별한 날 기념식사나 접대 장소로 적합합니다.
          </p>
        </article>

        {/* 다른 지역 링크 */}
        <div style={{ marginTop:24,padding:'16px',background:'var(--surface)',borderRadius:12,border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between' }}>
          <span style={{ fontSize:'.85rem',color:'var(--muted)' }}>🏙️ 삼성역·코엑스도 보고 싶다면?</span>
          <Link href="/dinner/samseong" style={{ fontSize:'.82rem',color:'var(--primary)',textDecoration:'none',fontWeight:600 }}>
            삼성역 맛집 →
          </Link>
        </div>
      </div>
    </Layout>
  )
}
