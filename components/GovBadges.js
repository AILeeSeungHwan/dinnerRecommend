import { operatingYears } from '../lib/govData'

const GRADE_LABEL = { very_excellent:'매우 우수', excellent:'우수', good:'좋음' }

export default function GovBadges({ govData }) {
  if (!govData) return null
  const years = operatingYears(govData.license_date)
  const badges = []
  if (years != null && years >= 0 && govData.license_date) {
    const label = years >= 10
      ? `${years}년 노포 (${govData.license_date.slice(0,4)}년~)`
      : `${govData.license_date.slice(0,4)}년부터 영업`
    badges.push({ icon:'🏛', text:label, color:'#5C6BC0' })
  }
  if (govData.business_status === 'active') {
    badges.push({ icon:'✓', text:'식약처 등록 영업소', color:'#43A047' })
  }
  if (govData.hygiene_grade) {
    badges.push({ icon:'✨', text:`위생등급 ${GRADE_LABEL[govData.hygiene_grade] || govData.hygiene_grade}`, color:'#FB8C00' })
  }
  if (!badges.length) return null
  return (
    <div style={{ display:'flex', flexWrap:'wrap', gap:6, margin:'10px 0 16px' }}>
      {badges.map((b, i) => (
        <span key={i} style={{
          display:'inline-flex', alignItems:'center', gap:5,
          padding:'5px 11px', borderRadius:100,
          background: b.color + '22', border: `1px solid ${b.color}55`,
          color: b.color, fontSize:'.78rem', fontWeight:700,
        }}>{b.icon} {b.text}</span>
      ))}
    </div>
  )
}

export function GovSourceFooter({ govData }) {
  if (!govData) return null
  const date = (govData.last_matched_at || '').slice(0,10)
  return (
    <div style={{
      marginTop:32, padding:'14px 16px',
      background:'var(--surface)', border:'1px solid var(--border)', borderRadius:10,
      fontSize:'.74rem', color:'var(--muted)', lineHeight:1.7,
    }}>
      <div style={{ fontWeight:700, marginBottom:6, color:'var(--text)' }}>📋 데이터 출처</div>
      {govData.business_status && <div>· 행정안전부 전국일반음식점표준데이터 (영업 상태·인허가일자)</div>}
      {govData.tour_contentid && <div>· 한국관광공사 국문 관광정보 서비스 (소개·사진)</div>}
      {govData.hygiene_grade && <div>· 식품의약품안전처 음식점 위생등급</div>}
      {date && <div style={{ marginTop:6 }}>마지막 동기화: {date}</div>}
    </div>
  )
}
