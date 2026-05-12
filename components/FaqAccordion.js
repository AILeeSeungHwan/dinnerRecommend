import { useState } from 'react'

/**
 * FaqAccordion — 한 번에 하나만 열리는 아코디언
 * Props:
 *   items: [[question, answer], ...]
 */
export default function FaqAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(-1)
  if (!items?.length) return null
  return (
    <div>
      {items.map(([q, a], i) => {
        const open = i === openIdx
        return (
          <div key={i} style={{ marginBottom:10, background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, overflow:'hidden' }}>
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : i)}
              style={{
                width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center',
                padding:'14px 16px', background:'transparent', border:'none',
                cursor:'pointer', textAlign:'left', color:'var(--text)',
                fontWeight:700, fontSize:'.92rem', lineHeight:1.4,
              }}
              aria-expanded={open}
            >
              <span>Q. {q}</span>
              <span style={{
                fontSize:'.85rem', color:'var(--muted)', marginLeft:10, flexShrink:0,
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.2s',
              }}>▾</span>
            </button>
            {open && (
              <div style={{ padding:'4px 16px 16px', fontSize:'.88rem', color:'var(--muted)', lineHeight:1.7, borderTop:'1px solid var(--border)' }}>
                <div style={{ paddingTop:12 }}>A. {a}</div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
