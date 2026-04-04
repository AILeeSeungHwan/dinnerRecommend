import posts from '../../data/posts'
import fs from 'fs'
import path from 'path'

const HOST = 'dinner.ambitstock.com'
const BASE = 'https://' + HOST

// IndexNow key — must match /public/{key}.txt
const INDEXNOW_KEY = '699c79d934824e84b1302ac527943497'

const ENGINES = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://searchadvisor.naver.com/indexnow',
  'https://yandex.com/indexnow',
]

// 허브 페이지 목록
const HUB_PATHS = [
  '/',
  '/pangyo',
  '/dinner/samseong',
  '/dinner/jamsil',
  '/samsungElectronics/yeongtong',
  '/samsungElectronics/mangpo',
  '/samsungElectronics/yeongtongGu',
  '/suji',
]

function buildPostUrl(slug) {
  return BASE + '/posts/' + slug
}

function buildHubUrl(p) {
  return BASE + (p === '/' ? '' : p)
}

function normalizeUrl(u) {
  if (u.startsWith('http')) return u
  return BASE + (u.startsWith('/') ? u : '/' + u)
}

async function submitToEngines(urls) {
  const body = JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: BASE + '/' + INDEXNOW_KEY + '.txt',
    urlList: urls,
  })

  const results = await Promise.allSettled(
    ENGINES.map(async (engineUrl) => {
      const engineName = new URL(engineUrl).hostname
      try {
        const res = await fetch(engineUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body,
        })
        return { name: engineName, ok: res.ok, status: res.status }
      } catch (e) {
        return { name: engineName, ok: false, error: e.message }
      }
    })
  )

  return results.map(r => r.status === 'fulfilled' ? r.value : { name: 'unknown', ok: false, error: r.reason?.message })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // key 파일 자동 생성 (없을 경우)
  try {
    const keyFilePath = path.join(process.cwd(), 'public', INDEXNOW_KEY + '.txt')
    if (!fs.existsSync(keyFilePath)) {
      fs.writeFileSync(keyFilePath, INDEXNOW_KEY, 'utf8')
    }
  } catch (e) {
    // ignore write errors in read-only environments
  }

  const { mode, days, urls: manualUrls } = req.body || {}

  let urlsToSubmit = []

  if (mode === 'all') {
    // 전체: 모든 포스트 + 허브 페이지
    urlsToSubmit = [
      ...posts.map(p => buildPostUrl(p.slug)),
      ...HUB_PATHS.map(buildHubUrl),
    ]
  } else if (mode === 'manual' && Array.isArray(manualUrls) && manualUrls.length > 0) {
    urlsToSubmit = manualUrls.map(normalizeUrl)
  } else {
    // default: recent N days (default 7)
    const daysNum = parseInt(days, 10) || 7
    const cutoff = new Date()
    cutoff.setDate(cutoff.getDate() - daysNum)
    const recentPosts = posts.filter(p => new Date(p.date) >= cutoff)
    urlsToSubmit = [
      ...recentPosts.map(p => buildPostUrl(p.slug)),
      ...HUB_PATHS.map(buildHubUrl),
    ]
  }

  if (urlsToSubmit.length === 0) {
    return res.status(200).json({ message: '제출할 URL이 없습니다.', submitted: 0, engines: [], urls: [] })
  }

  // IndexNow: max 10000 per request; chunk if needed
  const CHUNK = 1000
  const engineResults = []
  for (let i = 0; i < urlsToSubmit.length; i += CHUNK) {
    const chunk = urlsToSubmit.slice(i, i + CHUNK)
    const partial = await submitToEngines(chunk)
    // merge: keep first occurrence per engine
    if (engineResults.length === 0) {
      engineResults.push(...partial)
    }
  }

  return res.status(200).json({
    message: 'IndexNow 제출 완료',
    submitted: urlsToSubmit.length,
    engines: engineResults,
    urls: urlsToSubmit,
  })
}
