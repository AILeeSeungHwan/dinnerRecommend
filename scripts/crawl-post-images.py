#!/usr/bin/env python3
"""
crawl-post-images.py — 포스트 식당 이미지 수집

수집 순서:
1. 브라우저 데이터(naver-data/*-browser.json)의 imageUrl
2. data/*.js의 imageUrl 필드
3. 네이버 검색 결과 페이지에서 ldb-phinf 이미지 추출 (폴백)

사용법: python3 scripts/crawl-post-images.py
출력:
  - public/images/posts/{postId}/{slug}-{n}.jpg
  - public/images/posts/{postId}/thumb.jpg
  - scripts/post-images.json
"""

import json, os, re, sys, time
from urllib.parse import quote, unquote
import requests
from PIL import Image
from io import BytesIO

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE, 'scripts', 'post-data')
IMG_DIR = os.path.join(BASE, 'public', 'images', 'posts')
MAPPING_FILE = os.path.join(BASE, 'scripts', 'post-images.json')

RATE_LIMIT = 2.0
PHOTO_MAX_WIDTH = 800
THUMB_SIZE = (1200, 630)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
}

session = requests.Session()
session.headers.update(HEADERS)

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
        if len(resp.content) < 1000:  # 너무 작은 파일 (에러 페이지 등)
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

def create_thumbnail(source_path, thumb_path):
    """1200x630 center crop thumbnail"""
    try:
        img = Image.open(source_path).convert('RGB')
        tw, th = THUMB_SIZE
        target_ratio = tw / th
        current_ratio = img.width / img.height
        if current_ratio > target_ratio:
            new_width = int(img.height * target_ratio)
            left = (img.width - new_width) // 2
            img = img.crop((left, 0, left + new_width, img.height))
        else:
            new_height = int(img.width / target_ratio)
            top = (img.height - new_height) // 2
            img = img.crop((0, top, img.width, top + new_height))
        img = img.resize(THUMB_SIZE, Image.LANCZOS)
        img.save(thumb_path, 'JPEG', quality=85, optimize=True)
        return True
    except:
        return False

# ── 이미지 소스 1: 브라우저 데이터 ──────────────────────────────
def build_browser_index():
    """naver-data/*-browser.json에서 이름/placeId → imageUrl 인덱스"""
    name_idx = {}  # name → imageUrl
    pid_idx = {}   # naverPlaceId → imageUrl

    for region in ['samseong', 'jamsil', 'pangyo', 'yeongtong', 'mangpo', 'yeongtongGu']:
        fpath = os.path.join(BASE, 'scripts', 'naver-data', f'{region}-browser.json')
        if not os.path.exists(fpath):
            continue
        for d in json.load(open(fpath, 'r', encoding='utf-8')):
            img = d.get('imageUrl', '')
            if not img:
                continue
            name = d.get('name', '').strip()
            npid = str(d.get('naverPlaceId', ''))
            if name:
                name_idx[name] = img
            if npid:
                pid_idx[npid] = img

    return name_idx, pid_idx

# ── 이미지 소스 2: data/*.js imageUrl ────────────────────────────
def build_data_index():
    """data/*.js에서 name → (imageUrl, naverPlaceId) 인덱스"""
    idx = {}
    for fname in ['samseong.js', 'jamsil.js', 'pangyo.js', 'yeongtong.js', 'mangpo.js', 'yeongtongGu.js']:
        fpath = os.path.join(BASE, 'data', fname)
        if not os.path.exists(fpath):
            continue
        with open(fpath, 'r', encoding='utf-8') as f:
            text = f.read()
        m = re.search(r'(?:export\s+default\s+|=\s*)(\[[\s\S]*\])', text)
        if not m:
            continue
        arr = re.sub(r'\bundefined\b', 'null', m.group(1))
        arr = re.sub(r',\s*([}\]])', r'\1', arr)
        try:
            rests = json.loads(arr)
        except:
            continue
        for r in rests:
            name = r.get('name', '')
            if name:
                idx[name] = {
                    'imageUrl': r.get('imageUrl', ''),
                    'naverPlaceId': str(r.get('naverPlaceId', '')),
                }
    return idx

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

        # 방법 1: search.pstatic.net 프록시에서 ldb-phinf 원본 추출
        proxy_srcs = re.findall(
            r'https://search\.pstatic\.net/common/\?[^"]*src=([^"&]+)',
            text
        )
        ldb_urls = []
        for src in proxy_srcs:
            decoded = unquote(unquote(src))  # 더블 인코딩 처리
            if 'ldb-phinf.pstatic.net' in decoded:
                # 타입 파라미터 정리
                clean = re.sub(r'\?type=.*', '', decoded)
                ldb_urls.append(clean)

        # 중복 제거
        ldb_urls = list(dict.fromkeys(ldb_urls))

        # 광고 이미지 제외 (searchad 포함된 것)
        ldb_urls = [u for u in ldb_urls if 'searchad' not in u]

        if ldb_urls:
            return ldb_urls[:count]

        # 방법 2: 직접 ldb-phinf URL 패턴 추출
        direct = re.findall(r'https://ldb-phinf\.pstatic\.net/[^"\'\\s>]+', text)
        direct = list(dict.fromkeys(direct))
        if direct:
            return direct[:count]

        return []
    except:
        return []

# ── 식당 이미지 URL 찾기 (3단계 폴백) ───────────────────────────
def find_image_url(name, region_name, browser_name_idx, browser_pid_idx, data_idx):
    """여러 소스에서 식당 이미지 URL 찾기"""

    # 1단계: 브라우저 데이터 이름 매칭
    if name in browser_name_idx:
        return [browser_name_idx[name]], 'browser-exact'

    # 2단계: 브라우저 데이터 naverPlaceId 매칭
    data_info = data_idx.get(name, {})
    npid = data_info.get('naverPlaceId', '')
    if npid and npid in browser_pid_idx:
        return [browser_pid_idx[npid]], 'browser-pid'

    # 3단계: 브라우저 데이터 부분 매칭
    for bname, bimg in browser_name_idx.items():
        if len(name) >= 2 and (name in bname or bname in name):
            return [bimg], 'browser-partial'

    # 4단계: data 파일 imageUrl
    data_img = data_info.get('imageUrl', '')
    if data_img:
        return [data_img], 'data-file'

    # 5단계: 네이버 검색 스크래핑
    time.sleep(RATE_LIMIT)
    naver_imgs = search_naver_images(name, region_name, count=2)
    if naver_imgs:
        return naver_imgs, 'naver-search'

    return [], 'miss'

# ── 메인 ─────────────────────────────────────────────────────────
def main():
    print('인덱스 빌드 중...')
    browser_name_idx, browser_pid_idx = build_browser_index()
    data_idx = build_data_index()
    print(f'  브라우저 이름: {len(browser_name_idx)} | pid: {len(browser_pid_idx)} | data: {len(data_idx)}')

    # 기존 매핑 로드
    mapping = {}
    if os.path.exists(MAPPING_FILE):
        with open(MAPPING_FILE, 'r', encoding='utf-8') as f:
            mapping = json.load(f)

    # 포스트 데이터 로드
    post_files = sorted(
        [f for f in os.listdir(DATA_DIR) if f.endswith('.json')],
        key=lambda x: int(x.split('.')[0])
    )

    stats = {'browser-exact': 0, 'browser-pid': 0, 'browser-partial': 0,
             'data-file': 0, 'naver-search': 0, 'miss': 0, 'skipped': 0, 'downloaded': 0}

    for pfile in post_files:
        with open(os.path.join(DATA_DIR, pfile), 'r', encoding='utf-8') as f:
            post_data = json.load(f)

        pid = str(post_data['id'])
        slug = post_data['slug']
        restaurants = post_data.get('restaurants', [])

        if not restaurants:
            continue

        print(f'\n═══ Post {pid} ({slug}) — {len(restaurants)}개 식당 ═══')

        if pid not in mapping:
            mapping[pid] = {'thumb': '', 'restaurants': {}}

        post_img_dir = os.path.join(IMG_DIR, pid)
        first_image_path = None

        for r in restaurants:
            rname = r['name']
            rslug = safe_slug(rname)
            region_name = r.get('regionName', '')

            # 이미 수집한 식당 스킵
            existing = mapping[pid].get('restaurants', {}).get(rname, [])
            if existing:
                stats['skipped'] += 1
                if not first_image_path:
                    fp = os.path.join(BASE, 'public', existing[0].lstrip('/'))
                    if os.path.exists(fp):
                        first_image_path = fp
                continue

            # 이미지 URL 찾기
            img_urls, method = find_image_url(
                rname, region_name,
                browser_name_idx, browser_pid_idx, data_idx
            )

            if not img_urls:
                print(f'  [{rname}] {method}')
                mapping[pid]['restaurants'][rname] = []
                stats[method] += 1
                continue

            # 다운로드
            saved_paths = []
            for i, img_url in enumerate(img_urls[:2]):
                fname = f'{rslug}-{i+1}.jpg'
                fpath = os.path.join(post_img_dir, fname)
                web_path = f'/images/posts/{pid}/{fname}'

                if os.path.exists(fpath):
                    saved_paths.append(web_path)
                    continue

                ok = download_image(img_url, fpath)
                if ok:
                    saved_paths.append(web_path)
                    stats['downloaded'] += 1
                    print(f'  [{rname}] {method} → {fname}')
                else:
                    print(f'  [{rname}] 다운로드 실패')

            mapping[pid]['restaurants'][rname] = saved_paths
            stats[method] += 1

            if not first_image_path and saved_paths:
                first_image_path = os.path.join(BASE, 'public', saved_paths[0].lstrip('/'))

        # 썸네일 생성
        thumb_path = os.path.join(post_img_dir, 'thumb.jpg')
        if first_image_path and os.path.exists(first_image_path) and not os.path.exists(thumb_path):
            if create_thumbnail(first_image_path, thumb_path):
                mapping[pid]['thumb'] = f'/images/posts/{pid}/thumb.jpg'
                print(f'  [썸네일] thumb.jpg')
        elif os.path.exists(thumb_path):
            mapping[pid]['thumb'] = f'/images/posts/{pid}/thumb.jpg'

        # 중간 저장
        with open(MAPPING_FILE, 'w', encoding='utf-8') as f:
            json.dump(mapping, f, ensure_ascii=False, indent=2)

    # 최종 저장
    with open(MAPPING_FILE, 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False, indent=2)

    # 통계
    total_imgs = sum(
        len(imgs) for v in mapping.values()
        for imgs in v.get('restaurants', {}).values()
    )
    thumbs = sum(1 for v in mapping.values() if v.get('thumb'))

    print(f'\n══════════════════════════════════════')
    print(f'완료!')
    print(f'  다운로드: {stats["downloaded"]}장')
    print(f'  방법별: exact={stats["browser-exact"]} pid={stats["browser-pid"]} '
          f'partial={stats["browser-partial"]} data={stats["data-file"]} '
          f'search={stats["naver-search"]} miss={stats["miss"]}')
    print(f'  총 이미지: {total_imgs}장 | 썸네일: {thumbs}개')
    print(f'  매핑: {MAPPING_FILE}')

if __name__ == '__main__':
    main()
