const post = {
  id: 2,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역 이자카야·술집 맛집을 검색하면 너무 많은 결과가 나옵니다. 859곳의 데이터에서 실제로 방문할 만한 6곳만 선별하였습니다.</p><p>평균 평점 4.3점입니다. 가격대는 5,000원부터 시작하며, 2026년 5월 기준이며, 주류 구성·안주·분위기·영업시간을 위주로 비교하였습니다.</p><p>소개 순서: ASOBOY, 미주이자카야, 야키토리 수다, 란주쿠 삼성점, 못난이포차.</p>",
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
      html: "<p>삼성역 전체 859곳에서 이자카야·술집 카테고리에 해당하는 식당을 선별하였습니다. 평점 3.6점 이상, 주류 구성·안주·분위기·영업시간 기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
    },
    {
      type: 'h2',
      id: "asoboy",
      text: "ASOBOY — 분위기 좋은 술자리",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/2/ASOBOY-1.jpg",
      alt: "ASOBOY 대표 사진",
      caption: "ASOBOY",
    },
    {
      type: 'body',
      html: "<p>맥주 5,000원. <a href=\"/dinner/samseong/restaurant/ASOBOY\">ASOBOY</a>의 대표 메뉴입니다. 양주, 칵테일 같은 메뉴도 인기가 좋습니다.</p><p>그 외에 안주(7,000원)도 있습니다.</p><p>주차가 가능합니다. 예약이 가능합니다.</p><p>평점 4.5점, 리뷰 109건으로 나쁘지 않은 수치를 보이고 있습니다.</p><p>재방문 의사가 있다는 리뷰가 많습니다. 한 번 가보시면 단골이 될 가능성이 높은 곳입니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p><a href=\"/dinner/samseong/restaurant/ASOBOY\" style=\"color:var(--primary)\">→ ASOBOY 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "미주이자카야",
      text: "미주이자카야 — 분위기 좋은 술자리",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/2/미주이자카야-1.jpg",
      alt: "미주이자카야 대표 사진",
      caption: "미주이자카야",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳입니다. <a href=\"/dinner/samseong/restaurant/미주이자카야\">미주이자카야</a>.</p><p>평점 4.9점이면 이 동네에서 상위권에 해당합니다. 리뷰 752건이 쌓여 있어 신뢰도도 높은 편입니다. 안주 종류가 다양해서 가볍게 한잔하시기에 좋습니다.</p><p><a href=\"/dinner/samseong/restaurant/미주이자카야\" style=\"color:var(--primary)\">→ 미주이자카야 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/2/미주이자카야-2.jpg",
      alt: "미주이자카야 음식 사진",
      caption: "미주이자카야 메뉴",
    },
    {
      type: 'h2',
      id: "야키토리-수다",
      text: "야키토리 수다 — 분위기 좋은 술자리",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/2/야키토리-수다-1.jpg",
      alt: "야키토리 수다 대표 사진",
      caption: "야키토리 수다",
    },
    {
      type: 'body',
      html: "<p>이자카야·야키토리 하면 <a href=\"/dinner/samseong/restaurant/야키토리 수다\">야키토리 수다</a>도 빠지지 않습니다. 평점 4.7점입니다.</p><p>대표 메뉴는 모듬꼬치 5종 18,000원, 모듬 오뎅 21,000원, 우니단새우 35,000원입니다.</p><p>주차도 가능합니다. 예약이 가능합니다.</p><p>평점 4.7점, 리뷰 50건으로 나쁘지 않은 수치를 보이고 있습니다. 안주 종류가 다양해서 가볍게 한잔하시기에 좋습니다.</p><p>분위기가 좋아서 식사 자리로 적합합니다. 내부 인테리어에 신경을 많이 쓴 것이 느껴진다는 후기가 있습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p><a href=\"/dinner/samseong/restaurant/야키토리 수다\" style=\"color:var(--primary)\">→ 야키토리 수다 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "란주쿠-삼성점",
      text: "란주쿠 삼성점 — 분위기 좋은 술자리",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/2/란주쿠-삼성점-1.jpg",
      alt: "란주쿠 삼성점 대표 사진",
      caption: "란주쿠 삼성점",
    },
    {
      type: 'body',
      html: "<p>한우1++ 특상 채끝살 65,000원. <a href=\"/dinner/samseong/restaurant/란주쿠 삼성점\">란주쿠 삼성점</a>의 대표 메뉴입니다. 와라야키 로 살짝 익혀 드립니다, 가장좋은 제주갈치 로 만들어요 같은 메뉴도 인기가 좋습니다.</p><p>그 외에 초당옥수수 카키아게(15,000원), 해산물모즈쿠(25,000원)도 있습니다.</p><p>주차가 가능합니다. 예약이 가능합니다.</p><p>리뷰 206건 정도 쌓여 있어서 어느 정도 검증이 된 곳입니다. 안주 종류가 다양해서 가볍게 한잔하시기에 좋습니다.</p><p>가성비가 좋다는 리뷰가 많습니다. 가격 대비 음식 퀄리티가 뛰어나다는 평이 주를 이룹니다. 분위기가 좋아서 식사 자리로 적합합니다. 내부 인테리어에 신경을 많이 쓴 것이 느껴진다는 후기가 있습니다. 재방문 의사가 있다는 리뷰가 많습니다. 한 번 가보시면 단골이 될 가능성이 높은 곳입니다.</p><p><a href=\"/dinner/samseong/restaurant/란주쿠 삼성점\" style=\"color:var(--primary)\">→ 란주쿠 삼성점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "못난이포차",
      text: "못난이포차 — 분위기 좋은 술자리",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/2/못난이포차-1.jpg",
      alt: "못난이포차 대표 사진",
      caption: "못난이포차",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/못난이포차\">못난이포차</a>. 야장·포차 전문점입니다. 3.6점에 리뷰 77건이 쌓여 있습니다.</p><p>메뉴를 살펴보면, 부추전 15,000원 / 골뱅이 18,000원 / 파전 18,000원 / 동태전 20,000원 등이 있습니다.</p><p>리뷰 77건 정도 쌓여 있어서 어느 정도 검증이 된 곳입니다.</p><p><a href=\"/dinner/samseong/restaurant/못난이포차\" style=\"color:var(--primary)\">→ 못난이포차 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "철수포차",
      text: "철수포차 — 분위기 좋은 술자리",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'image',
      src: "/images/posts/2/철수포차-1.jpg",
      alt: "철수포차 대표 사진",
      caption: "철수포차",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/철수포차\">철수포차</a>. 야장·포차·이자카야 전문점으로, 평점 3.8점에 리뷰 52건을 기록하고 있습니다.</p><p>메뉴를 살펴보면, 차돌숙주볶음 24,000원 / 김치전 26,000원 / 오징어숙회 32,000원 / 차돌숙주볶음 24,000원 등이 있습니다.</p><p>차돌박이와 숙주나물을 푸짐하게 즐기세요*연출사진아님*</p><p>리뷰 52건 정도 쌓여 있어서 어느 정도 검증이 된 곳입니다. 안주 종류가 다양해서 가볍게 한잔하시기에 좋습니다.</p><p>재방문 의사가 있다는 리뷰가 많습니다. 한 번 가보시면 단골이 될 가능성이 높은 곳입니다. 재료가 신선합니다. 당일 재료를 사용한다는 점에서 식재료에 대한 신뢰도가 높습니다.</p><p><a href=\"/dinner/samseong/restaurant/철수포차\" style=\"color:var(--primary)\">→ 철수포차 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 이자카야·술집 맛집 한눈에 비교",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/ASOBOY\">ASOBOY</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">109건</td><td style=\"padding:7px 6px;text-align:center\">5,000~9,000원</td><td style=\"padding:7px 6px\">가성비 괜찮음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/미주이자카야\">미주이자카야</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">752건</td><td style=\"padding:7px 6px;text-align:center\">25,000~40,000원</td><td style=\"padding:7px 6px\">이자카야·프라이빗룸 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/야키토리 수다\">야키토리 수다</a></td><td style=\"padding:7px 6px;text-align:center\">4.7</td><td style=\"padding:7px 6px;text-align:center\">50건</td><td style=\"padding:7px 6px;text-align:center\">11,000~35,000원</td><td style=\"padding:7px 6px\">이자카야·야키토리 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/란주쿠 삼성점\">란주쿠 삼성점</a></td><td style=\"padding:7px 6px;text-align:center\">4</td><td style=\"padding:7px 6px;text-align:center\">206건</td><td style=\"padding:7px 6px;text-align:center\">7,000~65,000원</td><td style=\"padding:7px 6px\">가성비 괜찮음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/못난이포차\">못난이포차</a></td><td style=\"padding:7px 6px;text-align:center\">3.6</td><td style=\"padding:7px 6px;text-align:center\">77건</td><td style=\"padding:7px 6px;text-align:center\">15,000~20,000원</td><td style=\"padding:7px 6px\">야장·포차 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/철수포차\">철수포차</a></td><td style=\"padding:7px 6px;text-align:center\">3.8</td><td style=\"padding:7px 6px;text-align:center\">52건</td><td style=\"padding:7px 6px;text-align:center\">24,000~32,000원</td><td style=\"padding:7px 6px\">야장·포차·이자카야 전문</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#a18cd1', to: '#fbc2eb' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> ASOBOY, 란주쿠 삼성점 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> ASOBOY, 미주이자카야 — 데이트나 특별한 날에 추천합니다.</li><li><strong>평점 최고:</strong> 미주이자카야 (평점 4.9점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 미주이자카야 (리뷰 752건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li>ASOBOY, 야키토리 수다은 사전에 예약하고 방문하시는 것이 좋습니다. 특히 주말 저녁에는 예약이 필수입니다.</li><li>주차 가능한 곳: ASOBOY, 야키토리 수다, 란주쿠 삼성점.</li><li>미주이자카야, 못난이포차 등은 전용 주차장이 없습니다. 대중교통 이용을 권장드립니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/izakaya",
      text: "삼성역 이자카야·술집 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
