const post = {
  id: 10,
  sections: [
    {
      type: 'intro',
      html: '<p>망포역 주변에서 1만 원대 점심을 찾는다면 이 글이 도움이 됩니다. 2026년 3월 기준 실제 데이터를 바탕으로 가성비 태그가 있거나 가격대가 낮은 망포역 점심 맛집 5곳을 선별했습니다. 평점·리뷰 수·가격대를 함께 비교해 오늘 점심 결정에 바로 활용해 보세요.</p>',
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
      id: 'seokcheong',
      text: '① 서천교동짬뽕 — 칼칼한 짬뽕 가성비 대표',
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: '<p><strong>서천교동짬뽕</strong> (봉영로1482번길 35 102호) — 평점 4.6 / 리뷰 26건. 가성비·단체가능·칼국수·회식 태그. 가격대 1만~2만 원. 칼칼한 국물과 깔끔한 짬뽕으로 웨이팅이 있는 인기 맛집입니다. 오후 브레이크 타임이 있으니 방문 전 운영시간 확인이 필요합니다. 심야 영업으로 늦은 저녁 이용도 가능합니다.</p>',
    },
    {
      type: 'h2',
      id: 'hanmaeum',
      text: '② 한마음정육식당 영통점 — 정육식당 가성비 고기',
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: '<p><strong>한마음정육식당 영통점</strong> (영통동 봉영로1482번길 7-1) — 평점 4.5 / 리뷰 84건. 가성비·단체가능·회식·친절 태그. 가격대 1만~2만 원. 문의전화 031-202-3166. 정육식당 특성상 다른 고기집 대비 가격이 저렴하면서 육질이 좋다는 평가가 많습니다. 된장찌개와 공기밥이 무료로 제공돼 점심 한 끼로 든든합니다. 단체 이용도 가능해 점심 회식에 적합합니다.</p>',
    },
    {
      type: 'h2',
      id: 'cheongdam-kalguksu',
      text: '③ 청담칼국수 — 8천 원대 칼국수 가성비 최강',
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: '<p><strong>청담칼국수</strong> (청명남로 6-1) — 평점 4.4 / 리뷰 144건. 가성비·칼국수·혼밥가능 태그. 가격대 8천~1만 2천 원. 운영시간 AM 10:40~PM 9:30. 문의전화 031-232-6692. 가격 저렴하고 양이 푸짐하며 공기밥 무한 리필이 가능합니다. 망포역 주변에서 8천 원대 한 끼를 해결할 수 있는 몇 안 되는 곳 중 하나입니다. 1인 이용도 편리합니다.</p>',
    },
    {
      type: 'ad',
      slot: '6297515693',
      format: 'auto',
    },
    {
      type: 'h2',
      id: 'saengkoki',
      text: '④ 생고기김치찌개 — 4만 원에 4명이 푸짐하게',
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: '<p><strong>생고기김치찌개</strong> (신원로 177) — 평점 4.5 / 리뷰 29건. 국밥·국물요리·해장·단체가능·회식 태그. 가격대 1만~2만 원. 4명 기준 두루치기 2인분·김치찌개 2인분·계란말이를 주문하면 4만 원 선으로 점심을 해결할 수 있는 가성비 맛집입니다. 고기가 듬뿍 들어가는 기본에 충실한 김치찌개로 남성 직장인들 사이에서 인기 높습니다.</p>',
    },
    {
      type: 'h2',
      id: 'haengbokhangimbap',
      text: '⑤ 행복한김밥 — 7천 원 백반에 반찬·국 무한리필',
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: '<p><strong>행복한김밥</strong> (기흥구 서천동 286-3번지 101호) — 평점 4.3 / 리뷰 60건. 분식·가성비·점심추천 태그. 가격대 1만~2만 원. 운영시간 AM 6:00~PM 8:00. 문의전화 031-206-5008. 7천 원짜리 백반에 밥·반찬·국 무한 리필이 가능합니다. 고물가 시대에 영양가 있는 가정식 백반을 이 가격에 즐길 수 있는 곳으로 점심 단골 맛집으로 손색없습니다.</p>',
    },
    {
      type: 'h2',
      id: 'compare-table',
      text: '5곳 가성비 점심 — 가격·평점 한눈에 비교',
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0"><thead><tr style="border-bottom:2px solid var(--border)"><th style="padding:8px 6px;text-align:left">맛집</th><th style="padding:8px 6px;text-align:center">가격대</th><th style="padding:8px 6px;text-align:center">평점</th><th style="padding:8px 6px;text-align:center">리뷰수</th><th style="padding:8px 6px;text-align:center">혼밥</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">서천교동짬뽕</td><td style="padding:7px 6px;text-align:center">1~2만원</td><td style="padding:7px 6px;text-align:center">4.6★</td><td style="padding:7px 6px;text-align:center">26</td><td style="padding:7px 6px;text-align:center">가능</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">한마음정육식당</td><td style="padding:7px 6px;text-align:center">1~2만원</td><td style="padding:7px 6px;text-align:center">4.5★</td><td style="padding:7px 6px;text-align:center">84</td><td style="padding:7px 6px;text-align:center">가능</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">청담칼국수</td><td style="padding:7px 6px;text-align:center">8천~1.2만원</td><td style="padding:7px 6px;text-align:center">4.4★</td><td style="padding:7px 6px;text-align:center">144</td><td style="padding:7px 6px;text-align:center">가능</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">생고기김치찌개</td><td style="padding:7px 6px;text-align:center">1~2만원</td><td style="padding:7px 6px;text-align:center">4.5★</td><td style="padding:7px 6px;text-align:center">29</td><td style="padding:7px 6px;text-align:center">가능</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">행복한김밥</td><td style="padding:7px 6px;text-align:center">1~2만원</td><td style="padding:7px 6px;text-align:center">4.3★</td><td style="padding:7px 6px;text-align:center">60</td><td style="padding:7px 6px;text-align:center">가능</td></tr></tbody></table>',
    },
    {
      type: 'h2',
      id: 'situation-table',
      text: '상황별 추천 요약',
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0"><thead><tr style="border-bottom:2px solid var(--border)"><th style="padding:8px 6px;text-align:left">상황</th><th style="padding:8px 6px;text-align:left">추천 장소</th><th style="padding:8px 6px;text-align:left">이유</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">최저가 한 끼</td><td style="padding:7px 6px">청담칼국수</td><td style="padding:7px 6px">8천원대·무한리필·혼밥 가능</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">가정식 백반</td><td style="padding:7px 6px">행복한김밥</td><td style="padding:7px 6px">7천원 백반·반찬 무한리필·아침부터 운영</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">고기 점심</td><td style="padding:7px 6px">한마음정육식당</td><td style="padding:7px 6px">정육식당 가격·가성비·된장찌개 무료</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">국물 얼큰하게</td><td style="padding:7px 6px">서천교동짬뽕</td><td style="padding:7px 6px">칼칼한 짬뽕·가성비·단체 가능</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">4인 점심 회식</td><td style="padding:7px 6px">생고기김치찌개</td><td style="padding:7px 6px">4명 4만원 선·든든한 찌개·단체가능</td></tr></tbody></table>',
    },
    {
      type: 'h2',
      id: 'checklist',
      text: '방문 전 반드시 확인할 것',
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: '<ul><li><strong>브레이크 타임</strong> — 서천교동짬뽕은 오후 브레이크 타임이 있습니다. 방문 전 운영시간을 전화로 확인하거나 12시 전에 방문하는 것이 안전합니다.</li><li><strong>주말 운영</strong> — 행복한김밥은 AM 6:00~PM 8:00 운영으로 주말 영업 여부를 사전 확인하세요. 한마음정육식당도 휴무일이 있으니 방문 전 확인 권장.</li><li><strong>카드 결제</strong> — 소규모 분식집(명자네떡볶이 등)은 현금만 받는 경우가 있습니다. 카드 사용 가능 여부 확인 필요.</li><li><strong>웨이팅</strong> — 서천교동짬뽕은 점심 시간대 웨이팅이 있습니다. 11시 50분 전 또는 12시 30분 이후 방문을 추천합니다.</li><li><strong>주차</strong> — 대부분 상가 내 소규모 식당으로 전용 주차 공간이 없습니다. 인근 공영주차장 이용을 권장합니다.</li></ul>',
    },
    {
      type: 'cta',
      href: '/samsungElectronics/mangpo/category/budget',
      text: '망포역 가성비 맛집 전체 보기 →',
    },
    {
      type: 'ending',
      html: '<p>망포역 가성비 점심은 청담칼국수·행복한김밥처럼 8천~1만 원대 식당부터 정육식당 방식으로 저렴하게 고기를 즐길 수 있는 한마음정육식당까지 다양합니다. AI 추천 기능을 활용하면 오늘 기분·인원·예산에 맞는 가성비 점심 장소를 빠르게 찾을 수 있습니다.</p><ul><li><a href="/posts/pangyo-lunch-meat-guide-2026">판교역 점심 고기 맛집 7선</a></li><li><a href="/posts/pangyo-team-dinner-2026">판교역 회식 장소 추천 2026</a></li><li><a href="/posts/jamsil-gukbap-best-2026">잠실 국밥·해장국 맛집 추천 5선</a></li><li><a href="/posts/samsung-lunch-guide-2026">삼성역 점심 카테고리별 총정리</a></li></ul>',
    },
    {
      type: 'ad',
      slot: '6297515693',
      format: 'auto',
    },
  ],
}

export default post
