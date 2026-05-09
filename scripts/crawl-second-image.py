#!/usr/bin/env python3
"""
crawl-second-image.py — 식당별 2번째 이미지 URL 크롤링

네이버 검색 결과에서 search.pstatic.net 프록시 이미지의 src 파라미터에서
원본 이미지 URL(ldb-phinf / pup-review-phinf 등)을 추출한다.

기존 imageUrl과 다른 이미지를 imageUrl2로 data/*.js에 주입.
"""
import json, os, re, sys, time
from urllib.parse import quote, unquote
import requests

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NAVER_DATA_DIR = os.path.join(BASE, 'scripts', 'naver-data')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
}

REGION_DISPLAY = {
    'samseong': '삼성역', 'jamsil': '잠실', 'pangyo': '판교',
    'yeongtong': '영통', 'mangpo': '망포', 'yeongtongGu': '영통구청', 'suji': '수지',
}

REGIONS = ['samseong', 'jamsil', 'pangyo', 'yeongtong', 'mangpo', 'yeongtongGu', 'suji']

session = requests.Session()
session.headers.update(HEADERS)

def extract_image_urls_from_search(name, region):
    """네이버 검색에서 식당 이미지 URL들 추출"""
    region_name = REGION_DISPLAY.get(region, region)
    query = f'{region_name} {name}'
    url = f'https://search.naver.com/search.naver?where=nexearch&query={quote(query)}'

    try:
        resp = session.get(url, timeout=15)
        if resp.status_code != 200:
            return []

        # search.pstatic.net 프록시에서 원본 URL 추출
        proxy_urls = re.findall(r'https://search\.pstatic\.net/common/\?[^"\s\']+', resp.text)

        image_urls = []
        seen = set()
        for proxy in proxy_urls:
            src_match = re.search(r'src=([^&]+)', proxy)
            if not src_match:
                continue
            original = unquote(src_match.group(1))
            # 식당 관련 이미지만 필터 (ldb-phinf, pup-review-phinf, naverbooking-phinf)
            if not any(domain in original for domain in ['ldb-phinf', 'pup-review-phinf', 'naverbooking-phinf']):
                continue
            # 너무 작은 이미지 제외 (type=f 등 썸네일)
            if 'type=f' in proxy and ('40_40' in proxy or '60_60' in proxy):
                continue
            if original not in seen:
                seen.add(original)
                image_urls.append(original)

        return image_urls
    except:
        return []


# 결과 저장용
results = {}  # region → { name → imageUrl2 }

for region in REGIONS:
    # 브라우저 데이터에서 기존 imageUrl 매핑
    browser_file = os.path.join(NAVER_DATA_DIR, f'{region}-browser.json')
    if not os.path.exists(browser_file):
        continue

    with open(browser_file, 'r', encoding='utf-8') as f:
        browser_data = json.load(f)

    name_to_existing = {}
    for d in browser_data:
        name = d.get('name', '')
        img = d.get('imageUrl', '')
        if name and img:
            name_to_existing[name] = img

    # data 파일에서 식당 목록
    data_file = os.path.join(BASE, 'data', f'{region}.js')
    with open(data_file, 'r', encoding='utf-8') as f:
        text = f.read()

    # imageUrl2가 이미 있는 식당 스킵
    already_has = set(re.findall(r'"name":\s*"([^"]+)"[^}]*"imageUrl2"', text, re.DOTALL))

    # imageUrl이 있는 식당만 대상 (1번째 이미지가 있어야 2번째도 의미)
    names_with_img = re.findall(r'"name":\s*"([^"]+)"[^}]*"imageUrl":\s*"(https://[^"]+)"', text, re.DOTALL)

    region_results = {}
    count = 0
    skipped = 0

    print(f'\n═══ {REGION_DISPLAY.get(region, region)} ({region}) — {len(names_with_img)}개 대상 ═══')

    for name, existing_url in names_with_img:
        if name in already_has:
            skipped += 1
            continue

        time.sleep(1.5)
        imgs = extract_image_urls_from_search(name, region)

        # 기존 이미지와 다른 것 찾기
        second = None
        for img in imgs:
            # 동일 이미지 제외 (URL 앞부분 비교)
            if img == existing_url:
                continue
            # 같은 파일명 제외
            existing_fname = existing_url.rsplit('/', 1)[-1] if existing_url else ''
            img_fname = img.rsplit('/', 1)[-1]
            if existing_fname and existing_fname == img_fname:
                continue
            second = img
            break

        if second:
            region_results[name] = second
            count += 1

        if (count + skipped) % 100 == 0:
            print(f'  [{count + skipped}/{len(names_with_img)}] 진행 중... (2nd: {count})')

    results[region] = region_results
    print(f'  {region} 완료: {count}/{len(names_with_img)} (2nd 이미지 찾음)')

    # data 파일에 imageUrl2 주입
    injected = 0
    for name, url2 in region_results.items():
        escaped = re.escape(name)
        # imageUrl 바로 뒤에 imageUrl2 추가
        pat = re.compile(rf'("name":\s*"{escaped}"[^}}]*?"imageUrl":\s*"[^"]*")')
        m = pat.search(text)
        if m:
            text = text[:m.end()] + f',\n    "imageUrl2": "{url2}"' + text[m.end():]
            injected += 1

    with open(data_file, 'w', encoding='utf-8') as f:
        f.write(text)

    print(f'  주입: {injected}개')

print(f'\n완료!')
