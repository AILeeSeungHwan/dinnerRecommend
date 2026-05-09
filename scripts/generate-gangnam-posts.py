#!/usr/bin/env python3
"""
generate-gangnam-posts.py — 강남역 식당 데이터 기반 포스팅 메타 자동 생성

data/gangnam.js에서 식당 데이터를 읽어 카테고리별 포스트 메타를 생성.
기존 post-data/*.json (ID 1~25) 이후 ID 26부터 시작.

사용법: python3 scripts/generate-gangnam-posts.py
출력: scripts/post-data/{id}.json + data/posts.js 업데이트
"""

import json, os, re, sys
from datetime import date

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE, 'scripts', 'post-data')
TODAY = date.today().strftime('%Y-%m-%d')
YEAR = date.today().strftime('%Y')

# ── data/gangnam.js 로드 ──────────────────────────────────────
data_file = os.path.join(BASE, 'data', 'gangnam.js')
with open(data_file, 'r', encoding='utf-8') as f:
    text = f.read()

# JSON 추출 — 줄 단위 파싱 (menuItems 중첩 {} 안전)
restaurants = []
for line in text.split('\n'):
    line = line.strip().rstrip(',')
    if line.startswith('{') and '"name"' in line:
        try:
            r = json.loads(line)
            restaurants.append(r)
        except:
            pass

print(f'강남역 식당 데이터: {len(restaurants)}개')
if len(restaurants) < 5:
    print('식당이 너무 적습니다. 크롤링 완료 후 다시 실행하세요.')
    sys.exit(1)

# ── 식당 분류 ──────────────────────────────────────────────────
# 카테고리별 식당 그룹핑
CATEGORY_RULES = {
    'meat': {
        'label': '고기',
        'slug_prefix': 'gangnam-meat',
        'title_template': '강남역 고기 맛집 추천 {n}곳 | {year} 가격·평점 비교',
        'desc': '강남역 고기집 가이드 — 삼겹살, 한우, 갈비 가격 비교',
        'type_match': ['고기구이', '고기', '구이', '삼겹살'],
        'tag_match': ['한우', '갈비', '삼겹살', '목살', '항정살'],
    },
    'date': {
        'label': '데이트',
        'slug_prefix': 'gangnam-date',
        'title_template': '강남역 데이트 레스토랑 추천 {n}곳 | {year}',
        'desc': '강남역 분위기 좋은 데이트 맛집 가이드',
        'type_match': ['양식', '이탈리안', '스테이크', '프렌치'],
        'tag_match': ['데이트', '인스타감성', '뷰맛집', '프라이빗'],
        'mood_match': ['데이트'],
    },
    'group': {
        'label': '회식·단체',
        'slug_prefix': 'gangnam-team-dinner',
        'title_template': '강남역 회식 장소 추천 {n}곳 | {year} 룸·단체석 비교',
        'desc': '강남역 회식 장소 가이드 — 룸, 단체석, 예산별 비교',
        'type_match': [],
        'tag_match': ['단체가능', '룸있음', '회식'],
        'mood_match': ['회식'],
    },
    'budget': {
        'label': '가성비·혼밥',
        'slug_prefix': 'gangnam-budget',
        'title_template': '강남역 가성비 맛집 추천 {n}곳 | {year} 혼밥·점심',
        'desc': '강남역 가성비 좋은 혼밥·점심 맛집 가이드',
        'type_match': [],
        'tag_match': ['가성비', '혼밥가능', '점심추천'],
    },
    'izakaya': {
        'label': '이자카야·술집',
        'slug_prefix': 'gangnam-izakaya',
        'title_template': '강남역 이자카야·술집 추천 {n}곳 | {year}',
        'desc': '강남역 분위기 좋은 이자카야·술집 가이드',
        'type_match': ['이자카야', '술집', '포차', '야장'],
        'tag_match': [],
    },
    'chinese': {
        'label': '중식',
        'slug_prefix': 'gangnam-chinese',
        'title_template': '강남역 중식 맛집 추천 {n}곳 | {year}',
        'desc': '강남역 중식 맛집 가이드 — 짬뽕, 탕수육, 마라탕',
        'type_match': ['중식', '마라탕'],
        'tag_match': [],
    },
    'gukbap': {
        'label': '국밥·해장',
        'slug_prefix': 'gangnam-gukbap',
        'title_template': '강남역 국밥·해장 맛집 추천 {n}곳 | {year}',
        'desc': '강남역 국밥·해장 맛집 가이드',
        'type_match': ['국밥', '해장', '설렁탕', '곰탕'],
        'tag_match': [],
    },
    'japanese': {
        'label': '일식·스시',
        'slug_prefix': 'gangnam-japanese',
        'title_template': '강남역 일식·스시 추천 {n}곳 | {year}',
        'desc': '강남역 일식·스시·오마카세 가이드',
        'type_match': ['일식', '스시', '초밥', '오마카세'],
        'tag_match': [],
    },
    'lunch': {
        'label': '점심',
        'slug_prefix': 'gangnam-lunch',
        'title_template': '강남역 점심 뭐 먹지? 카테고리별 추천 {n}곳 | {year}',
        'desc': '강남역 직장인 점심 맛집 총정리',
        'type_match': [],
        'tag_match': ['점심추천', '점심특선'],
    },
    'western': {
        'label': '양식·파스타',
        'slug_prefix': 'gangnam-western',
        'title_template': '강남역 양식·파스타 맛집 추천 {n}곳 | {year}',
        'desc': '강남역 양식·파스타·스테이크 가이드',
        'type_match': ['양식', '이탈리안', '스테이크', '파스타'],
        'tag_match': [],
    },
    'chicken': {
        'label': '치킨·야장',
        'slug_prefix': 'gangnam-chicken',
        'title_template': '강남역 치킨·야장 추천 {n}곳 | {year}',
        'desc': '강남역 치킨·야장 가이드',
        'type_match': ['치킨', '야장'],
        'tag_match': [],
    },
    'special': {
        'label': '족발·곱창',
        'slug_prefix': 'gangnam-special',
        'title_template': '강남역 족발·곱창 맛집 추천 {n}곳 | {year}',
        'desc': '강남역 족발·곱창·보쌈 가이드',
        'type_match': ['족발', '곱창', '보쌈'],
        'tag_match': ['족발', '곱창', '보쌈', '막창'],
    },
}


def matches_category(r, rule):
    """식당이 카테고리에 해당하는지"""
    rtype = (r.get('type', '') or '').lower()
    tags = set(r.get('tags', []))
    moods = set(r.get('moods', []))
    name = r.get('name', '').lower()

    for t in rule.get('type_match', []):
        if t.lower() in rtype or t.lower() in name:
            return True

    for t in rule.get('tag_match', []):
        if t in tags:
            return True

    for m in rule.get('mood_match', []):
        if m in moods:
            return True

    return False


def select_top(rests, n=5):
    """평점·리뷰수 기준 상위 N개 선별"""
    scored = []
    for r in rests:
        rt = r.get('rt', 0) or 0
        cnt = r.get('cnt', 0) or 0
        score = rt * 100 + min(cnt, 500)
        scored.append((score, r))
    scored.sort(key=lambda x: x[0], reverse=True)
    return [r for _, r in scored[:n]]


def restaurant_to_post_format(r):
    """식당 데이터를 포스트 메타용으로 변환"""
    menus = r.get('menuItems', [])
    return {
        'name': r.get('name', ''),
        'type': r.get('type', ''),
        'addr': r.get('addr', ''),
        'hours': r.get('hours', ''),
        'tel': r.get('tel', ''),
        'priceRange': r.get('priceRange', ''),
        'rating': r.get('rt', 0),
        'reviewCount': r.get('cnt', 0),
        'blogCount': r.get('naverBlogCnt', 0),
        'tags': r.get('tags', []),
        'moods': r.get('moods', []),
        'menuItems': [{'name': m.get('menuName', ''), 'price': m.get('price', 0), 'description': m.get('description', '')} for m in menus[:6]],
        'parking': r.get('parking', False),
        'reservation': r.get('reservation', False),
    }


# ── 카테고리별 포스트 생성 ──────────────────────────────────────
next_id = 26  # ID 1~25는 기존
generated = []

for cat_key, rule in CATEGORY_RULES.items():
    cat_restaurants = [r for r in restaurants if matches_category(r, rule)]

    if len(cat_restaurants) < 3:
        # 카테고리에 식당이 3개 미만이면 스킵
        print(f'  {cat_key}: {len(cat_restaurants)}개 식당 → 스킵 (최소 3개 필요)')
        continue

    # 상위 5~7개 선별
    n_select = min(7, max(5, len(cat_restaurants)))
    selected = select_top(cat_restaurants, n_select)

    slug = f'{rule["slug_prefix"]}-best-{YEAR}'
    title = rule['title_template'].format(n=len(selected), year=YEAR)

    post_meta = {
        'id': next_id,
        'slug': slug,
        'title': title,
        'description': rule['desc'],
        'category': cat_key,
        'region': 'gangnam',
        'date': TODAY,
        'tags': ['강남역', rule['label'], '맛집'],
        'categoryStats': {},
        'regionTotalRestaurants': len(restaurants),
        'restaurants': [restaurant_to_post_format(r) for r in selected],
    }

    out_file = os.path.join(DATA_DIR, f'{next_id}.json')
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(post_meta, f, ensure_ascii=False, indent=2)

    generated.append(post_meta)
    print(f'  Post {next_id:3d} ({slug[:40]:40s}): {len(selected)}개 식당')
    next_id += 1

# ── data/posts.js에 강남역 포스트 추가 ──────────────────────────
posts_file = os.path.join(BASE, 'data', 'posts.js')
with open(posts_file, 'r', encoding='utf-8') as f:
    posts_text = f.read()

# 기존 강남역 포스트 있는지 확인
has_gangnam = 'gangnam' in posts_text

new_entries = []
for p in generated:
    entry = (
        f"  {{id:{p['id']},slug:'{p['slug']}',title:'{p['title']}',description:'{p['description']}',"
        f"region:'gangnam',category:'{p['category']}',date:'{p['date']}',thumbnail:null}}"
    )
    # 이미 존재하면 스킵
    if f"id:{p['id']}" in posts_text:
        continue
    new_entries.append(entry)

if new_entries:
    # 마지막 ] 앞에 추가
    insert_point = posts_text.rfind(']')
    if insert_point > 0:
        # 앞에 쉼표 필요한지 확인
        before = posts_text[:insert_point].rstrip()
        if before.endswith('}'):
            new_text = before + ',\n' + ',\n'.join(new_entries) + '\n]'
        else:
            new_text = before + '\n' + ',\n'.join(new_entries) + '\n]'
        # ] 이후 텍스트 유지
        after = posts_text[insert_point + 1:]
        posts_text = new_text + after

    with open(posts_file, 'w', encoding='utf-8') as f:
        f.write(posts_text)
    print(f'\ndata/posts.js에 {len(new_entries)}개 포스트 추가')

print(f'\n총 {len(generated)}개 강남역 포스트 메타 생성 완료')
print(f'다음 단계: python3 scripts/rebuild-posts.py 실행하여 포스트 본문 생성')
