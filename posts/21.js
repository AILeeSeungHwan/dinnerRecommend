const post = {
  id: 21,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역에서 회식·단체 식당을 찾고 계신다면, 이 글 하나로 정리해 드리겠습니다. 총 859곳 중 회식·단체 5곳을 엄선하여 비교하였습니다.</p><p>평균 평점 5.0점입니다. 가격대는 8,000원부터 시작하며, 2026년 5월 기준이며, 룸·단체석·인당 예산·주차을 위주로 비교하였습니다.</p><p>소개 순서: 무탄 코엑스, 개성집, 논두렁오리주물럭 선릉직영점, 회초리씨푸드 대치점, 블룸.</p>",
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
      html: "<p>삼성역 전체 859곳에서 회식·단체 카테고리에 해당하는 식당을 선별하였습니다. 평점 4.9점 이상, 룸·단체석·인당 예산·주차 기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
    },
    {
      type: 'h2',
      id: "무탄-코엑스",
      text: "무탄 코엑스 — 중식·퓨전 전문점",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/restaurants/samseong/무탄-코엑스-1.jpg",
      alt: "무탄 코엑스 대표 사진",
      caption: "무탄 코엑스",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳입니다. <a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a>.</p><p>주차가 가능합니다. 예약이 가능합니다. 단체석이 마련되어 있습니다.</p><p>7,774건 리뷰에 4.9점이라는 점에서 인지도가 높은 편입니다.</p><p>양이 많아서 배부르게 드실 수 있습니다. 남성분들도 충분히 만족할 수 있는 양입니다. 인기가 많아서 웨이팅이 좀 있는 편입니다. 점심 피크 시간을 피하시면 대기 시간을 줄일 수 있습니다.</p><p>한 방문자는 \"대기가 있었지만 기다리기 힘들지 않았고, 음식이 맛있고 양이 많아요\"고 적어두었습니다.</p><p>방문 후기에서 자주 언급되는 부분은 맛·웨이팅 쪽입니다.</p><p><a href=\"/dinner/samseong/restaurant/무탄 코엑스\" style=\"color:var(--primary)\">→ 무탄 코엑스 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "개성집",
      text: "개성집 — 시그니처 삼겹살 14,000원",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/restaurants/samseong/개성집-1.jpg",
      alt: "개성집 대표 사진",
      caption: "개성집",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳입니다. <a href=\"/dinner/samseong/restaurant/개성집\">개성집</a>.</p><p>대표 메뉴로는 삼겹살 14,000원 등이 있으며, 가격대는 합리적인 편입니다.</p><p>국내산 삼겹살입니다.</p><p>주차가 가능합니다. 예약이 가능합니다.</p><p>평점 4.9점, 리뷰 2,655건. 이 동네에서 자주 언급되는 곳 중 하나입니다.</p><p>재료가 신선합니다. 당일 재료를 사용한다는 점에서 식재료에 대한 신뢰도가 높습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p>한 방문자는 \"재료 하나하나 정성이 느껴져 끝까지 맛있게 먹게 됩니다\"고 적어두었습니다.</p><p>방문 후기에서 자주 언급되는 부분은 국물·재료·서비스 쪽입니다.</p><p><a href=\"/dinner/samseong/restaurant/개성집\" style=\"color:var(--primary)\">→ 개성집 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "논두렁오리주물럭-선릉직영점",
      text: "논두렁오리주물럭 선릉직영점 — 인당 5만원대 코스",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "https://ldb-phinf.pstatic.net/20250922_77/1758506333664mCKU9_PNG/1.png",
      alt: "논두렁오리주물럭 선릉직영점 대표 사진",
      caption: "논두렁오리주물럭 선릉직영점",
    },
    {
      type: 'body',
      html: "<p>한식 하면 <a href=\"/dinner/samseong/restaurant/논두렁오리주물럭 선릉직영점\">논두렁오리주물럭 선릉직영점</a>도 빠지지 않습니다. 평점 5점입니다.</p><p>메뉴를 살펴보면, 양념 오리 주물럭(2인~3인) 58,000원 / 양념 오리 주물럭(2인~3인) 58,000원 / 양념 오리 주물럭(2인~3인) 58,000원 / 대패 주물럭 한판(2~3인) 36,000원 등이 있습니다.</p><p>한마리(2~3인)  (고기800g+야채)</p><p>단체석이나 룸이 마련되어 있습니다. 주차도 가능합니다. 예약이 가능합니다.</p><p>5점·리뷰 485건. 방문자 평이 비교적 일관되게 좋은 편입니다. 예산은 인당 5만원 정도 잡으시면 넉넉합니다.</p><p>맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다. 주차가 편하다는 의견이 있습니다. 차량으로 방문하시는 분들에게 유리한 조건입니다.</p><p>방문 후기에서 자주 언급되는 부분은 분위기·맛·주차 쪽입니다.</p><p><a href=\"/dinner/samseong/restaurant/논두렁오리주물럭 선릉직영점\" style=\"color:var(--primary)\">→ 논두렁오리주물럭 선릉직영점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "회초리씨푸드-대치점",
      text: "회초리씨푸드 대치점 — 평점 5·리뷰 237건",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "https://ldb-phinf.pstatic.net/20251205_34/1764925380489rfP02_PNG/%C8%B8%C3%CA%B8%AE.png",
      alt: "회초리씨푸드 대치점 대표 사진",
      caption: "회초리씨푸드 대치점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/회초리씨푸드 대치점\">회초리씨푸드 대치점</a>. 평점 5점, 리뷰 237건 정도 있습니다.</p><p>점심)회초리 정식 (2인이상) 30,000원이 가장 인기 있는 메뉴이며, \"점심\"백합파스타 9,900원, \"점심\"씨푸드 크림 파스타 12,900원도 추천드립니다.</p><p>탕+제철회+초밥+파스타&돈까스+모찌리도후</p><p>점심 시간에는 웨이팅이 있을 수 있습니다. 단체석이나 룸이 마련되어 있습니다. 주차도 가능합니다. 예약이 가능합니다.</p><p>평점 5점, 리뷰 237건으로 안정적인 평가를 받고 있습니다. 인당 5만원대 예산이면 충분합니다. 회식비로 적당한 수준이라 하겠습니다.</p><p>재료가 신선합니다. 당일 재료를 사용한다는 점에서 식재료에 대한 신뢰도가 높습니다. 맛에 대한 만족도가 높은 편입니다. 전반적으로 음식 맛에 대한 긍정적인 평가가 많습니다.</p><p>방문 후기에서 자주 언급되는 부분은 맛·서비스·재료 쪽입니다.</p><p><a href=\"/dinner/samseong/restaurant/회초리씨푸드 대치점\" style=\"color:var(--primary)\">→ 회초리씨푸드 대치점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "블룸",
      text: "블룸 — 단체석 운영 회식 식당",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "https://ldb-phinf.pstatic.net/20251112_153/1762891506421qHwmy_JPEG/DSC_6637.jpg",
      alt: "블룸 대표 사진",
      caption: "블룸",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/블룸\">블룸</a>. 술집 전문점입니다. 5점에 리뷰 6건이 쌓여 있습니다.</p><p>대표 메뉴는 진토닉 18,000원, 세이지 버터 파스타 25,000원, 페퍼로니 피자 25,000원입니다.</p><p>단체석이나 룸이 마련되어 있습니다. 주차도 가능합니다.</p><p>리뷰 6건에 5점이면 꾸준히 무난한 편입니다.</p><p>분위기가 좋아서 식사 자리로 적합합니다. 내부 인테리어에 신경을 많이 쓴 것이 느껴진다는 후기가 있습니다.</p><p>방문 후기에서 자주 언급되는 부분은 분위기·맛 쪽입니다.</p><p><a href=\"/dinner/samseong/restaurant/블룸\" style=\"color:var(--primary)\">→ 블룸 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 회식·단체 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">7774건</td><td style=\"padding:7px 6px;text-align:center\">10,000~18,000원</td><td style=\"padding:7px 6px\">룸 있음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/개성집\">개성집</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">2655건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">가성비 괜찮음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/논두렁오리주물럭 선릉직영점\">논두렁오리주물럭 선릉직영점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">485건</td><td style=\"padding:7px 6px;text-align:center\">8,000~58,000원</td><td style=\"padding:7px 6px\">회식 추천</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/회초리씨푸드 대치점\">회초리씨푸드 대치점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">237건</td><td style=\"padding:7px 6px;text-align:center\">9,900~55,000원</td><td style=\"padding:7px 6px\">줄 서서 먹는 맛</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/블룸\">블룸</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">6건</td><td style=\"padding:7px 6px;text-align:center\">18,000~25,000원</td><td style=\"padding:7px 6px\">회식 추천</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 개성집 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> 무탄 코엑스, 개성집 — 데이트나 특별한 날에 추천합니다.</li><li><strong>혼밥:</strong> 무탄 코엑스 — 1인 식사가 부담 없는 곳입니다.</li><li><strong>평점 최고:</strong> 논두렁오리주물럭 선릉직영점 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 무탄 코엑스 (리뷰 7774건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>회초리씨푸드 대치점은 점심 피크 시간(12시~12시 30분)에 대기가 있을 수 있습니다. 11시 50분 이전에 방문하시는 것을 추천드립니다.</li><li>무탄 코엑스, 개성집은 사전에 예약하고 방문하시는 것이 좋습니다. 특히 주말 저녁에는 예약이 필수입니다.</li><li>주차 가능한 곳: 무탄 코엑스, 개성집, 논두렁오리주물럭 선릉직영점.</li><li>회식의 경우 인원 확정 후 2~3일 전에 예약하시는 것이 좋습니다. 룸이 필요하시다면 일주일 전에 미리 잡으시기 바랍니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong/category/group",
      text: "삼성역 회식·단체 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/samsung-chinese-food-2026\">삼성역 중식 맛집 추천 5곳</a></li><li><a href=\"/dinner/samseong\">삼성역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
