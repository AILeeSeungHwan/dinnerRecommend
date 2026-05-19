#!/usr/bin/env python3
"""홍대역 신규 지역 — 포스팅 대상 식당 데이터 수집.
카카오 로컬 키워드 검색(장소) + 다음 평점·리뷰 + 카카오 이미지 → data/hongdae.js
"""
import re, json, time, urllib.request, urllib.parse, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAKAO = 'a6a211dfb8e582302d82d3b08abc8593'

# 3개 포스팅 카테고리별 검색어
QUERIES = {
    'izakaya': ['벽돌포차 홍대', '홍대 포차', '홍대 야장 술집', '홍대 이자카야', '홍대 입구 술집'],
    'date':    ['홍대 데이트 맛집', '홍대 분위기 레스토랑', '홍대 파스타 맛집', '홍대 와인바', '홍대 브런치'],
    'budget':  ['홍대 가성비 맛집', '홍대 점심 맛집', '홍대 국밥', '홍대 라멘', '홍대 칼국수'],
}

def kakao_local(q, size=8):
    try:
        url = 'https://dapi.kakao.com/v2/local/search/keyword.json?' + urllib.parse.urlencode({'query': q, 'size': size})
        req = urllib.request.Request(url, headers={'Authorization': f'KakaoAK {KAKAO}'})
        with urllib.request.urlopen(req, timeout=10) as r:
            return json.load(r).get('documents', [])
    except Exception as e:
        print(f'  ! kakao_local 실패 {q}: {e}'); return []

def kakao_img(q):
    try:
        url = 'https://dapi.kakao.com/v2/search/image?' + urllib.parse.urlencode({'query': q, 'size': 1})
        req = urllib.request.Request(url, headers={'Authorization': f'KakaoAK {KAKAO}'})
        with urllib.request.urlopen(req, timeout=8) as r:
            docs = json.load(r).get('documents', [])
        return docs[0]['image_url'] if docs else ''
    except: return ''

def daum_rating(name, addr_hint=''):
    """다음 모바일 검색 평점·리뷰 (daum-merge 로직)"""
    addr_part = ''
    if addr_hint:
        m = re.search(r'(\S+동|\S+구)', addr_hint)
        if m: addr_part = m.group(1)
    q = f'{name} {addr_part}'.strip()
    try:
        url = f'https://m.search.daum.net/search?w=tot&q={urllib.parse.quote(q)}'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'})
        with urllib.request.urlopen(req, timeout=10) as r:
            html = r.read().decode('utf-8', errors='ignore')
    except: return 0, 0
    items = re.split(r'(?=<a href="https://place\.map\.kakao\.com)', html)
    rate_pat = re.compile(r'<span class="ico-g ico_star">평점</span>([\d.]+)\s*\((\d+)\)')
    review_pat = re.compile(r'리뷰\s*([\d,]+)')
    title_pat = re.compile(r'<strong class="tit-g">(.*?)</strong>', re.DOTALL)
    def norm(s): return re.sub(r'\s+', '', s)
    target = norm(name)
    for item in items[1:]:
        mt = title_pat.search(item)
        if not mt: continue
        cn = norm(re.sub(r'<[^>]+>', '', mt.group(1)))
        if target and (target in cn or cn.startswith(target[:max(4, len(target)//2)])):
            mr = rate_pat.search(item)
            if mr:
                rt = float(mr.group(1))
                if 1 <= rt <= 5:
                    mv = review_pat.search(item)
                    cnt = int(mv.group(1).replace(',', '')) if mv else int(mr.group(2))
                    if cnt == 999: cnt = 0
                    return rt, cnt
            break
    return 0, 0

CAT_MAP = {
    'izakaya': '이자카야', 'date': '데이트', 'budget': '가성비',
}

def kakao_cat_to_tags(cat_name):
    """카카오 category_name → tags/cat 추정"""
    tags = []
    if '술집' in cat_name or '포장마차' in cat_name or '호프' in cat_name: tags.append('야장')
    if '일식' in cat_name: tags.append('일식')
    if '양식' in cat_name or '이탈리아' in cat_name: tags.append('양식')
    if '한식' in cat_name: tags.append('한식')
    if '카페' in cat_name: tags.append('카페')
    if '중식' in cat_name: tags.append('중식')
    return tags

def main():
    collected = {}  # name -> record
    for postcat, queries in QUERIES.items():
        for q in queries:
            for doc in kakao_local(q, 8):
                name = doc.get('place_name', '').strip()
                if not name or name in collected: continue
                addr = doc.get('road_address_name') or doc.get('address_name') or ''
                if '마포' not in addr and '홍대' not in addr and '서교' not in addr and '동교' not in addr:
                    continue  # 홍대권 아닌 것 제외
                cat_name = doc.get('category_name', '')
                if '음식점' not in cat_name and '카페' not in cat_name:
                    continue
                rt, cnt = daum_rating(name, addr)
                img = kakao_img(f'{name} 홍대')
                cats = kakao_cat_to_tags(cat_name) or [CAT_MAP[postcat]]
                collected[name] = {
                    'name': name, 'type': cats[0] if cats else '음식점', 'e': '',
                    'rt': rt, 'cnt': cnt,
                    'addr': addr, 'hours': '', 'tel': doc.get('phone', ''),
                    'priceRange': '', 'lat': float(doc.get('y', 0)), 'lng': float(doc.get('x', 0)),
                    'cat': cats, 'tags': [], 'moods': [], 'wx': [], 'scene': [], 'rv': [],
                    'naverPlaceId': '', 'naverBlogCnt': 0, 'menuItems': [],
                    'keywords': [], 'naverUrl': '',
                    'imageUrl': img, 'imageUrl2': '', 'imageUrl3': '', 'imageUrl4': '',
                    'imageUrl5': '', 'imageUrl6': '', 'imageUrl7': '', 'imageUrl8': '',
                    'parking': False, 'reservation': False,
                    'postcat': postcat,
                    'updatedAt': '2026-05-16',
                }
                print(f'  [{postcat}] {name}: rt={rt} cnt={cnt} img={"Y" if img else "N"}', flush=True)
                time.sleep(0.5)
            time.sleep(0.3)

    arr = list(collected.values())
    out_fp = os.path.join(BASE, 'data', 'hongdae.js')
    new = 'const restaurants = [\n  ' + ',\n  '.join(
        json.dumps({k: v for k, v in r.items() if k != 'postcat'}, ensure_ascii=False) for r in arr
    ) + '\n]\n\nexport default restaurants\n'
    with open(out_fp, 'w') as f: f.write(new)
    # postcat 매핑 별도 저장 (포스팅 작성용)
    with open('/tmp/hongdae-postcat.json', 'w') as f:
        json.dump({r['name']: r['postcat'] for r in arr}, f, ensure_ascii=False, indent=1)
    print(f'\n✓ data/hongdae.js: {len(arr)}개 식당 수집')
    from collections import Counter
    print('  카테고리 분포:', dict(Counter(r['postcat'] for r in arr)))

if __name__ == '__main__':
    main()
