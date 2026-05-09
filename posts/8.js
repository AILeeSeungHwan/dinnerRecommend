const post = {
  id: 8,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역 데이트 맛집을 검색하면 너무 많은 결과가 나옵니다. 859곳의 데이터에서 실제로 방문할 만한 5곳만 선별하였습니다.</p><p>평균 평점 4.9점입니다. 가격대는 6,000원부터 시작하며, 2026년 5월 기준이며, 분위기·코스 구성·예약 여부·뷰을 위주로 비교하였습니다.</p><p>소개 순서: 해화장, 일상정원 코엑스점, 솔트랑 스테이크 삼성, 모도우 삼성, 논두렁오리주물럭 선릉직영점.</p>",
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
      html: "<p>삼성역 전체 859곳에서 데이트 카테고리에 해당하는 식당을 선별하였습니다. 평점 4.6점 이상, 분위기·코스 구성·예약 여부·뷰 기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
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
      html: "<p><a href=\"/dinner/samseong/restaurant/해화장\">해화장</a>. 횟집·해산물 전문점입니다. 4.9점에 리뷰 47건이 쌓여 있습니다.</p><p>메뉴를 살펴보면, [봄, 바다향 터지는] 봄멍게 23,000원 / [봄,바다향 터지는] 돌멍게 38,000원 등이 있습니다.</p><p>주차도 가능합니다. 예약이 가능합니다.</p><p>평점 4.9점에 리뷰 47건이면 이 근처에서 손에 꼽히는 곳입니다.</p><p>인기가 많아서 웨이팅이 좀 있는 편입니다. 점심 피크 시간을 피하시면 대기 시간을 줄일 수 있습니다. 재료가 신선합니다. 당일 재료를 사용한다는 점에서 식재료에 대한 신뢰도가 높습니다.</p><p><a href=\"/dinner/samseong/restaurant/해화장\" style=\"color:var(--primary)\">→ 해화장 상세 정보 보기</a></p>",
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
      html: "<p>구름 스키야키(관서식) 21,400원. <a href=\"/dinner/samseong/restaurant/일상정원 코엑스점\">일상정원 코엑스점</a>의 간판 메뉴입니다. 미소 샤브샤브(관동식), NEW, 사케마구로동 같은 메뉴도 인기가 좋습니다.</p><p>그 외에 NEW, 지라시스시(25,400원), NEW, 규나베 서로인 한우 1++(32,400원)도 있습니다.</p><p>주차가 가능합니다. 예약이 가능합니다.</p><p>4.8점짜리 식당은 흔하지 않습니다. 리뷰도 706건이나 되어 검증된 맛집이라 하겠습니다.</p><p>재방문 의사가 있다는 리뷰가 많습니다. 한 번 가보시면 단골이 될 가능성이 높은 곳입니다. 재료가 신선합니다. 당일 재료를 사용한다는 점에서 식재료에 대한 신뢰도가 높습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p><a href=\"/dinner/samseong/restaurant/일상정원 코엑스점\" style=\"color:var(--primary)\">→ 일상정원 코엑스점 상세 정보 보기</a></p>",
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
      html: "<p><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\">솔트랑 스테이크 삼성</a>. 스테이크하우스 전문점으로, 평점 5점에 리뷰 184건을 기록하고 있습니다.</p><p>T-bone (100g당) 19,800원이 가장 인기 있는 메뉴이며, 솔트허브크런치 토마호크(100g당) 23,000원, 쿠스쿠스 타볼레 9,900원도 추천드립니다.</p><p>주차도 가능합니다. 예약이 가능합니다.</p><p>5점짜리 식당은 흔하지 않습니다. 리뷰도 184건이나 되어 검증된 맛집이라 하겠습니다.</p><p>맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다. 안주 퀄리티가 괜찮습니다. 메인 메뉴 외에도 사이드 메뉴의 완성도가 높다는 평입니다.</p><p><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\" style=\"color:var(--primary)\">→ 솔트랑 스테이크 삼성 상세 정보 보기</a></p>",
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
      html: "<p><a href=\"/dinner/samseong/restaurant/모도우 삼성\">모도우 삼성</a>. 한식·코스 전문점입니다. 4.6점에 리뷰 154건이 쌓여 있습니다.</p><p>가격대는 9,000~15,000원입니다.</p><p>평점 4.6점, 리뷰 154건으로 나쁘지 않은 수치를 보이고 있습니다.</p><p><a href=\"/dinner/samseong/restaurant/모도우 삼성\" style=\"color:var(--primary)\">→ 모도우 삼성 상세 정보 보기</a></p>",
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
      html: "<p><a href=\"/dinner/samseong/restaurant/논두렁오리주물럭 선릉직영점\">논두렁오리주물럭 선릉직영점</a>을 방문하시면 양념 오리 주물럭(2인~3인)을 추천드립니다. 58,000원에 드실 수 있습니다. 한마리(2~3인)  (고기800g+야채). 그 외에도 양념 오리 주물럭(2인~3인), 양념 오리 주물럭(2인~3인)를 많이 찾으십니다.</p><p>그 외에 대패 주물럭 한판(2~3인)(36,000원), 대패 주물럭 한판 반(4인)(48,000원)도 있습니다.</p><p>주차가 가능합니다. 예약이 가능합니다.</p><p>평점 5점에 리뷰 485건이면 이 근처에서 손에 꼽히는 곳입니다. 가격은 인당 5만원 정도 보시면 됩니다. 기념일이라면 충분히 가치 있는 선택이 되실 겁니다.</p><p>맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다. 주차가 편하다는 의견이 있습니다. 차량으로 방문하시는 분들에게 유리한 조건입니다. 매장이 깔끔하게 관리되고 있습니다.</p><p><a href=\"/dinner/samseong/restaurant/논두렁오리주물럭 선릉직영점\" style=\"color:var(--primary)\">→ 논두렁오리주물럭 선릉직영점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 데이트 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/해화장\">해화장</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">47건</td><td style=\"padding:7px 6px;text-align:center\">23,000~38,000원</td><td style=\"padding:7px 6px\">횟집·해산물 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/일상정원 코엑스점\">일상정원 코엑스점</a></td><td style=\"padding:7px 6px;text-align:center\">4.8</td><td style=\"padding:7px 6px;text-align:center\">706건</td><td style=\"padding:7px 6px;text-align:center\">6,000~20,900원</td><td style=\"padding:7px 6px\">혼밥 편한 곳</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\">솔트랑 스테이크 삼성</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">184건</td><td style=\"padding:7px 6px;text-align:center\">8,500~23,000원</td><td style=\"padding:7px 6px\">스테이크하우스 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/모도우 삼성\">모도우 삼성</a></td><td style=\"padding:7px 6px;text-align:center\">4.6</td><td style=\"padding:7px 6px;text-align:center\">154건</td><td style=\"padding:7px 6px;text-align:center\">9,000~15,000원</td><td style=\"padding:7px 6px\">한식·코스 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/논두렁오리주물럭 선릉직영점\">논두렁오리주물럭 선릉직영점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">485건</td><td style=\"padding:7px 6px;text-align:center\">8,000~58,000원</td><td style=\"padding:7px 6px\">룸 있음</td></tr></tbody></table>",
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
      html: "<ul><li>해화장, 일상정원 코엑스점은 사전에 예약하고 방문하시는 것이 좋습니다. 특히 주말 저녁에는 예약이 필수입니다.</li><li>주차 가능한 곳: 해화장, 일상정원 코엑스점, 솔트랑 스테이크 삼성.</li><li>모도우 삼성 등은 전용 주차장이 없습니다. 대중교통 이용을 권장드립니다.</li><li>데이트를 계획하신다면 예약은 필수입니다. 금요일·토요일 저녁은 최소 3일 전에 예약하시기 바랍니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/date",
      text: "삼성역 데이트 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
