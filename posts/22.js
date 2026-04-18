const post = {
  id: 22,
  sections: [
    {
      type: 'intro',
      html: '<p>판교 테크노밸리·알파돔시티에서 비즈니스 접대 자리를 잡는다면 분위기·서비스·예약 편의성 세 가지가 핵심입니다. 2026년 기준 판교에서 파트너사 임원, 해외 바이어, VIP 고객 접대에 실제로 활용되는 레스토랑 5곳을 엄선했습니다. 예산대, 예약 난이도, 주차 정보까지 한 번에 확인하세요.</p>',
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
      id: 'sushi-sora',
      text: '① 스시소라 판교점 — 오마카세급 접대 스시',
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'body',
      html: '<p><strong>스시소라 판교점</strong> — 평점 5.0. 가격대 5만~10만원. 점심추천·주차가능·데이트 태그. 판교에서 오마카세 수준의 스시 접대가 가능한 곳으로, VIP 손님을 모시는 자리에 적합합니다. 개인 룸 또는 독립 테이블 구성으로 비즈니스 대화가 가능한 환경입니다. 예약 필수이며, 최소 1주일 전 확보를 권장합니다.</p>',
    },
    {
      type: 'h2',
      id: 'kkweda-avenuefranc',
      text: '② 꿰다 판교아브뉴프랑점 — 코스 오마카세 일식',
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: '<p><strong>꿰다 판교아브뉴프랑점</strong> — 평점 4.9 / 리뷰 244건. 가격대 7.5만원 (코스). 리뷰많음·주차가능·단체가능·데이트·서비스좋음 태그. 아브뉴프랑 내 위치한 일식 코스 레스토랑으로 접대 자리 신뢰도가 높습니다. 리뷰 수가 244건으로 판교 일식 중 검증도 최상위권. 주차 가능하며 코스 메뉴 특성상 식사 시간이 여유 있어 비즈니스 대화에 적합합니다.</p>',
    },
    {
      type: 'h2',
      id: 'wooha',
      text: '③ 우화 — 한우 코스 예약제 고급 회식',
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: '<p><strong>우화</strong> (동판교로177번길 25) — 평점 4.8. 단체가능·예약필수·한우·회식 태그. 한우 코스 예약제로 운영되며 품격 있는 비즈니스 식사 자리로 적합합니다. PM 5:30~10:00 운영. 최소 2~3일 전 예약 필수. 한국식 고급 접대를 원하는 경우 첫 번째 선택지로 추천합니다.</p>',
    },
    {
      type: 'ad',
      slot: '6297515693',
      format: 'auto',
    },
    {
      type: 'h2',
      id: 'bacha',
      text: '④ 바차 판교점 — 프리미엄 분위기 바&다이닝',
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: '<p><strong>바차 판교점</strong> — 평점 5.0 / 리뷰 128건. 가격대 2.2만~3.5만원. 주차가능·데이트·리뷰많음·깔끔한곳·서비스좋음 태그. 판교의 프리미엄 다이닝 바로 식사와 음료를 함께 즐길 수 있습니다. 접대 후 와인·칵테일로 마무리하기 좋은 구성. 서비스 품질이 높아 처음 오는 손님에게 인상을 남기는 자리로 적합합니다.</p>',
    },
    {
      type: 'h2',
      id: 'simyang',
      text: '⑤ 심양 판교점 — 고급 중식 접대',
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'body',
      html: '<p><strong>심양 판교점</strong> — 평점 5.0. 가격대 1.2만~4.3만원. 주차가능·데이트·서비스좋음 태그. 중국 현지식 정통 요리를 판교에서 즐길 수 있는 고급 중식당. 중국계 파트너사 접대나 색다른 비즈니스 식사에 추천합니다. 메뉴 구성이 다양하고 서비스 수준이 높습니다.</p>',
    },
    {
      type: 'h2',
      id: 'compare-table',
      text: '판교 접대 레스토랑 5곳 — 예산·스타일 비교',
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0"><thead><tr style="border-bottom:2px solid var(--border)"><th style="padding:8px 6px;text-align:left">식당</th><th style="padding:8px 6px;text-align:center">평점</th><th style="padding:8px 6px;text-align:center">인당 예산</th><th style="padding:8px 6px;text-align:center">장르</th><th style="padding:8px 6px;text-align:center">적합 대상</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">스시소라 판교점</td><td style="padding:7px 6px;text-align:center">5.0★</td><td style="padding:7px 6px;text-align:center">5~10만원</td><td style="padding:7px 6px;text-align:center">일식 오마카세</td><td style="padding:7px 6px">VIP·해외바이어</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">꿰다 아브뉴프랑점</td><td style="padding:7px 6px;text-align:center">4.9★</td><td style="padding:7px 6px;text-align:center">7.5만원</td><td style="padding:7px 6px;text-align:center">일식 코스</td><td style="padding:7px 6px">임원·파트너사</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">우화</td><td style="padding:7px 6px;text-align:center">4.8★</td><td style="padding:7px 6px;text-align:center">3~5만원</td><td style="padding:7px 6px;text-align:center">한우 코스</td><td style="padding:7px 6px">한국식 접대·임원</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">바차 판교점</td><td style="padding:7px 6px;text-align:center">5.0★</td><td style="padding:7px 6px;text-align:center">2~3만원</td><td style="padding:7px 6px;text-align:center">바&다이닝</td><td style="padding:7px 6px">식사+와인 2차</td></tr><tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 6px">심양 판교점</td><td style="padding:7px 6px;text-align:center">5.0★</td><td style="padding:7px 6px;text-align:center">2~4만원</td><td style="padding:7px 6px;text-align:center">고급 중식</td><td style="padding:7px 6px">중국 파트너·임원</td></tr></tbody></table>',
    },
    {
      type: 'h2',
      id: 'booking-tips',
      text: '판교 비즈니스 접대 예약 시 반드시 알 것',
      gradientStyle: { from: '#11998e', to: '#38ef7d' },
    },
    {
      type: 'body',
      html: '<ul><li><strong>예약 우선순위</strong> — 스시소라·꿰다는 1주일 전 예약이 기본. 금요일 저녁은 2주 전에도 마감되는 경우가 있습니다.</li><li><strong>법인 결제</strong> — 예약 시 법인카드 결제 가능 여부와 영수증·세금계산서 발행 절차를 미리 확인하세요.</li><li><strong>주차 밸리데이션</strong> — 판교 아브뉴프랑·알파리움 주차는 식당에서 주차 도장/쿠폰 제공 여부를 확인하면 비용 절감됩니다.</li><li><strong>알레르기·식이 제한</strong> — 접대 손님의 식이 제한 사항을 미리 확인해 예약 시 전달하세요. 코스 메뉴 식당은 사전 조율이 가능합니다.</li></ul>',
    },
    {
      type: 'cta',
      href: '/pangyo',
      text: '판교역 AI 맞춤 접대 레스토랑 추천 →',
    },
    {
      type: 'ending',
      html: '<p>판교 접대 레스토랑은 예산과 접대 대상에 따라 명확히 구분됩니다. VIP라면 스시소라·꿰다, 한국식 고급 접대라면 우화, 식사+음료를 함께라면 바차를 선택하세요. 예약은 항상 여유 있게 1주일 전 확보가 기본입니다.</p><ul><li><a href="/posts/pangyo-team-dinner-2026">판교역 회식 장소 추천 2026</a></li><li><a href="/posts/pangyo-date-restaurant-2026">판교 데이트 레스토랑 추천 5곳</a></li><li><a href="/posts/pangyo-lunch-meat-guide-2026">판교역 점심 고기 맛집 7선</a></li><li><a href="/posts/samsung-team-dinner-2026">삼성역 회식 장소 추천 2026</a></li></ul>',
    },
    {
      type: 'ad',
      slot: '6297515693',
      format: 'auto',
    },
  ],
}

export default post
