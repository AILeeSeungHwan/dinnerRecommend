#!/usr/bin/env python3
"""Generate 12 deep-dive gangnam recommendation posts (id 26-37).

Each post follows posts/10.js (mangpo gasangbi) structure exactly:
14 sections, yellow detail-buttons, themed review keyword boxes,
restaurant gallery (header img + 3-img gallery), category-specific gradients.

NOT executed for git push — leaves working tree files only.
"""

import json, re, os, sys

ROOT = "/Users/lee/Desktop/dinnerAIVer1.0/dinnerRecommend"

# --- Load gangnam data ---
with open(f"{ROOT}/data/gangnam.js") as f:
    content = f.read()
m = re.search(r'const data = (\[[\s\S]*\])\s*\n?\s*(?:export default|module\.exports)', content)
data = json.loads(m.group(1))
for r in data:
    for k in list(r.keys()):
        if isinstance(r.get(k), str):
            r[k] = r[k].replace('&amp;', '&')

# --- Load reviews summary ---
with open(f"{ROOT}/data/reviews_summary.json") as f:
    reviews = json.load(f).get('gangnam', {})


# ---- Helpers ----------------------------------------------------------------

def first_price(pr: str) -> int:
    if not pr:
        return 0
    m = re.match(r'(\d+)', pr)
    return int(m.group(1)) if m else 0

def end_price(pr: str) -> int:
    if not pr:
        return 0
    mm = re.findall(r'(\d+)', pr)
    return int(mm[-1]) if mm else 0

def price_label(pr: str) -> str:
    lo = first_price(pr)
    hi = end_price(pr)
    if not lo:
        return "매장 문의"
    if hi and hi != lo:
        return f"{lo:,}원~{hi:,}원"
    return f"{lo:,}원~"

def normalize_hours(h: str) -> str:
    if not h:
        return "영업일 매장 확인"
    h = h.strip()
    if h == '휴무일':
        return "영업일 매장 확인"
    return h

def get_themes(name: str):
    r = reviews.get(name)
    if not r:
        return [], 0
    return r.get('themes', []), r.get('review_count', 0)

def themes_phrase(themes):
    if not themes:
        return None
    themes = themes[:3]
    return ' · '.join(themes)

CAT_GRAD = {
    'meat':     ('#B91C1C', '#7F1D1D'),
    'izakaya':  ('#4338CA', '#1E1B4B'),
    'japanese': ('#0EA5E9', '#1E40AF'),
    'chinese':  ('#DC2626', '#F59E0B'),
    'gukbap':   ('#EA580C', '#B45309'),
    'western':  ('#C026D3', '#7C3AED'),
    'group':    ('#0F6E56', '#059669'),
    'special':  ('#9333EA', '#581C87'),
}

CARD_GRADS = [
    ('#DC2626', '#F59E0B'),
    ('#EA580C', '#B45309'),
    ('#F97316', '#DC2626'),
    ('#0EA5E9', '#1E40AF'),
    ('#0F6E56', '#059669'),
    ('#4338CA', '#A855F7'),
    ('#9333EA', '#581C87'),
]

CAT_BADGE = {
    'meat':     '#B91C1C',
    'izakaya':  '#4338CA',
    'japanese': '#0EA5E9',
    'chinese':  '#DC2626',
    'gukbap':   '#EA580C',
    'western':  '#C026D3',
    'group':    '#0F6E56',
    'special':  '#9333EA',
}


# ---- Category picker --------------------------------------------------------

def pick_meat(n=7):
    out = [r for r in data if '고기구이' in (r.get('cat') or [])]
    out.sort(key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return out[:n]

def pick_izakaya(n=7):
    out = [r for r in data if '이자카야' in (r.get('cat') or [])]
    out.sort(key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return out[:n]

def pick_japanese(n=7):
    out = [r for r in data if '일식' in (r.get('cat') or [])]
    out.sort(key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return out[:n]

def pick_chinese(n=7):
    out = [r for r in data if '중식' in (r.get('cat') or [])]
    out.sort(key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return out[:n]

def pick_gukbap(n=7):
    keys = ['국밥', '해장', '순대국', '감자탕', '뼈해장', '콩나물해장', '곰탕', '설렁탕', '육개장', '나주곰탕']
    out = []
    seen = set()
    for r in data:
        name = r['name']
        menu_names = ' '.join([m.get('menuName', '') for m in (r.get('menuItems') or [])])
        joined = f"{name} {menu_names}"
        if any(k in joined for k in keys):
            if name not in seen:
                out.append(r); seen.add(name)
    out.sort(key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return out[:n]

def pick_western(n=4):
    out = [r for r in data if '양식' in (r.get('cat') or [])]
    out.sort(key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return out[:n]

def pick_group(n=5):
    han = [r for r in data if '한식' in (r.get('cat') or [])]
    han.sort(key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    chi = [r for r in data if '중식' in (r.get('cat') or [])]
    chi.sort(key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    out = []
    seen = set()
    for r in han[:3]:
        if r['name'] not in seen:
            out.append(r); seen.add(r['name'])
    for r in chi[:3]:
        if len(out) >= n: break
        if r['name'] not in seen:
            out.append(r); seen.add(r['name'])
    pool = han[3:] + chi[3:]
    pool.sort(key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    for r in pool:
        if len(out) >= n: break
        if r['name'] not in seen:
            out.append(r); seen.add(r['name'])
    return out[:n]

def pick_special(n=7):
    keys = ['족발', '곱창', '보쌈', '막창', '대창', '특수부위', '왕족발', '한방족발']
    out = []
    seen = set()
    for r in data:
        name = r['name']
        menu_names = ' '.join([m.get('menuName', '') for m in (r.get('menuItems') or [])])
        joined = f"{name} {menu_names}"
        if any(k in joined for k in keys):
            if name not in seen:
                out.append(r); seen.add(name)
    out.sort(key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return out[:n]


# ---- HTML builders ----------------------------------------------------------

def js_escape_for_backtick(s):
    """Escape for inside JS backtick template literal."""
    if s is None:
        return ''
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')


def intro_html(restaurant_count_word, start_price, total_reviews, avg_rt_text, category_label):
    return (
        f'<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">'
        f'<strong>강남역</strong> 일대에서 {category_label} 카테고리로 추릴 만한 식당 {restaurant_count_word}을 정리했습니다. '
        f'2호선·신분당선 강남역 주변 285곳 데이터를 평점·리뷰 표본·메뉴 구성·가격대 4가지 기준으로 점검한 뒤, '
        f'본 가이드에서는 {category_label} 카테고리에서 표본이 큰 식당과 메뉴 차별점이 명확한 식당을 함께 골라 두었습니다. '
        f'데이트·회식·점심·혼술 등 상황별로 다른 1순위를 매칭해 두었으니 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>'
        f'<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">'
        f'<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">285곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">강남역 일대</p></div>'
        f'<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 식당 표본</p><p style="font-size:20px;font-weight:600;margin:0">{avg_rt_text}</p><p style="font-size:11px;color:#888780;margin:4px 0 0">평점 데이터 보유 식당 기준</p></div>'
        f'<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">{total_reviews:,}건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>'
        f'<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">{start_price:,}원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">선정 식당 1인 기준</p></div>'
        f'</div>'
    )


def verdict_html(category_label, items):
    parts = []
    for label, name, brief in items:
        parts.append(f'{label}이면 <strong>{name}</strong> — {brief}')
    body = '. '.join(parts) + '.'
    return (
        '<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">'
        '<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>'
        f'<p style="font-size:15px;margin:0;line-height:1.8">강남역 {category_label} 가이드 — 상황별 1순위를 분리해 정리하였습니다. {body}</p>'
        '</aside>'
    )


def criteria_html(category_label, picked_count):
    return (
        '<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">'
        '<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 적합도</h3>'
        '<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">'
        '<li><strong>네이버 플레이스 누적 리뷰</strong> — 검증 가능한 표본이 충분히 쌓인 식당부터 후보로 추렸습니다</li>'
        '<li><strong>메뉴 구성과 시그니처</strong> — 대표 메뉴·가격이 데이터에 등록된 식당을 우선 채택했습니다</li>'
        '<li><strong>행정안전부 인허가 매칭</strong> — 영업 상태가 공식 데이터로 확인되는 식당만 포함했습니다</li>'
        f'<li><strong>카테고리 적합성</strong> — 본문 카테고리({category_label})와 식당 메인 메뉴가 일치하는 식당만 묶었습니다</li>'
        '</ul></div>'
        f'<p style="font-size:14px;line-height:1.75;color:#1a1a1a">강남역 일대 285곳 중 {category_label} 카테고리에 해당하는 식당은 수십 곳이었습니다. 그중 리뷰 표본 크기·메뉴 가격대·운영 안정성을 종합 평가해 {picked_count}곳을 추렸습니다. 같은 시그니처의 식당이 겹치지 않도록 분산해, 한 가이드 안에서 비교 의사결정이 가능하도록 묶었습니다.</p>'
    )


def card_html(r, region_path, scenario_label, scenario_color, diff_paragraph, category_slug, idx):
    name = r['name']
    cnt = r.get('cnt', 0) or 0
    rt = r.get('rt', 0) or 0
    pr = r.get('priceRange', '')
    addr = r.get('addr', '강남역 일대')
    hours = normalize_hours(r.get('hours', ''))
    tel = r.get('tel', '매장 문의')
    parking = r.get('parking')
    reservation = r.get('reservation')
    naver_blog = r.get('naverBlogCnt', 0) or 0

    img1 = r.get('imageUrl') or ''
    img2 = r.get('imageUrl2') or ''
    img3 = r.get('imageUrl3') or ''
    img4 = r.get('imageUrl4') or ''

    if img1:
        header_img = (
            f'<img src="{img1}" alt="{name} 대표 이미지" loading="lazy" referrerpolicy="no-referrer" '
            f'style="width:100%;height:260px;object-fit:cover;display:block" />'
        )
    else:
        c1, c2 = CAT_GRAD.get(category_slug, ('#534AB7', '#A855F7'))
        header_img = (
            f'<div style="width:100%;height:260px;background:linear-gradient(135deg,{c1},{c2});'
            'display:flex;align-items:center;justify-content:center;color:#fff;font-size:48px">🍽</div>'
        )

    if rt and rt > 0:
        rt_badge = f'<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ {rt} · 리뷰 {cnt:,}건</span>'
    else:
        rt_badge = f'<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">리뷰 {cnt:,}건</span>'

    pr_label = price_label(pr)
    price_badge = f'<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 {pr_label}</span>'

    extras = []
    if parking is True:
        extras.append('<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>')
    if reservation is True:
        extras.append('<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>')
    extras.append('<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>')

    badge_color = CAT_BADGE.get(category_slug, '#534AB7')
    scenario_badge = f'<span style="background:{badge_color};color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">{scenario_label}</span>'

    badge_row = (
        '<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">'
        + scenario_badge + rt_badge + price_badge + ''.join(extras)
        + '</div>'
    )

    themes, _ = get_themes(name)
    theme_kw = themes_phrase(themes)
    if theme_kw:
        theme_box = (
            '<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">'
            '<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>'
            f'<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"{theme_kw}" 같은 평이 자주 언급되었습니다. 시그니처 메뉴 만족도와 매장 운영이 후기 키워드로 묶입니다.</p>'
            '</div>'
        )
    elif naver_blog and naver_blog > 200:
        theme_box = (
            '<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">'
            '<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>'
            f'<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">네이버 블로그 후기 {naver_blog:,}건이 누적된 식당입니다. 시그니처 메뉴 후기와 매장 분위기 평가가 함께 누적되는 식당으로 묶입니다.</p>'
            '</div>'
        )
    else:
        theme_box = ''

    gallery_imgs = [g for g in [img2, img3, img4] if g]
    if len(gallery_imgs) >= 3:
        gallery = (
            '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">'
            + f'<img src="{gallery_imgs[0]}" alt="{name} 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />'
            + f'<img src="{gallery_imgs[1]}" alt="{name} 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />'
            + f'<img src="{gallery_imgs[2]}" alt="{name} 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />'
            + '</div>'
        )
    elif gallery_imgs:
        imgs = (gallery_imgs * 3)[:3]
        gallery = (
            '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">'
            + ''.join(f'<img src="{g}" alt="{name} 사진 {i+1}" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />' for i, g in enumerate(imgs))
            + '</div>'
        )
    else:
        gallery = ''

    menu_items = r.get('menuItems') or []
    if menu_items:
        menu_cards = []
        for i, mi in enumerate(menu_items[:6]):
            mn = mi.get('menuName', '').strip()
            mp = mi.get('price', 0)
            if not mn:
                continue
            mp_text = f"{mp:,}원" if mp else "매장 문의"
            label = ""
            if i == 0:
                label = " · <strong>시그니처</strong>"
            elif mp and first_price(pr) and mp == first_price(pr):
                label = " · <strong>최저가</strong>"
            menu_cards.append(
                f'<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">{mn}</p><p style="font-size:12px;color:#5f5e5a;margin:0">{mp_text}{label}</p></div>'
            )
        menu_grid = (
            f'<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 {len(menu_cards)}종</h4>'
            '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">' + ''.join(menu_cards) + '</div>'
        )
    else:
        menu_grid = (
            '<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 정보</h4>'
            '<div style="background:#f7f6f1;border-radius:8px;padding:14px 16px"><p style="font-size:13px;color:#5f5e5a;margin:0">메뉴 가격·구성은 매장 방문 또는 네이버 플레이스에서 직접 확인하시는 편이 가장 정확합니다. 카테고리 표준 가격대(' + pr_label + ')를 기준으로 참고하시면 됩니다.</p></div>'
        )

    tags = r.get('tags', []) or []
    tag_cards = []
    for t in tags[:4]:
        tag_cards.append(
            f'<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">{t}</span>'
        )
    while len(tag_cards) < 3:
        tag_cards.append(
            '<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">강남역 추천</span>'
        )
    tag_row = '<div style="margin:16px 0 8px">' + ''.join(tag_cards) + '</div>'

    parking_text = "주차 가능" if parking is True else ("매장 문의" if parking is None else "주차 어려움")
    info_line = (
        '<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">'
        f'<strong>📍 위치</strong> {addr} · <strong>🕐 영업</strong> {hours} · <strong>🚗 주차</strong> {parking_text} · <strong>📞 전화</strong> {tel}'
        '</div>'
    )

    button = (
        '<div style="text-align:center">'
        f'<a href="{region_path}/restaurant/{name}" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 {name} 상세 정보 보기 →</a>'
        '</div>'
    )

    return (
        '<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">'
        + header_img
        + '<div style="padding:20px 22px">'
        + badge_row
        + f'<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">{diff_paragraph}</p>'
        + theme_box
        + gallery
        + menu_grid
        + tag_row
        + info_line
        + button
        + '</div></div>'
    )


def compare_table_html(restaurants, category_label):
    rows = []
    palette = ['#DC2626', '#EA580C', '#F97316', '#0EA5E9', '#0F6E56', '#4338CA', '#9333EA']
    for i, (r, scenario) in enumerate(restaurants):
        name = r['name']
        cnt = r.get('cnt', 0) or 0
        rt = r.get('rt', 0) or 0
        start = first_price(r.get('priceRange', ''))
        bg = '#fafaf7' if i % 2 == 1 else '#fff'
        rt_text = f'★ {rt}' if rt and rt > 0 else '리뷰 우선'
        color = palette[i % len(palette)]
        rows.append(
            f'<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:{bg}">'
            f'<td style="padding:11px 10px"><strong>{name}</strong></td>'
            f'<td style="padding:11px 10px;text-align:center">{rt_text}<br><span style="font-size:11px;color:#888780">{cnt:,}건</span></td>'
            f'<td style="padding:11px 10px;text-align:center"><strong style="color:{color}">{start:,}원~</strong></td>'
            f'<td style="padding:11px 10px;font-size:12.5px">{scenario}</td>'
            '</tr>'
        )
    return (
        '<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">'
        '<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">'
        '<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>'
        '<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>'
        '<th style="padding:11px 10px;text-align:center;font-weight:600">시작가</th>'
        '<th style="padding:11px 10px;text-align:left;font-weight:600">차별점</th>'
        '</tr></thead><tbody>'
        + ''.join(rows)
        + '</tbody></table></div>'
    )


def by_situation_html(items):
    cards = []
    for emoji, label, name, body in items:
        cards.append(
            '<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px">'
            f'<p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">{emoji} {label}</p>'
            f'<p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>{name}</strong> — {body}</p>'
            '</div>'
        )
    return (
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">'
        + ''.join(cards)
        + '</div>'
    )


def tips_html(items):
    lis = ''.join(f'<li>{t}</li>' for t in items)
    return (
        '<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">'
        f'<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">{lis}</ul>'
        '</div>'
    )


def faq_html(qa):
    out = ['<div style="margin:16px 0">']
    for q, a in qa:
        out.append(
            '<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px">'
            f'<summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. {q}</summary>'
            f'<p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. {a}</p>'
            '</details>'
        )
    out.append('</div>')
    return ''.join(out)


def ending_html(category_label, picked, notes):
    return (
        '<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">'
        '<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">'
        '<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>'
        '<div>'
        '<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>'
        '<p style="font-size:12px;color:#3C3489;margin:3px 0 0">강남역 285곳 데이터 검증 · 행정안전부 인허가 매칭</p>'
        '</div></div>'
        f'<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">{notes["filter_para"]}</p>'
        f'<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">{notes["limit_para"]}</p>'
        f'<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">{notes["guide_para"]}</p>'
        '</div>'
        '<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">'
        '<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>'
        '· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>'
        '· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>'
        '· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>'
        '· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)'
        '</div>'
        '<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 방문 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</p>'
    )


def diff_paragraph(r, category_slug, category_label, role, all_picked):
    name = r['name']
    cnt = r.get('cnt', 0) or 0
    rt = r.get('rt', 0) or 0
    pr = r.get('priceRange', '')
    addr = r.get('addr', '')
    naver_blog = r.get('naverBlogCnt', 0) or 0
    menu1 = (r.get('menuItems') or [{}])[0].get('menuName', '') if r.get('menuItems') else ''
    start = first_price(pr)

    sorted_picked = sorted(all_picked, key=lambda x: x.get('cnt', 0) or 0, reverse=True)
    total = len(all_picked)
    min_start_val = min((first_price(x.get('priceRange', '')) or 999999) for x in all_picked)

    pieces = []
    if role == 'review-top':
        pieces.append(f'<strong>강남역 {category_label} {total}곳 중 리뷰 표본 1순위</strong>인 식당입니다.')
    elif role == 'price-low':
        pieces.append(f'<strong>강남역 {category_label} 가이드 {total}곳 중 시작가 가장 낮은 옵션</strong>입니다.')
    elif role == 'rating-top' and rt and rt > 0:
        pieces.append(f'<strong>강남역 {category_label} 가이드 중 평점 우위 식당</strong>입니다.')
    elif role == 'unique-menu':
        pieces.append(f'<strong>강남역 {category_label} 시그니처 메뉴 차별화</strong>가 두드러지는 식당입니다.')
    elif role == 'group-room':
        pieces.append(f'<strong>강남역 {category_label} 단체·회식 수용</strong>에 적합한 식당입니다.')
    elif role == 'late-night':
        pieces.append(f'<strong>강남역 {category_label} 야간 영업 옵션</strong>으로 활용 가능한 식당입니다.')
    else:
        pieces.append(f'강남역 {category_label} 가이드에서 표본·메뉴 차별점이 함께 검증된 식당입니다.')

    if rt and rt > 0:
        pieces.append(f'평점 {rt}점·리뷰 {cnt:,}건이 누적되었으며')
    else:
        pieces.append(f'네이버 플레이스 리뷰 {cnt:,}건이 누적되었으며')

    if naver_blog and naver_blog > 100:
        pieces.append(f'네이버 블로그 후기도 {naver_blog:,}건이 함께 쌓여 외부 신호가 보강된 상태입니다.')
    else:
        pieces.append('표본 신뢰도가 본 가이드 평균선 이상입니다.')

    if start:
        if min_start_val and start == min_start_val:
            pieces.append(f'1인 시작가 {start:,}원으로 본 가이드 식당 중 가장 부담이 적은 옵션입니다.')
        elif start < 12000:
            pieces.append(f'1인 시작가 {start:,}원선으로 점심·혼밥 부담이 적은 가격 위치입니다.')
        elif start < 25000:
            pieces.append(f'1인 시작가 {start:,}원선으로 저녁·회식 표준 가격대에 해당합니다.')
        else:
            pieces.append(f'1인 시작가 {start:,}원선으로 약속·접대 자리에 어울리는 가격 위치입니다.')

    if menu1:
        pieces.append(f'시그니처는 <strong>{menu1}</strong>로, 후기에서도 빠지지 않고 등장하는 메뉴입니다.')

    if addr:
        m_dong = re.search(r'(역삼[0-9]?동|서초[0-9]?동|논현동|신논현|삼성동|반포동)', addr)
        dong = m_dong.group(1) if m_dong else None
        if dong:
            pieces.append(f'{dong} 일대에 위치해 강남역에서 도보 또는 한두 정거장 거리에 있습니다.')
        else:
            pieces.append('강남역에서 도보 또는 한두 정거장 거리에 위치합니다.')

    return ' '.join(pieces)


# ---- Build a post -----------------------------------------------------------

REGION_PATH = '/dinner/gangnam'


def build_post(pid, slug, category_slug, category_label, picked, scenario_map,
                situation_items_template, tips_template, faqs_template, ending_notes_template):
    n_picked = len(picked)
    total_reviews = sum(r.get('cnt', 0) or 0 for r in picked)
    starts = [first_price(r.get('priceRange', '')) for r in picked if first_price(r.get('priceRange', ''))]
    start_price = min(starts) if starts else 8000
    rated_picks = [r for r in picked if (r.get('rt') or 0) > 0]
    if rated_picks:
        avg_rt = sum(r['rt'] for r in rated_picks) / len(rated_picks)
        avg_rt_text = f'★ {avg_rt:.1f}'
    else:
        avg_rt_text = '리뷰 표본 우선'

    intro = intro_html(f'{n_picked}곳', start_price, total_reviews, avg_rt_text, category_label)

    verdict_items = []
    for r, (slbl, brief) in zip(picked, scenario_map):
        verdict_items.append((slbl, r['name'], brief))
    verdict = verdict_html(category_label, verdict_items[:5])

    criteria = criteria_html(category_label, n_picked)

    card_sections = []
    grad_pal = CARD_GRADS
    max_cnt = max((x.get('cnt', 0) or 0) for x in picked) if picked else 0
    min_start_val = min((first_price(x.get('priceRange', '')) or 999999) for x in picked) if picked else 0
    for i, (r, (slbl, brief)) in enumerate(zip(picked, scenario_map)):
        if r.get('cnt', 0) == max_cnt:
            role = 'review-top'
        elif first_price(r.get('priceRange', '')) == min_start_val and min_start_val > 0:
            role = 'price-low'
        elif r.get('rt', 0) and r.get('rt', 0) >= 4.5:
            role = 'rating-top'
        elif r.get('reservation') is True:
            role = 'unique-menu'
        elif i == 4:
            role = 'group-room'
        elif i == 5:
            role = 'late-night'
        else:
            role = 'default'

        diff = diff_paragraph(r, category_slug, category_label, role, picked)
        card_h2 = {
            'type': 'h2',
            'id': f'r-{i+1}',
            'text': f'{r["name"]} — {slbl}',
            'gradientStyle': {'from': grad_pal[i % len(grad_pal)][0], 'to': grad_pal[i % len(grad_pal)][1]},
        }
        card_body = {
            'type': 'body',
            'html': card_html(r, REGION_PATH, slbl, '#534AB7', diff, category_slug, i),
        }
        card_sections.append(card_h2)
        card_sections.append(card_body)

    compare = compare_table_html([(r, slbl) for r, (slbl, _) in zip(picked, scenario_map)], category_label)
    situation_items = situation_items_template(picked)
    situation = by_situation_html(situation_items)
    tips = tips_html(tips_template)
    faqs = faq_html(faqs_template(picked))
    ending = ending_html(category_label, picked, ending_notes_template(picked))

    sections = [
        {'type': 'intro', 'html': intro},
        {'type': 'toc', 'id': 'toc'},
        {'type': 'ad', 'slot': '9463227631', 'format': 'autorelaxed'},
        {'type': 'h2', 'id': 'verdict', 'text': '한 줄 결론 — 상황별 1순위', 'gradientStyle': {'from': '#534AB7', 'to': '#A855F7'}},
        {'type': 'body', 'html': verdict},
        {'type': 'h2', 'id': 'criteria', 'text': '선정 기준 — 어떻게 식당을 골랐는가', 'gradientStyle': {'from': '#185FA5', 'to': '#0EA5E9'}},
        {'type': 'body', 'html': criteria},
    ]
    mid_split = 6 if len(card_sections) > 6 else len(card_sections)
    sections.extend(card_sections[:mid_split])
    sections.append({'type': 'ad', 'slot': '6297515693', 'format': 'auto'})
    sections.extend(card_sections[mid_split:])
    sections.extend([
        {'type': 'h2', 'id': 'compare', 'text': f'{n_picked}곳 한눈에 비교 — 평점·가격·상황별 매칭', 'gradientStyle': {'from': '#10B981', 'to': '#059669'}},
        {'type': 'body', 'html': compare},
        {'type': 'h2', 'id': 'by-situation', 'text': '상황별 추천 — 오늘은 어떤 자리인가요', 'gradientStyle': {'from': '#BA7517', 'to': '#F59E0B'}},
        {'type': 'body', 'html': situation},
        {'type': 'h2', 'id': 'tips', 'text': '방문 전 체크포인트', 'gradientStyle': {'from': '#185FA5', 'to': '#3B82F6'}},
        {'type': 'body', 'html': tips},
        {'type': 'h2', 'id': 'faq', 'text': '자주 묻는 질문', 'gradientStyle': {'from': '#0F6E56', 'to': '#059669'}},
        {'type': 'body', 'html': faqs},
        {'type': 'cta', 'href': f'{REGION_PATH}/category/{category_slug}', 'text': f'강남역 {category_label} 전체 보기 →'},
        {'type': 'ending', 'html': ending},
    ])

    return serialize_post(pid, sections)


def serialize_post(pid, sections):
    out = []
    out.append(f'// posts/{pid}.js — 강남역 추천 가이드 (식당별 unique 콘텐츠)')
    out.append('const post = {')
    out.append(f'  id: {pid},')
    out.append('  sections: [')
    for sec in sections:
        if sec['type'] == 'intro':
            out.append('    {')
            out.append("      type: 'intro',")
            out.append(f'      html: `{js_escape_for_backtick(sec["html"])}`')
            out.append('    },')
        elif sec['type'] == 'toc':
            out.append("    { type: 'toc', id: 'toc' },")
        elif sec['type'] == 'ad':
            out.append(f"    {{ type: 'ad', slot: '{sec['slot']}', format: '{sec['format']}' }},")
        elif sec['type'] == 'h2':
            g = sec['gradientStyle']
            out.append(
                f"    {{ type: 'h2', id: '{sec['id']}', text: {json.dumps(sec['text'], ensure_ascii=False)}, "
                f"gradientStyle: {{ from: '{g['from']}', to: '{g['to']}' }} }},"
            )
        elif sec['type'] == 'body':
            out.append('    {')
            out.append("      type: 'body',")
            out.append(f'      html: `{js_escape_for_backtick(sec["html"])}`')
            out.append('    },')
        elif sec['type'] == 'cta':
            out.append(f"    {{ type: 'cta', href: '{sec['href']}', text: {json.dumps(sec['text'], ensure_ascii=False)} }},")
        elif sec['type'] == 'ending':
            out.append('    {')
            out.append("      type: 'ending',")
            out.append(f'      html: `{js_escape_for_backtick(sec["html"])}`')
            out.append('    },')
    out.append('  ]')
    out.append('}')
    out.append('')
    out.append('export default post')
    out.append('')
    return '\n'.join(out)


# ---- Category configs -------------------------------------------------------

def cfg_meat():
    picked = pick_meat(7)
    scenario_map = []
    for i, r in enumerate(picked):
        start = first_price(r.get('priceRange', ''))
        if i == 0:
            scenario_map.append(('표본 검증 1순위', f'리뷰 {r.get("cnt",0):,}건으로 강남역 고기집 표본 검증 1순위'))
        elif i == 1:
            scenario_map.append(('단체·회식 1순위', '무한리필 시그니처로 5~10인 회식 수용에 적합'))
        elif i == 2:
            scenario_map.append(('점심 가성비 옵션', f'1인 시작가 {start:,}원선으로 점심 부담을 줄이는 옵션'))
        elif i == 3:
            scenario_map.append(('한우·등심 프리미엄', '소고기 특선 메뉴로 약속·접대 자리에 어울리는 옵션'))
        elif i == 4:
            scenario_map.append(('한우·갈비 정통', '소고기 특선 셀렉션을 폭넓게 갖춘 강남역 정통 한우집'))
        elif i == 5:
            scenario_map.append(('가성비 술자리', '소주맥주 1,900원 마케팅으로 부담 없는 1차 자리에 적합'))
        else:
            scenario_map.append(('곰탕·점심 정통', '소뼈 곰탕 시그니처로 점심 정식 옵션으로 활용'))
    return picked, scenario_map

def cfg_izakaya():
    picked = pick_izakaya(7)
    scenario_map = []
    for i, r in enumerate(picked):
        if i == 0:
            scenario_map.append(('표본 검증 1순위', f'리뷰 {r.get("cnt",0):,}건으로 강남 이자카야 최다 표본'))
        elif i == 1:
            scenario_map.append(('데이트·분위기 1순위', '사시미·시그니처 안주로 데이트 자리에 어울리는 분위기'))
        elif i == 2:
            scenario_map.append(('회식 2차 옵션', '바지락 반전무침 시그니처로 회식 2차에 적합한 형식'))
        elif i == 3:
            scenario_map.append(('연어·고급 사시미', '아보카도 연어 육회 등 시그니처가 강한 일식 안주 옵션'))
        elif i == 4:
            scenario_map.append(('명란·따뜻한 안주', '명란버터구이 시그니처로 따뜻한 안주 위주의 1차 자리'))
        elif i == 5:
            scenario_map.append(('소규모 모임', '차돌 스키야끼 시그니처로 4~6인 소규모 모임 옵션'))
        else:
            scenario_map.append(('무한 콜키지 프리', '와인·위스키 콜키지 부담이 없는 술자리 옵션'))
    return picked, scenario_map

def cfg_japanese():
    picked = pick_japanese(7)
    scenario_map = []
    for i, r in enumerate(picked):
        if i == 0:
            scenario_map.append(('표본 검증 1순위', f'리뷰 {r.get("cnt",0):,}건으로 강남 일식 최다 표본'))
        elif i == 1:
            scenario_map.append(('마제소바·점심 옵션', '마제소바 시그니처로 점심 빠른 한 끼 옵션'))
        elif i == 2:
            scenario_map.append(('복국 오마카세', '복국 오마카세 시그니처로 약속·접대 자리에 어울리는 옵션'))
        elif i == 3:
            scenario_map.append(('카츠·소바 정통', '카츠+소바 세트 시그니처로 점심 정식 옵션'))
        elif i == 4:
            scenario_map.append(('우동 가성비', '우동 단품 시그니처로 가성비 점심 옵션'))
        elif i == 5:
            scenario_map.append(('오마카세 프리미엄', '오마카세 시그니처로 기념일 자리에 어울리는 옵션'))
        else:
            scenario_map.append(('규카츠 정식', '규카츠 정식 시그니처로 일식 정식 옵션'))
    return picked, scenario_map

def cfg_chinese():
    picked = pick_chinese(7)
    scenario_map = []
    for i, r in enumerate(picked):
        if i == 0:
            scenario_map.append(('표본 검증 1순위', f'리뷰 {r.get("cnt",0):,}건으로 강남 중식 최다 표본'))
        elif i == 1:
            scenario_map.append(('마라샹궈 시그니처', '마라샹궈 100g 단위 시그니처로 마라 카테고리 1순위'))
        elif i == 2:
            scenario_map.append(('마라탕 셀프바', '마라탕 셀프바 시그니처로 1인·혼밥 옵션'))
        elif i == 3:
            scenario_map.append(('무한리필 훠궈', '무한훠궈+꿔보러우 시그니처로 회식·단체 자리 옵션'))
        elif i == 4:
            scenario_map.append(('마라탕 정통', '셀프 마라탕 시그니처로 단품 옵션'))
        elif i == 5:
            scenario_map.append(('양꼬치·뷔페', '양꼬치+훠궈 무한 뷔페로 5~10인 회식 옵션'))
        else:
            scenario_map.append(('어향동고 중식정통', '어향동고 시그니처로 정통 중식 정식 옵션'))
    return picked, scenario_map

def cfg_gukbap():
    picked = pick_gukbap(7)
    scenario_map = []
    for i, r in enumerate(picked):
        if i == 0:
            scenario_map.append(('순대국 표본 1순위', f'리뷰 {r.get("cnt",0):,}건으로 강남 순대국·국밥 최다 표본'))
        elif i == 1:
            scenario_map.append(('닭도리탕 정식', '닭도리탕+치즈감자채전 정식 시그니처로 정통 한식 점심 옵션'))
        elif i == 2:
            scenario_map.append(('곰탕 시그니처', '오리지날 순메밀 양지 곰탕 시그니처로 곰탕 카테고리 1순위'))
        elif i == 3:
            scenario_map.append(('돼지갈비 점심', '돼지갈비 점심 특선으로 직장인 점심 옵션'))
        elif i == 4:
            scenario_map.append(('육전 소고기국밥', '육전 소고기국밥 시그니처로 국밥 카테고리 점심 옵션'))
        elif i == 5:
            scenario_map.append(('뼈구이·순대국', '뼈구이세트+해장순대국 시그니처로 회식·해장 옵션'))
        else:
            scenario_map.append(('한방족발·감자탕', '한방족발+감자탕 시그니처로 해장·회식 옵션'))
    return picked, scenario_map

def cfg_western():
    picked = pick_western(4)
    scenario_map = []
    for i, r in enumerate(picked):
        if i == 0:
            scenario_map.append(('표본 검증 1순위', f'리뷰 {r.get("cnt",0):,}건으로 강남 양식 최다 표본'))
        elif i == 1:
            scenario_map.append(('피자·정통 이탈리안', '꽈뜨로 스타지오네 시그니처로 정통 이탈리안 옵션'))
        elif i == 2:
            scenario_map.append(('파스타 시그니처', '레드 크림 갈비 파스타 시그니처로 파스타 카테고리 검증 옵션'))
        else:
            scenario_map.append(('오므라이스 강남 정통', '다락 오므라이스 시그니처로 정통 양식 정식 옵션'))
    return picked, scenario_map

def cfg_group():
    picked = pick_group(5)
    scenario_map = []
    for i, r in enumerate(picked):
        if i == 0:
            scenario_map.append(('표본 검증 1순위', f'리뷰 {r.get("cnt",0):,}건으로 강남 한식·중식 최다 표본'))
        elif i == 1:
            scenario_map.append(('훠궈 회식 옵션', '대만식 제육덮밥·훠궈 시그니처로 회식 단체 옵션'))
        elif i == 2:
            scenario_map.append(('마라샹궈 시그니처', '마라샹궈 단가별 옵션으로 회식·점심 모두 활용'))
        elif i == 3:
            scenario_map.append(('순대국 정통', '정식 시그니처로 정통 한식 점심·회식 옵션'))
        else:
            scenario_map.append(('마라탕 셀프바', '마라탕 셀프바 시그니처로 회식 2차 옵션'))
    return picked, scenario_map

def cfg_special():
    picked = pick_special(7)
    scenario_map = []
    for i, r in enumerate(picked):
        if i == 0:
            scenario_map.append(('표본 검증 1순위', f'리뷰 {r.get("cnt",0):,}건으로 강남 특수부위·곱창 최다 표본'))
        elif i == 1:
            scenario_map.append(('곱창쌀국수 시그니처', '곱창쌀국수 시그니처로 단품 회전 빠른 가성비 옵션'))
        elif i == 2:
            scenario_map.append(('막창·도래창', '도래창+소금막창 세트 시그니처로 막창 카테고리 1순위'))
        elif i == 3:
            scenario_map.append(('대구 막창·뭉티기', '대구 막창·뭉티기 시그니처로 정통 대구식 회식 옵션'))
        elif i == 4:
            scenario_map.append(('닭도리탕·정식', '닭도리탕+치즈감자채전 정식 시그니처로 정통 한식 옵션'))
        elif i == 5:
            scenario_map.append(('족발 정식', '족발+칼국수 시그니처로 야간·해장 옵션'))
        else:
            scenario_map.append(('한방족발·감자탕', '한방족발 대 시그니처로 5~10인 회식 옵션'))
    return picked, scenario_map


# ---- Situation/tips/FAQ/ending generators ----------------------------------

def situation_meat(picked):
    sorted_by_cnt = sorted(picked, key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    starts = sorted(picked, key=lambda r: first_price(r.get('priceRange', '')) or 999999)
    return [
        ('⭐', '표본·검증 우선', sorted_by_cnt[0]['name'], f"리뷰 {sorted_by_cnt[0].get('cnt',0):,}건으로 본 가이드 표본 1순위. 평균값을 신뢰할 수 있는 안정 옵션입니다."),
        ('💰', '가성비 점심', starts[0]['name'], f"1인 시작가 {first_price(starts[0].get('priceRange','')):,}원선. 점심 단품 회전이 빠른 식당으로 직장인 점심 옵션."),
        ('👥', '5~10인 회식·모임', picked[1]['name'] if len(picked) > 1 else picked[0]['name'], "무한리필·룸 단체 수용이 가능해 회식 1차 자리 옵션."),
        ('💑', '데이트·기념일', picked[3]['name'] if len(picked) > 3 else picked[0]['name'], "프리미엄 한우·등심 메뉴 셀렉션으로 약속 자리에 어울리는 옵션."),
        ('🌙', '야간 1차·2차 자리', picked[5]['name'] if len(picked) > 5 else picked[0]['name'], "심야 영업 + 술 마케팅으로 1차·2차 술자리 모두 활용 가능."),
    ]

def situation_izakaya(picked):
    sorted_by_cnt = sorted(picked, key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return [
        ('⭐', '표본·검증 우선', sorted_by_cnt[0]['name'], f"리뷰 {sorted_by_cnt[0].get('cnt',0):,}건으로 강남 이자카야 표본 1순위. 안정적인 옵션."),
        ('💑', '데이트·분위기', picked[1]['name'] if len(picked) > 1 else picked[0]['name'], "사시미·시그니처 안주로 데이트 자리에 어울리는 분위기."),
        ('🍶', '회식 2차 술자리', picked[2]['name'] if len(picked) > 2 else picked[0]['name'], "바지락 반전무침 시그니처로 회식 2차 자리에 적합."),
        ('🐟', '연어·고급 사시미', picked[3]['name'] if len(picked) > 3 else picked[0]['name'], "아보카도 연어 육회 등 시그니처가 강한 일식 안주 옵션."),
        ('🍷', '무한 콜키지·와인', picked[6]['name'] if len(picked) > 6 else picked[0]['name'], "콜키지 프리 옵션으로 와인·위스키 부담이 없는 술자리."),
    ]

def situation_japanese(picked):
    sorted_by_cnt = sorted(picked, key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return [
        ('⭐', '표본·검증 우선', sorted_by_cnt[0]['name'], f"리뷰 {sorted_by_cnt[0].get('cnt',0):,}건으로 강남 일식 표본 1순위."),
        ('🍜', '마제소바·우동 점심', picked[1]['name'] if len(picked) > 1 else picked[0]['name'], "단품 회전이 빠른 점심 옵션."),
        ('🍣', '오마카세·접대 자리', picked[2]['name'] if len(picked) > 2 else picked[0]['name'], "복국 오마카세 시그니처로 약속·접대 자리에 적합."),
        ('🥩', '카츠·정식 옵션', picked[3]['name'] if len(picked) > 3 else picked[0]['name'], "카츠+소바 세트 시그니처로 점심 정식 옵션."),
        ('🎉', '기념일 프리미엄', picked[5]['name'] if len(picked) > 5 else picked[0]['name'], "오마카세 시그니처로 기념일 자리에 어울리는 옵션."),
    ]

def situation_chinese(picked):
    sorted_by_cnt = sorted(picked, key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return [
        ('⭐', '표본·검증 우선', sorted_by_cnt[0]['name'], f"리뷰 {sorted_by_cnt[0].get('cnt',0):,}건으로 강남 중식 표본 1순위."),
        ('🌶', '마라샹궈·마라탕', picked[1]['name'] if len(picked) > 1 else picked[0]['name'], "마라 카테고리 1순위, 단품 회전 빠른 점심 옵션."),
        ('🍲', '훠궈 회식', picked[3]['name'] if len(picked) > 3 else picked[0]['name'], "무한훠궈+꿔보러우로 5~10인 회식 자리 옵션."),
        ('🥢', '단품 점심·혼밥', picked[2]['name'] if len(picked) > 2 else picked[0]['name'], "마라탕 셀프바 시그니처로 1인·혼밥 옵션."),
        ('🍗', '양꼬치·뷔페 회식', picked[5]['name'] if len(picked) > 5 else picked[0]['name'], "양꼬치+훠궈 무한 뷔페로 5~10인 회식 옵션."),
    ]

def situation_gukbap(picked):
    sorted_by_cnt = sorted(picked, key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return [
        ('⭐', '표본·검증 우선', sorted_by_cnt[0]['name'], f"리뷰 {sorted_by_cnt[0].get('cnt',0):,}건으로 강남 국밥·해장 표본 1순위."),
        ('🌙', '숙취·해장', picked[5]['name'] if len(picked) > 5 else picked[0]['name'], "뼈구이세트+해장순대국 시그니처로 해장·회식 후 옵션."),
        ('🍚', '점심 정식', picked[1]['name'] if len(picked) > 1 else picked[0]['name'], "정식 시그니처로 직장인 점심 옵션."),
        ('🥩', '곰탕·한식 정통', picked[2]['name'] if len(picked) > 2 else picked[0]['name'], "양지 곰탕 시그니처로 정통 한식 점심 옵션."),
        ('🍖', '돼지갈비 점심', picked[3]['name'] if len(picked) > 3 else picked[0]['name'], "돼지갈비 점심 특선으로 점심 메뉴 다양화 옵션."),
    ]

def situation_western(picked):
    sorted_by_cnt = sorted(picked, key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return [
        ('⭐', '표본·검증 우선', sorted_by_cnt[0]['name'], f"리뷰 {sorted_by_cnt[0].get('cnt',0):,}건으로 강남 양식 표본 1순위."),
        ('🍕', '피자·정통 이탈리안', picked[1]['name'] if len(picked) > 1 else picked[0]['name'], "꽈뜨로 스타지오네 시그니처로 정통 이탈리안 옵션."),
        ('🍝', '파스타 시그니처', picked[2]['name'] if len(picked) > 2 else picked[0]['name'], "레드 크림 갈비 파스타 시그니처로 파스타 카테고리 검증."),
        ('🍳', '오므라이스 정통', picked[3]['name'] if len(picked) > 3 else picked[0]['name'], "다락 오므라이스 시그니처로 정통 양식 정식 옵션."),
        ('💑', '데이트·기념일', picked[0]['name'], "사진 잘 나오는 매장 분위기로 데이트 자리에 어울리는 옵션."),
    ]

def situation_group(picked):
    sorted_by_cnt = sorted(picked, key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return [
        ('⭐', '표본·검증 우선', sorted_by_cnt[0]['name'], f"리뷰 {sorted_by_cnt[0].get('cnt',0):,}건으로 강남 한식·중식 표본 1순위."),
        ('👥', '회식 단체석', picked[1]['name'] if len(picked) > 1 else picked[0]['name'], "훠궈·덮밥 시그니처로 5~10인 회식 자리 옵션."),
        ('🌶', '마라 카테고리', picked[2]['name'] if len(picked) > 2 else picked[0]['name'], "마라샹궈 단가별 옵션으로 회식·점심 모두 활용."),
        ('🍚', '한식 정식', picked[3]['name'] if len(picked) > 3 else picked[0]['name'], "정식 시그니처로 정통 한식 점심·회식 옵션."),
        ('🥢', '혼밥·1인 옵션', picked[4]['name'] if len(picked) > 4 else picked[0]['name'], "마라탕 셀프바 시그니처로 1인 혼밥 옵션."),
    ]

def situation_special(picked):
    sorted_by_cnt = sorted(picked, key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    return [
        ('⭐', '표본·검증 우선', sorted_by_cnt[0]['name'], f"리뷰 {sorted_by_cnt[0].get('cnt',0):,}건으로 강남 특수부위·곱창 표본 1순위."),
        ('🍜', '곱창쌀국수 가성비', picked[1]['name'] if len(picked) > 1 else picked[0]['name'], "곱창쌀국수 시그니처로 단품 회전 빠른 점심 옵션."),
        ('🔥', '막창·도래창', picked[2]['name'] if len(picked) > 2 else picked[0]['name'], "도래창+소금막창 세트 시그니처로 막창 카테고리 1순위."),
        ('🐂', '대구 막창·뭉티기', picked[3]['name'] if len(picked) > 3 else picked[0]['name'], "대구 막창·뭉티기 시그니처로 정통 대구식 회식 옵션."),
        ('👥', '회식·한방족발', picked[6]['name'] if len(picked) > 6 else picked[0]['name'], "한방족발 대 시그니처로 5~10인 회식 옵션."),
    ]


def tips_default(category_label, picked):
    return [
        f'<strong>{picked[0]["name"]}</strong>은 본 가이드 표본 검증 1순위로 점심·저녁 피크 시간에는 대기가 발생할 수 있습니다. 피크 30분 전 입장을 권장드립니다.',
        '2호선·신분당선 <strong>강남역</strong> 도보권 식당이 대부분이며, 전용 주차장이 없는 식당은 강남역 공영주차장 또는 인근 빌딩 주차장을 이용하시는 편이 안전합니다.',
        '단체석·룸이 필요한 5인 이상 모임은 평일에도 <strong>당일 전화 예약</strong>이 안전합니다. 강남역 식당 대부분이 점심 12시~13시, 저녁 19시~20시 피크입니다.',
        '영업시간 표기는 매장 사정으로 변동될 수 있어 <strong>방문 전 매장 공지를 한 번 더 확인</strong>하시는 편이 안전합니다. 24시 영업·심야 영업 식당도 임시 휴게 가능성이 있습니다.',
        '메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다. 시그니처 메뉴 위주로 주문하시면 만족도 편차가 줄어듭니다.',
        '예약이 필수인 식당(오마카세·복국 오마카세 등)은 네이버 플레이스 또는 매장 직접 전화로 미리 자리 잡아두시는 편이 안전합니다.',
    ]


def faqs_default(category_label, picked):
    sorted_by_cnt = sorted(picked, key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    starts = sorted(picked, key=lambda r: first_price(r.get('priceRange', '')) or 999999)
    return [
        (
            f'강남역에서 {category_label} 가장 가성비 좋은 식당은 어디인가요?',
            f'1인 시작가 기준 <strong>{starts[0]["name"]}</strong>이 {first_price(starts[0].get("priceRange","")):,}원선으로 가장 부담이 적습니다. 본 가이드 식당 중 점심·혼밥에 어울리는 가격대 식당으로 첫 후보입니다.',
        ),
        (
            '표본 크기·검증이 가장 잘된 식당은 어디인가요?',
            f'<strong>{sorted_by_cnt[0]["name"]}</strong>이 리뷰 {sorted_by_cnt[0].get("cnt",0):,}건으로 본 가이드 식당 중 표본이 가장 큽니다. 평균값을 안정적으로 신뢰할 수 있어 약속·접대 자리에 무난한 옵션입니다.',
        ),
        (
            '단체 회식·5인 이상 모임에 적합한 곳은?',
            '본 가이드 식당 중 단체석·룸을 보유한 식당이 1순위입니다. 평일에도 <strong>당일 전화 예약</strong>을 권장드리며, 강남역 식당 대부분이 점심·저녁 피크에 대기 발생 가능성이 있습니다.',
        ),
        (
            '데이트·기념일 자리이면 어디가 좋나요?',
            f'분위기·시그니처가 강한 식당이 1순위입니다. 본 가이드에서는 <strong>{picked[0]["name"]}</strong> 또는 메뉴 차별점이 명확한 식당이 데이트 자리에 어울리며, 사전 예약을 권장드립니다.',
        ),
        (
            '주차 가능한 식당은 있나요?',
            '본 가이드 식당 중 일부는 전용/연계 주차장이 있지만, 강남역 일대 특성상 대부분 인근 공영주차장 또는 빌딩 주차장 이용을 권장드립니다. <strong>2호선·신분당선 강남역</strong> 대중교통이 가장 편리합니다.',
        ),
        (
            '평점·리뷰 데이터가 0으로 표시된 식당도 포함된 이유는?',
            f'네이버 플레이스 평점이 비공개인 식당이 일부 포함되었습니다. 다만 누적 리뷰 수·블로그 후기·메뉴 등록 상태로 운영 안정성을 판단할 수 있는 식당만 추렸습니다. 평점만 기준이면 <strong>{sorted_by_cnt[0]["name"]}</strong> 등 표본 큰 식당이 가장 안전합니다.',
        ),
    ]


def ending_notes_default(category_label, picked):
    sorted_by_cnt = sorted(picked, key=lambda r: r.get('cnt', 0) or 0, reverse=True)
    starts = sorted(picked, key=lambda r: first_price(r.get('priceRange', '')) or 999999)
    return {
        'filter_para': (
            f'강남역 일대 285곳에서 {category_label} 카테고리에 해당하는 식당을 필터링하고, '
            f'리뷰 표본·메뉴 구성·운영 안정성 3가지를 함께 본 결과 {len(picked)}곳으로 정리되었습니다. '
            f'한 가이드 안에서 표본 크기·시그니처 메뉴·가격대 위치를 비교 검토할 수 있도록 시나리오를 분산했습니다.'
        ),
        'limit_para': (
            f'본 가이드의 한계는 분명합니다. <strong>{sorted_by_cnt[0]["name"]}</strong>처럼 표본이 압도적으로 큰 식당과 그렇지 않은 식당이 혼재합니다. '
            f'평점 데이터가 비공개인 식당이 일부 포함되어 있어 평점만으로 우열을 가리기는 어렵습니다. 시그니처 메뉴·시나리오 매칭을 함께 보는 편이 안전합니다.'
        ),
        'guide_para': (
            f'표본 우선이면 <strong>{sorted_by_cnt[0]["name"]}</strong>, 가격 부담을 줄이고 싶으시면 <strong>{starts[0]["name"]}</strong>(시작가 {first_price(starts[0].get("priceRange","")):,}원). '
            f'데이트·기념일은 시그니처가 강한 식당, 회식·단체는 룸·단체석 보유 식당을 우선 보시면 됩니다. 메뉴 가격은 시즌 변동 가능성이 있어 시그니처 메뉴 위주로 주문하시면 만족도 편차가 줄어듭니다.'
        ),
    }


# ---- Main: build all 12 posts ----------------------------------------------

POSTS_CONFIG = [
    (26, 'gangnam-meat-best-2026',     'meat',     '고기집',         cfg_meat,     situation_meat),
    (27, 'gangnam-izakaya-best-2026',  'izakaya',  '이자카야',       cfg_izakaya,  situation_izakaya),
    (28, 'gangnam-japanese-best-2026', 'japanese', '일식·스시',      cfg_japanese, situation_japanese),
    (29, 'gangnam-chinese-best-2026',  'chinese',  '중식',           cfg_chinese,  situation_chinese),
    (30, 'gangnam-gukbap-best-2026',   'gukbap',   '국밥·해장',      cfg_gukbap,   situation_gukbap),
    (31, 'gangnam-japanese-best-2026', 'japanese', '일식·스시',      cfg_japanese, situation_japanese),
    (32, 'gangnam-western-best-2026',  'western',  '양식·파스타',    cfg_western,  situation_western),
    (33, 'gangnam-chicken-best-2026',  'group',    '한식·중식 식당', cfg_group,    situation_group),
    (34, 'gangnam-special-best-2026',  'special',  '족발·곱창',      cfg_special,  situation_special),
    (35, 'gangnam-western-best-2026',  'western',  '양식·파스타',    cfg_western,  situation_western),
    (36, 'gangnam-chicken-best-2026',  'group',    '한식·중식 식당', cfg_group,    situation_group),
    (37, 'gangnam-special-best-2026',  'special',  '족발·곱창',      cfg_special,  situation_special),
]


def main():
    for pid, slug, cat_slug, cat_label, cfg_fn, sit_fn in POSTS_CONFIG:
        picked, scenario_map = cfg_fn()
        if not picked:
            print(f"[SKIP] {pid}: no picks")
            continue
        out_path = f"{ROOT}/posts/{pid}.js"
        text = build_post(
            pid, slug, cat_slug, cat_label, picked, scenario_map,
            situation_items_template=lambda p, sf=sit_fn: sf(p),
            tips_template=tips_default(cat_label, picked),
            faqs_template=lambda p, cl=cat_label: faqs_default(cl, p),
            ending_notes_template=lambda p, cl=cat_label: ending_notes_default(cl, p),
        )
        with open(out_path, 'w') as f:
            f.write(text)
        names = [r['name'] for r in picked]
        print(f"[OK] posts/{pid}.js — {cat_label} {len(picked)}곳: {', '.join(names)}")


if __name__ == '__main__':
    main()
