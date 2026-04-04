# NAVER_CRAWL.md — 네이버 맛집 데이터 수집 가이드

> 마지막 업데이트: 2026-03-13
> 이 문서는 Claude Code에서 실행하는 네이버 데이터 수집 워크플로우다.

---

## 1. 수집 목적

- 기존 Google Places 데이터를 네이버 데이터로 교체 (평점, 리뷰수)
- 대표 메뉴 + 가격 정보 신규 수집
- 리뷰 텍스트 수집 → 키워드 분석 → 태그 자동 생성 (리뷰 원문 외부 노출 절대 금지)
- 기존 미포함 식당 신규 발굴 + 추가

---

## 2. 수집 대상 정보

| 항목 | 용도 | 대체 필드 |
|---|---|---|
| 네이버 평점 | 사이트 표시용 | rt (기존 Google 교체) |
| 방문자 리뷰 수 | 사이트 표시용 | cnt (기존 Google 교체) |
| 블로그 리뷰 수 | 참고용 | naverBlogCnt (신규) |
| 대표 메뉴 + 가격 | 사이트 표시 + 검색 | menuItems (신규) |
| 방문자 리뷰 텍스트 | **내부 전용** — 키워드 분석 | rv (교체, 외부 노출 금지) |
| 편의시설 | 태그 생성 | parking, reservation (신규) |
| 네이버 Place ID | 향후 갱신용 키 | naverPlaceId (신규) |
| 네이버 플레이스 URL | 링크용 | naverUrl (신규) |
| 영업시간 | 기존 보강 | hours (갱신) |

---

## 3. 수집 방법

### 3-1. 네이버 지도 내부 API (1순위)
```
GET https://map.naver.com/p/api/search/allSearch?query=판교역+맛집&type=all
```
- JSON 응답에 placeId, 평점, 리뷰수, 카테고리, 좌표 포함
- 한 번에 최대 50개 결과
- **장점**: 빠르고 구조화된 데이터
- **단점**: 비공식 API, 구조 변경 가능

### 3-2. 네이버 플레이스 상세 크롤링 (2순위)
```
GET https://pcmap.place.naver.com/restaurant/{placeId}/home
```
- Puppeteer/Playwright 필요 (SPA)
- 수집: 메뉴, 리뷰, 영업시간, 편의시설 상세
- **rate limit**: 2초 간격 필수

### 3-3. 네이버 검색 API (3순위 — 보조)
- 네이버 개발자센터 지역 검색 API
- 무료 25,000건/일
- 기본 정보만 (평점·리뷰 텍스트 미제공)

---

## 4. 지역별 검색 키워드

### 삼성역
```
삼성역 맛집, 테헤란로 맛집, 코엑스 맛집, 삼성역 고기, 삼성역 이자카야,
삼성역 국밥, 삼성역 일식, 삼성역 중식, 삼성역 양식, 삼성역 치킨,
삼성역 회식, 삼성역 혼밥, 삼성역 점심, 삼성역 야장
```

### 잠실
```
잠실역 맛집, 방이동 맛집, 석촌호수 맛집, 송리단길 맛집,
잠실 고기, 잠실 이자카야, 잠실 국밥, 잠실 일식, 잠실 회식,
잠실 혼밥, 잠실 데이트, 잠실 곱창
```

### 판교
```
판교역 맛집, 판교테크노밸리 맛집, 백현동 맛집, 아브뉴프랑 맛집,
판교 고기, 판교 이자카야, 판교 국밥, 판교 일식, 판교 중식,
판교 점심, 판교 회식, 판교 혼밥
```

### 영통
```
영통역 맛집, 영통 먹자골목 맛집, 영통 고기, 영통 이자카야,
영통 국밥, 영통 점심, 영통 회식
```

### 망포
```
망포역 맛집, 망포 맛집, 망포 고기, 망포 점심, 망포 회식
```

### 영통구청
```
영통구청 맛집, 매탄동 맛집, 매탄 고기, 매탄 점심
```

---

## 5. 크롤링 파이프라인

```
[Step 1] 지역별 키워드 검색 → 식당 목록 수집
         각 지역 × 10~14개 키워드 = ~80 쿼리
         결과: data/raw/search_{region}.json

[Step 2] 중복 제거 + 기존 데이터 매칭
         name + addr fuzzy match
         기존 식당: placeId 연결
         신규 식당: 신규 목록 생성

[Step 3] placeId로 상세 정보 크롤링
         평점, 리뷰, 메뉴, 영업시간, 편의시설
         결과: data/raw/detail_{region}.json

[Step 4] 리뷰 텍스트 키워드 분석
         방문자 리뷰 최대 30개 수집
         → 형태소 분석 (단순 패턴 매칭)
         → 빈출 키워드 추출
         → tags, keywords, moods, scene 자동 매핑

[Step 5] 데이터 병합 + JS 파일 생성
         기존 data/{region}.js 백업
         확장 스키마 적용
         validate_name() + node --check

[Step 6] 검증 리포트
         - 각 지역 식당 수 (변경 전/후)
         - 빈 tags 비율 (변경 전/후)
         - 신규 추가 식당 수
         - 데이터 품질 점수
```

---

## 6. 키워드 분석 → 태그 매핑

### 패턴 매칭 규칙
```javascript
const TAG_PATTERNS = [
  { patterns: /혼밥|혼자|1인|카운터/, tag: '혼밥가능' },
  { patterns: /가성비|저렴|착한가격|착한/, tag: '가성비' },
  { patterns: /점심|런치|점심특선|백반/, tag: '점심추천' },
  { patterns: /주차|파킹|발렛/, tag: '주차가능' },
  { patterns: /단체|회식|룸|프라이빗/, tag: '단체가능' },
  { patterns: /데이트|분위기|커플|뷰/, tag: '데이트' },
  { patterns: /웨이팅|줄서|대기|예약/, tag: '웨이팅맛집' },
  { patterns: /심야|새벽|늦게|야식/, tag: '심야영업' },
  { patterns: /깔끔|청결|위생|깨끗/, tag: '깔끔한곳' },
  { patterns: /친절|서비스|응대/, tag: '서비스좋음' },
  { patterns: /뷰|전망|야경|루프탑/, tag: '뷰맛집' },
  { patterns: /인스타|SNS|사진|포토/, tag: 'SNS맛집' },
  { patterns: /예약|예약필수|콜키지/, tag: '예약제' },
  { patterns: /배달|포장|테이크아웃/, tag: '포장가능' },
]
```

### moods 매핑
```javascript
const MOOD_PATTERNS = [
  { patterns: /스트레스|힐링|위로/, mood: '스트레스 받음' },
  { patterns: /회식|팀|동료|환영회/, mood: '회식' },
  { patterns: /데이트|기념일|프로포즈/, mood: '데이트' },
  { patterns: /혼자|혼밥|편하게/, mood: '혼밥' },
  { patterns: /축하|생일|승진/, mood: '축하' },
  { patterns: /가벼운|간단|빠르게/, mood: '기분 좋음' },
]
```

---

## 7. rate limit & 에러 처리

```javascript
const CRAWL_CONFIG = {
  requestDelay: 2000,      // 요청 간 최소 2초
  maxRetries: 3,           // 실패 시 3회 재시도
  retryDelay: 5000,        // 재시도 간 5초
  maxConcurrent: 1,        // 동시 요청 1개
  checkpointInterval: 50,  // 50개마다 중간 저장
  userAgentRotation: true, // UA 로테이션
}
```

### 에러 처리
- 네트워크 오류: 3회 재시도 후 skip + 로그
- 파싱 오류: skip + 로그
- rate limit (429): 30초 대기 후 재시도
- 크롤링 중단 시: checkpoint 파일에서 이어서 진행

### 진행 상황 출력
```
[판교 42/423] 이치규 판교점 — ⭐4.5 리뷰 1,520개 메뉴 8개
[판교 43/423] 봉피양 — ⭐4.2 리뷰 892개 메뉴 5개
[판교] 체크포인트 저장 (50/423)
```

---

## 8. 데이터 검증

### 병합 후 검증 항목
```bash
# 전체 구문 검사
for f in data/*.js; do node --check "$f" || echo "FAIL: $f"; done

# 식당 수 변경 확인
echo "=== 변경 전후 비교 ==="
# (backup과 현재 비교)

# 빈 tags 비율
for f in data/*.js; do
  total=$(grep -c '"name"' "$f")
  empty=$(grep -c '"tags": \[\]' "$f")
  echo "$(basename $f .js): $empty/$total empty"
done

# validate_name 통과 확인
node scripts/validate-data.mjs

# 평점 범위 확인 (0~5)
# 가격 범위 확인 (양수)
# 좌표 범위 확인 (한국 내)
```
