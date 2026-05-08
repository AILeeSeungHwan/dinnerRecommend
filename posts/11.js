const post = {
  id: 11,
  sections: [
    {
      type: 'intro',
      html: "<p>잠실 국밥·해장 맛집, 검색하면 너무 많이 나온다. 1149곳 데이터에서 실제로 갈 만한 5곳만 뽑았다.</p><p>평균 평점 5.0점. 가격대는 2,800원부터 시작하며, 2026년 5월 기준이고, 국물·가격·해장 효과·24시 여부을 위주로 비교했다.</p><p>소개 순서: 화목, 푸짐회, 1990 아구찜 방이본점, 솔직한우 방이점, 미친양꼬치 잠실점.</p>",
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
      html: "<p>잠실 전체 1149곳에서 국밥·해장 카테고리 식당을 추렸다. 평점 5점 이상, 국물·가격·해장 효과·24시 여부 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
    },
    {
      type: 'h2',
      id: "화목",
      text: "화목 — 든든한 국밥 한 그릇",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/11/화목-1.jpg",
      alt: "화목 대표 사진",
      caption: "화목",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/jamsil/restaurant/화목\">화목</a>. 덮밥 전문이고</p><p>메뉴: 최상급 숙성 연어만 사용합니다! 18,000원.</p><p>주차도 된다.</p><p><a href=\"/dinner/jamsil/restaurant/화목\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "푸짐회",
      text: "푸짐회 — 든든한 국밥 한 그릇",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/11/푸짐회-1.jpg",
      alt: "푸짐회 대표 사진",
      caption: "푸짐회",
    },
    {
      type: 'body',
      html: "<p>소주 맥주2800원(2,800원)이 대표 메뉴인 <a href=\"/dinner/jamsil/restaurant/푸짐회\">푸짐회</a>. 모듬회, 매운탕 같은 메뉴도 있다.</p><p>그 외에 매운탕 추가시 사리(무료)도 있다.</p><p>예약 가능.</p><p>평점 5점이면 이 동네에서 상위권이다. 리뷰 106건. 국물이 뜨끈해서 해장이나 든든한 한 끼로 괜찮다.</p><p>가성비가 좋다는 리뷰가 많다. 재방문 의사가 있다는 리뷰가 많다.</p><p><a href=\"/dinner/jamsil/restaurant/푸짐회\" style=\"color:var(--primary)\">→ 푸짐회 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "1990-아구찜-방이본점",
      text: "1990 아구찜 방이본점 — 든든한 국밥 한 그릇",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/11/1990-아구찜-방이본점-1.jpg",
      alt: "1990 아구찜 방이본점 대표 사진",
      caption: "1990 아구찜 방이본점",
    },
    {
      type: 'body',
      html: "<p>살많은 아구찜(1인)(24,000원)이 대표 메뉴인 <a href=\"/dinner/jamsil/restaurant/1990 아구찜 방이본점\">1990 아구찜 방이본점</a>. 살많은 아구찜(소 (2~3인)), 살많은 아구찜(중 (3~4인)) 같은 메뉴도 있다.</p><p>그 외에 살많은 아구찜(대 (4~5인)), 아구찜 스폐셜(소 (2~3인))도 있다.</p><p>예약 가능.</p><p>평점 5점이면 이 동네에서 상위권이다. 리뷰 100건. 국물이 뜨끈해서 해장이나 든든한 한 끼로 괜찮다.</p><p>맛에 대한 만족도가 높은 편이다.</p><p><a href=\"/dinner/jamsil/restaurant/1990 아구찜 방이본점\" style=\"color:var(--primary)\">→ 1990 아구찜 방이본점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "솔직한우-방이점",
      text: "솔직한우 방이점 — 든든한 국밥 한 그릇",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/11/솔직한우-방이점-1.jpg",
      alt: "솔직한우 방이점 대표 사진",
      caption: "솔직한우 방이점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/jamsil/restaurant/솔직한우 방이점\">솔직한우 방이점</a>. 한식 전문이고 평점 5점(리뷰 85건).</p><p>메뉴: (런치메뉴) 한우 고기 곰탕 9,900원 / (런치 메뉴)한우 육회 비빕밥 9,900원 / (런치 메뉴)한우 얼갈이 양지국밥 12,900원 / (런치 메뉴)한우 육회 비빔 냉면 11,900원.</p><p>가성비가 괜찮다는 평이 많다. 단체석이나 룸이 있다.</p><p>가성비가 좋다는 리뷰가 많다.</p><p><a href=\"/dinner/jamsil/restaurant/솔직한우 방이점\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "미친양꼬치-잠실점",
      text: "미친양꼬치 잠실점 — 든든한 국밥 한 그릇",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/11/미친양꼬치-잠실점-1.jpg",
      alt: "미친양꼬치 잠실점 대표 사진",
      caption: "미친양꼬치 잠실점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/jamsil/restaurant/미친양꼬치 잠실점\">미친양꼬치 잠실점</a>. 양꼬치·중식 전문이고 평점 5점(리뷰 51건).</p><p>가격대 18,000~25,000원.</p><p>가성비가 괜찮다는 평이 많다. 단체석이나 룸이 있다.</p><p><a href=\"/dinner/jamsil/restaurant/미친양꼬치 잠실점\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "잠실 국밥·해장 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/jamsil/restaurant/화목\">화목</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\">18,000원</td><td style=\"padding:7px 6px\">덮밥 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/jamsil/restaurant/푸짐회\">푸짐회</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">106건</td><td style=\"padding:7px 6px;text-align:center\">2,800~40,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/jamsil/restaurant/1990 아구찜 방이본점\">1990 아구찜 방이본점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">100건</td><td style=\"padding:7px 6px;text-align:center\">24,000~55,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/jamsil/restaurant/솔직한우 방이점\">솔직한우 방이점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">85건</td><td style=\"padding:7px 6px;text-align:center\">9,900~130,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/jamsil/restaurant/미친양꼬치 잠실점\">미친양꼬치 잠실점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">51건</td><td style=\"padding:7px 6px;text-align:center\">18,000~25,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 푸짐회, 1990 아구찜 방이본점 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> 화목 — 데이트나 특별한 날에 추천합니다.</li><li><strong>단체·회식:</strong> 솔직한우 방이점, 미친양꼬치 잠실점 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>평점 최고:</strong> 푸짐회 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 푸짐회 (리뷰 106건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>화목, 푸짐회은 예약하고 가는 게 좋다. 주말 저녁은 특히.</li><li>주차 되는 곳: 화목.</li><li>푸짐회, 1990 아구찜 방이본점 등은 주차장이 없다. 대중교통이 편하다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/jamsil/category/gukbap",
      text: "잠실 국밥·해장 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/jamsil-team-dinner-2026\">잠실 회식 장소 추천 2026</a></li><li><a href=\"/posts/jamsil-japanese-sushi-2026\">잠실 일식·스시 맛집 추천 5선</a></li><li><a href=\"/posts/jamsil-date-restaurant-2026\">잠실 데이트 맛집 추천 5곳</a></li><li><a href=\"/posts/jamsil-date-course-complete-2026\">잠실 데이트 코스 완벽 가이드 2026</a></li><li><a href=\"/dinner/jamsil\">잠실 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
