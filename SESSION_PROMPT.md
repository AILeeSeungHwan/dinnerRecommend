# SESSION_PROMPT.md — Claude Code 세션 프롬프트

> 각 Phase별로 필요한 프롬프트를 선택하여 Claude Code에 복붙한다.

---

## Phase 1: 네이버 데이터 수집 + 데이터 보강

```
프로젝트 루트의 CLAUDE.md, PROGRESS.md, NAVER_CRAWL.md를 읽어줘.

dinner.ambitstock.com의 식당 데이터를 네이버 기반으로 보강하는 작업을 시작한다.

[현재 상태]
- 6개 지역 약 1,360개 식당. 데이터 출처: Google Places API
- 평점(rt), 리뷰수(cnt)가 Google 기반 → 네이버로 교체 필요
- tags 70~82% 비어있음 (영통/망포/영통구청/판교)
- 메뉴/가격 정보 없음
- 기존 지역에 아직 포함되지 않은 식당도 많음

[이번 세션 목표]
1. 네이버 플레이스 크롤러 스크립트 작성 (scripts/naver-crawl.mjs)
2. 지역별 키워드 검색 → 식당 목록 수집 + 기존 데이터 매칭
3. 각 식당의 상세 정보 크롤링 (평점, 리뷰, 메뉴+가격, 영업시간)
4. 리뷰 텍스트에서 키워드 추출 → tags/keywords/moods/scene 자동 생성

[절대 규칙]
- 네이버 리뷰 원문은 rv 필드에 내부 저장만. 사이트에 절대 직접 노출 금지.
- 리뷰 데이터는 키워드 추출, 태그 생성, AI 추천 참고용으로만 사용.

[확장 스키마 - CLAUDE.md §3 참조]
기존 필드 유지 + 아래 추가:
naverPlaceId, naverBlogCnt, menuItems, keywords, naverUrl, updatedAt, parking, reservation

[크롤링 설정]
NAVER_CRAWL.md의 검색 키워드, rate limit, 파이프라인 참조.

먼저 네이버 플레이스의 크롤링 가능한 API 엔드포인트를 조사하고,
가장 효율적인 크롤링 방식을 설계한 뒤 스크립트를 작성해줘.
```

---

## Phase 2: SEO 구조 강화

```
CLAUDE.md, PROGRESS.md, SEO-GUIDE.md를 읽어줘.

Phase 1 데이터 수집 완료. 이제 SEO 구조를 강화한다.

[이번 세션 목표]
1. sitemap.xml 전 지역 확장 (현재 삼성역+잠실만 → 6지역 + 전 카테고리 + 전 식당)
2. 카테고리 페이지에 ItemList JSON-LD 추가
3. 메인 페이지에 WebSite + SearchAction JSON-LD 추가
4. 메타 태그 패턴 표준화 (SEO-GUIDE.md §2 참조)
5. canonical URL 설정
6. 식당 상세 페이지 JSON-LD 보강 (메뉴 정보 추가)

[참조]
- car.ambitstock.com에서 이미 BreadcrumbList, 포스트별 JSON-LD 사용 중
- 같은 패턴을 dinner에 적용
- SEO-GUIDE.md의 JSON-LD 구조 참조

sitemap 확장부터 시작해줘. 현재 pages/sitemap.xml.js를 수정하여
전 지역 데이터를 import하고 모든 URL을 포함하도록.
```

---

## Phase 3: 콘텐츠 강화 (기존 페이지)

```
CLAUDE.md, PROGRESS.md를 읽어줘.

기존 페이지들의 SEO 콘텐츠를 강화한다.
claude --dangerously-skip-permissions 모드로 실행.

[이번 세션 목표]

### A. 카테고리 페이지 가이드 콘텐츠 강화
현재: 하단 가이드 2~3줄 → 목표: 800~1,200자
각 카테고리 × 각 지역별로 독창적 콘텐츠 작성.

포함할 내용:
- 카테고리 소개 (이 카테고리의 특징, 가격대 범위)
- 상황별 추천 (회식/데이트/혼밥/점심)
- 가격대별 가이드 (1만원대/2~3만원대/4만원+)
- 관련 카테고리 내부링크 2~3개
- AI 추천 유도 CTA

### B. 지역 페이지 하단 가이드 (판교/영통/망포/영통구청)
현재: SEO 텍스트 없음 → 목표: 1,000~1,500자

각 지역별 독창적 내용:
- 판교: 테크노밸리 직장인·백현동 카페거리·아브뉴프랑
- 영통: 삼성전자 DS·영통 먹자골목
- 망포: 삼성전자 생활가전·망포 로컬 맛집
- 영통구청: 매탄동·삼성전기·구청 인근

### C. 메인 페이지 확장
현재 SEO 텍스트 5문단 → 8~10문단 + FAQ 스키마 3~5개

[작성 원칙]
- CLAUDE.md §5 핵심 운영 원칙 준수
- 같은 템플릿 복제 금지 — 각 지역/카테고리별 독창적
- RULE.md §7 금지 문구 준수

카테고리 페이지부터 시작해줘. 판교 지역의 카테고리 페이지들을 먼저 수정하고,
그 패턴을 다른 지역에도 적용.
```

---

## Phase 4: 포스팅 시스템 구축

```
CLAUDE.md, PROGRESS.md, POST_TEMPLATE.md, RULE.md를 읽어줘.

포스팅 시스템을 신규 구축한다. car.ambitstock.com의 포스트 구조를 차용.

[이번 세션 목표]
1. posts/ 디렉토리 생성
2. data/posts.js 구조 생성 (메타데이터 배열)
3. pages/posts/[slug].js 포스트 렌더러 생성
   - car 사이트의 [slug].js 섹션 렌더러 패턴 차용
   - TOC 자동 생성 (h2 기반)
   - JSON-LD (Article + BreadcrumbList)
   - 반응형 레이아웃
4. sitemap에 포스트 URL 포함
5. 메인/지역 페이지에 최신 포스트 피드 추가

[포스트 렌더러 섹션 타입]
- intro, toc, ad, h2, body, image, cta, ending (POST_TEMPLATE.md 참조)

[data/posts.js 구조]
{
  id, slug, title, description, category, region, date, tags, thumbnail
}

먼저 pages/posts/[slug].js 렌더러를 만들어줘.
car 사이트의 pages/[slug].js를 참고하되 dinner 사이트에 맞게 조정.
```

---

## Phase 5: 포스팅 콘텐츠 작성

```
CLAUDE.md, POST_TEMPLATE.md, SKILL.md를 읽어줘.

포스팅 만들땐 TeamCreate로 에이전트 팀생성해줘.
에이전트 팀으로 프로젝트 코드를 병렬 리뷰하고, 문제를 수정하며,
에이전트 이용해서 계획승인모드로 각 팀원이 변경하기 전에 반드시 plan approval 받도록 해줘.
우리는 포스팅을 만드는 것이므로 각 팀원은 할당된 포스팅을 만들고 승인받은 뒤 생성하도록 해줘.
모든 팀원 모델은 Sonnet으로 설정해줘.

[이번 세션 목표]
1순위 포스트 5편 작성:

1. pangyo-lunch-meat-guide-2026
   - "판교역 점심 고기 맛집 7선 | 2026 가격·평점 비교"
   - 판교 고기구이 5~7곳, 비교표, 상황별 추천

2. samsung-izakaya-best-2026
   - "삼성역 이자카야 추천 7곳 | 코엑스 근처 술집 가이드"
   - 삼성역 이자카야/포차 7곳, 회식·데이트·혼술 구분

3. jamsil-team-dinner-2026
   - "잠실 회식 장소 추천 2026 | 단체석·룸·주차 완벽 비교"
   - 잠실 회식 적합 식당 5~7곳, 수용인원·가격·룸 비교

4. pangyo-honbap-budget-2026
   - "판교역 혼밥 맛집 1만원대 추천 | 가성비 점심"
   - 판교 1인식 가능 + 가성비 식당 5곳

5. samsung-lunch-guide-2026
   - "삼성역 점심 뭐 먹지? 카테고리별 추천 총정리"
   - 삼성역 카테고리별 대표 1곳씩 총정리

[작성 원칙]
- POST_TEMPLATE.md 구조 준수
- 추천 식당은 반드시 data/{region}.js에 실존 확인
- 네이버 리뷰 원문 인용 절대 금지
- 평점, 리뷰수, 가격은 데이터 기반 (기준일 명시)
- SKILL.md §5 승인 실패 조건 체크

각 Content Builder가 2~3편씩 담당하여 병렬 작성.
```

---

## Phase 6: 검색 고도화

```
CLAUDE.md, PROGRESS.md를 읽어줘.

검색 로직을 고도화한다.

[이번 세션 목표]
1. keywords 필드 기반 검색 매칭 로직 추가
   현재 NL_MENU_MAP (정규식) → cat/tags 매칭
   추가: keywords 필드까지 검색 범위 확장
   예: "주차 되는 고기집" → keywords에 "주차가능" + cat에 "고기구이"

2. menuItems 기반 메뉴명 검색 추가
   "된장찌개" → menuItems에 "된장찌개" 포함 식당 매칭
   메뉴명 부분 매칭 허용

3. AI 추천 프롬프트 강화 (pages/api/recommend.js)
   기존 context에 keywords, menuItems 데이터 추가
   AI가 더 정확한 추천 이유를 생성할 수 있도록

4. 식당 상세 페이지에 "방문자 키워드" 뱃지 추가
   keywords 데이터를 시각적 뱃지로 표시
   (리뷰 원문 아닌 추상화된 키워드만)

5. 식당 상세 페이지에 메뉴+가격 섹션 추가
   menuItems 데이터 활용

각 지역 페이지의 검색 로직을 수정.
node --check 전체 통과 확인.
```

---

## 긴급: sitemap 확장 (P0)

```
CLAUDE.md를 읽어줘.

sitemap이 삼성역+잠실만 포함. 즉시 전 지역으로 확장.

pages/sitemap.xml.js를 수정하여:
1. 전 6개 지역 데이터 import
2. 전 지역 페이지 URL
3. 전 카테고리 페이지 URL (6지역 × 12카테고리)
4. 전 식당 상세 URL (~1,360개)
5. 포스트 URL (있을 경우)
6. priority: 메인 1.0 > 지역 0.9 > 카테고리 0.8 > 포스트 0.7 > 식당 0.6
```

---

## 긴급: 빈 태그 AI 자동 생성 (P0)

```
CLAUDE.md, NAVER_CRAWL.md를 읽어줘.

네이버 크롤링 전, 기존 데이터의 빈 tags를 AI로 임시 채운다.

대상: data/ 아래 6개 파일에서 tags가 빈 배열([])이거나 1개 이하인 식당 전체.

매핑 룰 (NAVER_CRAWL.md §6 참조):
- name에 "국밥/해장/설렁탕" → ["해장", "국물맛집"]
- name에 "이자카야/술집" → ["야장", "안주맛집"]
- rv에 "혼자/혼밥" → ["혼밥가능"]
- priceRange 15000 이하 → ["가성비", "점심추천"]
- rt 4.5 이상 → ["고평점"]
- cnt 500 이상 → ["리뷰많음"]

각 식당당 최소 3개, 최대 8개 태그 생성.
수정 후 node --check 전체 파일.
기존 tags가 있는 식당은 건드리지 않음.
```
