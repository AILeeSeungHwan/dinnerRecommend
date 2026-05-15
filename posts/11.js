// 잠실 국밥·해장국 — 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 11,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">잠실 일대에서 한 끼 든든하게 국밥·해장국으로 해결할 수 있는 식당 5곳을 정리하였습니다. 송파구 잠실·석촌·방이·삼전동 1,149곳에서 평점·리뷰 표본·시그니처 메뉴·가격대 4가지를 기준으로 추려, 한우 양선지·제주 해장국·설렁탕·감자탕·뼈해장국 5종으로 카테고리를 분산하였습니다. 직장인 평일 점심·숙취 다음 날 해장·새벽 식사·가족 외식 시나리오마다 1순위를 따로 골라 두었으니 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">1,149곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">송파구 잠실 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.3</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.1 ~ 4.5</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">4,504건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">10,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">국밥 한 그릇 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #EA580C">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">잠실 국밥·해장국 평점 1순위는 <strong>양양집</strong> — 평점 4.5·리뷰 205건, 한우 양선지 해장국 12,000원·우대갈비찜 39,000원. 표본·인지도 1순위면 <strong>제주은희네해장국 잠실직영점</strong> — 평점 4.3·리뷰 784건, 제주식 해장국 12,000원·돔베고기 13,000원. 1만원선 설렁탕 정식이면 <strong>본가설렁탕</strong> — 설렁탕 15,000원, 평점 4.2·리뷰 1,711건. 한 그릇 1만원 감자탕 가성비면 <strong>청년감자탕 송파 본점</strong> — 뼈해장국 10,000원, 평점 4.1·리뷰 680건. 24시간 새벽 해장이면 <strong>얼큰본가 연품뼈해장국 24시 본점</strong> — 뼈해장국 11,000원·선지해장국 10,000원, 리뷰 1,124건.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 시작가 10,000~18,000원</strong> — 잠실 국밥·해장국 표준 가격대</li>
<li><strong>네이버 플레이스 리뷰 200건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>평점 4.0점 이상</strong> — 국밥 카테고리 평균 위 유지</li>
<li><strong>카테고리 분산</strong> — 한우 양선지·제주 해장국·설렁탕·감자탕·뼈해장국 5종으로 검색 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">잠실 일대 1,149곳에서 국밥·해장국·설렁탕·감자탕·곰탕 카테고리는 약 40곳이 매칭됩니다. 그중 평점 4.0+·리뷰 200건+ 조건을 동시에 통과한 식당은 10곳 정도였고, 메뉴 차별성과 운영 시간(24시간 vs 일반)을 함께 본 결과 5곳을 추렸습니다. 같은 카테고리(해장국 단일) 중복을 피해 한우 양선지·제주식·설렁탕·감자탕·뼈해장국으로 검색 의도를 분산하였고, 평점이 다소 낮은 식당은 표본 크기(리뷰 1,000건+)와 차별점(24시간 영업)이 명확할 때만 포함하였습니다.</p>`
    },

    { type: 'h2', id: 'yangyang', text: '양양집 — 평점 4.5 잠실 국밥 1순위, 한우 양선지 해장국', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251209_220%2F1765288030552hxgXK_JPEG%2F24%25BD%25C3%25B0%25A3_%25B8%25B8%25C3%25EB%25BA%25CE%25C5%25CD_%25C7%25D8_%25281%2529.jpg" alt="양양집 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 평점 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 205건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~45,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🥩 한우 사용</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>평점 4.5점으로 본 가이드 5곳 중 1순위</strong>인 한우 양선지 해장국 전문점입니다. 삼전동 131-13 1층, 2호선 잠실새내·삼전역 도보권에 위치합니다. "리뷰많음·혼밥가능·주차가능·깔끔한곳" 네 태그가 동시에 매칭되어 평일 점심·디너 모두 무난하고, 한우 양·양지수육·우대갈비찜으로 메뉴 라인업이 풀세트 운영입니다. <strong>한우 양선지 해장국 12,000원·한우 양 곱창 순두부 해장국 18,000원</strong>이 메인 단품이고, 디너로는 한우양지수육(소) 29,000원·우대갈비찜 39,000원이 옵션입니다. 한우를 직접 사용한다는 점이 일반 해장국집 대비 차별점입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 서비스 친절" 같은 평이 자주 언급되었습니다. 양선지 해장국 풍미와 한우 부재료 신선도가 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251209_220%2F1765288030552hxgXK_JPEG%2F24%25BD%25C3%25B0%25A3_%25B8%25B8%25C3%25EB%25BA%25CE%25C5%25CD_%25C7%25D8_%25281%2529.jpg" alt="양양집 해장국 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251209_133%2F1765288030582FwI7j_JPEG%2F%25BC%25F6%25C0%25B02_%25282%2529.jpg" alt="양양집 수육 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251209_220%2F1765288030552hxgXK_JPEG%2F24%25BD%25C3%25B0%25A3_%25B8%25B8%25C3%25EB%25BA%25CE%25C5%25CD_%25C7%25D8_%25281%2529.jpg" alt="양양집 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 양선지 해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 시래기 해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 양순두부 해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 육회 비빔밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우양지수육 (소)</p><p style="font-size:12px;color:#5f5e5a;margin:0">29,000원 · <strong>디너</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우대갈비찜</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원 · <strong>프리미엄</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한우 사용</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">평점 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 삼전동 131-13 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1322-8729
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/양양집" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 양양집 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'eunhuine', text: '제주은희네해장국 잠실직영점 — 평점 4.3·리뷰 784건 제주식 해장국', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171030_230%2F1509327850597bbmVA_JPEG%2FhUeKwKJG7R1T_-A5NPO39iax.jpg" alt="제주은희네해장국 잠실직영점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🐷 제주식 해장국</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 784건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~38,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 9:00 오픈</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">석촌동 183-7번지에 위치한 제주식 해장국 직영점으로, 평점 4.3점·리뷰 784건이 누적되어 본 가이드 5곳 중 평점·표본 양쪽에서 안정적입니다. "주차가능·리뷰많음·깔끔한곳·서비스좋음" 네 태그가 동시에 매칭되어 직장인 평일 점심·가족 외식 모두 가능합니다. <strong>해장국 12,000원이 메인 단품</strong>이며 제주 돔베고기(소 13,000원·중 24,000원·대 35,000원) 라인업으로 해장국 한 그릇만이 아니라 디너 가족 외식까지 확장 가능한 식당입니다. <strong>9:00 영업 시작</strong>이라 늦은 아침 해장 식사 옵션으로도 활용 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 분위기 깔끔 · 재료 신선 · 양 많음" 같은 평이 자주 언급되었습니다. 제주식 해장국 풍미와 돔베고기 사이드 옵션이 후기 키워드로 묶여 누적됩니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171030_230%2F1509327850597bbmVA_JPEG%2FhUeKwKJG7R1T_-A5NPO39iax.jpg" alt="제주은희네해장국 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171030_187%2F1509327879997Iv0qc_JPEG%2FcVRn6zfF7XZ3zgjFLtk35DT0.jpg" alt="제주은희네해장국 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171030_230%2F1509327850597bbmVA_JPEG%2FhUeKwKJG7R1T_-A5NPO39iax.jpg" alt="제주은희네해장국 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 해장국+돔베고기</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">내장탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돔베고기 (소)</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>사이드</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한치물회</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돔베고기 (중)</p><p style="font-size:12px;color:#5f5e5a;margin:0">24,000원 · <strong>디너</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돔베모둠</p><p style="font-size:12px;color:#5f5e5a;margin:0">38,000원 · <strong>가족</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">9:00 오픈</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">제주식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">가족 외식</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 석촌동 183-7 · <strong>🕐 영업</strong> 09:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-6013-0831
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/제주은희네해장국 잠실직영점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 제주은희네해장국 잠실직영점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'bonga', text: '본가설렁탕 — 리뷰 1,711건 설렁탕 정식 표본 최다', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f640_380&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTVfMTc0%2FMDAxNjUyNTk4NjU5NDc4.dXjmD5hwna9gk_x_tZMWIakdQQ5R-8ZYHvy5aAju7ecg._0EgO_M6WPSKo50dzEyXXYgVxsQ8dNMhxj2h3h3ItiMg.JPEG.misterfm%2F20220513%25A3%25DF123011.jpg" alt="본가설렁탕 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍚 설렁탕 표본 1위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 1,711건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000원~99,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 뷰맛집</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">석촌동 24-8번지에 위치한 설렁탕 정식 전문점으로, <strong>리뷰 1,711건</strong>으로 잠실 국밥·해장국 5곳 중 표본 1위입니다. 평점 4.2점이 1,711건 표본으로 누적된 수치라 평균값을 가장 안정적으로 신뢰할 수 있고, "리뷰많음·깔끔한곳·뷰맛집" 세 태그가 동시에 매칭됩니다. <strong>설렁탕 15,000원이 메인 단품</strong>이고, 본가탕 17,000원·도가니탕 27,000원·꼬리곰탕 33,000원 라인업으로 가격대가 1.5만원~3만원선 정식까지 확장 가능합니다. 가족 외식 옵션으로 모듬수육 68,000원·꼬리찜 99,000원 단체 메뉴까지 운영합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물 깊이 · 양 푸짐 · 맛있음" 같은 평이 자주 언급되었습니다. 사골을 한참 우려낸 뽀얀 국물과 푸짐한 수육·소면 구성이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 8종 — 설렁탕·곰탕 정식</h4>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">설렁탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">본가탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">도가니탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">27,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">꼬리곰탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">33,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모듬수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">68,000원 · <strong>가족</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">도가니수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">72,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">꼬리찜</p><p style="font-size:12px;color:#5f5e5a;margin:0">99,000원 · <strong>프리미엄</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">정식 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">국물 진함</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 석촌동 24-8 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 이용 · <strong>📞 전화</strong> 02-414-5945
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/본가설렁탕" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 본가설렁탕 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'cheongnyeon', text: '청년감자탕 송파 본점 — 1만원 뼈해장국 감자탕 가성비 1순위', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250903_120%2F1756870661062kkatC_JPEG%2FKakaoTalk_20250903_095526336.jpg" alt="청년감자탕 송파 본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 가성비 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 680건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000원~13,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">방이동 110-12번지 1층에 위치한 감자탕·뼈해장국 전문점으로, 평점 4.1점·리뷰 680건의 안정 표본을 갖춘 1만원선 가성비 1순위 식당입니다. "리뷰많음·주차가능" 두 태그가 매칭되어 있고, 매장이 넓어 단체 손님도 받을 수 있는 구조입니다. <strong>뼈해장국 10,000원·순대국 10,000원이 1만원 라인업의 최저가</strong>이고, 묶은지해장국·파김치뼈해장국 등 변형 메뉴가 11,000~12,000원, 순살 시리즈가 11,000~13,000원선입니다. 본 가이드 5곳 중 <strong>1만원 단가 1만원 시작 옵션</strong>으로 가장 부담이 적은 식당입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물 진함 · 양 푸짐 · 서비스 친절 · 매장 넓음" 같은 평이 자주 언급되었습니다. 1만원 단가 감자탕 가성비와 단체 수용 가능 매장 구조가 후기 키워드로 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250903_120%2F1756870661062kkatC_JPEG%2FKakaoTalk_20250903_095526336.jpg" alt="청년감자탕 송파 본점 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250801_144%2F17540361178971fW42_JPEG%2F6%25BF%25F91%25C0%25CF_%25BE%25F7%25B7%25CE%25B5%25E5.jpg" alt="청년감자탕 송파 본점 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250903_120%2F1756870661062kkatC_JPEG%2FKakaoTalk_20250903_095526336.jpg" alt="청년감자탕 송파 본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 8종 — 1만원 라인업</h4>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">뼈해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · <strong>최저</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순대국</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">묵은지해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">얼큰순대국</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순살해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">파김치뼈해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순살묵은지해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순살파김치해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">1만원 시작</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">감자탕 정식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">매장 넓음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 방이동 110-12 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-3431-9252
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/청년감자탕 송파 본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 청년감자탕 송파 본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'eolkun', text: '얼큰본가 연품뼈해장국 24시 본점 — 24시간 새벽 해장 옵션', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250916_96%2F1758012078307dtJUd_JPEG%2F%25C0%25CC%25BF%25B5%25C0%25DA.jpg" alt="얼큰본가 연품뼈해장국 24시 본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🌙 24시간 해장</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">리뷰 1,124건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000원~53,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 심야 영업</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">방이동 65-4번지 1·2층에 자리한 <strong>24시간 운영 뼈해장국 전문점</strong>입니다. 평점은 단순 신규 누적 단계이지만 <strong>리뷰 1,124건</strong>으로 표본은 본 가이드 5곳 중 두 번째로 큽니다. "리뷰많음·혼밥가능·주차가능" 세 태그가 매칭되어 있고, 24시간 영업이라 새벽 식사·야근 후 해장·심야 외출 후 식사 등 일반 영업시간 식당으로는 커버되지 않는 시간대를 책임지는 차별점이 명확합니다. <strong>뼈해장국 11,000원·선지해장국 10,000원</strong>이 메인 단품이고, 우거지 콩나물 감자탕 대 53,000원이 단체 디너 옵션입니다. 1·2층 구조라 평일 점심·저녁 단체 수용도 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 양 푸짐 · 뼈 많음" 같은 평이 자주 언급되었습니다. 24시간 영업이라는 차별점과 1만원 단가가 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250916_96%2F1758012078307dtJUd_JPEG%2F%25C0%25CC%25BF%25B5%25C0%25DA.jpg" alt="얼큰본가 연품뼈해장국 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250423_277%2F17453822220845mSDP_JPEG%2FKakaoTalk_20250423_132052546.jpg" alt="얼큰본가 연품뼈해장국 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250916_96%2F1758012078307dtJUd_JPEG%2F%25C0%25CC%25BF%25B5%25C0%25DA.jpg" alt="얼큰본가 연품뼈해장국 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">뼈해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">뼈해장국 (특)</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">선지해장국</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">서리태콩국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>여름</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수제왕돈까스</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>사이드</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우거지 감자탕 (대)</p><p style="font-size:12px;color:#5f5e5a;margin:0">53,000원 · <strong>단체</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">24시간 영업</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">해장 옵션</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">1·2층 구조</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 방이동 65-4 1·2층 · <strong>🕐 영업</strong> 24시간 (매장 공지 우선) · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-496-0202
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/얼큰본가 연품뼈해장국 24시 본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 얼큰본가 연품뼈해장국 24시 본점 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>양양집</strong><br><span style="font-size:11px;color:#888780">한우 양선지</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">205건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">12,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 한우 사용</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>제주은희네해장국 잠실</strong><br><span style="font-size:11px;color:#888780">제주식 해장국</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">784건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">12,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">9시 오픈 + 돔베고기</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>본가설렁탕</strong><br><span style="font-size:11px;color:#888780">설렁탕 정식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">1,711건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">15,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 1위 + 가족 외식</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>청년감자탕 송파 본점</strong><br><span style="font-size:11px;color:#888780">감자탕·뼈해장</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.1<br><span style="font-size:11px;color:#888780">680건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">10,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">1만원 시작 + 매장 넓음</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>얼큰본가 연품뼈해장국 24시</strong><br><span style="font-size:11px;color:#888780">뼈해장국</span></td>
<td style="padding:11px 10px;text-align:center">리뷰 1,124건<br><span style="font-size:11px;color:#888780">표본 우선</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">10,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">24시간 + 새벽 해장</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 해장 시나리오마다 다른 선택', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 평점 1위 한우 해장</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>양양집</strong> — 한우 양선지 해장국 12,000원·우대갈비찜 39,000원. 평점 4.5점 1순위, 한우 사용 차별점, 삼전동 골목 위치.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🐷 표본 안정 제주식 해장</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>제주은희네해장국 잠실직영점</strong> — 해장국 12,000원, 9시 오픈으로 늦은 아침 해장도 가능. 돔베고기 사이드로 가족 외식까지 확장.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍚 설렁탕 정식·가족 외식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>본가설렁탕</strong> — 설렁탕 15,000원·도가니탕 27,000원·꼬리찜 99,000원. 리뷰 1,711건으로 표본 최다, 정식 점심·가족 외식 안정 옵션.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 1만원 가성비 1순위</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>청년감자탕 송파 본점</strong> — 뼈해장국 10,000원·순대국 10,000원, 매장 넓어 단체 수용. 1인 1만원 시작 라인업.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌙 24시간 새벽 해장</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>얼큰본가 연품뼈해장국 24시 본점</strong> — 뼈해장국 11,000원·선지해장국 10,000원, 24시간 영업. 새벽 야근·심야 외출 후 식사 옵션.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>양양집·제주은희네해장국·청년감자탕·얼큰본가</strong>는 모두 주차 가능 매장이지만 평일 점심 12~13시 피크에는 만차될 수 있어 11:30~11:50 입장이 안전합니다.</li>
<li><strong>본가설렁탕</strong>은 영업시간이 매장 공지 기준이라 방문 전 매장 전화로 운영 여부를 확인해 두시면 좋습니다. 인근 공영주차장 옵션을 함께 고려해 두시기 바랍니다.</li>
<li><strong>얼큰본가 연품뼈해장국 24시 본점</strong>은 24시간 영업이지만 새벽 시간대(03:00~05:00)는 인력 사정으로 임시 휴게가 발생할 수 있어 새벽 방문 시 매장 전화 확인을 권장드립니다.</li>
<li><strong>제주은희네해장국 잠실직영점</strong>은 9:00 영업 시작이라 늦은 아침·해장 옵션으로 가장 빠른 매장입니다. 일반 해장국집보다 1~2시간 일찍 운영됩니다.</li>
<li><strong>양양집</strong>은 한우 사용으로 일반 해장국집 대비 단가가 평균 위(12,000원~)이지만, 한우 양·양지·우대갈비 같은 디너 사이드까지 풀세트 운영이 차별점입니다.</li>
<li>메뉴 가격은 시즌·재료 수급(특히 한우·꼬리)에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 잠실 국밥·해장국에서 평점이 가장 높은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>양양집</strong>이 평점 4.5점·리뷰 205건으로 본 가이드 5곳 중 1순위입니다. 한우 양선지 해장국 12,000원·한우양지수육 29,000원·우대갈비찜 39,000원으로 해장국 단품부터 디너 가족 외식까지 한 자리에서 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 1만원 가성비 1순위는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>청년감자탕 송파 본점</strong> — 뼈해장국 10,000원·순대국 10,000원이 5곳 중 1만원 단가 최저가입니다. 평점 4.1·리뷰 680건의 안정 표본이고 매장이 넓어 단체 수용도 가능합니다. 차순위는 <strong>얼큰본가 연품뼈해장국</strong>의 선지해장국 10,000원.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 24시간 새벽 해장 가능한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>얼큰본가 연품뼈해장국 24시 본점</strong>이 잠실에서 24시간 영업 옵션입니다. 뼈해장국 11,000원·선지해장국 10,000원·우거지 감자탕 53,000원 라인업이고, 1·2층 구조라 단체 수용도 가능합니다. 새벽 03:00~05:00는 임시 휴게 가능성이 있어 매장 전화 확인을 권장드립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가족 외식·정식이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>본가설렁탕</strong>이 1순위입니다. 리뷰 1,711건 표본 최다 + 도가니탕 27,000원·꼬리곰탕 33,000원·모듬수육 68,000원·꼬리찜 99,000원 라인업으로 정식 점심·가족 외식·접대 자리까지 가능합니다. 차순위는 <strong>제주은희네해장국</strong>의 돔베모둠 38,000원.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 아침 일찍 해장 가능한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>제주은희네해장국 잠실직영점</strong>이 09:00 영업 시작으로 가장 빠른 옵션입니다. 9시 이전이면 <strong>얼큰본가 연품뼈해장국 24시 본점</strong>이 24시간 영업이라 새벽~아침 시간대 모두 커버 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>양양집·제주은희네해장국·청년감자탕·얼큰본가</strong>는 주차 가능 매장입니다. <strong>본가설렁탕</strong>은 인근 공영주차장 이용을 권장드리며, 2호선·8호선 잠실역 대중교통이 가장 편한 옵션입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/jamsil/category/gukbap', text: '잠실 국밥·해장국 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">잠실 1,149곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">잠실 일대 1,149곳에서 국밥·해장국·설렁탕·감자탕·곰탕 카테고리(약 40곳)를 평점 4.0+·리뷰 200건+ 조건으로 필터링한 약 10곳 중, 메뉴 차별성과 운영 시간 특성을 함께 본 결과 5곳을 정리하였습니다. 한우 양선지·제주식 해장국·설렁탕·감자탕·뼈해장국 다섯 카테고리로 검색 의도가 자연스럽게 나뉘었고, 1인 시작가는 10,000원(청년감자탕·얼큰본가)부터 15,000원(본가설렁탕)까지 분포합니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 우선이면 <strong>양양집(4.5)</strong>이 1순위이지만 리뷰 205건의 표본이 본 가이드에서 가장 적습니다. 평점·표본 균형이면 <strong>제주은희네해장국 잠실직영점(4.3·784건)</strong>이 가장 안정적이고, 표본 최다는 <strong>본가설렁탕(1,711건)</strong>으로 정식 점심·가족 외식에 무난합니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>얼큰본가 연품뼈해장국 24시 본점</strong>은 평점 단순 누적 단계이지만 리뷰 1,124건의 표본과 24시간 영업이라는 차별점이 명확해 새벽·심야 해장 옵션으로 포함하였습니다. 1만원 가성비이면 <strong>청년감자탕 송파 본점</strong>(평점 4.1·뼈해장국 10,000원)이 1순위이고, 메인 메뉴(뼈해장국·순대국) 위주 주문이면 만족도 편차가 줄어듭니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급(특히 한우·꼬리)에 따라 변동될 수 있어 방문 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
