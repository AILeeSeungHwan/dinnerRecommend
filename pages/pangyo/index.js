import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import restaurants from '../../data/pangyo'

const NL_MENU_MAP = [
  {patterns:/야장|포장마차|포차|노천|치킨.*야외/i,                       cats:['야장','치킨','이자카야']},
  {patterns:/치맥|치킨.*맥주|후라이드|양념치킨|통닭/i,                   cats:['치킨','야장']},
  {patterns:/맥주|이자카야|안주|사케|일본술|하이볼/i,                     cats:['이자카야','야장']},
  {patterns:/국밥|해장|해장국|뼈해장|순대국|설렁탕|곰탕/i,               cats:['국밥','국물','한식']},
  {patterns:/칼국수|수제비|칼제비/i,                                      cats:['칼국수','면류','한식']},
  {patterns:/고기|구이|삼겹살|목살|갈비살|한우|등심|소고기|BBQ/i,        cats:['고기구이','한식']},
  {patterns:/중식|짜장|짬뽕|탕수육|딤섬|마라탕|훠궈/i,                   cats:['중식','훠궈']},
  {patterns:/파스타|피자|이탈리안|리조또|양식/i,                          cats:['양식','이탈리안']},
  {patterns:/스테이크|립아이|ribeye|와규|티본/i,                          cats:['스테이크','양식']},
  {patterns:/일식|스시|초밥|사시미|오마카세|돈카츠|덮밥/i,               cats:['이자카야','일식']},
  {patterns:/혼밥|혼자|1인/i,                                             cats:['국밥','칼국수','한식']},
  {patterns:/술|와인|소주|막걸리|사케/i,                                  cats:['이자카야','야장']},
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
  {emoji:'🥩', name:'고기구이·삼겹살', slug:'meat',     cats:['고기구이'],              tags:['한우','갈비','삼겹살','목살']},
  {emoji:'🥣', name:'국밥·해장·칼국수', slug:'gukbap',  cats:['국밥','국물','칼국수'],  tags:['해장','설렁탕','순대국밥']},
  {emoji:'🏮', name:'이자카야·포차',   slug:'izakaya',  cats:['이자카야','야장'],       tags:['포차','하이볼','수제맥주']},
  {emoji:'🍣', name:'일식·스시·돈카츠', slug:'japanese', cats:['일식'],                 tags:['스시','사시미','돈카츠','규동']},
  {emoji:'🍜', name:'중식·마라탕',     slug:'chinese',  cats:['중식','훠궈'],           tags:['마라탕','양꼬치','짬뽕']},
  {emoji:'🍝', name:'양식·파스타',     slug:'western',  cats:['양식','이탈리안','스테이크'], tags:['파스타','피자','스테이크']},
  {emoji:'🐔', name:'치킨·분식',       slug:'chicken',  cats:['치킨'],                  tags:['통닭','치킨','떡볶이','분식']},
  {emoji:'🎉', name:'회식·단체',       slug:'group',    cats:['회식'],                  tags:['단체가능','회식','룸있음']},
  {emoji:'💑', name:'데이트·분위기',   slug:'date',     cats:[],                        tags:['데이트','뷰맛집','프라이빗']},
  {emoji:'💰', name:'가성비·혼밥·점심', slug:'budget',  cats:[],                        tags:['가성비','점심','혼밥가능','점심특선']},
  {emoji:'✨', name:'접대·파인다이닝', slug:'premium',  cats:[],                        tags:['오마카세','예약제','코스요리','프라이빗']},
  {emoji:'🍱', name:'한식·정식·보쌈',  slug:'korean',   cats:['한식'],                  tags:['족발','보쌈','갈비찜','한정식']},
]

// ── 랜덤 추천 결과 문구 템플릿 ──────────────────────────────
function buildRandomReason(r, idx, usedTemplates) {
  function cleanRv(v) {
    return (v||'').replace(/\[\d+\.?\d*★\]\s*/g,'').replace(/\(실제 Google 리뷰.*?\)/g,'').trim().slice(0, 40)
  }
  function josa(word, j1, j2) {
    if (!word) return j2
    const code = word.charCodeAt(word.length-1)
    if (code >= 0xAC00 && code <= 0xD7A3) return (code-0xAC00)%28!==0?j1:j2
    return j2
  }
  function tagToLabel(tag) {
    const map = {
      '고평점':'맛집','SNS맛집':'SNS 핫플','웨이팅맛집':'웨이팅 맛집',
      '가성비':'가성비 맛집','혼밥가능':'혼밥 맛집','단체가능':'단체 맛집',
      '점심추천':'점심 맛집','심야영업':'심야 맛집','예약필수':'예약제 맛집',
      '주차가능':'주차 가능한 곳','리뷰많음':'리뷰 많은 곳',
    }
    return map[tag]||tag+' 맛집'
  }
  const rv    = (r.rv||[]).map(cleanRv).filter(Boolean)
  const rv0   = rv[0]||'', rv1 = rv[1]||''
  const tags  = (r.tags||[]).slice(0,4)
  const scene = (r.scene||[]).slice(0,2)
  const moods = (r.moods||[]).slice(0,2)
  const cnt   = r.cnt||0

  const templates = [
    ()=>{ const reason=rv1?`"${rv0}" 또 다른 방문객은, "${rv1}"`:rv0?`"${rv0}"`:null; return reason?{reason,highlight:rv0.slice(0,20)}:templates[2]() },
    ()=>{ const tagStr=tags.slice(0,2).join(' · '); const base=cnt>=100?`${cnt.toLocaleString()}명이 다녀갔다.`:`${cnt}명이 다녀갔다.`; return {reason:`${base}${tagStr?` ${tagStr}.`:''}${rv0?` "${rv0}"`:''}`      ,highlight:rv0.slice(0,20)||tagStr} },
    ()=>{ const sc=(scene[0]||moods[0]||'').replace(/에$/,''); const intro=sc?`${sc}, 딱 맞는 곳.`:(tags[0]?`${tags[0]}${josa(tags[0],'으로','로')} 알려진 곳.`:'한 번 가볼 만한 곳.'); return {reason:rv0?`${intro} "${rv0}"`:intro, highlight:rv0.slice(0,20)||sc} },
    ()=>{ if(!tags.length) return templates[0](); const tagStr=tags.slice(0,4).map(t=>`#${t}`).join('  '); return {reason:rv0?`${tagStr}  "${rv0}"`:tagStr, highlight:rv0.slice(0,20)||`#${tags[0]}`} },
    ()=>{ const rv0long=(r.rv||[]).map(cleanRv).filter(Boolean).map(v=>v.slice(0, 40))[0]||''; if(!rv0long) return templates[1](); return {reason:`"${rv0long}"`,highlight:rv0long.slice(0,20)} },
    ()=>{ const m=moods[0]||scene[0]||''; const moodMap={'기분 좋음':'기분 좋을 때','피곤함':'피곤할 때','스트레스 받음':'스트레스받을 때','혼밥':'혼밥할 때','축하':'축하하는 날','허전함':'허전할 때','데이트':'데이트할 때','회식':'회식 자리에'}; const when=moodMap[m]||(m?`${m}일 때`:'오늘'); return {reason:rv0?`${when} 당기는 곳. "${rv0}"`:  `${when} 추천하는 ${r.type||'식당'}.`, highlight:rv0.slice(0,20)||when} },
    ()=>{ if(!tags[0]) return templates[0](); const t0=tags[0]; const label=tagToLabel(t0); const particle=josa(label,'으로','로'); const intro=`${label}${particle} 알려진 곳.`; const reason=rv0&&rv1?`${intro} "${rv0}" "${rv1}"`:rv0?`${intro} "${rv0}"`:intro; return {reason, highlight:rv0.slice(0,20)||t0} },
    ()=>{ const intro=tags[0]?`#${tags.slice(0,3).join(' #')}.`:''; const reason=rv0?`${intro?intro+' ':''}  "${rv0}"`:intro||`${r.type||''} 한 곳.`; return {reason, highlight:rv0.slice(0,20)||(tags[0]?`#${tags[0]}`:'')} },
  ]
  const available=templates.map((_,i)=>i).filter(i=>!usedTemplates.includes(i))
  const pick=available[Math.floor(Math.random()*available.length)]
  const result=templates[pick]()
  return {...result, templateIdx:pick}
}

function extractContext(q, moods, wx) {
  const text=`${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  return {
    vipScore: /vip|임원|접대|대표|사장|클라이언트|거래처|중요한/.test(text)?3:/팀장|부장|상무|전무|이사|본부장/.test(text)?2:/손님|고객|파트너/.test(text)?1:0,
    isCelebration: /기념일|생일|축하|승진|합격|졸업|결혼/.test(text),
    needsPrivate:  /프라이빗|룸|개인실|조용|단독/.test(text),
    needsParking:  /주차|차/.test(text),
    isSolo:        /혼밥|혼자|1인|솔로/.test(text)||moods.includes('혼밥'),
    isGroup:       /단체|회식|팀|부서|모임|여럿|여러명/.test(text)||moods.includes('회식'),
    isDate:        /데이트|연인|커플|애인|여자친구|남자친구/.test(text)||moods.includes('데이트'),
    isQuick:       /빠른|빠르게|급하게|후다닥|빨리|패스트/.test(text),
    isLunch:       /점심|런치|lunch/.test(text),
    isLate:        /심야|늦게|야식|새벽/.test(text),
    isStress:      /스트레스|힘들|지침|지쳤|피곤|치팅/.test(text)||moods.includes('스트레스')||moods.includes('피곤함'),
    isHangover:    /해장|숙취|속풀이/.test(text),
  }
}

function detectMenu(q, moods, wx) {
  const text=`${q} ${moods.join(' ')}`.toLowerCase()
  for (const cat of CATS) {
    const allTerms=[...(cat.cats||[]),...(cat.tags||[])].map(t=>t.toLowerCase())
    if (allTerms.some(t=>text.includes(t))) return cat
  }
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
  if (/족발|곱창|보쌈|막창/.test(text))                        return CATS.find(c=>c.slug==='korean')
  return null
}

function preScore(q, moods, wx, cands, selectedCat) {
  const qt=`${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  const ctx=extractContext(q,moods,wx)
  return cands.map(r=>{
    let s=(r.rt||0)*3
    const blob=[r.name,r.type,...(r.tags||[]),...(r.scene||[]),...(r.moods||[]),...(r.wx||[]),...(r.cat||[])].join(' ').toLowerCase()
    const priceAvg=(()=>{ if(!r.priceRange) return 20000; const [a,b]=r.priceRange.split('~').map(Number); return (a+(b||a))/2 })()
    if (selectedCat) {
      const catMatch=(selectedCat.cats||[]).some(c=>(r.cat||[]).includes(c))
      const tagMatch=(selectedCat.tags||[]).some(t=>(r.tags||[]).includes(t))
      if(catMatch) s+=60; else if(tagMatch) s+=30; else s-=30
    }
    if (ctx.vipScore>0) {
      const v=ctx.vipScore
      const isHighEnd=(r.cat||[]).some(c=>['일식','스테이크','양식','이탈리안'].includes(c))||(r.tags||[]).some(t=>['오마카세','한우코스','코스요리','룸있음','개인실','프라이빗','파인다이닝'].includes(t))
      if(isHighEnd) s+=v*25; if(priceAvg>=50000) s+=v*20; else if(priceAvg>=35000) s+=v*12; else if(priceAvg>=20000) s+=v*4; else s-=v*10
      if((r.rt||0)<4.4) s-=v*15; else if((r.rt||0)>=4.7) s+=v*10
      if((r.cnt||0)>=500) s+=v*4
      if((r.tags||[]).some(t=>['룸있음','개인실','프라이빗'].includes(t))) s+=v*15
    }
    if(ctx.isCelebration){ if((r.moods||[]).some(m=>['축하','데이트'].includes(m))) s+=20; if(priceAvg>=30000) s+=10; if((r.tags||[]).includes('기념일')) s+=15 }
    if(ctx.needsPrivate && (r.tags||[]).some(t=>['룸있음','개인실','프라이빗','조용한'].includes(t))) s+=25
    if(ctx.needsParking && (r.parking===true||(r.tags||[]).includes('주차가능'))) s+=20
    moods.forEach(m=>{ if(blob.includes(m.toLowerCase())) s+=10 })
    if(wx && blob.includes(wx)) s+=8
    ;(r.tags||[]).forEach(t=>{ if(qt.includes(t.toLowerCase())) s+=15 })
    ;(r.scene||[]).forEach(sc=>{ if(qt.includes(sc.toLowerCase())) s+=12 })
    qt.split(/\s+/).filter(w=>w.length>1).forEach(w=>{ if(blob.includes(w)) s+=5 })
    if(r.vector){
      if(ctx.isSolo)               s+=(r.vector.solo||0)*14
      if(ctx.isGroup)              s+=(r.vector.group||0)*14
      if(ctx.isDate)               s+=(r.vector.date||0)*14
      if(ctx.isQuick||ctx.isLunch) s+=(r.vector.fast_meal||0)*12
      if(ctx.isStress||ctx.isHangover) s+=(r.vector.comfort_food||0)*12
      if(['비','눈','쌀쌀함'].includes(wx)) s+=(r.vector.warm_food||0)*10
      if(new RegExp('술|맥주|소주|와인').test(qt)) s+=(r.vector.alcohol||0)*10
      if(ctx.vipScore>0&&r.vector.vip_friendly)   s+=r.vector.vip_friendly*ctx.vipScore*12
      if(ctx.needsPrivate&&r.vector.private_room)  s+=r.vector.private_room*18
      if(ctx.needsParking&&r.vector.parking)       s+=r.vector.parking*14
      if(ctx.isCelebration&&r.vector.celebration)  s+=r.vector.celebration*14
      if(ctx.isLate&&r.vector.late_night)          s+=r.vector.late_night*10
    }
    return {...r, _score:s}
  }).sort((a,b)=>b._score-a._score)
}

function parsePriceFilter(q) {
  const m=q.match(/(\d+)[,.]?(\d{3})?원?\s*(이하|미만|대|이상|초과)?/)
  if(!m) return null
  return {val:parseInt(m[1]+(m[2]||'')), dir:m[3]||'이하'}
}
function filterByPrice(cands,pf) {
  if(!pf) return cands
  return cands.filter(r=>{
    if(!r.priceRange) return false
    const [a,b]=r.priceRange.split('~')
    const avg=(parseInt(a)+parseInt(b||a))/2
    if(pf.dir==='이하'||pf.dir==='미만') return avg<=pf.val
    if(pf.dir==='이상'||pf.dir==='초과') return avg>=pf.val
    return avg>=pf.val*0.7&&avg<=pf.val*1.4
  })
}
function parseRatingFilter(q) {
  const m=q.match(/([3-5](?:[.,]\d)?)\s*(?:점|별|★|⭐)?\s*(이상|이하|넘|초과)?/)||q.match(/(?:평점|별점|rating)\s*([3-5](?:[.,]\d)?)/)
  if(!m) return null
  const val=parseFloat((m[1]||m[2]).replace(',','.'))
  if(isNaN(val)||val<3||val>5) return null
  const dir=(m[2]||'').includes('이하')?'lte':'gte'
  return {val,dir}
}
function filterByRating(cands,rf) {
  if(!rf) return cands
  return cands.filter(r=>rf.dir==='lte'?(r.rt||0)<=rf.val:(r.rt||0)>=rf.val)
}
function calcCost(i,o) { return (i/1e6)*0.8+(o/1e6)*4 }
function fmtPrice(p) {
  if(!p) return ''
  return p.split('~').map(n=>parseInt(n).toLocaleString('ko-KR')).join('~')
}
function naverMapUrl(name) {
  const cleaned=name
    .replace(/ (판교점|판교역점|판교본점|분당점|백현점|아브뉴프랑점)$/,'')
    .replace(/ ([0-9]+호점)$/,'')
    .trim()
  const hasRegion=/(판교|분당|성남|테크노밸리)/.test(name)
  const query=hasRegion?cleaned:cleaned+' 판교'
  return `https://map.naver.com/v5/search/${encodeURIComponent(query)}`
}

// ── 로딩 오버레이 ──────────────────────────────────────────────
function LoadingOverlay() {
  const frames=['🍚','🥢','🍜','🥩','🏮','🍣','🥣','✨']
  const msgs=['맛집 탐색 중...','리뷰 분석 중...','최적 매칭 중...','거의 다 됐어요!']
  const [f,setF]=useState(0), [m,setM]=useState(0)
  useEffect(()=>{
    const params=new URLSearchParams(window.location.search)
    if(params.get('dev')==='wizet1923'){ localStorage.setItem('gm-admin-unlock','1'); window.history.replaceState({},'',window.location.pathname) }
  },[])
  useEffect(()=>{
    const t1=setInterval(()=>setF(x=>(x+1)%frames.length),180)
    const t2=setInterval(()=>setM(x=>(x+1)%msgs.length),1100)
    return()=>{ clearInterval(t1); clearInterval(t2) }
  },[])
  return (
    <div style={{position:'fixed',inset:0,zIndex:300,background:'rgba(0,0,0,.75)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:20,padding:'40px 48px',textAlign:'center',boxShadow:'0 20px 60px rgba(0,0,0,.5)'}}>
        <div style={{fontSize:'3.5rem',marginBottom:16}}>{frames[f]}</div>
        <div style={{fontSize:'1rem',fontWeight:700,color:'var(--text)',marginBottom:6}}>AI가 고르는 중</div>
        <div style={{fontSize:'.84rem',color:'var(--muted)',marginBottom:20}}>{msgs[m]}</div>
        <div style={{display:'flex',gap:6,justifyContent:'center'}}>
          {[0,1,2].map(i=><div key={i} style={{width:8,height:8,borderRadius:'50%',background:'var(--primary)',animation:`bounce 1s ease-in-out ${i*0.2}s infinite`}}/>)}
        </div>
        <style>{`@keyframes bounce{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(-8px);opacity:1}}`}</style>
      </div>
    </div>
  )
}

function DiceOverlay({onDone}) {
  const dice=['⚀','⚁','⚂','⚃','⚄','⚅','🎲']
  const [face,setFace]=useState('🎲'), [n,setN]=useState(0)
  useEffect(()=>{
    let c=0
    const t=setInterval(()=>{ setFace(dice[Math.floor(Math.random()*dice.length)]); c++; setN(c); if(c>=18){clearInterval(t);setTimeout(onDone,200)} },170)
    return()=>clearInterval(t)
  },[])
  return (
    <div style={{position:'fixed',inset:0,zIndex:300,background:'rgba(0,0,0,.75)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:20,padding:'40px 56px',textAlign:'center',boxShadow:'0 20px 60px rgba(0,0,0,.5)'}}>
        <div style={{fontSize:'5rem',lineHeight:1,marginBottom:16,filter:`hue-rotate(${n*20}deg)`}}>{face}</div>
        <div style={{fontSize:'1rem',fontWeight:700,color:'var(--text)',marginBottom:6}}>주사위 굴리는 중...</div>
        <div style={{fontSize:'.82rem',color:'var(--muted)'}}>오늘의 맛집을 랜덤으로 뽑고 있어요 🍀</div>
      </div>
    </div>
  )
}

const DAILY_WARN=3, DAILY_LIMIT=5
function getTodayKey() { return 'ai_count_'+new Date().toISOString().slice(0,10) }
function getUsageCount() { try{return parseInt(localStorage.getItem(getTodayKey())||'0')}catch{return 0} }
function incrementUsage() {
  try{
    const k=getTodayKey(); const n=getUsageCount()+1
    localStorage.setItem(k,n)
    Object.keys(localStorage).filter(x=>x.startsWith('ai_count_')&&x!==k).forEach(x=>localStorage.removeItem(x))
    return n
  }catch{return 1}
}

const HINTS = [
  '예: 비 오는 날 따뜻한 국밥집',
  '예: 판교역 회식 장소 추천',
  '예: 야근 후 해장할 곳',
  '예: 1만원 이하 혼밥 가능한 곳',
  '예: 테크노밸리 근처 점심 혼밥',
  '예: 판교 데이트 코스 저녁',
  '예: 회식하기 좋은 고기집',
  '예: 쌀쌀한 날 뜨끈한 칼국수',
  '예: 평점 4.5 이상 이자카야',
  '예: 오마카세 기념일 코스',
  '예: 백현동 브런치 데이트',
  '예: 늦은 밤 야식 족발',
  '예: 혼자 조용히 먹을 수 있는 곳',
  '예: 스트레스 풀리는 마라탕',
]

function WarnModal({count,onConfirm,onCancel}) {
  const is4th=count>=4
  return (
    <div style={{position:'fixed',inset:0,zIndex:400,background:'rgba(0,0,0,.85)',backdropFilter:'blur(10px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px'}}
      onClick={e=>{if(e.target===e.currentTarget)onCancel()}}>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:24,padding:'36px 28px',maxWidth:360,width:'100%',textAlign:'center',boxShadow:'0 24px 64px rgba(0,0,0,.7)'}}>
        <div style={{fontSize:'3.8rem',marginBottom:14}}>{is4th?'😰':'🍜'}</div>
        <div style={{fontSize:'1.1rem',fontWeight:900,color:'var(--text)',marginBottom:10,lineHeight:1.35}}>{is4th?'개발자 통장이\n비어가고 있어요...':'잠깐,\n개발자가 굶을 수도 있어요'}</div>
        <div style={{fontSize:'.84rem',color:'var(--muted)',marginBottom:6,lineHeight:1.75,whiteSpace:'pre-line'}}>
          {is4th?`오늘 벌써 ${count}번째 AI 검색이에요 🥲\nAI 한 번 쓸 때마다 개발자 통장에서\n조금씩 빠져나가고 있답니다 💸`:`오늘 ${count}번째 AI 검색이에요 👀\nAI 검색은 매 요청마다 서버 비용이 발생해요.\n국밥 한 그릇 값이면 100번 검색이 가능해요 🥣`}
        </div>
        <div style={{fontSize:'.74rem',padding:'8px 12px',background:'rgba(245,200,66,.08)',border:'1px solid rgba(245,200,66,.25)',borderRadius:10,color:'#f5c842',marginBottom:8,lineHeight:1.6}}>
          ⚡ {count>=4?'토큰 절약 모드 — 추천 설명이 짧아져요':'토큰 절약 모드 진입 — 이번 검색부터 추천 퀄리티가 다소 낮아질 수 있어요'}
        </div>
        <div style={{background:'#fff',borderRadius:14,padding:14,marginBottom:20,display:'inline-block',boxShadow:'0 2px 12px rgba(0,0,0,.15)'}}>
          <img src="/toss-qr.png" alt="토스 후원 QR" style={{width:110,height:110,display:'block'}} />
        </div>
        <div style={{fontSize:'.7rem',color:'var(--muted)',marginBottom:4}}>📱 토스앱으로 스캔하면 개발자가 국밥을 먹어요</div>
        <div style={{marginBottom:16}}>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <button onClick={onConfirm} style={{padding:'13px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.9rem',fontWeight:700,cursor:'pointer'}}>{is4th?'그래도 검색할게요 (이번 포함 1회 남음 🙏)':'그래도 검색할게요'}</button>
          <button onClick={onCancel} style={{padding:'13px',borderRadius:12,background:'var(--surface2)',color:'var(--muted)',border:'1px solid var(--border)',fontSize:'.88rem',cursor:'pointer'}}>🎲 랜덤으로 할게요 (무료)</button>
        </div>
      </div>
    </div>
  )
}

function EasterEggModal({onClose}) {
  const [visible,setVisible]=useState(false)
  useEffect(()=>{ const t=setTimeout(()=>setVisible(true),80); return()=>clearTimeout(t) },[])
  return (
    <div onClick={e=>{if(e.target===e.currentTarget)onClose()}} style={{position:'fixed',inset:0,zIndex:500,background:`rgba(0,0,0,${visible?'.82':'0'})`,backdropFilter:'blur(10px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px',transition:'background .35s'}}>
      <div style={{background:'linear-gradient(145deg, #0f1e2e 0%, #0a1628 100%)',border:'1px solid rgba(99,179,237,.35)',borderRadius:24,padding:'36px 28px',maxWidth:360,width:'100%',textAlign:'center',boxShadow:'0 0 60px rgba(99,179,237,.18), 0 24px 80px rgba(0,0,0,.8)',transform:visible?'translateY(0) scale(1)':'translateY(20px) scale(.96)',opacity:visible?1:0,transition:'transform .35s cubic-bezier(.22,1,.36,1), opacity .35s'}}>
        <div style={{display:'inline-block',background:'rgba(99,179,237,.12)',border:'1px solid rgba(99,179,237,.3)',borderRadius:100,padding:'4px 14px',fontSize:'.7rem',color:'#63b3ed',letterSpacing:'.08em',fontWeight:700,marginBottom:16}}>🔍 EASTER EGG FOUND</div>
        <div style={{fontSize:'3rem',marginBottom:10}}>🎉</div>
        <div style={{fontSize:'1.15rem',fontWeight:900,color:'#e2e8f0',marginBottom:10,lineHeight:1.4}}>축하합니다</div>
        <div style={{fontSize:'.88rem',color:'#a0aec0',lineHeight:1.8,marginBottom:20}}>우회경로를 발견하셨군요.<br/>이 정도 노력과 애정이라면<br/><strong style={{color:'#e2e8f0'}}>마음껏 사용하세요 🙌</strong><br/><span style={{fontSize:'.76rem',opacity:.65}}>(단, 개발자 텅장이 비면<br/>불시에 막힐 수도 있습니다 😅)</span></div>
        <div style={{fontSize:'1.1rem',letterSpacing:8,marginBottom:22,opacity:.7}}>✦ ✦ ✦</div>
        <button onClick={onClose} style={{width:'100%',padding:'13px',borderRadius:12,background:'linear-gradient(135deg, #2b6cb0, #3182ce)',color:'#fff',border:'none',fontSize:'.92rem',fontWeight:700,cursor:'pointer',letterSpacing:'.02em',boxShadow:'0 4px 20px rgba(49,130,206,.4)'}}>✨ 검색하러 가기</button>
        <div style={{fontSize:'.68rem',color:'#4a5568',marginTop:10}}>배경을 탭하면 닫혀요</div>
      </div>
    </div>
  )
}

// ── API 크레딧 소진 모달 ─────────────────────────────────────
function QuotaModal({ onClose }) {
  return (
    <div style={{ position:'fixed',inset:0,zIndex:400,background:'rgba(0,0,0,.88)',backdropFilter:'blur(12px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px' }}
      onClick={e=>{ if(e.target===e.currentTarget) onClose() }}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:24,padding:'32px 24px',maxWidth:360,width:'100%',textAlign:'center',boxShadow:'0 24px 80px rgba(0,0,0,.8)' }}>
        <div style={{ fontSize:'3.2rem',marginBottom:10 }}>😵</div>
        <div style={{ fontSize:'1.15rem',fontWeight:900,color:'var(--text)',marginBottom:8,lineHeight:1.35 }}>
          개발자 통장이 텅 비었어요
        </div>
        <div style={{ fontSize:'.83rem',color:'var(--muted)',marginBottom:16,lineHeight:1.8 }}>
          예상외의 관심에 감사하지만<br/>
          AI 크레딧이 모두 소진됐어요 💸<br/>
          <br/>
          <span style={{ fontSize:'.78rem',color:'var(--primary)',fontWeight:700 }}>
            빠른 시일 내에 통장을 메꾸고<br/>
            AI 추천을 다시 켜놓겠습니다 🙏
          </span><br/>
          <br/>
          <span style={{ fontSize:'.72rem',opacity:.7 }}>
            그동안 🎲 랜덤 추천을 이용해 주세요
          </span>
        </div>
        <button onClick={onClose}
          style={{ width:'100%',padding:'13px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.92rem',fontWeight:700,cursor:'pointer' }}>
          🎲 랜덤 추천으로 볼게요
        </button>
      </div>
    </div>
  )
}

function LimitModal({onClose}) {
  const [showMoGuide,setShowMoGuide]=useState(false)
  function saveQR(){const a=document.createElement('a');a.href='/toss-qr.png';a.download='toss-qr.png';a.style.display='none';document.body.appendChild(a);a.click();document.body.removeChild(a)}
  return (
    <div style={{position:'fixed',inset:0,zIndex:400,background:'rgba(0,0,0,.88)',backdropFilter:'blur(12px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px'}} onClick={e=>{if(e.target===e.currentTarget)onClose()}}>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:24,padding:'32px 24px',maxWidth:360,width:'100%',textAlign:'center',boxShadow:'0 24px 80px rgba(0,0,0,.8)',maxHeight:'90vh',overflowY:'auto'}}>
        <div style={{fontSize:'3.2rem',marginBottom:10}}>🫙</div>
        <div style={{fontSize:'1.15rem',fontWeight:900,color:'var(--text)',marginBottom:8,lineHeight:1.35}}>AI 토큰을 다 썼어요</div>
        <div style={{fontSize:'.83rem',color:'var(--muted)',marginBottom:18,lineHeight:1.75}}>개발자가 밥값 벌어올 때까지는<br/>오늘은 <strong style={{color:'var(--primary)'}}>랜덤 추천</strong>으로 버텨야 할 것 같아요 😅<br/><span style={{fontSize:'.76rem',opacity:.7}}>자정이 지나면 다시 {DAILY_LIMIT}회 충전돼요 🌙</span></div>
        <div style={{background:'#fff',borderRadius:16,padding:14,marginBottom:10,display:'inline-block',boxShadow:'0 4px 20px rgba(0,0,0,.2)'}}>
          <img src="/toss-qr.png" id="toss-qr-img" alt="토스 후원 QR" style={{width:120,height:120,display:'block'}} />
        </div>
        <div style={{fontSize:'.72rem',color:'var(--muted)',marginBottom:4}}>📱 토스앱으로 스캔하면 개발자가 국밥을 먹어요</div>
        <div style={{marginBottom:16}}>
          <button onClick={()=>setShowMoGuide(v=>!v)} style={{fontSize:'.68rem',color:'var(--primary)',background:'none',border:'none',cursor:'pointer',marginTop:4,textDecoration:'underline',opacity:.8}}>📲 모바일에서 QR 저장·인식하는 법 {showMoGuide?'▲':'▼'}</button>
          {showMoGuide&&(
            <div style={{marginTop:8,padding:'12px 14px',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:12,textAlign:'left',fontSize:'.72rem',color:'var(--muted)',lineHeight:1.8}}>
              <strong style={{color:'var(--text)',display:'block',marginBottom:8}}>📱 토스앱으로 후원하는 법</strong>
              <button onClick={saveQR} style={{fontSize:'.72rem',padding:'5px 14px',borderRadius:100,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)',cursor:'pointer',marginBottom:8,display:'block',width:'100%'}}>📥 QR 이미지 저장 (갤러리)</button>
              1. 위 버튼으로 QR 이미지 저장<br/>2. 토스앱 열기 → 하단 <strong style={{color:'var(--text)'}}>송금</strong> 탭<br/>3. 우측 상단 <strong style={{color:'var(--text)'}}>QR 아이콘</strong> 탭<br/>4. 카메라 화면 하단 <strong style={{color:'var(--text)'}}>갤러리에서 불러오기</strong><br/>5. 저장한 QR 이미지 선택 → 후원 완료 🎉
            </div>
          )}
        </div>
        <button onClick={onClose} style={{width:'100%',padding:'13px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.92rem',fontWeight:700,cursor:'pointer'}}>🎲 랜덤 추천으로 볼게요</button>
        <div style={{fontSize:'.7rem',color:'var(--muted)',marginTop:10,opacity:.6}}>탭 밖을 누르면 닫혀요</div>
      </div>
    </div>
  )
}

// ── AI 추천 앱 ────────────────────────────────────────────────
const EXCLUDE_RESET=50
function AiApp({pendingCat,onPendingCatUsed}) {
  const [ctx,setCtx]=useState('')
  const [weather,setWeather]=useState('')
  const [moods,setMoods]=useState([])
  const [selectedCat,setSelectedCat]=useState(null)
  const [loading,setLoading]=useState(false)
  const [dicing,setDicing]=useState(false)
  const [pendingRnd,setPendingRnd]=useState(null)
  const [results,setResults]=useState(null)
  const [error,setError]=useState(null)
  const [warnCount,setWarnCount]=useState(null)
  const [showLimit,setShowLimit]=useState(false)
  const [showQuota,setShowQuota]=useState(false)
  const [showEaster,setShowEaster]=useState(false)
  const [hintIdx,setHintIdx]=useState(0)
  const [usedToday,setUsedToday]=useState(0)
  const excludedRef=useRef(new Set())
  const resultsRef=useRef(null)

  useEffect(()=>{
    setUsedToday(getUsageCount())
    const t=setInterval(()=>setHintIdx(i=>(i+1)%HINTS.length),3200)
    let easterTimer=null
    async function detectIncognito() {
      try {
        if(navigator.storage&&navigator.storage.estimate){const{quota}=await navigator.storage.estimate();if(quota<500*1024*1024)return true}
        const isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        if(isSafari){return await new Promise(resolve=>{const db=window.indexedDB.open('__test__');db.onerror=()=>resolve(true);db.onsuccess=e=>{e.target.result.close();resolve(false)}})}
        return false
      }catch{return false}
    }
    try{
      const seen=sessionStorage.getItem('easter_seen')
      if(!seen){detectIncognito().then(isIncognito=>{if(isIncognito){sessionStorage.setItem('easter_seen','1');easterTimer=setTimeout(()=>setShowEaster(true),600)}})}
    }catch(e){}
    return()=>{ clearInterval(t); if(easterTimer) clearTimeout(easterTimer) }
  },[])

  useEffect(()=>{
    if(!pendingCat) return
    setSelectedCat(pendingCat)
    setTimeout(()=>{ getRandom(pendingCat); if(onPendingCatUsed) onPendingCatUsed() },80)
  },[pendingCat])

  function scrollTo() {
    setTimeout(()=>{ if(!resultsRef.current) return; const el=resultsRef.current; const top=el.getBoundingClientRect().top+window.pageYOffset-16; window.scrollTo({top,behavior:'smooth'}) },150)
  }
  function markShown(recs) { recs.forEach(r=>excludedRef.current.add(r.restaurantName)); if(excludedRef.current.size>=EXCLUDE_RESET) excludedRef.current.clear() }
  function filterExcluded(pool) { const exc=excludedRef.current; const avail=pool.filter(r=>!exc.has(r.name)); if(avail.length<3){exc.clear();return pool} return avail }

  function getRandom(catOverride) {
    const cat=catOverride||selectedCat
    let base=restaurants
    if(cat){ base=base.filter(r=>(cat.cats.length>0&&cat.cats.some(c=>r.cat?.includes(c)))||(cat.tags||[]).some(t=>r.tags?.some(rt=>rt.includes(t))||r.cat?.some(c=>c.includes(t)))) }
    if(weather) base=base.filter(r=>!r.wx||r.wx.includes(weather))
    if(moods.length>0) base=base.filter(r=>moods.some(m=>r.moods?.includes(m)))
    if(base.length<5){ base=cat?restaurants.filter(r=>(cat.cats.length>0&&cat.cats.some(c=>r.cat?.includes(c)))||(cat.tags||[]).some(t=>r.tags?.some(rt=>rt.includes(t)))):restaurants }
    const pool=filterExcluded(base)
    const picks=[...pool].sort(()=>Math.random()-0.5).slice(0,3)
    const usedTpl=[]
    const res=picks.map((r,i)=>{ const{reason,highlight,templateIdx}=buildRandomReason(r,i,usedTpl); usedTpl.push(templateIdx); return {rank:i+1,restaurantName:r.name,reason,reviewHighlight:highlight,matchScore:Math.floor(Math.random()*15)+80,_random:true} })
    setPendingRnd(res); setDicing(true)
  }
  function onDiceFinish() { setDicing(false); if(pendingRnd){markShown(pendingRnd);setResults(pendingRnd);setPendingRnd(null)} scrollTo() }

  function handleRecommendClick() {
    if(!ctx&&!weather&&moods.length===0){getRandom(null);return}
    const isAdmin=localStorage.getItem('gm-admin-unlock')==='1'
    const count=getUsageCount()
    if(!isAdmin&&count>=DAILY_LIMIT){setShowLimit(true);return}
    if(!isAdmin&&count>=DAILY_WARN-1){setWarnCount(count+1);return}
    getRecommendations()
  }
  function confirmFromWarn(){
    setWarnCount(null)
    const isAdmin=localStorage.getItem('gm-admin-unlock')==='1'
    const count=getUsageCount()
    if(!isAdmin&&count>=DAILY_LIMIT){setShowLimit(true);return}
    getRecommendations()
  }
  function cancelFromWarn(){setWarnCount(null);getRandom(null)}

  async function getRecommendations() {
    setLoading(true); setError(null); setResults(null)
    try{
      const mm=detectMenu(ctx,moods,weather)
      const pf=parsePriceFilter(ctx)
      const rf=parseRatingFilter(ctx)
      let base=restaurants
      if(selectedCat){ base=base.filter(r=>(selectedCat.cats||[]).some(c=>r.cat?.includes(c))||(selectedCat.tags||[]).some(t=>r.tags?.includes(t))); if(base.length<5)base=restaurants }
      else if(mm){ base=base.filter(r=>mm.cats.some(c=>r.cat?.includes(c))) }
      if(pf) base=filterByPrice(base,pf)
      if(rf) base=filterByRating(base,rf)
      if(base.length<5) base=restaurants
      const pool=filterExcluded(base)
      const scored=preScore(ctx,moods,weather,pool,selectedCat)
      const top20=scored.slice(0,20)
      const fixed2=top20.slice(0,2)
      const rest=top20.slice(2)
      const rand2=[...rest].sort(()=>Math.random()-0.5).slice(0,2)
      const top4=[...fixed2,...rand2].sort(()=>Math.random()-0.5)
      const compact=top4.map(r=>{
        const rvSnippet=(r.rv||[]).slice(0,2).map(v=>v.replace(/^\[.*?\u2605\]\s*/,'').replace(/"/g,'\u2019').slice(0,50)).join(' / ')
        const moodStr=(r.moods||[]).slice(0,3).join('·')
        const tagsStr=(r.tags||[]).slice(0,5).join('/')
        return `${r.name}|타입:${r.type}|평점:⭐${r.rt}(${r.cnt}개리뷰)|가격:${r.priceRange||'미정'}원|태그:${tagsStr}|분위기:${moodStr}|리뷰:"${rvSnippet}"|영업:${r.hours||'확인필요'}`
      }).join('\n')
      const ctx_full=(ctx||'').slice(0, 40)
      const mood_str=moods.join(', ')
      const filter_str=[weather&&`날씨:${weather}`,mood_str&&`기분:${mood_str}`,selectedCat&&`카테고리:${selectedCat.name}`].filter(Boolean).join(' / ')
      const prompt=`당신은 판교 테크노밸리·판교역 맛집 전문가입니다. 아래 사용자의 요청에 딱 맞는 식당 3곳을 후보 목록에서 골라 추천해주세요.\n\n[사용자 요청]\n${ctx_full?`\"${ctx_full}\"`:'특별한 요청 없음 (상황에 맞는 추천)'}\n${filter_str?`조건: ${filter_str}`:''}\n\n[후보 식당 목록 — 각 항목: 이름|타입|평점|가격|태그|분위기|리뷰|영업시간]\n${compact}\n\n[추천 작성 규칙 — 반드시 준수]\n- restaurantName: 후보 목록 이름 그대로 (절대 수정 금지)\n- reason: 반드시 3문장, 아래 순서대로 작성\n  ① 첫 문장: 사용자 요청의 의도·목적·상황을 파악해 자연스러운 문장으로 풀어쓰기 — 검색어를 그대로 반복 금지. (예: 요청이 '최고최고 맛집'이면 → '최고의 맛을 찾는 당신을 위해', '상무님 모시기'이면 → '격식 있는 자리에서 어르신을 모실 때'처럼 상황으로 승화)\n  ② 둘째 문장: 이 식당만의 시그니처 메뉴·분위기·특징 — 평점·가격 나열 금지, 구체적 특색 위주\n  ③ 셋째 문장: 실제 리뷰 손님 반응을 자연스럽게 녹여서 (리뷰 원문 직접 인용 가능, 작은따옴표 사용)\n- reviewHighlight: 사용자 맥락과 이 식당을 연결하는 한 줄 (20자 이내, 평점·가격 금지)\n- 3개 식당이 각자 완전히 다른 매력 강조 — '최고 평점', '높은 평점', '⭐숫자' 같은 평점 서술 절대 금지\n- reason/reviewHighlight 안에 큰따옴표(\") 절대 사용 금지 — 작은따옴표(\') 또는 「」 사용\n- JSON만 출력, 마크다운·설명 없음\n\n{"recommendations":[{"rank":1,"restaurantName":"이름그대로","reason":"2~3문장","reviewHighlight":"핵심한줄"},{"rank":2,"restaurantName":"...","reason":"...","reviewHighlight":"..."},{"rank":3,"restaurantName":"...","reason":"...","reviewHighlight":"..."}]}`

      const res=await fetch('/api/recommend',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt,usageCount:getUsageCount()})})
      if(!res.ok){const errData=await res.json().catch(()=>({}));const msg=errData.detail||errData.error||`서버 오류 (${res.status})`;setLoading(false);if(msg==='##QUOTA_EXCEEDED##'){setShowQuota(true);return};setError(msg);return}
      const data=await res.json()
      setLoading(false)
      const recs=Array.isArray(data.recommendations)?data.recommendations:[]
      if(recs.length===0){setError(data.error||'추천 결과가 비어있어요');return}
      const matched=recs.filter(rec=>{
        const found=restaurants.find(x=>x.name===rec.restaurantName)||restaurants.find(x=>rec.restaurantName?.includes(x.name)||x.name?.includes(rec.restaurantName))
        return !!found
      })
      if(matched.length===0){setError('AI가 목록에 없는 식당을 추천했어요 (매칭 실패)');return}
      if(data.usage){window.dispatchEvent(new CustomEvent('token-used',{detail:calcCost(data.usage.input_tokens||0,data.usage.output_tokens||0)}))}
      const newCount=incrementUsage()
      setUsedToday(newCount)
      markShown(matched)
      setResults(matched)
      scrollTo()
    }catch(err){setLoading(false);setError(err.message||'알 수 없는 오류')}
  }

  const chip=(active,accent)=>({padding:'7px 14px',borderRadius:100,fontSize:'.8rem',cursor:'pointer',whiteSpace:'nowrap',border:`1px solid ${active?(accent||'var(--primary)'):'var(--border)'}`,background:active?(accent||'var(--primary)'):'var(--surface2)',color:active?'#fff':'var(--text)'})

  return (
    <>
      {loading && <LoadingOverlay />}
      {dicing  && <DiceOverlay onDone={onDiceFinish} />}
      {warnCount!==null && <WarnModal count={warnCount} onConfirm={confirmFromWarn} onCancel={cancelFromWarn} />}
      {showEaster && <EasterEggModal onClose={()=>setShowEaster(false)} />}
      {showLimit  && <LimitModal onClose={()=>{setShowLimit(false);getRandom(null)}} />}
      {showQuota  && <QuotaModal onClose={()=>{setShowQuota(false);getRandom(null)}} />}
      <div style={{padding:'20px 16px'}}>
        <div style={{display:'flex',justifyContent:'flex-end',marginBottom:8}}>
          <span style={{fontSize:'.7rem',padding:'3px 10px',borderRadius:100,background:usedToday>=DAILY_LIMIT?'#2a1111':usedToday>=DAILY_WARN-1?'#2a2000':'var(--surface2)',border:`1px solid ${usedToday>=DAILY_LIMIT?'#ff4444':usedToday>=DAILY_WARN-1?'#f5c842':'var(--border)'}`,color:usedToday>=DAILY_LIMIT?'#ff6666':usedToday>=DAILY_WARN-1?'#f5c842':'var(--muted)'}}>
            {usedToday>=DAILY_LIMIT?'🚫 오늘 AI 검색 소진':`✨ AI 검색 ${usedToday}/${DAILY_LIMIT}회`}
          </span>
        </div>
        <div style={{marginBottom:16,position:'relative'}}>
          <textarea value={ctx} onChange={e=>setCtx(e.target.value)} placeholder={HINTS[hintIdx]}
            style={{width:'100%',minHeight:72,background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10,color:'var(--text)',padding:'10px 14px',fontSize:'.9rem',resize:'none',outline:'none',fontFamily:'inherit',boxSizing:'border-box',transition:'border-color .2s'}}
            onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();handleRecommendClick()}}} />
        </div>
        <div style={{marginBottom:16,padding:'16px',background:'var(--surface)',borderRadius:12,border:'1px solid var(--border)'}}>
          <div style={{fontSize:'.73rem',fontWeight:700,color:'var(--muted)',marginBottom:10}}>🎛️ 필터 옵션</div>
          <div style={{marginBottom:12}}>
            <div style={{fontSize:'.73rem',color:'var(--muted)',marginBottom:6}}>🌤️ 날씨</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:5}}>{WEATHER.map(w=><button key={w} onClick={()=>setWeather(weather===w?'':w)} style={chip(weather===w)}>{w}</button>)}</div>
          </div>
          <div style={{marginBottom:12}}>
            <div style={{fontSize:'.73rem',color:'var(--muted)',marginBottom:6}}>😊 기분</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:5}}>{MOODS.map(m=><button key={m} onClick={()=>setMoods(p=>p.includes(m)?p.filter(x=>x!==m):[...p,m])} style={chip(moods.includes(m),'var(--accent)')}>{m}</button>)}</div>
          </div>
          <div style={{marginBottom:12}}>
            <div style={{fontSize:'.73rem',color:'var(--muted)',marginBottom:6}}>🗂️ 카테고리</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
              {CATS.map(cat=><button key={cat.slug} onClick={()=>setSelectedCat(selectedCat?.slug===cat.slug?null:cat)} style={{...chip(selectedCat?.slug===cat.slug,'var(--primary)'),fontSize:'.72rem'}}>{cat.emoji} {cat.name}</button>)}
            </div>
          </div>
        </div>
        <div style={{display:'flex',gap:8}}>
          <button onClick={handleRecommendClick} disabled={loading||dicing} style={{flex:1,padding:'13px',borderRadius:10,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.95rem',fontWeight:700,cursor:(loading||dicing)?'not-allowed':'pointer',opacity:(loading||dicing)?0.7:1}}>✨ AI 추천받기</button>
          <button onClick={()=>getRandom(null)} disabled={loading||dicing} style={{padding:'13px 18px',borderRadius:10,background:'var(--surface2)',color:'var(--text)',border:'1px solid var(--border)',fontSize:'.88rem',fontWeight:700,cursor:(loading||dicing)?'not-allowed':'pointer',opacity:(loading||dicing)?0.6:1,whiteSpace:'nowrap'}}>🎲 랜덤</button>
        </div>
        {excludedRef.current.size>0&&(<div style={{marginTop:8,fontSize:'.68rem',color:'var(--muted)',textAlign:'center'}}>지금까지 {excludedRef.current.size}개 식당 추천됨{excludedRef.current.size>=EXCLUDE_RESET-5?' · 곧 처음부터 다시 추천':''}</div>)}
        {error&&(<div style={{marginTop:14,padding:14,background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10,fontSize:'.82rem'}}><div style={{color:'#fc8181',fontWeight:700,marginBottom:4}}>⚠️ 추천을 불러오지 못했어요</div><div style={{color:'var(--muted)',fontSize:'.76rem',marginBottom:8}}>{error}</div><div style={{color:'var(--muted)',fontSize:'.74rem'}}>잠시 후 다시 시도하거나 🎲 랜덤 추천을 이용해주세요</div></div>)}
        {results&&(
          <div ref={resultsRef} style={{marginTop:24,maxWidth:'100%',overflowX:'hidden'}}>
            {results[0]?._random&&(
              <div style={{marginBottom:14,padding:'10px 14px',background:'rgba(99,179,237,.07)',border:'1px solid rgba(99,179,237,.2)',borderRadius:10,textAlign:'center'}}>
                {usedToday>=DAILY_LIMIT
                  ?<><div style={{fontSize:'.8rem',fontWeight:700,color:'var(--primary)',marginBottom:2}}>🎲 오늘의 AI 기회를 모두 소진했어요</div><div style={{fontSize:'.72rem',color:'var(--muted)'}}>대신 랜덤 추천으로 보여드려요 — 의외로 딱 맞을 수도 있어요 😄{selectedCat?` · ${selectedCat.emoji} ${selectedCat.name}`:''}</div></>
                  :<div style={{fontSize:'.74rem',color:'var(--muted)'}}>🎲 랜덤 추천 결과{selectedCat?` — ${selectedCat.emoji} ${selectedCat.name}`:''}</div>
                }
              </div>
            )}
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',gap:12}}>
            {results.map((rec,i)=>{
              const r=restaurants.find(x=>x.name===rec.restaurantName)||restaurants.find(x=>rec.restaurantName?.includes(x.name)||x.name?.includes(rec.restaurantName))
              if(!r) return null
              const medals=['🥇','🥈','🥉','🏅'], borders=['#ffd700','#c0c0c0','#cd7f32','#a0b0c0']
              return (
                <Link key={i} href={`/pangyo/restaurant/${encodeURIComponent(r.name)}`} style={{textDecoration:'none',display:'block',color:'inherit'}}>
                  <div style={{background:'var(--surface2)',border:'1px solid var(--border)',borderLeft:`3px solid ${borders[i]}`,borderRadius:14,padding:'16px 14px',cursor:'pointer',transition:'border-color .15s',height:'100%'}}
                    onMouseEnter={e=>e.currentTarget.style.borderColor=borders[i]}
                    onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
                    <div style={{display:'flex',gap:10,marginBottom:8}}>
                      <span style={{fontSize:'1.4rem',flexShrink:0}}>{medals[i]}</span>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontSize:'.95rem',fontWeight:700,marginBottom:5}}>{r.e} {r.name}</div>
                        <div style={{display:'flex',flexWrap:'wrap',gap:4}}>
                          <span style={{fontSize:'.7rem',background:'var(--surface)',padding:'2px 7px',borderRadius:100,border:'1px solid var(--border)',color:'var(--muted)'}}>{r.type}</span>
                          <span style={{fontSize:'.7rem',background:'var(--surface)',padding:'2px 7px',borderRadius:100,border:'1px solid var(--border)',color:'var(--text)'}}>⭐{r.rt}</span>
                          {r.priceRange&&<span style={{fontSize:'.7rem',background:'var(--surface)',padding:'2px 7px',borderRadius:100,border:'1px solid var(--border)',color:'var(--primary)'}}>💰{fmtPrice(r.priceRange)}원</span>}
                        </div>
                      </div>
                    </div>
                    <p style={{fontSize:'.84rem',color:'var(--text)',marginBottom:rec.reviewHighlight?8:0,lineHeight:1.65,opacity:.9}}>{rec.reason}</p>
                    {rec.reviewHighlight&&(<div style={{background:'var(--surface)',borderLeft:'3px solid var(--primary)',borderRadius:'0 8px 8px 0',padding:'7px 11px',fontSize:'.78rem',color:'var(--muted)',marginBottom:8}}>💬 {`"${rec.reviewHighlight}"`}</div>)}
                    {/* 태그 섹션 */}
                    <div style={{display:'flex',flexWrap:'wrap',gap:4,marginTop:6,marginBottom:6}}>
                      {(r.moods||[]).slice(0,2).map(m=>(
                        <span key={m} style={{fontSize:'.66rem',padding:'2px 7px',borderRadius:100,background:'rgba(108,63,212,.1)',border:'1px solid rgba(108,63,212,.2)',color:'#6c3fd4'}}>😊 {m}</span>
                      ))}
                      {(r.wx||[]).slice(0,2).map(w=>(
                        <span key={w} style={{fontSize:'.66rem',padding:'2px 7px',borderRadius:100,background:'rgba(56,189,248,.08)',border:'1px solid rgba(56,189,248,.2)',color:'#38bdf8'}}>🌤️ {w}</span>
                      ))}
                      {(r.tags||[]).slice(0,3).map(t=>(
                        <span key={t} style={{fontSize:'.66rem',padding:'2px 7px',borderRadius:100,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)'}}>#{t}</span>
                      ))}
                    </div>
                    {/* 영업시간 */}
                    <div style={{fontSize:'.75rem',color:'var(--muted)',padding:'5px 10px',background:'var(--surface)',borderRadius:8,border:'1px solid var(--border)'}}>
                      🕐 {r.hours}
                    </div>
                    {/* 버튼 행 */}
                    <div style={{display:'flex',gap:6,marginTop:6,alignItems:'center'}}>
                      <a href={naverMapUrl(r.name)} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{fontSize:'.75rem',padding:'5px 14px',borderRadius:8,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)',textDecoration:'none',position:'relative',zIndex:1,flexShrink:0}}>📍 지도</a>
                      <span style={{marginLeft:'auto',fontSize:'.75rem',padding:'5px 14px',borderRadius:8,background:'var(--primary)',color:'#fff',border:'none',opacity:.9}}>상세보기 →</span>
                    </div>
                  </div>
                </Link>
              )
            })}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

// ── 전체 목록 탭 ─────────────────────────────────────────────
function BrowseTab() {
  const [search,s]=useState('')
  const [activeCat,ac]=useState('전체')
  const allCats=['전체','고기구이','국밥','이자카야','일식','중식','양식','치킨','한식','분식']
  const filtered=restaurants.filter(r=>(activeCat==='전체'||r.cat?.includes(activeCat))&&(!search||r.name.includes(search)||r.type.includes(search)||r.tags?.some(t=>t.includes(search))))
  return (
    <div>
      <div style={{display:'flex',gap:8,marginBottom:14}}>
        <input value={search} onChange={e=>s(e.target.value)} placeholder="🔍 식당명·종류·태그"
          style={{flex:1,padding:'9px 14px',borderRadius:10,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text)',fontSize:'.88rem',outline:'none'}} />
      </div>
      <div style={{display:'flex',flexWrap:'wrap',gap:5,marginBottom:16}}>
        {allCats.map(cat=>(
          <button key={cat} onClick={()=>ac(cat)} style={{padding:'4px 11px',borderRadius:100,fontSize:'.76rem',border:`1px solid ${activeCat===cat?'var(--primary)':'var(--border)'}`,background:activeCat===cat?'var(--primary)':'var(--surface2)',color:activeCat===cat?'#fff':'var(--text)',cursor:'pointer'}}>
            {cat}{activeCat===cat?` (${filtered.length})`:''}</button>
        ))}
      </div>
      <div className="restaurant-grid">
        {filtered.map((r,i)=>(
          <Link href={`/pangyo/restaurant/${encodeURIComponent(r.name)}`} key={i}>
            <div className="restaurant-card">
              <div className="card-name">{r.e} {r.name}</div>
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

// ── 메인 ──────────────────────────────────────────────────────
export default function PangyoPage() {
  const [activeTab,setActiveTab]=useState(()=>{ if(typeof window!=='undefined') return sessionStorage.getItem('pangyo-tab')||'ai'; return 'ai' })
  const [pendingCat,setPendingCat]=useState(null)
  const switchTab=(tab)=>{ setActiveTab(tab); sessionStorage.setItem('pangyo-tab',tab) }
  const topRated=[...restaurants].sort((a,b)=>b.rt-a.rt).slice(0,6)

  return (
    <Layout
      title="판교역 맛집 AI 추천"
      description="판교역·판교테크노밸리·백현동 맛집 AI 추천. 고기구이·이자카야·일식·회식장소."
      canonical="https://dinner.ambitstock.com/pangyo"
    >
      <Head>
        <title>판교 맛집 추천 | 판교역 AI 추천 | 뭐먹지</title>
        <meta name="description" content={`판교역·판교테크노밸리·백현동 맛집 AI 추천. 고기구이·이자카야·일식·회식장소 ${restaurants.length}개+ 식당.`} />
        <link rel="canonical" href="https://dinner.ambitstock.com/pangyo" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"ItemList","name":"판교역 맛집 추천",
          "url":"https://dinner.ambitstock.com/pangyo","numberOfItems":restaurants.length,
          "itemListElement":topRated.slice(0,5).map((r,i)=>({ "@type":"ListItem","position":i+1,"name":r.name,"description":`${r.type} | ⭐${r.rt}` }))
        })}} />
      </Head>

      {/* 히어로 */}
      <section style={{background:'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',padding:'32px 16px 24px',borderBottom:'1px solid var(--border)'}}>
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div style={{fontSize:'.75rem',color:'var(--muted)',marginBottom:8}}>
            <Link href="/" style={{color:'var(--muted)'}}>오늘뭐먹지</Link> › 판교역
          </div>
          <h1 style={{fontSize:'clamp(1.4rem,5vw,2.2rem)',fontWeight:900,marginBottom:8,lineHeight:1.2}}>🏢 판교역 맛집</h1>
          <p style={{color:'var(--muted)',fontSize:'.88rem',marginBottom:6}}>
            판교테크노밸리·백현동·아브뉴프랑 인근 <strong style={{color:'var(--text)'}}>{restaurants.length}개+</strong> 식당 AI 추천
          </p>
          <p style={{color:'var(--muted)',fontSize:'.75rem',marginBottom:14,opacity:.75}}>
            판교역 근처에서 자주 회식하는 <strong style={{color:'var(--text)',opacity:1}}>GE헬스케어</strong> 임직원분들을 위한 맛집 큐레이션도 준비되어 있어요 👋
          </p>
          <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
            {['#판교맛집','#회식','#직장인점심','#테크노밸리','#백현동'].map(t=>(
              <span key={t} style={{fontSize:'.72rem',color:'var(--muted)',background:'var(--surface2)',padding:'3px 9px',borderRadius:100,border:'1px solid var(--border)'}}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{maxWidth:900,margin:'0 auto',padding:'20px 16px'}}>
        {/* 탭 */}
        <div style={{display:'flex',borderBottom:'1px solid var(--border)',marginBottom:20}}>
          {[{id:'ai',label:'✨ AI 추천'},{id:'browse',label:'📋 전체 목록'},{id:'categories',label:'🗂️ 카테고리'}].map(tab=>(
            <button key={tab.id} onClick={()=>switchTab(tab.id)} style={{padding:'10px 16px',fontSize:'.85rem',fontWeight:activeTab===tab.id?700:400,background:'none',border:'none',cursor:'pointer',color:activeTab===tab.id?'var(--primary)':'var(--muted)',borderBottom:activeTab===tab.id?'2px solid var(--primary)':'2px solid transparent',marginBottom:-1,whiteSpace:'nowrap'}}>{tab.label}</button>
          ))}
        </div>

        {activeTab==='ai'&&(
          <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:16,overflow:'hidden',marginTop:4}}>
            <AiApp pendingCat={pendingCat} onPendingCatUsed={()=>setPendingCat(null)} />
          </div>
        )}
        {activeTab==='browse'&&<BrowseTab />}
        {activeTab==='categories'&&(
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(130px, 1fr))',gap:10,padding:'4px 0'}}>
            {CATS.map(cat=>{
              const count=restaurants.filter(r=>{
                const catMatch=cat.cats.length>0&&cat.cats.some(c=>r.cat?.includes(c))
                const tagMatch=cat.tags?.some(t=>r.tags?.some(rt=>rt.includes(t))||r.cat?.some(c=>c.includes(t)))
                return catMatch||tagMatch
              }).length
              return (
                <div key={cat.slug} style={{position:'relative'}}>
                  <Link href={`/pangyo/category/${cat.slug}`}>
                    <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,padding:'14px 12px 44px',textAlign:'center',cursor:'pointer',transition:'border-color .15s'}}
                      onMouseEnter={e=>e.currentTarget.style.borderColor='var(--primary)'}
                      onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
                      <div style={{fontSize:'1.8rem',marginBottom:6}}>{cat.emoji}</div>
                      <div style={{fontSize:'.82rem',fontWeight:600,marginBottom:3}}>{cat.name}</div>
                      <div style={{fontSize:'.72rem',color:'var(--muted)'}}>{count}개</div>
                    </div>
                  </Link>
                  <button onClick={e=>{e.preventDefault();setPendingCat(cat);switchTab('ai')}}
                    style={{position:'absolute',bottom:8,left:'50%',transform:'translateX(-50%)',padding:'4px 14px',borderRadius:8,fontSize:'.72rem',fontWeight:700,background:'var(--primary)',color:'#fff',border:'none',cursor:'pointer',whiteSpace:'nowrap',boxShadow:'0 2px 8px rgba(108,99,255,.3)'}}>
                    🎲 바로 뽑기
                  </button>
                </div>
              )
            })}
          </div>
        )}

        {/* SEO 콘텐츠 */}
        <article style={{marginTop:48,padding:'24px 20px',background:'var(--surface)',borderRadius:14,border:'1px solid var(--border)'}}>
          <h2 style={{fontSize:'1rem',fontWeight:800,marginBottom:12}}>판교역 맛집 가이드</h2>
          <p style={{color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8,marginBottom:10}}>
            판교역 맛집의 중심은 <strong style={{color:'var(--text)'}}>판교테크노밸리 알파·베타동과 백현동 카페거리</strong>입니다. IT·바이오·의료기기 기업들이 밀집해 있어 직장인 점심·저녁 수요가 높고, 가성비 한식부터 프리미엄 오마카세까지 다양한 선택지가 있습니다.
          </p>
          <p style={{color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8,marginBottom:10}}>
            <strong style={{color:'var(--text)'}}>신분당선 판교역 5번출구</strong> 방향 백현동 카페거리에는 브런치·양식·일식 데이트 맛집이, <strong style={{color:'var(--text)'}}>판교테크노밸리 내부</strong>에는 직장인 점심을 위한 한식·분식이 집중되어 있습니다.
          </p>
          <p style={{color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8}}>
            <strong style={{color:'var(--text)'}}>아브뉴프랑·현대백화점 판교점</strong> 인근에는 회식에 최적화된 고기구이·이자카야가 많으며, 주차 가능한 대형 식당도 여럿 있어 법인카드 자리로도 자주 이용됩니다.
          </p>
        </article>

        {/* 다른 지역 링크 */}
        <div style={{marginTop:24,padding:'16px',background:'var(--surface)',borderRadius:12,border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <span style={{fontSize:'.85rem',color:'var(--muted)'}}>🏙️ 삼성역·코엑스도 보고 싶다면?</span>
          <Link href="/dinner/samseong" style={{fontSize:'.82rem',color:'var(--primary)',textDecoration:'none',fontWeight:600}}>삼성역 맛집 →</Link>
        </div>
      </div>
    </Layout>
  )
}
