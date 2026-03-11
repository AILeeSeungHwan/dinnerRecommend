import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import restaurants from '../../../data/jamsil'

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
]

// ── 랜덤 추천 결과 문구 템플릿 ──────────────────────────────
function buildRandomReason(r, idx, usedTemplates) {
  // rv에서 별점 접두사·불필요한 괄호 제거, 최대 70자
  function cleanRv(v) {
    return (v || '')
      .replace(/\[\d+\.?\d*★\]\s*/g, '')
      .replace(/\(실제 Google 리뷰.*?\)/g, '')
      .trim()
      .slice(0, 40)
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
      const rv0long = (r.rv || []).map(cleanRv).filter(Boolean).map(v => v.slice(0, 40))[0] || ''
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

    // 8: 평점 수치 강조 + 방문 코멘트
    () => {
      const star = rt ? `⭐${rt}점` : ''
      const cntStr = cnt >= 100 ? `${cnt.toLocaleString()}명 방문` : cnt > 0 ? `${cnt}명 방문` : ''
      const badge = [star, cntStr].filter(Boolean).join(' · ')
      const base8 = badge ? `${badge}.` : `${r.type || '식당'}.`
      const reason = rv0 ? `${base8} "${rv0}"` : base8
      return { reason, highlight: rv0.slice(0, 20) || (star || cntStr) }
    },

    // 9: 가격대 앞세우기
    () => {
      const price = r.priceRange
        ? (() => { const [a,b]=r.priceRange.split('~').map(Number); const avg=Math.round((a+(b||a))/2/1000); return `${avg}천원대` })()
        : null
      const intro = price ? `${price}, 부담 없이 즐길 수 있는 곳.` : (tags[0] ? `${tags[0]}${tags[0].endsWith('집')?'':'집'}.` : '한 번 가볼 만한 곳.')
      const reason = rv0 ? `${intro} "${rv0}"` : intro
      return { reason, highlight: rv0.slice(0,20) || (price||'') }
    },

    // 10: 재방문/단골 스타일
    () => {
      const repeat = cnt >= 300 ? `${cnt.toLocaleString()}명이 다녀간` : cnt > 0 ? `${cnt}명이 다녀간` : ''
      const tagWord = tags[0] || r.type || ''
      const intro = repeat
        ? `${repeat} ${tagWord} 맛집.`
        : `${tagWord} 좋아하면 여기 한번.`
      const reason = rv0 ? `${intro} "${rv0}"` : intro
      return { reason, highlight: rv0.slice(0,20) || tagWord }
    },

    // 11: 첫 방문 추천 스타일 (태그 나열 + 짧은 문장)
    () => {
      const tagLine = tags.slice(0,3).map(t=>`#${t}`).join(' ')
      const sc = scene[0] || moods[0] || ''
      const intro = sc ? `${sc.replace(/에$/,'')}에 딱 맞는 선택.` : `한 번은 가봐야 할 곳.`
      const reason = `${intro}${tagLine ? '  '+tagLine : ''}${rv0 ? '  "'+rv0+'"' : ''}`
      return { reason, highlight: rv0.slice(0,20) || (tags[0]||sc) }
    },

    // 12: 두 번째 리뷰 강조 + 태그
    () => {
      const rv1use = rv1 || rv0
      if (!rv1use) return templates[1]()
      const tagStr = tags[0] ? `#${tags.slice(0,2).join(' #')}` : ''
      const reason = tagStr ? `${tagStr}  "${rv1use}"` : `"${rv1use}"`
      return { reason, highlight: rv1use.slice(0,20) }
    },

    // 13: 상황 + 메뉴타입 자연어 설명
    () => {
      const when = moods[0] ? (() => {
        const m={'기분 좋음':'기분 좋은 날','피곤함':'피곤할 때','스트레스 받음':'스트레스받을 때',
          '혼밥':'혼자일 때','축하':'축하하는 날','허전함':'왠지 허전할 때',
          '데이트':'데이트하는 날','회식':'회식 자리라면'}
        return m[moods[0]] || moods[0]
      })() : null
      const typeWord = r.type?.split('·')[0] || ''
      const intro = when
        ? `${when}, ${typeWord} 생각난다면.`
        : `${typeWord} 고민될 때 이 집.`
      const reason = rv0 ? `${intro} "${rv0}"` : intro
      return { reason, highlight: rv0.slice(0,20) || typeWord }
    },

    // 14: 리뷰 없을 때 태그 스토리
    () => {
      const scStr = scene.slice(0,2).join(', ')
      const tagStr = tags.slice(0,3).join(' · ')
      const intro = scStr ? `${scStr}에 어울리는` : ''
      const reason = `${intro ? intro+' ' : ''}${tagStr || r.type || '맛집'}.${cnt>0 ? ` 방문객 ${cnt.toLocaleString()}명 인증.` : ''}`
      return { reason, highlight: tagStr.slice(0,20) || r.type || '' }
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
  if (/해산물|횟집|생선구이|수산|어시장|물회|매운탕|꽃게|조개구이|굴밥|전복구이|낙지볶음|쭈꾸미|갈치|고등어|가자미|대구탕|아구찜/.test(text)) return {slug:'seafood', cats:['해산물'], tags:[]}
  if (/회(?!식|의|사|원|장|고)|회덮밥|회무침|광어|우럭|참치회/.test(text))                         return {slug:'seafood', cats:['해산물','일식'], tags:[]}
  if (/고기|구이|갈비|삼겹|목살|한우|소고기|돼지고기|불판|등심|안심/.test(text))                   return CATS.find(c=>c.slug==='meat')
  if (/국밥|설렁탕|곰탕|순대국|해장국|뼈해장|선지국|우거지/.test(text))                          return CATS.find(c=>c.slug==='gukbap')
  if (/라멘|우동|소바|텐동|돈부리|오야코동|일본카레|돈카츠/.test(text))                           return CATS.find(c=>c.slug==='japanese')
  if (/마라탕|마라샹궈|훠궈|양꼬치|딤섬|탕수육|깐풍기|짜장면|짬뽕/.test(text))                   return CATS.find(c=>c.slug==='chinese')
  if (/파스타|리조또|스테이크|그릴요리|와규|피자|이탈리안요리/.test(text))                        return CATS.find(c=>c.slug==='western')
  if (/이자카야|하이볼|사케|야키토리|일본식술집/.test(text))                                    return CATS.find(c=>c.slug==='izakaya')
  if (/치킨|통닭|닭강정|닭발|후라이드|양념치킨/.test(text))                                    return CATS.find(c=>c.slug==='chicken')
  if (/야장|포차|호프|생맥주|맥주집/.test(text))                                            return CATS.find(c=>c.slug==='izakaya')
  if (/데이트|커플|연인|로맨틱|분위기좋은/.test(text))                                        return CATS.find(c=>c.slug==='date')
  if (/회식|단체|모임|팀회식|부서/.test(text))                                             return CATS.find(c=>c.slug==='group')
  if (/가성비|혼밥|혼자|저렴|싸게|저가|가격착한/.test(text))                                  return CATS.find(c=>c.slug==='budget')
  if (/접대|파인다이닝|고급식당|프라이빗룸|럭셔리/.test(text))                                  return CATS.find(c=>c.slug==='premium')
  if (/족발|곱창|보쌈|막창|대창/.test(text))                                              return CATS.find(c=>c.slug==='special')
  if (/해장|숙취|속풀이/.test(text))                                                    return CATS.find(c=>c.slug==='gukbap')
  if (/오마카세|코스요리|파인다이닝|예약제식당/.test(text))                                    return CATS.find(c=>c.slug==='premium')
  return null
}

function preScore(q, moods, wx, cands, selectedCat, mm) {
  const qt  = `${q} ${moods.join(' ')} ${wx}`.toLowerCase()
  const ctx = extractContext(q, moods, wx)

  return cands.map(r => {
    let s = (r.rt || 0) * 3

    const blob = [r.name, r.type,
      ...(r.tags||[]), ...(r.scene||[]), ...(r.moods||[]), ...(r.wx||[]), ...(r.cat||[])
    ].join(' ').toLowerCase()
    // 쿼리 토큰 분리: 조사·불용어 제거 후 의미 단위 추출
    const qtTokens = qt.replace(/맛집|추천|좀|으로|에서|이나|이랑|이랑|하게|해줘|해봐|싶어|먹고|갈꺼|갈게|좋은|기가막힌|완전|진짜|정말|너무|꺼야|거야|어때|어디|부탁|인데|이야|노포|감성|갈꺼야/g,' ').replace(/\s+/g,' ').split(/\s+/).filter(w=>w.length>1)

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
    // ① 자연어 메뉴 매핑(mm) 기반 cat 보너스 (selectedCat 없을 때)
    if (!selectedCat && mm) {
      const mmCats = mm.cats || []
      const mmSlug = mm.slug || ''
      const rCat = r.cat || []
      const rType = r.type || ''
      if (mmCats.some(c => rCat.includes(c)))                  s += 55  // cat 직접 일치
      else if (rType.split('·').some(t => mmCats.some(c=>t.includes(c)))) s += 35  // type 일치
      else if (rType.split('·')[0] !== mmCats[0] && mmCats.length > 0)    s -= 25  // 주메뉴 불일치 패널티
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

    // ⑦ 태그·씬 텍스트 매칭 (qtTokens 기반으로 개선)
    ;(r.tags||[]).forEach(t => {
      const tl = t.toLowerCase()
      if (qt.includes(tl) || qtTokens.some(w => tl.includes(w))) s += 15
    })
    ;(r.scene||[]).forEach(sc => {
      const scl = sc.toLowerCase()
      if (qt.includes(scl) || qtTokens.some(w => scl.includes(w))) s += 12
    })
    qtTokens.forEach(w => { if (blob.includes(w)) s += 8 })
    // cat 직접 텍스트 매칭 추가
    ;(r.cat||[]).forEach(c => {
      const cl = c.toLowerCase()
      if (qtTokens.some(w => cl.includes(w) || w.includes(cl))) s += 18
    })

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


function moodEmoji(m) {
  const map = {
    '회식': '🥂', '축하': '🎉', '데이트': '💑', '혼밥': '🙋', '가족': '👨‍👩‍👧',
    '기분 좋음': '😄', '스트레스 받음': '😤', '피곤함': '😴', '우울함': '😔',
    '설렘': '🥰', '신남': '🎊', '소소함': '☕', '배고픔': '🤤', '치팅데이': '🍔',
    '혼술': '🍶', '해장': '🍜', '야식': '🌙',
  }
  return (map[m] || '🙂') + ' ' + m
}
function wxEmoji(w) {
  const map = {
    '맑음': '☀️', '흐림': '☁️', '비': '🌧️', '눈': '❄️',
    '더움': '🌡️', '덥고 습함': '🥵', '쌀쌀함': '🧥', '추움': '🥶',
    '바람': '💨', '황사': '😷',
  }
  return (map[w] || '🌤️') + ' ' + w
}

function naverMapUrl(name) {
  const cleaned = name
    .replace(/ (잠실점|잠실역점|방이점|송파점|석촌점|잠실새내점|잠실본점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const hasRegion = /(잠실|방이|송파|석촌|롯데월드|올림픽공원)/.test(name)
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
      if (c >= 10) { clearInterval(t); setTimeout(onDone, 300) }
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
// ── 모바일 QR 인식 안내 (WarnModal/UsageModal 공용) ─────────
function WarnQrGuide() {
  const [show, setShow] = React.useState(false)
  function saveQR() {
    const a = document.createElement('a')
    a.href = '/toss-qr.png'; a.download = 'toss-qr.png'
    a.style.display = 'none'; document.body.appendChild(a)
    a.click(); document.body.removeChild(a)
  }
  return (
    <>
      <button onClick={()=>setShow(v=>!v)}
        style={{ fontSize:'.68rem',color:'var(--primary)',background:'none',border:'none',cursor:'pointer',marginTop:4,textDecoration:'underline',opacity:.8,display:'block',width:'100%' }}>
        📲 모바일에서 QR 저장·인식하는 법 {show ? '▲' : '▼'}
      </button>
      {show && (
        <div style={{ marginTop:8,padding:'12px 14px',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:12,textAlign:'left',fontSize:'.72rem',color:'var(--muted)',lineHeight:1.8 }}>
          <strong style={{ color:'var(--text)',display:'block',marginBottom:8 }}>토스앱으로 후원하는 법</strong>
          <button onClick={saveQR}
            style={{ fontSize:'.72rem',padding:'5px 14px',borderRadius:100,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)',cursor:'pointer',marginBottom:8,display:'block',width:'100%' }}>
            📥 QR 이미지 저장 (갤러리)
          </button>
          1. 위 버튼으로 QR 이미지 저장<br/>
          2. 토스앱 열기 → 하단 <strong style={{ color:'var(--text)' }}>송금</strong> 탭<br/>
          3. 우측 상단 <strong style={{ color:'var(--text)' }}>QR 아이콘</strong> 탭<br/>
          4. 카메라 화면 하단 <strong style={{ color:'var(--text)' }}>갤러리에서 불러오기</strong><br/>
          5. 저장한 QR 이미지 선택 → 후원 완료 🎉<br/>
          <span style={{ fontSize:'.65rem',opacity:.6,marginTop:4,display:'block' }}>
            * 기본 카메라앱 → QR인식 → 갤러리불러오기도 가능해요
          </span>
        </div>
      )}
    </>
  )
}

function WarnModal({ count, onConfirm, onCancel }) {
  const is4th = count >= 4
  return (
    <div style={{ position:'fixed',inset:0,zIndex:400,background:'rgba(0,0,0,.85)',backdropFilter:'blur(10px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px' }}
      onClick={e=>{ if(e.target===e.currentTarget) onCancel() }}>
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
        {/* 절약 모드 공지 */}
        <div style={{ fontSize:'.74rem',padding:'8px 12px',background:'rgba(245,200,66,.08)',border:'1px solid rgba(245,200,66,.25)',borderRadius:10,color:'#f5c842',marginBottom:8,lineHeight:1.6 }}>
          ⚡ {count >= 4
            ? '토큰 절약 모드 — 추천 설명이 짧아져요'
            : '토큰 절약 모드 진입 — 이번 검색부터 추천 퀄리티가 다소 낮아질 수 있어요'
          }
        </div>
        {/* 토스 QR */}
        <div style={{ background:'#fff',borderRadius:14,padding:14,marginBottom:8,display:'inline-block',boxShadow:'0 2px 12px rgba(0,0,0,.15)' }}>
          <img src="/toss-qr.png" alt="토스 후원 QR" style={{ width:110,height:110,display:'block' }} />
        </div>
        <div style={{ fontSize:'.7rem',color:'var(--muted)',marginBottom:4 }}>토스앱으로 스캔하면 개발자가 국밥을 먹어요</div>
        <div style={{ marginBottom:16 }}>
          <WarnQrGuide />
        </div>
        <div style={{ display:'flex',flexDirection:'column',gap:8 }}>
          <button onClick={onConfirm} style={{ padding:'13px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.9rem',fontWeight:700,cursor:'pointer' }}>
            {is4th ? '그래도 검색할게요 (이번 포함 1회 남음 🙏)' : '그래도 검색할게요'}
          </button>
          <button onClick={onCancel} style={{ padding:'13px',borderRadius:12,background:'var(--surface2)',color:'var(--muted)',border:'1px solid var(--border)',fontSize:'.88rem',cursor:'pointer' }}>
            🎲 랜덤으로 할게요 (무료)
          </button>
        </div>
      </div>
    </div>
  )
}

// ── 사용량 뱃지 클릭 팝업 ───────────────────────────────────
function UsageModal({ used, limit, warn, onClose }) {
  const isFull = used >= limit
  const isWarn = used >= warn - 1
  return (
    <div onClick={e=>{ if(e.target===e.currentTarget) onClose() }}
      style={{ position:'fixed',inset:0,zIndex:400,background:'rgba(0,0,0,.85)',backdropFilter:'blur(10px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px' }}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:24,padding:'32px 24px',maxWidth:340,width:'100%',textAlign:'center',boxShadow:'0 24px 64px rgba(0,0,0,.7)' }}>
        <div style={{ fontSize:'3rem',marginBottom:10 }}>{isFull ? '🫙' : isWarn ? '⚠️' : '✨'}</div>
        <div style={{ fontSize:'1.05rem',fontWeight:900,color:'var(--text)',marginBottom:8 }}>
          {isFull ? 'AI 검색 소진' : `오늘 AI 검색 ${used} / ${limit}회`}
        </div>
        <div style={{ fontSize:'.82rem',color:'var(--muted)',marginBottom:18,lineHeight:1.7 }}>
          {isFull
            ? <>자정이 지나면 다시 <strong style={{color:'var(--primary)'}}>{limit}회</strong> 충전돼요 🌙<br/>그 동안 <strong style={{color:'var(--primary)'}}>랜덤 추천</strong>을 이용해보세요!</>
            : isWarn
            ? <>AI 검색 잔여 <strong style={{color:'#f5c842'}}>{limit - used}회</strong>. 아껴써요 🥲<br/><span style={{fontSize:'.75rem',opacity:.75}}>후원하면 개발자가 국밥을 먹어요 🍜</span></>
            : <>잔여 <strong style={{color:'var(--primary)'}}>{limit - used}회</strong> 남았어요.<br/><span style={{fontSize:'.75rem',opacity:.75}}>AI 검색은 매 요청마다 서버 비용이 발생해요.</span></>
          }
        </div>
        {/* 토스 QR */}
        <div style={{ background:'#fff',borderRadius:14,padding:12,marginBottom:8,display:'inline-block',boxShadow:'0 2px 12px rgba(0,0,0,.15)' }}>
          <img src="/toss-qr.png" alt="토스 후원 QR" style={{ width:110,height:110,display:'block' }} />
        </div>
        <div style={{ fontSize:'.7rem',color:'var(--muted)',marginBottom:4 }}>토스앱으로 스캔하면 개발자가 국밥을 먹어요</div>
        <div style={{ marginBottom:16 }}>
          <WarnQrGuide />
        </div>
        <button onClick={onClose}
          style={{ width:'100%',padding:'11px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.88rem',fontWeight:700,cursor:'pointer' }}>
          닫기
        </button>
        <div style={{ fontSize:'.68rem',color:'var(--muted)',marginTop:8,opacity:.6 }}>탭 밖을 누르면 닫혀요</div>
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

function LimitModal({ onClose }) {
  const [showMoGuide, setShowMoGuide] = React.useState(false)

  function saveQR() {
    const link = document.createElement('a')
    link.href = '/toss-qr.png'
    link.download = 'toss-qr.png'
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div style={{ position:'fixed',inset:0,zIndex:400,background:'rgba(0,0,0,.88)',backdropFilter:'blur(12px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px' }}
      onClick={e=>{ if(e.target===e.currentTarget) onClose() }}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:24,padding:'32px 24px',maxWidth:360,width:'100%',textAlign:'center',boxShadow:'0 24px 80px rgba(0,0,0,.8)',maxHeight:'90vh',overflowY:'auto' }}>

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
          토스앱으로 스캔하면 개발자가 국밥을 먹어요
        </div>

        {/* 모바일 QR 저장 버튼 */}
        <div style={{ marginBottom:16 }}>
          {/* 모바일에서 QR 인식 방법 토글 */}
          <button onClick={()=>setShowMoGuide(v=>!v)}
            style={{ fontSize:'.68rem',color:'var(--primary)',background:'none',border:'none',cursor:'pointer',marginTop:4,textDecoration:'underline',opacity:.8 }}>
            📲 모바일에서 QR 저장·인식하는 법 {showMoGuide ? '▲' : '▼'}
          </button>
          {showMoGuide && (
            <div style={{ marginTop:8,padding:'12px 14px',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:12,textAlign:'left',fontSize:'.72rem',color:'var(--muted)',lineHeight:1.8 }}>
              <strong style={{ color:'var(--text)',display:'block',marginBottom:8 }}>토스앱으로 후원하는 법</strong>
              <button onClick={saveQR}
                style={{ fontSize:'.72rem',padding:'5px 14px',borderRadius:100,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)',cursor:'pointer',marginBottom:8,display:'block',width:'100%' }}>
                📥 QR 이미지 저장 (갤러리)
              </button>
              1. 위 버튼으로 QR 이미지 저장<br/>
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


// ── 데이터 없는 메뉴 안내 모달 ─────────────────────────────
function NoDataModal({ menuKeyword, onContinue, onClose }) {
  return (
    <div style={{ position:'fixed',inset:0,zIndex:500,background:'rgba(0,0,0,.85)',backdropFilter:'blur(12px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px' }}
      onClick={e=>{ if(e.target===e.currentTarget) onClose() }}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:24,padding:'32px 24px',maxWidth:340,width:'100%',textAlign:'center',boxShadow:'0 24px 64px rgba(0,0,0,.7)' }}>
        <div style={{ fontSize:'3.2rem',marginBottom:12 }}>🔍</div>
        <div style={{ fontSize:'1rem',fontWeight:900,color:'var(--text)',marginBottom:8,lineHeight:1.4 }}>
          아직 v0.1이에요
        </div>
        <div style={{ fontSize:'.86rem',color:'var(--muted)',marginBottom:6,lineHeight:1.75 }}>
          <strong style={{ color:'var(--primary)' }}>{menuKeyword}</strong> 데이터가 아직 부족해요.{' '}
          API 연동 전까지는 데이터가 제한적이랍니다 🙏
        </div>
        <div style={{ fontSize:'.78rem',padding:'10px 14px',background:'rgba(108,99,255,.07)',border:'1px solid rgba(108,99,255,.2)',borderRadius:10,color:'var(--accent)',marginBottom:20,lineHeight:1.6 }}>
          연관된 매장들을 대신 보여드릴게요
        </div>
        <div style={{ display:'flex',flexDirection:'column',gap:8 }}>
          <button onClick={onContinue}
            style={{ padding:'13px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.9rem',fontWeight:700,cursor:'pointer' }}>
            연관 매장 보기
          </button>
          <button onClick={onClose}
            style={{ padding:'12px',borderRadius:12,background:'var(--surface2)',color:'var(--muted)',border:'1px solid var(--border)',fontSize:'.86rem',cursor:'pointer' }}>
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}

// ── 이미 확정했을 때 차단 모달 ───────────────────────────────────
function AlreadyPickedModal({ restaurantName, onGoAnyway, onClose }) {
  const [showQr, setShowQr] = React.useState(false)
  const [showMoGuide, setShowMoGuide] = React.useState(false)
  function saveQR() {
    const a = document.createElement('a')
    a.href = '/toss-qr.png'; a.download = 'toss-qr.png'
    a.style.display = 'none'; document.body.appendChild(a)
    a.click(); document.body.removeChild(a)
  }
  return (
    <div style={{ position:'fixed',inset:0,zIndex:500,background:'rgba(0,0,0,.88)',backdropFilter:'blur(12px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 16px' }}
      onClick={e=>{ if(e.target===e.currentTarget) onClose() }}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:24,padding:'36px 28px',maxWidth:360,width:'100%',textAlign:'center',boxShadow:'0 24px 64px rgba(0,0,0,.7)' }}>
        {!showQr ? (
          <>
            <div style={{ fontSize:'3.6rem',marginBottom:14 }}>🤦</div>
            <div style={{ fontSize:'1.1rem',fontWeight:900,color:'var(--text)',marginBottom:10,lineHeight:1.4 }}>
              이미 정했잖아요
            </div>
            <div style={{ fontSize:'.88rem',color:'var(--muted)',marginBottom:20,lineHeight:1.8,whiteSpace:'pre-line' }}>
              <strong style={{ color:'var(--text)' }}>{restaurantName}</strong>{'\n'}
              이미 선택했어요. 더 고민해봤자 시간낭비예요.{'\n'}
              지금 당장 가세요.
            </div>
            <div style={{ display:'flex',flexDirection:'column',gap:8 }}>
              <button onClick={()=>setShowQr(true)}
                style={{ padding:'13px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.9rem',fontWeight:700,cursor:'pointer' }}>
                ⏰ 시간낭비하러 가기
              </button>
              <button onClick={onClose}
                style={{ padding:'13px',borderRadius:12,background:'var(--surface2)',color:'var(--muted)',border:'1px solid var(--border)',fontSize:'.88rem',cursor:'pointer' }}>
                닫기
              </button>
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize:'3.2rem',marginBottom:12 }}>⏳</div>
            <div style={{ fontSize:'1rem',fontWeight:900,color:'var(--text)',marginBottom:8,lineHeight:1.4 }}>
              시간 부자세요?
            </div>
            <div style={{ fontSize:'.84rem',color:'var(--muted)',marginBottom:16,lineHeight:1.75 }}>
              저도 공유해주시지 않겠어요?{'\n'}
              AI 한 번 쓸 때마다 개발자 통장에서{'\n'}
              조금씩 빠져나가고 있답니다 💸
            </div>
            <div style={{ background:'#fff',borderRadius:14,padding:14,marginBottom:6,display:'inline-block',boxShadow:'0 2px 12px rgba(0,0,0,.15)' }}>
              <img src="/toss-qr.png" alt="토스 후원 QR" style={{ width:120,height:120,display:'block' }} />
            </div>
            <div style={{ fontSize:'.7rem',color:'var(--muted)',marginBottom:4 }}>토스앱으로 스캔하면 개발자가 국밥을 먹어요</div>
            <div style={{ marginBottom:16 }}>
              <button onClick={()=>setShowMoGuide(v=>!v)}
                style={{ fontSize:'.68rem',color:'var(--primary)',background:'none',border:'none',cursor:'pointer',marginTop:4,textDecoration:'underline',opacity:.8,display:'block',width:'100%' }}>
                📲 모바일에서 QR 저장·인식하는 법 {showMoGuide ? '▲' : '▼'}
              </button>
              {showMoGuide && (
                <div style={{ marginTop:8,padding:'12px 14px',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:12,textAlign:'left',fontSize:'.72rem',color:'var(--muted)',lineHeight:1.8 }}>
                  <strong style={{ color:'var(--text)',display:'block',marginBottom:8 }}>토스앱으로 후원하는 법</strong>
                  <button onClick={saveQR}
                    style={{ fontSize:'.72rem',padding:'5px 14px',borderRadius:100,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)',cursor:'pointer',marginBottom:8,display:'block',width:'100%' }}>
                    📥 QR 이미지 저장 (갤러리)
                  </button>
                  1. 위 버튼으로 QR 이미지 저장<br/>
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
            <div style={{ display:'flex',gap:8 }}>
              <button onClick={onGoAnyway}
                style={{ flex:1,padding:'12px',borderRadius:12,background:'var(--surface2)',color:'var(--muted)',border:'1px solid var(--border)',fontSize:'.85rem',cursor:'pointer' }}>
                그래도 다시 검색
              </button>
              <button onClick={onClose}
                style={{ flex:1,padding:'12px',borderRadius:12,background:'var(--primary)',color:'#fff',border:'none',fontSize:'.85rem',fontWeight:700,cursor:'pointer' }}>
                닫기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ── 룰렛 모달 ─────────────────────────────────────────────────
function RouletteModal({ results, restaurants, onPick, onClose }) {
  const [cur, setCur] = React.useState(0)
  const [done, setDone] = React.useState(false)
  const [finalIdx, setFinalIdx] = React.useState(null)
  const names = results.map(r => r.restaurantName)

  React.useEffect(() => {
    // 룰렛: 시각적 정지 위치 = 결과 (step 기반)
    const picked = Math.floor(Math.random() * names.length)
    const baseLaps = 4 + Math.floor(Math.random() * 3)   // 4~6바퀴
    const totalSteps = baseLaps * names.length + picked   // picked에 정확히 착지
    let step = 0
    let frame

    function spin() {
      step++
      const progress = step / totalSteps
      setCur(step % names.length)
      if (step >= totalSteps) {
        setFinalIdx(picked); setDone(true); return
      }
      // 초반 빠르게 → 후반 점점 느리게 (총 ~5초)
      const ease = progress < 0.5
        ? 50
        : 50 + Math.pow((progress - 0.5) / 0.5, 2) * 2000
      frame = setTimeout(spin, ease)
    }
    frame = setTimeout(spin, 50)
    return () => clearTimeout(frame)
  }, [])

  const pickedRec = finalIdx !== null ? results[finalIdx] : null
  const pickedR = pickedRec
    ? (restaurants.find(x=>x.name===pickedRec.restaurantName)
    || restaurants.find(x=>pickedRec.restaurantName?.includes(x.name)||x.name?.includes(pickedRec.restaurantName)))
    : null

  return (
    <div style={{ position:'fixed',inset:0,background:'rgba(0,0,0,.85)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',padding:20 }}
      onClick={done ? onClose : undefined}>
      <div style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:20,padding:'28px 24px',maxWidth:380,width:'100%',textAlign:'center',boxShadow:'0 24px 64px rgba(0,0,0,.8)' }}
        onClick={e=>e.stopPropagation()}>
        <div style={{ fontSize:'2rem',marginBottom:8 }}>🎰</div>
        <div style={{ fontSize:'1rem',fontWeight:800,marginBottom:20,color:'var(--text)' }}>
          {done ? '오늘은 여기로 결정!' : '고르는 중...'}
        </div>

        {/* 슬롯 카드들 */}
        <div style={{ display:'flex',flexDirection:'column',gap:8,marginBottom:20 }}>
          {names.map((name,i) => {
            const isActive = cur === i
            const isFinal = done && finalIdx === i
            return (
              <div key={i} style={{
                padding:'12px 16px', borderRadius:12,
                border: isFinal ? '2px solid var(--primary)' : isActive ? '2px solid var(--accent)' : '1px solid var(--border)',
                background: isFinal ? 'rgba(255,107,53,.12)' : isActive ? 'rgba(108,99,255,.1)' : 'var(--surface2)',
                transition: 'all .08s',
                transform: isActive && !done ? 'scale(1.03)' : 'scale(1)',
                opacity: done && !isFinal ? 0.4 : 1,
                cursor: done && isFinal ? 'pointer' : 'default',
              }}
              onClick={ done && isFinal ? ()=>onPick(finalIdx) : undefined }
            >
                <div style={{ fontSize:'.9rem',fontWeight:700,color: isFinal?'var(--primary)':isActive?'var(--accent)':'var(--text)' }}>
                  {isFinal ? '🎯 ' : isActive && !done ? '▶ ' : ''}{name}
                </div>
                {isFinal && pickedRec?.reviewHighlight && (
                  <div style={{ fontSize:'.75rem',color:'var(--muted)',marginTop:4 }}>
                    💬 {pickedRec.reviewHighlight}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {done && pickedR && (
          <div style={{ display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap' }}>
            <button onClick={()=>{ onPick(finalIdx) }}
              style={{ padding:'10px 20px',borderRadius:10,background:'var(--primary)',color:'#fff',fontSize:'.88rem',fontWeight:700,border:'none',cursor:'pointer' }}>
              ✅ 여기로 결정
            </button>
            <a href={`https://map.naver.com/v5/search/${encodeURIComponent(pickedR.name + ' 잠실')}`}
              target="_blank" rel="noopener noreferrer"
              style={{ padding:'10px 20px',borderRadius:10,background:'var(--surface2)',border:'1px solid var(--border)',color:'var(--muted)',fontSize:'.88rem',fontWeight:700,textDecoration:'none' }}>
              📍 지도 보기
            </a>
          </div>
        )}
        {done && pickedRec?._external && (
          <div style={{ display:'flex',gap:8,justifyContent:'center',marginTop:8 }}>
            <a href={`https://map.naver.com/v5/search/${encodeURIComponent(pickedRec.restaurantName + ' 잠실')}`}
              target="_blank" rel="noopener noreferrer"
              style={{ padding:'10px 20px',borderRadius:10,background:'var(--primary)',color:'#fff',fontSize:'.88rem',fontWeight:700,textDecoration:'none' }}>
              ✅ 지도에서 확인
            </a>
          </div>
        )}
        {!done && (
          <button onClick={onClose}
            style={{ marginTop:4,padding:'8px 20px',borderRadius:10,background:'var(--surface2)',border:'1px solid var(--border)',color:'var(--muted)',fontSize:'.82rem',cursor:'pointer' }}>
            취소
          </button>
        )}
        {done && (
          <button onClick={onClose}
            style={{ display:'block',width:'100%',marginTop:10,padding:'8px',borderRadius:10,background:'none',border:'none',color:'var(--muted)',fontSize:'.78rem',cursor:'pointer' }}>
            닫기
          </button>
        )}
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
  const [selectedCat,setSelectedCat]= useState(null)   // 카테고리 필터
  const [loading,    setLoading]   = useState(false)
  const [dicing,     setDicing]    = useState(false)
  const [pendingRnd, setPendingRnd]= useState(null)
  const [results,    setResults]   = useState(null)
  const [error,      setError]     = useState(null)  // null | string
  const [warnCount,  setWarnCount] = useState(null)
  const [showLimit,  setShowLimit] = useState(false)
  const [showQuota,  setShowQuota] = useState(false)
  const [showUsage,  setShowUsage] = useState(false)
  const [showEaster, setShowEaster] = useState(false)
  const [hintIdx,    setHintIdx]   = useState(0)
  const [usedToday,  setUsedToday] = useState(0)
  const [isMounted,   setIsMounted]  = useState(false)
  const excludedRef   = useRef(new Set())
  const skipDbCheckRef = useRef(false)  // noDataMenu 재진입 방지
  const resultsRef    = useRef(null)
  // ── 픽·룰렛 state ──
  const [pickedIdx,   setPickedIdx]   = useState(null)   // 오늘의 픽 강조 인덱스
  const [showRoulette,setShowRoulette]= useState(false)  // 룰렛 모달
  const [showAlreadyPicked, setShowAlreadyPicked] = useState(false) // 확정 후 차단 모달
  const [showCatFilter, setShowCatFilter] = useState(false) // 카테고리 펼침/닫힘
  const [noDataMenu, setNoDataMenu] = useState(null) // DB에 없는 메뉴 감지 팝업
  const [rouletteIdx, setRouletteIdx] = useState(0)      // 룰렛 현재 하이라이트
  const [rouletteDone,setRouletteDone]= useState(false)  // 룰렛 완료
  const [showIdleBar, setShowIdleBar] = useState(false)  // 30초 idle 바
  const [idleCount,   setIdleCount]   = useState(30)     // 카운트다운
  const [idlePaused,  setIdlePaused]  = useState(false)  // 일시정지
  const idleTimerRef  = useRef(null)
  const idleBarRef    = useRef(null)
  const idlePausedRef = useRef(false)

  useEffect(() => {
    setUsedToday(getUsageCount())
    setIsMounted(true)
    const t = setInterval(() => setHintIdx(i => (i + 1) % HINTS.length), 3200)
    // ── 시크릿 모드 감지 (다중 방법 조합) ─────────────────────
    let easterTimer = null
    async function detectIncognito() {
      let score = 0  // 신호 점수 합산 — 2점 이상이면 시크릿으로 판정

      // 방법 1: storage quota (시크릿은 120MB~1GB로 제한됨)
      try {
        if (navigator.storage?.estimate) {
          const { quota } = await navigator.storage.estimate()
          if (quota < 1.2 * 1024 * 1024 * 1024) score += 2  // 1.2GB 미만
        }
      } catch {}

      // 방법 2: FileSystem API (시크릿에서 막힘 — 구형 Chrome/Safari)
      try {
        await new Promise((res, rej) => {
          const req = window.webkitRequestFileSystem
            ? window.webkitRequestFileSystem(0, 0, res, rej)
            : res()
        })
      } catch { score += 2 }

      // 방법 3: IndexedDB 차단 여부 (Safari 시크릿)
      try {
        await new Promise((res, rej) => {
          const r = indexedDB.open('__gm_probe__')
          r.onerror = rej
          r.onsuccess = e => { e.target.result.close(); res() }
        })
      } catch { score += 2 }

      // 방법 4: localStorage 쓰기 가능 여부
      // 시크릿이어도 대부분 쓰기는 되므로 점수 낮게
      try {
        const k = '__gm_ls_probe__'
        localStorage.setItem(k, '1')
        localStorage.removeItem(k)
      } catch { score += 1 }

      // 방법 5: navigator.webdriver (자동화 도구 → 점수 제외)
      if (navigator.webdriver) return false

      // 방법 6: 세션 내 히스토리 길이 (시크릿 첫 방문은 거의 항상 1)
      if (window.history.length <= 1) score += 1

      // 방법 7: connection.saveData / effectiveType 힌트
      try {
        const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
        if (!conn) score += 0  // 정보 없으면 중립
      } catch {}

      return score >= 2
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

  // ── idle 타이머: results 생기면 30초 후 카운트다운 바 표시 ──
  function startIdleCountdown() {
    idlePausedRef.current = false
    setIdlePaused(false)
    idleTimerRef.current = setInterval(() => {
      if (idlePausedRef.current) return
      setIdleCount(prev => {
        if (prev <= 1) {
          clearInterval(idleTimerRef.current)
          setShowIdleBar(false)
          setShowRoulette(true)
          return 30
        }
        return prev - 1
      })
    }, 1000)
  }

  useEffect(() => {
    if (idleTimerRef.current) { clearInterval(idleTimerRef.current); clearTimeout(idleBarRef.current) }
    if (!results || pickedIdx !== null || showRoulette) return
    setShowIdleBar(false); setIdleCount(30); idlePausedRef.current = false; setIdlePaused(false)
    // 3초 뒤부터 카운트다운 바 표시
    idleBarRef.current = setTimeout(() => {
      setShowIdleBar(true)
      startIdleCountdown()
    }, 3000)
    return () => {
      if (idleTimerRef.current) clearInterval(idleTimerRef.current)
      if (idleBarRef.current) clearTimeout(idleBarRef.current)
    }
  }, [results])

  // 사용자 인터랙션 감지 → idle 타이머 리셋 (IdleBar 표시 중엔 무시)
  function resetIdle() {
    if (!results || pickedIdx !== null || showRoulette) return
    if (showIdleBar) return  // ← IdleBar 표시 중엔 마우스로 사라지지 않음
    if (idleTimerRef.current) clearInterval(idleTimerRef.current)
    if (idleBarRef.current) clearTimeout(idleBarRef.current)
    setShowIdleBar(false); setIdleCount(30); idlePausedRef.current = false; setIdlePaused(false)
    idleBarRef.current = setTimeout(() => {
      setShowIdleBar(true)
      startIdleCountdown()
    }, 3000)
  }

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
    let base = restaurants
    // 카테고리 필터
    if (cat) {
      base = base.filter(r =>
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
        ? restaurants.filter(r=>cat.cats.some(c=>r.cat?.includes(c))||(cat.tags||[]).some(t=>r.tags?.includes(t)))
        : restaurants
    }
    const pool = filterExcluded(base)
    const picks = [...pool].sort(() => Math.random()-0.5).slice(0, 4)
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
    setPickedIdx(null); setShowIdleBar(false); setIdleCount(30); setShowRoulette(false); setRouletteDone(false)
    setPendingRnd(res); setDicing(true)
  }

  function onDiceFinish() {
    setDicing(false)
    if (pendingRnd) { markShown(pendingRnd); setResults(pendingRnd); setPendingRnd(null) }
    scrollTo()
  }

  // ── AI 추천 (횟수 체크 포함) ──
  function handleNoDataContinue() {
    skipDbCheckRef.current = true
    setNoDataMenu(null)
    setTimeout(() => getRecommendations(), 0)  // state flush 후 실행
  }

  function handleRecommendClick() {
    if (!ctx && !weather && moods.length===0) { getRandom(null); return }
    const isAdmin = localStorage.getItem('gm-admin-unlock') === '1'
    const count = getUsageCount()
    if (!isAdmin && count >= DAILY_LIMIT) { setShowLimit(true); return }
    if (!isAdmin && count >= DAILY_WARN - 1) { setWarnCount(count + 1); return }
    getRecommendations()
  }

  function confirmFromWarn() {
    setWarnCount(null)
    const isAdmin = localStorage.getItem('gm-admin-unlock') === '1'
    const count = getUsageCount()
    if (!isAdmin && count >= DAILY_LIMIT) { setShowLimit(true); return }
    getRecommendations()
  }
  function cancelFromWarn()  { setWarnCount(null); getRandom(null) }

  async function getRecommendations() {
    setLoading(true); setError(null); setResults(null)

    try {
      const mm = detectMenu(ctx, moods, weather)
      const pf = parsePriceFilter(ctx)
      const rf = parseRatingFilter(ctx)
      let base = restaurants
      // 카테고리 선택이 최우선 필터 — mm(자연어)보다 명시적 선택이 우선
      if (selectedCat) {
        base = base.filter(r =>
          (selectedCat.cats||[]).some(c => r.cat?.includes(c)) ||
          (selectedCat.tags||[]).some(t => r.tags?.includes(t))
        )
        if (base.length < 5) base = restaurants  // 풀 너무 작으면 완화
      } else if (mm) {
        const mmCats = mm.cats || []
        base = base.filter(r => mmCats.some(c => (r.cat||[]).includes(c)))
        // 필터 결과가 너무 적으면 type으로도 확장
        if (base.length < 4) {
          const typeBase = restaurants.filter(r => mmCats.some(c => (r.type||'').includes(c)))
          base = [...new Map([...base,...typeBase].map(r=>[r.name,r])).values()]
        }
      }
      if (pf) base = filterByPrice(base, pf)
      if (rf) base = filterByRating(base, rf)

      // ── 특정 메뉴 키워드가 rv/type/tags에 직접 매칭되는 식당이 2개 미만이면 외부검색 ──
      // 카테고리로만 매핑된 것과 구분 (예: "사케" → 이자카야 31개 있어도 사케 직접 언급은 2개뿐)
      function extractSpecificMenu(text) {
        if (!text) return null
        const m = text.match(/사케|라멘|우동|소바|돈부리|오마카세|스시|초밥|마라탕|훠궈|양꼬치|딤섬|파스타|리조또|스테이크|타코|버거|샐러드|비빔밥|순두부|곱창|막창|홍어|파전|빈대떡|냉면|밀면|칼국수|수제비|설렁탕|곰탕|삼계탕|보쌈|족발|갈비찜|제육|쭈꾸미|낙지|오징어|아구찜|간장게장|돼지국밥|순대국|해장국|장어|메로|연어|방어|참치|문어|게장|랍스터|타코야끼|교자|만두|탕탕이|수육|편육|삼계탕|오리|전복|굴|꼬막|대하|생선회|회덮밥/)
        return m ? m[0] : null
      }
      const specificMenu = extractSpecificMenu(ctx)
      const directMatchCount = specificMenu
        ? restaurants.filter(r =>
            r.rv?.some(v => v.includes(specificMenu)) ||
            r.type?.includes(specificMenu) ||
            r.tags?.some(t => t.includes(specificMenu))
          ).length
        : 99
      // DB 미보유 메뉴 감지: 구체적 메뉴 검색인데 직접 매칭 < 2개
      const isDbMissing = specificMenu && directMatchCount < 3
      // isDbMissing → 내부 연관검색으로 대체 (외부검색/팝업 제거)
      // ── 내부 DB 연관 검색 — 후보 부족 시 키워드 확장으로 처리 ──
      if (base.length < 3) {
        const expanded = ctx ? ctx.toLowerCase().split(/[\s,]+/).filter(w => w.length > 1) : []
        const synExpand = [...expanded]
        const SYNS = {
          '국밥':['해장국','설렁탕','곰탕','순대국','뼈해장'],
          '고기':['구이','삼겹살','갈비','한우','등심','목살'],
          '이자카야':['야끼토리','사케','하이볼','안주','일본술'],
          '중식':['짜장','짬뽕','탕수육','마라탕','훠궈','양꼬치'],
          '양식':['파스타','피자','이탈리안','리조또'],
          '치킨':['후라이드','통닭','닭강정','양념치킨'],
          '야장':['포차','포장마차','노천'],
          '해장':['숙취','속풀이','다음날'],
          '혼밥':['혼자','1인'],
          '데이트':['커플','둘이','연인'],
          '회식':['단체','팀식사','부서'],
          '매운':['얼큰','마라','불닭','화끈'],
          '가성비':['저렴','싸게','착한가격'],
        }
        for (const [key, vals] of Object.entries(SYNS)) {
          if (vals.some(v => synExpand.some(w => w.includes(v.toLowerCase())))) synExpand.push(key)
          if (synExpand.some(w => w.includes(key))) synExpand.push(...vals.map(v => v.toLowerCase()))
        }
        const expanded2 = [...new Set(synExpand)]
        const fuzzyBase = restaurants.filter(r => {
          const blob = [r.name, r.type, ...(r.tags||[]), ...(r.cat||[]), ...(r.scene||[])].join(' ').toLowerCase()
          return expanded2.some(kw => blob.includes(kw))
        })
        base = fuzzyBase.length >= 3 ? fuzzyBase : restaurants
      }

      if (base.length < 5) base = restaurants

      // 이전 결과 제외 후 스코어링
      const pool = filterExcluded(base)
      // top20 스코어링 후 → 매번 다른 4개 뽑기 (로테이션으로 다양성 확보)
      const scored = preScore(ctx, moods, weather, pool, selectedCat, mm)
      const top20 = scored.slice(0, 20)
      // 상위 3개 고정 + 랜덤 3개 = 6개 후보 → AI가 4개 선택
      const top5 = [...top20.slice(0,3), ...[...top20.slice(3)].sort(()=>Math.random()-0.5).slice(0,3)].sort(()=>Math.random()-0.5).slice(0,5)
      // 후보 포맷: 식당별 블록으로 분리 — rv 50자, scene/addr 포함
      const compact = top5.map((r, idx) => {
        const rv0 = (r.rv||[])[0] ? ' '+(r.rv[0]).replace(/"/g,'\u2019').slice(0,20) : ''
        return `[${idx+1}]${r.name}|${r.type}|${r.priceRange||'?'}원|태그:${(r.tags||[]).slice(0,3).join(' ')}${rv0}`
      }).join('\n')
      const ctx_full = (ctx||'').slice(0, 120)
      const mood_str = moods.join(', ')
      const filter_str = [weather&&`날씨:${weather}`, mood_str&&`기분:${mood_str}`, selectedCat&&`카테고리:${selectedCat.name}`].filter(Boolean).join(' / ')
const usageCnt = getUsageCount()
            const prompt = [
        '잠실 맛집 추천. 검색자의 진짜 의도를 파악해서 후보 중 딱 맞는 3곳 골라줘. 단순 나열 금지—상황과 감정에 맞게 큐레이션.',
        '요청:'+(ctx_full||'없음')+(filter_str?' ('+filter_str+')':''),
        '후보:',
        compact,
        'JSON만. 정확히 3개. reason: 의도 공감+이 식당인 이유 2문장 80~100자. highlight 8자이내.',
        '{"recommendations":[{"rank":1,"restaurantName":"...","reason":"...","reviewHighlight":"..."},{"rank":2,...},{"rank":3,...}]}'
      ].join('\n')

      const ctrl = new AbortController()
      const fetchTimer = setTimeout(() => ctrl.abort(), 20000)
      let res
      try {
        res = await fetch('/api/recommend', {
          method:'POST', headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ prompt, usageCount: usageCnt }),
          signal: ctrl.signal,
        })
      } catch (fetchErr) {
        clearTimeout(fetchTimer)
        if (fetchErr.name === 'AbortError') {
          setLoading(false); setError('응답 시간이 초과됐어요. 다시 시도해주세요 ⏱'); return
        }
        throw fetchErr
      }
      clearTimeout(fetchTimer)

      // HTTP 오류 체크
      if (!res.ok) {
        const errData = await res.json().catch(()=>({}))
        console.error('API HTTP error', res.status, errData)
        const msg = errData.detail || errData.error || `서버 오류 (${res.status})`
        setLoading(false)
        if (msg === '##QUOTA_EXCEEDED##') { setLoading(false); setShowQuota(true); return }
        // AI가 후보에 없는 메뉴라고 응답 → NoDataModal 전환
        if (msg.includes('JSON 블록 없음') && (specificMenu || ctx)) {
          skipDbCheckRef.current = true
          setNoDataMenu(specificMenu || ctx.slice(0, 10))
          setLoading(false); return
        }
        setLoading(false); setError(msg); return
      }

      const data = await res.json()
      setLoading(false)

      // 유효한 추천 결과 확인
      const recs = Array.isArray(data.recommendations) ? data.recommendations : []
      if (recs.length === 0) {
        console.error('Empty recommendations:', data)
        setLoading(false); setError(data.error || '추천 결과가 비어있어요'); return
      }

      // 실제 DB에 있는 식당인지 검증 (매칭 실패 제거)
      // DB에 있는 식당은 정상 처리, 없는 식당은 _notInDB 플래그로 네이버지도 링크 사용
      const matched = recs
        .filter(rec => rec.restaurantName && rec.restaurantName !== 'undefined')
        .map(rec => {
          const found = restaurants.find(x => x.name === rec.restaurantName)
                     || restaurants.find(x => rec.restaurantName?.includes(x.name) || x.name?.includes(rec.restaurantName))
          return found ? rec : { ...rec, _notInDB: true }
        })
      if (matched.length === 0) {
        setLoading(false); setError('추천 결과를 가져오지 못했어요. 다시 시도해주세요.'); return
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
      setPickedIdx(null); setShowIdleBar(false); setIdleCount(30); setShowRoulette(false); setRouletteDone(false)
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
      {showQuota  && <QuotaModal onClose={() => { setShowQuota(false); getRandom(null) }} />}
      {noDataMenu && <NoDataModal
        menuKeyword={noDataMenu}
        onContinue={handleNoDataContinue}
        onClose={()=>setNoDataMenu(null)}
      />}
      {showAlreadyPicked && <AlreadyPickedModal
        restaurantName={pickedIdx!==null&&results?.[pickedIdx]?.restaurantName||'선택한 식당'}
        onGoAnyway={()=>{ setShowAlreadyPicked(false); setPickedIdx(null) }}
        onClose={()=>setShowAlreadyPicked(false)}
      />}
      {showUsage  && <UsageModal used={usedToday} limit={DAILY_LIMIT} warn={DAILY_WARN} onClose={()=>setShowUsage(false)} />}
      {showRoulette && (
        <RouletteModal
          results={results}
          restaurants={restaurants}
          onPick={(idx)=>{ setPickedIdx(idx); setShowRoulette(false) }}
          onClose={()=>{ setShowRoulette(false); setPickedIdx(null) }}
        />
      )}

      <div style={{ padding:'20px 16px' }}>
        {/* 사용 횟수 뱃지 */}
        <div style={{ display:'flex',justifyContent:'flex-end',marginBottom:8 }}>
          <button onClick={()=>setShowUsage(true)} style={{
            fontSize:'.7rem', padding:'3px 10px', borderRadius:100, cursor:'pointer',
            background: !isMounted ? 'var(--surface2)' : usedToday >= DAILY_LIMIT ? '#2a1111' : usedToday >= DAILY_WARN-1 ? '#2a2000' : 'var(--surface2)',
            border: `1px solid ${!isMounted ? 'var(--border)' : usedToday >= DAILY_LIMIT ? '#ff4444' : usedToday >= DAILY_WARN-1 ? '#f5c842' : 'var(--border)'}`,
            color: !isMounted ? 'var(--muted)' : usedToday >= DAILY_LIMIT ? '#ff6666' : usedToday >= DAILY_WARN-1 ? '#f5c842' : 'var(--muted)',
          }}>
            {!isMounted ? '✨ AI 검색' : usedToday >= DAILY_LIMIT ? '🚫 오늘 AI 검색 소진' : `✨ AI 검색 ${usedToday}/${DAILY_LIMIT}회`}
          </button>
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
            <button onClick={()=>setShowCatFilter(v=>!v)}
              style={{ display:'flex',alignItems:'center',gap:6,background:'none',border:'none',cursor:'pointer',padding:0,marginBottom: showCatFilter ? 8 : 0 }}>
              <span style={{ fontSize:'.73rem',color:'var(--muted)' }}>🗂️ 카테고리</span>
              {selectedCat && <span style={{ fontSize:'.68rem',padding:'2px 8px',borderRadius:100,background:'var(--primary)',color:'#fff' }}>{selectedCat.emoji} {selectedCat.name}</span>}
              <span style={{ fontSize:'.65rem',color:'var(--muted)',marginLeft:'auto',opacity:.7 }}>{showCatFilter ? '▲ 닫기' : '▼ 선택'}</span>
            </button>
            {showCatFilter && (
              <div style={{ display:'flex',flexWrap:'wrap',gap:5 }}>
                {CATS.map(cat=>(
                  <button key={cat.slug} onClick={()=>{ setSelectedCat(selectedCat?.slug===cat.slug?null:cat); if(selectedCat?.slug!==cat.slug) setShowCatFilter(false) }}
                    style={{ ...chip(selectedCat?.slug===cat.slug,'var(--primary)'), fontSize:'.72rem' }}>
                    {cat.emoji} {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>


        <div style={{ display:'flex',gap:8 }}>
          <button onClick={()=>{ if(pickedIdx!==null){setShowAlreadyPicked(true);return} handleRecommendClick() }} disabled={loading||dicing} style={{
            flex:1,padding:'13px',borderRadius:10,background:'var(--primary)',
            color:'#fff',border:'none',fontSize:'.95rem',fontWeight:700,
            cursor:(loading||dicing)?'not-allowed':'pointer',opacity:(loading||dicing)?0.7:1,
          }}>✨ AI 추천받기</button>
          <button onClick={()=>{ if(pickedIdx!==null){setShowAlreadyPicked(true);return} getRandom(null) }} disabled={loading||dicing}
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
          <div ref={resultsRef} style={{ marginTop:24, maxWidth:'100%', overflowX:'hidden' }}
            onMouseMove={resetIdle} onClick={resetIdle} onTouchStart={resetIdle}>

            {/* ── idle 카운트다운 바 ── */}
            {showIdleBar && !pickedIdx && !showRoulette && (
              <div style={{ marginBottom:12,padding:'10px 14px',background:'rgba(255,107,53,.07)',border:'1px solid rgba(255,107,53,.2)',borderRadius:10 }}>
                <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:6 }}>
                  <span style={{ fontSize:'.78rem',fontWeight:700,color:'var(--primary)' }}>
                    🎰 {idlePaused ? `${idleCount}초에서 멈춤` : `${idleCount}초 후 대신 골라드릴게요`}
                  </span>
                  {idlePaused ? (
                    <button onClick={()=>{
                        idlePausedRef.current = false
                        setIdlePaused(false)
                        startIdleCountdown()
                      }}
                      style={{ fontSize:'.7rem',color:'var(--primary)',background:'rgba(255,107,53,.15)',border:'1px solid rgba(255,107,53,.3)',borderRadius:6,padding:'3px 10px',cursor:'pointer',fontWeight:700 }}>
                      ▶ 카운트다운 시작
                    </button>
                  ) : (
                    <button onClick={()=>{
                        idlePausedRef.current = true
                        setIdlePaused(true)
                        clearInterval(idleTimerRef.current)
                      }}
                      style={{ fontSize:'.7rem',color:'var(--muted)',background:'var(--surface)',border:'1px solid var(--border)',borderRadius:6,padding:'3px 10px',cursor:'pointer' }}>
                      ✋ 괜찮아요
                    </button>
                  )}
                </div>
                <div style={{ height:4,borderRadius:100,background:'var(--border)',overflow:'hidden' }}>
                  <div style={{ height:'100%',borderRadius:100,background: idlePaused ? 'var(--muted)' : 'var(--primary)',
                    width:`${(idleCount/30)*100}%`,transition: idlePaused ? 'none' : 'width 1s linear' }} />
                </div>
                <div style={{ fontSize:'.7rem',color:'var(--muted)',marginTop:5,textAlign:'center' }}>
                  고민된다면 룰렛에 맡겨요 — 지금 바로 돌리려면 <button onClick={()=>{setShowIdleBar(false);if(idleTimerRef.current)clearInterval(idleTimerRef.current);setShowRoulette(true)}} style={{background:'none',border:'none',color:'var(--primary)',fontWeight:700,cursor:'pointer',fontSize:'.7rem'}}>지금 돌리기 →</button>
                </div>
              </div>
            )}

            {/* ── 오늘의 픽 버튼 (결과 있을 때 항상 노출) ── */}
            {!pickedIdx && !showRoulette && (
              <div style={{ display:'flex',gap:8,marginBottom:14,alignItems:'center' }}>
                <button
                  onClick={()=>{
                    if(idleTimerRef.current) clearInterval(idleTimerRef.current)
                    if(idleBarRef.current) clearTimeout(idleBarRef.current)
                    setShowIdleBar(false)
                    setShowRoulette(true)
                  }}
                  style={{ flex:1,padding:'10px',borderRadius:10,background:'rgba(255,107,53,.08)',border:'1px solid rgba(255,107,53,.3)',color:'var(--primary)',fontSize:'.85rem',fontWeight:700,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6 }}>
                  🎰 대신 골라줘
                </button>
                <button
                  onClick={()=>{
                    if(idleTimerRef.current) clearInterval(idleTimerRef.current)
                    if(idleBarRef.current) clearTimeout(idleBarRef.current)
                    setShowIdleBar(false)
                    const idx = Math.floor(Math.random()*results.length)
                    setPickedIdx(idx)
                  }}
                  style={{ flex:1,padding:'10px',borderRadius:10,background:'rgba(108,99,255,.08)',border:'1px solid rgba(108,99,255,.3)',color:'var(--accent)',fontSize:'.85rem',fontWeight:700,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6 }}>
                  🎯 오늘의 픽
                </button>
              </div>
            )}

            {/* ── pickedIdx: 픽 결과 강조 배너 ── */}
            {pickedIdx !== null && (() => {
              const pr = results[pickedIdx]
              const prR = pr && (restaurants.find(x=>x.name===pr.restaurantName)||restaurants.find(x=>pr.restaurantName?.includes(x.name)||x.name?.includes(pr.restaurantName)))
              return pr ? (
                <div style={{ marginBottom:14,padding:'14px 16px',background:'rgba(255,107,53,.1)',border:'2px solid var(--primary)',borderRadius:12 }}>
                  <div style={{ fontSize:'.75rem',color:'var(--muted)',marginBottom:4 }}>🎯 오늘의 픽</div>
                  <div style={{ fontSize:'1rem',fontWeight:800,color:'var(--primary)',marginBottom:6 }}>
                    {prR?.e} {pr.restaurantName}
                  </div>
                  <div style={{ display:'flex',gap:6,flexWrap:'wrap' }}>
                    {prR && (
                      <Link href={`/dinner/jamsil/restaurant/${encodeURIComponent(prR.name)}`}
                        style={{ padding:'7px 16px',borderRadius:8,background:'var(--primary)',color:'#fff',fontSize:'.82rem',fontWeight:700,textDecoration:'none',display:'inline-block' }}>
                        ✅ 여기로 결정
                      </Link>
                    )}
                    {prR && <a href={`https://map.naver.com/v5/search/${encodeURIComponent(prR.name + ' 잠실')}`}
                      target="_blank" rel="noopener noreferrer"
                      style={{ padding:'7px 16px',borderRadius:8,background:'var(--surface2)',border:'1px solid var(--border)',color:'var(--muted)',fontSize:'.82rem',fontWeight:700,textDecoration:'none' }}>
                      📍 지도
                    </a>}
                    <button onClick={()=>setPickedIdx(null)}
                      style={{ padding:'7px 14px',borderRadius:8,background:'none',border:'1px solid var(--border)',color:'var(--muted)',fontSize:'.8rem',cursor:'pointer' }}>
                      다시 고르기
                    </button>
                  </div>
                </div>
              ) : null
            })()}

            {/* ── 상단 배너: 랜덤 / 외부검색 안내 ── */}
            {results[0]?._random && (
              <div style={{ marginBottom:14,padding:'10px 14px',background:'rgba(99,179,237,.07)',border:'1px solid rgba(99,179,237,.2)',borderRadius:10,textAlign:'center' }}>
                {usedToday >= DAILY_LIMIT
                  ? <><div style={{ fontSize:'.8rem',fontWeight:700,color:'var(--primary)',marginBottom:2 }}>🎲 오늘의 AI 기회를 모두 소진했어요</div>
                      <div style={{ fontSize:'.72rem',color:'var(--muted)' }}>대신 랜덤 추천으로 보여드려요 — 의외로 딱 맞을 수도 있어요 😄{selectedCat ? ` · ${selectedCat.emoji} ${selectedCat.name}` : ''}</div></>
                  : <div style={{ fontSize:'.74rem',color:'var(--muted)' }}>🎲 랜덤 추천 결과{selectedCat ? ` — ${selectedCat.emoji} ${selectedCat.name}` : ''}</div>
                }
              </div>
            )}
            {results[0]?._external && (
              <div style={{ marginBottom:14,padding:'10px 14px',background:'rgba(108,99,255,.07)',border:'1px solid rgba(108,99,255,.25)',borderRadius:10 }}>
                <div style={{ fontSize:'.78rem',fontWeight:700,color:'var(--accent)',marginBottom:2 }}>🔍 DB 외부 검색 결과</div>
                <div style={{ fontSize:'.72rem',color:'var(--muted)' }}>잠실 커뮤니티·지도 앱에서 실시간 검색한 결과예요. 방문 전 영업 여부를 확인하세요.</div>
              </div>
            )}

            {/* ── PC: 2컬럼 그리드 / 모바일: 1컬럼 ── */}
            <div style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
              gap:12,
            }}>
              {results.map((rec,i)=>{
                const medals=['🥇','🥈','🥉'], borders=['#ffd700','#c0c0c0','#cd7f32']
                const accentColor = borders[i] || '#888'

                // ── 외부 검색 결과 카드 ──
                if (rec._external) {
                  const naverUrl = `https://map.naver.com/v5/search/${encodeURIComponent(rec.restaurantName + ' 잠실')}`
                  // 3가지 형식 분기
                  const cardStyle = [
                    // 1번: 메뉴 중심 - 가격 뱃지 강조
                    { bg:'var(--surface2)', accent:'var(--primary)', icon:'🍽️', label:'메뉴 추천' },
                    // 2번: 분위기 중심 - accent 컬러
                    { bg:'rgba(108,99,255,.06)', accent:'var(--accent)', icon:'✨', label:'분위기 픽' },
                    // 3번: 평판 중심 - 중립 톤
                    { bg:'rgba(99,179,237,.05)', accent:'#63b3ed', icon:'💬', label:'리뷰 추천' },
                  ][i] || { bg:'var(--surface2)', accent:'var(--primary)', icon:'📍', label:'추천' }

                  return (
                    <a key={i} href={naverUrl} target="_blank" rel="noopener noreferrer"
                      style={{ textDecoration:'none', color:'inherit', display:'block' }}>
                      <div style={{ background:cardStyle.bg, border:`1px solid var(--border)`, borderLeft:`3px solid ${accentColor}`, borderRadius:14, padding:'16px 14px', cursor:'pointer', transition:'border-color .15s', height:'100%' }}
                        onMouseEnter={e=>e.currentTarget.style.borderColor=accentColor}
                        onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
                        {/* 헤더 */}
                        <div style={{ display:'flex', gap:10, marginBottom:10, alignItems:'flex-start' }}>
                          <span style={{ fontSize:'1.3rem', flexShrink:0 }}>{medals[i]}</span>
                          <div style={{ flex:1, minWidth:0 }}>
                            <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:4, flexWrap:'wrap' }}>
                              <span style={{ fontSize:'.95rem', fontWeight:700 }}>{rec.restaurantName}</span>
                              <span style={{ fontSize:'.65rem', padding:'2px 7px', borderRadius:100, background:`${cardStyle.accent}22`, border:`1px solid ${cardStyle.accent}44`, color:cardStyle.accent, fontWeight:700 }}>{cardStyle.icon} {cardStyle.label}</span>
                            </div>
                            <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                              {rec.priceInfo && <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--primary)' }}>💰 {rec.priceInfo}</span>}
                              {rec.hours && <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--muted)' }}>🕐 {rec.hours}</span>}
                            </div>
                          </div>
                        </div>
                        {/* 본문 */}
                        <p style={{ fontSize:'.84rem', color:'var(--text)', marginBottom:10, lineHeight:1.7, opacity:.9, wordBreak:'break-word' }}>{rec.reason}</p>
                        {/* 하이라이트 */}
                        {rec.reviewHighlight && (
                          <div style={{ background:'var(--surface)', borderLeft:`3px solid ${cardStyle.accent}`, borderRadius:'0 8px 8px 0', padding:'7px 11px', fontSize:'.78rem', color:'var(--muted)', marginBottom:8, wordBreak:'break-word' }}>
                            {cardStyle.icon} &ldquo;{rec.reviewHighlight}&rdquo;
                          </div>
                        )}
                        {/* 푸터 */}
                        <div style={{ display:'flex', gap:6, marginTop:8, alignItems:'center' }}>
                          <span style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)' }}>📍 {rec.address || '잠실 근처'}</span>
                          <span style={{ marginLeft:'auto', fontSize:'.72rem', color:cardStyle.accent, opacity:.8 }}>지도에서 보기 →</span>
                        </div>
                      </div>
                    </a>
                  )
                }

                // ── DB 결과 카드 (기존) ──
                const r = restaurants.find(x=>x.name===rec.restaurantName) || restaurants.find(x=>rec.restaurantName?.includes(x.name)||x.name?.includes(rec.restaurantName))
              if (!r && !rec._notInDB) return null
              if (rec._notInDB && !r) {
                // DB에 없는 식당 → 네이버지도 카드
                return (
                  <a key={i} href={`https://map.naver.com/v5/search/${encodeURIComponent(rec.restaurantName + ' 잠실')}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration:'none', display:'block', color:'inherit' }}>
                    <div style={{ background:'var(--surface2)',border:'1px solid var(--border)',borderLeft:`3px solid ${borders[i]||'#888'}`,borderRadius:14,padding:'16px 14px',cursor:'pointer',height:'100%',opacity:.85 }}>
                      <div style={{ display:'flex',gap:10,marginBottom:8 }}>
                        <span style={{ fontSize:'1.4rem',flexShrink:0 }}>{medals[i]}</span>
                        <div style={{ flex:1,minWidth:0 }}>
                          <div style={{ fontSize:'.95rem',fontWeight:700,marginBottom:4 }}>🍽 {rec.restaurantName}</div>
                          <div style={{ display:'flex',flexWrap:'wrap',gap:4 }}>
                            <span style={{ fontSize:'.68rem',background:'rgba(255,107,53,.1)',padding:'2px 8px',borderRadius:100,border:'1px solid rgba(255,107,53,.2)',color:'#ff6b35' }}>AI 추천 · DB 외 식당</span>
                          </div>
                        </div>
                      </div>
                      {rec.reason && <div style={{ fontSize:'.82rem',color:'var(--text)',lineHeight:1.65,marginBottom:8 }}>{rec.reason}</div>}
                      {rec.reviewHighlight && <div style={{ background:'var(--surface)',borderLeft:'3px solid var(--primary)',borderRadius:'0 8px 8px 0',padding:'8px 11px',fontSize:'.78rem',color:'var(--muted)',marginBottom:8 }}>💬 &ldquo;{rec.reviewHighlight}&rdquo;</div>}
                      <div style={{ fontSize:'.75rem',padding:'5px 10px',borderRadius:8,background:'var(--surface)',border:'1px solid var(--border)',color:'#38bdf8',display:'inline-block' }}>📍 네이버지도에서 확인 →</div>
                    </div>
                  </a>
                )
              }
                return (
                  <Link key={i} href={`/dinner/jamsil/restaurant/${encodeURIComponent(r.name)}`}
                    style={{ textDecoration:'none', display:'block', color:'inherit' }}>
                    <div style={{ background:'var(--surface2)', border:'1px solid var(--border)', borderLeft:`3px solid ${borders[i]}`, borderRadius:14, padding:'16px 14px', cursor:'pointer', transition:'all .2s', height:'100%', opacity:pickedIdx!==null&&pickedIdx!==i?0.35:1, transform:pickedIdx===i?'scale(1.01)':'scale(1)' }}
                      onMouseEnter={e=>{ if(pickedIdx===null) e.currentTarget.style.borderColor=borders[i] }}
                      onMouseLeave={e=>{ if(pickedIdx===null) e.currentTarget.style.borderColor='var(--border)' }}
                    >
                      <div style={{ display:'flex', gap:10, marginBottom:8 }}>
                        <span style={{ fontSize:'1.4rem', flexShrink:0 }}>{medals[i]}</span>
                        <div style={{ flex:1, minWidth:0 }}>
                          <div style={{ fontSize:'.95rem', fontWeight:700, marginBottom:5 }}>{r.e} {r.name}</div>
                          <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                            <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--muted)' }}>{r.type}</span>
                            <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--text)' }}>⭐{r.rt}</span>
                            {r.priceRange&&<span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--primary)' }}>💰{fmtPrice(r.priceRange)}원</span>}
                          </div>
                        </div>
                      </div>
                      <p style={{ fontSize:'.84rem', color:'var(--text)', marginBottom:10, lineHeight:1.7, opacity:.9, wordBreak:'break-word', whiteSpace:'pre-line' }}>{rec.reason}</p>
                      {rec.reviewHighlight && !rec._random &&(
                        <div style={{ background:'var(--surface)', borderLeft:'3px solid var(--primary)', borderRadius:'0 8px 8px 0', padding:'8px 11px', fontSize:'.78rem', color:'var(--muted)', marginBottom:8, wordBreak:'break-word' }}>
                          💬 &ldquo;{rec.reviewHighlight}&rdquo;
                        </div>
                      )}
                      {/* ── DB 태그 섹션 ── */}
                      <div style={{ display:'flex', flexWrap:'wrap', gap:4, marginBottom:8 }}>
                        {(r.moods||[]).slice(0,3).map(m=>(
                          <span key={m} style={{ fontSize:'.66rem', padding:'2px 7px', borderRadius:100, background:'rgba(108,99,255,.1)', border:'1px solid rgba(108,99,255,.2)', color:'var(--accent)' }}>{moodEmoji(m)}</span>
                        ))}
                        {(r.wx||[]).slice(0,2).map(w=>(
                          <span key={w} style={{ fontSize:'.66rem', padding:'2px 7px', borderRadius:100, background:'rgba(56,189,248,.08)', border:'1px solid rgba(56,189,248,.2)', color:'#38bdf8' }}>{wxEmoji(w)}</span>
                        ))}
                        {(r.tags||[]).slice(0,3).map(t=>(
                          <span key={t} style={{ fontSize:'.66rem', padding:'2px 7px', borderRadius:100, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)' }}>#{t}</span>
                        ))}
                      </div>
                      <div style={{ display:'flex', gap:6, marginTop:8, alignItems:'center' }}>
                        <a href={naverMapUrl(r.name)}
                          target="_blank" rel="noopener noreferrer"
                          onClick={e=>e.stopPropagation()}
                          style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)', textDecoration:'none', position:'relative', zIndex:1 }}>
                          📍 지도
                        </a>
                        <span style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)' }}>
                          🕐 {r.hours}
                        </span>
                        <span style={{ marginLeft:'auto', fontSize:'.72rem', color:'var(--muted)', opacity:.6 }}>상세보기 →</span>
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
  const [search,s]       = useState('')
  const [activeCat,ac]   = useState('전체')
  const allCats = ['전체','고기구이','국밥','이자카야','일식','중식','양식','치킨','야장','족발보쌈','해산물','분식','한식']
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
    if (typeof window !== 'undefined') return sessionStorage.getItem('jamsil-tab') || 'ai'
    return 'ai'
  })
  const [pendingCat, setPendingCat] = useState(null)
  const switchTab = (tab) => { setActiveTab(tab); sessionStorage.setItem('jamsil-tab', tab) }
  const topRated = [...restaurants].sort((a,b)=>b.rt-a.rt).slice(0,6)

  return (
    <Layout title="잠실 맛집 AI 추천" description="잠실·방이 주변 맛집 AI 추천. 국밥·이자카야·한우·중식 170개+ 식당." canonical="https://dinner.ambitstock.com/dinner/jamsil">
      <Head>
        <title>잠실 맛집 추천 | 롯데월드·석촌호수 AI 추천 | 오늘뭐먹지</title>
        <meta name="description" content="잠실 맛집 AI 추천. 롯데월드·석촌호수·방이먹자골목 주변 국밥·이자카야·한우·중식 150개+ 식당." />
        <link rel="canonical" href="https://dinner.ambitstock.com/dinner/jamsil" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"ItemList","name":"잠실 맛집 추천",
          "url":"https://dinner.ambitstock.com/dinner/jamsil","numberOfItems":restaurants.length,
          "itemListElement":topRated.slice(0,5).map((r,i)=>({ "@type":"ListItem","position":i+1,"name":r.name,"description":`${r.type} | ⭐${r.rt}` }))
        })}} />
      </Head>

      <section style={{ background:'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',padding:'32px 16px 24px',borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:900,margin:'0 auto' }}>
          <div style={{ fontSize:'.75rem',color:'var(--muted)',marginBottom:8 }}>
            <Link href="/" style={{ color:'var(--muted)' }}>오늘뭐먹지</Link> › 잠실
          </div>
          <h1 style={{ fontSize:'clamp(1.4rem,5vw,2.2rem)',fontWeight:900,marginBottom:8,lineHeight:1.2 }}>🏙️ 잠실 맛집</h1>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',marginBottom:14 }}>
            롯데월드·석촌호수·방이먹자골목 <strong style={{ color:'var(--text)' }}>{restaurants.length}개+</strong> 식당 AI 추천
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
          <div>
            <div style={{ fontSize:'.8rem',color:'var(--muted)',marginBottom:14,paddingTop:4 }}>
              카테고리 포스팅 보기 &middot; <strong style={{color:'var(--primary)'}}>🎲 바로뽑기</strong>로 즉석 랜덤 추천
            </div>
            <div style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))',
              gap:12,
            }}>
              {CATS.map(cat=>{
                const count = restaurants.filter(r=>
                      cat.cats.some(c=>r.cat?.includes(c)) ||
                      (cat.tags||[]).some(t=>r.tags?.includes(t))
                    ).length
                return (
                  <div key={cat.slug} style={{
                    background:'var(--surface)', border:'1px solid var(--border)',
                    borderRadius:14, overflow:'hidden', display:'flex', flexDirection:'column',
                    transition:'border-color .15s, box-shadow .15s',
                  }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--primary)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(255,107,53,.12)' }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.boxShadow='none' }}
                  >
                    <Link href={`/dinner/jamsil/category/${cat.slug}`} style={{ display:'block', textDecoration:'none', color:'inherit', flex:1 }}>
                      <div style={{ padding:'18px 16px 14px', display:'flex', alignItems:'center', gap:12 }}>
                        <span style={{ fontSize:'2rem', lineHeight:1, flexShrink:0 }}>{cat.emoji}</span>
                        <div>
                          <div style={{ fontSize:'.9rem', fontWeight:700, marginBottom:2 }}>{cat.name}</div>
                          <div style={{ fontSize:'.73rem', color:'var(--muted)' }}>{count}개 식당 &middot; 보기 →</div>
                        </div>
                      </div>
                    </Link>
                    <button
                      onClick={()=>{ setPendingCat(cat); switchTab('ai') }}
                      style={{
                        width:'100%', padding:'10px',
                        borderTop:'1px solid var(--border)',
                        background:'rgba(255,107,53,.07)', border:'none', borderTop:'1px solid var(--border)',
                        color:'var(--primary)', fontSize:'.8rem', fontWeight:700,
                        cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:5,
                        transition:'background .15s',
                      }}
                      onMouseEnter={e=>e.currentTarget.style.background='rgba(255,107,53,.18)'}
                      onMouseLeave={e=>e.currentTarget.style.background='rgba(255,107,53,.07)'}
                    >
                      🎲 바로 뽑기
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        )}
        <article style={{ marginTop:48,padding:'24px 20px',background:'var(--surface)',borderRadius:14,border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1rem',fontWeight:800,marginBottom:12 }}>잠실 맛집 가이드</h2>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8,marginBottom:10 }}>
            잠실 맛집은 롯데월드몰, 석촌호수, 방이먹자골목을 중심으로 다양한 식당이 모여 있습니다. 송리단길에는 감성적인 브런치·카페가 즐비하고, 잠실새내역 일대에는 직장인 점심 맛집이 밀집해 있습니다.
          </p>
          <p style={{ color:'var(--muted)',fontSize:'.88rem',lineHeight:1.8 }}>
            회식 장소로는 웨어하우스43, 대도식당, 하이딜라오 훠궈 등이 인기이며, 가성비 점심을 찾는다면 중앙해장, 연화산 짬뽕, 리춍 중식당을 추천합니다.
          </p>
        </article>
      </div>
    </Layout>
  )
}
