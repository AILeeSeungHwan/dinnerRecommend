const post = {
  id: 2,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역 이자카야·술집 맛집, 검색하면 너무 많이 나온다. 859곳 데이터에서 실제로 갈 만한 6곳만 뽑았다.</p><p>평균 평점 4.3점. 가격대는 5,000원부터 시작하며, 2026년 5월 기준이고, 주류 구성·안주·분위기·영업시간을 위주로 비교했다.</p><p>소개 순서: ASOBOY, 미주이자카야, 야키토리 수다, 란주쿠 삼성점, 못난이포차.</p>",
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
      html: "<p>삼성역 전체 859곳에서 이자카야·술집 카테고리 식당을 추렸다. 평점 3.6점 이상, 주류 구성·안주·분위기·영업시간 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
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
      html: "<p><a href=\"/dinner/samseong/restaurant/ASOBOY\">ASOBOY</a>. 여기 오면 보통 맥주 시킨다. 5,000원. 그 외 양주, 칵테일도 괜찮다.</p><p>그 외에 안주도 있다.</p><p>주차는 된다. 예약 가능.</p><p>평점 4.5점, 리뷰 109건. 나쁘지 않은 수치.</p><p>재방문 의사가 있다는 리뷰가 많다. 맛에 대한 만족도가 높은 편이다.</p><p><a href=\"/dinner/samseong/restaurant/ASOBOY\" style=\"color:var(--primary)\">→ ASOBOY 상세 정보 보기</a></p>",
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
      html: "<p>분위기가 좋아서 눈에 들어오는 곳. <a href=\"/dinner/samseong/restaurant/미주이자카야\">미주이자카야</a>.</p><p>평점 4.9점이면 이 동네에서 상위권이다. 리뷰 752건. 안주 종류가 다양해서 가볍게 한잔하기 좋다.</p><p><a href=\"/dinner/samseong/restaurant/미주이자카야\" style=\"color:var(--primary)\">→ 미주이자카야 상세 정보 보기</a></p>",
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
      html: "<p><a href=\"/dinner/samseong/restaurant/야키토리 수다\">야키토리 수다</a>. 이자카야·야키토리. 4.7점에 리뷰 50건.</p><p>메뉴: 모듬꼬치 5종 18,000원 / 모듬 오뎅 21,000원 / 우니단새우 35,000원 / 나고야 날개튀김 14,000원.</p><p>주차도 된다.</p><p>분위기가 좋아서 식사 자리로 괜찮다.</p><p><a href=\"/dinner/samseong/restaurant/야키토리 수다\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
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
      html: "<p>한우1++ 특상 채끝살 65,000원. <a href=\"/dinner/samseong/restaurant/란주쿠 삼성점\">란주쿠 삼성점</a>의 간판 메뉴다. 와라야키 로 살짝 익혀 드립니다, 가장좋은 제주갈치 로 만들어요도 많이 시킨다.</p><p>그 외에 초당옥수수 카키아게, 해산물모즈쿠도 있다.</p><p>주차는 된다. 예약 가능.</p><p>리뷰가 206건이니 한 번쯤 가볼 만하다. 안주 종류가 다양해서 가볍게 한잔하기 좋다.</p><p>가성비가 좋다는 리뷰가 많다. 분위기가 좋아서 식사 자리로 괜찮다.</p><p><a href=\"/dinner/samseong/restaurant/란주쿠 삼성점\" style=\"color:var(--primary)\">→ 란주쿠 삼성점 상세 정보 보기</a></p>",
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
      html: "<p><a href=\"/dinner/samseong/restaurant/못난이포차\">못난이포차</a>. 야장·포차. 3.6점에 리뷰 77건.</p><p>부추전 15,000원이 간판이고, 골뱅이 18,000원, 파전 18,000원도 있다.</p><p><a href=\"/dinner/samseong/restaurant/못난이포차\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
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
      html: "<p>야장·포차·이자카야 하면 <a href=\"/dinner/samseong/restaurant/철수포차\">철수포차</a>도 빠지지 않는다. 3.8점.</p><p>메뉴: 차돌숙주볶음 24,000원 / 김치전 26,000원 / 오징어숙회 32,000원 / 차돌숙주볶음 24,000원.</p><p>재방문 의사가 있다는 리뷰가 많다.</p><p><a href=\"/dinner/samseong/restaurant/철수포차\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 이자카야·술집 맛집 한눈에 비교",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/ASOBOY\">ASOBOY</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">109건</td><td style=\"padding:7px 6px;text-align:center\">5,000~9,000원</td><td style=\"padding:7px 6px\">합리적인 가격</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/미주이자카야\">미주이자카야</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">752건</td><td style=\"padding:7px 6px;text-align:center\">25,000~40,000원</td><td style=\"padding:7px 6px\">이자카야·프라이빗룸 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/야키토리 수다\">야키토리 수다</a></td><td style=\"padding:7px 6px;text-align:center\">4.7</td><td style=\"padding:7px 6px;text-align:center\">50건</td><td style=\"padding:7px 6px;text-align:center\">11,000~35,000원</td><td style=\"padding:7px 6px\">이자카야·야키토리 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/란주쿠 삼성점\">란주쿠 삼성점</a></td><td style=\"padding:7px 6px;text-align:center\">4</td><td style=\"padding:7px 6px;text-align:center\">206건</td><td style=\"padding:7px 6px;text-align:center\">7,000~65,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/못난이포차\">못난이포차</a></td><td style=\"padding:7px 6px;text-align:center\">3.6</td><td style=\"padding:7px 6px;text-align:center\">77건</td><td style=\"padding:7px 6px;text-align:center\">15,000~20,000원</td><td style=\"padding:7px 6px\">야장·포차 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/철수포차\">철수포차</a></td><td style=\"padding:7px 6px;text-align:center\">3.8</td><td style=\"padding:7px 6px;text-align:center\">52건</td><td style=\"padding:7px 6px;text-align:center\">24,000~32,000원</td><td style=\"padding:7px 6px\">야장·포차·이자카야 전문</td></tr></tbody></table>",
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
      html: "<ul><li>ASOBOY, 야키토리 수다은 예약하고 가는 게 좋다. 주말 저녁은 특히.</li><li>주차 되는 곳: ASOBOY, 야키토리 수다, 란주쿠 삼성점.</li><li>미주이자카야, 못난이포차 등은 주차장이 없다. 대중교통이 편하다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/izakaya",
      text: "삼성역 이자카야·술집 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
