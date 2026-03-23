import Layout from '../components/Layout'
import Link from 'next/link'
import samseongData from '../data/samseong'
import jamsilData from '../data/jamsil'
import yeongtongData from '../data/yeongtong'
import mangpoData from '../data/mangpo'
import yeongtongGuData from '../data/yeongtongGu'
import pangyoData from '../data/pangyo'
import posts from '../data/posts'

const stations = [
  {
    slug:'samseong', name:'삼성역', emoji:'🏙️',
    desc:'코엑스·파르나스·테헤란로',
    count: samseongData.length, ready:true,
  },
  {
    slug:'jamsil', name:'잠실역', emoji:'🎡',
    desc:'방이동·석촌호수·롯데타워',
    count: jamsilData.length, ready:true,
  },
  {
    slug:'pangyo', name:'판교역', emoji:'🏢',
    desc:'판교테크노밸리·백현동·아브뉴프랑',
    count: pangyoData.length, ready:true, isPangyo:true,
  },
  {
    slug:'gangnam', name:'강남역', emoji:'🌆',
    desc:'강남역·신논현·먹자골목',
    count:null, ready:false,
  },
]

// 삼성전자 임직원 지역
const seStations = [
  {
    slug:'yeongtong', name:'영통역', emoji:'🚇',
    desc:'삼성전자 DS · 영통 먹자골목',
    count: yeongtongData.length, ready:true,
  },
  {
    slug:'mangpo', name:'망포역', emoji:'🌿',
    desc:'삼성전자 생활가전 · 망포 로컬',
    count: mangpoData.length, ready:true,
  },
  {
    slug:'yeongtongGu', name:'영통구청', emoji:'🏢',
    desc:'매탄동 · 삼성전기 · 구청 인근',
    count: yeongtongGuData.length, ready:true,
  },
]

const CATS = [
  {emoji:'🥣', name:'국밥·해장', slug:'gukbap'},
  {emoji:'🥩', name:'고기·한우', slug:'meat'},
  {emoji:'🏮', name:'이자카야',  slug:'izakaya'},
  {emoji:'🍜', name:'중식·훠궈', slug:'chinese'},
  {emoji:'🍝', name:'양식·스테이크', slug:'western'},
  {emoji:'🎉', name:'회식·단체', slug:'group'},
]

export default function Home() {
  const totalCount = samseongData.length + jamsilData.length + yeongtongData.length + mangpoData.length + yeongtongGuData.length + pangyoData.length
  const seTotal = yeongtongData.length + mangpoData.length + yeongtongGuData.length

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://dinner.ambitstock.com/#website",
        "name": "오늘뭐먹지",
        "alternateName": "dinner.ambitstock.com",
        "url": "https://dinner.ambitstock.com",
        "description": `삼성역·잠실·판교·영통 맛집을 AI가 날씨·기분·예산에 맞게 3초 만에 추천합니다. ${totalCount}개+ 검증된 식당 데이터 기반.`,
        "inLanguage": "ko-KR",
        "publisher": { "@id": "https://dinner.ambitstock.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://dinner.ambitstock.com/pangyo?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://dinner.ambitstock.com/#organization",
        "name": "오늘뭐먹지",
        "url": "https://dinner.ambitstock.com",
        "description": "AI 기반 맛집 추천 서비스. 날씨·기분·예산·카테고리를 기반으로 최적의 식당을 추천합니다.",
        "sameAs": [],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://dinner.ambitstock.com/#main",
        "name": "오늘뭐먹지 — AI 맛집 추천",
        "url": "https://dinner.ambitstock.com",
        "isPartOf": { "@id": "https://dinner.ambitstock.com/#website" },
        "about": {
          "@type": "Thing",
          "name": "AI 맛집 추천",
          "description": `삼성역·잠실·판교·영통·망포·영통구청 6개 지역 ${totalCount}개+ 식당 AI 추천 서비스`
        },
        "mainEntity": {
          "@type": "ItemList",
          "name": "지원 지역",
          "numberOfItems": 6,
          "itemListElement": [
            { "@type":"ListItem", "position":1, "name":"삼성역 맛집", "url":"https://dinner.ambitstock.com/dinner/samseong" },
            { "@type":"ListItem", "position":2, "name":"잠실 맛집", "url":"https://dinner.ambitstock.com/dinner/jamsil" },
            { "@type":"ListItem", "position":3, "name":"판교 맛집", "url":"https://dinner.ambitstock.com/pangyo" },
            { "@type":"ListItem", "position":4, "name":"영통 맛집", "url":"https://dinner.ambitstock.com/samsungElectronics/yeongtong" },
            { "@type":"ListItem", "position":5, "name":"망포 맛집", "url":"https://dinner.ambitstock.com/samsungElectronics/mangpo" },
            { "@type":"ListItem", "position":6, "name":"영통구청 맛집", "url":"https://dinner.ambitstock.com/samsungElectronics/yeongtongGu" },
          ]
        }
      }
    ]
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "오늘뭐먹지는 어떤 서비스인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "오늘뭐먹지는 삼성역·잠실역·판교역·영통·망포·영통구청 인근 맛집을 AI가 날씨·기분·예산에 맞게 추천해주는 서비스입니다. 현재 6개 지역 맛집 데이터를 바탕으로 최적의 식당 3곳을 3초 안에 골라드립니다."
        }
      },
      {
        "@type": "Question",
        "name": "AI 맛집 추천은 어떻게 작동하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "오늘 날씨, 기분, 예산, 원하는 메뉴 등을 자유롭게 입력하면 AI가 해당 조건에 맞는 식당 3곳을 추천합니다. 회식·혼밥·데이트·접대 등 상황도 반영되며, 평점·리뷰 수·가격대 데이터를 종합해 결과를 제시합니다."
        }
      },
      {
        "@type": "Question",
        "name": "어떤 지역을 지원하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "현재 삼성역(코엑스·강남), 잠실역(방이동·석촌호수), 판교역(테크노밸리·백현동), 영통역(삼성전자 DS), 망포역(삼성전자 생활가전), 영통구청(매탄동·삼성전기) 6개 지역을 지원합니다."
        }
      },
      {
        "@type": "Question",
        "name": "랜덤 뽑기 기능은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "카테고리 페이지에서 '랜덤 뽑기' 버튼을 누르면 해당 카테고리 식당 중 3곳을 무작위로 추천합니다. 오늘 뭐 먹을지 결정하기 어려울 때 주사위를 굴리듯 빠르게 후보를 선정할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "회식 장소 추천도 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 각 지역별 '회식·단체' 카테고리를 이용하면 단체석·룸이 있는 회식 장소를 별도로 확인할 수 있습니다. AI 추천 시 '회식', '단체', '룸 있는 곳' 등을 입력하면 회식에 적합한 식당만 필터링해 추천합니다."
        }
      }
    ]
  }

  return (
    <Layout
      title="오늘뭐먹지 | AI 맛집 추천 - 삼성역·잠실·판교·영통"
      description="삼성역·잠실·판교·영통 맛집을 AI가 날씨·기분·예산에 맞게 3초 만에 추천합니다."
      canonical="https://dinner.ambitstock.com"
      jsonLd={websiteJsonLd}
      extraJsonLd={faqJsonLd}
    >
      {/* 히어로 */}
      <section style={{ padding:'44px 16px 32px', textAlign:'center' }}>
        <h1 style={{ fontSize:'clamp(1.7rem,6vw,2.8rem)', fontWeight:900, lineHeight:1.15, marginBottom:12 }}>
          오늘 뭐 먹지?<br />
          <span style={{ color:'var(--primary)' }}>3초면 끝</span>
        </h1>
        <p style={{ fontSize:'.9rem', color:'var(--muted)', marginBottom:28, lineHeight:1.6 }}>
          날씨·기분·예산만 말하면 AI가 딱 맞는 식당 TOP3 추천<br />
          <span style={{ fontSize:'.8rem' }}>삼성역 {samseongData.length} · 잠실 {jamsilData.length} · 판교 {pangyoData.length} · 영통 {seTotal}개 = <strong style={{ color:'var(--text)' }}>{totalCount}개+</strong> 식당</span>
        </p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/dinner/samseong">
            <button style={{ padding:'13px 24px', borderRadius:12, background:'var(--primary)', color:'#fff', border:'none', fontSize:'.95rem', fontWeight:700, cursor:'pointer' }}>
              🏙️ 삼성역 맛집 찾기
            </button>
          </Link>
          <Link href="/dinner/jamsil">
            <button style={{ padding:'13px 24px', borderRadius:12, background:'var(--surface)', color:'var(--text)', border:'1px solid var(--border)', fontSize:'.95rem', fontWeight:700, cursor:'pointer' }}>
              🎡 잠실 맛집 찾기
            </button>
          </Link>
        </div>
      </section>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'0 16px 56px' }}>

        {/* 지역 선택 */}
        <h2 style={{ fontSize:'.82rem', fontWeight:700, color:'var(--muted)', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.06em' }}>📍 지역 선택</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(190px, 1fr))', gap:12, marginBottom:40 }}>
          {stations.map(s => (
            <div key={s.slug}>
              {s.ready ? (
                <Link href={s.isPangyo ? `/pangyo` : `/dinner/${s.slug}`} style={{ textDecoration:'none' }}>
                  <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:'18px 16px', cursor:'pointer', position:'relative', overflow:'hidden', transition:'border-color .15s' }}>
                    <div style={{ fontSize:'1.8rem', marginBottom:6 }}>{s.emoji}</div>
                    <div style={{ fontSize:'1rem', fontWeight:800, marginBottom:3 }}>{s.name}</div>
                    <div style={{ fontSize:'.78rem', color:'var(--muted)', marginBottom:10 }}>{s.desc}</div>
                    <span style={{ fontSize:'.7rem', background:'#1a2a1a', color:'#6fcf6f', padding:'2px 8px', borderRadius:100, border:'1px solid #2a4a2a' }}>
                      식당 {s.count}개+
                    </span>
                    <div style={{ position:'absolute', top:12, right:12, background:'var(--primary)', color:'#fff', fontSize:'.6rem', padding:'2px 7px', borderRadius:100, fontWeight:700 }}>
                      LIVE
                    </div>
                  </div>
                </Link>
              ) : (
                <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:'18px 16px', opacity:0.4 }}>
                  <div style={{ fontSize:'1.8rem', marginBottom:6 }}>{s.emoji}</div>
                  <div style={{ fontSize:'1rem', fontWeight:800, marginBottom:3 }}>{s.name}</div>
                  <div style={{ fontSize:'.78rem', color:'var(--muted)', marginBottom:10 }}>{s.desc}</div>
                  <span style={{ fontSize:'.7rem', color:'var(--muted)', background:'var(--surface2)', padding:'2px 8px', borderRadius:100, border:'1px solid var(--border)' }}>준비중</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 삼성전자 회식장소 맛집 */}
        <Link href="/samsungElectronics" style={{ textDecoration:'none' }}>
          <h2 style={{ fontSize:'.82rem', fontWeight:700, color:'var(--muted)', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.06em', cursor:'pointer', display:'inline-block' }}>🏭 삼성전자 회식장소 맛집 <span style={{ fontSize:'.7rem', opacity:.6 }}>→</span></h2>
        </Link>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:10, marginBottom:40 }}>
          {seStations.map(s => (
            <Link key={s.slug} href={`/samsungElectronics/${s.slug}`} style={{ textDecoration:'none' }}>
              <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:'16px 12px', cursor:'pointer', position:'relative', overflow:'hidden' }}>
                <div style={{ fontSize:'1.6rem', marginBottom:5 }}>{s.emoji}</div>
                <div style={{ fontSize:'.92rem', fontWeight:800, marginBottom:3 }}>{s.name}</div>
                <div style={{ fontSize:'.72rem', color:'var(--muted)', marginBottom:10, lineHeight:1.4 }}>{s.desc}</div>
                <span style={{ fontSize:'.68rem', background:'#1a2a2a', color:'#6fcfcf', padding:'2px 8px', borderRadius:100, border:'1px solid #2a4a4a', whiteSpace:'nowrap' }}>
                  식당 {s.count}개+
                </span>
                <div style={{ position:'absolute', top:10, right:10, background:'#1e3a5f', color:'#7eb8f7', fontSize:'.58rem', padding:'2px 6px', borderRadius:100, fontWeight:700 }}>
                  SE
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 카테고리 (삼성역 기준) */}
        <h2 style={{ fontSize:'.82rem', fontWeight:700, color:'var(--muted)', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.06em' }}>🍽️ 카테고리별 맛집</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:10, marginBottom:40 }}>
          {CATS.map(cat => (
            <Link href={`/dinner/samseong/category/${cat.slug}`} key={cat.slug} style={{ textDecoration:'none' }}>
              <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 10px', textAlign:'center', cursor:'pointer' }}>
                <div style={{ fontSize:'1.6rem', marginBottom:5 }}>{cat.emoji}</div>
                <div style={{ fontSize:'.78rem', fontWeight:600 }}>{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* 최신 가이드 */}
        <h2 style={{ fontSize:'.82rem', fontWeight:700, color:'var(--muted)', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.06em' }}>📝 최신 맛집 가이드</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:40 }}>
          {posts.map(p => (
            <Link key={p.slug} href={`/posts/${p.slug}`} style={{ textDecoration:'none' }}>
              <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 18px', cursor:'pointer', transition:'border-color .15s' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6 }}>
                  <span style={{ fontSize:'.92rem', fontWeight:700, color:'var(--text)' }}>{p.title}</span>
                  <span style={{ fontSize:'.68rem', color:'var(--muted)', whiteSpace:'nowrap', marginLeft:12 }}>{p.date}</span>
                </div>
                <p style={{ fontSize:'.78rem', color:'var(--muted)', margin:0, lineHeight:1.5 }}>{p.description}</p>
                <div style={{ display:'flex', gap:6, marginTop:8, flexWrap:'wrap' }}>
                  {p.tags.slice(0,3).map(t => (
                    <span key={t} style={{ fontSize:'.65rem', padding:'2px 8px', borderRadius:100, background:'rgba(99,102,241,.1)', border:'1px solid rgba(99,102,241,.25)', color:'#818cf8' }}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO 텍스트 */}
        <article style={{ padding:'28px 20px', background:'var(--surface)', borderRadius:14, border:'1px solid var(--border)' }}>
          <h2 style={{ fontSize:'1rem', fontWeight:800, marginBottom:14 }}>강남·판교·영통 맛집 추천, AI로 3초 만에</h2>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:12 }}>
            <strong>오늘뭐먹지</strong>는 삼성역·잠실역·판교역·영통·망포·영통구청 주변 맛집 {totalCount}개를 AI가 즉시 추천하는 서비스입니다. 오늘 뭐 먹지 고민될 때, 날씨·기분·예산만 입력하면 딱 맞는 식당 3곳을 바로 알려드립니다. 회식·데이트·혼밥·접대 등 상황도 자유롭게 입력하면 AI가 상황에 맞는 식당을 필터링해 제안합니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:12 }}>
            <strong>삼성역·코엑스</strong> 주변은 국밥·한우·이자카야·중식·훠궈·스테이크 등 {samseongData.length}개 식당을 엄선했습니다. 코엑스몰 내부부터 테헤란로 이면도로, 봉은사로 골목까지 다양한 선택지가 있으며, 4번출구 근처 맛집 필터로 대치동 방향 식당도 별도로 확인할 수 있습니다. 강남 비즈니스 상권 특성상 접대용 개인실 레스토랑과 오마카세도 다수 포함되어 있습니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:12 }}>
            <strong>잠실·방이동</strong>은 곱창·삼겹살 로컬 골목부터 석촌호수 뷰 레스토랑·송리단길 이탈리안·롯데타워 오마카세까지 {jamsilData.length}개 식당을 담았습니다. 방이동 먹자골목은 서울 동남권에서 손꼽히는 로컬 식당 밀집 구역으로, 직장인 회식과 가족 모임 수요를 동시에 충족합니다. 석촌호수 봄 벚꽃 시즌에는 뷰 레스토랑 예약이 빠르게 채워지므로 미리 계획하세요.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:12 }}>
            <strong>판교역·테크노밸리</strong>는 IT·바이오·의료기기 직장인을 위한 맛집 {pangyoData.length}개를 담았습니다. 알파돔시티 지하 가성비 점심부터 아브뉴프랑 프리미엄 레스토랑까지 가격대 폭이 넓습니다. 백현동 카페거리와 현대백화점 판교점 인근에는 데이트·접대에 어울리는 분위기 좋은 식당이 집중되어 있습니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:12 }}>
            <strong>영통·망포·영통구청</strong>은 삼성전자 임직원 회식장소 맛집 특화 서비스입니다. DS사업부(영통역), 생활가전사업부(망포역), 삼성전기·매탄캠퍼스(영통구청) 세 구역을 모두 커버하며 {seTotal}개 식당을 AI가 골라드립니다. 강남 대비 가격이 낮고 접근성이 좋아 협력사 방문 접대 자리로도 활용도가 높습니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:12 }}>
            <strong>카테고리별 맛집 가이드</strong>도 제공합니다. 고기구이·국밥·이자카야·일식·중식·양식·치킨·회식·데이트·가성비·접대·한식 12개 카테고리로 세분화되어 있으며, 각 카테고리 페이지에서 지역 특성을 반영한 상세 가이드를 확인할 수 있습니다. 상황·가격대·상권별 선택 기준이 필요할 때 카테고리 가이드가 도움이 됩니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:12 }}>
            <strong>랜덤 뽑기 기능</strong>을 이용하면 결정 장애 없이 오늘 식당을 정할 수 있습니다. 원하는 카테고리 페이지에서 주사위 버튼을 누르면 해당 카테고리 식당 중 3곳이 무작위로 추천됩니다. AI 추천과 랜덤 뽑기 두 가지 방식을 상황에 따라 선택할 수 있습니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8, marginBottom:12 }}>
            오늘뭐먹지는 삼성역·잠실·판교·영통 맛집 외에도 앞으로 강남역·선릉역·역삼역 등 테헤란로 전체 구간으로 서비스를 확장할 예정입니다. 현재 지원 지역 내 식당 데이터는 꾸준히 업데이트되며, 새로 오픈한 식당이나 폐업 정보도 반영하기 위해 주기적으로 검토합니다.
          </p>
          <p style={{ color:'var(--muted)', fontSize:'.86rem', lineHeight:1.8 }}>
            지역을 선택한 뒤 날씨·기분·예산을 자유롭게 입력하면 AI가 3초 안에 지금 상황에 딱 맞는 식당 3곳을 골라드립니다. 국밥부터 오마카세까지, 혼밥부터 30인 단체 회식까지 모두 커버하는 <strong>오늘뭐먹지</strong>를 지금 바로 이용해보세요.
          </p>
        </article>
      </div>
    </Layout>
  )
}
