const post = {
  id: 1,
  sections: [
    {
      type: 'intro',
      html: '<p>판교 테크노밸리 직장인이라면 점심마다 "오늘 고기 어때?" 하는 말이 익숙할 겁니다. 알파리움·삼환하이펙스·판교테크원 주변에 실제로 줄 서서 먹는 고기 맛집이 여럿 있습니다. 2026년 3월 기준, 평점·가격·운영시간을 직접 확인한 데이터로 판교역 점심 고기 맛집 7곳을 비교합니다.</p>',
    },
    {
      type: 'toc',
    },
    {
      type: 'ad',
      slot: '9463227631',
      format: 'autorelaxed',
    },
    {
      type: 'h2',
      id: 'selection-criteria',
      text: '선정 기준 — 왜 이 7곳인가',
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: '<p>판교역 도보 20분 이내, cat 또는 type이 고기구이인 식당 중 평점 4.6 이상을 기준으로 선별했습니다. 리뷰 수, 가성비 태그, 단체·혼밥 가능 여부를 추가 기준으로 삼았습니다. 가격대는 1만 2천 원~2만 2천 원 사이(공시 기준)로 점심 이용이 부담 없는 곳을 우선했습니다.</p>',
    },
    {
      type: 'h2',
      id: 'top2',
      text: '평점 최상위 2곳 — 4.9점 고기집',
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: '<p><strong>늘푸른 생선구이</strong> (알파리움 2동 102·103호) — 평점 4.9 / 리뷰 113건. 500도 화덕 원적외선 구이 방식으로 생선구이 전문점이지만 고기구이 카테고리에도 포함된 곳입니다. 가격대 1만 2천~2만 2천 원. 단체 가능·웨이팅 맛집. 점심 12시 전 도착 권장.</p><p><strong>불고기 온소반</strong> (삼환하이펙스 A동 지하 1층) — 평점 4.9 / 리뷰 71건. 가성비·단체가능 태그. 불고기 정식 구성이 알차고 합리적인 가격. 가격대 1만 2천~2만 2천 원. 평일 점심 웨이팅 있음.</p>',
    },
    {
      type: 'h2',
      id: 'mid3',
      text: '평점 4.7~4.8 — 분위기·가성비 고기집 3곳',
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: '<p><strong>우화</strong> (동판교로177번길 25) — 평점 4.8 / 리뷰 113건. 한우 코스 구성, 예약제 운영, 기념일·데이트·회식 모두 가능. 가격대 1만 2천~2만 2천 원. 미리 예약 필수.</p><p><strong>진스키야키</strong> (분당내곡로 131 판교테크원) — 평점 4.7 / 리뷰 110건. 점심 메뉴 합리적, 밥 무한 리필, 가성비·단체가능 태그. 가격대 1만 2천~2만 2천 원. 평일 점심·저녁 모두 운영.</p><p><strong>순우가</strong> (대왕판교로645번길 36) — 평점 4.6 / 리뷰 159건. 한우 전문, 룸 있음, 단체 가능. "10만 원 초반대에 이 정도 한우를" 이라는 평 있음. 가격대 1만 2천~2만 2천 원.</p>',
    },
    {
      type: 'ad',
      slot: '6297515693',
      format: 'auto',
    },
    {
      type: 'h2',
      id: 'rest2',
      text: '평점 4.6 나머지 2곳 — 접근성 좋은 고기집',
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: '<p><strong>이치류 판교점</strong> (동판교로177번길 25 2층 202호) — 평점 4.8 / 리뷰 9건. 아비뉴프랑 내 위치, 한우·양갈비 구이, 인스타감성 태그. 가격대 1만 2천~2만 2천 원.</p><p><strong>남영동양문 판교점</strong> (대왕판교로 660) — 평점 4.6 / 리뷰 9건. 점심·저녁 모두 운영(AM 11:30~PM 10:00). 한식·고기 구이 전문. 가격대 1만 2천~2만 2천 원.</p>',
    },
    {
      type: 'h2',
      id: 'price-table',
      text: '7곳 가격·평점 한눈에 비교',
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0"><thead><tr style="border-bottom:2px solid var(--border)"><th style="padding:8px 6px;text-align:left">맛집</th><th style="padding:8px 6px;text-align:center">가격대</th><th style="padding:8px 6px;text-align:center">평점</th><th style="padding:8px 6px;text-align:center">리뷰수</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">늘푸른 생선구이</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">113</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">불고기 온소반</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">71</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">우화</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.8★</td><td style="padding:7px 6px;text-align:center">113</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">이치류 판교점</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.8★</td><td style="padding:7px 6px;text-align:center">9</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">진스키야키</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.7★</td><td style="padding:7px 6px;text-align:center">110</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">순우가</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.6★</td><td style="padding:7px 6px;text-align:center">159</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">남영동양문 판교점</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.6★</td><td style="padding:7px 6px;text-align:center">9</td></tr></tbody></table>',
    },
    {
      type: 'cta',
      href: '/pangyo/category/meat',
      text: '판교 고기 맛집 전체 보기 →',
    },
    {
      type: 'ending',
      html: '<p>판교 점심 고기집은 12시~12시 30분이 가장 붐비는 시간대입니다. 11시 50분 이전에 도착하거나 12시 30분 이후를 노리는 것이 웨이팅을 줄이는 방법입니다. 우화·이치류처럼 예약제 운영 식당은 방문 전날 예약이 필수입니다. 아래 관련 글도 함께 참고해 보세요.</p><ul><li><a href="/posts/pangyo-honbap-budget-2026">판교역 혼밥 맛집 1만원대 추천</a></li><li><a href="/posts/jamsil-team-dinner-2026">잠실 회식 장소 추천 2026</a></li><li><a href="/posts/samsung-izakaya-best-2026">삼성역 이자카야 추천 7곳</a></li><li><a href="/posts/samsung-lunch-guide-2026">삼성역 점심 카테고리별 총정리</a></li></ul>',
    },
  ],
}

export default post
