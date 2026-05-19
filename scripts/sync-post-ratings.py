#!/usr/bin/env python3
"""posts/*.js의 하드코딩된 평점·리뷰 수치를 data/*.js 최신값(네이버+다음 합산)으로 치환.

식당 카드 단위로 처리:
  - h2 식당명 추출 → data 조회 → 해당 카드 영역의 평점·리뷰 패턴 치환
  - 비교표 행, 한 줄 결론·운영자 노트의 "식당명 ... 리뷰 N건" 패턴도 동기화

치환 패턴 (식당 카드 영역 내):
  ★ X.X · 리뷰 N건 / ★ X.X (N건) / 평점 X.X·리뷰 N건
  ★ X.X / 평점 X.X점 / 리뷰 N건 / 리뷰 N,NNN건
"""
import re, os, json, glob

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REGIONS = ['samseong','jamsil','pangyo','yeongtong','mangpo','yeongtongGu','suji','gangnam']

def load_all_restaurants():
    """name -> (rt, cnt). 중복명은 cnt 큰 것 우선."""
    table = {}
    for region in REGIONS:
        fp = os.path.join(BASE, 'data', f'{region}.js')
        with open(fp) as f: t = f.read()
        m = re.search(r'const \w+\s*=\s*\[', t)
        end = t.rfind(']')
        arr = json.loads(re.sub(r',(\s*\])', r'\1', t[m.end()-1: end+1]))
        for r in arr:
            nm = r.get('name', '')
            rt = r.get('rt', 0) or 0
            cnt = r.get('cnt', 0) or 0
            if not nm: continue
            if nm not in table or cnt > table[nm][1]:
                table[nm] = (rt, cnt)
    return table

def fmt_cnt(n):
    return f'{n:,}'

def replace_in_block(block, rt, cnt):
    """한 식당 카드 영역(block) 안에서 평점·리뷰 패턴을 (rt, cnt)로 치환."""
    cnt_s = fmt_cnt(cnt)
    rt_s = f'{rt:g}' if rt == int(rt) else f'{rt}'

    # 1) ★ X.X · 리뷰 N건  /  ★ X.X · 리뷰 N,NNN건
    block = re.sub(r'★\s*[\d.]+\s*·\s*리뷰\s*[\d,]+\s*건',
                   f'★ {rt_s} · 리뷰 {cnt_s}건', block)
    # 2) ★ X.X (N건) / ★ X.X (리뷰 N건)
    block = re.sub(r'★\s*[\d.]+\s*\(\s*(?:리뷰\s*)?[\d,]+\s*건?\)',
                   f'★ {rt_s} ({cnt_s}건)', block)
    # 3) 평점 X.X점·리뷰 N건 / 평점 X.X·리뷰 N건 / 평점 X.X점 · 리뷰 N건
    block = re.sub(r'평점\s*[\d.]+\s*점?\s*·\s*리뷰\s*[\d,]+\s*건',
                   f'평점 {rt_s}점·리뷰 {cnt_s}건', block)
    # 4) 리뷰 N건 (단독) — rt 없이 cnt만
    block = re.sub(r'리뷰\s*[\d,]+\s*건', f'리뷰 {cnt_s}건', block)
    # 5) ★ X.X (단독). 숫자 전체를 한 토큰으로 잡고 뒤에 숫자/점/·/( 없을 때만
    #    (백트래킹으로 4.3→4.만 잡혀 4.33 되는 버그 방지)
    if rt > 0:
        block = re.sub(r'★\s*\d+(?:\.\d+)?(?![\d.])(?!\s*[·(]|\s*리뷰)', f'★ {rt_s}', block)
        # 6) 평점 X.X점 (단독)
        block = re.sub(r'평점\s*\d+(?:\.\d+)?(?![\d.])\s*점', f'평점 {rt_s}점', block)
    return block

def process_post(fp, table):
    with open(fp) as f: t = f.read()
    orig = t

    # 식당 카드 h2 분할: text: '{name} — ...' 또는 "text": "{name} — ..."
    # h2 패턴 (백틱/일반 따옴표/JSON 모두)
    h2_iter = list(re.finditer(
        r'''(?:text:\s*|"text":\s*)['"]([^'"]+?)\s*[—\-–][^'"]*['"]''', t))

    if not h2_iter:
        return False, 0

    matched = 0
    # 각 h2의 다음 h2까지를 그 식당 카드 영역으로
    spans = []
    for i, m in enumerate(h2_iter):
        name_raw = m.group(1).strip()
        start = m.end()
        end = h2_iter[i+1].start() if i+1 < len(h2_iter) else len(t)
        spans.append((name_raw, start, end))

    # 뒤에서부터 치환 (인덱스 보존)
    new_t = t
    for name_raw, start, end in reversed(spans):
        # 식당명 정확 매칭 우선, 없으면 부분 매칭
        rec = table.get(name_raw)
        if rec is None:
            # 부분 매칭 (포스트 h2가 "식당명 지점명" 형태 변형 가능)
            cand = [k for k in table if k == name_raw or (len(name_raw) >= 3 and name_raw in k) or (len(k) >= 3 and k in name_raw)]
            if len(cand) == 1:
                rec = table[cand[0]]
            elif len(cand) > 1:
                # cnt 가장 큰 것
                best = max(cand, key=lambda k: table[k][1])
                rec = table[best]
        if rec is None:
            continue
        rt, cnt = rec
        if rt == 0 and cnt == 0:
            continue
        block = new_t[start:end]
        block2 = replace_in_block(block, rt, cnt)
        if block2 != block:
            new_t = new_t[:start] + block2 + new_t[end:]
            matched += 1

    # 한 줄 결론(큐레이터 결론) 박스: <strong>식당명</strong> 뒤 평점·리뷰 표기를 data값으로
    def fix_verdict(vm):
        seg = vm.group(0)
        strong_iter = list(re.finditer(r'<strong>([^<]+)</strong>', seg))
        for si, sm in enumerate(strong_iter):
            nm2 = sm.group(1).strip()
            rec2 = table.get(nm2)
            if rec2 is None:
                cand = [k for k in table if k == nm2 or (len(nm2) >= 3 and (nm2 in k or k in nm2))]
                if cand:
                    rec2 = table[max(cand, key=lambda k: table[k][1])]
            if not rec2:
                continue
            rt2, cnt2 = rec2
            if rt2 == 0 and cnt2 == 0:
                continue
            s2 = sm.end()
            e2 = strong_iter[si + 1].start() if si + 1 < len(strong_iter) else len(seg)
            sub = seg[s2:e2]
            sub2 = replace_in_block(sub, rt2, cnt2)
            if sub2 != sub:
                seg = seg[:s2] + sub2 + seg[e2:]
                # 길이 변화 반영 위해 재탐색
                strong_iter = list(re.finditer(r'<strong>([^<]+)</strong>', seg))
        return seg
    new_t2 = re.sub(r'<aside[^>]*>.*?큐레이터 결론.*?</aside>', fix_verdict, new_t, count=1, flags=re.DOTALL)
    if new_t2 != new_t:
        new_t = new_t2
        matched += 1

    if new_t != orig:
        with open(fp, 'w') as f: f.write(new_t)
        return True, matched
    return False, 0

def main():
    table = load_all_restaurants()
    print(f'식당 데이터 로드: {len(table)}개')
    posts = sorted(glob.glob(os.path.join(BASE, 'posts', '*.js')),
                   key=lambda p: int(re.search(r'(\d+)', os.path.basename(p)).group(1)))
    total_changed = 0
    for fp in posts:
        pid = os.path.basename(fp)
        changed, n = process_post(fp, table)
        status = f'갱신 {n}개 카드' if changed else '변경 없음'
        print(f'  posts/{pid}: {status}')
        if changed: total_changed += 1
    print(f'\n총 {total_changed}개 포스트 갱신')

if __name__ == '__main__':
    main()
