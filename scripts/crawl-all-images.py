#!/usr/bin/env python3
"""
crawl-all-images.py — 전체 식당 이미지 수집 (5,160개 대상)

수집 순서:
1. 브라우저 데이터(naver-data/*-browser.json)의 imageUrl
2. data/*.js의 imageUrl 필드
3. 네이버 검색 결과 페이지에서 ldb-phinf 이미지 추출 (폴백)

사용법: python3 scripts/crawl-all-images.py [--region samseong] [--skip-naver]
출력:
  - public/images/restaurants/{region}/{slug}-{n}.jpg
  - scripts/all-images.json
"""

import json, os, re, sys, time, argparse
from urllib.parse import quote, unquote
import requests
from PIL import Image
from io import BytesIO

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(BASE, 'public', 'images', 'restaurants')
MAPPING_FILE = os.path.join(BASE, 'scripts', 'all-images.json')

RATE_LIMIT = 2.0
PHOTO_MAX_WIDTH = 800

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
}

session = requests.Session()
session.headers.update(HEADERS)

REGIONS = ['samseong', 'jamsil', 'pangyo', 'yeongtong', 'mangpo', 'yeongtongGu', 'suji']

REGION_DISPLAY = {
    'samseong': '삼성역', 'jamsil': '잠실', 'pangyo': '판교',
    'yeongtong': '영통', 'mangpo': '망포', 'yeongtongGu': '영통구청', 'suji': '수지',
}

# ── 유틸 ─────────────────────────────────────────────────────────
def safe_slug(name):
    s = re.sub(r'[^\w가-힣]', '-', name)
    s = re.sub(r'-+', '-', s).strip('-')
    return s[:40] or 'rest'

def download_image(url, save_path, max_width=PHOTO_MAX_WIDTH):
    """이미지 다운로드 + 리사이즈 + JPEG 저장"""
    try:
        resp = session.get(url, timeout=15)
        resp.raise_for_status()
        if len(resp.content) < 1000:
            return False
        img = Image.open(BytesIO(resp.content))
        img = img.convert('RGB')
        if img.width > max_width:
            ratio = max_width / img.width
            img = img.resize((max_width, int(img.height * ratio)), Image.LANCZOS)
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        img.save(save_path, 'JPEG', quality=82, optimize=True)
        return True
    except Exception as e:
        return False

# ── 이미지 소스 1: 브라우저 데이터 ──────────────────────────────
def build_browser_index():
    """naver-data/*-browser.json에서 지역별 이름/placeId → imageUrl 인덱스"""
    region_idx = {}  # region → { name → imageUrl }
    pid_idx = {}     # naverPlaceId → imageUrl (전체)

    for region in REGIONS:
        fpath = os.path.join(BASE, 'scripts', 'naver-data', f'{region}-browser.json')
        if not os.path.exists(fpath):
            continue
        region_idx[region] = {}
        for d in json.load(open(fpath, 'r', encoding='utf-8')):
            img = d.get('imageUrl', '')
            if not img:
                continue
            name = d.get('name', '').strip()
            npid = str(d.get('naverPlaceId', ''))
            if name:
                region_idx[region][name] = img
            if npid:
                pid_idx[npid] = img

    return region_idx, pid_idx

# ── 이미지 소스 2: data/*.js imageUrl ────────────────────────────
def load_region_data(region):
    """data/{region}.js에서 식당 목록 로드"""
    fpath = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(fpath):
        return []
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()
    m = re.search(r'(?:export\s+default\s+|=\s*)(\[[\s\S]*\])', text)
    if not m:
        return []
    arr = re.sub(r'\bundefined\b', 'null', m.group(1))
    arr = re.sub(r',\s*([}\]])', r'\1', arr)
    try:
        return json.loads(arr)
    except:
        return []

# ── 이미지 소스 3: 네이버 검색 HTML 스크래핑 ────────────────────
def search_naver_images(name, region_name, count=2):
    """네이버 검색 결과에서 식당 이미지 URL 추출"""
    query = f'{region_name} {name} 맛집'
    url = f'https://search.naver.com/search.naver?where=nexearch&query={quote(query)}'
    try:
        resp = session.get(url, timeout=15)
        if resp.status_code != 200:
            return []
        text = resp.text

        # search.pstatic.net 프록시에서 ldb-phinf 원본 추출
        proxy_srcs = re.findall(
            r'https://search\.pstatic\.net/common/\?[^"]*src=([^"&]+)', text
        )
        ldb_urls = []
        for src in proxy_srcs:
            decoded = unquote(unquote(src))
            if 'ldb-phinf.pstatic.net' in decoded:
                clean = re.sub(r'\?type=.*', '', decoded)
                ldb_urls.append(clean)
        ldb_urls = list(dict.fromkeys(ldb_urls))
        ldb_urls = [u for u in ldb_urls if 'searchad' not in u]
        if ldb_urls:
            return ldb_urls[:count]

        # 직접 ldb-phinf URL 패턴
        direct = re.findall(r'https://ldb-phinf\.pstatic\.net/[^"\'\\s>]+', text)
        direct = list(dict.fromkeys(direct))
        if direct:
            return direct[:count]
        return []
    except:
        return []

# ── 식당 이미지 URL 찾기 (3단계 폴백) ───────────────────────────
def find_image_urls(name, region, browser_region_idx, browser_pid_idx, rest_data):
    """여러 소스에서 식당 이미지 URL 찾기"""
    region_name = REGION_DISPLAY.get(region, region)

    # 1단계: 브라우저 데이터 이름 매칭
    br_idx = browser_region_idx.get(region, {})
    if name in br_idx:
        return [br_idx[name]], 'browser-exact'

    # 2단계: 브라우저 데이터 naverPlaceId 매칭
    npid = str(rest_data.get('naverPlaceId', ''))
    if npid and npid in browser_pid_idx:
        return [browser_pid_idx[npid]], 'browser-pid'

    # 3단계: 브라우저 데이터 부분 매칭
    for bname, bimg in br_idx.items():
        if len(name) >= 2 and (name in bname or bname in name):
            return [bimg], 'browser-partial'

    # 4단계: data 파일 imageUrl
    data_img = rest_data.get('imageUrl', '')
    if data_img:
        return [data_img], 'data-file'

    # 5단계: 네이버 검색 스크래핑 (옵션)
    if not args.skip_naver:
        time.sleep(RATE_LIMIT)
        naver_imgs = search_naver_images(name, region_name, count=2)
        if naver_imgs:
            return naver_imgs, 'naver-search'

    return [], 'miss'

# ── 메인 ─────────────────────────────────────────────────────────
parser = argparse.ArgumentParser()
parser.add_argument('--region', help='특정 지역만 처리', choices=REGIONS)
parser.add_argument('--skip-naver', action='store_true', help='네이버 검색 폴백 스킵 (빠른 처리)')
parser.add_argument('--limit', type=int, default=0, help='지역별 최대 처리 수 (테스트용)')
args = parser.parse_args()

regions_to_process = [args.region] if args.region else REGIONS

print('인덱스 빌드 중...')
browser_region_idx, browser_pid_idx = build_browser_index()
for r in REGIONS:
    cnt = len(browser_region_idx.get(r, {}))
    print(f'  {r}: 브라우저 {cnt}개')

# 기존 매핑 로드
mapping = {}
if os.path.exists(MAPPING_FILE):
    with open(MAPPING_FILE, 'r', encoding='utf-8') as f:
        mapping = json.load(f)

stats = {
    'browser-exact': 0, 'browser-pid': 0, 'browser-partial': 0,
    'data-file': 0, 'naver-search': 0, 'miss': 0,
    'skipped': 0, 'downloaded': 0, 'download-fail': 0,
}

for region in regions_to_process:
    restaurants = load_region_data(region)
    if not restaurants:
        print(f'\n{region}: 데이터 없음')
        continue

    if region not in mapping:
        mapping[region] = {}

    limit = args.limit if args.limit > 0 else len(restaurants)
    print(f'\n═══ {REGION_DISPLAY.get(region, region)} ({region}) — {min(limit, len(restaurants))}/{len(restaurants)}개 ═══')

    processed = 0
    for r in restaurants:
        if processed >= limit:
            break

        rname = r.get('name', '')
        if not rname:
            continue

        processed += 1
        rslug = safe_slug(rname)
        region_img_dir = os.path.join(IMG_DIR, region)

        # 이미 수집한 식당 스킵
        existing = mapping[region].get(rname, [])
        if existing:
            stats['skipped'] += 1
            continue

        # 이미지 URL 찾기
        img_urls, method = find_image_urls(
            rname, region, browser_region_idx, browser_pid_idx, r
        )

        if not img_urls:
            mapping[region][rname] = []
            stats[method] += 1
            if processed % 100 == 0:
                print(f'  [{processed}/{len(restaurants)}] {rname}: {method}')
            continue

        # 다운로드
        saved_paths = []
        for i, img_url in enumerate(img_urls[:2]):
            fname = f'{rslug}-{i+1}.jpg'
            fpath = os.path.join(region_img_dir, fname)
            web_path = f'/images/restaurants/{region}/{fname}'

            if os.path.exists(fpath):
                saved_paths.append(web_path)
                continue

            ok = download_image(img_url, fpath)
            if ok:
                saved_paths.append(web_path)
                stats['downloaded'] += 1
            else:
                stats['download-fail'] += 1

        mapping[region][rname] = saved_paths
        stats[method] += 1

        if processed % 100 == 0:
            print(f'  [{processed}/{len(restaurants)}] 진행 중... (다운로드: {stats["downloaded"]})')

    # 지역별 중간 저장
    with open(MAPPING_FILE, 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False, indent=2)

    region_total = len(mapping[region])
    region_with_img = sum(1 for v in mapping[region].values() if v)
    print(f'  {region} 완료: {region_with_img}/{region_total} ({region_with_img*100//max(region_total,1)}%)')

# 최종 저장
with open(MAPPING_FILE, 'w', encoding='utf-8') as f:
    json.dump(mapping, f, ensure_ascii=False, indent=2)

# 통계
total_rests = sum(len(v) for v in mapping.values())
total_with_img = sum(1 for v in mapping.values() for imgs in v.values() if imgs)
total_imgs = sum(len(imgs) for v in mapping.values() for imgs in v.values())

print(f'\n══════════════════════════════════════')
print(f'완료!')
print(f'  다운로드: {stats["downloaded"]}장 | 실패: {stats["download-fail"]}')
print(f'  방법별: exact={stats["browser-exact"]} pid={stats["browser-pid"]} '
      f'partial={stats["browser-partial"]} data={stats["data-file"]} '
      f'search={stats["naver-search"]} miss={stats["miss"]} skip={stats["skipped"]}')
print(f'  총 식당: {total_rests} | 이미지 있음: {total_with_img} ({total_with_img*100//max(total_rests,1)}%)')
print(f'  총 이미지: {total_imgs}장')
print(f'  매핑: {MAPPING_FILE}')
