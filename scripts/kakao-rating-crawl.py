#!/usr/bin/env python3
"""
kakao-rating-crawl.py — 카카오맵에서 식당의 다음(Daum) 평점·리뷰수를 가져와
data/{region}.js의 rt/cnt 필드를 갱신.

사용법:
  export KAKAO_REST_API_KEY=발급받은_키
  python3 scripts/kakao-rating-crawl.py [region|all]

KAKAO_REST_API_KEY 발급:
  1) https://developers.kakao.com 회원가입·로그인
  2) "내 애플리케이션" → "애플리케이션 추가하기"
  3) 발급된 "REST API 키" 복사
  4) export KAKAO_REST_API_KEY=...

크롤링 윤리:
  - 요청 간 0.5~1초 딜레이
  - 동시 요청 1개
  - 한국어 환경 가정 (Accept-Language: ko-KR)

흐름:
  1) 식당명 + 주소 → 카카오 dapi 키워드 검색 → placeId 획득
  2) place.map.kakao.com/main/v/{placeId} (인증 X) 또는 dapi place 상세 → 평점/리뷰
  3) data/{region}.js 의 rt/cnt 필드를 정규식으로 in-place 갱신
"""
import os, re, json, sys, time, random, urllib.request, urllib.parse, urllib.error

BASE = '/Users/lee/Desktop/dinnerAIVer1.0/dinnerRecommend'
KAKAO_KEY = os.environ.get('KAKAO_REST_API_KEY', '')
if not KAKAO_KEY:
    print('ERROR: KAKAO_REST_API_KEY 환경변수가 비어 있습니다. 발급 후 export 하세요.')
    print('  export KAKAO_REST_API_KEY=...')
    sys.exit(1)

REGIONS = ['samseong','jamsil','pangyo','yeongtong','mangpo','yeongtongGu','suji','gangnam']
DELAY = (0.4, 1.0)

def http_get(url, headers=None, timeout=12):
    h = {'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'ko-KR'}
    if headers: h.update(headers)
    req = urllib.request.Request(url, headers=h)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode('utf-8', errors='ignore')

def kakao_search(name, addr=''):
    """카카오 dapi 키워드 검색 → placeId 반환 (가장 가까운 매칭 1개)."""
    query = f'{name} {addr.split(" ")[-1] if addr else ""}'.strip()
    url = f'https://dapi.kakao.com/v2/local/search/keyword.json?query={urllib.parse.quote(query)}'
    try:
        body = http_get(url, headers={'Authorization': f'KakaoAK {KAKAO_KEY}'})
        data = json.loads(body)
        for d in data.get('documents', []):
            if d.get('category_group_code') == 'FD6':  # 음식점
                return d.get('id'), d.get('place_url', '')
        if data.get('documents'):
            return data['documents'][0].get('id'), data['documents'][0].get('place_url', '')
    except Exception as e:
        print(f'    [search err] {name}: {e}')
    return None, None

def kakao_place_detail(place_id):
    """place.map.kakao.com 의 공개 plac 정보 페이지에서 평점·리뷰 수 추출.
    (dapi에는 평점이 없으므로 웹 페이지를 파싱)"""
    url = f'https://place.map.kakao.com/main/v/{place_id}'
    try:
        body = http_get(url)
        # JSON-like payload — basicInfo 또는 viewCount 등
        # rating: 평점(1~5), userRating(다음 ?)
        rating = None
        cnt = None
        m = re.search(r'"scoresum":\s*(\d+)\s*,\s*"scorecnt":\s*(\d+)', body)
        if m:
            sumv, c = int(m.group(1)), int(m.group(2))
            if c > 0:
                rating = round(sumv / c, 1)
                cnt = c
        if rating is None:
            m2 = re.search(r'"rating"\s*:\s*(\d+\.?\d*)', body)
            if m2: rating = float(m2.group(1))
        if cnt is None:
            m3 = re.search(r'"reviewCount"\s*:\s*(\d+)', body)
            if m3: cnt = int(m3.group(1))
        return rating, cnt
    except Exception as e:
        print(f'    [detail err] place {place_id}: {e}')
    return None, None

def update_region(region):
    p = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(p):
        print(f'  {region}: 파일 없음')
        return
    with open(p, 'r', encoding='utf-8') as f:
        text = f.read()

    # 식당 이름·주소 추출 (rt=0 OR cnt=0 케이스 우선)
    targets = []
    for m in re.finditer(r'\{[^{]*?"name":\s*"([^"]+)"[^{]*?"rt":\s*(\d+(?:\.\d+)?)[^{]*?"cnt":\s*(\d+)[^{]*?"addr":\s*"([^"]*)"', text, re.DOTALL):
        name, rt, cnt, addr = m.group(1), float(m.group(2)), int(m.group(3)), m.group(4)
        # 평점 0 또는 의심 케이스 우선
        if rt == 0 or cnt == 0:
            targets.append((name, addr))

    print(f'  {region}: 보강 대상 {len(targets)}개')
    updated = 0
    for i, (name, addr) in enumerate(targets, 1):
        place_id, _ = kakao_search(name, addr)
        if not place_id:
            time.sleep(random.uniform(*DELAY))
            continue
        rating, cnt = kakao_place_detail(place_id)
        if rating is not None and cnt is not None:
            # data/{region}.js의 해당 식당 객체 안의 rt/cnt 갱신
            # 식당명 정확 매칭 (json 형식)
            esc_name = re.escape(name)
            obj_pat = re.compile(rf'(\{{\s*"name":\s*"{esc_name}"[^{{]*?"rt":\s*)\d+(?:\.\d+)?', re.DOTALL)
            text2 = obj_pat.sub(rf'\g<1>{rating}', text, count=1)
            obj_pat2 = re.compile(rf'(\{{\s*"name":\s*"{esc_name}"[^{{]*?"cnt":\s*)\d+', re.DOTALL)
            text2 = obj_pat2.sub(rf'\g<1>{cnt}', text2, count=1)
            if text2 != text:
                text = text2
                updated += 1
                print(f'    [{i}/{len(targets)}] {name}: rt={rating}, cnt={cnt}')
        time.sleep(random.uniform(*DELAY))

    if updated > 0:
        with open(p, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f'  ✓ {region}: {updated}개 갱신')
    else:
        print(f'  · {region}: 갱신 없음')

def main():
    target = sys.argv[1] if len(sys.argv) > 1 else 'all'
    if target == 'all':
        for region in REGIONS:
            print(f'\n=== {region} ===')
            update_region(region)
    elif target in REGIONS:
        update_region(target)
    else:
        print(f'사용법: {sys.argv[0]} [{"|".join(REGIONS)}|all]')
        sys.exit(1)

if __name__ == '__main__':
    main()
