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
NAME_INDEX = {}
for region_key, rests in ALL_RESTAURANTS.items():
    for r in rests:
        NAME_INDEX[r['name']] = r

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
posts_arr_text = re.sub(r"(\w+)\s*:", r'"\1":', posts_arr_text)
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
def extract_restaurant_names(post_id):
    """posts/{id}.js에서 <strong>식당명</strong> 패턴 추출"""
    fpath = os.path.join(BASE, 'posts', f'{post_id}.js')
    if not os.path.exists(fpath):
        return []
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()
    # 패턴1: <strong>식당명</strong>
    names = re.findall(r'<strong>([^<]+)</strong>', text)
    # 패턴2: <strong><a href="...">식당명</a></strong>
    names += re.findall(r'<strong><a[^>]*>([^<]+)</a></strong>', text)
    # 패턴3: h2 text에서 식당명 추출 (예: "고기구이 — 청우회관")
    h2_texts = re.findall(r"text:\s*'([^']*)'", text)
    for h2 in h2_texts:
        if '—' in h2:
            after_dash = h2.split('—')[-1].strip()
            names.append(after_dash)
        elif '–' in h2:
            after_dash = h2.split('–')[-1].strip()
            names.append(after_dash)
    # 필터: 실제 식당명인지 확인 (NAME_INDEX에 있거나 부분일치)
    matched = []
    for name in names:
        name = name.strip()
        if name in NAME_INDEX:
            matched.append(name)
        else:
            # 부분 매칭 시도 (예: "논두렁오리주물럭 선릉직영점" → "논두렁오리주물럭")
            for full_name in NAME_INDEX:
                if len(name) >= 2 and (name in full_name or full_name in name):
                    if full_name not in [m for m in matched]:
                        matched.append(full_name)
                    break
    return list(dict.fromkeys(matched))  # 순서 유지 중복 제거

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
        'tags': r.get('tags', []),
        'keywords': r.get('keywords', []),
        'moods': r.get('moods', []),
        'scene': r.get('scene', []),
        'parking': r.get('parking', False),
        'reservation': r.get('reservation', False),
        'menuItems': menu_items,
        'naverUrl': r.get('naverUrl', ''),
        'region': r.get('_region', ''),
        'regionName': r.get('_regionName', ''),
        'regionPath': r.get('_regionPath', ''),
        'emoji': r.get('e', ''),
    }

# ── 5. 전체 포스트 데이터 생성 ────────────────────────────────────
output_dir = os.path.join(BASE, 'scripts', 'post-data')
os.makedirs(output_dir, exist_ok=True)

for meta in POSTS_META:
    post_id = meta['id']
    slug = meta['slug']
    region = meta['region']

    # 식당명 추출
    names = extract_restaurant_names(post_id)

    # 식당 데이터 추출
    restaurants = []
    matched_names = set()
    for name in names:
        data = extract_restaurant_data(name)
        if data:
            restaurants.append(data)
            matched_names.add(data['name'])

    # 매칭 부족 시 같은 지역·카테고리에서 보충 (최소 5개 목표)
    region_rests = ALL_RESTAURANTS.get(region, [])
    if len(restaurants) < 5 and category and region_rests:
        # 카테고리 매칭 시도: cat 필드 또는 tags/type에서 카테고리 키워드 검색
        CAT_KEYWORDS = {
            'meat': ['고기', '구이', '삼겹', '갈비', '한우', '소고기', '돼지'],
            'date': ['데이트', '분위기', '레스토랑', '와인', '이탈리안', '파스타', '스테이크'],
            'group': ['단체', '회식', '룸', '삼겹', '고기', '구이', '갈비', '양꼬치'],
            'lunch': ['점심', '런치', '백반', '정식', '한식', '중식', '일식', '양식'],
            'budget': ['가성비', '혼밥', '1인', '저렴', '백반', '국밥', '분식'],
            'izakaya': ['이자카야', '술집', '바', '포차', '하이볼', '사케', '맥주'],
            'chinese': ['중식', '중국', '짜장', '짬뽕', '마라', '딤섬', '양꼬치'],
            'gukbap': ['국밥', '해장', '순대', '설렁탕', '곰탕', '뚝배기'],
            'japanese': ['일식', '스시', '초밥', '오마카세', '라멘', '돈까스', '규동'],
        }
        keywords = CAT_KEYWORDS.get(category, [category])
        candidates = []
        for r in region_rests:
            if r['name'] in matched_names:
                continue
            search_text = ' '.join([
                r.get('type', ''),
                ' '.join(r.get('tags', [])),
                ' '.join(r.get('cat', [])),
            ])
            if any(kw in search_text for kw in keywords):
                candidates.append(r)
        # 평점순 정렬 → 상위 보충
        candidates.sort(key=lambda x: (x.get('rt', 0), x.get('cnt', 0)), reverse=True)
        for r in candidates:
            if len(restaurants) >= 5:
                break
            data = extract_restaurant_data(r['name'])
            if data:
                restaurants.append(data)
                matched_names.add(data['name'])
        if len(restaurants) > len(names):
            print(f"    → 보충: {len(names)}→{len(restaurants)}개 (카테고리 '{category}' 기반)")

    # 지역 전체 통계 (해당 지역)
    category = meta.get('category', '')

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
