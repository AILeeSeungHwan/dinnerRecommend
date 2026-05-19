#!/usr/bin/env python3
"""전 지역 평점·리뷰 재수집 — 사용자 방식:
  - 네이버 m통합검색: 방문자 리뷰 수(naverCnt) + 블로그 리뷰(naverBlogCnt) + 가격대
  - 다음 검색: 평점(daumRt) + 다음 리뷰 수(daumCnt)
  - cnt = naverCnt + daumCnt (카카오+네이버 리뷰개수 합산)
  - rt  = daumRt (카카오/다음 평점). 다음 평점 없으면 0
체크포인트 region별. 사용법: python3 scripts/naver-daum-merge.py [region|all]
"""
import os, re, sys, json, time, random, urllib.request, urllib.parse

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CKDIR = os.path.join(BASE, 'scripts', 'naver-data')
LOG = os.path.join(CKDIR, 'naver-daum-merge.log')
REGIONS = ['samseong','jamsil','pangyo','suji','yeongtong','mangpo','yeongtongGu','gangnam','hongdae']
UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148'
DELAY = (0.8, 1.5)

def log(m):
    with open(LOG,'a',encoding='utf-8') as f: f.write(f'[{time.strftime("%H:%M:%S")}] {m}\n')
    print(m, flush=True)

def get(url, timeout=12):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language':'ko-KR,ko;q=0.9', 'Referer':'https://m.map.kakao.com/', 'Accept':'text/html,application/xhtml+xml'})
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.read().decode('utf-8','ignore')
    except Exception:
        return ''

def core(s):
    s = re.sub(r'\s*(\d+호점|본점|직영점|신관|별관|[가-힣A-Za-z]{1,6}점)\s*$','', (s or '').strip())
    return re.sub(r'\s+','', s)

def naver_visitor(name, region_kw):
    """네이버 m통합검색 — (방문자리뷰, 블로그리뷰, 가격대). 식당명 매칭."""
    h = get('https://m.search.naver.com/search.naver?query=' + urllib.parse.quote(f'{name} {region_kw}'))
    if not h: return None
    # 첫 플레이스 카드 영역 우선
    nm = core(name)
    # data-title 식당명 확인
    titles = re.findall(r'data-title="([^"]+)"', h)
    title_ok = any(nm and (nm in core(tt) or core(tt) in nm) for tt in titles[:3]) if titles else True
    def si(s):
        s = re.sub(r'[^0-9]', '', s or '')
        return int(s) if s else 0
    # JSON visitorReviewCount 우선, 없으면 etc_item
    vc = 0
    m = re.search(r'"visitorReviewCount":\s*"?([0-9,]+)', h)
    if m and si(m.group(1)): vc = si(m.group(1))
    else:
        m = re.search(r'방문자\s*리뷰\s*([0-9,]+)', h)
        if m: vc = si(m.group(1))
    bc = 0
    m = re.search(r'블로그\s*리뷰\s*([0-9,]+)', h)
    if m: bc = si(m.group(1))
    price = ''
    m = re.search(r'([0-9]{1,3}(?:~[0-9]{1,3})?\s*만원)\s*\(1인\)', h)
    if m: price = m.group(1).replace(' ','')
    # 네이버 별점 (카카오맵 평점 없을 때 fallback용)
    nrt = 0.0
    m = re.search(r'"visitorReviewScore":\s*"?([0-9]\.[0-9])', h)
    if not m: m = re.search(r'(?:별점|평점)[^0-9<]{0,8}([0-9]\.[0-9])', h)
    if m:
        v = float(m.group(1))
        if 1 <= v <= 5: nrt = v
    if not title_ok and vc == 0:
        return None
    return {'naverCnt': vc, 'blogCnt': bc, 'price': price, 'naverRt': nrt}

def daum_rating(name, region_kw=''):
    """카카오맵 m.map.kakao searchView — 식당명 매칭 카드의 (평점, 카카오리뷰수).
    평점 없는 식당은 (0, 리뷰수). 검색어=식당명+지역."""
    h = get('https://m.map.kakao.com/actions/searchView?q=' + urllib.parse.quote(f'{name} {region_kw}'.strip()))
    if not h: return 0.0, 0
    tcore = core(name)
    cards = list(re.finditer(r'<strong class="tit_g">([^<]+)</strong>', h))
    for idx, mt in enumerate(cards):
        cc = core(mt.group(1))
        ok = tcore and cc and (tcore in cc or cc in tcore or
              (len(tcore) >= 3 and (cc.startswith(tcore[:3]) or tcore.startswith(cc[:3])) and abs(len(tcore) - len(cc)) <= 5))
        if not ok:
            continue
        end = cards[idx + 1].start() if idx + 1 < len(cards) else mt.start() + 900
        seg = h[mt.start():end]
        rt = 0.0
        mr = re.search(r'<em class="num_rate">([0-9.]+)</em>', seg)
        if mr:
            v = float(mr.group(1))
            if 1 <= v <= 5:
                rt = v
        mc = re.search(r'리뷰\s*<span class="txt_num txt_num_end">\s*([0-9,]+)', seg)
        c = int(mc.group(1).replace(',', '')) if mc else 0
        return rt, c
    return 0.0, 0

def process(region):
    fp = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(fp): log(f'  {region}: 파일 없음'); return
    region_kw = {'samseong':'삼성역','jamsil':'잠실','pangyo':'판교','suji':'수지','yeongtong':'영통','mangpo':'망포','yeongtongGu':'영통구청','gangnam':'강남','hongdae':'홍대'}.get(region, region)
    t = open(fp).read()
    m = re.search(r'const (\w+)\s*=\s*\[', t); var = m.group(1); e = t.rfind(']')
    arr = json.loads(re.sub(r',(\s*\])', r'\1', t[m.end()-1: e+1]))
    cp = os.path.join(CKDIR, f'ndm-ck-{region}.json')
    done = set()
    if os.path.exists(cp):
        try: done = set(json.load(open(cp)).get('done', []))
        except: pass
    log(f'=== {region}: {len(arr)}개, 완료 {len(done)} ===')
    urt = uc = 0
    for i, r in enumerate(arr, 1):
        nm = r.get('name','')
        if nm in done: continue
        nv = naver_visitor(nm, region_kw)
        time.sleep(random.uniform(*DELAY))
        drt, dcnt = daum_rating(nm, region_kw)
        time.sleep(random.uniform(*DELAY))
        ncnt = nv['naverCnt'] if nv else 0
        nrt = nv['naverRt'] if nv else 0
        if 'naverCntOrig' not in r:
            r['naverCntOrig'] = r.get('naverCnt', r.get('cnt', 0))
        r['naverCnt'] = ncnt
        r['naverRt'] = nrt
        r['daumCnt'] = dcnt
        r['daumRt'] = drt
        r['cnt'] = ncnt + dcnt                 # 카카오+네이버 리뷰개수 합산
        r['rt'] = drt if drt > 0 else nrt       # 평점: 카카오맵 우선, 없으면 네이버 별점
        if nv and nv['blogCnt']: r['naverBlogCnt'] = nv['blogCnt']
        if nv and nv['price'] and not r.get('priceRange'): r['priceRange'] = nv['price']
        r['ratingSource'] = 'kakao' if drt > 0 else ('naver' if nrt > 0 else ('naver-cnt' if ncnt > 0 else 'none'))
        if r['rt'] > 0: urt += 1
        if r['cnt'] > 0: uc += 1
        done.add(nm)
        if i % 25 == 0 or urt <= 5:
            log(f'  [{i}/{len(arr)}] {nm}: rt={drt} cnt={r["cnt"]} (네{ncnt}+다{dcnt}) blog={r.get("naverBlogCnt",0)}')
        if i % 25 == 0:
            open(fp,'w').write(f'const {var} = [\n  '+',\n  '.join(json.dumps(x,ensure_ascii=False) for x in arr)+f'\n]\n\nexport default {var}\n')
            json.dump({'done':sorted(done)}, open(cp,'w'), ensure_ascii=False)
    open(fp,'w').write(f'const {var} = [\n  '+',\n  '.join(json.dumps(x,ensure_ascii=False) for x in arr)+f'\n]\n\nexport default {var}\n')
    json.dump({'done':sorted(done)}, open(cp,'w'), ensure_ascii=False)
    log(f'  ✓ {region}: 평점 {urt}, 리뷰합산>0 {uc}')

if __name__ == '__main__':
    tgt = sys.argv[1] if len(sys.argv) > 1 else 'all'
    log(f'=== naver-daum-merge 시작: {tgt} ===')
    for rg in (REGIONS if tgt == 'all' else [tgt]):
        if rg in REGIONS: process(rg)
    log('=== 완료 ===')
