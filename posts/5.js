const post = {
  id: 5,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역 점심 맛집을 검색하면 너무 많은 결과가 나옵니다. 859곳의 데이터에서 실제로 방문할 만한 5곳만 선별하였습니다.</p><p>평균 평점 5.0점입니다. 가격대는 8,500원부터 시작하며, 2026년 5월 기준이며, 접근성·회전율·세트 메뉴·가격을 위주로 비교하였습니다.</p><p>소개 순서: 멘쇼쿠 코엑스점, 무탄 코엑스, 솔트랑 스테이크 삼성, 바오로흑염소 선릉점, 수림복국 선릉 삼성 별관.</p>",
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
      html: "<p>삼성역 전체 859곳에서 점심 카테고리에 해당하는 식당을 선별하였습니다. 평점 4.9점 이상, 접근성·회전율·세트 메뉴·가격 기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
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
      html: "<p>풀 토핑 라멘 17,500원. <a href=\"/dinner/samseong/restaurant/멘쇼쿠 코엑스점\">멘쇼쿠 코엑스점</a>의 간판 메뉴입니다. 백라멘, 홍라멘 같은 메뉴도 인기가 좋습니다.</p><p>그 외에 쇼유라멘(13,000원), 시오라멘(13,000원)도 있습니다.</p><p>주차가 가능합니다.</p><p>평점 4.9점이면 이 동네에서 상위권에 해당합니다. 리뷰 2655건이 쌓여 있어 신뢰도도 높은 편입니다. 점심 한 끼 13천원이면 부담 없이 드실 수 있습니다.</p><p>혼밥하기에도 부담 없는 분위기입니다. 1인 좌석이 마련되어 있어 혼자 오시는 분들도 편하게 이용하실 수 있습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다. 매장이 깔끔하게 관리되고 있습니다.</p><p><a href=\"/dinner/samseong/restaurant/멘쇼쿠 코엑스점\" style=\"color:var(--primary)\">→ 멘쇼쿠 코엑스점 상세 정보 보기</a></p>",
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
      html: "<p>분위기가 좋아서 눈에 들어오는 곳입니다. <a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a>.</p><p>주차가 가능합니다. 예약이 가능합니다.</p><p>리뷰 7774건에 평점 4.9점을 유지하고 있습니다. 꽤 높은 수치로, 방문자 만족도가 우수한 곳입니다. 10천원대면 점심값으로 무난한 선입니다.</p><p>양이 많아서 배부르게 드실 수 있습니다. 남성분들도 충분히 만족할 수 있는 양입니다. 인기가 많아서 웨이팅이 좀 있는 편입니다. 점심 피크 시간을 피하시면 대기 시간을 줄일 수 있습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p><a href=\"/dinner/samseong/restaurant/무탄 코엑스\" style=\"color:var(--primary)\">→ 무탄 코엑스 상세 정보 보기</a></p>",
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
      html: "<p><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\">솔트랑 스테이크 삼성</a>. 스테이크하우스 전문점으로, 평점 5점에 리뷰 184건을 기록하고 있습니다.</p><p>T-bone (100g당) 19,800원이 가장 인기 있는 메뉴이며, 솔트허브크런치 토마호크(100g당) 23,000원, 쿠스쿠스 타볼레 9,900원도 추천드립니다.</p><p>주차도 가능합니다. 예약이 가능합니다.</p><p>5점짜리 식당은 흔하지 않습니다. 리뷰도 184건이나 되어 검증된 맛집이라 하겠습니다. 점심 한 끼 8천원이면 부담 없이 드실 수 있습니다.</p><p>맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다. 안주 퀄리티가 괜찮습니다. 메인 메뉴 외에도 사이드 메뉴의 완성도가 높다는 평입니다.</p><p><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\" style=\"color:var(--primary)\">→ 솔트랑 스테이크 삼성 상세 정보 보기</a></p>",
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
      html: "<p><a href=\"/dinner/samseong/restaurant/바오로흑염소 선릉점\">바오로흑염소 선릉점</a>. 한식 전문점으로, 평점 5점에 리뷰 111건을 기록하고 있습니다.</p><p>메뉴를 살펴보면, 수육(1人) 45,000원 / 바오로흑염소의 대표메뉴 흑염소갈비 49,000원 / 전골(1人) 40,000원 / 흑염소 버섯불고기전골 30,000원 등이 있습니다.</p><p>특수부위인 배받이살과 목살로 몸보신하세요</p><p>혼밥하시기에도 편한 구조입니다. 주차도 가능합니다. 예약이 가능합니다.</p><p>5점짜리 식당은 흔하지 않습니다. 리뷰도 111건이나 되어 검증된 맛집이라 하겠습니다.</p><p>재료가 신선합니다. 당일 재료를 사용한다는 점에서 식재료에 대한 신뢰도가 높습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p><a href=\"/dinner/samseong/restaurant/바오로흑염소 선릉점\" style=\"color:var(--primary)\">→ 바오로흑염소 선릉점 상세 정보 보기</a></p>",
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
      html: "<p>해물 하면 <a href=\"/dinner/samseong/restaurant/수림복국 선릉 삼성 별관\">수림복국 선릉 삼성 별관</a>도 빠지지 않습니다. 평점 5점입니다.</p><p>가성비가 좋다는 평이 많습니다. 예약이 가능합니다.</p><p>평점 5점이면 이 동네에서 상위권에 해당합니다. 리뷰 94건이 쌓여 있어 신뢰도도 높은 편입니다.</p><p>가성비가 좋다는 리뷰가 많습니다. 가격 대비 음식 퀄리티가 뛰어나다는 평이 주를 이룹니다. 뷰가 좋아서 분위기가 납니다. 창가 자리를 예약하시면 더 좋은 경험을 하실 수 있습니다.</p><p><a href=\"/dinner/samseong/restaurant/수림복국 선릉 삼성 별관\" style=\"color:var(--primary)\">→ 수림복국 선릉 삼성 별관 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 점심 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/멘쇼쿠 코엑스점\">멘쇼쿠 코엑스점</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">2655건</td><td style=\"padding:7px 6px;text-align:center\">13,000~17,500원</td><td style=\"padding:7px 6px\">혼밥 편한 곳</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">7774건</td><td style=\"padding:7px 6px;text-align:center\">10,000~18,000원</td><td style=\"padding:7px 6px\">회식 추천</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\">솔트랑 스테이크 삼성</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">184건</td><td style=\"padding:7px 6px;text-align:center\">8,500~23,000원</td><td style=\"padding:7px 6px\">스테이크하우스 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/바오로흑염소 선릉점\">바오로흑염소 선릉점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">111건</td><td style=\"padding:7px 6px;text-align:center\">20,000~70,000원</td><td style=\"padding:7px 6px\">혼밥 편한 곳</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/수림복국 선릉 삼성 별관\">수림복국 선릉 삼성 별관</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">94건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">가성비 괜찮음</td></tr></tbody></table>",
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
      html: "<ul><li>무탄 코엑스, 솔트랑 스테이크 삼성은 사전에 예약하고 방문하시는 것이 좋습니다. 특히 주말 저녁에는 예약이 필수입니다.</li><li>주차 가능한 곳: 멘쇼쿠 코엑스점, 무탄 코엑스, 솔트랑 스테이크 삼성.</li><li>수림복국 선릉 삼성 별관 등은 전용 주차장이 없습니다. 대중교통 이용을 권장드립니다.</li><li>점심 메뉴가 저녁보다 저렴한 경우가 많습니다. 런치 세트 메뉴 여부를 미리 확인하시고 방문하시면 좋겠습니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/lunch",
      text: "삼성역 점심 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
