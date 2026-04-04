import { useState } from 'react'
import Head from 'next/head'
import posts from '../data/posts'

const SITE_STATS = {
  pages: [
    { name: '홈', path: '/' },
    { name: '판교', path: '/pangyo' },
    { name: '삼성역', path: '/dinner/samseong' },
    { name: '잠실', path: '/dinner/jamsil' },
    { name: '영통', path: '/samsungElectronics/yeongtong' },
    { name: '망포', path: '/samsungElectronics/mangpo' },
    { name: '영통구청', path: '/samsungElectronics/yeongtongGu' },
    { name: '수지', path: '/suji' },
  ],
}

function StatCard({ label, value, sub }) {
  return (
    <div style={{
      background: '#161b22',
      border: '1px solid #30363d',
      borderRadius: 10,
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    }}>
      <div style={{ fontSize: '.72rem', color: '#6e7681', letterSpacing: '.08em' }}>{label}</div>
      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#e6edf3' }}>{value}</div>
      {sub && <div style={{ fontSize: '.72rem', color: '#8b949e' }}>{sub}</div>}
    </div>
  )
}

export default function AdminLee() {
  const [mode, setMode] = useState('recent')
  const [days, setDays] = useState(7)
  const [manualUrls, setManualUrls] = useState('')
  const [allMode, setAllMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const totalPosts = posts.length
  const regions = [...new Set(posts.map(p => p.region))]
  const categories = [...new Set(posts.map(p => p.category))]

  const recentPostsCount = (() => {
    const cutoff = new Date()
    cutoff.setDate(cutoff.getDate() - 7)
    return posts.filter(p => new Date(p.date) >= cutoff).length
  })()

  async function runIndexNow() {
    setLoading(true)
    setResult(null)
    try {
      const body = allMode
        ? { mode: 'all' }
        : mode === 'recent'
          ? { mode: 'recent', days: Number(days) }
          : { mode: 'manual', urls: manualUrls.split('\n').map(u => u.trim()).filter(Boolean) }

      const res = await fetch('/api/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setResult({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    background: '#0d1117',
    border: '1px solid #30363d',
    borderRadius: 6,
    color: '#e6edf3',
    padding: '8px 10px',
    fontSize: '.85rem',
    width: '100%',
    boxSizing: 'border-box',
  }

  const tabStyle = (active) => ({
    padding: '6px 14px',
    borderRadius: 6,
    border: '1px solid ' + (active ? '#388bfd' : '#30363d'),
    background: active ? '#1f2937' : 'transparent',
    color: active ? '#58a6ff' : '#8b949e',
    fontSize: '.8rem',
    cursor: 'pointer',
    fontWeight: active ? 700 : 400,
  })

  return (
    <>
      <Head>
        <title>adminLee — 오늘뭐먹지</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{
        minHeight: '100vh',
        background: '#0d1117',
        color: '#e6edf3',
        fontFamily: 'monospace',
        padding: '32px 16px',
        maxWidth: 640,
        margin: '0 auto',
      }}>
        <div style={{ fontSize: '.72rem', color: '#6e7681', letterSpacing: '.1em', marginBottom: 24 }}>
          오늘뭐먹지 / adminLee — noindex
        </div>

        {/* 사이트 현황 */}
        <section style={{ marginBottom: 32 }}>
          <div style={{ fontSize: '.8rem', color: '#8b949e', marginBottom: 12, letterSpacing: '.06em' }}>
            사이트 현황
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10 }}>
            <StatCard label="총 포스트" value={totalPosts} sub="posts/*.js" />
            <StatCard label="지역 수" value={regions.length} sub={regions.join(', ')} />
            <StatCard label="카테고리 수" value={categories.length} sub={categories.join(', ')} />
            <StatCard label="허브 페이지" value={SITE_STATS.pages.length} sub="지역별 메인" />
            <StatCard label="최근 7일 포스트" value={recentPostsCount} sub="신규 포스트" />
          </div>
        </section>

        {/* 포스트 목록 */}
        <section style={{ marginBottom: 32 }}>
          <div style={{ fontSize: '.8rem', color: '#8b949e', marginBottom: 10, letterSpacing: '.06em' }}>
            포스트 목록 (최신순)
          </div>
          <div style={{
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: 10,
            overflow: 'hidden',
            maxHeight: 260,
            overflowY: 'auto',
          }}>
            {[...posts].reverse().map((p, i) => (
              <div key={p.id} style={{
                padding: '10px 14px',
                borderBottom: i < posts.length - 1 ? '1px solid #21262d' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 8,
              }}>
                <div>
                  <span style={{ fontSize: '.8rem', color: '#e6edf3' }}>{p.title}</span>
                  <span style={{ fontSize: '.7rem', color: '#8b949e', marginLeft: 8 }}>/{p.region}</span>
                </div>
                <span style={{ fontSize: '.7rem', color: '#6e7681', whiteSpace: 'nowrap' }}>{p.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* IndexNow 제출 */}
        <section>
          <div style={{ fontSize: '.8rem', color: '#8b949e', marginBottom: 12, letterSpacing: '.06em' }}>
            IndexNow — 검색엔진 URL 제출
          </div>
          <div style={{
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: 10,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            {/* 모드 선택 */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button style={tabStyle(!allMode && mode === 'recent')} onClick={() => { setAllMode(false); setMode('recent') }}>
                최근 N일
              </button>
              <button style={tabStyle(!allMode && mode === 'manual')} onClick={() => { setAllMode(false); setMode('manual') }}>
                직접 URL
              </button>
              <button style={tabStyle(allMode)} onClick={() => setAllMode(true)}>
                전체 제출
              </button>
            </div>

            {/* 옵션 */}
            {!allMode && mode === 'recent' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <label style={{ fontSize: '.8rem', color: '#8b949e', whiteSpace: 'nowrap' }}>최근</label>
                <input
                  type="number"
                  min={1}
                  max={90}
                  value={days}
                  onChange={e => setDays(e.target.value)}
                  style={{ ...inputStyle, width: 70 }}
                />
                <label style={{ fontSize: '.8rem', color: '#8b949e', whiteSpace: 'nowrap' }}>일 이내 포스트</label>
              </div>
            )}

            {!allMode && mode === 'manual' && (
              <div>
                <label style={{ fontSize: '.75rem', color: '#8b949e', display: 'block', marginBottom: 6 }}>
                  URL 목록 (줄바꿈으로 구분, 절대경로 또는 전체 URL)
                </label>
                <textarea
                  rows={5}
                  value={manualUrls}
                  onChange={e => setManualUrls(e.target.value)}
                  placeholder={'https://dinner.ambitstock.com/posts/pangyo-lunch-meat-guide-2026\n/posts/samsung-izakaya-best-2026'}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
            )}

            {allMode && (
              <div style={{ fontSize: '.8rem', color: '#f0883e' }}>
                전체 포스트 + 허브 페이지 ({totalPosts + SITE_STATS.pages.length}개) 를 제출합니다.
              </div>
            )}

            {/* 제출 버튼 */}
            <button
              onClick={runIndexNow}
              disabled={loading}
              style={{
                padding: '10px 0',
                background: loading ? '#21262d' : '#238636',
                color: loading ? '#6e7681' : '#fff',
                border: 'none',
                borderRadius: 8,
                fontSize: '.9rem',
                fontWeight: 700,
                cursor: loading ? 'default' : 'pointer',
                transition: 'background .15s',
              }}
            >
              {loading ? '제출 중...' : 'IndexNow 실행'}
            </button>

            {/* 결과 */}
            {result && (
              <div style={{
                padding: 14,
                background: '#0d1117',
                borderRadius: 8,
                fontSize: '.78rem',
                lineHeight: 1.9,
                color: result.error ? '#f85149' : '#3fb950',
              }}>
                {result.error ? (
                  <div>오류: {result.error}</div>
                ) : (
                  <>
                    <div>{result.message}</div>
                    <div style={{ color: '#8b949e', marginTop: 6 }}>
                      제출 URL: {result.submitted}개<br />
                      엔진 응답:
                      {result.engines && result.engines.map((e, i) => (
                        <span key={i} style={{ marginLeft: 8, color: e.ok ? '#3fb950' : '#f85149' }}>
                          {e.name} {e.ok ? `(${e.status})` : `(오류: ${e.error})`}
                        </span>
                      ))}
                    </div>
                    {result.urls && result.urls.length > 0 && (
                      <details style={{ marginTop: 8 }}>
                        <summary style={{ cursor: 'pointer', color: '#58a6ff' }}>제출된 URL 목록</summary>
                        <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {result.urls.map((u, i) => (
                            <span key={i} style={{ color: '#6e7681', fontSize: '.72rem' }}>{u}</span>
                          ))}
                        </div>
                      </details>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </section>

        <div style={{ fontSize: '.7rem', color: '#30363d', marginTop: 32, textAlign: 'center' }}>
          noindex · 공개되지 않는 페이지
        </div>
      </div>
    </>
  )
}
