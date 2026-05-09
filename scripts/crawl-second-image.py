#!/usr/bin/env python3
"""
crawl-second-image.py — 식당별 2번째 이미지 URL 크롤링

네이버 검색에서 search.pstatic.net 프록시 이미지의 src에서
원본 이미지 URL(ldb-phinf / pup-review-phinf 등)을 추출.

사용법: python3 scripts/crawl-second-image.py [--region jamsil] [--limit 100]
"""
import json, os, re, sys, time, argparse
from urllib.parse import quote, unquote
import requests

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NAVER_DATA_DIR = os.path.join(BASE, 'scripts', 'naver-data')

parser = argparse.ArgumentParser()
parser.add_argument('--region', help='특정 지역만 처리')
parser.add_argument('--limit', type=int, default=0, help='지역당 최대 처리 수')
args = parser.parse_args()

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
}

REGION_DISPLAY = {
    'samseong': '삼성역', 'jamsil': '잠실', 'pangyo': '판교',
    'yeongtong': '영통', 'mangpo': '망포', 'yeongtongGu': '영통구청', 'suji': '수지',
    'gangnam': '강남역',
}

REGIONS = [args.region] if args.region else ['samseong', 'jamsil', 'pangyo', 'yeongtong', 'mangpo', 'yeongtongGu', 'suji', 'gangnam']

session = requests.Session()
session.headers.update(HEADERS)

def extract_second_image(name, region, existing_url):
    """네이버 검색에서 기존 이미지와 다른 2번째 이미지 URL 추출"""
    region_name = REGION_DISPLAY.get(region, region)
    query = f'{region_name} {name} 맛집'
    url = f'https://search.naver.com/search.naver?where=nexearch&query={quote(query)}'

    try:
        resp = session.get(url, timeout=15)
        if resp.status_code == 429:
            time.sleep(10)
            resp = session.get(url, timeout=15)
        if resp.status_code != 200:
            return None

        # search.pstatic.net 프록시에서 원본 URL 추출
        proxy_urls = re.findall(r'https://search\.pstatic\.net/common/\?[^"\s\']+', resp.text)

        existing_fname = existing_url.rsplit('/', 1)[-1] if existing_url else ''

        for proxy in proxy_urls:
            src_match = re.search(r'src=([^&]+)', proxy)
            if not src_match:
                continue
            original = unquote(src_match.group(1))
            if not any(d in original for d in ['ldb-phinf', 'pup-review-phinf', 'naverbooking-phinf']):
                continue
            # 기존과 동일 이미지 제외
            if original == existing_url:
                continue
            img_fname = original.rsplit('/', 1)[-1]
            if existing_fname and existing_fname == img_fname:
                continue
            return original

        return None
    except:
        return None


for region in REGIONS:
    data_file = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(data_file):
        continue

    with open(data_file, 'r', encoding='utf-8') as f:
        text = f.read()

    # imageUrl이 있고 imageUrl2가 없는 식당 추출
    # 블록 단위로 처리
    block_starts = [m.start() for m in re.finditer(r'\{\s*\n?\s*"name":', text)]
    block_starts.append(len(text))

    targets = []  # (name, existing_url, block_index)
    for i in range(len(block_starts) - 1):
        block = text[block_starts[i]:block_starts[i+1]]
        if '"imageUrl2"' in block:
            continue
        name_m = re.search(r'"name":\s*"([^"]+)"', block)
        img_m = re.search(r'"imageUrl":\s*"(https://[^"]+)"', block)
        if name_m and img_m:
            targets.append((name_m.group(1), img_m.group(1), i))

    print(f'\n═══ {REGION_DISPLAY.get(region, region)} ({region}) — {len(targets)}개 대상 ═══')

    limit = args.limit if args.limit > 0 else len(targets)
    found = 0
    results = {}

    for idx, (name, existing_url, _) in enumerate(targets[:limit]):
        time.sleep(2.5)
        second = extract_second_image(name, region, existing_url)
        if second:
            results[name] = second
            found += 1

        if (idx + 1) % 50 == 0:
            print(f'  [{idx+1}/{min(limit, len(targets))}] 2nd found: {found}')

    # 결과 주입
    injected = 0
    for name, url2 in results.items():
        escaped = re.escape(name)
        # imageUrl 바로 뒤에 imageUrl2 추가
        pat = re.compile(rf'("name":\s*"{escaped}"[^}}]*?"imageUrl":\s*"[^"]*")')
        m = pat.search(text)
        if m:
            text = text[:m.end()] + f',\n    "imageUrl2": "{url2}"' + text[m.end():]
            injected += 1

    with open(data_file, 'w', encoding='utf-8') as f:
        f.write(text)

    print(f'  {region}: {found}/{min(limit, len(targets))} found, {injected} injected')

print(f'\n완료!')
