#!/usr/bin/env python3
"""
enrich-reviews.py — 네이버 plac 방문자 리뷰 본문(rv) 수집

naverPlaceId 있는 식당의 pcmap.place.naver.com/restaurant/{pid}/review/visitor 페이지에서
__APOLLO_STATE__의 VisitorReview body를 추출하여 data/{region}.js의 rv 필드에 저장.

기존 rv 데이터 5개 이상이면 skip.

사용법: python3 scripts/enrich-reviews.py [region|all]
"""
import os, re, sys, json, time, random, urllib.request, urllib.error

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOG = os.path.join(BASE, 'scripts', 'naver-data', 'enrich-reviews.log')
REGIONS = ['samseong','jamsil','pangyo','yeongtong','mangpo','yeongtongGu','suji','gangnam']
HEADERS = {
    'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    'Accept-Language':'ko-KR,ko;q=0.9'
}
DELAY = (2.5, 4.5)
MAX_REVIEWS = 8

def log(m):
    with open(LOG, 'a', encoding='utf-8') as f: f.write(f'[{time.strftime("%H:%M:%S")}] {m}\n')
    print(m, flush=True)

def fetch_reviews(pid):
    url = f'https://pcmap.place.naver.com/restaurant/{pid}/review/visitor'
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as r:
            html = r.read().decode('utf-8', 'ignore')
    except urllib.error.HTTPError as e:
        if e.code == 429:
            log('  429 cooldown 30s')
            time.sleep(30)
        return []
    except Exception:
        return []
    m = re.search(r'window\.__APOLLO_STATE__\s*=\s*(\{.+?\})\s*;', html, re.DOTALL)
    if not m: return []
    body = m.group(1)
    raw = re.findall(r'"body":"((?:[^"\\\\]|\\\\.){40,1500})"', body)
    out = []
    for r in raw[:MAX_REVIEWS]:
        try: text = json.loads('"' + r + '"')
        except: text = r
        text = re.sub(r'\s+', ' ', text).strip()
        if 30 <= len(text) <= 1500 and 'ERR_' not in text:
            out.append(text)
    return out

def process_region(region):
    p = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(p):
        log(f'  {region}: 파일 없음'); return
    with open(p) as f: text = f.read()

    targets = []
    for nm in list(re.finditer(r'"name":\s*"([^"]+)"', text)):
        idx = nm.start()
        obj_start = text.rfind('{', 0, idx)
        depth = 0; j = obj_start
        while j < len(text):
            if text[j] == '{': depth += 1
            elif text[j] == '}':
                depth -= 1
                if depth == 0: break
            j += 1
        obj = text[obj_start:j+1]
        pid_m = re.search(r'"naverPlaceId":\s*"(\d+)"', obj)
        if not pid_m: continue
        rv_m = re.search(r'"rv":\s*\[(.*?)\]', obj, re.DOTALL)
        existing = 0
        if rv_m:
            existing = len(re.findall(r'"([^"]{30,})"', rv_m.group(1)))
        if existing >= 5: continue
        targets.append((nm.group(1), pid_m.group(1)))

    log(f'=== {region}: 대상 {len(targets)}개 ===')
    updated = 0
    for i, (name, pid) in enumerate(targets, 1):
        idx = text.find(f'"name": "{name}"')
        if idx < 0: continue
        obj_start = text.rfind('{', 0, idx)
        depth = 0; j = obj_start
        while j < len(text):
            if text[j] == '{': depth += 1
            elif text[j] == '}':
                depth -= 1
                if depth == 0: break
            j += 1
        obj = text[obj_start:j+1]
        reviews = fetch_reviews(pid)
        if not reviews:
            time.sleep(random.uniform(*DELAY))
            continue
        rv_json = '[' + ', '.join(json.dumps(r, ensure_ascii=False) for r in reviews) + ']'
        new_obj = re.sub(r'"rv":\s*\[[^\]]*\]', '"rv": ' + rv_json, obj, count=1)
        if new_obj != obj:
            text = text[:obj_start] + new_obj + text[j+1:]
            updated += 1
            if updated <= 3 or i % 30 == 0:
                log(f'  [{i}/{len(targets)}] {name}: {len(reviews)}개')
        if i % 50 == 0:
            with open(p, 'w') as f: f.write(text)
            log(f'  체크포인트 {i}/{len(targets)} 갱신 {updated}')
        time.sleep(random.uniform(*DELAY))
    with open(p, 'w') as f: f.write(text)
    log(f'  ✓ {region}: 갱신 {updated}개')

def main():
    target = sys.argv[1] if len(sys.argv) > 1 else 'all'
    log(f'=== enrich-reviews 시작: {target} ===')
    log('초기 60초 대기 (429 차단 회피)')
    time.sleep(60)
    if target == 'all':
        for r in REGIONS: process_region(r)
    elif target in REGIONS:
        process_region(target)
    log('=== 완료 ===')

if __name__ == '__main__': main()
