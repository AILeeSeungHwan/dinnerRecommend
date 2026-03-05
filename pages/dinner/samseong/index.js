import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import restaurants from '../../../data/samseong'

// ─── 분류 맵 ───────────────────────────────────────────
const NL_MENU_MAP = [
  {patterns:/야장|포장마차|포차|노천|치킨.*야외/i, cats:['야장','치킨','이자카야'], label:'🍺 야장·포차'},
  {patterns:/치맥|치킨.*맥주|후라이드|양념치킨|통닭/i, cats:['치킨','야장'], label:'🍗 치킨'},
  {patterns:/맥주|이자카야|안주|사케|일본술/i, cats:['이자카야','야장','와인바'], label:'🍶 이자카야'},
  {patterns:/국밥|해장|해장국|뼈해장|순대국|설렁탕|곰탕/i, cats:['국밥','국물','한식'], label:'🥣 국밥·해장'},
  {patterns:/칼국수|수제비|칼제비/i, cats:['칼국수','면류','한식'], label:'🍜 칼국수'},
  {patterns:/고기|구이|삼겹살|목살|갈비살|한우|등심|소고기|돼지고기|BBQ/i, cats:['고기구이','한식'], label:'🥩 고기구이'},
  {patterns:/회식|단체|단체석|프라이빗|룸/i, cats:['이자카야','고기구이','중식'], label:'🎉 회식·단체'},
  {patterns:/중식|짜장|짬뽕|탕수육|딤섬|마라탕|훠궈/i, cats:['중식','훠궈'], label:'🥢 중식'},
  {patterns:/파스타|피자|이탈리안|리조또|양식/i, cats:['양식','이탈리안'], label:'🍝 이탈리안'},
  {patterns:/스테이크|등심스테이크|ribeye|립아이/i, cats:['스테이크','양식'], label:'🥩 스테이크'},
  {patterns:/일식|스시|초밥|사시미|오마카세/i, cats:['이자카야','일식'], label:'🍣 일식'},
  {patterns:/혼밥|혼자|1인/i, cats:['국밥','칼국수','한식'], label:'🙍 혼밥'},
  {patterns:/술|와인|소주|막걸리/i, cats:['이자카야','야장','와인바'], label:'🍷 주류'},
]

const WEATHER_LABELS = ['맑음','흐림','비','눈','쌀쌀함','덥고 습함']
const MOOD_LABELS = ['기분 좋음','피곤함','스트레스 받음','혼밥','축하할 일 있음','허전함','데이트','회식']

const CATEGORIES = [
  {emoji:'🥣', name:'국밥·해장', slug:'gukbap', cats:['국밥','국물']},
  {emoji:'🥩', name:'고기구이·한우', slug:'meat', cats:['고기구이','한식']},
  {emoji:'🏮', name:'이자카야', slug:'izakaya', cats:['이자카야']},
  {emoji:'🍜', name:'중식', slug:'chinese', cats:['중식','훠궈']},
  {emoji:'🍝', name:'이탈리안·양식', slug:'western', cats:['양식','이탈리안','스테이크']},
  {emoji:'🎉', name:'회식·단체', slug:'group', cats:['회식']},
  {emoji:'🐔', name:'치킨·야장', slug:'chicken', cats:['치킨','야장']},
  {emoji:'🍣', name:'일식·스시', slug:'japanese', cats:['이자카야','일식']},
]

// ─── 스코어링 로직 ─────────────────────────────────────
function detectMenu(query, moods, weather) {
  const t = `${query} ${moods.join(' ')} ${weather}`.toLowerCase()
  for (const m of NL_MENU_MAP) { if (m.patterns.test(t)) return m }
  return null
}

function preScore(query, moods, weather, cands) {
  const q = `${query} ${moods.join(' ')} ${weather}`.toLowerCase()
  return cands.map(r => {
    let s = 0
    const blob = `${r.name} ${r.type} ${r.tags?.join(' ')||''} ${r.scene?.join(' ')||''} ${r.moods?.join(' ')||''} ${r.wx?.join(' ')||''}`
    moods.forEach(m => { if (blob.includes(m)) s += 15 })
    if (blob.includes(weather)) s += 10
    r.tags?.forEach(t => { if (q.includes(t.toLowerCase())) s += 20 })
    r.scene?.forEach(sc => { if (q.includes(sc.toLowerCase())) s += 18 })
    const words = q.split(/\s+/).filter(w => w.length > 1)
    words.forEach(w => { if (blob.toLowerCase().includes(w)) s += 5 })
    s += (r.rt || 0) * 3
    return { ...r, _score: s }
  }).sort((a, b) => b._score - a._score)
}

// ─── 가격 필터 ─────────────────────────────────────────
function parsePriceFilter(query) {
  const m = query.match(/(\d+)[,.]?(\d{3})?원?\s*(이하|미만|대|이상|초과)?/)
  if (!m) return null
  const amount = m[1] + (m[2] || '')
  const val = parseInt(amount)
  const dir = m[3] || '이하'
  return { val, dir }
}

function filterByPrice(cands, pf) {
  if (!pf) return cands
  return cands.filter(r => {
    if (!r.priceRange) return false
    const [minStr, maxStr] = r.priceRange.split('~')
    const avg = (parseInt(minStr) + parseInt(maxStr || minStr)) / 2
    if (pf.dir === '이하' || pf.dir === '미만') return avg <= pf.val
    if (pf.dir === '이상' || pf.dir === '초과') return avg >= pf.val
    // "대" → 범위 내
    return avg >= pf.val * 0.7 && avg <= pf.val * 1.4
  })
}

// ─── AI 추천 컴포넌트 ──────────────────────────────────
function AiApp() {
  const [ctx, setCtx] = useState('')
  const [weather, setWeather] = useState('')
  const [moods, setMoods] = useState([])
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(false)
  const [loadingMsg, setLoadingMsg] = useState('')
  const resultsRef = useRef(null)

  const msgs = ['🤔 맛집 찾는 중...', '📍 위치 분석 중...', '⭐ 리뷰 검토 중...', '🎯 최적 매칭 중...']

  async function getRecommendations() {
    setLoading(true)
    setError(false)
    setResults(null)
    let mi = 0
    setLoadingMsg(msgs[0])
    const iv = setInterval(() => {
      mi = (mi + 1) % msgs.length
      setLoadingMsg(msgs[mi])
    }, 1200)

    try {
      const mm = detectMenu(ctx, moods, weather)
      const pf = parsePriceFilter(ctx)
      let cands = mm
        ? restaurants.filter(r => mm.cats.some(c => r.cat?.includes(c)))
        : restaurants
      if (pf) cands = filterByPrice(cands, pf)
      if (cands.length < 5) cands = restaurants
      const top20 = preScore(ctx, moods, weather, cands).slice(0, 20)

      const rData = JSON.stringify(top20.map(r => ({
        name: r.name, type: r.type, rating: r.rt, ratingCount: r.cnt,
        addr: r.addr, hours: r.hours, tags: r.tags, moods: r.moods,
        weathers: r.wx, scene: r.scene, priceRange: r.priceRange || null,
        actualReviews: r.rv
      })))

      const prompt = `당신은 삼성역 주변 맛집 전문 추천 AI입니다.
사용자 입력을 분석해 가장 잘 맞는 식당 TOP3를 추천하세요.
reviewHighlight는 반드시 actualReviews 필드의 내용만 사용하세요. 절대 리뷰를 지어내지 마세요.
가격 조건 언급 시(8천원대·만원 이하·저렴한·가성비 등) priceRange 필드 기준으로 조건에 맞는 식당만 추천하세요.

사용자 입력:
- 자유 입력: "${ctx || '없음'}"
- 날씨: ${weather}
- 기분: ${moods.length > 0 ? moods.join(', ') : '없음'}
${mm ? `- 감지된 메뉴: ${mm.label}` : ''}

후보 식당 (${top20.length}개, 관련도 순):
${rData}

반드시 아래 JSON 형식으로만 응답 (코드블럭 없이):
{"recommendations":[{"rank":1,"restaurantName":"정확한 식당 이름","reason":"추천 이유 2~3문장","reviewHighlight":"actualReviews에서 발췌한 핵심 문구","matchScore":95},{"rank":2,"restaurantName":"...","reason":"...","reviewHighlight":"...","matchScore":90},{"rank":3,"restaurantName":"...","reason":"...","reviewHighlight":"...","matchScore":85}]}`

      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      clearInterval(iv)
      setLoading(false)
      setResults(data.recommendations)
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    } catch (err) {
      clearInterval(iv)
      setLoading(false)
      setError(true)
      console.error(err)
    }
  }

  return (
    <div style={{ padding: '24px 20px' }}>
      {/* 입력 영역 */}
      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', fontSize: '.8rem', color: 'var(--muted)', marginBottom: 6 }}>
          💬 어떤 식당을 찾나요?
        </label>
        <textarea
          value={ctx}
          onChange={e => setCtx(e.target.value)}
          placeholder="예: 회식 장소 찾아줘, 8천원대 해장국, 오늘 데이트 코스..."
          style={{
            width: '100%', minHeight: 70, background: 'var(--surface2)',
            border: '1px solid var(--border)', borderRadius: 10,
            color: 'var(--text)', padding: '10px 14px', fontSize: '.9rem',
            resize: 'vertical', outline: 'none', fontFamily: 'inherit'
          }}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); getRecommendations() } }}
        />
      </div>

      {/* 날씨 */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: 8 }}>🌤️ 날씨</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {WEATHER_LABELS.map(w => (
            <button key={w} onClick={() => setWeather(weather === w ? '' : w)}
              style={{
                padding: '6px 14px', borderRadius: 100, fontSize: '.8rem',
                border: `1px solid ${weather === w ? 'var(--primary)' : 'var(--border)'}`,
                background: weather === w ? 'var(--primary)' : 'var(--surface2)',
                color: weather === w ? '#fff' : 'var(--text)', cursor: 'pointer'
              }}>{w}</button>
          ))}
        </div>
      </div>

      {/* 기분 */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: 8 }}>😊 기분 (복수 선택)</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {MOOD_LABELS.map(m => (
            <button key={m} onClick={() => setMoods(prev => prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m])}
              style={{
                padding: '6px 14px', borderRadius: 100, fontSize: '.8rem',
                border: `1px solid ${moods.includes(m) ? 'var(--accent)' : 'var(--border)'}`,
                background: moods.includes(m) ? 'var(--accent)' : 'var(--surface2)',
                color: moods.includes(m) ? '#fff' : 'var(--text)', cursor: 'pointer'
              }}>{m}</button>
          ))}
        </div>
      </div>

      <button onClick={getRecommendations} disabled={loading}
        className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
        {loading ? loadingMsg : '✨ AI 추천 받기'}
      </button>

      {error && (
        <div style={{ marginTop: 16, padding: 16, background: '#2a1111', borderRadius: 10, color: '#ff8888', fontSize: '.88rem' }}>
          추천을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
        </div>
      )}

      {/* 결과 */}
      {results && (
        <div ref={resultsRef} style={{ marginTop: 28 }}>
          <div style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: 16 }}>AI 추천 결과</div>
          {results.map((rec, i) => {
            const r = restaurants.find(x => x.name === rec.restaurantName) || restaurants[i]
            if (!r) return null
            const medals = ['🥇','🥈','🥉']
            return (
              <div key={i} style={{
                background: 'var(--surface2)', border: '1px solid var(--border)',
                borderRadius: 14, padding: '18px 16px', marginBottom: 14,
                borderLeft: `3px solid ${i === 0 ? '#ffd700' : i === 1 ? '#c0c0c0' : '#cd7f32'}`
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: '1.6rem' }}>{medals[i]}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '1rem', fontWeight: 700 }}>{r.e} {r.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 5 }}>
                      <span className="tag">{r.type}</span>
                      <span className="tag rating">⭐ {r.rt} ({r.cnt?.toLocaleString()})</span>
                      {r.priceRange && <span className="tag price">💰 {r.priceRange}원</span>}
                      <span className="tag">🕐 {r.hours}</span>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '.88rem', color: '#d0d0e0', marginBottom: 10, lineHeight: 1.6 }}>
                  {rec.reason}
                </p>
                <div style={{
                  background: 'var(--surface)', borderLeft: '3px solid var(--primary)',
                  borderRadius: '0 8px 8px 0', padding: '8px 12px',
                  fontSize: '.82rem', color: 'var(--muted)', marginBottom: 10
                }}>
                  💬 "{rec.reviewHighlight}"
                </div>
                {r.rv?.slice(0,1).map((rv, ri) => (
                  <div key={ri} style={{
                    fontSize: '.78rem', color: '#888', padding: '6px 10px',
                    background: 'var(--surface)', borderRadius: 6, marginBottom: 6
                  }}>
                    {rv.replace(/ \(실제 Google 리뷰.*?\)/, '')}
                  </div>
                ))}
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' 삼성역')}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    marginTop: 6, padding: '6px 14px', borderRadius: 8,
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    fontSize: '.8rem', color: 'var(--muted)'
                  }}>
                  📍 지도에서 보기
                </a>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ─── 삼성역 메인 페이지 ────────────────────────────────
export default function SamseongPage() {
  const [activeTab, setActiveTab] = useState('ai')

  const topRated = [...restaurants].sort((a, b) => b.rt - a.rt).slice(0, 6)

  return (
    <>
      <Head>
        <title>삼성역 맛집 추천 AI | 코엑스·테헤란로 170개+ 식당 | dinner.ambitstock</title>
        <meta name="description" content="삼성역 맛집 AI 추천 서비스. 국밥, 이자카야, 한우, 중식, 이탈리안 등 170개+ 식당을 날씨·기분·예산에 맞게 추천합니다. 회식장소, 데이트 코스, 혼밥 맛집 포함." />
        <meta name="keywords" content="삼성역 맛집, 삼성역 맛집 추천, 코엑스 맛집, 삼성동 맛집, 강남 맛집, 회식 장소 삼성역" />
        <link rel="canonical" href="https://dinner.ambitstock.com/dinner/samseong" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "삼성역 맛집 추천 리스트",
          "description": "삼성역 주변 맛집 170개+ AI 추천",
          "url": "https://dinner.ambitstock.com/dinner/samseong",
          "numberOfItems": restaurants.length,
          "itemListElement": topRated.slice(0, 5).map((r, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": r.name,
            "description": `${r.type} | ⭐${r.rt} | ${r.addr}`
          }))
        })}} />
      </Head>

      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ padding: '12px 16px' }}>
          <div className="breadcrumb">
            <Link href="/">홈</Link>
            <span>›</span>
            <span style={{ color: 'var(--text)' }}>삼성역</span>
          </div>
        </div>
      </div>

      {/* 히어로 */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a22 0%, #0f0f13 100%)',
        padding: '48px 16px 32px',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', fontWeight: 900, marginBottom: 10 }}>
            🏙️ 삼성역 맛집 추천
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '.95rem', marginBottom: 20 }}>
            코엑스·파르나스·테헤란로 주변 <strong style={{ color: 'var(--text)' }}>{restaurants.length}개+</strong> 식당을
            AI가 추천해드립니다
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['국밥·해장', '한우·고기구이', '이자카야', '중식', '회식장소', '가성비 점심'].map(t => (
              <span key={t} className="tag"># {t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '24px 16px' }}>
        {/* 탭 */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 24, borderBottom: '1px solid var(--border)', paddingBottom: 0 }}>
          {[
            { id: 'ai', label: '✨ AI 추천' },
            { id: 'browse', label: '📋 전체 목록' },
            { id: 'categories', label: '🗂️ 카테고리' },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 18px', fontSize: '.88rem', fontWeight: activeTab === tab.id ? 700 : 400,
                background: 'none', border: 'none', cursor: 'pointer',
                color: activeTab === tab.id ? 'var(--primary)' : 'var(--muted)',
                borderBottom: activeTab === tab.id ? '2px solid var(--primary)' : '2px solid transparent',
                marginBottom: -1
              }}
            >{tab.label}</button>
          ))}
        </div>

        {/* AI 추천 탭 */}
        {activeTab === 'ai' && (
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 16, overflow: 'hidden'
          }}>
            <AiApp />
          </div>
        )}

        {/* 전체 목록 탭 */}
        {activeTab === 'browse' && (
          <BrowseTab restaurants={restaurants} />
        )}

        {/* 카테고리 탭 */}
        {activeTab === 'categories' && (
          <div>
            <div className="cat-grid">
              {CATEGORIES.map(cat => {
                const count = restaurants.filter(r => cat.cats.some(c => r.cat?.includes(c))).length
                return (
                  <Link href={`/dinner/samseong/category/${cat.slug}`} key={cat.slug}>
                    <div className="cat-card">
                      <div className="cat-emoji">{cat.emoji}</div>
                      <div className="cat-name">{cat.name}</div>
                      <div className="cat-count">{count}개</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* SEO 콘텐츠 */}
        <article style={{
          marginTop: 60, padding: '32px 24px',
          background: 'var(--surface)', borderRadius: 16, border: '1px solid var(--border)'
        }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16 }}>삼성역 맛집 가이드</h2>
          <p style={{ color: 'var(--muted)', fontSize: '.92rem', lineHeight: 1.8, marginBottom: 12 }}>
            <strong>삼성역 맛집</strong>은 코엑스몰, 파르나스타워, 현대백화점 무역센터 등 대형 상권과 함께
            테헤란로 골목골목에 숨어있는 개성 넘치는 식당들이 공존하는 지역입니다.
            삼성역 4번출구 방향으로는 직장인 점심 맛집들이 즐비하고, 코엑스 지하에는
            다양한 패밀리 레스토랑과 카페가 자리잡고 있습니다.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '.92rem', lineHeight: 1.8, marginBottom: 12 }}>
            <strong>삼성역 회식 장소</strong>로는 프라이빗 룸을 갖춘 이자카야와 한우 전문점이 인기입니다.
            웨어하우스43, 대도식당, 수다 삼성점 등이 단체 모임에 특히 적합하며,
            코엑스 지하의 무탄 중식당, 하이딜라오 훠궈 등도 회식 장소로 각광받고 있습니다.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '.92rem', lineHeight: 1.8 }}>
            <strong>삼성역 가성비 맛집</strong>을 찾는다면 중앙해장, 연화산 짬뽕, 리춍 중식당 등
            1만원 이하로도 든든하게 즐길 수 있는 곳들이 많습니다.
            AI 추천 기능을 통해 오늘 날씨와 기분, 예산에 맞는 식당을 바로 찾아보세요.
          </p>
        </article>
      </div>
    </>
  )
}

// ─── 전체 목록 탭 컴포넌트 ────────────────────────────
function BrowseTab({ restaurants }) {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('전체')

  const allCats = ['전체', '국밥', '고기구이', '이자카야', '중식', '양식', '치킨', '야장', '버거', '칼국수']

  const filtered = restaurants.filter(r => {
    const matchCat = activeCat === '전체' || r.cat?.includes(activeCat)
    const matchSearch = !search ||
      r.name.includes(search) || r.type.includes(search) ||
      r.tags?.some(t => t.includes(search)) || r.addr.includes(search)
    return matchCat && matchSearch
  })

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="🔍 식당명, 종류, 태그 검색..."
          style={{
            width: '100%', padding: '10px 14px', borderRadius: 10,
            background: 'var(--surface)', border: '1px solid var(--border)',
            color: 'var(--text)', fontSize: '.9rem', outline: 'none'
          }} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {allCats.map(cat => (
          <button key={cat} onClick={() => setActiveCat(cat)}
            style={{
              padding: '5px 12px', borderRadius: 100, fontSize: '.78rem',
              border: `1px solid ${activeCat === cat ? 'var(--primary)' : 'var(--border)'}`,
              background: activeCat === cat ? 'var(--primary)' : 'var(--surface2)',
              color: activeCat === cat ? '#fff' : 'var(--text)', cursor: 'pointer'
            }}>{cat} {activeCat === cat && `(${filtered.length})`}</button>
        ))}
      </div>
      <div className="restaurant-grid">
        {filtered.map((r, i) => (
          <Link href={`/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`} key={i}>
            <div className="restaurant-card">
              <div className="card-name">{r.e} {r.name}</div>
              <div className="card-meta">
                <span className="tag">{r.type}</span>
                <span className="tag rating">⭐ {r.rt}</span>
                {r.priceRange && <span className="tag price">💰 {r.priceRange}원</span>}
              </div>
              <div className="card-addr">📍 {r.addr}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
