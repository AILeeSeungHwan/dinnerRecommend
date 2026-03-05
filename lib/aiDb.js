/**
 * 강남뭐먹 AI 결과 로컬 DB
 *
 * 구조:
 * {
 *   "식당명": {
 *     "reason_키": ["AI가 생성한 추천이유1", "이유2", ...최대50개]
 *   }
 * }
 *
 * reason_키 = 날씨 + 기분조합(정렬) + 프롬프트핵심어
 * → 같은 조건이면 쌓인 데이터에서 뽑고, 다르면 AI 호출
 */

const DB_KEY    = 'gm-ai-db-v1'
const MAX_REASONS = 50

// ── 로드 / 저장 ───────────────────────────────────────────────
function load() {
  try { return JSON.parse(localStorage.getItem(DB_KEY) || '{}') } catch { return {} }
}
function save(db) {
  try { localStorage.setItem(DB_KEY, JSON.stringify(db)) } catch {}
}

// ── reason 키 생성 ────────────────────────────────────────────
// 날씨 + 기분(정렬) + 프롬프트 핵심어(20자)
export function makeReasonKey(weather, moods, prompt) {
  const wx   = weather || '무관'
  const md   = [...moods].sort().join(',') || '무관'
  const core = prompt.trim().toLowerCase().replace(/\s+/g, ' ').slice(0, 20)
  return `${wx}|${md}|${core}`
}

// ── 특정 식당×조건의 저장된 reason 수 ─────────────────────────
export function getReasonCount(restaurantName, reasonKey) {
  const db = load()
  return (db[restaurantName]?.[reasonKey] || []).length
}

// ── 전체 DB 통계 ──────────────────────────────────────────────
export function getDbStats() {
  const db = load()
  let totalRestaurants = 0, totalReasons = 0, fullCount = 0
  for (const name of Object.keys(db)) {
    totalRestaurants++
    for (const key of Object.keys(db[name])) {
      const cnt = db[name][key].length
      totalReasons += cnt
      if (cnt >= MAX_REASONS) fullCount++
    }
  }
  return { totalRestaurants, totalReasons, fullCount }
}

// ── AI 결과 저장 ──────────────────────────────────────────────
// results: [{restaurantName, reason, reviewHighlight, matchScore}, ...]
export function saveResults(results, reasonKey) {
  const db = load()
  for (const rec of results) {
    const name = rec.restaurantName
    if (!db[name]) db[name] = {}
    if (!db[name][reasonKey]) db[name][reasonKey] = []

    // 중복 이유 방지
    if (!db[name][reasonKey].includes(rec.reason)) {
      db[name][reasonKey].push(rec.reason)
      if (db[name][reasonKey].length > MAX_REASONS) {
        db[name][reasonKey] = db[name][reasonKey].slice(-MAX_REASONS)
      }
    }
  }
  save(db)
}

// ── 저장된 데이터로 결과 생성 ─────────────────────────────────
// lastNames: 직전에 보여준 식당명 배열 (중복 방지)
export function getStoredResults(candidates, reasonKey, lastNames = []) {
  const db = load()

  // 각 후보 식당에 대해 저장된 reason이 있는지 확인하고 점수 매기기
  const scored = candidates.map(r => {
    const reasons = db[r.name]?.[reasonKey] || []

    // 더 넓은 키로도 검색 (날씨만 다를 때, 기분만 다를 때)
    const allReasons = []
    if (reasons.length > 0) allReasons.push(...reasons)

    // fallback: 이 식당의 모든 reason 중 랜덤
    if (allReasons.length === 0 && db[r.name]) {
      for (const k of Object.keys(db[r.name])) {
        allReasons.push(...db[r.name][k])
      }
    }

    return { ...r, _storedReasons: allReasons }
  }).filter(r => r._storedReasons.length > 0)

  if (scored.length < 3) return null // 데이터 부족

  // 이전 결과와 겹치지 않는 식당 우선
  const notLast  = scored.filter(r => !lastNames.includes(r.name))
  const pool     = notLast.length >= 3 ? notLast : scored

  // 평점 + 데이터 풍부도 기준 정렬
  const sorted = [...pool].sort((a, b) =>
    (b._storedReasons.length * 0.3 + b.rt * 10) - (a._storedReasons.length * 0.3 + a.rt * 10)
  )

  // 상위 후보 중 약간의 랜덤성 (상위 10개 중 3개 랜덤)
  const topPool = sorted.slice(0, Math.min(10, sorted.length))
  const shuffled = [...topPool].sort(() => Math.random() - 0.5).slice(0, 3)

  return shuffled.map((r, i) => {
    // 저장된 reason 중 랜덤 선택
    const reasons = r._storedReasons
    const reason  = reasons[Math.floor(Math.random() * reasons.length)]
    const rv      = (r.rv?.[0] || '').replace(/ \(실제 Google 리뷰.*?\)/g, '')
    return {
      rank:            i + 1,
      restaurantName:  r.name,
      reason,
      reviewHighlight: rv,
      matchScore:      Math.min(99, Math.round(75 + Math.random() * 20)),
      _fromDb:         true,
    }
  })
}

// ── 식당×조건이 충분히 쌓였는지 (threshold 기준) ──────────────
export function hasEnoughData(candidates, reasonKey, threshold = 5) {
  const db = load()
  const covered = candidates.filter(r => {
    const direct  = (db[r.name]?.[reasonKey] || []).length
    const fallback = db[r.name] ? Object.values(db[r.name]).flat().length : 0
    return direct > 0 || fallback >= 2
  })
  // 후보의 절반 이상에 데이터 있으면 충분
  return covered.length >= Math.max(3, candidates.length * 0.4)
}

export { MAX_REASONS }
