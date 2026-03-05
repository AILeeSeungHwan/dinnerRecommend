# dinner.ambitstock.com

강남·삼성역 맛집 AI 추천 서비스

## 페이지 구조 (URL)

```
dinner.ambitstock.com/                                    ← 메인 (지역 선택)
dinner.ambitstock.com/dinner/samseong                     ← 삼성역 AI 추천 앱
dinner.ambitstock.com/dinner/samseong/gukbap              ← 삼성역 국밥 카테고리
dinner.ambitstock.com/dinner/samseong/meat                ← 고기구이·한우
dinner.ambitstock.com/dinner/samseong/izakaya             ← 이자카야
dinner.ambitstock.com/dinner/samseong/chinese             ← 중식
dinner.ambitstock.com/dinner/samseong/western             ← 이탈리안·양식
dinner.ambitstock.com/dinner/samseong/group               ← 회식·단체
dinner.ambitstock.com/dinner/samseong/restaurant/[이름]   ← 개별 식당 페이지
dinner.ambitstock.com/dinner/gangnam                      ← 강남역 (준비중)
dinner.ambitstock.com/dinner/jamsil                       ← 잠실역 (준비중)
dinner.ambitstock.com/sitemap.xml                         ← SEO 사이트맵
```

---

## 배포 방법 (GitHub + Vercel)

### 1단계: GitHub 저장소 만들기

1. [github.com](https://github.com) 접속 → 로그인
2. 우상단 `+` → `New repository`
3. Repository name: `dinner-ambitstock`
4. Public 선택 → `Create repository`
5. 이 폴더의 파일들을 **드래그 앤 드롭**으로 업로드
   - `uploading an existing file` 클릭
   - 전체 파일 선택해서 올리기
   - Commit changes 클릭

### 2단계: Vercel 연결

1. [vercel.com](https://vercel.com) → `Sign Up` → `Continue with GitHub`
2. `New Project` → GitHub 저장소 `dinner-ambitstock` 선택
3. `Import` 클릭
4. **Environment Variables** 설정:
   - Name: `ANTHROPIC_API_KEY`
   - Value: (Anthropic 콘솔에서 발급한 API 키)
5. `Deploy` 클릭 → 1~2분 후 자동 배포 완료

### 3단계: 도메인 연결 (dinner.ambitstock.com)

1. Vercel 프로젝트 → `Settings` → `Domains`
2. `dinner.ambitstock.com` 입력 → `Add`
3. Vercel이 DNS 설정값 안내 (CNAME 레코드)
4. ambitstock.com 도메인 관리 페이지 (가비아/카페24 등)에서:
   - 타입: `CNAME`
   - 이름(호스트): `dinner`
   - 값: Vercel이 알려준 주소 (예: `cname.vercel-dns.com`)
5. DNS 전파 10~30분 후 적용

### 이후 업데이트 방법

GitHub에서 파일 직접 수정 → Commit → Vercel 자동 재배포

---

## 로컬 개발 환경

```bash
npm install
cp .env.local.example .env.local
# .env.local 파일에 ANTHROPIC_API_KEY 입력
npm run dev
# http://localhost:3000 접속
```

---

## 데이터 추가 방법

`data/samseong.js` 파일에 식당 객체 추가:

```js
{
  name: "식당이름",
  type: "국밥·해장국",
  cat: ["국밥", "한식"],
  e: "🥣",
  priceRange: "8000~12000",
  rt: 4.3,         // Google 평점
  cnt: 1200,       // 리뷰 수
  addr: "영동대로 86길 17",
  hours: "AM 7–PM 10 (매일)",
  tags: ["해장", "아침가능", "가성비"],
  moods: ["피곤함", "혼밥"],
  wx: ["비", "쌀쌀함"],
  scene: ["해장", "혼자 밥"],
  rv: ["리뷰1", "리뷰2"],
  lat: 37.508,
  lng: 127.065
}
```

---

## SEO 전략

- 각 페이지 개별 `<title>`, `<meta description>`, `canonical` 설정
- Schema.org 구조화 데이터 (Restaurant, ItemList)
- `/sitemap.xml` 자동 생성 (전체 페이지 포함)
- `/robots.txt` 설정
- 삼성역 맛집 관련 롱테일 키워드 타겟:
  - "삼성역 맛집 추천"
  - "삼성역 국밥", "코엑스 이자카야"
  - "삼성동 회식장소", "삼성역 가성비 점심"
  - 식당명 직접 검색 (개별 페이지)
