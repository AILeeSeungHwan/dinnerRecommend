#!/usr/bin/env node
/**
 * menuItems 스키마 마이그레이션: { name, price } → { menuName, price, description }
 *
 * 사용법:
 *   node scripts/migrate-menu-schema.mjs samseong    # 삼성역만
 *   node scripts/migrate-menu-schema.mjs all         # 전 지역
 *   node scripts/migrate-menu-schema.mjs all --dry-run  # 분석만 (파일 수정 X)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const REGIONS = {
  samseong:    'data/samseong.js',
  jamsil:      'data/jamsil.js',
  pangyo:      'data/pangyo.js',
  yeongtong:   'data/yeongtong.js',
  mangpo:      'data/mangpo.js',
  yeongtongGu: 'data/yeongtongGu.js',
}

const DESC_PATTERN = /입니다|메뉴입|드리는|즐기는|만들어진|준비했|묻어있는|볶은|우려낸|넣어|한상차림|맛볼 수|내어드리는|일품입니다|추천드립니다|즐길 수|차려지는|코스$|세트$|한상$/

function migrateMenuItem(item) {
  // 이미 새 스키마
  if ('menuName' in item) {
    return {
      menuName: (item.menuName || '').trim(),
      price: item.price || 0,
      description: (item.description || '').trim()
    }
  }

  const name = (item.name || '').trim()
  const price = item.price || 0

  const isDesc = name.length > 20 || DESC_PATTERN.test(name)
  const cleanName = name.replace(/\d+[,.]?\d*원/g, '').replace(/\d+인\s*[-~]/g, '').trim()

  return {
    menuName: isDesc ? '' : cleanName,
    price,
    description: isDesc ? cleanName : ''
  }
}

async function parseDataFile(filePath) {
  const moduleUrl = 'file://' + filePath
  const mod = await import(moduleUrl)
  const data = mod.default || mod.restaurants
  if (!Array.isArray(data)) throw new Error(`파싱 실패: ${filePath}`)
  return JSON.parse(JSON.stringify(data))
}

function toJsFile(restaurants) {
  const json = JSON.stringify(restaurants, null, 2)
  return `const restaurants = ${json}\n\nexport default restaurants\n`
}

async function main() {
  const args = process.argv.slice(2)
  const target = args[0] || 'all'
  const dryRun = args.includes('--dry-run')

  const regions = target === 'all' ? Object.keys(REGIONS) : [target]

  const report = []

  for (const region of regions) {
    const relPath = REGIONS[region]
    if (!relPath) { console.error(`Unknown region: ${region}`); continue }
    const filePath = path.join(ROOT, relPath)
    if (!fs.existsSync(filePath)) { console.log(`  Skip: ${relPath} not found`); continue }

    console.log(`\n=== ${region} ===`)

    const restaurants = await parseDataFile(filePath)
    let totalItems = 0, migratedItems = 0, emptyMenuName = 0, alreadyNew = 0

    for (const r of restaurants) {
      if (!r.menuItems || r.menuItems.length === 0) continue

      r.menuItems = r.menuItems.map(item => {
        totalItems++
        if ('menuName' in item) {
          alreadyNew++
          return migrateMenuItem(item)
        }
        const migrated = migrateMenuItem(item)
        migratedItems++
        if (!migrated.menuName) emptyMenuName++
        return migrated
      })
    }

    const withMenu = restaurants.filter(r => r.menuItems && r.menuItems.length > 0).length

    console.log(`  총 식당: ${restaurants.length}`)
    console.log(`  menuItems 보유: ${withMenu}`)
    console.log(`  총 메뉴 항목: ${totalItems}`)
    console.log(`  마이그레이션: ${migratedItems} (이미 신스키마: ${alreadyNew})`)
    console.log(`  menuName 비어있음 (재크롤링 필요): ${emptyMenuName}`)
    console.log(`  menuName 확보율: ${totalItems > 0 ? Math.round((totalItems - emptyMenuName) / totalItems * 100) : 0}%`)

    report.push({ region, total: restaurants.length, withMenu, totalItems, migratedItems, emptyMenuName })

    if (!dryRun) {
      // 백업
      const backupDir = path.join(ROOT, 'data', 'backup')
      fs.mkdirSync(backupDir, { recursive: true })
      const backupFile = path.join(backupDir, `${region}_menu-migration_${new Date().toISOString().slice(0,10)}.js`)
      fs.copyFileSync(filePath, backupFile)
      console.log(`  백업: ${backupFile}`)

      // 저장
      fs.writeFileSync(filePath, toJsFile(restaurants), 'utf-8')

      // 구문 검증
      try {
        execSync(`node --check "${filePath}"`, { stdio: 'pipe' })
        console.log(`  구문 검증 통과`)
      } catch (e) {
        console.error(`  구문 검증 실패! 백업에서 복원`)
        fs.copyFileSync(backupFile, filePath)
        console.error(e.stderr?.toString() || e.message)
      }
    } else {
      console.log(`  [dry-run] 파일 수정 안 함`)
    }
  }

  // 전체 리포트
  console.log(`\n${'='.repeat(60)}`)
  console.log(`  전체 마이그레이션 리포트`)
  console.log(`${'='.repeat(60)}`)
  for (const r of report) {
    console.log(`  ${r.region.padEnd(12)} 식당:${String(r.total).padStart(4)} 메뉴보유:${String(r.withMenu).padStart(4)} 항목:${String(r.totalItems).padStart(5)} 빈menuName:${String(r.emptyMenuName).padStart(4)}`)
  }
}

main().catch(e => { console.error(e); process.exit(1) })
