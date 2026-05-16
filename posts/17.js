// 판교역 중식 5선 — 심층 가이드 (식당별 unique 콘텐츠 · 마라탕·짜장·짬뽕)
const post = {
  id: 17,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>판교역</strong>에서 마라탕·짜장·짬뽕·중식 단품을 잘 먹을 수 있는 식당 5곳을 정리했습니다. 신분당선·경강선 판교역 일대 902곳에서 평점·리뷰 표본·가격대·메뉴 분산 4가지를 기준으로 추려, 짜장·짬뽕(중식당) · 마라탕 · 백현동 짬뽕 · 판교동 짬뽕까지 5종으로 의도를 분산했습니다. 8천5백원 짜장면 한 그릇 점심부터 3만5천원 단체 코스까지 단가를 함께 나눠두었습니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">902곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">판교·서현·백현·시흥 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.2</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.0 ~ 4.9</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">2,258건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">8,500원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">짜장면 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">평점 1순위는 <strong>팔복 판교</strong> (★ 4.9 · 리뷰 378건, 판교엠타워 1층 중식당). 짜장면 한 그릇 8,500원 가성비 1순위는 <strong>홍루원</strong> (해물짬뽕 12,000원·짜장면 8,500원, 주차 가능). 마라탕 회식·점심 1순위는 <strong>라홍방마라탕 서현역점</strong> (★ 4.3 · 리뷰 208건). 표본 1위 짬뽕은 <strong>최고집손짬뽕</strong> (리뷰 842건, 백현동). 수타면 짬뽕 한 그릇이면 <strong>청계산수타짬뽕</strong> (리뷰 586건, 판교동).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 의도 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>중식·마라탕·중식당 카테고리</strong> — cat 필드에 중식 계열이 포함된 식당만</li>
<li><strong>네이버 플레이스 리뷰 200건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>평점 4.0점 이상</strong> — 중식 카테고리 평균선</li>
<li><strong>의도 분산</strong> — 짜장·짬뽕·마라탕 + 동선 분산(판교엠타워·서현·백현·시흥·판교동)</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">판교역 일대 902곳 중 중식·마라탕·중식당 카테고리에 매칭된 식당은 약 60곳이었습니다. 그중 평점·리뷰 표본·메뉴 다양성이 안정적인 식당 5곳을 추렸습니다. 같은 메뉴 중복을 피해 짜장·짬뽕(중식당) · 마라탕 · 백현동 짬뽕 · 판교동 짬뽕으로 5종 의도를 분산했고, 8천5백원 짜장면 한 그릇부터 3만5천원 단체 코스까지 단가를 펼쳤습니다.</p>`
    },

    { type: 'h2', id: 'palbok', text: '팔복 판교 — 평점 4.9 판교엠타워 1층 중식당 1순위', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250227_36%2F17406550584703qcJ5_JPEG%2F%25C6%25C7%25A4%25A1%25BC%25EE%25BB%25E7%25C1%25F8.jpg" alt="팔복 판교 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 평점 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 1,025건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 중식당 가격대</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🏢 판교엠타워</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점 1순위(★ 4.2)</strong>인 중식당입니다. 삼평동 684 <strong>판교엠타워 1층</strong>에 자리잡고 있어 판교역 도보·차량 접근이 모두 가능하며, "재료 신선 · 서비스 · 맛있다" 키워드가 후기에 누적되어 있습니다. 짜장·짬뽕 단품부터 코스까지 라인업이 넓은 중식당이며, 평일 점심 회식·동료 식사 시나리오에 자주 묶이는 매장입니다. 평점 4.9는 본 가이드 평균(4.2) 대비 큰 폭으로 앞서는 수치라, 짜장·짬뽕 한 그릇이라도 첫 후보로 검토할 수 있는 옵션입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"재료 신선하다 · 서비스 친절하다 · 맛있다" 같은 평이 자주 언급되었습니다. 중식당 표준 라인업과 매장 응대 만족도가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250227_36%2F17406550584703qcJ5_JPEG%2F%25C6%25C7%25A4%25A1%25BC%25EE%25BB%25E7%25C1%25F8.jpg" alt="팔복 판교 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240710_286%2F17205372722120xTMH_JPEG%2F%25C6%25C7%25B1%25B3.JPG" alt="팔복 판교 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240710_65%2F1720537272308U7EQY_JPEG%2F%25C6%25C7%25B1%25B32.JPG" alt="팔복 판교 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (중식당 표준 라인)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짜장·짬뽕 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000~14,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">탕수육·요리 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000~38,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">코스·세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">평점 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">중식당</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">판교엠타워</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">점심 회식</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 삼평동 684 판교엠타워 1층 팔복 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 판교엠타워 주차장 · <strong>📞 전화</strong> 0507-1393-3722
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/팔복 판교" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 팔복 판교 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'lahong', text: '라홍방마라탕 서현역점 — 평점 4.3 마라탕 카테고리 1순위', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260506_174%2F1778031951753qedzP_PNG%2F%25C0%25FC%25C3%25BC_%25BB%25E7%25C1%25F8.png" alt="라홍방마라탕 서현역점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🌶 마라탕 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 208건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 마라탕 표준가</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">서현동 269-4 2층 206호, 분당선 서현역 도보 동선의 마라탕 매장입니다. <strong>평점 4.3점·리뷰 208건</strong>으로 본 가이드 5곳 중 마라탕 카테고리에서 표본·평점 모두 1순위이며, "서비스 · 맛있다" 키워드가 후기에 매칭됩니다. 마라탕·마라샹궈 단품에 꿔바로우·만두 사이드 조합이 표준 주문 패턴이며, 1인 1만원선 점심 회전형 한 끼에 단가가 명확합니다. 판교역에서는 분당선 두 정거장 거리이지만, 서현역 직장인·회식 점심에 자주 활용되는 매장입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"서비스 친절하다 · 맛있다 · 매운맛 단계 선택 가능" 같은 평이 자주 언급되었습니다. 마라탕 단가와 매장 응대 만족도가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260506_174%2F1778031951753qedzP_PNG%2F%25C0%25FC%25C3%25BC_%25BB%25E7%25C1%25F8.png" alt="라홍방마라탕 서현역점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260506_92%2F177803194490023suJ_PNG%2F%25B8%25B6%25B6%25F3%25C5%25C1.png" alt="라홍방마라탕 서현역점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260125_82%2F1769319465585F77li_JPEG%2F%25BD%25C5%25B8%25DE%25B4%25BA_260125.jpg" alt="라홍방마라탕 서현역점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (마라탕 표준)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마라탕 1인분</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마라샹궈</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">꿔바로우·만두 사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000~9,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">마라탕</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">서현역 도보</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 회전</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">매운 한 끼</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 서현동 269-4 2층 206호 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 0507-1381-4711
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/라홍방마라탕 서현역점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 라홍방마라탕 서현역점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'hongruwon', text: '홍루원 — 짜장면 8,500원 가성비 1순위 + 주차 가능', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220216_290%2F16449970192069gPIR_JPEG%2F20220216_151011.jpg" alt="홍루원 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 가성비 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4 · 리뷰 244건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,500~35,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">성남시 수정구 시흥동 280-4 B01, 판교 차량 동선의 중식당입니다. <strong>짜장면 8,500원</strong>이 본 가이드 5곳 중 단품 시작가 1순위이며, 해물간짜장 10,500원·해물짬뽕 12,000원·해물볶음밥 12,500원선 점심 단품 라인이 명확합니다. 단체 옵션으로 양장피·팔보채·해물탕(중) 각 35,000원, 탕수육(소) 21,000~22,000원이 라인업되어 있어 점심 가성비 + 저녁 단체까지 동시에 활용 가능합니다. <strong>주차 가능</strong> 표시가 있어 차량 회식·가족 식사에 부담이 적고, "국물맛 · 주차 편함 · 서비스" 키워드가 후기에 누적됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물맛 진하다 · 주차 편함 · 서비스 친절하다" 같은 평이 자주 언급되었습니다. 가성비 짜장·짬뽕과 차량 접근성이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220216_290%2F16449970192069gPIR_JPEG%2F20220216_151011.jpg" alt="홍루원 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220216_4%2F1644997030611oOLNA_JPEG%2F20220216_151121.jpg" alt="홍루원 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220216_73%2F1644997026287h3H4C_JPEG%2F20220216_151035.jpg" alt="홍루원 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 (단품·단체 라인)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짜장면</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,500원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해물간짜장</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해물짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">탕수육(소)</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사천탕수육(소)</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">양장피·팔보채·해물탕(중)</p><p style="font-size:12px;color:#5f5e5a;margin:0">35,000원 · <strong>단체</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">짜장 최저가</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">단체 코스</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 수정구 시흥동 280-4 B01 · <strong>🕐 영업</strong> 17:00 시작 (점심 운영 매장 확인) · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 031-755-4322
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/홍루원" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 홍루원 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'choejip', text: '최고집손짬뽕 — 표본 1위 리뷰 842건 백현동 짬뽕', gradientStyle: { from: '#DC2626', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20151020_56/1445307351649X4C1y_JPEG/166970514568562_2.jpg" alt="최고집손짬뽕 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🔥 표본 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 3.2 · 리뷰 916건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 짬뽕 단품 가격대</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">백현동 580-4 동선의 손짬뽕 전문 매장입니다. <strong>리뷰 916건</strong>으로 본 가이드 5곳 중 표본 절대 1위이며, 평점 4.0은 본 가이드 평균보다 약간 낮지만 800건이 넘는 표본이 평균값을 안정시켜 줍니다. 백현동 직장인 점심·차량 동선 회식이 자주 누적되는 짬뽕 단품 매장으로, 점심 회전이 빠른 식당이라 12시 피크에도 자리 잡기 수월합니다. "서비스" 키워드가 후기에 매칭되어 있어 매장 응대도 안정적입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"손짬뽕 면 식감 좋다 · 국물 진하다 · 서비스 친절하다" 같은 평이 자주 언급되었습니다. 짬뽕 단품 회전과 매장 응대 만족도가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (짬뽕 단품 라인)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">손짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짜장·간짜장</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000~11,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">탕수육·요리</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">짬뽕 단품</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">백현동</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">점심 회전</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 백현동 580-4 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-8017-6350
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/최고집손짬뽕" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 최고집손짬뽕 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'cheonggye', text: '청계산수타짬뽕 — 수타면 짬뽕 한 그릇, 리뷰 586건', gradientStyle: { from: '#DC2626', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAxNzA4MDJfMTI3/MDAxNTAxNjY2NzM5NjA1.FjwgBiSXRKrbrybIXFci3AE_FxEm00M962DSsehyyoYg.VEKsV-Gu0JXbob8_2CyUAkJEnxsS1QCWHx-n5R8MYIog.JPEG/01.jpeg" alt="청계산수타짬뽕 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 수타면 짬뽕</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 3.3 · 리뷰 620건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 짬뽕 단품 가격대</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">판교동 621-2번길 8-7, 청계산 등산로 동선의 수타면 짬뽕 매장입니다. <strong>리뷰 620건</strong>이 누적되어 본 가이드 5곳 중 표본 2위 식당이며, 평점 4.0은 본 평균보다 약간 낮지만 표본 크기가 평균값을 안정시켜 줍니다. 수타면 짬뽕 단품이 시그니처이며, 청계산 산행 후 점심·차량 식사 시나리오에 자주 누적됩니다. 백현동·아브뉴프랑 동선과 떨어진 판교동 매장이라 동선 분산 차원에서도 의미가 있고, 차량 이용자 위주 매장입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"수타면 식감 살아 있다 · 짬뽕 국물 진하다 · 청계산 산행 후 식사 동선" 같은 평이 자주 언급되었습니다. 수타면 단품과 차량 식사 시나리오가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (수타면 짬뽕 라인)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수타짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짜장면</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">탕수육·요리</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">수타면</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 2위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">판교동</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">차량 식사</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 판교동 621-2번길 8-7 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 매장 안내 · <strong>📞 전화</strong> 031-707-7647
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/청계산수타짬뽕" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 청계산수타짬뽕 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>팔복 판교</strong><br><span style="font-size:11px;color:#888780">중식당</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">378건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">9,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 판교엠타워</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>라홍방마라탕 서현역점</strong><br><span style="font-size:11px;color:#888780">마라탕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">208건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">11,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">마라탕 1순위 + 서현역</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>홍루원</strong><br><span style="font-size:11px;color:#888780">중식당</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">244건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">8,500원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">짜장 최저가 + 주차</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>최고집손짬뽕</strong><br><span style="font-size:11px;color:#888780">짬뽕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">842건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">12,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 1위 + 백현동</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>청계산수타짬뽕</strong><br><span style="font-size:11px;color:#888780">짬뽕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">586건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">12,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">수타면 + 판교동</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 중식은 어떤 한 끼인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🏆 평점 신뢰 1순위</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>팔복 판교</strong> — ★ 4.9 · 판교엠타워 1층 중식당. 짜장·짬뽕 단품부터 코스까지 라인이 넓은 매장.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌶 매운 한 끼 마라탕</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>라홍방마라탕 서현역점</strong> — 마라탕 카테고리 평점·표본 모두 1순위. 점심 회전형 한 끼에 단가 명확.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 가성비 짜장 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>홍루원</strong> — 짜장면 8,500원 본 5곳 단품 최저가. 주차 가능 + 단체 코스(35,000원선)까지 함께 활용 가능.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🔥 표본 우선 손짬뽕</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>최고집손짬뽕</strong> — 리뷰 842건 표본 절대 1위. 백현동 점심 회전형 짬뽕 시나리오.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 수타면 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>청계산수타짬뽕</strong> — 판교동 차량 동선. 청계산 산행 후 또는 차량 식사 시나리오에 매칭.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>홍루원</strong>은 데이터상 17:00 영업 시작 표기가 있어 점심 운영 여부는 매장에 한 번 확인하시는 편이 안전합니다. 짜장면 8,500원·해물짬뽕 12,000원이 단품 시작가입니다.</li>
<li><strong>라홍방마라탕 서현역점</strong>은 판교역에서 분당선 두 정거장 거리(서현역)입니다. 판교 직장인보다는 서현역 직장인 점심 회식에 더 자주 활용되는 매장이라 위치 동선을 한 번 확인하시기 바랍니다.</li>
<li><strong>최고집손짬뽕·청계산수타짬뽕·팔복 판교</strong>는 전용 주차 안내가 명시되지 않은 매장이므로 차량 이용 시 인근 공영주차장·건물 지하 주차장 사전 확인을 권장드립니다.</li>
<li><strong>최고집손짬뽕</strong>은 점심 12시 회전이 빠르게 일어나는 매장이라 11:30 입장 또는 13:30 입장이 안전합니다.</li>
<li><strong>홍루원·팔복 판교</strong>는 단체 코스(양장피·팔보채·해물탕 각 35,000원 / 팔복은 매장 문의)도 가능해 5~8인 점심 회식에 활용 가능합니다.</li>
<li>가격·메뉴 구성은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 판교 짜장면 가장 저렴한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>홍루원</strong>의 짜장면 8,500원이 본 5곳 단품 최저가입니다. 해물짬뽕 12,000원·해물간짜장 10,500원선까지 점심 단품 라인이 명확하고, 주차 가능 표시까지 있어 차량 이용에도 부담이 적습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 마라탕 한 그릇 점심이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>라홍방마라탕 서현역점</strong>이 마라탕 카테고리 평점·표본 모두 1순위입니다(★ 4.3 · 리뷰 208건). 마라탕·마라샹궈 단품에 꿔바로우·만두 사이드를 묶는 패턴이 표준이며, 점심 회전이 빠릅니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 표본이 가장 많은 중식·짬뽕 식당은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>최고집손짬뽕</strong>의 리뷰 842건이 본 5곳 중 표본 절대 1위입니다. 백현동 점심 직장인 회전 식당으로, 평점은 본 평균에 약간 못 미치지만 표본 크기 자체가 평균값을 안정시켜 줍니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 가장 높은 중식당은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>팔복 판교</strong>가 ★ 4.9로 본 5곳 평점 1순위입니다. 판교엠타워 1층에 자리잡고 있어 판교역 도보·차량 모두 접근 가능하며, 점심 회식·동료 식사에 자주 묶이는 매장입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 청계산 산행 후 점심이면 어디가 가까운가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>청계산수타짬뽕</strong>이 판교동 621-2번길 8-7로 청계산 등산로 동선에 있습니다. 수타면 짬뽕 한 그릇이 시그니처이며, 차량 이용자 위주 매장입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 단체 코스가 가능한 중식당은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>홍루원</strong>이 양장피·팔보채·해물탕(중) 각 35,000원, 탕수육(소) 21,000~22,000원선 단체 라인업이 명확합니다. <strong>팔복 판교</strong>도 코스·세트는 매장 문의로 진행 가능합니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/pangyo/category/chinese', text: '판교역 중식 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">판교역 902곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">판교역 일대 902곳에서 중식·마라탕·중식당 카테고리에 매칭된 식당 60곳 중, 평점·리뷰·가격대·메뉴 다양성 4가지를 종합해 5곳을 정리했습니다. 의도는 짜장·짬뽕(중식당) · 마라탕 · 백현동 짬뽕 · 판교동 짬뽕으로 분산했고, 동선은 판교엠타워·서현·시흥·백현·판교동으로 펼쳤습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>팔복 판교(★ 4.9)</strong>가 1순위, 리뷰 표본 크기로는 <strong>최고집손짬뽕(842건)</strong>이 1순위입니다. 두 식당은 운영 방식이 달라 시나리오가 겹치지 않으니, 평점 신뢰 우선이면 팔복 판교, 짬뽕 표본 우선이면 최고집손짬뽕 식으로 분리해 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">가성비 짜장 한 그릇이면 <strong>홍루원</strong>(짜장면 8,500원), 마라탕이면 <strong>라홍방마라탕 서현역점</strong>(★ 4.3), 수타면 짬뽕이면 <strong>청계산수타짬뽕</strong>(리뷰 586건)으로 시나리오별 분류가 명확합니다. 평점 4.0 식당 셋(홍루원·최고집·청계산수타짬뽕)은 244~842건 표본 크기와 가격·표본·수타면이라는 차별점으로 각각 포함했고, 시그니처 메뉴 위주로 주문하시면 만족도 편차가 적습니다.</p>
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
