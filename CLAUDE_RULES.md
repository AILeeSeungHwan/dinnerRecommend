# Claude 작업 룰 — dinner-app

## 1. Python으로 JS 코드 생성 시 (f-string 충돌 방지)

### 문제
Python f-string 안에서 JS template literal 백틱(`\``) 또는 `${}` 사용 시
→ f-string 종료자/변수로 오인되어 잘못된 코드 생성

### 룰
```python
# ❌ 금지
fn = f"return `https://.../${{encodeURIComponent(query)}}`"

# ✅ 올바른 방법 1: 문자열 연결
url = 'https://map.naver.com/v5/search/${encodeURIComponent(query)}'
fn = 'return `' + url + '`'

# ✅ 올바른 방법 2: 일반 문자열로 분리 후 조합
template = 'return `https://map.naver.com/v5/search/${encodeURIComponent(query)}`'
fn = (
    'function naverMapUrl(name) {\n'
    '  ...\n'
    + template + '\n'
    '}'
)
```

---

## 2. JS 파일 생성 후 반드시 문법 검증

```bash
node --check 파일명.js
```
생성/수정 후 배포 전 항상 실행. 오류 있으면 배포하지 않음.

---

## 3. 데이터 파일(JS) 생성 시 특수문자 룰

### 문제 사례
- 식당명에 `/`, `\`, `?`, `#` 포함 → getStaticPaths URL 깨짐
- 일본어/한자 혼입 → 예: `いちぎゅう/ 一牛`
- `"` 포함 시 JSON.stringify 오류

### 룰
```python
# 데이터 저장 전 항상 name 필드 검증
def validate_name(name):
    # URL 경로에 쓰이는 필드는 슬래시 금지
    assert '/' not in name, f"슬래시 포함: {name}"
    assert '\\' not in name
    # 한글+ASCII+공백+일반특수만 허용
    import re
    clean = re.sub(r'[^\uAC00-\uD7A3a-zA-Z0-9\s·&()\-_.,]', '', name).strip()
    return clean
```

---

## 4. JSON 데이터 파일 생성 시

```python
# ❌ 금지: 작은따옴표 직접 사용
data = "{'name': '식당명'}"

# ✅ 올바른 방법: json.dumps 사용 (항상 큰따옴표, 이스케이프 자동 처리)
import json
src = 'const restaurants = ' + json.dumps(data, ensure_ascii=False, indent=2) + '\n\nexport default restaurants\n'
```

---

## 5. 지역별 파일 일괄 생성 시 (삼성역 → 타 지역)

1. **삼성역 파일을 베이스로** 지역 config만 교체
2. **생성 후 검증 항목:**
   - `node --check` 문법 검사
   - 삼성역 잔재 텍스트 없는지 확인
   - storage key 지역별로 다른지 확인
   - exit4 제거 여부 확인 (삼성역 전용)
3. **naverMapUrl 생성** → 반드시 방법 1(문자열 연결) 사용

---

## 6. rv/tags 데이터 생성 시 따옴표 처리

```python
# rvs → rv 변환 시 따옴표 이스케이프
rv_text = rv_text.replace('"', '\u2019').replace("'", '\u2018')
```

---

## 7. 배포 파일 체크리스트

```
□ node --check 통과
□ 삼성역 잔재 텍스트 없음 (타 지역 생성 시)
□ exit4Only 잔재 없음 (삼성역 외)
□ naverMapUrl 닫힘 정상 (}` 이중 없음)
□ name 필드 슬래시/특수문자 없음
□ JSON.dumps 사용 (직접 문자열 작성 금지)
```

---

## 8. 커밋 메시지 규칙

매 답변 후 아래 형식으로 커밋 메시지 제안:

```
[타입]: 변경 설명 (파일/범위)
// 질문 의도: 사용자가 요청한 내용 한 줄 요약
```

타입: fix / feat / data / refactor / hotfix

예시:
  [fix]: naverMapUrl template literal 이중 닫힘 수정 (전 지역 10개 파일)
  // 질문 의도: 식당 상세 페이지 URL 깨짐 버그 수정 요청

  [feat]: 룰렛 매장카드 클릭 → 여기로결정 연동 + 주사위 4.4초 (전 지역)
  // 질문 의도: 룰렛 결정 후 카드 클릭도 확정으로 동작하게 + 대신골라줘 속도 조절

  [hotfix]: 토큰절약모드 max_tokens 1000→1200 (JSON 잘림 파싱 오류 수정)
  // 질문 의도: 3번째 검색부터 오류 발생 원인 확인 및 수정


---

## 9. exit4 조건부 블록 제거 시 주의 (if-else 고아 방지)

### 문제
```js
// 원본 (삼성역)
if (cat) {
  if (cat.exit4Only) base = restaurants.filter(r=>r.exit4)  // ← 이것만 제거하면
  else base = base.filter(r => ...)                          // ← else 고아 발생!
}
```

### 룰
exit4Only 관련 `if` 제거 시, 바로 다음 `else`도 반드시 같이 제거:
```js
// ✅ 올바른 결과
if (cat) {
  base = base.filter(r =>   // else 제거, 바로 실행문으로
    cat.cats.some(c=>r.cat?.includes(c)) ||
    (cat.tags||[]).some(t=>r.tags?.includes(t))
  )
}
```

---

## 10. Python으로 naverMapUrl 생성 시 절대 규칙

template literal이 포함된 JS 함수는 Python에서 직접 생성하지 말고,
**항상 정적 문자열로 분리해서 조합**:

```python
# ❌ 절대 금지 (make_naver_fn 내부에서 f-string + 백틱 혼용)
fn = f"  return `https://.../${{}}`\n}}"

# ✅ 유일한 방법: 백틱 줄을 일반 문자열로 따로 정의
LINE_COORD  = "  if (lat && lng) return `https://map.naver.com/v5/search/${encodeURIComponent(query)}?c=${lng},${lat},15,0,0,0,dh`"
LINE_SEARCH = "  return `https://map.naver.com/v5/search/${encodeURIComponent(query)}`"
fn = '\n'.join([
    'function naverMapUrl(name, lat, lng) {',
    '  ...',
    LINE_COORD,
    LINE_SEARCH,
    '}'
])
```

생성 후 즉시 `}` ` 이중 닫힘 여부 체크:
```python
assert '}`\n}' not in result, "naverMapUrl 이중 닫힘 오류"
```

---

## 11. AI 후보 없음 응답 처리 (NoDataModal 연동)

```
AI가 "JSON 블록 없음" 에러 반환 시 → setError() 대신 NoDataModal 팝업
→ skipDbCheckRef.current = true → 재시도 시 DB 체크 패스 → 연관 매장 추천
```
- `specificMenu || ctx` 있을 때만 NoDataModal 전환
- 없으면 기존대로 에러 표시

---

## 12. max_tokens / 비용 설정 (현재 기준)

```js
// pages/api/recommend.js
const maxTokens = count >= 3 ? 1200 : 1400
// reason 프롬프트: 총 120~150자 (3문장)
// 비용: 7~9원/회 (haiku 기준)
```
- 절약모드 1000 → 1200 이하면 JSON 출력 잘려 파싱 오류 발생

---

## 13. 테마 구조 (현재 기준)

렌더 그룹: `['메인','시즌','창의','그라디언트','다크']`

| 그룹 | 테마 |
|---|---|
| 메인 | 라이트, 다크, 봄 벚꽃 |
| 시즌 | 빗소리🌧️, 첫눈❄️, 단풍🍁 |
| 창의 | 우주🚀, 불꽃축제🎆, 심해🌊, 네온사인🌃 |
| 그라디언트 | 오로라, 선셋, 오션, 캔디, 포레스트 |
| 다크 | 미드나잇, 옵시디언, 크롬, 사이버펑크, 블러드문, 제이드 |

삭제됨: 스페셜(골드/실버/레트로80/어스), 지역(삼성역/잠실), 글로우 6개, 라벤더

---

## 14. 벚꽃 모션 3종 (Layout.js)

```
sway (0~7번): 좌우 살랑살랑, 회전 ±10도 이내 직선 낙하
tumble (8~15번): 큰 흔들림 + 반바퀴(220도) 회전
spin (16~23번): 나선형 500도 풀 스핀
```
꽃잎 opacity: `0.18 + (i%4)*0.05` / 나무 opacity: `0.1`

---

## 15. DiceOverlay 속도

```js
if (c >= 26) { clearInterval(t); setTimeout(onDone, 200) }
// 26 × 170ms + 200ms = 4.6초
```

---

## 16. 룰렛 여기로결정 흐름

```
룰렛 done → [✅ 여기로결정 버튼] 또는 [하이라이트 카드 직접 클릭]
  → onPick(finalIdx) → 부모 setPickedIdx(idx) → 모달 닫힘
  → 이후 AI검색/랜덤 누르면 → AlreadyPickedModal ("이미 골랐잖아요")
```
결과 카드의 여기로결정도 동일: `onClick={()=>setPickedIdx(i)}`
