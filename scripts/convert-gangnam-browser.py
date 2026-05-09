#!/usr/bin/env python3
"""
convert-gangnam-browser.py — gangnam-browser.json → data/gangnam.js 변환

naver-crawl-browser.mjs가 수집한 데이터를 기존 data/*.js 포맷으로 변환.
체크포인트 파일에서도 읽을 수 있음.

사용법: python3 scripts/convert-gangnam-browser.py [--checkpoint]
"""
import json, os, re, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NAVER_DIR = os.path.join(BASE, 'scripts', 'naver-data')

use_checkpoint = '--checkpoint' in sys.argv

if use_checkpoint:
    src = os.path.join(NAVER_DIR, 'gangnam-browser-checkpoint.json')
else:
    src = os.path.join(NAVER_DIR, 'gangnam-browser.json')
    if not os.path.exists(src):
        src = os.path.join(NAVER_DIR, 'gangnam-browser-checkpoint.json')
        print(f'  browser.json 없음, 체크포인트 사용')

if not os.path.exists(src):
    print(f'데이터 없음: {src}')
    sys.exit(1)

with open(src, 'r', encoding='utf-8') as f:
    raw = json.load(f)

restaurants = raw.get('restaurants', raw) if isinstance(raw, dict) else raw
print(f'원본 식당 수: {len(restaurants)}개')

# 카테고리 매핑
TYPE_MAP = {
    '한식': '한식',
    '고기': '고기구이',
    '구이': '고기구이',
    '삼겹살': '고기구이',
    '갈비': '고기구이',
    '국밥': '국밥',
    '설렁탕': '국밥',
    '곰탕': '국밥',
    '해장': '국밥',
    '이자카야': '이자카야',
    '술집': '이자카야',
    '포차': '이자카야',
    '일식': '일식',
    '스시': '일식',
    '초밥': '일식',
    '오마카세': '일식',
    '중식': '중식',
    '마라탕': '중식',
    '양식': '양식',
    '파스타': '양식',
    '스테이크': '스테이크',
    '피자': '양식',
    '치킨': '치킨',
    '카페': '카페',
    '브런치': '카페',
    '족발': '한식',
    '곱창': '한식',
    '보쌈': '한식',
    '분식': '분식',
    '베트남': '아시안',
    '태국': '아시안',
    '인도': '아시안',
    '회': '일식',
    '횟집': '일식',
    '돈카츠': '일식',
    '라멘': '일식',
    '뷔페': '뷔페',
    '칼국수': '칼국수',
    '냉면': '한식',
}

# 태그 추출 패턴
def extract_tags(r):
    tags = []
    name = r.get('name', '')
    cat = r.get('category', '')

    # 기본 태그
    if r.get('parking'): tags.append('주차가능')
    if r.get('reservation'): tags.append('예약필수')
    if r.get('groupSeat'): tags.append('단체가능')
    if r.get('room'): tags.append('룸있음')

    return tags

def classify_type(r):
    """식당 유형 분류"""
    cat = (r.get('category', '') or '').lower()
    name = (r.get('name', '') or '').lower()

    for keyword, rtype in TYPE_MAP.items():
        if keyword in cat or keyword in name:
            return rtype

    if cat:
        return cat.split(',')[0].strip()
    return '한식'

# 변환
converted = []
seen_names = set()

for r in restaurants:
    name = r.get('name', '').strip()
    if not name or name in seen_names:
        continue
    seen_names.add(name)

    # 좌표
    lat = r.get('y') or r.get('lat') or 0
    lng = r.get('x') or r.get('lng') or 0

    try:
        lat = float(lat)
        lng = float(lng)
    except:
        lat, lng = 0, 0

    # 메뉴
    menu_items = []
    for m in r.get('menuItems', r.get('menus', []))[:10]:
        if isinstance(m, dict):
            menu_items.append({
                'menuName': m.get('name', m.get('menuName', '')),
                'price': m.get('price', 0),
                'description': m.get('description', ''),
            })

    # 가격대
    prices = [mi['price'] for mi in menu_items if mi.get('price') and isinstance(mi['price'], (int, float)) and mi['price'] > 0]
    price_range = ''
    if prices:
        lo, hi = min(prices), max(prices)
        price_range = f'{int(lo)}~{int(hi)}'

    # 태그: 기존 태그 + 추출 태그 병합
    existing_tags = r.get('tags', []) or []
    new_tags = extract_tags(r)
    all_tags = list(dict.fromkeys(existing_tags + new_tags))  # 중복 제거, 순서 유지

    entry = {
        'name': name,
        'type': classify_type(r),
        'e': '',
        'rt': r.get('rt', r.get('rating', r.get('visitorRating', 0))) or 0,
        'cnt': r.get('cnt', r.get('reviewCount', r.get('visitorReviewCount', 0))) or 0,
        'addr': r.get('addr', r.get('address', r.get('roadAddress', ''))),
        'hours': r.get('hours', r.get('businessHours', '')),
        'tel': r.get('tel', r.get('phone', '')),
        'priceRange': price_range or r.get('priceRange', ''),
        'lat': lat,
        'lng': lng,
        'cat': r.get('cat', []) or [],
        'tags': all_tags,
        'moods': r.get('moods', []) or [],
        'wx': r.get('wx', []) or [],
        'scene': r.get('scene', []) or [],
        'rv': r.get('rv', []) or [],
        'naverPlaceId': str(r.get('naverPlaceId', r.get('id', ''))),
        'naverBlogCnt': r.get('naverBlogCnt', r.get('blogReviewCount', 0)) or 0,
        'menuItems': menu_items,
        'keywords': r.get('keywords', []) or [],
        'naverUrl': r.get('naverUrl', ''),
        'imageUrl': r.get('imageUrl', r.get('thumUrl', '')),
        'parking': bool(r.get('parking')),
        'reservation': bool(r.get('reservation')),
        'updatedAt': '2026-05-09',
    }

    # rv 서로게이트 문자 제거
    if entry.get('rv'):
        entry['rv'] = [rv.encode('utf-8', 'ignore').decode('utf-8') for rv in entry['rv']]

    converted.append(entry)

print(f'변환된 식당 수: {len(converted)}개 (중복 제거 후)')

# data/gangnam.js 생성
out_path = os.path.join(BASE, 'data', 'gangnam.js')

lines = ['const data = [']
for r in converted:
    lines.append('  ' + json.dumps(r, ensure_ascii=False) + ',')
lines.append(']')
lines.append('export default data')

with open(out_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines) + '\n')

print(f'저장: {out_path}')
print(f'완료!')
