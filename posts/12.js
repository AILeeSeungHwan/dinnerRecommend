const post = {
  id: 12,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역에서 중식 식당을 찾고 계신다면, 이 글 하나로 정리해 드리겠습니다. 총 859곳 중 중식 5곳을 엄선하여 비교하였습니다.</p><p>평균 평점 4.6점입니다. 가격대는 4,300원부터 시작하며, 2026년 5월 기준이며, 대표 메뉴·가격·양·단체 가능을 위주로 비교하였습니다.</p><p>소개 순서: 무탄 코엑스, 천미미 삼성점, 하이딜라오 코엑스, 이오복순대국 대치은마점, 일품양평해장국 강남대치점.</p>",
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
      html: "<p>삼성역 전체 859곳에서 중식 카테고리에 해당하는 식당을 선별하였습니다. 평점 4.2점 이상, 대표 메뉴·가격·양·단체 가능 기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
    },
    {
      type: 'h2',
      id: "무탄-코엑스",
      text: "무탄 코엑스 — 중식·퓨전 맛집",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/12/무탄-코엑스-1.jpg",
      alt: "무탄 코엑스 대표 사진",
      caption: "무탄 코엑스",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳입니다. <a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a>.</p><p>주차가 가능합니다. 예약이 가능합니다.</p><p>리뷰 7774건에 평점 4.9점을 유지하고 있습니다. 꽤 높은 수치로, 방문자 만족도가 우수한 곳입니다. 2인 이상이시면 여러 메뉴를 시켜서 나눠 드시기 좋은 구성입니다.</p><p>양이 많아서 배부르게 드실 수 있습니다. 남성분들도 충분히 만족할 수 있는 양입니다. 인기가 많아서 웨이팅이 좀 있는 편입니다. 점심 피크 시간을 피하시면 대기 시간을 줄일 수 있습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p><a href=\"/dinner/samseong/restaurant/무탄 코엑스\" style=\"color:var(--primary)\">→ 무탄 코엑스 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "천미미-삼성점",
      text: "천미미 삼성점 — 중식·요리 맛집",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/12/천미미-삼성점-1.jpg",
      alt: "천미미 삼성점 대표 사진",
      caption: "천미미 삼성점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/천미미 삼성점\">천미미 삼성점</a>. 평점 4.7점, 리뷰 71건 정도 있습니다.</p><p>메뉴를 살펴보면, 어향동고 45,000원 / 전가복(스페셜) 88,000원 / 통낙지 쟁반짜장 28,000원 / 미미짬뽕 13,000원 등이 있습니다.</p><p>주차도 가능합니다. 예약이 가능합니다.</p><p>71건 리뷰에 4.7점이면 충분히 검증된 곳이라 하겠습니다. 2인 이상이시면 여러 메뉴를 시켜서 나눠 드시기 좋은 구성입니다.</p><p>재료가 신선합니다. 당일 재료를 사용한다는 점에서 식재료에 대한 신뢰도가 높습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p><a href=\"/dinner/samseong/restaurant/천미미 삼성점\" style=\"color:var(--primary)\">→ 천미미 삼성점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "하이딜라오-코엑스",
      text: "하이딜라오 코엑스 — 중식·훠궈 맛집",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/12/하이딜라오-코엑스-1.jpg",
      alt: "하이딜라오 코엑스 대표 사진",
      caption: "하이딜라오 코엑스",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/하이딜라오 코엑스\">하이딜라오 코엑스</a>. 중식·훠궈 전문점입니다. 4.2점에 리뷰 59건이 쌓여 있습니다.</p><p>누누 딸기레어 케이크 (시즌마감) 8,500원이 가장 인기 있는 메뉴이며, NUNU COFFEE (BEST) 6,800원, 에그포테이토 브리오슈 4,800원도 추천드립니다.</p><p>고요한 달콤함이 머무는 수제 바닐라 푸딩</p><p>단체석이나 룸이 마련되어 있습니다. 주차도 가능합니다. 예약이 가능합니다.</p><p>59건 리뷰가 있으면 동네에서 나름 알려진 편입니다. 2인 이상이시면 여러 메뉴를 시켜서 나눠 드시기 좋은 구성입니다.</p><p>맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p><a href=\"/dinner/samseong/restaurant/하이딜라오 코엑스\" style=\"color:var(--primary)\">→ 하이딜라오 코엑스 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "이오복순대국-대치은마점",
      text: "이오복순대국 대치은마점 — 순대 맛집",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/12/이오복순대국-대치은마점-1.jpg",
      alt: "이오복순대국 대치은마점 대표 사진",
      caption: "이오복순대국 대치은마점",
    },
    {
      type: 'body',
      html: "<p>11천원대부터 시작하는 <a href=\"/dinner/samseong/restaurant/이오복순대국 대치은마점\">이오복순대국 대치은마점</a>입니다. 점심 가격으로는 무난한 선이라 하겠습니다.</p><p>대표 메뉴로는 NEW 순칼 (순대국 칼국수) 11,000원 등이 있으며, 가격대는 합리적인 편입니다.</p><p>대한민국 최초 순칼!! 순대국과 칼국수의 만남</p><p>주차가 가능합니다. 예약이 가능합니다.</p><p>평점 5점이면 이 동네에서 상위권에 해당합니다. 리뷰 530건이 쌓여 있어 신뢰도도 높은 편입니다.</p><p>뷰가 좋아서 분위기가 납니다. 창가 자리를 예약하시면 더 좋은 경험을 하실 수 있습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다. 매장이 깔끔하게 관리되고 있습니다.</p><p><a href=\"/dinner/samseong/restaurant/이오복순대국 대치은마점\" style=\"color:var(--primary)\">→ 이오복순대국 대치은마점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "일품양평해장국-강남대치점",
      text: "일품양평해장국 강남대치점 — 해장국 맛집",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/12/일품양평해장국-강남대치점-1.jpg",
      alt: "일품양평해장국 강남대치점 대표 사진",
      caption: "일품양평해장국 강남대치점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/일품양평해장국 강남대치점\">일품양평해장국 강남대치점</a>. 해장국 전문점입니다. 4.3점에 리뷰 133건이 쌓여 있습니다.</p><p>메뉴를 살펴보면, 순대내장탕 9,000원 등이 있습니다.</p><p>사골육수와 내장모둠이 만나 환상적인 얼큰한 맛!</p><p>주차도 가능합니다.</p><p>리뷰가 133건이니 한 번쯤 방문해보실 만합니다.</p><p>국물이 진하다는 평이 많습니다. 특히 추운 날씨에 방문하시면 만족도가 높을 것으로 보입니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p><a href=\"/dinner/samseong/restaurant/일품양평해장국 강남대치점\" style=\"color:var(--primary)\">→ 일품양평해장국 강남대치점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 중식 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">7774건</td><td style=\"padding:7px 6px;text-align:center\">10,000~18,000원</td><td style=\"padding:7px 6px\">회식 추천</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/천미미 삼성점\">천미미 삼성점</a></td><td style=\"padding:7px 6px;text-align:center\">4.7</td><td style=\"padding:7px 6px;text-align:center\">71건</td><td style=\"padding:7px 6px;text-align:center\">13,000~88,000원</td><td style=\"padding:7px 6px\">중식·요리 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/하이딜라오 코엑스\">하이딜라오 코엑스</a></td><td style=\"padding:7px 6px;text-align:center\">4.2</td><td style=\"padding:7px 6px;text-align:center\">59건</td><td style=\"padding:7px 6px;text-align:center\">4,300~55,000원</td><td style=\"padding:7px 6px\">단체석·회식 가능</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/이오복순대국 대치은마점\">이오복순대국 대치은마점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">530건</td><td style=\"padding:7px 6px;text-align:center\">11,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/일품양평해장국 강남대치점\">일품양평해장국 강남대치점</a></td><td style=\"padding:7px 6px;text-align:center\">4.3</td><td style=\"padding:7px 6px;text-align:center\">133건</td><td style=\"padding:7px 6px;text-align:center\">9,000~38,000원</td><td style=\"padding:7px 6px\">해장국 전문</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 이오복순대국 대치은마점 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> 무탄 코엑스, 천미미 삼성점 — 데이트나 특별한 날에 추천합니다.</li><li><strong>단체·회식:</strong> 무탄 코엑스, 하이딜라오 코엑스 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>혼밥:</strong> 무탄 코엑스 — 1인 식사가 부담 없는 곳입니다.</li><li><strong>평점 최고:</strong> 이오복순대국 대치은마점 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 무탄 코엑스 (리뷰 7774건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>무탄 코엑스, 천미미 삼성점은 사전에 예약하고 방문하시는 것이 좋습니다. 특히 주말 저녁에는 예약이 필수입니다.</li><li>주차 가능한 곳: 무탄 코엑스, 천미미 삼성점, 하이딜라오 코엑스.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/chinese",
      text: "삼성역 중식 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
