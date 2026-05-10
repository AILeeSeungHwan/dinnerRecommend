#!/usr/bin/env python3
"""
daum-rerun-precise.py — Daum 매칭 정확도 보강

이전 daum-rating-crawl이 placeId 매칭 안 해서 동명이인 식당으로 잘못 잡힌 케이스를
보정. 카카오 dapi로 placeId 먼저 획득 → m.search.daum.net 결과에서 placeId가 정확히
들어간 카드의 평점·리뷰만 채택.

타깃 (덮어쓰지 않음 — 의심 케이스만):
  - cnt가 비정상적으로 작거나 (cnt <= 5) rt가 5.0인데 cnt가 짝수 같은 경우
  - 같은 cnt 값이 region 내 4개 이상 식당에 등장하는 그룹 (이전 그룹 ID 잔여)

기존 정상 데이터(rt 4.x, cnt 50+ 등)는 건드리지 않음.

사용법:
  python3 scripts/daum-rerun-precise.py [region|all]

env:
  KAKAO_REST_API_KEY (카카오 dapi 키워드 검색용 — placeId 획득)
"""
import os, re, sys, json, time, random, urllib.request, urllib.parse, urllib.error
from collections import Counter

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOG = os.path.join(BASE, 'scripts', 'naver-data', 'daum-rerun.log')
CP_DIR = os.path.join(BASE, 'scripts', 'naver-data')

# .env.local 로드
env_path = os.path.join(BASE, '.env.local')
if os.path.exists(env_path):
    with open(env_path) as f:
        for line in f:
            if '=' in line and not line.strip().startswith('#'):
                k, v = line.strip().split('=', 1)
                os.environ.setdefault(k, v)

KAKAO_KEY = os.environ.get('KAKAO_REST_API_KEY', '').strip()
REGIONS = ['samseong','jamsil','pangyo','yeongtong','mangpo','yeongtongGu','suji','gangnam']
DELAY = (0.7, 1.4)
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
    'Accept-Language': 'ko-KR,ko;q=0.9',
}

def log(msg):
    with open(LOG, 'a', encoding='utf-8') as f:
        f.write(f'[{time.strftime("%H:%M:%S")}] {msg}\n')
    print(msg, flush=True)

def http_get(url, headers=None, timeout=12):
    h = dict(HEADERS); h.update(headers or {})
    req = urllib.request.Request(url, headers=h)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode('utf-8', 'ignore')

def kakao_place_id(name, addr=''):
    """카카오 dapi 키워드 검색 → 가장 가까운 음식점 placeId."""
    if not KAKAO_KEY: return None
    addr_part = ''
    if addr:
        m = re.search(r'(\S+동|\S+로|\S+길)', addr)
        if m: addr_part = m.group(1)
    q = f'{name} {addr_part}'.strip()
    url = f'https://dapi.kakao.com/v2/local/search/keyword.json?query={urllib.parse.quote(q)}'
    try:
        body = http_get(url, headers={'Authorization': f'KakaoAK {KAKAO_KEY}'})
        data = json.loads(body)
        for d in data.get('documents', []):
            if d.get('category_group_code') == 'FD6':
                return str(d.get('id') or '')
        if data.get('documents'):
            return str(data['documents'][0].get('id') or '')
    except Exception as e:
        log(f'    kakao err {name}: {e}')
    return None

def daum_rating_for_pid(name, pid, addr=''):
    """식당 검색 후 placeId가 정확히 들어간 카드의 (rt, cnt)."""
    addr_part = ''
    if addr:
        m = re.search(r'(\S+동|\S+로|\S+길)', addr)
        if m: addr_part = m.group(1)
    q = f'{name} {addr_part}'.strip()
    url = f'https://m.search.daum.net/search?w=tot&q={urllib.parse.quote(q)}'
    try:
        html = http_get(url)
    except Exception as e:
        return None, None
    # 평점 패턴들 찾기 — pid를 포함한 컨텍스트 제일 가까운 평점만
    # 평점·리뷰수 패턴이 나타날 때마다 그 위치 앞 2500자에서 가장 가까운 placeId 추출
    results = []
    for m in re.finditer(r'<span class="ico-pmp">평점</span>([\d.]+)</span>\((\d+)\)', html):
        pos = m.start()
        before = html[max(0, pos-2500):pos]
        pids = re.findall(r'd=(\d{6,})', before)
        local_pid = pids[-1] if pids else None
        results.append((local_pid, float(m.group(1)), int(m.group(2))))
    # placeId 일치하는 것 우선
    for lp, rt, cnt in results:
        if lp == pid:
            return rt, cnt
    return None, None

def update_region(region):
    p = os.path.join(BASE, 'data', f'{region}.js')
    cp_path = os.path.join(CP_DIR, f'daum-rerun-checkpoint-{region}.json')
    if not os.path.exists(p):
        log(f'  {region}: 파일 없음'); return
    with open(p, 'r', encoding='utf-8') as f:
        text = f.read()

    # 식당 목록 + cnt 분포
    targets = []
    cnt_values = []
    matches = list(re.finditer(r'"name":\s*"([^"]+)"[^{]*?"rt":\s*(\d+(?:\.\d+)?)[^{]*?"cnt":\s*(\d+)[^{]*?"addr":\s*"([^"]*)"', text, re.DOTALL))
    for m in matches:
        name, rt, cnt, addr = m.group(1), float(m.group(2)), int(m.group(3)), m.group(4)
        cnt_values.append(cnt)
    counter = Counter(cnt_values)

    for m in matches:
        name, rt, cnt, addr = m.group(1), float(m.group(2)), int(m.group(3)), m.group(4)
        # 의심 조건: cnt<=5 또는 (cnt 같은 식당 4개 이상 + cnt > 0)
        suspicious = (0 < cnt <= 5) or (cnt > 0 and counter[cnt] >= 4)
        # 평점 0이거나 매우 작은 cnt
        if rt == 0 or suspicious:
            targets.append((name, addr))

    # 체크포인트
    done = set()
    if os.path.exists(cp_path):
        try:
            with open(cp_path) as f: done = set(json.load(f).get('done', []))
        except: pass

    log(f'=== {region}: 의심 {len(targets)}개, 완료 {len(done)}개 ===')
    updated = 0
    for i, (name, addr) in enumerate(targets, 1):
        if name in done: continue
        pid = kakao_place_id(name, addr)
        if not pid:
            done.add(name); time.sleep(random.uniform(*DELAY)); continue
        time.sleep(random.uniform(*DELAY))
        rt, cnt_new = daum_rating_for_pid(name, pid, addr)
        if rt is not None and cnt_new is not None:
            esc = re.escape(name)
            t2 = re.sub(rf'("name":\s*"{esc}"[^{{]*?"rt":\s*)\d+(?:\.\d+)?', rf'\g<1>{rt}', text, count=1, flags=re.DOTALL)
            t2 = re.sub(rf'("name":\s*"{esc}"[^{{]*?"cnt":\s*)\d+', rf'\g<1>{cnt_new}', t2, count=1, flags=re.DOTALL)
            if t2 != text:
                text = t2; updated += 1
                if updated <= 5 or i % 20 == 0:
                    log(f'  [{i}/{len(targets)}] {name}: pid={pid} rt={rt} cnt={cnt_new}')
        done.add(name)
        if i % 30 == 0:
            with open(p, 'w', encoding='utf-8') as f: f.write(text)
            with open(cp_path, 'w', encoding='utf-8') as f:
                json.dump({'done': sorted(done)}, f, ensure_ascii=False)
            log(f'  체크포인트 {i}/{len(targets)}, 누적 갱신 {updated}')
        time.sleep(random.uniform(*DELAY))

    with open(p, 'w', encoding='utf-8') as f: f.write(text)
    with open(cp_path, 'w', encoding='utf-8') as f:
        json.dump({'done': sorted(done)}, f, ensure_ascii=False)
    log(f'  ✓ {region}: 갱신 {updated}개')

def main():
    if not KAKAO_KEY:
        log('ERROR: KAKAO_REST_API_KEY 누락 (.env.local 확인)')
        sys.exit(1)
    target = sys.argv[1] if len(sys.argv) > 1 else 'all'
    log(f'=== daum-rerun-precise 시작: {target} ===')
    if target == 'all':
        for r in REGIONS: update_region(r)
    elif target in REGIONS:
        update_region(target)
    log('=== 완료 ===')

if __name__ == '__main__': main()
