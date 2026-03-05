import Layout from '../../components/Layout'
import Link from 'next/link'
import Head from 'next/head'

export default function GangnamPage() {
  return (
    <Layout title="강남역 맛집" description="강남역 맛집 추천 서비스 준비중입니다.">
      <Head><link rel="canonical" href="https://gangnamwhat.com/dinner/gangnam" /></Head>
      <div style={{ maxWidth:500, margin:'0 auto', padding:'80px 16px', textAlign:'center' }}>
        <div style={{ fontSize:'3.5rem', marginBottom:14 }}>🌆</div>
        <h1 style={{ fontSize:'1.6rem', fontWeight:900, marginBottom:10 }}>강남역 맛집</h1>
        <p style={{ color:'var(--muted)', marginBottom:28, lineHeight:1.7 }}>
          강남역 맛집 데이터베이스를 준비중입니다.<br />지금은 삼성역 맛집을 이용해주세요.
        </p>
        <Link href="/dinner/samseong">
          <button style={{ padding:'12px 24px', borderRadius:12, background:'var(--primary)', color:'#fff', border:'none', fontSize:'.95rem', fontWeight:700, cursor:'pointer' }}>
            삼성역 맛집 보러가기 →
          </button>
        </Link>
      </div>
    </Layout>
  )
}
