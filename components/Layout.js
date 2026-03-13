import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

// ── 폰트 프리셋 ──────────────────────────────────────────────
const FONTS = {
  default:   { name:'기본',     css:"-apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Malgun Gothic', sans-serif" },
  rounded:   { name:'둥근체',   css:"'Nunito', 'Noto Sans KR', sans-serif",   google:'Nunito:wght@400;700;900' },
  serif:     { name:'세리프',   css:"'Noto Serif KR', Georgia, serif", google:'Noto+Serif+KR:wght@400;700;900' },
  mono:      { name:'모노',     css:"'JetBrains Mono', 'Courier New', monospace", google:'JetBrains+Mono:wght@400;700' },
  elegant:   { name:'엘레강트', css:"'Noto Serif KR', Georgia, serif", google:'Noto+Serif+KR:wght@400;600;700' },
  display:   { name:'디스플레이',css:"'Space Grotesk', 'Noto Sans KR', sans-serif", google:'Space+Grotesk:wght@400;600;700' },
  retro:     { name:'레트로',   css:"'DM Serif Display', Georgia, serif", google:'DM+Serif+Display' },
  clean:     { name:'클린',     css:"'Plus Jakarta Sans', 'Noto Sans KR', sans-serif", google:'Plus+Jakarta+Sans:wght@400;600;700;800' },
}

const THEMES = [
  // ── LIGHT ──────────────────────────────────────────────────
  {
    id:'light', name:'라이트', emoji:'☀️', font:'clean', group:'메인',
    vars:{ bg:'#f8f8fa', surface:'#ffffff', surface2:'#f2f2f7', border:'#e0e0eb', text:'#191922', muted:'#6b6b80', primary:'#e05a1e', accent:'#4a3cde' },
  },
  // ── DARK ───────────────────────────────────────────────────
  {
    id:'dark', name:'다크', emoji:'🌑', font:'default', group:'메인',
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
  // ── 창의 테마 ────────────────────────────────────────────
  {
    id:'space', name:'우주', emoji:'🚀', font:'display', group:'창의',
    vars:{ bg:'#000008', surface:'#06060f', surface2:'#0c0c1c', border:'#181830', text:'#e8f0ff', muted:'#6068a0', primary:'#7c6cff', accent:'#00d4ff' },
    gradient: 'radial-gradient(ellipse 140% 80% at 50% 120%, #0a0a2a 0%, #000008 60%)',
    headerGrad: 'linear-gradient(90deg, rgba(6,6,15,.98), rgba(0,0,8,.98))',
    isSpace: true,
  },
  {
    id:'firework', name:'불꽃축제', emoji:'🎆', font:'display', group:'창의',
    vars:{ bg:'#020108', surface:'#07040f', surface2:'#0e0818', border:'#1e1030', text:'#fff4e0', muted:'#9070a0', primary:'#ff4488', accent:'#ffcc00' },
    gradient: 'radial-gradient(ellipse 120% 60% at 50% 100%, #1a0a08 0%, #020108 60%)',
    headerGrad: 'linear-gradient(90deg, rgba(7,4,15,.98), rgba(2,1,8,.98))',
    isFirework: true,
  },
  {
    id:'deepocean', name:'심해', emoji:'🌊', font:'clean', group:'창의',
    vars:{ bg:'#000d1a', surface:'#001828', surface2:'#002035', border:'#003350', text:'#b8eeff', muted:'#3a7890', primary:'#00b4d8', accent:'#48cae4' },
    gradient: 'linear-gradient(180deg, #00060f 0%, #000d1a 50%, #001020 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(0,24,40,.98), rgba(0,6,15,.98))',
    isOcean: true,
  },
  {
    id:'neon', name:'네온사인', emoji:'🌃', font:'mono', group:'창의',
    vars:{ bg:'#060008', surface:'#0e0014', surface2:'#160020', border:'#280040', text:'#fff0ff', muted:'#aa44cc', primary:'#ff00aa', accent:'#00ffcc' },
    gradient: 'linear-gradient(135deg, #060008 0%, #0a0010 50%, #060008 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(14,0,20,.98), rgba(6,0,8,.98))',
    isNeon: true,
  },
  // ── 창의 (밝은) ───────────────────────────────────────────
  {
    id:'sunflower', name:'해바라기밭', emoji:'🌻', font:'clean', group:'창의',
    vars:{ bg:'#fffdf0', surface:'#ffffff', surface2:'#fffbe0', border:'#ffe87a', text:'#2a1a00', muted:'#8a6a00', primary:'#f5a800', accent:'#e8500a' },
    gradient: 'linear-gradient(180deg, #87ceeb 0%, #b8e4f8 30%, #fffdf0 55%)',
    headerGrad: 'linear-gradient(90deg, rgba(255,253,240,.97), rgba(255,248,200,.97))',
    isSunflower: true,
  },
  {
    id:'butterfly', name:'나비정원', emoji:'🦋', font:'clean', group:'창의',
    vars:{ bg:'#f8fff8', surface:'#ffffff', surface2:'#f0fff2', border:'#c8eec8', text:'#0a1f0a', muted:'#4a7a4a', primary:'#22a845', accent:'#e040fb' },
    gradient: 'linear-gradient(180deg, #e8f8e8 0%, #f8fff8 50%)',
    headerGrad: 'linear-gradient(90deg, rgba(248,255,248,.97), rgba(240,255,242,.97))',
    isButterfly: true,
  },
  {
    id:'cloud', name:'뭉게구름', emoji:'⛅', font:'clean', group:'창의',
    vars:{ bg:'#f0f8ff', surface:'#ffffff', surface2:'#e8f4ff', border:'#c8dcf0', text:'#0a1828', muted:'#5070a0', primary:'#2880d8', accent:'#f5a623' },
    gradient: 'linear-gradient(180deg, #87ceeb 0%, #b8e0f8 25%, #deeeff 50%, #f0f8ff 75%)',
    headerGrad: 'linear-gradient(90deg, rgba(240,248,255,.97), rgba(232,244,255,.97))',
    isCloud: true,
  },
  // ── 창의 (캐릭터/자연) ──────────────────────────────────────
  {
    id:'squirrel', name:'다람쥐숲', emoji:'🐿️', font:'clean', group:'창의',
    vars:{ bg:'#f5f0e8', surface:'#fffcf5', surface2:'#ede8d8', border:'#d4c8a8', text:'#1a1008', muted:'#7a6040', primary:'#8b4513', accent:'#d4860a' },
    gradient: 'linear-gradient(180deg, #87ceaa 0%, #a8d8a0 20%, #c8e8b0 40%, #f5f0e8 65%)',
    headerGrad: 'linear-gradient(90deg, rgba(245,240,232,.97), rgba(237,232,216,.97))',
    isSquirrel: true,
  },
  {
    id:'salmon', name:'연어의강', emoji:'🐟', font:'clean', group:'창의',
    vars:{ bg:'#e8f4f8', surface:'#f5fcff', surface2:'#d8eef8', border:'#a8cce0', text:'#0a1820', muted:'#406080', primary:'#1a7ab0', accent:'#e8602a' },
    gradient: 'linear-gradient(180deg, #6ab0d0 0%, #88c8e8 25%, #a8dcf0 50%, #e8f4f8 75%)',
    headerGrad: 'linear-gradient(90deg, rgba(232,244,248,.97), rgba(216,238,248,.97))',
    isSalmon: true,
  },
  {
    id:'waterfall', name:'폭포', emoji:'💧', font:'clean', group:'창의',
    vars:{ bg:'#f0f8f4', surface:'#f8fffc', surface2:'#e0f4ea', border:'#a8d8b8', text:'#0a1810', muted:'#3a6850', primary:'#1a9060', accent:'#0098c8' },
    gradient: 'linear-gradient(180deg, #4a9870 0%, #6ab890 20%, #90d0a8 40%, #c8ecd8 60%, #f0f8f4 80%)',
    headerGrad: 'linear-gradient(90deg, rgba(240,248,244,.97), rgba(224,244,234,.97))',
    isWaterfall: true,
  },
  // ── 시즌 ────────────────────────────────────────────────────
  {
    id:'spring', name:'봄 벚꽃', emoji:'🌸', font:'clean', group:'시즌',
    vars:{ bg:'#fef0f5', surface:'#ffffff', surface2:'#fde8f0', border:'#f4c2d4', text:'#1a0812', muted:'#7a3858', primary:'#c0335a', accent:'#8b1a40' },
    isSpring: true,
  },
  {
    id:'rain', name:'빗소리', emoji:'🌧️', font:'clean', group:'시즌',
    vars:{ bg:'#0e1520', surface:'#141e2e', surface2:'#1a2538', border:'#253548', text:'#c8dff0', muted:'#5a7a96', primary:'#4a9fd4', accent:'#7ecef4' },
    gradient: 'linear-gradient(180deg, #0b1018 0%, #0e1520 40%, #0a1218 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(14,21,32,.98), rgba(10,18,24,.98))',
    isRain: true,
  },
  {
    id:'snow', name:'첫눈', emoji:'❄️', font:'clean', group:'시즌',
    vars:{ bg:'#e8eef8', surface:'#f5f8ff', surface2:'#dce5f5', border:'#c0ceea', text:'#1a2040', muted:'#5060a0', primary:'#2255cc', accent:'#4488ff' },
    gradient: 'linear-gradient(180deg, #c8d8ee 0%, #e8eef8 40%, #f0f4fc 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(200,216,238,.98), rgba(220,229,245,.98))',
    isSnow: true,
  },
  {
    id:'autumn', name:'단풍', emoji:'🍁', font:'serif', group:'시즌',
    vars:{ bg:'#1a0e04', surface:'#261408', surface2:'#30180a', border:'#4a2810', text:'#ffe8c8', muted:'#b87840', primary:'#e8641a', accent:'#f5a623' },
    gradient: 'linear-gradient(170deg, #1a0e04 0%, #221006 50%, #160a02 100%)',
    headerGrad: 'linear-gradient(90deg, rgba(38,20,8,.98), rgba(22,10,2,.98))',
    isAutumn: true,
  },
]

// ── 모바일 QR 저장 + 인식 안내 ───────────────────────────────
function QRMobileGuide() {
  const [show, setShow] = React.useState(false)
  function saveQR() {
    const a = document.createElement('a')
    a.href = '/toss-qr.png'
    a.download = 'toss-qr.png'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  return (
    <div style={{ marginBottom:8 }}>
      <button onClick={() => setShow(v => !v)}
        style={{ fontSize:'.68rem',color:'var(--primary)',background:'none',border:'none',cursor:'pointer',textDecoration:'underline',opacity:.8,display:'block',width:'100%' }}>
        📲 모바일에서 QR 저장·인식하는 법 {show ? '▲' : '▼'}
      </button>
      {show && (
        <div style={{ marginTop:8,padding:'12px 14px',background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:12,textAlign:'left',fontSize:'.72rem',color:'var(--muted)',lineHeight:1.8 }}>
          <strong style={{ color:'var(--text)',display:'block',marginBottom:8 }}>📱 토스앱으로 후원하는 법</strong>
          <button onClick={saveQR}
            style={{ fontSize:'.72rem',padding:'5px 14px',borderRadius:100,background:'var(--surface)',border:'1px solid var(--border)',color:'var(--muted)',cursor:'pointer',marginBottom:8,display:'block',width:'100%' }}>
            📥 QR 이미지 저장 (갤러리)
          </button>
          1. 위 버튼으로 QR 이미지 저장<br/>
          2. 토스앱 열기 → 하단 <strong style={{ color:'var(--text)' }}>송금</strong> 탭<br/>
          3. 우측 상단 <strong style={{ color:'var(--text)' }}>QR 아이콘</strong> 탭<br/>
          4. 카메라 화면 하단 <strong style={{ color:'var(--text)' }}>갤러리에서 불러오기</strong><br/>
          5. 저장한 QR 이미지 선택 → 후원 완료 🎉<br/>
          <span style={{ fontSize:'.65rem',opacity:.6,marginTop:4,display:'block' }}>
            * 기본 카메라앱 → QR인식 → 갤러리불러오기도 가능해요
          </span>
        </div>
      )}
    </div>
  )
}


// ── 버전 히스토리 데이터 ────────────────────────────────────────
const VERSION_HISTORY = [
  { version:'v0.9.1', date:'2026-03-11', current:true,  summary:'안정화 — 잠실 가짜 데이터 19개 제거, 테마 6개 추가, DiceOverlay/RouletteModal 타이밍 조정, 삼성역 데이터 최신화, 태그 자동생성' },
  { version:'v0.9',   date:'2026-03-10', current:false, summary:'전 지역 통일 + 시즌 테마 — 6개 지역 기능 완전 동기화(룰렛/IdleBar/외부검색), 시즌 테마 4종(벚꽃/비/눈/단풍), 개발자 노트 팝업, AI 결과 비용 최적화(~4원), 데이터 rv→rvs 저작권 처리' },
  { version:'v0.8',   date:'2026-03-09', current:false, summary:'판교 + AI 고도화 — 판교역 423개 식당 추가, AI 프롬프트 전면 개편(의도 파악·시그니처·리뷰 반응 3요소), 토큰 절약 모드(사용횟수별 max_tokens 차등), 랜덤 문구 10종 템플릿' },
  { version:'v0.7',   date:'2026-03-09', current:false, summary:'삼성전자 전용 + 브랜드 리뉴얼 — 영통/망포/영통구청 3개 지역 추가(삼성전자 임직원용), 브랜드명 "강남뭐먹" → "오늘뭐먹지" 전면 변경, 삼성역 113개 추가(총 325개)' },
  { version:'v0.6',   date:'2026-03-08', current:false, summary:'네이버 지도 + AI 개선 — 전체 지도를 네이버로 교체, AI 추천 max_tokens 확대, 카테고리 랜덤뽑기, 삼성역 50개 추가, exit4 재계산, 가짜 데이터 제거' },
  { version:'v0.5',   date:'2026-03-07', current:false, summary:'멀티 지역 체계 — 헤더 지역 네비게이션(삼성/잠실), 모바일 지역 드롭다운, 카테고리 페이지 13개, 카드 클릭→상세 연결, 잠실 100개 추가(총 150개), 리뷰 키워드 요약으로 저작권 대응, 모바일 필터 접이식' },
  { version:'v0.4',   date:'2026-03-06', current:false, summary:'잠실역 추가 — 잠실·방이동 54개 식당 데이터, 식당 상세페이지 신규, 감성 인트로 배너, 카테고리별 이미지 자동 매칭' },
  { version:'v0.3',   date:'2026-03-06', current:false, summary:'SEO + UX 완성 — Bing 인증, RSS 피드, 사이트맵, 파비콘/OG이미지, 사용횟수 제한(5회), 경고 모달, 테마 32개로 대량 확장, 모바일 가로스크롤 방지' },
  { version:'v0.2',   date:'2026-03-06', current:false, summary:'스코어링 고도화 — AI 검색 개선, 토큰 사용량 절감, 백그라운드/텍스트 색상 수정' },
  { version:'v0.1',   date:'2026-03-05', current:false, summary:'프로젝트 시작 — 삼성역 기반 저녁메뉴 추천 사이트 생성. AI 추천, 랜덤뽑기, 8개 테마, 4번출구 필터, 토큰 비용 표시' },
]

// ── 버전 히스토리 팝업 ──────────────────────────────────────────
function VersionHistoryModal({ onClose }) {
  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{ position:'fixed', inset:0, zIndex:10000, background:'rgba(0,0,0,.7)',
        display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}
    >
      <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:18,
        maxWidth:560, width:'100%', maxHeight:'85vh', display:'flex', flexDirection:'column', position:'relative' }}>
        {/* 헤더 */}
        <div style={{ padding:'22px 24px 16px', borderBottom:'1px solid var(--border)', flexShrink:0 }}>
          <button onClick={onClose}
            style={{ position:'absolute', top:14, right:16, background:'none', border:'none',
              color:'var(--muted)', fontSize:'1.2rem', cursor:'pointer', lineHeight:1 }}>✕</button>
          <div style={{ fontSize:'.7rem', color:'var(--muted)', marginBottom:5, letterSpacing:'.04em' }}>
            📋 CHANGELOG
          </div>
          <h2 style={{ margin:0, fontSize:'1.05rem', fontWeight:800 }}>
            사이트 버전 히스토리
          </h2>
        </div>
        {/* 타임라인 본문 */}
        <div style={{ overflowY:'auto', padding:'20px 24px', display:'flex', flexDirection:'column', gap:0 }}>
          {VERSION_HISTORY.map((item, idx) => (
            <div key={item.version} style={{ display:'flex', gap:14, paddingBottom: idx < VERSION_HISTORY.length - 1 ? 20 : 0 }}>
              {/* 타임라인 라인 + 점 */}
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0, width:14 }}>
                <div style={{
                  width:12, height:12, borderRadius:'50%', flexShrink:0, marginTop:3,
                  background: item.current ? 'var(--primary)' : 'var(--border)',
                  border: item.current ? '2px solid var(--primary)' : '2px solid var(--border)',
                  boxShadow: item.current ? '0 0 0 3px color-mix(in srgb, var(--primary) 20%, transparent)' : 'none',
                }} />
                {idx < VERSION_HISTORY.length - 1 && (
                  <div style={{ width:2, flex:1, background:'var(--border)', marginTop:4, borderRadius:1, minHeight:16 }} />
                )}
              </div>
              {/* 내용 */}
              <div style={{ flex:1, paddingBottom:0 }}>
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:5, flexWrap:'wrap' }}>
                  <span style={{
                    fontSize:'.82rem', fontWeight:800,
                    color: item.current ? 'var(--primary)' : 'var(--text)',
                  }}>{item.version}</span>
                  {item.current && (
                    <span style={{
                      fontSize:'.65rem', fontWeight:700, padding:'1px 7px', borderRadius:20,
                      background:'var(--primary)', color:'#fff', letterSpacing:'.04em',
                    }}>현재</span>
                  )}
                  <span style={{ fontSize:'.72rem', color:'var(--muted)' }}>{item.date}</span>
                </div>
                <p style={{ margin:0, fontSize:'.78rem', color:'var(--muted)', lineHeight:1.75 }}>
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── 개발자 노트 팝업 ────────────────────────────────────────────
const OPEN_DATE = new Date('2026-03-05')
function getOpenDayCount() {
  const diff = Math.floor((Date.now() - OPEN_DATE.getTime()) / (1000*60*60*24)) + 1
  return diff > 0 ? diff : 1
}
function DevNoteSection({ icon, title, children }) {
  return (
    <div>
      <div style={{ fontWeight:700, marginBottom:5, display:'flex', gap:6, alignItems:'center' }}>
        <span>{icon}</span><span style={{ color:'var(--text)' }}>{title}</span>
      </div>
      <div style={{ color:'var(--muted)', paddingLeft:26, lineHeight:1.8 }}>{children}</div>
    </div>
  )
}
function DevNote() {
  const [open, setOpen] = React.useState(false)
  const [showVersionHistory, setShowVersionHistory] = React.useState(false)
  const [dayCount, setDayCount] = React.useState(6)
  React.useEffect(() => { setDayCount(getOpenDayCount()) }, [])
  return (
    <>
      <div onClick={()=>setOpen(true)} style={{ marginTop:20, textAlign:'center', cursor:'pointer', padding:'8px 0' }}>
        <span style={{ fontSize:'.7rem', color:'var(--muted)', borderBottom:'1px dashed var(--border)', paddingBottom:2, letterSpacing:'.03em' }}>
          오늘 뭐 먹지? 에 관하여 · 개발자 노트
        </span>
      </div>
      {open && (
        <div onClick={e=>{ if(e.target===e.currentTarget) setOpen(false) }}
          style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(0,0,0,.6)',
            display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}>
          <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:18,
            maxWidth:520, width:'100%', maxHeight:'85vh', overflowY:'auto', padding:'28px 24px', position:'relative' }}>
            <button onClick={()=>setOpen(false)}
              style={{ position:'absolute', top:14, right:16, background:'none', border:'none',
                color:'var(--muted)', fontSize:'1.2rem', cursor:'pointer' }}>✕</button>
            <div style={{ marginBottom:22 }}>
              <div style={{ fontSize:'.7rem', color:'var(--muted)', marginBottom:6 }}>
                🗓 오픈 {dayCount}일차 &nbsp;·&nbsp; ver 0.9.1
              </div>
              <h2 style={{ margin:0, fontSize:'1.1rem', fontWeight:800, lineHeight:1.4 }}>
                오늘 뭐 먹지?<br/>
                <span style={{ color:'var(--primary)' }}>만든 사람이 드리는 말씀</span>
              </h2>
            </div>
            <div style={{ fontSize:'.84rem', lineHeight:1.85, color:'var(--text)', display:'flex', flexDirection:'column', gap:18 }}>
              <DevNoteSection icon="🌱" title="지금은 ver 0.9.1 입니다">
                오픈한 지 {dayCount}일밖에 안 됐어요. 아직 데이터가 얇고 추천 품질도 완성과는 거리가 있습니다.
                시간이 쌓이면서 리뷰·메뉴·방문 패턴이 누적될수록 훨씬 정확하고 풍부한 추천을 드릴 수 있게 됩니다. 지금 이 버전은 그 시작점이에요.
              </DevNoteSection>
              <DevNoteSection icon="💼" title="직장인들의 점심 성지가 되길">
                삼성역, 잠실, 판교, 영통 — 매일 점심 뭐 먹을지 고민하는 직장인들을 가장 먼저 생각하며 만들었어요.
                &quot;오늘 뭐 먹지&quot; 한 줄로 날씨·기분·상황까지 파악해서 딱 맞는 곳을 골라주는 것, 그게 목표입니다.
              </DevNoteSection>
              <DevNoteSection icon="🌏" title="한국을 찾는 외국인 관광객까지">
                &quot;비 오는 날 혼밥하기 좋은 곳&quot; 텍스트 하나로 관광지 맛집을 찾아주는 서비스로 키우고 싶습니다.
                영어·일본어·중국어로도 검색되는 날이 오면, 서울 여행자들의 밥상 고민을 함께 덜어줄 수 있을 거라 믿어요.
              </DevNoteSection>
              <DevNoteSection icon="⚡" title="AI 검색이 가끔 막힐 수 있어요">
                AI 검색 기능은 API 토큰을 수기로 충전하면서 운영 중이에요.
                사용량이 많은 날엔 예고 없이 잠시 막힐 수 있습니다. 그럴 땐 🎲 랜덤 추천을 이용해 주세요. 양해 부탁드립니다.
              </DevNoteSection>
              <DevNoteSection icon="🛠" title="앞으로의 계획">
                메뉴 가격 구축, 식당 사진 추가, 별점 반영, 지역 확대,
                그리고 &quot;저번에 갔던 곳 제외해줘&quot; 같은 히스토리 기반 추천까지. 하나씩 천천히 만들어 나갈게요.
              </DevNoteSection>
              <div style={{ marginTop:4, padding:'14px 16px', background:'var(--surface2)',
                borderRadius:10, fontSize:'.78rem', color:'var(--muted)', lineHeight:1.7, textAlign:'center' }}>
                진정성 있게 만들고 있습니다. 부족한 부분은 시간이 채워줄 거라 믿어요. 🙏
              </div>
              {/* 버전 히스토리 버튼 */}
              <button
                onClick={() => setShowVersionHistory(true)}
                style={{
                  display:'flex', alignItems:'center', justifyContent:'center', gap:7,
                  width:'100%', padding:'10px 16px',
                  background:'var(--surface2)', border:'1px solid var(--border)',
                  borderRadius:10, cursor:'pointer',
                  fontSize:'.8rem', fontWeight:600, color:'var(--text)',
                  letterSpacing:'.02em', transition:'border-color .15s, color .15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--primary)'; e.currentTarget.style.color='var(--primary)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text)' }}
              >
                📋 버전 히스토리
              </button>
            </div>
          </div>
        </div>
      )}
      {showVersionHistory && (
        <VersionHistoryModal onClose={() => setShowVersionHistory(false)} />
      )}
    </>
  )
}
export default function Layout({ children, title, description, canonical, jsonLd, extraJsonLd }) {
  const [theme,      setTheme]      = useState('light')
  const [mounted,    setMounted]    = useState(false)
  const [showThemes, setShowThemes] = useState(false)
  const [showQR,     setShowQR]     = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [copied,      setCopied]      = useState(false)
  const [showStations, setShowStations] = useState(false)
  const [tokenCost,  setTokenCost]  = useState(0)

  const rawTitle = title || '오늘뭐먹지 | AI 맛집 추천 - 삼성역·잠실·판교·영통'
  const siteTitle = rawTitle.length > 70 ? rawTitle.slice(0, 68) + '…' : rawTitle
  const siteDesc  = description || '강남역·삼성역 맛집을 AI가 빠르게 추천. 국밥·이자카야·한우·중식 170개+ 식당 정보.'

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('gm-theme')
    if (saved && THEMES.find(t => t.id === saved)) setTheme(saved)
    else setTheme('light')
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
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
        {extraJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(extraJsonLd) }}
          />
        )}
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
            🍽️ 오늘뭐먹지
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
              { href:'/dinner/samseong',              label:'삼성역',  emoji:'🏙️', live:true },
              { href:'/dinner/jamsil',                label:'잠실역',  emoji:'🎡',  live:true },
              { href:'/samsungElectronics', label:'삼전',    emoji:'🏢', live:true },
              { href:'/pangyo',                       label:'판교',    emoji:'💻', live:true },
              { href:null, label:'강남역', emoji:'🏙️', live:false },
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
                { href:'/dinner/samseong',               short:'삼성' },
                { href:'/dinner/jamsil',                 short:'잠실' },
                { href:'/samsungElectronics',  short:'삼전' },
                { href:'/pangyo',                        short:'판교' },
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
                    { href:'/dinner/samseong',               label:'삼성역',   emoji:'🏙️', live:true,  desc:'코엑스·4번출구 주변' },
                    { href:'/dinner/jamsil',                 label:'잠실역',   emoji:'🎡',  live:true,  desc:'롯데월드·석촌호수·방이' },
                    { href:'/samsungElectronics',  label:'삼성전자', emoji:'🏢', live:true,  desc:'영통·망포·영통구청' },
                    { href:'/pangyo',                        label:'판교',     emoji:'💻', live:true,  desc:'테크노밸리·현대백화점' },
                    { href:null, label:'강남역', emoji:'🏙️', live:false, desc:'' },
                    { href:null, label:'역삼역', emoji:'💼', live:false, desc:'' },
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
                    {['메인','시즌','창의','다크'].map(group => {
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

      <main>{children}</main>

      {/* ── 봄 벚꽃 배경 나무 + 꽃잎 애니메이션 ── */}
      {ct.isSpring && mounted && (
        <style>{`
          /* 타입 A: 살랑살랑 직선 낙하 (좌우 흔들림만, 회전 거의 없음) */
          @keyframes sakura-sway {
            0%   { transform: translate(0px, -20px) rotate(0deg);   opacity: 0; }
            8%   { opacity: .8; }
            25%  { transform: translate(12px, 24vh)  rotate(8deg); }
            50%  { transform: translate(-10px, 50vh) rotate(-5deg); }
            75%  { transform: translate(14px, 75vh)  rotate(10deg); opacity: .65; }
            100% { transform: translate(-6px, 108vh) rotate(-3deg); opacity: 0; }
          }
          /* 타입 B: 느린 큰 흔들림 + 반바퀴 회전 */
          @keyframes sakura-tumble {
            0%   { transform: translate(0px, -20px) rotate(0deg);    opacity: 0; }
            8%   { opacity: .75; }
            30%  { transform: translate(-38px, 26vh) rotate(80deg); }
            60%  { transform: translate(28px,  56vh) rotate(160deg); }
            85%  { transform: translate(-18px, 82vh) rotate(200deg); opacity: .55; }
            100% { transform: translate(8px, 108vh)  rotate(220deg); opacity: 0; }
          }
          /* 타입 C: 한 바퀴 돌면서 나선형 낙하 */
          @keyframes sakura-spin {
            0%   { transform: translate(0px, -20px) rotate(0deg);    opacity: 0; }
            8%   { opacity: .85; }
            20%  { transform: translate(32px, 20vh)  rotate(120deg); }
            40%  { transform: translate(-22px, 40vh) rotate(240deg); }
            60%  { transform: translate(26px, 60vh)  rotate(360deg); }
            80%  { transform: translate(-14px, 80vh) rotate(420deg); opacity: .6; }
            100% { transform: translate(6px, 108vh)  rotate(500deg); opacity: 0; }
          }
          .sakura-petal {
            position: fixed;
            top: 0;
            border-radius: 80% 0 80% 0;
            box-shadow: 0 2px 6px rgba(255,100,150,.15);
            pointer-events: none;
            z-index: 0;
          }
          @keyframes branch-sway {
            0%, 100% { transform: rotate(-1deg) translateX(0); }
            50%       { transform: rotate(1.5deg) translateX(3px); }
          }
        `}</style>
      )}
      {/* 벚꽃나무 SVG — 화면 우하단 고정 */}
      {ct.isSpring && mounted && (
        <div style={{ position:'fixed', bottom:0, right:'-30px', zIndex:0, pointerEvents:'none', userSelect:'none', opacity:.1 }}>
          <svg width="180" height="270" viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ animation:'branch-sway 6s ease-in-out infinite', transformOrigin:'50% 100%' }}>
            {/* 줄기 */}
            <path d="M160 480 C158 420 154 380 150 330 C146 280 142 240 148 190 C152 160 156 130 160 100" stroke="#8B4513" strokeWidth="14" strokeLinecap="round"/>
            {/* 굵은 가지들 */}
            <path d="M150 330 C130 300 100 280 70 265" stroke="#8B4513" strokeWidth="9" strokeLinecap="round"/>
            <path d="M148 280 C168 255 195 240 225 230" stroke="#8B4513" strokeWidth="8" strokeLinecap="round"/>
            <path d="M149 220 C125 200 95 188 65 182" stroke="#7A3C10" strokeWidth="7" strokeLinecap="round"/>
            <path d="M151 200 C172 180 200 168 230 162" stroke="#7A3C10" strokeWidth="7" strokeLinecap="round"/>
            <path d="M155 150 C135 128 108 115 78 108" stroke="#7A3C10" strokeWidth="6" strokeLinecap="round"/>
            <path d="M157 140 C178 118 205 106 238 100" stroke="#7A3C10" strokeWidth="5" strokeLinecap="round"/>
            <path d="M160 100 C145 78 130 58 118 38" stroke="#7A3C10" strokeWidth="5" strokeLinecap="round"/>
            <path d="M160 100 C175 76 190 55 205 34" stroke="#7A3C10" strokeWidth="4" strokeLinecap="round"/>
            {/* 잔가지 */}
            <path d="M70 265 C52 252 38 242 22 238" stroke="#6B3410" strokeWidth="4" strokeLinecap="round"/>
            <path d="M70 265 C60 248 55 232 52 215" stroke="#6B3410" strokeWidth="3" strokeLinecap="round"/>
            <path d="M225 230 C242 220 256 210 268 200" stroke="#6B3410" strokeWidth="4" strokeLinecap="round"/>
            <path d="M65 182 C48 172 32 165 16 162" stroke="#6B3410" strokeWidth="3" strokeLinecap="round"/>
            <path d="M230 162 C248 154 262 145 275 135" stroke="#6B3410" strokeWidth="3" strokeLinecap="round"/>
            {/* 꽃송이 덩어리들 */}
            <ellipse cx="50" cy="250" rx="36" ry="28" fill="#ffcce0" opacity=".85"/>
            <ellipse cx="30" cy="238" rx="24" ry="20" fill="#ffb3cc" opacity=".8"/>
            <ellipse cx="62" cy="232" rx="20" ry="16" fill="#ffe0ec" opacity=".9"/>
            <ellipse cx="240" cy="218" rx="34" ry="26" fill="#ffcce0" opacity=".85"/>
            <ellipse cx="265" cy="205" rx="22" ry="18" fill="#ffb3cc" opacity=".8"/>
            <ellipse cx="55" cy="170" rx="30" ry="24" fill="#ffe0ec" opacity=".85"/>
            <ellipse cx="18" cy="158" rx="20" ry="16" fill="#ffcce0" opacity=".8"/>
            <ellipse cx="245" cy="150" rx="32" ry="25" fill="#ffb3cc" opacity=".85"/>
            <ellipse cx="272" cy="130" rx="22" ry="18" fill="#ffe0ec" opacity=".8"/>
            <ellipse cx="85" cy="98" rx="36" ry="28" fill="#ffcce0" opacity=".88"/>
            <ellipse cx="58" cy="88" rx="24" ry="20" fill="#ffb3cc" opacity=".82"/>
            <ellipse cx="220" cy="90" rx="34" ry="26" fill="#ffe0ec" opacity=".88"/>
            <ellipse cx="248" cy="78" rx="22" ry="18" fill="#ffcce0" opacity=".82"/>
            <ellipse cx="118" cy="30" rx="30" ry="24" fill="#ffb3cc" opacity=".85"/>
            <ellipse cx="160" cy="85" rx="42" ry="32" fill="#ffe0ec" opacity=".9"/>
            <ellipse cx="205" cy="28" rx="28" ry="22" fill="#ffcce0" opacity=".85"/>
            <ellipse cx="160" cy="55" rx="28" ry="22" fill="#ffb3cc" opacity=".88"/>
            {/* 작은 꽃잎들 */}
            {[{cx:42,cy:242},{cx:68,cy:228},{cx:245,cy:212},{cx:260,cy:198},{cx:50,cy:164},{cx:252,cy:144},{cx:78,cy:92},{cx:218,cy:84},{cx:112,cy:25},{cx:208,cy:22}].map((p,i)=>(
              <g key={i}>
                <circle cx={p.cx} cy={p.cy} r="5" fill="#ff85aa" opacity=".7"/>
                <circle cx={p.cx+8} cy={p.cy-4} r="4" fill="#ffb3cc" opacity=".6"/>
                <circle cx={p.cx-6} cy={p.cy+5} r="3.5" fill="#ffd6e7" opacity=".65"/>
              </g>
            ))}
          </svg>
        </div>
      )}
      {/* 흩날리는 꽃잎 */}
      {ct.isSpring && mounted && Array.from({length:24}).map((_,i) => {
        // 0~7: sway(직선 살랑), 8~15: tumble(반바퀴), 16~23: spin(한바퀴)
        const animMap = ['sakura-sway','sakura-tumble','sakura-spin']
        const anim = animMap[Math.floor(i / 8)]
        const sz = 9 + (i % 4) * 3
        const colors = [
          'linear-gradient(135deg, #ffd6e7, #ffb3cc)',
          'linear-gradient(135deg, #ffb3cc, #ff85aa)',
          'linear-gradient(135deg, #ffe0ec, #ffc8d8)',
          'linear-gradient(135deg, #ff9dc0, #ff6fa0)',
        ]
        return (
          <div key={i} className="sakura-petal" style={{
            left: `${(i * 4.2 + 1) % 100}%`,
            width: sz+'px', height: sz+'px',
            animationName: anim,
            animationDuration: `${7 + (i * 1.1) % 6}s`,
            animationDelay: `${(i * 0.65) % 8}s`,
            animationTimingFunction: anim === 'sakura-sway' ? 'ease-in-out' : 'linear',
            animationIterationCount: 'infinite',
            opacity: 0.18 + (i % 4) * 0.05,
            background: colors[i % 4],
            transform: `rotate(${i * 17}deg)`,
          }} />
        )
      })}

      {/* ── 비 애니메이션 ── */}
      {ct.isRain && mounted && (
        <style>{`
          @keyframes rain-fall {
            0%   { transform: translateY(-10px) translateX(0); opacity: 0; }
            5%   { opacity: .35; }
            95%  { opacity: .28; }
            100% { transform: translateY(110vh) translateX(-20px); opacity: 0; }
          }
          .rain-drop {
            position: fixed; top: 0; pointer-events: none; z-index: 0;
            width: 1.5px; border-radius: 2px;
            background: linear-gradient(180deg, transparent, #7ecef488, transparent);
            animation: rain-fall linear infinite;
          }
          @keyframes rain-splash {
            0%   { transform: scale(0); opacity: .7; }
            100% { transform: scale(1.8); opacity: 0; }
          }
        `}</style>
      )}
      {ct.isRain && mounted && Array.from({length:55}).map((_,i) => (
        <div key={i} className="rain-drop" style={{
          left: `${(i * 1.85) % 100}%`,
          height: `${18 + (i % 4) * 8}px`,
          opacity: 0.12 + (i % 3) * 0.05,
          animationDuration: `${0.6 + (i * 0.07) % 0.5}s`,
          animationDelay: `${(i * 0.13) % 1.2}s`,
        }} />
      ))}
      {/* 빗소리 배경 overlay — 분위기 */}
      {ct.isRain && mounted && (
        <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none',
          background:'radial-gradient(ellipse 120% 60% at 50% 100%, rgba(74,159,212,.04) 0%, transparent 70%)',
        }} />
      )}

      {/* ── 눈 애니메이션 ── */}
      {ct.isSnow && mounted && (
        <style>{`
          @keyframes snow-fall-1 {
            0%   { transform: translate(0,-10px) rotate(0deg); opacity:0; }
            5%   { opacity:.85; }
            40%  { transform: translate(12px,35vh) rotate(120deg); }
            70%  { transform: translate(-8px,68vh) rotate(240deg); }
            100% { transform: translate(5px,108vh) rotate(360deg); opacity:0; }
          }
          @keyframes snow-fall-2 {
            0%   { transform: translate(0,-10px) rotate(20deg); opacity:0; }
            5%   { opacity:.8; }
            35%  { transform: translate(-15px,30vh) rotate(110deg); }
            65%  { transform: translate(10px,62vh) rotate(230deg); }
            100% { transform: translate(-5px,108vh) rotate(350deg); opacity:0; }
          }
          .snow-flake {
            position:fixed; top:0; pointer-events:none; z-index:0;
            border-radius:50%;
            background: radial-gradient(circle, #fff 30%, rgba(200,220,255,.6) 100%);
            box-shadow: 0 0 4px rgba(150,180,255,.4);
          }
        `}</style>
      )}
      {ct.isSnow && mounted && Array.from({length:35}).map((_,i) => {
        const sz = 4 + (i % 5) * 3
        return (
          <div key={i} className="snow-flake" style={{
            left: `${(i * 2.9 + 1) % 100}%`,
            width: sz+'px', height: sz+'px',
            opacity: 0.2 + (i % 4) * 0.07,
            animationName: i % 2 === 0 ? 'snow-fall-1' : 'snow-fall-2',
            animationDuration: `${5 + (i * 0.4) % 5}s`,
            animationDelay: `${(i * 0.35) % 6}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }} />
        )
      })}

      {/* ── 단풍 애니메이션 ── */}
      {ct.isAutumn && mounted && (
        <style>{`
          @keyframes leaf-fall-1 {
            0%   { transform: translate(0,-10px) rotate(0deg);    opacity:0; }
            5%   { opacity:.9; }
            25%  { transform: translate(35px,22vh) rotate(90deg); }
            50%  { transform: translate(-20px,48vh) rotate(200deg); }
            75%  { transform: translate(25px,72vh) rotate(310deg); opacity:.7; }
            100% { transform: translate(-8px,108vh) rotate(420deg); opacity:0; }
          }
          @keyframes leaf-fall-2 {
            0%   { transform: translate(0,-10px) rotate(45deg);   opacity:0; }
            5%   { opacity:.85; }
            30%  { transform: translate(-30px,28vh) rotate(140deg); }
            55%  { transform: translate(18px,54vh) rotate(255deg); }
            80%  { transform: translate(-12px,78vh) rotate(350deg); opacity:.65; }
            100% { transform: translate(6px,108vh) rotate(460deg); opacity:0; }
          }
          .autumn-leaf {
            position:fixed; top:0; pointer-events:none; z-index:0;
          }
        `}</style>
      )}
      {ct.isAutumn && mounted && Array.from({length:20}).map((_,i) => {
        const sz = 18 + (i % 4) * 6
        const leafColors = [
          '#e8641a','#d44010','#f5a623','#c83208','#e87820','#cc3300','#b83008','#f09030'
        ]
        const col = leafColors[i % leafColors.length]
        // 단풍잎 SVG 3종
        const leafPaths = [
          // 캐나다 단풍 (메이플)
          'M20 2 L22 10 L30 8 L25 14 L32 18 L24 18 L26 26 L20 22 L14 26 L16 18 L8 18 L15 14 L10 8 L18 10 Z M20 22 L20 38',
          // 손바닥 단풍 (5갈래)
          'M20 4 L21 11 L27 7 L23 13 L30 12 L25 16 L28 22 L21 18 L20 26 L19 18 L12 22 L15 16 L10 12 L17 13 L13 7 L19 11 Z M20 26 L20 38',
          // 일본 단풍 (7갈래 깊은 홈)
          'M20 3 L21 9 L25 5 L23 11 L28 9 L25 14 L30 14 L26 17 L28 22 L22 19 L21 26 L20 20 L19 26 L18 19 L12 22 L14 17 L10 14 L15 14 L12 9 L17 11 L15 5 L19 9 Z M20 26 L20 37',
        ]
        const path = leafPaths[i % 3]
        return (
          <div key={i} className="autumn-leaf" style={{
            left: `${(i * 5.1 + 2) % 100}%`,
            width: sz+'px', height: sz+'px',
            opacity: 0.1 + (i % 3) * 0.04,
            animationName: i % 2 === 0 ? 'leaf-fall-1' : 'leaf-fall-2',
            animationDuration: `${6 + (i * 0.9) % 5}s`,
            animationDelay: `${(i * 0.55) % 7}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
          }}>
            <svg viewBox="0 0 40 40" width={sz} height={sz} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={path.split(' M20')[0]} fill={col} stroke={col} strokeWidth="0.8" strokeLinejoin="round"/>
              <line x1="20" y1="22" x2="20" y2="38" stroke={col} strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        )
      })}

      {/* ── 우주 애니메이션 ── */}
      {ct.isSpace && mounted && (
        <style>{`
          @keyframes star-twinkle {
            0%, 100% { opacity: .15; transform: scale(1); }
            50%       { opacity: .9; transform: scale(1.4); }
          }
          @keyframes meteor {
            0%   { transform: translate(0,0) rotate(35deg); opacity:0; width:2px; }
            5%   { opacity:1; }
            100% { transform: translate(400px, 240px) rotate(35deg); opacity:0; width:120px; }
          }
          .star-dot {
            position:fixed; border-radius:50%; pointer-events:none; z-index:0;
            background:#fff;
            animation: star-twinkle ease-in-out infinite;
          }
          .meteor-trail {
            position:fixed; pointer-events:none; z-index:0;
            height:1.5px; border-radius:2px;
            background:linear-gradient(90deg, transparent, #c8d8ff, #fff);
            animation: meteor linear infinite;
          }
        `}</style>
      )}
      {ct.isSpace && mounted && Array.from({length:60}).map((_,i) => (
        <div key={'s'+i} className="star-dot" style={{
          left:`${(i*1.67+0.5)%100}%`, top:`${(i*2.13+1)%85}%`,
          width: i%5===0 ? '3px' : i%3===0 ? '2px' : '1.5px',
          height: i%5===0 ? '3px' : i%3===0 ? '2px' : '1.5px',
          opacity: 0.1 + (i%5)*0.04,
          animationDuration:`${2 + (i*0.3)%4}s`,
          animationDelay:`${(i*0.4)%5}s`,
        }} />
      ))}
      {ct.isSpace && mounted && Array.from({length:5}).map((_,i) => (
        <div key={'m'+i} className="meteor-trail" style={{
          left:`${(i*22)%80}%`, top:`${(i*14)%40}%`,
          opacity: 0.5 + (i%3)*0.1,
          animationDuration:`${4 + i*1.5}s`,
          animationDelay:`${i*2.8}s`,
        }} />
      ))}

      {/* ── 불꽃축제 애니메이션 ── */}
      {ct.isFirework && mounted && (
        <style>{`
          @keyframes spark-rise {
            0%   { transform: translate(0,0) scale(1); opacity:0; }
            10%  { opacity:1; }
            100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity:0; }
          }
          @keyframes firework-pop {
            0%   { transform: scale(0); opacity:0; }
            30%  { opacity:1; transform: scale(1.2); }
            100% { transform: scale(2.5); opacity:0; }
          }
          .spark {
            position:fixed; border-radius:50%; pointer-events:none; z-index:0;
            width:4px; height:4px;
            animation: spark-rise ease-out infinite;
          }
        `}</style>
      )}
      {ct.isFirework && mounted && Array.from({length:30}).map((_,i) => {
        const angle = (i / 30) * Math.PI * 2
        const dist = 60 + (i%5)*25
        const dx = Math.round(Math.cos(angle)*dist)
        const dy = Math.round(Math.sin(angle)*dist - 80)
        const colors = ['#ff4488','#ffcc00','#00ffaa','#ff8800','#cc44ff','#00ccff','#ff2244']
        const cx = [20,50,75,35,65][Math.floor(i/6)]
        const cy = [30,20,35,50,15][Math.floor(i/6)]
        return (
          <div key={i} className="spark" style={{
            left:`${cx}%`, top:`${cy}%`,
            background: colors[i%colors.length],
            opacity: 0.15 + (i%4)*0.04,
            '--dx': dx+'px', '--dy': dy+'px',
            animationDuration:`${1.2 + (i*0.07)%1}s`,
            animationDelay:`${(i*0.15)%3}s`,
          }} />
        )
      })}

      {/* ── 심해 애니메이션 ── */}
      {ct.isOcean && mounted && (
        <style>{`
          @keyframes bubble-rise {
            0%   { transform: translateY(0) translateX(0) scale(1); opacity:0; }
            10%  { opacity:.6; }
            50%  { transform: translateY(-45vh) translateX(8px) scale(1.05); }
            90%  { opacity:.3; }
            100% { transform: translateY(-100vh) translateX(-5px) scale(.8); opacity:0; }
          }
          @keyframes seaweed-sway {
            0%, 100% { transform: skewX(-6deg); }
            50%       { transform: skewX(6deg); }
          }
          .bubble {
            position:fixed; bottom:0; border-radius:50%; pointer-events:none; z-index:0;
            border:1px solid rgba(0,180,216,.4);
            background:radial-gradient(circle at 35% 35%, rgba(180,240,255,.15), transparent);
            animation: bubble-rise ease-in-out infinite;
          }
        `}</style>
      )}
      {ct.isOcean && mounted && Array.from({length:25}).map((_,i) => {
        const sz = 6 + (i%5)*8
        return (
          <div key={i} className="bubble" style={{
            left:`${(i*4.1+2)%95}%`,
            width:sz+'px', height:sz+'px',
            opacity: 0.08 + (i%4)*0.03,
            animationDuration:`${4 + (i*0.6)%5}s`,
            animationDelay:`${(i*0.45)%6}s`,
          }} />
        )
      })}
      {ct.isOcean && mounted && (
        <div style={{ position:'fixed', bottom:0, left:0, right:0, height:'18vh', zIndex:0, pointerEvents:'none',
          background:'linear-gradient(180deg, transparent 0%, rgba(0,20,40,.35) 100%)',
        }} />
      )}

      {/* ── 네온사인 애니메이션 ── */}
      {ct.isNeon && mounted && (
        <style>{`
          @keyframes neon-flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: .12; }
            20%, 24%, 55% { opacity: .04; }
          }
          @keyframes neon-pulse {
            0%, 100% { opacity:.08; transform:scale(1); }
            50%       { opacity:.18; transform:scale(1.03); }
          }
          .neon-orb {
            position:fixed; border-radius:50%; pointer-events:none; z-index:0;
            filter: blur(40px);
            animation: neon-pulse ease-in-out infinite;
          }
          .neon-line {
            position:fixed; pointer-events:none; z-index:0;
            animation: neon-flicker ease-in-out infinite;
          }
        `}</style>
      )}
      {ct.isNeon && mounted && (
        <>
          <div className="neon-orb" style={{ width:'300px',height:'300px',left:'10%',top:'20%',background:'#ff00aa',opacity:.1,animationDuration:'3.2s' }} />
          <div className="neon-orb" style={{ width:'250px',height:'250px',right:'8%',top:'35%',background:'#00ffcc',opacity:.08,animationDuration:'4.1s',animationDelay:'1.2s' }} />
          <div className="neon-orb" style={{ width:'200px',height:'200px',left:'40%',bottom:'20%',background:'#aa00ff',opacity:.09,animationDuration:'3.7s',animationDelay:'0.8s' }} />
          <div className="neon-line" style={{ left:'5%',top:'15%',width:'2px',height:'120px',background:'linear-gradient(180deg,transparent,#ff00aa,transparent)',opacity:.12,animationDuration:'1.8s' }} />
          <div className="neon-line" style={{ right:'12%',top:'40%',width:'2px',height:'80px',background:'linear-gradient(180deg,transparent,#00ffcc,transparent)',opacity:.1,animationDuration:'2.3s',animationDelay:'0.6s' }} />
          <div className="neon-line" style={{ left:'60%',bottom:'25%',width:'80px',height:'2px',background:'linear-gradient(90deg,transparent,#ff00aa,transparent)',opacity:.12,animationDuration:'1.5s',animationDelay:'1s' }} />
        </>
      )}

      {/* ── 해바라기밭 애니메이션 ── */}
      {ct.isSunflower && mounted && (
        <style>{`
          @keyframes sunflower-sway {
            0%,100% { transform: rotate(-3deg) translateX(0); }
            50%      { transform: rotate(3deg) translateX(4px); }
          }
          @keyframes petal-float {
            0%   { transform: translate(0,-10px) rotate(0deg); opacity:0; }
            8%   { opacity:.7; }
            50%  { transform: translate(20px,45vh) rotate(180deg); }
            100% { transform: translate(-10px,108vh) rotate(360deg); opacity:0; }
          }
          @keyframes bee-fly {
            0%   { transform: translate(0,0) rotate(0deg); }
            25%  { transform: translate(60px,-30px) rotate(15deg); }
            50%  { transform: translate(120px,10px) rotate(-10deg); }
            75%  { transform: translate(60px,40px) rotate(8deg); }
            100% { transform: translate(0,0) rotate(0deg); }
          }
          .sunflower-petal {
            position:fixed; top:0; pointer-events:none; z-index:0; border-radius:50% 0 50% 0;
            animation: petal-float linear infinite;
          }
        `}</style>
      )}
      {ct.isSunflower && mounted && (
        <>
          {/* 해바라기 3그루 SVG */}
          {[{x:'-20px',scale:1.1,delay:'0s'},{x:'calc(50% - 60px)',scale:.9,delay:'0.8s'},{x:'calc(100% - 80px)',scale:1,delay:'0.3s'}].map((p,i)=>(
            <div key={i} style={{ position:'fixed', bottom:0, left:p.x, zIndex:0, pointerEvents:'none', opacity:.18,
              animation:'sunflower-sway '+(5+i)+'s ease-in-out infinite', animationDelay:p.delay, transformOrigin:'50% 100%', transform:`scale(${p.scale})` }}>
              <svg width="100" height="220" viewBox="0 0 100 220" fill="none">
                <line x1="50" y1="220" x2="48" y2="80" stroke="#5a8a20" strokeWidth="6" strokeLinecap="round"/>
                <line x1="48" y1="160" x2="20" y2="130" stroke="#5a8a20" strokeWidth="4" strokeLinecap="round"/>
                <line x1="49" y1="140" x2="78" y2="110" stroke="#5a8a20" strokeWidth="3.5" strokeLinecap="round"/>
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,j)=>(
                  <ellipse key={j} cx={50+Math.cos(a*Math.PI/180)*22} cy={80+Math.sin(a*Math.PI/180)*22}
                    rx="10" ry="5" fill="#f5c800" opacity=".9"
                    transform={`rotate(${a+90},${50+Math.cos(a*Math.PI/180)*22},${80+Math.sin(a*Math.PI/180)*22})`}/>
                ))}
                <circle cx="50" cy="80" r="16" fill="#8b4513"/>
                <circle cx="50" cy="80" r="10" fill="#5a2a00"/>
              </svg>
            </div>
          ))}
          {/* 꽃잎 날리기 */}
          {Array.from({length:12}).map((_,i)=>(
            <div key={i} className="sunflower-petal" style={{
              left:`${(i*8.5+3)%95}%`, width:'8px', height:'14px',
              background:`hsl(${42+(i%4)*8},95%,${60+(i%3)*8}%)`,
              opacity:.15+(i%3)*.04,
              animationDuration:`${6+(i*.8)%5}s`,
              animationDelay:`${(i*.6)%7}s`,
            }}/>
          ))}
        </>
      )}

      {/* ── 나비정원 애니메이션 ── */}
      {ct.isButterfly && mounted && (
        <style>{`
          @keyframes butterfly-flutter {
            0%,100% { transform: scaleX(1); }
            50%      { transform: scaleX(.3); }
          }
          @keyframes butterfly-path-1 {
            0%   { transform: translate(0,0); }
            20%  { transform: translate(80px,-60px); }
            40%  { transform: translate(160px,-20px); }
            60%  { transform: translate(220px,-80px); }
            80%  { transform: translate(160px,-130px); }
            100% { transform: translate(0,0); }
          }
          @keyframes butterfly-path-2 {
            0%   { transform: translate(0,0); }
            25%  { transform: translate(-60px,-80px); }
            50%  { transform: translate(-140px,-30px); }
            75%  { transform: translate(-80px,-110px); }
            100% { transform: translate(0,0); }
          }
          @keyframes butterfly-path-3 {
            0%   { transform: translate(0,0); }
            33%  { transform: translate(100px,-50px); }
            66%  { transform: translate(50px,-120px); }
            100% { transform: translate(0,0); }
          }
          @keyframes flower-bob {
            0%,100% { transform: rotate(-2deg); }
            50%      { transform: rotate(2deg); }
          }
          .butterfly-wrap { position:fixed; pointer-events:none; z-index:0; }
          .butterfly-wing { animation: butterfly-flutter .25s ease-in-out infinite; transform-origin:center; }
        `}</style>
      )}
      {ct.isButterfly && mounted && (
        <>
          {/* 꽃들 배경 */}
          {[{l:'8%',b:'0',c:'#ff80ab'},{l:'30%',b:'0',c:'#ffb3c6'},{l:'55%',b:'0',c:'#c8f5a0'},{l:'75%',b:'0',c:'#80d8ff'},{l:'90%',b:'0',c:'#ff80ab'}].map((f,i)=>(
            <div key={i} style={{ position:'fixed', bottom:0, left:f.l, zIndex:0, pointerEvents:'none', opacity:.15,
              animation:'flower-bob '+(3+i*.5)+'s ease-in-out infinite', animationDelay:(i*.4)+'s', transformOrigin:'50% 100%' }}>
              <svg width="40" height={100+i*20} viewBox="0 0 40 120" fill="none">
                <line x1="20" y1="120" x2="20" y2="40" stroke="#4a9a20" strokeWidth="3"/>
                {[0,60,120,180,240,300].map((a,j)=>(
                  <ellipse key={j} cx={20+Math.cos(a*Math.PI/180)*13} cy={40+Math.sin(a*Math.PI/180)*13}
                    rx="9" ry="5" fill={f.c} opacity=".85"
                    transform={`rotate(${a},${20+Math.cos(a*Math.PI/180)*13},${40+Math.sin(a*Math.PI/180)*13})`}/>
                ))}
                <circle cx="20" cy="40" r="7" fill="#fff176"/>
              </svg>
            </div>
          ))}
          {/* 나비 5마리 */}
          {[
            {l:'20%',t:'35%',anim:'butterfly-path-1',dur:'8s',w1:'#9c27b0',w2:'#e040fb',sz:22},
            {l:'60%',t:'45%',anim:'butterfly-path-2',dur:'10s',w1:'#2196f3',w2:'#64b5f6',sz:18},
            {l:'40%',t:'55%',anim:'butterfly-path-3',dur:'12s',w1:'#ff9800',w2:'#ffcc02',sz:16},
            {l:'75%',t:'30%',anim:'butterfly-path-1',dur:'9s',delay:'3s',w1:'#e91e63',w2:'#f48fb1',sz:14},
            {l:'15%',t:'50%',anim:'butterfly-path-2',dur:'11s',delay:'2s',w1:'#009688',w2:'#4db6ac',sz:20},
          ].map((b,i)=>(
            <div key={i} className="butterfly-wrap" style={{
              left:b.l, top:b.t, opacity:.18+(i%3)*.04,
              animation:`${b.anim} ${b.dur} ease-in-out infinite`,
              animationDelay:b.delay||'0s',
            }}>
              <svg width={b.sz*2} height={b.sz*1.5} viewBox="0 0 40 30" className="butterfly-wing">
                <ellipse cx="10" cy="10" rx="10" ry="8" fill={b.w1} opacity=".9"/>
                <ellipse cx="8" cy="22" rx="8" ry="6" fill={b.w2} opacity=".8"/>
                <ellipse cx="30" cy="10" rx="10" ry="8" fill={b.w1} opacity=".9"/>
                <ellipse cx="32" cy="22" rx="8" ry="6" fill={b.w2} opacity=".8"/>
                <line x1="20" y1="4" x2="20" y2="26" stroke="#333" strokeWidth="1.5"/>
              </svg>
            </div>
          ))}
        </>
      )}

      {/* ── 뭉게구름 애니메이션 ── */}
      {ct.isCloud && mounted && (
        <style>{`
          @keyframes cloud-drift-1 {
            0%   { transform: translateX(-220px); opacity:0; }
            5%   { opacity:.9; }
            95%  { opacity:.9; }
            100% { transform: translateX(calc(100vw + 220px)); opacity:0; }
          }
          @keyframes cloud-drift-2 {
            0%   { transform: translateX(calc(100vw + 180px)); opacity:0; }
            5%   { opacity:.7; }
            95%  { opacity:.7; }
            100% { transform: translateX(-180px); opacity:0; }
          }
          @keyframes sun-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes bird-fly {
            0%   { transform: translateX(-80px) translateY(0); }
            25%  { transform: translateX(25vw) translateY(-20px); }
            50%  { transform: translateX(50vw) translateY(10px); }
            75%  { transform: translateX(75vw) translateY(-15px); }
            100% { transform: translateX(calc(100vw+80px)) translateY(0); }
          }
          .cloud-puff { position:fixed; pointer-events:none; z-index:0; }
          .bird { position:fixed; pointer-events:none; z-index:0; animation: bird-fly linear infinite; }
        `}</style>
      )}
      {ct.isCloud && mounted && (
        <>
          {/* 태양 */}
          <div style={{ position:'fixed', top:'5%', right:'8%', zIndex:0, pointerEvents:'none', opacity:.12 }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="22" fill="#f5c800"/>
              <g style={{ animation:'sun-spin 20s linear infinite', transformOrigin:'50px 50px' }}>
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>(
                  <line key={i} x1={50+Math.cos(a*Math.PI/180)*28} y1={50+Math.sin(a*Math.PI/180)*28}
                    x2={50+Math.cos(a*Math.PI/180)*42} y2={50+Math.sin(a*Math.PI/180)*42}
                    stroke="#f5c800" strokeWidth="3" strokeLinecap="round"/>
                ))}
              </g>
            </svg>
          </div>
          {/* 구름들 */}
          {[
            {top:'8%',w:200,h:70,dur:'28s',delay:'0s',anim:'cloud-drift-1',op:.85},
            {top:'16%',w:150,h:55,dur:'36s',delay:'8s',anim:'cloud-drift-1',op:.7},
            {top:'5%',w:180,h:65,dur:'32s',delay:'4s',anim:'cloud-drift-2',op:.75},
            {top:'22%',w:130,h:50,dur:'42s',delay:'14s',anim:'cloud-drift-1',op:.6},
            {top:'12%',w:220,h:75,dur:'38s',delay:'20s',anim:'cloud-drift-2',op:.8},
          ].map((c,i)=>(
            <div key={i} className="cloud-puff" style={{
              top:c.top, left:0, opacity:c.op*.13,
              animation:`${c.anim} ${c.dur} linear infinite`,
              animationDelay:c.delay,
            }}>
              <svg width={c.w} height={c.h} viewBox={`0 0 ${c.w} ${c.h}`} fill="white">
                <ellipse cx={c.w*.5} cy={c.h*.7} rx={c.w*.48} ry={c.h*.3}/>
                <ellipse cx={c.w*.3} cy={c.h*.5} rx={c.w*.28} ry={c.h*.4}/>
                <ellipse cx={c.w*.55} cy={c.h*.4} rx={c.w*.32} ry={c.h*.45}/>
                <ellipse cx={c.w*.75} cy={c.h*.52} rx={c.w*.24} ry={c.h*.35}/>
              </svg>
            </div>
          ))}
          {/* 새 V자 3마리 */}
          {[{t:'18%',dur:'18s',d:'0s'},{t:'28%',dur:'22s',d:'6s'},{t:'12%',dur:'26s',d:'12s'}].map((b,i)=>(
            <div key={i} className="bird" style={{ top:b.t, opacity:.1, animationDuration:b.dur, animationDelay:b.d }}>
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                <path d="M0 6 Q6 0 12 5 Q18 0 24 6" stroke="#2880d8" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          ))}
        </>
      )}

      {/* ── 다람쥐숲 애니메이션 ── */}
      {ct.isSquirrel && mounted && (
        <style>{`
          @keyframes squirrel-run {
            0%            { transform: translateX(-80px) scaleX(1); }
            35%           { transform: translateX(calc(var(--tree-x) - 70px)) scaleX(1); }
            38%,62%       { transform: translateX(calc(var(--tree-x) - 70px)) scaleX(1); }
            65%           { transform: translateX(calc(var(--tree-x) - 70px)) scaleX(-1); }
            100%          { transform: translateX(-80px) scaleX(-1); }
          }
          @keyframes squirrel-climb {
            0%,34%         { bottom: 4px; }
            36%            { bottom: 60px; }
            38%,61%        { bottom: 100px; }
            63%            { bottom: 60px; }
            65%,100%       { bottom: 4px; }
          }
          @keyframes squirrel-hide {
            0%,35%,63%,100% { opacity:1; }
            38%,61%          { opacity:0; }
          }
          @keyframes tree-sway {
            0%,100% { transform: rotate(-.8deg); }
            50%     { transform: rotate(.8deg); }
          }
          @keyframes leaf-rustle {
            0%,100% { transform: rotate(-2deg) scale(1); }
            50%     { transform: rotate(2deg) scale(1.02); }
          }
          @keyframes acorn-fall {
            0%   { transform: translate(0,0) rotate(0deg); opacity:0; }
            10%  { opacity:.8; }
            100% { transform: translate(15px, 80px) rotate(180deg); opacity:0; }
          }
          .squirrel-sprite { position:fixed; bottom:4px; pointer-events:none; z-index:1;
            animation: squirrel-run var(--sq-dur) ease-in-out infinite var(--sq-delay),
                       squirrel-climb var(--sq-dur) ease-in-out infinite var(--sq-delay),
                       squirrel-hide var(--sq-dur) ease-in-out infinite var(--sq-delay);
          }
        `}</style>
      )}
      {ct.isSquirrel && mounted && (
        <>
          {/* 나무 2그루 */}
          {[{x:'28%',h:260,tw:110},{x:'68%',h:220,tw:90}].map((tr,i)=>(
            <div key={i} style={{ position:'fixed', bottom:0, left:tr.x, zIndex:0, pointerEvents:'none', opacity:.2,
              animation:'tree-sway '+(7+i*2)+'s ease-in-out infinite', animationDelay:(i*1.5)+'s', transformOrigin:'50% 100%' }}>
              <svg width={tr.tw} height={tr.h} viewBox={`0 0 ${tr.tw} ${tr.h}`} fill="none">
                <rect x={tr.tw/2-7} y={tr.h-80} width="14" height="80" rx="4" fill="#7a4a1a"/>
                <rect x={tr.tw/2-4} y={tr.h-160} width="8" height="90" rx="3" fill="#6a3a10"/>
                <circle cx={tr.tw/2} cy={tr.h-180} r={tr.tw*.45} fill="#4a8a20"/>
                <circle cx={tr.tw/2-18} cy={tr.h-160} r={tr.tw*.28} fill="#5a9a28"/>
                <circle cx={tr.tw/2+16} cy={tr.h-165} r={tr.tw*.3} fill="#3a7a18"/>
                {/* 구멍 */}
                <ellipse cx={tr.tw/2+5} cy={tr.h-100} rx="7" ry="5" fill="#3a1a00"/>
              </svg>
            </div>
          ))}
          {/* 다람쥐 */}
          <div className="squirrel-sprite" style={{
            left:0,
            '--tree-x':'28vw','--sq-dur':'7s','--sq-delay':'0s',
          }}>
            <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
              {/* 몸 */}
              <ellipse cx="18" cy="24" rx="10" ry="7" fill="#c87830"/>
              {/* 머리 */}
              <circle cx="28" cy="18" r="8" fill="#d88840"/>
              {/* 귀 */}
              <ellipse cx="25" cy="11" rx="3" ry="4" fill="#c87830"/>
              <ellipse cx="33" cy="11" rx="3" ry="4" fill="#c87830"/>
              <ellipse cx="25" cy="11" rx="1.5" ry="2.5" fill="#f0a060"/>
              <ellipse cx="33" cy="11" rx="1.5" ry="2.5" fill="#f0a060"/>
              {/* 눈 코 */}
              <circle cx="30" cy="17" r="2" fill="#1a0800"/>
              <circle cx="31" cy="16" r=".6" fill="white"/>
              <ellipse cx="34" cy="20" rx="2" ry="1" fill="#f09070"/>
              {/* 꼬리 */}
              <path d="M8 24 Q-2 10 4 4 Q14 0 16 12 Q18 20 14 26 Z" fill="#e89840" opacity=".9"/>
              <path d="M8 24 Q0 14 5 7 Q12 4 14 14 Q16 20 13 25 Z" fill="#f0b060" opacity=".6"/>
              {/* 다리 */}
              <ellipse cx="14" cy="30" rx="4" ry="3" fill="#c07020"/>
              <ellipse cx="23" cy="31" rx="4" ry="3" fill="#c07020"/>
            </svg>
          </div>
          {/* 도토리 */}
          {[{l:'30%',d:'3s'},{l:'70%',d:'8s'}].map((a,i)=>(
            <div key={i} style={{ position:'fixed', top:'25%', left:a.l, zIndex:0, pointerEvents:'none', opacity:.15,
              animation:'acorn-fall 4s ease-in infinite', animationDelay:a.d }}>
              <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
                <path d="M2 8 Q7 2 12 8 L10 8 Q7 5 4 8 Z" fill="#5a3a10"/>
                <ellipse cx="7" cy="13" rx="5" ry="6" fill="#8b5e20"/>
                <line x1="7" y1="5" x2="7" y2="2" stroke="#5a3a10" strokeWidth="1.5"/>
              </svg>
            </div>
          ))}
        </>
      )}

      {/* ── 연어의강 애니메이션 ── */}
      {ct.isSalmon && mounted && (
        <style>{`
          @keyframes river-flow {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-60px); }
          }
          @keyframes salmon-jump-1 {
            0%,39%        { transform: translate(0, 0) rotate(0deg); opacity:0; }
            40%           { opacity:1; transform: translate(0, 0) rotate(-20deg); }
            55%           { transform: translate(-40px, -120px) rotate(-60deg); }
            65%           { transform: translate(-60px, -150px) rotate(-80deg); }
            75%           { transform: translate(-80px, -120px) rotate(-100deg); }
            88%           { transform: translate(-100px, -20px) rotate(-150deg); opacity:1; }
            90%,100%      { transform: translate(-110px, 10px) rotate(-160deg); opacity:0; }
          }
          @keyframes salmon-jump-2 {
            0%,59%        { transform: translate(0,0) rotate(0deg); opacity:0; }
            60%           { opacity:1; transform: translate(0,0) rotate(-25deg); }
            72%           { transform: translate(-30px,-100px) rotate(-65deg); }
            80%           { transform: translate(-50px,-130px) rotate(-85deg); }
            90%           { transform: translate(-75px,-30px) rotate(-140deg); opacity:1; }
            92%,100%      { transform: translate(-85px, 8px) rotate(-155deg); opacity:0; }
          }
          @keyframes ripple-spread {
            0%   { transform: scale(0); opacity:.8; }
            100% { transform: scale(3); opacity:0; }
          }
          @keyframes water-shimmer {
            0%,100% { opacity:.06; }
            50%     { opacity:.12; }
          }
          .salmon { position:fixed; pointer-events:none; z-index:1; }
          .ripple { position:fixed; pointer-events:none; z-index:0; border-radius:50%;
            border: 2px solid rgba(26,122,176,.5);
            animation: ripple-spread 1.5s ease-out infinite;
          }
        `}</style>
      )}
      {ct.isSalmon && mounted && (
        <>
          {/* 강물 레이어 */}
          <div style={{ position:'fixed', bottom:0, left:0, right:0, height:'35%', zIndex:0, pointerEvents:'none',
            background:'linear-gradient(180deg, transparent 0%, rgba(26,122,176,.08) 40%, rgba(26,122,176,.18) 100%)',
            overflow:'hidden' }}>
            {Array.from({length:8}).map((_,i)=>(
              <div key={i} style={{ position:'absolute', top:`${10+i*12}%`, left:0, right:0, height:'2px',
                background:`linear-gradient(90deg, transparent, rgba(136,200,232,${.15+i*.02}), transparent)`,
                animation:'river-flow '+( 3+i*.4)+'s linear infinite',
                animationDelay:(i*.3)+'s', opacity:.7+(i%3)*.1 }}/>
            ))}
          </div>
          {/* 연어 3마리 */}
          {[
            {l:'55%',b:'30%',anim:'salmon-jump-1',dur:'5s',delay:'0s'},
            {l:'70%',b:'28%',anim:'salmon-jump-2',dur:'5s',delay:'1.8s'},
            {l:'62%',b:'32%',anim:'salmon-jump-1',dur:'5s',delay:'3.2s'},
          ].map((s,i)=>(
            <div key={i} className="salmon" style={{ left:s.l, bottom:s.b,
              animation:`${s.anim} ${s.dur} ease-in-out infinite`, animationDelay:s.delay, opacity:.22+(i%2)*.04 }}>
              <svg width="52" height="22" viewBox="0 0 52 22" fill="none">
                <ellipse cx="22" cy="11" rx="20" ry="8" fill="#e8602a"/>
                <ellipse cx="20" cy="11" rx="18" ry="6.5" fill="#f07840"/>
                {/* 배 */}
                <ellipse cx="22" cy="14" rx="14" ry="4" fill="#f8c8a0" opacity=".6"/>
                {/* 지느러미 */}
                <path d="M10 6 L18 11 L10 13 Z" fill="#c04020"/>
                <path d="M28 4 L34 11 L28 16 Z" fill="#c04020"/>
                {/* 꼬리 */}
                <path d="M40 11 L52 4 L50 11 L52 18 Z" fill="#c04020"/>
                {/* 눈 */}
                <circle cx="8" cy="10" r="2.5" fill="#fff"/>
                <circle cx="8" cy="10" r="1.5" fill="#1a0800"/>
                <circle cx="8.5" cy="9.5" r=".5" fill="white"/>
                {/* 반짝임 */}
                <ellipse cx="18" cy="8" rx="5" ry="2" fill="white" opacity=".18" transform="rotate(-15,18,8)"/>
              </svg>
            </div>
          ))}
          {/* 물방울 파문 */}
          {[{l:'55%',b:'29%',d:'2.5s'},{l:'68%',b:'27%',d:'4.3s'},{l:'61%',b:'31%',d:'6s'}].map((r,i)=>(
            <div key={i} className="ripple" style={{ left:r.l, bottom:r.b, width:'20px', height:'10px',
              animationDelay:r.d, animationDuration:'2s', opacity:.15 }}/>
          ))}
        </>
      )}

      {/* ── 폭포 애니메이션 ── */}
      {ct.isWaterfall && mounted && (
        <style>{`
          @keyframes fall-stream {
            0%   { transform: translateY(-100%); opacity:0; }
            5%   { opacity:1; }
            95%  { opacity:.8; }
            100% { transform: translateY(100%); opacity:0; }
          }
          @keyframes mist-rise {
            0%   { transform: translateY(0) scale(1); opacity:0; }
            20%  { opacity:.5; }
            100% { transform: translateY(-80px) scale(2.5); opacity:0; }
          }
          @keyframes pool-ripple {
            0%   { transform: scale(1) scaleY(.4); opacity:.6; }
            100% { transform: scale(4) scaleY(.4); opacity:0; }
          }
          @keyframes moss-sway {
            0%,100% { transform: rotate(-3deg); }
            50%     { transform: rotate(3deg); }
          }
          @keyframes splash-drop {
            0%   { transform: translate(0,0); opacity:0; }
            20%  { opacity:1; }
            100% { transform: translate(var(--sx), var(--sy)); opacity:0; }
          }
          .fall-col { position:absolute; top:0; border-radius:4px;
            background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(140,210,240,.6), rgba(255,255,255,.5));
            animation: fall-stream linear infinite;
          }
          .mist-puff { position:absolute; border-radius:50%;
            background: radial-gradient(circle, rgba(255,255,255,.8), transparent);
            animation: mist-rise ease-out infinite;
          }
          .splash { position:absolute; width:4px; height:4px; border-radius:50%;
            background:rgba(255,255,255,.9);
            animation: splash-drop ease-out infinite;
          }
        `}</style>
      )}
      {ct.isWaterfall && mounted && (
        <>
          {/* 절벽/바위 SVG */}
          <div style={{ position:'fixed', right:'6%', top:0, bottom:0, width:'180px', zIndex:0, pointerEvents:'none', opacity:.18 }}>
            <svg width="180" height="100%" viewBox="0 0 180 800" preserveAspectRatio="none" fill="none">
              {/* 절벽 */}
              <path d="M60 0 L75 0 L80 50 L90 800 L0 800 Z" fill="#5a7a58"/>
              <path d="M60 0 L75 0 L78 40 L70 800 L55 800 Z" fill="#4a6a48" opacity=".6"/>
              {/* 바위들 */}
              <ellipse cx="30" cy="750" rx="35" ry="20" fill="#4a5a48"/>
              <ellipse cx="75" cy="760" rx="28" ry="15" fill="#3a4a38"/>
              <ellipse cx="120" cy="755" rx="22" ry="12" fill="#4a5a48"/>
              {/* 이끼 */}
              <path d="M55 200 Q62 195 70 200 Q65 220 55 215 Z" fill="#3a8a30"/>
              <path d="M56 320 Q63 315 70 320 Q66 340 56 335 Z" fill="#4a9a38"/>
              <path d="M55 440 Q62 435 70 440 Q66 460 55 455 Z" fill="#3a8a30"/>
              {/* 이끼 흔들기 */}
              <g style={{ animation:'moss-sway 4s ease-in-out infinite', transformOrigin:'62px 760px' }}>
                <path d="M50 760 Q62 740 74 760 Q80 775 62 778 Q44 775 50 760 Z" fill="#3a8a20" opacity=".8"/>
              </g>
            </svg>
            {/* 폭포 물줄기 */}
            <div style={{ position:'absolute', top:0, left:'32px', width:'46px', height:'100%', overflow:'hidden' }}>
              {Array.from({length:8}).map((_,i)=>(
                <div key={i} className="fall-col" style={{
                  left:`${i*5.5+1}px`,
                  width: i%3===0 ? '6px' : i%2===0 ? '4px' : '3px',
                  height: `${12+i%4*4}%`,
                  opacity: .5+(i%3)*.1,
                  animationDuration: `${.6+(i*.08)%0.5}s`,
                  animationDelay: `${(i*.12)%0.7}s`,
                }}/>
              ))}
              {/* 물보라 */}
              {Array.from({length:10}).map((_,i)=>(
                <div key={'m'+i} className="mist-puff" style={{
                  bottom: `${2+i%3*3}%`, left:`${i*4+2}px`,
                  width:'18px', height:'18px', opacity:.08+(i%3)*.03,
                  animationDuration:`${1.5+(i*.2)%1.5}s`,
                  animationDelay:`${(i*.18)%2}s`,
                }}/>
              ))}
              {/* 튀기는 물방울 */}
              {Array.from({length:8}).map((_,i)=>(
                <div key={'sp'+i} className="splash" style={{
                  bottom:'3%', left:`${i*5+3}px`,
                  '--sx': (Math.cos(i*0.8)*25)+'px',
                  '--sy': (-20-i%3*10)+'px',
                  opacity:.15+(i%3)*.04,
                  animationDuration:`${.8+(i*.1)%0.6}s`,
                  animationDelay:`${(i*.15)%1}s`,
                }}/>
              ))}
            </div>
          </div>
          {/* 수면 파문 */}
          {Array.from({length:4}).map((_,i)=>(
            <div key={i} style={{ position:'fixed', bottom:'12%', right:`${12+i*3}%`, zIndex:0, pointerEvents:'none',
              width:'40px', height:'16px', borderRadius:'50%',
              border:'1.5px solid rgba(26,144,96,.25)',
              animation:'pool-ripple 2.5s ease-out infinite',
              animationDelay:(i*.6)+'s', opacity:.12 }}/>
          ))}
          {/* 배경 안개 */}
          <div style={{ position:'fixed', right:0, top:0, bottom:0, width:'220px', zIndex:0, pointerEvents:'none',
            background:'linear-gradient(90deg, transparent, rgba(200,240,220,.06))',
          }}/>
        </>
      )}

      {/* ── 푸터 ── */}
      <footer style={{ borderTop:'1px solid var(--border)', padding:'32px 16px 28px', textAlign:'center', color:'var(--muted)', fontSize:'.78rem', marginTop:60 }}>
        <p style={{ fontWeight:700, color:'var(--text)', fontSize:'.82rem', marginBottom:6 }}>오늘뭐먹지</p>
        <p style={{ marginBottom:4 }}>강남·잠실·영통 맛집 AI 추천 서비스</p>
        <p style={{ marginBottom:16, fontSize:'.73rem' }}>삼성역 · 잠실역 · 영통역 · 망포역 주변 식당 정보</p>
        <div style={{ width:32, height:1, background:'var(--border)', margin:'0 auto 16px' }} />
        {/* 광고·비즈니스 문의 버튼 + 팝업 */}
        {showContact && (
          <div onClick={() => setShowContact(false)} style={{
            position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:2000,
            display:'flex', alignItems:'center', justifyContent:'center', padding:16,
          }}>
            <div onClick={e => e.stopPropagation()} style={{
              background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16,
              padding:'28px 24px', maxWidth:340, width:'100%', textAlign:'center',
            }}>
              <div style={{ fontSize:'1.6rem', marginBottom:12 }}>📬</div>
              <p style={{ fontWeight:800, fontSize:'.95rem', color:'var(--text)', marginBottom:6 }}>광고 및 비즈니스 문의</p>
              <p style={{ fontSize:'.82rem', color:'var(--muted)', marginBottom:20, lineHeight:1.6 }}>
                제휴·광고·협업 문의는<br/>아래 이메일로 연락 주세요.
              </p>
              <div style={{
                background:'var(--surface2)', border:'1px solid var(--border)',
                borderRadius:10, padding:'12px 16px', marginBottom:20,
                display:'flex', alignItems:'center', justifyContent:'center', gap:8,
              }}>
                <span style={{ fontSize:'.88rem', fontWeight:700, color:'var(--text)', letterSpacing:'.02em' }}>
                  wizet1923@gmail.com
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('wizet1923@gmail.com')
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                  }}
                  style={{ background:'none', border:'none', cursor:'pointer', fontSize:'.75rem', color:'var(--primary)', fontWeight:600, padding:'2px 6px' }}
                >{copied ? '✅ 복사됨' : '복사'}</button>
              </div>
              <button onClick={() => setShowContact(false)} style={{
                width:'100%', padding:'10px', borderRadius:10, border:'1px solid var(--border)',
                background:'var(--surface)', color:'var(--muted)', cursor:'pointer', fontSize:'.85rem',
              }}>닫기</button>
            </div>
          </div>
        )}
        <p style={{ marginBottom:6 }}>
          <button
            onClick={() => setShowContact(true)}
            style={{ background:'none', border:'1px solid var(--border)', borderRadius:8,
              padding:'5px 14px', cursor:'pointer', color:'var(--muted)', fontSize:'.78rem',
              fontWeight:600, transition:'all .15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='var(--primary)'; e.currentTarget.style.color='var(--primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--muted)' }}
          >
            📬 광고 및 비즈니스 문의
          </button>
        </p>
        <DevNote />
        <p style={{ fontSize:'.72rem', opacity:.6, marginTop:16 }}>© 2026 오늘뭐먹지. All rights reserved.</p>
        {/* 숨김 어드민 링크 — 텍스트 없음, 점 하나 */}
        <a href="/admin" style={{ display:'inline-block', marginTop:16, width:6, height:6, borderRadius:'50%', background:'var(--border)', opacity:.3, textDecoration:'none' }} aria-hidden="true" />
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
            <p style={{ fontSize:'.72rem', color:'var(--muted)', marginBottom:8 }}>
              📱 토스앱으로 QR 스캔 또는 아래 저장 후 불러오기
            </p>
            <QRMobileGuide />
            <button onClick={() => setShowQR(false)} style={{
              width:'100%', padding:'10px', borderRadius:10, marginTop:12,
              background:'var(--surface2)', border:'1px solid var(--border)',
              color:'var(--text)', cursor:'pointer', fontSize:'.88rem',
            }}>닫기</button>
          </div>
        </div>
      )}
    </>
  )
}
