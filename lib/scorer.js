/**
 * 강남뭐먹 로컬 스코어링 엔진 v2
 * API 호출 없이 로컬에서 정확한 맛집 추천
 */

// ── 동의어 사전 ─────────────────────────────────────────────
const SYNONYMS = {
  '국밥':    ['해장국','설렁탕','곰탕','순대국','뼈해장','내장국밥','소고기국밥'],
  '고기':    ['구이','삼겹살','목살','갈비','한우','등심','차돌','숯불','BBQ','소고기','돼지고기'],
  '이자카야': ['야끼토리','야키토리','사케','일본술','안주','하이볼'],
  '중식':    ['짜장','짬뽕','탕수육','딤섬','마라탕','훠궈','마라','베이징덕','중국'],
  '양식':    ['파스타','피자','이탈리안','리조또','스파게티'],
  '치킨':    ['후라이드','양념치킨','통닭','치맥','닭'],
  '야장':    ['포차','포장마차','노천','루프탑','야외'],
  '술':      ['맥주','소주','와인','막걸리','하이볼','사케','위스키','칵테일'],
  '해장':    ['숙취','속풀이','다음날아침'],
  '혼밥':    ['혼자','1인','나혼자'],
  '데이트':  ['커플','둘이','연인','여자친구','남자친구','소개팅'],
  '회식':    ['단체','팀식사','부서','직원','회사사람','팀장','법인카드'],
  '가성비':  ['저렴','싸게','착한가격','가격대비','가성비'],
  '매운':    ['매콤','얼큰','화끈','마라','불닭'],
  '야식':    ['새벽','심야','24시','늦게'],
}

// ── 상황 키워드 → scene 매핑 ────────────────────────────────
const SCENE_MAP = [
  { re: /야근|퇴근|지쳐|힘들|피곤|녹초/,         scenes: ['퇴근 후 한잔','퇴근 후 치킨','야식','심야 식사'] },
  { re: /데이트|커플|둘이|연인|소개팅/,           scenes: ['데이트','데이트 식사','데이트 고기','분위기 있는 식사'] },
  { re: /회식|단체|팀|부서|직원|법인카드/,         scenes: ['회식','단체 식사','비즈니스 회식','프라이빗룸'] },
  { re: /기념일|생일|축하|특별|프로포즈/,         scenes: ['기념일','특별한 날','특별한 날 고기','고급 코스'] },
  { re: /해장|숙취|속풀이|아침|다음날/,           scenes: ['해장','아침 식사','따뜻한 국물','국물 맛집'] },
  { re: /혼밥|혼자|1인|나혼자/,                   scenes: ['혼자 밥','혼자 점심','빠른 식사'] },
  { re: /가성비|저렴|싸게|학생|알바/,             scenes: ['가성비 밥','가성비 고기','로컬 국밥'] },
  { re: /친구|친구들|무리|여럿이|모임/,           scenes: ['친구들이랑','친구들이랑 고기','친구들이랑 치킨'] },
  { re: /술|한잔|맥주|소주|와인/,                 scenes: ['술 한잔','가볍게 술','퇴근 후 한잔','낮맥주'] },
  { re: /24시|새벽|심야|늦게|야식/,               scenes: ['24시간','새벽 식사','심야 식사','야식'] },
  { re: /점심|런치|낮밥|빠른|간단/,               scenes: ['점심','빠른 식사','혼자 점심'] },
  { re: /매운|얼큰|화끈|마라|불닭/,               scenes: ['매운 음식','마라','얼큰한 국물'] },
  { re: /고급|오마카세|미슐랭|파인다이닝/,        scenes: ['고급 코스','오마카세','한우 오마카세'] },
  { re: /스포츠|경기|치맥|응원/,                  scenes: ['경기 보면서 치맥','스포츠바','치맥'] },
]

const CAT_PATTERNS = [
  { re: /야장|포장마차|포차|노천|루프탑야장/,              cats: ['야장','치킨','이자카야'] },
  { re: /치맥|치킨.*맥주|후라이드|양념치킨|통닭/,          cats: ['치킨','야장'] },
  { re: /이자카야|야끼토리|야키토리|하이볼/,               cats: ['이자카야','야장'] },
  { re: /국밥|해장국|설렁탕|곰탕|순대국|뼈해장|내장국밥/,  cats: ['국밥','국물','한식'] },
  { re: /칼국수|수제비|칼제비/,                            cats: ['한식'] },
  { re: /삼겹살|목살|갈비살|한우|등심|숯불구이/,           cats: ['고기구이','한식'] },
  { re: /회식|단체.*식사|프라이빗.*룸/,                    cats: ['이자카야','고기구이','중식'] },
  { re: /중식|짜장|짬뽕|탕수육|딤섬|마라탕|훠궈/,          cats: ['중식','훠궈'] },
  { re: /파스타|피자|이탈리안|리조또|양식/,                cats: ['양식','이탈리안'] },
  { re: /스테이크|립아이|ribeye/,                          cats: ['스테이크','양식'] },
  { re: /스시|초밥|사시미|오마카세|라멘/,                  cats: ['이자카야','일식'] },
  { re: /혼밥|혼자.*먹|1인.*식사/,                         cats: ['국밥','한식'] },
  { re: /와인|크래프트.*맥주|위스키/,                      cats: ['와인바','이자카야'] },
  { re: /버거|햄버거|수제버거/,                            cats: ['버거'] },
  { re: /뷔페|무한리필|무제한/,                            cats: ['뷔페','고기구이'] },
]

function expandQuery(q) {
  let expanded = q.toLowerCase()
  for (const [key, syns] of Object.entries(SYNONYMS)) {
    if (syns.some(s => expanded.includes(s.toLowerCase()))) {
      expanded += ' ' + key
    }
  }
  return expanded
}

export function parsePriceFilter(q) {
  let m
  m = q.match(/(\d+)만\s*원?\s*(이하|미만|대|이상|초과)?/)
  if (m) return { val: parseInt(m[1]) * 10000, dir: m[2] || '이하' }
  m = q.match(/(\d+)천\s*원?\s*(이하|미만|대|이상|초과)?/)
  if (m) return { val: parseInt(m[1]) * 1000, dir: m[2] || '이하' }
  m = q.match(/(\d+)[,.]?(\d{3})\s*원?\s*(이하|미만|대|이상|초과)?/)
  if (m) return { val: parseInt(m[1] + m[2]), dir: m[3] || '이하' }
  return null
}

export function filterByPrice(cands, pf) {
  if (!pf) return cands
  return cands.filter(r => {
    if (!r.priceRange) return true
    const [a, b] = r.priceRange.split('~')
    const avg = (parseInt(a) + parseInt(b || a)) / 2
    if (pf.dir === '이하' || pf.dir === '미만') return avg <= pf.val * 1.1
    if (pf.dir === '이상' || pf.dir === '초과') return avg >= pf.val * 0.9
    return avg >= pf.val * 0.65 && avg <= pf.val * 1.45
  })
}

export function detectCategories(q, moods, wx) {
  const t = expandQuery(`${q} ${moods.join(' ')} ${wx}`)
  const matched = []
  for (const p of CAT_PATTERNS) {
    if (p.re.test(t)) matched.push(...p.cats)
  }
  return [...new Set(matched)]
}

export function scoreRestaurants(q, moods, wx, cands) {
  const expanded = expandQuery(`${q} ${moods.join(' ')} ${wx}`)
  const words = expanded.split(/\s+/).filter(w => w.length > 1)

  // 감지된 scene 목록
  const detectedScenes = []
  for (const sm of SCENE_MAP) {
    if (sm.re.test(expanded)) detectedScenes.push(...sm.scenes)
  }

  // 감지된 카테고리
  const detectedCats = detectCategories(q, moods, wx)

  return cands.map(r => {
    let score = 0
    const blob = [r.name, r.type, ...(r.tags||[]), ...(r.scene||[]), ...(r.moods||[]), ...(r.wx||[]), ...(r.cat||[])].join(' ').toLowerCase()

    // 기분 매칭 (25점)
    moods.forEach(m => { if ((r.moods||[]).includes(m)) score += 25 })

    // 날씨 매칭 (20점)
    if ((r.wx||[]).includes(wx)) score += 20

    // scene 매칭 (22점) - 부분 일치 포함
    detectedScenes.forEach(sc => {
      if ((r.scene||[]).some(rs => rs.includes(sc) || sc.includes(rs))) score += 22
    })

    // 카테고리 직접 매칭 (30점) - 가장 중요
    detectedCats.forEach(dc => { if ((r.cat||[]).includes(dc)) score += 30 })

    // 태그 키워드 매칭 (18점)
    ;(r.tags||[]).forEach(t => { if (expanded.includes(t.toLowerCase())) score += 18 })

    // 단어별 blob 매칭 (6점)
    words.forEach(w => { if (blob.includes(w)) score += 6 })

    // 평점 보정
    score += (r.rt || 0) * 4

    // 리뷰 수 보정 (로그 스케일)
    score += Math.log10((r.cnt || 1) + 1) * 3

    // 가성비 키워드 → 저렴한 식당 보너스
    if (/가성비|저렴|싸게|학생/.test(expanded) && r.priceRange) {
      const avg = r.priceRange.split('~').map(Number).reduce((a,b)=>a+b,0) / 2
      if (avg < 12000) score += 15
      else if (avg < 18000) score += 8
    }

    // 고급 키워드 → 평점 높은 식당 보너스
    if (/고급|특별한날|기념일|오마카세|파인다이닝/.test(expanded)) {
      if (r.rt >= 4.7) score += 20
      else if (r.rt >= 4.5) score += 10
    }

    return { ...r, _score: score, _scenes: detectedScenes }
  }).sort((a, b) => b._score - a._score)
}

export function formatLocalResults(scored, q, moods, wx) {
  return scored.slice(0, 3).map((r, i) => {
    const matchedMoods = moods.filter(m => (r.moods||[]).includes(m))
    const matchedWx = (r.wx||[]).includes(wx) ? wx : null
    const matchedScene = (r._scenes||[]).find(sc => (r.scene||[]).some(rs => rs.includes(sc) || sc.includes(rs)))

    const reasons = []
    if (matchedMoods.length) reasons.push(`${matchedMoods.join('·')} 때 딱 맞는 분위기`)
    if (matchedWx) reasons.push(`${matchedWx} 날씨에 특히 추천`)
    if (matchedScene) reasons.push(`${matchedScene}에 제격`)
    if (r.rt >= 4.7) reasons.push(`Google ⭐${r.rt}점의 검증된 맛집`)
    if (r.priceRange && /가성비|저렴/.test(q)) reasons.push(`${r.priceRange}원대 가성비`)

    const reason = reasons.length
      ? reasons.slice(0, 2).join('. ') + '.'
      : `Google 평점 ⭐${r.rt} (${r.cnt?.toLocaleString()}리뷰)의 삼성역 인기 맛집입니다.`

    return {
      rank: i + 1,
      restaurantName: r.name,
      reason,
      reviewHighlight: r.rv?.[0]?.replace(/ \(실제 Google 리뷰.*?\)/g, '') || '',
      matchScore: Math.min(99, Math.round(55 + r._score / 3)),
      _local: true,
    }
  })
}
