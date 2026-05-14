import Link from 'next/link'

const CAT_SLUG_BY_KEYWORD = {
  '고기구이':'meat','한우':'meat','갈비':'meat','삼겹':'meat','곱창':'meat','족발':'meat',
  '일식':'japanese','스시':'japanese','초밥':'japanese','오마카세':'japanese','라멘':'japanese','돈카츠':'japanese',
  '중식':'chinese','중국':'chinese','마라':'chinese','짜장':'chinese','짬뽕':'chinese','훠궈':'chinese','양꼬치':'chinese',
  '이자카야':'izakaya','술집':'izakaya','포차':'izakaya','와인바':'izakaya',
  '양식':'western','이탈리안':'western','파스타':'western','스테이크':'western','피자':'western',
  '치킨':'chicken','야장':'chicken',
  '국밥':'gukbap','순대':'gukbap','곰탕':'gukbap','설렁탕':'gukbap','해장':'gukbap',
}

const CAT_LABEL = {
  meat:'고기집', japanese:'일식·스시', chinese:'중식', izakaya:'이자카야·술집',
  western:'양식·스테이크', chicken:'치킨·야장', gukbap:'국밥·해장',
}

const REGION_NAME = {
  samseong:'삼성역', jamsil:'잠실', pangyo:'판교', suji:'수지구청역',
  gangnam:'강남역', yeongtong:'영통역', mangpo:'망포역', yeongtongGu:'영통구청',
}
const REGION_PATH = {
  samseong:'/dinner/samseong', jamsil:'/dinner/jamsil', pangyo:'/pangyo', suji:'/suji',
  gangnam:'/dinner/gangnam', yeongtong:'/samsungElectronics/yeongtong',
  mangpo:'/samsungElectronics/mangpo', yeongtongGu:'/samsungElectronics/yeongtongGu',
}

function pickCategory(r) {
  const cats = Array.isArray(r.cat) ? r.cat : (r.cat ? [r.cat] : [])
  const type = (r.type || '').toString()
  for (const c of cats) {
    for (const [kw, slug] of Object.entries(CAT_SLUG_BY_KEYWORD)) {
      if (c.includes(kw)) return slug
    }
  }
  for (const [kw, slug] of Object.entries(CAT_SLUG_BY_KEYWORD)) {
    if (type.includes(kw)) return slug
  }
  return null
}

export default function CategorySuggestButton({ restaurant, region }) {
  const slug = pickCategory(restaurant)
  if (!slug) return null
  const regName = REGION_NAME[region] || region
  const regPath = REGION_PATH[region] || `/dinner/${region}`
  const catLabel = CAT_LABEL[slug] || slug

  return (
    <div style={{ margin:'20px auto 24px', maxWidth:520 }}>
      <Link href={`${regPath}/category/${slug}`} style={{ textDecoration:'none' }}>
        <div style={{
          padding:'18px 22px', borderRadius:14,
          background:'linear-gradient(135deg, #FF6B6B 0%, #FFA94D 100%)',
          color:'#fff', textAlign:'center',
          boxShadow:'0 8px 22px rgba(255,107,107,.35)',
          cursor:'pointer', transition:'transform .15s',
        }}>
          <div style={{ fontSize:'.78rem', opacity:.92, marginBottom:6, fontWeight:600 }}>
            🔥 {regName}에 또 다른 {catLabel}, 어디가 있을까?
          </div>
          <div style={{ fontSize:'1.05rem', fontWeight:900, letterSpacing:'-0.01em' }}>
            지금 평점 높은 {catLabel} BEST 비교 →
          </div>
        </div>
      </Link>
    </div>
  )
}
