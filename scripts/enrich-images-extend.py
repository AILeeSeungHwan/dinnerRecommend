#!/usr/bin/env python3
"""
enrich-images-extend.py — 모든 식당 이미지를 최대 8장까지 확장 보강

기존 imageUrl 있어도 imageUrl2~8까지 보강. home + photo + menu/list 다중 페이지 파싱.

사용법: python3 scripts/enrich-images-extend.py [region|all]
"""
import os, re, sys, json, time, random, urllib.request, urllib.error

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOG = os.path.join(BASE, 'scripts', 'naver-data', 'img-extend.log')
REGIONS = ['samseong','jamsil','pangyo','yeongtong','mangpo','yeongtongGu','suji','gangnam']
HEADERS = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/122.0.0.0',
    'Accept-Language':'ko-KR,ko;q=0.9'
}
MAX_IMAGES = 8

def log(m):
    with open(LOG, 'a', encoding='utf-8') as f: f.write(f'[{time.strftime("%H:%M:%S")}] {m}\n')
    print(m, flush=True)

def http(url, timeout=12):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.read().decode('utf-8', 'ignore')
    except Exception:
        return ''

def extract_images(html):
    raw = html.replace('\\u002F', '/')
    urls = re.findall(r'https?://[a-z0-9-]+\.pstatic\.net/[^"\\\s]+\.(?:jpg|jpeg|png|JPEG|JPG|PNG)', raw)
    # 네이버 공통 favicon/icon/assets placeholder 필터
    BAD = ('g-place.pstatic.net', '/assets/shared/', '/favicon', '/icon-')
    out, seen = [], set()
    for u in urls:
        if u in seen: continue
        if any(b in u for b in BAD): continue
        seen.add(u); out.append(u)
    return out

def fetch_all_images(pid):
    """home + photo + menu/list 페이지에서 이미지 모두 모음."""
    all_imgs = []
    for path in ['home', 'photo', 'menu/list']:
        html = http(f'https://pcmap.place.naver.com/restaurant/{pid}/{path}')
        time.sleep(random.uniform(0.4, 0.8))
        for u in extract_images(html):
            if u not in all_imgs:
                all_imgs.append(u)
        if len(all_imgs) >= MAX_IMAGES * 2:
            break
    return all_imgs[:MAX_IMAGES]

def process_region(region):
    p = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(p):
        log(f'  {region}: 파일 없음'); return
    with open(p) as f: text = f.read()

    # 모든 식당 (placeId 있는 것)
    targets = []
    for m in re.finditer(r'"name":\s*"([^"]+)"[\s\S]*?"naverPlaceId":\s*"(\d+)"', text):
        targets.append((m.group(1), m.group(2)))

    log(f'=== {region}: 총 {len(targets)}개 처리 ===')
    updated = 0
    for i, (name, pid) in enumerate(targets, 1):
        images = fetch_all_images(pid)
        if len(images) < 1:
            continue

        # 식당 객체 단위 갱신
        idx = text.find(f'"name": "{name}"')
        if idx < 0: continue
        obj_start = text.rfind('{', 0, idx)
        depth=0; j=obj_start
        while j<len(text):
            if text[j]=='{':depth+=1
            elif text[j]=='}':
                depth-=1
                if depth==0:break
            j+=1
        obj = text[obj_start:j+1]
        new_obj = obj

        # 8개 키 처리: imageUrl, imageUrl2, ... imageUrl8
        keys = ['imageUrl'] + [f'imageUrl{k}' for k in range(2, MAX_IMAGES+1)]
        for k_idx, key in enumerate(keys):
            if k_idx >= len(images): break
            val = json.dumps(images[k_idx], ensure_ascii=False)
            if f'"{key}"' in new_obj:
                # 갱신
                new_obj = re.sub(rf'"{key}":\s*"[^"]*"', f'"{key}": {val}', new_obj, count=1)
            else:
                # 이전 키 뒤에 삽입
                prev_key = keys[k_idx - 1] if k_idx > 0 else None
                if prev_key and f'"{prev_key}"' in new_obj:
                    new_obj = re.sub(rf'("{prev_key}":\s*"[^"]*")',
                        rf'\1, "{key}": {val}', new_obj, count=1)
        if new_obj != obj:
            text = text[:obj_start] + new_obj + text[j+1:]
            updated += 1
            if updated <= 3 or i % 30 == 0:
                log(f'  [{i}/{len(targets)}] {name}: {len(images)}장')
        if i % 40 == 0:
            with open(p, 'w') as f: f.write(text)
            log(f'  체크포인트 {i}/{len(targets)} 갱신 {updated}')
        time.sleep(random.uniform(0.4, 0.8))

    with open(p, 'w') as f: f.write(text)
    log(f'  ✓ {region}: {updated}개 갱신')

def main():
    target = sys.argv[1] if len(sys.argv) > 1 else 'all'
    log(f'=== enrich-images-extend 시작: {target} ===')
    if target == 'all':
        for r in REGIONS: process_region(r)
    elif target in REGIONS:
        process_region(target)
    log('=== 완료 ===')

if __name__ == '__main__': main()
