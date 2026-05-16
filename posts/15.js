// 삼성역 고기 5곳 — 한우·삼겹·갈비 회식·데이트 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 15,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">코엑스·테헤란로·청담 일대에서 한우 코스부터 삼겹살·갈비까지 결이 다른 <strong>삼성역 고기집</strong> 5곳을 정리하였습니다. 삼성역 일대 859곳 중 고기구이·스테이크·족발보쌈 카테고리 약 111곳에서 평점·리뷰 표본·시그니처 메뉴·운영 시간 4가지를 함께 본 결과 다섯 매장을 골랐습니다. 회식 1차 정통 한우 매장과 캐주얼 점심·심야 영업까지 폭넓게 묶었으니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">고기 카테고리</p><p style="font-size:20px;font-weight:600;margin:0">111곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">필터링 후 5곳</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.4</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.2 ~ 4.5</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">2,418건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">12,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">놀부보쌈 점심 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 어떤 자리에 어디가 맞나요', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #B91C1C">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">한우 코스 정통 회식이면 <strong>모도우 The ROOM 대치점</strong> — 시즈널 1++ 한우구이 코스 99,000원·리뷰 698건 검증. 한우+프라이빗룸 비즈니스 자리면 <strong>경천아인 2237</strong> — 25,000원~50,000원 한우+프라이빗룸 운영. 점심 흑돼지 캐주얼이면 <strong>김돈이 선릉본점</strong> — 김치찌개 11,000원·리뷰 836건 누적. 점심 보쌈+낙지 가족 외식이면 <strong>놀부보쌈</strong> — 점심특선 12,000원~. 회식 2차 심야 영업 갈비집이면 <strong>광화문석갈비 코엑스점</strong> — 17,300원~ 점심·저녁 모두 가능.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 가격·자리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>평점 4.2 이상 + 리뷰 표본 100건 이상</strong> — 한 끼 만족도가 안정적으로 검증된 매장</li>
<li><strong>1인 가격대 12,000~99,000원</strong> — 점심 캐주얼부터 한우 코스 회식까지 폭넓게</li>
<li><strong>시그니처 메뉴 명확</strong> — 한우 등급·삼겹살·갈비·보쌈·족발 등 결이 분명한 곳</li>
<li><strong>운영 시간·자리 성격 분산</strong> — 점심·저녁·심야·프라이빗룸·단체석 등 자리 매칭 1곳씩</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">삼성역 일대 고기구이·스테이크·족발보쌈 카테고리 약 111곳에서 평점·리뷰·시그니처 메뉴·운영 시간이 안정적인 매장 5곳을 추렸습니다. 같은 한우 카테고리에 들어가는 매장도 자리 성격(코스·구이·곰탕)이 다르면 분산해 포함했고, 점심 캐주얼(보쌈·흑돼지)과 본격 한우 코스 매장을 함께 묶어 자리 부담에 맞춰 한 곳을 고를 수 있도록 구성했습니다.</p>`
    },

    { type: 'h2', id: 'modow', text: '모도우 The ROOM 대치점 — 시즈널 1++ 한우구이 코스 99,000원', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250211_152%2F1739272232415FdyXk_JPEG%2FIMG_4612.jpeg" alt="모도우 The ROOM 대치점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#B91C1C,#7F1D1D)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 한우 코스 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 698건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 29,000원~99,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🏠 프라이빗 코스</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">대치동 891-44 지하 1층, <strong>1++ 한우 워터에이징·시즈널 코스</strong>가 핵심인 고기구이 매장입니다. 평점 4.2점·리뷰 698건이 누적되었으며, 디너 시즈널 1++ 한우구이 코스 99,000원과 런치 한우구이 코스 69,000원으로 자리 성격(점심·저녁)에 따라 코스를 분리해 선택할 수 있습니다. 런치 샤브샤브 스페셜 29,000원·1++ 한우 샤브샤브 스페셜 49,000원도 함께 운영해 단가 부담을 줄이고 싶을 때 매칭이 좋습니다. "혼밥 가능·데이트·회식" 평가가 함께 묶여 1인 코스부터 4~6인 회식까지 폭넓은 자리에 적합합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"재료 신선하다 · 맛있다 · 코스 구성 만족스럽다" 같은 평이 자주 언급되었습니다. 한우 등급·코스 구성 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디너 시즈널 1++ 한우구이 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">99,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">런치 한우구이 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">69,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">1++ 워터에이징 채끝</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">1++ 한우 샤브샤브 스페셜</p><p style="font-size:12px;color:#5f5e5a;margin:0">49,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">런치 샤브샤브 스페셜</p><p style="font-size:12px;color:#5f5e5a;margin:0">29,000원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">1++ 한우 생일상</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한우 코스</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 대치동 891-44 B1층 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/모도우 The ROOM 대치점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 모도우 The ROOM 대치점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'gyeongcheonain', text: '경천아인 2237 — 한우+프라이빗룸 비즈니스 자리', gradientStyle: { from: '#7F1D1D', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240819_233%2F1724039872008QkqWi_JPEG%2FIMG_8273.jpeg" alt="경천아인 2237 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#7F1D1D,#F59E0B)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#7F1D1D;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💼 비즈니스 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 548건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 25,000원~50,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🔓 코르키지 없음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">테헤란로 421에 위치한 고기구이·한식 매장입니다. <strong>한우·코르키지 없음·프라이빗룸·비즈니스 평가</strong>가 모두 매칭되어 있어 본 가이드 5곳 중 비즈니스 식사·접대 자리에 가장 적합합니다. 평점 4.3점·리뷰 548건이 누적되었고, "프라이빗룸·갈비탕·가성비·주차 가능·단체 가능·데이트" 평가가 함께 묶여 있어 회식·접대·기념일 자리 모두 수용 가능합니다. 11:30~22:00 영업(일 휴무)이라 평일·토요일 점심 자리도 가능하고, 마무리 미나리누룽지밥 평가가 좋아 코스 마지막까지 만족도가 안정적입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"서비스 친절하다 · 분위기 좋다 · 마무리 누룽지밥 인기 · 맛있다" 같은 평이 자주 언급되었습니다. 프라이빗룸 서비스와 마무리 메뉴 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 한우 코스성</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 등심·갈비살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 갈비탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 비빔밥·솥밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미나리누룽지밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>마무리</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드 정찬</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">코스 단가</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000~50,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한우</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">프라이빗룸</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">비즈니스</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">단체 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 테헤란로 421 · <strong>🕐 영업</strong> 11:30~22:00 (일 휴무) · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1410-2237
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/경천아인 2237" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 경천아인 2237 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'kimdoni', text: '김돈이 선릉본점 — 흑돼지 점심 회전 빠른 가성비', gradientStyle: { from: '#DC2626', to: '#F97316' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240515_98%2F1715743872008yVdxR_JPEG%2FIMG_8392.jpeg" alt="김돈이 선릉본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#DC2626,#F97316)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🐖 흑돼지 가성비</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 1,525건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 2,000원~11,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 10:30 오픈</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성동 140-29 1층, <strong>제주도 흑돼지 같은 만족도</strong>로 리뷰 1,525건이 누적된 점심 가성비 고기집입니다. 평점 4.1점·리뷰 1,525건은 본 가이드 5곳 중 표본이 가장 큽니다. 김치찌개 11,000원·물냉면 8,000원·공기밥 2,000원 같은 단품 가격대가 매우 낮아 직장인 점심·캐주얼 저녁 자리에 부담이 적습니다. 10:30 영업 시작이라 11시대 점심 시간에 일찍 가실 수 있고, "혼밥 가능·점심 추천·주차 가능·데이트·회식" 평가가 모두 매칭되어 1인부터 4~6인 자리까지 폭넓은 매칭이 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"흑돼지 맛있다 · 재방문 의사 있음 · 서비스 친절하다" 같은 평이 자주 언급되었습니다. 단품·세트 회전이 빠른 매장이라는 점이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 단품 가성비</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">김치찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">된장찌개·계란말이 세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">물냉면·비빔냉면</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">공기밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">2,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">흑돼지 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오징어볶음</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">흑돼지</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성동 140-29 1층 · <strong>🕐 영업</strong> 10:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/김돈이 선릉본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 김돈이 선릉본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'nolbu', text: '놀부보쌈 — 점심 보쌈+낙지 12,000원~ 가족 외식', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231203_286%2F1701567412009YVTpD_JPEG%2FIMG_3829.jpeg" alt="놀부보쌈 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#F97316,#DC2626)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">👨‍👩‍👧 가족 외식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 151건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~20,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">⏰ 웨이팅 맛집</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">영동대로 85길 7에 위치한 족발보쌈·한식·회식 매장입니다. <strong>평점 4.5점·리뷰 151건</strong>으로 본 가이드 5곳 중 평점이 가장 높습니다. 평일 11:00~24:00·주말 11:00~22:00 영업이라 점심·저녁·심야 1차 자리 모두 가능하며, "삼성역 3·4번 출구 도보권·웨이팅 맛집·점심 추천" 평가가 함께 묶여 있어 가족 외식·회식 1차 자리에 매칭이 좋습니다. 단가 12,000~20,000원선의 보쌈 단품으로 1인 점심부터 4~8인 가족 외식까지 폭넓게 수용합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"보쌈 부드럽다 · 점심특선 가성비 좋다 · 웨이팅 가치 있다" 같은 평이 자주 언급되었습니다. 점심특선과 단품 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 보쌈·점심특선</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">놀부보쌈 (점심특선)</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">놀부보쌈 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">족발 (점심특선)</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">낙지볶음</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">콩나물국밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">막국수·메밀국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심특선</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">웨이팅 맛집</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">심야 영업</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 영동대로85길 7 · <strong>🕐 영업</strong> 평일 11:00~24:00 / 주말 11:00~22:00 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 02-557-3848
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/놀부보쌈" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 놀부보쌈 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'gwanghwamun', text: '광화문석갈비 코엑스점 — 17,300원~ 점심·저녁 갈비', gradientStyle: { from: '#92400E', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20251208_88/1765161158691F1UEo_PNG/Frame_46.png" alt="광화문석갈비 코엑스점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#92400E,#7F1D1D)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#92400E;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍖 갈비 캐주얼</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 285건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 17,300원~19,800원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📍 도심공항터미널 1층</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성동 159-6 <strong>도심공항터미널 1층</strong>에 위치한 갈비 매장입니다. 평점 4.4점·리뷰 285건이 누적되었고, 트러플 한우 육회 냉파스타 19,800원이나 한끼 든든 돼지 돌판구이 18,900원 같은 시그니처 단품이 매장 특징입니다. 10:30 영업 시작이라 점심·저녁·심야 1차 자리 모두 가능하며, "데이트·기분 좋음·가성비·주차 가능" 평가가 함께 묶여 있어 캐주얼 회식·가족 점심 자리에 매칭이 좋습니다. 도심공항터미널 안 매장이라 공항 출국·입국 일정과 묶기 좋은 위치이기도 합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"직원 친절하다 · 깔끔·정갈하다 · 부모님 모시기 좋다" 같은 평이 자주 언급되었습니다. 깔끔한 매장 분위기와 가족 자리 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 단품 1만원대</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">트러플 한우 육회 냉파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,800원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한끼 든든 돼지 돌판구이</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,900원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">들기름 막국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,300원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">광화문석갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">감자전·치즈전</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한식 정찬 세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">갈비 캐주얼</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 식사</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성동 159-6 도심공항터미널 1층 · <strong>🕐 영업</strong> 10:30 시작 · <strong>🚗 주차</strong> 도심공항터미널 주차장 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/광화문석갈비 코엑스점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 광화문석갈비 코엑스점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 자리 성격·가격대', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">가격대</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">자리 성격</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>모도우 The ROOM 대치점</strong><br><span style="font-size:11px;color:#888780">한우 코스</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">698건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">29,000~99,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">한우 코스 회식·데이트</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>경천아인 2237</strong><br><span style="font-size:11px;color:#888780">한우·한식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">548건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#7F1D1D">25,000~50,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">프라이빗룸 비즈니스</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>김돈이 선릉본점</strong><br><span style="font-size:11px;color:#888780">흑돼지</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">836건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">2,000~11,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">점심 가성비·표본 최대</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>놀부보쌈</strong><br><span style="font-size:11px;color:#888780">보쌈·족발</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">151건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">12,000~20,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 최고 + 가족 외식</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>광화문석갈비 코엑스점</strong><br><span style="font-size:11px;color:#888780">갈비</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#92400E">17,300~19,800원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">캐주얼 갈비 + 공항 동선</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 자리는 어떤 고기인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 한우 코스 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>모도우 The ROOM 대치점</strong> — 디너 시즈널 1++ 한우구이 코스 99,000원. 4~6인 본격 회식·기념일에 적합.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💼 비즈니스 접대·프라이빗</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>경천아인 2237</strong> — 한우+프라이빗룸+코르키지 없음. 마무리 미나리누룽지밥 평가 좋음.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🐖 점심 흑돼지·가성비</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>김돈이 선릉본점</strong> — 김치찌개 11,000원·물냉면 8,000원. 본 가이드 5곳 중 표본 최대.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">👨‍👩‍👧 보쌈 가족 외식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>놀부보쌈</strong> — 점심특선 12,000원~. 평점 4.5로 본 가이드 1위, 평일 24시까지 영업.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍖 갈비 캐주얼·공항 동선</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>광화문석갈비 코엑스점</strong> — 도심공항터미널 1층, 트러플 한우 육회 냉파스타 19,800원.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>모도우 The ROOM 대치점</strong>은 한우 코스 매장이라 사전 예약을 권장드립니다. 디너 코스 99,000원·런치 코스 69,000원은 자리 회수 시간이 1.5~2시간 필요합니다.</li>
<li><strong>경천아인 2237</strong>은 일요일 휴무입니다. 비즈니스 접대 자리는 평일 저녁 또는 토요일 점심에 잡으시는 편이 안전합니다.</li>
<li><strong>김돈이 선릉본점</strong>은 점심 가성비 매장이라 12~13시 피크엔 자리가 빠르게 찹니다. 11시대 일찍 입장하거나 13:30 이후가 안전합니다.</li>
<li><strong>놀부보쌈</strong>은 점심 시간 웨이팅 맛집 평가가 함께 묶여 있으니 12~13시 입장 시 30분 안팎 대기를 감안하시는 편이 좋습니다. 평일 24시까지 영업이라 회식 1차로도 적합합니다.</li>
<li><strong>광화문석갈비 코엑스점</strong>은 도심공항터미널 안 매장이라 출국·입국 일정과 묶기 좋습니다. 도심공항 주차장 이용 가능.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다. 한우 시세는 단가 변동이 자주 있어 최신 매장 공지가 우선입니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 삼성역 한우 코스 회식 1순위는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>모도우 The ROOM 대치점</strong>이 1순위입니다. 디너 시즈널 1++ 한우구이 코스 99,000원·런치 한우구이 코스 69,000원으로 코스 단가를 자리 성격에 맞춰 선택할 수 있습니다. 차순위는 <strong>경천아인 2237</strong>의 프라이빗룸 한우 자리(25,000~50,000원)입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 가성비 고기집은 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>김돈이 선릉본점</strong>이 1순위입니다. 김치찌개 11,000원·물냉면 8,000원·공기밥 2,000원으로 단가가 매우 낮고, 리뷰 836건으로 본 가이드 5곳 중 표본도 가장 큽니다. 점심 동선이 짧은 직장인이라면 흑돼지 단품 위주로 1인 1만원대에 마칠 수 있습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가족 외식·평점 우선 고기집은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>놀부보쌈</strong>이 1순위입니다. 평점 4.5는 본 가이드 5곳 중 가장 높고, 점심특선 12,000원~으로 4~8인 가족 외식 단가가 부담 없습니다. 평일 24시까지 영업이라 회식 1차로도 매칭이 좋습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 비즈니스 접대·프라이빗 자리는 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>경천아인 2237</strong>이 1순위입니다. 한우·프라이빗룸·코르키지 없음 세 가지가 동시에 묶여 있어 본인 와인·사케 가져가 페어링하는 비즈니스 자리에 적합합니다. 마무리 미나리누룽지밥까지 만족도가 안정적입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>모도우 The ROOM 대치점·경천아인 2237·김돈이 선릉본점·광화문석갈비 코엑스점</strong>은 주차장을 운영합니다. <strong>놀부보쌈</strong>은 인근 공영주차장 또는 2호선·9호선·수인분당선 삼성역 대중교통이 더 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 모도우 평점이 4.2로 낮은데 신뢰할 수 있나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>모도우 The ROOM 대치점</strong>(4.2)은 본 가이드 5곳 중 평점이 가장 낮지만, 리뷰 698건의 표본 크기가 안정적이고 한우 코스·1++ 등급 시그니처가 명확합니다. 코스 단가가 높아 단품 위주 평점에서 다소 손해 보는 경향이 있지만, 코스 자리로 방문 시 만족도 편차가 줄어드는 매장입니다. 평점 우선이면 <strong>놀부보쌈</strong>(4.5)·<strong>김돈이 선릉본점</strong>(4.4)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/samseong/category/meat', text: '삼성역 고기집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#B91C1C,#7F1D1D);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">삼성역 859곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">삼성역 일대 859곳 중 고기구이·스테이크·족발보쌈 카테고리 111곳을 추리고, 자리 성격(한우 코스·비즈니스·점심 가성비·가족 외식·캐주얼 갈비)을 다섯 갈래로 나누어 5곳을 정리했습니다. 1인 단가가 2,000원(공기밥 단품·김돈이)부터 99,000원(한우 코스·모도우)까지 폭넓게 묶여 있어 자리 부담에 맞춰 한 곳을 고를 수 있도록 구성했습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 우선 1순위는 <strong>놀부보쌈(★4.5·151건)</strong>, 리뷰 표본 우선 1순위는 <strong>김돈이 선릉본점(836건)</strong>입니다. 두 곳 모두 점심 가성비·평일 24시 영업으로 회식 1차 자리에도 함께 매칭이 좋습니다. 한우 코스 정통이면 <strong>모도우 The ROOM 대치점</strong>, 비즈니스 접대면 <strong>경천아인 2237</strong>이 다른 옵션과 결이 분명하게 갈립니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>모도우 The ROOM 대치점</strong>은 평점이 4.2로 5곳 중 가장 낮지만, 코스 단가와 한우 등급이 분명한 매장이라 본 가이드는 평점뿐 아니라 자리 성격(코스 회식)을 기준으로 포함했습니다. 본 가이드는 평점·표본·시그니처를 함께 보시면 자리 매칭이 가장 안정적입니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 한우 시세는 단가 변동이 자주 있어 방문 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
