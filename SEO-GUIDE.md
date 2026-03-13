# SEO-GUIDE.md — dinner.ambitstock.com SEO 가이드

> 마지막 업데이트: 2026-03-13

---

## 1. 포스트 Slug 규칙

### 영문 키워드 기반 slug 사용
```
예: dinner.ambitstock.com/posts/pangyo-lunch-meat-guide-2026/
예: dinner.ambitstock.com/posts/samsung-izakaya-best7-2026/
예: dinner.ambitstock.com/posts/jamsil-team-dinner-spot-2026/
```

### Slug 작성 규칙
- 영문 소문자 + 하이픈 (no 한글, no 언더스코어)
- 3~6단어, 핵심 키워드 포함
- 지역명 + 카테고리 + 목적 + 연도
- 예: `pangyo-honbap-budget-lunch-2026`

---

## 2. 페이지별 SEO title/description 패턴

### 메인 페이지
```
title: 오늘뭐먹지 | AI 맛집 추천 — 삼성역·잠실·판교·영통 맛집 1,360곳
description: 오늘 뭐 먹지? 삼성역·잠실·판교·영통 맛집 1,360곳을 AI가 날씨·기분·예산에 맞게 추천. 3초 만에 오늘의 맛집을 찾아보세요.
```

### 지역 페이지
```
title: 판교역 맛집 추천 423곳 | AI 맛집 추천 2026 | 오늘뭐먹지
description: 판교역·판교테크노밸리·백현동 맛집 423곳. AI가 날씨·기분·예산에 맞게 추천. 점심·회식·데이트·혼밥 상황별 추천.
```

### 카테고리 페이지
```
title: 판교역 고기구이 맛집 추천 {N}곳 | 가격·평점 비교 2026 | 오늘뭐먹지
description: 판교역 고기구이·삼겹살·한우 맛집 {N}곳. 네이버 평점순 정렬, 가격대·상황별 비교. 회식·데이트·가성비 맞춤 추천.
```

### 식당 상세 페이지
```
title: {식당명} | {지역} {카테고리} 맛집 ⭐{평점} 리뷰 {N}개 | 오늘뭐먹지
description: {지역} {카테고리} 맛집 {식당명}. 네이버 평점 {평점}, 리뷰 {N}개. 대표 메뉴: {메뉴1} {가격}, {메뉴2} {가격}. 영업시간·주차·예약 정보.
```

### 포스트 페이지
```
title: {제목} | 오늘뭐먹지
description: {포스트 description 150자}
```

---

## 3. JSON-LD 구조화 데이터

### 식당 상세 (이미 적용 — 보강 필요)
- `Restaurant` + `AggregateRating` ✅
- `FAQPage` ✅
- `BreadcrumbList` ✅
- **추가**: `Menu` (menuItems 데이터 활용)

### 카테고리 페이지 (추가 필요)
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "판교역 고기구이 맛집",
  "numberOfItems": 15,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "url": "/pangyo/restaurant/식당명" }
  ]
}
```

### 포스트 페이지 (신규)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "판교역 점심 고기 맛집 7선 | 2026",
  "datePublished": "2026-03-13",
  "author": { "@type": "Organization", "name": "오늘뭐먹지" },
  "publisher": { "@type": "Organization", "name": "오늘뭐먹지" }
}
```

### 메인 페이지 (추가 필요)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "오늘뭐먹지",
  "url": "https://dinner.ambitstock.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://dinner.ambitstock.com/pangyo?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## 4. Sitemap 확장

### 현재 (삼성역+잠실만)
- 메인 1 + 지역 3 + 카테고리 8 + 식당 520 = ~532 URL

### 목표 (전 지역)
```
메인 (1) + 지역 (6) + 카테고리 (6×12=72) + 식당 (~1,360) + 포스트 (30~50) = ~1,500 URL
```

### priority 설정
| 페이지 | priority |
|---|---|
| 메인 | 1.0 |
| 지역 페이지 | 0.9 |
| 카테고리 페이지 | 0.8 |
| 포스트 | 0.7 |
| 식당 상세 | 0.6 |

---

## 5. 내부링크 전략

### 계층 구조
```
메인 → 지역 → 카테고리 → 식당 상세
         ↓
       포스트 → 식당 상세 (복수)
         ↓
       다른 포스트 (관련 글)
```

### 링크 방향
- 포스트에서 식당 상세로 (CTA)
- 포스트에서 카테고리로 (더 보기)
- 포스트에서 AI 추천 지역 페이지로 (서비스 유도)
- 식당 상세에서 같은 카테고리 포스트로 (관련 글)
- 카테고리에서 해당 카테고리 포스트로

---

## 6. 콘텐츠 SEO 체크리스트

### 카테고리 페이지
```
□ 가이드 콘텐츠 800자 이상
□ 상황별 추천 (회식/데이트/혼밥) 포함
□ 가격대별 구분 포함
□ ItemList JSON-LD 적용
□ 관련 카테고리 내부링크 2~3개
□ AI 추천 유도 CTA
```

### 지역 페이지
```
□ 하단 가이드 콘텐츠 1,000자 이상
□ 각 지역별 독창적 내용 (복붙 금지)
□ 카테고리별 추천 TOP3 내부링크
□ 시간대별(점심/저녁/심야) 추천
□ 주차·교통 정보
□ BreadcrumbList JSON-LD
```

### 메인 페이지
```
□ 서비스 소개 800자 이상
□ FAQ 스키마 3~5개
□ WebSite + SearchAction JSON-LD
□ 전 지역 맛집 수 표시
□ 각 지역 특성 2~3줄 요약
```
