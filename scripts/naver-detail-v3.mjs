#!/usr/bin/env node
/**
 * 네이버 플레이스 상세 수집 v3 — 텍스트 파싱 방식
 * pcmap.place.naver.com/restaurant/{id}/home 방문 → innerText 파싱
 * + 메뉴 탭 클릭 → 메뉴 추출
 */

import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, 'naver-data')
const CHECKPOINT_FILE = path.join(OUT_DIR, 'samseong-browser-checkpoint.json')
const FINAL_FILE = path.join(OUT_DIR, 'samseong-browser.json')
const PROGRESS_FILE = path.join(OUT_DIR, 'detail-v3-done.json')

let data = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf-8'))
console.log(`로드: ${data.restaurants.length}개`)

let done = new Set()
try {
  done = new Set(JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8')))
  console.log(`이미 완료: ${done.size}개`)
} catch (e) {}

function save() {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify([...done]))
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify({
    restaurants: data.restaurants,
    completedQueries: data.completedQueries,
    timestamp: new Date().toISOString()
  }, null, 2))
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')

  // 이미지/폰트 차단
  await page.setRequestInterception(true)
  page.on('request', req => {
    const t = req.resourceType()
    if (['image', 'font', 'media'].includes(t)) req.abort()
    else req.continue()
  })

  const need = data.restaurants.filter(r => r.naverPlaceId && !done.has(r.naverPlaceId))
  console.log(`상세 필요: ${need.length}개\n`)

  let processed = 0, gotCnt = 0, gotMenu = 0

  for (const r of need) {
    processed++
    if (processed % 10 === 0) {
      console.log(`진행: ${processed}/${need.length} (cnt: ${gotCnt}, menu: ${gotMenu})`)
      save()
    }

    try {
      // 홈 탭 방문
      await page.goto(`https://pcmap.place.naver.com/restaurant/${r.naverPlaceId}/home`, {
        waitUntil: 'networkidle2', timeout: 15000
      }).catch(() => {})
      await sleep(2500)

      const homeInfo = await page.evaluate(() => {
        const text = document.body?.innerText || ''
        const res = { cnt: 0, blogCnt: 0, hours: '', tel: '', parking: false, reservation: false }

        const reviewMatch = text.match(/방문자\s*리뷰\s*([\d,]+)/)
        if (reviewMatch) res.cnt = parseInt(reviewMatch[1].replace(/,/g, ''))

        const blogMatch = text.match(/블로그\s*리뷰\s*([\d,]+)/)
        if (blogMatch) res.blogCnt = parseInt(blogMatch[1].replace(/,/g, ''))

        const telMatch = text.match(/(0\d{1,2}-\d{3,4}-\d{4})/)
        if (telMatch) res.tel = telMatch[1]

        // 영업시간
        const hoursMatch = text.match(/(\d{1,2}:\d{2}에 영업 시작)|(\d{1,2}:\d{2}에 영업 종료)/)
        if (hoursMatch) res.hours = hoursMatch[0]

        // 편의시설
        const facMatch = text.match(/편의\n(.+)/)
        if (facMatch) {
          const facs = facMatch[1]
          res.parking = /주차/.test(facs)
          res.reservation = /예약/.test(facs)
        }

        return res
      }).catch(() => ({}))

      if (homeInfo.cnt > 0) { r.cnt = homeInfo.cnt; gotCnt++ }
      if (homeInfo.blogCnt > 0) r.naverBlogCnt = homeInfo.blogCnt
      if (homeInfo.tel && homeInfo.tel.length > 5) r.tel = homeInfo.tel
      if (homeInfo.hours) r.hours = homeInfo.hours
      if (homeInfo.parking) r.parking = true
      if (homeInfo.reservation) r.reservation = true

      // 메뉴 탭 클릭
      await page.goto(`https://pcmap.place.naver.com/restaurant/${r.naverPlaceId}/menu/list`, {
        waitUntil: 'networkidle2', timeout: 10000
      }).catch(() => {})
      await sleep(1500)

      const menuInfo = await page.evaluate(() => {
        const text = document.body?.innerText || ''
        const menus = []

        // "메뉴명\n가격원" 패턴 추출
        const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
        for (let i = 0; i < lines.length - 1; i++) {
          const name = lines[i]
          const next = lines[i + 1]
          // 가격 패턴: "53,000원" or "15000원"
          const priceMatch = next.match(/^([\d,]+)원$/)
          if (priceMatch && name.length >= 2 && name.length <= 30 && !/^(대표|인기|추천|메뉴|홈|소식|리뷰|사진|정보)$/.test(name)) {
            menus.push({
              name,
              price: parseInt(priceMatch[1].replace(/,/g, ''))
            })
          }
        }
        return menus
      }).catch(() => [])

      if (menuInfo.length > 0) {
        r.menuItems = menuInfo.slice(0, 10)
        gotMenu++

        // 가격대 추정
        const prices = menuInfo.map(m => m.price).filter(p => p > 0)
        if (prices.length >= 2) {
          const min = Math.min(...prices)
          const max = Math.max(...prices)
          r.priceRange = `${min}~${max}`
        }
      }

      // 리뷰 탭
      await page.goto(`https://pcmap.place.naver.com/restaurant/${r.naverPlaceId}/review/visitor`, {
        waitUntil: 'networkidle2', timeout: 10000
      }).catch(() => {})
      await sleep(1500)

      const reviews = await page.evaluate(() => {
        const rvEls = document.querySelectorAll('[class*="review"] [class*="text"], [class*="zPfVt"], [class*="pui__vn15t2"]')
        if (rvEls.length > 0) {
          return Array.from(rvEls).slice(0, 5).map(el => el.textContent?.trim()).filter(t => t && t.length > 10)
        }
        // 대안: innerText에서 추출
        const text = document.body?.innerText || ''
        const lines = text.split('\n').filter(l => l.trim().length > 20 && l.trim().length < 200)
        // 리뷰는 보통 긴 텍스트
        return lines.slice(0, 5)
      }).catch(() => [])

      if (reviews.length > 0) {
        r.rv = reviews.slice(0, 5).map(rv => rv.slice(0, 200))
      }

      // 태그 업데이트
      const allText = [r.name, ...(r.categories || []), ...r.rv].join(' ')
      if (/혼밥|1인|혼자/.test(allText) && !r.tags?.includes('혼밥가능')) r.tags.push('혼밥가능')
      if (/가성비|저렴|착한/.test(allText) && !r.tags?.includes('가성비')) r.tags.push('가성비')
      if (/점심|런치/.test(allText) && !r.tags?.includes('점심추천')) r.tags.push('점심추천')
      if (r.parking && !r.tags?.includes('주차가능')) r.tags.push('주차가능')
      if (/단체|회식|룸/.test(allText) && !r.tags?.includes('단체가능')) r.tags.push('단체가능')
      if (/데이트|분위기|커플/.test(allText) && !r.tags?.includes('데이트')) r.tags.push('데이트')
      if (r.cnt >= 500 && !r.tags?.includes('리뷰많음')) r.tags.push('리뷰많음')
      if (/웨이팅|줄서/.test(allText) && !r.tags?.includes('웨이팅맛집')) r.tags.push('웨이팅맛집')

      done.add(r.naverPlaceId)

      // 처음 3개 디버그 출력
      if (processed <= 3) {
        console.log(`  [${r.name}] cnt=${r.cnt}, menus=${r.menuItems?.length || 0}, rv=${r.rv?.length || 0}, tel=${r.tel}`)
      }

      await sleep(1500 + Math.random() * 1000)
    } catch (e) {
      done.add(r.naverPlaceId)
      await sleep(2000)
    }
  }

  await browser.close()
  save()

  // 최종 파일
  let existingNames = new Set()
  try {
    const raw = fs.readFileSync('/tmp/samseong_names.json', 'utf-8')
    existingNames = new Set(JSON.parse(raw).map(n => n.trim().toLowerCase().replace(/\s+/g, '')))
  } catch (e) {}

  const results = data.restaurants.filter(r =>
    r.name && r.name.length >= 2 && !existingNames.has(r.name.trim().toLowerCase().replace(/\s+/g, ''))
  )
  fs.writeFileSync(FINAL_FILE, JSON.stringify(results, null, 2))

  console.log(`\n✅ 완료!`)
  console.log(`   총: ${results.length}`)
  console.log(`   리뷰수 있음: ${results.filter(r => r.cnt > 0).length}`)
  console.log(`   메뉴 있음: ${results.filter(r => r.menuItems?.length).length}`)
  console.log(`   리뷰 있음: ${results.filter(r => r.rv?.length).length}`)
  console.log(`   이미지 있음: ${results.filter(r => r.imageUrl).length}`)
}

main().catch(e => { console.error(e); save(); process.exit(1) })
