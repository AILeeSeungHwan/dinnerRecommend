import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import restaurants from '../../../data/yeongtong'

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
  {emoji:'🥩', name:'고기구이·삼겹살', slug:'meat',     cats:['고기구이'],              tags:['한우','갈비','삼겹살','목살']},
  {emoji:'🥣', name:'국밥·해장·칼국수', slug:'gukbap',  cats:['국밥','국물','칼국수'],  tags:['해장','설렁탕','순대국밥']},
  {emoji:'🏮', name:'이자카야·포차',   slug:'izakaya',  cats:['이자카야','야장'],       tags:['포차','하이볼','수제맥주']},
  {emoji:'🍣', name:'일식·스시·돈카츠', slug:'japanese', cats:['일식'],                 tags:['스시','사시미','돈카츠','규동']},
  {emoji:'🍜', name:'중식·마라탕',     slug:'chinese',  cats:['중식','훠궈'],           tags:['마라탕','양꼬치','짬뽕']},
  {emoji:'🍝', name:'양식·파스타',     slug:'western',  cats:['양식','이탈리안','스테이크'], tags:['파스타','피자','스테이크']},
  {emoji:'🐔', name:'치킨·분식',       slug:'chicken',  cats:['치킨'],                  tags:['통닭','치킨','떡볶이','분식']},
  {emoji:'🎉', name:'회식·단체',       slug:'group',    cats:[],                        tags:['단체가능','회식','룸있음']},
  {emoji:'💑', name:'데이트·분위기',   slug:'date',     cats:[],                        tags:['데이트','뷰맛집','프라이빗']},
  {emoji:'💰', name:'가성비·혼밥·점심', slug:'budget',  cats:[],                        tags:['가성비','점심','혼밥가능','점심특선']},
  {emoji:'✨', name:'접대·파인다이닝', slug:'premium',  cats:[],                        tags:['오마카세','예약제','코스요리','프라이빗']},
  {emoji:'🍱', name:'한식·정식·보쌈',  slug:'korean',   cats:['한식'],                  tags:['족발','보쌈','갈비찜','한정식']},
]

// ── 랜덤 추천 결과 문구 템플릿 (10종, 카드마다 다른 형식) ──────────
function buildRandomReason(r, idx, usedTemplates) {
  const tags    = (r.tags  || []).slice(0, 4)
  const moods   = (r.moods || []).slice(0, 3)
  const scene   = (r.scene || []).slice(0, 2)
  const rv      = (r.rv    || []).slice(0, 2).map(v => v.replace(/ \(실제 Google 리뷰.*?\)/g, '').slice(0, 45))
  const price   = r.priceRange ? `${r.priceRange}원대` : ''
  const hours   = r.hours || ''
  const type    = r.type  || ''
  const rt      = r.rt    || ''
  const cnt     = r.cnt   ? `${r.cnt.toLocaleString()}명` : ''
  const tagStr  = tags.join(' · ')
  const moodStr = moods.join(' · ')

  const templates = [
    // 0: 리뷰 인용 선두형
    () => {
      const q = rv[0] || `${tagStr} 맛집`
      return {
        reason: `"${q}" — 방문객들의 후기가 이 식당을 대변합니다. ${cnt ? cnt + '이 검증한 ' : ''}⭐${rt}점의 ${type}${price ? ', ' + price : ''}.${scene[0] ? ' ' + scene[0] + ' 상황에 특히 잘 어울립니다.' : ''} ${rv[1] ? '"' + rv[1] + '"' : ''}`,
        highlight: rv[0] ? rv[0].slice(0, 22) : `${rt}점 · ${tagStr}`
      }
    },
    // 1: 숫자·데이터 신뢰형
    () => ({
      reason: `⭐${rt} · 리뷰 ${cnt} · ${price}. 숫자로 증명된 ${type}입니다. ${tagStr ? tagStr + ' 등의 특징으로 ' : ''}단골을 만드는 곳${moodStr ? '으로, ' + moodStr + ' 상황에 딱입니다.' : '.'}${scene[0] ? ' ' + scene[0] + '에 특히 추천합니다.' : ''}`,
      highlight: `리뷰 ${cnt} · ⭐${rt}`
    }),
    // 2: 시간·상황 맥락형
    () => {
      const ctx = scene[0] || moods[0] || '오늘 저녁'
      return {
        reason: `${ctx}에 딱 맞는 선택. ${type} 특유의 ${tags[0] || '분위기'}를 제대로 느낄 수 있고${tags[1] ? ' ' + tags[1] + '도 빠지지 않습니다.' : '.'} 평점 ⭐${rt}${cnt ? '(' + cnt + ' 리뷰)' : ''}${price ? ', ' + price : ''}. ${rv[0] ? '"' + rv[0] + '"' : ''}`,
        highlight: `${ctx} 추천 · ⭐${rt}`
      }
    },
    // 3: 임팩트 카피 + 부연형
    () => {
      const copy = tags[0] ? `${tags[0]}이라면 여기` : `${type} 고민 끝`
      return {
        reason: `${copy}. ${price ? price + ' 가격대의 ' : ''}⭐${rt}짜리 ${type}으로${cnt ? ' ' + cnt + '의 선택을 받았습니다.' : '.'} ${tags.slice(1).join(' · ')}${tags.length > 1 ? ' 등의 특징이 있고' : ''}${moodStr ? ' ' + moodStr + ' 기분에 잘 맞습니다.' : '.'}${rv[0] ? ' "' + rv[0] + '"' : ''}`,
        highlight: copy
      }
    },
    // 4: 해시태그 감성형
    () => ({
      reason: `${tags.length ? '#' + tags.join(' #') + ' ' : ''}${type}. ${rv[0] ? '"' + rv[0] + '" — 방문객들이 공통으로 꼽는 매력입니다. ' : ''}⭐${rt}${cnt ? ', ' + cnt + ' 리뷰' : ''}${price ? ', ' + price : ''}. ${scene[0] ? scene[0] + '에 특히 잘 어울립니다.' : ''}`,
      highlight: tags[0] ? '#' + tags[0] : `⭐${rt} ${type}`
    }),
    // 5: 차별화 비교형
    () => {
      const diff = tags[0] || moods[0] || '퀄리티'
      return {
        reason: `다른 ${type}과 다른 건 ${diff}입니다. ${rv[0] ? '"' + rv[0] + '"' : ''}${cnt ? ' ' + cnt + '명이 인정한' : ''} ⭐${rt}점. ${price ? price + '으로 ' : ''}${scene[0] ? scene[0] + '에 맞게 ' : ''}기억에 남는 식사를 경험할 수 있습니다.${rv[1] ? ' "' + rv[1] + '"' : ''}`,
        highlight: `${diff} 맛집 · ⭐${rt}`
      }
    },
    // 6: 스토리텔링 시나리오형
    () => {
      const when = scene[0] || moods[0] || '식사'
      const what = tags[0] || type
      return {
        reason: `${when} 자리, ${what}이 당길 때. ⭐${rt}${cnt ? '(' + cnt + ' 리뷰)' : ''} ${type}${price ? ', ' + price + '대' : ''}. ${tags.slice(0,3).join(' · ')} 한 번에 해결. ${rv[0] ? '"' + rv[0] + '"' : ''} 한 번 가면 다시 찾게 됩니다.`,
        highlight: `${when} · ${what}`
      }
    },
    // 7: Q&A 공감 유도형
    () => {
      const q = moods[0] ? `${moods[0]}할 때 어디 갈지 모르겠다면?` : `오늘 ${type} 어때요?`
      return {
        reason: `${q} ⭐${rt}${cnt ? ', ' + cnt + ' 리뷰' : ''}의 검증된 ${type}. ${tags.join(' · ')}${price ? ' · ' + price : ''}. ${rv[0] ? '"' + rv[0] + '"이라는 후기처럼 ' : ''}${scene[0] ? scene[0] + '에 딱 맞는 ' : '기대 이상의 '}한 끼가 됩니다.`,
        highlight: q.replace('?', '')
      }
    },
    // 8: 실용 정보 나열형
    () => ({
      reason: `${hours ? hours + ' 영업. ' : ''}${price ? price + '. ' : ''}⭐${rt}${cnt ? '(' + cnt + ')' : ''} ${type}. ${tagStr}. ${rv[0] ? '"' + rv[0] + '"' : moodStr ? moodStr + ' 기분에 잘 맞습니다.' : '실용적인 선택입니다.'}${rv[1] ? ' "' + rv[1] + '"' : ''}`,
      highlight: `${type} · ${hours ? hours.split('~')[0] : ''}${price ? ' · ' + price : ''}`
    }),
    // 9: 감정이입 + 추천이유형
    () => {
      const feel = moods[0] || scene[0] || '오늘'
      return {
        reason: `${feel}에 이 한 곳을 추천하는 이유 — ${tags[0] ? tags[0] + ',' : ''} ${tags[1] ? tags[1] + ',' : ''} 그리고 ⭐${rt}의 신뢰. ${rv[0] ? '"' + rv[0] + '"이 모든 걸 설명합니다. ' : ''}${cnt ? cnt + '명이 같은 선택을 했습니다.' : ''} ${price ? price + '.' : ''}`,
        highlight: `${feel} 추천 · ⭐${rt}`
      }
    },
  ]

  // 이미 사용된 템플릿 제외 후 랜덤 선택
  const available = templates.map((_,i) => i).filter(i => !usedTemplates.includes(i))
  const pick = available[Math.floor(Math.random() * available.length)]
  const result = templates[pick]()
  return { ...result, templateIdx: pick }
}

function preScore(q, moods, wx, cands, selectedCat) {
  const qt = `${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  return cands.map(r => {
    let s = (r.rt||0) * 3
    // 카테고리 선택 = 최우선 (기분·날씨보다 훨씬 높은 점수)
    if (selectedCat && !selectedCat.exit4Only) {
      const catMatch = (selectedCat.cats||[]).some(c => (r.cat||[]).includes(c))
      const tagMatch = (selectedCat.tags||[]).some(t => (r.tags||[]).includes(t))
      if (catMatch) s += 60
      else if (tagMatch) s += 30
      else s -= 30
    }
    const blob = `${r.name} ${r.type} ${(r.tags||[]).join(' ')} ${(r.scene||[]).join(' ')} ${(r.moods||[]).join(' ')} ${(r.wx||[]).join(' ')}`
    moods.forEach(m => { if (blob.includes(m)) s += 10 })
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

// ── 상황 컨텍스트 추출 ──────────────────────────────────────
function extractContext(q, moods, wx) {
  const t = `${q} ${moods.join(' ')} ${wx}`.toLowerCase()

  const vipScore =
    (new RegExp('임원|상무|전무|부사장|사장님|대표님|vip|어르신|웃어른','i').test(t) ? 3 : 0) +
    (new RegExp('접대|대접|모시|귀빈|중요한','i').test(t) ? 2 : 0) +
    (new RegExp('오마카세|파인다이닝|코스요리|고급식당|럭셔리|프리미엄|격식','i').test(t) ? 2 : 0) +
    (new RegExp('클라이언트|거래처|바이어|파트너|비즈니스 미팅|계약|협상','i').test(t) ? 1 : 0)

  return {
    vipScore,
    isCelebration: new RegExp('기념일|생일.*파티|승진.*축하|특별한 날|프로포즈|기념').test(t),
    needsPrivate:  new RegExp('개인실|룸 있는|독립 공간|조용한 자리|프라이빗').test(t),
    needsParking:  new RegExp('주차|드라이브|차로|차량|자가용').test(t),
    isLunch:       new RegExp('점심|런치|낮에|12시|오전').test(t),
    isLate:        new RegExp('야식|심야|늦게|밤에|11시|12시|새벽').test(t),
    isQuick:       new RegExp('빠르게|빨리|바로|간단히|가볍게|점심시간').test(t),
    isSolo:        new RegExp('혼밥|혼자|1인|나혼자').test(t),
    isGroup:       new RegExp('단체|회식|여럿|팀|부서|모임').test(t),
    isDate:        new RegExp('데이트|커플|연인|둘이|분위기|로맨틱').test(t),
    isStress:      new RegExp('스트레스|힘들|지쳐|피로|야근|화풀이').test(t),
    isHangover:    new RegExp('해장|숙취|어제|속풀이|뒤끝').test(t),
  }
}

// ── 유틸 ──────────────────────────────────────────────────────
function detectMenu(q, moods, wx) {
  const t = `${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  for (const m of NL_MENU_MAP) { if (m.patterns.test(t)) return m }
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
    .replace(/ (영통점|영통역점|망포점|수원점|영통본점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  // 식당명에 잠실/송파/방이/석촌 등 지역이 포함되면 그대로, 아니면 " 잠실" 추가
  const hasRegion = /(영통|망포|수원|삼성전자|영통역|영통구)/.test(name)
  const query = hasRegion ? cleaned : cleaned + ' 영통'
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
  '예: 영통역 회식 장소 추천',
  '예: 야근 후 해장할 곳',
  '예: 1만원 이하 혼밥 가능한 곳',
  '예: 삼성전자 근처 점심 혼밥',
  '예: 영통 데이트 코스 저녁',
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
    setLoading(true); setError(false); setResults(null)

    try {
      const mm = detectMenu(ctx, moods, weather)
      const pf = parsePriceFilter(ctx)
      const rf = parseRatingFilter(ctx)
      let base = restaurants
      // 카테고리 선택이 최우선 필터
      if (selectedCat && !selectedCat.exit4Only) {
        base = base.filter(r =>
          (selectedCat.cats||[]).some(c => r.cat?.includes(c)) ||
          (selectedCat.tags||[]).some(t => r.tags?.includes(t))
        )
        if (base.length < 5) base = restaurants
      } else if (mm) {
        base = base.filter(r=>mm.cats.some(c=>r.cat?.includes(c)))
      }
      if (pf) base = filterByPrice(base, pf)
      if (rf) base = filterByRating(base, rf)
      if (base.length < 5) base = restaurants

      // 이전 결과 제외 후 스코어링
      const pool = filterExcluded(base)
      // top20 스코어링 → 매번 다른 6개 (top3 고정 + 랜덤3)
      const scored = preScore(ctx, moods, weather, pool, selectedCat)
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
      const prompt = `당신은 영통역·수원 삼성전자 맛집 전문가입니다. 아래 사용자의 요청에 딱 맞는 식당 3곳을 후보 목록에서 골라 추천해주세요.

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
                <Link key={i} href={`/samsungElectronics/yeongtong/restaurant/${encodeURIComponent(r.name)}`}
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
  const allCats = ['전체','고기구이','국밥','이자카야','일식','중식','양식','치킨','한식','분식']
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
          <Link href={`/samsungElectronics/yeongtong/restaurant/${encodeURIComponent(r.name)}`} key={i}>
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
    if (typeof window !== 'undefined') return sessionStorage.getItem('yeongtong-tab') || 'ai'
    return 'ai'
  })
  const [pendingCat, setPendingCat] = useState(null)
  const switchTab = (tab) => { setActiveTab(tab); sessionStorage.setItem('yeongtong-tab', tab) }
  const topRated = [...restaurants].sort((a,b)=>b.rt-a.rt).slice(0,6)

  return (
    <Layout
      title="영통역 맛집 AI 추천"
      description="영통역·삼성전자 인근 맛집 AI 추천. 고기구이·부대찌개·국밥·이자카야 맛집."
      canonical="https://dinner.ambitstock.com/samsungElectronics/yeongtong"
    >
      <Head>
        <title>영통 맛집 추천 | 삼성전자 영통 AI 추천 | 뭐먹지</title>
        <meta name="description" content={`영통역·삼성전자 인근 맛집 AI 추천. 고기구이·부대찌개·국밥·이자카야 ${restaurants.length}개+ 식당.`} />
        <link rel="canonical" href="https://dinner.ambitstock.com/samsungElectronics/yeongtong" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"ItemList","name":"영통역 맛집 추천",
          "url":"https://dinner.ambitstock.com/samsungElectronics/yeongtong","numberOfItems":restaurants.length,
          "itemListElement":topRated.slice(0,5).map((r,i)=>({ "@type":"ListItem","position":i+1,"name":r.name,"description":`${r.type} | ⭐${r.rt}` }))
        })}} />
      </Head>

      {/* 히어로 */}
      <section style={{ background:'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',padding:'32px 16px 24px',borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:900,margin:'0 auto' }}>
          <div style={{ fontSize:'.75rem',color:'var(--muted)',marginBottom:8 }}>
            <Link href="/" style={{ color:'var(--muted)' }}>오늘뭐먹지</Link> › 영통역
          </div>
          <h1 style={{ fontSize:'clamp(1.4rem,5vw,2.2rem)',fontWeight:900,marginBottom:8,lineHeight:1.2 }}>🚇 영통역 맛집</h1>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',marginBottom:14 }}>
            영통역·먹자골목·삼성전자 인근 <strong style={{ color:'var(--text)' }}>{restaurants.length}개+</strong> 식당 AI 추천
          </p>
          <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
            {['#회식', '#직장인점심', '#고기구이', '#부대찌개', '#영통맛집'].map(t=>(
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
                  <Link href={`/samsungElectronics/yeongtong/category/${cat.slug}`}>
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

        {/* SEO 콘텐츠 */}
        <article style={{ marginTop:48,padding:'24px 20px',background:'var(--surface)',borderRadius:14,border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1rem',fontWeight:800,marginBottom:12 }}>영통역 맛집 가이드</h2>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8,marginBottom:10 }}>
            영통역 맛집의 중심은 <strong style={{ color:'var(--text)' }}>영통역 먹자골목과 삼성전자 인근 상권</strong>입니다. 직장인 점심·회식 수요가 높아 가성비 한식부터 프리미엄 고기구이까지 다양한 선택지가 있습니다.
          </p>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8,marginBottom:10 }}>
            <strong style={{ color:'var(--text)' }}>영통역 1번 출구</strong> 방향에는 국밥·부대찌개·칼국수 등 저렴하고 든든한 한식이 집중되어 있으며, 직장인 점심 피크타임에는 웨이팅이 생기는 맛집들이 즐비합니다.
          </p>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8 }}>
            <strong style={{ color:'var(--text)' }}>삼성전자 영통캠퍼스 인근</strong>에는 고기구이·이자카야·중식 등 회식에 최적화된 맛집이 많습니다. 주차 가능한 대형 식당도 여럿 있어 법인카드 자리로 자주 이용됩니다.
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
