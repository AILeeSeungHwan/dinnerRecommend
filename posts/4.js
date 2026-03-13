const post = {
  id: 4,
  sections: [
    {
      type: 'intro',
      html: '<p>판교역 주변에서 혼자 점심을 먹으려면 선택지가 의외로 많습니다. 1만 원대 예산으로 든든하게, 눈치 보지 않고 혼밥할 수 있는 곳을 실제 데이터 기반으로 5곳 골랐습니다. 가성비·혼밥가능 태그가 붙은 식당 중 평점 높은 곳을 우선 선정했습니다.</p>',
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
      id: 'gukbap-noodle',
      text: '국밥·국수 — 빠르고 든든한 1인 점심',
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: '<p><strong>상기육개장</strong> (백현동 560-3) — 평점 4.9 / 리뷰 19건. 혼밥가능·친절·고평점 태그. AM 11:00~PM 4:00 운영. 다찌(카운터) 좌석이 있어 혼자 와도 전혀 부담 없는 구조. 가격대 1만 2천~2만 2천 원. 쌀쌀한 날 뜨끈한 육개장 한 그릇으로 점심을 해결하기 딱 좋은 곳입니다.</p><p><strong>삼미칼국수</strong> (삼평동 678 삼환하이펙스 A동 지하 1층) — 평점 4.5 / 리뷰 240건. 칼국수 단일 메뉴. 가격대 1만 2천~2만 2천 원. 평일 AM 11:00~PM 8:30 운영(주말 휴무). "7,000원 칼국수 메뉴"라는 리뷰에서 확인되는 초저가 옵션. 줄이 길지만 회전이 빠르고, 면과 밥 추가 제공. 혼밥 최적 구조.</p>',
    },
    {
      type: 'h2',
      id: 'gimbap-snack',
      text: '분식·김밥 — 가장 빠른 1만원 이하 한 끼',
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: '<p><strong>정백선순대 판교역점</strong> (삼평동 대왕판교로606번길 58) — 평점 4.9 / 리뷰 22건. 분식·한식 카테고리. 가격대 1만 2천~2만 2천 원. 순대국밥 잡내 없는 뽀얗고 진한 국물로 호평. 포장 가능. 혼밥 분위기.</p>',
    },
    {
      type: 'ad',
      slot: '6297515693',
      format: 'auto',
    },
    {
      type: 'h2',
      id: 'set-lunch',
      text: '한식 정식·불고기 — 가성비 세트 점심',
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'body',
      html: '<p><strong>불고기 온소반</strong> (삼환하이펙스 A동 지하 1층) — 평점 4.9 / 리뷰 71건. 가성비·단체가능 태그. 가격대 1만 2천~2만 2천 원. AM 11:00~PM 8:30 운영. 불고기 정식 구성이 알차고 합리적. "가성비 밥집"이라는 평이 다수. 혼밥도 가능한 분위기.</p><p><strong>살레르노 판교점</strong> (판교역로 145) — 평점 4.9 / 리뷰 9건. 가성비·점심추천 태그. AM 11:00~PM 3:00, PM 5:00~9:30 운영. 가격대 1만 2천~2만 2천 원. 혼밥·점심 특선 분위기. 개인 방문자 리뷰 다수.</p>',
    },
    {
      type: 'h2',
      id: 'tips',
      text: '판교 혼밥 시간대·팁',
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: '<p>판교 점심 러시는 12:00~12:30이 가장 붐빕니다. 혼밥의 경우 11:50 이전 또는 12:30 이후 방문이 대기 없이 빠르게 먹을 수 있는 시간대입니다. 삼미칼국수·불고기 온소반은 삼환하이펙스 지하 1층에 나란히 있어 함께 확인하고 선택하기 편합니다. 상기육개장은 PM 4시에 문을 닫으므로 늦은 점심은 피해야 합니다.</p>',
    },
    {
      type: 'h2',
      id: 'price-compare',
      text: '5곳 가격·평점 비교',
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0"><thead><tr style="border-bottom:2px solid var(--border)"><th style="padding:8px 6px;text-align:left">맛집</th><th style="padding:8px 6px;text-align:center">가격대</th><th style="padding:8px 6px;text-align:center">평점</th><th style="padding:8px 6px;text-align:center">리뷰수</th><th style="padding:8px 6px;text-align:center">특징</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">상기육개장</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">19</td><td style="padding:7px 6px">카운터좌석</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">정백선순대 판교역점</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">22</td><td style="padding:7px 6px">순대국밥</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">불고기 온소반</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">71</td><td style="padding:7px 6px">불고기 정식</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">살레르노 판교점</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">9</td><td style="padding:7px 6px">한식 정식</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">삼미칼국수</td><td style="padding:7px 6px;text-align:center">1.2~2.2만원</td><td style="padding:7px 6px;text-align:center">4.5★</td><td style="padding:7px 6px;text-align:center">240</td><td style="padding:7px 6px">칼국수 단일</td></tr></tbody></table>',
    },
    {
      type: 'cta',
      href: '/pangyo',
      text: '판교 전체 맛집 보기 →',
    },
    {
      type: 'ending',
      html: '<p>판교 혼밥 맛집은 삼환하이펙스 지하와 백현동 방향에 주로 몰려 있습니다. 빠른 식사를 원한다면 삼미칼국수나 정백선순대, 좀 더 든든한 한식이 필요하다면 상기육개장이나 불고기 온소반을 선택해 보세요. 1만 원대 예산으로 평점 4.5 이상 식당을 충분히 만날 수 있는 지역입니다. 관련 글도 함께 확인해 보세요.</p><ul><li><a href="/posts/pangyo-lunch-meat-guide-2026">판교역 점심 고기 맛집 7선</a></li><li><a href="/posts/samsung-lunch-guide-2026">삼성역 점심 카테고리별 총정리</a></li><li><a href="/posts/jamsil-team-dinner-2026">잠실 회식 장소 추천 2026</a></li><li><a href="/posts/samsung-izakaya-best-2026">삼성역 이자카야 추천 7곳</a></li></ul>',
    },
  ],
}

export default post
