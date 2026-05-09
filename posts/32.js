const post = {
  id: 32,
  sections: [
    {
      type: 'intro',
      html: "<p>강남역 국밥·해장 맛집을 검색하면 너무 많은 결과가 나옵니다. 285곳의 데이터에서 실제로 방문할 만한 7곳만 선별하였습니다.</p><p>평균 평점 0점입니다. 가격대는 6,000원부터 시작하며, 2026년 5월 기준이며, 국물·가격·해장 효과·24시 여부을 위주로 비교하였습니다.</p><p>소개 순서: 강남진해장, 육전국밥 강남역점, 제주은희네해장국 강남역점, 곰작골나주곰탕 강남점, 칠백한우국밥.</p>",
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
      html: "<p>강남역 전체 285곳에서 국밥·해장 카테고리에 해당하는 식당을 선별하였습니다. 평점 0점 이상, 국물·가격·해장 효과·24시 여부 기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
    },
    {
      type: 'h2',
      id: "강남진해장",
      text: "강남진해장 — 국밥 전문점",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/강남진해장\">강남진해장</a>. 국밥 전문점으로, 평점 0점을 기록하고 있습니다.</p><p>주차가 가능합니다. 예약이 가능합니다.</p><p>국물 베이스가 진한 편이라 단품 한 그릇으로도 충분히 든든합니다.</p><p>방문 후기에서 자주 언급되는 부분은 서비스 쪽입니다.</p><p><a href=\"/dinner/gangnam/restaurant/강남진해장\" style=\"color:var(--primary)\">→ 강남진해장 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "육전국밥-강남역점",
      text: "육전국밥 강남역점 — 시그니처 육전소고기국밥 11,000원",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: "<p>육전소고기국밥 11,000원. <a href=\"/dinner/gangnam/restaurant/육전국밥 강남역점\">육전국밥 강남역점</a>의 대표 메뉴입니다. 소고기국밥, 미소곰탕 같은 메뉴도 인기가 좋습니다.</p><p>그 외에 함박곰탕(14,000원), 육전물막국수(11,000원), 육전비빔막국수(11,000원)도 있습니다.</p><p>주차가 가능합니다. 예약이 가능합니다.</p><p>국물 베이스가 진한 편이라 단품 한 그릇으로도 충분히 든든합니다.</p><p>맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p>한 방문자는 \"맨날 국밥만 먹다가 불백먹었는데 맛있었요정식하나시켜서 육전과 함께 맛있게 먹었어요\"고 적어두었습니다.</p><p>방문 후기에서 자주 언급되는 부분은 맛 쪽입니다.</p><p><a href=\"/dinner/gangnam/restaurant/육전국밥 강남역점\" style=\"color:var(--primary)\">→ 육전국밥 강남역점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "제주은희네해장국-강남역점",
      text: "제주은희네해장국 강남역점 — 리뷰 1,211건이 쌓인 곳",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/제주은희네해장국 강남역점\">제주은희네해장국 강남역점</a>을 방문하시면 해장국을 추천드립니다. 12,000원에 드실 수 있습니다. 내장탕, 돔베고기(소,중,대) 같은 메뉴도 인기가 좋습니다.</p><p>그 외에 양무침(16,000원)도 있습니다.</p><p>국물 베이스가 진한 편이라 단품 한 그릇으로도 충분히 든든합니다.</p><p>맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p>한 방문자는 \"맛집 해장국 제주 해장국 맛있어요 해장국에 돔베고기에 소주한잔 최고에요\"고 적어두었습니다.</p><p>방문 후기에서 자주 언급되는 부분은 맛·국물 쪽입니다.</p><p><a href=\"/dinner/gangnam/restaurant/제주은희네해장국 강남역점\" style=\"color:var(--primary)\">→ 제주은희네해장국 강남역점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "곰작골나주곰탕-강남점",
      text: "곰작골나주곰탕 강남점 — 리뷰 803건 검증 맛집",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/곰작골나주곰탕 강남점\">곰작골나주곰탕 강남점</a>. 평점 0점을 유지하고 있는 곳입니다.</p><p>대표 메뉴는 나주곰탕 12,000원, 특곰탕 14,000원, 미나리수육곰탕 15,000원입니다.</p><p>주차도 가능합니다. 예약이 가능합니다.</p><p>국물 베이스가 진한 편이라 단품 한 그릇으로도 충분히 든든합니다.</p><p>방문 후기에서 자주 언급되는 부분은 서비스·국물 쪽입니다.</p><p><a href=\"/dinner/gangnam/restaurant/곰작골나주곰탕 강남점\" style=\"color:var(--primary)\">→ 곰작골나주곰탕 강남점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "칠백한우국밥",
      text: "칠백한우국밥 — 시그니처 한우국밥 10,000원",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/칠백한우국밥\">칠백한우국밥</a>. 평점 0점을 유지하고 있는 곳입니다.</p><p>대표 메뉴는 한우국밥 10,000원, 한우설렁탕 11,000원, 한우뚝배기불고기 12,000원입니다.</p><p>주차도 가능합니다. 예약이 가능합니다.</p><p>국물 베이스가 진한 편이라 단품 한 그릇으로도 충분히 든든합니다.</p><p>방문 후기에서 자주 언급되는 부분은 서비스 쪽입니다.</p><p><a href=\"/dinner/gangnam/restaurant/칠백한우국밥\" style=\"color:var(--primary)\">→ 칠백한우국밥 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "이여곰탕-역삼점",
      text: "이여곰탕 역삼점 — 시그니처 곰탕 12,000원",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/이여곰탕 역삼점\">이여곰탕 역삼점</a>. 국밥 전문점으로,</p><p>곰탕 12,000원이 가장 인기 있는 메뉴이며, 곰개장 12,000원, 살로만 15,000원도 추천드립니다.</p><p>주차도 가능합니다. 예약이 가능합니다.</p><p>국물 베이스가 진한 편이라 단품 한 그릇으로도 충분히 든든합니다.</p><p>분위기가 좋아서 식사 자리로 적합합니다. 내부 인테리어에 신경을 많이 쓴 것이 느껴진다는 후기가 있습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p>방문 후기에서 자주 언급되는 부분은 분위기·재료·맛 쪽입니다.</p><p><a href=\"/dinner/gangnam/restaurant/이여곰탕 역삼점\" style=\"color:var(--primary)\">→ 이여곰탕 역삼점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "나주곰탕",
      text: "나주곰탕 — 리뷰 611건 검증 맛집",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/나주곰탕\">나주곰탕</a>. 평점 0점을 유지하고 있는 곳입니다.</p><p>대표 메뉴는 나주곰탕 11,000원, 얼큰곰탕 12,000원, 곰탕만두국 11,000원입니다.</p><p>주차도 가능합니다. 예약이 가능합니다.</p><p>국물 베이스가 진한 편이라 단품 한 그릇으로도 충분히 든든합니다.</p><p>재료가 신선합니다. 당일 재료를 사용한다는 점에서 식재료에 대한 신뢰도가 높습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p>방문 후기에서 자주 언급되는 부분은 맛·국물·서비스 쪽입니다.</p><p><a href=\"/dinner/gangnam/restaurant/나주곰탕\" style=\"color:var(--primary)\">→ 나주곰탕 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "강남역 국밥·해장 맛집 한눈에 비교",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/강남진해장\">강남진해장</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">2446건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">국밥 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/육전국밥 강남역점\">육전국밥 강남역점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">564건</td><td style=\"padding:7px 6px;text-align:center\">10,000~17,000원</td><td style=\"padding:7px 6px\">회식 추천</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/제주은희네해장국 강남역점\">제주은희네해장국 강남역점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">1211건</td><td style=\"padding:7px 6px;text-align:center\">12,000~16,000원</td><td style=\"padding:7px 6px\">1인 식사 OK</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/곰작골나주곰탕 강남점\">곰작골나주곰탕 강남점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">803건</td><td style=\"padding:7px 6px;text-align:center\">12,000~18,000원</td><td style=\"padding:7px 6px\">국밥 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/칠백한우국밥\">칠백한우국밥</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">859건</td><td style=\"padding:7px 6px;text-align:center\">8,000~52,000원</td><td style=\"padding:7px 6px\">국밥 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/이여곰탕 역삼점\">이여곰탕 역삼점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">852건</td><td style=\"padding:7px 6px;text-align:center\">6,000~54,000원</td><td style=\"padding:7px 6px\">국밥 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/나주곰탕\">나주곰탕</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">611건</td><td style=\"padding:7px 6px;text-align:center\">11,000~22,000원</td><td style=\"padding:7px 6px\">국밥 전문</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#ffecd2', to: '#fcb69f' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>단체·회식:</strong> 육전국밥 강남역점 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>혼밥:</strong> 육전국밥 강남역점, 제주은희네해장국 강남역점 — 1인 식사가 부담 없는 곳입니다.</li><li><strong>평점 최고:</strong> 강남진해장 (평점 0점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 강남진해장 (리뷰 2446건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#a18cd1', to: '#fbc2eb' },
    },
    {
      type: 'body',
      html: "<ul><li>강남진해장, 육전국밥 강남역점은 사전에 예약하고 방문하시는 것이 좋습니다. 특히 주말 저녁에는 예약이 필수입니다.</li><li>주차 가능한 곳: 강남진해장, 육전국밥 강남역점, 곰작골나주곰탕 강남점.</li><li>제주은희네해장국 강남역점 등은 전용 주차장이 없습니다. 대중교통 이용을 권장드립니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/gangnam/category/gukbap",
      text: "강남역 국밥·해장 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/gangnam-meat-best-2026\">강남역 고기 맛집 추천 7곳</a></li><li><a href=\"/posts/gangnam-date-best-2026\">강남역 데이트 레스토랑 추천 7곳</a></li><li><a href=\"/posts/gangnam-team-dinner-best-2026\">강남역 회식 장소 추천 7곳</a></li><li><a href=\"/posts/gangnam-budget-best-2026\">강남역 가성비 맛집 추천 7곳</a></li><li><a href=\"/dinner/gangnam\">강남역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
