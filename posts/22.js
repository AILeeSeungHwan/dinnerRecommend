const post = {
  id: 22,
  sections: [
    {
      type: 'intro',
      html: "<p>판교역·테크노밸리·백현동 근처에서 회식·단체 괜찮은 데가 어딘지 찾아봤다. 5곳 추려서 가격이랑 메뉴까지 정리해둔다.</p><p>평균 평점 4.9점. 가격대는 12,000원부터 시작하며, 2026년 5월 기준이고, 룸·단체석·인당 예산·주차을 위주로 비교했다.</p><p>소개 순서: 스시소라 판교점, 꿰다 판교아브뉴프랑점, 우화, 바차 판교점, 심양 판교점.</p>",
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
      html: "<p>판교 전체 902곳에서 회식·단체 카테고리 식당을 추렸다. 평점 4.8점 이상, 룸·단체석·인당 예산·주차 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
    },
    {
      type: 'h2',
      id: "스시소라-판교점",
      text: "스시소라 판교점 — 회식 추천 식당",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/22/스시소라-판교점-1.jpg",
      alt: "스시소라 판교점 대표 사진",
      caption: "스시소라 판교점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/스시소라 판교점\">스시소라 판교점</a>. 일식 전문이고 평점 5점(리뷰 90건).</p><p>메뉴: 런치)오마카세 50,000원 / 디너) 오마카세 100,000원.</p><p>주차도 된다.</p><p>재방문 의사가 있다는 리뷰가 많다.</p><p><a href=\"/pangyo/restaurant/스시소라 판교점\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "꿰다-판교아브뉴프랑점",
      text: "꿰다 판교아브뉴프랑점 — 단체석 보유 회식 맛집",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/22/꿰다-판교아브뉴프랑점-1.jpg",
      alt: "꿰다 판교아브뉴프랑점 대표 사진",
      caption: "꿰다 판교아브뉴프랑점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/꿰다 판교아브뉴프랑점\">꿰다 판교아브뉴프랑점</a>. 여기 오면 보통 (런치) 봄과 장 코스 시킨다. 75,000원. 그 외 (디너) 봄과 장 코스, 감자 냉수프도 괜찮다.</p><p>그 외에 보리 샐러드, 찐 전복과 가지도 있다.</p><p>주차는 된다. 예약 가능. 단체석 가능.</p><p>리뷰 244건에 평점 4.9점. 꽤 높은 축에 속한다. 인당 7만원 선. 회식비로 적당한 수준.</p><p>분위기가 좋아서 식사 자리로 괜찮다. 재방문 의사가 있다는 리뷰가 많다.</p><p><a href=\"/pangyo/restaurant/꿰다 판교아브뉴프랑점\" style=\"color:var(--primary)\">→ 꿰다 판교아브뉴프랑점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "우화",
      text: "우화 — 단체석 보유 회식 맛집",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/22/우화-1.jpg",
      alt: "우화 대표 사진",
      caption: "우화",
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/우화\">우화</a>. 고기구이 전문이고 평점 4.8점(리뷰 120건).</p><p>가격대 12,000~22,000원.</p><p>점심엔 웨이팅이 좀 있다. 단체석이나 룸이 있다.</p><p><a href=\"/pangyo/restaurant/우화\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "바차-판교점",
      text: "바차 판교점 — 회식 추천 식당",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/22/바차-판교점-1.jpg",
      alt: "바차 판교점 대표 사진",
      caption: "바차 판교점",
    },
    {
      type: 'body',
      html: "<p>술집 하면 <a href=\"/pangyo/restaurant/바차 판교점\">바차 판교점</a>도 빠지지 않는다. 5점.</p><p>대표 메뉴는 바차바다찜(M/L) 35,000원, 해물레드감바스 25,000원, 로치새우 25,000원.</p><p>주차도 된다.</p><p>양이 많아서 배부르게 먹을 수 있다.</p><p><a href=\"/pangyo/restaurant/바차 판교점\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "심양-판교점",
      text: "심양 판교점 — 회식 추천 식당",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/22/심양-판교점-1.jpg",
      alt: "심양 판교점 대표 사진",
      caption: "심양 판교점",
    },
    {
      type: 'body',
      html: "<p>生양등심꼬치 250g(23,000원)이 대표 메뉴인 <a href=\"/pangyo/restaurant/심양 판교점\">심양 판교점</a>. 오리지날양꼬치 200g, 모듬꼬치도 많이 시킨다.</p><p>그 외에 가지튀김볶음, 꿔바로우도 있다.</p><p>주차는 된다.</p><p>평점 5점이면 이 동네에서 상위권이다. 리뷰 197건. 인당 4만원대 예산이면 된다.</p><p>분위기가 좋아서 식사 자리로 괜찮다. 재방문 의사가 있다는 리뷰가 많다.</p><p><a href=\"/pangyo/restaurant/심양 판교점\" style=\"color:var(--primary)\">→ 심양 판교점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "판교 회식·단체 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/스시소라 판교점\">스시소라 판교점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">90건</td><td style=\"padding:7px 6px;text-align:center\">50,000~100,000원</td><td style=\"padding:7px 6px\">맛 보장</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/꿰다 판교아브뉴프랑점\">꿰다 판교아브뉴프랑점</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">244건</td><td style=\"padding:7px 6px;text-align:center\">75,000~75,000원</td><td style=\"padding:7px 6px\">맛 보장</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/우화\">우화</a></td><td style=\"padding:7px 6px;text-align:center\">4.8</td><td style=\"padding:7px 6px;text-align:center\">120건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">인기 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/바차 판교점\">바차 판교점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">128건</td><td style=\"padding:7px 6px;text-align:center\">22,000~35,000원</td><td style=\"padding:7px 6px\">맛 보장</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/심양 판교점\">심양 판교점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">197건</td><td style=\"padding:7px 6px;text-align:center\">12,000~43,000원</td><td style=\"padding:7px 6px\">맛 보장</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>분위기 중시:</strong> 우화 — 데이트나 특별한 날에 추천합니다.</li><li><strong>평점 최고:</strong> 스시소라 판교점 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 꿰다 판교아브뉴프랑점 (리뷰 244건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>우화은 점심 피크(12시~12시 반)에 줄이 좀 있다. 11시 50분 전에 가는 게 낫다.</li><li>꿰다 판교아브뉴프랑점, 우화은 예약하고 가는 게 좋다. 주말 저녁은 특히.</li><li>주차 되는 곳: 스시소라 판교점, 꿰다 판교아브뉴프랑점, 바차 판교점.</li><li>우화 등은 주차장이 없다. 대중교통이 편하다.</li><li>회식은 인원 확정 후 2~3일 전 예약 필수. 룸 필요하면 일주일 전.</li></ul>",
    },
    {
      type: 'cta',
      href: "/pangyo/category/group",
      text: "판교 회식·단체 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/pangyo-lunch-meat-guide-2026\">판교역 점심 고기 맛집 7선</a></li><li><a href=\"/posts/pangyo-honbap-budget-2026\">판교역 혼밥 맛집 1만원대 추천</a></li><li><a href=\"/posts/pangyo-date-restaurant-2026\">판교 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/pangyo-chinese-food-2026\">판교역 중식 맛집 추천 5곳</a></li><li><a href=\"/pangyo\">판교 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
