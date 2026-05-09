#!/usr/bin/env python3
"""
inject-second-images.py — imageUrl2가 없는 식당에 2번째 이미지 크롤+주입

crawl-second-image.py의 주입 정규식 버그(중첩 } 문제) 수정 버전.
블록 단위로 안전하게 처리.

사용법: python3 scripts/inject-second-images.py [--region jamsil] [--limit 100]
"""
import json, os, re, sys, time, argparse
from urllib.parse import quote, unquote
import requests

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

parser = argparse.ArgumentParser()
parser.add_argument('--region', help='특정 지역만 처리')
parser.add_argument('--limit', type=int, default=0, help='지역당 최대 처리 수')
parser.add_argument('--inject-only', action='store_true', help='크롤 없이 기존 데이터 재주입만')
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

ALL_REGIONS = ['samseong', 'jamsil', 'pangyo', 'yeongtong', 'mangpo', 'yeongtongGu', 'suji', 'gangnam']
REGIONS = [args.region] if args.region else ALL_REGIONS

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

        proxy_urls = re.findall(r'https://search\.pstatic\.net/common/\?[^"\s\']+', resp.text)

        existing_fname = existing_url.rsplit('/', 1)[-1] if existing_url else ''

        for proxy in proxy_urls:
            src_match = re.search(r'src=([^&]+)', proxy)
            if not src_match:
                continue
            original = unquote(src_match.group(1))
            if not any(d in original for d in ['ldb-phinf', 'pup-review-phinf', 'naverbooking-phinf']):
                continue
            if original == existing_url:
                continue
            img_fname = original.rsplit('/', 1)[-1]
            if existing_fname and existing_fname == img_fname:
                continue
            return original

        return None
    except:
        return None


def split_blocks(text):
    """식당 블록 단위로 분리 — 중첩 {} 안전 처리"""
    block_starts = [m.start() for m in re.finditer(r'\{\s*\n?\s*"name":', text)]
    blocks = []
    for i, start in enumerate(block_starts):
        end = block_starts[i + 1] if i + 1 < len(block_starts) else len(text)
        blocks.append((start, end))
    return blocks


def inject_imageurl2(text, name, url2):
    """블록 단위로 imageUrl2 주입 — 중첩 } 안전"""
    blocks = split_blocks(text)

    for start, end in blocks:
        block = text[start:end]
        # 이 블록이 대상 식당인지 확인
        name_match = re.search(r'"name":\s*"([^"]+)"', block)
        if not name_match or name_match.group(1) != name:
            continue
        # 이미 imageUrl2 있으면 스킵
        if '"imageUrl2"' in block:
            return text, False
        # imageUrl 찾기
        img_match = re.search(r'"imageUrl":\s*"[^"]*"', block)
        if not img_match:
            return text, False
        # imageUrl 바로 뒤에 imageUrl2 삽입
        abs_pos = start + img_match.end()
        text = text[:abs_pos] + f',\n    "imageUrl2": "{url2}"' + text[abs_pos:]
        return text, True

    return text, False


for region in REGIONS:
    data_file = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(data_file):
        continue

    with open(data_file, 'r', encoding='utf-8') as f:
        text = f.read()

    # imageUrl이 있고 imageUrl2가 없는 식당 추출
    blocks = split_blocks(text)
    targets = []
    for start, end in blocks:
        block = text[start:end]
        if '"imageUrl2"' in block:
            continue
        name_m = re.search(r'"name":\s*"([^"]+)"', block)
        img_m = re.search(r'"imageUrl":\s*"(https://[^"]+)"', block)
        if name_m and img_m:
            targets.append((name_m.group(1), img_m.group(1)))

    print(f'\n═══ {REGION_DISPLAY.get(region, region)} ({region}) — {len(targets)}개 대상 ═══')

    if args.inject_only:
        print(f'  --inject-only: 크롤 건너뜀')
        continue

    limit = args.limit if args.limit > 0 else len(targets)
    found = 0
    injected = 0

    for idx, (name, existing_url) in enumerate(targets[:limit]):
        time.sleep(2.5)
        second = extract_second_image(name, region, existing_url)
        if second:
            text, ok = inject_imageurl2(text, name, second)
            found += 1
            if ok:
                injected += 1

        if (idx + 1) % 50 == 0:
            # 중간 저장
            with open(data_file, 'w', encoding='utf-8') as f:
                f.write(text)
            print(f'  [{idx+1}/{min(limit, len(targets))}] found: {found}, injected: {injected} (중간저장)')

    with open(data_file, 'w', encoding='utf-8') as f:
        f.write(text)

    print(f'  {region}: {found}/{min(limit, len(targets))} found, {injected} injected')

print(f'\n완료!')
