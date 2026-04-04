import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Layout from '../../components/Layout'
import posts from '../../data/posts'

// ── AdSense 광고 섹션 ────────────────────────────────────────────
function AdSection({ slot, format }) {
  const ref = useRef(null)
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({})
      }
    } catch (e) {
      // 광고 초기화 오류 무시
    }
  }, [])

  return (
    <div style={{ margin: '28px 0', textAlign: 'center' }}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8640254349508671"
        data-ad-slot={slot}
        data-ad-format={format || 'autorelaxed'}
        data-full-width-responsive="true"
      />
    </div>
  )
}

// ── 상단 2열 광고 (제목 아래, 본문 시작 전) ─────────────────────
function TopDualAdSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const ads = window.adsbygoogle || []
      ads.push({})
      ads.push({})
    } catch (e) {}
  }, [])

  return (
    <div style={{ display: 'flex', gap: 12, margin: '20px 0 28px', justifyContent: 'center' }}>
      <div style={{ flex: 1, minWidth: 0, maxWidth: 350 }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8640254349508671"
          data-ad-slot="9463227631"
          data-ad-format="rectangle"
          data-full-width-responsive="false"
        />
      </div>
      <div style={{ flex: 1, minWidth: 0, maxWidth: 350 }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8640254349508671"
          data-ad-slot="6297515693"
          data-ad-format="rectangle"
          data-full-width-responsive="false"
        />
      </div>
    </div>
  )
}

// ── H2 뒤 인라인 본문 광고 ──────────────────────────────────────
function InArticleAdSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      if (window.adsbygoogle) window.adsbygoogle.push({})
    } catch (e) {}
  }, [])

  return (
    <div style={{ margin: '16px 0 24px', textAlign: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-8640254349508671"
        data-ad-slot="6297515693"
        data-ad-format="fluid"
        data-ad-layout="in-article"
      />
    </div>
  )
}

// ── 목차(TOC) 자동 생성 ──────────────────────────────────────────
function TocSection({ sections }) {
  const headings = sections.filter((s) => s.type === 'h2')
  if (!headings.length) return null
  return (
    <nav
      aria-label="목차"
      style={{
        margin: '24px 0',
        padding: '18px 20px',
        background: 'var(--surface2)',
        border: '1px solid var(--border)',
        borderRadius: 12,
      }}
    >
      <p
        style={{
          fontSize: '.75rem',
          color: 'var(--muted)',
          marginBottom: 10,
          fontWeight: 700,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
        }}
      >
        목차
      </p>
      <ol style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {headings.map((h, i) => (
          <li key={h.id || i}>
            <a
              href={h.id ? `#${h.id}` : undefined}
              style={{
                fontSize: '.88rem',
                color: 'var(--primary)',
                textDecoration: 'none',
                lineHeight: 1.5,
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

// ── H2 배경 블록 소제목 ──────────────────────────────────────────
function H2Section({ id, text, paletteIndex }) {
  const palette = H2_PALETTES[(paletteIndex || 0) % H2_PALETTES.length]
  return (
    <h2
      id={id}
      style={{
        fontSize: 'clamp(1.05rem, 3vw, 1.25rem)',
        fontWeight: 800,
        margin: '36px 0 16px',
        padding: '16px 22px',
        borderRadius: 12,
        background: palette.bg,
        color: palette.color,
        scrollMarginTop: 64,
        lineHeight: 1.4,
      }}
    >
      {text}
    </h2>
  )
}

// ── 이미지 + 캡션 ────────────────────────────────────────────────
function ImageSection({ src, alt, caption }) {
  return (
    <figure style={{ margin: '24px 0' }}>
      <div
        style={{
          background: 'var(--surface2)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          overflow: 'hidden',
          aspectRatio: '16/9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {src ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={src}
            alt={alt || ''}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>
            🖼 이미지 준비 중
          </span>
        )}
      </div>
      {caption && (
        <figcaption
          style={{
            marginTop: 8,
            fontSize: '.75rem',
            color: 'var(--muted)',
            textAlign: 'center',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// ── CTA 버튼 ────────────────────────────────────────────────────
function CtaSection({ href, text }) {
  return (
    <div style={{ margin: '28px 0', textAlign: 'center' }}>
      <Link
        href={href}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '13px 28px',
          borderRadius: 12,
          fontSize: '.95rem',
          fontWeight: 700,
          background: 'var(--primary)',
          color: '#fff',
          textDecoration: 'none',
          boxShadow: '0 4px 16px rgba(108,99,255,.3)',
          transition: 'opacity .2s',
        }}
      >
        {text}
      </Link>
    </div>
  )
}

// ── 마무리 + 관련 글 링크 ────────────────────────────────────────
function EndingSection({ html, relatedPosts }) {
  return (
    <div
      style={{
        margin: '36px 0 0',
        padding: '24px 22px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 14,
      }}
    >
      <div
        className="post-body"
        style={{ padding: 0, maxWidth: 'none' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {relatedPosts && relatedPosts.length > 0 && (
        <div style={{ marginTop: 20, borderTop: '1px solid var(--border)', paddingTop: 16 }}>
          <p
            style={{
              fontSize: '.75rem',
              color: 'var(--muted)',
              fontWeight: 700,
              marginBottom: 10,
              letterSpacing: '.06em',
              textTransform: 'uppercase',
            }}
          >
            관련 글
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/posts/${p.slug}`}
                  style={{
                    fontSize: '.88rem',
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    lineHeight: 1.5,
                  }}
                >
                  → {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// ── 섹션 렌더러 ──────────────────────────────────────────────────
function renderSection(section, idx, allSections, relatedPosts) {
  switch (section.type) {
    case 'intro':
      return (
        <div
          key={idx}
          className="post-body"
          style={{
            padding: 0,
            maxWidth: 'none',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text)',
          }}
          dangerouslySetInnerHTML={{ __html: section.html }}
        />
      )

    case 'toc':
      return <TocSection key={idx} sections={allSections} />

    case 'ad':
      return <AdSection key={idx} slot={section.slot} format={section.format} />

    case 'h2': {
      const h2Index = allSections.slice(0, idx).filter(s => s.type === 'h2').length
      return (
        <H2Section
          key={idx}
          id={section.id}
          text={section.text}
          paletteIndex={h2Index}
        />
      )
    }

    case 'body':
      return (
        <div
          key={idx}
          className="post-body"
          style={{ padding: 0, maxWidth: 'none' }}
          dangerouslySetInnerHTML={{ __html: section.html }}
        />
      )

    case 'image':
      return (
        <ImageSection
          key={idx}
          src={section.src}
          alt={section.alt}
          caption={section.caption}
        />
      )

    case 'cta':
      return <CtaSection key={idx} href={section.href} text={section.text} />

    case 'ending':
      return (
        <EndingSection
          key={idx}
          html={section.html}
          relatedPosts={relatedPosts}
        />
      )

    default:
      return null
  }
}

// ── getStaticPaths ───────────────────────────────────────────────
export async function getStaticPaths() {
  const paths = posts.map((p) => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

// ── getStaticProps ───────────────────────────────────────────────
export async function getStaticProps({ params }) {
  const { slug } = params
  const meta = posts.find((p) => p.slug === slug)
  if (!meta) return { notFound: true }

  // 포스트 본문 동적 import (서버 사이드 only)
  let postData = null
  try {
    postData = (await import(`../../posts/${meta.id}.js`)).default
  } catch (e) {
    postData = null
  }

  // 관련 글: 같은 카테고리 또는 지역, 자신 제외
  const related = posts
    .filter(
      (p) =>
        p.slug !== slug &&
        (p.category === meta.category || p.region === meta.region)
    )
    .slice(0, 3)
    .map((p) => ({ slug: p.slug, title: p.title }))

  return {
    props: {
      meta,
      sections: postData ? postData.sections : [],
      related,
    },
  }
}

// ── 지역 매핑 ───────────────────────────────────────────────────
const REGION_MAP = {
  samseong:    { name: '삼성역',     path: '/dinner/samseong' },
  jamsil:      { name: '잠실역',     path: '/dinner/jamsil' },
  pangyo:      { name: '판교역',     path: '/pangyo' },
  yeongtong:   { name: '영통역',     path: '/samsungElectronics/yeongtong' },
  mangpo:      { name: '망포역',     path: '/samsungElectronics/mangpo' },
  yeongtongGu: { name: '영통구청',   path: '/samsungElectronics/yeongtongGu' },
}

// ── H2 배경 그라디언트 팔레트 (순환) ─────────────────────────────
const H2_PALETTES = [
  { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff' },
  { bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: '#1a1a22' },
  { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#fff' },
  { bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: '#1a1a22' },
  { bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: '#1a1a22' },
  { bg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', color: '#1a1a22' },
  { bg: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)', color: '#1a1a22' },
  { bg: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', color: '#fff' },
  { bg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', color: '#1a1a22' },
  { bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', color: '#1a1a22' },
]

// ── 페이지 컴포넌트 ──────────────────────────────────────────────
export default function PostPage({ meta, sections, related }) {
  const BASE_URL = 'https://dinner.ambitstock.com'
  const pageUrl = `${BASE_URL}/posts/${meta.slug}`
  const region = REGION_MAP[meta.region] || REGION_MAP.pangyo

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      '@type': 'Organization',
      name: '오늘뭐먹지',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: '오늘뭐먹지',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    ...(meta.thumbnail ? { image: `${BASE_URL}${meta.thumbnail}` } : {}),
    keywords: (meta.tags || []).join(', '),
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: region.name,
        item: `${BASE_URL}${region.path}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: meta.title,
        item: pageUrl,
      },
    ],
  }

  return (
    <Layout
      title={meta.title}
      description={meta.description}
      canonical={pageUrl}
    >
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${meta.title} | 오늘뭐먹지`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={pageUrl} />
        {meta.thumbnail && (
          <meta property="og:image" content={`${BASE_URL}${meta.thumbnail}`} />
        )}
        <meta property="article:published_time" content={meta.date} />
        {(meta.tags || []).map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
      </Head>

      {/* 브레드크럼 헤더 */}
      <div
        style={{
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          padding: '10px 16px',
        }}
      >
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">홈</Link>
            <span>›</span>
            <Link href={region.path}>{region.name}</Link>
            <span>›</span>
            <span style={{ color: 'var(--text)' }}>{meta.title}</span>
          </nav>
        </div>
      </div>

      {/* 포스트 히어로 */}
      <section
        style={{
          padding: '36px 16px 28px',
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          {/* 카테고리 + 날짜 */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              marginBottom: 14,
              flexWrap: 'wrap',
            }}
          >
            {meta.category && (
              <span
                style={{
                  fontSize: '.72rem',
                  padding: '3px 10px',
                  borderRadius: 100,
                  background: 'var(--surface2)',
                  border: '1px solid var(--border)',
                  color: 'var(--primary)',
                  fontWeight: 700,
                  letterSpacing: '.04em',
                }}
              >
                {meta.category.toUpperCase()}
              </span>
            )}
            <time
              dateTime={meta.date}
              style={{ fontSize: '.75rem', color: 'var(--muted)' }}
            >
              {meta.date}
            </time>
            {(meta.tags || []).slice(0, 3).map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>

          {/* 제목 */}
          <h1
            style={{
              fontSize: 'clamp(1.3rem, 4vw, 1.9rem)',
              fontWeight: 900,
              lineHeight: 1.35,
              marginBottom: 12,
            }}
          >
            {meta.title}
          </h1>

          {/* 설명 */}
          <p
            style={{
              fontSize: '.92rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}
          >
            {meta.description}
          </p>
        </div>
      </section>

      {/* 본문 */}
      <main>
        <article
          style={{
            maxWidth: 720,
            margin: '0 auto',
            padding: '28px 16px 48px',
          }}
        >
          {/* 상단 2열 광고 (제목 아래, 본문 시작 전) */}
          {sections.length > 0 && <TopDualAdSection />}

          {sections.length > 0 ? (
            (() => {
              const hasH2 = sections.some(s => s.type === 'h2')

              // h2 없을 때: 1/3, 2/3 지점에 광고 각 1개
              if (!hasH2) {
                const filtered = sections.filter(s => s.type !== 'ad')
                const total = filtered.length
                const pt1 = Math.floor(total / 3)
                const pt2 = Math.floor((total * 2) / 3)
                return filtered.map((section, idx) => {
                  const el = renderSection(section, idx, sections, related)
                  if (idx === pt1) {
                    return (
                      <div key={'no-h2-ad1-' + idx}>
                        {el}
                        <InArticleAdSection />
                      </div>
                    )
                  }
                  if (idx === pt2) {
                    return (
                      <div key={'no-h2-ad2-' + idx}>
                        {el}
                        <InArticleAdSection />
                      </div>
                    )
                  }
                  return el
                })
              }

              // h2 있을 때: h2 2개마다 1개 인라인 광고, 최대 3개
              let h2Count = 0
              let inArticleAdCount = 0
              const MAX_IN_ARTICLE_ADS = 3
              return sections.map((section, idx) => {
                // 기존 포스트 파일의 ad 섹션은 스킵 (렌더러가 자동 처리)
                if (section.type === 'ad') return null
                const el = renderSection(section, idx, sections, related)
                if (section.type === 'h2') {
                  h2Count++
                  if (h2Count % 2 === 0 && inArticleAdCount < MAX_IN_ARTICLE_ADS) {
                    inArticleAdCount++
                    return (
                      <div key={'h2-ad-' + idx}>
                        {el}
                        <InArticleAdSection />
                      </div>
                    )
                  }
                }
                return el
              })
            })()
          ) : (
            <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '48px 0' }}>
              포스트 내용을 불러오지 못했습니다.
            </p>
          )}

          {/* 하단 네비게이션 */}
          <div
            style={{
              marginTop: 40,
              paddingTop: 24,
              borderTop: '1px solid var(--border)',
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
            }}
          >
            <Link href={region.path} className="btn btn-ghost">
              ← {region.name} 맛집 홈
            </Link>
            <Link href={`${region.path}/category/${meta.category || 'meat'}`} className="btn btn-primary">
              {meta.category ? `${meta.category} 맛집 전체보기` : '맛집 전체보기'}
            </Link>
          </div>
        </article>
      </main>
    </Layout>
  )
}
