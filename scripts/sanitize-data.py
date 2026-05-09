#!/usr/bin/env python3
"""
sanitize-data.py — 8개 region 데이터의 의심 값을 일괄 보정.

보정 규칙:
  1) priceRange 의 상한이 1,000,000원 초과 → priceRange = "" (reset)
  2) menuItems[*].price 가 1,000,000원 초과 → price = 0
  3) rt == 5 이고 cnt >= 100 → rt = 0, cnt = 0 (평점 파싱 오류 의심)
  4) 같은 cnt를 3개 이상 식당이 공유 → 해당 그룹의 cnt = 0 (건물·푸드코트 카운터 오부여)

reset된 식당은 is_quality(rt>0 or cnt>0) 검증에서 자동 제외됨 → enrich 단계에서 포스트에서 빠짐.
"""
import os, re, json
from collections import Counter

BASE = '/Users/lee/Desktop/dinnerAIVer1.0/dinnerRecommend'
REGIONS = ['samseong','jamsil','pangyo','yeongtong','mangpo','yeongtongGu','suji','gangnam']
PRICE_CAP = 1_000_000  # 100만원 초과는 비현실적

stats = {'price_reset': 0, 'menu_reset': 0, 'rating_reset': 0, 'cnt_group_reset': 0, 'cnt_total': 0}

def sanitize_one_region(region):
    p = os.path.join(BASE, 'data', f'{region}.js')
    if not os.path.exists(p):
        return
    with open(p, 'r', encoding='utf-8') as f:
        text = f.read()

    original = text

    # ── 1) priceRange 보정 ──
    # priceRange 가 "lo~hi" 형태이고 hi(또는 lo)가 PRICE_CAP 초과면 ""로 reset
    def fix_price_range(m):
        full = m.group(0)
        val = m.group(1)
        nums = [int(x) for x in val.replace(' ', '').split('~') if x.isdigit()]
        if any(n > PRICE_CAP for n in nums):
            stats['price_reset'] += 1
            return '"priceRange": ""'
        return full
    text = re.sub(r'"priceRange":\s*"([\d~ ]+)"', fix_price_range, text)

    # ── 2) menuItems[*].price 보정 ──
    def fix_menu_price(m):
        n = int(m.group(1))
        if n > PRICE_CAP:
            stats['menu_reset'] += 1
            return '"price": 0'
        return m.group(0)
    text = re.sub(r'"price":\s*(\d+)', fix_menu_price, text)

    # ── 3) rt=5 + cnt>=100 보정 ──
    # 객체 단위로 보정해야 하므로 {...} 블록을 찾아서 처리
    def fix_rating_block(m):
        block = m.group(0)
        rt_m = re.search(r'"rt":\s*(\d+(?:\.\d+)?)', block)
        cnt_m = re.search(r'"cnt":\s*(\d+)', block)
        if rt_m and cnt_m:
            rt = float(rt_m.group(1))
            cnt = int(cnt_m.group(1))
            if rt == 5.0 and cnt >= 100:
                stats['rating_reset'] += 1
                block = re.sub(r'"rt":\s*\d+(?:\.\d+)?', '"rt": 0', block)
                block = re.sub(r'"cnt":\s*\d+', '"cnt": 0', block)
        return block

    # 식당 객체 단위 매칭 — "name" 필드로 시작하는 큰 블록을 찾아 처리
    # 단순화: rt와 cnt가 한 식당 안에 가까이 있다고 가정하고 짧은 윈도우로 처리
    def process_objects(s):
        out = []
        # JSON-like object: { ... }, depth balanced
        i = 0
        n = len(s)
        while i < n:
            if s[i] == '{':
                depth = 0
                start = i
                in_string = False
                escape = False
                while i < n:
                    c = s[i]
                    if escape:
                        escape = False
                    elif c == '\\':
                        escape = True
                    elif c == '"':
                        in_string = not in_string
                    elif not in_string:
                        if c == '{':
                            depth += 1
                        elif c == '}':
                            depth -= 1
                            if depth == 0:
                                i += 1
                                break
                    i += 1
                block = s[start:i]
                # 식당 객체로 보이면 (= "name" 필드 있고 "rt" 있음) 보정
                if '"name"' in block and '"rt"' in block:
                    block = fix_rating_block(re.match(r'.*', block, re.DOTALL))
                out.append(block)
            else:
                out.append(s[i])
                i += 1
        return ''.join(out)

    # process_objects는 토큰 단위 비효율이라 정규식으로 객체 추출하는 더 단순한 접근으로 교체
    # 식당 객체 패턴: 좌중괄호로 시작, 균형 잡힌 우중괄호로 끝
    def extract_and_fix(s):
        result = []
        idx = 0
        while idx < len(s):
            # 다음 식당 객체 찾기 — '"name"' 키워드 기준
            m = re.search(r'\{\s*"name"', s[idx:])
            if not m:
                result.append(s[idx:])
                break
            obj_start_rel = m.start()
            result.append(s[idx:idx+obj_start_rel])
            # balance brace
            j = idx + obj_start_rel
            depth = 0
            in_str = False
            esc = False
            start_j = j
            while j < len(s):
                c = s[j]
                if esc:
                    esc = False
                elif c == '\\':
                    esc = True
                elif c == '"':
                    in_str = not in_str
                elif not in_str:
                    if c == '{':
                        depth += 1
                    elif c == '}':
                        depth -= 1
                        if depth == 0:
                            j += 1
                            break
                j += 1
            block = s[start_j:j]
            # rating reset
            rt_m = re.search(r'"rt":\s*(\d+(?:\.\d+)?)', block)
            cnt_m = re.search(r'"cnt":\s*(\d+)', block)
            if rt_m and cnt_m:
                rt = float(rt_m.group(1))
                cnt = int(cnt_m.group(1))
                if rt == 5.0 and cnt >= 100:
                    stats['rating_reset'] += 1
                    block = re.sub(r'"rt":\s*\d+(?:\.\d+)?', '"rt": 0', block, count=1)
                    block = re.sub(r'"cnt":\s*\d+', '"cnt": 0', block, count=1)
            result.append(block)
            idx = j
        return ''.join(result)

    text = extract_and_fix(text)

    # ── 4) 동일 cnt 공유 그룹 보정 ──
    # cnt 값이 3개 이상 식당에서 동일하면 그 그룹의 cnt를 0으로 (건물 단위 오부여)
    cnt_values = re.findall(r'"cnt":\s*(\d+)', text)
    counter = Counter(int(v) for v in cnt_values)
    # 0과 너무 작은 값은 제외 (정상적으로 일치할 수 있음 — 0, 1, 2 등)
    suspicious_cnts = {v for v, c in counter.items() if c >= 3 and v >= 50}
    if suspicious_cnts:
        # 각 의심 cnt값을 0으로 일괄 reset
        for sus_v in suspicious_cnts:
            pattern = rf'"cnt":\s*{sus_v}\b'
            count = len(re.findall(pattern, text))
            text = re.sub(pattern, '"cnt": 0', text)
            stats['cnt_group_reset'] += count

    if text != original:
        with open(p, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f'  ✓ {region}: 보정 완료')
    else:
        print(f'  · {region}: 보정 없음')

for region in REGIONS:
    sanitize_one_region(region)

print('\n=== 보정 통계 ===')
for k, v in stats.items():
    print(f'  {k}: {v}')
