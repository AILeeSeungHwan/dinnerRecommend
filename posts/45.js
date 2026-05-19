// 영통 가성비 점심 1만원대 — 카테고리 분산 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 45,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>영통</strong>(수원 영통구)에서 1만원 안팎으로 점심 한 끼를 해결할 식당 5곳을 정리했습니다. 영통·매탄·신동 일대 679곳에서 1인 시작가·평점·리뷰 표본·메뉴 구성 4가지를 기준으로 추려, 한식·일식·양식·중식·분식까지 카테고리를 분산했습니다. 직장인 점심·혼밥·빠른 점심·아이 동반 점심까지 상황별로 다른 1순위를 골라 두었으니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">679곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">영통·매탄·신동 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.6</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.0 ~ 5.0</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">7,972건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">점심 시작가</p><p style="font-size:20px;font-weight:600;margin:0">3,100원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">버거 단품 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">한 그릇 칼국수로 따뜻하게 가성비 점심이면 <strong>홍남매칼국수 망포역점</strong> — 칼국수 9,000원, 평점 5.0·리뷰 1,072건으로 본 가이드 평점 1순위입니다. 1만원 초반 돈가스 점심이면 <strong>키츠</strong> (로스카츠 13,000원, 리뷰 3,691건으로 표본 최다·주차 가능). 5천원 안팎 초저가 점심이면 <strong>노브랜드버거 수원영통구청점</strong> (시그니처 5,000원). 짜장면 한 그릇이면 <strong>효동짜장</strong> (짜장면 7,000원). 출근길·짧은 점심 한 끼면 <strong>이삭토스트 수원영통벽적골점</strong> (토스트 4,400원~).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 시작가 1만3천원 이하</strong> — 1만원대 가성비 점심 기준선</li>
<li><strong>네이버 플레이스 리뷰 300건 이상</strong> — 평점이 흔들리지 않을 표본 크기</li>
<li><strong>평점 4.0점 이상</strong> — 영통 전체 평균선 (가성비 카테고리 약간 완화 적용)</li>
<li><strong>카테고리 분산</strong> — 한식·일식·양식·중식·분식 5종으로 검색 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">영통 일대 679곳 중 1만원대 가성비 점심에 들어가는 식당은 약 480곳이었습니다. 그중 같은 카테고리가 겹치지 않도록 칼국수·돈가스·버거·짜장면·토스트로 한 끼 선택지를 다섯 갈래로 분산했습니다. 평점이 다소 낮은 식당(효동짜장)은 <strong>가격 위치와 단품 차별점</strong>이 명확할 때만 포함했고, 표본이 비슷할 때는 점심 회전이 빠른 식당을 우선했습니다.</p>`
    },

    { type: 'h2', id: 'hongnammae', text: '홍남매칼국수 망포역점 — 평점 1순위 가성비 한식', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20250715_112/1752587520256Tx30A_JPEG/1000005287.jpg" alt="홍남매칼국수 망포역점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 가성비·평점 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 5.0 · 리뷰 1,072건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 5,000원~12,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>가성비와 평점 양쪽 모두 1순위</strong>인 칼국수 전문 한식당입니다. 신동 338 에이스하이엔드타워 B201호, 망포역에서 도보로 접근 가능합니다. 평점 5.0·리뷰 1,072건에 블로그 후기 342건이 함께 누적돼 표본이 작지 않으면서도 만족도 편차가 적은 편입니다. 칼국수 9,000원·고기만두 5,000원으로 1만원 안에서 한 끼가 끝나고, 10:30 영업 시작이라 점심 11시대 일찍 가시면 웨이팅을 피하기 좋습니다. 주차도 가능해 차로 오는 직장인 점심에 동선이 편합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"웨이팅 있다 · 깔끔하다 · 서비스 좋다 · 주차 가능" 같은 평이 자주 묶입니다. 칼국수·만두 단품 회전이 빠른 식당이라는 점이 후기 키워드로 함께 누적됩니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 3종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">고기만두</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">칼국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">1인 세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>인기</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 1순위</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 338 에이스하이엔드타워 B201호 · <strong>🕐 영업</strong> 10:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1378-2573
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/홍남매칼국수 망포역점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 홍남매칼국수 망포역점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'kitsu', text: '키츠 — 표본 최다 1만원대 돈가스 점심', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250923_284%2F17586255709232485T_JPEG%2FKakaoTalk_Photo_2025-09-23-20-04-49_015.jpeg" alt="키츠 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍱 표본 최다 돈가스</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 3,691건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 4,000원~15,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">망포동 372에 자리한 돈가스 전문 일식당으로, <strong>리뷰 3,691건은 본 가이드 5곳 중 가장 큰 표본</strong>입니다. 평점 4.7에 블로그 후기 528건이 함께 누적돼 검증 신뢰가 높은 편입니다. 로스카츠 13,000원·우동 10,000원으로 1만원 초반에 한 끼가 끝나고, 한입 카레·에비카츠 같은 4,000원 사이드가 있어 가볍게 먹고 싶은 날도 대응됩니다. 주차·예약이 가능해 점심 회식이나 차로 오는 직장인 점심에 동선이 편하고, 11:00 영업 시작이라 점심 피크 전 입장이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"가성비 좋다 · 점심 추천 · 주차 가능 · 깔끔하다" 같은 평이 자주 묶입니다. 돈가스 단품 회전이 빠르고 표본이 크게 누적된 식당이라는 점이 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250923_284%2F17586255709232485T_JPEG%2FKakaoTalk_Photo_2025-09-23-20-04-49_015.jpeg" alt="키츠 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250923_89%2F1758625615978AO03m_JPEG%2FKakaoTalk_Photo_2025-09-23-20-04-20_028.jpeg" alt="키츠 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250923_83%2F1758625630045CMLN8_JPEG%2FKakaoTalk_Photo_2025-09-23-20-04-06_013.jpeg" alt="키츠 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한입 카레</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">키츠 유부어묵 우동</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">로스카츠(등심)</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">100% 자연산 치즈카츠</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">히레카츠(안심)</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모듬카츠(등심+안심)</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 최다</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 망포동 372 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1442-0849
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/키츠" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 키츠 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'nbb', text: '노브랜드버거 수원영통구청점 — 5천원 초저가 점심', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250507_263%2F1746624182183VeaBd_PNG%2FNBB-2.0-%25BF%25A5%25BA%25ED%25B7%25B3-%25C3%25D6%25C1%25BE%2528yellow%2529.png" alt="노브랜드버거 수원영통구청점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 초저가 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 1,586건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 3,100원~6,500원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드에서 한 끼 최저가가 가장 낮은 식당</strong>입니다. 매탄동 1267-1 새롬프라자 16차 1층, 평점 4.7·리뷰 1,586건으로 표본이 넉넉합니다. 그릴드 불고기 3,100원·시그니처 5,000원으로 단품만 보면 5천원 안에서도 점심이 가능해, 점심값을 최대한 줄이고 싶은 날 1순위입니다. 09:50 영업 시작이라 출근 직후 이른 점심도 가능하고 주차도 됩니다. 세트로 올리면 1만원 안팎이라 예산을 상황에 맞춰 조절하기 쉬운 점이 강점입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"가격 착하다 · 깔끔하다 · 서비스 좋다 · 주차 가능" 같은 평이 자주 묶입니다. 단품 가격이 낮아 예산을 조절하기 쉽다는 점이 후기 키워드로 함께 누적됩니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250507_263%2F1746624182183VeaBd_PNG%2FNBB-2.0-%25BF%25A5%25BA%25ED%25B7%25B3-%25C3%25D6%25C1%25BE%2528yellow%2529.png" alt="노브랜드버거 수원영통구청점 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNjAxMDJfMjUy%2FMDAxNzY3MzI0MTY2NDgz.inJqYWMUL5iUzeGO2G9XYewwXosKYAmro0_L57kUAvkg.puIfp5RdsRnQYJGTiMWsdPdwd70CA33AGCS6s8urDx4g.JPEG%2FD02A7FF2-23C9-4EFD-A91E-98D691EC929F.jpeg" alt="노브랜드버거 수원영통구청점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTExMjVfMjgw%2FMDAxNzY0MDYyMzU1NTcw.lQUDRoHd1SuQHiY0qpxzvE9MWhn57BZSz-FXLTFewQYg.zSMnjWlvZNkQFQE8uaU7EpmPAyf1IZfyGoZrAkqOFPog.JPEG%2F20251125_181710.jpg.jpg" alt="노브랜드버거 수원영통구청점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 5종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">그릴드 불고기</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,100원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오리지널</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,100원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">시그니처</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">NBB 어메이징 더블 업</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미트마니아</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">세트 구성</p><p style="font-size:12px;color:#5f5e5a;margin:0">단품+사이드 추가</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">초저가 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">빠른 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">예산 조절</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1267-1 새롬프라자 16차 1층 108·109호 · <strong>🕐 영업</strong> 09:50 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 070-8811-0157
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/노브랜드버거 수원영통구청점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 노브랜드버거 수원영통구청점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'hyodong', text: '효동짜장 — 7천원 짜장면 가성비 중식', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241204_23%2F1733273064607yLge7_JPEG%2F1000004616.jpg" alt="효동짜장 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.0 · 리뷰 473건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 7,000원~20,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.0점은 본 가이드 5곳 중 가장 낮습니다. 다만 <strong>짜장면 7,000원은 본 가이드에서 한 끼 단품 최저가</strong>이고, 리뷰 473건으로 평균이 흔들리지 않을 표본은 갖췄습니다. 매탄동 1257-4, 10:30 영업 시작이라 이른 점심·1인 짜장면 한 그릇 옵션으로 차별점이 명확합니다. 평점이 낮은 이유는 단품 회전 위주 식당이라 호불호 표본이 함께 쌓인 것으로 해석되니, 짜장면·짬뽕 같은 메인 단품 위주로 주문하시면 만족도 편차가 줄어듭니다. 전용 주차가 없어 인근 공영주차장·도보 이용을 권장드립니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"짜장면 가격 착하다 · 단품 회전 빠르다 · 서비스 좋다" 같은 평이 자주 묶입니다. 메인 단품 만족도와 호불호가 함께 누적되는 키워드 구조입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241204_23%2F1733273064607yLge7_JPEG%2F1000004616.jpg" alt="효동짜장 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250327_35%2F1743076559110QLbXL_JPEG%2F1000007184.jpg" alt="효동짜장 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTEwMDlfMjgz%2FMDAxNzYwMDA2NTcwMDE4.M5yzorMPtfGzavIrPMk-2JXcNEYckWDJiIIIplhIxOkg.ik_8WwTerrem5yey6vAlMQt-QD2_-YXb3yn2WjHWV38g.JPEG%2F20251009_123328.jpg.jpg" alt="효동짜장 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짜장면</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">화끈불짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼선간짜장</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해물고추짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">낙지해물짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">등심탕수육(小)</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원 · 2인</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단품 최저가</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">이른 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">예약 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1257-4 · <strong>🕐 영업</strong> 10:30 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 050-7964-0355
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/효동짜장" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 효동짜장 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'isaac', text: '이삭토스트 수원영통벽적골점 — 출근길·짧은 점심', gradientStyle: { from: '#92400E', to: '#451A03' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260511_145%2F1778458893905Dnjlf_JPEG%2FKakaoTalk_20260511_085805983.jpg" alt="이삭토스트 수원영통벽적골점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#92400E;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥪 짧은 점심 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 1,150건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 4,400원~5,800원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">영통동 973-3 우성아파트 상가 105호의 토스트 전문점으로, 평점 4.4·리뷰 1,150건으로 표본이 넉넉합니다. 토스트 단품 4,400~5,800원으로 점심값을 가장 가볍게 줄일 수 있고, 10:00 영업 시작이라 출근길·짧은 점심에 픽업하기 좋습니다. 본 가이드 5곳 중 가장 빠르게 한 끼를 끝낼 수 있는 옵션으로, 회의 사이 시간이 짧거나 자리에서 간단히 먹어야 하는 날 대안으로 묶었습니다. 전용 주차가 없어 도보·대중교통 이용을 권장드립니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"점심 추천 · 가격 착하다 · 서비스 좋다 · 픽업 빠르다" 같은 평이 자주 묶입니다. 단품 토스트 회전이 빠르고 출근길 픽업 동선이 편하다는 점이 후기 키워드로 함께 누적됩니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260511_145%2F1778458893905Dnjlf_JPEG%2FKakaoTalk_20260511_085805983.jpg" alt="이삭토스트 수원영통벽적골점 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240429_10%2F1714362212485GnOUa_JPEG%2F1.jpg" alt="이삭토스트 수원영통벽적골점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260427_123%2F1777215892571hweQE_JPEG%2F%25C7%25C1%25B7%25BB%25C4%25A1%25BA%25EA%25B8%25AE%25BF%25C0%25BD%25B4_%25B3%25D7%25C0%25CC%25B9%25F6_1080%25A1%25BF1080.jpg" alt="이삭토스트 수원영통벽적골점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">애플 크림 브리오슈</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,400원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">프렌치 햄치즈</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">프렌치 크림 브리오슈</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,800원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">새우 스페셜</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,600원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">리얼 칠리 새우</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,800원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">투게더 팩</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,100원 · 단체</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">짧은 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">출근길 픽업</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">초저가</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">점심 추천</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 영통동 973-3 우성아파트 상가 105호 · <strong>🕐 영업</strong> 10:00 시작 · <strong>🚗 주차</strong> 도보·대중교통 권장 · <strong>📞 전화</strong> 031-206-8861
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/이삭토스트 수원영통벽적골점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 이삭토스트 수원영통벽적골점 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>홍남매칼국수 망포역점</strong><br><span style="font-size:11px;color:#888780">한식·칼국수</span></td>
<td style="padding:11px 10px;text-align:center">★ 5.0<br><span style="font-size:11px;color:#888780">1,072건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">5,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1순위 + 칼국수 9천원</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>키츠</strong><br><span style="font-size:11px;color:#888780">일식·돈가스</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">3,691건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">4,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 + 주차 가능</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>노브랜드버거 수원영통구청점</strong><br><span style="font-size:11px;color:#888780">양식·버거</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">1,586건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">3,100원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">한 끼 최저가 + 예산 조절</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>효동짜장</strong><br><span style="font-size:11px;color:#888780">중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">473건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">7,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">짜장면 단품 최저가</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>이삭토스트 수원영통벽적골점</strong><br><span style="font-size:11px;color:#888780">분식·토스트</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">1,150건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#92400E">4,400원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">짧은 점심 + 출근길 픽업</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심 예산은 얼마인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍜 따뜻한 한 그릇 가성비</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>홍남매칼국수 망포역점</strong> — 칼국수 9,000원·만두 5,000원. 평점 5.0·리뷰 1,072건으로 가성비와 검증 모두 1순위.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍱 1만원 초반 든든한 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>키츠</strong> — 로스카츠 13,000원. 리뷰 3,691건으로 표본 최다, 주차·예약 가능해 차로 오는 점심에 편함.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 5천원 초저가 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>노브랜드버거 수원영통구청점</strong> — 그릴드 불고기 3,100원·시그니처 5,000원. 세트로 올리면 1만원 안팎으로 예산 조절.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 짜장면 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>효동짜장</strong> — 짜장면 7,000원으로 단품 최저가. 메인 단품 위주로 주문하면 만족도 편차가 줄어듭니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥪 시간 짧은 직장인 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>이삭토스트 수원영통벽적골점</strong> — 토스트 4,400원~. 출근길·회의 사이 5분 픽업으로 가장 빠른 한 끼.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>홍남매칼국수 망포역점·키츠·노브랜드버거 수원영통구청점</strong>은 주차가 가능하지만 점심 12시 피크엔 만차될 수 있어 11:30~11:50 입장이 안전합니다.</li>
<li><strong>효동짜장·이삭토스트 수원영통벽적골점</strong>은 전용 주차가 없습니다. 인근 공영주차장 또는 도보·대중교통 이용을 권장드립니다.</li>
<li><strong>효동짜장</strong>은 평점 4.0으로 본 가이드 평균(4.6) 아래입니다. 짜장면·짬뽕 같은 메인 단품 위주로 주문하시면 호불호 편차가 줄어듭니다.</li>
<li><strong>홍남매칼국수 망포역점</strong>은 웨이팅이 잦은 편이라 점심 11시대 일찍 가시거나 피크를 살짝 비켜 12:40 이후 방문이 자리 잡기 수월합니다.</li>
<li><strong>노브랜드버거·이삭토스트</strong>는 09:50~10:00 영업 시작이라 이른 점심·출근길 픽업이 가능합니다. 점심 직전 시간대 픽업이 가장 빠릅니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 영통에서 가장 저렴하게 점심 한 끼는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 단품 최저가는 <strong>노브랜드버거 수원영통구청점</strong>의 그릴드 불고기 3,100원입니다. 한 끼로 든든하게는 <strong>홍남매칼국수 망포역점</strong>의 칼국수 9,000원이 평점 5.0·리뷰 1,072건으로 가성비와 만족도 양쪽 모두 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 가장 높은 가성비 점심집은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>홍남매칼국수 망포역점</strong>입니다. 평점 5.0·리뷰 1,072건으로 본 가이드 평점 1순위이며, 칼국수 9,000원으로 가격까지 가볍습니다. 표본 크기로는 <strong>키츠</strong>(3,691건)가 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 1만원 초반으로 든든하게 먹을 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>키츠</strong>입니다. 로스카츠 13,000원으로 1만원 초반에 한 끼가 끝나고, 한입 카레 4,000원 같은 사이드로 예산을 더 줄일 수도 있습니다. 주차·예약이 가능해 차로 오는 점심에도 동선이 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 시간이 짧을 때 빠르게 먹을 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>이삭토스트 수원영통벽적골점</strong>입니다. 토스트 단품 4,400원~으로 출근길·회의 사이 5분 픽업이 가능합니다. <strong>노브랜드버거</strong>도 단품 회전이 빨라 짧은 점심에 적합합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>홍남매칼국수·키츠·노브랜드버거</strong>는 주차가 가능하고, <strong>효동짜장·이삭토스트</strong>는 전용 주차가 없어 인근 공영주차장 또는 도보·대중교통 이용을 권장드립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 낮은 식당도 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>효동짜장</strong>은 평점 4.0으로 본 가이드 평균(4.6) 이하지만, 짜장면 7,000원이 한 끼 단품 최저가이고 리뷰 473건으로 표본을 갖춰 가성비 짜장면 옵션으로 포함했습니다. 평점만 기준이면 <strong>홍남매칼국수 망포역점</strong>(5.0)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/samsungElectronics/yeongtong', text: '영통 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">영통 679곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">영통(수원 영통구) 679곳에서 1만원 안팎으로 점심이 가능한 식당을 필터링해, 카테고리 분산까지 고려해 5곳을 정리했습니다. 1인 시작가·평점·리뷰·메뉴 구성 4가지를 함께 본 결과, 칼국수·돈가스·버거·짜장면·토스트로 한 끼 선택지가 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>홍남매칼국수 망포역점(5.0)</strong>이 1순위, 리뷰 표본 크기로는 <strong>키츠(3,691건)</strong>가 1순위입니다. 두 식당은 카테고리가 달라 검색 의도가 겹치지 않으니, 따뜻한 한 그릇이면 홍남매칼국수, 든든한 돈가스면 키츠 식으로 분리해 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>효동짜장</strong>은 평점이 5곳 중 가장 낮지만 짜장면 7,000원 단품 최저가와 표본 크기로 포함했습니다. 호불호가 갈리는 식당이라 메인 단품(짜장면·짬뽕) 위주로 주문하시면 만족도 편차가 줄어듭니다. 평점·검증 우선이면 <strong>홍남매칼국수</strong>·<strong>키츠</strong>·<strong>노브랜드버거</strong>가 안정 후보입니다.</p>
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
