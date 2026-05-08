const post = {
  id: 8,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역·코엑스·선릉역 일대에서 데이트 맛집을 찾고 계신가요? 삼성역 지역 총 859곳 식당 데이터 중 데이트 5곳을 평점·가격·메뉴·영업시간까지 꼼꼼하게 비교했습니다.</p><p>평균 평점 4.9점, 가격대는 6,000원부터 시작하며, 2026년 5월 기준 실제 운영 데이터입니다. 분위기·코스 구성·예약 여부·뷰을(를) 중심으로 비교했으니 상황에 맞는 식당을 바로 골라보세요.</p><p>이 글에서 소개하는 식당: 해화장, 일상정원 코엑스점, 솔트랑 스테이크 삼성, 모도우 삼성, 논두렁오리주물럭 선릉직영점.</p>",
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
      html: "<p>삼성역 지역 859곳 식당 데이터 중 데이트 카테고리에 해당하는 식당을 평점 4.6점 이상, 리뷰 수, 분위기·코스 구성·예약 여부·뷰 등을 기준으로 선별했습니다. 모든 정보는 2026년 5월 기준 실제 운영 데이터이며, 폐업·휴무·가격 변동이 있을 수 있으므로 방문 전 확인을 권장합니다.</p>",
    },
    {
      type: 'h2',
      id: "해화장",
      text: "해화장 — 평점 4.9점 프리미엄 레스토랑",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/해화장\">해화장</a></strong> (테헤란로 81길 47 1층)</p><ul><li>평점 4.9점 (리뷰 47건 · 블로그 283건)</li><li>가격대 23,000~38,000원</li><li>영업시간 02:00</li><li>전화 07-1376-7872</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> [봄, 바다향 터지는] 봄멍게 23,000원 / [봄,바다향 터지는] 돌멍게 38,000원</p><p>소규모 회식 장소로도 활용 가능합니다.</p><p>평점 4.9점으로 해당 지역에서 최상위권에 속하며, 리뷰 47건이 축적된 검증된 맛집입니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#신선회 #어선인테리어 #코르키지 #주차가능 #데이트</p>",
    },
    {
      type: 'image',
      src: "/images/posts/8/해화장-1.jpg",
      alt: "해화장 음식 사진 1",
      caption: "해화장",
    },
    {
      type: 'h2',
      id: "일상정원-코엑스점",
      text: "일상정원 코엑스점 — 평점 4.8점 프리미엄 레스토랑",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/일상정원 코엑스점\">일상정원 코엑스점</a></strong> (봉은사로 524 오크우드호텔 코엑스별관)</p><ul><li>평점 4.8점 (리뷰 706건 · 블로그 1127건)</li><li>가격대 6,000~20,900원</li><li>영업시간 21:30</li><li>전화 07-1485-8070</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 구름 스키야키(관서식) 21,400원 / 미소 샤브샤브(관동식) 18,400원 / NEW, 사케마구로동 20,900원 / NEW, 지라시스시 25,400원 / NEW, 규나베 서로인 한우 1++ 32,400원</p><p>평점 4.8점으로 해당 지역에서 최상위권에 속하며, 리뷰 706건이 축적된 검증된 맛집입니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#스키야키 #모츠나베 #전골 #혼밥가능 #주차가능 #데이트</p>",
    },
    {
      type: 'image',
      src: "/images/posts/8/일상정원-코엑스점-1.jpg",
      alt: "일상정원 코엑스점 음식 사진 1",
      caption: "일상정원 코엑스점",
    },
    {
      type: 'h2',
      id: "솔트랑-스테이크-삼성",
      text: "솔트랑 스테이크 삼성 — 평점 5점 프리미엄 레스토랑",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\">솔트랑 스테이크 삼성</a></strong> (테헤란로 610 지하 1층)</p><ul><li>평점 5점 (리뷰 184건 · 블로그 369건)</li><li>가격대 8,500~23,000원</li><li>영업시간 11:30 AM–9:30 PM</li><li>전화 02-6012-7429</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> T-bone (100g당) 19,800원 / 솔트허브크런치 토마호크(100g당) 23,000원 / 쿠스쿠스 타볼레 9,900원 / 해산물 황태 알리오올리오 16,900원 / 두바이 아이스크림 8,500원</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 184건이 축적된 검증된 맛집입니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#스테이크 #소금스테이크 #특별한날 #주차가능 #데이트 #리뷰많음</p>",
    },
    {
      type: 'image',
      src: "/images/posts/8/솔트랑-스테이크-삼성-1.jpg",
      alt: "솔트랑 스테이크 삼성 음식 사진 1",
      caption: "솔트랑 스테이크 삼성",
    },
    {
      type: 'h2',
      id: "모도우-삼성",
      text: "모도우 삼성 — 분위기 좋은 데이트 추천",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/모도우 삼성\">모도우 삼성</a></strong> (테헤란로 87길 35)</p><ul><li>평점 4.6점 (리뷰 154건)</li><li>가격대 9,000~15,000원</li><li>영업시간 11:30 AM–3 PM, 5–10 PM</li></ul><p>리뷰 154건 기준 평점 4.6점으로 안정적인 평가를 받고 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#프라이빗룸 #코스요리 #고급한식</p>",
    },
    {
      type: 'image',
      src: "/images/posts/8/모도우-삼성-1.jpg",
      alt: "모도우 삼성 음식 사진 1",
      caption: "모도우 삼성",
    },
    {
      type: 'image',
      src: "/images/posts/8/모도우-삼성-2.jpg",
      alt: "모도우 삼성 음식 사진 2",
      caption: "모도우 삼성",
    },
    {
      type: 'h2',
      id: "논두렁오리주물럭-선릉직영점",
      text: "논두렁오리주물럭 선릉직영점 — 평점 5점 프리미엄 레스토랑",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/논두렁오리주물럭 선릉직영점\">논두렁오리주물럭 선릉직영점</a></strong> (대치동 895-9 1층)</p><ul><li>평점 5점 (리뷰 485건 · 블로그 1256건)</li><li>가격대 8,000~58,000원</li><li>영업시간 10:00</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 양념 오리 주물럭(2인~3인) 58,000원 / 양념 오리 주물럭(2인~3인) 58,000원 / 양념 오리 주물럭(2인~3인) 58,000원 / 대패 주물럭 한판(2~3인) 36,000원 / 대패 주물럭 한판 반(4인) 48,000원</p><p>소규모 회식 장소로도 활용 가능합니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 485건이 축적된 검증된 맛집입니다. 코스 기준 인당 0~5만원대로 특별한 날 식사에 적합합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#리뷰많음 #점심추천 #주차가능 #단체가능</p>",
    },
    {
      type: 'image',
      src: "/images/posts/8/논두렁오리주물럭-선릉직영점-1.jpg",
      alt: "논두렁오리주물럭 선릉직영점 음식 사진 1",
      caption: "논두렁오리주물럭 선릉직영점",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 데이트 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰수</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">특징</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">해화장</td><td style=\"padding:7px 6px;text-align:center\">4.9점</td><td style=\"padding:7px 6px;text-align:center\">47</td><td style=\"padding:7px 6px;text-align:center\">23,000~38,000원</td><td style=\"padding:7px 6px\">신선회·어선인테리어·코르키지</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">일상정원 코엑스점</td><td style=\"padding:7px 6px;text-align:center\">4.8점</td><td style=\"padding:7px 6px;text-align:center\">706</td><td style=\"padding:7px 6px;text-align:center\">6,000~20,900원</td><td style=\"padding:7px 6px\">스키야키·모츠나베·전골</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">솔트랑 스테이크 삼성</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">184</td><td style=\"padding:7px 6px;text-align:center\">8,500~23,000원</td><td style=\"padding:7px 6px\">스테이크·소금스테이크·특별한날</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">모도우 삼성</td><td style=\"padding:7px 6px;text-align:center\">4.6점</td><td style=\"padding:7px 6px;text-align:center\">154</td><td style=\"padding:7px 6px;text-align:center\">9,000~15,000원</td><td style=\"padding:7px 6px\">프라이빗룸·코스요리·고급한식</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">논두렁오리주물럭 선릉직영점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">485</td><td style=\"padding:7px 6px;text-align:center\">8,000~58,000원</td><td style=\"padding:7px 6px\">리뷰많음·점심추천·주차가능</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>단체·회식:</strong> 논두렁오리주물럭 선릉직영점 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>혼밥:</strong> 일상정원 코엑스점 — 1인 식사가 부담 없는 곳입니다.</li><li><strong>평점 최고:</strong> 솔트랑 스테이크 삼성 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 일상정원 코엑스점 (리뷰 706건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>해화장, 일상정원 코엑스점은(는) 사전 예약을 권장합니다. 특히 주말이나 저녁 시간대는 예약 없이 방문 시 대기할 수 있습니다.</li><li>주차 가능: 해화장, 일상정원 코엑스점, 솔트랑 스테이크 삼성.</li><li>모도우 삼성 등은 별도 주차장이 없으므로 대중교통 이용을 권장합니다.</li><li>데이트 식사는 예약이 기본입니다. 특히 금·토요일 저녁은 최소 3일 전 예약을 권장합니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/date",
      text: "삼성역 데이트 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>이 글에서 소개한 삼성역 데이트 맛집 정보는 2026년 5월 기준 데이터입니다. 영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인을 권장합니다. 아래 관련 글도 함께 참고해 보세요.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
