#!/usr/bin/env python3
"""
refresh-post-ratings.py — 포스팅 식당 중 평점/리뷰 부족한 식당 네이버에서 재수집

리뷰 10건 미만 식당을 대상으로 네이버 검색에서 최신 평점/리뷰 수를 가져온다.
"""

import json, os, re, time
from urllib.parse import quote
import requests

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE, 'scripts', 'post-data')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
}

REGION_DISPLAY = {
    'samseong': '삼성역', 'jamsil': '잠실', 'pangyo': '판교',
    'yeongtong': '영통', 'mangpo': '망포', 'yeongtongGu': '영통구청', 'suji': '수지',
}

session = requests.Session()
session.headers.update(HEADERS)

def search_naver_rating(name, region):
    """네이버 검색에서 식당 평점/리뷰 수 추출"""
    region_name = REGION_DISPLAY.get(region, region)
    query = f'{region_name} {name}'
    url = f'https://search.naver.com/search.naver?where=nexearch&query={quote(query)}'

    try:
        resp = session.get(url, timeout=15)
        if resp.status_code != 200:
            return None, None, None

        text = resp.text

        # 방문자 리뷰 수 추출
        visitor_match = re.search(r'방문자리뷰\s*(\d[\d,]*)', text)
        if not visitor_match:
            visitor_match = re.search(r'리뷰\s*(\d[\d,]*)', text)

        visitor_cnt = 0
        if visitor_match:
            visitor_cnt = int(visitor_match.group(1).replace(',', ''))

        # 블로그 리뷰 수
        blog_match = re.search(r'블로그리뷰\s*(\d[\d,]*)', text)
        blog_cnt = 0
        if blog_match:
            blog_cnt = int(blog_match.group(1).replace(',', ''))

        # 별점 추출
        rating_match = re.search(r'별점\s*([\d.]+)', text)
        if not rating_match:
            rating_match = re.search(r'"rating"[:\s]*([\d.]+)', text)
        if not rating_match:
            rating_match = re.search(r'(\d\.\d{1,2})\s*점', text)

        rating = 0
        if rating_match:
            rating = float(rating_match.group(1))
            if rating > 5:
                rating = 0

        return rating, visitor_cnt, blog_cnt
    except:
        return None, None, None

# 포스트 데이터 로드 & 업데이트
updated = 0
for fname in sorted(os.listdir(DATA_DIR)):
    if not fname.endswith('.json'):
        continue
    fpath = os.path.join(DATA_DIR, fname)
    post = json.load(open(fpath))
    region = post['region']
    changed = False

    for r in post.get('restaurants', []):
        cnt = r.get('reviewCount', 0)
        rt = r.get('rating', 0)

        # 리뷰 10건 미만이거나 평점 0인 식당만 재수집
        if cnt >= 10 and rt > 0:
            continue

        time.sleep(2)
        new_rt, new_cnt, new_blog = search_naver_rating(r['name'], region)

        if new_rt is None:
            print(f'  post{post["id"]} {r["name"]}: 검색 실패')
            continue

        old_rt, old_cnt = rt, cnt
        if new_cnt > cnt:
            r['reviewCount'] = new_cnt
            changed = True
        if new_rt > 0 and (rt == 0 or abs(new_rt - rt) > 0.1):
            r['rating'] = new_rt
            changed = True
        if new_blog > 0:
            r['blogCount'] = new_blog
            changed = True

        updated += 1
        print(f'  post{post["id"]} {r["name"]}: rt {old_rt}->{r.get("rating",0)} cnt {old_cnt}->{r.get("reviewCount",0)} blog={new_blog}')

    if changed:
        with open(fpath, 'w') as f:
            json.dump(post, f, ensure_ascii=False, indent=2)

print(f'\n업데이트 시도: {updated}개')
