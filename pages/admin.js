import { useState } from 'react'
import Head from 'next/head'

export default function Admin() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  async function runIndexNow() {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch('/api/indexnow', { method: 'POST' })
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setResult({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{
        minHeight: '100vh',
        background: '#0d1117',
        color: '#e6edf3',
        fontFamily: 'monospace',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        gap: 24,
      }}>
        <div style={{ fontSize: '.75rem', color: '#6e7681', letterSpacing: '.1em' }}>
          오늘뭐먹지 / admin
        </div>

        {/* IndexNow */}
        <div style={{
          background: '#161b22',
          border: '1px solid #30363d',
          borderRadius: 12,
          padding: '24px 28px',
          width: '100%',
          maxWidth: 400,
        }}>
          <div style={{ fontSize: '.8rem', color: '#8b949e', marginBottom: 16 }}>
            IndexNow — 검색엔진 URL 제출
          </div>
          <button
            onClick={runIndexNow}
            disabled={loading}
            style={{
              width: '100%',
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
            {loading ? '제출 중...' : '🚀 IndexNow 실행'}
          </button>

          {result && (
            <div style={{
              marginTop: 16,
              padding: 14,
              background: '#0d1117',
              borderRadius: 8,
              fontSize: '.78rem',
              lineHeight: 1.8,
              color: result.error ? '#f85149' : '#3fb950',
            }}>
              {result.error ? (
                `❌ ${result.error}`
              ) : (
                <>
                  <div>{result.message}</div>
                  <div style={{ color: '#8b949e', marginTop: 6 }}>
                    제출 URL: {result.submitted}개<br />
                    IndexNow 응답: {result.indexnowStatus}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div style={{ fontSize: '.7rem', color: '#30363d' }}>
          noindex · 공개되지 않는 페이지
        </div>
      </div>
    </>
  )
}
