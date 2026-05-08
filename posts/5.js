const post = {
  id: 5,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역·코엑스·선릉역 일대에서 점심 맛집을 찾고 계신가요? 삼성역 지역 총 859곳 식당 데이터 중 점심 5곳을 평점·가격·메뉴·영업시간까지 꼼꼼하게 비교했습니다.</p><p>평균 평점 5.0점, 가격대는 8,500원부터 시작하며, 2026년 5월 기준 실제 운영 데이터입니다. 접근성·회전율·세트 메뉴·가격을(를) 중심으로 비교했으니 상황에 맞는 식당을 바로 골라보세요.</p><p>이 글에서 소개하는 식당: 멘쇼쿠 코엑스점, 무탄 코엑스, 솔트랑 스테이크 삼성, 바오로흑염소 선릉점, 수림복국 선릉 삼성 별관.</p>",
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
      html: "<p>삼성역 지역 859곳 식당 데이터 중 점심 카테고리에 해당하는 식당을 평점 4.9점 이상, 리뷰 수, 접근성·회전율·세트 메뉴·가격 등을 기준으로 선별했습니다. 모든 정보는 2026년 5월 기준 실제 운영 데이터이며, 폐업·휴무·가격 변동이 있을 수 있으므로 방문 전 확인을 권장합니다.</p>",
    },
    {
      type: 'h2',
      id: "멘쇼쿠-코엑스점",
      text: "멘쇼쿠 코엑스점 — 일식·라멘 대표 맛집",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/멘쇼쿠 코엑스점\">멘쇼쿠 코엑스점</a></strong> (테헤란로 87길 36 도심공항타워)</p><ul><li>평점 4.9점 (리뷰 2655건 · 블로그 227건)</li><li>가격대 13,000~17,500원</li><li>영업시간 11 AM–9 PM</li><li>전화 07-1408-7226</li><li>주차 가능</li></ul><p><strong>대표 메뉴:</strong> 풀 토핑 라멘 17,500원 / 백라멘 13,500원 / 홍라멘 13,500원 / 쇼유라멘 13,000원 / 시오라멘 13,000원</p><p>평점 4.9점으로 해당 지역에서 최상위권에 속하며, 리뷰 2655건이 축적된 검증된 맛집입니다. 점심 기준 13천원대부터 이용 가능해 직장인 점심으로 적합합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#라멘 #흑마늘오일 #혼밥 #혼밥가능 #점심추천 #주차가능</p>",
    },
    {
      type: 'image',
      src: "/images/posts/5/멘쇼쿠-코엑스점-1.jpg",
      alt: "멘쇼쿠 코엑스점 음식 사진 1",
      caption: "멘쇼쿠 코엑스점",
    },
    {
      type: 'h2',
      id: "무탄-코엑스",
      text: "무탄 코엑스 — 중식·퓨전 대표 맛집",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a></strong> (영동대로 513 코엑스몰 B1)</p><ul><li>평점 4.9점 (리뷰 7774건 · 블로그 3811건)</li><li>가격대 10,000~18,000원</li><li>영업시간 11 AM–9:30 PM</li><li>전화 07-1397-0364</li><li>주차 가능 · 예약 가능</li></ul><p>단체 예약이 가능해 팀 식사에도 적합합니다. 분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>평점 4.9점으로 해당 지역에서 최상위권에 속하며, 리뷰 7774건이 축적된 검증된 맛집입니다. 점심 기준 10천원대부터 이용 가능해 직장인 점심으로 적합합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#자장면 #짬뽕 #어향동고 #코엑스핫플 #혼밥가능 #주차가능</p>",
    },
    {
      type: 'image',
      src: "/images/posts/5/무탄-코엑스-1.jpg",
      alt: "무탄 코엑스 음식 사진 1",
      caption: "무탄 코엑스",
    },
    {
      type: 'h2',
      id: "솔트랑-스테이크-삼성",
      text: "솔트랑 스테이크 삼성 — 스테이크하우스 대표 맛집",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/솔트랑 스테이크 삼성\">솔트랑 스테이크 삼성</a></strong> (테헤란로 610 지하 1층)</p><ul><li>평점 5점 (리뷰 184건 · 블로그 369건)</li><li>가격대 8,500~23,000원</li><li>영업시간 11:30 AM–9:30 PM</li><li>전화 02-6012-7429</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> T-bone (100g당) 19,800원 / 솔트허브크런치 토마호크(100g당) 23,000원 / 쿠스쿠스 타볼레 9,900원 / 해산물 황태 알리오올리오 16,900원 / 두바이 아이스크림 8,500원</p><p>분위기가 좋아 데이트 장소로도 추천됩니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 184건이 축적된 검증된 맛집입니다. 점심 기준 8천원대부터 이용 가능해 직장인 점심으로 적합합니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#스테이크 #소금스테이크 #특별한날 #주차가능 #데이트 #리뷰많음</p>",
    },
    {
      type: 'image',
      src: "/images/posts/5/솔트랑-스테이크-삼성-1.jpg",
      alt: "솔트랑 스테이크 삼성 음식 사진 1",
      caption: "솔트랑 스테이크 삼성",
    },
    {
      type: 'h2',
      id: "바오로흑염소-선릉점",
      text: "바오로흑염소 선릉점 — 한식 대표 맛집",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/바오로흑염소 선릉점\">바오로흑염소 선릉점</a></strong> (역삼동 697-11 2층)</p><ul><li>평점 5점 (리뷰 111건 · 블로그 513건)</li><li>가격대 20,000~70,000원</li><li>영업시간 10:00</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 수육(1人) 45,000원 / 바오로흑염소의 대표메뉴 흑염소갈비 49,000원 / 전골(1人) 40,000원 / 흑염소 버섯불고기전골 30,000원 / 수육+무침+튀김+전골 70,000원</p><p>분위기가 좋아 데이트 장소로도 추천됩니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 111건이 축적된 검증된 맛집입니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#리뷰많음 #혼밥가능 #점심추천 #주차가능 #데이트</p>",
    },
    {
      type: 'image',
      src: "/images/posts/5/바오로흑염소-선릉점-1.jpg",
      alt: "바오로흑염소 선릉점 음식 사진 1",
      caption: "바오로흑염소 선릉점",
    },
    {
      type: 'h2',
      id: "수림복국-선릉-삼성-별관",
      text: "수림복국 선릉 삼성 별관 — 해물,생선요리 대표 맛집",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/samseong/restaurant/수림복국 선릉 삼성 별관\">수림복국 선릉 삼성 별관</a></strong> (삼성동 144-21 2층)</p><ul><li>평점 5점 (리뷰 94건 · 블로그 298건)</li><li>영업시간 10:00</li><li>예약 가능</li></ul><p>가격 대비 만족도가 높다는 평가를 받고 있습니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 94건이 축적된 검증된 맛집입니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#점심추천 #가성비 #리뷰많음</p>",
    },
    {
      type: 'image',
      src: "/images/posts/5/수림복국-선릉-삼성-별관-1.jpg",
      alt: "수림복국 선릉 삼성 별관 음식 사진 1",
      caption: "수림복국 선릉 삼성 별관",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 점심 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰수</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">특징</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">멘쇼쿠 코엑스점</td><td style=\"padding:7px 6px;text-align:center\">4.9점</td><td style=\"padding:7px 6px;text-align:center\">2655</td><td style=\"padding:7px 6px;text-align:center\">13,000~17,500원</td><td style=\"padding:7px 6px\">라멘·흑마늘오일·혼밥</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">무탄 코엑스</td><td style=\"padding:7px 6px;text-align:center\">4.9점</td><td style=\"padding:7px 6px;text-align:center\">7774</td><td style=\"padding:7px 6px;text-align:center\">10,000~18,000원</td><td style=\"padding:7px 6px\">자장면·짬뽕·어향동고</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">솔트랑 스테이크 삼성</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">184</td><td style=\"padding:7px 6px;text-align:center\">8,500~23,000원</td><td style=\"padding:7px 6px\">스테이크·소금스테이크·특별한날</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">바오로흑염소 선릉점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">111</td><td style=\"padding:7px 6px;text-align:center\">20,000~70,000원</td><td style=\"padding:7px 6px\">리뷰많음·혼밥가능·점심추천</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">수림복국 선릉 삼성 별관</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">94</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">점심추천·가성비·리뷰많음</td></tr></tbody></table>",
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
      html: "<ul><li>무탄 코엑스, 솔트랑 스테이크 삼성은(는) 사전 예약을 권장합니다. 특히 주말이나 저녁 시간대는 예약 없이 방문 시 대기할 수 있습니다.</li><li>주차 가능: 멘쇼쿠 코엑스점, 무탄 코엑스, 솔트랑 스테이크 삼성.</li><li>수림복국 선릉 삼성 별관 등은 별도 주차장이 없으므로 대중교통 이용을 권장합니다.</li><li>점심 메뉴는 저녁보다 가격이 낮은 경우가 많습니다. 런치 세트가 있는지 미리 확인하면 더 합리적으로 이용할 수 있습니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/lunch",
      text: "삼성역 점심 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>이 글에서 소개한 삼성역 점심 맛집 정보는 2026년 5월 기준 데이터입니다. 영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인을 권장합니다. 아래 관련 글도 함께 참고해 보세요.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/posts/samsung-meat-best-2026\">삼성역 고기 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
