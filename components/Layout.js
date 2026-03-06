import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const THEMES = [
  // ── 글로우 계열 ──
  { id:'glow-orange', name:'글로우 오렌지', emoji:'🔥', vars:{ bg:'#0d0a07', surface:'#1a1208', surface2:'#221a0c', border:'#3d2a10', text:'#fff5e8', muted:'#e8aa66', primary:'#ff6b35', accent:'#ffaa44', glow:'rgba(255,107,53,.18)' }},
  { id:'glow-blue',   name:'글로우 블루',   emoji:'💙', vars:{ bg:'#060a10', surface:'#0a1220', surface2:'#0e192c', border:'#1a3050', text:'#eef6ff', muted:'#99bbdd', primary:'#3b8fff', accent:'#00d4ff', glow:'rgba(59,143,255,.18)' }},
  { id:'glow-purple', name:'글로우 퍼플',   emoji:'💜', vars:{ bg:'#08060e', surface:'#110d1e', surface2:'#180f28', border:'#2e1a50', text:'#f5eeff', muted:'#cc99ff', primary:'#a855f7', accent:'#e040fb', glow:'rgba(168,85,247,.18)' }},
  { id:'glow-green',  name:'글로우 그린',   emoji:'💚', vars:{ bg:'#060d08', surface:'#0c1a0e', surface2:'#102214', border:'#1a3a1e', text:'#eefff5', muted:'#88dd99', primary:'#22c55e', accent:'#86efac', glow:'rgba(34,197,94,.18)' }},
  { id:'glow-red',    name:'글로우 레드',   emoji:'❤️', vars:{ bg:'#0e0606', surface:'#1e0a0a', surface2:'#280d0d', border:'#4a1212', text:'#fff0f0', muted:'#ee9999', primary:'#ef4444', accent:'#ff8080', glow:'rgba(239,68,68,.18)' }},
  { id:'glow-gold',   name:'글로우 골드',   emoji:'✨', vars:{ bg:'#0a0800', surface:'#1a1400', surface2:'#221c00', border:'#3d3000', text:'#fff8e0', muted:'#e8cc66', primary:'#f59e0b', accent:'#fde68a', glow:'rgba(245,158,11,.18)' }},
  { id:'glow-teal',   name:'글로우 틸',     emoji:'🌊', vars:{ bg:'#060d0d', surface:'#0c1a1a', surface2:'#102222', border:'#1a3838', text:'#e8ffff', muted:'#77cccc', primary:'#14b8a6', accent:'#5eead4', glow:'rgba(20,184,166,.18)' }},
  { id:'glow-pink',   name:'글로우 핑크',   emoji:'🌸', vars:{ bg:'#0e060a', surface:'#1e0c14', surface2:'#28101c', border:'#4a1830', text:'#fff0f6', muted:'#ffaacc', primary:'#ec4899', accent:'#f9a8d4', glow:'rgba(236,72,153,.18)' }},
  // ── 기존 다크 계열 ──
  { id:'dark',        name:'다크',          emoji:'🌑', vars:{ bg:'#0f0f13', surface:'#1a1a22', surface2:'#22222e', border:'#2e2e3e', text:'#f0f0f5', muted:'#bbbbcc', primary:'#ff6b35', accent:'#7c6cff' }},
  { id:'midnight',    name:'미드나잇',      emoji:'🌙', vars:{ bg:'#050d1a', surface:'#0d1b2e', surface2:'#122238', border:'#1e3a5f', text:'#eef4ff', muted:'#99bbdd', primary:'#4d9fff', accent:'#00d4ff' }},
  { id:'forest',      name:'포레스트',      emoji:'🌲', vars:{ bg:'#080f0a', surface:'#101a12', surface2:'#16241a', border:'#1e3a24', text:'#edf8ef', muted:'#99cc99', primary:'#4caf6e', accent:'#a8e063' }},
  { id:'aurora',      name:'오로라',        emoji:'🌌', vars:{ bg:'#07050f', surface:'#110d20', surface2:'#18142c', border:'#2a1f4a', text:'#f2eeff', muted:'#bbaaee', primary:'#a855f7', accent:'#06b6d4' }},
  { id:'sunset',      name:'선셋',          emoji:'🌅', vars:{ bg:'#130709', surface:'#210d10', surface2:'#2d1216', border:'#4a1f26', text:'#fff0f0', muted:'#eeaaaa', primary:'#ff4d6d', accent:'#ff9a3c' }},
  { id:'mono',        name:'모노크롬',      emoji:'⬜', vars:{ bg:'#111111', surface:'#1c1c1c', surface2:'#252525', border:'#333333', text:'#f0f0f0', muted:'#aaaaaa', primary:'#dddddd', accent:'#bbbbbb' }},
  { id:'light',       name:'라이트',        emoji:'☀️', vars:{ bg:'#f0f0f4', surface:'#ffffff',  surface2:'#e8e8ef', border:'#c0c0cc', text:'#0a0a1a', muted:'#3a3a50', primary:'#c94a10', accent:'#4a3cde' }},
  { id:'cyber',       name:'사이버펑크',    emoji:'⚡', vars:{ bg:'#0a0010', surface:'#130020', surface2:'#1a002c', border:'#3d0066', text:'#fff0ff', muted:'#dd99ff', primary:'#ff00cc', accent:'#ffee00' }},
  // ── 프리미엄 ──
  { id:'obsidian',    name:'옵시디언',      emoji:'🖤', vars:{ bg:'#000000', surface:'#111111', surface2:'#181818', border:'#2a2a2a', text:'#ffffff', muted:'#aaaaaa', primary:'#e0e0e0', accent:'#bbbbbb' }},
  { id:'ocean',       name:'딥오션',        emoji:'🐋', vars:{ bg:'#020810', surface:'#04101e', surface2:'#071628', border:'#0e2a44', text:'#ddf0ff', muted:'#77aacc', primary:'#0ea5e9', accent:'#38bdf8' }},
  { id:'rose',        name:'로즈골드',      emoji:'🌹', vars:{ bg:'#0f0a0a', surface:'#1e1212', surface2:'#281818', border:'#3d2222', text:'#fff5f5', muted:'#ddaaaa', primary:'#e07070', accent:'#f4a0a0' }},
  { id:'jade',        name:'제이드',        emoji:'🍃', vars:{ bg:'#040a06', surface:'#091410', surface2:'#0d1c16', border:'#143022', text:'#eafaf2', muted:'#77bb88', primary:'#059669', accent:'#34d399' }},
]

export default function Layout({ children, title, description, canonical }) {
  const [theme,      setTheme]      = useState('dark')
  const [showThemes, setShowThemes] = useState(false)
  const [showQR,     setShowQR]     = useState(false)
  const [tokenCost,  setTokenCost]  = useState(0)

  const siteTitle = title ? `${title} | 강남뭐먹` : '강남뭐먹 — 강남 맛집 AI 추천'
  const siteDesc  = description || '강남역·삼성역 맛집을 AI가 빠르게 추천. 국밥·이자카야·한우·중식 170개+ 식당 정보.'

  useEffect(() => {
    const saved = localStorage.getItem('gm-theme')
    if (saved && THEMES.find(t => t.id === saved)) setTheme(saved)
    const cost = parseFloat(localStorage.getItem('gm-token-cost') || '0')
    setTokenCost(cost)
  }, [])

  useEffect(() => {
    const t = THEMES.find(t => t.id === theme) || THEMES[0]
    Object.entries(t.vars).forEach(([k,v]) => document.documentElement.style.setProperty(`--${k}`, v))
    if (t.vars.glow) {
      document.body.style.background = `radial-gradient(ellipse 80% 60% at 50% 20%, ${t.vars.glow} 0%, var(--bg) 65%)`
    } else {
      document.body.style.background = 'var(--bg)'
    }
    localStorage.setItem('gm-theme', theme)
  }, [theme])

  useEffect(() => {
    const handler = (e) => {
      setTokenCost(prev => {
        const updated = +(prev + e.detail).toFixed(6)
        localStorage.setItem('gm-token-cost', updated.toString())
        return updated
      })
    }
    window.addEventListener('token-used', handler)
    return () => window.removeEventListener('token-used', handler)
  }, [])

  const ct = THEMES.find(t => t.id === theme) || THEMES[0]

  // 라이트 테마 판별 (버튼 글자색 보정용)
  const isLight = theme === 'light'

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        {canonical && <meta property="og:url" content={canonical} />}
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDesc} />
      </Head>

      {/* ── 헤더 ── */}
      <header style={{
        background: 'var(--surface)', borderBottom: '2px solid var(--border)',
        padding: '0 12px', position: 'sticky', top: 0, zIndex: 100,
        backdropFilter: 'blur(12px)',
        width: '100%', boxSizing: 'border-box',
        boxShadow: '0 2px 12px rgba(0,0,0,.15)',
      }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', height:52, gap:6, minWidth:0 }}>
          <Link href="/" style={{ fontWeight:900, fontSize:'1.05rem', color:'var(--primary)', textDecoration:'none', flexShrink:0 }}>
            🍚 강남뭐먹
          </Link>

          <div style={{ display:'flex', alignItems:'center', gap:5, flexShrink:0 }}>
            {/* 토큰 비용 (달러→원, 1달러=1450원) — 클릭하면 QR 모달 */}
            {tokenCost > 0 && (
              <button onClick={() => setShowQR(true)} title="검색에 사용된 AI 비용" style={{
                fontSize:'.65rem', color:'var(--muted)', background:'var(--surface2)',
                padding:'3px 7px', borderRadius:100, border:'1px solid var(--border)',
                flexShrink:0, cursor:'pointer',
              }}>
                ⚡ {Math.ceil(tokenCost * 1450)}원
              </button>
            )}

            {/* 국밥 먹이기 */}
            <button onClick={() => setShowQR(true)} style={{
              fontSize:'.7rem', fontWeight:700,
              background:'linear-gradient(135deg, #ff6b35, #ff9a3c)',
              color:'#fff', border:'none', borderRadius:100,
              padding:'5px 9px', cursor:'pointer', flexShrink:0,
            }}>
              🍚 국밥
            </button>

            {/* 테마 선택 */}
            <div style={{ position:'relative' }}>
              <button onClick={() => setShowThemes(!showThemes)}
                title="배경 테마 변경"
                style={{
                  background: showThemes ? 'var(--primary)' : 'var(--surface2)',
                  border:'2px solid var(--primary)',
                  borderRadius:100, padding:'4px 9px', cursor:'pointer',
                  fontSize:'.85rem', color:'var(--text)',
                  boxShadow: '0 0 8px rgba(var(--primary-rgb, 255,107,53), 0.5)',
                  flexShrink:0,
                  transition:'all .15s',
                  display:'flex', alignItems:'center', gap:3,
                }}>
                {ct.emoji}
                <span style={{ fontSize:'.55rem', color:'var(--muted)', lineHeight:1, letterSpacing:'-0.3px' }}>테마</span>
              </button>

              {showThemes && (
                <>
                  <div onClick={() => setShowThemes(false)} style={{ position:'fixed', inset:0, zIndex:10 }} />
                  <div style={{
                    position:'fixed', top:52, right:8, zIndex:11,
                    background:'var(--surface)', border:'2px solid var(--border)',
                    borderRadius:14, padding:8,
                    width: 'min(264px, calc(100vw - 16px))',
                    maxHeight:'calc(100vh - 70px)', overflowY:'auto',
                    boxShadow:'0 8px 40px rgba(0,0,0,.6)',
                    display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:4,
                  }}>
                    {THEMES.map(t => {
                      const isActive = theme === t.id
                      // 라이트 테마일 때 드롭다운 내부 글자도 강제로 어둡게
                      const isLight = ['light'].includes(theme)
                      return (
                        <button key={t.id} onClick={() => { setTheme(t.id); setShowThemes(false) }} style={{
                          display:'flex', alignItems:'center', gap:4,
                          padding:'7px 8px', borderRadius:8, cursor:'pointer',
                          background: isActive ? 'var(--primary)' : 'var(--surface2)',
                          color: isActive ? '#fff' : (isLight ? '#111' : 'var(--text)'),
                          border: isActive ? '1.5px solid var(--primary)' : '1.5px solid var(--border)',
                          fontSize:'.72rem',
                          fontWeight: isActive ? 700 : 500,
                          whiteSpace:'nowrap',
                          transition:'all .1s',
                        }}>
                          {t.emoji} {t.name}
                        </button>
                      )
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      {/* ── 푸터 ── */}
      <footer style={{ borderTop:'1px solid var(--border)', padding:'28px 16px', textAlign:'center', color:'var(--muted)', fontSize:'.78rem', marginTop:60 }}>
        <p>© 2026 강남뭐먹 — 강남 맛집 AI 추천 서비스</p>
        <p style={{ marginTop:4 }}>삼성역 · 강남역 · 잠실역 주변 식당 정보</p>
      </footer>

      {/* ── QR 모달 ── */}
      {showQR && (
        <div onClick={() => setShowQR(false)} style={{
          position:'fixed', inset:0, zIndex:200,
          background:'rgba(0,0,0,.75)', backdropFilter:'blur(6px)',
          display:'flex', alignItems:'center', justifyContent:'center', padding:24,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background:'var(--surface)', border:'1px solid var(--border)',
            borderRadius:20, padding:'32px 28px', maxWidth:300, width:'100%',
            textAlign:'center', boxShadow:'0 20px 60px rgba(0,0,0,.5)',
          }}>
            <div style={{ fontSize:'2rem', marginBottom:6 }}>🍚</div>
            <h3 style={{ fontSize:'1rem', fontWeight:900, marginBottom:4, color:'var(--text)' }}>
              개발자 국밥 먹이기
            </h3>
            <p style={{ fontSize:'.8rem', color:'var(--muted)', marginBottom:6, lineHeight:1.7 }}>
              방금 AI 검색에 <strong style={{ color:'var(--primary)' }}>약 {Math.ceil(tokenCost * 1450) || 0}원</strong> 이 사용됐어요 💸<br />
              이 비용은 개발자 통장에서 나갑니다 😅
            </p>
            <p style={{ fontSize:'.75rem', color:'var(--muted)', marginBottom:18, lineHeight:1.6 }}>
              커피 한 잔 값이면 수백 번 검색이 가능해요 ☕<br />
              마음에 드셨다면 국밥 한 그릇 도와주세요 🥣
            </p>
            <div style={{ background:'#fff', borderRadius:12, padding:12, display:'inline-block', marginBottom:10 }}>
              <img src="/toss-qr.png" alt="토스 후원 QR" style={{ width:196, height:196, display:'block' }} />
            </div>
            <p style={{ fontSize:'.72rem', color:'var(--muted)', marginBottom:18 }}>
              📱 토스앱으로 QR 스캔 (PC에서 확인)
            </p>
            <button onClick={() => setShowQR(false)} style={{
              width:'100%', padding:'10px', borderRadius:10,
              background:'var(--surface2)', border:'1px solid var(--border)',
              color:'var(--text)', cursor:'pointer', fontSize:'.88rem',
            }}>닫기</button>
          </div>
        </div>
      )}
    </>
  )
}
