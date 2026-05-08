const post = {
  id: 11,
  sections: [
    {
      type: 'intro',
      html: "<p>잠실·송리단길·석촌호수 일대에서 국밥·해장 맛집을 찾고 계신가요? 잠실 지역 총 1149곳 식당 데이터 중 국밥·해장 5곳을 평점·가격·메뉴·영업시간까지 꼼꼼하게 비교했습니다.</p><p>평균 평점 5.0점, 가격대는 2,800원부터 시작하며, 2026년 5월 기준 실제 운영 데이터입니다. 국물·가격·해장 효과·24시 여부을(를) 중심으로 비교했으니 상황에 맞는 식당을 바로 골라보세요.</p><p>이 글에서 소개하는 식당: 화목, 푸짐회, 1990 아구찜 방이본점, 솔직한우 방이점, 미친양꼬치 잠실점.</p>",
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
      html: "<p>잠실 지역 1149곳 식당 데이터 중 국밥·해장 카테고리에 해당하는 식당을 평점 5점 이상, 리뷰 수, 국물·가격·해장 효과·24시 여부 등을 기준으로 선별했습니다. 모든 정보는 2026년 5월 기준 실제 운영 데이터이며, 폐업·휴무·가격 변동이 있을 수 있으므로 방문 전 확인을 권장합니다.</p>",
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
      html: "<p><strong><a href=\"/dinner/jamsil/restaurant/화목\">화목</a></strong> (대치동 316 은마 종합상가 지하1층 a블럭 36호)</p><ul><li>평점 5점 (리뷰 1건 · 블로그 64건)</li><li>가격대 18,000원</li><li>영업시간 11:00</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 최상급 숙성 연어만 사용합니다! 18,000원</p><p>분위기가 좋아 데이트 장소로도 추천됩니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 1건이 축적된 검증된 맛집입니다. 뜨끈한 국물 요리로 해장이나 든든한 한 끼 식사에 적합합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#주차가능 #데이트 #리뷰많음</p>",
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
      html: "<p><strong><a href=\"/dinner/jamsil/restaurant/푸짐회\">푸짐회</a></strong> (서울특별시 송파구 잠실동 204-12 1층 1호 푸짐회)</p><ul><li>평점 5점 (리뷰 106건 · 블로그 43건)</li><li>가격대 2,800~40,000원</li><li>영업시간 16:00에 영업 시작</li><li>전화 07-1433-8524</li><li>예약 가능</li></ul><p><strong>대표 메뉴:</strong> 소주 맥주2800원 2,800원 / 모듬회 40,000원 / 매운탕 15,000원 / 매운탕 추가시 사리(무료)</p><p>가격 대비 만족도가 높다는 평가를 받고 있습니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 106건이 축적된 검증된 맛집입니다. 뜨끈한 국물 요리로 해장이나 든든한 한 끼 식사에 적합합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#가성비 #서비스좋음</p>",
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
      html: "<p><strong><a href=\"/dinner/jamsil/restaurant/1990 아구찜 방이본점\">1990 아구찜 방이본점</a></strong> (서울특별시 송파구 방이동 105 2층 1990아구찜 방이본점)</p><ul><li>평점 5점 (리뷰 100건 · 블로그 268건)</li><li>가격대 24,000~55,000원</li><li>전화 07-1462-2140</li><li>예약 가능</li></ul><p><strong>대표 메뉴:</strong> 살많은 아구찜(1인) 24,000원 / 살많은 아구찜(소 (2~3인)) 35,000원 / 살많은 아구찜(중 (3~4인)) 45,000원 / 살많은 아구찜(대 (4~5인)) 55,000원 / 아구찜 스폐셜(소 (2~3인)) 40,000원</p><p>가격 대비 만족도가 높다는 평가를 받고 있습니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 100건이 축적된 검증된 맛집입니다. 뜨끈한 국물 요리로 해장이나 든든한 한 끼 식사에 적합합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#가성비 #서비스좋음</p>",
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
      html: "<p><strong><a href=\"/dinner/jamsil/restaurant/솔직한우 방이점\">솔직한우 방이점</a></strong> (서울특별시 송파구 방이동 70 1층, 2층, 지하1층)</p><ul><li>평점 5점 (리뷰 85건 · 블로그 321건)</li><li>가격대 9,900~130,000원</li><li>영업시간 11:00에 영업 시작</li><li>전화 02-2039-9475</li></ul><p><strong>대표 메뉴:</strong> (런치메뉴) 한우 고기 곰탕 9,900원 / (런치 메뉴)한우 육회 비빕밥 9,900원 / (런치 메뉴)한우 얼갈이 양지국밥 12,900원 / (런치 메뉴)한우 육회 비빔 냉면 11,900원 / 솔직한우 1+ 한근세트(600g) 65,000원</p><p>가격 대비 만족도가 높다는 평가를 받고 있습니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 85건이 축적된 검증된 맛집입니다. 뜨끈한 국물 요리로 해장이나 든든한 한 끼 식사에 적합합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#가성비 #단체가능 #데이트 #깔끔한곳 #서비스좋음</p>",
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
      html: "<p><strong><a href=\"/dinner/jamsil/restaurant/미친양꼬치 잠실점\">미친양꼬치 잠실점</a></strong> (방이동 먹자골목)</p><ul><li>평점 5점 (리뷰 51건)</li><li>가격대 18,000~25,000원</li><li>영업시간 17:00~24:00</li></ul><p>가격 대비 만족도가 높다는 평가를 받고 있습니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 51건이 축적된 검증된 맛집입니다. 뜨끈한 국물 요리로 해장이나 든든한 한 끼 식사에 적합합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#양꼬치무한리필 #마라탕 #단체가능 #가성비</p>",
    },
    {
      type: 'image',
      src: "/images/posts/11/미친양꼬치-잠실점-2.jpg",
      alt: "미친양꼬치 잠실점 음식 사진",
      caption: "미친양꼬치 잠실점 메뉴",
    },
    {
      type: 'h2',
      id: "compare",
      text: "잠실 국밥·해장 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰수</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">특징</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">화목</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">1</td><td style=\"padding:7px 6px;text-align:center\">18,000원</td><td style=\"padding:7px 6px\">주차가능·데이트·리뷰많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">푸짐회</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">106</td><td style=\"padding:7px 6px;text-align:center\">2,800~40,000원</td><td style=\"padding:7px 6px\">가성비·서비스좋음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">1990 아구찜 방이본점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">100</td><td style=\"padding:7px 6px;text-align:center\">24,000~55,000원</td><td style=\"padding:7px 6px\">가성비·서비스좋음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">솔직한우 방이점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">85</td><td style=\"padding:7px 6px;text-align:center\">9,900~130,000원</td><td style=\"padding:7px 6px\">가성비·단체가능·데이트</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">미친양꼬치 잠실점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">51</td><td style=\"padding:7px 6px;text-align:center\">18,000~25,000원</td><td style=\"padding:7px 6px\">양꼬치무한리필·마라탕·단체가능</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 푸짐회, 1990 아구찜 방이본점 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> 화목 — 데이트나 특별한 날에 추천합니다.</li><li><strong>단체·회식:</strong> 솔직한우 방이점, 미친양꼬치 잠실점 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>평점 최고:</strong> 화목 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 푸짐회 (리뷰 106건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>화목, 푸짐회은(는) 사전 예약을 권장합니다. 특히 주말이나 저녁 시간대는 예약 없이 방문 시 대기할 수 있습니다.</li><li>주차 가능: 화목.</li><li>푸짐회, 1990 아구찜 방이본점 등은 별도 주차장이 없으므로 대중교통 이용을 권장합니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/jamsil/category/gukbap",
      text: "잠실 국밥·해장 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>이 글에서 소개한 잠실 국밥·해장 맛집 정보는 2026년 5월 기준 데이터입니다. 영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인을 권장합니다. 아래 관련 글도 함께 참고해 보세요.</p><ul><li><a href=\"/posts/jamsil-team-dinner-2026\">잠실 회식 장소 추천 2026</a></li><li><a href=\"/posts/jamsil-japanese-sushi-2026\">잠실 일식·스시 맛집 추천 5선</a></li><li><a href=\"/posts/jamsil-date-restaurant-2026\">잠실 데이트 맛집 추천 5곳</a></li><li><a href=\"/posts/jamsil-date-course-complete-2026\">잠실 데이트 코스 완벽 가이드 2026</a></li><li><a href=\"/dinner/jamsil\">잠실 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
