#!/usr/bin/env python3
"""
enrich-posts.py — 포스트에 등장하는 식당의 실제 데이터를 data/*.js에서 추출하여
JSON으로 저장. 이 데이터를 기반으로 포스트를 재생성한다.

사용법: python3 scripts/enrich-posts.py
출력: scripts/post-data/ 디렉토리에 포스트ID별 JSON 생성
"""

import json, re, os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ── 1. 지역 데이터 로드 ──────────────────────────────────────────
REGIONS = {
    'samseong': {'file': 'samseong.js', 'name': '삼성역', 'path': '/dinner/samseong'},
    'jamsil':   {'file': 'jamsil.js',   'name': '잠실',   'path': '/dinner/jamsil'},
    'pangyo':   {'file': 'pangyo.js',   'name': '판교',   'path': '/pangyo'},
    'yeongtong':{'file': 'yeongtong.js','name': '영통',   'path': '/samsungElectronics/yeongtong'},
    'mangpo':   {'file': 'mangpo.js',   'name': '망포',   'path': '/samsungElectronics/mangpo'},
    'yeongtongGu':{'file':'yeongtongGu.js','name':'영통구청','path':'/samsungElectronics/yeongtongGu'},
    'suji':     {'file':'suji.js',     'name':'수지',   'path':'/suji'},
    'gangnam':  {'file':'gangnam.js',  'name':'강남역', 'path':'/dinner/gangnam'},
}

def load_restaurants(filename):
    """data/*.js에서 JSON 배열을 파싱"""
    fpath = os.path.join(BASE, 'data', filename)
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()
    # "export default [...]" 또는 "const restaurants = [...];\nexport default restaurants"
    # JSON 배열 부분 추출
    match = re.search(r'(?:export\s+default\s+|=\s*)(\[[\s\S]*\])', text)
    if not match:
        print(f"  WARN: {filename}에서 배열 추출 실패")
        return []
    arr_text = match.group(1)
    # JS → JSON 변환: trailing commas, single quotes 등
    # undefined → null
    arr_text = re.sub(r'\bundefined\b', 'null', arr_text)
    try:
        return json.loads(arr_text)
    except json.JSONDecodeError:
        # 좀 더 공격적인 정리
        arr_text = re.sub(r',\s*([}\]])', r'\1', arr_text)
        try:
            return json.loads(arr_text)
        except:
            print(f"  ERROR: {filename} JSON 파싱 실패")
            return []

# 모든 지역 식당 로드
ALL_RESTAURANTS = {}
for region_key, rinfo in REGIONS.items():
    rests = load_restaurants(rinfo['file'])
    for r in rests:
        r['_region'] = region_key
        r['_regionName'] = rinfo['name']
        r['_regionPath'] = rinfo['path']
    ALL_RESTAURANTS[region_key] = rests
    print(f"  {rinfo['name']}: {len(rests)}개 식당 로드")

# 이름으로 빠르게 검색할 수 있는 인덱스
# 지역별 인덱스 — 같은 이름이 다른 지역에 있을 때 region 기준으로 정확히 잡기 위함
NAME_INDEX_BY_REGION = {}
for region_key, rests in ALL_RESTAURANTS.items():
    NAME_INDEX_BY_REGION[region_key] = {r['name']: r for r in rests}

# 전 지역 통합 인덱스 (마지막 등록 우선) — fallback 용
NAME_INDEX = {}
for region_key, rests in ALL_RESTAURANTS.items():
    for r in rests:
        NAME_INDEX[r['name']] = r

def find_in_region(name, region_key):
    """식당명을 특정 지역에서 우선 찾기. 없으면 None."""
    region_idx = NAME_INDEX_BY_REGION.get(region_key, {})
    if name in region_idx:
        return region_idx[name]
    # 정확한 부분일치 (지역 한정) — 한쪽이 다른쪽을 포함하고 길이 차이가 30% 이내
    for full_name, r in region_idx.items():
        if len(name) >= 3 and (name in full_name or full_name in name):
            short, long = (name, full_name) if len(name) <= len(full_name) else (full_name, name)
            if len(short) / max(len(long), 1) >= 0.5:
                return r
    return None

# ── 카테고리 키워드 정의 (검증·보충 양쪽에서 사용) ─────────────────
CAT_KEYWORDS = {
    'meat':     ['고기', '구이', '삼겹', '갈비', '한우', '소고기', '돼지', '곱창', '막창', '오겹'],
    'date':     ['데이트', '분위기', '레스토랑', '와인', '이탈리안', '파스타', '스테이크', '비스트로', '뷰'],
    'group':    ['단체', '회식', '룸', '삼겹', '고기', '구이', '갈비', '양꼬치', '코스'],
    'lunch':    ['점심', '런치', '백반', '정식', '한식', '중식', '일식', '양식', '국수', '돈까스'],
    'budget':   ['가성비', '혼밥', '1인', '저렴', '백반', '국밥', '분식', '국수', '덮밥', '김밥'],
    'izakaya':  ['이자카야', '술집', '바', '포차', '하이볼', '사케', '맥주', '와인바', '꼬치'],
    'chinese':  ['중식', '중국', '짜장', '짬뽕', '마라', '딤섬', '양꼬치', '훠궈', '탕수육'],
    'gukbap':   ['국밥', '해장', '순대', '설렁탕', '곰탕', '뚝배기', '내장탕', '갈비탕', '육개장', '추어탕'],
    'japanese': ['일식', '스시', '초밥', '오마카세', '라멘', '돈까스', '규동', '돈부리', '우동', '소바', '사시미'],
}

def category_match(r, category):
    """식당이 특정 카테고리에 속하는지 검증.
    cat 필드 우선 → tags → type 순으로 검사."""
    if not category:
        return True
    keywords = CAT_KEYWORDS.get(category, [category])
    # 1순위: cat 필드 (정확 매칭)
    cat_field = r.get('cat')
    if isinstance(cat_field, list) and category in cat_field:
        return True
    if isinstance(cat_field, str) and category in cat_field:
        return True
    # 2순위: type/tags에서 키워드 검색
    search_text = ' '.join([
        r.get('type', '') or '',
        ' '.join(r.get('tags', []) or []),
        ' '.join(r.get('cat', []) if isinstance(r.get('cat'), list) else []),
    ])
    return any(kw in search_text for kw in keywords)

def is_quality(r):
    """포스트에 노출할 만한 품질의 식당인지 (평점·리뷰 둘 다 0이면 제외)."""
    rt = r.get('rt', 0) or 0
    cnt = r.get('cnt', 0) or 0
    return rt > 0 or cnt > 0

# ── 2. 포스트 메타데이터 로드 ─────────────────────────────────────
posts_file = os.path.join(BASE, 'data', 'posts.js')
with open(posts_file, 'r', encoding='utf-8') as f:
    posts_text = f.read()

posts_match = re.search(r'(?:const\s+posts\s*=\s*)(\[[\s\S]*?\])\s*\n\s*export', posts_text)
if not posts_match:
    print("ERROR: posts.js 파싱 실패")
    sys.exit(1)

posts_arr_text = posts_match.group(1)
# JS object → JSON: key without quotes
# key만 매칭 — 앞에 word char나 따옴표가 있으면 매칭 안 함 (URL의 https: 등 보호)
posts_arr_text = re.sub(r"(?<![\w'\"/:.-])(\w+)\s*:", r'"\1":', posts_arr_text)
posts_arr_text = re.sub(r"'([^']*)'", r'"\1"', posts_arr_text)
posts_arr_text = re.sub(r',\s*([}\]])', r'\1', posts_arr_text)
# null 처리
posts_arr_text = posts_arr_text.replace(':null', ':null')
try:
    POSTS_META = json.loads(posts_arr_text)
except json.JSONDecodeError as e:
    print(f"ERROR: posts.js JSON 파싱 실패: {e}")
    sys.exit(1)

print(f"\n총 {len(POSTS_META)}개 포스트 메타 로드")

# ── 3. 포스트 본문에서 식당명 추출 ────────────────────────────────
def extract_restaurant_names(post_id, region_key=None):
    """posts/{id}.js에서 식당명 추출.
    region_key가 주어지면 그 지역에서만 매칭. 없으면 전 지역 fallback."""
    fpath = os.path.join(BASE, 'posts', f'{post_id}.js')
    if not os.path.exists(fpath):
        return []
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()
    # 패턴1: <strong>식당명</strong>
    names = re.findall(r'<strong>([^<]+)</strong>', text)
    # 패턴2: <strong><a href="...">식당명</a></strong>
    names += re.findall(r'<strong><a[^>]*>([^<]+)</a></strong>', text)
    # 패턴3: <a href="/dinner/{region}/restaurant/식당명">
    names += re.findall(r'/restaurant/([^"\']+)', text)
    # 패턴4: h2 text의 "식당명 — suffix"
    h2_texts = re.findall(r"text:\s*['\"]([^'\"]*)['\"]", text)
    for h2 in h2_texts:
        for sep in ['—', '–', ' - ']:
            if sep in h2:
                before = h2.split(sep)[0].strip()
                if before and not any(skip in before for skip in ['선정 기준', '한눈에', '상황별', '방문 전', '맛집']):
                    names.append(before)
                break
    # 패턴5: caption 식당명
    captions = re.findall(r"caption:\s*['\"]([^'\"]+)['\"]", text)
    names += captions

    region_idx = NAME_INDEX_BY_REGION.get(region_key, {}) if region_key else {}

    matched = []
    seen = set()
    for raw in names:
        name = raw.strip()
        if not name or name in seen:
            continue
        # 1순위: 동일 지역 정확 매칭
        if region_key and name in region_idx:
            if name not in seen:
                matched.append(name); seen.add(name)
            continue
        # 2순위: 동일 지역 부분 매칭 (엄격 — 길이 비율 50% 이상)
        if region_key:
            best = None
            for full_name in region_idx:
                if len(name) >= 3 and (name in full_name or full_name in name):
                    short, long = (name, full_name) if len(name) <= len(full_name) else (full_name, name)
                    if len(short) / max(len(long), 1) >= 0.5:
                        best = full_name
                        break
            if best and best not in seen:
                matched.append(best); seen.add(best)
                continue
        # 3순위: 전 지역에서 정확 매칭만 (부분 매칭은 region 외에서 안전하지 않음)
        if name in NAME_INDEX and name not in seen:
            matched.append(name); seen.add(name)
    return matched

# ── 4. 식당별 데이터 추출 ─────────────────────────────────────────
def extract_restaurant_data(name):
    """식당명으로 풍부한 데이터 추출"""
    r = NAME_INDEX.get(name)
    if not r:
        return None

    menu_items = []
    for mi in (r.get('menuItems') or [])[:5]:
        menu_items.append({
            'name': mi.get('menuName') or mi.get('name') or '',
            'price': mi.get('price'),
            'description': mi.get('description') or '',
        })

    return {
        'name': r['name'],
        'type': r.get('type', ''),
        'addr': r.get('addr', ''),
        'hours': r.get('hours', ''),
        'tel': r.get('tel', ''),
        'priceRange': r.get('priceRange', ''),
        'rating': r.get('rt', 0),
        'reviewCount': r.get('cnt', 0),
        'blogCount': r.get('naverBlogCnt', 0),
        'cat': r.get('cat', []),
        'tags': r.get('tags', []),
        'keywords': r.get('keywords', []),
        'moods': r.get('moods', []),
        'scene': r.get('scene', []),
        'parking': r.get('parking', False),
        'reservation': r.get('reservation', False),
        'menuItems': menu_items,
        'naverUrl': r.get('naverUrl', ''),
        'imageUrl': r.get('imageUrl', '') or '',
        'imageUrl2': r.get('imageUrl2', '') or '',
        'imageUrl3': r.get('imageUrl3', '') or '',
        'imageUrl4': r.get('imageUrl4', '') or '',
        'imageUrl5': r.get('imageUrl5', '') or '',
        'imageUrl6': r.get('imageUrl6', '') or '',
        'imageUrl7': r.get('imageUrl7', '') or '',
        'imageUrl8': r.get('imageUrl8', '') or '',
        'region': r.get('_region', ''),
        'regionName': r.get('_regionName', ''),
        'regionPath': r.get('_regionPath', ''),
        'emoji': r.get('e', ''),
    }

# ── 5. 전체 포스트 데이터 생성 ────────────────────────────────────
output_dir = os.path.join(BASE, 'scripts', 'post-data')
os.makedirs(output_dir, exist_ok=True)

SKIP_GANGNAM = set()  # 강남 작업 정상화 — enrich 정상 처리

for meta in POSTS_META:
    post_id = meta['id']
    if post_id in SKIP_GANGNAM:
        print(f"  Post {post_id}: SKIP (강남역 별도 작업)")
        continue
    slug = meta['slug']
    region = meta['region']
    category = meta.get('category', '')
    region_rests = ALL_RESTAURANTS.get(region, [])

    # 식당명 추출 — 지역 한정으로
    names = extract_restaurant_names(post_id, region_key=region)

    # 식당 데이터 추출 + 검증 (region 일치 + 카테고리 매칭 + 평점/리뷰 있음)
    restaurants = []
    matched_names = set()
    for name in names:
        r_raw = find_in_region(name, region)
        if not r_raw:
            continue
        # region 검증
        if r_raw.get('_region') != region:
            continue
        # 평점/리뷰 둘 다 0이면 제외 (정보 부족)
        if not is_quality(r_raw):
            continue
        # 카테고리 검증 — 매칭 안 되면 제외
        if category and not category_match(r_raw, category):
            continue
        data = extract_restaurant_data(r_raw['name'])
        if data:
            restaurants.append(data)
            matched_names.add(data['name'])

    # 매칭 부족 시 같은 지역·카테고리에서 보충 (최소 5개 목표)
    target_count = 5
    if len(restaurants) < target_count and category and region_rests:
        candidates = [
            r for r in region_rests
            if r['name'] not in matched_names
            and is_quality(r)
            and category_match(r, category)
        ]
        # 평점·리뷰 가중치 정렬
        candidates.sort(
            key=lambda x: (x.get('rt', 0) or 0) * 100 + min(x.get('cnt', 0) or 0, 500),
            reverse=True,
        )
        for r in candidates:
            if len(restaurants) >= target_count:
                break
            data = extract_restaurant_data(r['name'])
            if data:
                restaurants.append(data)
                matched_names.add(data['name'])
        # 카테고리 키워드로 못 찾으면 평점 높은 순으로 마지막 보충
        if len(restaurants) < target_count:
            extras = [
                r for r in region_rests
                if r['name'] not in matched_names and is_quality(r)
            ]
            extras.sort(
                key=lambda x: (x.get('rt', 0) or 0) * 100 + min(x.get('cnt', 0) or 0, 500),
                reverse=True,
            )
            for r in extras:
                if len(restaurants) >= target_count:
                    break
                data = extract_restaurant_data(r['name'])
                if data:
                    restaurants.append(data)
                    matched_names.add(data['name'])

    # 평점·리뷰 점수순 재정렬 (포스트 순서를 quality 우선으로)
    restaurants.sort(
        key=lambda x: (x.get('rating', 0) or 0) * 100 + min(x.get('reviewCount', 0) or 0, 500),
        reverse=True,
    )

    # 카테고리별 통계
    cat_stats = {}
    if category and region_rests:
        # 해당 카테고리 식당 수, 평균 평점, 가격대 범위
        cat_rests = [r for r in region_rests if category in (r.get('cat') or [])]
        if not cat_rests:
            # tags 기반 매칭
            cat_rests = [r for r in region_rests if category in ' '.join(r.get('tags') or [])]
        if cat_rests:
            ratings = [r.get('rt', 0) for r in cat_rests if r.get('rt', 0) > 0]
            cat_stats = {
                'count': len(cat_rests),
                'avgRating': round(sum(ratings) / len(ratings), 1) if ratings else 0,
                'totalReviews': sum(r.get('cnt', 0) for r in cat_rests),
            }

    output = {
        'id': post_id,
        'slug': slug,
        'title': meta['title'],
        'description': meta['description'],
        'category': category,
        'region': region,
        'date': meta['date'],
        'tags': meta.get('tags', []),
        'restaurants': restaurants,
        'categoryStats': cat_stats,
        'regionTotalRestaurants': len(region_rests),
    }

    out_path = os.path.join(output_dir, f'{post_id}.json')
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"  Post {post_id:2d} ({slug}): {len(restaurants)}개 식당 매칭")

print(f"\n완료! {output_dir}/ 에 {len(POSTS_META)}개 JSON 생성")
