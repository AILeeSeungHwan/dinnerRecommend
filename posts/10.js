const post = {
  id: 10,
  sections: [
    {
      type: 'intro',
      html: "<p>망포역·삼성전자 근처에서 가성비 괜찮은 곳을 찾고 계시는 분들을 위해 준비하였습니다. 5곳을 추려서 가격과 메뉴까지 상세하게 정리하였습니다.</p><p>평균 평점 4.5점입니다. 가격대는 8,000원부터 시작하며, 2026년 5월 기준이며, 1인 가격·양·혼밥 가능 여부을 위주로 비교하였습니다.</p><p>소개 순서: 서천교동짬뽕, 한마음정육식당 영통점, 청담칼국수, 생고기김치찌개, 행복한김밥.</p>",
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
      html: "<p>망포 전체 345곳에서 가성비 카테고리에 해당하는 식당을 선별하였습니다. 평점 4.3점 이상, 1인 가격·양·혼밥 가능 여부 기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
    },
    {
      type: 'h2',
      id: "서천교동짬뽕",
      text: "서천교동짬뽕 — 가성비 점심 추천",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/10/서천교동짬뽕-1.jpg",
      alt: "서천교동짬뽕 대표 사진",
      caption: "서천교동짬뽕",
    },
    {
      type: 'body',
      html: "<p>중식·칼국수 하면 <a href=\"/samsungElectronics/mangpo/restaurant/서천교동짬뽕\">서천교동짬뽕</a>도 빠지지 않습니다. 평점 4.6점입니다.</p><p>가격대는 10,000~20,000원입니다.</p><p>가성비가 좋다는 평이 많습니다. 점심 시간에는 웨이팅이 있을 수 있습니다. 단체석이나 룸이 마련되어 있습니다.</p><p>26건 리뷰에 4.6점이면 충분히 검증된 곳이라 하겠습니다. 10천원대부터 메뉴가 있으니 가볍게 한 끼 하시기에 좋습니다.</p><p><a href=\"/samsungElectronics/mangpo/restaurant/서천교동짬뽕\" style=\"color:var(--primary)\">→ 서천교동짬뽕 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "한마음정육식당-영통점",
      text: "한마음정육식당 영통점 — 가성비 점심 추천",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/10/한마음정육식당-영통점-1.jpg",
      alt: "한마음정육식당 영통점 대표 사진",
      caption: "한마음정육식당 영통점",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳입니다. <a href=\"/samsungElectronics/mangpo/restaurant/한마음정육식당 영통점\">한마음정육식당 영통점</a>.</p><p>84건 리뷰에 4.5점이면 충분히 검증된 곳이라 하겠습니다. 10천원대부터 메뉴가 있으니 가볍게 한 끼 하시기에 좋습니다.</p><p><a href=\"/samsungElectronics/mangpo/restaurant/한마음정육식당 영통점\" style=\"color:var(--primary)\">→ 한마음정육식당 영통점 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/10/한마음정육식당-영통점-2.jpg",
      alt: "한마음정육식당 영통점 음식 사진",
      caption: "한마음정육식당 영통점 메뉴",
    },
    {
      type: 'h2',
      id: "청담칼국수",
      text: "청담칼국수 — 가성비 점심 추천",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/10/청담칼국수-1.jpg",
      alt: "청담칼국수 대표 사진",
      caption: "청담칼국수",
    },
    {
      type: 'body',
      html: "<p>만원 이하로 한 끼 해결하실 수 있는 <a href=\"/samsungElectronics/mangpo/restaurant/청담칼국수\">청담칼국수</a>입니다. 가격 부담 없이 편하게 방문하실 수 있습니다.</p><p>혼밥하시기에도 편한 구조입니다.</p><p>144건 리뷰가 있으면 동네에서 나름 알려진 편입니다. 8천원대부터 메뉴가 있으니 가볍게 한 끼 하시기에 좋습니다.</p><p><a href=\"/samsungElectronics/mangpo/restaurant/청담칼국수\" style=\"color:var(--primary)\">→ 청담칼국수 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/10/청담칼국수-2.jpg",
      alt: "청담칼국수 음식 사진",
      caption: "청담칼국수 메뉴",
    },
    {
      type: 'h2',
      id: "생고기김치찌개",
      text: "생고기김치찌개 — 가성비 점심 추천",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/samsungElectronics/mangpo/restaurant/생고기김치찌개\">생고기김치찌개</a>. 고기구이·국밥 전문점으로, 평점 4.5점에 리뷰 29건을 기록하고 있습니다.</p><p>가격대는 10,000~20,000원입니다.</p><p>단체석이나 룸이 마련되어 있습니다.</p><p>평점 4.5점, 리뷰 29건으로 나쁘지 않은 수치를 보이고 있습니다. 만원 안쪽으로 해결 가능하십니다. 부담 없이 방문하실 수 있는 가격입니다.</p><p><a href=\"/samsungElectronics/mangpo/restaurant/생고기김치찌개\" style=\"color:var(--primary)\">→ 생고기김치찌개 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "행복한김밥",
      text: "행복한김밥 — 가성비 점심 추천",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/10/행복한김밥-1.jpg",
      alt: "행복한김밥 대표 사진",
      caption: "행복한김밥",
    },
    {
      type: 'body',
      html: "<p>분식 하면 <a href=\"/samsungElectronics/mangpo/restaurant/행복한김밥\">행복한김밥</a>도 빠지지 않습니다. 평점 4.3점입니다.</p><p>가격대는 10,000~20,000원입니다.</p><p>가성비가 좋다는 평이 많습니다.</p><p>리뷰 60건 정도 쌓여 있어서 어느 정도 검증이 된 곳입니다. 만원 이하 메뉴가 있어서 부담이 적습니다. 가볍게 한 끼 해결하시기에 좋은 가격대입니다.</p><p><a href=\"/samsungElectronics/mangpo/restaurant/행복한김밥\" style=\"color:var(--primary)\">→ 행복한김밥 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "망포 가성비 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/mangpo/restaurant/서천교동짬뽕\">서천교동짬뽕</a></td><td style=\"padding:7px 6px;text-align:center\">4.6</td><td style=\"padding:7px 6px;text-align:center\">26건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">가성비 괜찮음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/mangpo/restaurant/한마음정육식당 영통점\">한마음정육식당 영통점</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">84건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">합리적인 가격</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/mangpo/restaurant/청담칼국수\">청담칼국수</a></td><td style=\"padding:7px 6px;text-align:center\">4.4</td><td style=\"padding:7px 6px;text-align:center\">144건</td><td style=\"padding:7px 6px;text-align:center\">8,000~12,000원</td><td style=\"padding:7px 6px\">가성비 괜찮음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/mangpo/restaurant/생고기김치찌개\">생고기김치찌개</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">29건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">회식 추천</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/mangpo/restaurant/행복한김밥\">행복한김밥</a></td><td style=\"padding:7px 6px;text-align:center\">4.3</td><td style=\"padding:7px 6px;text-align:center\">60건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">합리적인 가격</td></tr></tbody></table>",
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
      html: "<ul><li>서천교동짬뽕은 점심 피크 시간(12시~12시 30분)에 대기가 있을 수 있습니다. 11시 50분 이전에 방문하시는 것을 추천드립니다.</li><li>가성비가 좋은 곳일수록 점심 웨이팅이 길어지는 경향이 있습니다. 11시 30분~50분 사이에 방문하시면 대기 시간을 줄이실 수 있습니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/samsungElectronics/mangpo/category/budget",
      text: "망포 가성비 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/mangpo-team-dinner-2026\">망포역 회식 장소 추천 5곳</a></li><li><a href=\"/posts/pangyo-honbap-budget-2026\">판교역 혼밥 맛집 1만원대 추천</a></li><li><a href=\"/posts/pangyo-lunch-meat-guide-2026\">판교역 점심 고기 맛집 7선</a></li><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/samsungElectronics/mangpo\">망포 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
