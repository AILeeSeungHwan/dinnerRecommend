// 삼성역 국밥·해장 맛집 추천 5곳 — 식당별 unique 콘텐츠
const post = {
  id: 41,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>삼성역</strong> 일대에서 해장국·곰탕·설렁탕·청국장 한 그릇으로 점심을 끝내고 싶을 때 갈 만한 식당 5곳을 정리했습니다. 코엑스·테헤란로 직장인이 많은 동네라 국밥·해장 카테고리만 따로 추려, 평점·리뷰 표본·메뉴 구성·영업시간 4가지 기준으로 골랐습니다. 숙취 다음 날 해장, 빠른 점심 한 끼, 든든한 한식 정식까지 상황별 1순위가 다르니 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">859곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">삼성·대치·코엑스 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.5</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.1 ~ 4.7</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">4,839건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">8,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">곰탕 1인 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">숙취 다음 날 선지·소고기 해장이면 <strong>명인대동양평해장국 삼성직영점</strong> — 평점 4.7·해장 메뉴 8종, 09:00 오픈. 출근 전 이른 해장이면 <strong>일품양평해장국 강남대치점</strong> (07:30 오픈, 평점 4.7). 국물 깔끔한 곰탕 한 그릇이면 <strong>이여곰탕 강남삼성</strong> (평점 4.3·리뷰 1,905건, 곰탕 8,000원선). 점심에 청국장 백반 정식이면 <strong>도명골 청국장</strong> (평점 4.7·리뷰 1,371건, 11,000원 정식). 설렁탕·소고기국밥 정석이면 <strong>이남장 삼성점</strong> (리뷰 1,903건·블로그 596건).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 메뉴 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>국밥·해장 카테고리 매칭</strong> — 해장국·곰탕·설렁탕·청국장으로 한 끼 선택지 분산</li>
<li><strong>네이버 플레이스 리뷰 표본</strong> — 평균값이 흔들리지 않을 만큼 리뷰가 쌓인 식당 우선</li>
<li><strong>평점 4.0점 이상</strong> — 국밥·해장 카테고리 평균선 기준</li>
<li><strong>영업시간 차별화</strong> — 07:30·09:00 이른 오픈 vs 점심 정식 vs 24시간 운영 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">삼성역·대치·코엑스 일대 859곳 중 국밥·해장 한 그릇으로 점심이 해결되는 식당을 먼저 골라낸 뒤, 평점·리뷰 표본·메뉴 구성·영업시간이 안정적인 5곳을 추렸습니다. 같은 메뉴 중복을 피해 선지해장국·곰탕·설렁탕·청국장으로 분산했고, 평점이 다소 낮은 식당(이남장 삼성점 4.1)은 <strong>리뷰·블로그 표본 크기</strong>가 압도적일 때만 포함했습니다.</p>`
    },

    { type: 'h2', id: 'daedong', text: '명인대동양평해장국 삼성직영점 — 선지·소고기 해장 메뉴 8종 1순위', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250607_91%2F1749269988937Uc6VG_PNG%2F%25C7%25C3%25B7%25B9%25C0%25CC%25BD%25BA%25BF%25EB.png" alt="명인대동양평해장국 삼성직영점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 해장 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 461건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000원~44,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>선지·소고기 해장국 종류가 8가지로 가장 다양한 식당</strong>입니다. 삼성동 156-7, 평점 4.7·리뷰 461건으로 본 가이드 해장국 카테고리에서 평점 공동 1위입니다. 09:00 오픈이라 출근 직후·점심 모두 가능하고, 흑마늘 보양 해장국부터 양선지·소머리국밥·내장탕까지 메뉴 폭이 넓어 일행 입맛이 갈려도 한 곳에서 해결됩니다. 매장 주차가 되어 차로 오는 직장인 점심에도 무난합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물 맛이 진하다 · 서비스가 친절하다 · 매장 분위기가 깔끔하다" 같은 평이 자주 언급되었습니다. 해장 메뉴 만족도와 응대가 함께 묶여 누적되는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250607_91%2F1749269988937Uc6VG_PNG%2F%25C7%25C3%25B7%25B9%25C0%25CC%25BD%25BA%25BF%25EB.png" alt="명인대동양평해장국 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250601_110%2F1748771501411fHBXO_PNG%2F%25C1%25A6%25B8%25F1%25C0%25BB-%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001_%252821%2529.png" alt="명인대동양평해장국 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250603_239%2F1748928789234XLG9t_PNG%2F%25BE%25E7%25BC%25B1%25C1%25F6.png" alt="명인대동양평해장국 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">갓삶은 양선지해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">갓삶은 얼큰 양선지해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 소머리국밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">흑마늘 보양 대동해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">얼큰 소고기해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특내장탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">해장 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">단체 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 강남구 삼성동 156-7 · <strong>🕐 영업</strong> 09:00 시작 (매장 공지 우선) · <strong>🚗 주차</strong> 매장 주차 가능 · <strong>📞 전화</strong> 매장 문의
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/명인대동양평해장국 삼성직영점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 명인대동양평해장국 삼성직영점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'ilpoom', text: '일품양평해장국 강남대치점 — 07:30 오픈, 출근 전 이른 해장', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250922_293%2F1758524852319lcFaA_JPEG%2F1.jpg" alt="일품양평해장국 강남대치점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🌅 이른 해장 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 199건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 9,000원~38,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>07:30에 문을 여는 게 가장 큰 무기</strong>입니다. 대치동 903-12 지상 1층, 평점 4.7로 본 가이드 평점 공동 1위지만 리뷰 199건으로 표본은 5곳 중 가장 작아 이 점을 함께 짚어 둡니다. 다만 출근 전 해장이 필요한 테헤란로 직장인이 아침 일찍 한 그릇 비우고 출근하기 좋은 시간대 차별점이 명확합니다. 순대내장탕 9,000원이 최저가 라인이며 매장 주차도 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 아침 일찍 먹기 좋다 · 점심에 부담 없다" 같은 평이 자주 언급되었습니다. 이른 영업시간과 한 끼 부담이 적은 가격이 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250922_293%2F1758524852319lcFaA_JPEG%2F1.jpg" alt="일품양평해장국 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250922_171%2F17585248531060UGl9_JPEG%2F2.JPG" alt="일품양평해장국 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250922_200%2F1758524852637XxA4n_JPEG%2F3.jpg" alt="일품양평해장국 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순대내장탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>최저가·시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해장국 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원선~</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">단체·세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">35,000~38,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">07:30 오픈</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 강남구 대치동 903-12 지상 1층 · <strong>🕐 영업</strong> 07:30 시작 (매장 공지 우선) · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 매장 문의
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/일품양평해장국 강남대치점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 일품양평해장국 강남대치점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'iyeo', text: '이여곰탕 강남삼성 — 국물 깔끔한 곰탕, 리뷰 1,905건 검증', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240830_239%2F1725003742921s6FqD_PNG%2F%25B8%25DE%25B4%25BA%25C6%25C7%2528%25C3%25D6%25BD%25C5%2529.png" alt="이여곰탕 강남삼성 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥣 곰탕 검증 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 1,905건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,000원~12,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 화~토 24시간</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.3은 본 가이드 평균(4.5) 아래지만, <strong>리뷰 1,905건은 5곳 중 가장 많은 표본</strong>이라 검증 신뢰도가 높습니다. 삼성로 548, 곰탕 1인 8,000원선에서 시작해 가격 부담이 작고 화~토 24시간 운영이라 늦은 점심·야간 한 그릇으로도 열려 있습니다. 메뉴 구성이 곰탕·쌀국수곰탕 중심으로 단순해 회전이 빠르고, 국물 깔끔하다는 평가가 누적된 곳입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물이 깔끔하다 · 곰탕이 담백하다 · 한 그릇 가성비가 좋다" 같은 평이 자주 언급되었습니다. 단순한 메뉴 구성과 24시간 운영이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (곰탕 전문)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">곰탕 (1인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원선 · <strong>최저가·시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">쌀국수곰탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특곰탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수육·추가</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">곰탕 전문</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">24시간 운영</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">국물 깔끔</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 강남구 삼성로 548 · <strong>🕐 영업</strong> 10:00~자정 (화~토 24시간, 매장 공지 우선) · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 매장 문의
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/이여곰탕 강남삼성" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 이여곰탕 강남삼성 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'domyeong', text: '도명골 청국장 — 11,000원 청국장 정식, 점심 한 끼 정석', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230519_120%2F1684507522641zuYBJ_PNG%2F96AD6105-9674-4183-AD0D-5AC9BF326385.png" alt="도명골 청국장 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍚 점심 정식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 1,371건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 11,000원~33,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>평점 4.7·리뷰 1,371건에 블로그 563건까지 누적된 오피스 점심 강자</strong>입니다. 삼성1동 166-3, 청국장 정식이 11,000원 단일 가격대로 깔끔하게 정리되어 일행과 따로 계산 고민 없이 주문하기 편합니다. 청국장에 육회비빔밥·생선·제육·수육 중 하나를 조합하는 구성이라 점심 한 끼로 든든하고, 11:00~21:30 영업이라 점심·저녁 모두 가능합니다. 일요일은 휴무이므로 평일·토요일 방문이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"오피스 점심으로 좋다 · 가성비가 좋다 · 정식 구성이 푸짐하다" 같은 평이 자주 언급되었습니다. 단일 가격 정식과 점심 회전이 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230519_120%2F1684507522641zuYBJ_PNG%2F96AD6105-9674-4183-AD0D-5AC9BF326385.png" alt="도명골 청국장 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220620_278%2F1655723246520Kj34h_JPEG%2F90F8386E-5A8F-4D54-B5EC-B463E57A5F65.jpeg" alt="도명골 청국장 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220620_222%2F1655723240950zQSJb_JPEG%2F8F7178E1-F78A-409B-B369-17042DB9BF99.jpeg" alt="도명골 청국장 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">청국장 + 육회비빔밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">청국장 + 제육</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">청국장 + 수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">두부김치</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">육회</p><p style="font-size:12px;color:#5f5e5a;margin:0">28,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">33,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">오피스 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">리뷰 많음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 강남구 삼성1동 166-3 · <strong>🕐 영업</strong> 11:00~21:30 (일 휴무) · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1457-7015
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/도명골 청국장" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 도명골 청국장 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'inamjang', text: '이남장 삼성점 — 설렁탕·소고기국밥 정석, 표본 최다급', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyMjEwMTJfMjUw/MDAxNjY1NTU2NzQ3NjAx.BJz9DTr91wPFV7YFAvcfuRYp2qE7nlredwKXzV6Vv4Yg.5NuCl1bFdyjISRwblj-Gh7rQrSDxYesMhAU8eU5NM3Ug.JPEG.santajoajoa/fe43%EF%BC%BF54%EF%BC%BFi1.jpg?type=w966" alt="이남장 삼성점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 1,903건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 설렁탕·국밥 단품</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📝 블로그 596건</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.1점은 본 가이드 5곳 중 가장 낮습니다. 다만 <strong>리뷰 1,903건 + 블로그 596건</strong>으로 표본 크기가 본 가이드 최상위권이라, 설렁탕·소고기국밥이라는 정석 메뉴를 두고 검색 의도가 가장 두꺼운 식당입니다. 삼성1동 165-12, 10:00~21:00 영업이라 점심·저녁 모두 가능합니다. 호불호가 갈리는 표본이 함께 누적된 것으로 보이므로, 설렁탕·소고기국밥 같은 메인 메뉴 위주로 주문하시면 만족도 편차가 줄어듭니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"설렁탕이 익숙한 맛이다 · 소고기국밥이 든든하다 · 삼성역에서 무난하다" 같은 평이 자주 언급되었습니다. 정석 메뉴와 큰 표본 규모가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (설렁탕 전문)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">설렁탕 (1인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소고기국밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특설렁탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수육·추가</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">설렁탕 전문</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">소고기국밥</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">점심 추천</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 강남구 삼성1동 165-12 · <strong>🕐 영업</strong> 10:00~21:00 (매장 공지 우선) · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 매장 문의
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/이남장 삼성점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 이남장 삼성점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·가격·상황별 매칭', gradientStyle: { from: '#10B981', to: '#059669' } },
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
<td style="padding:11px 10px"><strong>명인대동양평해장국 삼성직영점</strong><br><span style="font-size:11px;color:#888780">해장국</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">461건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">10,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">해장 메뉴 8종 + 09:00 오픈</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>일품양평해장국 강남대치점</strong><br><span style="font-size:11px;color:#888780">해장국</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">199건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">9,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">07:30 가장 이른 오픈</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>이여곰탕 강남삼성</strong><br><span style="font-size:11px;color:#888780">곰탕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">1,905건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">8,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 + 화~토 24시간</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>도명골 청국장</strong><br><span style="font-size:11px;color:#888780">청국장 정식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">1,371건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">11,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">단일 가격 정식 + 오피스 점심</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>이남장 삼성점</strong><br><span style="font-size:11px;color:#888780">설렁탕·국밥</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.1<br><span style="font-size:11px;color:#888780">1,903건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">설렁탕 정석 + 블로그 596건</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 어떤 국물이 필요한가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍶 숙취 다음 날 해장</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>명인대동양평해장국 삼성직영점</strong> — 선지·소고기 해장 메뉴 8종으로 입맛 따라 고르기 좋고 평점 4.7. 흑마늘 보양 대동해장국 13,000원이 시그니처입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌅 출근 전 이른 해장</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>일품양평해장국 강남대치점</strong> — 07:30 오픈으로 5곳 중 가장 이릅니다. 순대내장탕 9,000원에 출근 전 한 그릇 비우기 좋습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥣 깔끔한 곰탕 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>이여곰탕 강남삼성</strong> — 곰탕 8,000원선, 리뷰 1,905건 검증. 화~토 24시간이라 늦은 점심·야간에도 열려 있습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍚 든든한 점심 정식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>도명골 청국장</strong> — 11,000원 청국장 정식, 일행과 같은 가격으로 주문 편함. 오피스 점심으로 평점 4.7·리뷰 1,371건.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 설렁탕·소고기국밥 정석</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>이남장 삼성점</strong> — 익숙한 설렁탕·소고기국밥 정석. 리뷰 1,903건·블로그 596건으로 표본이 가장 두껍습니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>도명골 청국장</strong>은 일요일 휴무입니다. 주말 방문은 토요일에 하시는 편이 안전하며, 평일 점심 12시 피크엔 오피스 손님이 몰려 11:30 입장이 여유롭습니다.</li>
<li><strong>명인대동양평해장국 삼성직영점·일품양평해장국 강남대치점·도명골 청국장</strong>은 매장 주차가 되지만 점심 피크엔 만차될 수 있어 이른 입장이 안전합니다.</li>
<li><strong>이여곰탕 강남삼성</strong>은 화~토 24시간이지만 일·월은 영업시간이 다를 수 있어, 야간·새벽 방문 시 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</li>
<li><strong>이남장 삼성점·이여곰탕 강남삼성</strong>은 전용 주차장 정보가 확인되지 않아 인근 공영주차장 또는 지하철(2호선·수인분당선 삼성역) 이용이 더 편합니다.</li>
<li>일부 식당은 메뉴별 단품 가격이 공개되어 있지 않아 본문에 "매장 문의"로 표기했습니다. 정확한 가격은 방문 시 확인하시는 편이 안전합니다.</li>
<li>메뉴 가격·영업시간은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 삼성역에서 숙취 해장은 어디가 1순위인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>명인대동양평해장국 삼성직영점</strong>입니다. 평점 4.7·리뷰 461건에 선지·소고기 해장 메뉴가 8종으로 가장 다양해 입맛 따라 고르기 좋습니다. 출근 전 더 이른 시간이 필요하면 <strong>일품양평해장국 강남대치점</strong>이 07:30 오픈으로 차선책입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가장 저렴하게 국밥 한 그릇은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>이여곰탕 강남삼성</strong>의 곰탕이 8,000원선으로 5곳 중 가장 저렴한 시작가입니다. 리뷰 1,905건으로 표본도 가장 많아 가격뿐 아니라 검증 신뢰도까지 안정적입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 아침 일찍 문 여는 해장국집은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>일품양평해장국 강남대치점</strong>이 07:30 오픈으로 가장 이릅니다. <strong>명인대동양평해장국 삼성직영점</strong>은 09:00, <strong>이여곰탕 강남삼성</strong>은 10:00에 시작합니다. 출근 전 해장이면 일품양평해장국이 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심에 든든하게 백반 정식이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>도명골 청국장</strong>이 1순위입니다. 청국장 정식이 11,000원 단일 가격대라 일행과 따로 계산 고민 없이 주문할 수 있고, 평점 4.7·리뷰 1,371건으로 오피스 점심 검증이 두껍습니다. 단, 일요일은 휴무입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>명인대동양평해장국·일품양평해장국·도명골 청국장</strong>은 주차가 되고, <strong>이여곰탕 강남삼성·이남장 삼성점</strong>은 전용 주차장 정보가 확인되지 않아 인근 공영주차장 또는 삼성역 대중교통이 더 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 낮은 식당도 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>이남장 삼성점</strong>은 평점 4.1로 본 가이드 평균(4.5) 이하지만, 리뷰 1,903건·블로그 596건으로 표본이 가장 두껍고 설렁탕·소고기국밥이라는 정석 메뉴에서 검색 의도가 압도적이라 포함했습니다. 평점만 기준이면 <strong>명인대동양평해장국</strong>·<strong>도명골 청국장</strong>(4.7)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/samseong', text: '삼성역 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">삼성역 859곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">삼성역·대치·코엑스 일대 859곳에서 국밥·해장 한 그릇으로 점심이 해결되는 식당을 필터링해, 메뉴 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰 표본·메뉴 구성·영업시간 4가지를 함께 본 결과 선지해장국·곰탕·설렁탕·청국장으로 선택지가 자연스럽게 갈렸습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 우선이면 <strong>명인대동양평해장국 삼성직영점·도명골 청국장·일품양평해장국 강남대치점(4.7)</strong>이 1순위, 리뷰 표본 크기로는 <strong>이여곰탕 강남삼성(1,905건)</strong>이 1순위입니다. 카테고리가 달라 검색 의도가 겹치지 않으니, 해장이면 명인대동·일품양평, 곰탕이면 이여곰탕, 정식이면 도명골 식으로 분리해서 고르시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>이남장 삼성점</strong>은 평점 4.1로 5곳 중 가장 낮지만 리뷰 1,903건·블로그 596건이라는 표본 규모와 설렁탕·소고기국밥 정석 메뉴로 포함했습니다. 호불호가 갈리는 식당이라 메인 메뉴 위주로 주문하시면 만족도 편차가 줄어듭니다. 평점 우선이면 명인대동·도명골·일품양평이 안정 후보입니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 19일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 방문 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
