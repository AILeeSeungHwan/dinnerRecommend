const post = {
  id: 22,
  sections: [
    {
      type: 'intro',
      html: "<p>판교역·테크노밸리·백현동 일대에서 회식·단체 맛집을 찾고 계신가요? 판교 지역 총 902곳 식당 데이터 중 회식·단체 5곳을 평점·가격·메뉴·영업시간까지 꼼꼼하게 비교했습니다.</p><p>평균 평점 4.9점, 가격대는 12,000원부터 시작하며, 2026년 5월 기준 실제 운영 데이터입니다. 룸·단체석·인당 예산·주차을(를) 중심으로 비교했으니 상황에 맞는 식당을 바로 골라보세요.</p><p>이 글에서 소개하는 식당: 스시소라 판교점, 꿰다 판교아브뉴프랑점, 우화, 바차 판교점, 심양 판교점.</p>",
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
      html: "<p>판교 지역 902곳 식당 데이터 중 회식·단체 카테고리에 해당하는 식당을 평점 4.8점 이상, 리뷰 수, 룸·단체석·인당 예산·주차 등을 기준으로 선별했습니다. 모든 정보는 2026년 5월 기준 실제 운영 데이터이며, 폐업·휴무·가격 변동이 있을 수 있으므로 방문 전 확인을 권장합니다.</p>",
    },
    {
      type: 'h2',
      id: "스시소라-판교점",
      text: "스시소라 판교점 — 회식 추천 식당",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/pangyo/restaurant/스시소라 판교점\">스시소라 판교점</a></strong> (경기도 성남시 분당구 삼평동 740 지하1층 비101호)</p><ul><li>평점 5점 (리뷰 1건 · 블로그 105건)</li><li>가격대 50,000~100,000원</li><li>영업시간 17:00에 영업 시작</li><li>전화 031-702-3200</li><li>주차 가능</li></ul><p><strong>대표 메뉴:</strong> 런치)오마카세 50,000원 / 디너) 오마카세 100,000원</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 1건이 축적된 검증된 맛집입니다. 인당 10만원대로 회식 예산 계획 시 참고하시기 바랍니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#점심추천 #주차가능 #데이트</p>",
    },
    {
      type: 'h2',
      id: "꿰다-판교아브뉴프랑점",
      text: "꿰다 판교아브뉴프랑점 — 단체석 보유 회식 맛집",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/pangyo/restaurant/꿰다 판교아브뉴프랑점\">꿰다 판교아브뉴프랑점</a></strong> (경기도 성남시 분당구 삼평동 740 판교 호반 써밋 플레이스 1층 143호)</p><ul><li>평점 4.9점 (리뷰 244건 · 블로그 625건)</li><li>가격대 75,000~75,000원</li><li>영업시간 17:00에 영업 시작</li><li>전화 07-1410-4775</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> (런치) 봄과 장 코스 75,000원 / (디너) 봄과 장 코스 75,000원 / 감자 냉수프 / 보리 샐러드 / 찐 전복과 가지</p><p>단체 예약이 가능해 팀 식사에도 적합합니다.</p><p>평점 4.9점으로 해당 지역에서 최상위권에 속하며, 리뷰 244건이 축적된 검증된 맛집입니다. 인당 7만원대로 회식 예산 계획 시 참고하시기 바랍니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#리뷰많음 #주차가능 #단체가능 #데이트 #서비스좋음</p>",
    },
    {
      type: 'h2',
      id: "우화",
      text: "우화 — 단체석 보유 회식 맛집",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/pangyo/restaurant/우화\">우화</a></strong> (동판교로177번길 25)</p><ul><li>평점 4.8점 (리뷰 120건)</li><li>가격대 12,000~22,000원</li><li>영업시간 PM 5:30~10:00</li><li>전화 031-707-4775</li></ul><p>점심시간에는 웨이팅이 있을 수 있어 일찍 방문하는 것을 권장합니다. 단체 예약이 가능해 팀 식사에도 적합합니다. 방문 전 예약을 권장합니다.</p><p>평점 4.8점으로 해당 지역에서 최상위권에 속하며, 리뷰 120건이 축적된 검증된 맛집입니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#고기 #고평점 #구이 #단체가능 #데이트 #예약필수</p>",
    },
    {
      type: 'h2',
      id: "바차-판교점",
      text: "바차 판교점 — 회식 추천 식당",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/pangyo/restaurant/바차 판교점\">바차 판교점</a></strong> (경기도 성남시 분당구 삼평동 656 101호)</p><ul><li>평점 5점 (리뷰 128건 · 블로그 289건)</li><li>가격대 22,000~35,000원</li><li>영업시간 17:00에 영업 시작</li><li>전화 07-1476-7668</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 바차바다찜(M/L) 35,000원 / 해물레드감바스 25,000원 / 로치새우 25,000원 / 수비드항정수육&amp;부추무침 27,000원 / 어니언순살치킨 22,000원</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 128건이 축적된 검증된 맛집입니다. 인당 3만원대로 회식 예산 계획 시 참고하시기 바랍니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#주차가능 #데이트 #리뷰많음 #깔끔한곳 #서비스좋음</p>",
    },
    {
      type: 'h2',
      id: "심양-판교점",
      text: "심양 판교점 — 회식 추천 식당",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/pangyo/restaurant/심양 판교점\">심양 판교점</a></strong> (경기도 성남시 분당구 삼평동 656 112호)</p><ul><li>평점 5점 (리뷰 1건 · 블로그 145건)</li><li>가격대 12,000~43,000원</li><li>영업시간 15:00에 영업 시작</li><li>전화 07-1491-9291</li><li>주차 가능</li></ul><p><strong>대표 메뉴:</strong> 生양등심꼬치 250g 23,000원 / 오리지날양꼬치 200g 18,000원 / 모듬꼬치 43,000원 / 가지튀김볶음 22,000원 / 꿔바로우 24,000원</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 1건이 축적된 검증된 맛집입니다. 인당 4만원대로 회식 예산 계획 시 참고하시기 바랍니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#주차가능 #데이트 #서비스좋음</p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "판교 회식·단체 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰수</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">특징</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">스시소라 판교점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">1</td><td style=\"padding:7px 6px;text-align:center\">50,000~100,000원</td><td style=\"padding:7px 6px\">점심추천·주차가능·데이트</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">꿰다 판교아브뉴프랑점</td><td style=\"padding:7px 6px;text-align:center\">4.9점</td><td style=\"padding:7px 6px;text-align:center\">244</td><td style=\"padding:7px 6px;text-align:center\">75,000~75,000원</td><td style=\"padding:7px 6px\">리뷰많음·주차가능·단체가능</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">우화</td><td style=\"padding:7px 6px;text-align:center\">4.8점</td><td style=\"padding:7px 6px;text-align:center\">120</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">고기·고평점·구이</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">바차 판교점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">128</td><td style=\"padding:7px 6px;text-align:center\">22,000~35,000원</td><td style=\"padding:7px 6px\">주차가능·데이트·리뷰많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">심양 판교점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">1</td><td style=\"padding:7px 6px;text-align:center\">12,000~43,000원</td><td style=\"padding:7px 6px\">주차가능·데이트·서비스좋음</td></tr></tbody></table>",
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
      html: "<ul><li>우화 등은 점심 피크(12:00~12:30)에 웨이팅이 있습니다. 11:50 이전 도착을 권장합니다.</li><li>꿰다 판교아브뉴프랑점, 우화은(는) 사전 예약을 권장합니다. 특히 주말이나 저녁 시간대는 예약 없이 방문 시 대기할 수 있습니다.</li><li>주차 가능: 스시소라 판교점, 꿰다 판교아브뉴프랑점, 바차 판교점.</li><li>우화 등은 별도 주차장이 없으므로 대중교통 이용을 권장합니다.</li><li>회식 장소는 인원 확정 후 최소 2~3일 전 예약이 필수입니다. 룸이 필요한 경우 일주일 전 예약을 권장합니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/pangyo/category/group",
      text: "판교 회식·단체 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>이 글에서 소개한 판교 회식·단체 맛집 정보는 2026년 5월 기준 데이터입니다. 영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인을 권장합니다. 아래 관련 글도 함께 참고해 보세요.</p><ul><li><a href=\"/posts/pangyo-lunch-meat-guide-2026\">판교역 점심 고기 맛집 7선</a></li><li><a href=\"/posts/pangyo-honbap-budget-2026\">판교역 혼밥 맛집 1만원대 추천</a></li><li><a href=\"/posts/pangyo-date-restaurant-2026\">판교 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/pangyo-chinese-food-2026\">판교역 중식 맛집 추천 5곳</a></li><li><a href=\"/pangyo\">판교 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
