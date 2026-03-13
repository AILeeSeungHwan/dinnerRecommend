const post = {
  id: 2,
  sections: [
    {
      type: 'intro',
      html: '<p>삼성역 코엑스 주변에는 퇴근 후 한잔하기 좋은 이자카야와 야장 포차가 밀집해 있습니다. 삼성1동·대치동 골목을 중심으로, 실제 운영 중인 이자카야·야장 7곳을 평점·가격·분위기 기준으로 정리했습니다. 하이볼, 야키토리, 사케를 즐기고 싶은 날 참고하세요.</p>',
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
      id: 'rooftop-vibe',
      text: '분위기 최상위 — 야장·라이브·루프탑 이자카야',
      gradientStyle: { from: '#f953c6', to: '#b91d73' },
    },
    {
      type: 'body',
      html: '<p><strong>ASOBOY</strong> (봉은사로 504 지하 1층) — 평점 4.5 / 리뷰 109건. 라이브바·야장 복합 공간. cat: 야장·와인바·이자카야. 가격대 1만 5천~2만 5천 원. 매일 PM 7~AM 2 운영. 라이브 음악과 야장, 생맥주 조합이 특기. 분위기 최고 태그.</p><p><strong>데일리비어 삼성코엑스 2호점</strong> (삼성1동 157-8) — 평점 4.8 / 리뷰 60건. 크래프트맥주·치킨·야장 복합. 코엑스 도보 거리. "강력 추천·맛있음·청결함" 평가.</p>',
    },
    {
      type: 'h2',
      id: 'izakaya-private',
      text: '프라이빗 룸 이자카야 — 소그룹 술자리',
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: '<p><strong>미주이자카야</strong> (대치동 944-24) — 평점 4.9 / 리뷰 8건. 프라이빗룸·블루투스스피커 구비. 가격대 2만 5천~4만 원. PM 5~AM 3 (일 휴무). "4인 이상 모임 적합"이라는 평가가 많습니다.</p><p><strong>이자카야한잔 삼성본점</strong> (삼성1동 149-31번지 1층) — 평점 3.6 / 리뷰 109건. 사시미·숯불꼬치·테라스·하이볼. 가격대 2만 5천~4만 원. 매일 PM 5~AM 2 운영. 퇴근 후 안주 한잔 분위기.</p>',
    },
    {
      type: 'ad',
      slot: '6297515693',
      format: 'auto',
    },
    {
      type: 'h2',
      id: 'yakitori-sake',
      text: '야키토리·사케 전문 이자카야',
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: '<p><strong>야키토리 수다</strong> (테헤란로 87길 53) — 평점 4.7 / 리뷰 50건. 야키토리·하이볼 전문. 가격대 2만 5천~4만 원. PM 4~AM 2 (금토 AM 3). 회식·친구 모임에 적합. 가성비 태그.</p><p><strong>란주쿠 삼성점</strong> (봉은사로 82길 31) — 평점 4.0 / 리뷰 206건. 사케 소믈리에가 상주하는 이자카야. 코르키지 없음. PM 5:30~PM 11:50. 사케를 폭넓게 즐기고 싶을 때 최적.</p>',
    },
    {
      type: 'h2',
      id: 'pocha-style',
      text: '포차 감성 — 가볍게 한잔하기 좋은 곳',
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: '<p><strong>못난이포차</strong> (삼성1동 152-23) — 평점 3.6 / 리뷰 77건. 야장·포차 감성, 안주·고기 태그. 가격대 1만 5천~2만 5천 원. "대기 있음·분위기 좋음·가성비 좋음" 평가. 코엑스와 가까운 골목 포차.</p><p><strong>철수포차</strong> (선릉로 112길 31) — 평점 3.8 / 리뷰 52건. 야장·포차·이자카야 복합. 가격대 2만 5천~4만 원. PM 5~AM 5 (일 휴무). 막걸리 호평, 아늑한 분위기. 심야까지 영업해 2차로 적합.</p>',
    },
    {
      type: 'h2',
      id: 'summary-table',
      text: '7곳 평점·가격·운영시간 비교표',
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0"><thead><tr style="border-bottom:2px solid var(--border)"><th style="padding:8px 6px;text-align:left">이자카야</th><th style="padding:8px 6px;text-align:center">가격대</th><th style="padding:8px 6px;text-align:center">평점</th><th style="padding:8px 6px;text-align:center">리뷰수</th><th style="padding:8px 6px;text-align:center">특징</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">미주이자카야</td><td style="padding:7px 6px;text-align:center">2.5~4만원</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">8</td><td style="padding:7px 6px">프라이빗룸</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">데일리비어 코엑스</td><td style="padding:7px 6px;text-align:center">미제공</td><td style="padding:7px 6px;text-align:center">4.8★</td><td style="padding:7px 6px;text-align:center">60</td><td style="padding:7px 6px">크래프트맥주</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">야키토리 수다</td><td style="padding:7px 6px;text-align:center">2.5~4만원</td><td style="padding:7px 6px;text-align:center">4.7★</td><td style="padding:7px 6px;text-align:center">50</td><td style="padding:7px 6px">야키토리·하이볼</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">ASOBOY</td><td style="padding:7px 6px;text-align:center">1.5~2.5만원</td><td style="padding:7px 6px;text-align:center">4.5★</td><td style="padding:7px 6px;text-align:center">109</td><td style="padding:7px 6px">라이브음악</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">란주쿠 삼성점</td><td style="padding:7px 6px;text-align:center">미제공</td><td style="padding:7px 6px;text-align:center">4.0★</td><td style="padding:7px 6px;text-align:center">206</td><td style="padding:7px 6px">사케 소믈리에</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">철수포차</td><td style="padding:7px 6px;text-align:center">2.5~4만원</td><td style="padding:7px 6px;text-align:center">3.8★</td><td style="padding:7px 6px;text-align:center">52</td><td style="padding:7px 6px">포차감성·심야</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">못난이포차</td><td style="padding:7px 6px;text-align:center">1.5~2.5만원</td><td style="padding:7px 6px;text-align:center">3.6★</td><td style="padding:7px 6px;text-align:center">77</td><td style="padding:7px 6px">포차·가성비</td></tr></tbody></table>',
    },
    {
      type: 'cta',
      href: '/samseong/category/izakaya',
      text: '삼성역 이자카야 전체 보기 →',
    },
    {
      type: 'ending',
      html: '<p>삼성역 이자카야는 코엑스·테헤란로 주변에 집중돼 있습니다. 소그룹 회식이라면 프라이빗룸을 갖춘 미주이자카야·MaltBarBARREL 쪽이, 라이브 음악과 분위기를 원한다면 ASOBOY가 가장 잘 맞습니다. 야키토리를 좋아한다면 야키토리 수다, 사케 매니아라면 란주쿠 삼성점을 선택해 보세요. 관련 글도 참고해 보세요.</p><ul><li><a href="/posts/samsung-lunch-guide-2026">삼성역 점심 카테고리별 총정리</a></li><li><a href="/posts/pangyo-lunch-meat-guide-2026">판교역 점심 고기 맛집 7선</a></li><li><a href="/posts/jamsil-team-dinner-2026">잠실 회식 장소 추천 2026</a></li><li><a href="/posts/pangyo-honbap-budget-2026">판교역 혼밥 맛집 1만원대 추천</a></li></ul>',
    },
  ],
}

export default post
