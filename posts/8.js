// 삼성역 데이트 5곳 — 코엑스·파르나스 분위기 우선 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 8,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">코엑스·테헤란로·파르나스 일대에서 <strong>분위기·서비스·메뉴 시그니처</strong>가 함께 묶이는 삼성역 데이트 식당 5곳을 정리하였습니다. 평점 4.3 이상·리뷰 700건 이상·데이트 평가 누적 식당을 우선 후보로 두고, 한식 한우 코스·뷔페형 다이닝·중식 1만원대·코엑스 코스 캐주얼·이자카야 분위기까지 결이 다른 다섯 매장을 골랐습니다. 자리 성격(첫 데이트·기념일·캐주얼)에 따라 1순위가 달라지니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">859곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">삼성역·코엑스·테헤란로</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.5</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.3 ~ 4.9</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">15,043건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">9,900원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">캐주얼 데이트 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 어떤 데이트에 어디가 맞나요', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #C026D3">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">기념일·프러포즈 같은 큰 자리는 <strong>그랜드 키친</strong> — 파르나스 1층 뷔페형 다이닝(주중 점심 173,000원·저녁 198,000원). 한우 코스 정통이면 <strong>우도옥 삼성본점</strong> — 한우++ 절편 등심 53,000원·★4.9. 캐주얼 점심 데이트면 <strong>캘리포니아 피자 키친 코엑스</strong> — 9,900원~25,900원 코엑스몰. 부담 없는 한 끼 데이트면 <strong>무탄 코엑스</strong> — ★4.9·7,774건 검증된 중식. 분위기 좋은 술·요리 한 잔이면 <strong>키친바락</strong> — 모듬 숙성회 40,000원·디저트 평가 좋음.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 자리 성격 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>평점 4.3 이상 + 데이트 평가 누적</strong> — 네이버 플레이스 moods에 "데이트" 또는 "축하할 일 있음" 매칭</li>
<li><strong>리뷰 표본 700건 이상</strong> — 평균값을 신뢰할 수 있는 검증 크기 (키친바락 예외 표기)</li>
<li><strong>가격대 분산</strong> — 1만원대 캐주얼부터 1인 20만원선 기념일까지 다섯 단계</li>
<li><strong>코엑스·파르나스·테헤란로 도보권</strong> — 데이트 동선에 코엑스몰·아쿠아리움·별마당 도서관 등 후속 일정 묶기 좋은 위치</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">삼성역 일대 859곳에서 데이트 평가가 함께 매칭된 식당은 약 80곳입니다. 그중 자리 성격(첫 데이트·기념일·캐주얼·술자리)을 다섯 갈래로 나누어 한 페이지에서 골라 쓸 수 있도록 분산했습니다. 평점 우선이면 우도옥 삼성본점·무탄 코엑스(★4.9), 가격 우선이면 캘리포니아 피자 키친 코엑스(9,900원~), 분위기 우선이면 그랜드 키친·키친바락이 매칭됩니다. 같은 가격대 매장 중에는 시그니처 메뉴가 분명한 식당을 우선 선정했습니다.</p>`
    },

    { type: 'h2', id: 'grand-kitchen', text: '그랜드 키친 — 파르나스 1층 뷔페형 다이닝, 기념일 1순위', gradientStyle: { from: '#7C3AED', to: '#C026D3' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250114_226%2F1736834312839GLi9P_JPEG%2FIMG_8273.jpeg" alt="그랜드 키친 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#7C3AED,#C026D3)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#7C3AED;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🎂 기념일 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 리뷰 1,334건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 42,500원~198,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 사진 명소</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">테헤란로 521 <strong>그랜드 인터컨티넨탈 서울 파르나스 1층</strong>에 위치한 뷔페형 다이닝입니다. 평점 4.8점·리뷰 1,334건이 누적되었으며, 사진 명소·웨이팅 맛집·단체 가능 평가가 함께 묶여 있어 기념일·프러포즈·가족 모임 자리에 매칭이 좋습니다. 주중 점심 173,000원·주중 저녁 198,000원으로 1인 단가가 본 가이드 5곳 중 가장 높지만, 랍스터·양갈비를 포함한 그릴 라인업으로 후기 만족도가 안정적입니다. 18:00 영업이 표기되어 있으나 점심 타임도 운영되므로, 본격 데이트 자리는 사전 예약이 필수입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 서비스 친절하다 · 분위기 좋다 · 랍스터·양갈비 인기" 같은 평이 자주 언급되었습니다. 호텔 다이닝 특유의 서비스 만족도가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 가격대 — 뷔페형</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아침 (성인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">85,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아침 (어린이)</p><p style="font-size:12px;color:#5f5e5a;margin:0">42,500원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">주중 점심 (성인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">173,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">주중 점심 (어린이)</p><p style="font-size:12px;color:#5f5e5a;margin:0">86,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">주중 저녁 (성인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">198,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">주중 저녁 (어린이)</p><p style="font-size:12px;color:#5f5e5a;margin:0">99,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">기념일</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">사진 명소</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 테헤란로 521 그랜드 인터컨티넨탈 서울 파르나스 1층 · <strong>🕐 영업</strong> 점심·저녁 운영 (사전 예약) · <strong>🚗 주차</strong> 호텔 주차장 · <strong>📞 전화</strong> 02-559-7575
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/그랜드 키친" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 그랜드 키친 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'udookok', text: '우도옥 삼성본점 — 한우 코스 정통 데이트', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20250519_132/1747627772070VxLwW_JPEG/IMG_0819.jpeg" alt="우도옥 삼성본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#B91C1C,#7F1D1D)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 한우 코스 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 250건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000원~72,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">👥 단체 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성동 149-23, 평점 4.9점·리뷰 250건이 누적된 한식 고기구이 매장입니다. <strong>한우++ 절편 등심·설화 양념등심·새우살</strong>이 시그니처 라인이며, 우도옥만의 절편 커팅 방식으로 꽃등심을 절편처럼 잘라내는 메뉴가 매장 특징입니다. 한우++곰탕 15,000원으로 단가 부담을 줄인 선택지도 있어 첫 데이트에는 단품 위주, 기념일에는 코스 위주로 자연스럽게 나뉩니다. 11:30 영업 시작이라 점심 데이트도 가능하며, 단체석 운영으로 양가 식사 자리에도 묶기 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"재료 신선하다 · 서비스 친절하다" 같은 평이 자주 언급되었습니다. 한우 등급·커팅 정성도가 후기 키워드로 함께 묶이는 매장입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우++ 절편 등심 130g</p><p style="font-size:12px;color:#5f5e5a;margin:0">53,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우++ 설화양념등심 150g</p><p style="font-size:12px;color:#5f5e5a;margin:0">53,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우++ 새우살 130g</p><p style="font-size:12px;color:#5f5e5a;margin:0">72,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우++ 등심대패 150g</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우도옥 한우++ 곰탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">언양식 한우++ 불고기</p><p style="font-size:12px;color:#5f5e5a;margin:0">23,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한우 코스</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체석</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성동 149-23 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/우도옥 삼성본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 우도옥 삼성본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'cpk', text: '캘리포니아 피자 키친 코엑스 — 9,900원~ 캐주얼 점심 데이트', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240315_127%2F1710480272008QkqWi_JPEG%2FIMG_0184.jpeg" alt="캘리포니아 피자 키친 코엑스 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#C026D3,#7C3AED)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍕 캐주얼 데이트</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 1,054건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 9,900원~25,900원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📍 코엑스몰</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">영동대로 513 코엑스몰에 위치한 양식 매장입니다. 평점 4.3점·리뷰 1,054건이 누적되었고, 데이트·가족 식사·리뷰 많음·주차 가능 평가가 함께 매칭됩니다. <strong>피자 한 판에 파스타 한 접시</strong>로 시작가 9,900원·시그니처 25,900원선의 1만원대 데이트 비용을 잡을 수 있어, 점심 데이트 또는 코엑스몰 쇼핑·아쿠아리움·별마당 도서관 일정과 묶기 좋습니다. 22:00 영업이라 저녁 코스로도 가능합니다. 코엑스몰 안 매장 특성상 12~13시 피크엔 웨이팅이 생길 수 있어 11:30 또는 13:30 입장이 더 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 빠네 파스타·캘리포니아 피자 인기" 같은 평이 자주 언급되었습니다. 단품 피자+파스타 조합 만족도가 후기 키워드로 함께 묶이는 매장입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">와일드 머쉬룸 피자</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,900원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">스테이크 갈릭 리조또</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,900원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">버터 파운드 케이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,900원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">빠네 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">캘리포니아 피자</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샐러드 라인</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">캐주얼 데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 식사</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">코엑스몰</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 영동대로 513 코엑스몰 · <strong>🕐 영업</strong> ~22:00 · <strong>🚗 주차</strong> 코엑스몰 주차장 · <strong>📞 전화</strong> 07-1430-6502
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/캘리포니아 피자 키친 코엑스" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 캘리포니아 피자 키친 코엑스 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'mutan', text: '무탄 코엑스 — 부담 없는 1만원대 한 끼 데이트', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240107_125%2F1704609812816uH1pi_JPEG%2FIMG_4729.jpeg" alt="무탄 코엑스 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#DC2626,#F59E0B)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 부담 없는 데이트</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 7,774건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000원~18,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📍 코엑스몰 B1</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">영동대로 513 코엑스몰 지하 1층, <strong>평점 4.9점·리뷰 7,774건</strong>의 중식당입니다. 본 가이드 5곳 중 평점·리뷰 표본 모두 1순위로, 첫 데이트나 만난 지 얼마 안 된 사이에 단가 부담 없이 검증된 식당을 고르고 싶을 때 매칭이 좋습니다. 자장면·짬뽕 1만원 안팎·어향동고 18,000원 같은 단품 위주이며, 11:00~21:30 영업으로 점심 데이트·저녁 데이트 모두 가능합니다. 데이트·기분 좋음·혼밥·회식 평가가 모두 매칭되어 있어 사이드 위주 캐주얼 자리에도 잘 맞습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 양 많다 · 대기 가치 있다" 같은 평이 자주 언급되었습니다. 데이트 자리에 단가·만족도가 함께 맞춰지는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">자장면</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 안팎 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 안팎</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">어향동고</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">탕수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">유산슬밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">군만두</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">첫 데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">코엑스몰</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">검증 1순위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 영동대로 513 코엑스몰 B1 · <strong>🕐 영업</strong> 11:00~21:30 · <strong>🚗 주차</strong> 코엑스몰 주차장 · <strong>📞 전화</strong> 07-1397-0364
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/무탄 코엑스" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 무탄 코엑스 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'kitchen-barack', text: '키친바락 — 분위기 좋은 한 잔, 술·요리 데이트', gradientStyle: { from: '#6366F1', to: '#A855F7' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241028_88%2F1730064793773uF1u4_JPEG%2FIMG_8273.jpeg" alt="키친바락 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#6366F1,#A855F7)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#6366F1;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍶 술·요리 데이트</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 82건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 20,000원~55,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍰 디저트 평 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">대치동 956-11 1층, 삼성역 4번 출구에서 도보로 접근 가능한 일식 이자카야입니다. 본 가이드 5곳 중 리뷰 표본은 가장 작지만, 데이트·기분 좋음 평가가 함께 묶여 있고 디저트성 덮밥류(크림 카레 덮밥) 평가가 좋아 <strong>술 한 잔에 안주+마무리 디저트까지 챙기는 데이트 자리</strong>에 가장 가깝습니다. 모듬 숙성회 40,000원·인생편육(문어 트러플) 20,000원이 시그니처라인이며, 단가가 1인 4~5만원선이라 본격 회식보다는 2인 자리에 더 적합합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"서비스 친절하다 · 재료 신선하다 · 분위기 좋다 · 재방문 의사 있음" 같은 평이 자주 언급되었습니다. 숙성회와 디저트 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모듬 숙성회</p><p style="font-size:12px;color:#5f5e5a;margin:0">40,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">광어 단새우 성게알 말이</p><p style="font-size:12px;color:#5f5e5a;margin:0">55,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">초절임 고등어</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">인생편육 (문어 트러플)</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">닭껍질 만두</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">크림 카레 덮밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>디저트성</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">술·요리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">숙성회</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 대치동 956-11 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/키친바락" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 키친바락 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>그랜드 키친</strong><br><span style="font-size:11px;color:#888780">호텔 뷔페</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">1,272건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#7C3AED">42,500~198,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">기념일·프러포즈</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>우도옥 삼성본점</strong><br><span style="font-size:11px;color:#888780">한우 코스</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">250건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">15,000~72,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">한우 코스 데이트</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>캘리포니아 피자 키친 코엑스</strong><br><span style="font-size:11px;color:#888780">양식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">1,054건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">9,900~25,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">캐주얼 점심 데이트</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>무탄 코엑스</strong><br><span style="font-size:11px;color:#888780">중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">7,774건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">10,000~18,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">첫 데이트 검증</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>키친바락</strong><br><span style="font-size:11px;color:#888780">이자카야</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">82건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#6366F1">20,000~55,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">술·요리 분위기</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 자리는 어떤 데이트인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🎂 기념일·프러포즈</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>그랜드 키친</strong> — 파르나스 1층 뷔페형 다이닝. 사진 명소 평가가 함께 묶여 기념 사진까지 챙길 수 있는 자리.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 한우 코스 정통</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>우도옥 삼성본점</strong> — 평점 4.9·한우++ 절편 등심 53,000원. 양가 식사·진중한 데이트에 매칭이 좋습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍕 캐주얼 점심 데이트</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>캘리포니아 피자 키친 코엑스</strong> — 9,900원~25,900원, 코엑스몰 쇼핑·아쿠아리움 일정과 묶기 좋음.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 첫 데이트·검증 우선</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>무탄 코엑스</strong> — ★4.9·리뷰 7,774건. 단가 부담 없이 평점·표본 둘 다 1순위로 검증된 옵션.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍶 술·요리 한 잔 분위기</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>키친바락</strong> — 모듬 숙성회 40,000원·디저트성 덮밥류. 2인 자리에 분위기·디저트 마무리까지 챙기는 옵션.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>그랜드 키친</strong>은 기념일·주말 점심 시간대는 사전 예약이 필수입니다. 호텔 다이닝 특성상 자리가 일찍 차므로 2~3주 전 예약을 권장드립니다.</li>
<li><strong>우도옥 삼성본점</strong>은 단체석을 운영하지만 주말 저녁은 자리가 빠르게 차는 편입니다. 양가 식사·기념일은 평일 저녁 시간대로 잡으시는 편이 안전합니다.</li>
<li><strong>캘리포니아 피자 키친 코엑스·무탄 코엑스</strong>는 코엑스몰 안 매장이라 점심·저녁 피크 웨이팅이 있습니다. 11:30~11:50 또는 13:30 이후 입장이 안전합니다.</li>
<li><strong>키친바락</strong>은 리뷰 표본이 82건으로 5곳 중 가장 작지만 평점은 4.3으로 카테고리 평균선입니다. 처음 방문하시는 분은 시그니처 메뉴(모듬 숙성회·인생편육) 위주로 주문하시면 만족도 편차가 줄어듭니다.</li>
<li>데이트 자리는 대부분 음주가 동반될 수 있으므로 2호선·9호선·수인분당선 삼성역 대중교통이 가장 편리합니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다. 본문 메뉴 표는 최신 매장 공지가 우선입니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 삼성역 기념일·프러포즈 데이트로 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>그랜드 키친</strong>이 1순위입니다. 파르나스 1층 뷔페형 다이닝으로 평점 4.5·리뷰 1,272건이 검증되어 있고 사진 명소 평가까지 함께 묶여 기념 사진을 챙기기 좋습니다. 차순위는 <strong>우도옥 삼성본점</strong>의 한우++ 새우살 72,000원 코스입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 첫 데이트는 단가가 부담스러울 때 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>무탄 코엑스</strong>(★4.9·리뷰 7,774건)가 1순위입니다. 평점·표본 둘 다 1순위로 검증되어 있고 1인 1만원대로 단가 부담이 적습니다. 양식이 더 편하시면 <strong>캘리포니아 피자 키친 코엑스</strong>(9,900원~25,900원)도 좋은 차순위 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 코엑스몰 안에서 끝나는 데이트 동선은 어떻게 짜나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>무탄 코엑스</strong>(B1)·<strong>캘리포니아 피자 키친 코엑스</strong>(코엑스몰 안)는 식사 후 아쿠아리움·별마당 도서관·메가박스 코엑스로 자연스럽게 이어갈 수 있습니다. 점심 데이트라면 식사 → 별마당 도서관 → 카페, 저녁 데이트라면 식사 → 아쿠아리움 → 메가박스 순서가 무난합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 술 한 잔 곁들이는 데이트는 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>키친바락</strong>이 1순위입니다. 모듬 숙성회 40,000원·인생편육 20,000원에 디저트성 덮밥류까지 묶여 있어 술 한 잔과 함께 마무리 디저트까지 챙기는 자리에 적합합니다. 2인 자리 단가는 1인 4~5만원선으로 잡으시면 됩니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 예약 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>그랜드 키친·우도옥 삼성본점</strong>은 예약 권장 매장입니다(특히 주말·기념일). <strong>캘리포니아 피자 키친 코엑스·무탄 코엑스</strong>는 코엑스몰 안 매장이라 워크인 위주이지만 피크 시간 웨이팅이 있으니 일찍 입장하시는 편이 안전합니다. <strong>키친바락</strong>은 매장 공지를 한 번 더 확인하시는 편이 좋습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 키친바락의 리뷰가 82건으로 적은데 신뢰할 수 있나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 본 가이드 5곳 중 표본이 가장 작지만, 평점은 4.3으로 카테고리 평균선이고 데이트·서비스·재방문 평가가 함께 매칭되어 있습니다. 처음 방문하시는 분은 시그니처 메뉴(모듬 숙성회·인생편육) 위주로 주문하시면 만족도 편차가 적습니다. 검증 표본 우선이면 <strong>무탄 코엑스</strong>(7,774건)·<strong>그랜드 키친</strong>(1,272건)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/samseong/category/date', text: '삼성역 데이트 식당 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#C026D3,#7C3AED);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">삼성역 859곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">삼성역 일대 859곳에서 데이트 평가가 매칭된 식당 80여 곳을 추리고, 자리 성격(기념일·한우 코스·캐주얼·첫 데이트·술·요리)을 다섯 갈래로 나누어 5곳을 정리했습니다. 1인 단가가 1만원대(무탄·캘리포니아 피자 키친)부터 20만원선(그랜드 키친)까지 분산되어 있어 자리 부담에 맞춰 한 곳을 고를 수 있도록 구성했습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점·리뷰 표본 둘 다 1순위는 <strong>무탄 코엑스(★4.9·7,774건)</strong>입니다. 단가 부담 없이 검증된 옵션을 고르고 싶다면 첫 후보로 묶기 좋습니다. 기념일·격식 자리는 <strong>그랜드 키친</strong>·<strong>우도옥 삼성본점</strong>이 매칭되며, 캐주얼한 점심·저녁이면 <strong>캘리포니아 피자 키친 코엑스</strong>가 코엑스몰 동선과 잘 맞습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>키친바락</strong>은 리뷰 표본이 82건으로 5곳 중 가장 작습니다. 평점 4.3은 카테고리 평균선이지만 처음 방문하시는 분은 시그니처 메뉴 위주로 주문하시면 만족도 편차를 줄일 수 있습니다. 표본 우선이면 무탄·그랜드 키친·캘리포니아 피자 키친 코엑스 세 곳이 우선 후보입니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 방문 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
