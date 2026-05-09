#!/usr/bin/env python3
"""
inject-cdn-images.py — naver-data/*-browser.json의 CDN URL을 data/*.js의 imageUrl로 주입

식당 블록 단위로 안전하게 처리:
  - 기존 로컬 경로 → CDN URL 교체
  - imageUrl 없는 식당 → CDN URL 추가
"""
import json, os, re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NAVER_DATA_DIR = os.path.join(BASE, 'scripts', 'naver-data')
REGIONS = ['samseong', 'jamsil', 'pangyo', 'yeongtong', 'mangpo', 'yeongtongGu', 'suji', 'gangnam']

for region in REGIONS:
    browser_file = os.path.join(NAVER_DATA_DIR, f'{region}-browser.json')
    if not os.path.exists(browser_file):
        print(f'  {region}: 브라우저 데이터 없음')
        continue

    with open(browser_file, 'r', encoding='utf-8') as f:
        browser_data = json.load(f)

    name_to_cdn = {}
    pid_to_cdn = {}
    for d in browser_data:
        name = d.get('name', '')
        img = d.get('imageUrl', '')
        pid = str(d.get('id', ''))
        if name and img and img.startswith('http'):
            name_to_cdn[name] = img
        if pid and img and img.startswith('http'):
            pid_to_cdn[pid] = img

    data_file = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(data_file):
        continue

    with open(data_file, 'r', encoding='utf-8') as f:
        text = f.read()

    # 식당 블록을 개별 분리: { "name": "..." ... } 단위
    # 각 블록의 시작 위치 찾기
    block_starts = [m.start() for m in re.finditer(r'\{\s*\n\s*"name":', text)]
    block_starts.append(len(text))  # 끝 sentinel

    replaced = 0
    added = 0
    new_text_parts = []
    prev_end = 0

    for i in range(len(block_starts) - 1):
        start = block_starts[i]
        end = block_starts[i + 1]
        block = text[start:end]

        # 이 블록 앞 텍스트 추가
        new_text_parts.append(text[prev_end:start])

        # name 추출
        name_match = re.search(r'"name":\s*"([^"]+)"', block)
        if not name_match:
            new_text_parts.append(block)
            prev_end = end
            continue

        name = name_match.group(1)

        # naverPlaceId 추출
        pid_match = re.search(r'"naverPlaceId":\s*"([^"]+)"', block)
        npid = pid_match.group(1) if pid_match else ''

        # CDN URL 찾기
        cdn_url = name_to_cdn.get(name, '')
        if not cdn_url and npid:
            cdn_url = pid_to_cdn.get(npid, '')

        if not cdn_url:
            new_text_parts.append(block)
            prev_end = end
            continue

        # 기존 imageUrl 교체
        img_match = re.search(r'"imageUrl":\s*"[^"]*"', block)
        if img_match:
            block = block[:img_match.start()] + f'"imageUrl": "{cdn_url}"' + block[img_match.end():]
            replaced += 1
        else:
            # imageUrl 없으면 추가 — lat 앞에
            lat_match = re.search(r'\n(\s*)"lat":', block)
            if lat_match:
                insert_pos = lat_match.start()
                indent = lat_match.group(1)
                block = block[:insert_pos] + f'\n{indent}"imageUrl": "{cdn_url}",' + block[insert_pos:]
                added += 1

        new_text_parts.append(block)
        prev_end = end

    # 마지막 잔여 부분
    new_text_parts.append(text[prev_end:])
    text = ''.join(new_text_parts)

    with open(data_file, 'w', encoding='utf-8') as f:
        f.write(text)

    print(f'  {region}: {replaced} replaced, {added} added (CDN sources: {len(name_to_cdn)})')

print('\n완료!')
