import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import yeongtongData from '../../../data/yeongtong'
import mangpoData    from '../../../data/mangpo'
import yeongtongGuData from '../../../data/yeongtongGu'

function fmtPrice(p) {
  if (!p) return ''
  return p.split('~').map(n => parseInt(n).toLocaleString('ko-KR')).join('~')
}

function naverMapUrl(name, region) {
  const SUFFIX = { yeongtong: ' 영통', mangpo: ' 망포', yeongtongGu: ' 영통구청' }
  const STRIP  = { yeongtong: /(영통점|영통역점|영통본점)$/, mangpo: /(망포점|수원점)$/, yeongtongGu: /(구청점|매탄점)$/ }
  const cleaned = name.replace(STRIP[region] || /()$/, '').replace(/ ([0-9]+호점)$/, '').trim()
  const suffix  = SUFFIX[region] || ' 영통'
  const hasRegion = /(영통|망포|수원|삼성전자|매탄)/.test(cleaned)
  const query = hasRegion ? cleaned : cleaned + suffix
  return `https://map.naver.com/v5/search/${encodeURIComponent(query)}`
}

// ── 주사위 오버레이 ──────────────────────────────────────────────
function DiceOverlay({ onDone }) {
  const DICE = ['⚀','⚁','⚂','⚃','⚄','⚅','🎲']
  const [face, setFace] = useState('🎲')
  useEffect(() => {
    let cnt = 0
    const id = setInterval(() => {
      setFace(DICE[Math.floor(Math.random() * DICE.length)])
      cnt++
      if (cnt >= 22) { clearInterval(id); setTimeout(onDone, 300) }
    }, 90)
    return () => clearInterval(id)
  }, [])
  return (
    <div style={{ position:'fixed',inset:0,zIndex:300,background:'rgba(0,0,0,.85)',backdropFilter:'blur(8px)',
      display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
      <div style={{ fontSize:'6rem', animation:'spin .6s linear infinite' }}>{face}</div>
      <p style={{ color:'#aaa', marginTop:16, fontSize:'.95rem' }}>지역별로 한 곳씩 뽑는 중...</p>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}

const REGION_LABEL = {
  yeongtong: { name:'영통역', emoji:'🚇', color:'#6fcfcf' },
  mangpo:    { name:'망포역', emoji:'🌿', color:'#88d97a' },
  yeongtongGu:{ name:'영통구청', emoji:'🏢', color:'#f0a855' },
}
const REGIONS = ['yeongtong', 'mangpo', 'yeongtongGu']

const CATEGORY_MAP = {
  meat:     { name:'고기구이·삼겹살',  emoji:'🥩', cats:['고기구이'],              tags:['한우','갈비','삼겹살','목살'] },
  gukbap:   { name:'국밥·해장·칼국수', emoji:'🥣', cats:['국밥','국물','칼국수'],  tags:['해장','설렁탕','순대국밥'] },
  izakaya:  { name:'이자카야·포차',    emoji:'🏮', cats:['이자카야','야장'],        tags:['포차','하이볼','수제맥주'] },
  japanese: { name:'일식·스시·돈카츠', emoji:'🍣', cats:['일식'],                  tags:['스시','사시미','돈카츠','규동'] },
  chinese:  { name:'중식·마라탕',      emoji:'🍜', cats:['중식','훠궈'],            tags:['마라탕','양꼬치','짬뽕'] },
  western:  { name:'양식·파스타',      emoji:'🍝', cats:['양식','이탈리안','스테이크'], tags:['파스타','피자','스테이크'] },
  chicken:  { name:'치킨·분식',        emoji:'🐔', cats:['치킨','분식'],            tags:['통닭','치킨','떡볶이'] },
  group:    { name:'회식·단체',        emoji:'🎉', cats:[],                         tags:['단체가능','회식','룸있음'] },
  date:     { name:'데이트·분위기',    emoji:'💑', cats:[],                         tags:['데이트','뷰맛집','프라이빗'] },
  budget:   { name:'가성비·혼밥·점심', emoji:'💰', cats:[],                         tags:['가성비','점심','혼밥가능','점심특선'] },
  premium:  { name:'접대·파인다이닝',  emoji:'✨', cats:[],                         tags:['오마카세','예약제','코스요리','프라이빗'] },
  korean:   { name:'한식·정식·보쌈',   emoji:'🍱', cats:['한식'],                   tags:['족발','보쌈','갈비찜','한정식'] },
}

function filterByCategory(data, catInfo) {
  return data.filter(r => {
    const catMatch = catInfo.cats.length > 0 && catInfo.cats.some(c => r.cat?.includes(c))
    const tagMatch = catInfo.tags?.some(t =>
      r.tags?.some(rt => rt.toLowerCase().includes(t.toLowerCase())) ||
      r.cat?.some(c => c.toLowerCase().includes(t.toLowerCase()))
    )
    return catMatch || tagMatch
  })
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(CATEGORY_MAP).map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const catInfo = CATEGORY_MAP[slug]
  if (!catInfo) return { notFound: true }

  const pick = (data, region) => filterByCategory(data, catInfo).map(r => ({
    name: r.name, type: r.type, e: r.e,
    rt: r.rt, cnt: r.cnt, addr: r.addr,
    hours: r.hours, tags: r.tags || [],
    priceRange: r.priceRange || null, cat: r.cat || [],
    rv: r.rv || [], region,
  }))

  return {
    props: {
      slug,
      catInfo,
      byRegion: {
        yeongtong:  pick(yeongtongData,   'yeongtong'),
        mangpo:     pick(mangpoData,       'mangpo'),
        yeongtongGu:pick(yeongtongGuData,  'yeongtongGu'),
      },
    },
  }
}

// ── 랜덤 결과 문구 ──────────────────────────────────────────────
function buildReason(r, idx) {
  function cleanRv(v) {
    return (v || '').replace(/\[\d+\.?\d*★\]\s*/g, '').replace(/\(실제 Google 리뷰.*?\)/g, '').trim().slice(0, 40)
  }
  const rv0   = cleanRv(r.rv?.[0] || '')
  const rv1   = cleanRv(r.rv?.[1] || '')
  const tags  = (r.tags || []).slice(0, 3)
  const cnt   = r.cnt || 0
  const pool = [
    () => rv1 ? `"${rv0}" 또 다른 방문객은, "${rv1}"` : rv0 ? `"${rv0}"` : null,
    () => cnt >= 50 ? `${cnt.toLocaleString()}명이 다녀간 곳. ${rv0 ? '"' + rv0 + '"' : ''}`.trim() : null,
    () => tags.length ? `${tags.slice(0, 3).map(t => '#' + t).join('  ')}${rv0 ? '  "' + rv0 + '"' : ''}` : null,
    () => rv0 ? `"${rv0}"` : null,
  ]
  for (const i of [idx % pool.length, (idx + 1) % pool.length, 3, 0]) {
    const s = pool[i](); if (s?.trim()) return s.trim()
  }
  return rv0 || r.type || ''
}

// ── 식당 카드 (랜덤 결과용) ──────────────────────────────────────
function PickCard({ r, medal, borderColor }) {
  const rl = REGION_LABEL[r.region]
  const detailHref = `/samsungElectronics/${r.region}/restaurant/${encodeURIComponent(r.name)}`
  const reason = buildReason(r, 0)
  return (
    <Link href={detailHref} style={{ textDecoration:'none', display:'block', color:'inherit' }}>
      <div style={{ background:'var(--surface2)', border:'1px solid var(--border)',
        borderLeft:`3px solid ${borderColor}`, borderRadius:14,
        padding:'16px 14px', marginBottom:12, cursor:'pointer' }}>
        <div style={{ display:'flex', gap:10, marginBottom:8 }}>
          <span style={{ fontSize:'1.4rem', flexShrink:0 }}>{medal}</span>
          <div style={{ flex:1 }}>
            {/* 지역 뱃지 */}
            <span style={{ display:'inline-flex', alignItems:'center', gap:3,
              fontSize:'.65rem', background:'#1a2a2a', color: rl.color,
              padding:'2px 8px', borderRadius:100, border:`1px solid ${rl.color}44`,
              fontWeight:700, marginBottom:6 }}>
              {rl.emoji} {rl.name}
            </span>
            <div style={{ fontSize:'.95rem', fontWeight:700, marginBottom:5 }}>{r.e} {r.name}</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
              <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--muted)' }}>{r.type}</span>
              <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--text)' }}>⭐{r.rt}</span>
              {r.priceRange && <span style={{ fontSize:'.7rem', background:'var(--surface)', padding:'2px 7px', borderRadius:100, border:'1px solid var(--border)', color:'var(--primary)' }}>💰{fmtPrice(r.priceRange)}원</span>}
            </div>
          </div>
        </div>
        <div style={{ display:'flex', gap:6, alignItems:'center', flexWrap:'wrap' }}>
          <a href={naverMapUrl(r.name, r.region)}
            target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8,
              background:'var(--surface)', border:'1px solid var(--border)',
              color:'var(--muted)', textDecoration:'none' }}>
            📍 지도
          </a>
          <span style={{ fontSize:'.75rem', padding:'5px 12px', borderRadius:8,
            background:'var(--surface)', border:'1px solid var(--border)', color:'var(--muted)' }}>
            🕐 {r.hours}
          </span>
          <span style={{ marginLeft:'auto', fontSize:'.72rem', color:'var(--muted)', opacity:.6 }}>상세보기 →</span>
        </div>
        {reason && (
          <div style={{ marginTop:8, fontSize:'.78rem', color:'var(--muted)', lineHeight:1.5 }}>
            {reason}
          </div>
        )}
      </div>
    </Link>
  )
}

export default function UnifiedCategoryPage({ slug, catInfo, byRegion }) {
  // 전체 합산 (지역 정보 포함)
  const all = REGIONS.flatMap(region => byRegion[region])
  const sorted = [...all].sort((a, b) => b.rt - a.rt)

  const [dicing,  setDicing]  = useState(false)
  const [picks,   setPicks]   = useState(null)
  const [pending, setPending] = useState(null)
  const [activeRegion, setActiveRegion] = useState('all') // 필터
  const resultRef = useRef(null)

  // 랜덤 뽑기: 지역별 1개씩 (3개 합계)
  function doRandom() {
    const drawn = REGIONS.map(region => {
      const pool = byRegion[region]
      if (!pool.length) return null
      return pool[Math.floor(Math.random() * pool.length)]
    }).filter(Boolean)
    setPending(drawn)
    setDicing(true)
  }

  function onDone() {
    setDicing(false)
    if (pending) { setPicks(pending); setPending(null) }
  }

  useEffect(() => {
    if (picks && resultRef.current) {
      const top = resultRef.current.getBoundingClientRect().top + window.pageYOffset - 16
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [picks])

  const medals  = ['🥇','🥈','🥉']
  const borders = ['#ffd700','#c0c0c0','#cd7f32']

  // 지역 필터 적용
  const displayed = activeRegion === 'all'
    ? sorted
    : sorted.filter(r => r.region === activeRegion)

  const totalCount = all.length

  return (
    <>
      {dicing && <DiceOverlay onDone={onDone} />}
      <Head>
        <title>영통·망포·구청 {catInfo.name} 맛집 {totalCount}선 | 삼성전자 맛집</title>
        <meta name="description" content={`영통역·망포역·영통구청 삼성전자 임직원을 위한 ${catInfo.name} 맛집 ${totalCount}개. 지역 통합 검색.`} />
        <link rel="canonical" href={`https://dinner.ambitstock.com/samsungElectronics/category/${slug}`} />
      </Head>

      {/* 헤더 */}
      <div style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)', padding:'12px 16px' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">홈</Link> <span>›</span>
            <Link href="/samsungElectronics">삼성전자</Link> <span>›</span>
            <span style={{ color:'var(--text)' }}>{catInfo.name}</span>
          </div>
        </div>
      </div>

      {/* 히어로 */}
      <section style={{ padding:'36px 16px 24px', background:'var(--surface)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ fontSize:'2.5rem', marginBottom:10 }}>{catInfo.emoji}</div>
          <h1 style={{ fontSize:'clamp(1.3rem, 4vw, 1.9rem)', fontWeight:900, marginBottom:8 }}>
            삼성전자 {catInfo.name} 맛집
          </h1>
          <p style={{ color:'var(--muted)', fontSize:'.88rem', marginBottom:8 }}>
            영통역·망포역·영통구청 통합 <strong style={{ color:'var(--text)' }}>{totalCount}곳</strong>
          </p>

          {/* 지역별 카운트 뱃지 */}
          <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:20 }}>
            {REGIONS.map(region => {
              const rl  = REGION_LABEL[region]
              const cnt = byRegion[region].length
              return (
                <span key={region} style={{
                  fontSize:'.68rem', background:'#1a2a2a', color: rl.color,
                  padding:'3px 10px', borderRadius:100, border:`1px solid ${rl.color}44`,
                  fontWeight:700,
                }}>
                  {rl.emoji} {rl.name} {cnt}곳
                </span>
              )
            })}
          </div>

          {/* 랜덤 뽑기 버튼 */}
          <button onClick={doRandom}
            style={{ display:'inline-flex', alignItems:'center', gap:8,
              padding:'12px 22px', borderRadius:12, fontSize:'.93rem', fontWeight:700,
              background:'var(--primary)', color:'#fff', border:'none', cursor:'pointer',
              boxShadow:'0 4px 16px rgba(108,99,255,.35)' }}>
            🎲 지역별 1곳씩 랜덤 뽑기
          </button>
        </div>
      </section>

      <div className="container" style={{ padding:'24px 16px' }}>

        {/* 랜덤 결과 */}
        {picks && (
          <div ref={resultRef} style={{ marginBottom:28 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
              <span style={{ fontSize:'.82rem', color:'var(--muted)', fontWeight:700 }}>
                🎲 지역별 1곳씩 — {picks.map(p => REGION_LABEL[p.region].name).join(' · ')}
              </span>
              <button onClick={doRandom}
                style={{ fontSize:'.78rem', padding:'5px 12px', borderRadius:8,
                  background:'var(--surface)', border:'1px solid var(--border)',
                  color:'var(--muted)', cursor:'pointer' }}>
                🔄 다시 뽑기
              </button>
            </div>
            {picks.map((r, i) => (
              <PickCard key={i} r={r} medal={medals[i]} borderColor={borders[i]} />
            ))}
          </div>
        )}

        {/* 지역 필터 탭 */}
        <div style={{ display:'flex', gap:8, marginBottom:20, overflowX:'auto', paddingBottom:4 }}>
          {[{ key:'all', label:'전체', count: totalCount }, ...REGIONS.map(r => ({
            key: r, label: REGION_LABEL[r].name, count: byRegion[r].length
          }))].map(({ key, label, count }) => (
            <button key={key} onClick={() => setActiveRegion(key)}
              style={{
                flexShrink:0, padding:'7px 14px', borderRadius:20, fontSize:'.78rem', fontWeight:600,
                border: activeRegion === key ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: activeRegion === key ? 'var(--primary)' : 'var(--surface)',
                color: activeRegion === key ? '#fff' : 'var(--muted)',
                cursor:'pointer', transition:'all .15s',
              }}>
              {label} {count}
            </button>
          ))}
        </div>

        {/* 랭킹 리스트 */}
        <h2 style={{ fontSize:'1rem', fontWeight:700, marginBottom:16, color:'var(--muted)' }}>
          ⭐ 평점 순 랭킹 {activeRegion !== 'all' && `— ${REGION_LABEL[activeRegion].name}`}
        </h2>
        <div className="restaurant-grid">
          {displayed.map((r, i) => {
            const rl = REGION_LABEL[r.region]
            return (
              <Link href={`/samsungElectronics/${r.region}/restaurant/${encodeURIComponent(r.name)}`} key={i}>
                <div className="restaurant-card">
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:4 }}>
                    <div className="card-name">{r.e} {r.name}</div>
                    <span style={{ fontSize:'.75rem', color:'var(--muted)', flexShrink:0 }}>#{i + 1}</span>
                  </div>
                  {/* 지역 뱃지 */}
                  <span style={{
                    display:'inline-block', fontSize:'.62rem',
                    background:'#1a2a2a', color: rl.color,
                    padding:'1px 7px', borderRadius:100, border:`1px solid ${rl.color}44`,
                    fontWeight:700, marginBottom:6,
                  }}>
                    {rl.emoji} {rl.name}
                  </span>
                  <div className="card-meta">
                    <span className="tag">{r.type}</span>
                    <span className="tag rating">⭐ {r.rt} ({r.cnt?.toLocaleString()})</span>
                    {r.priceRange && <span className="tag price">💰 {fmtPrice(r.priceRange)}원</span>}
                  </div>
                  <div className="card-addr" style={{ marginBottom:6 }}>📍 {r.addr}</div>
                  {r.rv?.[0] && (
                    <div style={{ fontSize:'.75rem', color:'var(--muted)', lineHeight:1.4, marginTop:6 }}>
                      💬 {r.rv[0].replace(/\[\d+\.?\d*★\]\s*/g, '').slice(0, 40)}…
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        {/* 하단 네비 */}
        <div style={{ marginTop:32, display:'flex', gap:10, flexWrap:'wrap' }}>
          <Link href="/samsungElectronics" className="btn btn-ghost">← 삼성전자 홈</Link>
          {REGIONS.map(region => (
            <Link key={region} href={`/samsungElectronics/${region}`} className="btn btn-ghost"
              style={{ fontSize:'.78rem' }}>
              {REGION_LABEL[region].emoji} {REGION_LABEL[region].name} AI추천
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
