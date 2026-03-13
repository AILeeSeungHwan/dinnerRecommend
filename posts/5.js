const post = {
  id: 5,
  sections: [
    {
      type: 'intro',
      html: '<p>삼성역 점심, 뭐 먹을지 매일 고민되시죠? 국밥·한식·일식·중식·고기·이자카야까지 카테고리별로 대표 맛집 한 곳씩만 골랐습니다. 2026년 3월 기준 실제 운영 데이터를 토대로 평점·가격·특징을 정리했으니 오늘 점심 결정에 바로 활용해 보세요.</p>',
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
      id: 'gukbap',
      text: '국밥·해장국 — 빠르고 든든한 점심',
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: '<p><strong>중앙해장 삼성점</strong> (영동대로 86길 17) — 평점 4.3 / 리뷰 5,713건. 내장국밥·해장·아침 가능 태그. 가격대 8천~1만 2천 원. AM 7~PM 10 운영. 리뷰 5,000건 이상으로 삼성역 주변 국밥집 중 가장 많은 리뷰를 보유. 가성비 최고 평가.</p>',
    },
    {
      type: 'h2',
      id: 'hansik',
      text: '한식·솥밥 — 혼밥·점심 특선',
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: '<p><strong>소트늠 코엑스몰</strong> (영동대로 513 코엑스몰) — 평점 4.9 / 리뷰 4,809건. 솥밥·전복·스테이크솥밥·혼밥 태그. 가격대 9천~1만 5천 원. AM 10:30~PM 10:00 운영. 코엑스 내 위치로 접근성 최상. "솥밥 최고! 숭늉까지 진짜 한국 음식"이라는 평가가 대표적입니다.</p>',
    },
    {
      type: 'h2',
      id: 'japanese',
      text: '일식·라멘 — 혼자 먹기 좋은 국물',
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: '<p><strong>멘쇼쿠 코엑스점</strong> (테헤란로 87길 36 도심공항타워) — 평점 4.9 / 리뷰 2,553건. 라멘·흑마늘오일·혼밥 태그. 가격대 1만 2천~1만 8천 원. AM 11~PM 9 운영. 코엑스 도심공항타워 내 위치. 혼자 먹기 좋은 카운터 구조. 진한 라멘 국물로 점심에 인기.</p>',
    },
    {
      type: 'ad',
      slot: '6297515693',
      format: 'auto',
    },
    {
      type: 'h2',
      id: 'chinese',
      text: '중식 — 삼성역 대표 중국요리',
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: '<p><strong>무탄 코엑스</strong> (영동대로 513 코엑스몰 B1) — 평점 4.9 / 리뷰 7,605건. 자장면·짬뽕·어향동고·코엑스 핫플 태그. 가격대 1만~1만 8천 원. AM 11~PM 9:30 운영. 리뷰 7,600건 이상으로 삼성역 전체 식당 중 최다 리뷰 보유. "코엑스 최고 중식당. 어향동고가 압권"이라는 대표 평가.</p>',
    },
    {
      type: 'h2',
      id: 'grilled',
      text: '고기구이 — 점심 BBQ',
      gradientStyle: { from: '#FF6B6B', to: '#764BA2' },
    },
    {
      type: 'body',
      html: '<p><strong>낭동고집 삼성점</strong> (삼성로 517 1층) — 평점 4.8 / 리뷰 55건. K-BBQ·삼겹살·회식 태그. 가격대 9천~1만 5천 원. AM 11~PM 2, PM 5~PM 11 운영. 점심 특선 운영으로 가성비 점심 고기구이 가능. 고기구이 카테고리에서 평점 최상위.</p>',
    },
    {
      type: 'h2',
      id: 'steak',
      text: '스테이크·양식 — 특별한 날 점심',
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: '<p><strong>솔트랑 스테이크 삼성</strong> — 스테이크 전문. 가격대 3만 5천~7만 원. 특별한 날 점심이나 중요한 미팅 접대 자리에 적합. 삼성역 주변 스테이크하우스 중 대표 선택지입니다.</p>',
    },
    {
      type: 'h2',
      id: 'all-compare',
      text: '카테고리별 대표 맛집 한눈에 비교',
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0"><thead><tr style="border-bottom:2px solid var(--border)"><th style="padding:8px 6px;text-align:left">카테고리</th><th style="padding:8px 6px;text-align:left">맛집</th><th style="padding:8px 6px;text-align:center">가격대</th><th style="padding:8px 6px;text-align:center">평점</th><th style="padding:8px 6px;text-align:center">리뷰수</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">한식·솥밥</td><td style="padding:7px 6px">소트늠 코엑스</td><td style="padding:7px 6px;text-align:center">9천~1.5만원</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">4,809</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">중식</td><td style="padding:7px 6px">무탄 코엑스</td><td style="padding:7px 6px;text-align:center">1~1.8만원</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">7,605</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">일식·라멘</td><td style="padding:7px 6px">멘쇼쿠 코엑스</td><td style="padding:7px 6px;text-align:center">1.2~1.8만원</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">2,553</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">고기구이</td><td style="padding:7px 6px">낭동고집 삼성</td><td style="padding:7px 6px;text-align:center">9천~1.5만원</td><td style="padding:7px 6px;text-align:center">4.8★</td><td style="padding:7px 6px;text-align:center">55</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">국밥·해장</td><td style="padding:7px 6px">중앙해장 삼성</td><td style="padding:7px 6px;text-align:center">8천~1.2만원</td><td style="padding:7px 6px;text-align:center">4.3★</td><td style="padding:7px 6px;text-align:center">5,713</td></tr></tbody></table>',
    },
    {
      type: 'cta',
      href: '/samseong',
      text: '삼성역 전체 맛집 보기 →',
    },
    {
      type: 'ending',
      html: '<p>삼성역 점심은 코엑스몰 내에 소트늠·무탄·멘쇼쿠 등 평점 높은 식당이 밀집해 있어 날씨와 상관없이 쾌적하게 이용할 수 있습니다. 빠른 점심을 원한다면 중앙해장이나 전통백암순대국, 특별한 미팅 자리라면 고급 한우 라인(국보가든·웨어하우스 43)을 고려해 보세요. 관련 글도 참고해 보세요.</p><ul><li><a href="/posts/samsung-izakaya-best-2026">삼성역 이자카야 추천 7곳</a></li><li><a href="/posts/pangyo-lunch-meat-guide-2026">판교역 점심 고기 맛집 7선</a></li><li><a href="/posts/jamsil-team-dinner-2026">잠실 회식 장소 추천 2026</a></li><li><a href="/posts/pangyo-honbap-budget-2026">판교역 혼밥 맛집 1만원대 추천</a></li></ul>',
    },
  ],
}

export default post
