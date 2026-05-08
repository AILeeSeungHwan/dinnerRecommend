const post = {
  id: 3,
  sections: [
    {
      type: 'intro',
      html: "<p>잠실·송리단길·석촌호수 일대에서 회식·단체 맛집을 찾고 계신가요? 잠실 지역 총 1149곳 식당 데이터 중 회식·단체 5곳을 평점·가격·메뉴·영업시간까지 꼼꼼하게 비교했습니다.</p><p>평균 평점 4.4점, 가격대는 3,000원부터 시작하며, 2026년 5월 기준 실제 운영 데이터입니다. 룸·단체석·인당 예산·주차을(를) 중심으로 비교했으니 상황에 맞는 식당을 바로 골라보세요.</p><p>이 글에서 소개하는 식당: 방이옥, 황소곱창, 조조모모, 요즈음, 이자카야 대물 잠실방이본점.</p>",
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
      html: "<p>잠실 지역 1149곳 식당 데이터 중 회식·단체 카테고리에 해당하는 식당을 평점 2.5점 이상, 리뷰 수, 룸·단체석·인당 예산·주차 등을 기준으로 선별했습니다. 모든 정보는 2026년 5월 기준 실제 운영 데이터이며, 폐업·휴무·가격 변동이 있을 수 있으므로 방문 전 확인을 권장합니다.</p>",
    },
    {
      type: 'h2',
      id: "방이옥",
      text: "방이옥 — 회식 추천 식당",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/3/방이옥-1.jpg",
      alt: "방이옥 대표 사진",
      caption: "방이옥",
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/jamsil/restaurant/방이옥\">방이옥</a></strong> (오금로15길 8)</p><ul><li>평점 2.5점 (리뷰 2건)</li><li>가격대 17,000~28,000원</li><li>영업시간 PM 4–AM 2 (매일)</li></ul><p>점심시간에는 웨이팅이 있을 수 있어 일찍 방문하는 것을 권장합니다.</p><p>리뷰 2건이 등록된 식당으로, 방문자 평가를 참고하시기 바랍니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#삼겹살 #방이동로컬 #웨이팅맛집 #회식 #두툼</p>",
    },
    {
      type: 'h2',
      id: "황소곱창",
      text: "황소곱창 — 회식 추천 식당",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/3/황소곱창-1.jpg",
      alt: "황소곱창 대표 사진",
      caption: "황소곱창",
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/jamsil/restaurant/황소곱창\">황소곱창</a></strong> (삼성동 145-29 1층)</p><ul><li>평점 4.4점 (리뷰 104건 · 블로그 346건)</li><li>가격대 4,000~30,000원</li><li>영업시간 17:00</li><li>예약 가능</li></ul><p><strong>대표 메뉴:</strong> 1인분 180g 28,000원 / 1인분 200g 28,000원 / 1인분 150g 30,000원 / 1인분 150g 28,000원 / 1인분 150g 18,000원</p><p>점심시간에는 웨이팅이 있을 수 있어 일찍 방문하는 것을 권장합니다.</p><p>리뷰 104건이 등록된 식당으로, 방문자 평가를 참고하시기 바랍니다. 인당 3만원대로 회식 예산 계획 시 참고하시기 바랍니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#리뷰많음 #웨이팅맛집</p>",
    },
    {
      type: 'h2',
      id: "조조모모",
      text: "조조모모 — 회식 추천 식당",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/3/조조모모-1.jpg",
      alt: "조조모모 대표 사진",
      caption: "조조모모",
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/jamsil/restaurant/조조모모\">조조모모</a></strong> (서울특별시 송파구 방이동 64-5 B1층)</p><ul><li>평점 5점 (리뷰 256건 · 블로그 845건)</li><li>가격대 17,000~29,000원</li><li>영업시간 17:00에 영업 시작</li><li>전화 070-8800-0229</li><li>예약 가능</li></ul><p><strong>대표 메뉴:</strong> 시그니처 돼지갈비 수육 29,000원 / 크림 떡볶이와 감태 가리비찜 27,000원 / 고추장 돼지찌개 25,000원 / 물 닭갈비 25,000원 / 가리비 어묵탕 23,000원</p><p>점심시간에는 웨이팅이 있을 수 있어 일찍 방문하는 것을 권장합니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 256건이 축적된 검증된 맛집입니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#리뷰많음 #데이트 #웨이팅맛집</p>",
    },
    {
      type: 'h2',
      id: "요즈음",
      text: "요즈음 — 회식 추천 식당",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/3/요즈음-1.jpg",
      alt: "요즈음 대표 사진",
      caption: "요즈음",
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/jamsil/restaurant/요즈음\">요즈음</a></strong> (서울특별시 송파구 방이동 36-7 9층)</p><ul><li>평점 5점 (리뷰 24건 · 블로그 2216건)</li><li>가격대 3,000~64,000원</li><li>영업시간 17:00에 영업 시작</li><li>전화 07-1470-1987</li><li>예약 가능</li></ul><p><strong>대표 메뉴:</strong> 소주 3000원 할인이벤트 3,000원 / 광어&amp;연어회(32미이상/3~4인용) 64,000원 / 1도씨 숙성광어사시미/22미이상 제공 40,000원 / 다시마에 눌린 연어사시미(25미이상) 35,000원 / 관동식스키야키전골 36,000원</p><p>가격 대비 만족도가 높다는 평가를 받고 있습니다.</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 24건이 축적된 검증된 맛집입니다. 인당 6만원대로 회식 예산 계획 시 참고하시기 바랍니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#리뷰많음 #가성비 #데이트 #뷰맛집</p>",
    },
    {
      type: 'h2',
      id: "이자카야-대물-잠실방이본점",
      text: "이자카야 대물 잠실방이본점 — 회식 추천 식당",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/3/이자카야-대물-잠실방이본점-1.jpg",
      alt: "이자카야 대물 잠실방이본점 대표 사진",
      caption: "이자카야 대물 잠실방이본점",
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/dinner/jamsil/restaurant/이자카야 대물 잠실방이본점\">이자카야 대물 잠실방이본점</a></strong> (서울특별시 송파구 방이동 93 흥진맨션 1층 103, 104호)</p><ul><li>평점 5점 (리뷰 19건 · 블로그 381건)</li><li>가격대 12,000~110,000원</li><li>영업시간 17:00에 영업 시작</li><li>전화 07-1391-0764</li><li>주차 가능 · 예약 가능</li></ul><p><strong>대표 메뉴:</strong> 새벽가락시장 야키토리 6종 추천 세트 27,000원 / 새벽가락시장 사시미모리아와세 42,000원 / 미슐랭셰프 토마토해산물나베 37,000원 / 원시구이2종 킹타이거새우1+생선1 30,000원 / 원시구이3종-킹타이거새우1+생선2 40,000원</p><p>평점 5점으로 해당 지역에서 최상위권에 속하며, 리뷰 19건이 축적된 검증된 맛집입니다. 인당 11만원대로 회식 예산 계획 시 참고하시기 바랍니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#주차가능 #리뷰많음 #서비스좋음</p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "잠실 회식·단체 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰수</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">특징</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">방이옥</td><td style=\"padding:7px 6px;text-align:center\">2.5점</td><td style=\"padding:7px 6px;text-align:center\">2</td><td style=\"padding:7px 6px;text-align:center\">17,000~28,000원</td><td style=\"padding:7px 6px\">삼겹살·방이동로컬·웨이팅맛집</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">황소곱창</td><td style=\"padding:7px 6px;text-align:center\">4.4점</td><td style=\"padding:7px 6px;text-align:center\">104</td><td style=\"padding:7px 6px;text-align:center\">4,000~30,000원</td><td style=\"padding:7px 6px\">리뷰많음·웨이팅맛집</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">조조모모</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">256</td><td style=\"padding:7px 6px;text-align:center\">17,000~29,000원</td><td style=\"padding:7px 6px\">리뷰많음·데이트·웨이팅맛집</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">요즈음</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">24</td><td style=\"padding:7px 6px;text-align:center\">3,000~64,000원</td><td style=\"padding:7px 6px\">리뷰많음·가성비·데이트</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">이자카야 대물 잠실방이본점</td><td style=\"padding:7px 6px;text-align:center\">5점</td><td style=\"padding:7px 6px;text-align:center\">19</td><td style=\"padding:7px 6px;text-align:center\">12,000~110,000원</td><td style=\"padding:7px 6px\">주차가능·리뷰많음·서비스좋음</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 요즈음 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>평점 최고:</strong> 조조모모 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 조조모모 (리뷰 256건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>방이옥, 황소곱창 등은 점심 피크(12:00~12:30)에 웨이팅이 있습니다. 11:50 이전 도착을 권장합니다.</li><li>황소곱창, 조조모모은(는) 사전 예약을 권장합니다. 특히 주말이나 저녁 시간대는 예약 없이 방문 시 대기할 수 있습니다.</li><li>주차 가능: 이자카야 대물 잠실방이본점.</li><li>방이옥, 황소곱창 등은 별도 주차장이 없으므로 대중교통 이용을 권장합니다.</li><li>회식 장소는 인원 확정 후 최소 2~3일 전 예약이 필수입니다. 룸이 필요한 경우 일주일 전 예약을 권장합니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/jamsil/category/group",
      text: "잠실 회식·단체 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>이 글에서 소개한 잠실 회식·단체 맛집 정보는 2026년 5월 기준 데이터입니다. 영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인을 권장합니다. 아래 관련 글도 함께 참고해 보세요.</p><ul><li><a href=\"/posts/jamsil-japanese-sushi-2026\">잠실 일식·스시 맛집 추천 5선</a></li><li><a href=\"/posts/jamsil-gukbap-best-2026\">잠실 국밥·해장국 맛집 추천 5선</a></li><li><a href=\"/posts/jamsil-date-restaurant-2026\">잠실 데이트 맛집 추천 5곳</a></li><li><a href=\"/posts/jamsil-date-course-complete-2026\">잠실 데이트 코스 완벽 가이드 2026</a></li><li><a href=\"/dinner/jamsil\">잠실 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
