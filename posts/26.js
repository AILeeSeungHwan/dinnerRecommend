const post = {
  id: 26,
  sections: [
    {
      type: 'intro',
      html: "<p>강남역 고기 맛집을 검색하면 너무 많은 결과가 나옵니다. 268곳의 데이터에서 실제로 방문할 만한 7곳만 선별하였습니다.</p><p>평균 평점 0점입니다. 2026년 5월 기준이며, 고기 종류·부위·인당 가격·구이 방식을 위주로 비교하였습니다.</p><p>소개 순서: 꼬끼오 장작구이, 고기꾼김춘배 강남점, 까사생갈비, 전설의우대갈비 강남직영점, 칼맞은삼겹살 강남본점.</p>",
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
      html: "<p>강남역 전체 268곳에서 고기 카테고리에 해당하는 식당을 선별하였습니다. 평점 0점 이상, 고기 종류·부위·인당 가격·구이 방식 기준으로 비교하였습니다. 2026년 5월 데이터 기준이므로, 폐업이나 가격 변동이 있을 수 있으니 방문 전에 반드시 확인하시기 바랍니다.</p>",
    },
    {
      type: 'h2',
      id: "꼬끼오-장작구이",
      text: "꼬끼오 장작구이 — 고기구이 전문점",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/꼬끼오 장작구이\">꼬끼오 장작구이</a>. 고기구이 전문점으로, 평점 0점을 기록하고 있습니다.</p><p>환기 시설이 잘 되어 있는 편이지만, 옷에 냄새가 신경 쓰이시면 갈아입을 옷을 챙기시는 것도 방법입니다.</p><p><a href=\"/dinner/gangnam/restaurant/꼬끼오 장작구이\" style=\"color:var(--primary)\">→ 꼬끼오 장작구이 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "고기꾼김춘배-강남점",
      text: "고기꾼김춘배 강남점 — 고기구이 전문점",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: "<p>공간이 괜찮은 편이라 눈에 들어오는 곳입니다. <a href=\"/dinner/gangnam/restaurant/고기꾼김춘배 강남점\">고기꾼김춘배 강남점</a>.</p><p>환기 시설이 잘 되어 있는 편이지만, 옷에 냄새가 신경 쓰이시면 갈아입을 옷을 챙기시는 것도 방법입니다.</p><p><a href=\"/dinner/gangnam/restaurant/고기꾼김춘배 강남점\" style=\"color:var(--primary)\">→ 고기꾼김춘배 강남점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "까사생갈비",
      text: "까사생갈비 — 고기구이 전문점",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/까사생갈비\">까사생갈비</a>. 고기구이 전문점으로, 평점 0점을 기록하고 있습니다.</p><p>환기 시설이 잘 되어 있는 편이지만, 옷에 냄새가 신경 쓰이시면 갈아입을 옷을 챙기시는 것도 방법입니다.</p><p><a href=\"/dinner/gangnam/restaurant/까사생갈비\" style=\"color:var(--primary)\">→ 까사생갈비 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "전설의우대갈비-강남직영점",
      text: "전설의우대갈비 강남직영점 — 고기구이 전문점",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/전설의우대갈비 강남직영점\">전설의우대갈비 강남직영점</a>. 고기구이 전문점으로,</p><p>직화로 직접 구워 드시는 스타일이며, 굽기를 직원분이 도와주시는 편입니다.</p><p><a href=\"/dinner/gangnam/restaurant/전설의우대갈비 강남직영점\" style=\"color:var(--primary)\">→ 전설의우대갈비 강남직영점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "칼맞은삼겹살-강남본점",
      text: "칼맞은삼겹살 강남본점 — 고기구이 전문점",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/칼맞은삼겹살 강남본점\">칼맞은삼겹살 강남본점</a>. 평점 0점을 유지하고 있는 곳입니다.</p><p>굽기 옵션이 따로 안내되어 있어 미디엄·웰던 등 취향대로 요청하실 수 있습니다.</p><p><a href=\"/dinner/gangnam/restaurant/칼맞은삼겹살 강남본점\" style=\"color:var(--primary)\">→ 칼맞은삼겹살 강남본점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "두배고기-강남역본점",
      text: "두배고기 강남역본점 — 고기구이 전문점",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/두배고기 강남역본점\">두배고기 강남역본점</a>.</p><p>직화로 직접 구워 드시는 스타일이며, 굽기를 직원분이 도와주시는 편입니다.</p><p><a href=\"/dinner/gangnam/restaurant/두배고기 강남역본점\" style=\"color:var(--primary)\">→ 두배고기 강남역본점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "풍년참숯갈비-강남점",
      text: "풍년참숯갈비 강남점 — 고기구이 전문점",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/gangnam/restaurant/풍년참숯갈비 강남점\">풍년참숯갈비 강남점</a>.</p><p>굽기 옵션이 따로 안내되어 있어 미디엄·웰던 등 취향대로 요청하실 수 있습니다.</p><p><a href=\"/dinner/gangnam/restaurant/풍년참숯갈비 강남점\" style=\"color:var(--primary)\">→ 풍년참숯갈비 강남점 상세 정보 보기</a></p>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "강남역 고기 맛집 한눈에 비교",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/꼬끼오 장작구이\">꼬끼오 장작구이</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">고기구이 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/고기꾼김춘배 강남점\">고기꾼김춘배 강남점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">고기구이 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/까사생갈비\">까사생갈비</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">고기구이 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/전설의우대갈비 강남직영점\">전설의우대갈비 강남직영점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">고기구이 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/칼맞은삼겹살 강남본점\">칼맞은삼겹살 강남본점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">고기구이 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/두배고기 강남역본점\">두배고기 강남역본점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">고기구이 전문</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/gangnam/restaurant/풍년참숯갈비 강남점\">풍년참숯갈비 강남점</a></td><td style=\"padding:7px 6px;text-align:center\">0</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">고기구이 전문</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 이 식당을 추천합니다",
      gradientStyle: { from: '#ffecd2', to: '#fcb69f' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>평점 최고:</strong> 꼬끼오 장작구이 (평점 0점) — 방문자 평가가 가장 높습니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "방문 전 꼭 확인할 점",
      gradientStyle: { from: '#a18cd1', to: '#fbc2eb' },
    },
    {
      type: 'body',
      html: "<ul><li>고기집은 환기 상태를 확인해보시는 것이 좋습니다. 옷에 냄새가 신경 쓰이시는 분들은 오후 1시 이후에 방문하시면 회전이 빠릅니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/gangnam/category/meat",
      text: "강남역 고기 맛집 전체 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p><ul><li><a href=\"/posts/gangnam-date-best-2026\">강남역 데이트 레스토랑 추천 4곳</a></li><li><a href=\"/posts/gangnam-izakaya-best-2026\">강남역 이자카야·술집 추천 7곳</a></li><li><a href=\"/posts/gangnam-chinese-best-2026\">강남역 중식 맛집 추천 7곳</a></li><li><a href=\"/posts/gangnam-gukbap-best-2026\">강남역 국밥·해장 맛집 추천 7곳</a></li><li><a href=\"/dinner/gangnam\">강남역 전체 맛집 보기</a></li></ul>",
    }
  ],
}

export default post
