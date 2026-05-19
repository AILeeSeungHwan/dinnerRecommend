// 망포 점심 맛집 5곳 — 카테고리 분산 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 46,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>망포</strong>(수원 영통구 망포·신동 일대)에서 평일 점심 한 끼를 해결할 식당 5곳을 정리했습니다. 망포·신동·권선 일대 345곳에서 평점·리뷰 표본·점심 운영·메뉴 구성 4가지를 기준으로 추려, 한식·일식·이탈리아·중식·카페까지 카테고리를 분산했습니다. 직장인 점심·혼밥·해장·데이트 점심·후식까지 상황별로 다른 1순위를 골라 두었으니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">345곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">망포·신동·권선 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.5</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.2 ~ 5.0</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">3,612건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">점심 시작가</p><p style="font-size:20px;font-weight:600;margin:0">2,500원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">중식 사이드 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">속 풀리는 국밥 점심·해장이면 <strong>정남옥순대국 권선인계점</strong> — 맑은순대국 9,000원, 평점 5.0·리뷰 405건으로 본 가이드 평점 1순위입니다. 혼밥 일식 카레면 <strong>키요미카레</strong> (소고기카레 9,900원, 혼밥·주차 가능). 데이트·팀 점심 파스타면 <strong>우트볼하우스 신동본점</strong> (미트볼 리조또 16,000원, 리뷰 1,222건). 얼큰한 마라·중식이면 <strong>마라영웅 신동점</strong> (홍쏘로우덮밥 12,900원). 점심 후 디저트·커피면 <strong>잭바츠</strong> (음료·디저트 3,000원~).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>점심 시간대 영업</strong> — 점심에 운영하는 식당만 (저녁 전용 고깃집·심야 술집 제외)</li>
<li><strong>네이버 플레이스 리뷰 300건 이상</strong> — 평점이 흔들리지 않을 표본 크기</li>
<li><strong>평점 4.0점 이상</strong> — 망포 전체 평균선 (선정 5곳은 4.2~5.0)</li>
<li><strong>카테고리 분산</strong> — 한식·일식·이탈리아·중식·카페 5종으로 검색 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">망포 일대 345곳 중 점심 시간대에 운영하면서 평점·리뷰 표본을 함께 만족하는 식당은 약 220곳이었습니다. 그중 같은 카테고리가 겹치지 않도록 순대국·카레·파스타·마라·카페로 한 끼 선택지를 다섯 갈래로 분산했습니다. 평점이 동률일 때는 리뷰 표본이 더 큰 식당을, 표본이 비슷할 때는 점심 회전이 빠른 식당을 우선했습니다.</p>`
    },

    { type: 'h2', id: 'jeongnamok', text: '정남옥순대국 권선인계점 — 평점 1순위 해장·국밥 점심', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251113_23%2F1763022445968mSmqu_JPEG%2F%25C0%25FC%25C3%25BC%25BF%25AC%25C3%25E2_%25285%2529.JPG" alt="정남옥순대국 권선인계점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 평점 1순위 해장</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 5.0 · 리뷰 405건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 9,000원~47,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점이 가장 높은 국밥 한식당</strong>입니다. 권선동 1025-11 1층에 자리하며, 평점 5.0·리뷰 405건에 블로그 후기 82건이 함께 누적돼 표본이 작지 않으면서도 만족도 편차가 적은 편입니다. 맑은순대국 9,000원·돼지국밥 10,000원으로 1만원 안에서 한 끼가 끝나, 야근 다음 날 해장·따뜻한 국물 점심에 1순위입니다. 10:00 영업 시작이라 이른 점심도 가능하고 주차도 됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"가성비 좋다 · 점심 추천 · 깔끔하다 · 주차 가능" 같은 평이 자주 묶입니다. 순대국 단품 회전이 빠르고 국물 만족도가 높다는 점이 후기 키워드로 함께 누적됩니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20260428_226%2F1777357552621jB40R_JPEG%2Fo1jdkkTLaD_02.jpg" alt="정남옥순대국 권선인계점 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251113_23%2F1763022445968mSmqu_JPEG%2F%25C0%25FC%25C3%25BC%25BF%25AC%25C3%25E2_%25285%2529.JPG" alt="정남옥순대국 권선인계점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260428_16%2F1777358692008XeW7x_JPEG%2F1000017982.jpg" alt="정남옥순대국 권선인계점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">맑은순대국</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">얼큰순대국</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돼지국밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">얼큰순대국정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">가마솥모듬수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">43,000원 · 단체</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">가마솥우삼겹수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">47,000원 · 단체</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">해장 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 1순위</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 권선구 권선동 1025-11 1층 · <strong>🕐 영업</strong> 10:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 070-7537-0057
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/정남옥순대국 권선인계점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 정남옥순대국 권선인계점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'kiyomi', text: '키요미카레 — 혼밥 일식 카레 점심', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20241130_288/1732934914300LgsGH_JPEG/1000000182.jpg" alt="키요미카레 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍛 혼밥 점심 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 574건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 6,900원~12,900원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">망포동 12-7 A동 1층의 일식 카레 전문점입니다. 평점 4.4·리뷰 574건으로 표본이 넉넉하며, 소고기카레 9,900원·카레우동 9,900원으로 1만원 안에서 한 끼가 끝납니다. 혼밥·주차·단체·예약이 모두 가능해 1인 점심부터 소규모 팀 점심까지 같은 식당에서 분리해 쓸 수 있고, 어린이 메뉴(6,900원~)가 따로 있어 아이 동반 점심에도 대응됩니다. 11:00 영업 시작이라 점심 피크 전 입장이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"혼밥 편하다 · 깔끔하다 · 서비스 좋다 · 주차 가능" 같은 평이 자주 묶입니다. 카레 단품 회전이 빠르고 아이 동반도 무난하다는 점이 후기 키워드로 함께 누적됩니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">어린이돈가츠</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,900원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">키요미카레(소고기)</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,900원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">카레우동</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,900원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">시금치카레</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수제돈가츠카레</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,400원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수제돈가츠정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,900원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">아이 동반</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 망포동 12-7 A동 1층 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1492-2416
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/키요미카레" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 키요미카레 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'wootball', text: '우트볼하우스 신동본점 — 데이트·팀 점심 파스타', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251103_33%2F17621595238866oq7d_JPEG%2FIMG_0946.jpeg" alt="우트볼하우스 신동본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💑 데이트 점심 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.6 · 리뷰 1,222건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 14,000원~48,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신동 933-8 1층의 미트볼 시그니처 파스타·피자 전문점입니다. <strong>리뷰 1,222건은 본 가이드 5곳 중 가장 큰 표본</strong>이며, 평점 4.6에 블로그 후기 115건이 함께 누적돼 검증 신뢰가 높은 편입니다. 데이트 평가가 함께 매칭돼 평일 점심뿐 아니라 가벼운 데이트 점심·기념일 점심에도 잘 맞고, 주차·예약이 가능해 팀 점심에도 동선이 편합니다. 미트볼 리조또 16,000원·미트볼 토마토 스파게티 18,000원이 표준선이며, 10:30 영업 시작이라 점심 피크 전 입장이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"데이트 좋다 · 깔끔하다 · 리뷰 표본 많다 · 주차 가능" 같은 평이 자주 묶입니다. 시그니처 미트볼 메뉴 만족도와 매장 분위기가 함께 누적되는 키워드 구조입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20250514_233%2F17472085325207URDq_JPEG%2FVV5IbhUcR3_03.jpg" alt="우트볼하우스 신동본점 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20250427_203%2F1745728410309XqLWB_JPEG%2FYjYmifUDE0_03.jpg" alt="우트볼하우스 신동본점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251103_33%2F17621595238866oq7d_JPEG%2FIMG_0946.jpeg" alt="우트볼하우스 신동본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">클램 차우더 스프&브레드</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">그레이비 미트볼 리조또</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미트볼 토마토 스파게티</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">꽃게 로제 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미트볼 딥디쉬 피자</p><p style="font-size:12px;color:#5f5e5a;margin:0">26,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">하우스 T본 스테이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">48,000원 · 단체</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">팀 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 최다</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 933-8 1층 101호 · <strong>🕐 영업</strong> 10:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1491-1450
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/우트볼하우스 신동본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 우트볼하우스 신동본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'maraheroes', text: '마라영웅 신동점 — 얼큰한 마라·중식 점심', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20230619_239/1687152595825iwiLG_JPEG/IMG_7571.jpeg" alt="마라영웅 신동점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 마라·중식 점심</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 388건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 2,500원~38,900원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신동 932-4 1층의 마라 전문 중식당입니다. 평점 4.2점은 본 가이드 평균(4.5) 아래지만, 리뷰 388건으로 평균이 흔들리지 않을 표본은 갖췄고 <strong>1인 마라 점심 옵션으로 차별점이 명확</strong>합니다. 홍쏘로우덮밥 12,900원·토마토계란덮밥 9,500원 같은 1인 덮밥이 있어 혼밥 점심에 맞고, 연유꽃빵 2,500원이 한 끼 단품 최저가입니다. 혼밥·주차가 가능하고 11:00 영업 시작이라 이른 점심도 됩니다. 평점이 다소 낮은 이유는 마라 호불호 표본이 함께 쌓인 것으로 해석되니, 덮밥·세트 같은 표준 메뉴 위주로 주문하시면 만족도 편차가 줄어듭니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"혼밥 편하다 · 점심 추천 · 깔끔하다 · 주차 가능" 같은 평이 자주 묶입니다. 1인 덮밥 회전이 빠르고 마라 호불호가 함께 누적되는 키워드 구조입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">연유꽃빵</p><p style="font-size:12px;color:#5f5e5a;margin:0">2,500원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">토마토계란덮밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">홍쏘로우덮밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,900원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">홍쏘갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">향라새우</p><p style="font-size:12px;color:#5f5e5a;margin:0">23,900원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">영웅세트(2인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">33,900원 · 단체</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">마라 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">이른 점심</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 932-4 1층 105·106호 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1326-2884
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/마라영웅 신동점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 마라영웅 신동점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'jackbarts', text: '잭바츠 — 점심 후 디저트·커피', gradientStyle: { from: '#92400E', to: '#451A03' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260403_114%2F1775165837239QDTg6_JPEG%2FIMG_8371.jpeg" alt="잭바츠 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#92400E;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">☕ 점심 후 디저트</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 825건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 3,000원~8,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 분위기 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">망포동 41-51 1층의 디저트 카페로, 평점 4.4·리뷰 825건에 블로그 후기 316건이 함께 누적된 동네 안정 카페입니다. 본 가이드 5곳 중 유일한 카페 옵션으로, 식사 후 디저트·커피나 점심 시간 짧은 미팅 자리로 묶었습니다. 마들렌 3,000원·케이크 7,500원선으로 부담이 적고 분위기·데이트 평가가 함께 매칭돼 후식 동선을 한 번에 짤 수 있습니다. 08:30 영업 시작이라 출근 전 모닝커피도 가능하고 주차도 됩니다. 위 4곳 중 어디서 점심을 먹든 마무리 동선으로 연결하기 좋은 위치입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"디저트 좋다 · 분위기 좋다 · 데이트 좋다 · 주차 가능" 같은 평이 자주 묶입니다. 케이크·쿠키 회전이 빠르고 재방문 후기가 함께 누적되는 카페입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260403_114%2F1775165837239QDTg6_JPEG%2FIMG_8371.jpeg" alt="잭바츠 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260403_277%2F1775165820752Mcsbf_JPEG%2FIMG_8267.jpeg" alt="잭바츠 디저트 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260403_250%2F1775165851093cxm08_JPEG%2FIMG_8374.jpeg" alt="잭바츠 디저트 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">레몬라임 마들렌</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">솔티카라멜 플랑</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,700원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">두바이 쫀득쿠키 3+1</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,500원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">스카치크림라떼</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,800원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">바스크치즈케이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,500원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">버터떡 4p + 생크림</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 후 디저트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">짧은 미팅</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 망포동 41-51 1층 111·112호 · <strong>🕐 영업</strong> 08:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 070-4012-4305
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/잭바츠" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 잭바츠 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·가격·상황별 매칭', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">점심 시작가</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">차별점</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>정남옥순대국 권선인계점</strong><br><span style="font-size:11px;color:#888780">한식·순대국</span></td>
<td style="padding:11px 10px;text-align:center">★ 5.0<br><span style="font-size:11px;color:#888780">405건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">9,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1순위 + 해장 국밥</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>키요미카레</strong><br><span style="font-size:11px;color:#888780">일식·카레</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">574건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">6,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">혼밥·아이 동반 + 주차</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>우트볼하우스 신동본점</strong><br><span style="font-size:11px;color:#888780">이탈리아·파스타</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.6<br><span style="font-size:11px;color:#888780">1,222건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">14,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 + 데이트·팀</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>마라영웅 신동점</strong><br><span style="font-size:11px;color:#888780">중식·마라</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">388건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">2,500원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">1인 마라 덮밥 점심</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>잭바츠</strong><br><span style="font-size:11px;color:#888780">카페·디저트</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">825건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#92400E">3,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">점심 후 디저트 + 미팅</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심은 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍲 해장·따뜻한 국물 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>정남옥순대국 권선인계점</strong> — 맑은순대국 9,000원. 평점 5.0·리뷰 405건으로 본 가이드 평점 1순위.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍛 혼밥·아이 동반 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>키요미카레</strong> — 소고기카레 9,900원. 어린이 메뉴(6,900원~)·주차·예약 가능해 1인부터 아이 동반까지 대응.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 데이트·팀 점심 파스타</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>우트볼하우스 신동본점</strong> — 미트볼 리조또 16,000원. 리뷰 1,222건으로 표본 최다, 주차·예약 가능.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 얼큰한 마라·1인 덮밥</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>마라영웅 신동점</strong> — 홍쏘로우덮밥 12,900원. 표준 메뉴 위주로 주문하면 호불호 편차가 줄어듭니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">☕ 점심 후 디저트·미팅</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>잭바츠</strong> — 마들렌 3,000원~. 위 4곳 어디서 점심을 먹든 후식·미팅 동선으로 연결하기 좋습니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>정남옥순대국·키요미카레·우트볼하우스·마라영웅·잭바츠</strong>는 모두 주차가 가능하지만 점심 12시 피크엔 만차될 수 있어 11:30~11:50 입장이 안전합니다.</li>
<li><strong>마라영웅 신동점</strong>은 평점 4.2로 본 가이드 평균(4.5) 아래입니다. 덮밥·세트 같은 표준 메뉴 위주로 주문하시면 마라 호불호 편차가 줄어듭니다.</li>
<li><strong>우트볼하우스 신동본점</strong>은 예약 가능한 식당이라 데이트·팀 점심은 미리 자리를 잡아두시는 편이 안전합니다. 평일 점심도 12시 전후로 자리가 빠르게 차는 편입니다.</li>
<li><strong>정남옥순대국 권선인계점</strong>은 망포·신동 권역에서 권선동 쪽에 위치합니다. 망포역 도보권 밖일 수 있어 차량·버스 이용을 권장드립니다.</li>
<li><strong>잭바츠</strong>는 08:30 영업 시작이라 출근 전 모닝커피도 가능하지만, 점심 직후(13:00~14:00)는 좌석이 빠르게 차니 미팅 자리는 조금 일찍 잡아두시는 편이 안전합니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 망포에서 평점이 가장 높은 점심집은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>정남옥순대국 권선인계점</strong>입니다. 평점 5.0·리뷰 405건으로 본 가이드 평점 1순위이며, 맑은순대국 9,000원으로 가격까지 가볍습니다. 표본 크기로는 <strong>우트볼하우스 신동본점</strong>(1,222건)이 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 야근·숙취 다음 날 해장 점심은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>정남옥순대국 권선인계점</strong>입니다. 맑은순대국 9,000원·돼지국밥 10,000원이 메인이며, 10:00 영업 시작이라 이른 점심도 가능합니다. 따뜻한 국물로 속을 풀기 좋은 1순위 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 혼밥하기 편한 점심집은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>키요미카레</strong>가 1순위입니다. 소고기카레 9,900원 단품 회전 중심이라 혼밥이 편하고 주차도 됩니다. <strong>마라영웅 신동점</strong>의 1인 덮밥(토마토계란덮밥 9,500원)도 혼밥 옵션으로 무난합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 데이트·팀 점심이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>우트볼하우스 신동본점</strong>입니다. 미트볼 리조또 16,000원이 표준선이고 리뷰 1,222건으로 표본 최다, 데이트 평가가 함께 매칭되며 주차·예약이 가능해 팀 점심에도 동선이 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 5곳 모두 주차가 가능합니다. 다만 점심 12시 피크엔 만차될 수 있어 11:30~11:50 입장을 권장드리며, <strong>우트볼하우스</strong>는 데이트·팀 점심이라면 예약과 함께 도착 시간을 잡아두시는 편이 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 낮은 식당도 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>마라영웅 신동점</strong>은 평점 4.2로 본 가이드 평균(4.5) 이하지만, 망포에서 1인 마라 덮밥 점심 옵션으로 차별점이 명확하고 리뷰 388건으로 표본을 갖춰 포함했습니다. 평점만 기준이면 <strong>정남옥순대국 권선인계점</strong>(5.0)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/samsungElectronics/mangpo', text: '망포 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">망포 345곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">망포(수원 영통구 망포·신동 일대) 345곳에서 점심 시간대에 운영하는 식당을 필터링해, 카테고리 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰·점심 운영·메뉴 구성 4가지를 함께 본 결과 한식·일식·이탈리아·중식·카페로 한 끼 선택지가 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>정남옥순대국 권선인계점(5.0)</strong>이 1순위, 리뷰 표본 크기로는 <strong>우트볼하우스 신동본점(1,222건)</strong>이 1순위입니다. 두 식당은 카테고리가 달라 검색 의도가 겹치지 않으니, 해장 국밥이면 정남옥순대국, 데이트·팀 파스타면 우트볼하우스 식으로 분리해 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>마라영웅 신동점</strong>은 평점이 5곳 중 가장 낮지만 1인 마라 덮밥 점심이라는 차별점과 표본 크기로 포함했습니다. 호불호가 갈리는 식당이라 덮밥·세트 같은 표준 메뉴 위주로 주문하시면 만족도 편차가 줄어듭니다. 평점·검증 우선이면 <strong>정남옥순대국</strong>·<strong>우트볼하우스</strong>·<strong>키요미카레</strong>가 안정 후보입니다.</p>
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
