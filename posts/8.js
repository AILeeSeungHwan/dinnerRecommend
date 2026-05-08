const post = {
  id: 8,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역 데이트 맛집, 검색하면 너무 많이 나온다. 859곳 데이터에서 실제로 갈 만한 5곳만 뽑았다.</p><p>평균 평점 4.9점. 가격대는 6,000원부터 시작하며, 2026년 5월 기준이고, 분위기·코스 구성·예약 여부·뷰을 위주로 비교했다.</p><p>소개 순서: 해화장, 일상정원 코엑스점, 솔트랑 스테이크 삼성, 모도우 삼성, 논두렁오리주물럭 선릉직영점.</p>",
    },
    {
      type: 'toc',
    },
    {
      type: 'h2',
      id: "criteria",
      text: "선정 기준 — 왜 이 5곳인가",
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: "<p>삼성역 전체 859곳에서 데이트 카테고리 식당을 추렸다. 평점 4.6점 이상, 분위기·코스 구성·예약 여부·뷰 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
    },
    {
      type: 'h2',
      id: "해화장",
      text: "해화장 — 평점 4.9점 프리미엄 레스토랑",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/8/해화장-1.jpg",
      alt: "해화장 대표 사진",
      caption: "해화장",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/해화장\">해화장</a>. 횟집·해산물 전문이고 평점 4.9점(리뷰 47건).</p><p>메뉴: [봄, 바다향 터지는] 봄멍게 23,000원 / [봄,바다향 터지는] 돌멍게 38,000원.</p><p>주차도 된다.</p><p><a href=\"/dinner/samseong/restaurant/해화장\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "일상정원-코엑스점",
      text: "일상정원 코엑스점 — 평점 4.8점 프리미엄 레스토랑",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/8/일상정원-코엑스점-1.jpg",
      alt: "일상정원 코엑스점 대표 사진",
      caption: "일상정원 코엑스점",
    },
    {
      type: 'body',
      html: "<p>구름 스키야키(관서식)(21,400원)이 대표 메뉴인 <a href=\"/dinner/samseong/restaurant/일상정원 코엑스점\">일상정원 코엑스점</a>. 미소 샤브샤브(관동식), NEW, 사케마구로동 같은 메뉴도 있다.</p><p>그 외에 NEW, 지라시스시, NEW, 규나베 서로인 한우 1++도 있다.</p><p>주차는 된다. 예약 가능.</p><p>평점 4.8점이면 이 동네에서 상위권이다. 리뷰 706건.</p><p><a href=\"/dinner/samseong/restaurant/일상정원 코엑스점\" style=\"color:var(--primary)\">→ 일상정원 코엑스점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "솔트랑-스테이크-삼성",
      text: "솔트랑 스테이크 삼성 — 평점 5점 프리미엄 레스토랑",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/8/솔트랑-스테이크-삼성-1.jpg",
      alt: "솔트랑 스테이크 삼성 대표 사진",
      caption: "솔트랑 스테이크 삼성",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\">솔트랑 스테이크 삼성</a>. 스테이크하우스 전문이고 평점 5점(리뷰 184건).</p><p>메뉴: T-bone (100g당) 19,800원 / 솔트허브크런치 토마호크(100g당) 23,000원 / 쿠스쿠스 타볼레 9,900원 / 해산물 황태 알리오올리오 16,900원.</p><p>주차도 된다.</p><p><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "모도우-삼성",
      text: "모도우 삼성 — 분위기 좋은 데이트 추천",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/8/모도우-삼성-1.jpg",
      alt: "모도우 삼성 대표 사진",
      caption: "모도우 삼성",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/모도우 삼성\">모도우 삼성</a>. 한식·코스 전문이고 평점 4.6점(리뷰 154건).</p><p>가격대 9,000~15,000원.</p><p><a href=\"/dinner/samseong/restaurant/모도우 삼성\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "논두렁오리주물럭-선릉직영점",
      text: "논두렁오리주물럭 선릉직영점 — 평점 5점 프리미엄 레스토랑",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/8/논두렁오리주물럭-선릉직영점-1.jpg",
      alt: "논두렁오리주물럭 선릉직영점 대표 사진",
      caption: "논두렁오리주물럭 선릉직영점",
    },
    {
      type: 'body',
      html: "<p>양념 오리 주물럭(2인~3인)(58,000원)이 대표 메뉴인 <a href=\"/dinner/samseong/restaurant/논두렁오리주물럭 선릉직영점\">논두렁오리주물럭 선릉직영점</a>. 양념 오리 주물럭(2인~3인), 양념 오리 주물럭(2인~3인) 같은 메뉴도 있다.</p><p>그 외에 대패 주물럭 한판(2~3인), 대패 주물럭 한판 반(4인)도 있다.</p><p>주차는 된다. 예약 가능.</p><p>평점 5점이면 이 동네에서 상위권이다. 리뷰 485건. 코스 기준 인당 0~5만원대. 특별한 날에 맞는 가격.</p><p><a href=\"/dinner/samseong/restaurant/논두렁오리주물럭 선릉직영점\" style=\"color:var(--primary)\">→ 논두렁오리주물럭 선릉직영점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 데이트 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/해화장\">해화장</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">47건</td><td style=\"padding:7px 6px;text-align:center\">23,000~38,000원</td><td style=\"padding:7px 6px\">횟집·해산물 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/일상정원 코엑스점\">일상정원 코엑스점</a></td><td style=\"padding:7px 6px;text-align:center\">4.8</td><td style=\"padding:7px 6px;text-align:center\">706건</td><td style=\"padding:7px 6px;text-align:center\">6,000~20,900원</td><td style=\"padding:7px 6px\">혼밥 편한 곳</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\">솔트랑 스테이크 삼성</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">184건</td><td style=\"padding:7px 6px;text-align:center\">8,500~23,000원</td><td style=\"padding:7px 6px\">스테이크하우스 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/모도우 삼성\">모도우 삼성</a></td><td style=\"padding:7px 6px;text-align:center\">4.6</td><td style=\"padding:7px 6px;text-align:center\">154건</td><td style=\"padding:7px 6px;text-align:center\">9,000~15,000원</td><td style=\"padding:7px 6px\">한식·코스 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/논두렁오리주물럭 선릉직영점\">논두렁오리주물럭 선릉직영점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">485건</td><td style=\"padding:7px 6px;text-align:center\">8,000~58,000원</td><td style=\"padding:7px 6px\">단체석·회식 가능</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>단체·회식:</strong> 논두렁오리주물럭 선릉직영점 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>혼밥:</strong> 일상정원 코엑스점 — 1인 식사가 부담 없는 곳입니다.</li><li><strong>평점 최고:</strong> 솔트랑 스테이크 삼성 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 일상정원 코엑스점 (리뷰 706건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>해화장, 일상정원 코엑스점은 예약하고 가는 게 좋다. 주말 저녁은 특히.</li><li>주차 되는 곳: 해화장, 일상정원 코엑스점, 솔트랑 스테이크 삼성.</li><li>모도우 삼성 등은 주차장이 없다. 대중교통이 편하다.</li><li>데이트면 예약은 기본이다. 금토 저녁은 3일 전에는 잡아야 한다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/date",
      text: "삼성역 데이트 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
