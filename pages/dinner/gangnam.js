import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function GangnamPage() {
  return (
    <Layout>
      <Head>
        <title>강남역 맛집 추천 | dinner.ambitstock</title>
        <meta name="description" content="강남역 맛집 추천 서비스 준비중입니다. 강남역 주변 국밥, 이자카야, 고기집, 이탈리안 등 다양한 식당 정보를 곧 제공합니다." />
        <link rel="canonical" href="https://dinner.ambitstock.com/dinner/gangnam" />
      </Head>

      <div className="container" style={{ padding: '80px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>🌆</div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 12 }}>강남역 맛집</h1>
        <p style={{ color: 'var(--muted)', marginBottom: 32 }}>
          강남역 맛집 데이터베이스를 준비중입니다.<br />
          현재는 삼성역 맛집 서비스를 이용하실 수 있습니다.
        </p>
        <Link href="/dinner/samseong" className="btn btn-primary">
          삼성역 맛집 보러가기 →
        </Link>
      </div>
    </Layout>
  )
}
