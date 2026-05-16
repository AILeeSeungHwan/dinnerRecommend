// 삼성역 회식 5곳 — 코엑스·파르나스 단체석 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 21,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">코엑스·파르나스·테헤란로 일대에서 4~12인 회식 자리를 한 번에 수용할 수 있는 <strong>삼성역 회식 식당</strong> 5곳을 정리하였습니다. 삼성역 일대 859곳 중 단체 가능·회식 평가 매칭 매장 약 60곳에서 평점·리뷰 표본·메뉴 구성·자리 성격 4가지를 함께 본 결과 다섯 매장을 골랐습니다. 호텔 다이닝 단가부터 1만원대 캐주얼 회식까지 폭넓게 묶었으니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">859곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">단체 가능 60곳</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.6</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.1 ~ 4.9</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">9,074건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">9,900원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">CPK 단품 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 어떤 회식 자리에 어디가 맞나요', gradientStyle: { from: '#4338CA', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #4338CA">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">4~8인 캐주얼 회식이면 <strong>개성집</strong> — 평점 4.9·리뷰 2,655건, 삼겹살 14,000원·해산물·한식 모두 가능. 코엑스 단체석 캐주얼이면 <strong>캘리포니아 피자 키친 코엑스</strong> — 9,900원~25,900원, 4~12인 수용. 호텔 뷔페형 단체 식사면 <strong>이비스스타일앰배서더강남 프레쉬365다이닝</strong> — 리뷰 2,526건 표본 최대. 큰 자리 격식 회식이면 <strong>그랜드 키친</strong> — 파르나스 1층, 점심 173,000원·저녁 198,000원 뷔페형. 청담 한우곱창 정통이면 <strong>한가람식당</strong> — 곱창·대창·막창 200g 22,000원·★4.5.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 회식 자리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>단체 가능·회식 평가 매칭</strong> — 4~12인 단체석을 수용 가능한 매장만 후보</li>
<li><strong>리뷰 표본 1,000건 이상</strong> — 평균값을 신뢰할 수 있는 검증 표본 (한가람식당 예외 표기)</li>
<li><strong>가격대 분산</strong> — 1만원대 캐주얼·중간·호텔 다이닝 세 단계로 분산</li>
<li><strong>자리 성격 분산</strong> — 캐주얼·격식·뷔페형·정통 단일 매장 1곳씩 매칭</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">삼성역 일대 859곳 중 단체 가능·회식 평가가 함께 매칭된 매장은 약 60곳입니다. 그중 자리 성격(캐주얼·호텔·뷔페·정통)과 가격대를 분산해 한 페이지에서 5곳 모두 선택지가 되도록 구성했습니다. 같은 가격대에 비슷한 매장이 겹치면 평점·리뷰·운영 시간을 함께 보고 한 곳만 골랐습니다. 코엑스몰·파르나스·테헤란로 도보권을 우선해 회식 동선이 짧은 매장에 가중치를 뒀습니다.</p>`
    },

    { type: 'h2', id: 'gaeseong', text: '개성집 — 평점 4.9·리뷰 2,655건 캐주얼 회식 1순위', gradientStyle: { from: '#B91C1C', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240714_192%2F1720939872007l2YOe_JPEG%2FIMG_4729.jpeg" alt="개성집 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#B91C1C,#DC2626)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 캐주얼 회식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 2.7 · 리뷰 2,666건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000원~20,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍖 한식+해산물</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성역 인근에 위치한 한식·해산물·회식 매장입니다. <strong>평점 2.7점·리뷰 2,666건</strong>은 본 가이드 5곳 중 평점이 가장 높고 표본도 안정적입니다. 삼겹살 14,000원으로 단가 부담이 낮고, "점심 추천·가성비·한식·주차 가능" 평가가 함께 묶여 있어 4~8인 캐주얼 회식 1차 자리에 매칭이 좋습니다. 평일 11:00~22:00·주말 11:00~20:00 영업이라 점심·저녁 모두 가능합니다. 회식·데이트 평가가 함께 누적된 매장이라 격식 자리보다는 캐주얼한 식사 분위기에 더 가깝습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"재료 신선하다 · 서비스 친절하다 · 국물 맛 진하다 · 정성이 느껴진다" 같은 평이 자주 언급되었습니다. 한식 기본기와 서비스 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 한식+해산물 회식</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼겹살 (국내산)</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한식 정찬</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해산물 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드 정찬</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">국물 요리</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">단가 범위</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000~20,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성역 인근 · <strong>🕐 영업</strong> 평일 11:00~22:00 / 주말 11:00~20:00 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-562-9455
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/개성집" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 개성집 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'cpk', text: '캘리포니아 피자 키친 코엑스 — 단체석 캐주얼 회식', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240315_127%2F1710480272008QkqWi_JPEG%2FIMG_0184.jpeg" alt="캘리포니아 피자 키친 코엑스 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#C026D3,#7C3AED)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍕 코엑스 캐주얼 단체</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 1,054건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 9,900원~25,900원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📍 코엑스몰</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">영동대로 513 코엑스몰에 위치한 양식·버거 매장입니다. 평점 4.3점·리뷰 1,054건이 누적되었고, "피자·가족식사·코엑스·주차 가능·데이트" 평가가 함께 묶여 있어 4~12인 캐주얼 회식 자리에 매칭이 좋습니다. 시작가 9,900원·시그니처 25,900원선이라 1인 1만원~2만원선 단가에 회식을 마칠 수 있어, <strong>본 가이드 5곳 중 단가 부담이 가장 낮은 단체 옵션</strong>입니다. 22:00 영업이라 저녁 회식 1차로 가능하고, 코엑스몰 안 매장이라 2차 이동 동선이 짧습니다.</p>
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
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샐러드·사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">캐주얼 회식</span>
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

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'ibis', text: '이비스스타일앰배서더강남 프레쉬365다이닝 — 표본 최다 호텔 뷔페', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240419_201%2F1713511872008IMQwI_JPEG%2FIMG_2837.jpeg" alt="이비스스타일앰배서더강남 프레쉬365다이닝 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#0EA5E9,#1E40AF)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏨 호텔 뷔페</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 2,526건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 매장 안내</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📊 표본 최다</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">대치동 893-1 <strong>이비스 스타일 앰배서더 강남 호텔 2층</strong>에 위치한 뷔페형 다이닝입니다. 리뷰 <strong>2,526건은 본 가이드 5곳 중 표본이 가장 큰 회식 매장</strong>으로, 평균값을 신뢰할 수 있는 안정 옵션입니다. 평점 4.1은 본 가이드 평균(4.6) 아래이지만, 호텔 뷔페 특성상 메뉴 라인업이 광범위해 호불호가 갈리는 표본이 함께 쌓인 것으로 해석됩니다. "가성비·점심추천·주차 가능·단체 가능" 평가가 모두 매칭되어 있어, 격식 자리는 아니지만 <strong>예산 한정 단체 회식·축하 자리</strong>에 매칭이 좋습니다. 12:00 영업 시작.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"호텔 뷔페 가성비 좋다 · 메뉴 다양하다 · 단체 자리 수용력 좋다" 같은 평이 자주 언급되었습니다. 메뉴 다양성과 단가 부담이 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 가격대 — 호텔 뷔페형</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">점심 뷔페</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">저녁 뷔페</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">단체 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한식·양식 라인</p><p style="font-size:12px;color:#5f5e5a;margin:0">뷔페 포함</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디저트 라인</p><p style="font-size:12px;color:#5f5e5a;margin:0">뷔페 포함</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">와인 페어링</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">호텔 뷔페</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 대치동 893-1 이비스 스타일 앰배서더 강남 호텔 2층 · <strong>🕐 영업</strong> 12:00 시작 · <strong>🚗 주차</strong> 호텔 주차장 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/이비스스타일앰배서더강남 프레쉬365다이닝" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 이비스스타일앰배서더강남 프레쉬365다이닝 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'grand-kitchen', text: '그랜드 키친 — 파르나스 1층 격식 회식', gradientStyle: { from: '#7C3AED', to: '#C026D3' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250114_226%2F1736834312839GLi9P_JPEG%2FIMG_8273.jpeg" alt="그랜드 키친 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#7C3AED,#C026D3)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#7C3AED;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🎂 격식 회식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 리뷰 1,334건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 85,000원~198,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 사진 명소</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">테헤란로 521 <strong>그랜드 인터컨티넨탈 서울 파르나스 1층</strong>에 위치한 뷔페형 다이닝입니다. 평점 4.8점·리뷰 1,334건이 누적되었고, 사진 명소·웨이팅 맛집·단체 가능 평가가 모두 매칭됩니다. 주중 점심 173,000원·주중 저녁 198,000원으로 본 가이드 5곳 중 단가가 가장 높지만, 랍스터·양갈비를 포함한 그릴 라인업과 호텔 다이닝 특유의 서비스 만족도가 안정적입니다. 외부 거래처 접대·임원 회식·축하 자리에 매칭이 좋으며 사진 명소 평가가 함께 묶여 기념 사진까지 챙길 수 있습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 서비스 친절하다 · 분위기 좋다 · 랍스터·양갈비 인기" 같은 평이 자주 언급되었습니다. 호텔 다이닝 서비스와 그릴 라인업 만족도가 함께 묶이는 후기 패턴입니다.</p>
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
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">격식 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">사진 명소</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 테헤란로 521 그랜드 인터컨티넨탈 서울 파르나스 1층 · <strong>🕐 영업</strong> 점심·저녁 (사전 예약) · <strong>🚗 주차</strong> 호텔 주차장 · <strong>📞 전화</strong> 02-559-7575
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/그랜드 키친" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 그랜드 키친 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'hangaram', text: '한가람식당 — 청담 한우곱창·대창·막창 200g 22,000원', gradientStyle: { from: '#F59E0B', to: '#B91C1C' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240612_273%2F1718169872008yVdxR_JPEG%2FIMG_4729.jpeg" alt="한가람식당 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#F59E0B,#B91C1C)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F59E0B;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 한우곱창 정통</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 3.2 · 리뷰 1,016건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 9,000원~45,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📍 청담동</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">청담동 44-11에 위치한 한식·고기 매장입니다. 평점 3.2점·리뷰 1,016건이 누적되었고, 한우곱창·대창·막창 200g을 각각 22,000원에 단일가로 묶어 운영하는 곱창 정통 매장입니다. 한가람모듬 45,000원으로 4~6인 회식 자리에 매칭이 좋고, 한돈김치찌개 9,000원·봄동 비빔밥 10,000원 같은 단품으로 점심 동선도 함께 잡습니다. 10:00 영업 시작이라 점심·저녁 모두 가능하고, "회식·기분 좋음" 평가가 함께 묶여 있어 부서 회식·동기 모임에 매칭이 좋습니다. 청담동 위치라 삼성역 도보권은 아니지만 차량·택시로 5~10분 거리입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 소스 두 가지 다 만족스럽다 · 회식 자리 자주 옴" 같은 평이 자주 언급되었습니다. 한우 곱창류 단일 가격대와 소스 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한가람모듬</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우곱창 200g</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우대창 200g</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우막창 200g</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한돈김치찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">봄동 비빔밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · 신메뉴</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">곱창 단일가</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">청담동</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 청담동 44-11 · <strong>🕐 영업</strong> 10:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/한가람식당" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 한가람식당 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>개성집</strong><br><span style="font-size:11px;color:#888780">한식+해산물</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">2,655건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">10,000~20,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">캐주얼 회식 1순위</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>캘리포니아 피자 키친 코엑스</strong><br><span style="font-size:11px;color:#888780">양식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">1,054건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">9,900~25,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">코엑스 단체 캐주얼</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>이비스스타일앰배서더강남 프레쉬365다이닝</strong><br><span style="font-size:11px;color:#888780">호텔 뷔페</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.1<br><span style="font-size:11px;color:#888780">2,526건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">매장 안내</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 뷔페 단체</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>그랜드 키친</strong><br><span style="font-size:11px;color:#888780">호텔 다이닝</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">1,272건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#7C3AED">85,000~198,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">격식 회식·접대</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>한가람식당</strong><br><span style="font-size:11px;color:#888780">한우곱창</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">1,009건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">9,000~45,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">청담 곱창 정통 회식</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 회식 자리에 맞게', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍖 4~8인 캐주얼 회식 1차</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>개성집</strong> — 평점 4.9·리뷰 2,655건 검증, 삼겹살 14,000원·한식+해산물 라인업. 부담 없는 캐주얼 자리.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍕 코엑스 4~12인 단체</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>캘리포니아 피자 키친 코엑스</strong> — 9,900원~. 1인 1~2만원선 단가로 본 가이드 단체 옵션 중 가장 부담 없음.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🏨 호텔 뷔페 단체 식사</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>이비스스타일앰배서더강남 프레쉬365다이닝</strong> — 리뷰 2,526건 표본 최다, 가성비 호텔 뷔페 옵션.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💼 격식 회식·접대</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>그랜드 키친</strong> — 파르나스 1층, 주중 저녁 198,000원. 임원 회식·외부 접대·축하 자리에 적합.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 청담 곱창 정통 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>한가람식당</strong> — 한우곱창·대창·막창 200g 22,000원 단일가, 한가람모듬 45,000원으로 4~6인 자리 매칭.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>그랜드 키친</strong>은 기념일·주말 점심·저녁 시간대는 사전 예약 필수입니다. 임원 회식·외부 접대 자리는 2~3주 전 예약을 권장드립니다.</li>
<li><strong>이비스스타일앰배서더강남 프레쉬365다이닝</strong>은 호텔 2층 뷔페 매장이라 4~12인 단체 자리는 사전 예약 시 수용이 안정적입니다. 평일 점심 단가가 가장 저렴하므로 부서 회식·예산 한정 자리에 매칭이 좋습니다.</li>
<li><strong>개성집</strong>은 평일 22:00·주말 20:00까지 영업이라 회식 1차 자리는 18~19시 입장이 안정적입니다. 12~13시 점심 자리도 인기가 많으니 사전 자리 잡으시면 좋습니다.</li>
<li><strong>캘리포니아 피자 키친 코엑스</strong>는 코엑스몰 안 매장이라 12~13시·19시 피크엔 웨이팅이 있습니다. 단체 4인 이상은 사전 예약하시면 자리 회수 시간이 줄어듭니다.</li>
<li><strong>한가람식당</strong>은 청담동 위치라 삼성역에서 도보권 밖입니다. 차량·택시로 5~10분 거리이며, 회식 후 1·2차 동선 잡으실 때 차량 이동을 감안하시는 편이 좋습니다.</li>
<li>호텔 다이닝 매장(그랜드 키친·프레쉬365다이닝)은 시즌 단가 변동이 자주 있어 본 가이드 기준일(2026년 5월) 이후 최신 매장 공지가 우선입니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 삼성역 캐주얼 회식 1순위는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>개성집</strong>이 1순위입니다. 평점 4.9·리뷰 2,655건은 본 가이드 5곳 중 평점이 가장 높고 표본도 안정적이며, 삼겹살 14,000원·한식+해산물 라인업이 4~8인 자리에 매칭이 좋습니다. 코엑스 안 단체 자리면 <strong>캘리포니아 피자 키친 코엑스</strong>(9,900원~)가 차순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 호텔 뷔페 단체 회식은 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 가성비 우선이면 <strong>이비스스타일앰배서더강남 프레쉬365다이닝</strong>이 1순위입니다. 리뷰 2,526건의 표본 크기가 본 가이드 5곳 중 가장 큰 호텔 뷔페 매장입니다. 격식 회식·외부 접대면 <strong>그랜드 키친</strong>(주중 저녁 198,000원)이 차순위로 더 격식 있는 자리에 적합합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 단체석을 운영하나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 모든 매장이 단체 가능 평가가 매칭되어 있습니다. <strong>그랜드 키친·프레쉬365다이닝</strong>은 호텔 다이닝 특성상 사전 예약 단체 자리가 가장 안정적이며, <strong>개성집·한가람식당·캘리포니아 피자 키친 코엑스</strong>는 4~6인 자리 사전 예약이 권장됩니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 청담 한가람식당이 삼성역 회식에 적합한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 청담동 위치라 삼성역에서 도보권은 아니지만 차량·택시로 5~10분 거리입니다. 한우곱창·대창·막창 200g 22,000원 단일가가 본 가이드 한우 곱창 카테고리의 핵심 매장이라 회식 자리에 매칭이 좋고, 평점 4.5·리뷰 1,009건으로 검증 표본도 안정적입니다. 다만 차량 이동을 감안하셔야 하므로 1·2차 동선이 짧은 자리면 다른 옵션을 우선 고려하시는 편이 좋습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 4.1인 매장도 신뢰할 수 있나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>이비스스타일앰배서더강남 프레쉬365다이닝</strong>(4.1)은 본 가이드 5곳 중 평점이 가장 낮습니다. 호텔 뷔페 특성상 메뉴 라인업이 광범위해 호불호가 갈리는 표본이 함께 쌓인 것으로 해석됩니다. 다만 리뷰 2,526건은 본 가이드 5곳 중 표본 최다이며, 가성비·단체 가능 평가가 함께 묶여 있어 예산 한정 단체 회식 자리에는 매칭이 좋습니다. 평점 우선이면 <strong>개성집</strong>(4.9)·<strong>그랜드 키친</strong>(4.5)·<strong>한가람식당</strong>(4.5)이 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 1인당 회식 예산을 어떻게 잡으면 좋을까요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 1만원대 캐주얼이면 <strong>캘리포니아 피자 키친 코엑스</strong>(9,900원~) 또는 <strong>개성집</strong>(10,000~20,000원). 2~5만원대면 <strong>한가람식당</strong>(곱창 200g 22,000원·한가람모듬 45,000원). 호텔 뷔페 가성비면 <strong>이비스스타일앰배서더강남 프레쉬365다이닝</strong>(매장 안내), 격식 자리는 <strong>그랜드 키친</strong>(주중 저녁 198,000원) 식으로 자리 부담에 맞춰 분리하시면 됩니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/samseong/category/group', text: '삼성역 회식 식당 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#4338CA,#0EA5E9);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">삼성역 859곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">삼성역 일대 859곳에서 단체 가능·회식 평가 매칭 매장 60곳을 추리고, 자리 성격(캐주얼·코엑스·호텔 뷔페·격식·곱창 정통)을 다섯 갈래로 나누어 5곳을 정리했습니다. 1인 단가가 9,900원(캘리포니아 피자 키친)부터 198,000원(그랜드 키친)까지 폭넓게 묶여 있어 회식 예산에 맞춰 한 곳을 고를 수 있도록 구성했습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 우선 1순위는 <strong>개성집(★4.9·2,655건)</strong>, 호텔 뷔페 표본 최다는 <strong>이비스스타일앰배서더강남 프레쉬365다이닝(2,526건)</strong>입니다. 두 매장이 자리 성격이 달라 검색 의도가 겹치지 않으니, 캐주얼 자리면 개성집, 단가 부담 줄이는 단체 뷔페면 프레쉬365다이닝 식으로 분리해서 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>이비스스타일앰배서더강남 프레쉬365다이닝</strong>은 평점 4.1로 본 가이드 평균(4.6) 아래입니다. 호텔 뷔페 특성상 메뉴 다양성이 광범위해 호불호 표본이 함께 쌓인 것으로 해석되며, 리뷰 2,526건의 표본 크기와 단체 수용력으로 가성비 단체 옵션에 포함했습니다. 평점 우선이면 다른 4곳(★4.3~4.9)이 우선 후보입니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 호텔 다이닝 매장은 시즌 단가 변동이 자주 있어 방문 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
