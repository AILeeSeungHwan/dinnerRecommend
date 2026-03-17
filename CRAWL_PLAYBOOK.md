# 네이버 크롤링 플레이북

> 지역별 네이버 데이터 수집 → 상세 크롤링 → 병합 파이프라인
> 새 지역을 진행할 때 이 문서의 명령어를 순서대로 실행하면 됨

---

## 전제조건

- Node.js 18+
- Puppeteer (`npm i puppeteer`)
- `scripts/region-config.mjs`에 지역 등록 완료

### 지원 지역

| key          | label    | 상태   |
| ------------ | -------- | ------ |
| samseong     | 삼성역   | ✅ 완료 |
| jamsil       | 잠실     | ✅ 완료 |
| pangyo       | 판교     | ✅ 완료 |
| yeongtong    | 영통     | ⬜ 미진행 |
| mangpo       | 망포     | ⬜ 미진행 |
| yeongtongGu  | 영통구청 | ⬜ 미진행 |

---

## 파이프라인 (3단계)

### Step 1: 브라우저 크롤링

네이버 지도 API 인터셉트로 식당 기본정보 수집. 체크포인트 기반 — 중단 시 자동 이어서 진행.

```bash
node scripts/naver-crawl-browser.mjs {REGION}
```

- **출력**: `scripts/naver-data/{REGION}-browser.json`
- **체크포인트**: `scripts/naver-data/{REGION}-browser-checkpoint.json`
- **소요시간**: 지역 크기에 따라 20분~2시간
- **네트워크 끊김 시**: 동일 명령어 재실행 → 체크포인트에서 자동 재개

### Step 2: 상세 크롤링

각 식당의 네이버 플레이스 페이지 방문 → 리뷰 수, 메뉴+가격, 리뷰 텍스트, 전화번호, 영업시간 등 수집.

```bash
node scripts/naver-detail-v3.mjs {REGION}
```

- **입력**: `scripts/naver-data/{REGION}-browser.json` (Step 1 결과)
- **출력**: `scripts/naver-data/{REGION}-browser.json` (in-place 업데이트)
- **진행 추적**: `scripts/naver-data/{REGION}-detail-v3-done.json`
- **소요시간**: 식당 수 × ~3초 (1,000개 ≈ 50분)
- **중단 시**: 동일 명령어 재실행 → done 파일 기반으로 자동 재개

### Step 3: 데이터 병합

크롤링 결과를 기존 `data/{REGION}.js`에 병합. 이름 매칭으로 기존 식당 보강 + 신규 추가.

```bash
node scripts/merge-browser-data.mjs {REGION}
```

- **입력**: `scripts/naver-data/{REGION}-browser.json`
- **출력**: `data/{REGION}.js` (덮어쓰기)
- **백업**: `data/backup/{REGION}_merge_{날짜}.js` 자동 생성
- **구문 검증**: 자동 `node --check` 실행, 실패 시 백업에서 복원

---

## 전체 실행 (한 지역 원스텝)

```bash
# {REGION}을 실제 지역 키로 교체
REGION=yeongtong

# 1) 브라우저 크롤링
node scripts/naver-crawl-browser.mjs $REGION

# 2) 상세 크롤링
node scripts/naver-detail-v3.mjs $REGION

# 3) 병합
node scripts/merge-browser-data.mjs $REGION

# 4) 구문 검증
node --check data/${REGION}.js && echo "OK"

# 5) 빌드 검증
npm run build
```

---

## 빠른 시작 (Claude Code에서)

다음 세션에서 아래를 복붙하면 즉시 실행 가능:

```
다음 지역 크롤링 진행해줘: {REGION}
CRAWL_PLAYBOOK.md 참고해서 Step 1→2→3 순서대로 실행.
끝나면 빌드 검증 + 커밋까지.
```

### 여러 지역 한번에

```
영통, 망포, 영통구청 순서대로 크롤링 진행해줘.
CRAWL_PLAYBOOK.md 참고. 각 지역 Step 1→2→3 완료 후 다음 지역.
전부 끝나면 빌드 검증 + 커밋.
```

---

## 후처리 (선택)

### 빈 menuName 재크롤링

상세 크롤링에서 메뉴 이름이 누락된 경우:

```bash
node scripts/fix-empty-menuname.mjs {REGION}
```

### 데이터 검증

```bash
# 전체 데이터 파일 구문 검사
for f in data/*.js; do node --check "$f" || echo "FAIL: $f"; done

# 식당 수 확인
node -e "import('./data/{REGION}.js').then(m => console.log(m.default.length))"
```

---

## 트러블슈팅

| 문제 | 해결 |
| --- | --- |
| `ERR_INTERNET_DISCONNECTED` | 네트워크 복구 후 동일 명령어 재실행 (체크포인트 자동 재개) |
| 브라우저 크롤링 0건 | Puppeteer 설치 확인: `npx puppeteer browsers install chrome` |
| 상세 크롤링 cnt 0 계속 | 네이버 rate limit. 잠시 대기 후 재실행 |
| 병합 후 매칭 0건 | 이름 정규화 확인. `normalizeForMatch()` 로직 점검 |
| 구문 검증 실패 | 자동 백업 복원됨. `data/backup/` 확인 |

---

## 파일 맵

```
scripts/
├── naver-crawl-browser.mjs   ← Step 1: 브라우저 크롤링
├── naver-detail-v3.mjs       ← Step 2: 상세 크롤링
├── merge-browser-data.mjs    ← Step 3: 데이터 병합
├── fix-empty-menuname.mjs    ← 후처리: 빈 menuName 수정
├── region-config.mjs         ← 지역 설정 (좌표, 키워드)
└── naver-data/               ← 크롤링 중간 파일
    ├── {REGION}-browser-checkpoint.json
    ├── {REGION}-browser.json
    └── {REGION}-detail-v3-done.json
```

---

## 신규 지역 추가 방법

1. `scripts/region-config.mjs`에 지역 추가:
```js
newRegion: {
  label: '지역명',
  dataFile: 'data/newRegion.js',
  center: { lat: 37.xxx, lng: 127.xxx },
  bounds: { south: 37.xx, north: 37.xx, west: 127.xx, east: 127.xx },
  searchKeywords: ['지역명 맛집', '지역명역 맛집', '지역명 식당']
}
```

2. `scripts/merge-browser-data.mjs`의 `REGIONS`에 추가:
```js
newRegion: { label: '지역명', dataFile: 'data/newRegion.js' }
```

3. 빈 데이터 파일 생성:
```js
// data/newRegion.js
const restaurants = []
export default restaurants
```

4. 위 파이프라인 Step 1→2→3 실행
