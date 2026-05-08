const post = {
  id: 12,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역·코엑스·선릉역 일대에서 중식 맛집을 찾고 계신가요? 삼성역 지역 총 859곳 식당 데이터 중 중식 5곳을 평점·가격·메뉴·영업시간까지 꼼꼼하게 비교했습니다.</p><p>평균 평점 4.8점, 가격대는 4,300원부터 시작하며, 2026년 5월 기준 실제 운영 데이터입니다. 대표 메뉴·가격·양·단체 가능을(를) 중심으로 비교했으니 상황에 맞는 식당을 바로 골라보세요.</p><p>이 글에서 소개하는 식당: 무탄 코엑스, 천미미 삼성점, 하이딜라오 코엑스, 이오복순대국 대치은마점, 일품양평해장국 강남대치점.</p>",
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
      html: "<p>삼성역 지역 859곳 식당 데이터 중 중식 카테고리에 해당하는 식당을 평점 4.2점 이상, 리뷰 수, 대표 메뉴·가격·양·단체 가능 등을 기준으로 선별했습니다. 모든 정보는 2026년 5월 기준 실제 운영 데이터이며, 폐업·휴무·가격 변동이 있을 수 있으므로 방문 전 확인을 권장합니다.</p>",
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
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a></strong> (영동대로 513 코엑스몰 B1)</p><ul><li>평점 4.9점 (리뷰 7774건 · 블로그 3811건)</li><li>가격대 10,000~18,000원</li><li>영업시간 11 AM–9:30 PM</li><li>전화 07-1397-0364</li><li>주차 가능 · 예약 가능</li></ul><p>분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>평점 4.9점으로 해당 지역에서 최상위권에 속하며, 리뷰 7774건이 축적된 검증된 맛집입니다. 대부분의 메뉴가 2인 이상 나눠 먹기 좋은 구성으로, 단체 방문 시 다양하게 주문할 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#자장면 #짬뽕 #어향동고 #코엑스핫플 #혼밥가능 #주차가능</p>",
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
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/천미미 삼성점\">천미미 삼성점</a></strong> (삼성로 534)</p><ul><li>평점 4.7점 (리뷰 71건 · 블로그 1639건)</li><li>가격대 13,000~88,000원</li><li>영업시간 11 AM–3 PM, 5–9:30 PM</li><li>전화 07-1328-5340</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 어향동고 45,000원 / 전가복(스페셜) 88,000원 / 통낙지 쟁반짜장 28,000원 / 미미짬뽕 13,000원 / 삼선짬뽕 14,000원</p><p>분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>리뷰 71건 기준 평점 4.7점으로 안정적인 평가를 받고 있습니다. 대부분의 메뉴가 2인 이상 나눠 먹기 좋은 구성으로, 단체 방문 시 다양하게 주문할 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#어향동고 #탕수육 #가족모임 #점심추천 #주차가능 #데이트</p>",
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
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/하이딜라오 코엑스\">하이딜라오 코엑스</a></strong> (테헤란로 87길 58 지하2층)</p><ul><li>평점 4.2점 (리뷰 59건 · 블로그 198건)</li><li>가격대 4,300~55,000원</li><li>영업시간 22:00</li><li>전화 07-2085-1273</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 누누 딸기레어 케이크 (시즌마감) 8,500원 / NUNU COFFEE (BEST) 6,800원 / 에그포테이토 브리오슈 4,800원 / 마틸다 라즈베리 홀케이크 (예약주문) 35,000원 / 바스크치즈 홀케이크 (예약주문) 55,000원</p><p>소규모 회식 장소로도 활용 가능합니다.</p><p>리뷰 59건이 등록된 식당으로, 방문자 평가를 참고하시기 바랍니다. 대부분의 메뉴가 2인 이상 나눠 먹기 좋은 구성으로, 단체 방문 시 다양하게 주문할 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#훠궈 #핫팟 #24시간 #코엑스 #단체 #주차가능</p>",
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
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/이오복순대국 대치은마점\">이오복순대국 대치은마점</a></strong> (대치동 316 은마종합상가 지하1층 B블럭-10호)</p><ul><li>평점 5점 (리뷰 9건 · 블로그 121건)</li><li>가격대 11,000원</li><li>영업시간 10:00</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> NEW 순칼 (순대국 칼국수) 11,000원</p><p>가격 대비 만족도가 높다는 평가를 받고 있습니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 9건이 축적된 검증된 맛집입니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#가성비 #주차가능</p>",
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
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/일품양평해장국 강남대치점\">일품양평해장국 강남대치점</a></strong> (대치동 903-12 지상1층)</p><ul><li>평점 5점 (리뷰 2건 · 블로그 79건)</li><li>가격대 9,000~38,000원</li><li>영업시간 07:30</li><li>주차 가능</li></ul><p><strong>대표 메뉴:</strong> 순대내장탕 9,000원</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 2건이 축적된 검증된 맛집입니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#점심추천 #주차가능</p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 중식 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰수</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">특징</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">무탄 코엑스</td><td style=\"padding:7px 6px;text-align:center\">4.9점</td><td style=\"padding:7px 6px;text-align:center\">7774</td><td style=\"padding:7px 6px;text-align:center\">10,000~18,000원</td><td style=\"padding:7px 6px\">자장면·짬뽕·어향동고</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">천미미 삼성점</td><td style=\"padding:7px 6px;text-align:center\">4.7점</td><td style=\"padding:7px 6px;text-align:center\">71</td><td style=\"padding:7px 6px;text-align:center\">13,000~88,000원</td><td style=\"padding:7px 6px\">어향동고·탕수육·가족모임</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">하이딜라오 코엑스</td><td style=\"padding:7px 6px;text-align:center\">4.2점</td><td style=\"padding:7px 6px;text-align:center\">59</td><td style=\"padding:7px 6px;text-align:center\">4,300~55,000원</td><td style=\"padding:7px 6px\">훠궈·핫팟·24시간</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">이오복순대국 대치은마점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">9</td><td style=\"padding:7px 6px;text-align:center\">11,000원</td><td style=\"padding:7px 6px\">가성비·주차가능</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">일품양평해장국 강남대치점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">2</td><td style=\"padding:7px 6px;text-align:center\">9,000~38,000원</td><td style=\"padding:7px 6px\">점심추천·주차가능</td></tr></tbody></table>",
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
      html: "<ul><li>무탄 코엑스, 천미미 삼성점은(는) 사전 예약을 권장합니다. 특히 주말이나 저녁 시간대는 예약 없이 방문 시 대기할 수 있습니다.</li><li>주차 가능: 무탄 코엑스, 천미미 삼성점, 하이딜라오 코엑스.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/chinese",
      text: "삼성역 중식 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>이 글에서 소개한 삼성역 중식 맛집 정보는 2026년 5월 기준 데이터입니다. 영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인을 권장합니다. 아래 관련 글도 함께 참고해 보세요.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
