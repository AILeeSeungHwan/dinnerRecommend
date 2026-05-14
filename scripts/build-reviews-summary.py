#!/usr/bin/env python3
"""data/reviews_raw.json → data/reviews_summary.json (키워드 + 짧은 인용)"""
import json, re, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IN_PATH = os.path.join(BASE, 'data', 'reviews_raw.json')
OUT_PATH = os.path.join(BASE, 'data', 'reviews_summary.json')

THEME_KEYWORDS = {
    '가성비': ['가성비', '가격대비', '저렴', '싸요', '합리'],
    '재료신선': ['신선', '당일', '활어', '재료'],
    '서비스': ['친절', '서비스', '사장님', '직원'],
    '분위기': ['분위기', '인테리어', '깔끔', '예쁘'],
    '양많음': ['양많', '푸짐', '넉넉', '실하'],
    '국물맛': ['국물', '진한', '시원한', '얼큰', '뜨끈'],
    '재방문': ['재방문', '또 올', '또 갈', '단골', '다시'],
    '웨이팅': ['웨이팅', '대기', '줄서'],
    '주차편함': ['주차', '파킹'],
    '맛있음': ['맛있', '존맛', 'JMT', '미친맛', '레전드'],
}

def extract_quote(reviews):
    priority = ['가성비','맛있','신선','진한','깔끔','친절','재방문','푸짐','분위기']
    for r in reviews[:8]:
        for sent in re.split(r'[.!?。]\s*', r):
            sent = sent.strip().strip('"\'')
            sent = re.sub(r'[ㅋㅎ]{2,}', '', sent)
            sent = re.sub(r'[^가-힣a-zA-Z0-9 ,!?~.]', '', sent)
            if not (15 <= len(sent) <= 55):
                continue
            if any(k in sent for k in priority):
                return sent.strip()
    return ''

def build():
    with open(IN_PATH) as f: raw = json.load(f)
    out = {}
    total = 0
    for region, rest_map in raw.items():
        out_region = {}
        for name, reviews in rest_map.items():
            if not reviews: continue
            combined = ' '.join(reviews[:6])
            themes = []
            for theme, kws in THEME_KEYWORDS.items():
                c = sum(combined.count(k) for k in kws)
                if c >= 2:
                    themes.append((c, theme))
            themes.sort(reverse=True)
            top_themes = [t for _, t in themes[:4]]
            quote = extract_quote(reviews)
            if top_themes or quote:
                out_region[name] = {'themes': top_themes, 'quote': quote, 'review_count': len(reviews)}
                total += 1
        if out_region: out[region] = out_region
        print(f'  {region}: {len(out_region)}')
    with open(OUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, indent=1)
    print(f'✓ {total} 식당')

if __name__ == '__main__': build()
