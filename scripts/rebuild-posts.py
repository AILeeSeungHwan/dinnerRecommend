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

# ── data/*.js에서 rv(리뷰) 데이터 로드 ────────────────────────────
RV_MAP = {}  # region → name → [review texts]
REGIONS_ALL = ['samseong', 'jamsil', 'pangyo', 'yeongtong', 'mangpo', 'yeongtongGu', 'suji', 'gangnam']
for _region in REGIONS_ALL:
    _data_file = os.path.join(BASE, 'data', f'{_region}.js')
    if not os.path.exists(_data_file):
        continue
    with open(_data_file, 'r', encoding='utf-8') as _f:
        _text = _f.read()
    # 각 식당의 name과 rv를 추출
    _matches = re.findall(r'"name":\s*"([^"]+)".*?"rv":\s*\[(.*?)\]', _text, re.DOTALL)
    _region_rv = {}
    for _name, _rv_content in _matches:
        _rv_content = _rv_content.strip()
        if not _rv_content or 'ERR_' in _rv_content:
            continue
        _reviews = re.findall(r'"(.*?)"', _rv_content)
        _reviews = [r for r in _reviews if len(r) > 15]
        if _reviews:
            _region_rv[_name] = _reviews
    RV_MAP[_region] = _region_rv

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
    'gangnam':  {'name': '강남역', 'path': '/dinner/gangnam', 'area': '강남역·역삼역·신논현역'},
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

# ── rv(리뷰) 기반 인사이트 추출 ──────────────────────────────────
# 패턴 → 자연어 문장 매핑 (리뷰에서 추출한 키워드를 사람이 쓴 듯한 문장으로 변환)
REVIEW_PATTERNS = [
    # (regex pattern, output sentence, priority)
    (r'국물[이가]?\s*(진하|깊|시원|얼큰|뜨끈|걸쭉)', '국물이 {0}다는 평이 많습니다. 특히 추운 날씨에 방문하시면 만족도가 높을 것으로 보입니다.', 10),
    (r'(고기|肉)[이가]?\s*(부드|연하|두꺼|신선)', '고기가 {0}워서 만족도가 높습니다. 육질에 대한 긍정적인 리뷰가 다수 확인되었습니다.', 10),
    (r'양[이가]?\s*(많|푸짐|넉넉|실하)', '양이 {0}아서 배부르게 드실 수 있습니다. 남성분들도 충분히 만족할 수 있는 양입니다.', 9),
    (r'(가성비|가격대비|가격 대비).{0,10}(좋|괜찮|최고|짱)', '가성비가 좋다는 리뷰가 많습니다. 가격 대비 음식 퀄리티가 뛰어나다는 평이 주를 이룹니다.', 9),
    (r'(분위기|인테리어)[이가]?\s*(좋|깔끔|예쁘|멋지|고급|모던)', '분위기가 {0}아서 식사 자리로 적합합니다. 내부 인테리어에 신경을 많이 쓴 것이 느껴진다는 후기가 있습니다.', 8),
    (r'(직원|사장님|서비스)[이가]?\s*(친절|좋|따뜻|웃)', '직원분들이 친절하다는 후기가 꽤 있습니다. 서비스 면에서도 좋은 평가를 받고 있습니다.', 7),
    (r'(웨이팅|줄|대기).{0,10}(길|많|있|30분)', '인기가 많아서 웨이팅이 좀 있는 편입니다. 점심 피크 시간을 피하시면 대기 시간을 줄일 수 있습니다.', 7),
    (r'(혼밥|혼자|1인).{0,10}(가능|편|좋|OK)', '혼밥하기에도 부담 없는 분위기입니다. 1인 좌석이 마련되어 있어 혼자 오시는 분들도 편하게 이용하실 수 있습니다.', 6),
    (r'(주차|파킹).{0,10}(편|넓|가능|있)', '주차가 편하다는 의견이 있습니다. 차량으로 방문하시는 분들에게 유리한 조건입니다.', 5),
    (r'(런치|점심).{0,10}(세트|메뉴|특선)', '점심 세트 메뉴가 따로 마련되어 있습니다. 저녁 메뉴보다 합리적인 가격으로 즐기실 수 있습니다.', 6),
    (r'(깔끔|청결|위생)', '매장이 깔끔하게 관리되고 있습니다.', 5),
    (r'(넓|쾌적|좌석).{0,5}(넓|많|충분)', '좌석 간격이 넉넉해서 편하게 드실 수 있습니다.', 5),
    (r'(재방문|또 올|또 가|또 갈|다시 올|단골)', '재방문 의사가 있다는 리뷰가 많습니다. 한 번 가보시면 단골이 될 가능성이 높은 곳입니다.', 8),
    (r'(맛있|존맛|JMT|미침|미쳤|레전드)', '맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.', 6),
    (r'(디저트|후식)[이가]?\s*(맛|괜)', '디저트도 괜찮다는 평이 있습니다. 식후 디저트까지 즐기실 수 있습니다.', 4),
    (r'(뷰|전망|야경|통유리)', '뷰가 좋아서 분위기가 납니다. 창가 자리를 예약하시면 더 좋은 경험을 하실 수 있습니다.', 7),
    (r'(코스|오마카세).{0,10}(괜찮|좋|훌륭|만족)', '코스 구성에 대한 만족도가 높습니다. 코스별로 완성도가 뛰어나다는 평가를 받고 있습니다.', 8),
    (r'(소주|맥주|와인|사케).{0,10}(다양|많|괜찮)', '주류 선택지가 다양합니다. 음식과 어울리는 주류 페어링도 가능합니다.', 5),
    (r'(안주|사이드).{0,10}(맛|괜찮|좋)', '안주 퀄리티가 괜찮습니다. 메인 메뉴 외에도 사이드 메뉴의 완성도가 높다는 평입니다.', 6),
    (r'(화장실|세면).{0,10}(깨끗|깔끔)', None, 0),  # 무시
    (r'(매운|매콤|얼큰).{0,5}(맛|좋|괜)', '매콤한 맛이 좋다는 후기가 있습니다. 매운 음식을 좋아하시는 분들께 추천드립니다.', 5),
    (r'(신선|활어|당일)', '재료가 신선합니다. 당일 재료를 사용한다는 점에서 식재료에 대한 신뢰도가 높습니다.', 7),
    (r'(회식|단체|모임).{0,10}(좋|괜찮|추천)', '회식이나 단체 모임 장소로 추천하는 리뷰가 있습니다. 넓은 공간과 단체석이 마련되어 있어 편리합니다.', 6),
    (r'(데이트|커플|연인).{0,10}(좋|괜찮|추천)', '데이트 장소로 추천하는 리뷰가 있습니다. 조용하고 분위기 있는 공간이 인상적이라는 후기입니다.', 6),
]

def extract_review_insights(name, region, category, max_sentences=2):
    """rv 리뷰에서 구체적 인사이트 추출 → 자연어 문장으로 변환"""
    reviews = RV_MAP.get(region, {}).get(name, [])
    if not reviews:
        return ''

    # 전체 리뷰 텍스트 합치기
    combined = ' '.join(reviews[:5])  # 최대 5개 리뷰만 분석

    found = []
    seen_sentences = set()
    for pattern, sentence_template, priority in REVIEW_PATTERNS:
        if sentence_template is None:
            continue
        match = re.search(pattern, combined)
        if match:
            # {0} 자리에 캡처 그룹 값 삽입
            groups = match.groups()
            # 매칭된 키워드로 문장 생성
            try:
                # 마지막 캡처 그룹(형용사/동사)만 사용
                keyword = groups[-1] if groups else ''
                sentence = sentence_template.format(keyword)
            except:
                sentence = sentence_template
            if sentence not in seen_sentences:
                found.append((priority, sentence))
                seen_sentences.add(sentence)

    if not found:
        return ''

    # 우선순위 정렬 후 상위 N개
    found.sort(key=lambda x: x[0], reverse=True)
    sentences = [s for _, s in found[:max_sentences]]
    return ' '.join(sentences)

# ── rv 키워드 카운트 기반 요약 ──────────────────────────────────
REVIEW_KEYWORDS = {
    '맛': ['맛있', '존맛', 'JMT', '미친맛', '레전드', '대박', '최고'],
    '가성비': ['가성비', '가격대비', '가격 대비', '저렴', '싸요'],
    '양': ['양많', '푸짐', '넉넉', '실하'],
    '국물': ['국물', '진한', '시원한', '얼큰', '뜨끈'],
    '재료': ['신선', '활어', '당일', '재료'],
    '분위기': ['분위기', '인테리어', '깔끔', '예쁘'],
    '서비스': ['친절', '서비스', '직원', '사장님'],
    '재방문': ['재방문', '또 올', '또 갈', '다시 올', '단골'],
    '웨이팅': ['웨이팅', '대기', '줄'],
    '주차': ['주차', '파킹'],
}

def extract_review_summary(name, region, max_keywords=3):
    """rv 리뷰에서 자주 언급된 키워드 카운트 기반 요약문 생성.
    예: '방문자들이 자주 언급한 점: 가성비·양·서비스'"""
    reviews = RV_MAP.get(region, {}).get(name, [])
    if not reviews:
        return ''
    combined = ' '.join(reviews)
    counts = []
    for label, keywords in REVIEW_KEYWORDS.items():
        c = sum(combined.count(kw) for kw in keywords)
        if c > 0:
            counts.append((c, label))
    if not counts:
        return ''
    counts.sort(reverse=True)
    top = [label for _, label in counts[:max_keywords]]
    if not top:
        return ''
    return f'방문 후기에서 자주 언급되는 부분은 {"·".join(top)} 쪽입니다.'

# ── rv에서 짧은 인용문 추출 ──────────────────────────────────────
def extract_review_quote(name, region):
    """리뷰 중 짧고 인상적인 한 줄을 찾아 인용형 요약으로 변환.
    리뷰 원문 그대로가 아닌 약간 다듬은 형태로 반환."""
    reviews = RV_MAP.get(region, {}).get(name, [])
    if not reviews:
        return ''
    # 한 문장이 짧고(15~50자) 핵심 키워드가 들어간 것 우선
    keywords_priority = ['가성비', '맛있', '신선', '진한', '깔끔', '친절', '재방문', '푸짐', '분위기']
    for r in reviews[:8]:
        # 문장 단위 분리
        for sent in re.split(r'[.!?。]\s*', r):
            sent = sent.strip().strip('"\'')
            if not (15 <= len(sent) <= 50):
                continue
            if any(kw in sent for kw in keywords_priority):
                # 너무 단정형이면 다듬어서 반환
                cleaned = re.sub(r'[ㅋㅎ]+', '', sent).strip()
                if cleaned and not cleaned.endswith(('다', '요', '음', '함')):
                    cleaned += '다는 평'
                return f'한 방문자는 "{cleaned}"고 적어두었습니다.'
    return ''

# ── 문장 변형 시스템 (인간적 톤) ──────────────────────────────────
# 동일 의미를 다양한 어미/문체로 표현
def vary_sentence(text, seed_val):
    """문장 끝을 seed에 따라 변형 — 같은 포스트 내에서도 문체가 달라지도록"""
    v = seed_val % 5

    # 단정형 → 다양한 어미로
    replacements = [
        # (원래, [변형1, 변형2, 변형3, 변형4, 변형5])
        ('괜찮다.', ['괜찮습니다.', '괜찮은 편입니다.', '나쁘지 않습니다.', '무난합니다.', '괜찮은 편이었습니다.']),
        ('좋다.', ['좋습니다.', '괜찮습니다.', '추천할 만합니다.', '좋은 편입니다.', '좋았습니다.']),
        ('있다.', ['있습니다.', '있는 편입니다.', '있다고 보시면 됩니다.', '있으니 참고하시기 바랍니다.', '있었습니다.']),
        ('편이다.', ['편입니다.', '편이었습니다.', '편이라고 합니다.', '축에 속합니다.', '쪽입니다.']),
        ('된다.', ['됩니다.', '된다고 합니다.', '가능합니다.', '가능한 편입니다.', '됩니다.']),
    ]

    for old, variants in replacements:
        if text.endswith(old):
            text = text[:-len(old)] + variants[v]
            break

    return text

def vary_connector(seed_val):
    """문장 연결 시 다양한 접속부사 반환"""
    connectors = ['', '', '참고로 ', '그리고 ', '덧붙이자면 ', '또한 ', '']
    return connectors[seed_val % len(connectors)]

# ── 태그 기반 자연어 문장 생성 ───────────────────────────────────
def generate_tag_sentences(r, category):
    """식당 데이터의 tags/moods를 자연어 문장으로 변환"""
    sentences = []
    tags = set(r.get('tags', []))
    moods = set(r.get('moods', []))

    if '가성비' in tags:
        sentences.append('가성비가 좋다는 평이 많습니다.')
    if '웨이팅맛집' in tags:
        sentences.append('점심 시간에는 웨이팅이 있을 수 있으니 참고하시기 바랍니다.')
    if '단체가능' in tags and category in ('group', 'lunch'):
        sentences.append('단체 예약이 가능합니다.')
    if '룸있음' in tags:
        sentences.append('룸이 따로 마련되어 있습니다.')
    if '예약필수' in tags:
        sentences.append('사전에 예약하고 방문하시는 것을 추천드립니다.')
    if '한우' in tags:
        sentences.append('한우를 사용합니다.')
    if '인스타감성' in tags and category == 'date':
        sentences.append('인테리어가 예뻐서 사진 찍기에도 좋습니다.')
    if '친절' in tags:
        sentences.append('서비스가 친절하다는 후기가 꽤 있습니다.')
    if '데이트' in moods and category != 'date':
        sentences.append('분위기도 좋아서 데이트 장소로도 적합합니다.')
    if '회식' in moods and category != 'group':
        sentences.append('소규모 회식 장소로도 활용하실 수 있습니다.')

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

    # 평점 기반 문장 — 사실 위주로, 단정형 표현은 제거
    seed = abs(hash(name)) % 100
    if rating > 0 and cnt > 0:
        # 단정 표현("흔하지 않다", "손에 꼽히는") 제거 — 사실만 적기
        if cnt >= 1000:
            rating_variants = [
                f'평점 {rating}점, 리뷰 {cnt:,}건. 이 동네에서 자주 언급되는 곳 중 하나입니다.',
                f'리뷰 {cnt:,}건이 쌓일 만큼 방문자가 많은 곳이며, 평점은 {rating}점입니다.',
                f'{cnt:,}건 리뷰에 {rating}점이라는 점에서 인지도가 높은 편입니다.',
            ]
        elif rating >= 4.5:
            rating_variants = [
                f'평점 {rating}점, 리뷰 {cnt}건으로 안정적인 평가를 받고 있습니다.',
                f'리뷰 {cnt}건에 {rating}점이면 꾸준히 무난한 편입니다.',
                f'{rating}점·리뷰 {cnt}건. 방문자 평이 비교적 일관되게 좋은 편입니다.',
            ]
        elif rating >= 4.0:
            rating_variants = [
                f'평점 {rating}점, 리뷰 {cnt}건. 큰 호불호 없이 이용되는 편입니다.',
                f'리뷰 {cnt}건에 {rating}점 정도로 무난한 평가가 쌓여 있습니다.',
                f'{cnt}건 리뷰에 {rating}점이면 동네 단골 식당 정도로 보면 됩니다.',
            ]
        else:
            rating_variants = [
                f'리뷰 {cnt}건이 쌓여 있는 편입니다. 평점은 {rating}점입니다.',
                f'{cnt}건 정도의 리뷰가 있고, 평점은 {rating}점 수준입니다.',
            ]
        parts.append(rating_variants[seed % len(rating_variants)])

    # 가격대 기반 문장
    if price and '~' in price:
        try:
            lo, hi = price.split('~')
            lo_val, hi_val = int(lo), int(hi)
            if category == 'budget' and lo_val <= 10000:
                v = [f'만원 이하 메뉴가 있어서 부담이 적습니다. 가볍게 한 끼 해결하시기에 좋은 가격대입니다.',
                     f'만원 안쪽으로 해결 가능하십니다. 부담 없이 방문하실 수 있는 가격입니다.',
                     f'{lo_val//1000}천원대부터 메뉴가 있으니 가볍게 한 끼 하시기에 좋습니다.']
                parts.append(v[seed % len(v)])
            elif category == 'group' and hi_val >= 30000:
                v = [f'인당 {hi_val//10000}만원대 예산이면 충분합니다. 회식비로 적당한 수준이라 하겠습니다.',
                     f'인당 {hi_val//10000}만원 선으로, 회식비로 적당한 수준입니다.',
                     f'예산은 인당 {hi_val//10000}만원 정도 잡으시면 넉넉합니다.']
                parts.append(v[seed % len(v)])
            elif category == 'date' and hi_val >= 50000:
                v = [f'코스 기준 인당 {lo_val//10000}~{hi_val//10000}만원대입니다. 특별한 날에 어울리는 가격대라 하겠습니다.',
                     f'인당 {lo_val//10000}~{hi_val//10000}만원 선입니다. 데이트 코스로 적합한 가격대입니다.',
                     f'가격은 인당 {hi_val//10000}만원 정도 보시면 됩니다. 기념일이라면 충분히 가치 있는 선택이 되실 겁니다.']
                parts.append(v[seed % len(v)])
            elif category == 'lunch' and lo_val <= 15000:
                v = [f'점심 {lo_val//1000}천원대부터 가능해서 직장인 점심으로 적합합니다.',
                     f'{lo_val//1000}천원대면 점심값으로 무난한 선입니다.',
                     f'점심 한 끼 {lo_val//1000}천원이면 부담 없이 드실 수 있습니다.']
                parts.append(v[seed % len(v)])
        except:
            pass

    # 영업시간 기반 문장
    if hours:
        if '브레이크' in hours or 'break' in hours.lower():
            parts.append('브레이크 타임이 있으니 방문 전 영업시간을 확인하시는 것이 좋겠습니다.')

    # 카테고리 특화 문장 — 식당별 차이가 드러나도록 seed 분기
    cat_variants = []
    if category == 'meat' and ('구이' in rtype or '고기' in rtype):
        cat_variants = [
            '직화로 직접 구워 드시는 스타일이며, 굽기를 직원분이 도와주시는 편입니다.',
            '굽기 옵션이 따로 안내되어 있어 미디엄·웰던 등 취향대로 요청하실 수 있습니다.',
            '환기 시설이 잘 되어 있는 편이지만, 옷에 냄새가 신경 쓰이시면 갈아입을 옷을 챙기시는 것도 방법입니다.',
        ]
    elif category == 'izakaya' and ('이자카야' in rtype or '술집' in rtype or '바' in rtype):
        cat_variants = [
            '안주 구성이 다양한 편이라 한두 명이 가볍게 한잔하시기에 적당합니다.',
            '주류 페어링을 직원분께 물어보시면 추천을 받으실 수 있는 곳입니다.',
            '예약 없이 들어가시면 자리가 없을 수 있으니 평일 8시 이후에 들리시는 것도 방법입니다.',
        ]
    elif category == 'chinese':
        cat_variants = [
            '2~3명이 방문하시면 메인 한 가지에 사이드 한두 개 시키시는 정도가 적당한 양입니다.',
            '점심에는 식사류 위주, 저녁에는 코스나 단품 위주로 구성이 달라지는 편입니다.',
        ]
    elif category == 'gukbap':
        # gukbap이라고 매번 같은 멘트 추가 X — 메뉴/태그별로 다양화
        if any(k in (rtype or '') + ' '.join(tags) for k in ('순대', '순댓국')):
            cat_variants = ['순댓국이 메인이라 진하게 끓여낸 국물 맛이 특징입니다.', '순대가 같이 나오는 메뉴 구성이 일반적입니다.']
        elif any(k in (rtype or '') + ' '.join(tags) for k in ('설렁', '곰탕')):
            cat_variants = ['설렁탕·곰탕은 깊이 끓여낸 사골 베이스가 특징입니다.', '국물이 많이 진한 편이라 호불호가 갈리기도 합니다.']
        elif '해장' in (rtype or '') + ' '.join(tags):
            cat_variants = ['해장용으로 자주 찾는 메뉴 구성이며, 국물 농도는 진한 편입니다.']
        else:
            cat_variants = ['국물 베이스가 진한 편이라 단품 한 그릇으로도 충분히 든든합니다.']
    elif category == 'japanese':
        if '오마카세' in ' '.join(tags) or '오마카세' in (rtype or ''):
            cat_variants = ['오마카세 코스는 제철 재료에 따라 메뉴 구성이 달라집니다. 예약 시 알레르기 여부를 미리 알리시는 편이 안전합니다.']
        elif '스시' in (rtype or ''):
            cat_variants = ['스시 단품 위주로 주문이 가능하며, 카운터 자리가 인기 있는 편입니다.']
        elif '라멘' in (rtype or ''):
            cat_variants = ['국물 농도가 진한 편으로, 가벼운 시오·쇼유 라멘은 따로 옵션이 있을 때가 있습니다.']
    elif category == 'date':
        if '뷰맛집' in tags or '뷰' in (rtype or ''):
            cat_variants = ['창가 자리는 예약이 빨리 마감되는 편이니 미리 잡아두시는 것을 권합니다.']
        elif '인스타감성' in tags:
            cat_variants = ['인테리어가 사진 찍기 좋게 꾸며져 있어 SNS에 자주 올라오는 곳입니다.']
    if cat_variants:
        parts.append(cat_variants[seed % len(cat_variants)])

    return ' '.join(parts[:3])

# ── 앵글 선택 (식당마다 다른 관점) ──────────────────────────────
import random
random.seed(42)  # 재현성 보장

ANGLES = ['menu', 'mood', 'price', 'location', 'review']

def pick_angle(r, idx, category):
    """식당 인덱스와 특성에 따라 서술 앵글 선택"""
    tags = set(r.get('tags', []))
    # 데이터 특성에 따라 앵글 우선 결정
    if r.get('menuItems') and len(r['menuItems']) >= 3:
        preferred = 'menu'
    elif '인스타감성' in tags or '데이트' in set(r.get('moods', [])):
        preferred = 'mood'
    elif '가성비' in tags:
        preferred = 'price'
    else:
        preferred = ANGLES[idx % len(ANGLES)]
    return preferred

# ── 식당 본문 HTML 생성 (자연스러운 톤) ──────────────────────────
def generate_restaurant_body_main(r, region_path, category, angle, region=''):
    """주요 식당 (상세 서술) — 2~3개"""
    name = r['name']
    link = f'{region_path}/restaurant/{name}'
    parts = []

    # 도입 — 앵글에 따라 다르게
    rating = r.get('rating', 0)
    cnt = r.get('reviewCount', 0)
    rtype = (r.get('type', '') or '').split(',')[0]
    price = r.get('priceRange', '')
    tags = set(r.get('tags', []))
    menus = r.get('menuItems', [])

    if angle == 'menu' and menus:
        top_menu = menus[0]
        mname = top_menu.get('name', '')
        mprice = fmt_menu_price(top_menu.get('price'))
        mdesc = top_menu.get('description', '')
        seed = hash(name) % 10
        if seed < 3:
            opener = f'{mname}'
            if mprice: opener += f' {mprice}'
            opener += f'. <a href="{link}">{esc(name)}</a>의 간판 메뉴입니다.'
            if mdesc: opener += f' {mdesc}.'
        elif seed < 6:
            opener = f'<a href="{link}">{esc(name)}</a>에서 가장 많이 나가는 메뉴는 {mname}입니다.'
            if mprice: opener += f' 가격은 {mprice}입니다.'
            if mdesc: opener += f' {mdesc}.'
        elif seed < 8:
            opener = f'<a href="{link}">{esc(name)}</a>을 방문하시면 {mname}을 추천드립니다.'
            if mprice: opener += f' {mprice}에 드실 수 있습니다.'
            if mdesc: opener += f' {mdesc}.'
        else:
            opener = f'{mname}' + (f' {mprice}' if mprice else '') + f'. <a href="{link}">{esc(name)}</a>의 대표 메뉴입니다.'
            if mdesc: opener += f' {mdesc}.'
        if len(menus) >= 2:
            others = ', '.join(m.get('name','') for m in menus[1:3] if m.get('name'))
            suffixes = [f' {others} 같은 메뉴도 인기가 좋습니다.', f' 그 외에도 {others}를 많이 찾으십니다.', f' {others}도 함께 주문하시는 분들이 많습니다.']
            opener += suffixes[seed % len(suffixes)]
        parts.append(f'<p>{opener}</p>')
    elif angle == 'mood':
        mood_words = []
        if '인스타감성' in tags: mood_words.append('인테리어가 깔끔하고')
        if '데이트' in set(r.get('moods', [])): mood_words.append('분위기가 좋아서')
        if '조용한' in tags: mood_words.append('조용한 편이라')
        mood_desc = ' '.join(mood_words) if mood_words else '공간이 괜찮은 편이라'
        parts.append(f'<p>{mood_desc} 눈에 들어오는 곳입니다. <a href="{link}">{esc(name)}</a>.</p>')
    elif angle == 'price' and price:
        try:
            lo = int(price.split('~')[0])
            if lo <= 10000:
                parts.append(f'<p>만원 이하로 한 끼 해결하실 수 있는 <a href="{link}">{esc(name)}</a>입니다. 가격 부담 없이 편하게 방문하실 수 있습니다.</p>')
            elif lo <= 15000:
                parts.append(f'<p>{lo//1000}천원대부터 시작하는 <a href="{link}">{esc(name)}</a>입니다. 점심 가격으로는 무난한 선이라 하겠습니다.</p>')
            else:
                parts.append(f'<p>인당 {lo//10000}만원대 이상으로, 제대로 된 한 끼를 원하실 때 추천드리는 <a href="{link}">{esc(name)}</a>입니다.</p>')
        except:
            parts.append(f'<p><a href="{link}">{esc(name)}</a>. {rtype} 전문점입니다.</p>')
    elif angle == 'review' and cnt > 0:
        if cnt >= 500:
            parts.append(f'<p>리뷰 {cnt}건이면 이 동네에서 꽤 유명한 곳입니다. <a href="{link}">{esc(name)}</a>. 많은 방문자분들이 검증한 맛집이라 하겠습니다.</p>')
        elif cnt >= 100:
            parts.append(f'<p>리뷰 {cnt}건 정도 쌓여 있는 <a href="{link}">{esc(name)}</a>입니다. 평점 {rating}점으로 안정적인 평가를 받고 있습니다.</p>')
        else:
            parts.append(f'<p><a href="{link}">{esc(name)}</a>. 아직 리뷰가 많지는 않지만 평점 {rating}점으로 나쁘지 않은 곳입니다.</p>')
    else:
        parts.append(f'<p><a href="{link}">{esc(name)}</a>. {rtype} 전문점으로, 평점 {rating}점을 기록하고 있습니다.</p>')

    # 메뉴 상세 (주요 식당은 메뉴를 서술형으로)
    if menus and angle != 'menu':
        menu_strs = []
        for mi in menus[:4]:
            mname = mi.get('name', '')
            mprice = fmt_menu_price(mi.get('price'))
            mdesc = mi.get('description', '')
            if mname and mprice:
                menu_strs.append(f'{esc(mname)} {mprice}')
            elif mname:
                menu_strs.append(esc(mname))
        if menu_strs:
            price_comment = "가격대는 합리적인 편입니다" if price and int(price.split("~")[0]) <= 15000 else "가격은 메뉴에 따라 차이가 있습니다"
            parts.append(f'<p>대표 메뉴로는 {", ".join(menu_strs[:3])} 등이 있으며, {price_comment}.</p>')
        # 메뉴 설명이 있으면 추가
        descs = [mi.get('description','') for mi in menus[:3] if mi.get('description','')]
        if descs:
            parts.append(f'<p>{descs[0]}</p>')
    elif menus and angle == 'menu' and len(menus) >= 4:
        mentioned = set(m.get('name','') for m in menus[:3])
        extra_menus = []
        for m in menus[3:6]:
            mname = m.get('name', '')
            mprice = fmt_menu_price(m.get('price'))
            if mname and mname not in mentioned:
                extra_menus.append(f'{esc(mname)}({mprice})' if mprice else esc(mname))
        if extra_menus:
            parts.append(f'<p>그 외에 {", ".join(extra_menus)}도 있습니다.</p>')

    # 태그/특징 — 자연스럽게 서술
    tag_parts = []
    if '웨이팅맛집' in tags:
        tag_parts.append('점심시간에는 웨이팅이 있는 편이니 일찍 방문하시는 것을 추천드립니다')
    if '주차가능' in tags or r.get('parking'):
        tag_parts.append('주차가 가능합니다')
    elif not r.get('parking') and category in ('group', 'date'):
        tag_parts.append('주차장이 없으니 대중교통을 이용하시는 것이 편리합니다')
    if '예약필수' in tags or r.get('reservation'):
        tag_parts.append('예약이 가능합니다')
    if '혼밥가능' in tags and category == 'budget':
        tag_parts.append('혼밥하시기에도 편한 구조입니다')
    if '룸있음' in tags and category == 'group':
        tag_parts.append('룸이 따로 있어서 회식 장소로 적합합니다')
    if '단체가능' in tags and category == 'group':
        tag_parts.append('단체석이 마련되어 있습니다')

    if tag_parts:
        parts.append(f'<p>{". ".join(tag_parts)}.</p>')

    # 맥락 문장
    extra = generate_context_paragraph(r, category)
    if extra:
        parts.append(f'<p>{esc(extra)}</p>')

    # rv 리뷰 기반 인사이트 (주요 식당 — 3문장까지)
    rv_insight = extract_review_insights(name, region, category, max_sentences=3)
    if rv_insight:
        parts.append(f'<p>{esc(rv_insight)}</p>')

    # 상세 페이지 링크
    parts.append(f'<p><a href="{link}" style="color:var(--primary)">→ {esc(name)} 상세 정보 보기</a></p>')

    return ''.join(parts)


def generate_restaurant_body_sub(r, region_path, category, region=''):
    """보조 식당 — 충분한 정보와 리뷰 인사이트 포함"""
    name = r['name']
    link = f'{region_path}/restaurant/{name}'
    parts = []

    rating = r.get('rating', 0)
    cnt = r.get('reviewCount', 0)
    rtype = (r.get('type', '') or '').split(',')[0]
    menus = r.get('menuItems', [])
    tags = set(r.get('tags', []))
    price = r.get('priceRange', '')

    # 도입 — seed 기반 변형 (존댓말)
    seed = hash(name) % 10
    if seed < 3:
        opener = f'<a href="{link}">{esc(name)}</a>.'
        if rtype: opener += f' {rtype} 전문점으로,'
        if rating > 0 and cnt > 0: opener += f' 평점 {rating}점에 리뷰 {cnt}건을 기록하고 있습니다.'
        elif rating > 0: opener += f' 평점 {rating}점입니다.'
    elif seed < 6:
        opener = f'<a href="{link}">{esc(name)}</a>.'
        if rtype: opener += f' {rtype} 전문점입니다.'
        if rating > 0 and cnt > 0: opener += f' {rating}점에 리뷰 {cnt}건이 쌓여 있습니다.'
    elif seed < 8:
        if rtype and rating > 0:
            opener = f'{rtype} 하면 <a href="{link}">{esc(name)}</a>도 빠지지 않습니다. 평점 {rating}점입니다.'
        else:
            opener = f'<a href="{link}">{esc(name)}</a>. 평점 {rating}점을 유지하고 있는 곳입니다.'
    else:
        opener = f'<a href="{link}">{esc(name)}</a>.'
        if rating > 0: opener += f' 평점 {rating}점, 리뷰 {cnt}건 정도 있습니다.'

    parts.append(f'<p>{opener}</p>')

    # 메뉴 + 가격 — 상세하게 (존댓말)
    if menus:
        top_menus = []
        for mi in menus[:4]:
            mname = mi.get('name', '')
            mprice = fmt_menu_price(mi.get('price'))
            if mname and mprice:
                top_menus.append(f'{esc(mname)} {mprice}')
            elif mname:
                top_menus.append(esc(mname))
        if top_menus:
            menu_formats = [
                f'<p>메뉴를 살펴보면, {" / ".join(top_menus)} 등이 있습니다.</p>',
                f'<p>대표 메뉴는 {", ".join(top_menus[:3])}입니다.</p>',
                f'<p>{top_menus[0]}이 가장 인기 있는 메뉴이며, {", ".join(top_menus[1:3])}도 추천드립니다.</p>' if len(top_menus) >= 2 else f'<p>대표 메뉴는 {top_menus[0]}입니다.</p>',
            ]
            parts.append(menu_formats[seed % len(menu_formats)])
        # 메뉴 설명이 있으면 추가
        descs = [mi.get('description','') for mi in menus[:3] if mi.get('description','')]
        if descs:
            parts.append(f'<p>{descs[0]}</p>')
    elif price:
        parts.append(f'<p>가격대는 {fmt_price(price)}입니다.</p>')

    # 특징 서술형 (존댓말 + 상세)
    feat_parts = []
    if '가성비' in tags: feat_parts.append('가성비가 좋다는 평이 많습니다')
    if '웨이팅맛집' in tags: feat_parts.append('점심 시간에는 웨이팅이 있을 수 있습니다')
    if '혼밥가능' in tags: feat_parts.append('혼밥하시기에도 편한 구조입니다')
    if '단체가능' in tags or '룸있음' in tags: feat_parts.append('단체석이나 룸이 마련되어 있습니다')
    if r.get('parking'): feat_parts.append('주차도 가능합니다')
    if '예약필수' in tags or r.get('reservation'): feat_parts.append('예약이 가능합니다')
    if feat_parts:
        parts.append(f'<p>{". ".join(feat_parts)}.</p>')

    # 맥락 문장 — 보조 식당에도 추가
    extra = generate_context_paragraph(r, category)
    if extra:
        parts.append(f'<p>{esc(extra)}</p>')

    # rv 리뷰 기반 인사이트 (보조 식당도 2문장)
    rv_insight = extract_review_insights(name, region, category, max_sentences=2)
    if rv_insight:
        parts.append(f'<p>{esc(rv_insight)}</p>')

    # 상세 링크
    parts.append(f'<p><a href="{link}" style="color:var(--primary)">→ {esc(name)} 상세 정보 보기</a></p>')

    return ''.join(parts)


def generate_restaurant_body(r, region_path, category, is_main=True, angle='menu', region=''):
    """식당 본문 — 주요/보조 분기"""
    if is_main:
        return generate_restaurant_body_main(r, region_path, category, angle, region=region)
    else:
        return generate_restaurant_body_sub(r, region_path, category, region=region)

# ── 비교표 HTML 생성 (핵심 정보 통합) ─────────────────────────────
def generate_comparison_table(restaurants, category, region_path=''):
    """식당 비교 테이블 — 평점/리뷰/가격/특징 + 링크"""
    ths = '<th style="padding:8px 6px;text-align:left">식당</th>'
    ths += '<th style="padding:8px 6px;text-align:center">평점</th>'
    ths += '<th style="padding:8px 6px;text-align:center">리뷰</th>'
    ths += '<th style="padding:8px 6px;text-align:center">가격대</th>'
    ths += '<th style="padding:8px 6px;text-align:left">한줄평</th>'

    rows = []
    for r in restaurants:
        tags = r.get('tags', [])
        seed = hash(r['name']) % 5
        # 한줄평 — rv 리뷰 기반 or 태그 기반
        rv_region = category  # placeholder
        rv_reviews = RV_MAP.get(region_path.split('/')[1] if '/' in region_path else '', {}).get(r['name'], [])
        # rv에서 짧은 인상 추출
        rv_oneliner = ''
        if rv_reviews:
            combined = ' '.join(rv_reviews[:3])
            if '맛있' in combined: rv_oneliner = '맛 보장'
            elif '가성비' in combined: rv_oneliner = '가성비 인정'
            elif '분위기' in combined: rv_oneliner = '분위기 좋음'
            elif '친절' in combined: rv_oneliner = '서비스 좋음'
            elif '재방문' in combined: rv_oneliner = '재방문 의사 높음'

        if rv_oneliner and seed < 3:
            oneliner = rv_oneliner
        elif '가성비' in tags: oneliner = ['가격 대비 양 많음', '가성비 괜찮음', '합리적인 가격'][seed % 3]
        elif '웨이팅맛집' in tags: oneliner = ['줄 서서 먹는 맛', '웨이팅 각오', '인기 많음'][seed % 3]
        elif '인스타감성' in tags: oneliner = ['분위기 좋음', '인테리어 깔끔', '사진 찍기 좋음'][seed % 3]
        elif '단체가능' in tags: oneliner = ['단체석·회식 가능', '회식 추천', '룸 있음'][seed % 3]
        elif '혼밥가능' in tags: oneliner = ['혼밥 편한 곳', '1인 식사 OK', '혼밥 추천'][seed % 3]
        else:
            rtype = (r.get('type', '') or '').split(',')[0]
            oneliner = f'{rtype} 전문' if rtype else '-'
        price_display = fmt_price(r.get('priceRange', ''))
        name_link = f'<a href="{region_path}/restaurant/{r["name"]}">{esc(r["name"])}</a>' if region_path else esc(r["name"])
        row = f'<tr style="border-bottom:1px solid var(--border)">'
        row += f'<td style="padding:7px 6px">{name_link}</td>'
        row += f'<td style="padding:7px 6px;text-align:center">{r.get("rating", "-")}</td>'
        row += f'<td style="padding:7px 6px;text-align:center">{r.get("reviewCount", "-")}건</td>'
        row += f'<td style="padding:7px 6px;text-align:center">{esc(price_display)}</td>'
        row += f'<td style="padding:7px 6px">{esc(oneliner)}</td>'
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
        tips.append(f'{names}은 점심 피크 시간(12시~12시 30분)에 대기가 있을 수 있습니다. 11시 50분 이전에 방문하시는 것을 추천드립니다.')

    # 예약 관련
    reservation_rests = [r['name'] for r in restaurants if '예약필수' in r.get('tags', []) or r.get('reservation')]
    if reservation_rests:
        names = ', '.join(reservation_rests[:2])
        tips.append(f'{names}은 사전에 예약하고 방문하시는 것이 좋습니다. 특히 주말 저녁에는 예약이 필수입니다.')

    # 주차 관련
    parking_rests = [r['name'] for r in restaurants if r.get('parking')]
    no_parking = [r['name'] for r in restaurants if not r.get('parking')]
    if parking_rests:
        tips.append(f'주차 가능한 곳: {", ".join(parking_rests[:3])}.')
    if no_parking and len(no_parking) < len(restaurants):
        tips.append(f'{", ".join(no_parking[:2])} 등은 전용 주차장이 없습니다. 대중교통 이용을 권장드립니다.')

    # 카테고리별 팁
    if category == 'meat':
        tips.append('고기집은 환기 상태를 확인해보시는 것이 좋습니다. 옷에 냄새가 신경 쓰이시는 분들은 오후 1시 이후에 방문하시면 회전이 빠릅니다.')
    elif category == 'date':
        tips.append('데이트를 계획하신다면 예약은 필수입니다. 금요일·토요일 저녁은 최소 3일 전에 예약하시기 바랍니다.')
    elif category == 'group':
        tips.append('회식의 경우 인원 확정 후 2~3일 전에 예약하시는 것이 좋습니다. 룸이 필요하시다면 일주일 전에 미리 잡으시기 바랍니다.')
    elif category == 'budget':
        tips.append('가성비가 좋은 곳일수록 점심 웨이팅이 길어지는 경향이 있습니다. 11시 30분~50분 사이에 방문하시면 대기 시간을 줄이실 수 있습니다.')
    elif category == 'lunch':
        tips.append('점심 메뉴가 저녁보다 저렴한 경우가 많습니다. 런치 세트 메뉴 여부를 미리 확인하시고 방문하시면 좋겠습니다.')

    if not tips:
        tips.append('방문 전에 영업시간과 휴무일을 반드시 확인하시기 바랍니다. 명절 전후에 임시 휴무하는 곳이 꽤 있습니다.')

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
def _signature_menu(r):
    """식당의 대표 메뉴 1개를 반환. 가격이 있으면 가격까지."""
    menus = r.get('menuItems') or []
    for m in menus:
        mname = (m.get('name') or '').strip()
        if not mname or len(mname) > 25:
            continue
        # 광고성 메뉴명 거르기
        if any(skip in mname for skip in ['추가', '사리', '무료', '!', '사용합니다']):
            continue
        mprice = m.get('price')
        if mprice and int(mprice) >= 1000:
            return mname, int(mprice)
        return mname, None
    return None, None

def make_h2_title(r, category):
    """식당별 차별점을 반영한 h2 제목.
    같은 카테고리라도 식당마다 다른 패턴이 나오도록 4~5가지 후보 중 선택."""
    name = r['name']
    tags = set(r.get('tags', []) or [])
    moods = set(r.get('moods', []) or [])
    rtype = (r.get('type', '') or '').split(',')[0].strip()
    rating = r.get('rating', 0) or 0
    cnt = r.get('reviewCount', 0) or 0
    price = r.get('priceRange', '') or ''
    sig_name, sig_price = _signature_menu(r)
    seed = abs(hash(name)) % 100

    # 후보 suffix 모으기 (있는 것 중 골라쓰기)
    candidates = []

    # ① 시그니처 메뉴 + 가격 (실데이터가 가장 강한 차별점)
    if sig_name and sig_price:
        candidates.append(f'시그니처 {sig_name} {sig_price:,}원')
    elif sig_name:
        candidates.append(f'대표 메뉴 {sig_name}')

    # ② 리뷰가 압도적이면 리뷰 강점
    if cnt >= 1000:
        candidates.append(f'리뷰 {cnt:,}건이 쌓인 곳')
    elif cnt >= 500:
        candidates.append(f'리뷰 {cnt}건 검증 맛집')

    # ③ 가격 강점 (저가/고가)
    if price and '~' in price:
        try:
            lo = int(price.split('~')[0])
            hi = int(price.split('~')[-1])
            if category == 'budget' and lo <= 10000:
                candidates.append(f'{lo//1000}천원대 가성비 한 끼')
            elif category in ('date', 'group') and hi >= 50000:
                candidates.append(f'인당 {hi//10000}만원대 코스')
            elif category == 'lunch' and lo <= 12000:
                candidates.append(f'점심 {lo//1000}천원대부터')
        except ValueError:
            pass

    # ④ 평점이 매우 높고 리뷰도 충분
    if rating >= 4.7 and cnt >= 100:
        candidates.append(f'평점 {rating}·리뷰 {cnt}건')

    # ⑤ 태그 기반 — 카테고리별로 가장 강한 태그 매핑
    tag_suffix = None
    if category == 'date':
        if '뷰맛집' in tags: tag_suffix = '뷰가 보이는 자리'
        elif '인스타감성' in tags: tag_suffix = '인테리어 감각적인 곳'
        elif '룸있음' in tags: tag_suffix = '프라이빗한 룸 운영'
    elif category == 'meat':
        if '한우' in tags: tag_suffix = '한우 전문 구이'
        elif '가성비' in tags: tag_suffix = '가성비 고기집'
        elif '웨이팅맛집' in tags: tag_suffix = '웨이팅 잡히는 고기집'
    elif category == 'group':
        if '룸있음' in tags: tag_suffix = '룸 완비 회식 장소'
        elif '단체가능' in tags: tag_suffix = '단체석 운영 회식 식당'
    elif category == 'budget':
        if '혼밥가능' in tags: tag_suffix = '혼밥 가능한 가성비 식당'
        elif '가성비' in tags: tag_suffix = '가성비 한 끼'
    elif category == 'izakaya':
        if '심야영업' in tags: tag_suffix = '심야까지 여는 술집'
        elif '데이트' in moods: tag_suffix = '분위기 잡히는 술자리'
    elif category == 'chinese':
        if '마라' in (rtype or ''): tag_suffix = '마라 전문'
        elif '딤섬' in (rtype or ''): tag_suffix = '딤섬 전문'
    elif category == 'gukbap':
        if '24시영업' in tags or '심야영업' in tags: tag_suffix = '늦은 시간까지 여는 해장 맛집'
        elif '가성비' in tags: tag_suffix = '가성비 국밥집'
    elif category == 'japanese':
        if '오마카세' in (rtype or '') or '오마카세' in tags: tag_suffix = '오마카세 코스 운영'
        elif '스시' in (rtype or ''): tag_suffix = '스시 전문점'
    if tag_suffix:
        candidates.append(tag_suffix)

    # ⑥ 마지막 fallback — 타입을 그대로 (단, 너무 일반적이면 카테고리 라벨로)
    if rtype and rtype not in ('한식', '양식'):
        candidates.append(f'{rtype} 전문점')
    elif category == 'gukbap':
        candidates.append('해장·국밥 한 그릇')
    elif category == 'lunch':
        candidates.append(f'{rtype} 점심 식당' if rtype else '점심 식당')
    else:
        candidates.append(f'{rtype} 전문점' if rtype else '추천 맛집')

    # seed로 후보 중 하나 선택 — 같은 카테고리 안에서도 식당마다 다른 suffix
    suffix = candidates[seed % len(candidates)]
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

    # 인트로 변형 — 포스트 id 기반으로 톤 변경
    pid = post_data['id']
    variant = pid % 3

    if variant == 0:
        intro_p1 = (
            f'{rname}에서{cat_text} 식당을 찾고 계신다면, 이 글 하나로 정리해 드리겠습니다. '
            f'총 {total}곳 중{cat_text} {n}곳을 엄선하여 비교하였습니다.'
        )
    elif variant == 1:
        intro_p1 = (
            f'{area} 근처에서{cat_text} 괜찮은 곳을 찾고 계시는 분들을 위해 준비하였습니다. '
            f'{n}곳을 추려서 가격과 메뉴까지 상세하게 정리하였습니다.'
        )
    else:
        intro_p1 = (
            f'{rname}{cat_text} 맛집을 검색하면 너무 많은 결과가 나옵니다. '
            f'{total}곳의 데이터에서 실제로 방문할 만한 {n}곳만 선별하였습니다.'
        )

    intro_p2 = (
        f'평균 평점 {avg_rt}점입니다.{price_range_text} '
        f'{TODAY[:4]}년 {int(TODAY[5:7])}월 기준이며, {cat_focus}을 위주로 비교하였습니다.'
    )

    rest_names = [r['name'] for r in rests[:5]]
    intro_p3 = f'소개 순서: {", ".join(rest_names)}.'

    return f'<p>{esc(intro_p1)}</p><p>{esc(intro_p2)}</p><p>{esc(intro_p3)}</p>'

# ── 엔딩 생성 ───────────────────────────────────────────────────
def generate_ending(post_data, related_posts):
    """마무리 + 관련 글 링크"""
    rinfo = REGION_INFO.get(post_data['region'], {})
    region_path = rinfo.get('path', '')
    rname = rinfo.get('name', '')
    cat_label = CATEGORY_ANGLES.get(post_data.get('category', ''), {}).get('label', '')

    closing = (
        f'{TODAY[:4]}년 {int(TODAY[5:7])}월 기준 정보입니다. '
        f'영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. '
        f'아래 관련 글도 함께 참고해 주시기 바랍니다.'
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
        f'<p>{rname} 전체 {total_region}곳에서 {cat_label} 카테고리에 해당하는 식당을 선별하였습니다. '
        f'평점 {min_rt}점 이상, {cat_focus} 기준으로 비교하였습니다. '
        f'{TODAY[:4]}년 {int(TODAY[5:7])}월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>'
    )
    sections.append({
        'type': 'h2', 'id': 'criteria',
        'text': f'선정 기준 — 왜 이 {len(restaurants)}곳인가',
        'gradientStyle': GRADIENTS[0],
    })
    sections.append({'type': 'body', 'html': criteria_html})

    # 4. 주요/보조 식당 분류 (평점+리뷰수 기준 상위 2~3개가 주요)
    post_images = img_mapping.get(str(pid), {}).get('restaurants', {})
    scored = [(i, r, r.get('rating', 0) * 100 + min(r.get('reviewCount', 0), 500))
              for i, r in enumerate(restaurants)]
    scored.sort(key=lambda x: x[2], reverse=True)
    main_count = min(3, max(2, len(restaurants) // 2))
    main_indices = set(x[0] for x in scored[:main_count])

    for i, r in enumerate(restaurants):
        is_main = i in main_indices
        angle = pick_angle(r, i, category)
        h2_title = make_h2_title(r, category)
        h2_id = safe_id(r['name'])
        r_images = post_images.get(r['name'], [])

        sections.append({
            'type': 'h2',
            'id': h2_id,
            'text': h2_title,
            'gradientStyle': GRADIENTS[(i + 1) % len(GRADIENTS)],
        })

        # 첫 번째 이미지: h2 바로 아래
        if len(r_images) >= 1:
            sections.append({
                'type': 'image',
                'src': r_images[0],
                'alt': f'{r["name"]} 대표 사진',
                'caption': f'{r["name"]}',
            })

        body_html = generate_restaurant_body(
            r, REGION_INFO.get(post_data['region'], {}).get('path', ''),
            category, is_main=is_main, angle=angle, region=post_data['region']
        )
        sections.append({
            'type': 'body',
            'html': body_html,
        })

        # 두 번째 이미지: 주요 식당만 본문 뒤에 추가
        if is_main and len(r_images) >= 2:
            sections.append({
                'type': 'image',
                'src': r_images[1],
                'alt': f'{r["name"]} 음식 사진',
                'caption': f'{r["name"]} 메뉴',
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
            'html': generate_comparison_table(restaurants, category, REGION_INFO.get(post_data['region'], {}).get('path', '')),
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
