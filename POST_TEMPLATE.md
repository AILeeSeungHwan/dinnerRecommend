# POST_TEMPLATE.md — dinner.ambitstock.com 포스팅 작성 표준 템플릿

> 마지막 업데이트: 2026-03-13
> 모든 신규 포스팅은 이 구조를 기본으로 작성할 것.

---

## 기본 구조 (7단계)

```
1. 한 줄 결론
2. 이 글이 필요한 사람
3. 핵심 추천표 또는 요약 박스
4. 상황별 해설 (각 항목 — 식당별 or 조건별)
5. 실수하기 쉬운 포인트 (웨이팅, 주차, 런치 마감 등)
6. 데이터 기준일·확인 방법
7. 관련 글 내부링크
```

---

## sections 배열 순서 (필수)

```js
sections: [
  // 1. intro — 한 줄 결론 + 이 글이 필요한 사람 박스
  { type: 'intro', html: '...' },

  // 2. 대표 이미지 (1장)
  { type: 'image', src: '/images/...', alt: '...', caption: '...' },

  // 3. 목차 (자동 생성)
  { type: 'toc' },

  // 4. 선정 기준 또는 핵심 요약 h2
  { type: 'h2', id: 'criteria', text: '이 글의 선정 기준' },
  { type: 'body', html: '...' },

  // 5. 광고 (선정기준 뒤 첫 광고)
  { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

  // 6. 본문 항목들 (h2 + body + 필요시 cta)
  { type: 'h2', id: 'item1', text: '1. [식당명] — [한줄 특징]' },
  { type: 'body', html: '...' },
  // { type: 'cta', href: '/pangyo/restaurant/이치규', text: '이치규 상세 보기' },

  // 7. 중간 광고 (2~3개 항목마다)
  { type: 'ad', slot: '6297515693', format: 'auto' },

  // 8. 상황별 추천 요약 (비교표)
  { type: 'h2', id: 'situation', text: '상황별 추천 요약' },
  { type: 'body', html: '<table>...</table>' },

  // 9. 주의사항/실수 포인트
  { type: 'h2', id: 'tips', text: '방문 전 반드시 확인할 것' },
  { type: 'body', html: '...' },

  // 10. ending — 관련 글 내부링크
  { type: 'ending', html: '...' },

  // 11. 마지막 광고
  { type: 'ad', slot: '6297515693', format: 'auto' },
]
```

---

## intro 작성 규칙

```html
<!-- 필수: 한 줄 결론 -->
<p><strong>한 줄 결론:</strong> 판교역 점심 고기집은 가성비를 원하면 [A], 분위기를 원하면 [B]가 정답입니다.</p>

<!-- 필수: 이 글이 필요한 사람 박스 -->
<div style="background:rgba(99,102,241,0.05);border-left:3px solid #6366f1;padding:14px 18px;border-radius:8px;margin:16px 0">
  <strong>이 글이 필요한 사람</strong>
  <ul style="margin:8px 0 0;padding-left:20px">
    <li>판교 테크노밸리에서 점심에 고기 먹고 싶은 직장인</li>
    <li>팀 회식 장소를 찾는 팀장</li>
    <li>주차 가능한 고기집을 찾는 사람</li>
  </ul>
</div>

<!-- 본문 소개 -->
<p>판교역 반경 500m 이내 고기구이 전문점 7곳을 네이버 평점·리뷰 수·가격대 기준으로 비교했습니다.</p>

<!-- 필수: 데이터 기준일 -->
<p style="font-size:13px;color:#888;margin-top:12px">
  ※ 이 글의 평점·가격 데이터는 2026년 3월 네이버 플레이스 기준입니다. 실제와 다를 수 있습니다.
</p>
```

---

## 식당 추천 항목 작성 규칙

### 필수 정보 (모든 추천 식당에 포함)
```html
<p><strong>[식당명]</strong> — [카테고리] | ⭐[평점] ([리뷰수]개 리뷰)</p>
<ul>
  <li><strong>대표 메뉴:</strong> [메뉴1] [가격], [메뉴2] [가격]</li>
  <li><strong>가격대:</strong> 1인 [가격범위]원</li>
  <li><strong>위치:</strong> [주소 or 판교역 몇 분]</li>
  <li><strong>특징:</strong> [방문자 키워드 기반 — "가성비", "혼밥 가능", "주차 가능" 등]</li>
</ul>
<p>[이 식당을 추천하는 이유 2~3문장. 데이터 기반 서술]</p>
```

### 금지
- 네이버 리뷰 원문 인용 ("리뷰에 따르면 맛있다고 합니다" 금지)
- 근거 없는 "최고의", "압도적", "꼭 가야 할"
- 가격/평점 없이 "분위기 좋다"로만 추천

---

## 비교표 작성 규칙

```html
<table style="width:100%;border-collapse:collapse;font-size:14px">
  <thead>
    <tr style="border-bottom:2px solid #ddd;background:rgba(99,102,241,0.04)">
      <th style="text-align:left;padding:10px 8px">식당</th>
      <th style="text-align:left;padding:10px 8px">평점</th>
      <th style="text-align:left;padding:10px 8px">가격대</th>
      <th style="text-align:left;padding:10px 8px">추천 상황</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #eee">
      <td style="padding:10px 8px"><strong>이치규</strong></td>
      <td>⭐4.5</td>
      <td>1.2~2.2만</td>
      <td>혼밥, 점심</td>
    </tr>
  </tbody>
</table>
<p style="font-size:12px;color:#999;margin-top:8px">
  ※ 2026년 3월 네이버 플레이스 기준. 가격은 대표 메뉴 기준이며 변동 가능.
</p>
```

---

## 상황별 추천 요약표 (필수)

모든 추천형 포스트에 아래 형태의 상황별 요약을 포함:

```html
<table>
  <tr><td><strong>혼밥</strong></td><td>[식당A] — 카운터석, 빠른 서빙</td></tr>
  <tr><td><strong>회식 (8인+)</strong></td><td>[식당B] — 룸 있음, 주차 가능</td></tr>
  <tr><td><strong>데이트</strong></td><td>[식당C] — 분위기 좋음, 코스 가능</td></tr>
  <tr><td><strong>가성비</strong></td><td>[식당D] — 1만원대, 양 많음</td></tr>
  <tr><td><strong>접대/프리미엄</strong></td><td>[식당E] — 오마카세, 예약 필수</td></tr>
</table>
```

---

## CTA 위치 규칙

- ✅ 식당 설명 body 뒤에 "상세 보기" 링크 배치
- ✅ ending에서 AI 추천 서비스로 유도
- ❌ intro 안에 CTA 금지
- ❌ TOC 바로 앞 CTA 금지
- ❌ 광고 바로 앞뒤에 CTA 연속 배치 금지

---

## 내부 링크 규칙

- 식당 상세 페이지 링크: `/pangyo/restaurant/{name}`
- 카테고리 페이지 링크: `/pangyo/category/{slug}`
- AI 추천 유도: `<a href="/pangyo">판교 AI 맛집 추천 받기</a>`
- ending 섹션에 3~5개 관련 글/페이지 링크 필수
- 존재하지 않는 식당명/slug 사용 금지 — 반드시 data 파일에서 실존 여부 확인

---

## 이미지 규칙 요약

- 대표 이미지 1장 (intro 직후)
- 본문 보조 이미지 최대 1~2장 (비교 인포그래픽 우선)
- 권장 최대 3장
- alt: 구체적 설명 (`판교역 고기구이 맛집 7곳 가격 비교표 2026`)
- 식당 사진보다 비교표/인포그래픽/지도 이미지 우선

---

## 포스팅 유형별 가이드

### 유형 1. 지역 카테고리 추천 (핵심)
- 검색의도: "판교역 고기 맛집", "삼성역 이자카야 추천"
- 필수: 5~7곳 추천 + 비교표 + 상황별 요약
- 데이터: 평점, 리뷰수, 대표메뉴, 가격대
- CTA: 각 식당 상세 페이지 + AI 추천

### 유형 2. 상황별 가이드
- 검색의도: "잠실 회식 장소", "판교 혼밥 맛집"
- 필수: 상황에 맞는 식당 3~5곳 + 체크리스트
- 데이터: 수용 인원, 룸 유무, 주차, 가격대

### 유형 3. 지역 총정리
- 검색의도: "삼성역 점심 뭐 먹지", "영통역 맛집 추천"
- 필수: 카테고리별 대표 1곳씩 + 가격대별 분류
- 데이터: 전체 카테고리 커버

### 유형 4. 비교형
- 검색의도: "판교 삼겹살 가격 비교", "잠실 스시 어디가 좋아"
- 필수: 동일 카테고리 3~5곳 직접 비교
- 데이터: 가격, 평점, 메뉴, 특징 테이블

### 유형 5. 시즌·트렌드
- 검색의도: "2026 여름 삼성역 야장", "겨울 잠실 해장국"
- 필수: 시즌 연관 키워드 + 날씨 연동 추천
- 데이터: 야장/테라스 여부, 계절 메뉴
