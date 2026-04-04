/**
 * fillTags.js
 * tags가 2개 미만인 식당에 AI 룰 기반으로 태그를 자동 추가한다.
 * 한 줄 형식(samseong): tags: ["a", "b"]
 * 여러 줄 형식(pangyo 등): "tags": [\n  "a",\n  "b"\n]
 * 두 형식 모두 처리한다.
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const TARGET_FILES = [
  'samseong.js',
  'jamsil.js',
  'pangyo.js',
  'yeongtong.js',
  'mangpo.js',
  'yeongtongGu.js',
];

// ── 룰 정의 ─────────────────────────────────────────────────────────────────

const NAME_RULES = [
  { keywords: ['국밥', '해장', '설렁탕', '곰탕', '순대'], tags: ['해장', '국물맛집'] },
  { keywords: ['이자카야', '술집', '포차', '야장'], tags: ['야장', '안주맛집'] },
  { keywords: ['삼겹', '갈비', '한우', '고기', '숯불', '구이'], tags: ['고기', '구이'] },
  { keywords: ['파스타', '피자', '스테이크', '양식'], tags: ['양식'] },
  { keywords: ['초밥', '스시', '돈카츠', '돈까스', '규카츠', '오마카세'], tags: ['일식'] },
  { keywords: ['마라', '짬뽕', '짜장', '중화', '중식'], tags: ['중식'] },
  { keywords: ['치킨', '닭강정', '통닭'], tags: ['치킨'] },
];

const TYPE_RULES = [
  { keywords: ['고기구이', '고기', '삼겹', '갈비', '한우', '구이', '숯불'], tags: ['고기', '구이'] },
  { keywords: ['일식', '스시', '초밥', '돈카츠', '돈까스', '오마카세', '이자카야'], tags: ['일식'] },
  { keywords: ['중식', '마라', '짬뽕', '짜장', '중화'], tags: ['중식'] },
  { keywords: ['양식', '파스타', '피자', '스테이크', '이탈리안', '프렌치'], tags: ['양식'] },
  { keywords: ['치킨', '닭강정', '통닭'], tags: ['치킨'] },
  { keywords: ['야장', '포차', '이자카야', '술집'], tags: ['야장', '안주맛집'] },
  { keywords: ['해장', '국밥', '설렁탕', '곰탕', '순대'], tags: ['해장', '국물맛집'] },
  { keywords: ['카페', '브런치', '디저트'], tags: ['카페'] },
  { keywords: ['한식'], tags: ['한식'] },
];

const REVIEW_RULES = [
  { keywords: ['혼자', '혼밥', '1인'], tags: ['혼밥가능'] },
  { keywords: ['주차', '파킹'], tags: ['주차가능'] },
  { keywords: ['단체', '회식', '룸'], tags: ['단체가능'] },
  { keywords: ['데이트', '분위기', '커플'], tags: ['데이트'] },
  { keywords: ['웨이팅', '줄서서', '대기'], tags: ['웨이팅맛집'] },
];

// ── 헬퍼 ─────────────────────────────────────────────────────────────────────

function containsAny(text, keywords) {
  if (!text) return false;
  return keywords.some(k => text.includes(k));
}

function reviewText(rv, rvs) {
  const parts = [];
  if (Array.isArray(rv)) parts.push(...rv);
  if (Array.isArray(rvs)) parts.push(...rvs);
  if (rvs && typeof rvs === 'object' && !Array.isArray(rvs)) {
    Object.values(rvs).forEach(v => {
      if (Array.isArray(v)) parts.push(...v);
      else if (typeof v === 'string') parts.push(v);
    });
  }
  return parts.join(' ');
}

function firstPrice(priceRange) {
  if (!priceRange) return null;
  const m = priceRange.match(/\d+/);
  return m ? parseInt(m[0], 10) : null;
}

function inferTags(restaurant) {
  const { name = '', type = '', rv, rvs, rt, cnt, priceRange } = restaurant;
  const existing = Array.isArray(restaurant.tags) ? [...restaurant.tags] : [];

  const addTag = (tag) => { if (!existing.includes(tag)) existing.push(tag); };
  const addTags = (tags) => tags.forEach(addTag);

  const reviewStr = reviewText(rv, rvs);

  for (const rule of NAME_RULES) {
    if (containsAny(name, rule.keywords)) addTags(rule.tags);
  }
  for (const rule of TYPE_RULES) {
    if (containsAny(type, rule.keywords)) addTags(rule.tags);
  }
  for (const rule of REVIEW_RULES) {
    if (containsAny(reviewStr, rule.keywords)) addTags(rule.tags);
  }

  const price = firstPrice(priceRange);
  if (price !== null && price <= 15000) addTags(['가성비', '점심추천']);

  if (typeof rt === 'number' && rt >= 4.5) addTag('고평점');
  if (typeof cnt === 'number' && cnt >= 100) addTag('리뷰많음');

  // 최소 3개 보장 – cat 배열에서 보충
  if (existing.length < 3 && Array.isArray(restaurant.cat)) {
    for (const c of restaurant.cat) {
      if (!existing.includes(c)) existing.push(c);
      if (existing.length >= 3) break;
    }
  }

  return existing.slice(0, 8);
}

// ── 파일별 로드 ──────────────────────────────────────────────────────────────

function loadRestaurants(filepath) {
  const original = fs.readFileSync(filepath, 'utf8');
  const tempSrc = original
    .replace(/export\s+default\s+restaurants\s*;?/g, 'module.exports = restaurants;')
    .replace(/^export\s+default\s+/m, 'module.exports = ');

  const tmpPath = filepath + '.tmp.cjs';
  fs.writeFileSync(tmpPath, tempSrc, 'utf8');
  try {
    delete require.cache[require.resolve(tmpPath)];
    return require(tmpPath);
  } finally {
    fs.unlinkSync(tmpPath);
  }
}

// ── 단일 식당 tags 교체 ──────────────────────────────────────────────────────

/**
 * src 문자열에서 nameValue에 해당하는 식당의 tags 배열을 newTags로 교체한다.
 * 한 줄 형식과 여러 줄 형식 모두 처리.
 */
function replaceTags(src, nameValue, newTags) {
  // name 등장 위치 찾기 (큰따옴표 / 작은따옴표 모두)
  let nameIdx = src.indexOf(`"${nameValue}"`);
  if (nameIdx === -1) nameIdx = src.indexOf(`'${nameValue}'`);
  if (nameIdx === -1) return null; // 못 찾음

  // 다음 식당 시작 전까지를 블록으로 한정
  // (다음 name: 등장 위치 기준)
  const nextNameIdx = src.indexOf('name:', nameIdx + 1);
  const blockEnd = nextNameIdx === -1 ? src.length : nextNameIdx;
  const block = src.substring(nameIdx, blockEnd);

  // 여러 줄 tags 패턴: "tags": [\n ... \n  ] 또는 tags: [\n ... \n  ]
  const multiLineTagsRe = /["\s]?tags[":\s]+\[[\s\S]*?\]/;
  // 한 줄 tags 패턴: tags: ["a", "b"]
  const singleLineTagsRe = /["\s]?tags[":\s]+\[[^\]]*\]/;

  // 두 패턴 중 매치되는 것을 찾아 교체
  let matched = false;
  let newBlock;

  // 여러 줄부터 시도 (더 넓은 패턴)
  if (multiLineTagsRe.test(block)) {
    // indent 감지
    const indentMatch = block.match(/( *)["\s]?tags/);
    const indent = indentMatch ? indentMatch[1] : '  ';
    const tagLines = newTags.map(t => `${indent}  "${t}"`).join(',\n');
    newBlock = block.replace(multiLineTagsRe, (m) => {
      // 키 부분(tags:) 앞의 공백/따옴표 유지
      const keyPart = m.match(/^(["\s]?tags[":\s]+)/)[1];
      return `${keyPart}[\n${tagLines}\n${indent}]`;
    });
    matched = true;
  }

  if (!matched) {
    console.warn(`  [WARN] tags 패턴 미발견: "${nameValue}"`);
    return null;
  }

  return src.substring(0, nameIdx) + newBlock + src.substring(nameIdx + block.length);
}

// ── 파일 처리 ─────────────────────────────────────────────────────────────────

function processFile(filename) {
  const filepath = path.join(DATA_DIR, filename);
  let restaurants;
  try {
    restaurants = loadRestaurants(filepath);
  } catch (e) {
    console.error(`  [ERROR] ${filename} 로드 실패:`, e.message);
    return;
  }

  if (!Array.isArray(restaurants)) {
    console.error(`  [SKIP] ${filename}: export가 배열이 아닙니다`);
    return;
  }

  let src = fs.readFileSync(filepath, 'utf8');
  let modifiedCount = 0;

  for (const r of restaurants) {
    const currentTags = Array.isArray(r.tags) ? r.tags : [];
    if (currentTags.length >= 2) continue;

    const newTags = inferTags(r);
    if (
      newTags.length === currentTags.length &&
      newTags.every((t, i) => t === currentTags[i])
    ) continue;

    const result = replaceTags(src, r.name, newTags);
    if (result === null) {
      console.warn(`  [WARN] ${filename}: "${r.name}" 교체 실패`);
      continue;
    }
    src = result;
    modifiedCount++;
  }

  if (modifiedCount > 0) {
    fs.writeFileSync(filepath, src, 'utf8');
    console.log(`  [OK] ${filename}: ${modifiedCount}개 식당 tags 업데이트`);
  } else {
    console.log(`  [SKIP] ${filename}: 변경 없음`);
  }
}

// ── 메인 ─────────────────────────────────────────────────────────────────────

console.log('=== fillTags 시작 ===');
for (const file of TARGET_FILES) {
  console.log(`\n처리 중: ${file}`);
  try {
    processFile(file);
  } catch (err) {
    console.error(`  [ERROR] ${file}:`, err.message);
  }
}
console.log('\n=== 완료 ===');
