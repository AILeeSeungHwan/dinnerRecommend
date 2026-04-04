/**
 * 데이터 파일 구조 검증 스크립트
 * 사용법: node scripts/validate-data.mjs
 * 
 * 검증 항목:
 *   - export default 중복 여부
 *   - 배열 [ ] 정상 닫힘 여부
 *   - trailing comma 여부
 *   - 각 파일 식당 수 출력
 */

import fs from 'fs'

const FILES = [
  'data/samseong.js',
  'data/jamsil.js',
  'data/yeongtong.js',
  'data/mangpo.js',
  'data/yeongtongGu.js',
]

let hasError = false

for (const file of FILES) {
  if (!fs.existsSync(file)) { console.log(`⏭️  ${file} 없음`); continue }
  
  const src = fs.readFileSync(file, 'utf-8')
  const errors = []

  // 1. export default 중복
  const exportCount = (src.match(/export default restaurants/g) || []).length
  if (exportCount !== 1) errors.push(`export default ${exportCount}회 (1회여야 함)`)

  // 2. 배열 브래킷 밸런스
  const opens  = (src.match(/\[/g) || []).length
  const closes = (src.match(/\]/g) || []).length
  if (opens !== closes) errors.push(`[ ${opens}개, ] ${closes}개 — 불일치`)

  // 3. 중괄호 밸런스
  const obraces = (src.match(/\{/g) || []).length
  const cbraces = (src.match(/\}/g) || []).length
  if (obraces !== cbraces) errors.push(`{ ${obraces}개, } ${cbraces}개 — 불일치`)

  // 4. 배열 끝이 ] 인지 (export default 직전)
  const trimmed = src.replace(/export default restaurants[\s\n]*/g, '').trimEnd()
  if (!trimmed.endsWith(']')) errors.push(`배열이 ]로 끝나지 않음: "${trimmed.slice(-30)}"`)

  // 5. trailing comma (], } 앞에 ,)
  if (/,\s*\]/.test(src)) errors.push('trailing comma before ]')
  if (/,\s*\n\]\s*\n/.test(src)) errors.push('trailing comma before newline ]')

  // 식당 수
  const count = (src.match(/^\s*name:/mg) || []).length

  if (errors.length === 0) {
    console.log(`✅ ${file.padEnd(25)} ${count}개`)
  } else {
    hasError = true
    console.log(`❌ ${file}`)
    errors.forEach(e => console.log(`   └─ ${e}`))
  }
}

if (hasError) {
  console.log('\n⚠️  오류가 있는 파일을 수정 후 재배포하세요.')
  process.exit(1)
} else {
  console.log('\n🎉 모든 파일 정상')
}
