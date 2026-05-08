const post = {
  id: 10,
  sections: [
    {
      type: 'intro',
      html: "<p>망포역·삼성전자 일대에서 가성비 맛집을 찾고 계신가요? 망포 지역 총 345곳 식당 데이터 중 가성비 5곳을 평점·가격·메뉴·영업시간까지 꼼꼼하게 비교했습니다.</p><p>평균 평점 4.5점, 가격대는 8,000원부터 시작하며, 2026년 5월 기준 실제 운영 데이터입니다. 1인 가격·양·혼밥 가능 여부을(를) 중심으로 비교했으니 상황에 맞는 식당을 바로 골라보세요.</p><p>이 글에서 소개하는 식당: 서천교동짬뽕, 한마음정육식당 영통점, 청담칼국수, 생고기김치찌개, 행복한김밥.</p>",
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
      html: "<p>망포 지역 345곳 식당 데이터 중 가성비 카테고리에 해당하는 식당을 평점 4.3점 이상, 리뷰 수, 1인 가격·양·혼밥 가능 여부 등을 기준으로 선별했습니다. 모든 정보는 2026년 5월 기준 실제 운영 데이터이며, 폐업·휴무·가격 변동이 있을 수 있으므로 방문 전 확인을 권장합니다.</p>",
    },
    {
      type: 'h2',
      id: "서천교동짬뽕",
      text: "서천교동짬뽕 — 가성비 점심 추천",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/samsungElectronics/mangpo/restaurant/서천교동짬뽕\">서천교동짬뽕</a></strong> (봉영로1482번길 35 102호)</p><ul><li>평점 4.6점 (리뷰 26건)</li><li>가격대 10,000~20,000원</li><li>영업시간 휴무일</li><li>전화 031-202-5123</li></ul><p>가격 대비 만족도가 높다는 평가를 받고 있습니다. 점심시간에는 웨이팅이 있을 수 있어 일찍 방문하는 것을 권장합니다. 직원 서비스가 친절하다는 리뷰가 많습니다.</p><p>리뷰 26건 기준 평점 4.6점으로 안정적인 평가를 받고 있습니다. 1만원 이하 메뉴가 있어 부담 없이 이용할 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#가성비 #고평점 #국수 #단체가능 #심야영업 #웨이팅맛집</p>",
    },
    {
      type: 'image',
      src: "/images/posts/10/서천교동짬뽕-1.jpg",
      alt: "서천교동짬뽕 음식 사진 1",
      caption: "서천교동짬뽕",
    },
    {
      type: 'h2',
      id: "한마음정육식당-영통점",
      text: "한마음정육식당 영통점 — 가성비 점심 추천",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/samsungElectronics/mangpo/restaurant/한마음정육식당 영통점\">한마음정육식당 영통점</a></strong> (영통동 봉영로1482번길 7-1)</p><ul><li>평점 4.5점 (리뷰 84건)</li><li>가격대 10,000~20,000원</li><li>영업시간 휴무일</li><li>전화 031-202-3166</li></ul><p>가격 대비 만족도가 높다는 평가를 받고 있습니다. 직원 서비스가 친절하다는 리뷰가 많습니다. 분위기가 좋아 데이트 장소로도 추천됩니다.</p><p>리뷰 84건 기준 평점 4.5점으로 안정적인 평가를 받고 있습니다. 1만원 이하 메뉴가 있어 부담 없이 이용할 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#가성비 #고기 #고평점 #구이 #단체가능 #친절</p>",
    },
    {
      type: 'image',
      src: "/images/posts/10/한마음정육식당-영통점-1.jpg",
      alt: "한마음정육식당 영통점 음식 사진 1",
      caption: "한마음정육식당 영통점",
    },
    {
      type: 'image',
      src: "/images/posts/10/한마음정육식당-영통점-2.jpg",
      alt: "한마음정육식당 영통점 음식 사진 2",
      caption: "한마음정육식당 영통점",
    },
    {
      type: 'h2',
      id: "청담칼국수",
      text: "청담칼국수 — 가성비 점심 추천",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/samsungElectronics/mangpo/restaurant/청담칼국수\">청담칼국수</a></strong> (청명남로 6-1)</p><ul><li>평점 4.4점 (리뷰 144건)</li><li>가격대 8,000~12,000원</li><li>영업시간 10:40 AM~9:30 PM</li><li>전화 031-232-6692</li></ul><p>가격 대비 만족도가 높다는 평가를 받고 있습니다.</p><p>리뷰 144건이 등록된 식당으로, 방문자 평가를 참고하시기 바랍니다. 1만원 이하 메뉴가 있어 부담 없이 이용할 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#가성비 #국수 #칼국수 #혼밥가능</p>",
    },
    {
      type: 'image',
      src: "/images/posts/10/청담칼국수-1.jpg",
      alt: "청담칼국수 음식 사진 1",
      caption: "청담칼국수",
    },
    {
      type: 'image',
      src: "/images/posts/10/청담칼국수-2.jpg",
      alt: "청담칼국수 음식 사진 2",
      caption: "청담칼국수",
    },
    {
      type: 'h2',
      id: "생고기김치찌개",
      text: "생고기김치찌개 — 가성비 점심 추천",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/samsungElectronics/mangpo/restaurant/생고기김치찌개\">생고기김치찌개</a></strong> (신원로 177)</p><ul><li>평점 4.5점 (리뷰 29건)</li><li>가격대 10,000~20,000원</li><li>영업시간 영업시간 확인 필요</li></ul><p>분위기가 좋아 데이트 장소로도 추천됩니다. 소규모 회식 장소로도 활용 가능합니다.</p><p>리뷰 29건 기준 평점 4.5점으로 안정적인 평가를 받고 있습니다. 1만원 이하 메뉴가 있어 부담 없이 이용할 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#고기 #고평점 #구이 #국물요리 #국밥 #단체가능</p>",
    },
    {
      type: 'h2',
      id: "행복한김밥",
      text: "행복한김밥 — 가성비 점심 추천",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<p><strong><a href=\"/samsungElectronics/mangpo/restaurant/행복한김밥\">행복한김밥</a></strong> (기흥구 서천동 286-3번지 101호 용인시 경기도 KR)</p><ul><li>평점 4.3점 (리뷰 60건)</li><li>가격대 10,000~20,000원</li><li>영업시간 6:00 AM~8:00 PM</li><li>전화 031-206-5008</li></ul><p>가격 대비 만족도가 높다는 평가를 받고 있습니다.</p><p>리뷰 60건이 등록된 식당으로, 방문자 평가를 참고하시기 바랍니다. 1만원 이하 메뉴가 있어 부담 없이 이용할 수 있습니다.</p><p style=\"color:var(--text-secondary);font-size:.85rem\">#분식 #가성비 #점심추천</p>",
    },
    {
      type: 'image',
      src: "/images/posts/10/행복한김밥-1.jpg",
      alt: "행복한김밥 음식 사진 1",
      caption: "행복한김밥",
    },
    {
      type: 'h2',
      id: "compare",
      text: "망포 가성비 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰수</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">특징</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">서천교동짬뽕</td><td style=\"padding:7px 6px;text-align:center\">4.6점</td><td style=\"padding:7px 6px;text-align:center\">26</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">가성비·고평점·국수</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">한마음정육식당 영통점</td><td style=\"padding:7px 6px;text-align:center\">4.5점</td><td style=\"padding:7px 6px;text-align:center\">84</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">가성비·고기·고평점</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">청담칼국수</td><td style=\"padding:7px 6px;text-align:center\">4.4점</td><td style=\"padding:7px 6px;text-align:center\">144</td><td style=\"padding:7px 6px;text-align:center\">8,000~12,000원</td><td style=\"padding:7px 6px\">가성비·국수·칼국수</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">생고기김치찌개</td><td style=\"padding:7px 6px;text-align:center\">4.5점</td><td style=\"padding:7px 6px;text-align:center\">29</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">고기·고평점·구이</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">행복한김밥</td><td style=\"padding:7px 6px;text-align:center\">4.3점</td><td style=\"padding:7px 6px;text-align:center\">60</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">분식·가성비·점심추천</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 서천교동짬뽕, 한마음정육식당 영통점 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> 서천교동짬뽕, 한마음정육식당 영통점 — 데이트나 특별한 날에 추천합니다.</li><li><strong>단체·회식:</strong> 서천교동짬뽕, 한마음정육식당 영통점 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>혼밥:</strong> 청담칼국수 — 1인 식사가 부담 없는 곳입니다.</li><li><strong>평점 최고:</strong> 서천교동짬뽕 (평점 4.6점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 청담칼국수 (리뷰 144건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>서천교동짬뽕 등은 점심 피크(12:00~12:30)에 웨이팅이 있습니다. 11:50 이전 도착을 권장합니다.</li><li>가성비 맛집일수록 점심 피크 웨이팅이 길 수 있습니다. 11:30~11:50 사이 방문이 최적입니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/samsungElectronics/mangpo/category/budget",
      text: "망포 가성비 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>이 글에서 소개한 망포 가성비 맛집 정보는 2026년 5월 기준 데이터입니다. 영업시간·메뉴·가격은 변동될 수 있으니 방문 전 확인을 권장합니다. 아래 관련 글도 함께 참고해 보세요.</p><ul><li><a href=\"/posts/mangpo-team-dinner-2026\">망포역 회식 장소 추천 5곳</a></li><li><a href=\"/posts/pangyo-honbap-budget-2026\">판교역 혼밥 맛집 1만원대 추천</a></li><li><a href=\"/posts/pangyo-lunch-meat-guide-2026\">판교역 점심 고기 맛집 7선</a></li><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/samsungElectronics/mangpo\">망포 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
