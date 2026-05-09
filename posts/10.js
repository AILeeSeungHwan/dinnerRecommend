const post = {
  id: 10,
  sections: [
    {
      type: 'intro',
      html: "<p>망포역·삼성전자 근처에서 가성비 괜찮은 데가 어딘지 찾아봤다. 5곳 추려서 가격이랑 메뉴까지 정리해둔다.</p><p>평균 평점 4.5점. 가격대는 8,000원부터 시작하며, 2026년 5월 기준이고, 1인 가격·양·혼밥 가능 여부을 위주로 비교했다.</p><p>소개 순서: 서천교동짬뽕, 한마음정육식당 영통점, 청담칼국수, 생고기김치찌개, 행복한김밥.</p>",
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
      html: "<p>망포 전체 345곳에서 가성비 카테고리 식당을 추렸다. 평점 4.3점 이상, 1인 가격·양·혼밥 가능 여부 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
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
      html: "<p>중식·칼국수 하면 <a href=\"/samsungElectronics/mangpo/restaurant/서천교동짬뽕\">서천교동짬뽕</a>도 빠지지 않는다. 4.6점.</p><p>가격대 10,000~20,000원.</p><p>가성비가 괜찮다는 평이 많다. 점심엔 웨이팅이 좀 있다. 단체석이나 룸이 있다.</p><p><a href=\"/samsungElectronics/mangpo/restaurant/서천교동짬뽕\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
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
      html: "<p>분위기가 좋아서 눈에 들어오는 곳. <a href=\"/samsungElectronics/mangpo/restaurant/한마음정육식당 영통점\">한마음정육식당 영통점</a>.</p><p>84건 리뷰에 4.5점이면 무난하게 검증된 곳. 10천원대부터 있으니 가볍게 한 끼 하기 좋다.</p><p><a href=\"/samsungElectronics/mangpo/restaurant/한마음정육식당 영통점\" style=\"color:var(--primary)\">→ 한마음정육식당 영통점 상세 정보 보기</a></p>",
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
      html: "<p>만원 이하로 한 끼 해결할 수 있는 <a href=\"/samsungElectronics/mangpo/restaurant/청담칼국수\">청담칼국수</a>.</p><p>혼밥하기 편한 구조.</p><p>리뷰 144건 정도 쌓여 있어서 어느 정도 검증은 된 곳. 만원 이하 메뉴가 있어서 부담이 적다.</p><p><a href=\"/samsungElectronics/mangpo/restaurant/청담칼국수\" style=\"color:var(--primary)\">→ 청담칼국수 상세 정보 보기</a></p>",
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
      html: "<p><a href=\"/samsungElectronics/mangpo/restaurant/생고기김치찌개\">생고기김치찌개</a>. 고기구이·국밥. 4.5점에 리뷰 29건.</p><p>가격대 10,000~20,000원.</p><p>단체석이나 룸이 있다.</p><p><a href=\"/samsungElectronics/mangpo/restaurant/생고기김치찌개\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
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
      html: "<p><a href=\"/samsungElectronics/mangpo/restaurant/행복한김밥\">행복한김밥</a>. 분식. 4.3점에 리뷰 60건.</p><p>가격대 10,000~20,000원.</p><p>가성비가 괜찮다는 평이 많다.</p><p><a href=\"/samsungElectronics/mangpo/restaurant/행복한김밥\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "망포 가성비 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/mangpo/restaurant/서천교동짬뽕\">서천교동짬뽕</a></td><td style=\"padding:7px 6px;text-align:center\">4.6</td><td style=\"padding:7px 6px;text-align:center\">26건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">가성비 괜찮음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/mangpo/restaurant/한마음정육식당 영통점\">한마음정육식당 영통점</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">84건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/mangpo/restaurant/청담칼국수\">청담칼국수</a></td><td style=\"padding:7px 6px;text-align:center\">4.4</td><td style=\"padding:7px 6px;text-align:center\">144건</td><td style=\"padding:7px 6px;text-align:center\">8,000~12,000원</td><td style=\"padding:7px 6px\">합리적인 가격</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/mangpo/restaurant/생고기김치찌개\">생고기김치찌개</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">29건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">단체석·회식 가능</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/mangpo/restaurant/행복한김밥\">행복한김밥</a></td><td style=\"padding:7px 6px;text-align:center\">4.3</td><td style=\"padding:7px 6px;text-align:center\">60건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr></tbody></table>",
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
      html: "<ul><li>서천교동짬뽕은 점심 피크(12시~12시 반)에 줄이 좀 있다. 11시 50분 전에 가는 게 낫다.</li><li>가성비 좋은 곳일수록 점심 웨이팅이 길다. 11시 반~50분 사이가 타이밍.</li></ul>",
    },
    {
      type: 'cta',
      href: "/samsungElectronics/mangpo/category/budget",
      text: "망포 가성비 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/mangpo-team-dinner-2026\">망포역 회식 장소 추천 5곳</a></li><li><a href=\"/posts/pangyo-honbap-budget-2026\">판교역 혼밥 맛집 1만원대 추천</a></li><li><a href=\"/posts/pangyo-lunch-meat-guide-2026\">판교역 점심 고기 맛집 7선</a></li><li><a href=\"/posts/samsung-izakaya-best-2026\">삼성역 이자카야 추천 7곳</a></li><li><a href=\"/samsungElectronics/mangpo\">망포 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
