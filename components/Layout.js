import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const THEMES = [
  // ── 라이트 (기본) ──
  { id:'light',       name:'라이트',        emoji:'☀️',  vars:{ bg:'#f8f8fa', surface:'#ffffff',  surface2:'#f2f2f7', border:'#e0e0eb', text:'#191922', muted:'#6b6b80', primary:'#e05a1e', accent:'#4a3cde' }},
  // ── 레퍼런스 inspired ──
  { id:'storyweb',    name:'스토리',        emoji:'🎀',  vars:{ bg:'#fdf6f8', surface:'#ffffff',  surface2:'#fff0f4', border:'#f0d8e0', text:'#2a1a22', muted:'#997788', primary:'#d4547a', accent:'#9b59b6' }},
  { id:'astra',       name:'아스트라',      emoji:'🚀',  vars:{ bg:'#f4f0ff', surface:'#ffffff',  surface2:'#ece8ff', border:'#c8b8ff', text:'#1a0a3a', muted:'#6650a4', primary:'#6c2bd9', accent:'#f5a623' }},
  { id:'agency',      name:'에이전시',      emoji:'🏔️', vars:{ bg:'#f0f0ee', surface:'#ffffff',  surface2:'#e8e8e4', border:'#d0d0c8', text:'#1a1a14', muted:'#666658', primary:'#e8a020', accent:'#1a1a14' }},
  { id:'creative',    name:'크리에이티브',  emoji:'🎨',  vars:{ bg:'#ffffff', surface:'#fafafa',  surface2:'#f5f0ff', border:'#e0d8ff', text:'#111111', muted:'#777777', primary:'#e040a0', accent:'#7c3aed' }},
  // ── 지역 테마 ──
  { id:'samseong',    name:'삼성역',        emoji:'🏙️', vars:{ bg:'#0a0c14', surface:'#11141f', surface2:'#181c2c', border:'#242840', text:'#e8eeff', muted:'#7080a0', primary:'#4488ff', accent:'#00cfcc', glow:'rgba(68,136,255,.08)' }},
  { id:'jamsil',      name:'잠실역',        emoji:'🎡',  vars:{ bg:'#0d0806', surface:'#181008', surface2:'#201508', border:'#3a2510', text:'#fff4e0', muted:'#a07848', primary:'#ff8c20', accent:'#ff4d6d', glow:'rgba(255,140,32,.09)' }},
  // ── 다크 계열 ──
  { id:'dark',        name:'다크',          emoji:'🌑',  vars:{ bg:'#0f0f13', surface:'#1a1a22', surface2:'#22222e', border:'#2e2e3e', text:'#f0f0f5', muted:'#888899', primary:'#ff6b35', accent:'#7c6cff' }},
  { id:'midnight',    name:'미드나잇',      emoji:'🌙',  vars:{ bg:'#050d1a', surface:'#0d1b2e', surface2:'#122238', border:'#1e3a5f', text:'#eef4ff', muted:'#7799bb', primary:'#4d9fff', accent:'#00d4ff' }},
  { id:'obsidian',    name:'옵시디언',      emoji:'🖤',  vars:{ bg:'#000000', surface:'#0f0f0f', surface2:'#161616', border:'#252525', text:'#f5f5f5', muted:'#888888', primary:'#e8e8e8', accent:'#aaaaaa' }},
  { id:'ocean',       name:'딥오션',        emoji:'🐋',  vars:{ bg:'#020810', surface:'#04101e', surface2:'#071628', border:'#0e2a44', text:'#ddf0ff', muted:'#6699bb', primary:'#0ea5e9', accent:'#38bdf8' }},
  { id:'aurora',      name:'오로라',        emoji:'🌌',  vars:{ bg:'#07050f', surface:'#110d20', surface2:'#18142c', border:'#2a1f4a', text:'#f2eeff', muted:'#9988cc', primary:'#a855f7', accent:'#06b6d4' }},
  { id:'forest',      name:'포레스트',      emoji:'🌲',  vars:{ bg:'#060d08', surface:'#0e1a10', surface2:'#131f15', border:'#1c3320', text:'#e8f5ec', muted:'#779966', primary:'#4caf6e', accent:'#a8e063' }},
  { id:'sunset',      name:'선셋',          emoji:'🌅',  vars:{ bg:'#130709', surface:'#1e0d10', surface2:'#271015', border:'#3d1820', text:'#fff0f0', muted:'#cc8888', primary:'#ff4d6d', accent:'#ff9a3c' }},
  { id:'jade',        name:'제이드',        emoji:'🍃',  vars:{ bg:'#040a06', surface:'#081410', surface2:'#0c1a14', border:'#122a1e', text:'#eafaf2', muted:'#66aa88', primary:'#059669', accent:'#34d399' }},
  { id:'rose',        name:'로즈골드',      emoji:'🌹',  vars:{ bg:'#0f0808', surface:'#1c1010', surface2:'#231414', border:'#361e1e', text:'#fff5f5', muted:'#bb8888', primary:'#e07070', accent:'#f4a0a0' }},
  { id:'cyber',       name:'사이버펑크',    emoji:'⚡',  vars:{ bg:'#08000e', surface:'#110018', surface2:'#180022', border:'#320055', text:'#fff0ff', muted:'#bb77ee', primary:'#ff00cc', accent:'#ffee00' }},
  { id:'mono',        name:'모노크롬',      emoji:'◻️', vars:{ bg:'#0a0a0a', surface:'#151515', surface2:'#1e1e1e', border:'#2e2e2e', text:'#eeeeee', muted:'#888888', primary:'#cccccc', accent:'#999999' }},
  // ── 글로우 계열 ──
  { id:'glow-orange', name:'글로우🔥',      emoji:'🔥',  vars:{ bg:'#060300', surface:'#0e0700', surface2:'#130b00', border:'#281500', text:'#fff0e0', muted:'#bb7733', primary:'#ff6b35', accent:'#ffaa44', glow:'rgba(255,107,53,.10)' }},
  { id:'glow-blue',   name:'글로우💙',      emoji:'💙',  vars:{ bg:'#010408', surface:'#030a16', surface2:'#050f20', border:'#0a1e3c', text:'#e0eeff', muted:'#6688aa', primary:'#3b8fff', accent:'#00d4ff', glow:'rgba(59,143,255,.10)' }},
  { id:'glow-purple', name:'글로우💜',      emoji:'💜',  vars:{ bg:'#030108', surface:'#070514', surface2:'#0b081e', border:'#1c1040', text:'#ede0ff', muted:'#8855bb', primary:'#a855f7', accent:'#e040fb', glow:'rgba(168,85,247,.10)' }},
  { id:'glow-green',  name:'글로우💚',      emoji:'💚',  vars:{ bg:'#010501', surface:'#040c05', surface2:'#070f08', border:'#0e2010', text:'#e0ffe8', muted:'#447744', primary:'#22c55e', accent:'#86efac', glow:'rgba(34,197,94,.10)' }},
  { id:'glow-red',    name:'글로우❤️',     emoji:'❤️', vars:{ bg:'#060101', surface:'#100404', surface2:'#160606', border:'#300808', text:'#ffe8e8', muted:'#bb5555', primary:'#ef4444', accent:'#ff8080', glow:'rgba(239,68,68,.10)' }},
  { id:'glow-gold',   name:'글로우✨',      emoji:'✨',  vars:{ bg:'#050300', surface:'#0e0800', surface2:'#140b00', border:'#261800', text:'#fff5d0', muted:'#aa8822', primary:'#f59e0b', accent:'#fde68a', glow:'rgba(245,158,11,.10)' }},
  { id:'glow-teal',   name:'글로우🌊',      emoji:'🌊',  vars:{ bg:'#010505', surface:'#040e0e', surface2:'#061212', border:'#0c2222', text:'#d8ffff', muted:'#338888', primary:'#14b8a6', accent:'#5eead4', glow:'rgba(20,184,166,.10)' }},
  { id:'glow-pink',   name:'글로우🌸',      emoji:'🌸',  vars:{ bg:'#060102', surface:'#100408', surface2:'#16060c', border:'#2e0c1a', text:'#ffe8f4', muted:'#bb4477', primary:'#ec4899', accent:'#f9a8d4', glow:'rgba(236,72,153,.10)' }},
]

export default function Layout({ children, title, description, canonical }) {
  const [theme,      setTheme]      = useState('light')
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
      document.body.style.background = `radial-gradient(ellipse 70% 45% at 50% 15%, ${t.vars.glow} 0%, var(--bg) 60%)`
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
                  borderRadius:100, padding:'4px 10px', cursor:'pointer',
                  fontSize:'.82rem', color: showThemes ? '#fff' : 'var(--text)',
                  flexShrink:0, transition:'all .15s',
                  display:'flex', alignItems:'center', gap:4,
                  whiteSpace:'nowrap',
                }}>
                <span>{ct.emoji}</span>
                <span style={{ fontSize:'.62rem', color: showThemes ? 'rgba(255,255,255,.8)' : 'var(--muted)', lineHeight:1 }}>테마</span>
              </button>

              {showThemes && (
                <>
                  <div onClick={() => setShowThemes(false)} style={{ position:'fixed', inset:0, zIndex:10 }} />
                  {/* PC: 버튼 옆 팝업 / 모바일: 상단 full-width */}
                  <style>{`
                    @media (min-width: 640px) {
                      .theme-panel {
                        position: absolute !important;
                        top: calc(100% + 8px) !important;
                        right: 0 !important;
                        left: auto !important;
                        width: 340px !important;
                        border-radius: 14px !important;
                        border: 1px solid var(--border) !important;
                        border-top: 1px solid var(--border) !important;
                        border-bottom: 1px solid var(--border) !important;
                        max-height: 420px !important;
                        overflow-y: auto !important;
                      }
                    }
                    .theme-panel { scrollbar-width: thin; }
                    .theme-panel::-webkit-scrollbar { width: 4px; }
                    .theme-panel::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
                  `}</style>
                  <div className="theme-panel" style={{
                    position:'fixed', top:54, left:0, right:0, zIndex:11,
                    background:'var(--surface)',
                    borderTop:'1px solid var(--border)',
                    borderBottom:'2px solid var(--primary)',
                    padding:'10px',
                    boxShadow:'0 8px 32px rgba(0,0,0,.3)',
                    display:'grid',
                    gridTemplateColumns:'repeat(auto-fill, minmax(80px, 1fr))',
                    gap:5,
                  }}>
                    {THEMES.map(t => {
                      const isActive = theme === t.id
                      const isLightTheme = ['light','storyweb','astra','agency','creative'].includes(t.id)
                      return (
                        <button key={t.id} onClick={() => { setTheme(t.id); setShowThemes(false) }} style={{
                          display:'flex', alignItems:'center', gap:4,
                          padding:'6px 8px', borderRadius:8, cursor:'pointer',
                          background: isActive ? 'var(--primary)' : (isLightTheme ? '#f0f0f0' : 'var(--surface2)'),
                          color: isActive ? '#fff' : (isLightTheme ? '#111' : 'var(--text)'),
                          border: isActive ? '1.5px solid var(--primary)' : '1.5px solid var(--border)',
                          fontSize:'.72rem',
                          fontWeight: isActive ? 700 : 500,
                          whiteSpace:'nowrap',
                          overflow:'hidden',
                          transition:'all .1s',
                          minWidth:0,
                        }}>
                          <span style={{ flexShrink:0 }}>{t.emoji}</span>
                          <span style={{ overflow:'hidden', textOverflow:'ellipsis' }}>{t.name}</span>
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
            <p style={{ fontSize:'.8rem', color:'var(--muted)', marginBottom:18, lineHeight:1.8 }}>
              방금 AI 검색에 <strong style={{ color:'var(--primary)' }}>약 {Math.ceil(tokenCost * 1450) || 0}원</strong> 이 사용됐어요<br />
              이 비용은 개발자 통장에서 나갑니다 💸<br />
              <br />
              <span style={{ fontSize:'.72rem', opacity:.75 }}>
                (추신) 국밥 한 그릇 값이면<br />
                개발자가 일주일은 버텨요 🥣
              </span>
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
