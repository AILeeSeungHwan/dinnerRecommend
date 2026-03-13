import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../../components/Layout'
import restaurants from '../../../../data/yeongtong'

export async function getStaticPaths() {
  return {
    paths: restaurants.map(r => ({ params: { name: r.name } })),
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const name = decodeURIComponent(params.name)
  const r = restaurants.find(x => x.name === name)
  if (!r) return { notFound: true }

  const similar = restaurants
    .filter(x => x.name !== r.name && x.cat?.some(c => r.cat?.includes(c)))
    .sort((a, b) => b.rt - a.rt)
    .slice(0, 4)
    .map(x => ({ name: x.name, type: x.type, e: x.e, rt: x.rt, priceRange: x.priceRange || null }))

  return { props: { restaurant: { ...r, rv: r.rv || [], tags: r.tags || [], moods: r.moods || [], scene: r.scene || [], cat: r.cat || [], keywords: r.keywords || [], menuItems: r.menuItems || [] }, similar } }
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

// ── 카테고리별 효능 풀 20개 → 랜덤 5개 표시 ─────────────────
const EFFECT_POOL = {
  '국밥': {
    title: '해장국·국밥의 과학적 효능',
    items: [
      '숙취 해소 — 뜨거운 국물이 알코올 분해 효소를 자극한다는 설이 있습니다 (출처: 직장인 5,000명 체감 조사)',
      '영혼 충전 — 첫 한 숟가락에 "아 살겠다"는 탄성이 자동 발생합니다',
      '업무 효율 200% — 점심 국밥 한 그릇이면 오후 회의도 버텨냅니다',
      '인간관계 회복 — 팀장도 뚝배기 앞에서는 한없이 부드러워집니다',
      '절약 정신 함양 — 1만원 이하로 이 퀄리티라니, 자연스럽게 감사함이 생깁니다',
      '면역력 강화 — 진한 사골 국물에는 콜라겐과 미네랄이 풍부합니다',
      '체온 상승 — 뜨거운 국물 한 그릇이면 겨울 한파도 버텨냅니다',
      '소화 촉진 — 국밥의 따뜻한 국물이 위장 운동을 원활하게 합니다',
      '집중력 향상 — 탄수화물+단백질 최적 조합으로 두뇌 회전이 빨라집니다',
      '멘탈 케어 — "뭐 먹지?" 고민 해결만으로 하루 스트레스의 30%가 감소합니다',
      '시간 절약 — 주문부터 식사까지 15분, 점심시간을 효율적으로 씁니다',
      '나트륨 보충 — 운동 후 땀으로 빠진 전해질을 국물로 빠르게 회복합니다',
      '고독 치유 — 혼자 먹어도 전혀 어색하지 않은 유일한 음식입니다',
      '포만감 지속 — 단백질+국물 조합이 공복감을 4시간은 막아줍니다',
      '가성비 만족도 극대화 — 한 그릇에 이 행복감이라니, ROI가 최고입니다',
      '추억 소환 — 어머니 손맛과 비슷한 국물 한 모금에 과거로 시간여행합니다',
      '혈액순환 개선 — 뜨거운 음식이 말초 혈관을 확장시킵니다',
      '아침형 인간 전환 — 든든한 국밥 아침이 하루를 바꿉니다',
      '점심값 절약 — 이 가격대에 이 맛이면 월 식비를 크게 줄일 수 있습니다',
      '단골 형성 — 한 번 맛들이면 다른 국밥집으로 돌아가기가 어렵습니다',
    ]
  },
  '이자카야': {
    title: '이자카야·술자리의 놀라운 효능',
    items: [
      '스트레스 수치 급감 — 첫 잔 이후 어깨가 자연스럽게 내려갑니다',
      '팀빌딩 효과 최대치 — 안주 시키는 순간 팀워크가 생성됩니다',
      '창의력 향상 — 2잔째부터 평소엔 없던 아이디어가 쏟아집니다 (퀄리티는 보장 못 함)',
      '솔직함 증가 — 평소 못 했던 말이 자연스럽게 나옵니다 (다음날 후회 주의)',
      '시간 가속 — 신기하게도 1시간이 10분처럼 느껴집니다',
      '미각 민감도 상승 — 첫 잔 이후 안주 맛이 두 배로 좋아집니다',
      '긴장 완화 — 소주 반 병이면 발표 전 떨림도 사라집니다 (발표 전엔 비추)',
      '친목 가속화 — 어색한 신입도 2차 이자카야에서 친해집니다',
      '공감 능력 증가 — "맞아, 나도 그래!" 빈도가 3배 상승합니다',
      '식욕 촉진 — 맥주 첫 모금이 위액 분비를 촉진합니다',
      '피로 회복 — 안주의 단백질이 근육 피로를 해소합니다',
      '대화량 증가 — 평소 말수 적은 사람도 2잔 이후 수다쟁이가 됩니다',
      '넷플릭스 절약 — 이자카야 2시간이 드라마 10화보다 재밌습니다',
      '회식 만족도 100% — 선택이 반이고, 나머지 반은 분위기입니다',
      '인스타 피드 풍성 — 이자카야 감성 사진이 좋아요를 부릅니다',
      '취향 발견 — 다양한 안주를 먹으며 자신의 식성을 알게 됩니다',
      '일상 탈출 — 퇴근 후 이자카야 한 시간이 짧은 여행입니다',
      '내일의 동력 — "어제 잘 마셨으니 오늘도 힘내자" 마인드가 생깁니다',
      '관계 깊어짐 — 술 한 잔 같이 한 사람과는 괜히 더 친해진 기분이 납니다',
      '감사함 회복 — 편하게 마실 수 있는 공간이 있다는 것에 감사해집니다',
    ]
  },
  '고기구이': {
    title: '고기 구이의 과학적·감성적 효능',
    items: [
      '행복 호르몬 분비 — 고기 굽는 냄새만으로 세로토닌이 분비됩니다',
      '체력 회복 — 단백질 충전으로 퇴근 후 피로도가 눈에 띄게 줄어듭니다',
      '인생관 전환 — 한우 등심 한 점 입에 넣는 순간 모든 고민이 사라집니다',
      '소비 만족감 극대화 — "내가 이걸 먹는 사람이구나" 자부심이 생깁니다',
      '그릴 장인 각성 — 고기 굽다 보면 누구나 셰프 본능이 깨어납니다',
      '인간관계 강화 — 같이 고기 구워 먹으면 그날부로 친구입니다',
      '근육 합성 촉진 — 운동 후 삼겹살 한 판은 최고의 단백질 보충제입니다',
      '집중력 향상 — 고기 굽는 데 온신경이 집중되어 딴생각이 사라집니다',
      '대화 유도 — 고기 굽는 침묵이 오히려 어색함을 없애줍니다',
      '향 테라피 — 직화 불향이 스트레스 호르몬을 낮춥니다 (체감 기준)',
      '축하 의식 완성 — 어떤 기념일도 고기 한 판으로 완성됩니다',
      '식욕 자극 — 지글지글 소리만으로 침이 고입니다 (파블로프 효과)',
      '팀 결속력 강화 — 고기 앞에서 직급이 사라집니다 (인류 보편 현상)',
      '면역력 강화 — 양질의 단백질이 면역세포 생성을 돕습니다',
      '자존감 상승 — 좋은 고기집에서 식사하는 자신이 대견해집니다',
      '감사함 회복 — 맛있는 고기 앞에서 오늘 하루에 감사하게 됩니다',
      '수면 품질 개선 — 든든하게 먹은 날 밤 숙면이 보장됩니다',
      '우선순위 재정립 — "결국 맛있는 거 먹는 게 제일 중요하다" 깨닫게 됩니다',
      '단골 각인 — 한 번 맛들이면 고기 당길 때마다 여기만 생각납니다',
      '상견례 성공률 — 고기 앞에서 분위기 나빠지는 경우는 거의 없습니다',
    ]
  },
  '중식': {
    title: '중식의 놀라운 효능',
    items: [
      '마라 중독 효과 — 매운맛이 엔돌핀을 자극해 러너스하이를 경험합니다',
      '빠른 포만감 — 짜장 한 그릇으로 4시간은 거뜬합니다',
      '기분 전환 — 훠궈 특유의 향이 일상 스트레스를 날려줍니다',
      '친목 도모 — 같이 먹을수록 맛있어지는 신기한 현상이 있습니다',
      '식욕 자극 — 중식 냄새는 전 세계 어디서도 거절하기 어렵습니다',
      '탄수화물 충전 — 짜장면 한 그릇이 오후 에너지를 책임집니다',
      '땀 배출 촉진 — 마라탕 먹으면 자연스럽게 땀이 나 노폐물이 빠집니다',
      '단체 식사 최적 — 여러 명이 나눠 먹기 가장 좋은 음식입니다',
      '배달 강자 — 중식은 포장·배달 후에도 맛이 크게 안 떨어집니다',
      '가성비 최고 — 양 대비 가격이 가장 합리적인 외식입니다',
      '재료 다양성 — 한 그릇에 채소·단백질·탄수화물이 모두 담겨있습니다',
      '숙취 해소 — 기름진 중식이 알코올 흡수를 늦춰줍니다 (근거 희박)',
      '추억 맛 — 어릴 적 생일마다 먹던 짜장면의 그 기억이 소환됩니다',
      '냄새 저항 불가 — 중식당 앞을 배고플 때 지나치기가 불가능합니다',
      '고수 테라피 — 향신채가 소화를 돕고 기분을 상쾌하게 합니다',
      '면 요리 숙달 — 다양한 면을 먹다 보면 어느새 면 전문가가 됩니다',
      '의사결정 능력 향상 — 짜장이냐 짬뽕이냐 고르다 보면 다른 결정도 빨라집니다',
      '해독 효과 — 마라의 화초가 체내 독소를 제거한다는 설이 있습니다',
      '재방문율 1위 — 한 번 맛들이면 다음에도 여기만 생각납니다',
      '날씨 무관 — 더운 날 마라탕, 추운 날 짬뽕, 중식은 사계절 완벽합니다',
    ]
  },
}
const EFFECT_POOL_FALLBACK = {
  title: '맛있는 음식의 보편적 효능',
  items: [
    '행복 호르몬 분비 — 맛있는 음식은 도파민과 세로토닌을 동시에 분비시킵니다',
    '스트레스 완화 — 좋아하는 음식 먹는 10분이 명상 1시간보다 효과적입니다',
    '에너지 충전 — 제대로 된 한 끼가 오후 업무 효율을 30% 높입니다',
    '인간관계 개선 — 같이 밥 먹는 사람과는 자연스럽게 친해집니다',
    '기억력 강화 — 맛있었던 식당은 몇 년이 지나도 기억납니다',
    '결단력 향상 — "여기로 해!" 주저 없이 선택할 수 있는 맛집이 생겼습니다',
    '삶의 질 상승 — 먹는 즐거움이 있는 삶은 그렇지 않은 삶보다 행복합니다',
    '면역력 강화 — 영양 균형 잡힌 식사가 몸의 방어력을 높입니다',
    '포만감 지속 — 제대로 먹으면 간식 유혹이 사라집니다',
    '집중력 향상 — 배부른 뇌는 배고픈 뇌보다 훨씬 잘 작동합니다',
    '사진 욕구 자극 — 맛있는 음식은 인스타 피드를 풍성하게 합니다',
    '오늘의 보상 — 열심히 일한 내게 주는 가장 확실한 선물입니다',
    '미식 안목 상승 — 좋은 맛집을 많이 알수록 삶이 풍요로워집니다',
    '재방문 의지 생성 — 맛있으면 또 오게 되는 건 본능입니다',
    '수면 품질 개선 — 든든하게 먹으면 깊은 잠을 잡니다',
    '외식 ROI 극대화 — 가격 대비 행복의 비율이 최고점을 찍습니다',
    '고독 해소 — 혼자라도 맛있으면 외롭지 않습니다',
    '내일의 동력 — "오늘 맛있게 먹었으니 내일도 힘내자" 마인드가 생깁니다',
    '감사함 회복 — 좋은 식당이 근처에 있다는 사실 하나가 위로가 됩니다',
    '단골 형성 — 내 리스트에 믿을 수 있는 맛집이 하나 더 생겼습니다',
  ]
}

function getEffects(r) {
  const key = r.cat?.find(c => EFFECT_POOL[c])
  const pool = key ? EFFECT_POOL[key] : EFFECT_POOL_FALLBACK
  // 식당명 기반 시드 + 현재 분(分)으로 매 방문마다 다른 5개 조합
  const seed = r.name.split('').reduce((a, c) => a + c.charCodeAt(0), 0) + new Date().getMinutes()
  const arr = [...pool.items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (seed * (i + 3)) % (i + 1)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return { title: pool.title, items: arr.slice(0, 5) }
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
        `영통에서 ${type}으로 ⭐${rt}점을 유지한다는 게 어떤 의미인지,`,
        `${name} 뚝배기 한 그릇을 받아 들면 압니다.`,
        isCheap ? '가격도, 맛도, 양도. 이 세 박자를 다 잡았습니다.' : '진한 국물 한 그릇. "아, 살겠다" 소리가 절로 납니다.',
      ]}
    }
    return { emoji:'🍲', lines:[
      '야근 끝내고 영통 나오는 길. 발은 무겁고 배는 고프고.',
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
        `⭐${rt}점, ${cnt}개의 리뷰가 말해주는 영통 프리미엄 술자리.`,
      ]}
    }
    if (moods.includes('회식') || tags.includes('단체가능')) {
      return { emoji:'🎉', lines:[
        '"오늘 회식 어디 가지?" 팀원들 눈치 보며 검색하는 시간, 이제 끝냅니다.',
        `${name}. 영통에서 ⭐${rt}점으로 검증된 회식 장소입니다.`,
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
        `⭐${rt}점, ${cnt}명이 인정한 영통 ${type} 맛집.`,
      ]}
    }
    if (moods.includes('데이트')) {
      return { emoji:'🔥❤️', lines:[
        '데이트 장소 고민에 에너지를 쓰지 않아도 됩니다.',
        `${name}. 불 앞에서 마주 앉아 고기 굽다 보면 분위기는 자동으로 만들어집니다.`,
        `영통 ${type} 맛집, ⭐${rt}점으로 검증 완료.`,
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
        `${cnt}명이 선택한 영통 ${type} 맛집.`,
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
        `⭐${rt}점. 영통에서 이 수준이라면 충분히 특별한 저녁입니다.`,
      ]}
    }
    return { emoji:'🍣', lines:[
      `신선한 네타 한 점, 샤리와의 황금 비율.`,
      `${name}에서 그 완성도를 느껴보세요.`,
      `⭐${rt}점, ${isCheap ? '부담 없는 가격까지 챙긴' : '영통 숨은'} 일식 맛집.`,
    ]}
  }

  // ── 양식·파스타·스테이크 ──
  if (cats.includes('양식') || cats.includes('이탈리안') || cats.includes('스테이크')) {
    if (moods.includes('데이트')) {
      return { emoji:'🍷', lines:[
        '데이트 장소 고민, 더 이상 안 해도 됩니다.',
        `${name}. 분위기·맛·가격 세 박자가 맞는 영통 ${type} 맛집.`,
        `⭐${rt}점. 상대방이 먼저 "여기 또 오자"를 말하게 됩니다.`,
      ]}
    }
    return { emoji:'🍝', lines:[
      '오늘은 뭔가 다르게 먹고 싶은 날.',
      `${name}. 파스타 면발이 소스를 머금는 찰진 식감, 혹은 육즙 가득한 스테이크.`,
      `⭐${rt}점이 검증한 영통 ${type}.`,
    ]}
  }

  // ── 치킨·야장 ──
  if (cats.includes('치킨')) {
    return { emoji:'🍺🐔', lines:[
      '오늘 같은 날엔 역시 치맥입니다.',
      `${name}. 바삭한 튀김옷 한 입에 시원한 맥주 한 모금.`,
      `⭐${rt}점, ${cnt}명이 선택한 영통 치킨 맛집.`,
    ]}
  }

  // ── fallback ──
  return { emoji: r.e || '🍽️', lines:[
    `영통에서 ${type}을 찾는다면, 선택지를 좁혀드립니다.`,
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
    .replace(/ (영통점|수원점|망포점|광교점)$/, '')
    .replace(/ ([0-9]+호점)$/, '')
    .trim()
  const hasRegion = /(영통|수원|망포|광교|매탄)/.test(name)
  const query = hasRegion ? cleaned : cleaned + ' 영통'
  if (lat && lng) return `https://map.naver.com/v5/search/${encodeURIComponent(query)}?c=${lng},${lat},15,0,0,0,dh`
  return `https://map.naver.com/v5/search/${encodeURIComponent(query)}`
}

export default function RestaurantPage({ restaurant: r, similar }) {
  const slug = CAT_TO_SLUG[r.cat?.[0]] || null
  const catName = slug ? CAT_NAMES[slug] : null
  const mapUrl = naverMapUrl(r.name, r.lat, r.lng)
  const pageUrl = `https://dinner.ambitstock.com/samsungElectronics/yeongtong/restaurant/${encodeURIComponent(r.name)}`

  // 날씨·기분 매칭
  const matchedWx = r.wx?.map(w => WX_COPY[w]).filter(Boolean) || []
  const matchedMoods = r.moods?.map(m => ({ mood: m, copy: MOOD_COPY[m] })).filter(x => x.copy) || []

  // 효능 콘텐츠
  const effect = getEffects(r)

  // 가격 파싱
  const priceMin = r.priceRange ? parseInt(r.priceRange.split('~')[0]).toLocaleString() : null
  const priceMax = r.priceRange ? parseInt(r.priceRange.split('~')[1] || r.priceRange.split('~')[0]).toLocaleString() : null

  // 감성 인트로 + 이미지
  const intro = buildIntro(r)

  // 메타 desc
  const metaDesc = `${r.name} — 영통 ${r.type} 맛집. ${r.addr} 위치, 영업시간 ${formatHours(r.hours)}. Google 평점 ⭐${r.rt} (${r.cnt?.toLocaleString()}개 리뷰). ${r.tags?.slice(0,3).join('·')} 특징. 오늘뭐먹지 AI 추천.`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": r.name,
    "description": metaDesc,
    "url": pageUrl,
    "servesCuisine": r.type,
    "address": { "@type":"PostalAddress", "streetAddress":r.addr !== 'South Korea' ? r.addr : '', "addressLocality":"경기도 수원시 영통구", "addressCountry":"KR" },
    "geo": { "@type":"GeoCoordinates", "latitude":r.lat, "longitude":r.lng },
    "aggregateRating": { "@type":"AggregateRating", "ratingValue":r.rt, "reviewCount":r.cnt, "bestRating":5, "worstRating":1 },
    "openingHours": r.hours,
    "priceRange": r.priceRange ? `₩${fmtPrice(r.priceRange)}` : undefined,
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type":"Question", "name":`${r.name} 영업시간은?`, "acceptedAnswer":{ "@type":"Answer", "text":r.hours } },
      { "@type":"Question", "name":`${r.name} 위치(주소)는?`, "acceptedAnswer":{ "@type":"Answer", "text":`수원 영통구 ${r.addr} (영통 근처)` } },
      { "@type":"Question", "name":`${r.name} 가격대는?`, "acceptedAnswer":{ "@type":"Answer", "text": r.priceRange ? `1인 기준 약 ${fmtPrice(r.priceRange)}원입니다.` : '가격 정보는 매장에 직접 문의 바랍니다.' } },
      { "@type":"Question", "name":`${r.name} 주차 가능한가요?`, "acceptedAnswer":{ "@type":"Answer", "text":'영통 인근 공영주차장 또는 코엑스 주차장을 이용하시거나 대중교통을 권장합니다.' } },
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type":"ListItem", "position":1, "name":"오늘뭐먹지", "item":"https://gangnamwhat.com" },
      { "@type":"ListItem", "position":2, "name":"영통 맛집", "item":"https://gangnamwhat.com/samsungElectronics/yeongtong" },
      slug && { "@type":"ListItem", "position":3, "name":`영통 ${catName}`, "item":`https://gangnamwhat.com/samsungElectronics/yeongtong/category/${slug}` },
      { "@type":"ListItem", "position": slug ? 4 : 3, "name":r.name, "item":pageUrl },
    ].filter(Boolean)
  }

  return (
    <Layout title={`${r.name} | 영통 ${r.type}`} description={metaDesc} canonical={pageUrl}>
      <Head>
        <meta name="keywords" content={`${r.name}, 영통 ${r.type}, 강남 ${r.type}, ${r.tags?.join(', ')}`} />
        <meta property="og:title" content={`${r.name} — 영통 ${r.type} 맛집`} />
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
          <Link href="/samsungElectronics/yeongtong" style={{ color:'var(--muted)' }}>영통 맛집</Link> <span>›</span>
          {slug && <><Link href={`/samsungElectronics/yeongtong/category/${slug}`} style={{ color:'var(--muted)' }}>영통 {catName}</Link> <span>›</span></>}
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
                {r.exit4 && <span style={{ fontSize:'.7rem', background:'#1a1a00', padding:'2px 8px', borderRadius:100, border:'1px solid #4a4a00', color:'#ffd700' }}>🚇 4번출구 근처</span>}
              </div>
              {r.addr && r.addr !== 'South Korea' && <p style={{ fontSize:'.84rem', color:'var(--muted)', marginBottom:4 }}>📍 수원 영통구 {r.addr}</p>}
              <p style={{ fontSize:'.84rem', color:'var(--muted)' }}>🕐 {formatHours(r.hours)}</p>
            </div>
          </div>
          <div style={{ display:'flex', gap:8, marginTop:16, flexWrap:'wrap' }}>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer"
              style={{ padding:'9px 18px', borderRadius:10, background:'var(--primary)', color:'#fff', fontSize:'.85rem', fontWeight:700, textDecoration:'none' }}>
              📍 지도로 보기
            </a>
            <Link href="/samsungElectronics/yeongtong"
              style={{ padding:'9px 18px', borderRadius:10, background:'var(--surface2)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.85rem', textDecoration:'none' }}>
              ✨ AI 맞춤 추천 받기
            </Link>
          </div>
        </div>
      </section>

      {/* 본문 */}
      <article style={{ maxWidth:760, margin:'0 auto', padding:'28px 16px 60px' }}>

        {/* 기본 정보 표 */}
        <h2 style={h2style}>📋 기본 정보</h2>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.88rem', marginBottom:28 }}>
          <tbody>
            {[
              ['식당 종류', r.type],
              ['주소', r.addr && r.addr !== 'South Korea' ? `수원 영통구 ${r.addr}` : '위치 정보 준비 중'],
              ['영업시간', r.hours],
              ['가격대', r.priceRange ? `1인 약 ${fmtPrice(r.priceRange)}원` : '매장 문의'],
              ['Google 평점', `⭐ ${r.rt}점 (${r.cnt?.toLocaleString()}개 리뷰 기준)`],
              ['영통 4번출구', r.exit4 ? '✅ 도보 3분 이내' : '영통 도보권 내'],
            ].map(([label, val], i) => (
              <tr key={i} style={{ borderBottom:'1px solid var(--border)', background: i%2===0 ? 'transparent' : 'var(--surface)' }}>
                <td style={{ padding:'10px 14px', color:'var(--muted)', whiteSpace:'nowrap', width:110 }}>{label}</td>
                <td style={{ padding:'10px 14px' }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>

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

        {/* 방문자 키워드 뱃지 */}
        {r.keywords?.length > 0 && (<><h2 style={h2style}>🏷️ 방문자 키워드</h2><div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:24 }}>{r.keywords.map((kw, i) => (<span key={i} style={{ padding:'5px 12px', borderRadius:100, fontSize:'.78rem', background:'linear-gradient(135deg, rgba(99,102,241,.15), rgba(168,85,247,.15))', border:'1px solid rgba(99,102,241,.3)', color:'#a78bfa' }}>{kw}</span>))}</div></>)}

        {/* 메뉴 & 가격 */}
        <h2 style={h2style}>🍽️ 메뉴 & 가격</h2>
        {r.menuItems?.length > 0 ? (<><p style={pstyle}><strong>{r.name}</strong>의 대표 메뉴와 가격입니다.</p><table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.88rem', marginBottom:28 }}><thead><tr style={{ borderBottom:'2px solid var(--border)' }}><th style={{ padding:'10px 14px', textAlign:'left', color:'var(--muted)', fontWeight:600 }}>메뉴</th><th style={{ padding:'10px 14px', textAlign:'right', color:'var(--muted)', fontWeight:600 }}>가격</th></tr></thead><tbody>{r.menuItems.map((mi, i) => (<tr key={i} style={{ borderBottom:'1px solid var(--border)', background: i%2===0 ? 'transparent' : 'var(--surface)' }}><td style={{ padding:'10px 14px' }}>{mi.name}</td><td style={{ padding:'10px 14px', textAlign:'right', fontWeight:600 }}>{mi.price ? `${mi.price.toLocaleString()}원` : '-'}</td></tr>))}</tbody></table></>) : (<><p style={pstyle}><strong>{r.name}</strong>의 대표 메뉴와 가격대입니다. 정확한 메뉴는 방문 전 매장에 확인하세요.</p><ul style={{ ...ulstyle }}>{r.tags?.filter(t => !['리뷰5000+','리뷰1000+','리뷰500+','아침가능','주차가능','혼밥가능','단체가능','깔끔','친절','빠름','넓음','조용함','가성비','혼밥','데이트','뷰맛집','분위기좋음','노포','힙함','모던','캐주얼','라이브음악','포차감성','프라이빗','룸'].includes(t) && !['깔끔','친절','빠름','넓음','조용함','가성비','힙한 곳','모던','캐주얼','라이브음악','포차감성','프라이빗','분위기최고'].some(kw => t.includes(kw))).map((tag, i) => (<li key={i} style={listyle}><strong>{tag}</strong></li>))}{r.priceRange && (<li style={listyle}>1인 평균 가격: <strong>{priceMin}원 ~ {priceMax}원</strong></li>)}</ul></>)}

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

        {/* 실제 리뷰 */}
        {r.rv?.length > 0 && (
          <>
            <h2 style={h2style}>💬 방문자 후기 요약</h2>
            <p style={pstyle}>
              실제 방문자들이 자주 언급한 키워드를 요약했습니다.
            </p>
            {r.rv.filter(rv => rv != null && rv.trim() !== '').map((rv, i) => {
              const ratingMatch = rv.match(/^\[([0-9.]+)★\]\s*/)
              const indivRt = ratingMatch ? parseFloat(ratingMatch[1]) : null
              const text = rv.replace(/^\[[0-9.]+★\]\s*/, '')
              return (
                <div key={i} style={{
                  marginBottom:10, padding:'10px 14px',
                  background:'var(--surface)', border:'1px solid var(--border)',
                  borderRadius:10, width:'100%', boxSizing:'border-box',
                }}>
                  {indivRt && (
                    <span style={{ fontSize:'.73rem', fontWeight:700, color:'var(--primary)', display:'block', marginBottom:4 }}>
                      ⭐ {indivRt}
                    </span>
                  )}
                  <p style={{ margin:0, fontSize:'.82rem', color:'var(--text)', lineHeight:1.65, wordBreak:'break-all', overflowWrap:'anywhere', whiteSpace:'normal' }}>
                    {text}
                  </p>
                </div>
              )
            })}
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

        {/* 효능 섹션 (유머) */}
        {effect && (
          <>
            <h2 style={h2style}>🔬 {effect.title}</h2>
            <p style={pstyle}>
              과학적 근거는 없지만, 수많은 직장인의 체감 데이터를 기반으로 정리했습니다. (진지주의)
            </p>
            <ul style={ulstyle}>
              {effect.items.map((item, i) => (
                <li key={i} style={listyle}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* 위치 & 찾아가는 법 */}
        <h2 style={h2style}>🗺️ 위치 & 찾아가는 법</h2>
        <p style={pstyle}>
          <strong>{r.name}</strong>은 수원 영통구 {r.addr}에 위치한 영통 맛집입니다.
          {r.exit4
            ? ' 영통 4번출구에서 도보 3분 이내로 접근성이 매우 좋습니다.'
            : ' 영통에서 도보로 이동 가능합니다. 정확한 경로는 지도를 참고해주세요.'}
        </p>
        <ul style={ulstyle}>
          <li style={listyle}><strong>지하철</strong> — 2호선·수인분당선 영통 하차</li>
          {r.exit4
            ? <li style={listyle}><strong>도보</strong> — 4번출구 기준 약 3분 이내</li>
            : <li style={listyle}><strong>도보</strong> — 영통 각 출구에서 도보 5~10분 내외</li>}
          <li style={listyle}><strong>주차</strong> — 코엑스 주차장 또는 인근 공영주차장 이용 가능</li>
        </ul>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'9px 18px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.85rem', textDecoration:'none', marginBottom:28 }}>
          📍 네이버 지도에서 경로 보기
        </a>

        {/* FAQ */}
        <h2 style={h2style}>❓ 자주 묻는 질문 (FAQ)</h2>
        {[
          [`${r.name} 영업시간이 어떻게 되나요?`, `${r.name}의 영업시간은 ${formatHours(r.hours)}입니다. 방문 전 변경 여부를 확인하시길 권장합니다.`],
          [`${r.name} 주소(위치)는 어디인가요?`, `경기도 수원시 영통구 ${r.addr}에 위치합니다. 영통${r.exit4 ? ' 인근' : ' 인근'}입니다.`],
          [`${r.name} 가격이 얼마인가요?`, r.priceRange ? `1인 기준 약 ${fmtPrice(r.priceRange)}원 선입니다. 메뉴와 구성에 따라 다를 수 있습니다.` : '정확한 가격은 매장에 문의하거나 방문 시 메뉴판을 확인해 주세요.'],
          [`${r.name} 혼밥 가능한가요?`, r.moods?.includes('혼밥') ? '네, 혼밥하기 좋은 분위기입니다. 혼자 방문해도 전혀 어색하지 않아요.' : '매장 좌석 구성에 따라 다르니 방문 전 확인을 권장합니다.'],
        ].map(([q, a], i) => (
          <div key={i} style={{ marginBottom:14, background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, overflow:'hidden' }}>
            <div style={{ padding:'12px 16px', fontWeight:700, fontSize:'.88rem', borderBottom:'1px solid var(--border)' }}>Q. {q}</div>
            <div style={{ padding:'12px 16px', fontSize:'.86rem', color:'var(--muted)', lineHeight:1.7 }}>A. {a}</div>
          </div>
        ))}

        {/* 비슷한 맛집 */}
        {similar?.length > 0 && (
          <>
            <h2 style={h2style}>🍽️ 영통 {r.type} 맛집 더 보기</h2>
            <p style={pstyle}>
              <strong>{r.name}</strong>와 비슷한 영통 {r.type} 맛집을 더 추천해드립니다.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:10, marginBottom:28 }}>
              {similar.map((s, i) => (
                <Link href={`/samsungElectronics/yeongtong/restaurant/${encodeURIComponent(s.name)}`} key={i}>
                  <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:10, padding:'12px 14px', cursor:'pointer' }}>
                    <div style={{ fontWeight:700, fontSize:'.9rem', marginBottom:5 }}>{s.e} {s.name}</div>
                    <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
                      <span className="tag">⭐ {s.rt}</span>
                      {s.priceRange && <span className="tag price">💰 {fmtPrice(s.priceRange)}원</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* 하단 네비 */}
        <div style={{ display:'flex', gap:10, flexWrap:'wrap', paddingTop:20, borderTop:'1px solid var(--border)' }}>
          {slug && (
            <Link href={`/samsungElectronics/yeongtong/category/${slug}`}
              style={{ padding:'9px 16px', borderRadius:10, background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', fontSize:'.84rem', textDecoration:'none' }}>
              ← 영통 {catName} 전체 보기
            </Link>
          )}
          <Link href="/samsungElectronics/yeongtong"
            style={{ padding:'9px 16px', borderRadius:10, background:'var(--primary)', color:'#fff', fontSize:'.84rem', fontWeight:700, textDecoration:'none' }}>
            ✨ AI 맞춤 추천 받기
          </Link>
        </div>

      </article>
    </Layout>
  )
}

// 스타일 상수
const h2style = { fontSize:'1rem', fontWeight:800, marginBottom:12, marginTop:32, paddingBottom:8, borderBottom:'1px solid var(--border)', color:'var(--text)' }
const pstyle  = { fontSize:'.88rem', color:'var(--muted)', lineHeight:1.8, marginBottom:14 }
const ulstyle = { paddingLeft:0, marginBottom:24, listStyle:'none' }
const listyle = { fontSize:'.87rem', color:'var(--text)', padding:'7px 0', borderBottom:'1px solid var(--border)', lineHeight:1.7, paddingLeft:14, position:'relative' }
