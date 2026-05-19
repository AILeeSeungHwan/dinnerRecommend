// 잠실 고기 맛집 추천 5곳 — 식당별 unique 콘텐츠
const post = {
  id: 42,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>잠실</strong>에서 한우·삼겹·소금구이로 회식이나 외식 자리를 잡을 때 갈 만한 고기집 5곳을 정리했습니다. 잠실새내·방이·석촌 일대 1,149곳에서 고기 카테고리만 따로 추려, 평점·리뷰 표본·메뉴 구성·운영 안정성 4가지 기준으로 골랐습니다. 팀 회식, 한우 외식, 가성비 돼지구이, 데이트 고기 자리까지 상황별 1순위가 다르니 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">1,149곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">잠실·방이·석촌 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.8</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.7 ~ 5.0</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">7,541건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">15,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">돼지구이 1인분 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">한우 외식·기념일이면 <strong>솔직한우 잠실점</strong> — 평점 5점·리뷰 640건으로 만족도 1순위.<br><br>표본 가장 두꺼운 가성비 돼지구이면 <strong>송돝</strong> (평점 4.7점·리뷰 3,191건, 1인 15,000원선).<br><br>잠실새내 직장인 팀 회식이면 <strong>돈순장 잠실새내 본점</strong> (평점 4.7점·리뷰 2,868건).<br><br>정육식당형 가성비 회식이면 <strong>무궁화정육식당</strong> (평점 4.7점·리뷰 2,657건).<br><br>주차·예약되는 데이트 고기 자리면 <strong>연정민 소금구이</strong> (평점 4.9, 소금구이 + 찌개 사이드 다양).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '잠실 고기 맛집 선정 기준', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 메뉴 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>고기 카테고리 매칭</strong> — 한우·돼지구이·소금구이·정육식당으로 자리 성격 분산</li>
<li><strong>네이버 플레이스 리뷰 표본</strong> — 평균값이 흔들리지 않을 만큼 리뷰가 쌓인 식당 우선</li>
<li><strong>평점 4.5점 이상</strong> — 잠실 고기 카테고리 상위선 기준 (전 카테고리 평균 대비 강화)</li>
<li><strong>자리 성격 분산</strong> — 한우 외식·가성비 회식·정육식당·데이트 소금구이로 검색 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">잠실·방이·석촌 일대 1,149곳 중 고기 자리에 들어가는 식당을 먼저 골라낸 뒤, 평점·리뷰 표본·메뉴 구성·운영 안정성이 안정적인 5곳을 추렸습니다. 같은 자리 성격 중복을 피해 한우·가성비 돼지구이·정육식당·데이트 소금구이로 분산했고, 평점이 5.0인 식당(솔직한우 잠실점)도 <strong>리뷰 표본 크기</strong>가 충분할 때만 포함했습니다.</p>`
    },

    { type: 'h2', id: 'soljik', text: '솔직한우 잠실점 — 평점 5.0, 한우 외식·기념일 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250912_233%2F17576437920767BE97_JPEG%2FIMG_5318_%25BA%25B9%25BB%25E7.jpg" alt="솔직한우 잠실점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 한우 외식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 5 · 리뷰 640건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🥩 한우 전문</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📝 블로그 378건</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>평점 5점·리뷰 640건으로 본 가이드 만족도 1위</strong> 한우 전문점입니다. 잠실동 186-11 1층, 블로그 378건까지 누적되어 한우 외식·기념일 자리로 검색이 두꺼운 곳입니다. 평점이 만점에 가까우면 표본이 작을 때가 많은데, 이 식당은 리뷰 640건·블로그 378건으로 표본도 함께 받쳐 줍니다. 잠실에서 한우로 제대로 차려 먹는 자리면 가장 먼저 후보에 올릴 만합니다. 다만 전용 주차장 정보가 확인되지 않아 차량보다 대중교통(2호선 잠실새내·잠실역)이 편합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"서비스가 좋다 · 매장 분위기가 좋다 · 재방문 의사가 많다" 같은 평이 자주 언급되었습니다. 한우 만족도와 재방문 평가가 함께 묶여 누적되는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250912_233%2F17576437920767BE97_JPEG%2FIMG_5318_%25BA%25B9%25BB%25E7.jpg" alt="솔직한우 잠실점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260312_108%2F1773286598295Hu9LS_JPEG%2FIMG_5102_%25BA%25B9%25BB%25E7.jpg" alt="솔직한우 잠실점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250912_94%2F17576437920253An8H_JPEG%2FIMG_5074_%25BA%25B9%25BB%25E7.jpg" alt="솔직한우 잠실점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (한우 전문)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 모둠</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 등심·살치</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 특수부위</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">식사·냉면</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한우 전문</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">기념일·외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">서비스 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">재방문 많음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 송파구 잠실동 186-11 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 0507-1382-2517
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/솔직한우 잠실점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 솔직한우 잠실점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'songdot', text: '송돝 — 리뷰 3,189건 표본 최다, 가성비 돼지구이', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://d12zq4w4guyljn.cloudfront.net/750_750_20250407085953_photo1_69bc35ed1eb7.webp" alt="송돝 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 가성비·검증 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 3,191건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000원~25,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📝 블로그 1,669건</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>리뷰 3,191건·블로그 1,669건으로 본 가이드 5곳 중 표본이 압도적으로 가장 두꺼운</strong> 돼지구이집입니다. 평점 4.7을 이만한 표본 위에서 유지한다는 점이 신뢰 포인트입니다. 올림픽로32길 33 1층, 1인 15,000원선 가격대에 국내산 돼지구이 중심이라 가성비 회식·친구 모임 자리로 무난합니다. 17:00~24:00 저녁 영업이라 퇴근 후 한 잔 곁들이는 자리에 잘 맞습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"가성비가 좋다 · 국내산 돼지구이가 만족스럽다 · 회식·혼술 자리로 좋다" 같은 평이 자주 언급되었습니다. 큰 표본 규모와 가성비 평가가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (돼지구이 전문)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돼지구이 (1인분)</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">목살·삼겹</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000~25,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특수부위 모둠</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">식사·찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식 자리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">국내산</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">혼술 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 송파구 올림픽로32길 33 1층 · <strong>🕐 영업</strong> 17:00~24:00 (매장 공지 우선) · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 매장 문의
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/송돝" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 송돝 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'donsoonjang', text: '돈순장 잠실새내 본점 — 잠실새내 직장인 팀 회식 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240401_48%2F1711969883840Jog7v_JPEG%2FIMG_0644.jpeg" alt="돈순장 잠실새내 본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍻 팀 회식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 2,868건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🥩 돼지구이</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📝 블로그 840건</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">잠실새내 한복판 잠실동 187-5 행복빌딩 1층에 있어 <strong>잠실새내 직장인 팀 회식 동선이 가장 짧은</strong> 돼지구이집입니다. 평점 4.7점·리뷰 2,868건에 블로그 840건까지 누적되어 회식 검색 의도가 두껍습니다. 송돝과 같은 평점대지만 위치가 잠실새내 역세권이라, 퇴근 후 바로 모이기 편한 자리를 찾는다면 동선 측면에서 차별점이 명확합니다. 단체 회식 손님 비중이 높아 인원이 많을수록 예약 여부를 미리 확인하시는 편이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"고기가 맛있다 · 회식 자리로 자주 온다 · 잠실새내에서 접근이 편하다" 같은 평이 자주 언급되었습니다. 역세권 동선과 단체 회식 활용이 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240401_48%2F1711969883840Jog7v_JPEG%2FIMG_0644.jpeg" alt="돈순장 잠실새내 본점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240401_235%2F1711969984112jYhr2_JPEG%2FIMG_0659.jpeg" alt="돈순장 잠실새내 본점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240308_162%2F1709857011940beiu7_JPEG%2FIMG_0382.jpeg" alt="돈순장 잠실새내 본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (돼지구이 전문)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼겹·목살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특수부위 모둠</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순대·내장</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">식사·찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">팀 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">잠실새내 역세권</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">리뷰 많음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 송파구 잠실동 187-5 행복빌딩 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 0507-1464-3121
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/돈순장 잠실새내 본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 돈순장 잠실새내 본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'mugunghwa', text: '무궁화정육식당 — 정육식당형 가성비 회식 옵션', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251206_168%2F1764984732117F0MmS_JPEG%2F%25C3%25F8%25B8%25E9.jpg" alt="무궁화정육식당 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 정육식당형 가성비</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 2,657건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🥩 정육식당</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📝 블로그 171건</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>정육 코너에서 고기를 고른 뒤 자리에서 구워 먹는 정육식당형</strong> 운영이라, 고기 단가를 낮춰 가성비로 회식하기 좋은 곳입니다. 석촌동 3-1 1층, 평점 4.7점·리뷰 2,657건으로 검증 표본이 두껍습니다. 송돝·돈순장과 평점이 같지만, 정육식당 방식이라 같은 예산으로 더 많은 양을 먹고 싶은 자리에서 차별점이 명확합니다. 석촌호수·석촌역 쪽 모임 동선에 잘 맞습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"매장 분위기가 좋다 · 고기가 맛있다 · 정육식당이라 가성비가 좋다" 같은 평이 자주 언급되었습니다. 정육식당 운영 방식과 가성비 평가가 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251206_168%2F1764984732117F0MmS_JPEG%2F%25C3%25F8%25B8%25E9.jpg" alt="무궁화정육식당 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250822_63%2F1755846875921gsuDD_JPEG%2Fbatch_14.JPG" alt="무궁화정육식당 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251206_227%2F17649852368881KkPe_JPEG%2FSE-d4e1caa1-c9c2-466a-9356-cb18282f2a68.jpg" alt="무궁화정육식당 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (정육식당)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">정육 코너 한우·돼지</p><p style="font-size:12px;color:#5f5e5a;margin:0">시세 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼겹·목살</p><p style="font-size:12px;color:#5f5e5a;margin:0">시세 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">상차림·세팅비</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">식사·찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">정육식당</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">리뷰 많음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 송파구 석촌동 3-1 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 0507-1336-9436
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/무궁화정육식당" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 무궁화정육식당 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'yeonjeongmin', text: '연정민 소금구이 — 주차·예약되는 데이트 소금구이 옵션', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260226_59%2F1772044296691hVpJ6_JPEG%2FKakaoTalk_20260226_032240528_08.jpg" alt="연정민 소금구이 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💑 데이트 고기 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 1,190건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 3,000원~51,900원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.9점·리뷰 1,190건에 <strong>주차·예약이 모두 되는 데이트 소금구이 자리</strong>입니다. 석촌동 18 1층 102호, 소금구이뿐 아니라 차돌 토장찌개·매콤비빔국수·동치미 냉국수 같은 사이드가 다양해 둘이서 깔끔하게 코스처럼 먹기 좋습니다. 본 가이드 5곳 중 유일하게 주차·예약이 함께 확인되는 곳이라, 차로 이동하는 데이트·소규모 모임에서 차별점이 명확합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"소금구이가 맛있다 · 서비스가 좋다 · 매장 분위기가 좋다" 같은 평이 자주 언급되었습니다. 데이트 분위기와 사이드 구성 만족도가 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260226_236%2F1772044313583xNFY6_JPEG%2FKakaoTalk_20260226_032240528_12.jpg" alt="연정민 소금구이 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260112_123%2F1768191208514k4BIp_JPEG%2FSequence_02.00_00_09_29.Still006-2.jpg" alt="연정민 소금구이 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260112_105%2F1768191449891TjCCB_JPEG%2FSequence_02.00_08_36_13.Still029-4.jpg" alt="연정민 소금구이 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">연정민 소금구이</p><p style="font-size:12px;color:#5f5e5a;margin:0">51,900원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">재래식 소금구이</p><p style="font-size:12px;color:#5f5e5a;margin:0">48,900원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돼지김치전골</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">차돌 토장찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">매콤비빔국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미니 김치찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,000원 · <strong>최저가</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서비스 좋음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 송파구 석촌동 18 1층 102호 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1334-9217
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/연정민 소금구이" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 연정민 소금구이 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>솔직한우 잠실점</strong><br><span style="font-size:11px;color:#888780">한우</span></td>
<td style="padding:11px 10px;text-align:center">★ 5.0<br><span style="font-size:11px;color:#888780">637건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">한우 외식</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 최고 + 기념일 한우</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>송돝</strong><br><span style="font-size:11px;color:#888780">돼지구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">3,189건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">15,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 + 가성비</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>돈순장 잠실새내 본점</strong><br><span style="font-size:11px;color:#888780">돼지구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">2,868건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">잠실새내 역세권 회식</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>무궁화정육식당</strong><br><span style="font-size:11px;color:#888780">정육식당</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">2,657건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">시세</strong></td>
<td style="padding:11px 10px;font-size:12.5px">정육식당형 가성비</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>연정민 소금구이</strong><br><span style="font-size:11px;color:#888780">소금구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">1,190건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">3,000원~</strong></td>
<td style="padding:11px 10px;font-size:12.5px">주차·예약 + 데이트</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 고기 자리는 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥂 기념일·한우 외식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>솔직한우 잠실점</strong> — 평점 5.0·리뷰 637건. 잠실에서 한우로 제대로 차려 먹는 자리면 가장 먼저 후보에 올릴 만합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 가성비 친구 모임</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>송돝</strong> — 1인 15,000원선 국내산 돼지구이, 리뷰 3,189건 검증. 17:00~24:00 저녁 영업으로 한 잔 곁들이는 자리에 잘 맞습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍻 잠실새내 팀 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>돈순장 잠실새내 본점</strong> — 잠실새내 역세권 동선, 퇴근 후 바로 모이기 편함. 단체 인원은 예약 여부를 미리 확인하세요.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 양 많이 먹는 가성비 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>무궁화정육식당</strong> — 정육식당형이라 같은 예산으로 더 많이 먹기 좋습니다. 석촌호수·석촌역 동선에 잘 맞습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 차로 가는 데이트·소모임</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>연정민 소금구이</strong> — 주차·예약 모두 가능, 사이드 메뉴 다양. 둘이 깔끔하게 코스처럼 먹기 좋습니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>연정민 소금구이</strong>는 본 가이드 5곳 중 유일하게 주차·예약이 함께 확인되는 곳입니다. 데이트·소모임은 미리 예약하시는 편이 자리 확보에 안전합니다.</li>
<li><strong>솔직한우 잠실점·돈순장 잠실새내 본점·무궁화정육식당</strong>은 전용 주차장 정보가 확인되지 않아 인근 공영주차장 또는 지하철(2호선 잠실새내·잠실·석촌역) 이용이 더 편합니다.</li>
<li><strong>송돝</strong>은 17:00~24:00 저녁 영업이라 점심 모임에는 맞지 않습니다. 퇴근 후 저녁 자리로 이용하시고, 주말 저녁은 대기가 생길 수 있습니다.</li>
<li><strong>돈순장 잠실새내 본점</strong>은 단체 회식 손님 비중이 높아, 인원이 많을수록 예약 가능 여부와 룸 유무를 매장에 미리 확인하시는 편이 안전합니다.</li>
<li>일부 식당은 메뉴별 단품 가격이 공개되어 있지 않아 본문에 "매장 문의" 또는 "시세"로 표기했습니다. 정육식당은 그날 시세로 계산되므로 입장 시 단가를 확인하세요.</li>
<li>메뉴 가격·영업시간은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 잠실에서 한우로 외식하기 좋은 곳은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>솔직한우 잠실점</strong>이 1순위입니다. 평점 5.0·리뷰 637건에 블로그 378건까지 누적되어 만족도와 표본을 함께 받쳐 줍니다. 기념일·외식 자리로 잠실에서 한우면 가장 먼저 후보에 올릴 만합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가성비로 회식하기 좋은 고기집은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>송돝</strong>이 1순위입니다. 1인 15,000원선 국내산 돼지구이에 리뷰 3,189건·블로그 1,669건으로 표본이 압도적으로 가장 두껍습니다. 양을 더 먹고 싶으면 정육식당형인 <strong>무궁화정육식당</strong>이 차선책입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 잠실새내에서 팀 회식 동선이 가장 짧은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>돈순장 잠실새내 본점</strong>입니다. 잠실동 187-5 행복빌딩 1층에 있어 잠실새내 역세권 동선이 짧습니다. 평점 4.7·리뷰 2,868건으로 회식 검증이 두껍고, 단체 인원은 예약 여부를 미리 확인하시는 편이 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 데이트·소모임이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>연정민 소금구이</strong>가 1순위입니다. 평점 4.9에 주차·예약이 모두 되고, 차돌 토장찌개·매콤비빔국수 같은 사이드가 다양해 둘이 코스처럼 먹기 좋습니다. 본 가이드 5곳 중 유일하게 주차·예약이 함께 확인되는 곳입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>연정민 소금구이</strong>만 주차가 확인되고, <strong>솔직한우 잠실점·송돝·돈순장 잠실새내 본점·무궁화정육식당</strong>은 전용 주차장 정보가 확인되지 않아 인근 공영주차장 또는 잠실·잠실새내·석촌역 대중교통이 더 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 만점인데 믿어도 되나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>솔직한우 잠실점</strong>은 평점 5.0이지만 리뷰 637건·블로그 378건으로 표본이 함께 받쳐 줘 신뢰할 만합니다. 더 큰 표본을 원하면 리뷰 3,189건의 <strong>송돝</strong>(4.7)이 검증 측면에서 1순위입니다. 평점과 표본을 함께 보시는 것을 권장드립니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/jamsil', text: '잠실 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">잠실 1,149곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">잠실·방이·석촌 일대 1,149곳에서 고기 자리에 들어가는 식당을 필터링해, 자리 성격 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰 표본·메뉴 구성·운영 안정성 4가지를 함께 본 결과 한우·가성비 돼지구이·정육식당·데이트 소금구이로 선택지가 자연스럽게 갈렸습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 우선이면 <strong>솔직한우 잠실점(5.0)</strong>·<strong>연정민 소금구이(4.9)</strong>가 1순위, 리뷰 표본 크기로는 <strong>송돝(3,189건)</strong>이 1순위입니다. 자리 성격이 달라 검색 의도가 겹치지 않으니, 한우 외식이면 솔직한우, 가성비 회식이면 송돝, 데이트면 연정민 식으로 분리해서 고르시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>송돝·돈순장 잠실새내 본점·무궁화정육식당</strong>은 평점 4.7로 같지만 차별점이 다릅니다. 송돝은 표본 최다 가성비, 돈순장은 잠실새내 역세권 동선, 무궁화정육식당은 정육식당형 가성비입니다. 자리 성격과 동선을 함께 보시면 선택이 빨라집니다. 가격 단가가 공개되지 않은 식당은 입장 시 확인하시는 편이 안전합니다.</p>
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
