const post = {
  id: 7,
  sections: [
    {
      type: 'intro',
      html: "<p>영통역·삼성전자 근처에서 점심 괜찮은 데가 어딘지 찾아봤다. 6곳 추려서 가격이랑 메뉴까지 정리해둔다.</p><p>평균 평점 4.6점. 가격대는 10,000원부터 시작하며, 2026년 5월 기준이고, 접근성·회전율·세트 메뉴·가격을 위주로 비교했다.</p><p>소개 순서: 청우회관, 이수국밥, 돈부리인생, 화붐 신간짬뽕 본점, 피자펍.</p>",
    },
    {
      type: 'toc',
    },
    {
      type: 'h2',
      id: "criteria",
      text: "선정 기준 — 왜 이 6곳인가",
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: "<p>영통 전체 679곳에서 점심 카테고리 식당을 추렸다. 평점 4.5점 이상, 접근성·회전율·세트 메뉴·가격 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
    },
    {
      type: 'h2',
      id: "청우회관",
      text: "청우회관 — 고기구이 대표 맛집",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/7/청우회관-1.jpg",
      alt: "청우회관 대표 사진",
      caption: "청우회관",
    },
    {
      type: 'body',
      html: "<p><a href=\"/samsungElectronics/yeongtong/restaurant/청우회관\">청우회관</a>. 고기구이 전문이고 평점 4.8점(리뷰 6건).</p><p>가격대 10,000~20,000원.</p><p>점심엔 웨이팅이 좀 있다. 단체석이나 룸이 있다.</p><p><a href=\"/samsungElectronics/yeongtong/restaurant/청우회관\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "이수국밥",
      text: "이수국밥 — 국밥 대표 맛집",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/7/이수국밥-1.jpg",
      alt: "이수국밥 대표 사진",
      caption: "이수국밥",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳. <a href=\"/samsungElectronics/yeongtong/restaurant/이수국밥\">이수국밥</a>.</p><p>리뷰 59건에 평점 4.6점이면 안정적인 편. 점심 10천원대부터 가능해서 직장인 점심으로 괜찮다.</p><p><a href=\"/samsungElectronics/yeongtong/restaurant/이수국밥\" style=\"color:var(--primary)\">→ 이수국밥 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "돈부리인생",
      text: "돈부리인생 — 일식 대표 맛집",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/7/돈부리인생-1.jpg",
      alt: "돈부리인생 대표 사진",
      caption: "돈부리인생",
    },
    {
      type: 'body',
      html: "<p><a href=\"/samsungElectronics/yeongtong/restaurant/돈부리인생\">돈부리인생</a>. 일식 전문이고 평점 4.7점(리뷰 25건).</p><p>가격대 10,000~20,000원.</p><p>가성비가 괜찮다는 평이 많다. 점심엔 웨이팅이 좀 있다.</p><p><a href=\"/samsungElectronics/yeongtong/restaurant/돈부리인생\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "화붐-신간짬뽕-본점",
      text: "화붐 신간짬뽕 본점 — 중식·칼국수 대표 맛집",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/7/화붐-신간짬뽕-본점-1.jpg",
      alt: "화붐 신간짬뽕 본점 대표 사진",
      caption: "화붐 신간짬뽕 본점",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳. <a href=\"/samsungElectronics/yeongtong/restaurant/화붐 신간짬뽕 본점\">화붐 신간짬뽕 본점</a>.</p><p>점심시간 웨이팅이 좀 있는 편이니 일찍 가는 게 낫다.</p><p>리뷰 123건에 평점 4.5점이면 안정적인 편. 점심 10천원대부터 가능해서 직장인 점심으로 괜찮다.</p><p><a href=\"/samsungElectronics/yeongtong/restaurant/화붐 신간짬뽕 본점\" style=\"color:var(--primary)\">→ 화붐 신간짬뽕 본점 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/7/화붐-신간짬뽕-본점-2.jpg",
      alt: "화붐 신간짬뽕 본점 음식 사진",
      caption: "화붐 신간짬뽕 본점 메뉴",
    },
    {
      type: 'h2',
      id: "피자펍",
      text: "피자펍 — 양식·이탈리안 대표 맛집",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/7/피자펍-1.jpg",
      alt: "피자펍 대표 사진",
      caption: "피자펍",
    },
    {
      type: 'body',
      html: "<p><a href=\"/samsungElectronics/yeongtong/restaurant/피자펍\">피자펍</a>. 양식·이탈리안 전문이고 평점 4.6점(리뷰 5건).</p><p>가격대 10,000~20,000원.</p><p><a href=\"/samsungElectronics/yeongtong/restaurant/피자펍\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "김래하닭갈비",
      text: "김래하닭갈비 — 고기구이·치킨 대표 맛집",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'image',
      src: "/images/posts/7/김래하닭갈비-1.jpg",
      alt: "김래하닭갈비 대표 사진",
      caption: "김래하닭갈비",
    },
    {
      type: 'body',
      html: "<p>분위기가 좋아서 눈에 들어오는 곳. <a href=\"/samsungElectronics/yeongtong/restaurant/김래하닭갈비\">김래하닭갈비</a>.</p><p>점심시간 웨이팅이 좀 있는 편이니 일찍 가는 게 낫다.</p><p>리뷰 122건에 평점 4.5점이면 안정적인 편. 점심 10천원대부터 가능해서 직장인 점심으로 괜찮다.</p><p><a href=\"/samsungElectronics/yeongtong/restaurant/김래하닭갈비\" style=\"color:var(--primary)\">→ 김래하닭갈비 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/7/김래하닭갈비-2.jpg",
      alt: "김래하닭갈비 음식 사진",
      caption: "김래하닭갈비 메뉴",
    },
    {
      type: 'h2',
      id: "compare",
      text: "영통 점심 맛집 한눈에 비교",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtong/restaurant/청우회관\">청우회관</a></td><td style=\"padding:7px 6px;text-align:center\">4.8</td><td style=\"padding:7px 6px;text-align:center\">6건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">줄 서서 먹는 맛</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtong/restaurant/이수국밥\">이수국밥</a></td><td style=\"padding:7px 6px;text-align:center\">4.6</td><td style=\"padding:7px 6px;text-align:center\">59건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">국밥 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtong/restaurant/돈부리인생\">돈부리인생</a></td><td style=\"padding:7px 6px;text-align:center\">4.7</td><td style=\"padding:7px 6px;text-align:center\">25건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtong/restaurant/화붐 신간짬뽕 본점\">화붐 신간짬뽕 본점</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">123건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtong/restaurant/피자펍\">피자펍</a></td><td style=\"padding:7px 6px;text-align:center\">4.6</td><td style=\"padding:7px 6px;text-align:center\">5건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">양식·이탈리안 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/samsungElectronics/yeongtong/restaurant/김래하닭갈비\">김래하닭갈비</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">122건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">줄 서서 먹는 맛</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#a18cd1', to: '#fbc2eb' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 돈부리인생, 화붐 신간짬뽕 본점 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> 청우회관, 이수국밥 — 데이트나 특별한 날에 추천합니다.</li><li><strong>단체·회식:</strong> 청우회관, 화붐 신간짬뽕 본점 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>평점 최고:</strong> 청우회관 (평점 4.8점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 화붐 신간짬뽕 본점 (리뷰 123건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li>청우회관, 돈부리인생은 점심 피크(12시~12시 반)에 줄이 좀 있다. 11시 50분 전에 가는 게 낫다.</li><li>점심 메뉴가 저녁보다 싼 경우가 많다. 런치 세트 있는지 미리 확인.</li></ul>",
    },
    {
      type: 'cta',
      href: "/samsungElectronics/yeongtong/category/lunch",
      text: "영통 점심 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/yeongtong-meat-best-2026\">영통역 고기 맛집 추천 5곳</a></li><li><a href=\"/posts/yeongtong-date-restaurant-2026\">영통역 데이트 맛집 추천 5곳</a></li><li><a href=\"/posts/samsung-lunch-guide-2026\">삼성역 점심 뭐 먹지? 카테고리별 추천 총정리</a></li><li><a href=\"/posts/yeongtonggu-lunch-guide-2026\">영통구청 점심 맛집 추천 5곳</a></li><li><a href=\"/samsungElectronics/yeongtong\">영통 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
