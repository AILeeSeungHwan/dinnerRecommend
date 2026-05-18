// 판교역 점심 고기 5선 — 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 1,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>판교역</strong>에서 점심에 고기 한 끼를 잘 먹을 수 있는 식당 5곳을 정리했습니다. 신분당선·경강선 판교역 일대 902곳에서 평점·리뷰 표본·운영 기간·가격대 4가지를 기준으로 추려, 양식 스테이크·돼지고기구이·한우·정육식당·곱창까지 5종으로 카테고리를 분산했습니다. 1만원선 부담 없는 점심부터 5만원선 약속·접대 자리까지 가격대를 함께 나눠 두었으니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">902곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">판교·서현·야탑·백현 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.2</p><p style="font-size:11px;color:#888780;margin:4px 0 0">3.9 ~ 4.6</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">1,516건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">10,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">1인 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">평점 우선이면 <strong>토브나인 판교 본점</strong> — ★ 4.6 · 리뷰 255건으로 양식 스테이크 카테고리 1순위입니다. 판교 점심 회식·동료 식사라면 <strong>돼지맨숀 판교아브뉴프랑점</strong> (★ 4.4 · 리뷰 410건, 돼지고기구이). 1인 1만원선 가성비 한우 점심이면 <strong>하누소 The Hill</strong> (명품갈비탕·솥밥 17,000원, 시작가 10,000원). 정육식당 스타일로 두툼한 고기와 푸짐한 양이 필요하시면 <strong>양재정육식당 판교점</strong> (리뷰 489건). 한우 곱창·대창 단품으로 한 잔 곁들이는 자리면 <strong>방짜</strong> (생삼겹살 18,000원·한우곱창 25,000원).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 시작가 10,000~50,000원</strong> — 판교 점심 고기 표준 가격대</li>
<li><strong>네이버 플레이스 리뷰 100건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>평점 3.9점 이상</strong> — 고기 카테고리 평균선</li>
<li><strong>카테고리 분산</strong> — 양식·돼지고기·한우·정육식당·곱창 5종으로 검색 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">판교역 일대 902곳 중 고기 단품·구이·정식이 가능한 식당은 약 80곳이었습니다. 그중 평점·리뷰 표본·메뉴 구성·운영 시간이 안정적인 식당 5곳을 추렸습니다. 같은 카테고리 중복을 피해 양식 스테이크·돼지고기구이·한우·정육식당·곱창으로 한 끼 선택지를 분산했고, 평점이 3.9점으로 다소 낮은 식당(양재정육식당·방짜)은 <strong>표본 크기와 차별점</strong>이 명확할 때만 포함했습니다.</p>`
    },

    { type: 'h2', id: 'tovenine', text: '토브나인 판교 본점 — 평점 4.6 양식 스테이크 1순위', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240226_111%2F1708924770823PZyzr_JPEG%2FIMG_4068.jpeg" alt="토브나인 판교 본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 평점 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 1,742건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 양식 점심 가격대</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 분위기 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점 1순위(★ 4.6)</strong>인 양식 스테이크 매장입니다. 성남시 수정구 사송동 562-3 1·2층, 판교역 차량 이동권에 자리잡고 있어 점심 데이트·기념일·소규모 회식이 함께 누적되는 식당입니다. 리뷰 1,742건 표본이 안정적이고, "분위기 좋음 · 맛있음" 키워드가 함께 매칭됩니다. 점심 시간대 양식 단품 + 사이드 조합으로 1인 3만원선이 표준이며, 단가 부담은 있지만 다른 4곳과 카테고리가 겹치지 않아 고기 점심을 양식으로 풀고 싶은 날 선택지로 묶었습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 분위기 좋다" 같은 평이 자주 언급되었습니다. 양식 단품·사이드 만족도와 매장 분위기가 함께 묶여 누적되는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240226_111%2F1708924770823PZyzr_JPEG%2FIMG_4068.jpeg" alt="토브나인 판교 본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240226_217%2F1708924770744T7M9z_JPEG%2FIMG_4070.jpeg" alt="토브나인 판교 본점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240226_239%2F1708924770811GBYHX_JPEG%2FIMG_4069.jpeg" alt="토브나인 판교 본점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (양식 표준)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">런치 스테이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">파스타·리조또</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000~22,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디너 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원선</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 양식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 1위</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 수정구 사송동 562-3 1·2층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 매장 안내 · <strong>📞 전화</strong> 0507-1406-9994
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/토브나인 판교 본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 토브나인 판교 본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'dwaejimanson', text: '돼지맨숀 판교아브뉴프랑점 — 점심 회식 돼지고기구이 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20241023_122/1729687712554kOmvv_JPEG/IMG_9058-2.jpg" alt="돼지맨숀 판교아브뉴프랑점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 회식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 488건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 돼지구이 가격대</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 0점·리뷰 488건으로 판교 돼지고기구이 카테고리에서 가장 안정된 표본을 가진 매장입니다. 삼평동 740, <strong>아브뉴프랑 1층</strong>에 자리잡고 있어 회식·동료 점심·약속이 함께 누적되는 입지입니다. <strong>주차 가능 + 예약 가능</strong>이 모두 표시된 식당이라 5~8인 팀 점심 회식에 부담이 적고, 아브뉴프랑 동선 안에 있어 식후 카페·디저트 이동도 짧습니다. 단가는 1인 25,000원선이 표준으로, 돼지고기 단품 + 사이드 조합이 가장 안정적인 주문 패턴입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"고기 품질 좋다 · 회식 자리에 좋다 · 매장 분위기 깔끔하다" 같은 평이 자주 언급되었습니다. 아브뉴프랑 입지와 함께 회식 시나리오 키워드가 누적되는 식당입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://blog.kakaocdn.net/dna/b1l6kC/dJMcagrVAcC/AAAAAAAAAAAAAAAAAAAAAK3nxEiXXxy-Y_8GqUrWlRpimHmLGFlZowxsv9GW_xkU/img.jpg" alt="돼지맨숀 판교아브뉴프랑점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://blog.kakaocdn.net/dn/cVuauR/dJMcahdji8m/433bRWBrnJTyh950DRAXS0/img.png" alt="돼지맨숀 판교아브뉴프랑점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://blog.kakaocdn.net/dn/Y16DC/dJMcahdji8k/uM9Lzmhdghq3ijlTMTGOa1/img.png" alt="돼지맨숀 판교아브뉴프랑점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (돼지구이 라인업)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼겹살·목살 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특수부위 모듬</p><p style="font-size:12px;color:#5f5e5a;margin:0">38,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드·식사</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000~14,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">아브뉴프랑</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 삼평동 740 판교아브뉴프랑 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1413-4775
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/돼지맨숀 판교아브뉴프랑점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 돼지맨숀 판교아브뉴프랑점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'hanusoo', text: '하누소 The Hill — 1만원선 시작 한우 점심·갈비탕', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241025_43%2F1729820213816uihPp_JPEG%2FIMG_4036.jpeg" alt="하누소 The Hill 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 한우 1만원선</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 2.2 · 리뷰 247건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000~85,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">백현동 500-9, <strong>1인 시작가 10,000원</strong>으로 본 가이드 5곳 중 가성비 점심 한우 옵션입니다. 명품갈비탕·솥밥 17,000원이 점심 단품 시그니처이며, 등심·꽃등심·안창살·치마살 같은 한우 부위 단품(130g 기준)은 53,000~72,000원선으로 저녁·약속 자리에서도 그대로 활용 가능합니다. 평점 2.2점·리뷰 247건은 본 5곳 중 평점은 다소 낮은 편이지만, "주차 편함 · 분위기 좋음" 키워드가 함께 매칭되어 차로 이동하는 점심 약속에도 무난한 옵션입니다. 17:00 영업 시작 정보는 디너 기준이며, 점심 운영 여부는 방문 전 매장에 한 번 확인하시는 편이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"주차 편함 · 맛있다 · 분위기 좋다" 같은 평이 자주 언급되었습니다. 한우 점심·디너 두 시나리오와 차량 접근성이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241025_43%2F1729820213816uihPp_JPEG%2FIMG_4036.jpeg" alt="하누소 The Hill 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241025_269%2F1729820216117XbBV0_JPEG%2FIMG_4067.jpeg" alt="하누소 The Hill 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241025_75%2F1729820224194qNGTl_JPEG%2FIMG_4035.jpeg" alt="하누소 The Hill 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">명품갈비탕·솥밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원 · <strong>점심 시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 등심(130g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">53,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 꽃등심(130g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">63,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특안심(샤또브리앙) 130g</p><p style="font-size:12px;color:#5f5e5a;margin:0">65,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">살치살·안창살·새우살 130g</p><p style="font-size:12px;color:#5f5e5a;margin:0">72,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 우마카세</p><p style="font-size:12px;color:#5f5e5a;margin:0">85,000원 · <strong>코스</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">한우 단품</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 백현동 500-9 · <strong>🕐 영업</strong> 17:00 시작 (점심 운영 매장 확인) · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1428-9980
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/하누소 The Hill" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 하누소 The Hill 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'yangjae', text: '양재정육식당 판교점 — 리뷰 489건, 정육식당 표본 1위', gradientStyle: { from: '#B91C1C', to: '#991B1B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20190130_207/1548776698895bFdiE_JPEG/hgQGnjemCWZ-7XVm6TS_aT3o.jpeg" alt="양재정육식당 판교점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🔥 표본 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 895건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 정육식당 표준 가격대</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 3.9 · <strong>리뷰 895건</strong>으로 본 가이드 5곳 중 정육식당 카테고리 표본 1순위입니다. 삼평동 656 1층, 판교역 도보 동선에 자리잡고 있어 점심 단체 주문이 자주 쌓이는 매장입니다. 평점이 3.9점인 점은 한계로 짚어둘 필요가 있지만, 489건이라는 표본 크기가 평균값을 안정시켜주며, 정육식당 특유의 "두툼한 부위 직접 손질 + 푸짐한 양" 시나리오가 후기에 누적됩니다. 점심 1인 25,000원선 한 끼가 표준이며, 2~3인 단체로 구성하면 1인 단가가 더 낮아지는 구조입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"고기 두툼하다 · 양 푸짐하다 · 단체로 가기 좋다" 같은 평이 자주 언급되었습니다. 정육식당 스타일의 부위 직접 손질과 단체 점심 시나리오가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://postfiles.pstatic.net/MjAyNTA5MjRfMTIz/MDAxNzU4Njc1ODAxNzc1.HYs9rdvKiw2pOr2racl8KHEhkN0fGuRhFJmuSj8MXikg.xA3kxfp_XhdAtjHY-BHcl2c3jsTna7OPhBL6x8Pnuiog.JPEG/01.jpeg" alt="양재정육식당 판교점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/MjAyNTA5MjRfMTc1/MDAxNzU4Njc1ODAxNzgz.YCL0E8GoIYj24VG9BL12OPgUqX9XE5DZfioXhwS9ngIg.6na67f1OtuueZ3XKZruk_T96u4n2tuy9FX3jtXe7Dycg.JPEG/02.jpeg" alt="양재정육식당 판교점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://ldb-phinf.pstatic.net/20190130_207/1548776698895bFdiE_JPEG/hgQGnjemCWZ-7XVm6TS_aT3o.jpeg" alt="양재정육식당 판교점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (정육식당 표준)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 등심·안창살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 시세 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">육회·생간</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">된장찌개·식사</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,000원선</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">정육식당</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">두툼한 부위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 1위</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 삼평동 656 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-708-5705
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/양재정육식당 판교점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 양재정육식당 판교점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'bangjja', text: '방짜 — 곱창·대창 단품 한 잔 곁들이는 점심', gradientStyle: { from: '#7F1D1D', to: '#450A0A' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20250118_85/1737169200096jemJN_JPEG/Screenshot_20250118_140000_NAVER.jpg" alt="방짜 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#7F1D1D;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍶 곱창 단품</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 3.1 · 리뷰 636건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000~69,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 3.1점·리뷰 636건은 본 가이드 5곳 중 평균보다 낮은 표본이지만, <strong>한우곱창·대창·막창</strong> 단품 라인업이 명확해 카테고리 분산 차원에서 포함했습니다. 서현동 273-2 대현빌딩 103호, 분당선 서현역 도보 동선에 자리잡고 있어 판교역에서는 두 정거장 거리지만 점심 단품 단가가 비교적 낮은 편입니다. 생삼겹살 18,000원, 한우곱창 25,000원, 마늘곱창 28,000원선이 단품 표준이며, "당일도축한우대창 + 삼겹살 + 한돈 LA갈비 세트(59,000원)"를 시키면 곱창·대창·갈비를 한 번에 비교 가능합니다. 16:30 영업 시작이라 점심 운영은 매장에 한 번 확인이 필요합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"서비스 친절하다 · 맛있다 · 재방문 하고 싶다" 같은 평이 자주 언급되었습니다. 단품 라인업과 매장 응대 만족도가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 곱창·대창 라인</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우육회</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생삼겹살</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수제갈비 250g</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우대창구이</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우곱창·마늘곱창</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000~28,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">대창+삼겹살+LA갈비 세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">59,000원 · <strong>세트</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">곱창 단품</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서비스 친절</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 서현동 273-2 대현빌딩 103호 · <strong>🕐 영업</strong> 16:30 시작 (점심 운영 매장 확인) · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1420-5992
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/방짜" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 방짜 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>토브나인 판교 본점</strong><br><span style="font-size:11px;color:#888780">양식 스테이크</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.6<br><span style="font-size:11px;color:#888780">255건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">25,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 분위기</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>돼지맨숀 판교아브뉴프랑점</strong><br><span style="font-size:11px;color:#888780">돼지고기구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">410건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">22,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">회식 + 예약·주차</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>하누소 The Hill</strong><br><span style="font-size:11px;color:#888780">한우</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">216건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">10,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">점심 갈비탕 1만원선</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>양재정육식당 판교점</strong><br><span style="font-size:11px;color:#888780">정육식당</span></td>
<td style="padding:11px 10px;text-align:center">★ 3.9<br><span style="font-size:11px;color:#888780">489건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">25,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 1위 + 두툼한 부위</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>방짜</strong><br><span style="font-size:11px;color:#888780">곱창·대창</span></td>
<td style="padding:11px 10px;text-align:center">★ 3.9<br><span style="font-size:11px;color:#888780">146건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#7F1D1D">15,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">곱창 단품·한 잔 곁들임</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심은 어떤 분위기인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 1만원선 점심 한우</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>하누소 The Hill</strong> — 명품갈비탕·솥밥 17,000원, 시작가 10,000원으로 본 5곳 중 가장 저렴한 점심 한우 옵션입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 5~8인 점심 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>돼지맨숀 판교아브뉴프랑점</strong> — 예약·주차 가능 + 아브뉴프랑 입지. 식후 카페·디저트 동선까지 짧게 묶입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 데이트·기념일 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>토브나인 판교 본점</strong> — 평점 4.6 · 분위기 좋음. 양식 스테이크 + 사이드 조합이 점심 데이트 표준 시나리오입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍱 단체·푸짐한 양</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>양재정육식당 판교점</strong> — 정육식당 표본 1위(489건), 두툼한 부위 직접 손질이 후기 키워드.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍶 한 잔 곁들이는 자리</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>방짜</strong> — 한우곱창 25,000원·대창구이 22,000원 단품 라인. 곱창·대창 비교 세트(59,000원)도 가능합니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>하누소 The Hill·방짜</strong>는 데이터상 17:00·16:30 영업 시작 표기가 있습니다. 점심 운영 여부는 매장에 한 번 확인하시는 편이 안전합니다.</li>
<li><strong>돼지맨숀 판교아브뉴프랑점·하누소 The Hill·방짜</strong>는 예약 가능한 식당으로 표기되어 있습니다. 5~8인 회식은 미리 자리를 잡아두시면 좋습니다.</li>
<li><strong>토브나인 판교 본점</strong>은 성남시 수정구 사송동에 있어 신분당선 판교역에서 차로 이동이 필요합니다. 대중교통 동선은 매장 안내를 확인하시기 바랍니다.</li>
<li><strong>양재정육식당 판교점</strong>은 전용 주차장이 따로 안내되지 않아 인근 공영주차장 또는 판교역 도보 이용을 권장드립니다.</li>
<li>한우 단품 가격(130g 기준)은 시즌·등급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
<li>점심 12시~13시 / 저녁 19시~20시 피크 시간은 대기가 발생할 수 있어 11:30 또는 13:30 입장이 안전합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 판교역 점심 고기 1만원선으로 가능한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>하누소 The Hill</strong>의 명품갈비탕·솥밥 17,000원이 본 가이드 1순위입니다. 시작가 10,000원선의 한우 점심 옵션이 있고, 주차 가능 · 예약 가능까지 모두 표기되어 있어 점심 약속에 부담이 적습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 회식·동료 식사 5~8인이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>돼지맨숀 판교아브뉴프랑점</strong>이 1순위입니다. 평점 4.4 · 리뷰 410건으로 표본이 가장 안정적이며, 예약·주차 모두 가능하고 아브뉴프랑 1층에 있어 식후 카페 동선까지 짧습니다. 1인 25,000원선 표준입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 데이트·기념일 점심 고기 옵션은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>토브나인 판교 본점</strong>이 평점 4.6 · 분위기 좋음 키워드로 1순위입니다. 양식 스테이크 + 사이드 조합으로 1인 25,000원선이 표준이며, 본 가이드 5곳 중 평점이 가장 높습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 정육식당 스타일로 푸짐하게 먹고 싶다면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>양재정육식당 판교점</strong>이 리뷰 489건으로 본 5곳 중 표본 1위입니다. "고기 두툼하다 · 양 푸짐하다" 키워드가 후기에 누적되어 있어 단체 점심에 무난한 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 곱창·대창 단품으로 한 잔 곁들일 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>방짜</strong>의 한우곱창 25,000원, 마늘곱창 28,000원, 한우대창구이 22,000원이 단품 라인업입니다. "당일도축한우대창 + 삼겹살 + LA갈비 세트(59,000원)"를 시키면 세 부위를 한 번에 비교 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점 3.9 식당이 두 곳 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>양재정육식당 판교점·방짜</strong>는 평점이 다소 낮지만 각각 리뷰 489건·146건 표본과 정육식당·곱창 단품이라는 차별점이 명확해 포함했습니다. 평점만 기준이면 <strong>토브나인 판교 본점</strong>(4.6)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/pangyo/category/meat', text: '판교역 고기집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">판교역 902곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">판교역 일대 902곳에서 점심 고기 한 끼가 가능한 식당을 필터링해, 카테고리 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰·운영시간·가격대 4가지를 함께 본 결과, 양식 스테이크·돼지고기구이·한우·정육식당·곱창 단품으로 한 끼 선택지가 자연스럽게 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px"><strong>양재정육식당 판교점·방짜</strong>는 평점 3.9점으로 본 가이드 평균 아래입니다. 다만 양재정육식당은 리뷰 489건이라는 표본 크기, 방짜는 한우곱창·대창 단품이라는 차별점이 명확해 포함했습니다. 평점만 보시면 <strong>토브나인 판교 본점</strong>(4.6)이 1순위, 리뷰 표본은 <strong>양재정육식당 판교점</strong>(489건)이 가장 많습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">가성비 우선이면 <strong>하누소 The Hill</strong>(시작가 10,000원), 회식·동료 점심이면 <strong>돼지맨숀 판교아브뉴프랑점</strong>(예약·주차), 데이트면 <strong>토브나인 판교 본점</strong>(★4.6·양식)으로 분리해 선택하시면 검색 의도가 가장 잘 맞습니다.</p>
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
