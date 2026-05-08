#!/usr/bin/env python3
"""
inject-images-to-data.py — all-images.json의 로컬 이미지 경로를 data/*.js에 imageUrl로 주입
"""
import json, os, re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAPPING_FILE = os.path.join(BASE, 'scripts', 'all-images.json')

# all-images.json 로드
with open(MAPPING_FILE) as f:
    all_images = json.load(f)

REGIONS = ['samseong', 'jamsil', 'pangyo', 'yeongtong', 'mangpo', 'yeongtongGu', 'suji']

for region in REGIONS:
    data_file = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(data_file):
        print(f'  {region}: 파일 없음, 건너뜀')
        continue

    with open(data_file, 'r') as f:
        text = f.read()

    region_images = all_images.get(region, {})
    updated = 0
    skipped = 0

    # 각 식당 name에 대해 imageUrl 주입
    for name, paths in region_images.items():
        if not paths:
            continue
        local_path = paths[0]  # 첫 번째 이미지 사용

        # 해당 식당 블록에서 imageUrl 찾기/교체
        # "name": "식당명" 뒤에 imageUrl이 있는지 확인
        # name을 정규식 이스케이프
        escaped_name = re.escape(name)

        # 이미 imageUrl이 있는 경우 — 로컬 경로로 교체
        pattern_existing = rf'("name":\s*"{escaped_name}".*?)("imageUrl":\s*"[^"]*")'
        match = re.search(pattern_existing, text, re.DOTALL)
        if match:
            old_url = match.group(2)
            new_url = f'"imageUrl": "{local_path}"'
            if old_url != new_url:
                text = text[:match.start(2)] + new_url + text[match.end(2):]
                updated += 1
            else:
                skipped += 1
            continue

        # imageUrl이 없는 경우 — naverUrl 또는 updatedAt 뒤에 추가
        # updatedAt 바로 뒤에 추가
        pattern_insert = rf'("name":\s*"{escaped_name}".*?)("updatedAt":\s*"[^"]*")'
        match = re.search(pattern_insert, text, re.DOTALL)
        if match:
            insert_after = match.end(2)
            text = text[:insert_after] + f',\n    "imageUrl": "{local_path}"' + text[insert_after:]
            updated += 1
            continue

        # naverUrl 뒤에 추가
        pattern_naver = rf'("name":\s*"{escaped_name}".*?)("naverUrl":\s*"[^"]*")'
        match = re.search(pattern_naver, text, re.DOTALL)
        if match:
            insert_after = match.end(2)
            text = text[:insert_after] + f',\n    "imageUrl": "{local_path}"' + text[insert_after:]
            updated += 1
            continue

        # 아무것도 못 찾으면 lat 앞에 추가
        pattern_lat = rf'("name":\s*"{escaped_name}".*?)("lat":\s*[\d.]+)'
        match = re.search(pattern_lat, text, re.DOTALL)
        if match:
            insert_before = match.start(2)
            text = text[:insert_before] + f'"imageUrl": "{local_path}",\n    ' + text[insert_before:]
            updated += 1

    with open(data_file, 'w') as f:
        f.write(text)

    total = len(region_images)
    print(f'  {region}: {updated} updated, {skipped} skipped, {total} total in mapping')

print('\n완료!')
