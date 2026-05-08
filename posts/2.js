const post = {
  id: 2,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역·코엑스·선릉역 일대에서 이자카야·술집 맛집을 찾고 계신가요? 삼성역 지역 총 859곳 식당 데이터 중 이자카야·술집 6곳을 평점·가격·메뉴·영업시간까지 꼼꼼하게 비교했습니다.</p><p>평균 평점 4.3점, 가격대는 5,000원부터 시작하며, 2026년 5월 기준 실제 운영 데이터입니다. 주류 구성·안주·분위기·영업시간을(를) 중심으로 비교했으니 상황에 맞는 식당을 바로 골라보세요.</p><p>이 글에서 소개하는 식당: ASOBOY, 미주이자카야, 야키토리 수다, 란주쿠 삼성점, 못난이포차.</p>",
    },
    {
      type: 'toc',
    },
    {
      type: 'h2',
      id: "criteria",
      text: "선정 기준 — 왜 이 6곳인가",
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: "<p>삼성역 지역 859곳 식당 데이터 중 이자카야·술집 카테고리에 해당하는 식당을 평점 3.6점 이상, 리뷰 수, 주류 구성·안주·분위기·영업시간 등을 기준으로 선별했습니다. 모든 정보는 2026년 5월 기준 실제 운영 데이터이며, 폐업·휴무·가격 변동이 있을 수 있으므로 방문 전 확인을 권장합니다.</p>",
    },
    {
      type: 'h2',
      id: "asoboy",
      text: "ASOBOY — 분위기 좋은 술자리",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/ASOBOY\">ASOBOY</a></strong> (봉은사로 504 지하 1층)</p><ul><li>평점 4.5점 (리뷰 109건 · 블로그 58건)</li><li>가격대 5,000~9,000원</li><li>영업시간 19:00</li><li>전화 07-1306-4967</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 맥주 5,000원 / 양주 8,500원 / 칵테일 9,000원 / 안주 7,000원</p><p>가격 대비 만족도가 높다는 평가를 받고 있습니다. 분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>리뷰 109건 기준 평점 4.5점으로 안정적인 평가를 받고 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#라이브음악 #야장 #생맥주 #분위기최고 #가성비 #주차가능</p>",
    },
    {
      type: 'h2',
      id: "미주이자카야",
      text: "미주이자카야 — 분위기 좋은 술자리",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/미주이자카야\">미주이자카야</a></strong> (대치동 944-24)</p><ul><li>평점 4.9점 (리뷰 8건)</li><li>가격대 25,000~40,000원</li><li>영업시간 PM 5–AM 3 (일 휴무)</li></ul><p>분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>평점 4.9점으로 해당 지역에서 최상위권에 속하며, 리뷰 8건이 축적된 검증된 맛집입니다. 다양한 안주와 주류를 갖추고 있어 가벼운 한잔부터 본격 회식 2차까지 활용 가능합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#프라이빗룸 #이자카야 #블루투스스피커</p>",
    },
    {
      type: 'h2',
      id: "야키토리-수다",
      text: "야키토리 수다 — 분위기 좋은 술자리",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/야키토리 수다\">야키토리 수다</a></strong> (테헤란로 87길 53)</p><ul><li>평점 4.7점 (리뷰 50건 · 블로그 977건)</li><li>가격대 11,000~35,000원</li><li>영업시간 02:00</li><li>전화 07-1300-3584</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 모듬꼬치 5종 18,000원 / 모듬 오뎅 21,000원 / 우니단새우 35,000원 / 나고야 날개튀김 14,000원 / 치킨 난반 16,000원</p><p>소규모 회식 장소로도 활용 가능합니다.</p><p>리뷰 50건 기준 평점 4.7점으로 안정적인 평가를 받고 있습니다. 다양한 안주와 주류를 갖추고 있어 가벼운 한잔부터 본격 회식 2차까지 활용 가능합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#야키토리 #하이볼 #이자카야 #주차가능 #데이트 #리뷰많음</p>",
    },
    {
      type: 'h2',
      id: "란주쿠-삼성점",
      text: "란주쿠 삼성점 — 분위기 좋은 술자리",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/란주쿠 삼성점\">란주쿠 삼성점</a></strong> (봉은사로 82길 31)</p><ul><li>평점 4점 (리뷰 206건 · 블로그 609건)</li><li>가격대 7,000~65,000원</li><li>영업시간 17:30</li><li>전화 07-1357-3844</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 한우1++ 특상 채끝살 65,000원 / 와라야키 로 살짝 익혀 드립니다 18,000원 / 가장좋은 제주갈치 로 만들어요 35,000원 / 초당옥수수 카키아게 15,000원 / 해산물모즈쿠 25,000원</p><p>가격 대비 만족도가 높다는 평가를 받고 있습니다. 분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>리뷰 206건이 등록된 식당으로, 방문자 평가를 참고하시기 바랍니다. 다양한 안주와 주류를 갖추고 있어 가벼운 한잔부터 본격 회식 2차까지 활용 가능합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#이자카야 #사케소믈리에 #코르키지없음 #가성비 #주차가능 #데이트</p>",
    },
    {
      type: 'h2',
      id: "못난이포차",
      text: "못난이포차 — 분위기 좋은 술자리",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/못난이포차\">못난이포차</a></strong> (삼성1동 152-23)</p><ul><li>평점 3.6점 (리뷰 77건 · 블로그 22건)</li><li>가격대 15,000~20,000원</li><li>영업시간 03:00</li><li>전화 02-3452-3660</li></ul><p><strong>대표 메뉴:</strong> 부추전 15,000원 / 골뱅이 18,000원 / 파전 18,000원 / 동태전 20,000원 / 두부김치 15,000원</p><p>소규모 회식 장소로도 활용 가능합니다.</p><p>리뷰 77건이 등록된 식당으로, 방문자 평가를 참고하시기 바랍니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#포차감성 #야장 #안주 #고기</p>",
    },
    {
      type: 'h2',
      id: "철수포차",
      text: "철수포차 — 분위기 좋은 술자리",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/철수포차\">철수포차</a></strong> (선릉로 112길 31)</p><ul><li>평점 3.8점 (리뷰 52건 · 블로그 27건)</li><li>가격대 24,000~32,000원</li><li>영업시간 PM 5–AM 5 (일 휴무)</li><li>전화 07-1363-1466</li></ul><p><strong>대표 메뉴:</strong> 차돌숙주볶음 24,000원 / 김치전 26,000원 / 오징어숙회 32,000원 / 차돌숙주볶음 24,000원</p><p>소규모 회식 장소로도 활용 가능합니다.</p><p>리뷰 52건이 등록된 식당으로, 방문자 평가를 참고하시기 바랍니다. 다양한 안주와 주류를 갖추고 있어 가벼운 한잔부터 본격 회식 2차까지 활용 가능합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#야장 #막걸리 #생맥주 #포차감성</p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 이자카야·술집 맛집 한눈에 비교",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰수</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">특징</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">ASOBOY</td><td style=\"padding:7px 6px;text-align:center\">4.5점</td><td style=\"padding:7px 6px;text-align:center\">109</td><td style=\"padding:7px 6px;text-align:center\">5,000~9,000원</td><td style=\"padding:7px 6px\">라이브음악·야장·생맥주</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">미주이자카야</td><td style=\"padding:7px 6px;text-align:center\">4.9점</td><td style=\"padding:7px 6px;text-align:center\">8</td><td style=\"padding:7px 6px;text-align:center\">25,000~40,000원</td><td style=\"padding:7px 6px\">프라이빗룸·이자카야·블루투스스피커</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">야키토리 수다</td><td style=\"padding:7px 6px;text-align:center\">4.7점</td><td style=\"padding:7px 6px;text-align:center\">50</td><td style=\"padding:7px 6px;text-align:center\">11,000~35,000원</td><td style=\"padding:7px 6px\">야키토리·하이볼·이자카야</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">란주쿠 삼성점</td><td style=\"padding:7px 6px;text-align:center\">4점</td><td style=\"padding:7px 6px;text-align:center\">206</td><td style=\"padding:7px 6px;text-align:center\">7,000~65,000원</td><td style=\"padding:7px 6px\">이자카야·사케소믈리에·코르키지없음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">못난이포차</td><td style=\"padding:7px 6px;text-align:center\">3.6점</td><td style=\"padding:7px 6px;text-align:center\">77</td><td style=\"padding:7px 6px;text-align:center\">15,000~20,000원</td><td style=\"padding:7px 6px\">포차감성·야장·안주</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">철수포차</td><td style=\"padding:7px 6px;text-align:center\">3.8점</td><td style=\"padding:7px 6px;text-align:center\">52</td><td style=\"padding:7px 6px;text-align:center\">24,000~32,000원</td><td style=\"padding:7px 6px\">야장·막걸리·생맥주</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#a18cd1', to: '#fbc2eb' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> ASOBOY, 란주쿠 삼성점 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> ASOBOY, 미주이자카야 — 데이트나 특별한 날에 추천합니다.</li><li><strong>평점 최고:</strong> 미주이자카야 (평점 4.9점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 란주쿠 삼성점 (리뷰 206건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li>ASOBOY, 야키토리 수다은(는) 사전 예약을 권장합니다. 특히 주말이나 저녁 시간대는 예약 없이 방문 시 대기할 수 있습니다.</li><li>주차 가능: ASOBOY, 야키토리 수다, 란주쿠 삼성점.</li><li>미주이자카야, 못난이포차 등은 별도 주차장이 없으므로 대중교통 이용을 권장합니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/izakaya",
      text: "삼성역 이자카야·술집 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>이 글에서 소개한 삼성역 이자카야·술집 맛집 정보는 2026년 5월 기준 데이터입니다. 영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인을 권장합니다. 아래 관련 글도 함께 참고해 보세요.</p><ul><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
