import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const THEMES = [
  // ── 글로우 계열 (후광·빛번짐 느낌) ──
  { id:'glow-orange', name:'글로우 오렌지', emoji:'🔥', vars:{ bg:'#0d0a07', surface:'#1a1208', surface2:'#221a0c', border:'#3d2a10', text:'#fff5e8', muted:'#aa8866', primary:'#ff6b35', accent:'#ffaa44', glow:'rgba(255,107,53,.18)' }},
  { id:'glow-blue',   name:'글로우 블루',   emoji:'💙', vars:{ bg:'#060a10', surface:'#0a1220', surface2:'#0e192c', border:'#1a3050', text:'#e8f4ff', muted:'#6688aa', primary:'#3b8fff', accent:'#00d4ff', glow:'rgba(59,143,255,.18)' }},
  { id:'glow-purple', name:'글로우 퍼플',   emoji:'💜', vars:{ bg:'#08060e', surface:'#110d1e', surface2:'#180f28', border:'#2e1a50', text:'#f0e8ff', muted:'#9966cc', primary:'#a855f7', accent:'#e040fb', glow:'rgba(168,85,247,.18)' }},
  { id:'glow-green',  name:'글로우 그린',   emoji:'💚', vars:{ bg:'#060d08', surface:'#0c1a0e', surface2:'#102214', border:'#1a3a1e', text:'#e8fff0', muted:'#5a9a66', primary:'#22c55e', accent:'#86efac', glow:'rgba(34,197,94,.18)' }},
  { id:'glow-red',    name:'글로우 레드',   emoji:'❤️', vars:{ bg:'#0e0606', surface:'#1e0a0a', surface2:'#280d0d', border:'#4a1212', text:'#fff0f0', muted:'#aa5566', primary:'#ef4444', accent:'#ff8080', glow:'rgba(239,68,68,.18)' }},
  { id:'glow-gold',   name:'글로우 골드',   emoji:'✨', vars:{ bg:'#0a0800', surface:'#1a1400', surface2:'#221c00', border:'#3d3000', text:'#fff8e0', muted:'#aa9944', primary:'#f59e0b', accent:'#fde68a', glow:'rgba(245,158,11,.18)' }},
  { id:'glow-teal',   name:'글로우 틸',     emoji:'🌊', vars:{ bg:'#060d0d', surface:'#0c1a1a', surface2:'#102222', border:'#1a3838', text:'#e0ffff', muted:'#449999', primary:'#14b8a6', accent:'#5eead4', glow:'rgba(20,184,166,.18)' }},
  { id:'glow-pink',   name:'글로우 핑크',   emoji:'🌸', vars:{ bg:'#0e060a', surface:'#1e0c14', surface2:'#28101c', border:'#4a1830', text:'#fff0f6', muted:'#cc6688', primary:'#ec4899', accent:'#f9a8d4', glow:'rgba(236,72,153,.18)' }},

  // ── 기존 테마 ──
  { id:'dark',        name:'다크',          emoji:'🌑', vars:{ bg:'#0f0f13', surface:'#1a1a22', surface2:'#22222e', border:'#2e2e3e', text:'#f0f0f5', muted:'#888899', primary:'#ff6b35', accent:'#7c6cff' }},
  { id:'midnight',    name:'미드나잇',      emoji:'🌙', vars:{ bg:'#050d1a', surface:'#0d1b2e', surface2:'#122238', border:'#1e3a5f', text:'#e0eeff', muted:'#6a8caa', primary:'#4d9fff', accent:'#00d4ff' }},
  { id:'forest',      name:'포레스트',      emoji:'🌲', vars:{ bg:'#080f0a', surface:'#101a12', surface2:'#16241a', border:'#1e3a24', text:'#e0f0e4', muted:'#6a9a70', primary:'#4caf6e', accent:'#a8e063' }},
  { id:'aurora',      name:'오로라',        emoji:'🌌', vars:{ bg:'#07050f', surface:'#110d20', surface2:'#18142c', border:'#2a1f4a', text:'#eeeaff', muted:'#8878bb', primary:'#a855f7', accent:'#06b6d4' }},
  { id:'sunset',      name:'선셋',          emoji:'🌅', vars:{ bg:'#130709', surface:'#210d10', surface2:'#2d1216', border:'#4a1f26', text:'#fff0f0', muted:'#aa7788', primary:'#ff4d6d', accent:'#ff9a3c' }},
  { id:'mono',        name:'모노크롬',      emoji:'⬜', vars:{ bg:'#111111', surface:'#1c1c1c', surface2:'#252525', border:'#333333', text:'#eeeeee', muted:'#777777', primary:'#cccccc', accent:'#999999' }},
  { id:'light',       name:'라이트',        emoji:'☀️', vars:{ bg:'#f5f5f7', surface:'#ffffff', surface2:'#f0f0f5', border:'#e0e0e8', text:'#1a1a2e', muted:'#666680', primary:'#ff6b35', accent:'#7c6cff' }},
  { id:'cyber',       name:'사이버펑크',    emoji:'⚡', vars:{ bg:'#0a0010', surface:'#130020', surface2:'#1a002c', border:'#3d0066', text:'#fff0ff', muted:'#cc88ff', primary:'#ff00cc', accent:'#ffee00' }},

  // ── 프리미엄 계열 ──
  { id:'obsidian',    name:'옵시디언',      emoji:'🖤', vars:{ bg:'#000000', surface:'#111111', surface2:'#181818', border:'#222222', text:'#ffffff', muted:'#666666', primary:'#ffffff', accent:'#888888' }},
  { id:'ocean',       name:'딥오션',        emoji:'🐋', vars:{ bg:'#020810', surface:'#04101e', surface2:'#071628', border:'#0e2a44', text:'#cce8ff', muted:'#446688', primary:'#0ea5e9', accent:'#38bdf8' }},
  { id:'rose',        name:'로즈골드',      emoji:'🌹', vars:{ bg:'#0f0a0a', surface:'#1e1212', surface2:'#281818', border:'#3d2222', text:'#fff5f5', muted:'#997777', primary:'#e07070', accent:'#f4a0a0' }},
  { id:'jade',        name:'제이드',        emoji:'🍃', vars:{ bg:'#040a06', surface:'#091410', surface2:'#0d1c16', border:'#143022', text:'#e0f5ec', muted:'#448866', primary:'#059669', accent:'#34d399' }},
]

export default function Layout({ children, title, description, canonical }) {
  const [theme, setTheme] = useState('dark')
  const [showThemes, setShowThemes] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [tokenCost, setTokenCost] = useState(0)

  const siteTitle = title ? `${title} | 강남뭐먹` : '강남뭐먹 — 강남 맛집 AI 추천'
  const siteDesc = description || '강남역·삼성역 맛집을 AI가 빠르게 추천. 국밥·이자카야·한우·중식 등 170개+ 식당 정보.'

  useEffect(() => {
    const saved = localStorage.getItem('gm-theme')
    if (saved) setTheme(saved)
    const cost = parseFloat(localStorage.getItem('gm-token-cost') || '0')
    setTokenCost(cost)
  }, [])

  useEffect(() => {
    const t = THEMES.find(t => t.id === theme) || THEMES[0]
    Object.entries(t.vars).forEach(([k,v]) => document.documentElement.style.setProperty(`--${k}`,v))
    const glowColor = t.vars.glow
    if (glowColor) {
      document.body.style.background = `radial-gradient(ellipse 80% 60% at 50% 20%, ${glowColor} 0%, var(--bg) 65%)`
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

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta name="robots" content="index, follow" />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:site_name" content="강남뭐먹" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'0 16px', position:'sticky', top:0, zIndex:100, backdropFilter:'blur(10px)' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', height:52 }}>
          <Link href="/" style={{ fontWeight:900, fontSize:'1.05rem', color:'var(--primary)', textDecoration:'none' }}>🍚 강남뭐먹</Link>

          <div style={{ display:'flex', alignItems:'center', gap:6 }}>
            {tokenCost > 0 && (
              <span style={{ fontSize:'.7rem', color:'var(--muted)', background:'var(--surface2)', padding:'3px 8px', borderRadius:100, border:'1px solid var(--border)', whiteSpace:'nowrap' }}>
                ⚡ ${tokenCost.toFixed(4)}
              </span>
            )}

            <button onClick={() => setShowQR(true)} style={{ fontSize:'.72rem', fontWeight:700, background:'linear-gradient(135deg,#ff6b35,#ff9a3c)', color:'#fff', border:'none', borderRadius:100, padding:'5px 10px', cursor:'pointer', whiteSpace:'nowrap' }}>
              🍚 국밥 먹이기
            </button>

            <div style={{ position:'relative' }}>
              <button onClick={() => setShowThemes(!showThemes)} style={{ background:'var(--surface2)', border:'1px solid var(--border)', borderRadius:100, padding:'5px 9px', cursor:'pointer', fontSize:'.85rem', color:'var(--text)' }}>
                {ct.emoji}
              </button>
              {showThemes && (
                <>
                  <div onClick={() => setShowThemes(false)} style={{ position:'fixed', inset:0, zIndex:10 }} />
                  <div style={{ position:'absolute', top:'110%', right:0, zIndex:11, background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:10, minWidth:280, boxShadow:'0 8px 32px rgba(0,0,0,.5)', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:4 }}>
                    {THEMES.map(t => (
                      <button key={t.id} onClick={() => { setTheme(t.id); setShowThemes(false) }} style={{ display:'flex', alignItems:'center', gap:5, padding:'7px 10px', borderRadius:8, cursor:'pointer', background: theme===t.id ? 'var(--primary)' : 'transparent', color: theme===t.id ? '#fff' : 'var(--text)', border:'none', fontSize:'.76rem', fontWeight: theme===t.id ? 700 : 400, whiteSpace:'nowrap' }}>
                        {t.emoji} {t.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer style={{ borderTop:'1px solid var(--border)', padding:'28px 16px', textAlign:'center', color:'var(--muted)', fontSize:'.78rem', marginTop:60 }}>
        <p>© 2026 강남뭐먹 — 강남 맛집 AI 추천 서비스</p>
        <p style={{ marginTop:4 }}>삼성역 · 강남역 · 잠실역 주변 식당 정보</p>
      </footer>

      {showQR && (
        <div onClick={() => setShowQR(false)} style={{ position:'fixed', inset:0, zIndex:200, background:'rgba(0,0,0,.75)', backdropFilter:'blur(6px)', display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
          <div onClick={e => e.stopPropagation()} style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:20, padding:'32px 28px', maxWidth:300, width:'100%', textAlign:'center', boxShadow:'0 20px 60px rgba(0,0,0,.5)' }}>
            <div style={{ fontSize:'2rem', marginBottom:6 }}>🍚</div>
            <h3 style={{ fontSize:'1rem', fontWeight:900, marginBottom:4, color:'var(--text)' }}>개발자 국밥 먹이기</h3>
            <p style={{ fontSize:'.8rem', color:'var(--muted)', marginBottom:20, lineHeight:1.6 }}>
              서비스가 마음에 드셨다면<br />국밥 한 그릇 후원해주세요 🙏
            </p>
            <div style={{ background:'#fff', borderRadius:12, padding:12, display:'inline-block', marginBottom:12 }}>
              <img src="/toss-qr.png" alt="토스 후원 QR" style={{ width:200, height:200, display:'block' }} />
            </div>
            <p style={{ fontSize:'.72rem', color:'var(--muted)', marginBottom:20 }}>토스앱으로 QR 스캔</p>
            <button onClick={() => setShowQR(false)} style={{ width:'100%', padding:'10px', borderRadius:10, background:'var(--surface2)', border:'1px solid var(--border)', color:'var(--text)', cursor:'pointer', fontSize:'.88rem' }}>닫기</button>
          </div>
        </div>
      )}
    </>
  )
}
