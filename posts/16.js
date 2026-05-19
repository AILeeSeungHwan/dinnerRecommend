// 잠실 데이트 식당 — 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 16,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">잠실 일대에서 분위기·뷰·플레이팅이 함께 따라오는 데이트 레스토랑 5곳을 정리하였습니다. 송파구 잠실·석촌·신천·송파동 1,149곳에서 평점·리뷰 표본·시그니처 메뉴·가격대 4가지를 기준으로 추려, 양식·이탈리안·디저트 카페·파인 다이닝·돼지구이 5종으로 카테고리를 분산하였습니다. 평일 점심 가벼운 데이트부터 기념일 디너·석촌호수 산책 후 디저트까지 시나리오마다 1순위를 따로 골라 두었으니 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">1,149곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">송파구 잠실 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.4</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.2 ~ 4.7</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">1,221건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">5,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">디저트 한 컵 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #C026D3">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">평점 1순위·석촌호수 산책 후 디저트면 <strong>카페드로잉 석촌호수점</strong> — 평점 0점·리뷰 3,897건, 생과일 망고 빙수 27,900원·드로잉 프렌치 토스트 21,900원.<br><br>인스타 핫스팟·롯데월드몰 동선이면 <strong>노티드 잠실롯데월드몰점</strong> — 평점 0점·리뷰 6,948건, 우유 생크림 도넛 4,200원.<br><br>정통 이탈리안 디너이면 <strong>더 이탈리안 클럽</strong> — 평점 4점·리뷰 3,316건, 1++ 한우 채끝 스테이크 105,000원·트러플 따야린 39,000원. 1만원선 데이트 점심이면 <strong>돈블랑 석촌호수점</strong> — 평점 3점·리뷰 2,570건, 아랫고기 17,500원·점심 한정 제육볶음 11,000원.<br><br>브런치 데이트면 <strong>MIP</strong> — 평점 4.2·리뷰 186건, 명란 오일 파스타 18,000원·스테이크 에그 베네딕트 26,000원.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '잠실 데이트 맛집 선정 기준', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>데이트·뷰맛집·분위기·인스타 태그 + 평점 4.2+</strong> — 데이트 카테고리 평균 위 유지</li>
<li><strong>네이버 플레이스 리뷰 150건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>1인 시작가 1만~5만원선</strong> — 데이트 점심·디너 표준 가격대</li>
<li><strong>카테고리 분산</strong> — 양식·이탈리안·디저트 카페·이탈리안 파인·돼지구이 5종으로 데이트 선택 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">잠실 일대 1,149곳에서 데이트·뷰맛집·분위기 태그가 매칭되는 식당은 약 80곳이었습니다. 그중 평점 4.2+·리뷰 150건+ 조건을 동시에 통과한 식당은 15곳 정도였고, 점심·디저트·디너·기념일 등 시나리오 분산을 위해 5곳을 추렸습니다. 디저트 카페(노티드·카페드로잉)·1만원 점심(돈블랑)·정통 이탈리안 디너(더 이탈리안 클럽)·브런치(MIP) 다섯 갈래로 데이트 선택지가 자연스럽게 나뉘었습니다.</p>`
    },

    { type: 'h2', id: 'drawing', text: '카페드로잉 석촌호수점 — 평점 4.7 석촌호수 디저트·와인 데이트 1순위', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20250508_297%2F17466909275825iCDB_PNG%2F%25C4%25AB%25C6%25E4%25B5%25E5%25B7%25CE%25C0%25D7_%25BC%25AE%25C3%25CC%25C8%25A3%25BC%25F6%25C1%25A11_%25BC%25F6%25C1%25A4.png" alt="카페드로잉 석촌호수점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 데이트 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 3,897건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 9,900원~49,500원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 뷰맛집·인스타</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">송파동 7-1 잠실아르누보팰리스 1층 105호에 자리한 디저트·와인 카페로, <strong>평점 0점·리뷰 3,897건으로 본 가이드 5곳 중 1순위</strong>입니다. "리뷰많음·점심추천·데이트·서비스좋음·뷰맛집" 다섯 태그가 동시에 매칭되어 석촌호수 산책 후 한 자리 동선으로 가장 안정적입니다. <strong>생과일 망고 빙수 27,900원·드로잉 프렌치 토스트 21,900원이 시그니처</strong>이고, 글래스와인 9,900원·스파클링 와인 A세트 38,500원으로 디저트→와인 자연스럽게 이어가는 라인업입니다. 인스타에 자주 등장하는 매장이라 사진 찍기 좋은 분위기까지 함께 따라옵니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 분위기 좋음 · 서비스 친절 · 재방문 의사" 같은 평이 자주 언급되었습니다. 디저트 플레이팅과 매장 인테리어가 함께 묶여 누적되는 후기 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20250508_297%2F17466909275825iCDB_PNG%2F%25C4%25AB%25C6%25E4%25B5%25E5%25B7%25CE%25C0%25D7_%25BC%25AE%25C3%25CC%25C8%25A3%25BC%25F6%25C1%25A11_%25BC%25F6%25C1%25A4.png" alt="카페드로잉 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260326_228%2F1774508364075y1Ja1_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2026-03-26_110827.png" alt="카페드로잉 디저트 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20250508_297%2F17466909275825iCDB_PNG%2F%25C4%25AB%25C6%25E4%25B5%25E5%25B7%25CE%25C0%25D7_%25BC%25AE%25C3%25CC%25C8%25A3%25BC%25F6%25C1%25A11_%25BC%25F6%25C1%25A4.png" alt="카페드로잉 인테리어 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 디저트+와인</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">글래스와인</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,900원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우유 빙수</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">드로잉 프렌치 토스트</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,900원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">드로잉 팬케이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생과일 망고 빙수</p><p style="font-size:12px;color:#5f5e5a;margin:0">27,900원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">화이트 와인 C세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">49,500원 · <strong>디너</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">석촌호수 산책</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">평점 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">사진 명소</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">디저트+와인</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 송파동 7-1 잠실아르누보팰리스 1층 105호 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 이용 · <strong>📞 전화</strong> 0507-1377-4308
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/카페드로잉 석촌호수점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 카페드로잉 석촌호수점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'knotted', text: '노티드 잠실롯데월드몰점 — 인스타 핫스팟·롯데월드몰 도넛 카페', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260415_139%2F17762129353422DhyH_JPEG%2F%25BA%25A2%25B2%25C9_%25B3%25EB%25C6%25BC%25B5%25E523.jpg" alt="노티드 잠실롯데월드몰점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">📷 인스타 핫스팟</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 6,948건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 2,500원~22,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">⏰ 웨이팅맛집</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신천동 29 롯데월드몰 5층 F05~11호에 자리한 도넛·디저트 카페로, 평점 0점·리뷰 6,948건의 안정 표본을 갖춘 인스타 핫스팟 매장입니다. "리뷰많음·데이트·웨이팅맛집·뷰맛집" 네 태그가 동시에 매칭되어 롯데월드몰 쇼핑·잠실 데이트 동선 중간에 가장 자주 들어가는 옵션입니다. <strong>우유 생크림 도넛 4,200원·클래식 바닐라 도넛 3,900원이 시그니처</strong>이고, 노티드 글레이즈 도넛 2,500원이 5곳 중 단품 최저가입니다. 옐로우 스마일 케이크 22,000원·크림버니 케이크 21,000원은 기념일·생일 데이트용 옵션으로 활용됩니다. <strong>10:30 영업 시작</strong>으로 늦은 아침 데이트도 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 웨이팅 발생 · 분위기 밝음" 같은 평이 자주 언급되었습니다. 도넛 비주얼과 음료 라인업이 인스타 후기 키워드로 함께 묶여 누적됩니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260415_139%2F17762129353422DhyH_JPEG%2F%25BA%25A2%25B2%25C9_%25B3%25EB%25C6%25BC%25B5%25E523.jpg" alt="노티드 도넛 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260415_259%2F1776212953692w2Buj_JPEG%2FIMG_9162_%25281%2529.jpg" alt="노티드 도넛 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260415_139%2F17762129353422DhyH_JPEG%2F%25BA%25A2%25B2%25C9_%25B3%25EB%25C6%25BC%25B5%25E523.jpg" alt="노티드 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 도넛+케이크</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">노티드 글레이즈 도넛</p><p style="font-size:12px;color:#5f5e5a;margin:0">2,500원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">클래식 바닐라 도넛</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우유 생크림 도넛</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,200원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">레몬슈가 도넛</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,200원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">크림버니 케이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,000원 · <strong>기념일</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">옐로우 스마일</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원 · <strong>인기</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">롯데월드몰</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">인스타 핫</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">웨이팅 발생</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">10:30 오픈</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 신천동 29 롯데월드몰 5층 F05~11호 · <strong>🕐 영업</strong> 10:30 시작 · <strong>🚗 주차</strong> 롯데월드몰 주차장 · <strong>📞 전화</strong> 매장 안내
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/노티드 잠실롯데월드몰점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 노티드 잠실롯데월드몰점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'italian', text: '더 이탈리안 클럽 — 정통 이탈리안 디너·기념일 옵션', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251219_23%2F17661202728441J9Rv_JPEG%2F%25A4%25B7.jpg" alt="더 이탈리안 클럽 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍷 기념일 디너</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4 · 리뷰 3,316건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 23,000원~105,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신천동 29-1 KT송파타워 2층에 자리한 정통 이탈리안 레스토랑으로, 평점 4점·리뷰 3,316건이 누적된 잠실 데이트 디너 옵션입니다. "리뷰많음·주차가능·데이트" 세 태그가 매칭되어 있고, KT송파타워 2층이라 차량 동선·기념일 디너 자리 모두 안정적입니다. <strong>트러플 따야린 39,000원·1++ 한우 채끝 스테이크 105,000원이 메인 시그니처</strong>이고, 부라타 치즈 23,000원·깔라마리 23,000원으로 식전 옵션이 풍부합니다. 한우 채끝 카르파치오 30,000원·제철 생선 카르파치오 30,000원으로 코스 구성도 가능해 기념일·프로포즈 같은 특별한 디너 자리에 적합합니다. 11:30 영업 시작이라 점심 데이트도 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"재방문 의사 · 분위기 좋음 · 맛있음" 같은 평이 자주 언급되었습니다. 봄나물 새우 리조또 같은 시즌 메뉴와 매장 분위기가 함께 묶여 누적되는 후기 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251219_23%2F17661202728441J9Rv_JPEG%2F%25A4%25B7.jpg" alt="더 이탈리안 클럽 음식 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240827_74%2F1724743349947Xah3i_JPEG%2F1.jpg" alt="더 이탈리안 클럽 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251219_23%2F17661202728441J9Rv_JPEG%2F%25A4%25B7.jpg" alt="더 이탈리안 클럽 메뉴 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 8종 — 이탈리안 코스</h4>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">부라타 치즈</p><p style="font-size:12px;color:#5f5e5a;margin:0">23,000원 · <strong>최저</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">깔라마리</p><p style="font-size:12px;color:#5f5e5a;margin:0">23,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">봉골레</p><p style="font-size:12px;color:#5f5e5a;margin:0">28,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 카르파치오</p><p style="font-size:12px;color:#5f5e5a;margin:0">30,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생선 카르파치오</p><p style="font-size:12px;color:#5f5e5a;margin:0">30,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">쥬키니 바질 페스토</p><p style="font-size:12px;color:#5f5e5a;margin:0">30,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">트러플 따야린</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 채끝 스테이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">105,000원 · <strong>프리미엄</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">기념일</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">정통 이탈리안</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">한우 채끝</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 신천동 29-1 KT송파타워 2층 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1330-3238
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/더 이탈리안 클럽" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 더 이탈리안 클럽 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'donblanc', text: '돈블랑 석촌호수점 — 1만원선 점심 데이트 돼지구이 옵션', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240823_218%2F1724399745436Mhl3T_PNG%2F%25C8%25AD%25B8%25E9_%25C4%25B8%25C3%25B3_2024-08-23_165530.png" alt="돈블랑 석촌호수점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 점심 데이트 가성비</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 3 · 리뷰 2,570건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 5,000원~27,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">송파동 58번지에 자리한 돼지구이 전문점으로, 평점 3점·리뷰 2,570건의 안정 표본을 갖춘 1만원선 데이트 점심 가성비 옵션입니다. "리뷰많음·주차가능·데이트" 세 태그가 매칭되어 있고, 11:00 영업 시작이라 점심 데이트 시간대도 무난합니다. <strong>아랫고기·윗고기 17,500원·특수부위모둠 22,500원이 메인 시그니처</strong>이고, <strong>점심 한정 돼지 제육볶음 11,000원이 5곳 중 점심 데이트 1만원선 가성비 옵션</strong>으로 매우 강력합니다. 별미 돈블랑 국수 8,000원·임실치즈구이 10,000원으로 곁들임 메뉴 가짓수도 풍부합니다. 석촌호수와 가까워 식사 후 산책 동선까지 연결 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 서비스 친절 · 주차 편함 · 분위기 좋음" 같은 평이 자주 언급되었습니다. 밑반찬 만족도와 점심 한정 메뉴가 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240823_218%2F1724399745436Mhl3T_PNG%2F%25C8%25AD%25B8%25E9_%25C4%25B8%25C3%25B3_2024-08-23_165530.png" alt="돈블랑 음식 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251203_233%2F17647539127182pADw_JPEG%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_%25281%2529.jpg" alt="돈블랑 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240823_218%2F1724399745436Mhl3T_PNG%2F%25C8%25AD%25B8%25E9_%25C4%25B8%25C3%25B3_2024-08-23_165530.png" alt="돈블랑 메뉴 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 8종 — 돼지구이+점심 한정</h4>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돈블랑 국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원 · <strong>최저</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">임실치즈구이</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소고기 우거지 국밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · <strong>NEW</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">점심 제육볶음</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>점심한정</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">윗고기</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아랫고기</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,500원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특수부위모둠</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,500원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특生갈빗살</p><p style="font-size:12px;color:#5f5e5a;margin:0">27,000원 · <strong>한정</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">석촌호수 동선</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 11,000원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 송파동 58 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-423-8400
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/돈블랑 석촌호수점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 돈블랑 석촌호수점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'mip', text: 'MIP — 송리단길 브런치 데이트 1순위 양식·파스타', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240722_14%2F1721626799235dlKDS_JPEG%2FKakaoTalk_20240722_143917522.jpg" alt="MIP 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥑 브런치 데이트</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 2,743건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 18,000원~36,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 송리단길</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">송파동 32 1층에 자리한 브런치·양식 레스토랑으로, 평점 0점·리뷰 2,743건의 안정 표본을 갖춘 송리단길 데이트 1순위 옵션입니다. "리뷰많음·점심추천·데이트·주차가능" 네 태그가 매칭되어 있고, 송리단길 일대 분위기와 함께 가는 평일 점심·주말 브런치 데이트 동선에 잘 맞습니다. <strong>MIP 브런치 19,000원·에그 베네딕트 19,000원이 점심 메인</strong>이고, 스테이크 에그 베네딕트 26,000원·연어 에그 베네딕트 24,000원으로 고급 브런치 옵션도 함께 운영됩니다. 파스타 라인업(명란 오일 18,000원·투움바 22,000원·스테이크 크림 36,000원)으로 디너 데이트까지 확장 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"분위기 좋음 · 서비스 친절 · 맛있음" 같은 평이 자주 언급되었습니다. 송리단길의 분위기 좋은 브런치 매장이라는 후기 키워드로 함께 묶여 누적됩니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240722_14%2F1721626799235dlKDS_JPEG%2FKakaoTalk_20240722_143917522.jpg" alt="MIP 브런치 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210901_47%2F1630484701973gTlOv_JPEG%2FHpdJNMgtfCSvgkIpMwqXOo4v.jpg" alt="MIP 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240722_14%2F1721626799235dlKDS_JPEG%2FKakaoTalk_20240722_143917522.jpg" alt="MIP 메뉴 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 8종 — 브런치+파스타</h4>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">명란 오일 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>최저</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">MIP 브런치</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">에그 베네딕트</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">그릭요거트·아보카도</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">투움바 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">연어 에그 베네딕트</p><p style="font-size:12px;color:#5f5e5a;margin:0">24,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">스테이크 에그 베네딕트</p><p style="font-size:12px;color:#5f5e5a;margin:0">26,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">스테이크 크림 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">36,000원 · <strong>디너</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">브런치</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">송리단길</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 송파동 32 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 0507-1377-0562
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/MIP" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 MIP 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>카페드로잉 석촌호수점</strong><br><span style="font-size:11px;color:#888780">디저트·와인</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">411건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">9,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 석촌호수</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>노티드 잠실롯데월드몰점</strong><br><span style="font-size:11px;color:#888780">도넛·디저트</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.6<br><span style="font-size:11px;color:#888780">169건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">2,500원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">롯데월드몰 + 인스타</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>더 이탈리안 클럽</strong><br><span style="font-size:11px;color:#888780">정통 이탈리안</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">153건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">23,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">기념일 디너 + 주차</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>돈블랑 석촌호수점</strong><br><span style="font-size:11px;color:#888780">돼지구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">292건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">5,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">점심 11천원 + 석촌호수</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>MIP</strong><br><span style="font-size:11px;color:#888780">브런치·파스타</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">186건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">18,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">송리단길 + 브런치</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 데이트 시나리오마다 다른 선택', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🏞 석촌호수 산책 후 디저트</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>카페드로잉 석촌호수점</strong> — 평점 4.7 1순위. 생과일 망고 빙수 27,900원·드로잉 토스트 21,900원. 글래스와인 9,900원으로 디저트→와인 자연 동선.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">📷 인스타 핫스팟·롯데월드몰</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>노티드 잠실롯데월드몰점</strong> — 우유 생크림 도넛 4,200원·옐로우 스마일 22,000원. 롯데월드몰 5층, 10:30 영업 시작.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍷 기념일·프로포즈 디너</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>더 이탈리안 클럽</strong> — 트러플 따야린 39,000원·1++ 한우 채끝 스테이크 105,000원. KT송파타워 2층 정통 이탈리안.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 1만원선 점심 데이트</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>돈블랑 석촌호수점</strong> — 점심 한정 제육볶음 11,000원·돈블랑 국수 8,000원. 석촌호수 식후 산책 동선 가능.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥑 송리단길 브런치 데이트</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>MIP</strong> — MIP 브런치 19,000원·스테이크 에그 베네딕트 26,000원·투움바 파스타 22,000원. 송리단길 분위기 브런치 1순위.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>노티드 잠실롯데월드몰점·카페드로잉 석촌호수점</strong>은 웨이팅맛집·뷰맛집 태그가 매칭되어 주말 점심·디너 피크엔 30분 이상 대기가 발생할 수 있어 평일 또는 주말 오픈 직후 진입을 권장드립니다.</li>
<li><strong>더 이탈리안 클럽</strong>은 KT송파타워 2층 입점 매장으로, 기념일·프로포즈 디너이면 사전 예약을 권장드립니다. 한우 채끝 스테이크 같은 메인 메뉴는 라스트 오더 시간 전 주문이 안전합니다.</li>
<li><strong>돈블랑 석촌호수점·MIP·더 이탈리안 클럽</strong>은 주차 가능 매장이지만 평일 점심 12~13시 피크에는 만차될 수 있습니다.</li>
<li><strong>카페드로잉 석촌호수점</strong>은 잠실아르누보팰리스 1층 입점이라 전용 주차장이 없습니다. 인근 공영주차장 또는 8호선 석촌역·잠실역 대중교통을 권장드립니다.</li>
<li><strong>노티드 잠실롯데월드몰점</strong>은 시즌 한정 도넛(라즈베리·레몬슈가 등)이 빠르게 품절될 수 있어 인기 메뉴는 오픈 직후가 안전합니다.</li>
<li>메뉴 가격은 시즌·재료 수급(특히 한우·생과일·연어)에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 잠실 데이트 식당에서 평점이 가장 높은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>카페드로잉 석촌호수점</strong>이 평점 4.7점·리뷰 411건으로 본 가이드 5곳 중 1순위입니다. 생과일 망고 빙수 27,900원·드로잉 프렌치 토스트 21,900원이 시그니처이고, 글래스와인 9,900원으로 디저트→와인 동선 데이트가 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 기념일·프로포즈 디너에 적합한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>더 이탈리안 클럽</strong>이 1순위입니다. 트러플 따야린 39,000원·1++ 한우 채끝 스테이크 105,000원으로 1인 5~10만원 기념일 예산에 맞춤이며, KT송파타워 2층 정통 이탈리안 분위기입니다. 사전 예약을 권장드립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 1만원선 점심 데이트가 가능한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>돈블랑 석촌호수점</strong>의 점심 한정 제육볶음 11,000원이 1순위입니다. 돈블랑 국수 8,000원·소고기 우거지 국밥 10,000원으로 단품 1만원선 데이트 점심이 가능합니다. 식후 석촌호수 산책으로 자연스럽게 동선이 이어집니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 인스타 사진 명소 데이트면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>노티드 잠실롯데월드몰점</strong>이 도넛 비주얼과 매장 인테리어로 인스타 핫스팟 1순위입니다. 우유 생크림 도넛 4,200원·옐로우 스마일 22,000원이 시그니처. 차순위는 <strong>카페드로잉 석촌호수점</strong> — 디저트 플레이팅이 사진 친화적이라는 후기 키워드가 함께 누적되어 있습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 브런치 데이트는 어디가 좋은가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>MIP</strong>가 송리단길 브런치 1순위입니다. MIP 브런치 19,000원·에그 베네딕트 19,000원·스테이크 에그 베네딕트 26,000원으로 1인 2~3만원 브런치 예산에 맞습니다. 송리단길 분위기와 함께 자연스럽게 산책 동선이 이어집니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>더 이탈리안 클럽·돈블랑 석촌호수점·MIP</strong>는 주차 가능 매장입니다. <strong>노티드 잠실롯데월드몰점</strong>은 롯데월드몰 주차장 이용. <strong>카페드로잉 석촌호수점</strong>은 인근 공영주차장 또는 8호선 석촌역·잠실역 대중교통이 더 편한 옵션입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/jamsil/category/date', text: '잠실 데이트 식당 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">잠실 1,149곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">잠실 일대 1,149곳에서 데이트·뷰맛집·분위기 태그가 매칭되는 약 80곳을 평점 4.2+·리뷰 150건+ 조건으로 필터링한 15곳 중, 시나리오 다양성을 위해 디저트 카페·인스타 핫·이탈리안 디너·1만원 점심·송리단길 브런치 다섯 갈래로 5곳을 정리하였습니다. 1인 시작가는 2,500원(도넛 단품)부터 105,000원(한우 채끝)까지 폭넓게 분포해 데이트 예산 시나리오마다 다른 1순위가 나옵니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 1위 <strong>카페드로잉 석촌호수점(4.7)</strong>은 디저트→와인 동선 안정성이 본 가이드 5곳 중 가장 높습니다. 인스타·동선이면 <strong>노티드(4.6)</strong>가 롯데월드몰 접근성 1순위. 기념일·프로포즈 디너이면 <strong>더 이탈리안 클럽</strong>의 1++ 한우 채끝 스테이크 105,000원 코스가 안정 옵션입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>MIP(4.2)</strong>는 본 가이드 평점이 가장 낮지만 송리단길 브런치 카테고리 1순위 옵션으로, 명란 오일 18,000원·MIP 브런치 19,000원·스테이크 에그 베네딕트 26,000원 라인업이 브런치 데이트 시나리오에 잘 맞아 포함하였습니다. 가성비 점심 데이트이면 <strong>돈블랑 석촌호수점</strong>의 점심 한정 제육볶음 11,000원이 1순위이고, 석촌호수 산책 동선까지 자연스럽게 이어집니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급에 따라 변동될 수 있어 기념일·예약 데이트 시 매장 사전 확인을 권장드립니다.</p>`
    },
  ]
}

export default post
