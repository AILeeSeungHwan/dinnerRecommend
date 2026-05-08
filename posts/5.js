const post = {
  id: 5,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역 점심 맛집, 검색하면 너무 많이 나온다. 859곳 데이터에서 실제로 갈 만한 5곳만 뽑았다.</p><p>평균 평점 5.0점. 가격대는 8,500원부터 시작하며, 2026년 5월 기준이고, 접근성·회전율·세트 메뉴·가격을 위주로 비교했다.</p><p>소개 순서: 멘쇼쿠 코엑스점, 무탄 코엑스, 솔트랑 스테이크 삼성, 바오로흑염소 선릉점, 수림복국 선릉 삼성 별관.</p>",
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
      html: "<p>삼성역 전체 859곳에서 점심 카테고리 식당을 추렸다. 평점 4.9점 이상, 접근성·회전율·세트 메뉴·가격 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
    },
    {
      type: 'h2',
      id: "멘쇼쿠-코엑스점",
      text: "멘쇼쿠 코엑스점 — 일식·라멘 대표 맛집",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/5/멘쇼쿠-코엑스점-1.jpg",
      alt: "멘쇼쿠 코엑스점 대표 사진",
      caption: "멘쇼쿠 코엑스점",
    },
    {
      type: 'body',
      html: "<p>풀 토핑 라멘(17,500원)이 대표 메뉴인 <a href=\"/dinner/samseong/restaurant/멘쇼쿠 코엑스점\">멘쇼쿠 코엑스점</a>. 백라멘, 홍라멘 같은 메뉴도 있다.</p><p>그 외에 쇼유라멘, 시오라멘도 있다.</p><p>주차는 된다.</p><p>평점 4.9점이면 이 동네에서 상위권이다. 리뷰 2655건. 점심 13천원대부터 가능해서 직장인 점심으로 괜찮다.</p><p><a href=\"/dinner/samseong/restaurant/멘쇼쿠 코엑스점\" style=\"color:var(--primary)\">→ 멘쇼쿠 코엑스점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "무탄-코엑스",
      text: "무탄 코엑스 — 중식·퓨전 대표 맛집",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/5/무탄-코엑스-1.jpg",
      alt: "무탄 코엑스 대표 사진",
      caption: "무탄 코엑스",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳. <a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a>.</p><p>주차는 된다. 예약 가능.</p><p>평점 4.9점이면 이 동네에서 상위권이다. 리뷰 7774건. 점심 10천원대부터 가능해서 직장인 점심으로 괜찮다.</p><p><a href=\"/dinner/samseong/restaurant/무탄 코엑스\" style=\"color:var(--primary)\">→ 무탄 코엑스 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "솔트랑-스테이크-삼성",
      text: "솔트랑 스테이크 삼성 — 스테이크하우스 대표 맛집",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/5/솔트랑-스테이크-삼성-1.jpg",
      alt: "솔트랑 스테이크 삼성 대표 사진",
      caption: "솔트랑 스테이크 삼성",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\">솔트랑 스테이크 삼성</a>. 스테이크하우스 전문이고 평점 5점(리뷰 184건).</p><p>메뉴: T-bone (100g당) 19,800원 / 솔트허브크런치 토마호크(100g당) 23,000원 / 쿠스쿠스 타볼레 9,900원 / 해산물 황태 알리오올리오 16,900원.</p><p>주차도 된다.</p><p><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "바오로흑염소-선릉점",
      text: "바오로흑염소 선릉점 — 한식 대표 맛집",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/5/바오로흑염소-선릉점-1.jpg",
      alt: "바오로흑염소 선릉점 대표 사진",
      caption: "바오로흑염소 선릉점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/바오로흑염소 선릉점\">바오로흑염소 선릉점</a>. 한식 전문이고 평점 5점(리뷰 111건).</p><p>메뉴: 수육(1人) 45,000원 / 바오로흑염소의 대표메뉴 흑염소갈비 49,000원 / 전골(1人) 40,000원 / 흑염소 버섯불고기전골 30,000원.</p><p>혼밥 가능. 주차도 된다.</p><p><a href=\"/dinner/samseong/restaurant/바오로흑염소 선릉점\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "수림복국-선릉-삼성-별관",
      text: "수림복국 선릉 삼성 별관 — 해물,생선요리 대표 맛집",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/5/수림복국-선릉-삼성-별관-1.jpg",
      alt: "수림복국 선릉 삼성 별관 대표 사진",
      caption: "수림복국 선릉 삼성 별관",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/수림복국 선릉 삼성 별관\">수림복국 선릉 삼성 별관</a>. 해물 전문이고 평점 5점(리뷰 94건).</p><p>가성비가 괜찮다는 평이 많다.</p><p><a href=\"/dinner/samseong/restaurant/수림복국 선릉 삼성 별관\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 점심 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/멘쇼쿠 코엑스점\">멘쇼쿠 코엑스점</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">2655건</td><td style=\"padding:7px 6px;text-align:center\">13,000~17,500원</td><td style=\"padding:7px 6px\">혼밥 편한 곳</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">7774건</td><td style=\"padding:7px 6px;text-align:center\">10,000~18,000원</td><td style=\"padding:7px 6px\">단체석·회식 가능</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\">솔트랑 스테이크 삼성</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">184건</td><td style=\"padding:7px 6px;text-align:center\">8,500~23,000원</td><td style=\"padding:7px 6px\">스테이크하우스 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/바오로흑염소 선릉점\">바오로흑염소 선릉점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">111건</td><td style=\"padding:7px 6px;text-align:center\">20,000~70,000원</td><td style=\"padding:7px 6px\">혼밥 편한 곳</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/수림복국 선릉 삼성 별관\">수림복국 선릉 삼성 별관</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">94건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 수림복국 선릉 삼성 별관 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> 무탄 코엑스, 솔트랑 스테이크 삼성 — 데이트나 특별한 날에 추천합니다.</li><li><strong>단체·회식:</strong> 무탄 코엑스 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>혼밥:</strong> 멘쇼쿠 코엑스점, 무탄 코엑스 — 1인 식사가 부담 없는 곳입니다.</li><li><strong>평점 최고:</strong> 솔트랑 스테이크 삼성 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 무탄 코엑스 (리뷰 7774건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>무탄 코엑스, 솔트랑 스테이크 삼성은 예약하고 가는 게 좋다. 주말 저녁은 특히.</li><li>주차 되는 곳: 멘쇼쿠 코엑스점, 무탄 코엑스, 솔트랑 스테이크 삼성.</li><li>수림복국 선릉 삼성 별관 등은 주차장이 없다. 대중교통이 편하다.</li><li>점심 메뉴가 저녁보다 싼 경우가 많다. 런치 세트 있는지 미리 확인.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/lunch",
      text: "삼성역 점심 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
