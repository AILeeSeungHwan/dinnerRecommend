#!/usr/bin/env python3
"""
enrich-images-batch.py — imageUrl 비어있는 식당 일괄 보강

각 region의 식당 중 imageUrl=''인 것을 찾아 placeId 기반으로 네이버 플레이스에서
이미지를 가져와 imageUrl(없으면)·imageUrl2/3/4를 채움.

사용법: python3 scripts/enrich-images-batch.py [region|all]
출력: scripts/naver-data/img-batch.log
"""
import os, re, sys, json, time, random, urllib.request, urllib.error

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOG = os.path.join(BASE, 'scripts', 'naver-data', 'img-batch.log')
REGIONS = ['samseong','jamsil','pangyo','yeongtong','mangpo','yeongtongGu','suji','gangnam']
HEADERS = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/122.0.0.0',
    'Accept-Language':'ko-KR,ko;q=0.9'
}

def log(m):
    with open(LOG, 'a', encoding='utf-8') as f: f.write(f'[{time.strftime("%H:%M:%S")}] {m}\n')
    print(m, flush=True)

def http(url, timeout=10):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode('utf-8','ignore')

def fetch_apollo(pid, path='home'):
    try:
        html = http(f'https://pcmap.place.naver.com/restaurant/{pid}/{path}')
        m = re.search(r'window\.__APOLLO_STATE__\s*=\s*(\{.+?\})\s*;', html, re.DOTALL)
        return m.group(1) if m else ''
    except Exception:
        return ''

def extract_images(apollo, existing=None):
    raw = apollo.replace('\\u002F', '/')
    urls = re.findall(r'https?://[a-z0-9-]+\.pstatic\.net/[^"\\\s]+\.(?:jpg|jpeg|png|JPEG|JPG|PNG)', raw)
    existing = set(existing or [])
    out, seen = [], set(existing)
    for u in urls:
        if u in seen: continue
        seen.add(u); out.append(u)
    return out

def process_region(region):
    p = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(p):
        log(f'  {region}: 파일 없음'); return
    with open(p) as f: text = f.read()

    # 이미지 비어있고 placeId 있는 식당 찾기
    targets = []
    for m in re.finditer(r'"name":\s*"([^"]+)"[^{]*?"imageUrl":\s*"([^"]*)"[\s\S]*?"naverPlaceId":\s*"(\d+)"', text):
        name, img, pid = m.group(1), m.group(2), m.group(3)
        if not img and pid:
            targets.append((name, pid))

    log(f'=== {region}: 이미지 보강 대상 {len(targets)}개 ===')
    updated = 0
    for i, (name, pid) in enumerate(targets, 1):
        apollo = fetch_apollo(pid, 'home')
        if not apollo:
            apollo = fetch_apollo(pid, 'menu/list')
        time.sleep(random.uniform(0.5, 1.0))
        images = extract_images(apollo)[:4]
        if not images:
            continue
        # 식당 객체 단위로 갱신
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
        # imageUrl 갱신
        new_obj = re.sub(r'"imageUrl":\s*""', f'"imageUrl": {json.dumps(images[0], ensure_ascii=False)}', new_obj, count=1)
        # imageUrl2/3/4 — 없으면 imageUrl 뒤에 삽입
        for k, extras_idx in [('imageUrl2', 1), ('imageUrl3', 2), ('imageUrl4', 3)]:
            if extras_idx >= len(images): break
            if f'"{k}"' in new_obj: continue
            prev_key = 'imageUrl4' if k == 'imageUrl4' else ('imageUrl3' if k == 'imageUrl3' else ('imageUrl2' if k == 'imageUrl2' else 'imageUrl'))
            # 이전 키 뒤에 삽입
            anchor_key = {'imageUrl2':'imageUrl', 'imageUrl3':'imageUrl2', 'imageUrl4':'imageUrl3'}[k]
            new_obj = re.sub(
                rf'("{anchor_key}":\s*"[^"]*")',
                rf'\1, "{k}": {json.dumps(images[extras_idx], ensure_ascii=False)}',
                new_obj, count=1,
            )
        if new_obj != obj:
            text = text[:obj_start] + new_obj + text[j+1:]
            updated += 1
            if updated <= 3 or i % 20 == 0:
                log(f'  [{i}/{len(targets)}] {name}: 이미지 {len(images)}개')
        if i % 30 == 0:
            with open(p, 'w') as f: f.write(text)
            log(f'  체크포인트 {i}/{len(targets)} 갱신 {updated}')
        time.sleep(random.uniform(0.4, 0.9))

    with open(p, 'w') as f: f.write(text)
    log(f'  ✓ {region}: {updated}개 갱신')

def main():
    target = sys.argv[1] if len(sys.argv) > 1 else 'all'
    log(f'=== enrich-images-batch 시작: {target} ===')
    if target == 'all':
        for r in REGIONS: process_region(r)
    elif target in REGIONS:
        process_region(target)
    log('=== 완료 ===')

if __name__ == '__main__': main()
