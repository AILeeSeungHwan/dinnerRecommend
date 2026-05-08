#!/usr/bin/env python3
"""1개 식당만 테스트 — API 응답 구조 확인"""

import json, requests, time, re
from urllib.parse import quote

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
    'Referer': 'https://map.naver.com/',
    'Origin': 'https://map.naver.com',
}

# 1. 검색
query = '판교 늘푸른 생선구이'
url = f'https://map.naver.com/p/api/search/allSearch?query={quote(query)}&type=all&searchCoord=&boundary=&displayCount=5&isPlaceHome=false&lang=ko'

print(f'[검색] {query}')
resp = requests.get(url, headers=HEADERS, timeout=15)
print(f'  status: {resp.status_code}')

if resp.status_code == 200:
    data = resp.json()
    result = data.get('result', {})

    # place/restaurant/cafe 섹션 탐색
    for key in ('place', 'restaurant', 'cafe'):
        section = result.get(key, {})
        if isinstance(section, dict) and 'list' in section:
            items = section['list']
            print(f'  [{key}] {len(items)}개 결과')
            for item in items[:2]:
                pid = item.get('id', '')
                name = item.get('name', '')
                thumb = item.get('thumUrl', item.get('imageUrl', ''))
                print(f'    id={pid} | name={name}')
                print(f'    thumUrl={thumb[:100]}...' if thumb else '    thumUrl=없음')

                # 2. 사진 API 테스트
                if pid:
                    time.sleep(2)
                    photo_url = f'https://pcmap-api.place.naver.com/place/v2/places/{pid}/photos?filterType=all&page=1&size=5'
                    photo_headers = {**HEADERS, 'Referer': f'https://pcmap.place.naver.com/restaurant/{pid}/photo'}
                    print(f'\n[사진 API] {photo_url[:80]}...')
                    presp = requests.get(photo_url, headers=photo_headers, timeout=15)
                    print(f'  status: {presp.status_code}')
                    if presp.status_code == 200:
                        try:
                            pdata = presp.json()
                            if isinstance(pdata, dict):
                                print(f'  keys: {list(pdata.keys())[:10]}')
                                # photo 리스트 찾기
                                for pkey in ('photos', 'items', 'list', 'photoList'):
                                    if pkey in pdata:
                                        plist = pdata[pkey]
                                        print(f'  [{pkey}] {len(plist)}개')
                                        for ph in plist[:2]:
                                            if isinstance(ph, dict):
                                                print(f'    keys: {list(ph.keys())[:8]}')
                                                for ikey in ('originUrl', 'url', 'imageUrl', 'thumbnailUrl', 'photoUrl'):
                                                    if ikey in ph:
                                                        print(f'    {ikey}: {ph[ikey][:100]}')
                                        break
                            elif isinstance(pdata, list):
                                print(f'  list: {len(pdata)}개')
                                for ph in pdata[:2]:
                                    if isinstance(ph, dict):
                                        print(f'    keys: {list(ph.keys())[:8]}')
                        except:
                            print(f'  JSON 파싱 실패: {presp.text[:200]}')
                    else:
                        print(f'  body: {presp.text[:300]}')

                    # 3. home API 테스트
                    time.sleep(2)
                    home_url = f'https://pcmap-api.place.naver.com/place/home?id={pid}'
                    home_headers = {**HEADERS, 'Referer': f'https://pcmap.place.naver.com/restaurant/{pid}/home'}
                    print(f'\n[home API] {home_url}')
                    hresp = requests.get(home_url, headers=home_headers, timeout=15)
                    print(f'  status: {hresp.status_code}')
                    if hresp.status_code == 200:
                        try:
                            hdata = hresp.json()
                            if isinstance(hdata, dict):
                                print(f'  keys: {list(hdata.keys())[:15]}')
                                # 이미지 관련 키 탐색
                                for ikey in ('images', 'photos', 'photoList', 'businessPhotos', 'imageUrl', 'thumUrl', 'menuImages'):
                                    if ikey in hdata:
                                        val = hdata[ikey]
                                        if isinstance(val, list):
                                            print(f'  [{ikey}] {len(val)}개')
                                            for v in val[:2]:
                                                if isinstance(v, str):
                                                    print(f'    {v[:100]}')
                                                elif isinstance(v, dict):
                                                    print(f'    keys: {list(v.keys())[:6]}')
                                        elif isinstance(val, str):
                                            print(f'  [{ikey}] {val[:100]}')
                        except:
                            print(f'  JSON 파싱 실패')

                break  # 첫 번째 결과만 테스트
            break  # 첫 번째 섹션만
