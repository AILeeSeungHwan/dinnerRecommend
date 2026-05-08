const post = {
  id: 23,
  sections: [
    {
      type: 'intro',
      html: "<p>잠실 데이트 맛집, 검색하면 너무 많이 나온다. 1149곳 데이터에서 실제로 갈 만한 5곳만 뽑았다.</p><p>평균 평점 5.0점. 가격대는 3,000원부터 시작하며, 2026년 5월 기준이고, 분위기·코스 구성·예약 여부·뷰을 위주로 비교했다.</p><p>소개 순서: 조조모모, 요즈음, 라코즈, 돈담 잠실새내본점, 연정민 소금구이.</p>",
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
      html: "<p>잠실 전체 1149곳에서 데이트 카테고리 식당을 추렸다. 평점 5점 이상, 분위기·코스 구성·예약 여부·뷰 기준. 2026년 5월 데이터 기준이라 폐업이나 가격 변동은 방문 전 확인하는 게 좋다.</p>",
    },
    {
      type: 'h2',
      id: "조조모모",
      text: "조조모모 — 평점 5점 프리미엄 레스토랑",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "/images/posts/23/조조모모-1.jpg",
      alt: "조조모모 대표 사진",
      caption: "조조모모",
    },
    {
      type: 'body',
      html: "<p>시그니처 돼지갈비 수육(29,000원)이 대표 메뉴인 <a href=\"/dinner/jamsil/restaurant/조조모모\">조조모모</a>. 크림 떡볶이와 감태 가리비찜, 고추장 돼지찌개 같은 메뉴도 있다.</p><p>그 외에 물 닭갈비, 가리비 어묵탕도 있다.</p><p>점심시간 웨이팅이 좀 있는 편이니 일찍 가는 게 낫다. 주차는 안 되니 대중교통 추천. 예약 가능.</p><p>평점 5점이면 이 동네에서 상위권이다. 리뷰 256건.</p><p>분위기가 좋아서 식사 자리로 괜찮다. 재방문 의사가 있다는 리뷰가 많다.</p><p><a href=\"/dinner/jamsil/restaurant/조조모모\" style=\"color:var(--primary)\">→ 조조모모 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "요즈음",
      text: "요즈음 — 평점 5점 프리미엄 레스토랑",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/23/요즈음-1.jpg",
      alt: "요즈음 대표 사진",
      caption: "요즈음",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/jamsil/restaurant/요즈음\">요즈음</a>. 술집 전문이고 평점 5점(리뷰 24건).</p><p>메뉴: 소주 3000원 할인이벤트 3,000원 / 광어&amp;연어회(32미이상/3~4인용) 64,000원 / 1도씨 숙성광어사시미/22미이상 제공 40,000원 / 다시마에 눌린 연어사시미(25미이상) 35,000원.</p><p>가성비가 괜찮다는 평이 많다.</p><p>가성비가 좋다는 리뷰가 많다.</p><p><a href=\"/dinner/jamsil/restaurant/요즈음\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "라코즈",
      text: "라코즈 — 평점 5점 프리미엄 레스토랑",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/23/라코즈-1.jpg",
      alt: "라코즈 대표 사진",
      caption: "라코즈",
    },
    {
      type: 'body',
      html: "<p>프라하 꼴레뇨(38,000원)이 대표 메뉴인 <a href=\"/dinner/jamsil/restaurant/라코즈\">라코즈</a>. 고구마 맛탕 단호박 스프, 닭 다리살 잣 바질 크림 리조또 같은 메뉴도 있다.</p><p>그 외에 와인, 채끝 등심 스테이크도 있다.</p><p>주차는 된다. 예약 가능.</p><p>평점 5점이면 이 동네에서 상위권이다. 리뷰 138건.</p><p>재방문 의사가 있다는 리뷰가 많다. 재료가 신선하다.</p><p><a href=\"/dinner/jamsil/restaurant/라코즈\" style=\"color:var(--primary)\">→ 라코즈 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "돈담-잠실새내본점",
      text: "돈담 잠실새내본점 — 평점 5점 프리미엄 레스토랑",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/23/돈담-잠실새내본점-1.jpg",
      alt: "돈담 잠실새내본점 대표 사진",
      caption: "돈담 잠실새내본점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/jamsil/restaurant/돈담 잠실새내본점\">돈담 잠실새내본점</a>. 한식 전문이고 평점 5점(리뷰 25건).</p><p>메뉴: YBD통오겹살 15,000원 / YBD통목살 15,000원 / 뒷고기 10,500원 / 쫀득살 18,000원.</p><p>가성비가 괜찮다는 평이 많다. 주차도 된다.</p><p>분위기가 깔끔아서 식사 자리로 괜찮다.</p><p><a href=\"/dinner/jamsil/restaurant/돈담 잠실새내본점\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "연정민-소금구이",
      text: "연정민 소금구이 — 평점 5점 프리미엄 레스토랑",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/23/연정민-소금구이-1.jpg",
      alt: "연정민 소금구이 대표 사진",
      caption: "연정민 소금구이",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/jamsil/restaurant/연정민 소금구이\">연정민 소금구이</a>. 한식 전문이고 평점 5점(리뷰 13건).</p><p>메뉴: (신메뉴) 봄동비빔밥 6,000원 / 연정민 소금구이 51,900원 / 재래식 소금구이 48,900원 / 차돌 토장찌개 7,000원.</p><p>주차도 된다.</p><p>재방문 의사가 있다는 리뷰가 많다.</p><p><a href=\"/dinner/jamsil/restaurant/연정민 소금구이\" style=\"color:var(--primary)\">→ 상세 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "잠실 데이트 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/jamsil/restaurant/조조모모\">조조모모</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">256건</td><td style=\"padding:7px 6px;text-align:center\">17,000~29,000원</td><td style=\"padding:7px 6px\">줄 서서 먹는 맛</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/jamsil/restaurant/요즈음\">요즈음</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">24건</td><td style=\"padding:7px 6px;text-align:center\">3,000~64,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/jamsil/restaurant/라코즈\">라코즈</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">138건</td><td style=\"padding:7px 6px;text-align:center\">11,000~38,000원</td><td style=\"padding:7px 6px\">기타 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/jamsil/restaurant/돈담 잠실새내본점\">돈담 잠실새내본점</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">25건</td><td style=\"padding:7px 6px;text-align:center\">7,000~18,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/jamsil/restaurant/연정민 소금구이\">연정민 소금구이</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">13건</td><td style=\"padding:7px 6px;text-align:center\">3,000~51,900원</td><td style=\"padding:7px 6px\">한식 전문</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 요즈음, 돈담 잠실새내본점 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>평점 최고:</strong> 조조모모 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 조조모모 (리뷰 256건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>조조모모은 점심 피크(12시~12시 반)에 줄이 좀 있다. 11시 50분 전에 가는 게 낫다.</li><li>조조모모, 요즈음은 예약하고 가는 게 좋다. 주말 저녁은 특히.</li><li>주차 되는 곳: 라코즈, 돈담 잠실새내본점, 연정민 소금구이.</li><li>조조모모, 요즈음 등은 주차장이 없다. 대중교통이 편하다.</li><li>데이트면 예약은 기본이다. 금토 저녁은 3일 전에는 잡아야 한다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/jamsil/category/date",
      text: "잠실 데이트 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보다. 영업시간이나 가격은 바뀔 수 있으니 방문 전에 한 번 확인하는 게 좋다. 아래 글도 참고.</p><ul><li><a href=\"/posts/jamsil-team-dinner-2026\">잠실 회식 장소 추천 2026</a></li><li><a href=\"/posts/jamsil-japanese-sushi-2026\">잠실 일식·스시 맛집 추천 5선</a></li><li><a href=\"/posts/jamsil-gukbap-best-2026\">잠실 국밥·해장국 맛집 추천 5선</a></li><li><a href=\"/posts/samsung-date-restaurant-2026\">삼성역 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/dinner/jamsil\">잠실 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
