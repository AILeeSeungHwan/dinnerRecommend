// 영통역 점심 맛집 — 카테고리별 총정리 (식당별 unique 콘텐츠)
const post = {
  id: 7,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">분당선 <strong>영통역</strong>·매탄·신동·망포 일대 직장인이 점심 한 끼를 고르는 데 도움이 되는 식당 5곳을 정리했습니다. 영통 일대 679곳 중 평점·리뷰 표본·가격대·운영 안정성 네 가지를 함께 본 결과, 한식 국밥·설농탕·일식 돈가스·중식 짬뽕·카페 베이커리까지 카테고리를 분산해 묶었습니다. 같은 12시 한 시간 안에도 입맛·예산·동선이 다르니, 본문 한 줄 결론과 비교표를 먼저 보시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">679곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">영통·매탄·신동·망포</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.3</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.1 ~ 4.6</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">3,137건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">3,600원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">베이커리 1pcs 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">국밥 한 그릇이면 <strong>생각나는순대국 수원영통점</strong> — 평점 4.3·리뷰 470건, 순대국 10,000원으로 영통 한식 가성비 1순위입니다. 한식 정식이면 <strong>신선설농탕 수원영통점</strong> — 설농탕 11,000원·정식 메뉴 다양. 가벼운 일식이면 <strong>윤돈</strong> — 평점 4.6·로스카츠 정식 13,000원에 돈가스 단품 회전 우수. 중식 단품이면 <strong>진심의짬뽕 매탄직영점</strong> — 든든세트(짜장면+군만두+미니밥) 7,500원으로 가격 1순위. 출근 전 모닝 빵·테이크아웃이면 <strong>하얀풍차제과점 망포역점</strong> — 07:00 오픈, 메론크림 소금빵 3,600원부터.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">점심 카테고리 분산 + 4가지 기준</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 시작가 7,500~15,000원</strong> — 영통 직장인 점심 표준 가격대 (단품·정식·테이크아웃 혼합)</li>
<li><strong>리뷰 표본 150건 이상</strong> — 평균값이 흔들리지 않을 표본 크기 (신생 식당은 차별점 명확할 때만)</li>
<li><strong>평점 4.0점 이상</strong> — 점심 식당 카테고리 평균선 (한 곳은 신생·표본 미축적으로 가격 차별점 우선 포함)</li>
<li><strong>카테고리 분산</strong> — 국밥·설농탕·돈가스·짬뽕·베이커리 5종으로 점심 검색 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">영통 일대 679곳 중 점심 시간(11:00~14:00)에 이용 가능한 식당은 약 400곳이었습니다. 그중 평점·리뷰 표본·메뉴 구성·운영 시간이 안정적인 식당 5곳을 추렸습니다. 같은 한식 카테고리 안에서도 국밥·설농탕을 분리했고, 일식은 돈가스(런치 회전 빠른 단품), 중식은 짬뽕(가성비 세트), 베이커리는 출근 전 테이크아웃까지 시나리오를 분산했습니다.</p>`
    },

    { type: 'h2', id: 'saengak', text: '생각나는순대국 수원영통점 — 영통 국밥 가성비·검증 1순위', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20230914_107/1694689245483VUWE0_JPEG/IMG_1478.jpeg" alt="생각나는순대국 수원영통점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍲 국밥 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 470건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000원~14,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 새벽 2시까지</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">영통 점심 한식 가운데 <strong>평점 4.3·리뷰 470건</strong>으로 표본·평점이 함께 안정적인 국밥집입니다. 영통동 998-6 아셈프라자 1층에 위치해 분당선 영통역에서 도보 접근이 편하고, <strong>02:00까지 영업</strong>이라 야근 직장인의 늦은 저녁·해장 옵션으로도 묶입니다. 단품(순대국 10,000원) 중심 회전이 빠른 매장이라 12시 피크에도 자리 잡기가 비교적 수월하며, 수육·족발 정식 13,000원선 메뉴까지 갖춰 한 끼 부담을 단계별로 조정할 수 있습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물이 진하다 · 양이 푸짐하다 · 매장이 깔끔하다" 같은 평이 자주 언급되었습니다. 영통 직장인 점심·해장 양쪽 시나리오로 묶이는 식당이라는 점이 후기 키워드로 함께 잡힙니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순대국</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순대철판볶음</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수육정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">족발정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">불족발정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">백순대철판볶음</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 10,000원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">새벽 영업</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">국물맛 검증</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 영통동 998-6 아셈프라자 1층 · <strong>🕐 영업</strong> 02:00 영업 종료 (매장 공지 우선) · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-202-0811
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/생각나는순대국 수원영통점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 생각나는순대국 수원영통점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'sinsun', text: '신선설농탕 수원영통점 — 한식 정식 1만1천원선 안정 옵션', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20161124_30%2F1479981398559lrvyP_JPEG%2F177074588658457_0.jpeg" alt="신선설농탕 수원영통점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 888건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,000원~17,000원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🏢 체인 표준</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">전국 체인 <strong>신선설농탕</strong>의 수원영통점입니다. 영통동 976-17에 위치해 영통역 도보 거리이며, <strong>10:00 영업 시작</strong>이라 늦은 아침·점심·이른 저녁까지 활용도가 넓습니다. 평점 4.1·리뷰 888건으로 본 가이드 5곳 중 두 번째로 많은 표본을 누적했고, "어린이 설농탕 8,000원"·"미역설농탕 14,000원" 등 가족 외식 메뉴까지 갖춰 1인 직장인부터 부모님과 함께 오는 가족까지 폭넓게 묶입니다. 정식 메뉴 표준화가 잘 되어 있어 첫 방문에도 메뉴 실패 확률이 낮은 편입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물 진하다 · 해장에 적합 · 매장 깔끔하다" 같은 평이 자주 언급되었습니다. 정식 구성이 표준화된 체인이라 만족도 편차가 적은 편입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20161124_30%2F1479981398559lrvyP_JPEG%2F177074588658457_0.jpeg" alt="신선설농탕 수원영통점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20161124_158%2F14799813986432E8TN_JPEG%2F177074588658457_1.jpeg" alt="신선설농탕 수원영통점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20161124_102%2F1479981398778CgEMj_JPEG%2F177074588658457_3.jpeg" alt="신선설농탕 수원영통점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">설농탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">설농탕 대</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">어린이설농탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">만두설농탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미역설농탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순사골국-대</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서비스좋음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 영통동 976-17 · <strong>🕐 영업</strong> 10:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 031-202-0039
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/신선설농탕 수원영통점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 신선설농탕 수원영통점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'yundon', text: '윤돈 — 평점 4.6 일식 돈가스 런치 회전 강자', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200921_148%2F1600673388228X2Cyq_JPEG%2Fc-8IzIbV388C0kJt4EscM5fp.jpeg.jpg" alt="윤돈 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">⭐ 평점 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.6 · 리뷰 299건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 9,000원~20,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍱 런치 추천</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>평점 4.6점</strong>은 본 가이드 5곳 중 가장 높은 수치입니다. 리뷰 299건으로 표본 크기는 중위권이지만 평점 분산이 좁아 만족도 편차가 적은 식당으로 묶입니다. 신동 398-39 A동 106호, <strong>11:30 런치 오픈</strong>이라 정확히 점심 한 시간에 맞춰 회전이 도는 매장이고, 카츠산도 9,000원 단품부터 모둠카츠 정식 20,000원까지 점심 예산을 단계별로 잡을 수 있습니다. 돈가스 단품 중심 매장이라 12시 피크에도 입장~퇴장 30분 안에 끝나는 편입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"히레가츠가 맛있다 · 치즈가츠 재방문 의사 · 단품 회전 빠르다" 같은 평이 자주 언급되었습니다. 시그니처 메뉴 만족도와 점심 회전 속도가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200921_148%2F1600673388228X2Cyq_JPEG%2Fc-8IzIbV388C0kJt4EscM5fp.jpeg.jpg" alt="윤돈 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201101_135%2F160420489853602IdO_JPEG%2FipY3vJ1CYAvQz9vREVZHhLQF.jpeg.jpg" alt="윤돈 돈가스 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200921_110%2F1600673370477LNtlL_JPEG%2FGj83d0wSPpqgB_LuOkaE3-Dc.jpeg.jpg" alt="윤돈 돈가스 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:120%;height:120px;object-fit:cover;border-radius:8px;display:block;width:100%" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">카츠산도</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">로스카츠 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">치즈카츠 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">상로스카츠 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">히레카츠 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모둠카츠 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단품 회전</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 1위</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 398-39 A동 106호 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1324-9588
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/윤돈" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 윤돈 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'jinsim', text: '진심의짬뽕 매탄직영점 — 중식 단품 7,500원부터 가성비 1순위', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260129_29%2F1769672009551N5s3m_JPEG%2F4611.jpg" alt="진심의짬뽕 매탄직영점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 가격 1순위</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">신규·표본 누적 중</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 7,000원~18,000원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1233-2에 들어선 <strong>신규 중식 직영점</strong>이라 네이버 플레이스 평점·리뷰 표본이 아직 충분히 누적되지 않았습니다. 그래서 평점은 본 가이드에 표기하지 않았고, 대신 <strong>가격 차별점</strong>으로 후보에 포함했습니다. <strong>든든세트(짜장면+군만두 4P+미니밥) 7,500원</strong>은 영통 중식 가성비 1순위 구성이며, 진심짬뽕 단품 9,000원, 진심짜장 단품 7,000원으로 1만원 안에 한 끼가 완성됩니다. 11:00 영업 시작, 혼밥 가능·서비스좋음 후기가 누적 중인 매장입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"든든세트 가성비 좋다 · 짜장면 맛이 진하다 · 군만두 4개 구성이 후하다" 같은 평이 자주 언급되었습니다. 가격대 만족도와 단품 회전이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260129_29%2F1769672009551N5s3m_JPEG%2F4611.jpg" alt="진심의짬뽕 매탄직영점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251208_216%2F1765189147504dJXzM_PNG%2F3783.png" alt="진심의짬뽕 매탄직영점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251208_50%2F1765189147451pmWXu_PNG%2F3785.png" alt="진심의짬뽕 매탄직영점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">진심짜장</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">든든세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,500원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">진심짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">간짜장</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">고추짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">통영 굴짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>시즌</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">7,500원 세트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">단품 회전</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1233-2 104호 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1395-3065
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/진심의짬뽕 매탄직영점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 진심의짬뽕 매탄직영점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'pungcha', text: '하얀풍차제과점 망포역점 — 07:00 오픈 베이커리·테이크아웃 1순위', gradientStyle: { from: '#92400E', to: '#451A03' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251029_284%2F1761699786504gD2AO_JPEG%2FKakaoTalk_20250930_144132811.jpg" alt="하얀풍차제과점 망포역점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#92400E;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">☕ 출근 전 테이크아웃</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 1,480건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 3,600원~52,800원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🕐 07:00 오픈</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>리뷰 1,480건</strong>은 본 가이드 5곳 중 가장 많은 표본 크기로, 영통 베이커리 카테고리 상위권에서도 누적 검증이 두드러집니다. 망포동 322-3, 분당선 망포역에서 도보 거리이며 <strong>07:00 영업 시작</strong>이라 출근 전 모닝 빵·커피·테이크아웃 옵션으로 1순위입니다. 시즌 케이크(딸기트리 52,800원)부터 메론크림 소금빵 3,600원까지 가격 범위가 넓고, "웨이팅 발생" 후기가 누적될 만큼 회전이 빠른 매장입니다. 점심에 가볍게 가는 사람·생일 케이크 예약 손님이 함께 누적되는 곳입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"화이트롤 시그니처 빵이 인기 · 가족 단위 손님이 좋아한다 · 빵 잘 안 좋아하는 사람도 즐긴다" 같은 평이 자주 언급되었습니다. 시그니처 빵 만족도와 시즌 메뉴 회전이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251029_284%2F1761699786504gD2AO_JPEG%2FKakaoTalk_20250930_144132811.jpg" alt="하얀풍차제과점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251202_172%2F1764644131926qKaG3_PNG%2F001.png" alt="하얀풍차제과점 빵 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251029_268%2F1761699768866TdeAO_JPEG%2FKakaoTalk_20250930_144156642.jpg" alt="하얀풍차제과점 빵 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">메론크림 소금빵</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,600원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">바삭달소금빵</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">피칸엘리게이터</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,200원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">화이트롤</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,900원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">호두바게트 샌드위치</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,800원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샤인단지 1호</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,800원 · <strong>케이크</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">07:00 오픈</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">테이크아웃</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">웨이팅맛집</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 망포동 322-3 · <strong>🕐 영업</strong> 07:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1407-0031
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/하얀풍차제과점 망포역점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 하얀풍차제과점 망포역점 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>생각나는순대국 수원영통점</strong><br><span style="font-size:11px;color:#888780">한식·순대국</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">470건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">10,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">국밥 평점 1위 + 새벽 영업</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>신선설농탕 수원영통점</strong><br><span style="font-size:11px;color:#888780">한식·설농탕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.1<br><span style="font-size:11px;color:#888780">888건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">8,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">정식 표준 + 가족 외식</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>윤돈</strong><br><span style="font-size:11px;color:#888780">일식·돈가스</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.6<br><span style="font-size:11px;color:#888780">299건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">9,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 단품 회전</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>진심의짬뽕 매탄직영점</strong><br><span style="font-size:11px;color:#888780">중식</span></td>
<td style="padding:11px 10px;text-align:center">신규<br><span style="font-size:11px;color:#888780">표본 누적 중</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">7,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">든든세트 7,500원 가격 1위</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>하얀풍차제과점 망포역점</strong><br><span style="font-size:11px;color:#888780">카페·베이커리</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">1,480건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#92400E">3,600원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">07:00 오픈 + 표본 최다</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심은 어떤 분위기인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍲 든든한 국밥 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>생각나는순대국 수원영통점</strong>의 순대국 10,000원이 영통 직장인 점심 단골 옵션. 02:00까지 영업이라 야근 후 해장 옵션으로도 활용 가능합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍱 정식 한 상 차림</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>신선설농탕 수원영통점</strong> — 설농탕 11,000원선 표준 정식. 어린이 설농탕 8,000원, 미역설농탕 14,000원까지 갖춰 가족 외식·1인 점심 모두 무난합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">⭐ 평점 1순위 가벼운 일식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>윤돈</strong> — 평점 4.6 영통 점심 일식 1위. 로스카츠 정식 13,000원, 카츠산도 9,000원으로 가벼운 점심부터 든든한 정식까지.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 1만원 안 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>진심의짬뽕 매탄직영점</strong>의 든든세트 7,500원이 영통 중식 가성비 1순위. 단품 짜장면 7,000원도 가능합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">☕ 출근 전 모닝·테이크아웃</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>하얀풍차제과점 망포역점</strong> — 07:00 오픈 베이커리. 소금빵 3,600원, 화이트롤 6,900원으로 빠른 픽업 가능합니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>생각나는순대국 수원영통점</strong>은 영통역에서 도보 접근이 편하지만, 점심 12시 피크에 단품 회전이 빠른 매장이라 11:30~11:50 입장이면 자리 잡기 수월합니다.</li>
<li><strong>신선설농탕 수원영통점</strong>은 주차 가능 매장이지만 평일 12시 회전이 빨라 1인 직장인은 카운터 자리 안내 가능성이 있습니다. 인원이 많으면 11:50 전 입장이 안전합니다.</li>
<li><strong>윤돈</strong>은 11:30 오픈이라 점심 1시간 사이클에 맞춰 회전이 도는 매장입니다. 12시 정각 도착 시 5~10분 대기가 표준입니다.</li>
<li><strong>진심의짬뽕 매탄직영점</strong>은 신규 매장이라 메뉴·가격이 시즌별로 조정될 수 있습니다. 방문 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</li>
<li><strong>하얀풍차제과점 망포역점</strong>은 시즌 케이크가 인기라 주말·평일 오후 5시 이후엔 일부 메뉴가 매진될 수 있습니다. 출근 전·점심 시간이 안정적입니다.</li>
<li>5곳 중 카드 결제·키오스크 운영 여부는 매장별로 다르므로, 동행 인원·예산 결제 방식이 정해진 경우 매장에 한 번 더 확인하시는 편이 안전합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 영통역에서 점심 1만원 안에 한 끼는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>진심의짬뽕 매탄직영점</strong>의 든든세트(짜장면+군만두 4P+미니밥) 7,500원이 가장 저렴한 한 끼입니다. 단품 짜장면 7,000원도 가능합니다. 한식이면 <strong>신선설농탕</strong>의 어린이 설농탕 8,000원이 1만원 안에 들어가며, 베이커리는 <strong>하얀풍차제과점</strong>의 소금빵 3,600원부터 시작합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점 가장 높은 점심 식당은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>윤돈</strong>이 평점 4.6점으로 본 가이드 5곳 중 1위입니다. 리뷰 299건이 누적된 일식 돈가스집으로, 로스카츠 정식 13,000원이 인기 메뉴이며 점심 회전이 빠른 단품 중심 매장입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 야근 후 늦은 저녁·해장이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>생각나는순대국 수원영통점</strong>이 영업 종료 02:00로, 본 가이드 5곳 중 가장 늦은 시간까지 운영됩니다. 순대국 10,000원이 영통 직장인 야근·해장 단골 옵션이며, 평점 4.3·리뷰 470건으로 표본도 안정적입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가족 외식·아이 동반이면 어디가 적합한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>신선설농탕 수원영통점</strong>이 첫 후보입니다. 어린이 설농탕 8,000원이 별도 메뉴로 있고, 정식 표준화가 잘 되어 있어 메뉴 실패 확률이 낮은 편입니다. 빵을 선호하시면 <strong>하얀풍차제과점</strong>의 가족용 시즌 케이크(45,800원~52,800원)도 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 시간이 짧을 때 빠르게 먹을 수 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>윤돈</strong>의 카츠산도 9,000원·<strong>진심의짬뽕</strong>의 든든세트 7,500원이 단품 회전이 가장 빠른 옵션입니다. <strong>하얀풍차제과점</strong>은 베이커리 픽업으로 5분 안에 테이크아웃 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>신선설농탕·윤돈·진심의짬뽕·하얀풍차제과점</strong>은 전용 또는 인근 빌딩 주차장 연계가 가능하고, <strong>생각나는순대국</strong>은 전용 주차장이 없어 인근 공영주차장 또는 분당선 영통역 대중교통이 더 편합니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/samsungElectronics/yeongtong', text: '영통역 점심 식당 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">영통 679곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">영통 일대 679곳에서 점심 시간대 운영이 가능한 식당을 필터링한 뒤, 카테고리 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰·운영시간·가격대 4가지를 함께 본 결과 한식 국밥·설농탕, 일식 돈가스, 중식 짬뽕, 베이커리로 점심 검색 의도가 자연스럽게 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 우선이면 <strong>윤돈(4.6)</strong>이 1순위, 표본 크기 우선이면 <strong>하얀풍차제과점(1,480건)</strong>이 1순위입니다. 두 식당은 카테고리가 달라 검색 의도가 겹치지 않으니, 일식 한 끼면 윤돈, 출근 전 빵·테이크아웃이면 하얀풍차제과점 식으로 분리해서 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>진심의짬뽕 매탄직영점</strong>은 신규 매장이라 평점·리뷰 표본이 아직 충분히 누적되지 않았습니다. 본 가이드에는 평점 표기를 생략하고 가격 차별점(든든세트 7,500원)으로 후보에 포함했습니다. 표본 우선이면 다른 4곳을, 가격 우선이면 진심의짬뽕을 골라 보시면 됩니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">데이터 출처 (4중 신호)</div>
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
