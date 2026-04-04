import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Interstitial from './Interstitial'

// ── 폰트 프리셋 ──────────────────────────────────────────────
const FONTS = {
  default:   { name:'기본',     css:"-apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Malgun Gothic', sans-serif" },
  rounded:   { name:'둥근체',   css:"'Nunito', 'Noto Sans KR', sans-serif",   google:'Nunito:wght@400;700;900' },
  serif:     { name:'세리프',   css:"'Playfair Display', 'Noto Serif KR', Georgia, serif", google:'Playfair+Display:wght@400;700;900' },
  mono:      { name:'모노',     css:"'JetBrains Mono', 'Courier New', monospace", google:'JetBrains+Mono:wght@400;700' },
  elegant:   { name:'엘레강트', css:"'Cormorant Garamond', 'Noto Serif KR', Georgia, serif", google:'Cormorant+Garamond:wght@400;600;700' },
  display:   { name:'디스플레이',css:"'Space Grotesk', 'Noto Sans KR', sans-serif", google:'Space+Grotesk:wght@400;600;700' },
  retro:     { name:'레트로',   css:"'DM Serif Display', Georgia, serif", google:'DM+Serif+Display' },
  clean:     { name:'클린',     css:"'Plus Jakarta Sans', 'Noto Sans KR', sans-serif", google:'Plus+Jakarta+Sans:wght@400;600;700;800' },
}

const THEMES = [
  // ── LIGHT ──────────────────────────────────────────────────
  {
    id:'light', name:'라이트', emoji:'☀️', font:'clean', group:'라이트',
    vars:{ bg:'#f8f8fa', surface:'#ffffff', surface2:'#f2f2f7', border:'#e0e0eb', text:'#191922', muted:'#6b6b80', primary:'#e05a1e', accent:'#4a3cde' },
  },
  {
    id:'cream', name:'크림', emoji:'🧈', font:'rounded', group:'라이트',
    vars:{ bg:'#fdf8f0', surface:'#fffcf5', surface2:'#f5ede0', border:'#e8d8c0', text:'#2a1e10', muted:'#8a6848', primary:'#c87820', accent:'#e05a1e' },
  },
  {
    id:'mocha', name:'모카', emoji:'☕', font:'serif', group:'라이트',
    vars:{ bg:'#f5ede4', surface:'#fdf7f2', surface2:'#ede0d4', border:'#d4bfaa', text:'#241810', muted:'#8a6858', primary:'#8b4513', accent:'#c87820' },
  },
  {
    id:'sage', name:'세이지', emoji:'🌿', font:'clean', group:'라이트',
    vars:{ bg:'#f0f4f0', surface:'#f8fbf8', surface2:'#e4ece4', border:'#c8d8c8', text:'#182418', muted:'#5a7060', primary:'#3a7a50', accent:'#8b7355' },
  },
  {
    id:'lavender', name:'라벤더', emoji:'💜', font:'rounded', group:'라이트',
    vars:{ bg:'#f4f0ff', surface:'#faf8ff', surface2:'#ece8ff', border:'#ccc0f0', text:'#1a1030', muted:'#7060a0', primary:'#6c3fd4', accent:'#e040a0' },
  },
  {
    id:'rose-light', name:'로즈', emoji:'🌸', font:'elegant', group:'라이트',
    vars:{ bg:'#fff5f8', surface:'#ffffff', surface2:'#ffe8f0', border:'#f0c8d8', text:'#2a1020', muted:'#906878', primary:'#d4546e', accent:'#9b59b6' },
  },
  // ── GRADIENT ───────────────────────────────────────────────
  {
    id:'aurora-grad', name:'오로라', emoji:'🌌', font:'display', group:'그라디언트',
    vars:{ bg:'#0a0520', surface:'#140d30', surface2:'#1c1440', border:'#302060', text:'#f0e8ff', muted:'#9080c0', primary:'#c084fc', accent:'#22d3ee' },
    gradient: 'linear-gradient(135deg, #0a0520 0%, #1a0a3a 40%, #0a2040 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(20,13,48,.95), rgba(10,32,64,.95))',
  },
  {
    id:'sunset-grad', name:'선셋', emoji:'🌇', font:'display', group:'그라디언트',
    vars:{ bg:'#1a0810', surface:'#280d18', surface2:'#340f20', border:'#50182c', text:'#fff0e8', muted:'#c07888', primary:'#ff6b50', accent:'#ffc850' },
    gradient: 'linear-gradient(160deg, #1a0810 0%, #2a0f18 35%, #1a1008 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(40,13,24,.95), rgba(26,16,8,.95))',
  },
  {
    id:'ocean-grad', name:'오션', emoji:'🌊', font:'display', group:'그라디언트',
    vars:{ bg:'#020c1e', surface:'#041828', surface2:'#062038', border:'#0c3050', text:'#d0eeff', muted:'#5888aa', primary:'#38bdf8', accent:'#34d399' },
    gradient: 'linear-gradient(160deg, #020c1e 0%, #041828 50%, #02100e 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(4,24,40,.97), rgba(2,16,14,.97))',
  },
  {
    id:'candy', name:'캔디', emoji:'🍭', font:'rounded', group:'그라디언트',
    vars:{ bg:'#1a0820', surface:'#240d2c', surface2:'#2e1038', border:'#501858', text:'#ffe8ff', muted:'#c070c0', primary:'#e040fb', accent:'#ff7043' },
    gradient: 'linear-gradient(135deg, #1a0820 0%, #0a1030 50%, #200820 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(36,13,44,.95), rgba(10,16,48,.95))',
  },
  {
    id:'forest-grad', name:'포레스트', emoji:'🌲', font:'serif', group:'그라디언트',
    vars:{ bg:'#030e06', surface:'#071408', surface2:'#0c1c0c', border:'#142814', text:'#d8f0dc', muted:'#508860', primary:'#4ade80', accent:'#facc15' },
    gradient: 'linear-gradient(160deg, #030e06 0%, #071408 60%, #0e1204 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(7,20,8,.97), rgba(14,18,4,.97))',
  },
  // ── DARK ───────────────────────────────────────────────────
  {
    id:'dark', name:'다크', emoji:'🌑', font:'default', group:'다크',
    vars:{ bg:'#0f0f13', surface:'#1a1a22', surface2:'#22222e', border:'#2e2e3e', text:'#f0f0f5', muted:'#888899', primary:'#ff6b35', accent:'#7c6cff' },
  },
  {
    id:'midnight', name:'미드나잇', emoji:'🌙', font:'display', group:'다크',
    vars:{ bg:'#050d1a', surface:'#0d1b2e', surface2:'#122238', border:'#1e3a5f', text:'#eef4ff', muted:'#7799bb', primary:'#4d9fff', accent:'#00d4ff' },
  },
  {
    id:'obsidian', name:'옵시디언', emoji:'🖤', font:'mono', group:'다크',
    vars:{ bg:'#000000', surface:'#0f0f0f', surface2:'#161616', border:'#252525', text:'#f5f5f5', muted:'#888888', primary:'#e8e8e8', accent:'#aaaaaa' },
  },
  {
    id:'chrome', name:'크롬', emoji:'⚙️', font:'display', group:'다크',
    vars:{ bg:'#080a0c', surface:'#111518', surface2:'#181c22', border:'#252c34', text:'#d8e8f8', muted:'#6878a0', primary:'#94a3b8', accent:'#38bdf8' },
  },
  {
    id:'cyber', name:'사이버펑크', emoji:'⚡', font:'mono', group:'다크',
    vars:{ bg:'#04000a', surface:'#0a0014', surface2:'#100020', border:'#280040', text:'#fff0ff', muted:'#aa66ee', primary:'#ff00cc', accent:'#ffee00' },
  },
  {
    id:'blood', name:'블러드문', emoji:'🩸', font:'display', group:'다크',
    vars:{ bg:'#080002', surface:'#120306', surface2:'#1a040a', border:'#380810', text:'#ffe8e0', muted:'#aa5548', primary:'#ef4444', accent:'#fb923c' },
  },
  {
    id:'jade', name:'제이드', emoji:'🍃', font:'default', group:'다크',
    vars:{ bg:'#040a06', surface:'#081410', surface2:'#0c1a14', border:'#122a1e', text:'#eafaf2', muted:'#66aa88', primary:'#059669', accent:'#34d399' },
  },
  // ── METALLIC / SPECIAL ─────────────────────────────────────
  {
    id:'gold', name:'골드', emoji:'✨', font:'elegant', group:'스페셜',
    vars:{ bg:'#0e0900', surface:'#1a1200', surface2:'#241900', border:'#3a2800', text:'#fff8d0', muted:'#b09040', primary:'#f5c518', accent:'#ff8c20' },
  },
  {
    id:'silver', name:'실버', emoji:'🪙', font:'display', group:'스페셜',
    vars:{ bg:'#0a0c10', surface:'#141820', surface2:'#1c2030', border:'#2c3040', text:'#e8eef8', muted:'#7080a0', primary:'#94a3b8', accent:'#e2e8f0' },
  },
  {
    id:'retro80', name:'레트로80', emoji:'📺', font:'mono', group:'스페셜',
    vars:{ bg:'#0a0014', surface:'#100820', surface2:'#180c30', border:'#301840', text:'#ffeeff', muted:'#cc88cc', primary:'#ff00ff', accent:'#00ffcc' },
    gradient: 'linear-gradient(180deg, #0a0014 0%, #0f0520 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(16,8,32,.97), rgba(8,2,20,.97))',
  },
  {
    id:'earthy', name:'어스', emoji:'🏔️', font:'serif', group:'스페셜',
    vars:{ bg:'#1a1208', surface:'#241a0c', surface2:'#2e2010', border:'#48321c', text:'#f5e8d0', muted:'#a08060', primary:'#d2691e', accent:'#8fbc8f' },
  },
  // ── 지역 테마 ───────────────────────────────────────────────
  {
    id:'samseong', name:'삼성역', emoji:'🏙️', font:'display', group:'지역',
    vars:{ bg:'#040810', surface:'#08101e', surface2:'#0c182c', border:'#182840', text:'#e0eeff', muted:'#607090', primary:'#3b8fff', accent:'#00cfcc' },
    gradient: 'linear-gradient(170deg, #040810 0%, #060c1a 60%, #040a0e 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(8,16,30,.98), rgba(4,10,14,.98))',
  },
  {
    id:'jamsil', name:'잠실역', emoji:'🎡', font:'display', group:'지역',
    vars:{ bg:'#0e0804', surface:'#1a1006', surface2:'#221408', border:'#3a2210', text:'#fff4e0', muted:'#a07848', primary:'#ff8c20', accent:'#ff4d6d' },
    gradient: 'linear-gradient(160deg, #0e0804 0%, #1c1006 50%, #0e0a04 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(26,16,6,.98), rgba(14,10,4,.98))',
  },
  // ── 글로우 ─────────────────────────────────────────────────
  {
    id:'glow-orange', name:'글로우🔥', emoji:'🔥', font:'default', group:'글로우',
    vars:{ bg:'#060300', surface:'#0e0700', surface2:'#130b00', border:'#281500', text:'#fff0e0', muted:'#bb7733', primary:'#ff6b35', accent:'#ffaa44', glow:'rgba(255,107,53,.12)' },
  },
  {
    id:'glow-blue', name:'글로우💙', emoji:'💙', font:'default', group:'글로우',
    vars:{ bg:'#010408', surface:'#030a16', surface2:'#050f20', border:'#0a1e3c', text:'#e0eeff', muted:'#6688aa', primary:'#3b8fff', accent:'#00d4ff', glow:'rgba(59,143,255,.12)' },
  },
  {
    id:'glow-purple', name:'글로우💜', emoji:'💜', font:'default', group:'글로우',
    vars:{ bg:'#030108', surface:'#070514', surface2:'#0b081e', border:'#1c1040', text:'#ede0ff', muted:'#8855bb', primary:'#a855f7', accent:'#e040fb', glow:'rgba(168,85,247,.12)' },
  },
  {
    id:'glow-green', name:'글로우💚', emoji:'💚', font:'default', group:'글로우',
    vars:{ bg:'#010501', surface:'#040c05', surface2:'#070f08', border:'#0e2010', text:'#e0ffe8', muted:'#447744', primary:'#22c55e', accent:'#86efac', glow:'rgba(34,197,94,.12)' },
  },
  {
    id:'glow-pink', name:'글로우🌸', emoji:'🌸', font:'default', group:'글로우',
    vars:{ bg:'#060102', surface:'#100408', surface2:'#16060c', border:'#2e0c1a', text:'#ffe8f4', muted:'#bb4477', primary:'#ec4899', accent:'#f9a8d4', glow:'rgba(236,72,153,.12)' },
  },
  {
    id:'glow-gold', name:'글로우✨', emoji:'✨', font:'default', group:'글로우',
    vars:{ bg:'#050300', surface:'#0e0800', surface2:'#140b00', border:'#261800', text:'#fff5d0', muted:'#aa8822', primary:'#f59e0b', accent:'#fde68a', glow:'rgba(245,158,11,.12)' },
  },
]

export default function Layout({ children, title, description, canonical }) {
  const [theme,      setTheme]      = useState('light')
  const [showThemes, setShowThemes] = useState(false)
  const [showQR,     setShowQR]     = useState(false)
  const [showStations, setShowStations] = useState(false)
  const [tokenCost,  setTokenCost]  = useState(0)

  const rawTitle = title ? `${title} | 강남뭐먹` : '강남뭐먹 — 강남 맛집 AI 추천'
  const siteTitle = rawTitle.length > 70 ? rawTitle.slice(0, 68) + '…' : rawTitle
  const siteDesc  = description || '강남역·삼성역 맛집을 AI가 빠르게 추천. 국밥·이자카야·한우·중식 170개+ 식당 정보.'

  useEffect(() => {
    const saved = localStorage.getItem('gm-theme')
    if (saved && THEMES.find(t => t.id === saved)) setTheme(saved)
    const cost = parseFloat(localStorage.getItem('gm-token-cost') || '0')
    setTokenCost(cost)
  }, [])

  useEffect(() => {
    const t = THEMES.find(t => t.id === theme) || THEMES[0]
    const root = document.documentElement
    Object.entries(t.vars).forEach(([k,v]) => root.style.setProperty(`--${k}`, v))

    // 배경: gradient > glow > solid
    if (t.gradient) {
      document.body.style.background = t.gradient
    } else if (t.vars.glow) {
      document.body.style.background = `radial-gradient(ellipse 70% 45% at 50% 15%, ${t.vars.glow} 0%, var(--bg) 60%)`
    } else {
      document.body.style.background = 'var(--bg)'
    }

    // 폰트 적용
    const fontKey = t.font || 'default'
    const fontDef = FONTS[fontKey] || FONTS.default
    document.body.style.fontFamily = fontDef.css
    root.style.setProperty('--font', fontDef.css)

    // 구글 폰트 동적 로드
    const linkId = 'gm-font-link'
    let link = document.getElementById(linkId)
    if (fontDef.google) {
      if (!link) { link = document.createElement('link'); link.id = linkId; link.rel = 'stylesheet'; document.head.appendChild(link) }
      link.href = `https://fonts.googleapis.com/css2?family=${fontDef.google}&display=swap`
    } else if (link) {
      link.href = ''
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

  // 사이드 광고 push
  useEffect(() => {
    try {
      const ads = document.querySelectorAll('.side-ad ins.adsbygoogle')
      ads.forEach(ins => {
        if (!ins.getAttribute('data-adsbygoogle-status')) {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        }
      })
    } catch (e) {}
  }, [])

  const ct = THEMES.find(t => t.id === theme) || THEMES[0]
  const isLightGroup = ct.group === '라이트'

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
        background: ct.headerGrad || 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        padding: '0 12px', position: 'sticky', top: 0, zIndex: 100,
        backdropFilter: 'blur(16px)',
        width: '100%', boxSizing: 'border-box',
        boxShadow: isLightGroup ? '0 1px 8px rgba(0,0,0,.08)' : '0 2px 16px rgba(0,0,0,.4)',
      }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'flex', alignItems:'center', height:52, gap:0, minWidth:0 }}>

          {/* 로고 */}
          <Link href="/" style={{ fontWeight:900, fontSize:'1rem', color:'var(--primary)', textDecoration:'none', flexShrink:0, marginRight:8 }}>
            🍚 강남뭐먹
          </Link>

          {/* 구분선 */}
          <span style={{ width:1, height:18, background:'var(--border)', flexShrink:0, marginRight:8 }} />

          {/* ── 역 네비 ── */}
          <style>{`
            .stnav-desktop::-webkit-scrollbar{display:none}
            .stnpill:hover{background:var(--surface2)!important;color:var(--text)!important}
            /* PC: 인라인, 모바일: 숨김 */
            .stnav-desktop{ display:flex; }
            .stnav-mobile-btn{ display:none; }
            @media(max-width:639px){
              .stnav-desktop{ display:none; }
              .stnav-mobile-btn{ display:flex; }
            }
          `}</style>

          {/* PC — 인라인 pill 가로 나열 */}
          <div className="stnav-desktop" style={{ alignItems:'center', gap:2, flex:1, minWidth:0, overflowX:'auto', scrollbarWidth:'none' }}>
            {[
              { href:'/dinner/samseong', label:'삼성역', emoji:'🏙️', live:true },
              { href:'/dinner/jamsil',   label:'잠실역', emoji:'🎡',  live:true },
              { href:null, label:'강남역', emoji:'🏢', live:false },
              { href:null, label:'서초역', emoji:'🌿', live:false },
              { href:null, label:'역삼역', emoji:'💼', live:false },
            ].map(s => {
              const isActive = typeof window !== 'undefined' && s.href && window.location.pathname.startsWith(s.href)
              return s.live ? (
                <Link key={s.label} href={s.href} className="stnpill" style={{
                  display:'flex', alignItems:'center', gap:3, flexShrink:0,
                  padding:'3px 9px', borderRadius:100,
                  fontSize:'.75rem', fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--primary)' : 'var(--muted)',
                  background: isActive ? 'var(--surface2)' : 'transparent',
                  border: isActive ? '1px solid var(--border)' : '1px solid transparent',
                  textDecoration:'none', whiteSpace:'nowrap', transition:'all .15s',
                }}>
                  <span>{s.emoji}</span><span>{s.label}</span>
                  <span style={{ width:5, height:5, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 5px #22c55e99', flexShrink:0 }} />
                </Link>
              ) : (
                <span key={s.label} style={{
                  display:'flex', alignItems:'center', gap:3, flexShrink:0,
                  padding:'3px 9px', borderRadius:100,
                  fontSize:'.75rem', color:'var(--border)', whiteSpace:'nowrap', opacity:.65,
                }}>
                  <span>{s.emoji}</span><span>{s.label}</span>
                  <span style={{ fontSize:'.5rem', padding:'1px 4px', borderRadius:3, background:'var(--surface2)', color:'var(--muted)', border:'1px solid var(--border)', lineHeight:1.4 }}>준비중</span>
                </span>
              )
            })}
          </div>

          {/* 모바일 — 드롭다운 버튼 */}
          <div className="stnav-mobile-btn" style={{ flex:1, minWidth:0, position:'relative' }}>
            {(() => {
              const path = typeof window !== 'undefined' ? window.location.pathname : ''
              const stations = [
                { href:'/dinner/samseong', short:'삼성' },
                { href:'/dinner/jamsil',   short:'잠실' },
              ]
              const current = stations.find(s => path.startsWith(s.href))
              return (
                <button onClick={() => { setShowStations(!showStations); setShowThemes(false) }} style={{
                  display:'flex', alignItems:'center', gap:4,
                  padding:'5px 10px', borderRadius:100, cursor:'pointer',
                  background: showStations ? 'var(--surface2)' : 'transparent',
                  border: '1px solid var(--border)',
                  fontSize:'.8rem', fontWeight:600, color:'var(--text)',
                  transition:'all .15s', whiteSpace:'nowrap',
                }}>
                  <span>{current ? '📍' : '🚇'}</span>
                  <span>{current ? current.short : '지역'}</span>
                  <span style={{ fontSize:'.6rem', color:'var(--muted)' }}>{showStations ? '▲' : '▼'}</span>
                </button>
              )
            })()}

            {showStations && (
              <>
                <div onClick={() => setShowStations(false)} style={{ position:'fixed', inset:0, zIndex:10 }} />
                <div style={{
                  position:'fixed', top:54, left:0, right:0, zIndex:11,
                  background:'var(--surface)',
                  borderBottom:'2px solid var(--primary)',
                  boxShadow:'0 8px 24px rgba(0,0,0,.3)',
                }}>
                  {[
                    { href:'/dinner/samseong', label:'삼성', emoji:'🏙️', live:true,  desc:'코엑스·4번출구 주변' },
                    { href:'/dinner/jamsil',   label:'잠실', emoji:'🎡',  live:true,  desc:'방이동·석촌호수·롯데타워' },
                    { href:null, label:'강남', emoji:'🏢', live:false, desc:'' },
                    { href:null, label:'서초', emoji:'🌿', live:false, desc:'' },
                    { href:null, label:'역삼', emoji:'💼', live:false, desc:'' },
                  ].map((s, i) => {
                    const isActive = typeof window !== 'undefined' && s.href && window.location.pathname.startsWith(s.href)
                    return s.live ? (
                      <Link key={s.label} href={s.href} onClick={() => setShowStations(false)} style={{
                        display:'flex', alignItems:'center', gap:12,
                        padding:'14px 20px',
                        borderTop: i > 0 ? '1px solid var(--border)' : 'none',
                        background: isActive ? 'var(--surface2)' : 'transparent',
                        textDecoration:'none', transition:'background .1s',
                      }}>
                        <span style={{ fontSize:'1.4rem', flexShrink:0 }}>{s.emoji}</span>
                        <div style={{ flex:1, minWidth:0 }}>
                          <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:2 }}>
                            <span style={{ fontSize:'.9rem', fontWeight:700, color: isActive ? 'var(--primary)' : 'var(--text)' }}>{s.label}</span>
                            <span style={{ width:6, height:6, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 6px #22c55e' }} />
                            <span style={{ fontSize:'.65rem', color:'#22c55e', fontWeight:600 }}>운영중</span>
                          </div>
                          <div style={{ fontSize:'.75rem', color:'var(--muted)' }}>{s.desc}</div>
                        </div>
                        {isActive && <span style={{ fontSize:'.75rem', color:'var(--primary)', fontWeight:700 }}>현재 ›</span>}
                      </Link>
                    ) : (
                      <div key={s.label} style={{
                        display:'flex', alignItems:'center', gap:12,
                        padding:'14px 20px',
                        borderTop: i > 0 ? '1px solid var(--border)' : 'none',
                        opacity:.5,
                      }}>
                        <span style={{ fontSize:'1.4rem', flexShrink:0 }}>{s.emoji}</span>
                        <div style={{ flex:1 }}>
                          <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                            <span style={{ fontSize:'.9rem', fontWeight:700, color:'var(--muted)' }}>{s.label}</span>
                            <span style={{ fontSize:'.65rem', padding:'1px 6px', borderRadius:4, background:'var(--surface2)', color:'var(--muted)', border:'1px solid var(--border)' }}>준비중</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
            )}
          </div>

          {/* 우측 버튼들 */}
          <div style={{ display:'flex', alignItems:'center', gap:5, flexShrink:0, marginLeft:6 }}>
            {/* 사용금액 — 국밥 그라디언트로 눈길 끌기, 클릭하면 QR */}
            {tokenCost > 0 && (
              <button onClick={() => setShowQR(true)} title="AI 검색 비용 — 국밥 한 그릇 쏴주세요 🍚" style={{
                fontSize:'.65rem', fontWeight:700,
                background:'linear-gradient(135deg, #ff6b35, #ff9a3c)',
                color:'#fff',
                padding:'4px 9px', borderRadius:100, border:'none',
                flexShrink:0, cursor:'pointer',
              }}>
                ⚡ {Math.ceil(tokenCost * 1450)}원
              </button>
            )}

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
                        width: 380px !important;
                        border-radius: 16px !important;
                        border: 1px solid var(--border) !important;
                        max-height: 480px !important;
                        overflow-y: auto !important;
                        border-top: 1px solid var(--border) !important;
                        border-bottom: 1px solid var(--border) !important;
                      }
                    }
                    .theme-panel { scrollbar-width: thin; }
                    .theme-panel::-webkit-scrollbar { width: 4px; }
                    .theme-panel::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
                    .theme-btn:hover { opacity: .85; transform: scale(1.04); }
                  `}</style>
                  <div className="theme-panel" style={{
                    position:'fixed', top:54, left:0, right:0, zIndex:11,
                    background:'var(--surface)',
                    borderTop:'1px solid var(--border)',
                    borderBottom:'2px solid var(--primary)',
                    padding:'12px',
                    boxShadow: isLightGroup ? '0 8px 24px rgba(0,0,0,.12)' : '0 8px 32px rgba(0,0,0,.5)',
                  }}>
                    {/* 그룹별 렌더 */}
                    {['라이트','그라디언트','다크','스페셜','지역','글로우'].map(group => {
                      const groupThemes = THEMES.filter(t => t.group === group)
                      return (
                        <div key={group} style={{ marginBottom:10 }}>
                          <div style={{ fontSize:'.6rem', color:'var(--muted)', fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:5, paddingLeft:2 }}>
                            {group}
                          </div>
                          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(74px, 1fr))', gap:4 }}>
                            {groupThemes.map(t => {
                              const isActive = theme === t.id
                              const isLightT = t.group === '라이트'
                              return (
                                <button key={t.id} className="theme-btn" onClick={() => { setTheme(t.id); setShowThemes(false) }} style={{
                                  display:'flex', alignItems:'center', gap:4,
                                  padding:'6px 8px', borderRadius:8, cursor:'pointer',
                                  background: isActive ? 'var(--primary)' : (isLightT ? '#f0f0f0' : '#1a1a28'),
                                  color: isActive ? '#fff' : (isLightT ? '#111' : '#ddd'),
                                  border: isActive ? `2px solid var(--primary)` : '1.5px solid transparent',
                                  outline: isActive ? `2px solid var(--accent)` : 'none',
                                  outlineOffset: 1,
                                  fontSize:'.7rem', fontWeight: isActive ? 800 : 500,
                                  whiteSpace:'nowrap', overflow:'hidden',
                                  transition:'all .12s', minWidth:0,
                                  position:'relative',
                                }}>
                                  {/* 컬러 스와치 */}
                                  <span style={{
                                    width:10, height:10, borderRadius:'50%', flexShrink:0,
                                    background: t.vars.primary,
                                    boxShadow: `0 0 4px ${t.vars.primary}88`,
                                  }} />
                                  <span style={{ overflow:'hidden', textOverflow:'ellipsis', lineHeight:1.2 }}>{t.name}</span>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── 사이드 광고 + 메인 콘텐츠 래퍼 ── */}
      <style>{`
        .layout-with-side-ads { max-width: 1400px; margin: 0 auto; display: flex; justify-content: center; gap: 0; }
        .side-ad { display: none; }
        @media (min-width: 1300px) { .side-ad { display: block; } }
      `}</style>
      <div className="layout-with-side-ads">
        {/* 좌측 사이드 광고 */}
        <aside className="side-ad" style={{ width: 160, flexShrink: 0, position: 'relative' }}>
          <div style={{ position: 'sticky', top: 80, paddingTop: 24 }}>
            <ins
              className="adsbygoogle"
              style={{ display: 'block', width: 160, height: 600 }}
              data-ad-client="ca-pub-8640254349508671"
              data-ad-slot="6297515693"
              data-ad-format="vertical"
            />
          </div>
        </aside>

        <main style={{ flex: 1, minWidth: 0 }}>{children}</main>

        {/* 우측 사이드 광고 */}
        <aside className="side-ad" style={{ width: 160, flexShrink: 0, position: 'relative' }}>
          <div style={{ position: 'sticky', top: 80, paddingTop: 24 }}>
            <ins
              className="adsbygoogle"
              style={{ display: 'block', width: 160, height: 600 }}
              data-ad-client="ca-pub-8640254349508671"
              data-ad-slot="6297515693"
              data-ad-format="vertical"
            />
          </div>
        </aside>
      </div>

      <Interstitial />

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
