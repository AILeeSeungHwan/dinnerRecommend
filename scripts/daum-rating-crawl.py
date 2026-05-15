#!/usr/bin/env python3
"""
daum-rating-crawl.py — m.search.daum.net 검색결과에서 식당의 평점·리뷰수를 가져와
data/{region}.js의 rt/cnt 필드를 갱신.

특징:
  - 인증 토큰 불필요 (Daum 모바일 검색 페이지를 직접 파싱)
  - 식당명 + 도로명주소 query로 정확한 매칭
  - 카드 컨테이너 단위로 평점·리뷰수 추출
  - 체크포인트 (region별로 어디까지 진행했는지 .checkpoint 파일 저장)
  - rate limit: 0.6~1.2초 랜덤 딜레이

사용법:
  python3 scripts/daum-rating-crawl.py [region|all]

출력:
  - data/{region}.js in-place 갱신
  - scripts/naver-data/daum-progress.log 진행 로그
"""
import os, re, sys, json, time, random, urllib.request, urllib.parse, urllib.error

BASE = '/Users/lee/Desktop/dinnerAIVer1.0/dinnerRecommend'
LOG_PATH = os.path.join(BASE, 'scripts', 'naver-data', 'daum-progress.log')
CHECKPOINT_DIR = os.path.join(BASE, 'scripts', 'naver-data')
REGIONS = ['samseong','jamsil','pangyo','yeongtong','mangpo','yeongtongGu','suji','gangnam']
DELAY = (0.6, 1.2)
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
    'Accept-Language': 'ko-KR,ko;q=0.9',
}

def log(msg):
    with open(LOG_PATH, 'a', encoding='utf-8') as f:
        f.write(f'[{time.strftime("%H:%M:%S")}] {msg}\n')
    print(msg, flush=True)

def http_get(url, timeout=12):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode('utf-8', errors='ignore')

def search_daum(name, addr_hint=''):
    """Daum 모바일 검색에서 식당의 (rating, reviewCount) 반환. 매칭 실패 시 (None, None)."""
    # 주소 동/구 단위만 추출하여 query 정확도 향상
    addr_part = ''
    if addr_hint:
        m = re.search(r'(\S+동|\S+구)', addr_hint)
        if m: addr_part = m.group(1)
    q = f'{name} {addr_part}'.strip()
    url = f'https://m.search.daum.net/search?w=tot&q={urllib.parse.quote(q)}'
    try:
        html = http_get(url)
    except Exception as e:
        return None, None

    # 카드 컨테이너로 분리
    items = re.split(r'<div class="c-item-content">', html)
    # 첫 매칭 카드 — 식당명이 카드 내 a tag 또는 strong에 있는지 확인
    esc_name = re.escape(name)
    name_pattern = re.compile(rf'>\s*{esc_name}\s*<')
    for item in items[1:]:
        # 식당명이 정확히 들어간 카드를 우선
        if name_pattern.search(item):
            m = re.search(r'<span class="ico-pmp">평점</span>([\d.]+)</span>\((\d+)\)', item)
            if m:
                return float(m.group(1)), int(m.group(2))
            break
    # 이름 매칭 실패 시 첫 카드 평점 — fallback
    for item in items[1:]:
        m = re.search(r'<span class="ico-pmp">평점</span>([\d.]+)</span>\((\d+)\)', item)
        if m:
            return float(m.group(1)), int(m.group(2))
    return None, None

def update_region(region):
    p = os.path.join(BASE, 'data', f'{region}.js')
    cp_path = os.path.join(CHECKPOINT_DIR, f'daum-checkpoint-{region}.json')
    if not os.path.exists(p):
        log(f'  {region}: 파일 없음')
        return
    with open(p, 'r', encoding='utf-8') as f:
        text = f.read()

    # 식당 목록 추출
    targets = []
    only_zero = os.environ.get('ZERO_ONLY') == '1'
    for m in re.finditer(r'"name":\s*"([^"]+)"[^{]*?"rt":\s*(\d+(?:\.\d+)?)[^{]*?"cnt":\s*(\d+)[^{]*?"addr":\s*"([^"]*)"', text, re.DOTALL):
        name, rt_v, cnt_v, addr = m.group(1), float(m.group(2)), int(m.group(3)), m.group(4)
        if only_zero and (rt_v > 0 or cnt_v > 0):
            continue
        targets.append((name, addr))

    # 체크포인트 로드
    done = set()
    if os.path.exists(cp_path):
        try:
            with open(cp_path, 'r', encoding='utf-8') as f:
                done = set(json.load(f).get('done', []))
        except: pass

    log(f'=== {region}: 전체 {len(targets)}개, 이미 완료 {len(done)}개 ===')
    updated = 0
    for i, (name, addr) in enumerate(targets, 1):
        if name in done: continue
        rating, cnt = search_daum(name, addr)
        if rating is not None and cnt is not None:
            esc_name = re.escape(name)
            # 객체 안의 rt 갱신 (한 식당당 1회)
            pat_rt = re.compile(rf'("name":\s*"{esc_name}"[^{{]*?"rt":\s*)\d+(?:\.\d+)?', re.DOTALL)
            text2 = pat_rt.sub(rf'\g<1>{rating}', text, count=1)
            pat_cnt = re.compile(rf'("name":\s*"{esc_name}"[^{{]*?"cnt":\s*)\d+', re.DOTALL)
            text2 = pat_cnt.sub(rf'\g<1>{cnt}', text2, count=1)
            if text2 != text:
                text = text2
                updated += 1
                if i % 10 == 0 or updated <= 5:
                    log(f'  [{i}/{len(targets)}] {name}: rt={rating}, cnt={cnt}')
        done.add(name)
        # 체크포인트 매 50건마다 저장
        if i % 50 == 0:
            with open(p, 'w', encoding='utf-8') as f: f.write(text)
            with open(cp_path, 'w', encoding='utf-8') as f:
                json.dump({'done': sorted(done)}, f, ensure_ascii=False)
            log(f'  체크포인트: {i}/{len(targets)}, 누적 갱신 {updated}')
        time.sleep(random.uniform(*DELAY))

    # 최종 저장
    with open(p, 'w', encoding='utf-8') as f: f.write(text)
    with open(cp_path, 'w', encoding='utf-8') as f:
        json.dump({'done': sorted(done)}, f, ensure_ascii=False)
    log(f'  ✓ {region}: 갱신 {updated}개')

def main():
    target = sys.argv[1] if len(sys.argv) > 1 else 'all'
    log(f'=== daum-rating-crawl 시작: {target} ===')
    if target == 'all':
        for region in REGIONS:
            update_region(region)
    elif target in REGIONS:
        update_region(target)
    else:
        log(f'사용법: {sys.argv[0]} [{"|".join(REGIONS)}|all]')
        sys.exit(1)
    log(f'=== 모든 region 완료 ===')

if __name__ == '__main__':
    main()
