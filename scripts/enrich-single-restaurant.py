#!/usr/bin/env python3
"""
enrich-single-restaurant.py — 단일 식당 네이버 플레이스 보강

네이버 PC 플레이스(__APOLLO_STATE__)에서 메뉴/영업시간/이미지 다수 추출 →
data/{region}.js의 해당 식당 객체에 menuItems/hours/imageUrl[2-4] 주입.

사용법:
  python3 scripts/enrich-single-restaurant.py <region> <name>
  python3 scripts/enrich-single-restaurant.py suji 베이글리
"""
import os, re, sys, json, time, urllib.request, urllib.parse, urllib.error

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEADERS = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/122.0.0.0',
    'Accept-Language':'ko-KR,ko;q=0.9'
}

def http(url, timeout=12):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode('utf-8', 'ignore')

def fetch_apollo(pid, path='home'):
    url = f'https://pcmap.place.naver.com/restaurant/{pid}/{path}'
    html = http(url)
    m = re.search(r'window\.__APOLLO_STATE__\s*=\s*(\{.+?\})\s*;', html, re.DOTALL)
    return (m.group(1) if m else ''), html

def _decode(s):
    """JSON-like 문자열 안의 \\uXXXX, \\u002F 같은 escape를 안전하게 디코드."""
    if not s: return ''
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s

def extract_menus(apollo):
    """Menu:* 객체에서 name/price/description 추출."""
    menus = []
    seen = set()
    for k in re.findall(r'"(Menu:[^"]+)"', apollo):
        if k in seen: continue
        seen.add(k)
        idx = apollo.find(f'"{k}":{{')
        if idx < 0: continue
        s = apollo.find('{', idx); depth=0; i=s
        while i<len(apollo):
            if apollo[i]=='{':depth+=1
            elif apollo[i]=='}':
                depth-=1
                if depth==0: break
            i+=1
        block = apollo[s:i+1]
        nm = re.search(r'"name":"((?:[^"\\]|\\.)*)"', block)
        pr = re.search(r'"price":"?(\d*)"?', block)
        ds = re.search(r'"description":"((?:[^"\\]|\\.)*)"', block)
        if not nm: continue
        name = _decode(nm.group(1))
        if any(x in name for x in ['안내', '공휴일', '주의', '※']): continue
        price = int(pr.group(1)) if pr and pr.group(1) else 0
        desc = _decode(ds.group(1)) if ds else ''
        menus.append({'menuName': name, 'price': price, 'description': desc})
    return menus

def extract_hours(apollo):
    """영업시간 텍스트."""
    for pat in [
        r'"businessHours":"((?:[^"\\]|\\.)*)"',
        r'"keyword":"영업시간","value":"((?:[^"\\]|\\.)*)"',
        r'"today[A-Za-z]*":"((?:[^"\\]|\\.){5,200})"',
        r'"todayBusinessHours[^"]*":"((?:[^"\\]|\\.)*)"',
    ]:
        m = re.search(pat, apollo)
        if m:
            v = _decode(m.group(1))
            if v and 3 <= len(v) <= 200: return v
    return ''

def extract_images(apollo, existing=None):
    """이미지 URL 다수 추출 (escape unescape 후 pstatic 도메인)."""
    raw = apollo.replace('\\u002F', '/')
    urls = re.findall(r'https?://[a-z0-9-]+\.pstatic\.net/[^"\\\s]+\.(?:jpg|jpeg|png|JPEG|JPG|PNG)', raw)
    existing = set(existing or [])
    out = []; seen = set(existing)
    for u in urls:
        if u in seen: continue
        seen.add(u); out.append(u)
    return out

def main():
    if len(sys.argv) < 3:
        print('사용법: enrich-single-restaurant.py <region> <name>')
        sys.exit(1)
    region, name = sys.argv[1], sys.argv[2]
    data_path = os.path.join(BASE, 'data', f'{region}.js')
    with open(data_path) as f: text = f.read()

    # placeId 추출
    esc = re.escape(name)
    m = re.search(rf'"name":\s*"{esc}"[\s\S]*?"naverPlaceId":\s*"(\d+)"', text)
    if not m:
        m = re.search(rf'"name":\s*"{esc}"[\s\S]*?"naverUrl":\s*"[^"]*?/place/(\d+)', text)
    if not m:
        print(f'placeId 못 찾음: {region}/{name}'); sys.exit(1)
    pid = m.group(1)
    print(f'placeId: {pid}')

    apollo_home, _ = fetch_apollo(pid, 'home')
    time.sleep(1)
    apollo_menu, _ = fetch_apollo(pid, 'menu/list')

    menus = extract_menus(apollo_menu) or extract_menus(apollo_home)
    hours = extract_hours(apollo_home) or extract_hours(apollo_menu)
    images = extract_images(apollo_home + apollo_menu)
    # 비현실적 가격 필터
    menus = [m for m in menus if (m['price'] == 0 or 500 < m['price'] < 500000)]

    print(f'menus: {len(menus)}, hours: {hours[:80]}, images: {len(images)}')

    # data/{region}.js 갱신
    # 1) menuItems 교체
    new_menus_js = '[' + ', '.join(
        '{' + f'"menuName": {json.dumps(m["menuName"], ensure_ascii=False)}, "price": {m["price"]}, "description": {json.dumps(m["description"], ensure_ascii=False)}' + '}'
        for m in menus[:15]
    ) + ']'
    text = re.sub(
        rf'("name":\s*"{esc}"[\s\S]*?"menuItems":\s*)\[[^\]]*\]',
        lambda mm: mm.group(1) + new_menus_js, text, count=1,
    )
    # 2) hours
    if hours:
        text = re.sub(
            rf'("name":\s*"{esc}"[\s\S]*?"hours":\s*)"[^"]*"',
            lambda mm: mm.group(1) + json.dumps(hours, ensure_ascii=False), text, count=1,
        )
    # 3) 이미지 URL 들 — 식당 객체 단위로 정확히 주입 (블록 단위 처리)
    cur_img_m = re.search(rf'"name":\s*"{esc}"[\s\S]*?"imageUrl":\s*"([^"]*)"', text)
    cur_img_url = cur_img_m.group(1) if cur_img_m else ''
    extras = [u for u in images if u != cur_img_url][:3]
    print(f'extras for injection: {len(extras)}')

    # 식당 객체 블록 추출 (균형 잡힌 { } 단위)
    name_idx = text.find(f'"name": "{name}"')
    if name_idx >= 0 and extras:
        obj_start = text.rfind('{', 0, name_idx)
        depth=0; j=obj_start
        while j<len(text):
            if text[j]=='{':depth+=1
            elif text[j]=='}':
                depth-=1
                if depth==0:break
            j+=1
        obj = text[obj_start:j+1]
        new_obj = obj
        # imageUrl2 — 있으면 갱신, 없으면 imageUrl 뒤에 삽입
        if '"imageUrl2"' in new_obj:
            new_obj = re.sub(r'"imageUrl2":\s*"[^"]*"',
                f'"imageUrl2": {json.dumps(extras[0], ensure_ascii=False)}',
                new_obj, count=1)
        else:
            new_obj = re.sub(r'("imageUrl":\s*"[^"]*")',
                r'\1' + f', "imageUrl2": {json.dumps(extras[0], ensure_ascii=False)}',
                new_obj, count=1)
        # imageUrl3 — 신규 삽입 (imageUrl2 뒤)
        if '"imageUrl3"' not in new_obj and len(extras) >= 2:
            new_obj = re.sub(r'("imageUrl2":\s*"[^"]*")',
                r'\1' + f', "imageUrl3": {json.dumps(extras[1], ensure_ascii=False)}',
                new_obj, count=1)
        # imageUrl4 — 신규 삽입 (imageUrl3 뒤)
        if '"imageUrl4"' not in new_obj and len(extras) >= 3:
            new_obj = re.sub(r'("imageUrl3":\s*"[^"]*")',
                r'\1' + f', "imageUrl4": {json.dumps(extras[2], ensure_ascii=False)}',
                new_obj, count=1)
        text = text[:obj_start] + new_obj + text[j+1:]

    with open(data_path, 'w') as f: f.write(text)
    print(f'✓ data/{region}.js 갱신 완료')

if __name__ == '__main__': main()
