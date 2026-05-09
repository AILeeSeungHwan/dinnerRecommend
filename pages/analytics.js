/**
 * pages/analytics.js — 오늘뭐먹지 통계 대시보드
 * car.ambitstock.com/searchAnalytics 구조 참고
 *
 * Supabase 테이블: pageviews
 *   slug, title, source, keyword, ip, user_agent, created_at
 */
import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import posts from '../data/posts'

const DOMAIN = 'https://dinner.ambitstock.com'

const SOURCE_META = {
  google:   { label: 'Google',    color: '#4285F4', icon: '🔍' },
  naver:    { label: 'Naver',     color: '#03C75A', icon: '🟢' },
  daum:     { label: 'Daum',      color: '#FFCD00', icon: '🟡' },
  bing:     { label: 'Bing',      color: '#008373', icon: '🔵' },
  zum:      { label: 'ZUM',       color: '#FF6600', icon: '🟠' },
  yahoo:    { label: 'Yahoo',     color: '#6001D2', icon: '🟣' },
  direct:   { label: '직접 접속', color: '#6b7280', icon: '🏠' },
  internal: { label: '내부 이동', color: '#8b5cf6', icon: '🔄' },
  other:    { label: '기타',      color: '#9ca3af', icon: '🌐' },
  unknown:  { label: '미분류',    color: '#30363d', icon: '❓' },
}

const HUB_PAGES = [
  { slug: '/',                         name: '홈' },
  { slug: '/pangyo',                   name: '판교' },
  { slug: '/dinner/samseong',          name: '삼성역' },
  { slug: '/dinner/jamsil',            name: '잠실' },
  { slug: '/samsungElectronics/yeongtong',  name: '영통' },
  { slug: '/samsungElectronics/mangpo',     name: '망포' },
  { slug: '/samsungElectronics/yeongtongGu',name: '영통구청' },
  { slug: '/suji',                     name: '수지' },
]

function kstNow() { return Date.now() + 9 * 3600000 }
function daysAgo(n) { return new Date(kstNow() - n * 86400000).toISOString().slice(0, 10) }
function today() { return new Date(kstNow()).toISOString().slice(0, 10) }
function yesterday() { return daysAgo(1) }

// 스타일 상수
const BG     = '#0d1117'
const CARD   = { background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: '18px 20px', marginBottom: 14 }
const th     = { padding: '8px 12px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#6e7681', textTransform: 'uppercase', borderBottom: '1px solid #21262d', whiteSpace: 'nowrap' }
const td     = { padding: '9px 12px', fontSize: 12, color: '#c9d1d9', borderBottom: '1px solid #21262d', verticalAlign: 'middle' }
const tdR    = { ...td, textAlign: 'right' }
const BRAND  = '#58a6ff'

const PRESETS = [
  { label: '오늘', days: 0 },
  { label: '어제', days: -1 },
  { label: '7일',  days: 7 },
  { label: '30일', days: 30 },
  { label: '90일', days: 90 },
]

function KpiCard({ label, value, sub, color }) {
  return (
    <div style={{ background: '#21262d', borderRadius: 10, border: '1px solid #30363d', padding: '14px 16px', textAlign: 'center', flex: '1 1 110px' }}>
      <div style={{ fontSize: 28, fontWeight: 900, color: color || BRAND, lineHeight: 1 }}>{value ?? '—'}</div>
      <div style={{ fontSize: 11, color: '#6e7681', fontWeight: 600, marginTop: 6 }}>{label}</div>
      {sub && <div style={{ fontSize: 10, color: '#484f58', marginTop: 2 }}>{sub}</div>}
    </div>
  )
}

function SourceBar({ source, count, max }) {
  const m = SOURCE_META[source] || SOURCE_META.unknown
  const pct = max > 0 ? (count / max * 100) : 0
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9 }}>
      <span style={{ width: 90, fontSize: 11, color: '#c9d1d9', flexShrink: 0 }}>{m.icon} {m.label}</span>
      <div style={{ flex: 1, height: 16, background: '#21262d', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: m.color, borderRadius: 4, transition: 'width .5s ease', minWidth: count > 0 ? 4 : 0 }} />
      </div>
      <span style={{ width: 60, fontSize: 12, textAlign: 'right', fontWeight: 700, color: m.color }}>{count}</span>
    </div>
  )
}

export default function Analytics() {
  const [activeTab, setActiveTab] = useState('overview')
  const [preset, setPreset]       = useState(0)
  const [from, setFrom]           = useState(today())
  const [to, setTo]               = useState(today())
  const [data, setData]           = useState(null)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState(null)

  // URL 탭
  const [urlSearch, setUrlSearch] = useState('')
  const [copied, setCopied]       = useState(false)

  // 직접입력 탭
  const [manualUrls, setManualUrls] = useState('')
  const [indexResult, setIndexResult] = useState(null)
  const [indexLoading, setIndexLoading] = useState(false)

  const loadStats = useCallback(async () => {
    if (activeTab !== 'overview') return
    setLoading(true)
    setError(null)
    try {
      const res  = await fetch(`/api/analytics/stats?from=${from}&to=${to}`)
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'API error')
      setData(json)
    } catch (e) {
      setError(e.message)
    }
    setLoading(false)
  }, [from, to, activeTab])

  useEffect(() => { loadStats() }, [loadStats])

  function applyPreset(days) {
    setPreset(days)
    if (days === 0)  { setFrom(today());     setTo(today()) }
    else if (days === -1) { setFrom(yesterday()); setTo(yesterday()) }
    else { setFrom(daysAgo(days)); setTo(today()) }
  }

  // 전체 URL 목록 (포스트 + 허브)
  const allUrls = [
    ...HUB_PAGES.map(p => ({ slug: p.slug, name: p.name, fullUrl: DOMAIN + p.slug + (p.slug === '/' ? '' : '/'), type: 'hub' })),
    ...posts.map(p => ({ slug: `/posts/${p.slug}`, name: p.title, fullUrl: `${DOMAIN}/posts/${p.slug}/`, type: 'post', region: p.region })),
  ]

  const filtered = urlSearch
    ? allUrls.filter(u => u.slug.includes(urlSearch) || u.name.includes(urlSearch) || (u.region || '').includes(urlSearch))
    : allUrls

  async function runIndexNow() {
    setIndexLoading(true)
    setIndexResult(null)
    try {
      const urls = manualUrls.split('\n').map(u => u.trim()).filter(Boolean)
      const res  = await fetch('/api/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'manual', urls }),
      })
      const json = await res.json()
      setIndexResult(json)
    } catch (e) {
      setIndexResult({ error: e.message })
    }
    setIndexLoading(false)
  }

  function copyUrls(type) {
    const text = filtered.map(u => type === 'full' ? u.fullUrl : u.slug).join('\n')
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  const TABS = [
    { key: 'overview', label: '📊 개요' },
    { key: 'url',      label: '🔗 URL목록' },
    { key: 'fullurl',  label: '🌐 전체URL' },
    { key: 'manual',   label: '✏️ 직접입력' },
  ]

  const inputStyle = {
    background: '#0d1117',
    border: '1px solid #30363d',
    borderRadius: 6,
    color: '#e6edf3',
    padding: '8px 10px',
    fontSize: '13px',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'monospace',
  }

  const s = data?.summary || {}
  const maxSrc = data ? Math.max(...(data.by_source.map(r => r.count)), 1) : 1

  return (
    <>
      <Head>
        <title>analytics — 오늘뭐먹지</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ minHeight: '100vh', background: BG, color: '#e6edf3', fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif", padding: '0 0 60px' }}>

        {/* 헤더 */}
        <div style={{ background: '#161b22', borderBottom: '1px solid #30363d', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: BRAND }}>오늘뭐먹지</span>
            <span style={{ fontSize: 12, color: '#6e7681', marginLeft: 8 }}>analytics</span>
          </div>
          <span style={{ fontSize: 10, color: '#484f58', background: '#21262d', padding: '2px 8px', borderRadius: 4 }}>noindex</span>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>

          {/* 날짜 컨트롤 (개요 탭만) */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20, alignItems: 'center' }}>
              {PRESETS.map(p => (
                <button key={p.days} onClick={() => applyPreset(p.days)}
                  style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid', fontSize: 12, cursor: 'pointer', fontWeight: preset === p.days ? 700 : 400,
                    borderColor: preset === p.days ? BRAND : '#30363d',
                    background: preset === p.days ? '#1f2937' : 'transparent',
                    color: preset === p.days ? BRAND : '#8b949e',
                  }}>
                  {p.label}
                </button>
              ))}
              <input type="date" value={from} onChange={e => { setFrom(e.target.value); setPreset(null) }}
                style={{ ...inputStyle, width: 130, padding: '6px 10px' }} />
              <span style={{ color: '#6e7681', fontSize: 12 }}>~</span>
              <input type="date" value={to} onChange={e => { setTo(e.target.value); setPreset(null) }}
                style={{ ...inputStyle, width: 130, padding: '6px 10px' }} />
              <button onClick={loadStats}
                style={{ padding: '6px 14px', borderRadius: 6, border: 'none', background: BRAND, color: '#0d1117', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                조회
              </button>
            </div>
          )}

          {/* 탭 */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: '1px solid #30363d', paddingBottom: 0 }}>
            {TABS.map(t => (
              <button key={t.key} onClick={() => setActiveTab(t.key)}
                style={{
                  padding: '9px 16px', border: 'none', cursor: 'pointer',
                  background: 'transparent', fontSize: 13, fontWeight: activeTab === t.key ? 700 : 400,
                  color: activeTab === t.key ? BRAND : '#8b949e',
                  borderBottom: activeTab === t.key ? `2px solid ${BRAND}` : '2px solid transparent',
                  marginBottom: -1,
                }}>
                {t.label}
              </button>
            ))}
          </div>

          {/* ══ 탭: 개요 ══ */}
          {activeTab === 'overview' && (
            <>
              {loading && (
                <div style={{ ...CARD, textAlign: 'center', color: '#6e7681', padding: 40 }}>⏳ 로딩 중...</div>
              )}
              {error && (
                <div style={{ ...CARD, color: '#f85149', fontSize: 13 }}>❌ {error}</div>
              )}
              {!loading && !error && !data && (
                <div style={{ ...CARD, textAlign: 'center', color: '#6e7681', padding: 40 }}>
                  데이터 없음 — Supabase pageviews 테이블 확인 필요
                </div>
              )}
              {!loading && data && (
                <>
                  {/* KPI */}
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
                    <KpiCard label="총 PV" value={s.total?.toLocaleString()} color={BRAND} />
                    <KpiCard label="검색 유입" value={s.search?.toLocaleString()} color="#3fb950" />
                    <KpiCard label="직접 접속" value={s.direct?.toLocaleString()} color="#8b949e" />
                    <KpiCard label="기타" value={s.other?.toLocaleString()} color="#6e7681" />
                  </div>

                  {/* 소스 분포 */}
                  <div style={CARD}>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, color: '#e6edf3' }}>소스별 유입</div>
                    {(data.by_source || []).map(r => (
                      <SourceBar key={r.source} source={r.source} count={r.count} max={maxSrc} />
                    ))}
                    {(data.by_source || []).length === 0 && (
                      <div style={{ fontSize: 12, color: '#6e7681', textAlign: 'center', padding: 20 }}>데이터 없음</div>
                    )}
                  </div>

                  {/* 상위 페이지 */}
                  {data.by_page?.length > 0 && (
                    <div style={CARD}>
                      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: '#e6edf3' }}>
                        상위 랜딩 페이지
                      </div>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                          <thead>
                            <tr>
                              <th style={th}>#</th>
                              <th style={th}>페이지</th>
                              <th style={{ ...th, textAlign: 'right' }}>전체 PV</th>
                              <th style={{ ...th, textAlign: 'right' }}>검색 유입</th>
                              <th style={{ ...th, textAlign: 'right' }}>키워드수</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.by_page.slice(0, 20).map((p, i) => (
                              <tr key={p.slug}>
                                <td style={{ ...td, color: '#6e7681', width: 28 }}>{i + 1}</td>
                                <td style={td}>
                                  <a href={DOMAIN + p.slug} target="_blank" rel="noopener"
                                    style={{ color: BRAND, textDecoration: 'none', fontWeight: 500 }}>
                                    {p.title ? (p.title.length > 50 ? p.title.slice(0, 50) + '…' : p.title) : p.slug}
                                  </a>
                                  <div style={{ fontSize: 10, color: '#484f58', marginTop: 1, fontFamily: 'monospace' }}>{p.slug}</div>
                                </td>
                                <td style={tdR}>{p.views}</td>
                                <td style={{ ...tdR, color: '#3fb950', fontWeight: 700 }}>{p.search_views}</td>
                                <td style={{ ...tdR, color: '#f0883e' }}>{p.keyword_count}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* 최근 유입 */}
                  {data.recent?.length > 0 && (
                    <div style={CARD}>
                      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: '#e6edf3' }}>
                        최근 유입 이벤트
                        <span style={{ fontSize: 11, fontWeight: 400, color: '#6e7681', marginLeft: 8 }}>최대 100건</span>
                      </div>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
                          <thead>
                            <tr>
                              <th style={th}>시각</th>
                              <th style={th}>소스</th>
                              <th style={th}>페이지</th>
                              <th style={th}>키워드</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.recent.map((ev, i) => {
                              const m = SOURCE_META[ev.source] || SOURCE_META.unknown
                              return (
                                <tr key={i}>
                                  <td style={{ ...td, fontFamily: 'monospace', color: '#6e7681', whiteSpace: 'nowrap' }}>
                                    {ev.date} {ev.time}
                                  </td>
                                  <td style={td}>
                                    <span style={{ fontSize: 10, padding: '1px 6px', borderRadius: 3, background: m.color + '22', color: m.color, fontWeight: 700 }}>
                                      {m.icon} {m.label}
                                    </span>
                                  </td>
                                  <td style={{ ...td, fontFamily: 'monospace', fontSize: 10, color: '#8b949e' }}>
                                    {ev.slug}
                                  </td>
                                  <td style={{ ...td, color: ev.keyword ? '#3fb950' : '#484f58', fontWeight: ev.keyword ? 600 : 400 }}>
                                    {ev.keyword || '—'}
                                  </td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {/* ══ 탭: URL목록 (slug 경로) ══ */}
          {activeTab === 'url' && (
            <>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <input
                  placeholder="검색 (slug · 제목 · 지역)..."
                  value={urlSearch}
                  onChange={e => setUrlSearch(e.target.value)}
                  style={{ ...inputStyle, maxWidth: 300, flex: 1 }}
                />
                <span style={{ fontSize: 12, color: '#6e7681' }}>{filtered.length}개</span>
                <button onClick={() => copyUrls('slug')}
                  style={{ padding: '7px 14px', background: copied ? '#238636' : '#21262d', color: copied ? '#fff' : '#c9d1d9', border: '1px solid #30363d', borderRadius: 6, fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>
                  {copied ? '✅ 복사됨' : '📋 전체 복사'}
                </button>
              </div>
              <div style={CARD}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                  <thead>
                    <tr>
                      <th style={th}>#</th>
                      <th style={th}>유형</th>
                      <th style={th}>이름</th>
                      <th style={th}>slug 경로</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((u, i) => (
                      <tr key={u.slug}>
                        <td style={{ ...td, color: '#6e7681', width: 32 }}>{i + 1}</td>
                        <td style={td}>
                          <span style={{ fontSize: 9, padding: '1px 6px', borderRadius: 3, fontWeight: 700,
                            background: u.type === 'hub' ? '#1f3a5f' : '#1e3a1e',
                            color: u.type === 'hub' ? '#79c0ff' : '#3fb950' }}>
                            {u.type === 'hub' ? '허브' : '포스트'}
                          </span>
                        </td>
                        <td style={{ ...td, color: '#c9d1d9' }}>
                          {u.name.length > 40 ? u.name.slice(0, 40) + '…' : u.name}
                          {u.region && <span style={{ fontSize: 9, color: '#6e7681', marginLeft: 5 }}>{u.region}</span>}
                        </td>
                        <td style={{ ...td, fontFamily: 'monospace', fontSize: 11 }}>
                          <a href={DOMAIN + u.slug} target="_blank" rel="noopener"
                            style={{ color: BRAND, textDecoration: 'none' }}>{u.slug}</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* slug 목록 텍스트박스 */}
              <div style={CARD}>
                <div style={{ fontSize: 12, color: '#8b949e', marginBottom: 8 }}>slug 경로 목록 (복사용)</div>
                <textarea
                  readOnly
                  value={filtered.map(u => u.slug).join('\n')}
                  style={{ ...inputStyle, height: 200, resize: 'vertical' }}
                />
              </div>
            </>
          )}

          {/* ══ 탭: 전체URL ══ */}
          {activeTab === 'fullurl' && (
            <>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <input
                  placeholder="검색 (URL · 제목 · 지역)..."
                  value={urlSearch}
                  onChange={e => setUrlSearch(e.target.value)}
                  style={{ ...inputStyle, maxWidth: 300, flex: 1 }}
                />
                <span style={{ fontSize: 12, color: '#6e7681' }}>{filtered.length}개</span>
                <button onClick={() => copyUrls('full')}
                  style={{ padding: '7px 14px', background: copied ? '#238636' : '#21262d', color: copied ? '#fff' : '#c9d1d9', border: '1px solid #30363d', borderRadius: 6, fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>
                  {copied ? '✅ 복사됨' : '📋 전체 복사'}
                </button>
              </div>
              <div style={CARD}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                  <thead>
                    <tr>
                      <th style={th}>#</th>
                      <th style={th}>유형</th>
                      <th style={th}>이름</th>
                      <th style={th}>전체 URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((u, i) => (
                      <tr key={u.slug}>
                        <td style={{ ...td, color: '#6e7681', width: 32 }}>{i + 1}</td>
                        <td style={td}>
                          <span style={{ fontSize: 9, padding: '1px 6px', borderRadius: 3, fontWeight: 700,
                            background: u.type === 'hub' ? '#1f3a5f' : '#1e3a1e',
                            color: u.type === 'hub' ? '#79c0ff' : '#3fb950' }}>
                            {u.type === 'hub' ? '허브' : '포스트'}
                          </span>
                        </td>
                        <td style={{ ...td, color: '#c9d1d9', maxWidth: 200 }}>
                          {u.name.length > 35 ? u.name.slice(0, 35) + '…' : u.name}
                        </td>
                        <td style={{ ...td, fontFamily: 'monospace', fontSize: 11, wordBreak: 'break-all' }}>
                          <a href={u.fullUrl} target="_blank" rel="noopener"
                            style={{ color: BRAND, textDecoration: 'none' }}>{u.fullUrl}</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* 전체 URL 텍스트박스 */}
              <div style={CARD}>
                <div style={{ fontSize: 12, color: '#8b949e', marginBottom: 8 }}>전체 URL 목록 (복사용 · 줄바꿈 구분)</div>
                <textarea
                  readOnly
                  value={filtered.map(u => u.fullUrl).join('\n')}
                  style={{ ...inputStyle, height: 220, resize: 'vertical' }}
                />
              </div>
            </>
          )}

          {/* ══ 탭: 직접입력 (IndexNow) ══ */}
          {activeTab === 'manual' && (
            <>
              <div style={CARD}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3', marginBottom: 6 }}>
                  직접 URL 입력 → IndexNow 제출
                </div>
                <div style={{ fontSize: 11, color: '#6e7681', marginBottom: 14 }}>
                  줄바꿈으로 URL 구분 · 절대경로(/posts/...) 또는 전체URL(https://...) 모두 허용
                </div>
                <textarea
                  rows={10}
                  value={manualUrls}
                  onChange={e => setManualUrls(e.target.value)}
                  placeholder={'https://dinner.ambitstock.com/posts/pangyo-lunch-meat-guide-2026/\n/posts/samsung-izakaya-best-2026/\n…'}
                  style={{ ...inputStyle, resize: 'vertical', marginBottom: 12 }}
                />
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 12 }}>
                  <button
                    onClick={() => {
                      const urls = allUrls.map(u => u.fullUrl).join('\n')
                      setManualUrls(urls)
                    }}
                    style={{ padding: '6px 12px', background: 'transparent', border: '1px solid #30363d', borderRadius: 6, color: '#8b949e', fontSize: 11, cursor: 'pointer' }}>
                    전체 URL 불러오기
                  </button>
                  <button
                    onClick={() => setManualUrls('')}
                    style={{ padding: '6px 12px', background: 'transparent', border: '1px solid #30363d', borderRadius: 6, color: '#8b949e', fontSize: 11, cursor: 'pointer' }}>
                    초기화
                  </button>
                  <span style={{ fontSize: 11, color: '#6e7681' }}>
                    {manualUrls.split('\n').filter(u => u.trim()).length}개 입력됨
                  </span>
                </div>
                <button
                  onClick={runIndexNow}
                  disabled={indexLoading || !manualUrls.trim()}
                  style={{
                    width: '100%', padding: '10px 0',
                    background: indexLoading || !manualUrls.trim() ? '#21262d' : '#238636',
                    color: indexLoading || !manualUrls.trim() ? '#6e7681' : '#fff',
                    border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 700,
                    cursor: indexLoading || !manualUrls.trim() ? 'default' : 'pointer',
                  }}>
                  {indexLoading ? '제출 중...' : 'IndexNow 제출'}
                </button>
                {indexResult && (
                  <div style={{ marginTop: 14, padding: 14, background: '#0d1117', borderRadius: 8, fontSize: 12, lineHeight: 2,
                    color: indexResult.error ? '#f85149' : '#3fb950' }}>
                    {indexResult.error ? (
                      <div>오류: {indexResult.error}</div>
                    ) : (
                      <>
                        <div>{indexResult.message}</div>
                        <div style={{ color: '#8b949e' }}>
                          제출: {indexResult.submitted}개
                          {indexResult.engines?.map((e, i) => (
                            <span key={i} style={{ marginLeft: 10, color: e.ok ? '#3fb950' : '#f85149' }}>
                              {e.name} {e.ok ? `(${e.status})` : `(오류)`}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* 참고: 포스트 전체 URL 표 */}
              <div style={CARD}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#8b949e', marginBottom: 10 }}>
                  참고 — 현재 포스트 전체 URL ({posts.length}개)
                </div>
                <div style={{ maxHeight: 280, overflowY: 'auto' }}>
                  {posts.map((p, i) => (
                    <div key={p.id} style={{ display: 'flex', gap: 8, padding: '6px 0', borderBottom: '1px solid #21262d', alignItems: 'center' }}>
                      <span style={{ fontSize: 10, color: '#484f58', width: 24, textAlign: 'right', flexShrink: 0 }}>{i + 1}</span>
                      <span style={{ fontSize: 10, color: '#6e7681', flexShrink: 0, width: 55 }}>{p.region}</span>
                      <a href={`${DOMAIN}/posts/${p.slug}/`} target="_blank" rel="noopener"
                        style={{ fontSize: 10, color: BRAND, fontFamily: 'monospace', textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                        {DOMAIN}/posts/{p.slug}/
                      </a>
                      <button
                        onClick={() => setManualUrls(prev => {
                          const url = `${DOMAIN}/posts/${p.slug}/`
                          return prev ? prev + '\n' + url : url
                        })}
                        style={{ padding: '2px 8px', background: 'transparent', border: '1px solid #30363d', borderRadius: 4, color: '#8b949e', fontSize: 10, cursor: 'pointer', flexShrink: 0 }}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
