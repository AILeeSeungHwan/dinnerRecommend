#!/usr/bin/env python3
"""
daum-merge-ratings.py — 전체 식당에 대해 Daum 평점·리뷰 가져와 다음 규칙으로 갱신:

규칙:
  - 다음 평점 있음 → rt = daumRt (네이버 평점은 이제 거의 사라졌으므로 다음 우선)
  - cnt = naverCnt + daumCnt (네이버 백업: naverCnt, 다음 별도: daumCnt)
  - 다음 정보 없음 + 기존 데이터 0 → 그대로 (변경 없음)
  - 다음 정보 없음 + 기존 데이터 있음 → 기존 값 유지

신규 필드 추가:
  - naverCnt: 원래 cnt 값 백업 (1회만 — 이미 있으면 유지)
  - daumRt: 다음 평점 (별도 보존)
  - daumCnt: 다음 리뷰 수 (별도 보존)
  - ratingSource: 'daum' | 'naver' | 'merged' (참고용)

사용법:
  python3 scripts/daum-merge-ratings.py [region|all]

체크포인트:
  scripts/naver-data/daum-merge-checkpoint-{region}.json
"""
import os, re, sys, json, time, random, urllib.request, urllib.parse

BASE = '/Users/lee/Desktop/dinnerAIVer1.0/dinnerRecommend'
LOG_PATH = os.path.join(BASE, 'scripts', 'naver-data', 'daum-merge.log')
CHECKPOINT_DIR = os.path.join(BASE, 'scripts', 'naver-data')
REGIONS = ['samseong','jamsil','pangyo','yeongtong','mangpo','yeongtongGu','suji','gangnam']
DELAY = (0.5, 1.0)
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
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except: return ''

def search_daum(name, addr_hint=''):
    """다음 모바일 검색에서 (rating, reviewCount) 반환. 실패 시 (None, None).
    daum-rating-crawl.py의 검증된 카드 파싱 로직 이식."""
    addr_part = ''
    if addr_hint:
        m = re.search(r'(\S+동|\S+구)', addr_hint)
        if m: addr_part = m.group(1)
    q = f'{name} {addr_part}'.strip()
    url = f'https://m.search.daum.net/search?w=tot&q={urllib.parse.quote(q)}'
    html = http_get(url)
    if not html: return None, None

    # 카카오맵 장소 카드 단위로 분리 (place.map.kakao.com 링크 기준)
    items = re.split(r'(?=<a href="https://place\.map\.kakao\.com)', html)
    rate_pat = re.compile(r'<span class="ico-g ico_star">평점</span>([\d.]+)\s*\((\d+)\)')
    review_pat = re.compile(r'리뷰\s*([\d,]+)')
    title_pat = re.compile(r'<strong class="tit-g[^"]*">(.*?)</strong>', re.DOTALL)

    def norm(s):
        return re.sub(r'\s+', '', s)
    def core(s):
        # 지점·접미 제거 후 핵심 상호만
        s = re.sub(r'\s*(\d+호점|본점|직영점|신관|별관|[가-힣A-Za-z]{1,6}점)\s*$', '', s.strip())
        return norm(s)
    target = norm(name)
    tcore = core(name)

    def extract(item):
        m_rt = rate_pat.search(item)
        if not m_rt: return None
        rt = float(m_rt.group(1))
        if not (1 <= rt <= 5): return None
        rating_votes = int(m_rt.group(2))
        m_rv = review_pat.search(item)
        cnt = int(m_rv.group(1).replace(',', '')) if m_rv else rating_votes
        # 다음 '리뷰 999+' 표기를 999로 자른 오파싱 방어 → 신뢰 불가로 0
        if cnt == 999:
            cnt = 0
        return rt, cnt

    # 식당명 정확 매칭 카드만 신뢰 (fallback 첫 카드 = 다른 식당 오매칭이라 제거)
    for item in items[1:]:
        m_title = title_pat.search(item)
        if not m_title: continue
        card_name = norm(re.sub(r'<[^>]+>', '', m_title.group(1)))
        cc = core(re.sub(r'<[^>]+>', '', m_title.group(1)))
        # 핵심 상호 기준 매칭: 한쪽이 다른쪽 포함하거나, 3글자+ 접두 일치
        ok = False
        if tcore and cc:
            if tcore in cc or cc in tcore:
                ok = True
            elif len(tcore) >= 3 and (cc.startswith(tcore[:3]) or tcore.startswith(cc[:3])) and abs(len(tcore)-len(cc)) <= 4:
                ok = True
        if ok:
            res = extract(item)
            if res: return res
    return None, None

def load_region(region):
    p = os.path.join(BASE, 'data', f'{region}.js')
    with open(p) as f: t = f.read()
    m = re.search(r'const \w+\s*=\s*\[', t)
    end = t.rfind(']')
    arr_text = re.sub(r',(\s*\])', r'\1', t[m.end()-1: end+1])
    arr = json.loads(arr_text)
    var = re.search(r'const (\w+)\s*=', t).group(1)
    return p, arr, var

def save_region(p, arr, var):
    new = f'const {var} = [\n  ' + ',\n  '.join(json.dumps(r, ensure_ascii=False) for r in arr) + f'\n]\n\nexport default {var}\n'
    with open(p, 'w') as f: f.write(new)

def process_region(region):
    p, arr, var = load_region(region)
    cp_path = os.path.join(CHECKPOINT_DIR, f'daum-merge-checkpoint-{region}.json')
    done = set()
    if os.path.exists(cp_path):
        try:
            with open(cp_path) as f: done = set(json.load(f).get('done', []))
        except: pass

    log(f'=== {region}: 전체 {len(arr)}개, 이미 완료 {len(done)}개 ===')
    updated_rt = 0
    updated_cnt = 0
    for i, r in enumerate(arr, 1):
        name = r.get('name', '')
        if name in done: continue
        addr = r.get('addr', '')
        rating, cnt = search_daum(name, addr)
        if 'naverCnt' not in r:
            r['naverCnt'] = r.get('cnt', 0)
        if rating is not None:
            r['daumRt'] = rating
            r['daumCnt'] = cnt
            r['rt'] = rating
            r['cnt'] = (r.get('naverCnt', 0) or 0) + cnt
            r['ratingSource'] = 'merged' if r.get('naverCnt', 0) > 0 else 'daum'
            updated_rt += 1
            if cnt > 0: updated_cnt += 1
        else:
            # 다음 매칭 실패 → 부정확한 원본 평점 대신 0 (정직)
            r['daumRt'] = 0; r['daumCnt'] = 0
            r['rt'] = 0; r['cnt'] = 0
            r['ratingSource'] = 'none' 
            if i % 50 == 0 or updated_rt <= 5:
                log(f'  [{i}/{len(arr)}] {name}: rt={rating}, cnt={r["cnt"]} (네이버 {r["naverCnt"]} + 다음 {cnt})')
        done.add(name)
        # 체크포인트 매 30건마다 저장
        if i % 30 == 0:
            save_region(p, arr, var)
            with open(cp_path, 'w') as f: json.dump({'done': sorted(done)}, f, ensure_ascii=False)
            log(f'  체크포인트: {i}/{len(arr)}, rt 갱신 {updated_rt}, cnt 갱신 {updated_cnt}')
        time.sleep(random.uniform(*DELAY))

    save_region(p, arr, var)
    with open(cp_path, 'w') as f: json.dump({'done': sorted(done)}, f, ensure_ascii=False)
    log(f'  ✓ {region}: rt 갱신 {updated_rt}, cnt 갱신 {updated_cnt}')

def main():
    target = sys.argv[1] if len(sys.argv) > 1 else 'all'
    log(f'=== daum-merge-ratings 시작: {target} ===')
    if target == 'all':
        for region in REGIONS:
            process_region(region)
    elif target in REGIONS:
        process_region(target)
    else:
        log(f'사용법: {sys.argv[0]} [{"|".join(REGIONS)}|all]')
        sys.exit(1)
    log(f'=== 완료 ===')

if __name__ == '__main__':
    main()
