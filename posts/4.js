const post = {
  id: 4,
  sections: [
    {
      type: 'intro',
      html: "<p>판교역·테크노밸리·백현동 근처에서 가성비 괜찮은 곳을 찾고 계시는 분들을 위해 준비하였습니다. 5곳을 추려서 가격과 메뉴까지 상세하게 정리하였습니다.</p><p>평균 평점 4.8점입니다. 가격대는 12,000원부터 시작하며, 2026년 5월 기준이며, 1인 가격·양·혼밥 가능 여부을 위주로 비교하였습니다.</p><p>소개 순서: 삼미칼국수, 불고기 온소반, 정백선순대 판교역점, 상기육개장, 살레르노 판교점.</p>",
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
      html: "<p>판교 전체 902곳에서 가성비 카테고리에 해당하는 식당을 선별하였습니다. 평점 4.5점 이상, 1인 가격·양·혼밥 가능 여부 기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
    },
    {
      type: 'h2',
      id: "삼미칼국수",
      text: "삼미칼국수 — 칼국수 전문점",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/삼미칼국수\">삼미칼국수</a>. 칼국수 전문점으로, 평점 4.5점을 기록하고 있습니다.</p><p>점심시간에는 웨이팅이 있는 편이니 일찍 방문하시는 것을 추천드립니다.</p><p>리뷰 240건에 4.5점이면 꾸준히 무난한 편입니다.</p><p><a href=\"/pangyo/restaurant/삼미칼국수\" style=\"color:var(--primary)\">→ 삼미칼국수 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "불고기-온소반",
      text: "불고기 온소반 — 고기구이 전문점",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "/images/posts/4/불고기-온소반-1.jpg",
      alt: "불고기 온소반 대표 사진",
      caption: "불고기 온소반",
    },
    {
      type: 'body',
      html: "<p>12천원대부터 시작하는 <a href=\"/pangyo/restaurant/불고기 온소반\">불고기 온소반</a>입니다. 점심 가격으로는 무난한 선이라 하겠습니다.</p><p>점심시간에는 웨이팅이 있는 편이니 일찍 방문하시는 것을 추천드립니다.</p><p>평점 4.9점, 리뷰 72건으로 안정적인 평가를 받고 있습니다.</p><p><a href=\"/pangyo/restaurant/불고기 온소반\" style=\"color:var(--primary)\">→ 불고기 온소반 상세 정보 보기</a></p>",
    },
    {
      type: 'image',
      src: "/images/posts/4/불고기-온소반-2.jpg",
      alt: "불고기 온소반 음식 사진",
      caption: "불고기 온소반 메뉴",
    },
    {
      type: 'h2',
      id: "정백선순대-판교역점",
      text: "정백선순대 판교역점 — 분식 전문점",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "/images/posts/4/정백선순대-판교역점-1.jpg",
      alt: "정백선순대 판교역점 대표 사진",
      caption: "정백선순대 판교역점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/정백선순대 판교역점\">정백선순대 판교역점</a>. 분식 전문점입니다. 4.8점에 리뷰 34건이 쌓여 있습니다.</p><p>가격대는 12,000~22,000원입니다.</p><p>점심 시간에는 웨이팅이 있을 수 있습니다.</p><p>4.8점·리뷰 34건. 방문자 평이 비교적 일관되게 좋은 편입니다.</p><p><a href=\"/pangyo/restaurant/정백선순대 판교역점\" style=\"color:var(--primary)\">→ 정백선순대 판교역점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "상기육개장",
      text: "상기육개장 — 혼밥 가능한 가성비 식당",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "/images/posts/4/상기육개장-1.jpg",
      alt: "상기육개장 대표 사진",
      caption: "상기육개장",
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/상기육개장\">상기육개장</a>. 한식 전문점으로, 평점 4.9점에 리뷰 19건을 기록하고 있습니다.</p><p>가격대는 12,000~22,000원입니다.</p><p>점심 시간에는 웨이팅이 있을 수 있습니다. 혼밥하시기에도 편한 구조입니다.</p><p>4.9점·리뷰 19건. 방문자 평이 비교적 일관되게 좋은 편입니다.</p><p><a href=\"/pangyo/restaurant/상기육개장\" style=\"color:var(--primary)\">→ 상기육개장 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "살레르노-판교점",
      text: "살레르노 판교점 — 한식 전문점",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "/images/posts/4/살레르노-판교점-1.jpg",
      alt: "살레르노 판교점 대표 사진",
      caption: "살레르노 판교점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/pangyo/restaurant/살레르노 판교점\">살레르노 판교점</a>. 평점 4.9점, 리뷰 9건 정도 있습니다.</p><p>가격대는 12,000~22,000원입니다.</p><p>가성비가 좋다는 평이 많습니다. 점심 시간에는 웨이팅이 있을 수 있습니다.</p><p>평점 4.9점, 리뷰 9건으로 안정적인 평가를 받고 있습니다.</p><p><a href=\"/pangyo/restaurant/살레르노 판교점\" style=\"color:var(--primary)\">→ 살레르노 판교점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "판교 가성비 맛집 한눈에 비교",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/삼미칼국수\">삼미칼국수</a></td><td style=\"padding:7px 6px;text-align:center\">4.5</td><td style=\"padding:7px 6px;text-align:center\">240건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">인기 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/불고기 온소반\">불고기 온소반</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">72건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/정백선순대 판교역점\">정백선순대 판교역점</a></td><td style=\"padding:7px 6px;text-align:center\">4.8</td><td style=\"padding:7px 6px;text-align:center\">34건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">줄 서서 먹는 맛</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/상기육개장\">상기육개장</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">19건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">인기 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/pangyo/restaurant/살레르노 판교점\">살레르노 판교점</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">9건</td><td style=\"padding:7px 6px;text-align:center\">12,000~22,000원</td><td style=\"padding:7px 6px\">가성비 괜찮음</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 불고기 온소반, 살레르노 판교점 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>단체·회식:</strong> 불고기 온소반 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>혼밥:</strong> 상기육개장 — 1인 식사가 부담 없는 곳입니다.</li><li><strong>평점 최고:</strong> 불고기 온소반 (평점 4.9점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 삼미칼국수 (리뷰 240건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>삼미칼국수, 불고기 온소반은 점심 피크 시간(12시~12시 30분)에 대기가 있을 수 있습니다. 11시 50분 이전에 방문하시는 것을 추천드립니다.</li><li>가성비가 좋은 곳일수록 점심 웨이팅이 길어지는 경향이 있습니다. 11시 30분~50분 사이에 방문하시면 대기 시간을 줄이실 수 있습니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/pangyo/category/budget",
      text: "판교 가성비 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/pangyo-lunch-meat-guide-2026\">판교역 점심 고기 맛집 7선</a></li><li><a href=\"/posts/pangyo-team-dinner-2026\">판교역 회식 장소 추천 2026</a></li><li><a href=\"/posts/pangyo-date-restaurant-2026\">판교 데이트 레스토랑 추천 5곳</a></li><li><a href=\"/posts/pangyo-chinese-food-2026\">판교역 중식 맛집 추천 5곳</a></li><li><a href=\"/pangyo\">판교 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
