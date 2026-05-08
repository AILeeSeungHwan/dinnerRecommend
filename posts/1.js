const post = {
  id: 1,
  sections: [
    {
      type: 'intro',
      html: "<p>판교역·테크노밸리·백현동 근처에서 고기 괜찮은 데가 어딘지 찾아봤다. 7곳 추려서 가격이랑 메뉴까지 정리해둔다.</p><p>평균 평점 4.8점. 가격대는 12,000원부터 시작하며, 2026년 5월 기준이고, 고기 종류·부위·인당 가격·구이 방식을 위주로 비교했다.</p><p>소개 순서: 늘푸른 생선구이, 불고기 온소반, 우화, 진스키야키, 순우가.</p>",
    },
    {
      type: 'toc',
    },
    {
      type: 'h2',
      id: "criteria",
      text: "선정 기준 — 왜 이 7곳인가",
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: "<p>판교 전체 902곳에서 고기 카테고리 식당을 추렸다. 평점 4.6점 이상, 고기 종류·부위·인당 가격·구이 방식 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
    },
    {
      type: 'h2',
      id: "늘푸른-생선구이",
      text: "늘푸른 생선구이 — 고기구이 전문",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/1/늘푸른-생선구이-1.jpg",
      alt: "늘푸른 생선구이 대표 사진",
      caption: "늘푸른 생선구이",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳. <a href=\"/pangyo/restaurant/늘푸른 생선구이\">늘푸른 생선구이</a>.</p><p>점심시간 웨이팅이 좀 있는 편이니 일찍 가는 게 낫다.</p><p>평점 4.9점이면 이 동네에서 상위권이다. 리뷰 113건. 직접 구워 먹는 스타일.</p><p><a href=\"/pangyo/restaurant/늘푸른 생선구이\" style=\"color:var(--primary)\">→ 늘푸른 생선구이 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/1/늘푸른-생선구이-2.jpg",
      alt: "늘푸른 생선구이 음식 사진",
      caption: "늘푸른 생선구이 메뉴",
    },
    {
      type: 'h2',
      id: "불고기-온소반",
      text: "불고기 온소반 — 가성비 고기 맛집",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/1/불고기-온소반-1.jpg",
      alt: "불고기 온소반 대표 사진",
      caption: "불고기 온소반",
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/불고기 온소반\">불고기 온소반</a>. 고기구이 전문이고 평점 4.9점(리뷰 72건).</p><p>가격대 12,000~22,000원.</p><p>가성비가 괜찮다는 평이 많다. 점심엔 웨이팅이 좀 있다. 단체석이나 룸이 있다.</p><p><a href=\"/pangyo/restaurant/불고기 온소반\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "우화",
      text: "우화 — 한우 전문 구이집",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/1/우화-1.jpg",
      alt: "우화 대표 사진",
      caption: "우화",
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/우화\">우화</a>. 고기구이 전문이고 평점 4.8점(리뷰 120건).</p><p>가격대 12,000~22,000원.</p><p>점심엔 웨이팅이 좀 있다. 단체석이나 룸이 있다.</p><p><a href=\"/pangyo/restaurant/우화\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "진스키야키",
      text: "진스키야키 — 가성비 고기 맛집",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/1/진스키야키-1.jpg",
      alt: "진스키야키 대표 사진",
      caption: "진스키야키",
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/진스키야키\">진스키야키</a>. 고기구이 전문이고 평점 4.8점(리뷰 118건).</p><p>가격대 12,000~22,000원.</p><p>가성비가 괜찮다는 평이 많다. 점심엔 웨이팅이 좀 있다. 단체석이나 룸이 있다.</p><p><a href=\"/pangyo/restaurant/진스키야키\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "순우가",
      text: "순우가 — 한우 전문 구이집",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/1/순우가-1.jpg",
      alt: "순우가 대표 사진",
      caption: "순우가",
    },
    {
      type: 'body',
      html: "<p>12천원대부터 시작하는 <a href=\"/pangyo/restaurant/순우가\">순우가</a>. 점심 가격으로는 무난한 선.</p><p>리뷰 159건에 평점 4.6점이면 안정적인 편. 직접 구워 먹는 스타일.</p><p><a href=\"/pangyo/restaurant/순우가\" style=\"color:var(--primary)\">→ 순우가 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/1/순우가-2.jpg",
      alt: "순우가 음식 사진",
      caption: "순우가 메뉴",
    },
    {
      type: 'h2',
      id: "이치류-판교점",
      text: "이치류 판교점 — 한우 전문 구이집",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/이치류 판교점\">이치류 판교점</a>. 고기구이 전문이고 평점 4.8점(리뷰 9건).</p><p>가격대 12,000~22,000원.</p><p>점심엔 웨이팅이 좀 있다. 단체석이나 룸이 있다.</p><p><a href=\"/pangyo/restaurant/이치류 판교점\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "남영동양문-판교점",
      text: "남영동양문 판교점 — 고기구이 전문",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'image',
      src: "/images/posts/1/남영동양문-판교점-1.jpg",
      alt: "남영동양문 판교점 대표 사진",
      caption: "남영동양문 판교점",
    },
    {
      type: 'body',
      html: "<p>공간이 괜찮은 편이라 눈에 들어오는 곳. <a href=\"/pangyo/restaurant/남영동양문 판교점\">남영동양문 판교점</a>.</p><p>리뷰 649건에 평점 4.6점이면 안정적인 편. 직접 구워 먹는 스타일.</p><p><a href=\"/pangyo/restaurant/남영동양문 판교점\" style=\"color:var(--primary)\">→ 남영동양문 판교점 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/1/남영동양문-판교점-2.jpg",
      alt: "남영동양문 판교점 음식 사진",
      caption: "남영동양문 판교점 메뉴",
    },
    {
      type: 'h2',
      id: "compare",
      text: "판교 고기 맛집 한눈에 비교",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/늘푸른 생선구이\">늘푸른 생선구이</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">113건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">줄 서서 먹는 맛</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/불고기 온소반\">불고기 온소반</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">72건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/우화\">우화</a></td><td style=\"padding:7px 6px;text-align:center\">4.8</td><td style=\"padding:7px 6px;text-align:center\">120건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">줄 서서 먹는 맛</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/진스키야키\">진스키야키</a></td><td style=\"padding:7px 6px;text-align:center\">4.8</td><td style=\"padding:7px 6px;text-align:center\">118건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/순우가\">순우가</a></td><td style=\"padding:7px 6px;text-align:center\">4.6</td><td style=\"padding:7px 6px;text-align:center\">159건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/이치류 판교점\">이치류 판교점</a></td><td style=\"padding:7px 6px;text-align:center\">4.8</td><td style=\"padding:7px 6px;text-align:center\">9건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">줄 서서 먹는 맛</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/남영동양문 판교점\">남영동양문 판교점</a></td><td style=\"padding:7px 6px;text-align:center\">4.6</td><td style=\"padding:7px 6px;text-align:center\">649건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">단체석·회식 가능</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#ffecd2', to: '#fcb69f' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 불고기 온소반, 진스키야키 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> 늘푸른 생선구이, 우화 — 데이트나 특별한 날에 추천합니다.</li><li><strong>단체·회식:</strong> 늘푸른 생선구이, 불고기 온소반 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>평점 최고:</strong> 늘푸른 생선구이 (평점 4.9점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 남영동양문 판교점 (리뷰 649건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#a18cd1', to: '#fbc2eb' },
    },
    {
      type: 'body',
      html: "<ul><li>늘푸른 생선구이, 불고기 온소반은 점심 피크(12시~12시 반)에 줄이 좀 있다. 11시 50분 전에 가는 게 낫다.</li><li>우화, 진스키야키은 예약하고 가는 게 좋다. 주말 저녁은 특히.</li><li>고기집은 환기 상태 확인. 냄새 신경 쓰인다면 1시 넘어서 가면 회전이 빠르다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/pangyo/category/meat",
      text: "판교 고기 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/pangyo-honbap-budget-2026\">판교역 혼밥 맛집 1만원대 추천</a></li><li><a href=\"/posts/pangyo-team-dinner-2026\">판교역 회식 장소 추천 2026</a></li><li><a href=\"/posts/pangyo-date-restaurant-2026\">판교 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/pangyo-chinese-food-2026\">판교역 중식 맛집 추천 5곳</a></li><li><a href=\"/pangyo\">판교 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
