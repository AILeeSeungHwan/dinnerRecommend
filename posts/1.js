const post = {
  id: 1,
  sections: [
    {
      type: 'intro',
      html: "<p>판교역·테크노밸리·백현동 근처에서 고기 괜찮은 곳을 찾고 계시는 분들을 위해 준비하였습니다. 7곳을 추려서 가격과 메뉴까지 상세하게 정리하였습니다.</p><p>평균 평점 4.7점입니다. 가격대는 12,000원부터 시작하며, 2026년 5월 기준이며, 고기 종류·부위·인당 가격·구이 방식을 위주로 비교하였습니다.</p><p>소개 순서: 불고기 온소반, 늘푸른 생선구이, 우화, 진스키야키, 남영동양문 판교점.</p>",
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
      html: "<p>판교 전체 902곳에서 고기 카테고리에 해당하는 식당을 선별하였습니다. 평점 4.5점 이상, 고기 종류·부위·인당 가격·구이 방식 기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
    },
    {
      type: 'h2',
      id: "불고기-온소반",
      text: "불고기 온소반 — 고기구이 전문점",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/1/불고기-온소반-1.jpg",
      alt: "불고기 온소반 대표 사진",
      caption: "불고기 온소반",
    },
    {
      type: 'body',
      html: "<p>12천원대부터 시작하는 <a href=\"/pangyo/restaurant/불고기 온소반\">불고기 온소반</a>입니다. 점심 가격으로는 무난한 선이라 하겠습니다.</p><p>점심시간에는 웨이팅이 있는 편이니 일찍 방문하시는 것을 추천드립니다.</p><p>평점 4.9점, 리뷰 72건으로 안정적인 평가를 받고 있습니다. 직화로 직접 구워 드시는 스타일이며, 굽기를 직원분이 도와주시는 편입니다.</p><p><a href=\"/pangyo/restaurant/불고기 온소반\" style=\"color:var(--primary)\">→ 불고기 온소반 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/1/불고기-온소반-2.jpg",
      alt: "불고기 온소반 음식 사진",
      caption: "불고기 온소반 메뉴",
    },
    {
      type: 'h2',
      id: "늘푸른-생선구이",
      text: "늘푸른 생선구이 — 웨이팅 잡히는 고기집",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/1/늘푸른-생선구이-1.jpg",
      alt: "늘푸른 생선구이 대표 사진",
      caption: "늘푸른 생선구이",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳입니다. <a href=\"/pangyo/restaurant/늘푸른 생선구이\">늘푸른 생선구이</a>.</p><p>점심시간에는 웨이팅이 있는 편이니 일찍 방문하시는 것을 추천드립니다.</p><p>굽기 옵션이 따로 안내되어 있어 미디엄·웰던 등 취향대로 요청하실 수 있습니다.</p><p><a href=\"/pangyo/restaurant/늘푸른 생선구이\" style=\"color:var(--primary)\">→ 늘푸른 생선구이 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/1/늘푸른-생선구이-2.jpg",
      alt: "늘푸른 생선구이 음식 사진",
      caption: "늘푸른 생선구이 메뉴",
    },
    {
      type: 'h2',
      id: "우화",
      text: "우화 — 한우 전문 구이",
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
      html: "<p>분위기가 좋아서 눈에 들어오는 곳입니다. <a href=\"/pangyo/restaurant/우화\">우화</a>.</p><p>점심시간에는 웨이팅이 있는 편이니 일찍 방문하시는 것을 추천드립니다. 예약이 가능합니다.</p><p>환기 시설이 잘 되어 있는 편이지만, 옷에 냄새가 신경 쓰이시면 갈아입을 옷을 챙기시는 것도 방법입니다.</p><p><a href=\"/pangyo/restaurant/우화\" style=\"color:var(--primary)\">→ 우화 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "진스키야키",
      text: "진스키야키 — 가성비 고기집",
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
      html: "<p><a href=\"/pangyo/restaurant/진스키야키\">진스키야키</a>. 고기구이 전문점입니다.</p><p>가격대는 12,000~22,000원입니다.</p><p>가성비가 좋다는 평이 많습니다. 점심 시간에는 웨이팅이 있을 수 있습니다. 단체석이나 룸이 마련되어 있습니다. 예약이 가능합니다.</p><p>직화로 직접 구워 드시는 스타일이며, 굽기를 직원분이 도와주시는 편입니다.</p><p><a href=\"/pangyo/restaurant/진스키야키\" style=\"color:var(--primary)\">→ 진스키야키 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "남영동양문-판교점",
      text: "남영동양문 판교점 — 고기구이 전문점",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/1/남영동양문-판교점-1.jpg",
      alt: "남영동양문 판교점 대표 사진",
      caption: "남영동양문 판교점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/남영동양문 판교점\">남영동양문 판교점</a>. 고기구이 전문점으로, 평점 4.6점에 리뷰 9건을 기록하고 있습니다.</p><p>가격대는 12,000~22,000원입니다.</p><p>단체석이나 룸이 마련되어 있습니다.</p><p>리뷰 9건에 4.6점이면 꾸준히 무난한 편입니다. 굽기 옵션이 따로 안내되어 있어 미디엄·웰던 등 취향대로 요청하실 수 있습니다.</p><p><a href=\"/pangyo/restaurant/남영동양문 판교점\" style=\"color:var(--primary)\">→ 남영동양문 판교점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "이치류-판교점",
      text: "이치류 판교점 — 고기구이 전문점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<p>고기구이 하면 <a href=\"/pangyo/restaurant/이치류 판교점\">이치류 판교점</a>도 빠지지 않습니다. 평점 4.5점입니다.</p><p>가격대는 12,000~22,000원입니다.</p><p>점심 시간에는 웨이팅이 있을 수 있습니다. 단체석이나 룸이 마련되어 있습니다.</p><p>평점 4.5점, 리뷰 2건으로 안정적인 평가를 받고 있습니다. 직화로 직접 구워 드시는 스타일이며, 굽기를 직원분이 도와주시는 편입니다.</p><p><a href=\"/pangyo/restaurant/이치류 판교점\" style=\"color:var(--primary)\">→ 이치류 판교점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "순우가",
      text: "순우가 — 고기구이 전문점",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'image',
      src: "/images/posts/1/순우가-1.jpg",
      alt: "순우가 대표 사진",
      caption: "순우가",
    },
    {
      type: 'body',
      html: "<p>고기구이 하면 <a href=\"/pangyo/restaurant/순우가\">순우가</a>도 빠지지 않습니다. 평점 4.5점입니다.</p><p>가격대는 12,000~22,000원입니다.</p><p>가성비가 좋다는 평이 많습니다. 단체석이나 룸이 마련되어 있습니다.</p><p>평점 4.5점, 리뷰 2건으로 안정적인 평가를 받고 있습니다. 직화로 직접 구워 드시는 스타일이며, 굽기를 직원분이 도와주시는 편입니다.</p><p><a href=\"/pangyo/restaurant/순우가\" style=\"color:var(--primary)\">→ 순우가 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "판교 고기 맛집 한눈에 비교",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/불고기 온소반\">불고기 온소반</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">72건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">합리적인 가격</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/늘푸른 생선구이\">늘푸른 생선구이</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">줄 서서 먹는 맛</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/우화\">우화</a></td><td style=\"padding:7px 6px;text-align:center\">4.8</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">웨이팅 각오</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/진스키야키\">진스키야키</a></td><td style=\"padding:7px 6px;text-align:center\">4.8</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/남영동양문 판교점\">남영동양문 판교점</a></td><td style=\"padding:7px 6px;text-align:center\">4.6</td><td style=\"padding:7px 6px;text-align:center\">9건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">회식 추천</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/이치류 판교점\">이치류 판교점</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">2건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">인기 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/순우가\">순우가</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">2건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">합리적인 가격</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#ffecd2', to: '#fcb69f' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 불고기 온소반, 진스키야키 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> 늘푸른 생선구이, 우화 — 데이트나 특별한 날에 추천합니다.</li><li><strong>단체·회식:</strong> 불고기 온소반, 늘푸른 생선구이 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>평점 최고:</strong> 불고기 온소반 (평점 4.9점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 불고기 온소반 (리뷰 72건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#a18cd1', to: '#fbc2eb' },
    },
    {
      type: 'body',
      html: "<ul><li>불고기 온소반, 늘푸른 생선구이은 점심 피크 시간(12시~12시 30분)에 대기가 있을 수 있습니다. 11시 50분 이전에 방문하시는 것을 추천드립니다.</li><li>우화, 진스키야키은 사전에 예약하고 방문하시는 것이 좋습니다. 특히 주말 저녁에는 예약이 필수입니다.</li><li>고기집은 환기 상태를 확인해보시는 것이 좋습니다. 옷에 냄새가 신경 쓰이시는 분들은 오후 1시 이후에 방문하시면 회전이 빠릅니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/pangyo/category/meat",
      text: "판교 고기 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/pangyo-honbap-budget-2026\">판교역 혼밥 맛집 1만원대 추천</a></li><li><a href=\"/posts/pangyo-team-dinner-2026\">판교역 회식 장소 추천 2026</a></li><li><a href=\"/posts/pangyo-date-restaurant-2026\">판교 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/pangyo-chinese-food-2026\">판교역 중식 맛집 추천 5곳</a></li><li><a href=\"/pangyo\">판교 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
