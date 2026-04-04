const post = {
  id: 3,
  sections: [
    {
      type: 'intro',
      html: '<p>잠실 회식 장소를 고를 때 가장 고민되는 부분은 단체석이 있는지, 룸이 있는지, 주차가 가능한지입니다. 방이동·송리단길·잠실 번화가에 퍼져 있는 회식 적합 맛집을 데이터 기반으로 비교했습니다. 2026년 3월 기준 평점·가격·주차 정보를 한곳에 정리했습니다.</p>',
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
      id: 'grilled-meat',
      text: '고기구이 회식 — 단체석·룸 보유',
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: '<p><strong>방이옥</strong> (오금로15길 8) — 평점 4.3 / 리뷰 1,845건. 삼겹살·목살 각 1만 8천 원. 방이동 대표 고깃집으로 웨이팅 맛집. 회식·팀회식 분위기 태그. PM 4~AM 2 매일 운영. 주차 불가, 웨이팅 있음.</p><p><strong>올림픽 참숯갈비</strong> (올림픽로 289) — 평점 4.5 / 리뷰 987건. 참숯갈비 2만 8천 원·한우등심 5만 5천 원. 룸 있음·단체 가능. 예약 가능, 주차 가능. PM 12~PM 11 매일 운영. 기념일 외식·팀회식·가족 모임 모두 적합.</p>',
    },
    {
      type: 'h2',
      id: 'izakaya-jamsil',
      text: '이자카야·술자리 회식 — 분위기 있는 저녁',
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: '<p><strong>석촌 이자카야 사쿠라</strong> (석촌호수로 255 지하 1층) — 평점 4.4 / 리뷰 561건. 하이볼 9천 원·타코야끼 1만 2천 원·모둠사시미 3만 8천 원. 가격대 2만~4만 5천 원. PM 5~AM 1 (월 휴무). 데이트·회식·퇴근 후 한잔 모두 가능. 예약 가능.</p><p><strong>방이 황소곱창</strong> (방이동 48-10) — 평점 4.5 / 리뷰 834건. 소곱창 1만 8천 원·막창 1만 7천 원. 방이동 곱창 성지. 웨이팅 기본 1시간. PM 4~AM 2 (일 휴무). 회식·스트레스 해소 분위기. 주차 불가.</p>',
    },
    {
      type: 'ad',
      slot: '6297515693',
      format: 'auto',
    },
    {
      type: 'h2',
      id: 'chinese-team',
      text: '중식·딤섬 단체 회식 — 롯데몰·잠실 번화가',
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: '<p><strong>잠실 롯데몰 딘타이펑</strong> (올림픽로 300 롯데월드몰 1층) — 평점 4.4 / 리뷰 2,341건. 샤오롱바오(8개) 1만 8천 원·딤섬세트 3만 2천 원. 가격대 1만 5천~3만 5천 원. AM 10:30~PM 10 매일 운영. 주차 가능. 쇼핑몰 입점으로 단체 이동에 편리. 웨이팅 있음.</p><p><strong>잠실 양꼬치 신장</strong> (올림픽로10나길 8) — 평점 4.1 / 리뷰 312건. 양꼬치(10개) 1만 8천 원·칭따오 5천 원. 가격대 1만 2천~2만 5천 원. PM 4~AM 1 매일 운영. 회식·팀회식 분위기. 야외 좌석 있어 여름철 회식에도 인기.</p>',
    },
    {
      type: 'h2',
      id: 'jokbal-pork',
      text: '족발·보쌈 단체 — 방이동 방문 시',
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: '<p><strong>방이 곰발바닥 족발</strong> (방이동 61-9) — 평점 4.5 / 리뷰 789건. 앞발족발(소) 2만 8천 원·불족발(소) 3만 원. 연중무휴 PM 2~AM 3. "앞발 족발 쫄깃함이 달라요. 방이동 족발 투톱 중 하나"라는 평가. 회식·단체 모임 적합.</p>',
    },
    {
      type: 'h2',
      id: 'comparison',
      text: '회식 장소 단체석·룸·주차 한눈에 비교',
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0"><thead><tr style="border-bottom:2px solid var(--border)"><th style="padding:8px 6px;text-align:left">맛집</th><th style="padding:8px 6px;text-align:center">가격대</th><th style="padding:8px 6px;text-align:center">평점</th><th style="padding:8px 6px;text-align:center">룸</th><th style="padding:8px 6px;text-align:center">주차</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">올림픽 참숯갈비</td><td style="padding:7px 6px;text-align:center">2.5~5.5만원</td><td style="padding:7px 6px;text-align:center">4.5★</td><td style="padding:7px 6px;text-align:center">있음</td><td style="padding:7px 6px;text-align:center">가능</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">방이 황소곱창</td><td style="padding:7px 6px;text-align:center">1.6~3만원</td><td style="padding:7px 6px;text-align:center">4.5★</td><td style="padding:7px 6px;text-align:center">-</td><td style="padding:7px 6px;text-align:center">불가</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">방이 곰발바닥 족발</td><td style="padding:7px 6px;text-align:center">2.2~4.2만원</td><td style="padding:7px 6px;text-align:center">4.5★</td><td style="padding:7px 6px;text-align:center">-</td><td style="padding:7px 6px;text-align:center">불가</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">석촌 이자카야 사쿠라</td><td style="padding:7px 6px;text-align:center">2~4.5만원</td><td style="padding:7px 6px;text-align:center">4.4★</td><td style="padding:7px 6px;text-align:center">-</td><td style="padding:7px 6px;text-align:center">불가</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">롯데몰 딘타이펑</td><td style="padding:7px 6px;text-align:center">1.5~3.5만원</td><td style="padding:7px 6px;text-align:center">4.4★</td><td style="padding:7px 6px;text-align:center">-</td><td style="padding:7px 6px;text-align:center">가능</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">방이옥</td><td style="padding:7px 6px;text-align:center">1.7~2.8만원</td><td style="padding:7px 6px;text-align:center">4.3★</td><td style="padding:7px 6px;text-align:center">-</td><td style="padding:7px 6px;text-align:center">불가</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">잠실 양꼬치 신장</td><td style="padding:7px 6px;text-align:center">1.2~2.5만원</td><td style="padding:7px 6px;text-align:center">4.1★</td><td style="padding:7px 6px;text-align:center">-</td><td style="padding:7px 6px;text-align:center">불가</td></tr></tbody></table>',
    },
    {
      type: 'cta',
      href: '/jamsil',
      text: '잠실 전체 맛집 보기 →',
    },
    {
      type: 'ending',
      html: '<p>잠실 회식 장소를 고를 때는 인원수와 예산을 먼저 정하는 것이 중요합니다. 10인 이상 대규모 회식이라면 룸과 주차가 가능한 올림픽 참숯갈비가 가장 적합합니다. 5인 이하 소규모 팀이라면 방이동 곱창 거리(황소곱창·방이 양곱창)를 코스로 도는 것도 좋은 선택입니다. 비 오는 날이나 쌀쌀한 날에는 석촌 이자카야 사쿠라 지하 공간이 분위기를 만들어 줍니다. 관련 글을 참고해 보세요.</p><ul><li><a href="/posts/samsung-izakaya-best-2026">삼성역 이자카야 추천 7곳</a></li><li><a href="/posts/pangyo-lunch-meat-guide-2026">판교역 점심 고기 맛집 7선</a></li><li><a href="/posts/samsung-lunch-guide-2026">삼성역 점심 카테고리별 총정리</a></li><li><a href="/posts/pangyo-honbap-budget-2026">판교역 혼밥 맛집 1만원대 추천</a></li></ul>',
    },
  ],
}

export default post
