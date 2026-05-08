#!/usr/bin/env python3
"""
rebuild-posts.py — enrich-posts.py가 생성한 JSON 데이터를 기반으로
25개 포스트를 실제 식당 데이터가 포함된 고품질 콘텐츠로 재생성한다.

사용법: python3 scripts/rebuild-posts.py
출력: posts/{id}.js 파일 덮어쓰기 + data/posts.js 날짜 업데이트
"""

import json, os, re, sys
from datetime import date

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE, 'scripts', 'post-data')
IMG_MAPPING_FILE = os.path.join(BASE, 'scripts', 'post-images.json')
TODAY = date.today().strftime('%Y-%m-%d')

# ── 이미지 매핑 로드 ───────────────────────────────────────────
img_mapping = {}
if os.path.exists(IMG_MAPPING_FILE):
    with open(IMG_MAPPING_FILE, 'r', encoding='utf-8') as f:
        img_mapping = json.load(f)

# ── 그라디언트 스타일 풀 ────────────────────────────────────────
GRADIENTS = [
    { 'from': '#FF6B6B', 'to': '#4ECDC4' },
    { 'from': '#4facfe', 'to': '#00f2fe' },
    { 'from': '#43e97b', 'to': '#38f9d7' },
    { 'from': '#fa709a', 'to': '#fee140' },
    { 'from': '#667EEA', 'to': '#764BA2' },
    { 'from': '#f7971e', 'to': '#ffd200' },
    { 'from': '#FFD700', 'to': '#FF6B35' },
    { 'from': '#A8EDEA', 'to': '#FED6E3' },
    { 'from': '#a18cd1', 'to': '#fbc2eb' },
    { 'from': '#ffecd2', 'to': '#fcb69f' },
]

# ── 지역 정보 ───────────────────────────────────────────────────
REGION_INFO = {
    'samseong': {'name': '삼성역', 'path': '/dinner/samseong', 'area': '삼성역·코엑스·선릉역'},
    'jamsil':   {'name': '잠실',   'path': '/dinner/jamsil',   'area': '잠실·송리단길·석촌호수'},
    'pangyo':   {'name': '판교',   'path': '/pangyo',          'area': '판교역·테크노밸리·백현동'},
    'yeongtong':{'name': '영통',   'path': '/samsungElectronics/yeongtong', 'area': '영통역·삼성전자'},
    'mangpo':   {'name': '망포',   'path': '/samsungElectronics/mangpo',    'area': '망포역·삼성전자'},
    'yeongtongGu':{'name':'영통구청','path':'/samsungElectronics/yeongtongGu','area':'영통구청·매탄동'},
}

# ── 카테고리별 콘텐츠 앵글 ───────────────────────────────────────
CATEGORY_ANGLES = {
    'meat':     {'label': '고기', 'focus': '고기 종류·부위·인당 가격·구이 방식'},
    'date':     {'label': '데이트', 'focus': '분위기·코스 구성·예약 여부·뷰'},
    'group':    {'label': '회식·단체', 'focus': '룸·단체석·인당 예산·주차'},
    'lunch':    {'label': '점심', 'focus': '접근성·회전율·세트 메뉴·가격'},
    'budget':   {'label': '가성비', 'focus': '1인 가격·양·혼밥 가능 여부'},
    'izakaya':  {'label': '이자카야·술집', 'focus': '주류 구성·안주·분위기·영업시간'},
    'chinese':  {'label': '중식', 'focus': '대표 메뉴·가격·양·단체 가능'},
    'gukbap':   {'label': '국밥·해장', 'focus': '국물·가격·해장 효과·24시 여부'},
    'japanese': {'label': '일식·스시', 'focus': '오마카세 등급·예약·코스 가격'},
}

# ── 포스트 메타 로드 ─────────────────────────────────────────────
posts_file = os.path.join(BASE, 'data', 'posts.js')
with open(posts_file, 'r', encoding='utf-8') as f:
    posts_js_text = f.read()

# ── 유틸리티 함수 ────────────────────────────────────────────────
def fmt_price(price_str):
    """'12000~22000' → '12,000~22,000원'"""
    if not price_str:
        return ''
    parts = price_str.replace(' ', '').split('~')
    formatted = []
    for p in parts:
        try:
            formatted.append(f'{int(p):,}')
        except:
            formatted.append(p)
    return '~'.join(formatted) + '원'

def fmt_menu_price(price):
    """9000 → '9,000원'"""
    if not price:
        return ''
    try:
        return f'{int(price):,}원'
    except:
        return str(price)

def safe_id(name):
    """식당명 → h2 id용 slug"""
    # 한글·영문·숫자만 남기고 하이픈으로 연결
    s = re.sub(r'[^\w가-힣]', '-', name)
    s = re.sub(r'-+', '-', s).strip('-').lower()
    return s[:30] or 'rest'

def esc(text):
    """HTML용 이스케이프"""
    return text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace("'", '&#39;')

def js_str(text):
    """JS 문자열 안전하게 — 작은따옴표 이스케이프"""
    return text.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')

# ── 태그 기반 자연어 문장 생성 ───────────────────────────────────
def generate_tag_sentences(r, category):
    """식당 데이터의 tags/moods를 자연어 문장으로 변환"""
    sentences = []
    tags = set(r.get('tags', []))
    moods = set(r.get('moods', []))

    if '가성비' in tags:
        sentences.append('가격 대비 만족도가 높다는 평가를 받고 있습니다.')
    if '웨이팅맛집' in tags:
        sentences.append('점심시간에는 웨이팅이 있을 수 있어 일찍 방문하는 것을 권장합니다.')
    if '단체가능' in tags and category in ('group', 'lunch'):
        sentences.append('단체 예약이 가능해 팀 식사에도 적합합니다.')
    if '룸있음' in tags:
        sentences.append('별도 룸이 있어 프라이빗한 식사가 가능합니다.')
    if '예약필수' in tags:
        sentences.append('방문 전 예약을 권장합니다.')
    if '한우' in tags:
        sentences.append('국내산 한우를 사용합니다.')
    if '인스타감성' in tags and category == 'date':
        sentences.append('인테리어가 감각적이어서 사진 찍기 좋은 공간입니다.')
    if '친절' in tags:
        sentences.append('직원 서비스가 친절하다는 리뷰가 많습니다.')
    if '데이트' in moods and category != 'date':
        sentences.append('분위기가 좋아 데이트 장소로도 추천됩니다.')
    if '회식' in moods and category != 'group':
        sentences.append('소규모 회식 장소로도 활용 가능합니다.')

    return ' '.join(sentences[:3])  # 최대 3문장

# ── 카테고리별 맥락 문장 생성 ─────────────────────────────────────
def generate_context_paragraph(r, category):
    """식당 데이터를 기반으로 카테고리에 맞는 추가 맥락 문장 생성"""
    name = r['name']
    rating = r.get('rating', 0)
    cnt = r.get('reviewCount', 0)
    tags = set(r.get('tags', []))
    rtype = r.get('type', '')
    price = r.get('priceRange', '')
    hours = r.get('hours', '')

    parts = []

    # 평점 기반 문장
    if rating >= 4.8:
        parts.append(f'평점 {rating}점으로 해당 지역에서 최상위권에 속하며, 리뷰 {cnt}건이 축적된 검증된 맛집입니다.')
    elif rating >= 4.5:
        parts.append(f'리뷰 {cnt}건 기준 평점 {rating}점으로 안정적인 평가를 받고 있습니다.')
    elif cnt > 0:
        parts.append(f'리뷰 {cnt}건이 등록된 식당으로, 방문자 평가를 참고하시기 바랍니다.')

    # 가격대 기반 문장
    if price and '~' in price:
        try:
            lo, hi = price.split('~')
            lo_val, hi_val = int(lo), int(hi)
            if category == 'budget' and lo_val <= 10000:
                parts.append(f'1만원 이하 메뉴가 있어 부담 없이 이용할 수 있습니다.')
            elif category == 'group' and hi_val >= 30000:
                parts.append(f'인당 {hi_val//10000}만원대로 회식 예산 계획 시 참고하시기 바랍니다.')
            elif category == 'date' and hi_val >= 50000:
                parts.append(f'코스 기준 인당 {lo_val//10000}~{hi_val//10000}만원대로 특별한 날 식사에 적합합니다.')
            elif category == 'lunch' and lo_val <= 15000:
                parts.append(f'점심 기준 {lo_val//1000:,}천원대부터 이용 가능해 직장인 점심으로 적합합니다.')
        except:
            pass

    # 영업시간 기반 문장
    if hours:
        if 'AM' in hours and '11' in hours.split('~')[0] if '~' in hours else '':
            parts.append('점심 영업을 하며, 방문 전 정확한 영업시간을 확인하시기 바랍니다.')
        if '브레이크' in hours or 'break' in hours.lower():
            parts.append('브레이크 타임이 있으므로 방문 시간을 확인하고 가시기 바랍니다.')

    # 카테고리 특화 문장
    if category == 'meat':
        if '구이' in rtype or '고기' in rtype:
            parts.append('숯불 또는 가스 불판에 직접 구워 먹는 스타일로, 신선한 고기를 바로 즐길 수 있습니다.')
    elif category == 'izakaya':
        if '이자카야' in rtype or '술집' in rtype:
            parts.append('다양한 안주와 주류를 갖추고 있어 가벼운 한잔부터 본격 회식 2차까지 활용 가능합니다.')
    elif category == 'chinese':
        if '중식' in rtype or '중국' in rtype:
            parts.append('대부분의 메뉴가 2인 이상 나눠 먹기 좋은 구성으로, 단체 방문 시 다양하게 주문할 수 있습니다.')
    elif category == 'gukbap':
        parts.append('뜨끈한 국물 요리로 해장이나 든든한 한 끼 식사에 적합합니다.')
    elif category == 'japanese':
        if '오마카세' in ' '.join(tags) or '스시' in rtype:
            parts.append('셰프가 엄선한 식재료로 코스를 구성하며, 제철 재료에 따라 메뉴가 달라질 수 있습니다.')

    return ' '.join(parts[:3])

# ── 식당 본문 HTML 생성 ──────────────────────────────────────────
def generate_restaurant_body(r, region_path, category):
    """하나의 식당에 대한 상세 본문 HTML 생성"""
    name = r['name']
    link = f'{region_path}/restaurant/{name}'
    parts = []

    # 식당명 + 주소
    addr_text = f' ({r["addr"]})' if r.get('addr') else ''
    parts.append(f'<p><strong><a href="{link}">{esc(name)}</a></strong>{esc(addr_text)}</p>')

    # 핵심 정보 리스트
    info_items = []
    if r.get('rating'):
        review_text = f'리뷰 {r["reviewCount"]}건'
        if r.get('blogCount', 0) > 0:
            review_text += f' · 블로그 {r["blogCount"]}건'
        info_items.append(f'평점 {r["rating"]}점 ({review_text})')
    if r.get('priceRange'):
        info_items.append(f'가격대 {fmt_price(r["priceRange"])}')
    if r.get('hours'):
        hours_text = r['hours']
        # 주소 데이터가 섞인 경우 정리
        if '주소' in hours_text or '출구' in hours_text or '미터' in hours_text:
            # 시간 패턴만 추출 시도
            time_match = re.search(r'(?:AM|PM|오전|오후)?\s*\d{1,2}:\d{2}', hours_text)
            if time_match:
                hours_text = hours_text[:hours_text.index('주소')] if '주소' in hours_text else hours_text
            else:
                hours_text = ''
        if hours_text.strip():
            info_items.append(f'영업시간 {hours_text.strip()}')
    if r.get('tel'):
        info_items.append(f'전화 {r["tel"]}')

    # 편의시설
    facilities = []
    if r.get('parking'):
        facilities.append('주차 가능')
    if r.get('reservation'):
        facilities.append('예약 가능')
    if facilities:
        info_items.append(' · '.join(facilities))

    if info_items:
        li_html = ''.join(f'<li>{esc(item)}</li>' for item in info_items)
        parts.append(f'<ul>{li_html}</ul>')

    # 메뉴 정보 (있는 경우)
    menu_items = r.get('menuItems', [])
    if menu_items:
        menu_parts = []
        for mi in menu_items[:5]:
            mname = mi.get('name', '')
            mprice = fmt_menu_price(mi.get('price'))
            if mname and mprice:
                menu_parts.append(f'{esc(mname)} {mprice}')
            elif mname:
                menu_parts.append(esc(mname))
        if menu_parts:
            parts.append(f'<p><strong>대표 메뉴:</strong> {" / ".join(menu_parts)}</p>')

    # 태그 기반 설명
    tag_text = generate_tag_sentences(r, category)
    if tag_text:
        parts.append(f'<p>{esc(tag_text)}</p>')

    # 카테고리 맥락 추가 문장 (콘텐츠 두께 보강)
    extra = generate_context_paragraph(r, category)
    if extra:
        parts.append(f'<p>{esc(extra)}</p>')

    # 키워드 태그 표시
    keywords = r.get('keywords', []) or r.get('tags', [])
    if keywords:
        kw_display = keywords[:6]
        parts.append(f'<p style="color:var(--text-secondary);font-size:.85rem">#{" #".join(esc(k) for k in kw_display)}</p>')

    return ''.join(parts)

# ── 비교표 HTML 생성 ─────────────────────────────────────────────
def generate_comparison_table(restaurants, category):
    """식당 비교 테이블 HTML"""
    ths = '<th style="padding:8px 6px;text-align:left">식당</th>'
    ths += '<th style="padding:8px 6px;text-align:center">평점</th>'
    ths += '<th style="padding:8px 6px;text-align:center">리뷰수</th>'
    ths += '<th style="padding:8px 6px;text-align:center">가격대</th>'
    ths += '<th style="padding:8px 6px;text-align:left">특징</th>'

    rows = []
    for r in restaurants:
        tags_short = r.get('tags', [])[:3]
        feature = '·'.join(tags_short) if tags_short else r.get('type', '')
        price_display = fmt_price(r.get('priceRange', ''))
        row = f'<tr style="border-bottom:1px solid var(--border)">'
        row += f'<td style="padding:7px 6px">{esc(r["name"])}</td>'
        row += f'<td style="padding:7px 6px;text-align:center">{r.get("rating", "-")}점</td>'
        row += f'<td style="padding:7px 6px;text-align:center">{r.get("reviewCount", "-")}</td>'
        row += f'<td style="padding:7px 6px;text-align:center">{esc(price_display)}</td>'
        row += f'<td style="padding:7px 6px">{esc(feature)}</td>'
        row += '</tr>'
        rows.append(row)

    return (
        f'<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0">'
        f'<thead><tr style="border-bottom:2px solid var(--border)">{ths}</tr></thead>'
        f'<tbody>{"".join(rows)}</tbody></table>'
    )

# ── 실용 팁 섹션 ────────────────────────────────────────────────
def generate_tips(post_data):
    """카테고리와 지역에 따른 실용 팁"""
    category = post_data.get('category', '')
    region = post_data.get('region', '')
    rinfo = REGION_INFO.get(region, {})
    restaurants = post_data.get('restaurants', [])

    tips = []

    # 웨이팅 관련
    waiting_rests = [r['name'] for r in restaurants if '웨이팅맛집' in r.get('tags', [])]
    if waiting_rests:
        names = ', '.join(waiting_rests[:2])
        tips.append(f'{names} 등은 점심 피크(12:00~12:30)에 웨이팅이 있습니다. 11:50 이전 도착을 권장합니다.')

    # 예약 관련
    reservation_rests = [r['name'] for r in restaurants if '예약필수' in r.get('tags', []) or r.get('reservation')]
    if reservation_rests:
        names = ', '.join(reservation_rests[:2])
        tips.append(f'{names}은(는) 사전 예약을 권장합니다. 특히 주말이나 저녁 시간대는 예약 없이 방문 시 대기할 수 있습니다.')

    # 주차 관련
    parking_rests = [r['name'] for r in restaurants if r.get('parking')]
    no_parking = [r['name'] for r in restaurants if not r.get('parking')]
    if parking_rests:
        tips.append(f'주차 가능: {", ".join(parking_rests[:3])}.')
    if no_parking and len(no_parking) < len(restaurants):
        tips.append(f'{", ".join(no_parking[:2])} 등은 별도 주차장이 없으므로 대중교통 이용을 권장합니다.')

    # 카테고리별 팁
    if category == 'meat':
        tips.append('고기집은 환기 시설 확인이 중요합니다. 냄새가 걱정된다면 점심 직후보다 늦은 점심(1시 이후)에 방문하면 회전이 빠릅니다.')
    elif category == 'date':
        tips.append('데이트 식사는 예약이 기본입니다. 특히 금·토요일 저녁은 최소 3일 전 예약을 권장합니다.')
    elif category == 'group':
        tips.append('회식 장소는 인원 확정 후 최소 2~3일 전 예약이 필수입니다. 룸이 필요한 경우 일주일 전 예약을 권장합니다.')
    elif category == 'budget':
        tips.append('가성비 맛집일수록 점심 피크 웨이팅이 길 수 있습니다. 11:30~11:50 사이 방문이 최적입니다.')
    elif category == 'lunch':
        tips.append('점심 메뉴는 저녁보다 가격이 낮은 경우가 많습니다. 런치 세트가 있는지 미리 확인하면 더 합리적으로 이용할 수 있습니다.')

    if not tips:
        tips.append('방문 전 영업시간과 휴무일을 반드시 확인하세요. 특히 명절 전후에는 임시 휴무가 있을 수 있습니다.')

    return '<ul>' + ''.join(f'<li>{esc(t)}</li>' for t in tips) + '</ul>'

# ── 상황별 추천 생성 ─────────────────────────────────────────────
def generate_situation_picks(restaurants, category):
    """상황별로 어떤 식당이 적합한지 매핑"""
    if len(restaurants) < 3:
        return ''

    situations = []

    # 가성비 픽
    budget_picks = [r['name'] for r in restaurants if '가성비' in r.get('tags', [])]
    if budget_picks:
        situations.append(f'<li><strong>가성비 우선:</strong> {", ".join(budget_picks[:2])} — 합리적인 가격에 만족스러운 식사가 가능합니다.</li>')

    # 분위기/데이트 픽
    date_picks = [r['name'] for r in restaurants if '데이트' in r.get('moods', []) or '인스타감성' in r.get('tags', [])]
    if date_picks and category != 'date':
        situations.append(f'<li><strong>분위기 중시:</strong> {", ".join(date_picks[:2])} — 데이트나 특별한 날에 추천합니다.</li>')

    # 단체/회식 픽
    group_picks = [r['name'] for r in restaurants if '단체가능' in r.get('tags', []) or '룸있음' in r.get('tags', [])]
    if group_picks and category != 'group':
        situations.append(f'<li><strong>단체·회식:</strong> {", ".join(group_picks[:2])} — 단체석 또는 룸이 있어 회식에 적합합니다.</li>')

    # 혼밥 픽
    solo_picks = [r['name'] for r in restaurants if '혼밥가능' in r.get('tags', [])]
    if solo_picks:
        situations.append(f'<li><strong>혼밥:</strong> {", ".join(solo_picks[:2])} — 1인 식사가 부담 없는 곳입니다.</li>')

    # 평점 최고
    sorted_by_rating = sorted(restaurants, key=lambda x: x.get('rating', 0), reverse=True)
    if sorted_by_rating:
        top = sorted_by_rating[0]
        situations.append(f'<li><strong>평점 최고:</strong> {top["name"]} (평점 {top.get("rating", 0)}점) — 방문자 평가가 가장 높습니다.</li>')

    # 리뷰 최다
    sorted_by_reviews = sorted(restaurants, key=lambda x: x.get('reviewCount', 0), reverse=True)
    if sorted_by_reviews and sorted_by_reviews[0].get('reviewCount', 0) > 0:
        top_rev = sorted_by_reviews[0]
        situations.append(f'<li><strong>리뷰 최다:</strong> {top_rev["name"]} (리뷰 {top_rev.get("reviewCount", 0)}건) — 가장 많은 방문자가 검증한 식당입니다.</li>')

    if not situations:
        return ''

    return '<ul>' + ''.join(situations) + '</ul>'

# ── 관련 포스트 찾기 ─────────────────────────────────────────────
def find_related_posts(current_id, current_region, current_category, all_posts_meta):
    """같은 지역 또는 같은 카테고리 포스트 3~5개"""
    related = []
    # 1순위: 같은 지역 다른 카테고리
    for p in all_posts_meta:
        if p['id'] == current_id:
            continue
        if p['region'] == current_region and p.get('category') != current_category:
            related.append(p)
    # 2순위: 같은 카테고리 다른 지역
    for p in all_posts_meta:
        if p['id'] == current_id:
            continue
        if p.get('category') == current_category and p['region'] != current_region:
            if p not in related:
                related.append(p)
    # 3순위: 나머지
    for p in all_posts_meta:
        if p['id'] == current_id:
            continue
        if p not in related:
            related.append(p)
    return related[:4]

# ── h2 타이틀 생성 ──────────────────────────────────────────────
def make_h2_title(r, category):
    """식당에 대한 h2 제목 생성 — '식당명 — 한줄 핵심'"""
    name = r['name']
    tags = r.get('tags', [])
    rtype = r.get('type', '')

    # 카테고리/태그 기반 한줄 핵심
    if category == 'date':
        if '인스타감성' in tags:
            suffix = '감각적인 분위기의 데이트 맛집'
        elif r.get('rating', 0) >= 4.8:
            suffix = f'평점 {r["rating"]}점 프리미엄 레스토랑'
        else:
            suffix = '분위기 좋은 데이트 추천'
    elif category == 'meat':
        if '한우' in tags:
            suffix = '한우 전문 구이집'
        elif '가성비' in tags:
            suffix = '가성비 고기 맛집'
        else:
            clean_type = rtype.split(',')[0] if ',' in rtype else rtype
            suffix = f'{clean_type} 전문' if clean_type else '고기 전문'
    elif category == 'group':
        if '룸있음' in tags:
            suffix = '룸 완비 회식 장소'
        elif '단체가능' in tags:
            suffix = '단체석 보유 회식 맛집'
        else:
            suffix = '회식 추천 식당'
    elif category == 'budget':
        suffix = '가성비 점심 추천'
    elif category == 'izakaya':
        suffix = '분위기 좋은 술자리'
    elif category == 'chinese':
        clean_type = rtype.split(',')[0] if ',' in rtype else rtype
        suffix = f'{clean_type} 맛집' if clean_type else '중식 맛집'
    elif category == 'gukbap':
        suffix = '든든한 국밥 한 그릇'
    elif category == 'japanese':
        if r.get('priceRange', '').split('~')[-1:] and int(r.get('priceRange', '0~0').split('~')[-1] or 0) > 50000:
            suffix = '프리미엄 오마카세'
        else:
            suffix = '가성비 일식'
    elif category == 'lunch':
        suffix = f'{rtype} 대표 맛집'
    else:
        clean_type = rtype.split(',')[0] if ',' in rtype else rtype
        suffix = clean_type or '추천 맛집'

    return f'{name} — {suffix}'

# ── 인트로 생성 ─────────────────────────────────────────────────
def generate_intro(post_data):
    """포스트 인트로 HTML"""
    region = post_data['region']
    rinfo = REGION_INFO.get(region, {})
    rname = rinfo.get('name', region)
    area = rinfo.get('area', rname)
    cat_label = CATEGORY_ANGLES.get(post_data.get('category', ''), {}).get('label', '')
    rests = post_data.get('restaurants', [])
    total = post_data.get('regionTotalRestaurants', 0)

    n = len(rests)
    ratings = [r['rating'] for r in rests if r.get('rating')]
    avg_rt = round(sum(ratings) / len(ratings), 1) if ratings else 0
    prices = []
    for r in rests:
        pr = r.get('priceRange', '')
        if pr and '~' in pr:
            try:
                lo = int(pr.split('~')[0])
                prices.append(lo)
            except:
                pass
    price_range_text = ''
    if prices:
        lo = min(prices)
        price_range_text = f' 가격대는 {lo:,}원부터 시작하며,'

    cat_text = f' {cat_label}' if cat_label else ''
    cat_focus = CATEGORY_ANGLES.get(post_data.get('category', ''), {}).get('focus', '')

    intro_p1 = (
        f'{area} 일대에서{cat_text} 맛집을 찾고 계신가요? '
        f'{rname} 지역 총 {total}곳 식당 데이터 중{cat_text} {n}곳을 '
        f'평점·가격·메뉴·영업시간까지 꼼꼼하게 비교했습니다.'
    )
    intro_p2 = (
        f'평균 평점 {avg_rt}점,{price_range_text} '
        f'{TODAY[:4]}년 {int(TODAY[5:7])}월 기준 실제 운영 데이터입니다. '
        f'{cat_focus}을(를) 중심으로 비교했으니 상황에 맞는 식당을 바로 골라보세요.'
    )

    # 식당명 미리보기
    rest_names = [r['name'] for r in rests[:5]]
    intro_p3 = f'이 글에서 소개하는 식당: {", ".join(rest_names)}.'

    return f'<p>{esc(intro_p1)}</p><p>{esc(intro_p2)}</p><p>{esc(intro_p3)}</p>'

# ── 엔딩 생성 ───────────────────────────────────────────────────
def generate_ending(post_data, related_posts):
    """마무리 + 관련 글 링크"""
    rinfo = REGION_INFO.get(post_data['region'], {})
    region_path = rinfo.get('path', '')
    rname = rinfo.get('name', '')
    cat_label = CATEGORY_ANGLES.get(post_data.get('category', ''), {}).get('label', '')

    closing = (
        f'이 글에서 소개한 {rname}{" " + cat_label if cat_label else ""} 맛집 정보는 '
        f'{TODAY[:4]}년 {int(TODAY[5:7])}월 기준 데이터입니다. '
        f'영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인을 권장합니다. '
        f'아래 관련 글도 함께 참고해 보세요.'
    )

    links = []
    for rp in related_posts:
        links.append(f'<li><a href="/posts/{rp["slug"]}">{esc(rp["title"].split("|")[0].strip())}</a></li>')

    # 지역 메인 링크
    if region_path:
        links.append(f'<li><a href="{region_path}">{esc(rname)} 전체 맛집 보기</a></li>')

    return f'<p>{esc(closing)}</p><ul>{"".join(links)}</ul>'

# ── CTA 생성 ────────────────────────────────────────────────────
def generate_cta(post_data):
    """카테고리 페이지 또는 지역 페이지로의 CTA"""
    rinfo = REGION_INFO.get(post_data['region'], {})
    region_path = rinfo.get('path', '')
    rname = rinfo.get('name', '')
    cat = post_data.get('category', '')
    cat_label = CATEGORY_ANGLES.get(cat, {}).get('label', '')

    if cat and region_path:
        href = f'{region_path}/category/{cat}'
        text = f'{rname} {cat_label} 맛집 전체 보기'
    else:
        href = region_path or '/'
        text = f'{rname} 전체 맛집 보기'

    return {'href': href, 'text': text + ' →'}

# ── 메인: 포스트 재생성 ─────────────────────────────────────────
# 전체 포스트 메타 로드
all_posts_meta = []
for fname in sorted(os.listdir(DATA_DIR)):
    if not fname.endswith('.json'):
        continue
    with open(os.path.join(DATA_DIR, fname), 'r', encoding='utf-8') as f:
        all_posts_meta.append(json.load(f))

all_posts_meta.sort(key=lambda x: x['id'])

for post_data in all_posts_meta:
    pid = post_data['id']
    slug = post_data['slug']
    restaurants = post_data.get('restaurants', [])
    category = post_data.get('category', '')

    if not restaurants:
        print(f'  SKIP {pid} ({slug}): 식당 데이터 없음')
        continue

    sections = []

    # 1. intro
    sections.append({
        'type': 'intro',
        'html': generate_intro(post_data),
    })

    # 2. toc
    sections.append({'type': 'toc'})

    # 3. 선정 기준 섹션
    rinfo = REGION_INFO.get(post_data['region'], {})
    rname = rinfo.get('name', '')
    cat_label = CATEGORY_ANGLES.get(category, {}).get('label', '')
    cat_focus = CATEGORY_ANGLES.get(category, {}).get('focus', '')
    total_region = post_data.get('regionTotalRestaurants', 0)

    ratings_list = [r['rating'] for r in restaurants if r.get('rating')]
    min_rt = min(ratings_list) if ratings_list else 0
    criteria_html = (
        f'<p>{rname} 지역 {total_region}곳 식당 데이터 중 {cat_label} 카테고리에 해당하는 식당을 '
        f'평점 {min_rt}점 이상, 리뷰 수, {cat_focus} 등을 기준으로 선별했습니다. '
        f'모든 정보는 {TODAY[:4]}년 {int(TODAY[5:7])}월 기준 실제 운영 데이터이며, '
        f'폐업·휴무·가격 변동이 있을 수 있으므로 방문 전 확인을 권장합니다.</p>'
    )
    sections.append({
        'type': 'h2', 'id': 'criteria',
        'text': f'선정 기준 — 왜 이 {len(restaurants)}곳인가',
        'gradientStyle': GRADIENTS[0],
    })
    sections.append({'type': 'body', 'html': criteria_html})

    # 4. 각 식당별 h2 + body + image
    post_images = img_mapping.get(str(pid), {}).get('restaurants', {})
    for i, r in enumerate(restaurants):
        h2_title = make_h2_title(r, category)
        h2_id = safe_id(r['name'])

        sections.append({
            'type': 'h2',
            'id': h2_id,
            'text': h2_title,
            'gradientStyle': GRADIENTS[(i + 1) % len(GRADIENTS)],
        })

        body_html = generate_restaurant_body(r, REGION_INFO.get(post_data['region'], {}).get('path', ''), category)
        sections.append({
            'type': 'body',
            'html': body_html,
        })

        # 이미지 삽입 (최대 2장)
        r_images = post_images.get(r['name'], [])
        for img_idx, img_path in enumerate(r_images[:2]):
            sections.append({
                'type': 'image',
                'src': img_path,
                'alt': f'{r["name"]} 음식 사진 {img_idx + 1}',
                'caption': f'{r["name"]}',
            })

    # 4. 비교표
    if len(restaurants) >= 2:
        sections.append({
            'type': 'h2',
            'id': 'compare',
            'text': f'{REGION_INFO.get(post_data["region"], {}).get("name", "")} {CATEGORY_ANGLES.get(category, {}).get("label", "")} 맛집 한눈에 비교',
            'gradientStyle': GRADIENTS[(len(restaurants)) % len(GRADIENTS)],
        })
        sections.append({
            'type': 'body',
            'html': generate_comparison_table(restaurants, category),
        })

    # 5. 상황별 추천 섹션
    situation_html = generate_situation_picks(restaurants, category)
    if situation_html:
        sections.append({
            'type': 'h2', 'id': 'by-situation',
            'text': '상황별 이 식당을 추천합니다',
            'gradientStyle': GRADIENTS[(len(restaurants) + 2) % len(GRADIENTS)],
        })
        sections.append({'type': 'body', 'html': situation_html})

    # 6. 실용 팁
    sections.append({
        'type': 'h2',
        'id': 'tips',
        'text': '방문 전 꼭 확인할 점',
        'gradientStyle': GRADIENTS[(len(restaurants) + 1) % len(GRADIENTS)],
    })
    sections.append({
        'type': 'body',
        'html': generate_tips(post_data),
    })

    # 6. CTA
    cta = generate_cta(post_data)
    sections.append({
        'type': 'cta',
        'href': cta['href'],
        'text': cta['text'],
    })

    # 7. ending
    related = find_related_posts(
        pid, post_data['region'], category,
        [{'id': p['id'], 'slug': p['slug'], 'title': p['title'],
          'region': p['region'], 'category': p.get('category', '')}
         for p in all_posts_meta]
    )
    sections.append({
        'type': 'ending',
        'html': generate_ending(post_data, related),
    })

    # ── JS 파일 생성 ────────────────────────────────────────────
    js_sections = []
    for s in sections:
        if s['type'] == 'toc':
            js_sections.append("    {\n      type: 'toc',\n    }")
        elif s['type'] == 'intro':
            js_sections.append(f"    {{\n      type: 'intro',\n      html: {json.dumps(s['html'], ensure_ascii=False)},\n    }}")
        elif s['type'] == 'h2':
            gs = s['gradientStyle']
            js_sections.append(
                f"    {{\n      type: 'h2',\n      id: {json.dumps(s['id'], ensure_ascii=False)},\n"
                f"      text: {json.dumps(s['text'], ensure_ascii=False)},\n"
                f"      gradientStyle: {{ from: '{gs['from']}', to: '{gs['to']}' }},\n    }}"
            )
        elif s['type'] == 'body':
            js_sections.append(f"    {{\n      type: 'body',\n      html: {json.dumps(s['html'], ensure_ascii=False)},\n    }}")
        elif s['type'] == 'cta':
            js_sections.append(
                f"    {{\n      type: 'cta',\n      href: {json.dumps(s['href'], ensure_ascii=False)},\n"
                f"      text: {json.dumps(s['text'], ensure_ascii=False)},\n    }}"
            )
        elif s['type'] == 'image':
            js_sections.append(
                f"    {{\n      type: 'image',\n      src: {json.dumps(s['src'], ensure_ascii=False)},\n"
                f"      alt: {json.dumps(s['alt'], ensure_ascii=False)},\n"
                f"      caption: {json.dumps(s['caption'], ensure_ascii=False)},\n    }}"
            )
        elif s['type'] == 'ending':
            js_sections.append(f"    {{\n      type: 'ending',\n      html: {json.dumps(s['html'], ensure_ascii=False)},\n    }}")

    js_content = (
        f"const post = {{\n"
        f"  id: {pid},\n"
        f"  sections: [\n"
        + ',\n'.join(js_sections) + '\n'
        f"  ],\n"
        f"}}\n\n"
        f"export default post\n"
    )

    out_path = os.path.join(BASE, 'posts', f'{pid}.js')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    # 텍스트 길이 측정 (HTML 태그 제거)
    text_only = re.sub(r'<[^>]+>', '', ''.join(s.get('html', '') for s in sections))
    char_count = len(text_only)

    print(f'  Post {pid:2d} ({slug[:35]:35s}): {len(restaurants)}개 식당 | {char_count:,}자')

# ── data/posts.js 날짜 + 썸네일 업데이트 ──────────────────────────
print(f'\n날짜 업데이트: date → {TODAY}')
updated_posts_text = re.sub(
    r"date:'[0-9]{4}-[0-9]{2}-[0-9]{2}'",
    f"date:'{TODAY}'",
    posts_js_text
)

# 썸네일 경로 삽입/업데이트
thumb_count = 0
for pid_str, pimg in img_mapping.items():
    thumb = pimg.get('thumb', '')
    if not thumb:
        continue
    # thumbnail:null 또는 thumbnail:'...' 교체
    pat_null = re.compile(rf"(id:{pid_str},.*?)thumbnail:null", re.DOTALL)
    pat_str = re.compile(rf"(id:{pid_str},.*?)thumbnail:'[^']*'", re.DOTALL)
    if pat_null.search(updated_posts_text):
        updated_posts_text = pat_null.sub(rf"\g<1>thumbnail:'{thumb}'", updated_posts_text)
        thumb_count += 1
    elif pat_str.search(updated_posts_text):
        updated_posts_text = pat_str.sub(rf"\g<1>thumbnail:'{thumb}'", updated_posts_text)
        thumb_count += 1
print(f'썸네일 업데이트: {thumb_count}개 포스트')

with open(posts_file, 'w', encoding='utf-8') as f:
    f.write(updated_posts_text)

print(f'\n완료! posts/*.js 재생성 + data/posts.js 날짜 업데이트')
