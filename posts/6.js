// 잠실 일식·스시 — 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 6,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">잠실 일대에서 평일 점심부터 데이트 디너까지 일식·스시 한 끼를 해결할 수 있는 식당 5곳을 정리하였습니다. 송파구 잠실·석촌·방이동 1,149곳에서 평점·리뷰 표본·메뉴 구성·가격대 4가지를 기준으로 추려, 초밥·돈카츠·라멘·샤브샤브·사케동/연어회 5종으로 카테고리를 분산하였습니다. 7,000원 단품 점심부터 30,000원대 가성비 오마카세까지 1인 예산 시나리오마다 1순위를 따로 골라 두었으니 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">1,149곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">송파구 잠실 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.5</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.2 ~ 4.9</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">3,452건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">7,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">돈카츠 단품 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #0EA5E9">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결너</div>
<p style="font-size:15px;margin:0;line-height:1.8">잠실 일식 표본이 가장 큰 1순위는 <strong>상무초밥 잠실본점</strong> — 리뷰 1,840건, 가성비 진심초밥 10p 15,900원·시그니처 상무초밥 10p 22,900원. 평점 1위면 <strong>채선당 샤브보트 롯데백화점 잠실점</strong> — 평점 4.9·리뷰 449건, 백화점 지하 1층 일식 샤브샤브. 1만원선 라멘이면 <strong>오레노라멘송파</strong> — 토리빠이탄 라멘 13,000원, 평점 4.5·리뷰 601건. 7천원선 돈카츠 가성비면 <strong>교차점</strong> — 오렌지 치즈카츠 8,000원·히레카츠정식 14,000원. 데이트 사케동·연어회면 <strong>가일</strong> — 사케동 15,000원·특가일초밥 10p 26,000원.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 시작가 7,000~30,000원</strong> — 일식 점심·디너 표준 가격대</li>
<li><strong>네이버 플레이스 리뷰 150건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>평점 4.2점 이상</strong> — 일식 카테고리 평균 위 유지</li>
<li><strong>카테고리 분산</strong> — 초밥·돈카츠·라멘·샤브샤브·사케동/연어회 5종으로 일식 선택 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">잠실 일대 1,149곳에서 일식·스시 카테고리는 약 80곳이 매칭됩니다. 그중 평점 4.2+ 조건과 리뷰 150건+ 표본 조건을 동시에 통과한 식당은 10곳 정도였고, 이 중 메뉴 구성·1인 평균 예산·운영 안정성이 차별화되는 5곳을 추렸습니다. 같은 카테고리(초밥) 중복을 피해 초밥·돈카츠·라멘·샤브샤브·사케동으로 일식 선택지를 분산하였고, 상무초밥(리뷰 1,840건)은 평점 표기 없이도 표본 크기로 대표성이 확인되어 포함하였습니다.</p>`
    },

    { type: 'h2', id: 'sangmu', text: '상무초밥 잠실본점 — 리뷰 1,840건 잠실 초밥 표본 1위', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260225_135%2F1771994258976F3pAg_JPEG%2F9977.jpg" alt="상무초밥 잠실본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#1E40AF;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 표본 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">리뷰 1,840건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,900원~</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍣 진심초밥 10p</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>리뷰 1,840건으로 잠실 일식·스시 카테고리 전체 표본 1위</strong>인 초밥 전문점입니다. 잠실동 181 동신빌딩 102호, 2호선·8호선 잠실역 도보권에 위치합니다. 11:00 영업 시작이라 점심 한 끼·디너 둘 다 가능하고, 가성비 진심초밥 A 15,900원·시그니처 상무초밥 22,900원·미식가초밥 12p 25,900원으로 가격대가 1.5만원~2.5만원선에서 폭넓게 분포합니다. 표본 크기가 카테고리 1위라 평균값이 가장 안정적이어서 첫 방문·접대 자리 같은 실패하면 곤란한 상황에 무난한 선택지입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 재료 신선 · 서비스 친절" 같은 평이 자주 언급되었습니다. 연어 3종이 있다는 점과 잠실 재방문 옵션으로 자주 묶이는 후기 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260225_135%2F1771994258976F3pAg_JPEG%2F9977.jpg" alt="상무초밥 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260225_25%2F177199425903889CkO_JPEG%2F9978.jpg" alt="상무초밥 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260225_135%2F1771994258976F3pAg_JPEG%2F9977.jpg" alt="상무초밥 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">상무초밥 10p</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,900원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">자부심초밥 A 10p</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미식가초밥 12p</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,900원 · <strong>코스</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">진심초밥 A 10p</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,900원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">활어회초밥 10p</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드·디저트</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 메뉴판 참고</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">연어 3종</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 잠실동 181 동신빌딩 102호 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 인근 공영주차장 이용 · <strong>📞 전화</strong> 07-1445-3783
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/상무초밥 잠실본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 상무초밥 잠실본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'chaesundang', text: '채선당 샤브보트 롯데백화점 잠실점 — 평점 4.9 백화점 일식 샤브샤브', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200515_276%2F1589548416217pjjrW_JPEG%2FXFioIGgzqPhzSoU7Nn8GNSDD.jpeg.jpg" alt="채선당 샤브보트 롯데백화점 잠실점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">⭐ 평점 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 449건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1인 매장 안내</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🏬 백화점 식당</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>평점 4.9점·리뷰 449건으로 본 가이드 5곳 중 평점 1위</strong>인 일식 샤브샤브 매장입니다. 잠실동 40-1 롯데백화점 잠실점 지하 1층에 자리해 잠실역 지하상가에서 도보 1분으로 접근 가능합니다. 백화점 식당가 입점 매장이라 매장 청결·서비스 표준이 일정하게 유지되며, 평점이 4.9로 매우 높지만 리뷰 449건의 표본이 같이 따라와 신뢰도가 함께 검증되는 식당입니다. 백화점 운영시간을 따르므로 평일·주말 모두 점심·디너 시간대가 안정적이고, 가족 외식·평일 점심 데이트·쇼핑 동선 사이 한 끼에 잘 맞습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"육수 깊이 · 매장 청결 · 백화점 접근성" 같은 평이 자주 언급되었습니다. 백화점 일식 샤브샤브 표준 운영과 평일 점심 가족 외식 옵션이 후기 키워드로 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200515_276%2F1589548416217pjjrW_JPEG%2FXFioIGgzqPhzSoU7Nn8GNSDD.jpeg.jpg" alt="채선당 샤브보트 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTExMDFfMjgz%2FMDAxNzYxOTg2NzM1MTQz.LKN2qru0ctNChzJkEWtKVtRvoE5cwMt_aMxjh-D5-3kg.adHrUyFIE_Z-oPV_jYF8tl0T3UlgDucBr8YdCN1X6bAg.JPEG%2F1000044257.jpg.jpg" alt="채선당 샤브보트 음식 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200515_276%2F1589548416217pjjrW_JPEG%2FXFioIGgzqPhzSoU7Nn8GNSDD.jpeg.jpg" alt="채선당 샤브보트 메뉴 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">메뉴 구성 (체인 표준 기준)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샤브샤브 1인 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">1.5~2만원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">프리미엄 샤브샤브</p><p style="font-size:12px;color:#5f5e5a;margin:0">2~3만원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샐러드바·뷔페</p><p style="font-size:12px;color:#5f5e5a;margin:0">코스 포함 운영</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">초밥 사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 메뉴판 참고</p></div>
</div>
<p style="font-size:12.5px;color:#5f5e5a;margin:8px 0 0;line-height:1.7">* 1인 가격은 매장 시즌 메뉴판 기준으로 운영되며, 백화점 식당가 표준 가격대에 맞춰 책정됩니다.</p>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">백화점 접근</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">평점 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">샐러드바</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 잠실동 40-1 롯데백화점 잠실점 지하 1층 · <strong>🕐 영업</strong> 백화점 운영시간 · <strong>🚗 주차</strong> 롯데백화점 주차장 · <strong>📞 전화</strong> 02-2143-7013
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/채선당 샤브보트 롯데백화점 잠실점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 채선당 샤브보트 잠실점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'orenoramen', text: '오레노라멘송파 — 토리빠이탄 13,000원 라멘 1순위', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20190429_30/1556514984717bftLW_JPEG/I2oyFa9FcP_-BX4F7Zk454ex.jpg" alt="오레노라멘송파 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍜 라멘 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 601건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1,000원~13,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">송파동 42-6 1층에 자리한 일본식 라멘 전문점입니다. 평점 4.5점·리뷰 601건으로 잠실 라멘 카테고리에서 표본·평점 모두 안정 1순위에 가깝고, "리뷰많음·주차가능·깔끔한곳" 세 태그가 매칭되어 있어 평일 점심·디너 모두 무난합니다. <strong>토리빠이탄 라멘 13,000원·카라빠이탄 라멘 13,000원</strong>이 메인 메뉴이고, 반숙계란 1,000원·삼겹챠슈 3,000원으로 토핑 추가가 가능합니다. 11:00 영업 시작이라 점심 1시간 안에 한 그릇 끝내기에 좋고, 주차 가능한 동선이라 차량 방문도 옵션입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 국물 진함 · 분위기 깔끔" 같은 평이 자주 언급되었습니다. 추가 김치 옵션과 토리빠이탄 라멘 풍미가 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin:14px 0">
<img src="https://ldb-phinf.pstatic.net/20190429_30/1556514984717bftLW_JPEG/I2oyFa9FcP_-BX4F7Zk454ex.jpg" alt="오레노라멘송파 라멘 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://ldb-phinf.pstatic.net/20250909_292/1757390071668wk5v1_JPEG/1000017833.jpg" alt="오레노라멘송파 라멘 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">토리빠이탄 라멘</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">카라빠이탄 라멘</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>매운맛</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짐빔하이볼</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">반숙계란 토핑</p><p style="font-size:12px;color:#5f5e5a;margin:0">1,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼겹챠슈 토핑</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">크러시 병맥주</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 30분</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">국물 진함</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 송파동 42-6 1층 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-418-3539
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/오레노라멘송파" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 오레노라멘송파 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'gyochajeom', text: '교차점 — 7,000원 치즈카츠·14,000원 히레카츠정식 돈카츠 가성비', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240419_292%2F1713513759122o3thS_JPEG%2F1713483258478.jpg" alt="교차점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍱 가성비 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 199건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 7,000원~16,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🥢 혼밥 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">석촌동 184-8 덕수빌딩 104호에 자리한 돈카츠 전문점으로, 평점 4.5점·리뷰 199건 안정 표본을 갖춘 잠실 돈카츠 가성비 1순위입니다. "리뷰많음·혼밥가능·가성비·주차가능" 네 태그가 동시에 매칭되어 평일 점심 1시간 한 끼·점심 데이트·혼밥 디너 모두 가능합니다. <strong>오렌지 치즈카츠 8,000원이 잠실 일식 카테고리에서 가장 저렴한 단품 옵션</strong> 중 하나이고, 히레카츠정식 14,000원·특 로스카츠 14,000원이 메인 정식입니다. 11:30 영업 시작으로 점심 피크 12시 전 진입이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음" 평이 자주 언급되며, 갓 튀긴 돈카츠 바삭함이 핵심 후기 키워드입니다. 1만원선 가성비 정식 옵션으로 자주 묶이는 평입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240419_292%2F1713513759122o3thS_JPEG%2F1713483258478.jpg" alt="교차점 돈카츠 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241110_30%2F1731205101917p5svQ_JPEG%2F1000013441.jpg" alt="교차점 돈카츠 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240419_292%2F1713513759122o3thS_JPEG%2F1713483258478.jpg" alt="교차점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오렌지 치즈카츠</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오렌지 치즈카츠정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">히레카츠정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특 로스카츠</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모듬카츠</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">멘보샤</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>사이드</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">8천원 시작</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 석촌동 184-8 덕수빌딩 104호 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1351-2979
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/교차점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 교차점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'gail', text: '가일 — 사케동 15,000원·특가일초밥 26,000원 데이트 일식 옵션', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220819_286%2F1660891606268KIBan_JPEG%2F%25BF%25AC%25BE%25EE%25C8%25B8_01.jpg" alt="가일 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💑 데이트 일식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 151건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000원~38,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">방이동 48-7 1층에 자리한 일식당으로, 평점 4.2점·리뷰 151건의 안정 표본과 "주차가능·리뷰많음·서비스좋음" 세 태그가 함께 매칭되어 있습니다. <strong>사케동 15,000원이 메인 점심 단품</strong>이고, 특가일초밥 10p 26,000원·연어회 中 38,000원이 디너·데이트 메인 메뉴입니다. 11:30 영업 시작으로 점심 데이트·평일 디너 시간대 모두 가능하고, 주차장 운영이라 차량 방문 옵션도 함께 가능합니다. 일식·스시 카테고리에서 1인 1.5~3만원선 가격대로 데이트·기념일 가벼운 외식에 적합한 옵션입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"회 퀄리티 신선 · 분위기 좋음 · 의외의 맛집" 같은 평이 자주 언급되었습니다. 방이동 골목 일식당에서 데이트 분위기와 회 신선도가 함께 묶여 누적되는 후기 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220819_286%2F1660891606268KIBan_JPEG%2F%25BF%25AC%25BE%25EE%25C8%25B8_01.jpg" alt="가일 연어회 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220819_83%2F1660891623537BWmYK_JPEG%2F%25C6%25AF%25B0%25A1%25C0%25CF%25C3%25CA%25B9%25E4_01.jpg" alt="가일 특가일초밥 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220819_286%2F1660891606268KIBan_JPEG%2F%25BF%25AC%25BE%25EE%25C8%25B8_01.jpg" alt="가일 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 5종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사케동</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">광어초밥 10p</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특가일초밥 10p</p><p style="font-size:12px;color:#5f5e5a;margin:0">26,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">참치초밥 8p</p><p style="font-size:12px;color:#5f5e5a;margin:0">36,000원 · <strong>프리미엄</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">연어회 中</p><p style="font-size:12px;color:#5f5e5a;margin:0">38,000원 · <strong>디너</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 안내</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">사케동 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">연어회 신선</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 방이동 48-7 1층 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1429-2029
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/가일" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 가일 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>상무초밥 잠실본점</strong><br><span style="font-size:11px;color:#888780">초밥</span></td>
<td style="padding:11px 10px;text-align:center">리뷰 1,840건<br><span style="font-size:11px;color:#888780">표본 1위</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#1E40AF">15,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">진심초밥 10p + 표본 최다</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>채선당 샤브보트 잠실</strong><br><span style="font-size:11px;color:#888780">샤브샤브</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">449건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">매장 안내</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 백화점 접근</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>오레노라멘송파</strong><br><span style="font-size:11px;color:#888780">라멘</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">601건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#1E40AF">13,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">토리빠이탄 + 주차 가능</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>교차점</strong><br><span style="font-size:11px;color:#888780">돈카츠</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">199건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#1E40AF">8,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">8천원 치즈카츠 + 가성비</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>가일</strong><br><span style="font-size:11px;color:#888780">사케동·연어회</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">151건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">15,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">사케동·연어회 데이트</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 일식 한 끼는 어떤 시나리오인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍣 2만원선 가성비 초밥</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>상무초밥 잠실본점</strong> — 진심초밥 A 10p 15,900원·시그니처 22,900원. 리뷰 1,840건으로 잠실 일식 표본 1위, 첫 방문에 가장 무난한 옵션.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🏬 가족 외식·쇼핑 동선</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>채선당 샤브보트 롯데백화점 잠실점</strong> — 평점 4.9, 롯데백화점 지하 1층 접근. 가족 외식·평일 점심 데이트에 가장 안정적.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍜 점심 1시간 라멘 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>오레노라멘송파</strong> — 토리빠이탄·카라빠이탄 13,000원, 11:00 영업. 평점 4.5·리뷰 601건으로 잠실 라멘 표본 안정 1순위.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 1만원 가성비 돈카츠</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>교차점</strong> — 오렌지 치즈카츠 8,000원·히레카츠정식 14,000원. 잠실 일식 8천원 단품 카테고리 가성비 1순위, 혼밥 가능.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 데이트·기념일 일식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>가일</strong> — 사케동 15,000원·연어회 38,000원, 방이동 골목 분위기. 1인 1.5~3만원선 데이트에 적합.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>상무초밥 잠실본점·교차점·오레노라멘송파·가일</strong>은 점심 12~13시 피크에 자리가 빠르게 차므로 11:30~11:50 입장이 안전합니다.</li>
<li><strong>채선당 샤브보트 롯데백화점 잠실점</strong>은 백화점 운영시간을 따르므로 평일·주말 폐점 1시간 전 라스트 오더가 있을 수 있어 사전 확인을 권장드립니다.</li>
<li><strong>오레노라멘송파·교차점·가일·잠실장어와 한우</strong>는 주차 가능한 동선이지만 점심 피크에는 주변 도로 정체가 있을 수 있어 대중교통(2호선·8호선 잠실역) 옵션이 더 빠를 수 있습니다.</li>
<li><strong>상무초밥 잠실본점</strong>은 평점 표기 없이 리뷰 1,840건 표본만으로 대표성이 검증된 케이스입니다. 평점 우선이면 채선당(4.9), 표본·가격 안정이면 상무초밥을 고려해 보시면 됩니다.</li>
<li><strong>가일</strong>은 방이동 골목 안쪽 일식당이라 첫 방문 시 위치 확인이 필요합니다. 방이동 48-7 1층, 8호선 방이역 도보권입니다.</li>
<li>메뉴 가격은 시즌·재료 수급(특히 연어·참치)에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 잠실에서 일식 초밥 표본이 가장 안정적인 식당은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>상무초밥 잠실본점</strong>이 리뷰 1,840건으로 잠실 일식·스시 카테고리 표본 1위입니다. 가성비 진심초밥 A 10p 15,900원·시그니처 22,900원 라인업으로 첫 방문이나 접대 자리에 가장 무난한 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점만 가장 높은 곳은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>채선당 샤브보트 롯데백화점 잠실점</strong>이 평점 4.9·리뷰 449건으로 본 가이드 5곳 중 1위입니다. 백화점 지하 1층 입점 매장으로 매장 청결·서비스 표준이 일정하고, 가족 외식·평일 점심 데이트에 적합합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 1만원선 가성비 일식 점심은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>교차점</strong>의 오렌지 치즈카츠 8,000원이 5곳 중 단품 최저가입니다. 정식 메뉴(히레카츠정식 14,000원·특 로스카츠 14,000원)도 1만원선에서 해결 가능합니다. 차순위는 <strong>오레노라멘송파</strong> — 토리빠이탄 라멘 13,000원으로 라멘 한 그릇 풀세트가 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 데이트·기념일 일식이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>가일</strong>이 1순위 — 사케동 15,000원·특가일초밥 10p 26,000원·연어회 中 38,000원으로 1인 1.5~3만원선 데이트 예산에 맞춤입니다. 방이동 골목 분위기로 평일 디너·기념일 가벼운 외식에 적합합니다. 차순위는 <strong>상무초밥 잠실본점</strong>의 미식가초밥 12p 25,900원 코스.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 시간 1시간 안에 빠르게 먹을 수 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>오레노라멘송파</strong>의 라멘 한 그릇이 30~40분 안에 가능합니다. <strong>교차점</strong>의 돈카츠정식도 단품 회전이 빨라 1시간 안에 끝낼 수 있습니다. 두 식당 모두 주차 가능하고 11:00·11:30 영업 시작이라 12시 피크 전 진입이 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>오레노라멘송파·교차점·가일</strong>은 주차 가능 매장입니다. <strong>채선당 샤브보트 잠실점</strong>은 롯데백화점 주차장 이용이 가능합니다. <strong>상무초밥 잠실본점</strong>은 인근 공영주차장 이용을 권장드리며 2호선·8호선 잠실역 대중교통이 더 편합니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/jamsil/category/japanese', text: '잠실 일식·스시 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">잠실 1,149곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">잠실 일대 1,149곳에서 일식·스시 카테고리(약 80곳)를 평점 4.2+ 조건과 리뷰 150건+ 표본 조건으로 필터링한 약 10곳 중, 메뉴 다양성·1인 평균 예산·운영 안정성을 함께 본 결과 5곳을 정리하였습니다. 초밥·샤브샤브·라멘·돈카츠·사케동/연어회 다섯 카테고리로 일식 선택지가 자연스럽게 나뉘었고, 1인 시작가는 7,000원(돈카츠 단품)부터 38,000원(연어회 중)까지 분포합니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>채선당 샤브보트(4.9)</strong>가 1순위이지만 백화점 운영시간을 따르는 매장이라 운영시간 변동 가능성이 있습니다. 표본 안정이면 <strong>상무초밥 잠실본점(리뷰 1,840건)</strong>이 첫 방문에 가장 안전하고, 가격 우선이면 <strong>교차점</strong>의 오렌지 치즈카츠 8,000원이 잠실 일식 단품 최저가 구간입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>가일(4.2)</strong>은 평점이 5곳 중 가장 낮지만 사케동·연어회·특가일초밥 같은 데이트 메뉴 라인업이 명확해 데이트·기념일 옵션으로 포함하였습니다. 평점 우선이면 채선당·오레노라멘송파·교차점이 안정 후보이고, 코스 메뉴를 원하시면 상무초밥의 미식가초밥 12p 25,900원이 가성비 코스 1순위입니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성(특히 연어·참치 시세)은 시즌·재료 수급에 따라 변동될 수 있어 방문 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
