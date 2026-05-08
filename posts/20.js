const post = {
  id: 20,
  sections: [
    {
      type: 'intro',
      html: "<p>영통구청 점심 맛집, 검색하면 너무 많이 나온다. 548곳 데이터에서 실제로 갈 만한 5곳만 뽑았다.</p><p>평균 평점 5.0점. 가격대는 15,000원부터 시작하며, 2026년 5월 기준이고, 접근성·회전율·세트 메뉴·가격을 위주로 비교했다.</p><p>소개 순서: 탄향1965 매탄점, 샤브향 수원매탄점, 양화돼교, 오월의꽃수저, 미가쌀국수 수원인계본점.</p>",
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
      html: "<p>영통구청 전체 548곳에서 점심 카테고리 식당을 추렸다. 평점 5점 이상, 접근성·회전율·세트 메뉴·가격 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
    },
    {
      type: 'h2',
      id: "탄향1965-매탄점",
      text: "탄향1965 매탄점 — 한식 대표 맛집",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/20/탄향1965-매탄점-1.jpg",
      alt: "탄향1965 매탄점 대표 사진",
      caption: "탄향1965 매탄점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/samsungElectronics/yeongtongGu/restaurant/탄향1965 매탄점\">탄향1965 매탄점</a>. 한식 전문이고, 평점 5점.</p><p>평점 5점이면 이 동네에서 상위권이다. 리뷰 33건.</p><p><a href=\"/samsungElectronics/yeongtongGu/restaurant/탄향1965 매탄점\" style=\"color:var(--primary)\">→ 탄향1965 매탄점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "샤브향-수원매탄점",
      text: "샤브향 수원매탄점 — 일식 대표 맛집",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/20/샤브향-수원매탄점-1.jpg",
      alt: "샤브향 수원매탄점 대표 사진",
      caption: "샤브향 수원매탄점",
    },
    {
      type: 'body',
      html: "<p>공간이 괜찮은 편이라 눈에 들어오는 곳. <a href=\"/samsungElectronics/yeongtongGu/restaurant/샤브향 수원매탄점\">샤브향 수원매탄점</a>.</p><p>평점 5점이면 이 동네에서 상위권이다. 리뷰 33건.</p><p><a href=\"/samsungElectronics/yeongtongGu/restaurant/샤브향 수원매탄점\" style=\"color:var(--primary)\">→ 샤브향 수원매탄점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "양화돼교",
      text: "양화돼교 — 한식 대표 맛집",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/20/양화돼교-1.jpg",
      alt: "양화돼교 대표 사진",
      caption: "양화돼교",
    },
    {
      type: 'body',
      html: "<p><a href=\"/samsungElectronics/yeongtongGu/restaurant/양화돼교\">양화돼교</a>. 한식 전문이고 평점 5점(리뷰 22건).</p><p>메뉴: 한우등심 압도적 가성비 600g 79,000원 / 일미리꽃삼 16,000원 / 제주 흑 오겹살 18,000원 / 제주 흑 목살 18,000원.</p><p>가성비가 괜찮다는 평이 많다. 단체석이나 룸이 있다. 주차도 된다.</p><p><a href=\"/samsungElectronics/yeongtongGu/restaurant/양화돼교\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "오월의꽃수저",
      text: "오월의꽃수저 — 양식 대표 맛집",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/20/오월의꽃수저-1.jpg",
      alt: "오월의꽃수저 대표 사진",
      caption: "오월의꽃수저",
    },
    {
      type: 'body',
      html: "<p><a href=\"/samsungElectronics/yeongtongGu/restaurant/오월의꽃수저\">오월의꽃수저</a>. 양식 전문이고 평점 5점(리뷰 22건).</p><p><a href=\"/samsungElectronics/yeongtongGu/restaurant/오월의꽃수저\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "미가쌀국수-수원인계본점",
      text: "미가쌀국수 수원인계본점 — 아시안 대표 맛집",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/20/미가쌀국수-수원인계본점-1.jpg",
      alt: "미가쌀국수 수원인계본점 대표 사진",
      caption: "미가쌀국수 수원인계본점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/samsungElectronics/yeongtongGu/restaurant/미가쌀국수 수원인계본점\">미가쌀국수 수원인계본점</a>. 아시안 전문이고 평점 5점(리뷰 9건).</p><p><a href=\"/samsungElectronics/yeongtongGu/restaurant/미가쌀국수 수원인계본점\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "영통구청 점심 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtongGu/restaurant/탄향1965 매탄점\">탄향1965 매탄점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">33건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">한식 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtongGu/restaurant/샤브향 수원매탄점\">샤브향 수원매탄점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">33건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">일식 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtongGu/restaurant/양화돼교\">양화돼교</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">22건</td><td style=\"padding:7px 6px;text-align:center\">15,000~90,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtongGu/restaurant/오월의꽃수저\">오월의꽃수저</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">22건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">양식 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtongGu/restaurant/미가쌀국수 수원인계본점\">미가쌀국수 수원인계본점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">9건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">아시안 전문</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 양화돼교 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>단체·회식:</strong> 양화돼교 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>평점 최고:</strong> 탄향1965 매탄점 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 탄향1965 매탄점 (리뷰 33건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>양화돼교은 예약하고 가는 게 좋다. 주말 저녁은 특히.</li><li>주차 되는 곳: 양화돼교.</li><li>탄향1965 매탄점, 샤브향 수원매탄점 등은 주차장이 없다. 대중교통이 편하다.</li><li>점심 메뉴가 저녁보다 싼 경우가 많다. 런치 세트 있는지 미리 확인.</li></ul>",
    },
    {
      type: 'cta',
      href: "/samsungElectronics/yeongtongGu/category/lunch",
      text: "영통구청 점심 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/yeongtonggu-team-dinner-2026\">영통구청 회식 장소 추천 2026</a></li><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/yeongtong-lunch-guide-2026\">영통역 점심 맛집 카테고리별 추천 총정리</a></li><li><a href=\"/posts/pangyo-lunch-meat-guide-2026\">판교역 점심 고기 맛집 7선</a></li><li><a href=\"/samsungElectronics/yeongtongGu\">영통구청 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
