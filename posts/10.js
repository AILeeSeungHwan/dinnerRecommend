// 망포역 가성비 점심 1만원대 — 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 10,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>망포역</strong>에서 1만원 안팎으로 점심 한 끼를 해결할 수 있는 식당 5곳을 정리했습니다. 분당선 망포역 주변 345곳에서 평점·리뷰 표본·운영 기간·가격대 4가지를 기준으로 추려, 짬뽕·해장국·설농탕·일식·카페까지 카테고리를 분산했습니다. 직장인 점심·혼밥·해장 등 상황별로 다른 1순위를 골라 두었으니 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">345곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">망포·신동·영통 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.0</p><p style="font-size:11px;color:#888780;margin:4px 0 0">3.8 ~ 4.3</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">5,019건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">4,700원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">카페 음료 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">짜장면 한 그릇 7,500원으로 가장 저렴한 옵션이면 <strong>판차이짬뽕</strong> — 평점 4.3·리뷰 1,370건으로 검증까지 1순위입니다. 야근·숙취 다음 날 해장이면 <strong>서울24시감자탕해장국</strong> — 콩나물해장국 8,000원에 24시간 영업. 한식 정식이면 <strong>신선설농탕 영통점</strong> (설농탕 12,000원 시작). 일식 함박·뇨끼면 <strong>와요쇼쿠 신동본점</strong> (1만원대 시작, 데이트 분위기). 점심 1시간 안에 음료+간단 식사면 <strong>스타벅스 수원망포DT점</strong> (아메리카노 4,700원~).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 시작가 5,000~13,000원</strong> — 1만원대 점심 표준 가격대</li>
<li><strong>네이버 플레이스 리뷰 700건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>평점 3.7점 이상</strong> — 가성비 카테고리 평균선 (전 카테고리 평균 4.1점 대비 약간 완화)</li>
<li><strong>카테고리 분산</strong> — 중식·해장국·설농탕·일식·카페 5종으로 검색 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">망포역 일대 345곳 중 1만원대 점심에 들어가는 식당은 약 70곳이었습니다. 그중 평점·리뷰 표본·메뉴 구성·운영 시간이 안정적인 식당 5곳을 추렸습니다. 같은 카테고리 중복을 피해 짜장면·해장·설농탕·일식·카페로 한 끼 선택지를 분산했고, 평점이 다소 낮은 식당(서울24시감자탕해장국)은 <strong>표본 크기와 차별점</strong>이 명확할 때만 포함했습니다.</p>`
    },

    { type: 'h2', id: 'panchai', text: '판차이짬뽕 — 가성비·검증 둘 다 1순위인 중식', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTExMjVfMTE2%2FMDAxNzY0MDQ3MzMzNjY0.r0mO-YkhfWsgLk37WStbPi_5SwQ0MCSJ1DlnKkSUvUsg.hkyeGQaq9QNGKUwDbqAMwHofSaucrH3L1mFRIAR2VVIg.JPEG%2F626BBC1B-8B84-46CE-B3CB-8AD1F3571E07.jpeg" alt="판차이짬뽕 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 가성비 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 1,370건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 7,500원~22,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>망포 가성비 5곳 중 평점·리뷰 양쪽 모두 1순위</strong>인 중식당입니다. 신동 486번지 1층, 분당선 망포역에서 도보로 접근 가능합니다. 리뷰 1,370건은 본 가이드 5곳 중 두 번째로 많은 표본이며, 평점 4.3은 가장 높습니다. 점심 회전이 빠른 단품 메뉴 중심 운영이라 12시 피크에도 자리 잡기가 수월하며, 10:00 영업 시작이라 점심 11시대 일찍 가시면 더 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"양이 많다 · 맛있다 · 분위기 깔끔하다" 같은 평이 자주 언급되었습니다. 단품·세트 메뉴 회전이 빠른 식당이라는 점이 후기 키워드로 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240925_5%2F1727274067378lQh1n_JPEG%2Fmmexport1727079918396.jpg" alt="판차이짬뽕 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTEyMDlfNDgg%2FMDAxNzY1MjcwNjIyNDM3.uUeA_nPdCPGbQJW7nymEPoMvgoPXvW49DsgT9ZdXizQg.mvFcH0-ylsosUvhI_JyAKRC6XmRXJBwisMfJTzX8kXsg.JPEG%2F20251209_175556.jpg.jpg" alt="판차이짬뽕 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240925_5%2F1727274067378lQh1n_JPEG%2Fmmexport1727079918396.jpg" alt="판차이짬뽕 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짜장면</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,500원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">간짜장</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">직화짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">통오징어짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">탕수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원 · 2인</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">꿔보러우</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원 · 2~3인</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 7,500원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">깔끔한 곳</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 486 1층 106호 · <strong>🕐 영업</strong> 10:00 시작 · <strong>🚗 주차</strong> 매장 주차장 운영 · <strong>📞 전화</strong> 07-1410-6698
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/판차이짬뽕" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 판차이짬뽕 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'haejang', text: '서울24시감자탕해장국 — 24시간 영업하는 망포 해장 1순위', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://blog.kakaocdn.net/dn/cOjvXJ/btsQep340Bd/VYBCU9jDDP8LuYrNHb5D80/img.jpg" alt="서울24시감자탕해장국 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 3.8 · 리뷰 1,397건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,000원~11,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 심야 영업</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 3.8점은 본 가이드 5곳 중 평균 아래입니다. 다만 <strong>리뷰 1,397건</strong>은 망포 가성비 카테고리에서 가장 많은 표본이며, 평점이 다소 낮은 이유는 영업시간이 길어 호불호 갈리는 표본이 함께 쌓인 것으로 해석됩니다. <strong>망포에서 24시간 운영되는 거의 유일한 해장국집</strong>이라 야근·새벽 출근·숙취 다음 날 옵션으로 차별점이 명확합니다. 망포동 28-9, 네이버 블로그 후기 480건이 함께 누적되었습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물이 진하다 · 메인 뼈해장국이 맛있다 · 서비스가 친절하다" 같은 평이 자주 언급되었습니다. 메인 메뉴 만족도와 24시간 영업이 함께 묶여 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 해장 전용</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">콩나물해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원 · <strong>최저가 해장</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">뼈해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순대국</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">감자탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">2인 이상 매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">해장 1순위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">24시간 영업</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">국물맛 검증</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 망포동 28-9 · <strong>🕐 영업</strong> 24시간 (매장 공지 우선) · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-206-2324
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/서울24시감자탕해장국" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 서울24시감자탕해장국 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'sinsun', text: '신선설농탕 영통점 — 한식 정식 1만2천원선 안정 옵션', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241007_129%2F1728303207168i2SLC_JPEG%2F1000000147.jpg" alt="신선설농탕 영통점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 888건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~20,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 사진 명소</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신선설농탕은 <strong>전국 체인</strong>이며 영통점은 영통로214번길 60에 위치합니다. 평점 4.1·리뷰 888건이 누적된 안정적인 식당으로, <strong>10:00~22:00 영업</strong>이라 점심·저녁 모두 가능합니다. 1인 1만2천원선이 표준이며, "사진 잘 나오는 매장·데이트·가족 외식" 평가가 함께 매칭됩니다. 가족 외식·회식 단체 손님이 누적되는 곳이라 평일 점심·주말 점심 모두 무난한 선택지입니다. 분당선 망포역에서는 한 정거장(영통역) 거리이지만, 망포 직장인이 점심 시간에 자주 찾는 한식 옵션 중 하나로 묶입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물 진하다 · 정식 구성 푸짐하다 · 매장 깔끔하다" 같은 평이 자주 언급되었습니다. 한식 정식이 표준화된 체인 식당이라 만족도 편차가 적은 편입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">예상 메뉴 가격대 (체인 표준)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">설농탕 (1인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">갈비탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 안팎</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">육개장</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000~14,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">불고기 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000~20,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">정식 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 영통로214번길 60 · <strong>🕐 영업</strong> 10:00~22:00 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 031-202-0039
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/신선설농탕 영통점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 신선설농탕 영통점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'wayoshoku', text: '와요쇼쿠 신동본점 — 일식 함박·뇨끼 1만원대 데이트 옵션', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251105_91%2F17623526890135rUCK_JPEG%2FIMG_5707.jpeg" alt="와요쇼쿠 신동본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💑 데이트 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">리뷰 936건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,500원~24,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 분위기 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">와요쇼쿠는 일식 + 양식 퓨전 — <strong>철판 나폴리탄·함박스테이크·고구마뇨끼</strong>를 시그니처로 하는 신동본점입니다. 평점 표기는 별도이지만 리뷰 936건이 누적되었고, "데이트·리뷰 많음·서비스 좋음·분위기 좋음" 네 가지 평가가 함께 매칭되는 식당이라 점심 데이트·기념일 가벼운 외식 옵션으로 잘 맞습니다. <strong>예약 가능</strong>한 매장이라 주말 점심·저녁 시간대는 미리 자리를 잡아두는 편이 안전합니다. 신동 955번지 1층, 분당선 망포역에서 도보 거리입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"함박스테이크가 맛있다 · 고구마뇨끼가 인기 · 서비스 친절하다" 같은 평이 자주 언급되었습니다. 시그니처 메뉴 만족도와 매장 분위기가 함께 묶여 누적되는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20250902_40%2F17568169015010Um5K_JPEG%2FFjYwMCCsK6_03.jpg" alt="와요쇼쿠 신동본점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251105_91%2F17623526890135rUCK_JPEG%2FIMG_5707.jpeg" alt="와요쇼쿠 신동본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250805_72%2F1754405216002inUOR_PNG%2FIMG_5185.png" alt="와요쇼쿠 신동본점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 1만원대 시작</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">철판 나폴리탄</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,500원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">고구마뇨끼</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">함박스테이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">치즈함박</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">철판 스테이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">24,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">최저 메뉴</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,500원~</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">함박 시그니처</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 955 1층 102호 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 07-1391-9591
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/와요쇼쿠 신동본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 와요쇼쿠 신동본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'starbucks', text: '스타벅스 수원망포DT점 — 점심 시간 음료+간단 식사', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190828_93%2F1566953601239OT9MQ_PNG%2FxX7Wv642gXMoTI0DAv0hRymS.png" alt="스타벅스 수원망포DT점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0F6E56;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">☕ 가벼운 점심</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 1,327건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 4,700원~6,100원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚙 드라이브스루</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>드라이브스루 매장</strong>으로 점심 시간이 짧은 직장인이 차에서 음료+샌드위치만 픽업하기 좋은 옵션입니다. 평점 4.2·리뷰 1,327건으로 망포 카페 카테고리 상위권이며, 신메뉴 후기와 직원 친절도 후기가 자주 언급됩니다. <strong>06:30 영업 시작</strong>이라 출근 전 모닝커피·테이크아웃이 가능하고, 푸드 메뉴(샌드위치·샐러드)는 8,000~12,000원선으로 식사 대용도 가능합니다. 망포동 38-23, 1522-3232 전화 가능. 본 가이드 5곳 중 유일한 카페 옵션으로 한 끼 부담을 줄이고 싶은 날 대안으로 묶었습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"드라이브스루 편리하다 · 신메뉴가 맛있다 · 직원 친절하다" 같은 평이 자주 언급되었습니다. 픽업 동선과 신메뉴 회전이 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190828_93%2F1566953601239OT9MQ_PNG%2FxX7Wv642gXMoTI0DAv0hRymS.png" alt="스타벅스 수원망포DT점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230112_109%2F1673469914620T8ESS_JPEG%2F3172_20230111081100_wgm25.jpg" alt="스타벅스 수원망포DT점 음료 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230112_88%2F1673469914656vLJ5D_JPEG%2F3172_20230111081149_c9pkw.jpg" alt="스타벅스 수원망포DT점 음료 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 음료 5종 + 푸드</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아메리카노</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,700원 · <strong>시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">카페 라떼</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,200원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">카푸치노</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,200원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돌체 라떼</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,100원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">카라멜 마키아또</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,100원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샌드위치·푸드</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000~12,000원선</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">드라이브스루</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">06:30 오픈</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">테이크아웃</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 망포동 38-23 · <strong>🕐 영업</strong> 06:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 1522-3232
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/스타벅스 수원망포DT점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 스타벅스 수원망포DT점 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>판차이짬뽕</strong><br><span style="font-size:11px;color:#888780">중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">1,370건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">7,500원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">짜장면 최저가 + 평점 1위</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>서울24시감자탕해장국</strong><br><span style="font-size:11px;color:#888780">해장국</span></td>
<td style="padding:11px 10px;text-align:center">★ 3.8<br><span style="font-size:11px;color:#888780">1,397건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">8,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">24시간 영업 + 표본 최다</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>신선설농탕 영통점</strong><br><span style="font-size:11px;color:#888780">한식·설농탕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.1<br><span style="font-size:11px;color:#888780">888건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">12,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">정식 점심 + 데이트 가능</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>와요쇼쿠 신동본점</strong><br><span style="font-size:11px;color:#888780">일식</span></td>
<td style="padding:11px 10px;text-align:center">리뷰 936건<br><span style="font-size:11px;color:#888780">표본 우선</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">8,500원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">함박·뇨끼 + 예약 가능</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>스타벅스 수원망포DT점</strong><br><span style="font-size:11px;color:#888780">카페</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">1,327건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0F6E56">4,700원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">드라이브스루 + 06:30 오픈</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심은 어떤 분위기인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 8천원 한 끼 가성비</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>판차이짬뽕</strong>의 짜장면 7,500원이 5곳 중 단연 최저가입니다. 회전 빠른 단품 식당이라 점심 12시 피크에도 5분 내 자리 잡기 가능합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌙 해장·새벽 식사</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>서울24시감자탕해장국</strong> — 망포에서 24시간 운영되는 거의 유일한 해장국집. 콩나물해장국 8,000원, 뼈해장국 11,000원이 시그니처.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 데이트·기념일 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>와요쇼쿠 신동본점</strong> — 함박·뇨끼 시그니처, 분위기 좋은 매장, 예약 가능. 평일 점심 또는 주말 가벼운 데이트 옵션.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍱 한식 정식 정석</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>신선설농탕 영통점</strong> — 설농탕 1만2천원선 정식. 가족 외식·회식 단체 손님이 누적된 안정 옵션.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">☕ 시간 짧은 직장인 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>스타벅스 수원망포DT점</strong> — 드라이브스루로 음료+샌드위치 5분 픽업. 06:30 오픈이라 출근 전 모닝 식사도 가능.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>판차이짬뽕·신선설농탕·스타벅스 수원망포DT점</strong>은 주차장이 있지만 점심 12시 피크엔 만차될 수 있어 11:30~11:50 입장이 안전합니다.</li>
<li><strong>서울24시감자탕해장국</strong>은 전용 주차장이 없습니다. 망포동 주변 공영주차장 또는 대중교통(분당선 망포역)을 권장드립니다.</li>
<li><strong>와요쇼쿠 신동본점</strong>은 예약 가능한 식당이라 데이트·기념일은 미리 자리 잡아두시는 편이 안전합니다. 평일 점심도 12시 전후로 자리가 빠르게 차는 편입니다.</li>
<li><strong>서울24시감자탕해장국</strong>은 24시간 영업이지만 새벽 시간대(03:00~05:00)는 인력 사정으로 임시 휴게 가능. 새벽 방문 시 매장에 직접 확인이 안전합니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
<li><strong>신선설농탕 영통점</strong>은 영통역 가까이로, 망포역 도보권 밖일 수 있어 차량·버스 이용을 권장드립니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 망포역에서 가장 저렴하게 점심 한 끼는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>판차이짬뽕</strong>의 짜장면 7,500원이 1순위입니다. 평점 4.3·리뷰 1,370건으로 검증되어 있어 가격뿐 아니라 만족도까지 안정적입니다. 음료 단독으로는 <strong>스타벅스 수원망포DT점</strong>의 아메리카노 4,700원이 더 저렴하지만, 한 끼 식사로는 판차이짬뽕이 가성비 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 야근·숙취 다음 날 해장 가능한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>서울24시감자탕해장국</strong>이 망포에서 24시간 운영되는 거의 유일한 해장 옵션입니다. 콩나물해장국 8,000원, 뼈해장국 11,000원이 메인 메뉴이며, 리뷰 1,397건이 누적된 망포 가성비 최다 표본 식당입니다. 새벽 03:00~05:00는 임시 휴게 가능성이 있어 사전 확인을 권장드립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 시간이 짧을 때 빠르게 먹을 수 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>스타벅스 수원망포DT점</strong>의 드라이브스루가 5분 픽업 가능. 음료+샌드위치 조합으로 1만원 안팎. <strong>판차이짬뽕</strong>은 단품 회전 빠른 식당이라 12시 피크에도 입장~퇴장 30분 안에 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 데이트·기념일 점심이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>와요쇼쿠 신동본점</strong>이 1순위입니다. 함박스테이크·고구마뇨끼가 시그니처이며 분위기 좋은 매장·데이트 평가가 함께 매칭되어 있고 예약 가능합니다. 차순위는 <strong>신선설농탕 영통점</strong> — 한식 정식 1만2천원선, 가족·데이트 모두 무난합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>판차이짬뽕·신선설농탕·스타벅스 수원망포DT점</strong>은 전용/연계 주차장이 있고, <strong>서울24시감자탕해장국·와요쇼쿠</strong>는 전용 주차장이 없어 인근 공영주차장 또는 분당선 망포역 대중교통이 더 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 낮은 식당도 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>서울24시감자탕해장국</strong>은 평점 3.8점으로 본 가이드 평균(4.0) 이하지만, <strong>리뷰 1,397건</strong>으로 표본이 가장 많고 24시간 영업이라는 차별점이 명확해 해장·새벽 식사 옵션으로 포함했습니다. 평점만 기준이면 <strong>판차이짬뽕</strong>(4.3)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/samsungElectronics/mangpo', text: '망포역 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">망포 345곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">망포역 일대 345곳에서 1만원 안팎으로 점심이 가능한 식당을 필터링해, 카테고리 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰·운영시간·가격대 4가지를 함께 본 결과, 짬뽕·해장국·설농탕·일식·카페로 한 끼 선택지가 자연스럽게 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>판차이짬뽕(4.3)</strong>이 1순위, 리뷰 표본 크기로는 <strong>서울24시감자탕해장국(1,397건)</strong>이 1순위입니다. 두 식당은 카테고리가 달라 검색 의도가 겹치지 않으니, 짬뽕 한 그릇이면 판차이짬뽕, 해장이면 서울24시 식으로 분리해서 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>서울24시감자탕해장국</strong>은 평점이 5곳 중 가장 낮지만 표본 크기와 24시간 영업이라는 차별점으로 포함했습니다. 호불호가 갈리는 식당이라 메인 메뉴(콩나물해장국·뼈해장국) 위주로 주문하시면 만족도 편차가 줄어듭니다. 평점 우선이면 <strong>판차이짬뽕</strong>·<strong>스타벅스</strong>·<strong>신선설농탕</strong>이 안정 후보입니다.</p>
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
