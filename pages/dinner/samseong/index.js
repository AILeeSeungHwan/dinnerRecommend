import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import restaurants from '../../../data/samseong'

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
]

const WEATHER = ['맑음','흐림','비','눈','쌀쌀함','덥고 습함']
const MOODS = ['기분 좋음','피곤함','스트레스','혼밥','축하','허전함','데이트','회식']
const CATS = [
  {emoji:'🥣', name:'국밥·해장', slug:'gukbap', cats:['국밥','국물']},
  {emoji:'🥩', name:'고기·한우', slug:'meat',   cats:['고기구이','한식']},
  {emoji:'🏮', name:'이자카야',  slug:'izakaya', cats:['이자카야']},
  {emoji:'🍜', name:'중식',      slug:'chinese', cats:['중식','훠궈']},
  {emoji:'🍝', name:'양식·스테이크', slug:'western', cats:['양식','이탈리안','스테이크']},
  {emoji:'🎉', name:'회식·단체', slug:'group',   cats:['이자카야','고기구이','중식']},
  {emoji:'🐔', name:'치킨·야장', slug:'chicken', cats:['치킨','야장']},
  {emoji:'🍣', name:'일식·스시', slug:'japanese',cats:['이자카야','일식']},
  {emoji:'🚇', name:'4번출구',   slug:'exit4',    cats:[], exit4Only:true},
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

function calcCost(i, o) { return (i/1e6)*3 + (o/1e6)*15 }

// ── 로딩 오버레이 ─────────────────────────────────────────────
function LoadingOverlay() {
  const frames = ['🍚','🥢','🍜','🥩','🏮','🍣','🥣','✨']
  const msgs   = ['맛집 탐색 중...','리뷰 분석 중...','최적 매칭 중...','거의 다 됐어요!']
  const [f, setF] = useState(0)
  const [m, setM] = useState(0)
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

// ── 한도 초과 모달 (5회 이후) ────────────────────────────────
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
        {/* 토스 QR */}
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

// ── AI 추천 앱 ───────────────────────────────────────────────
// 제외 목록 관리: 50개 초과 시 자동 리셋
const EXCLUDE_RESET = 50

function AiApp() {
  const [ctx,        setCtx]       = useState('')
  const [weather,    setWeather]   = useState('')
  const [moods,      setMoods]     = useState([])
  const [exit4Only,  setExit4Only] = useState(false)
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
  const [showFilters,setShowFilters]= useState(false)
  const resultsRef  = useRef(null)

  useEffect(() => {
    setUsedToday(getUsageCount())
    const t = setInterval(() => setHintIdx(i => (i + 1) % HINTS.length), 3200)
    return () => clearInterval(t)
  }, [])

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
    if (!ctx && !weather && moods.length===0) { getRandom(); return }
    const count = getUsageCount()
    if (count >= DAILY_LIMIT) { setShowLimit(true); return }
    if (count >= DAILY_WARN - 1) { setWarnCount(count + 1); return }
    getRecommendations()
  }

  function confirmFromWarn() { setWarnCount(null); getRecommendations() }
  function cancelFromWarn()  { setWarnCount(null); getRandom() }

  async function getRecommendations() {
    setLoading(true); setError(false); setResults(null)

    try {
      const mm = detectMenu(ctx, moods, weather)
      const pf = parsePriceFilter(ctx)
      const rf = parseRatingFilter(ctx)
      let base = restaurants
      if (exit4Only) base = base.filter(r=>r.exit4)
      if (mm) base = base.filter(r=>mm.cats.some(c=>r.cat?.includes(c)))
      if (pf) base = filterByPrice(base, pf)
      if (rf) base = filterByRating(base, rf)
      if (base.length < 5) base = exit4Only ? restaurants.filter(r=>r.exit4) : restaurants

      // 이전 결과 제외 후 스코어링
      const pool = filterExcluded(base)
      // top12 뽑되, AI에게는 이름·타입·평점·가격·태그2개만 (토큰 최소화)
      const top12 = preScore(ctx, moods, weather, pool).slice(0, 12)
      const compact = top12.map(r =>
        `${r.name}(${r.type},${r.rt}★,${r.priceRange||'?'},${(r.tags||[]).slice(0,2).join('·')})`
      ).join('\n')

      // 출력도 짧게: matchScore 제거, reason 1문장
      const prompt = `삼성역맛집 추천. 입력:"${ctx||'없음'}" 날씨:${weather||'무관'} 기분:${moods.join(',')||'무관'}${exit4Only?' 4번출구':''}
후보:\n${compact}
JSON만:{recommendations:[{rank:1,restaurantName:"이름",reason:"1~2문장",reviewHighlight:"한줄"},{rank:2,...},{rank:3,...}]}`

      const res = await fetch('/api/recommend', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      setLoading(false)

      if (data.usage) {
        window.dispatchEvent(new CustomEvent('token-used', {
          detail: calcCost(data.usage.input_tokens||0, data.usage.output_tokens||0)
        }))
      }

      const recs = data.recommendations || []
      const newCount = incrementUsage()
      setUsedToday(newCount)
      markShown(recs)
      setResults(recs)
      scrollTo()
    } catch {
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
      {showLimit  && <LimitModal onClose={() => { setShowLimit(false); getRandom() }} />}

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

        {/* 필터 토글 */}
        <div style={{ marginBottom:14 }}>
          <button onClick={()=>setShowFilters(v=>!v)} style={{
            display:'flex', alignItems:'center', gap:6,
            padding:'7px 14px', borderRadius:10, fontSize:'.82rem',
            border:`1px solid ${(weather||moods.length||exit4Only||selectedCat)?'var(--primary)':'var(--border)'}`,
            background:(weather||moods.length||exit4Only||selectedCat)?'var(--primary)':'var(--surface2)',
            color:(weather||moods.length||exit4Only||selectedCat)?'#fff':'var(--muted)',
            cursor:'pointer', transition:'all .15s',
          }}>
            <span>{showFilters ? '▲' : '▼'}</span>
            <span>필터 {(weather||moods.length||exit4Only||selectedCat) ? `(${[selectedCat?.name,weather,...moods,exit4Only?'4번출구':''].filter(Boolean).length}개 선택)` : '추가'}</span>
          </button>
        </div>
        {showFilters && (
          <div style={{ marginBottom:14, padding:'14px', background:'var(--surface)', borderRadius:12, border:'1px solid var(--border)' }}>
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
            {/* 카테고리 선택 */}
            <div style={{ marginBottom:12 }}>
              <div style={{ fontSize:'.73rem',color:'var(--muted)',marginBottom:6 }}>🗂️ 카테고리 (랜덤 범위)</div>
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
        )}

        <div style={{ display:'flex',gap:8 }}>
          <button onClick={handleRecommendClick} disabled={loading||dicing} style={{
            flex:1,padding:'13px',borderRadius:10,background:'var(--primary)',
            color:'#fff',border:'none',fontSize:'.95rem',fontWeight:700,
            cursor:(loading||dicing)?'not-allowed':'pointer',opacity:(loading||dicing)?0.7:1,
          }}>✨ AI 추천받기</button>
          <button onClick={getRandom} disabled={loading||dicing} title="랜덤 3개"
            style={{ padding:'13px 16px',borderRadius:10,background:'var(--surface2)',color:'var(--text)',border:'1px solid var(--border)',fontSize:'1.1rem',cursor:'pointer' }}>
            🎲
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
                          {r.priceRange&&<span style={{ fontSize:'.7rem',background:'var(--surface)',padding:'2px 7px',borderRadius:100,border:'1px solid var(--border)',color:'var(--primary)' }}>💰{r.priceRange}원</span>}
                          {r.exit4&&<span style={{ fontSize:'.7rem',background:'var(--surface)',padding:'2px 7px',borderRadius:100,border:'1px solid var(--border)',color:'var(--accent)' }}>🚇4번출구</span>}
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
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name+' 삼성역')}`}
                        target="_blank" rel="noopener noreferrer"
                        onClick={e=>e.stopPropagation()}
                        style={{ fontSize:'.75rem',padding:'5px 12px',borderRadius:8,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)',textDecoration:'none',position:'relative',zIndex:1 }}>
                        📍 지도
                      </a>
                      <span style={{ fontSize:'.75rem',padding:'5px 12px',borderRadius:8,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)' }}>
                        🕐 {r.hours}
                      </span>
                      <span style={{ marginLeft:'auto',fontSize:'.72rem',color:'var(--muted)',opacity:.6 }}>탭해서 상세보기 →</span>
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
  const allCats = ['전체','국밥','고기구이','이자카야','중식','양식','치킨','야장','버거','칼국수']
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
                {r.priceRange&&<span className="tag price">💰{r.priceRange}원</span>}
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
  const switchTab = (tab) => { setActiveTab(tab); sessionStorage.setItem('samseong-tab', tab) }
  const topRated = [...restaurants].sort((a,b)=>b.rt-a.rt).slice(0,6)

  return (
    <Layout title="삼성역 맛집 AI 추천" description="삼성역·코엑스 주변 맛집 AI 추천. 국밥·이자카야·한우·중식 170개+ 식당." canonical="https://dinner.ambitstock.com/dinner/samseong">
      <Head>
        <title>삼성역 맛집 추천 | 코엑스·강남 AI 추천 | 강남뭐먹</title>
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
            <Link href="/" style={{ color:'var(--muted)' }}>강남뭐먹</Link> › 삼성역
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
          <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:16,overflow:'hidden' }}>
            <AiApp />
          </div>
        )}
        {activeTab==='browse' && <BrowseTab />}
        {activeTab==='categories' && (
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(130px, 1fr))',gap:10 }}>
            {CATS.map(cat=>{
              const count = cat.exit4Only ? restaurants.filter(r=>r.exit4).length : restaurants.filter(r=>cat.cats.some(c=>r.cat?.includes(c))).length
              return (
                <div key={cat.slug} style={{ position:'relative' }}>
                  <Link href={`/dinner/samseong/category/${cat.slug}`}>
                    <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,padding:'14px 12px 44px',textAlign:'center',cursor:'pointer' }}>
                      <div style={{ fontSize:'1.8rem',marginBottom:6 }}>{cat.emoji}</div>
                      <div style={{ fontSize:'.82rem',fontWeight:600,marginBottom:3 }}>{cat.name}</div>
                      <div style={{ fontSize:'.72rem',color:'var(--muted)' }}>{count}개</div>
                    </div>
                  </Link>
                  {/* 🎲 뽑기 버튼 */}
                  <button
                    onClick={e=>{ e.preventDefault(); setSelectedCat(cat); switchTab('ai'); setTimeout(()=>getRandom(cat),50) }}
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
