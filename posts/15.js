const post = {
  id: 15,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역에서 고기 먹을 데 찾느라 고생한 적 있다면, 이 글 하나로 정리된다. 총 859곳 중 고기 5곳을 골라서 비교했다.</p><p>평균 평점 4.9점. 가격대는 2,500원부터 시작하며, 2026년 5월 기준이고, 고기 종류·부위·인당 가격·구이 방식을 위주로 비교했다.</p><p>소개 순서: 제주덕구 삼성점, 김치옥 대치점, 이치류 선릉점, 영동가든, 연송.</p>",
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
      html: "<p>삼성역 전체 859곳에서 고기 카테고리 식당을 추렸다. 평점 4.9점 이상, 고기 종류·부위·인당 가격·구이 방식 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
    },
    {
      type: 'h2',
      id: "제주덕구-삼성점",
      text: "제주덕구 삼성점 — 돼지고기구이 전문",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/15/제주덕구-삼성점-1.jpg",
      alt: "제주덕구 삼성점 대표 사진",
      caption: "제주덕구 삼성점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/제주덕구 삼성점\">제주덕구 삼성점</a>. 돼지고기구이 전문이고 평점 5점(리뷰 15건).</p><p>메뉴: 삼성동고기집 오목세트(3~4인) 80,000원.</p><p>단체석이나 룸이 있다. 주차도 된다.</p><p><a href=\"/dinner/samseong/restaurant/제주덕구 삼성점\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "김치옥-대치점",
      text: "김치옥 대치점 — 육류 전문",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/15/김치옥-대치점-1.jpg",
      alt: "김치옥 대치점 대표 사진",
      caption: "김치옥 대치점",
    },
    {
      type: 'body',
      html: "<p>제육볶음 300g(10,000원)이 대표 메뉴인 <a href=\"/dinner/samseong/restaurant/김치옥 대치점\">김치옥 대치점</a>. 치츠폭탄계란말이, 맛보기 계란말이 같은 메뉴도 있다.</p><p>그 외에 구이류 주문 시 주문 가능도 있다.</p><p>주차는 된다. 예약 가능.</p><p>평점 4.9점이면 이 동네에서 상위권이다. 리뷰 155건. 직접 구워 먹는 스타일.</p><p><a href=\"/dinner/samseong/restaurant/김치옥 대치점\" style=\"color:var(--primary)\">→ 김치옥 대치점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "이치류-선릉점",
      text: "이치류 선릉점 — 육류 전문",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/15/이치류-선릉점-1.jpg",
      alt: "이치류 선릉점 대표 사진",
      caption: "이치류 선릉점",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳. <a href=\"/dinner/samseong/restaurant/이치류 선릉점\">이치류 선릉점</a>.</p><p>메뉴는 750 ml 이하 기준 20,000원 정도가 주력이고, 가격은 메뉴에 따라 차이가 있다.</p><p>주차는 된다. 예약 가능.</p><p>평점 4.9점이면 이 동네에서 상위권이다. 리뷰 113건. 직접 구워 먹는 스타일.</p><p><a href=\"/dinner/samseong/restaurant/이치류 선릉점\" style=\"color:var(--primary)\">→ 이치류 선릉점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "영동가든",
      text: "영동가든 — 육류 전문",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/15/영동가든-1.jpg",
      alt: "영동가든 대표 사진",
      caption: "영동가든",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/영동가든\">영동가든</a>. 육류 전문이고 평점 4.9점(리뷰 49건).</p><p>메뉴: (점심특선) 남도식 애호박국밥 11,000원 / (점심특선) 맑은돼지곰탕 10,000원 / (점심특선) 한우 육회비빔밥 15,000원 / (점심특선)설악칡냉면 9,000원.</p><p>단체석이나 룸이 있다. 주차도 된다.</p><p><a href=\"/dinner/samseong/restaurant/영동가든\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "연송",
      text: "연송 — 육류 전문",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/15/연송-1.jpg",
      alt: "연송 대표 사진",
      caption: "연송",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/연송\">연송</a>. 육류 전문이고 평점 5점(리뷰 66건).</p><p>메뉴: 통가브리살 17,000원 / ++삼겹살 17,000원 / 두툼목살 17,000원 / 벌집껍데기 6,000원.</p><p>혼밥 가능. 단체석이나 룸이 있다.</p><p><a href=\"/dinner/samseong/restaurant/연송\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 고기 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/제주덕구 삼성점\">제주덕구 삼성점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">15건</td><td style=\"padding:7px 6px;text-align:center\">80,000원</td><td style=\"padding:7px 6px\">단체석·회식 가능</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/김치옥 대치점\">김치옥 대치점</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">155건</td><td style=\"padding:7px 6px;text-align:center\">5,000~10,000원</td><td style=\"padding:7px 6px\">육류 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/이치류 선릉점\">이치류 선릉점</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">113건</td><td style=\"padding:7px 6px;text-align:center\">20,000원</td><td style=\"padding:7px 6px\">단체석·회식 가능</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/영동가든\">영동가든</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">49건</td><td style=\"padding:7px 6px;text-align:center\">9,000~15,000원</td><td style=\"padding:7px 6px\">단체석·회식 가능</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/연송\">연송</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">66건</td><td style=\"padding:7px 6px;text-align:center\">2,500~17,000원</td><td style=\"padding:7px 6px\">단체석·회식 가능</td></tr></tbody></table>",
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
      html: "<ul><li>제주덕구 삼성점, 김치옥 대치점은 예약하고 가는 게 좋다. 주말 저녁은 특히.</li><li>주차 되는 곳: 제주덕구 삼성점, 김치옥 대치점, 이치류 선릉점.</li><li>연송 등은 주차장이 없다. 대중교통이 편하다.</li><li>고기집은 환기 상태 확인. 냄새 신경 쓰인다면 1시 넘어서 가면 회전이 빠르다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/meat",
      text: "삼성역 고기 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
