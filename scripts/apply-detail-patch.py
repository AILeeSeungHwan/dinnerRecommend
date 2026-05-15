#!/usr/bin/env python3
"""강남 PoC 패턴을 7개 지역 식당 상세 페이지에 일괄 적용

각 페이지에 적용되는 패치:
1) RestaurantInsights import 추가
2) similar 로직 4→3개 + 다양한 기준 + reason
3) EFFECT_POOL/EFFECT_POOL_FALLBACK/getEffects 함수 제거
4) `// 효능 콘텐츠` const effect = ... 제거
5) JSX 효능 섹션 제거
6) JSX 신규 섹션 통합 + 순서 재배치
7) h2 r.type → (r.cat[0] || r.type)
8) similar 비슷한 식당 카드 → SimilarRestaurantCard
9) FaqAccordion defaultOpenAll
10) data/{region}.js의 type 필드 정정 (cat[0]로)
"""
import re, os, sys, json

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

REGIONS = {
    'samseong':    {'page': 'pages/dinner/samseong/restaurant/[name].js',           'data': 'data/samseong.js',    'depth': 4, 'name': '삼성역'},
    'jamsil':      {'page': 'pages/dinner/jamsil/restaurant/[name].js',             'data': 'data/jamsil.js',      'depth': 4, 'name': '잠실'},
    'pangyo':      {'page': 'pages/pangyo/restaurant/[name].js',                    'data': 'data/pangyo.js',      'depth': 3, 'name': '판교'},
    'suji':        {'page': 'pages/suji/restaurant/[name].js',                      'data': 'data/suji.js',        'depth': 3, 'name': '수지'},
    'yeongtong':   {'page': 'pages/samsungElectronics/yeongtong/restaurant/[name].js',  'data': 'data/yeongtong.js',   'depth': 4, 'name': '영통'},
    'mangpo':      {'page': 'pages/samsungElectronics/mangpo/restaurant/[name].js',     'data': 'data/mangpo.js',      'depth': 4, 'name': '망포'},
    'yeongtongGu': {'page': 'pages/samsungElectronics/yeongtongGu/restaurant/[name].js','data': 'data/yeongtongGu.js', 'depth': 4, 'name': '영통구청'},
}


def patch_page(region, info):
    p = os.path.join(BASE, info['page'])
    with open(p) as f: t = f.read()
    depth_dots = '../' * info['depth']
    region_name = info['name']

    # 식당 수 자동 산출
    with open(os.path.join(BASE, info['data'])) as f: dt = f.read()
    count = len(re.findall(r'"naverPlaceId"', dt)) or dt.count('"name":')

    # ── (1) import 추가 ─────────────────────────────────────────────────
    if 'RestaurantInsights' not in t:
        t = t.replace(
            f"import FaqAccordion from '{depth_dots}components/FaqAccordion'\n",
            f"import FaqAccordion from '{depth_dots}components/FaqAccordion'\n"
            f"import {{ VerdictBox, OperatorNote, AudienceCards, VisitChecklist, PostMidCategoryBanner, SimilarRestaurantCard }} from '{depth_dots}components/RestaurantInsights'\n",
            1,
        )

    # ── (2) similar 로직 교체 ───────────────────────────────────────────
    similar_pattern = re.compile(
        r"  const similar = restaurants\n"
        r"    \.filter\(x => x\.name !== r\.name && Array\.isArray\(x\.cat\) && Array\.isArray\(r\.cat\) && x\.cat\.some\(c => r\.cat\.includes\(c\)\)\)\n"
        r"    \.sort\(\(a, b\) => b\.rt - a\.rt\)\n"
        r"    \.slice\(0, 4\)\n"
        r"    \.map\(x => \(\{[^}]*\}\)\)\n",
        re.MULTILINE
    )
    new_similar = '''  const sameCat = restaurants.filter(x =>
    x.name !== r.name
    && Array.isArray(x.cat) && Array.isArray(r.cat)
    && x.cat.some(c => r.cat.includes(c))
    && (x.rt > 0 || x.cnt > 0)
  )
  const refLo = parseInt((r.priceRange || '').split('~')[0]) || 0
  const distSq = (a, b) => Math.pow((a.lat||0)-(b.lat||0), 2) + Math.pow((a.lng||0)-(b.lng||0), 2)
  const picks = []
  const used = new Set()
  const best = [...sameCat].sort((a,b) => (b.rt - a.rt) || (b.cnt - a.cnt))[0]
  if (best) { picks.push({ ...best, reason: `평점 ${best.rt}점·리뷰 ${(best.cnt||0).toLocaleString()}건 — 카테고리 상위권` }); used.add(best.name) }
  if (refLo) {
    const pm = sameCat
      .filter(x => !used.has(x.name) && x.priceRange)
      .map(x => { const lo = parseInt(x.priceRange.split('~')[0]) || 0; return { x, diff: Math.abs(lo - refLo) } })
      .filter(o => o.diff <= Math.max(refLo * 0.4, 8000))
      .sort((a,b) => a.diff - b.diff)[0]
    if (pm) {
      const lo = parseInt(pm.x.priceRange.split('~')[0])
      const hi = parseInt(pm.x.priceRange.split('~')[1]) || lo
      picks.push({ ...pm.x, reason: `비슷한 가격대 (1인 ${lo.toLocaleString()}~${hi.toLocaleString()}원)` })
      used.add(pm.x.name)
    }
  }
  if (r.lat && r.lng) {
    const near = sameCat.filter(x => !used.has(x.name) && x.lat && x.lng).sort((a,b) => distSq(a, r) - distSq(b, r))[0]
    if (near) { picks.push({ ...near, reason: '도보 이동 가능한 가까운 거리' }); used.add(near.name) }
  }
  if (picks.length < 3) {
    for (const x of [...sameCat].sort((a,b) => b.rt - a.rt)) {
      if (used.has(x.name)) continue
      picks.push({ ...x, reason: `평점 ${x.rt}점, 같은 카테고리 추천` })
      used.add(x.name)
      if (picks.length >= 3) break
    }
  }
  const similar = picks.slice(0, 3).map(x => ({ name: x.name, type: x.type, e: x.e, rt: x.rt, priceRange: x.priceRange || null, imageUrl: x.imageUrl || '', cat: Array.isArray(x.cat) ? x.cat : [], reason: x.reason || '' }))
'''
    t, n_sim = similar_pattern.subn(new_similar, t, count=1)
    if n_sim == 0 and '.slice(0, 4)' in t:
        print(f'  ⚠ {region}: similar 정규식 미일치 — 수동 확인 필요')

    # ── (3) EFFECT_POOL ~ getEffects 함수 통째 제거 ────────────────────
    if 'EFFECT_POOL' in t:
        m_start = t.find('// ── 카테고리별 효능 풀')
        if m_start >= 0:
            # getEffects 함수 끝 (return { ... }) 다음 } 까지 스킵
            m_end_match = re.search(r'function getEffects\(r\) \{[\s\S]*?\n\}\n', t[m_start:])
            if m_end_match:
                end_pos = m_start + m_end_match.end()
                t = t[:m_start] + t[end_pos:]

    # ── (4) 효능 콘텐츠 변수 제거 ──────────────────────────────────────
    t = re.sub(r'\n  // 효능 콘텐츠\n  const effect = getEffects\(r\)\n', '\n', t, count=1)

    # ── (5) JSX 효능 섹션 제거: '{/* 효능 섹션' ~ '))}\n            </ul>\n          </>\n        )}' ─────
    # 패턴: {/* 효능 섹션 (유머) */}\n        {effect && (\n          <>\n        <h2 ...>🔬 ...\n            <p>...\n            <ul>\n              {effect.items.map...}\n            </ul>\n          </>\n        )}
    t = re.sub(
        r"        \{/\* 효능 섹션 \(유머\) \*/\}\n"
        r"        \{effect && \(\n"
        r"          <>\n"
        r"        <h2 style=\{h2style\}>🔬 \{effect\.title\}</h2>\n"
        r"            <p style=\{pstyle\}>\n"
        r"              과학적 근거는 없지만[^<]*</p>\n"
        r"            <ul style=\{ulstyle\}>\n"
        r"              \{effect\.items\.map\(\(item, i\) => \(\n"
        r"                <li key=\{i\} style=\{listyle\}>\{item\}</li>\n"
        r"              \)\)\}\n"
        r"            </ul>\n"
        r"          </>\n"
        r"        \)\}\n",
        '', t, count=1
    )

    # ── (6) JSX 신규 컴포넌트 통합 ──────────────────────────────────────
    # 6-1) GovBadges 직후 VerdictBox 삽입
    if 'VerdictBox restaurant' not in t:
        t = t.replace(
            '<GovBadges govData={govData} />\n',
            '<GovBadges govData={govData} />\n        <VerdictBox restaurant={r} govData={govData} />\n',
            1,
        )

    # 6-2) 감성 인트로 블록 위치 이동: 기본 정보 다음 → 위치 섹션 다음
    intro_pat = re.compile(
        r"        \{/\* ── 감성 인트로 ── \*/\}\n"
        r"        <div style=\{\{\n"
        r"          background:'linear-gradient\(135deg, var\(--surface2\) 0%, var\(--surface\) 100%\)',\n"
        r"          border:'1px solid var\(--border\)',\n"
        r"          borderRadius:14,\n"
        r"          padding:'22px 20px',\n"
        r"          marginBottom:28,\n"
        r"        \}\}>\n"
        r"          <div style=\{\{ fontSize:'1\.8rem', marginBottom:10 \}\}>\{intro\.emoji\}</div>\n"
        r"          \{intro\.lines\.map\(\(line, i\) => \(\n"
        r"            <p key=\{i\} style=\{\{\n"
        r"              fontSize: i === 0 \? '\.97rem' : '\.9rem',\n"
        r"              color: i === 0 \? 'var\(--text\)' : 'var\(--muted\)',\n"
        r"              fontWeight: i === 0 \? 700 : 400,\n"
        r"              lineHeight: 1\.85,\n"
        r"              marginBottom: i === intro\.lines\.length - 1 \? 0 : 4,\n"
        r"            \}\}>\{line\}</p>\n"
        r"          \)\)\}\n"
        r"        </div>\n"
    )
    m_intro = intro_pat.search(t)
    if m_intro and 'OperatorNote restaurant' not in t:
        intro_block = m_intro.group(0)
        # 원위치(기본정보 직후)에서 제거 후 OperatorNote로 교체
        t = t[:m_intro.start()] + f'        <OperatorNote restaurant={{r}} regionName="{region_name}" totalRegionRestaurants={{{count}}} govData={{govData}} />\n\n' + t[m_intro.end():]

        # 위치 섹션 다음(📍 네이버 지도에서 경로 보기 a 태그 닫힘 직후)에 감성 인트로 삽입
        t = t.replace(
            '          📍 네이버 지도에서 경로 보기\n        </a>\n',
            '          📍 네이버 지도에서 경로 보기\n        </a>\n\n' + intro_block,
            1,
        )

    # 6-3) CategorySuggestButton → PostMidCategoryBanner + AudienceCards
    if 'PostMidCategoryBanner region' not in t:
        t = re.sub(
            r'<CategorySuggestButton restaurant=\{r\} region="' + re.escape(region) + r'" />',
            f'<PostMidCategoryBanner region="{region}" regionName="{region_name}" restaurant={{r}} />\n\n        <h2 style={{h2style}}>👥 이런 분에게 추천</h2>\n        <AudienceCards restaurant={{r}} />',
            t, count=1
        )

    # 6-4) 갤러리 7~8 직후 + 광고 직전: 방문 전 체크포인트 삽입
    if 'VisitChecklist restaurant' not in t:
        # 추가 갤러리 (7~8번째 이미지) 블록 종료 직후 (})} 다음 빈줄) + <AdUnit slot="9138210374"... > 직전에 삽입
        gallery_pat = re.compile(
            r"(        \{/\* 추가 갤러리 \(7~8번째 이미지\) \*/\}\n"
            r"        \{\(r\.imageUrl7 \|\| r\.imageUrl8\) && \(\n"
            r"          <div[\s\S]*?\n"
            r"          </div>\n"
            r"        \)\}\n)"
        )
        t = gallery_pat.sub(
            r'\1\n        <h2 style={h2style}>📌 방문 전 체크포인트</h2>\n        <VisitChecklist restaurant={r} />\n',
            t, count=1
        )

    # ── (7) h2 r.type → r.cat[0] || r.type (맛집 더 보기 영역) ─────────
    t = re.sub(
        r'<h2 style=\{h2style\}>🍽️ ([^{]*?)\{r\.type\} 맛집 더 보기</h2>',
        r'<h2 style={h2style}>🍽️ \1{(r.cat && r.cat[0]) || r.type} 맛집 더 보기</h2>',
        t, count=1
    )
    # 안내문도 정정
    t = re.sub(
        r'<strong>\{r\.name\}</strong>와 비슷한 ([^{]*?)\{r\.type\} 맛집을 더 추천해드립니다\.',
        r'<strong>{r.name}</strong>와 같은 카테고리에서 평점·가격·거리 기준으로 한 곳씩 골라봤습니다.',
        t, count=1
    )

    # ── (8) 비슷한 식당 카드 교체 → SimilarRestaurantCard ────────────────
    region_path = {
        'samseong': '/dinner/samseong', 'jamsil': '/dinner/jamsil',
        'pangyo': '/pangyo', 'suji': '/suji',
        'yeongtong': '/samsungElectronics/yeongtong',
        'mangpo': '/samsungElectronics/mangpo',
        'yeongtongGu': '/samsungElectronics/yeongtongGu',
    }[region]
    similar_jsx_pat = re.compile(
        r"            <div style=\{\{ display:'grid', gridTemplateColumns:'repeat\(auto-fill, minmax\(200px, 1fr\)\)', gap:10, marginBottom:28 \}\}>\n"
        r"              \{similar\.map\(\(s, i\) => \([\s\S]*?\)\)\}\n"
        r"            </div>\n",
        re.MULTILINE,
    )
    new_cards = f"""            <div style={{{{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(180px, 1fr))', gap:12, marginBottom:28 }}}}>
              {{similar.map((s, i) => (
                <SimilarRestaurantCard key={{i}} restaurant={{s}} regionPath="{region_path}" />
              ))}}
            </div>
"""
    t, n_card = similar_jsx_pat.subn(new_cards, t, count=1)

    # ── (9) FaqAccordion defaultOpenAll ────────────────────────────────
    t = t.replace('<FaqAccordion items=[', '<FaqAccordion defaultOpenAll items=[')
    t = t.replace('<FaqAccordion items={[', '<FaqAccordion defaultOpenAll items={[')

    with open(p, 'w') as f: f.write(t)
    return n_sim, n_card


def patch_data(region, info):
    """data/{region}.js의 type 필드를 cat[0]로 교체"""
    p = os.path.join(BASE, info['data'])
    with open(p) as f: t = f.read()
    # 두 가지 헤더 패턴 지원: `const data = [` 또는 `const restaurants = [`
    m = re.search(r'const (data|restaurants)\s*=\s*\[', t)
    if not m:
        print(f'  ⚠ {region}: data 시작 패턴 미일치'); return 0
    var_name = m.group(1)
    start = m.start()
    end = t.rfind(']')
    arr_text = t[m.end()-1: end+1]
    arr_text = re.sub(r',(\s*\])', r'\1', arr_text)
    try:
        arr = json.loads(arr_text)
    except Exception as e:
        print(f'  ⚠ {region}: json parse 실패 — {e}'); return 0
    changed = 0
    for r in arr:
        cats = r.get('cat') or []
        if cats and cats[0] and r.get('type') != cats[0]:
            r['type'] = cats[0]; changed += 1
    export_target = var_name  # 'data' 또는 'restaurants'
    new = f'const {var_name} = [\n  ' + ',\n  '.join(json.dumps(rr, ensure_ascii=False) for rr in arr) + f'\n]\n\nexport default {export_target}\n'
    with open(p, 'w') as f: f.write(new)
    return changed


if __name__ == '__main__':
    for region, info in REGIONS.items():
        print(f'\n=== {region} ({info["name"]}) ===')
        n_sim, n_card = patch_page(region, info)
        n_type = patch_data(region, info)
        print(f'  similar 패치: {n_sim}, 카드 패치: {n_card}, type 정정: {n_type}')
