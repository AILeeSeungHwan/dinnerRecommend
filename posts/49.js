// 홍대 고기 맛집 추천 5곳 — 식당별 unique 콘텐츠
const post = {
  id: 49,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>홍대</strong>에서 소고기·삼겹·곱창·닭갈비까지 고기 한 끼를 풀어줄 식당 5곳을 정리했습니다. 홍대·합정·연남 일대 89곳에서 평점·리뷰 표본·메뉴 구성·운영 안정성 4가지를 기준으로 추렸고, 소고기구이·호르몬구이·돼지 화로구이·닭갈비·소고기국밥으로 카테고리를 분산했습니다. 모임·둘이서·혼밥 한 끼 등 상황별 1순위를 따로 골라 두었으니 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">89곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">홍대·합정·연남 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평점</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.4</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.0 ~ 4.9</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">19,089건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">1만원대~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">닭갈비 1~2만원 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">소고기 모임이면 <strong>육지</strong> — 평점 4.6·리뷰 11,425건으로 홍대 고기에서 표본이 압도적인 1순위입니다. 곱창·호르몬 굽기면 <strong>하카타호르몬</strong> (평점 4.6·리뷰 1,255건, 일본식 호르몬구이). 가성비 돼지 화로구이면 <strong>신선화로 홍대점</strong> (평점 4.0·리뷰 2,396건). 닭갈비 한 판이면 <strong>장인닭갈비 홍대점</strong> (1~2만원, 평점 4.0·리뷰 3,825건). 혼밥·해장 소고기 한 끼면 <strong>따로소고기국밥</strong> (평점 4.9·리뷰 188건).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>고기 카테고리 한정</strong> — 소고기·돼지·곱창·닭갈비 구이 중심으로 검색 의도 일치</li>
<li><strong>네이버 플레이스 리뷰 표본</strong> — 평균값이 흔들리지 않을 표본 크기 우선</li>
<li><strong>평점 4.0점 이상</strong> — 홍대 고기 카테고리 상위 구간으로 컷</li>
<li><strong>카테고리 분산</strong> — 소고기·호르몬·돼지 화로·닭갈비·소고기국밥 5종으로 분리</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">홍대·합정·연남 일대 89곳 중 소·돼지·곱창·닭갈비 구이에 들어가는 식당은 폭이 좁은 편이었습니다. 그중 평점·리뷰 표본·메뉴·운영이 함께 안정적인 5곳을 추렸습니다. 같은 부위 중복을 피해 소고기 모임·호르몬·돼지 화로·닭갈비·소고기 한 끼로 선택지를 다섯 갈래로 나눴고, 평점 4.0대 식당은 표본 크기와 차별점이 명확할 때만 포함했습니다.</p>`
    },

    { type: 'h2', id: 'yukji', text: '육지 — 홍대 소고기 모임의 압도적 표본 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyMjEwMTRfMjg0/MDAxNjY1NzA0NzgwNjMy.12bk01X7nuJk6emNeRVpwQ-O0EDS3mryBMgCGLBi7Hcg.aFiPbVbYkhS6S07QC48DCbo9dpVsPVKdiTf964ERkugg.JPEG.tjrfb3638/%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%989.jpg?type=w773" alt="육지 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 소고기·검증 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.6 · 리뷰 11,425건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 2~3만원대</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📈 블로그 9,833건</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>홍대 고기 5곳 중 평점·표본 양쪽 모두 압도적 1순위</strong>인 소고기구이집입니다. 마포구 독막로3길 34, 평점 4.6에 리뷰 11,425건·블로그 후기 9,833건으로 본 가이드에서 표본이 비교 불가 수준으로 두텁습니다. 2~3만원대 가격대의 소고기 라인업이라 동기 모임·기념일·팀 회식까지 폭넓게 묶이고, 표본이 만 건을 넘기면서도 평점 4.6을 유지한다는 점이 가장 큰 차별점입니다. 주말·저녁 피크엔 대기가 길 수 있어 이른 시간 방문이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"고기 질이 좋다 · 모임하기 좋다 · 사람이 많다" 같은 평이 자주 언급되었습니다. 소고기 만족도와 모임 수요가 함께 묶여 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 가격 매장 문의</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소고기 모둠</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">등심·살치</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">차돌박이</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">냉면·식사</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">모임</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">소고기 정석</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 최다</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">웨이팅 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 독막로3길 34 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 0503-7150-6574
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/육지" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 육지 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'hakata', text: '하카타호르몬 — 일본식 호르몬·곱창 굽기 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyNjA0MTZfODMg/MDAxNzc2MzMzNTAxMTE5.bttAZQ-2iM5S7kbozlNLrxXrC4UAsVLer50c5rjKCxUg.xFmBVUI5sd6m7eDrZl5DCLGp79f7en5_YxpwWTFCZhgg.JPEG/6.jpg?type=w580" alt="하카타호르몬 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🔥 호르몬·곱창 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.6 · 리뷰 1,255건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 매장 문의</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍶 술 곁들임 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">마포구 독막로5길 26에 있는 일본식 호르몬(곱창·내장)구이 전문점입니다. 평점 4.6에 리뷰 1,255건으로 표본이 안정적이고, 홍대 고기 가이드에서 <strong>소고기·돼지구이와 겹치지 않는 호르몬 단일 카테고리</strong>를 책임진다는 점이 차별점입니다. 곱창·막창을 술과 곁들이는 자리에 잘 맞고, 일본식 야키니쿠 스타일이라 둘이서 천천히 굽는 분위기에 어울립니다. 메뉴별 가격은 매장 게시 기준을 따르니 방문 전 확인이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"호르몬이 신선하다 · 술과 잘 맞는다 · 일본식 분위기" 같은 평이 자주 언급되었습니다. 곱창 신선도와 술 곁들임 수요가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 가격 매장 문의</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모둠 호르몬</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">곱창</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">막창</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">볶음밥·식사</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">호르몬·곱창</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">술 곁들임</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">둘이서</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">일본식 분위기</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 독막로5길 26 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 02-336-0427
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/하카타호르몬" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 하카타호르몬 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'sinseon', text: '신선화로 홍대점 — 가성비 돼지 화로구이', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyNTAzMTlfMTMw/MDAxNzQyMzcxMjg4MDQz.DLPlO_m2rz4536jNxc5OgFDymrOZ1JoTe-V3ozLgHxYg.wtF5PBC02tUAM92xGOMUVmB5py0HFnc5vWbOBk3543wg.JPEG/900%EF%BC%BF20250317%EF%BC%BF174806.jpg?type=w773" alt="신선화로 홍대점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 가성비 돼지 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.0 · 리뷰 2,396건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 매장 문의</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">마포구 어울마당로 136-2에 있는 돼지 화로구이 매장입니다. <strong>평점 4.0은 본 가이드 5곳 평균 아래입니다.</strong> 다만 리뷰 2,396건으로 표본이 두 번째로 두텁고, 평점이 다소 낮은 이유는 홍대 중심 상권에서 회전이 빠른 화로구이라 기대치 편차가 함께 쌓인 것으로 해석됩니다. 정통 고깃집보다 캐주얼하게 삼겹·목살을 굽는 자리라 학생·직장인 모임에서 가성비 옵션으로 묶이며, 메뉴별 가격은 매장 게시 기준을 따릅니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"가격이 부담 없다 · 회전이 빠르다 · 양이 괜찮다" 같은 평이 자주 언급되었습니다. 가성비와 캐주얼 회전이 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 가격 매장 문의</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼겹살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">목살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">항정살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">된장찌개·식사</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">캐주얼</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">학생·직장인 모임</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">회전 빠름</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 어울마당로 136-2 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 02-324-9858
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/신선화로 홍대점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 신선화로 홍대점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'jangin', text: '장인닭갈비 홍대점 — 1~2만원 닭갈비 한 판', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyNDAxMTFfMjM4/MDAxNzA0OTgwODcwMzEx.TbQX3Z1ZiTh_4DfOFqcGSJMtNpjC0bzrNa8xKlMHQhAg.OOSaho4ltgjLqzeIkBzpMqR_RaYaUCCkhWpjHBtSRg4g.JPEG.wjsansghks0428/002.jpg?type=w773" alt="장인닭갈비 홍대점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍗 닭갈비 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.0 · 리뷰 3,825건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1~2만원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📈 블로그 3,608건</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">마포구 어울마당로 111-1에 있는 닭갈비 전문점입니다. <strong>평점 4.0은 본 가이드 평균 아래</strong>지만, 리뷰 3,825건·블로그 후기 3,608건으로 표본이 매우 두텁고 <strong>1~2만원 가격대</strong>가 명확한 차별점입니다. 소·돼지구이와 겹치지 않는 닭갈비 단일 카테고리를 책임지는 곳이라, 여럿이 한 판을 나눠 먹는 학생·친구 모임에 잘 맞습니다. 홍대 중심 상권이라 회전이 빠르고 평점 편차가 함께 쌓이는 점은 감안하는 편이 정확합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"양이 푸짐하다 · 여럿이 나눠 먹기 좋다 · 가격이 무난하다" 같은 평이 자주 언급되었습니다. 가성비와 단체 공유 수요가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 1~2만원 가격대 (가격 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">닭갈비 (1인분)</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">치즈 닭갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">볶음밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">막국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">닭갈비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">친구 모임</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한 판 공유</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">가성비</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 어울마당로 111-1 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 02-511-8812
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/장인닭갈비 홍대점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 장인닭갈비 홍대점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'ttaro', text: '따로소고기국밥 — 혼밥·해장 소고기 한 끼', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://blog.kakaocdn.net/dn/r8Wfr/btsOoirdQwn/7ID254KS8xSAfBGoY7PzW0/img.webp" alt="따로소고기국밥 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍲 혼밥·해장 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 188건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 매장 문의</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍜 혼밥 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">마포구 와우산로3길 8에 있는 소고기국밥 전문점입니다. 평점 4.9는 본 가이드 5곳 중 가장 높지만 <strong>리뷰 188건으로 표본은 가장 작아 평점을 그대로 일반화하기엔 이른 편</strong>입니다. 다만 구이가 부담스러운 날 소고기를 국물 한 그릇으로 가볍게 풀 수 있는 유일한 옵션이라 차별점이 명확합니다. 혼자 빠르게 한 끼·전날 술 다음 날 해장에 잘 맞고, 메뉴별 가격은 매장 게시 기준을 따르니 방문 전 확인이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물이 깔끔하다 · 혼자 먹기 좋다 · 해장에 좋다" 같은 평이 자주 언급되었습니다. 국물 만족도와 혼밥·해장 수요가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 가격 매장 문의</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소고기국밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">따로국밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">공기밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">해장</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">국물 한 그릇</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">빠른 한 끼</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 와우산로3길 8 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 02-332-6521
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/따로소고기국밥" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 따로소고기국밥 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·가격·상황별 매칭', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">가격대</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">차별점</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>육지</strong><br><span style="font-size:11px;color:#888780">소고기구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.6<br><span style="font-size:11px;color:#888780">11,425건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">2~3만원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 압도적 + 모임</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>하카타호르몬</strong><br><span style="font-size:11px;color:#888780">호르몬·곱창</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.6<br><span style="font-size:11px;color:#888780">1,255건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#888780">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">일본식 곱창 + 술 곁들임</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>신선화로 홍대점</strong><br><span style="font-size:11px;color:#888780">돼지 화로구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">2,396건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#888780">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">가성비 + 캐주얼 회전</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>장인닭갈비 홍대점</strong><br><span style="font-size:11px;color:#888780">닭갈비</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">3,825건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">1~2만원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">한 판 공유 + 친구 모임</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>따로소고기국밥</strong><br><span style="font-size:11px;color:#888780">소고기국밥</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">188건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#888780">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">혼밥·해장 국물 한 그릇</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 고기는 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍻 소고기 모임·기념일</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>육지</strong> — 평점 4.6·리뷰 11,425건. 표본이 압도적인 홍대 소고기 정석.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🔥 곱창·호르몬에 한잔</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>하카타호르몬</strong> — 일본식 호르몬구이. 둘이서 천천히 굽고 술 곁들이기 좋습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 가성비 돼지구이</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>신선화로 홍대점</strong> — 캐주얼 화로구이. 학생·직장인 모임에서 부담 없는 옵션.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍗 닭갈비 한 판 공유</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>장인닭갈비 홍대점</strong> — 1~2만원 가격대. 여럿이 한 판 나눠 먹는 친구 모임.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍲 혼밥·해장 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>따로소고기국밥</strong> — 구이가 부담스러운 날 소고기를 국물 한 그릇으로.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>육지</strong>는 표본이 만 건을 넘는 인기 매장이라 주말·저녁 피크엔 대기가 깁니다. 이른 시간 방문 또는 평일 방문이 안전합니다.</li>
<li><strong>신선화로 홍대점·장인닭갈비 홍대점</strong>은 평점 4.0으로 본 가이드 평균 아래입니다. 표본은 두텁지만 홍대 중심 상권 회전이 빨라 기대치 편차가 함께 쌓인 점을 감안하시면 정확합니다.</li>
<li><strong>따로소고기국밥</strong>은 평점 4.9로 가장 높지만 리뷰 188건으로 표본이 작아 평점을 그대로 일반화하기엔 이릅니다. 혼밥·해장 옵션이라는 차별점 기준으로 보시는 편이 정확합니다.</li>
<li>가격이 "매장 문의"인 곳은 가격 데이터가 정리되어 있지 않아 임의로 만들지 않았습니다. 방문 전 매장 게시 메뉴판을 확인하시는 편이 안전합니다.</li>
<li>홍대·합정 일대는 전용 주차장이 없는 매장이 많습니다. 인근 공영주차장 또는 대중교통(홍대입구역) 이용을 권장드립니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 홍대에서 소고기 모임하기 좋은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>육지</strong>가 1순위입니다. 평점 4.6·리뷰 11,425건·블로그 후기 9,833건으로 홍대 고기 카테고리에서 표본이 압도적입니다. 2~3만원대 소고기 라인업이라 동기 모임·기념일·팀 회식에 폭넓게 묶입니다. 주말 피크엔 대기가 길어 이른 시간 방문이 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 곱창·호르몬을 굽고 싶으면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>하카타호르몬</strong>이 일본식 호르몬(곱창·내장)구이 전문입니다. 평점 4.6·리뷰 1,255건으로 표본이 안정적이고, 소·돼지구이와 겹치지 않는 호르몬 단일 카테고리를 책임집니다. 둘이서 천천히 굽고 술을 곁들이는 자리에 잘 맞습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가성비로 돼지구이를 먹고 싶으면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>신선화로 홍대점</strong>이 캐주얼 돼지 화로구이입니다. 평점 4.0으로 본 가이드 평균 아래지만 리뷰 2,396건으로 표본이 두텁고, 학생·직장인 모임에서 부담 없는 가성비 옵션으로 묶입니다. 회전이 빠른 매장이라 평점 편차가 함께 쌓이는 점은 감안하시면 정확합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 여럿이 한 판 나눠 먹을 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>장인닭갈비 홍대점</strong>이 잘 맞습니다. 1~2만원 가격대로 평점 4.0·리뷰 3,825건·블로그 후기 3,608건. 닭갈비 한 판을 여럿이 나눠 먹는 친구 모임에 어울리고, 소·돼지구이와 겹치지 않는 닭갈비 단일 카테고리를 책임집니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점 4.0대 식당을 왜 포함했나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>신선화로 홍대점(4.0·2,396건)</strong>과 <strong>장인닭갈비 홍대점(4.0·3,825건)</strong>은 평점이 본 가이드 평균 아래지만 표본이 두텁고 가격·카테고리 차별점이 명확해 가성비·닭갈비 옵션으로 포함했습니다. 평점만 기준이면 <strong>육지</strong>(4.6)가 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 따로소고기국밥은 평점이 가장 높던데 1순위 아닌가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>따로소고기국밥</strong>은 평점 4.9로 5곳 중 가장 높지만 리뷰 188건으로 표본이 가장 작아 평점을 그대로 일반화하기엔 이른 편입니다. 구이가 부담스러운 날 소고기를 국물 한 그릇으로 푸는 혼밥·해장 옵션이라는 차별점으로 포함했고, 모임 1순위는 표본이 압도적인 <strong>육지</strong>입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/hongdae', text: '홍대 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">홍대 89곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">홍대·합정·연남 일대 89곳에서 소·돼지·곱창·닭갈비 구이에 들어가는 식당을 필터링해, 부위 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰·메뉴 구성·운영 안정성 4가지를 함께 본 결과, 소고기 모임·호르몬·돼지 화로·닭갈비·소고기 한 끼로 선택지가 다섯 갈래로 자연스럽게 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px"><strong>신선화로 홍대점·장인닭갈비 홍대점</strong>은 평점 4.0으로 본 가이드 평균 아래입니다. 다만 표본이 두텁고 가격·카테고리 차별점이 명확해 가성비·닭갈비 옵션으로 포함했습니다. <strong>따로소고기국밥</strong>은 평점 4.9로 가장 높지만 리뷰 188건으로 표본이 작아 평점만으로 일반화하기엔 이른 편입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">평점·표본을 함께 보면 <strong>육지</strong>가 소고기 모임 1순위, 호르몬 굽기면 <strong>하카타호르몬</strong>, 가성비 돼지면 <strong>신선화로 홍대점</strong>입니다. 카테고리가 모두 달라 검색 의도가 겹치지 않으니 그날 먹고 싶은 부위로 분리해서 고르시면 됩니다. 가격이 "매장 문의"인 곳은 임의로 만들지 않았으니 방문 전 메뉴판을 확인하시면 정확합니다.</p>
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
