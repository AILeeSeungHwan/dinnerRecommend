// 영통역 고기 맛집 — 한우·삼겹·갈비·보쌈·돼지구이 (식당별 unique 콘텐츠)
const post = {
  id: 18,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>영통역</strong>·매탄·신동·망포 일대에서 고기 한 끼를 고르는 데 도움이 되는 식당 5곳을 정리했습니다. 영통 일대 679곳 중 육류·고기구이·족발보쌈·곱창 카테고리로 한정해 평점·리뷰 표본·가격대·메뉴 구성을 함께 본 결과, 한우 점심·돼지오겹·돼지갈비·보쌈·한돈+한우 멀티까지 다섯 갈래로 분산해 묶었습니다. 같은 "고기" 검색 의도여도 회식·가성비·런치·가족 외식에 맞는 식당이 달라, 본문 한 줄 결론과 비교표를 먼저 보시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">679곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">영통·매탄·신동·망포</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.3</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.1 ~ 4.4</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">3,950건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">런치 시작가</p><p style="font-size:20px;font-weight:600;margin:0">11,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">제육쌈밥 점심특선</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #B91C1C">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">한우 점심 가성비면 <strong>우판등심 수원점</strong> — 평일 런치스페셜 24,000원·평점 4.3·리뷰 2,915건으로 영통 한우 검증 1순위입니다. 보쌈·족발 가족 외식이면 <strong>항아리보쌈본점</strong> — 보쌈 소 36,000원·평점 4.1·리뷰 661건. 평일 돼지오겹 한 끼면 <strong>훈이네구이 망포점</strong> — 평점 4.4·숙성오겹살 16,000원·라면 무료 서비스. 돼지갈비 가족 외식이면 <strong>달구운바람 돼지갈비 영통망포점</strong> — 원적외선 직화 돼지양념구이 21,000원·콜키지 프리. 한돈+한우를 한자리에서 즐기시려면 <strong>옳은고기 수원본점</strong> — 한돈 생삼겹살 16,000원·황금등심살 한판 88,000원으로 예산 폭이 넓습니다.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">고기 카테고리 분산 + 4가지 기준</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 시작가 11,000~37,500원</strong> — 고기 1인분 표준 가격대 (런치~디너 분산)</li>
<li><strong>리뷰 표본 100건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>평점 4.1점 이상</strong> — 고기 카테고리 평균선 (영통 평균 약 4.0 대비 약간 상향)</li>
<li><strong>카테고리 분산</strong> — 한우·보쌈·돼지오겹·돼지갈비·한돈+한우 멀티로 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">영통 일대 679곳 중 육류·고기구이·족발보쌈·곱창 카테고리에 들어가는 식당은 약 110곳이었습니다. 그중 평점·리뷰 표본·메뉴 구성·운영 시간이 안정적인 식당 5곳을 추렸습니다. 같은 한우라도 점심 단품(우판등심)·디너 정찬(옳은고기)으로 분산했고, 돼지는 오겹(훈이네구이)·갈비(달구운바람)로 분리했으며, 보쌈은 가족 외식 전문 식당(항아리보쌈본점) 한 곳을 별도로 묶었습니다.</p>`
    },

    { type: 'h2', id: 'upan', text: '우판등심 수원점 — 영통 한우 평점·표본 검증 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240308_1%2F1709867968993kblbK_JPEG%2F%25BF%25EC%25C6%25C7%25B5%25EE%25BD%25C9_%25BC%25F6%25BF%25F8_%25BC%25D2%25B0%25ED%25B1%25E2_%25B8%25C0%25C1%25FD_%25C8%25B8%25BD%25C432.jpg" alt="우판등심 수원점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 한우 검증 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 2,915건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 4,000원~37,500원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍱 평일 런치 24,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>리뷰 2,915건</strong>은 본 가이드 5곳 중 가장 많은 표본이며, 영통 고기 카테고리 전체에서도 누적 표본이 상위권에 속합니다. 평점 4.3·리뷰 2,915건이 함께 누적되어 평균값이 흔들리지 않는 식당으로 묶입니다. 신동 932번지에 위치해 분당선 영통역에서 도보 거리이며, <strong>11:00 영업 시작</strong>이라 점심·저녁 모두 가능합니다. <strong>평일 런치스페셜 1인분(120g) 24,000원</strong>은 한우 점심 가성비 1순위 구성이며, 한우된장죽 5,000원·열무국수 4,000원으로 가벼운 사이드 한 끼까지 함께 가능합니다. 디너로는 한우 생등심 1인분(150g) 37,500원이 표준 단가입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"고기가 부드럽다 · 곁들이 양배추·양파까지 맛있다 · 서비스가 친절하다 · 주차가 편하다" 같은 평이 자주 언급되었습니다. 한우 품질과 사이드 메뉴 만족도가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240308_1%2F1709867968993kblbK_JPEG%2F%25BF%25EC%25C6%25C7%25B5%25EE%25BD%25C9_%25BC%25F6%25BF%25F8_%25BC%25D2%25B0%25ED%25B1%25E2_%25B8%25C0%25C1%25FD_%25C8%25B8%25BD%25C432.jpg" alt="우판등심 수원점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240308_97%2F1709867969055dCM7q_JPEG%2F%25BF%25EC%25C6%25C7%25B5%25EE%25BD%25C9_%25BC%25F6%25BF%25F8_%25BC%25D2%25B0%25ED%25B1%25E2_%25B8%25C0%25C1%25FD_%25C8%25B8%25BD%25C434.jpg" alt="우판등심 수원점 한우 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240308_112%2F17098679591726YP8j_JPEG%2F%25BF%25EC%25C6%25C7%25B5%25EE%25BD%25C9_%25BC%25F6%25BF%25F8_%25BC%25D2%25B0%25ED%25B1%25E2_%25B8%25C0%25C1%25FD_%25C8%25B8%25BD%25C419.jpg" alt="우판등심 수원점 한우 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">평일 런치스페셜</p><p style="font-size:12px;color:#5f5e5a;margin:0">24,000원 · <strong>런치 가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 생등심 150g</p><p style="font-size:12px;color:#5f5e5a;margin:0">37,500원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우판 한우된장죽</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우판 열무국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우판 볶음밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드 최저가</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,000원~</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">런치 가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 1위</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 932 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1475-0230
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/우판등심 수원점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 우판등심 수원점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'hangari', text: '항아리보쌈본점 — 영통 보쌈·족발 가족 외식 1순위', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyMjAzMDhfMTMy/MDAxNjQ2NzI1MDM4Njcy.67MuQ5fCnWT6rQEXWzzGRKv8vKRnjt97dDBjpNYnnxwg.oRDKDTOTQOpdnwukXzcHQiEm3HR7HL2cFeHLaEWThzsg.JPEG.2383865/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%ED%8C%8C%EC%9D%BC%EF%BC%BF20220308%EF%BC%BF163708.jpg?type=w966" alt="항아리보쌈본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">👨‍👩‍👧 가족 외식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 661건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 36,000원~55,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">👥 단체 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">망포동 387-1, 분당선 망포역 도보 거리에 위치한 <strong>보쌈·족발 본점</strong>입니다. 평점 4.1·리뷰 661건이 누적되어 표본·평점이 안정적이며, <strong>보쌈 소(36,000원)·중(43,000원)·대(48,000원)·특대(53,000원)</strong> 4단계 사이즈로 2인 가족부터 4~5인 모임까지 인원에 맞춰 주문이 가능합니다. <strong>11:30 영업 시작</strong>이라 점심 가족 외식부터 저녁 회식까지 폭넓게 묶입니다. 마늘보쌈 시리즈가 별도 라인업으로 잡혀 있어 보쌈 + 사이드 구성 자유도가 높은 매장입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"보쌈 무김치가 맛있다 · 서비스가 친절하다 · 사이드 메뉴까지 만족도가 높다" 같은 평이 자주 언급되었습니다. 보쌈 본연의 맛과 사이드 구성이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://postfiles.pstatic.net/MjAyMjAzMDhfMTMy/MDAxNjQ2NzI1MDM4Njcy.67MuQ5fCnWT6rQEXWzzGRKv8vKRnjt97dDBjpNYnnxwg.oRDKDTOTQOpdnwukXzcHQiEm3HR7HL2cFeHLaEWThzsg.JPEG.2383865/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%ED%8C%8C%EC%9D%BC%EF%BC%BF20220308%EF%BC%BF163708.jpg?type=w773" alt="항아리보쌈본점 보쌈 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/MjAyNDA4MDNfMjA4/MDAxNzIyNjc1NjgwOTY2.6FX-HbIMWL6hbKqh-CLG5Nr_CbVd_sQZt69rA-Lsi-cg.jcYkAyxAan4wx69O6QuCb9x4DiCV2LTBVuCdAlLD2Wcg.JPEG/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%ED%8C%8C%EC%9D%BC%EF%BC%BF20240803%EF%BC%BF175448.jpg?type=w773" alt="항아리보쌈본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/MjAyMjAzMDhfNzkg/MDAxNjQ2NzIyNjM2Njkx.hn8ssy4mPwkyxPZWAfkyUSi-yYfJL7X_X5AfZhItcjwg.ENLb6qCO4D44f5_lo3xxzqyHV9wVjqdI6HsKol6SUSMg.JPEG.2383865/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%ED%8C%8C%EC%9D%BC%EF%BC%BF20220308%EF%BC%BF155521.jpg?type=w773" alt="항아리보쌈본점 사이드 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">보쌈 소</p><p style="font-size:12px;color:#5f5e5a;margin:0">36,000원 · <strong>2인 시작</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">보쌈 중</p><p style="font-size:12px;color:#5f5e5a;margin:0">43,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">보쌈 대</p><p style="font-size:12px;color:#5f5e5a;margin:0">48,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">보쌈 특대</p><p style="font-size:12px;color:#5f5e5a;margin:0">53,000원 · <strong>4~5인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마늘보쌈 소</p><p style="font-size:12px;color:#5f5e5a;margin:0">38,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마늘보쌈 중</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">사이즈 4단계</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서비스좋음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 망포동 387-1 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-205-1998
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/항아리보쌈본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 항아리보쌈본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'hunee', text: '훈이네구이 망포점 — 평점 4.4 돼지오겹·서비스 라면 무료', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260123_295%2F1769135853823jfYKd_JPEG%2F001.jpg" alt="훈이네구이 망포점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 돼지오겹 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 157건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 16,000원~79,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍜 라면 무료 서비스</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>평점 4.4점</strong>은 본 가이드 5곳 중 두 번째로 높은 수치입니다. 망포동 387-3 A동 1층에 위치해 분당선 망포역 도보 거리이며, <strong>15:00 영업 시작</strong>이라 점심보다 저녁 회식 옵션으로 적합합니다. 숙성오겹살 16,000원·생목살 16,000원이 메인 단가이며, <strong>라면 무료 서비스</strong>가 메뉴판에 명시되어 있어 마무리 식사까지 한 매장에서 해결 가능한 식당입니다. 돼지 모듬 한판 79,000원으로 3~4인 회식까지 커버됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"망포 오겹살 중 만족도가 높다 · 서비스가 친절하다 · 라면 서비스가 후하다" 같은 평이 자주 언급되었습니다. 돼지오겹 품질과 서비스 차별점이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260123_295%2F1769135853823jfYKd_JPEG%2F001.jpg" alt="훈이네구이 망포점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260123_243%2F17691358538035LXXj_JPEG%2F002.jpg" alt="훈이네구이 망포점 고기 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260123_183%2F1769135858093hqmPA_PNG%2F%25C8%25C6%25C0%25CC%25B3%25D7%25B1%25B8%25C0%25CC-003.png" alt="훈이네구이 망포점 고기 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">숙성오겹살</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생목살</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">차돌박이</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소갈비살</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돼지모듬 한판</p><p style="font-size:12px;color:#5f5e5a;margin:0">79,000원 · <strong>3~4인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">라면 서비스</p><p style="font-size:12px;color:#5f5e5a;margin:0">0원 · <strong>무료</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">평점 상위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">라면 무료</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서비스좋음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 망포동 387-3 A동 1층 · <strong>🕐 영업</strong> 15:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1322-9703
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/훈이네구이 망포점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 훈이네구이 망포점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'dalgu', text: '달구운바람 돼지갈비 영통망포점 — 직화 양념갈비 + 콜키지 프리', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230628_138%2F1687927722819gifuC_JPEG%2FKakaoTalk_20230628_134544561.jpg" alt="달구운바람 돼지갈비 영통망포점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍺 콜키지 프리</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 109건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 2,000원~74,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍱 점심 11:20 오픈</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>원적외선 직화 돼지양념구이 280g 21,000원</strong>이 시그니처 메뉴인 돼지갈비 전문점입니다. 망포동 332-7 1층에 위치하며 <strong>11:20 영업 시작</strong>이라 점심 가족 외식부터 저녁 회식까지 폭이 넓습니다. 평점 4.4·리뷰 109건으로 평점 우위 식당이며, <strong>"콜키지 프리"</strong>가 메뉴판에 명시되어 와인·소주를 직접 가져와 마실 수 있는 매장입니다. 사이드 메뉴(소고기 된장찌개 7,000원·물냉면 7,000원·공기밥 2,000원)가 잘 갖춰져 있어 마무리 식사까지 한 곳에서 해결되는 곳입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"양념갈비가 맛있다 · 가족 외식으로 자주 찾는다 · 반찬 구성이 알차다 · 재방문 의사가 있다" 같은 평이 자주 언급되었습니다. 직화 양념갈비 맛과 가족 외식 편의성이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230628_138%2F1687927722819gifuC_JPEG%2FKakaoTalk_20230628_134544561.jpg" alt="달구운바람 돼지갈비 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241122_191%2F1732267868753aTQGg_JPEG%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD-1.jpg" alt="달구운바람 돼지갈비 양념구이 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230628_131%2F1687929333060lIcjT_JPEG%2FIMG_4208_%25C0%25FC%25C3%25BC%25BC%25A6_%25C0%25DA%25C0%25CC%25B1%25DBed.jpg" alt="달구운바람 돼지갈비 사이드 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">백진주쌀밥(공기밥)</p><p style="font-size:12px;color:#5f5e5a;margin:0">2,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소고기 된장찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">물냉면</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">비빔냉면</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">원적외선 직화 돼지양념구이</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">콜키지 프리</p><p style="font-size:12px;color:#5f5e5a;margin:0">0원 · <strong>혜택</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">콜키지 프리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 11:20 오픈</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">직화 양념</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 망포동 332-7 1층 · <strong>🕐 영업</strong> 11:20 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 031-205-9192
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/달구운바람 돼지갈비 영통망포점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 달구운바람 돼지갈비 영통망포점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'olgun', text: '옳은고기 수원본점 — 한돈+한우 멀티 라인업 디너 정찬', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231123_212%2F1700729030457keTh1_JPEG%2F%25BF%25C7%25C0%25BA%25B0%25ED%25B1%25E2_236.jpg" alt="옳은고기 수원본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 한돈+한우 멀티</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 108건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 16,000원~128,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 03:00까지 영업</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">영통동 975-6 1층에 위치한 <strong>한돈+한우 멀티 정찬</strong> 매장입니다. 평점 4.3·리뷰 108건이 누적되었고, <strong>03:00 영업 종료</strong>로 본 가이드 5곳 중 가장 늦은 시간까지 운영되는 식당입니다. 한돈 생삼겹살 16,000원·생목살 16,000원의 평일 단가부터 시작해 황금등심살 한판 88,000원, 고마블와규 소한마리(등심2+부채1+본갈비살1) 128,000원까지 가격 폭이 넓어 회식 예산에 맞춰 메뉴 구성을 조정할 수 있습니다. <strong>한돈커플세트 47,000원</strong>은 2인 데이트·기념일 가성비 옵션으로 묶입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"혼자 방문해도 친절하게 응대해준다 · 분위기가 좋다 · 재방문 의사가 있다" 같은 평이 자주 언급되었습니다. 1인 방문 서비스와 매장 분위기·재방문 의사가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231123_212%2F1700729030457keTh1_JPEG%2F%25BF%25C7%25C0%25BA%25B0%25ED%25B1%25E2_236.jpg" alt="옳은고기 수원본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260323_45%2F17742737731587d51x_PNG%2F1000022482.png" alt="옳은고기 수원본점 한우 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260325_263%2F1774368266057rakrg_PNG%2F1000022507.png" alt="옳은고기 수원본점 한돈 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한돈 생삼겹살</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한돈 생목살</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한돈커플세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">47,000원 · <strong>2인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한돈 돼지한마리</p><p style="font-size:12px;color:#5f5e5a;margin:0">80,000원 · <strong>4~5인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">황금등심살 한판</p><p style="font-size:12px;color:#5f5e5a;margin:0">88,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">고마블와규 소한마리</p><p style="font-size:12px;color:#5f5e5a;margin:0">128,000원 · <strong>한우</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한돈+한우</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">03:00 영업</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 영통동 975-6 1층 · <strong>🕐 영업</strong> 03:00 영업 종료 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-203-9539
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/옳은고기 수원본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 옳은고기 수원본점 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>우판등심 수원점</strong><br><span style="font-size:11px;color:#888780">한우·소고기구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">2,915건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">24,000원</strong><br><span style="font-size:11px;color:#888780">평일 런치</span></td>
<td style="padding:11px 10px;font-size:12.5px">한우 표본 1위 + 런치 가성비</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>항아리보쌈본점</strong><br><span style="font-size:11px;color:#888780">족발보쌈</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.1<br><span style="font-size:11px;color:#888780">661건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">36,000원</strong><br><span style="font-size:11px;color:#888780">보쌈 소</span></td>
<td style="padding:11px 10px;font-size:12.5px">사이즈 4단계 + 가족 외식</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>훈이네구이 망포점</strong><br><span style="font-size:11px;color:#888780">돼지구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">157건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">16,000원</strong><br><span style="font-size:11px;color:#888780">숙성오겹</span></td>
<td style="padding:11px 10px;font-size:12.5px">평점 4.4 + 라면 무료</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>달구운바람 돼지갈비 영통망포점</strong><br><span style="font-size:11px;color:#888780">돼지갈비</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">109건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">21,000원</strong><br><span style="font-size:11px;color:#888780">직화 양념</span></td>
<td style="padding:11px 10px;font-size:12.5px">콜키지 프리 + 점심 오픈</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>옳은고기 수원본점</strong><br><span style="font-size:11px;color:#888780">한돈+한우</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">108건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">16,000원</strong><br><span style="font-size:11px;color:#888780">한돈 생삼겹</span></td>
<td style="padding:11px 10px;font-size:12.5px">멀티 라인업 + 03:00 영업</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 고기는 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍱 한우 점심 가성비</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>우판등심 수원점</strong>의 평일 런치스페셜 24,000원이 영통 한우 1순위. 한우된장죽 5,000원·열무국수 4,000원을 사이드로 활용하면 점심 한 끼가 가볍게 마무리됩니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">👨‍👩‍👧 가족 외식·보쌈</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>항아리보쌈본점</strong> — 보쌈 소(2인)부터 특대(4~5인)까지 사이즈 4단계. 마늘보쌈 라인업까지 갖춰 가족 외식 단골 옵션으로 묶입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 평일 저녁 돼지오겹</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>훈이네구이 망포점</strong> — 숙성오겹살 16,000원·라면 무료 서비스. 평점 4.4·서비스 만족도 우위 식당으로 묶입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍺 콜키지 + 직화 양념갈비</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>달구운바람 돼지갈비 영통망포점</strong> — 콜키지 프리로 와인·소주 지참 가능, 원적외선 직화 양념갈비 21,000원이 시그니처.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌙 늦은 회식·데이트</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>옳은고기 수원본점</strong> — 03:00까지 영업, 한돈커플세트 47,000원으로 2인 데이트·기념일 가성비 옵션. 황금등심살 88,000원까지 회식 예산 폭이 넓습니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>우판등심 수원점</strong>의 평일 런치스페셜은 평일 점심 시간대 한정 메뉴입니다. 주말·디너에는 한우 생등심 1인분 37,500원이 표준 단가가 됩니다.</li>
<li><strong>항아리보쌈본점</strong>은 가족 외식이 많아 주말 저녁 18:00~20:00 시간대엔 자리 잡기가 어려울 수 있습니다. 4~5인 단체는 미리 매장에 자리 확인을 권장드립니다.</li>
<li><strong>훈이네구이 망포점</strong>은 15:00 영업 시작이라 점심 시간대(11:00~14:00)에는 운영하지 않습니다. 저녁 회식 옵션으로만 활용하시는 편이 안전합니다.</li>
<li><strong>달구운바람 돼지갈비 영통망포점</strong>의 콜키지 프리는 본 가이드 기준 메뉴판 명시 사항입니다. 시즌에 따라 정책이 변경될 수 있으니 방문 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</li>
<li><strong>옳은고기 수원본점</strong>은 03:00 영업 종료이지만 새벽 1시 이후엔 라스트 오더가 마감되는 매장입니다. 늦은 시간 방문 시 매장에 라스트 오더 시간을 확인하시는 편이 안전합니다.</li>
<li>5곳 모두 고기 단가는 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 영통역에서 한우를 가장 저렴하게 먹을 수 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>우판등심 수원점</strong>의 평일 런치스페셜 24,000원(1인분 120g)이 영통 한우 가성비 1순위입니다. 평점 4.3·리뷰 2,915건으로 표본·평점이 함께 안정적입니다. 디너로는 한우 생등심 1인분(150g) 37,500원이 표준 단가입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점 가장 높은 영통 고기 맛집은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>훈이네구이 망포점</strong>과 <strong>달구운바람 돼지갈비 영통망포점</strong>이 평점 4.4점으로 본 가이드 5곳 중 공동 1위입니다. 표본 크기는 훈이네구이(157건)·달구운바람(109건)으로 비슷한 수준이며, 두 곳 모두 평점 4.4점이 안정적으로 누적된 식당입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 4~5인 가족 외식·회식 단체석이 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>항아리보쌈본점</strong>이 단체 가능 매장으로 잡혀 있고, 보쌈 특대(53,000원)가 4~5인 표준 메뉴입니다. 고기집 회식이면 <strong>훈이네구이 망포점</strong>의 돼지모듬 한판 79,000원, <strong>옳은고기 수원본점</strong>의 한돈 돼지한마리 80,000원이 4~5인용 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 술을 직접 가져가서 먹을 수 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>달구운바람 돼지갈비 영통망포점</strong>이 본 가이드 5곳 중 유일하게 메뉴판에 "콜키지 프리"가 명시된 식당입니다. 와인·소주를 직접 가져와 마실 수 있어 회식·기념일에 활용도가 높습니다. 단, 시즌에 따라 정책이 변경될 수 있으니 방문 전 확인 권장드립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 늦은 시간 영업하는 고기집은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>옳은고기 수원본점</strong>이 03:00 영업 종료로 본 가이드 5곳 중 가장 늦게까지 운영됩니다. 한돈 생삼겹살 16,000원의 단가가 합리적이라 야근 후 늦은 회식·2차 옵션으로 묶입니다. 새벽 1시 이후엔 라스트 오더가 마감되는 매장이라 사전 확인이 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>우판등심 수원점·훈이네구이 망포점·달구운바람 돼지갈비</strong>는 전용·연계 주차장이 있고, <strong>항아리보쌈본점·옳은고기 수원본점</strong>은 인근 공영주차장 이용을 권장드립니다. 분당선 영통역·망포역 도보 거리이므로 대중교통도 안정적인 선택지입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/samsungElectronics/yeongtong', text: '영통역 고기 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">영통 679곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">영통 일대 679곳에서 육류·고기구이·족발보쌈·곱창 카테고리를 필터링한 뒤, 같은 "고기" 키워드 안에서도 한우·보쌈·돼지오겹·돼지갈비·한돈+한우 멀티로 시나리오를 분산해 5곳을 정리했습니다. 평점·리뷰·운영시간·가격대 4가지를 함께 본 결과, 점심 한우면 우판등심, 가족 외식 보쌈이면 항아리보쌈본점이라는 식으로 검색 의도별 1순위가 자연스럽게 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 기준이면 <strong>훈이네구이 망포점·달구운바람 돼지갈비(4.4)</strong>가 공동 1위, 표본 크기 기준이면 <strong>우판등심 수원점(2,915건)</strong>이 1위입니다. 두 기준은 함께 보시는 편이 안전합니다. 표본이 1,000건 이상이면 평점이 평균값을 잘 반영하지만, 표본이 적은(100건대) 식당은 평점 4.4점이라도 향후 변동 가능성이 있다는 점을 함께 감안해 주세요.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">회식·접대 예산이 큰 자리면 <strong>옳은고기 수원본점</strong>의 한돈 돼지한마리 80,000원·고마블와규 128,000원 같은 단체 메뉴가 적합합니다. 콜키지 프리 차별점이 필요하시면 <strong>달구운바람 돼지갈비</strong>, 점심 한우 가성비는 <strong>우판등심 수원점</strong>의 평일 런치스페셜이 1순위입니다.</p>
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
