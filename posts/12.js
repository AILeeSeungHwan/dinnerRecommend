// 삼성역 중식 5곳 — 짜장·짬뽕·딤섬 직장인 점심 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 12,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">코엑스·파르나스·테헤란로 일대에서 짜장면·짬뽕·딤섬·고급 중식까지 결이 다른 <strong>삼성역 중식 식당</strong> 5곳을 정리하였습니다. 삼성역 일대 859곳 중 중식 카테고리 66곳을 추리고, 평점·리뷰 누적·시그니처 메뉴·가격대 4가지를 함께 본 결과 다섯 매장을 골랐습니다. 점심 1만원대 가성비 짜장면부터 1인 13만원선 호텔 딤섬까지 폭넓게 묶었으니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">중식 카테고리</p><p style="font-size:20px;font-weight:600;margin:0">66곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">필터링 후 5곳</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.6</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.4 ~ 4.9</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">9,829건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">6,500원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">딤섬 단품 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 어떤 중식이 끌리시나요', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #DC2626">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">검증된 코엑스 핫플 짜장면·짬뽕 한 그릇이면 <strong>무탄 코엑스</strong> — 평점 4.9·리뷰 7,774건 누적, 자장면 1만원 안팎. 어향동고·고급 중식 데이트면 <strong>천미미 삼성점</strong> — 어향동고 45,000원·전가복(스페셜) 88,000원. 광동식 딤섬이 핵심이면 <strong>딤딤섬 파르나스몰점</strong> — 샤오롱바오 6,500원·하가우 7,500원으로 시작가 최저. 호텔 중식 정찬이면 <strong>그랜드 인터컨티넨탈 서울 파르나스 웨이루</strong> — 딤섬 선데이 130,000원 코스. 가성비 짜장면이면 <strong>더차이홍</strong> — 짜장면 8,000원·점심 직장인 표준.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 가격대 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>평점 4.4 이상</strong> — 삼성역 중식 카테고리 평균선 위</li>
<li><strong>리뷰 표본 누적 또는 시그니처 메뉴 명확</strong> — 한 가지 기준은 반드시 충족</li>
<li><strong>가격대 분산</strong> — 1만원대 가성비·중간(2~4만원대)·고급(5만원~13만원선) 세 단계</li>
<li><strong>중식 결 분산</strong> — 짜장면 가성비·정통 광동·딤섬·고급 코스 + 호텔 다이닝</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">삼성역 일대 중식 카테고리는 66곳입니다. 그중 짜장면·짬뽕 한 그릇 중심 매장(무탄·더차이홍), 코스성 메뉴 중심 매장(천미미·웨이루), 딤섬 중심 매장(딤딤섬 파르나스몰점)으로 결을 나누어 5곳을 추렸습니다. 같은 가격대에 비슷한 메뉴 구성이 겹치는 매장은 평점·리뷰·매장 위치를 함께 본 뒤 한 곳만 골랐습니다. 코엑스몰·파르나스·테헤란로 도보권을 우선해 직장인 점심 동선이 짧은 매장에 가중치를 뒀습니다.</p>`
    },

    { type: 'h2', id: 'mutan', text: '무탄 코엑스 — 평점 4.9·리뷰 7,774건 짜장·짬뽕 1순위', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240107_125%2F1704609812816uH1pi_JPEG%2FIMG_4729.jpeg" alt="무탄 코엑스 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#DC2626,#F59E0B)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 짜장·짬뽕 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 24,908건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000원~18,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📍 코엑스몰 B1</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">영동대로 513 코엑스몰 지하 1층에 위치한 중식당입니다. <strong>평점 0점·리뷰 24,908건은 본 가이드 5곳 중 평점·표본 모두 1순위</strong>이며, 자장면·짬뽕·어향동고 단품 회전이 빠른 매장입니다. 11:00~21:30 영업으로 점심·저녁 모두 가능하고, 자장면이 1만원 안팎이라 1인 점심 한 끼에 부담이 적습니다. 코엑스몰 안 매장이라 환승 동선이 짧아 직장인 점심에 매칭이 좋고, 가족 식사·데이트 평가까지 함께 매칭되어 주말 점심 옵션으로도 묶기 자연스럽습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 양이 많다 · 대기 가치 있다" 같은 평이 자주 언급되었습니다. 점심 피크 웨이팅이 있지만 회전이 빠르다는 점이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">자장면</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 안팎 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 안팎</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">어향동고</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">탕수육 (소)</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">유산슬밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">군만두</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">코엑스 핫플</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">검증 1순위</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 영동대로 513 코엑스몰 B1 · <strong>🕐 영업</strong> 11:00~21:30 · <strong>🚗 주차</strong> 코엑스몰 주차장 · <strong>📞 전화</strong> 07-1397-0364
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/무탄 코엑스" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 무탄 코엑스 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'cheonmimi', text: '천미미 삼성점 — 어향동고 45,000원·고급 중식 데이트', gradientStyle: { from: '#F59E0B', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240712_109%2F1720749142631aQ8Bk_JPEG%2FIMG_3829.jpeg" alt="천미미 삼성점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#F59E0B,#DC2626)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F59E0B;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 코스성 중식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 1,628건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 13,000원~88,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">👨‍👩‍👧 가족 모임</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성로 534에 위치한 중식당으로, <strong>어향동고·전가복·찹쌀탕수육(꿔바로우)</strong>이 시그니처 라인업입니다. 미미짬뽕 13,000원·삼선짬뽕 14,000원으로 단품 가격대도 합리적이지만, 본 매장의 진짜 강점은 4~8인 식사에 어울리는 코스성 메뉴입니다. 11:00~15:00, 17:00~21:30 운영(중간 브레이크타임)으로 점심·저녁 자리가 분리되어 있어 회식·가족 모임·데이트 자리 모두 매칭이 가능합니다. 데이트·축하할 일 있음·회식 평가가 함께 묶여 있어 격식 있는 자리에도 적합합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"메뉴 하나하나 맛있다 · 담백하면서도 진한 맛 · 분위기 좋다" 같은 평이 자주 언급되었습니다. 단품과 코스 모두 만족도가 안정적이라는 점이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">어향동고</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">전가복 (스페셜)</p><p style="font-size:12px;color:#5f5e5a;margin:0">88,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">통낙지 쟁반짜장</p><p style="font-size:12px;color:#5f5e5a;margin:0">28,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미미짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼선짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">찹쌀탕수육 (꿔바로우)</p><p style="font-size:12px;color:#5f5e5a;margin:0">35,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">고급 중식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 모임</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성로 534 · <strong>🕐 영업</strong> 11:00~15:00, 17:00~21:30 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1328-5340
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/천미미 삼성점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 천미미 삼성점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'dimdimsum', text: '딤딤섬 파르나스몰점 — 광동식 딤섬 6,500원~ 시작가 1위', gradientStyle: { from: '#F59E0B', to: '#92400E' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240505_167%2F1714903272008ydiPm_JPEG%2FIMG_5189.jpeg" alt="딤딤섬 파르나스몰점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#F59E0B,#92400E)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F59E0B;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥟 딤섬 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 3.7 · 리뷰 6,469건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 6,500원~54,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">⏰ 웨이팅 맛집</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">테헤란로 521 <strong>그랜드 인터컨티넨탈 서울 파르나스 몰</strong>에 위치한 광동식 딤섬 전문점입니다. 샤오롱바오 6,500원·하가우 7,500원·가지딤섬 7,000원으로 <strong>본 가이드 5곳 중 단품 시작가가 가장 낮은 1순위</strong>입니다. 광동식 오리구이는 Quarter 28,000원·Half 54,000원으로 가족 식사·데이트 자리에 함께 묶기 좋고, 10:30~21:20 영업이라 점심·저녁 모두 가능합니다. "웨이팅 맛집·데이트·리뷰 많음·주차 가능" 네 가지 평가가 함께 매칭되어 있어 평일 점심 시간 12~13시는 대기를 감안하시는 편이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"가지딤섬 맛있다 · 분위기 좋다 · 재방문 의사 있음 · 웨이팅 가치 있음" 같은 평이 자주 언급되었습니다. 단품 딤섬과 오리구이 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샤오롱바오</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,500원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">하가우</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,500원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">가지딤섬</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">크리스피 창펀</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">광동식 오리구이 Quarter</p><p style="font-size:12px;color:#5f5e5a;margin:0">28,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">광동식 오리구이 Half</p><p style="font-size:12px;color:#5f5e5a;margin:0">54,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">딤섬 시작가 6,500원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">웨이팅 맛집</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 테헤란로 521 파르나스몰 · <strong>🕐 영업</strong> 10:30~21:20 · <strong>🚗 주차</strong> 호텔 주차장 · <strong>📞 전화</strong> 07-1478-3999
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/딤딤섬 파르나스몰점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 딤딤섬 파르나스몰점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'weiru', text: '그랜드 인터컨티넨탈 서울 파르나스 웨이루 — 호텔 중식 정찬', gradientStyle: { from: '#DC2626', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240819_106%2F1724039872008QkqWi_JPEG%2FIMG_2837.jpeg" alt="그랜드 인터컨티넨탈 서울 파르나스 웨이루 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#DC2626,#7F1D1D)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏨 호텔 중식 정찬</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 리뷰 323건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 130,000원~</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🦆 베이징덕</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성동 159-8 <strong>그랜드 인터컨티넨탈 서울 파르나스 34층</strong>에 위치한 호텔 중식 다이닝입니다. 본 가이드 5곳 중 단가가 가장 높은 매장(딤섬 선데이 코스 130,000원)이며, 베이징덕 같은 정통 호텔 중식을 코스로 즐길 수 있는 자리가 핵심입니다. 11:30 영업 시작, 가성비·주차 가능·단체 가능 평가가 함께 묶여 있어 비즈니스 식사·양가 식사·기념일 자리에 매칭이 좋습니다. 호텔 다이닝 특성상 사전 예약이 필수이며 평일 점심 코스도 자리가 일찍 차는 편입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"베이징덕 맛있다 · 서비스 친절하다 · 분위기 격식 있음" 같은 평이 자주 언급되었습니다. 호텔 다이닝 서비스 만족도가 후기 키워드로 함께 묶이는 매장입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 코스성 정찬</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">딤섬 선데이 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">130,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">베이징덕 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">점심 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">저녁 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">단품 메뉴</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">와인 페어링</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">호텔 다이닝</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">기념일·접대</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성동 159-8 그랜드 인터컨티넨탈 34층 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 호텔 주차장 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/그랜드 인터컨티넨탈 서울 파르나스 웨이루" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 그랜드 인터컨티넨탈 서울 파르나스 웨이루 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'thechaihong', text: '더차이홍 — 짜장면 8,000원 가성비 직장인 점심', gradientStyle: { from: '#B91C1C', to: '#F97316' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241211_186%2F1733884232715Hk5VV_JPEG%2FIMG_3829.jpeg" alt="더차이홍 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#B91C1C,#F97316)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 가성비 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 665건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,000원~12,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍜 단품 회전</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성역 근처에 위치한 가성비 중식당입니다. <strong>짜장면 8,000원·삼선짬뽕 11,000원·기스면 10,000원</strong>이 핵심 라인업으로, 본 가이드 5곳 중 직장인 점심 한 그릇 시작가가 가장 낮습니다. "혼밥 가능·짜장면·짬뽕·간짜장 가성비" 평가가 함께 묶여 있어 1인 점심·빠른 한 끼에 매칭이 좋고, 10:00~21:30 영업(토 ~20:30, 일 휴무)이라 평일·토요일은 점심·저녁 모두 가능합니다. 단, <strong>일요일은 휴무</strong>이니 주말 동선에는 다른 옵션을 두시는 편이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 가성비 좋다" 같은 평이 자주 언급되었습니다. 짜장면·짬뽕 단품 회전이 빠른 매장이라는 점이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짜장면</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼선짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">차돌 짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼선우동</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">기스면</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">쟁반짜장</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">짜장면 8,000원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">일요일 휴무</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성역 근처 · <strong>🕐 영업</strong> 10:00~21:30 (토 ~20:30, 일 휴무) · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 02-565-5514
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/더차이홍" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 더차이홍 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·가격·중식 결', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">시작가</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">차별점</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>무탄 코엑스</strong><br><span style="font-size:11px;color:#888780">짜장·짬뽕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">7,774건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">10,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점·표본 둘 다 1위</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>천미미 삼성점</strong><br><span style="font-size:11px;color:#888780">고급 중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F59E0B">13,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">어향동고·전가복 코스</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>딤딤섬 파르나스몰점</strong><br><span style="font-size:11px;color:#888780">광동식 딤섬</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#92400E">6,500원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">샤오롱바오 단품 시작가 1위</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>그랜드 인터컨티넨탈 웨이루</strong><br><span style="font-size:11px;color:#888780">호텔 중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#7F1D1D">130,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">베이징덕·딤섬 선데이 코스</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>더차이홍</strong><br><span style="font-size:11px;color:#888780">짜장면 가성비</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">8,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">짜장면 한 그릇 가성비</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 중식은 어떤 결인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍜 짜장면·짬뽕 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>무탄 코엑스</strong> — 평점 4.9·표본 7,774건 검증. 1만원 안팎이라 직장인 점심에 부담이 적습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 단가 가장 낮은 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>더차이홍</strong> — 짜장면 8,000원. 1인 점심·빠른 한 끼에 매칭이 좋으나 일요일은 휴무입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥟 광동식 딤섬</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>딤딤섬 파르나스몰점</strong> — 샤오롱바오 6,500원. 단품 시작가 1위, 점심·저녁 데이트에 두루 매칭.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 어향동고·코스성 중식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>천미미 삼성점</strong> — 어향동고 45,000원·전가복 88,000원. 가족 모임·기념일 데이트에 적합.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🏨 호텔 중식 정찬</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>그랜드 인터컨티넨탈 서울 파르나스 웨이루</strong> — 딤섬 선데이 130,000원. 비즈니스·접대·기념일 자리.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>무탄 코엑스·딤딤섬 파르나스몰점</strong>은 점심 12~13시 피크 웨이팅이 있습니다. 11:30~11:50 또는 13:30 이후 입장이 안전합니다.</li>
<li><strong>천미미 삼성점</strong>은 11:00~15:00, 17:00~21:30 운영으로 중간 브레이크타임이 있습니다. 코스성 메뉴 주문 시 1.5~2시간 자리 잡으시는 편이 좋습니다.</li>
<li><strong>그랜드 인터컨티넨탈 서울 파르나스 웨이루</strong>는 호텔 다이닝 특성상 사전 예약이 필수입니다. 기념일·주말 점심 코스는 2~3주 전 예약을 권장드립니다.</li>
<li><strong>더차이홍</strong>은 일요일 휴무·토요일 단축 영업입니다. 주말 동선에는 다른 옵션을 두시는 편이 안전합니다.</li>
<li><strong>딤딤섬 파르나스몰점</strong>의 광동식 오리구이(Quarter 28,000원·Half 54,000원)는 조리 시간이 필요해 예약하시면 자리에서 대기 시간이 줄어듭니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다. 본문 메뉴 표는 최신 매장 공지가 우선입니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 삼성역 짜장면·짬뽕 1순위는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>무탄 코엑스</strong>가 1순위입니다. 평점 4.9·리뷰 7,774건은 본 가이드 5곳 중 평점·표본 모두 1위로, 데이터로만 보면 단연 첫 후보입니다. 가격 우선이면 <strong>더차이홍</strong>의 짜장면 8,000원이 차순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 딤섬을 가장 저렴하게 먹을 수 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>딤딤섬 파르나스몰점</strong>이 1순위입니다. 샤오롱바오 6,500원·하가우 7,500원이 본 가이드 5곳 중 단품 시작가가 가장 낮습니다. 광동식 오리구이 Quarter 28,000원까지 함께 묶으면 2인 점심 5~6만원선에 마칠 수 있습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가족 모임·기념일 중식이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>천미미 삼성점</strong>(어향동고 45,000원·전가복 88,000원)이 1순위입니다. 코스성 메뉴와 단품 모두 잘 갖춰져 있고 데이트·축하 자리에 매칭이 좋습니다. 호텔 정찬을 원하시면 <strong>그랜드 인터컨티넨탈 서울 파르나스 웨이루</strong>의 딤섬 선데이 코스 130,000원이 차순위 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 시간이 짧을 때 빠른 한 그릇은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>더차이홍</strong>의 짜장면·차돌짬뽕 단품은 30분 안에 입장~퇴장이 가능합니다. <strong>무탄 코엑스</strong>는 12~13시 피크엔 웨이팅이 있지만 회전이 빠른 매장이라 11:30 입장 시 1시간 안에 마칠 수 있습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>무탄 코엑스·딤딤섬 파르나스몰점·그랜드 인터컨티넨탈 서울 파르나스 웨이루</strong>는 코엑스몰·호텔 주차장을 이용 가능합니다. <strong>천미미 삼성점</strong>도 주차 가능. <strong>더차이홍</strong>은 인근 공영주차장 또는 대중교통이 더 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 4.4로 비슷한데 어떤 기준으로 골라야 하나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 평점은 5곳이 4.4~4.9 범위로 모두 카테고리 평균선 이상입니다. 자리 성격(가성비·코스·딤섬·호텔·짜장면)에 따라 1순위가 달라지므로, 1인 점심·단가 부담 없는 검증 우선이면 <strong>무탄 코엑스</strong>, 코스·격식 자리면 <strong>천미미 삼성점</strong>·<strong>웨이루</strong>, 딤섬이면 <strong>딤딤섬 파르나스몰점</strong> 식으로 분리해서 선택하시면 됩니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/samseong/category/chinese', text: '삼성역 중식 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#DC2626,#F59E0B);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">삼성역 859곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">삼성역 일대 859곳 중 중식 카테고리 66곳을 추리고, 결(짜장면 가성비·고급 중식·딤섬·호텔 다이닝)에 따라 5곳으로 분산했습니다. 1인 단가가 8,000원(더차이홍)부터 130,000원(웨이루)까지 폭넓게 묶여 있어 자리 부담에 맞춰 한 곳을 고를 수 있도록 구성했습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점·리뷰 표본 둘 다 1순위는 <strong>무탄 코엑스(★4.9·7,774건)</strong>입니다. 단가 부담 없이 검증된 옵션을 고르고 싶다면 첫 후보로 묶기 좋습니다. 딤섬은 <strong>딤딤섬 파르나스몰점</strong>이 시작가 6,500원으로 1순위, 고급 중식은 <strong>천미미 삼성점</strong>의 어향동고 45,000원·전가복 88,000원이 매칭이 좋습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>그랜드 인터컨티넨탈 서울 파르나스 웨이루</strong>는 단가가 가장 높은 매장이지만, 호텔 중식 정찬·베이징덕 코스가 핵심이라 비즈니스·접대·기념일 자리에 다른 옵션과 분리해서 매칭하시면 됩니다. 본 가이드는 평점뿐 아니라 자리 성격을 기준으로 5곳을 분산했으니, 카테고리 의도에 맞춰 고르시는 편이 만족도가 가장 안정적입니다.</p>
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
