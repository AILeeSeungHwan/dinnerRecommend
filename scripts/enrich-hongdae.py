#!/usr/bin/env python3
"""홍대 포스팅 대상 식당 네이버+다음 보강.
- 네이버 지도 allSearch: 평점·리뷰수·블로그수·메뉴·이미지·placeId
- 다음 검색: 평점·리뷰수
- 합산: cnt = naverCnt + daumCnt, rt = daumRt(우선) or naverRt
- 리뷰 원문(rv): 네이버 pcmap GraphQL best-effort → reviews_summary 키워드·요약
포스팅 3개 카테고리(izakaya/date/budget)별 상위 ~9곳만 보강.
"""
import re, json, time, urllib.request, urllib.parse, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HONGDAE_COORD = ('126.9237', '37.5563')  # 홍대입구역
IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1'

THEME_KW = {
    '가성비': ['가성비','가격대비','저렴','싸요','합리'], '재료신선': ['신선','당일','활어','재료'],
    '서비스': ['친절','서비스','사장님','직원'], '분위기': ['분위기','인테리어','깔끔','예쁘','감성'],
    '양많음': ['양많','푸짐','넉넉','실하'], '국물맛': ['국물','진한','시원한','얼큰','뜨끈'],
    '재방문': ['재방문','또 올','또 갈','단골','다시'], '웨이팅': ['웨이팅','대기','줄서'],
    '맛있음': ['맛있','존맛','JMT','미친맛','레전드'], '술자리': ['술','안주','분위기','취하'],
}

def http_json(url, timeout=12):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': IOS_UA, 'Accept-Language': 'ko-KR,ko;q=0.9', 'Referer': 'https://map.naver.com/'})
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return json.loads(r.read().decode('utf-8', errors='ignore'))
    except Exception:
        return None

def naver_search(name):
    """네이버 지도 allSearch — 첫 매칭 식당 정보."""
    params = urllib.parse.urlencode({
        'query': f'{name} 홍대', 'type': 'all',
        'searchCoord': f'{HONGDAE_COORD[0]};{HONGDAE_COORD[1]}',
        'displayCount': '5', 'isPlaceHome': 'false', 'lang': 'ko',
    })
    data = http_json(f'https://map.naver.com/p/api/search/allSearch?{params}')
    if not data: return None
    out = []
    def walk(o):
        if not isinstance(o, dict): return
        if isinstance(o.get('list'), list):
            for it in o['list']:
                if not it.get('id'): continue
                out.append(it)
        for k in ('place','restaurant','food','cafe','drink'):
            if isinstance(o.get(k), dict): walk(o[k])
    if data.get('result'): walk(data['result'])
    if not out: return None
    it = out[0]
    return {
        'placeId': str(it.get('id','')),
        'naverRt': float(it['reviewScore']) if it.get('reviewScore') else 0,
        'naverCnt': int(it['reviewCount']) if it.get('reviewCount') else 0,
        'blogCnt': int(it['blogCafeReviewCount']) if it.get('blogCafeReviewCount') else 0,
        'menus': it.get('menus') or [],
        'imageUrl': it.get('imageUrl') or '',
        'hours': (it.get('businessHours') or '') if isinstance(it.get('businessHours'), str) else '',
        'tel': it.get('telephone',''),
    }

def daum_rating(name, addr=''):
    addr_part = ''
    m = re.search(r'(\S+동|\S+구)', addr or '')
    if m: addr_part = m.group(1)
    q = f'{name} {addr_part}'.strip()
    try:
        url = f'https://m.search.daum.net/search?w=tot&q={urllib.parse.quote(q)}'
        req = urllib.request.Request(url, headers={'User-Agent': IOS_UA})
        with urllib.request.urlopen(req, timeout=10) as r:
            h = r.read().decode('utf-8','ignore')
    except: return 0, 0
    items = re.split(r'(?=<a href="https://place\.map\.kakao\.com)', h)
    rate = re.compile(r'<span class="ico-g ico_star">평점</span>([\d.]+)\s*\((\d+)\)')
    rev = re.compile(r'리뷰\s*([\d,]+)')
    tit = re.compile(r'<strong class="tit-g[^"]*">(.*?)</strong>', re.DOTALL)
    nm = re.sub(r'\s+','',name)
    for item in items[1:]:
        mt = tit.search(item)
        if not mt: continue
        cn = re.sub(r'\s+','', re.sub(r'<[^>]+>','',mt.group(1)))
        if nm and (nm in cn or cn.startswith(nm[:max(4,len(nm)//2)])):
            mr = rate.search(item)
            if mr:
                rt = float(mr.group(1))
                if 1 <= rt <= 5:
                    mv = rev.search(item)
                    c = int(mv.group(1).replace(',','')) if mv else int(mr.group(2))
                    if c == 999: c = 0
                    return rt, c
            break
    return 0, 0

def naver_reviews(place_id, limit=15):
    """pcmap GraphQL 리뷰 원문 best-effort."""
    if not place_id: return []
    body = json.dumps([{
        "operationName":"getVisitorReviews",
        "variables":{"input":{"businessId":place_id,"businessType":"restaurant","item":"0","bookingBusinessId":None,"page":1,"size":limit,"isPhotoUsed":False,"includeContent":True,"getUserStats":False,"includeReceiptPhotos":False,"cidList":[]}},
        "query":"query getVisitorReviews($input: VisitorReviewsInput) { visitorReviews(input: $input) { items { rating body } } }"
    }])
    try:
        req = urllib.request.Request('https://pcmap-api.place.naver.com/graphql',
            data=body.encode(), method='POST',
            headers={'Content-Type':'application/json','User-Agent':IOS_UA,'Referer':f'https://pcmap.place.naver.com/restaurant/{place_id}/review/visitor'})
        with urllib.request.urlopen(req, timeout=12) as r:
            d = json.loads(r.read().decode('utf-8','ignore'))
        items = d[0]['data']['visitorReviews']['items']
        return [re.sub(r'\s+',' ',(i.get('body') or '')).strip() for i in items if i.get('body')]
    except Exception:
        return []

def summarize(reviews):
    if not reviews: return [], ''
    combined = ' '.join(reviews[:8])
    themes = []
    for th, kws in THEME_KW.items():
        if sum(combined.count(k) for k in kws) >= 2: themes.append(th)
    quote = ''
    for r in reviews[:8]:
        for s in re.split(r'[.!?。]\s*', r):
            s = re.sub(r'[^가-힣a-zA-Z0-9 ,!?~]', '', s).strip()
            if 15 <= len(s) <= 55 and any(k in s for k in ['맛있','가성비','신선','친절','분위기','재방문','푸짐']):
                quote = s; break
        if quote: break
    return themes[:4], quote

def main():
    fp = os.path.join(BASE, 'data', 'hongdae.js')
    with open(fp) as f: t = f.read()
    m = re.search(r'const (\w+)\s*=\s*\[', t); var = m.group(1); e = t.rfind(']')
    arr = json.loads(re.sub(r',(\s*\])', r'\1', t[m.end()-1: e+1]))
    with open('/tmp/hongdae-postcat.json') as f: postcat = json.load(f)

    # 카테고리별 후보 (이미지 있는 것 우선) 상위 9곳
    by_cat = {'izakaya': [], 'date': [], 'budget': []}
    for r in arr:
        pc = postcat.get(r['name'], 'budget')
        if pc in by_cat: by_cat[pc].append(r)
    targets = []
    for pc, lst in by_cat.items():
        lst.sort(key=lambda r: (1 if r.get('imageUrl') else 0), reverse=True)
        targets += lst[:9]
    tset = {r['name'] for r in targets}
    print(f'보강 대상: {len(tset)}곳 (izakaya/date/budget 각 9)')

    summary_out = {}
    for i, r in enumerate(arr, 1):
        if r['name'] not in tset: continue
        nv = naver_search(r['name'])
        time.sleep(1.5)
        drt, dcnt = daum_rating(r['name'], r.get('addr',''))
        time.sleep(0.8)
        ncnt = nv['naverCnt'] if nv else 0
        nrt = nv['naverRt'] if nv else 0
        r['cnt'] = ncnt + dcnt                       # 네이버 + 다음 합산
        r['rt'] = drt if drt > 0 else nrt            # 평점: 다음 우선, 없으면 네이버
        r['naverCnt'] = ncnt; r['daumCnt'] = dcnt
        r['daumRt'] = drt; r['naverRt'] = nrt
        r['naverBlogCnt'] = nv['blogCnt'] if nv else 0
        r['ratingSource'] = 'daum' if drt > 0 else ('naver' if nrt > 0 else 'none')
        if nv:
            if nv['imageUrl'] and not r.get('imageUrl'): r['imageUrl'] = nv['imageUrl']
            if nv['hours']: r['hours'] = nv['hours']
            if nv['tel'] and not r.get('tel'): r['tel'] = nv['tel']
            r['naverPlaceId'] = nv['placeId']
            if nv['menus']:
                r['menuItems'] = [{'menuName': mm.get('name',''), 'price': int(re.sub(r'[^0-9]','',str(mm.get('price','0'))) or 0), 'description': ''} for mm in nv['menus'][:8] if mm.get('name')]
            revs = naver_reviews(nv['placeId'])
            time.sleep(1.2)
            if revs:
                th, qt = summarize(revs)
                summary_out[r['name']] = {'themes': th, 'quote': qt, 'review_count': len(revs)}
        print(f"  {r['name']}: rt={r['rt']} cnt={r['cnt']} (네{ncnt}+다{dcnt}) menu={len(r.get('menuItems',[]))} rv={len(summary_out.get(r['name'],{}).get('themes',[]))}", flush=True)

    new = f'const {var} = [\n  ' + ',\n  '.join(json.dumps(x, ensure_ascii=False) for x in arr) + f'\n]\n\nexport default {var}\n'
    with open(fp, 'w') as f: f.write(new)
    # reviews_summary.json에 hongdae 병합
    rs_fp = os.path.join(BASE, 'data', 'reviews_summary.json')
    rs = json.load(open(rs_fp)) if os.path.exists(rs_fp) else {}
    rs['hongdae'] = summary_out
    with open(rs_fp, 'w', encoding='utf-8') as f: json.dump(rs, f, ensure_ascii=False, indent=1)
    print(f'\n✓ hongdae.js 보강 완료, reviews_summary hongdae {len(summary_out)}곳')

if __name__ == '__main__':
    main()
