const post = {
  id: 32,
  sections: [
    {
      type: 'intro',
      html: "<p>강남역 맛집을 검색하면 너무 많은 결과가 나옵니다. 268곳의 데이터에서 실제로 방문할 만한 4곳만 선별하였습니다.</p><p>평균 평점 0점입니다. 2026년 5월 기준이며, 을 위주로 비교하였습니다.</p><p>소개 순서: 도치피자 강남, 퍼그피자하우스 강남점, 헤비스테이크 강남역점, 봉스테이크.</p>",
    },
    {
      type: 'toc',
    },
    {
      type: 'h2',
      id: "criteria",
      text: "선정 기준 — 왜 이 4곳인가",
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: "<p>강남역 전체 268곳에서  카테고리에 해당하는 식당을 선별하였습니다. 평점 0점 이상,  기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
    },
    {
      type: 'h2',
      id: "도치피자-강남",
      text: "도치피자 강남 — 양식 전문점",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/도치피자 강남\">도치피자 강남</a>. 양식 전문점으로, 평점 0점을 기록하고 있습니다.</p><p><a href=\"/dinner/gangnam/restaurant/도치피자 강남\" style=\"color:var(--primary)\">→ 도치피자 강남 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "퍼그피자하우스-강남점",
      text: "퍼그피자하우스 강남점 — 양식 전문점",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: "<p>공간이 괜찮은 편이라 눈에 들어오는 곳입니다. <a href=\"/dinner/gangnam/restaurant/퍼그피자하우스 강남점\">퍼그피자하우스 강남점</a>.</p><p><a href=\"/dinner/gangnam/restaurant/퍼그피자하우스 강남점\" style=\"color:var(--primary)\">→ 퍼그피자하우스 강남점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "헤비스테이크-강남역점",
      text: "헤비스테이크 강남역점 — 스테이크 전문점",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/헤비스테이크 강남역점\">헤비스테이크 강남역점</a>. 평점 0점을 유지하고 있는 곳입니다.</p><p><a href=\"/dinner/gangnam/restaurant/헤비스테이크 강남역점\" style=\"color:var(--primary)\">→ 헤비스테이크 강남역점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "봉스테이크",
      text: "봉스테이크 — 스테이크 전문점",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/봉스테이크\">봉스테이크</a>. 스테이크 전문점입니다.</p><p><a href=\"/dinner/gangnam/restaurant/봉스테이크\" style=\"color:var(--primary)\">→ 봉스테이크 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "강남역  맛집 한눈에 비교",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/도치피자 강남\">도치피자 강남</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">양식 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/퍼그피자하우스 강남점\">퍼그피자하우스 강남점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">양식 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/헤비스테이크 강남역점\">헤비스테이크 강남역점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">스테이크 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/봉스테이크\">봉스테이크</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">스테이크 전문</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>평점 최고:</strong> 도치피자 강남 (평점 0점) — 방문자 평가가 가장 높습니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<ul><li>방문 전에 영업시간과 휴무일을 반드시 확인하시기 바랍니다. 명절 전후에 임시 휴무하는 곳이 꽤 있습니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/gangnam/category/western",
      text: "강남역  맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/gangnam-meat-best-2026\">강남역 고기 맛집 추천 7곳</a></li><li><a href=\"/posts/gangnam-date-best-2026\">강남역 데이트 레스토랑 추천 4곳</a></li><li><a href=\"/posts/gangnam-izakaya-best-2026\">강남역 이자카야·술집 추천 7곳</a></li><li><a href=\"/posts/gangnam-chinese-best-2026\">강남역 중식 맛집 추천 7곳</a></li><li><a href=\"/dinner/gangnam\">강남역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
