import Head from 'next/head'
import Link from 'next/link'
import restaurants from '../../../../data/samseong'

export async function getStaticPaths() {
  return {
    paths: restaurants.map(r => ({
      params: { name: encodeURIComponent(r.name) }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const name = decodeURIComponent(params.name)
  const r = restaurants.find(x => x.name === name)
  if (!r) return { notFound: true }

  // 비슷한 카테고리 식당 (같은 cat 중 top 4)
  const similar = restaurants
    .filter(x => x.name !== r.name && x.cat?.some(c => r.cat?.includes(c)))
    .sort((a, b) => b.rt - a.rt)
    .slice(0, 4)
    .map(x => ({ name: x.name, type: x.type, e: x.e, rt: x.rt, priceRange: x.priceRange || null }))

  return {
    props: {
      restaurant: {
        name: r.name, type: r.type, e: r.e, rt: r.rt, cnt: r.cnt,
        addr: r.addr, hours: r.hours, tags: r.tags || [],
        priceRange: r.priceRange || null, cat: r.cat || [],
        moods: r.moods || [], scene: r.scene || [],
        rv: r.rv || [], lat: r.lat, lng: r.lng
      },
      similar
    }
  }
}

// 카테고리 → 슬러그 맵핑
const CAT_TO_SLUG = {
  '국밥': 'gukbap', '국물': 'gukbap',
  '고기구이': 'meat', '한우': 'meat',
  '이자카야': 'izakaya', '일식': 'izakaya',
  '중식': 'chinese', '훠궈': 'chinese',
  '양식': 'western', '이탈리안': 'western', '스테이크': 'western',
  '치킨': 'chicken', '야장': 'chicken',
}

const CAT_NAMES = {
  gukbap: '국밥·해장', meat: '고기구이·한우', izakaya: '이자카야',
  chinese: '중식', western: '이탈리안·양식', chicken: '치킨·야장'
}

export default function RestaurantPage({ restaurant: r, similar }) {
  const slug = CAT_TO_SLUG[r.cat?.[0]] || null
  const catName = slug ? CAT_NAMES[slug] : null

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' 삼성역')}`

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": r.name,
    "description": `삼성역 ${r.type} 맛집. ${r.addr} 위치. 영업시간: ${r.hours}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": r.addr,
      "addressLocality": "서울특별시 강남구",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": r.lat,
      "longitude": r.lng
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": r.rt,
      "reviewCount": r.cnt,
      "bestRating": 5,
      "worstRating": 1
    },
    "openingHours": r.hours,
    "servesCuisine": r.type,
    "url": `https://dinner.ambitstock.com/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`
  }

  return (
    <>
      <Head>
        <title>{r.name} — 삼성역 {r.type} 맛집 | 위치·영업시간·리뷰</title>
        <meta name="description" content={`${r.name} 삼성역 ${r.type} 맛집 정보. 주소: ${r.addr}. 영업시간: ${r.hours}. Google 평점 ⭐${r.rt} (${r.cnt?.toLocaleString()}리뷰). ${r.tags?.slice(0,4).join(', ')}.`} />
        <meta name="keywords" content={`${r.name}, 삼성역 ${r.type}, 삼성역 맛집, ${r.addr}, ${r.tags?.join(', ')}`} />
        <link rel="canonical" href={`https://dinner.ambitstock.com/dinner/samseong/restaurant/${encodeURIComponent(r.name)}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      {/* 브레드크럼 */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '12px 16px' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">홈</Link> <span>›</span>
            <Link href="/dinner/samseong">삼성역</Link> <span>›</span>
            {slug && <><Link href={`/dinner/samseong/category/${slug}`}>{catName}</Link> <span>›</span></>}
            <span style={{ color: 'var(--text)' }}>{r.name}</span>
          </div>
        </div>
      </div>

      {/* 포스트 히어로 */}
      <section style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '36px 16px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ fontSize: '3.5rem' }}>{r.e}</div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h1 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 900, marginBottom: 8 }}>
                {r.name}
              </h1>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                <span className="tag">{r.type}</span>
                <span className="tag rating">⭐ {r.rt} ({r.cnt?.toLocaleString()}리뷰)</span>
                {r.priceRange && <span className="tag price">💰 {r.priceRange}원</span>}
              </div>
              <div style={{ fontSize: '.88rem', color: 'var(--muted)', marginBottom: 4 }}>📍 {r.addr}</div>
              <div style={{ fontSize: '.88rem', color: 'var(--muted)' }}>🕐 {r.hours}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 본문 */}
      <div className="post-body">

        {/* 기본 정보 */}
        <h2>📌 기본 정보</h2>
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 12, overflow: 'hidden'
        }}>
          {[
            { label: '종류', value: r.type },
            { label: '주소', value: r.addr },
            { label: '영업시간', value: r.hours },
            r.priceRange && { label: '가격대', value: `${r.priceRange}원` },
            { label: 'Google 평점', value: `⭐ ${r.rt} (${r.cnt?.toLocaleString()}개 리뷰)` },
          ].filter(Boolean).map((item, i) => (
            <div key={i} style={{
              display: 'flex', padding: '12px 16px',
              borderBottom: '1px solid var(--border)',
              gap: 16
            }}>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)', minWidth: 70, flexShrink: 0 }}>{item.label}</div>
              <div style={{ fontSize: '.88rem' }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* 태그 */}
        {r.tags?.length > 0 && (
          <>
            <h2>🏷️ 특징 & 태그</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {r.tags.map(t => (
                <span key={t} className="tag">#{t}</span>
              ))}
            </div>
          </>
        )}

        {/* 이런 날 추천 */}
        {r.scene?.length > 0 && (
          <>
            <h2>💡 이런 상황에 추천</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {r.scene.map(s => (
                <span key={s} style={{
                  padding: '6px 14px', borderRadius: 100, fontSize: '.82rem',
                  background: 'var(--surface2)', border: '1px solid var(--border)'
                }}>{s}</span>
              ))}
            </div>
          </>
        )}

        {/* 리뷰 */}
        {r.rv?.length > 0 && (
          <>
            <h2>💬 실제 방문 리뷰</h2>
            {r.rv.map((rv, i) => (
              <div key={i} className="review-item">
                {rv.replace(/ \(실제 Google 리뷰.*?\)/, '')}
              </div>
            ))}
            <p style={{ fontSize: '.78rem', color: 'var(--muted)' }}>
              * Google Maps 실제 방문 리뷰를 기반으로 합니다.
            </p>
          </>
        )}

        {/* 지도 */}
        <h2>🗺️ 위치</h2>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer"
          className="btn btn-ghost" style={{ marginBottom: 16 }}>
          📍 Google 지도에서 보기
        </a>
        <p style={{ fontSize: '.85rem', color: 'var(--muted)' }}>
          삼성역에서의 거리나 경로는 Google Maps에서 확인하세요.
        </p>

        {/* 비슷한 식당 */}
        {similar?.length > 0 && (
          <>
            <h2>🍽️ 비슷한 {r.type} 맛집</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
              {similar.map((s, i) => (
                <Link href={`/dinner/samseong/restaurant/${encodeURIComponent(s.name)}`} key={i}>
                  <div style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 10, padding: '12px 14px', cursor: 'pointer',
                    transition: 'border-color .2s'
                  }}>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{s.e} {s.name}</div>
                    <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                      <span className="tag">⭐ {s.rt}</span>
                      {s.priceRange && <span className="tag price">💰 {s.priceRange}원</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* 네비 */}
        <div style={{ marginTop: 40, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {slug && <Link href={`/dinner/samseong/category/${slug}`} className="btn btn-ghost">← {catName} 전체 보기</Link>}
          <Link href="/dinner/samseong" className="btn btn-primary">✨ AI 추천 받기</Link>
        </div>
      </div>
    </>
  )
}
