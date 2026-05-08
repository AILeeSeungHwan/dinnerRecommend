const post = {
  id: 15,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역·코엑스·선릉역 일대에서 고기 맛집을 찾고 계신가요? 삼성역 지역 총 859곳 식당 데이터 중 고기 5곳을 평점·가격·메뉴·영업시간까지 꼼꼼하게 비교했습니다.</p><p>평균 평점 4.9점, 가격대는 2,500원부터 시작하며, 2026년 5월 기준 실제 운영 데이터입니다. 고기 종류·부위·인당 가격·구이 방식을(를) 중심으로 비교했으니 상황에 맞는 식당을 바로 골라보세요.</p><p>이 글에서 소개하는 식당: 제주덕구 삼성점, 김치옥 대치점, 이치류 선릉점, 영동가든, 연송.</p>",
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
      html: "<p>삼성역 지역 859곳 식당 데이터 중 고기 카테고리에 해당하는 식당을 평점 4.9점 이상, 리뷰 수, 고기 종류·부위·인당 가격·구이 방식 등을 기준으로 선별했습니다. 모든 정보는 2026년 5월 기준 실제 운영 데이터이며, 폐업·휴무·가격 변동이 있을 수 있으므로 방문 전 확인을 권장합니다.</p>",
    },
    {
      type: 'h2',
      id: "제주덕구-삼성점",
      text: "제주덕구 삼성점 — 돼지고기구이 전문",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/제주덕구 삼성점\">제주덕구 삼성점</a></strong> (삼성동 153-11 1층)</p><ul><li>평점 5점 (리뷰 15건 · 블로그 29건)</li><li>가격대 80,000원</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 삼성동고기집 오목세트(3~4인) 80,000원</p><p>분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 15건이 축적된 검증된 맛집입니다. 숯불 또는 가스 불판에 직접 구워 먹는 스타일로, 신선한 고기를 바로 즐길 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#주차가능 #단체가능 #데이트</p>",
    },
    {
      type: 'image',
      src: "/images/posts/15/제주덕구-삼성점-1.jpg",
      alt: "제주덕구 삼성점 음식 사진 1",
      caption: "제주덕구 삼성점",
    },
    {
      type: 'h2',
      id: "김치옥-대치점",
      text: "김치옥 대치점 — 육류 전문",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/김치옥 대치점\">김치옥 대치점</a></strong> (대치동 976-8 지상1층 5, 6, 7호)</p><ul><li>평점 4.9점 (리뷰 155건 · 블로그 305건)</li><li>가격대 5,000~10,000원</li><li>영업시간 11:00</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 제육볶음 300g 10,000원 / 치츠폭탄계란말이 9,000원 / 맛보기 계란말이 5,000원 / 구이류 주문 시 주문 가능 7,000원</p><p>분위기가 좋아 데이트 장소로도 추천됩니다.</p><p>평점 4.9점으로 해당 지역에서 최상위권에 속하며, 리뷰 155건이 축적된 검증된 맛집입니다. 숯불 또는 가스 불판에 직접 구워 먹는 스타일로, 신선한 고기를 바로 즐길 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#주차가능 #데이트 #리뷰많음</p>",
    },
    {
      type: 'image',
      src: "/images/posts/15/김치옥-대치점-1.jpg",
      alt: "김치옥 대치점 음식 사진 1",
      caption: "김치옥 대치점",
    },
    {
      type: 'h2',
      id: "이치류-선릉점",
      text: "이치류 선릉점 — 육류 전문",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/이치류 선릉점\">이치류 선릉점</a></strong> (대치동 906-7 1층)</p><ul><li>평점 4.9점 (리뷰 113건 · 블로그 696건)</li><li>가격대 20,000원</li><li>영업시간 12:00</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 750 ml 이하 기준 20,000원</p><p>분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>평점 4.9점으로 해당 지역에서 최상위권에 속하며, 리뷰 113건이 축적된 검증된 맛집입니다. 숯불 또는 가스 불판에 직접 구워 먹는 스타일로, 신선한 고기를 바로 즐길 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#리뷰많음 #주차가능 #단체가능 #데이트</p>",
    },
    {
      type: 'image',
      src: "/images/posts/15/이치류-선릉점-1.jpg",
      alt: "이치류 선릉점 음식 사진 1",
      caption: "이치류 선릉점",
    },
    {
      type: 'h2',
      id: "영동가든",
      text: "영동가든 — 육류 전문",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/영동가든\">영동가든</a></strong> (삼성동 162-15 1층 102호)</p><ul><li>평점 4.9점 (리뷰 49건 · 블로그 1443건)</li><li>가격대 9,000~15,000원</li><li>영업시간 11:00</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> (점심특선) 남도식 애호박국밥 11,000원 / (점심특선) 맑은돼지곰탕 10,000원 / (점심특선) 한우 육회비빔밥 15,000원 / (점심특선)설악칡냉면 9,000원 / (점심특선) 냉제육 9,000원</p><p>분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>평점 4.9점으로 해당 지역에서 최상위권에 속하며, 리뷰 49건이 축적된 검증된 맛집입니다. 숯불 또는 가스 불판에 직접 구워 먹는 스타일로, 신선한 고기를 바로 즐길 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#리뷰많음 #주차가능 #단체가능 #데이트</p>",
    },
    {
      type: 'image',
      src: "/images/posts/15/영동가든-1.jpg",
      alt: "영동가든 음식 사진 1",
      caption: "영동가든",
    },
    {
      type: 'h2',
      id: "연송",
      text: "연송 — 육류 전문",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/연송\">연송</a></strong> (삼성동 149-31 지상1,2층)</p><ul><li>평점 5점 (리뷰 3건 · 블로그 7건)</li><li>가격대 2,500~17,000원</li><li>예약 가능</li></ul><p><strong>대표 메뉴:</strong> 통가브리살 17,000원 / ++삼겹살 17,000원 / 두툼목살 17,000원 / 벌집껍데기 6,000원 / 시골된장찌개 7,000원</p><p>분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 3건이 축적된 검증된 맛집입니다. 숯불 또는 가스 불판에 직접 구워 먹는 스타일로, 신선한 고기를 바로 즐길 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#혼밥가능 #단체가능 #데이트</p>",
    },
    {
      type: 'image',
      src: "/images/posts/15/연송-1.jpg",
      alt: "연송 음식 사진 1",
      caption: "연송",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 고기 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰수</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">특징</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">제주덕구 삼성점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">15</td><td style=\"padding:7px 6px;text-align:center\">80,000원</td><td style=\"padding:7px 6px\">주차가능·단체가능·데이트</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">김치옥 대치점</td><td style=\"padding:7px 6px;text-align:center\">4.9점</td><td style=\"padding:7px 6px;text-align:center\">155</td><td style=\"padding:7px 6px;text-align:center\">5,000~10,000원</td><td style=\"padding:7px 6px\">주차가능·데이트·리뷰많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">이치류 선릉점</td><td style=\"padding:7px 6px;text-align:center\">4.9점</td><td style=\"padding:7px 6px;text-align:center\">113</td><td style=\"padding:7px 6px;text-align:center\">20,000원</td><td style=\"padding:7px 6px\">리뷰많음·주차가능·단체가능</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">영동가든</td><td style=\"padding:7px 6px;text-align:center\">4.9점</td><td style=\"padding:7px 6px;text-align:center\">49</td><td style=\"padding:7px 6px;text-align:center\">9,000~15,000원</td><td style=\"padding:7px 6px\">리뷰많음·주차가능·단체가능</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">연송</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">3</td><td style=\"padding:7px 6px;text-align:center\">2,500~17,000원</td><td style=\"padding:7px 6px\">혼밥가능·단체가능·데이트</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>분위기 중시:</strong> 제주덕구 삼성점, 김치옥 대치점 — 데이트나 특별한 날에 추천합니다.</li><li><strong>단체·회식:</strong> 제주덕구 삼성점, 이치류 선릉점 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>혼밥:</strong> 연송 — 1인 식사가 부담 없는 곳입니다.</li><li><strong>평점 최고:</strong> 제주덕구 삼성점 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 김치옥 대치점 (리뷰 155건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>제주덕구 삼성점, 김치옥 대치점은(는) 사전 예약을 권장합니다. 특히 주말이나 저녁 시간대는 예약 없이 방문 시 대기할 수 있습니다.</li><li>주차 가능: 제주덕구 삼성점, 김치옥 대치점, 이치류 선릉점.</li><li>연송 등은 별도 주차장이 없으므로 대중교통 이용을 권장합니다.</li><li>고기집은 환기 시설 확인이 중요합니다. 냄새가 걱정된다면 점심 직후보다 늦은 점심(1시 이후)에 방문하면 회전이 빠릅니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/meat",
      text: "삼성역 고기 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>이 글에서 소개한 삼성역 고기 맛집 정보는 2026년 5월 기준 데이터입니다. 영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인을 권장합니다. 아래 관련 글도 함께 참고해 보세요.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
