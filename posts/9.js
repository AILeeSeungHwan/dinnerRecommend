// 판교역 회식 장소 5선 — 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 9,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>판교역</strong>에서 5~10인 팀 회식이 가능한 식당 5곳을 정리했습니다. 신분당선·경강선 판교역 일대 902곳에서 평점·리뷰 표본·가격대·회식 카테고리 매칭 4가지를 기준으로 추려, 한식 해산물·고기구이·중식·짬뽕·일식+한식 퓨전까지 5종으로 메뉴를 분산했습니다. 1인 1만원선 부담 적은 동료 회식부터 4만원대 팀 외부 회식까지 가격대를 함께 나눠두었습니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">902곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">판교·서현·아브뉴프랑 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.3</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.1 ~ 4.8</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">5,683건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">12,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">1인 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">평점 1순위는 <strong>마루심 판교점</strong> (★ 4.8 · 한식 해산물, 평일 점심·저녁 두 시간대 운영, 아브뉴프랑). 4만원대 고기 회식이면 <strong>우테이블</strong> (1인 45,000~90,000원, 한식 고기구이). 부담 적은 1만원대 동료 회식이면 <strong>한와담 판교점</strong> (1인 12,000~22,000원, 판교역 도보권). 표본 검증 1위는 <strong>아비뉴프랑</strong> (리뷰 4,082건, 1인 15,000~25,000원). 짬뽕·중식 회식 한 끼면 <strong>전국5대짬뽕 연화산</strong> (리뷰 711건, 짬뽕·면류·중식 혼합 메뉴).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 메뉴 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>회식 카테고리 명시</strong> — cat 필드에 회식이 포함된 식당만</li>
<li><strong>네이버 플레이스 리뷰 150건 이상</strong> — 단체 표본 안정성</li>
<li><strong>평점 4.0점 이상</strong> — 5~10인 단체 만족도 평균선</li>
<li><strong>메뉴 분산</strong> — 한식 해산물·고기구이·짬뽕·중식·고기 5종으로 회식 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">판교역 일대 902곳 중 회식 카테고리에 매칭된 식당은 약 146곳이었습니다. 그중 평점·리뷰 표본·가격대·메뉴 다양성이 안정적인 식당 5곳을 추렸습니다. 같은 메뉴 중복을 피해 해산물·고기구이·짬뽕·중식·고기로 회식 시나리오를 분산했고, 1만원대~4만원대까지 가격대를 펼쳐 팀 단가에 맞춰 선택 가능하도록 정리했습니다.</p>`
    },

    { type: 'h2', id: 'marusim', text: '마루심 판교점 — 평점 4.8 한식 해산물 회식 1순위', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyMzAxMTdfMjIw/MDAxNjczODg1ODQzNjA1.k5mhGJKtsMvH4z3nXxg6WW9-7n_hSoJqovsEMwrKcFQg.5r_abuhIrce4XECsHYXqURa6hDr8I3DLR-1IykXJVdsg.JPEG/01.jpeg" alt="마루심 판교점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#F97316,#DC2626)" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 평점 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 리뷰 467건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000~22,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🏢 아브뉴프랑</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점 1순위(★ 4.8)</strong>인 한식 해산물 회식 매장입니다. 동판교로177번길 25, <strong>아브뉴프랑 판교점</strong> 동선 안에 자리잡고 있어 식후 카페·디저트 이동까지 짧게 묶입니다. 평일 점심 11:00~15:00 · 저녁 17:00~22:00 두 시간대로 영업이 명확히 나뉘어 있고, 주말은 11:00~22:00 연속 운영이라 팀 회식 시간 잡기가 수월합니다. 1인 1만2천원~2만2천원선이라 4만원대 고가 회식이 부담스러운 팀에 단가도 적정합니다. 평점 4.8 · 리뷰 467건은 회식 카테고리에서 가장 신뢰가 높은 조합으로, "맛있다" 키워드와 함께 회식 만족도가 누적됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"해산물 신선하다 · 회식 자리에 좋다 · 매장 깔끔하다" 같은 평이 자주 언급되었습니다. 아브뉴프랑 입지와 한식 해산물 회식 시나리오가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (한식 해산물 라인)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해산물 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한식 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000~18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">단체 세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">평점 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">아브뉴프랑</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">한식 해산물</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 동판교로177번길 25 아브뉴프랑 판교점 · <strong>🕐 영업</strong> 평일 11:00~15:00·17:00~22:00 / 주말 11:00~22:00 · <strong>🚗 주차</strong> 아브뉴프랑 주차장 · <strong>📞 전화</strong> 031-781-7998
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/마루심 판교점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 마루심 판교점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'utable', text: '우테이블 — 4만원대 한식 고기 회식', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAxODA2MTBfOCAg/MDAxNTI4NjQwOTMzNTE2.mMvN_bPFdpxNUg0nqsYXmTJudy1-QZDCWuOZhl0n0Ocg.lEZGaWFLBmddbuhX49fxlBXwDcQTcXTpDeyHe9rUgPQg.JPEG/01.jpeg" alt="우테이블 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#B91C1C,#7F1D1D)" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 4만원대 회식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 265건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 45,000~90,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🏢 아브뉴프랑</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">동판교로177번길 25 아브뉴프랑 동선 안의 한식 고기구이 회식 매장입니다. 1인 45,000~90,000원선 가격대로 본 가이드 5곳 중 가장 단가가 높은 자리이며, 외부 회식·부서 단위 행사·격식 있는 자리에 어울리는 옵션입니다. 평점 4.3 · 리뷰 265건이 누적되어 있고, 영업은 평일·주말 11:30~15:00 · 17:00~22:00 두 시간대로 나뉘어 있어 5~8인 팀 일정 잡기 수월합니다. 한식 고기 단품 라인업이라 부서장 자리·접대까지 함께 활용 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"고기 품질 좋다 · 회식 자리 격식 있다 · 서비스 친절하다" 같은 평이 자주 언급되었습니다. 단가 높은 회식 시나리오와 한식 고기 만족도가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (한식 고기 회식 라인)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한식 고기 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 모듬·코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">90,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드·식사</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">아브뉴프랑</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한식 고기구이</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">부서 회식</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 아브뉴프랑, 동판교로177번길 25 · <strong>🕐 영업</strong> 11:30~15:00·17:00~22:00 · <strong>🚗 주차</strong> 아브뉴프랑 주차장 · <strong>📞 전화</strong> 031-703-4775
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/우테이블" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 우테이블 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'jeonguk', text: '전국5대짬뽕 연화산 — 리뷰 711건 짬뽕·중식 회식', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://blog.kakaocdn.net/dn/bM2qAS/btsN2teKwam/jsabhzKqnsSFU2dqEkMtyk/img.jpg" alt="전국5대짬뽕 연화산 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#DC2626,#F59E0B)" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 짬뽕 회식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 711건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000~25,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">서판교로58번길 14, 서판교 동선에 자리잡고 있는 짬뽕·면류·중식 혼합 메뉴 매장입니다. 평점 4.2 · <strong>리뷰 711건</strong>으로 본 가이드 5곳 중 짬뽕·중식 카테고리에서 표본 안정성이 가장 큰 식당이며, 11:00~21:00 연속 운영으로 팀 회식 시간 선택지가 넓습니다. 1인 1만5천~2만5천원선이라 부담 적은 점심 회식·동료 식사 단가로 깔끔하게 들어옵니다. 짬뽕·칼국수 단품에 사이드(만두·꿔바로우)를 묶는 주문 패턴이 회식 자리 표준입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"짬뽕 국물이 진하다 · 면 식감 좋다 · 점심 회식에 부담 적다" 같은 평이 자주 언급되었습니다. 짬뽕 단품과 1만원대 회식 단가가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (짬뽕·중식 라인)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짬뽕·면류</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">중식 단품·세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드 (만두·꿔바로우)</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">짬뽕 단품</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서판교</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서판교로58번길 14 · <strong>🕐 영업</strong> 11:00~21:00 · <strong>🚗 주차</strong> 매장 안내 · <strong>📞 전화</strong> 031-781-6350
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/전국5대짬뽕 연화산" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 전국5대짬뽕 연화산 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'abnufrang', text: '아비뉴프랑 — 표본 1위 리뷰 4,082건 중식 회식', gradientStyle: { from: '#DC2626', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://t1.daumcdn.net/cfile/tistory/0221CD4F51CBAAFC07" alt="아비뉴프랑 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#DC2626,#7C3AED)" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🔥 표본 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 4,082건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000~25,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.1 · <strong>리뷰 4,082건</strong>으로 본 가이드 5곳 중 회식 카테고리에서 표본 절대 1위입니다. 삼평동 159-4, 판교역 도보 동선에 있는 중식 회식 매장으로, 11:30~22:00 연속 운영이라 점심·저녁 두 시간대 모두 팀 단위 일정에 맞추기 좋습니다. 1인 1만5천~2만5천원선이라 단가가 명확하고, 표본 4천 건이 누적된 매장이라 평균값 흔들림이 가장 적습니다. 평점 4.1은 본 5곳 평균보다 약간 낮지만, 표본 크기 자체가 신뢰의 근거가 됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"중식 단품 만족 · 회식 자리에 무난하다 · 단체 자리 운영 깔끔하다" 같은 평이 자주 언급되었습니다. 중식 회식 시나리오와 단체 운영 만족도가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (중식 회식 라인)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">중식 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">단체 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드·식사</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">중식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">단체 운영</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 삼평동 159-4 · <strong>🕐 영업</strong> 11:30~22:00 · <strong>🚗 주차</strong> 매장 안내 · <strong>📞 전화</strong> 031-8016-0101
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/아비뉴프랑" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 아비뉴프랑 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'hanwadam', text: '한와담 판교점 — 1만원대 동료 회식, 판교역 도보권', gradientStyle: { from: '#B91C1C', to: '#991B1B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyMTA1MjdfNzAg/MDAxNjIyMDc5MzQxNzA1.c-ncy1v-ESEJk-tMsCIp5tvPxJX62bNArCylJimSqEwg.aS5_G0QM_NDyphzhnBpkLfhMWXut7Wfk-r7Vy1QvW3DEg.JPEG/01.jpeg" alt="한와담 판교점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#B91C1C,#991B1B)" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 1만원대 동료 회식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 158건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000~22,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚶 판교역 도보권</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">판교역로 152 1층, <strong>판교역 도보권</strong>에 자리잡은 한식 고기구이 회식 매장입니다. 1인 1만2천~2만2천원선으로 본 가이드 5곳 중 한식 고기 카테고리에서 가장 부담 적은 단가입니다. 평점 4.2 · 리뷰 158건이 누적되어 있고, 회식 카테고리에 명시되어 있어 5~8인 동료 회식·팀 단위 식사에 무난한 옵션입니다. 평점은 본 5곳 평균(4.3)에 가까워 위험 신호는 없으며, 1만원대 동료 회식이 가장 잦은 시나리오에 매칭됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"가격 부담 적다 · 한식 고기 단품 깔끔 · 판교역 가깝다" 같은 평이 자주 언급되었습니다. 1만원대 단가와 판교역 접근성이 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (한식 고기 회식 라인)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한식 고기 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원선 · <strong>시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">고기 세트·정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드·식사</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">1만원대</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">판교역 도보</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">동료 회식</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 판교역로 152 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 매장 안내 · <strong>📞 전화</strong> 031-622-7182
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/한와담 판교점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 한와담 판교점 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>마루심 판교점</strong><br><span style="font-size:11px;color:#888780">한식 해산물</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">467건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">12,000~22,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 아브뉴프랑</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>우테이블</strong><br><span style="font-size:11px;color:#888780">한식 고기구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">265건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">45,000~90,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">4만원대 격식 회식</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>전국5대짬뽕 연화산</strong><br><span style="font-size:11px;color:#888780">짬뽕·중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">711건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">15,000~25,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">짬뽕 단품 + 점심 회식</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>아비뉴프랑</strong><br><span style="font-size:11px;color:#888780">중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.1<br><span style="font-size:11px;color:#888780">4,082건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">15,000~25,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 1위 + 단체 운영</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>한와담 판교점</strong><br><span style="font-size:11px;color:#888780">한식 고기구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">158건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">12,000~22,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">판교역 도보 + 동료 회식</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 회식은 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🏆 평점 신뢰 1순위</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>마루심 판교점</strong> — ★ 4.8 · 한식 해산물. 단가 1만원대~2만원대로 5~10인 팀 회식 부담이 적습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 4만원대 부서 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>우테이블</strong> — 1인 45,000~90,000원, 한식 고기구이. 외부 회식·부서장 자리에 어울리는 단가.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 1만원대 동료 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>한와담 판교점</strong> — 1만2천원선 시작, 판교역 도보권. 점심·저녁 가벼운 동료 식사에 단가가 명확합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 짬뽕·중식 한 끼 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>전국5대짬뽕 연화산</strong> — 짬뽕 단품 + 사이드 조합으로 1만5천원선. 점심 회식에 빠른 회전.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🔥 표본 신뢰 우선</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>아비뉴프랑</strong> — 리뷰 4,082건 표본 절대 1위. 평균값 흔들림이 가장 적은 회식 옵션.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>마루심 판교점·우테이블</strong>은 아브뉴프랑 1층 동선에 있어 5~10인 팀 회식 시 식후 카페·디저트 동선까지 짧게 묶을 수 있습니다.</li>
<li><strong>우테이블·마루심</strong>은 점심·저녁 두 시간대로 영업이 나뉘어 있어 5~8인 단체는 사전 전화 예약을 권장드립니다. 평일 저녁 19:00 피크는 자리가 빠르게 차는 편입니다.</li>
<li><strong>아비뉴프랑·전국5대짬뽕 연화산</strong>은 점심 12시 회식 회전이 빠르게 일어나니 11:30 입장 또는 13:30 입장이 안전합니다.</li>
<li><strong>한와담 판교점</strong>은 판교역 도보권이라 차량 동선보다 신분당선·경강선 이용을 권장드립니다. 전용 주차장 안내가 별도 없으니 차량 회식은 인근 공영주차장 사전 확인이 필요합니다.</li>
<li>회식 메뉴·가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다. 단체 코스·세트는 사전 예약 후 단가 확인이 안전합니다.</li>
<li>10인 이상 단체는 룸·단체석 보유 여부를 사전에 매장에 확인하시는 편이 안전합니다. 아브뉴프랑 동선 매장은 주말 단체 자리 경쟁이 큰 편입니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 판교역에서 5~8인 평일 저녁 회식이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 단가 부담이 크지 않은 자리라면 <strong>마루심 판교점</strong>(★ 4.8 · 1만원대~2만원대)이 1순위입니다. 격식 있는 부서 회식이면 <strong>우테이블</strong>(1인 4만5천~9만원, 한식 고기), 1만원대 동료 회식이면 <strong>한와담 판교점</strong>입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 회식 1시간 안에 가능한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>전국5대짬뽕 연화산</strong>이 짬뽕 단품 회전형이라 빠릅니다. 표본 1위가 필요하시면 <strong>아비뉴프랑</strong>(리뷰 4,082건)도 1만5천~2만5천원선 점심 회식에 무난합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 부서장 자리·격식 있는 회식이면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>우테이블</strong>이 1인 4만5천~9만원 한식 고기구이로 본 5곳 중 가장 단가가 높습니다. 평점 4.3 · 리뷰 265건으로 표본 안정성도 확보되어 외부 회식에 어울립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 표본이 가장 많은 회식 식당은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>아비뉴프랑</strong>의 리뷰 4,082건이 본 5곳 중 표본 절대 1위입니다. 평점만 보시면 <strong>마루심 판교점</strong>(4.8)이 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 1만원대 가벼운 동료 회식이면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>한와담 판교점</strong>(1인 1만2천원 시작) 또는 <strong>마루심 판교점</strong>(1만원대~2만원대 한식 해산물)이 1순위입니다. 두 식당 모두 평점·리뷰가 안정적이라 단가 부담을 줄이면서도 만족도가 흔들리지 않습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 룸·단체석은 사전 예약이 필수인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 10인 이상 단체는 룸·단체석 보유 여부를 사전 전화 확인이 안전합니다. 아브뉴프랑 동선 매장(마루심·우테이블)은 주말 단체 자리 경쟁이 큰 편이라 평일 회식보다 미리 예약하시는 편이 좋습니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/pangyo/category/group', text: '판교역 회식 식당 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">판교역 902곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">판교역 일대 902곳에서 회식 카테고리에 매칭된 식당 146곳 중, 평점·리뷰·가격대·메뉴 다양성 4가지를 종합해 5곳을 정리했습니다. 메뉴는 한식 해산물·고기구이·짬뽕·중식·고기 5종으로 분산했고, 가격은 1만2천원 시작 ~ 9만원선까지 폭을 펼쳐 팀 단가에 맞춰 선택 가능하도록 구성했습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>마루심 판교점(★ 4.8)</strong>이 1순위, 리뷰 표본 크기로는 <strong>아비뉴프랑(4,082건)</strong>이 1순위입니다. 두 식당은 메뉴 카테고리가 달라 회식 시나리오가 겹치지 않으니, 해산물 한식 회식이면 마루심, 중식 회식이면 아비뉴프랑 식으로 분리해 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">4만원대 격식 회식이 필요하면 <strong>우테이블</strong>(1인 4만5천~9만원), 1만원대 부담 적은 동료 회식이면 <strong>한와담 판교점</strong>(1만2천원 시작), 짬뽕 점심 회식이면 <strong>전국5대짬뽕 연화산</strong>(짬뽕 단품 + 사이드)으로 단가별 분류가 명확합니다. 평점 4.1 식당(아비뉴프랑)은 표본 절대 1위라는 차별점으로 포함했고, 1만5천~2만5천원선 단가가 표준입니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 회식 단체 코스·세트는 사전 예약 후 단가 확인을 권장드립니다.</p>`
    },
  ]
}

export default post
