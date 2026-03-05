import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function JamsilPage() {
  return (
    <Layout>
      <Head>
        <title>잠실역 맛집 추천 | dinner.ambitstock</title>
        <meta name="description" content="잠실역·롯데타워 주변 맛집 추천 서비스 준비중입니다." />
        <link rel="canonical" href="https://dinner.ambitstock.com/dinner/jamsil" />
      </Head>

      <div className="container" style={{ padding: '80px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>🎡</div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 12 }}>잠실역 맛집</h1>
        <p style={{ color: 'var(--muted)', marginBottom: 32 }}>
          잠실역·롯데타워 주변 맛집 서비스를 준비중입니다.
        </p>
        <Link href="/dinner/samseong" className="btn btn-primary">
          삼성역 맛집 보러가기 →
        </Link>
      </div>
    </Layout>
  )
}
