#!/usr/bin/env python3
"""data/posts.js의 모든 포스트 description을 ≥130자로 확장.
이미 130자 이상이면 건드리지 않음. 짧은 것만 title·tags·region·category 기반으로 합성.
"""
import re, os, json

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FP = os.path.join(BASE, 'data', 'posts.js')

REGION_LABEL = {
    'samseong':'삼성역·코엑스·테헤란로', 'jamsil':'잠실역·방이먹자골목·석촌호수',
    'pangyo':'판교역·판교테크노밸리·현대백화점 판교점', 'suji':'수지구청역·풍덕천동·동천동',
    'yeongtong':'영통역·영통 먹자골목·삼성전자', 'mangpo':'망포역·삼성전자·매탄동',
    'yeongtongGu':'영통구청역·매탄동·인계동', 'gangnam':'강남역·강남대로·테헤란로',
    'hongdae':'홍대입구·홍대거리·연남동·합정',
}
CAT_LABEL = {
    'meat':'한우·삼겹살·갈비 등 고기', 'chinese':'짜장·짬뽕·딤섬·마라탕 등 중식',
    'izakaya':'이자카야·포차·하이볼 등 술집', 'japanese':'스시·오마카세·돈가스 등 일식',
    'gukbap':'국밥·해장국·설렁탕', 'western':'양식·파스타·스테이크',
    'date':'데이트 분위기 레스토랑', 'group':'회식·단체석·룸',
    'lunch':'카테고리별 점심', 'budget':'1만원대 가성비',
    'chicken':'치킨·야장·맥주', 'special':'특별 추천',
}
SCENE = {
    'meat':'회식·데이트·가족 모임', 'chinese':'점심 가성비·회식 코스·데이트',
    'izakaya':'회식·데이트·혼술', 'japanese':'데이트·기념일·점심 오마카세',
    'gukbap':'해장·점심·혼밥', 'western':'데이트·기념일·점심',
    'date':'기념일·소개팅·분위기 좋은 저녁', 'group':'팀 회식·송년회·환영회',
    'lunch':'직장인 점심·동료 식사·혼밥', 'budget':'혼밥·학생·자취 점심',
    'chicken':'야장·맥주·친구 모임', 'special':'특별한 한 끼',
}

def build_desc(post):
    """post dict → ≥130자 description"""
    reg = REGION_LABEL.get(post.get('region'), post.get('region') or '')
    cat = CAT_LABEL.get(post.get('category'), post.get('category') or '맛집')
    sc = SCENE.get(post.get('category'), '회식·데이트·혼밥·점심')
    title = post.get('title', '')
    n = ''
    m = re.search(r'(\d+)\s*(?:곳|선)', title)
    if m: n = f' {m.group(1)}곳'
    return f'{reg} {cat} 맛집{n}을 카카오맵·네이버 평점·리뷰·메뉴 가격·예약 가능 여부 기준으로 비교한 2026 가이드. {sc} 상황별 추천, 영업시간·룸·단체석·주차 정보까지 한눈에.'.replace('  ', ' ').strip()

with open(FP) as f:
    src = f.read()

# 각 description 추출 → 짧으면 교체
def repl(m):
    full = m.group(0)
    desc = m.group(1)
    if len(desc) >= 130:
        return full
    # post 객체 전체 영역(이 desc가 속한 { ... })에서 title/region/category/tags 추출
    return full  # 1차로 그대로 두고, 별도 처리

# 더 안전한 방법: 각 post 객체를 한 줄씩 파싱
lines = src.split('\n')
new_lines = []
changes = 0
for line in lines:
    # description:'...' 또는 description:"..." 부분 찾기
    m = re.search(r"description:\s*'([^']*)'", line)
    if not m:
        new_lines.append(line); continue
    # 한 번 더 돌릴 때 띄어쓰기 버그(곳 을) 발견시에도 교체
    has_bug = '곳 을 ' in m.group(1) or '맛집 을' in m.group(1)
    if len(m.group(1)) >= 130 and not has_bug:
        new_lines.append(line); continue
    # title/region/category 추출
    tm = re.search(r"title:\s*'([^']*)'", line)
    rm = re.search(r"region:\s*'([^']*)'", line)
    cm = re.search(r"category:\s*'([^']*)'", line)
    post = {
        'title': tm.group(1) if tm else '',
        'region': rm.group(1) if rm else '',
        'category': cm.group(1) if cm else '',
    }
    new_desc = build_desc(post)
    # 작은따옴표가 들어있을 가능성 없지만 안전하게 escape
    new_desc_safe = new_desc.replace("'", "\\'")
    new_line = re.sub(r"description:\s*'[^']*'", f"description:'{new_desc_safe}'", line, count=1)
    new_lines.append(new_line)
    changes += 1

new_src = '\n'.join(new_lines)
if new_src != src:
    with open(FP, 'w') as f: f.write(new_src)
    print(f'갱신: {changes}개 포스트 description 확장')
else:
    print('변경 없음')
