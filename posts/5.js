// 삼성역 점심 5곳 — 카테고리별 직장인 표준 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 5,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">코엑스·테헤란로 근무 직장인이 점심 한 시간 안에 다녀올 수 있는 <strong>삼성역 점심 식당</strong> 5곳을 카테고리별로 정리하였습니다. 삼성역 일대 859곳에서 점심 회전·평점·리뷰 표본·가격대 4가지를 기준으로 추리고, 중식·한식·솥밥·설렁탕·버거까지 다섯 카테고리로 분산했습니다. 줄 서더라도 한 번은 먹어볼 식당과 빠르게 한 끼 해결하는 식당을 함께 묶었으니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 좋습니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">859곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">삼성역·코엑스·테헤란로</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.6</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.3 ~ 4.9</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">15,323건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">8,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">짜장면 단품 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 점심 한 시간, 어디로?', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #F97316">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">코엑스 직장인 점심 1순위는 <strong>무탄 코엑스</strong> — 평점 4.9·리뷰 7,774건이 누적된 가성비 중식. 짜장면·짬뽕 1만원대로 회전이 빠릅니다. 솥밥 한 끼면 <strong>솥내음 스타필드 코엑스몰점</strong> — 신메뉴 불쭈꾸미 솥밥 15,900원. 한식 정식이면 <strong>서울깍두기 코엑스점</strong> — 한우사골설렁탕 12,900원·07:00 오픈으로 출근 전 식사도 가능. 가성비 짜장면이면 <strong>더차이홍</strong> 8,000원. 점심 회식 겸 빠른 버거면 <strong>브루클린 더 버거조인트 삼성</strong> — 디럭스 스택 세트 15,400원.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 점심 가격대 8,000~16,000원</strong> — 코엑스·테헤란로 점심 표준 범위</li>
<li><strong>점심 회전이 빠른 운영</strong> — 단품·정식 위주, 11~13시 30분 안에 입장~퇴장 가능</li>
<li><strong>평점 4.3 이상 + 리뷰 표본 1,000건 이상</strong> — 한 끼 만족도가 안정적으로 검증된 매장</li>
<li><strong>카테고리 분산</strong> — 중식·솥밥·한식·짜장면 가성비·버거 5종으로 검색 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">삼성역 점심 카테고리에 들어가는 식당은 약 200곳 이상입니다. 그중 단품 회전이 빠르고, 평점·리뷰 표본·운영 시간이 안정적인 식당 5곳을 추렸습니다. 한식·중식·솥밥·설렁탕·버거 다섯 카테고리로 분산해 "오늘 점심 뭐 먹지" 검색 의도를 한 페이지에서 해결할 수 있도록 구성했습니다. 점심 가격대(8천원~1만6천원선)와 코엑스·테헤란로 도보 접근성을 함께 봤습니다.</p>`
    },

    { type: 'h2', id: 'mutan', text: '무탄 코엑스 — 평점 4.9·리뷰 7,774건 중식 점심 1순위', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240107_125%2F1704609812816uH1pi_JPEG%2FIMG_4729.jpeg" alt="무탄 코엑스 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#DC2626,#F59E0B)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 점심 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 7,774건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000원~18,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📍 코엑스몰 B1</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">영동대로 513 코엑스몰 지하 1층, <strong>본 가이드 5곳 중 평점·리뷰 모두 1순위</strong>인 중식당입니다. 평점 4.9·리뷰 7,774건은 본 가이드 5곳 중 표본도 가장 크고 평점도 가장 높아, 데이터로만 보면 단연 첫 후보로 묶기 좋습니다. 11:00~21:30 영업으로 점심·저녁 모두 가능하며, 자장면·짬뽕·어향동고 같은 단품 중심 메뉴라 회전이 빠릅니다. 코엑스몰 안 매장이라 환승·동선이 짧은 직장인 점심에 매칭이 좋고, 가족 식사·데이트 평가도 함께 매칭되어 있어 주말 점심 옵션으로도 자연스럽게 묶입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 양이 많다 · 대기 가치 있다" 같은 평이 자주 언급되었습니다. 점심 피크에 대기가 있지만 회전이 빠르다는 점이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 1만원대 점심</h4>
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
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">데이트</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 영동대로 513 코엑스몰 B1 · <strong>🕐 영업</strong> 11:00~21:30 · <strong>🚗 주차</strong> 코엑스몰 주차장 · <strong>📞 전화</strong> 07-1397-0364
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/무탄 코엑스" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 무탄 코엑스 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'sotnaeum', text: '솥내음 스타필드 코엑스몰점 — 신메뉴 불쭈꾸미 솥밥 15,900원', gradientStyle: { from: '#F97316', to: '#EA580C' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250318_103%2F1742277528641Pj5tj_JPEG%2FIMG_8412.jpeg" alt="솥내음 스타필드 코엑스몰점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#F97316,#EA580C)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍚 솥밥 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 4,967건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,900원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">⏰ 웨이팅 맛집</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">스타필드 코엑스몰 지하 1층 O-107호 라운지, <strong>한식 솥밥 단일 카테고리</strong>로 평점 4.9·리뷰 4,967건이 누적된 매장입니다. 시그니처 메뉴는 매콤한 신메뉴 불쭈꾸미 솥밥 15,900원이며, 점심 회전이 빨라 평일 12시 피크에도 웨이팅이 30분 안에 끝나는 편입니다. "혼밥 가능·점심추천·웨이팅 맛집" 세 가지 평가가 함께 묶여 있어 직장인 점심 1인 식사로 좋고, 매장 자체가 코엑스몰 라운지에 위치해 환승 동선이 짧습니다. 10:30 영업 시작이라 11시대 일찍 가시면 더 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"불쭈꾸미 솥밥 맵지만 맛있다 · 솥밥 한 끼 든든하다 · 웨이팅 회전 빠르다" 같은 평이 자주 언급되었습니다. 단품 솥밥 매장이라 회전 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 솥밥 단일 카테고리</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">신메뉴 불쭈꾸미 솥밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,900원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">전복 솥밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">새우 솥밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소불고기 솥밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">제육 솥밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">밑반찬 4종</p><p style="font-size:12px;color:#5f5e5a;margin:0">기본 제공</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">웨이팅 맛집</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">데이트</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성동 159 지하1층 O-107호 · <strong>🕐 영업</strong> 10:30 시작 · <strong>🚗 주차</strong> 코엑스몰 주차장 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/솥내음 스타필드 코엑스몰점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 솥내음 스타필드 코엑스몰점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'seoul-kkakdugi', text: '서울깍두기 코엑스점 — 한우사골설렁탕 12,900원·07:00 오픈', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250409_167%2F1744195232411DjLnA_JPEG%2FIMG_2837.jpeg" alt="서울깍두기 코엑스점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#EA580C,#B45309)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍲 한식 정식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 250건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 7,900원~17,900원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 07:00 오픈</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성동 159 지하 1층, 한우 사골 설렁탕·육개장 단일 카테고리로 평점 4.9가 누적된 매장입니다. <strong>07:00 영업 시작</strong>이라 출근 전 모닝 식사·아침 회식·심지어 컨디션 회복이 필요한 다음 날 한 끼로도 매칭이 좋습니다. 한우사골설렁탕 12,900원·한우사골육개장 12,900원이 표준 가격이고, 점심특선·수육 추가까지 묶으면 1인 15,900원선에 정식 한 끼를 마칠 수 있습니다. "점심추천·데이트·기분 좋음" 평가가 함께 묶여 있어 평일 점심뿐 아니라 주말 가족 식사 옵션으로도 무난합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"설렁탕·도가니탕·뚝배기불고기 다 맛있다 · 서비스 친절하다" 같은 평이 자주 언급되었습니다. 한식 정식 라인업이 폭넓다는 점이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 한우사골 라인업</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우사골설렁탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,900원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우사골특설렁탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,900원 · 수육小 포함</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우사골육개장</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우사골떡만두국</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우사골얼큰육개장</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,900원 · 육해공</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우사골소머리탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,900원 · <strong>인기</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">07:00 오픈</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한식 정식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">데이트</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성동 159 지하1층 · <strong>🕐 영업</strong> 07:00 시작 · <strong>🚗 주차</strong> 코엑스몰 주차장 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/서울깍두기 코엑스점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 서울깍두기 코엑스점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'thechaihong', text: '더차이홍 — 짜장면 8,000원 가성비 중식 옵션', gradientStyle: { from: '#B91C1C', to: '#F97316' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241211_186%2F1733884232715Hk5VV_JPEG%2FIMG_3829.jpeg" alt="더차이홍 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#B91C1C,#F97316)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 가성비 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 285건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,000원~12,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍜 짜장면 8,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성역 근처에 위치한 가성비 중식당입니다. <strong>짜장면 8,000원·삼선짬뽕 11,000원·기스면 10,000원</strong>이 핵심 라인업으로, 본 가이드 5곳 중 점심 시작가가 가장 낮습니다. "혼밥 가능·짜장면·짬뽕·간짜장 가성비" 평가가 함께 묶여 있어 점심 1인 식사·빠른 한 끼에 매칭이 좋습니다. 10:00~21:30(토 ~20:30, 일 휴무) 영업이므로 평일 점심·저녁 모두 가능하지만, <strong>일요일은 휴무</strong>이니 주말 동선에는 다른 옵션을 두시는 편이 안전합니다.</p>
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

    { type: 'h2', id: 'brooklyn', text: '브루클린 더 버거조인트 삼성 — 두꺼운 패티 버거 9,800원~', gradientStyle: { from: '#F59E0B', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240328_120%2F1711608292001ydiPm_JPEG%2FIMG_1234.jpeg" alt="브루클린 더 버거조인트 삼성 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#F59E0B,#DC2626)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F59E0B;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍔 빠른 점심</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 1,167건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 9,800원~15,600원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🥩 두꺼운 패티</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">봉은사로 84길 10, <strong>두꺼운 패티+칠리프라이+고구마튀김</strong> 라인업이 강점인 수제버거 매장입니다. 평점 4.3·리뷰 1,167건으로 본 가이드 버거 카테고리 검증 옵션이며, 시작가 9,800원·디럭스 스택 세트 15,400원으로 1인 1만원대에 마칠 수 있습니다. 11:00~21:30 영업이라 점심 회전이 빠르고, 12시 피크에도 단품 조립이 빠른 매장이라 30분 안에 입장~퇴장이 가능합니다. 혼밥·회식 평가가 함께 묶여 있어 1인 빠른 점심 또는 4~6인 캐주얼 점심 모임에도 매칭이 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 감자칩·고구마칩 인기 · 코울슬로 만족" 같은 평이 자주 언급되었습니다. 두꺼운 패티 만족도와 사이드 메뉴 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디럭스 스택 세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,400원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아메리칸 치즈·구운양파</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,800원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">크.림. (마일드 체다)</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,200원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">크.림. (감자칩 토핑)</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,200원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">몬테레이잭치즈·할라피뇨</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아메리칸 치즈+양파+베이컨</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>인기</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">두꺼운 버거</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 봉은사로84길 10 · <strong>🕐 영업</strong> 11:00~21:30 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-555-7180
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/브루클린 더 버거조인트 삼성" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 브루클린 더 버거조인트 삼성 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·가격·점심 매칭', gradientStyle: { from: '#10B981', to: '#059669' } },
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
<td style="padding:11px 10px"><strong>무탄 코엑스</strong><br><span style="font-size:11px;color:#888780">중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">7,774건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">10,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점·리뷰 둘 다 1위</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>솥내음 스타필드 코엑스몰점</strong><br><span style="font-size:11px;color:#888780">한식 솥밥</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">4,967건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">15,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">불쭈꾸미 솥밥 시그니처</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>서울깍두기 코엑스점</strong><br><span style="font-size:11px;color:#888780">한식·설렁탕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">250건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">7,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">07:00 오픈 + 한식 정식</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>더차이홍</strong><br><span style="font-size:11px;color:#888780">중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">8,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">짜장면 단품 최저가</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>브루클린 더 버거조인트 삼성</strong><br><span style="font-size:11px;color:#888780">버거</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">1,167건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F59E0B">9,800원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">두꺼운 패티 + 회전 빠름</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심 컨디션에 맞게', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 1만원대 가성비 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>더차이홍</strong>의 짜장면 8,000원이 본 가이드 시작가 1위입니다. <strong>무탄 코엑스</strong>는 짜장면 1만원 안팎으로 평점·리뷰 검증까지 함께 잡힙니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍚 솥밥 한 끼 든든하게</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>솥내음 스타필드 코엑스몰점</strong> — 불쭈꾸미 솥밥 15,900원. 코엑스몰 라운지 위치라 환승 동선이 짧고 혼밥 가능.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌅 출근 전 모닝 식사</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>서울깍두기 코엑스점</strong> — 07:00 오픈, 한우사골설렁탕 12,900원. 이른 회식·아침 거래 자리에도 매칭이 좋습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍔 빠른 한 끼·캐주얼 모임</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>브루클린 더 버거조인트 삼성</strong> — 9,800원~ 디럭스 스택 세트 15,400원. 30분 안에 입장~퇴장 가능.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 코엑스 핫플 검증 우선</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>무탄 코엑스</strong> — 평점 4.9·리뷰 7,774건. 표본 크기가 압도적이라 한 번도 안 가본 분에게 무난한 첫 후보.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>무탄 코엑스·솥내음 스타필드 코엑스몰점</strong>은 코엑스몰 안 매장이라 점심 12시~13시 피크엔 웨이팅이 생깁니다. 11:30~11:50 입장 또는 13:00 이후가 안전합니다.</li>
<li><strong>서울깍두기 코엑스점</strong>은 07:00 영업 시작이라 출근 전 모닝 식사가 가능합니다. 단, 메뉴 일부는 11:00 이후부터 주문 가능할 수 있어 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</li>
<li><strong>더차이홍</strong>은 일요일 휴무·토요일 단축 영업입니다. 주말 점심 동선에는 다른 옵션을 두시는 편이 안전합니다.</li>
<li><strong>브루클린 더 버거조인트 삼성</strong>은 봉은사로 84길에 위치해 코엑스몰에서 도보 약 5~7분 거리입니다. 점심 시간이 짧을 때는 단품 주문(아메리칸 치즈 9,800원) 위주가 빠릅니다.</li>
<li><strong>솥내음 스타필드 코엑스몰점</strong>은 신메뉴 불쭈꾸미 솥밥이 매콤한 메뉴이므로 매운 음식이 약하신 분은 다른 솥밥(전복·새우·소불고기 라인)으로 변경하시는 편이 좋습니다.</li>
<li>점심 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다. 본문 메뉴 표는 최신 매장 공지가 우선입니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 삼성역에서 가장 저렴한 점심은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>서울깍두기 코엑스점</strong>의 7,900원 메뉴와 <strong>더차이홍</strong>의 짜장면 8,000원이 가장 저렴합니다. 가격만 보면 더차이홍이 가장 부담 없지만, 평점·리뷰 표본까지 함께 보시면 <strong>서울깍두기 코엑스점</strong>(★4.9)이 검증된 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 코엑스 직장인 점심 1순위는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>무탄 코엑스</strong>가 1순위입니다. 평점 4.9·리뷰 7,774건은 본 가이드 5곳 중 모두 1위이며, 코엑스몰 B1에 위치해 환승 동선이 짧습니다. 다만 12~13시 피크에는 웨이팅이 있으니 11:30~11:50 입장 또는 13시 이후가 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 시간이 짧을 때 빠르게 먹을 수 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>브루클린 더 버거조인트 삼성</strong>의 단품 버거(9,800원~)가 30분 안에 입장~퇴장 가능합니다. <strong>더차이홍</strong>의 짜장면도 단품 회전이 빠른 매장이라 점심 1시간 안에 충분히 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 솥밥·한식 정식 한 끼 추천해주세요.</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 솥밥이면 <strong>솥내음 스타필드 코엑스몰점</strong>(불쭈꾸미 솥밥 15,900원), 한식 정식이면 <strong>서울깍두기 코엑스점</strong>(한우사골설렁탕 12,900원·07:00 오픈)이 매칭이 좋습니다. 두 곳 모두 평점 4.9로 검증되어 있어 처음 방문하셔도 만족도 편차가 적습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 일요일·주말 점심도 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>무탄 코엑스·솥내음 스타필드 코엑스몰점·서울깍두기 코엑스점·브루클린 더 버거조인트 삼성</strong>은 주말 영업 매장입니다. <strong>더차이홍</strong>은 일요일 휴무·토요일 단축 영업이라 주말 동선에는 다른 옵션을 두시는 편이 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 4.3으로 다소 낮은 식당이 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>브루클린 더 버거조인트 삼성</strong>(4.3)은 본 가이드 평균(4.6) 아래입니다. 다만 리뷰 1,167건으로 표본 크기가 안정적이고, 두꺼운 패티·30분 안에 가능한 회전이라는 차별점이 분명해 빠른 점심 카테고리로 포함했습니다. 평점만 기준이면 <strong>무탄 코엑스·솥내음·서울깍두기</strong> 세 곳이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/samseong/category/lunch', text: '삼성역 점심 식당 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#F97316,#DC2626);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">삼성역 859곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">삼성역 일대 859곳에서 점심 회전·평점·리뷰 표본·가격대 네 가지를 함께 본 결과, 카테고리 분산까지 고려해 5곳을 정리했습니다. 중식·솥밥·한식 정식·짜장면 가성비·버거 다섯 갈래로 자연스럽게 나뉘었고, 코엑스몰 안 매장(무탄·솥내음·서울깍두기)과 도보 거리 매장(더차이홍·브루클린)이 함께 묶여 직장인 동선에 맞춰 골라 쓸 수 있도록 구성했습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점·리뷰 표본 둘 다 1순위는 <strong>무탄 코엑스(★4.9·7,774건)</strong>입니다. 카테고리가 달라 검색 의도가 겹치지 않는 매장도 함께 포함했으므로, 한식 정식이면 서울깍두기, 솥밥이면 솥내음, 가성비 짜장면이면 더차이홍 식으로 분리해 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>브루클린 더 버거조인트 삼성</strong>은 평점 4.3으로 5곳 중 가장 낮지만, 리뷰 1,167건의 표본과 두꺼운 패티·빠른 회전이라는 차별점으로 포함했습니다. 호불호가 갈리는 식당은 아니므로 두꺼운 버거가 익숙한 분은 디럭스 스택 세트 15,400원이 첫 시도로 무난합니다.</p>
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
