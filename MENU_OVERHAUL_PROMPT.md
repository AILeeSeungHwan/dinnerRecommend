# MENU_OVERHAUL_PROMPT.md — 전 지역 메뉴 데이터 전수조사 + 스키마 개선 실행 프롬프트

> 마지막 업데이트: 2026-03-16
> 이 문서를 Claude Code에 붙여넣어 실행한다.
> `claude --dangerously-skip-permissions`로 실행. 모든 권한 위임 상태.
> 반드시 CLAUDE.md, NAVER_CRAWL.md를 먼저 읽을 것.

---

## 배경 및 목표

현재 menuItems 데이터에 심각한 구조 문제가 있다.

### 현재 문제
```
현재 스키마: { name: string, price: number }

문제: name 필드에 "메뉴 이름"이 아니라 "메뉴 설명"이 들어간 경우가 대량 존재.

예시 (잘못된 데이터):
  { name: "향긋한 봄 내음이 묻어있는 전 메뉴입니다.", price: 18000 }
  { name: "골동면과 광평 돔베고기를 함께 먹을 수 있는 한상차림", price: 27000 }
  { name: "매운맛을 원하는 모든 고객님들을 위해 준비했습니다.", price: 15900 }

이러면 사용자가 이 메뉴가 실제로 "무슨 메뉴"인지 알 수 없다.
```

### 목표 스키마
```js
menuItems: [
  {
    menuName: "절편등심",           // 실제 메뉴 이름 (짧고 명확)
    price: 53000,                    // 가격 (숫자)
    description: "우도옥만의 커팅 방식으로 꽃등심을 절편처럼 컷팅한 메뉴"  // 메뉴 설명 (있으면)
  },
  {
    menuName: "한우 육개장",
    price: 18000,
    description: "한우고기 듬뿍 넣어 진하게 우려낸 얼큰한 육개장"
  },
  {
    menuName: "새우빠에야",          // 설명이 없는 경우 description 생략 가능
    price: 36000,
    description: ""
  }
]
```

### 작업 범위
```
삼성역: 기존 581개 식당의 menuItems 스키마 변환 + 재크롤링으로 menuName 확보
잠실:   네이버 크롤링 신규 실행 → 새 스키마로 수집
판교:   네이버 크롤링 신규 실행 → 새 스키마로 수집
영통:   네이버 크롤링 신규 실행 → 새 스키마로 수집
망포:   네이버 크롤링 신규 실행 → 새 스키마로 수집
영통구청: 네이버 크롤링 신규 실행 → 새 스키마로 수집
```

---

## 작업 단계

### 단계 1: 크롤러 스키마 개선

네이버 플레이스 메뉴 페이지의 실제 구조를 반영하여 크롤러를 수정한다.

네이버 플레이스 메뉴 페이지 (https://pcmap.place.naver.com/restaurant/{placeId}/menu/list) 의 DOM 구조:

```
메뉴 항목 하나의 구조:
┌─────────────────────────────┐
│ [이미지]                      │
│ 메뉴 이름 (짧은 텍스트)        │  ← 이것이 menuName
│ 메뉴 설명 (긴 텍스트, 있을 수도 없을 수도)  │  ← 이것이 description
│ 가격원                        │  ← 이것이 price
└─────────────────────────────┘
```

#### 수정 대상 파일들:

**1) scripts/naver-detail-v3.mjs 수정**

현재 로직 (117~136행):
```js
// 현재: "메뉴명\n가격원" 2줄 패턴만 추출
// 문제: 메뉴명 자리에 설명이 들어오면 구분 불가
```

수정 방향:
```js
// 네이버 메뉴 페이지에서 구조화된 요소로 추출
// CSS 셀렉터 기반으로 메뉴명 / 설명 / 가격을 분리 추출
const menuInfo = await page.evaluate(() => {
  const menus = []
  
  // 방법 1: 구조화된 메뉴 요소 (네이버 최신 UI)
  // .place_section_content의 메뉴 리스트 항목들
  document.querySelectorAll('.E2jtL, [class*="menu_item"], [class*="MenuItem"]').forEach(el => {
    // 메뉴명: 보통 첫 번째 텍스트 또는 특정 클래스
    const nameEl = el.querySelector('.lPzHi, .name, [class*="menuName"], [class*="item_name"]')
    // 설명: 두 번째 텍스트 또는 특정 클래스
    const descEl = el.querySelector('.kPogF, .desc, [class*="menuDesc"], [class*="item_desc"], [class*="detail"]')
    // 가격
    const priceEl = el.querySelector('.GXS1X, .price, [class*="price"]')
    
    const menuName = nameEl?.textContent?.trim() || ''
    const description = descEl?.textContent?.trim() || ''
    const priceText = priceEl?.textContent?.trim() || ''
    const price = parseInt((priceText).replace(/[^0-9]/g, '')) || 0
    
    if (menuName && menuName.length >= 1) {
      menus.push({ menuName, price, description })
    }
  })
  
  // 방법 2: 폴백 — 텍스트 기반 파싱 (구조화 요소를 못 찾은 경우)
  if (menus.length === 0) {
    const text = document.body?.innerText || ''
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
    
    for (let i = 0; i < lines.length - 1; i++) {
      const line = lines[i]
      const next = lines[i + 1]
      const priceMatch = next.match(/^([\d,]+)원$/)
      
      if (priceMatch && line.length >= 2 && line.length <= 50
          && !/^(대표|인기|추천|메뉴|홈|소식|리뷰|사진|정보|더보기)$/.test(line)) {
        
        const price = parseInt(priceMatch[1].replace(/,/g, ''))
        
        // 이름 vs 설명 판별:
        // 설명형 패턴: 20자 이상, 또는 ~입니다/~요리/~메뉴/~한상 등으로 끝남
        const isDescription = line.length > 20 
          || /입니다|메뉴입|드리는|즐기는|만들어진|준비했|묻어있는|볶은|우려낸|넣어|한상차림|맛볼 수|내어드리는|일품입니다|추천드립니다|즐길 수|차려지는/.test(line)
        
        if (isDescription) {
          // 이전 줄이 짧은 메뉴명일 수 있는지 확인
          const prevLine = i > 0 ? lines[i - 1] : ''
          if (prevLine.length >= 2 && prevLine.length <= 20 && !/^(대표|인기|추천|메뉴|홈|소식|리뷰|사진|정보|더보기|\d)/.test(prevLine)) {
            menus.push({ menuName: prevLine, price, description: line })
          } else {
            // 메뉴명을 알 수 없으면 description에만 저장
            menus.push({ menuName: '', price, description: line })
          }
        } else {
          // 짧고 명확한 메뉴명
          // 다음다음 줄이 설명인지 확인
          const descCandidate = (i + 2 < lines.length) ? lines[i + 2] : ''
          const hasDesc = descCandidate.length > 15 && !/^\d/.test(descCandidate) && !/원$/.test(descCandidate)
          
          menus.push({ 
            menuName: line, 
            price, 
            description: hasDesc ? descCandidate : '' 
          })
        }
      }
    }
  }
  
  return menus.slice(0, 10)
}).catch(() => [])
```

**중요**: 위 코드는 가이드라인이다. 실제 네이버 DOM 구조는 크롤링 시점에 다를 수 있으므로,
먼저 삼성역 식당 5개를 대상으로 테스트 크롤링하여 DOM 구조를 확인한 뒤 셀렉터를 확정해라.

**2) scripts/naver-crawl-browser.mjs 수정 (428~435행)**

현재:
```js
r.menuItems = place.menus.slice(0, 10).map(m => ({
  name: (m.name || '').trim(),
  price: parseInt((m.price || '').replace(/[^0-9]/g, '')) || 0
})).filter(m => m.name)
```

수정: API 응답에 description 필드가 있는지 확인하고 분리
```js
r.menuItems = place.menus.slice(0, 10).map(m => {
  const rawName = (m.name || '').trim()
  const rawDesc = (m.description || m.desc || '').trim()
  const price = parseInt((m.price || '').replace(/[^0-9]/g, '')) || 0
  
  // name이 설명형인지 판별
  const isNameActuallyDesc = rawName.length > 20 
    || /입니다|메뉴입|드리는|즐기는|만들어진|준비했|묻어있는|볶은|우려낸|넣어|한상차림/.test(rawName)
  
  return {
    menuName: isNameActuallyDesc ? '' : rawName,
    price,
    description: isNameActuallyDesc ? rawName : rawDesc
  }
}).filter(m => m.menuName || m.description)
```

**3) scripts/merge-naver-data.mjs 수정**

기존 데이터의 menuItems를 새 스키마로 변환하는 로직 추가:
```js
// 기존 { name, price } → { menuName, price, description } 변환
function migrateMenuItem(item) {
  const name = (item.name || '').trim()
  const price = item.price || 0
  
  // 기존 name이 설명형인지 판별
  const isDesc = name.length > 20 
    || /입니다|메뉴입|드리는|즐기는|만들어진|준비했|묻어있는|볶은|우려낸|넣어|한상차림|맛볼 수|내어드리는|일품입니다|추천드립니다|즐길 수|차려지는|코스$|세트$|한상$/.test(name)
  
  // 가격이 name에 포함된 경우 정리
  const cleanName = name.replace(/\d+[,.]?\d*원/g, '').replace(/\d+인\s*[-~]/g, '').trim()
  
  return {
    menuName: isDesc ? '' : cleanName,
    price,
    description: isDesc ? cleanName : ''
  }
}
```

---

### 단계 2: 삼성역 기존 데이터 스키마 마이그레이션

```
1. data/samseong.js 백업 → data/samseong.js.backup.menu-migration

2. 581개 식당의 menuItems를 새 스키마로 변환:
   - 기존 { name, price } → migrateMenuItem() 적용
   - menuName이 빈 문자열인 항목 수 카운트 (= 재크롤링 필요 대상)

3. 변환 결과 리포트 출력:
   - 정상 변환 (menuName 확보): X건
   - menuName 비어있음 (재크롤링 필요): Y건
   - 총 식당 수 / menuItems 보유 식당 수
```

---

### 단계 3: 삼성역 재크롤링 (menuName 확보)

```
단계 2에서 menuName이 비어있는 식당들을 대상으로 재크롤링한다.

대상: menuName이 '' 인 menuItem을 가진 식당 (naverPlaceId 필요)

크롤링 방법:
1. 해당 식당의 네이버 플레이스 메뉴 페이지 접속
   https://pcmap.place.naver.com/restaurant/{naverPlaceId}/menu/list
2. 단계 1에서 수정한 크롤러로 menuName + description + price 추출
3. 기존 데이터의 price와 매칭하여 menuName 채워넣기
4. 매칭 실패 시 description만 유지 (menuName은 빈 채로)

주의:
- rate limit: 요청 간 2초 간격 필수
- 진행 상황 checkpoint 저장 (scripts/naver-data/menu-fix-progress.json)
- 크롤링 중단 시 이어서 실행 가능하도록 설계
```

---

### 단계 4: 나머지 5개 지역 네이버 크롤링

```
잠실, 판교, 영통, 망포, 영통구청 5개 지역은 menuItems가 전혀 없다.
기존 naver-crawl-browser.mjs + naver-detail-v3.mjs를 수정된 스키마로 실행한다.

실행 순서:
1. 잠실 (131개 식당)
2. 판교 (423개 식당) ← 가장 많으므로 시간 소요
3. 영통 (181개 식당)
4. 망포 (135개 식당)
5. 영통구청 (101개 식당)

각 지역별 작업:
a) naver-crawl-browser.mjs 실행 → {region}-browser.json 생성
b) naver-detail-v3.mjs 실행 → 상세 데이터 보강
c) merge-naver-data.mjs 실행 → 기존 data/{region}.js에 병합

병합 규칙 (NAVER_CRAWL.md 참조):
- 기존 식당과 name + addr로 매칭
- 매칭된 식당: menuItems, rt, cnt, hours, tel 업데이트
- 매칭 안 된 식당: 신규 식당으로 추가 (위치 확인 후)
- 기존 tags, moods, scenes, wx 는 보존 (크롤링 데이터로 덮어쓰지 않음)
- rv 필드는 크롤링 리뷰로 교체 (단, 외부 노출 절대 금지 원칙 유지)

진행 상황 저장:
- scripts/naver-data/{region}-browser.json (크롤링 원본)
- scripts/naver-data/{region}-detail-progress.json (상세 크롤링 진행)
- 각 지역 완료 시 PROGRESS.md 업데이트
```

---

### 단계 5: 전체 데이터 검증

```
모든 크롤링 + 마이그레이션 완료 후 검증:

1. 각 지역 data 파일 구문 검사:
   node --check data/samseong.js
   node --check data/jamsil.js
   node --check data/pangyo.js
   node --check data/yeongtong.js
   node --check data/mangpo.js
   node --check data/yeongtongGu.js

2. menuItems 스키마 검증 (전 지역):
   - 모든 menuItem이 { menuName, price, description } 구조인지
   - menuName이 30자 이하인지
   - price가 양수인지
   - 기존 { name, price } 구조가 남아있지 않은지

3. 식당 데이터 무결성:
   - name 필드에 슬래시/일본어/특수문자 없는지 (validate_name 규칙)
   - lat/lng가 유효 범위인지
   - priceRange 형식이 "최저~최고" 인지

4. 식당 상세 페이지 영향 확인:
   - restaurant/[name].js 에서 menuItems 렌더링 로직이 새 스키마를 지원하는지
   - 기존: m.name + m.price 표시
   - 변경: m.menuName + m.description + m.price 표시
   - menuName이 비어있으면 description만 표시

5. 리포트 출력:
   각 지역별:
   - 총 식당 수
   - menuItems 보유 식당 수
   - menuName 확보율 (menuName이 비어있지 않은 비율)
   - 평균 menuItems 개수
   - 신규 추가된 식당 수 (크롤링으로 새로 발견)
```

---

### 단계 6: UI 렌더링 수정

```
식당 상세 페이지, 포스팅, 검색 결과에서 menuItems를 표시하는 모든 곳을 수정한다.

수정 대상 파일 (grep으로 찾기):
  grep -r "menuItem" --include="*.js" pages/ components/ posts/ lib/

표시 규칙:
┌─────────────────────────────────────────┐
│ [menuName이 있을 때]                      │
│                                          │
│ 절편등심 ·················· 53,000원      │
│ 우도옥만의 커팅 방식으로 꽃등심을          │
│ 절편처럼 컷팅한 메뉴                      │
│                                          │
│ [menuName이 없고 description만 있을 때]   │
│                                          │
│ 매운맛을 원하는 모든 고객님들을 위해       │
│ 준비했습니다. ············· 15,900원       │
│                                          │
│ [menuName만 있고 description 없을 때]     │
│                                          │
│ 프렌치렉 ·················· 38,000원      │
└─────────────────────────────────────────┘

구현:
- menuName이 있으면: 볼드로 표시, description은 그 아래 작은 글씨
- menuName이 없으면: description을 일반 텍스트로 표시
- 가격은 항상 오른쪽 정렬, 천 단위 콤마
```

---

### 단계 7: 커밋 및 마무리

```
모든 작업 완료 후:

1. 변경 파일 목록 확인: git diff --stat

2. 커밋 메시지:
   [feat]: menuItems 스키마 개선 (menuName+description+price) + 전 6지역 네이버 크롤링
   // 질문 의도: 메뉴 데이터에 설명만 있고 실제 메뉴이름이 없는 문제 해결

3. PROGRESS.md 업데이트:
   - Phase 1-3: ✅ 전 지역 네이버 데이터 수집 완료
   - Phase 1-4: ✅ 기존 데이터와 병합 + 스키마 확장 (menuName/description 분리)
   - 신규: Phase 7: menuItems 스키마 마이그레이션 ✅

4. CLAUDE.md §3 데이터 스키마 업데이트:
   menuItems 스키마를 { menuName, price, description }으로 갱신
```

---

## 중요 제약사항

```
1. 크롤링 rate limit: 요청 간 최소 2초 간격
2. 리뷰 원문(rv) 외부 노출 절대 금지 — 내부 키워드 분석용으로만 사용
3. 기존 tags, moods, scenes, wx 필드는 크롤링 데이터로 덮어쓰지 않음 (수동 큐레이션 보존)
4. data 파일의 JS 문자열 안전 규칙 준수 (CLAUDE.md 참조 — octal escape 방지 등)
5. validate_name 규칙 준수 (슬래시/일본어/특수문자 금지)
6. 크롤링 중단 시 이어서 실행 가능하도록 checkpoint 저장 필수
7. post 16 (보험 비교견적 TOP5) 터치 금지 (car site 규칙이지만 습관적으로 확인)
8. 네이버 플레이스 DOM 구조가 변경되었을 수 있으므로, 각 단계 시작 전 샘플 5개로 테스트 크롤링 실행
```
