// 강남역 점심 맛집 추천 5곳 — 식당별 unique 콘텐츠
const post = {
  id: 48,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>강남역</strong>에서 점심 한 끼를 카테고리별로 다르게 풀고 싶을 때 참고할 식당 5곳을 정리했습니다. 강남역·역삼동 285곳에서 평점·리뷰 표본·메뉴 구성·점심 적합성 4가지를 기준으로 추렸고, 순대국·마라탕·스시·피자·돼지구이로 카테고리를 분산했습니다. 혼밥·빠른 점심·팀 점심·점심 데이트 등 상황별 1순위를 따로 골라 두었으니 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">285곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">강남역·역삼동 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평점</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.6</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.3 ~ 4.9</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">18,139건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">1,890원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">스시 접시당 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">든든한 한식 점심이면 <strong>농민백암순대 역삼직영점</strong> — 국밥 11,000원, 평점 4.6점·리뷰 4,173건.<br><br>혼밥·빠른 점심이면 <strong>라홍방마라탕 강남직영점</strong> (마라탕 100g당 2,200원, 평점 4.7점·리뷰 2,190건).<br><br>가성비 스시 점심이면 <strong>스시마이우 강남CGV점</strong> (접시당 1,890원, 리뷰 4,717건).<br><br>점심 데이트·팀 점심이면 <strong>퍼그피자하우스 강남점</strong> (파스타 8,800원부터, 평점 4.9점·리뷰 5,215건, 주차·예약).<br><br>고기로 든든하게면 <strong>육품 강남본점</strong> (점심 찌개류 10,000원, 평점 4.5점·리뷰 1,859건).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '강남역 점심 맛집 선정 기준', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>점심 적합 가격대</strong> — 1인 점심 부담이 과하지 않은 가격 구성 우선</li>
<li><strong>네이버 플레이스 리뷰 1,500건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>평점 4.3점 이상</strong> — 강남역 점심 카테고리 상위 구간으로 컷</li>
<li><strong>카테고리 분산</strong> — 한식·중식·일식·양식·고기로 점심 검색 의도 5종 분리</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">강남역·역삼동 285곳 중 점심 한 끼에 들어가는 식당은 카테고리별로 폭이 넓었습니다. 그중 평점·리뷰 표본·메뉴 구성·점심 적합성이 함께 안정적인 식당을 카테고리당 1곳씩 추렸습니다. 같은 카테고리 중복을 피해 순대국·마라탕·스시·피자·돼지구이로 점심 선택지를 다섯 갈래로 분리했고, 평점이 다소 낮아도 표본·가격 차별점이 명확하면 포함했습니다.</p>`
    },

    { type: 'h2', id: 'nongmin', text: '농민백암순대 역삼직영점 — 든든한 한식 점심 1순위', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220823_198%2F1661219525050UCnxb_JPEG%2F0AA61948-38FC-4DF6-804E-8A12DD6E96A3.jpeg" alt="농민백암순대 역삼직영점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 한식 점심 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.6 · 리뷰 4,173건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 11,000원~39,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">⏳ 웨이팅 맛집</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">역삼동 830-9에 있는 순대국·순댓국밥 전문점입니다. 평점 4.6에 리뷰 4,173건, 블로그 후기 2,331건이 함께 누적되어 강남역 한식 점심에서 표본이 매우 두텁습니다. 국밥 11,000원, 정식 17,000원으로 한 그릇 점심을 든든하게 해결하기 좋고, 웨이팅 맛집으로 묶이는 곳이라 점심 12시 피크보다 11시대 또는 1시 이후 방문이 안전합니다. 혼밥 손님도 무난하게 받는 한식 점심 정석 옵션입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국밥이 진하다 · 순대가 실하다 · 점심에 줄 선다" 같은 평이 자주 언급되었습니다. 한식 점심 만족도와 피크 웨이팅이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w560_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220823_198%2F1661219525050UCnxb_JPEG%2F0AA61948-38FC-4DF6-804E-8A12DD6E96A3.jpeg" alt="농민백암순대 역삼직영점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w278_sharpen&amp;src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTA5MjhfMjcy%2FMDAxNzU5MDY5MjQzODg2.q5WTYX4-rRBvzFFl0kK5K-w9fXM6FrpQZsEWalTi-Dog.Bx9MpwHfv5mrH6f9uq1toVXEKHpSLtuYA-7YYcqVJr8g.JPEG%2F20250829_201406.jpg.jpg" alt="농민백암순대 역삼직영점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w278_sharpen&amp;src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTExMjBfMjAz%2FMDAxNzYzNjI5NTM3MTIx.Tex5w9Q3UtE8iey1itb03pxExDzMNBVdew9aV9VQBQcg.xXArE0PXJ9QkOFx6zINv3Gk9sFK8bgEvRvKmsLYRWOcg.JPEG%2F20251120_173650.jpg" alt="농민백암순대 역삼직영점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">국밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">국밥 특</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">토종순대</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">술국</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원 · <strong>인기</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한식 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">국밥 11,000원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">웨이팅 맛집</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 강남구 역삼동 830-9 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 02-501-2772
</div>
<div style="text-align:center"><a href="/dinner/gangnam/restaurant/농민백암순대 역삼직영점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 농민백암순대 역삼직영점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'lahongbang', text: '라홍방마라탕 강남직영점 — 혼밥·빠른 점심 1순위', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250716_171%2F1752633259441sEU7R_JPEG%2FKOREAN_MALATANG_LAHONGBANG_%25B6%25F3%25C8%25AB%25B9%25E6.jpg" alt="라홍방마라탕 강남직영점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 혼밥 점심 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 2,190건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 2,200원~17,900원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍜 혼밥 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">역삼동 619-2에 있는 마라탕·마라샹궈 전문점입니다. 평점 4.7에 리뷰 2,190건으로 강남역 중식 점심에서 표본이 두텁고, 마라탕 100g당 2,200원으로 양을 조절해 점심 예산을 맞추기 쉽다는 점이 차별점입니다. 11:00 영업 시작이라 이른 점심도 가능하고, 혼밥 손님 비중이 높아 혼자 빠르게 한 끼 해결하기에 잘 맞습니다. 꿔바로우·레몬크림새우 같은 곁들임을 더하면 둘이서도 무난합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"양 조절이 자유롭다 · 혼자 먹기 좋다 · 꿔바로우가 인기" 같은 평이 자주 언급되었습니다. 가격 유연성과 혼밥 편의가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w560_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250716_171%2F1752633259441sEU7R_JPEG%2FKOREAN_MALATANG_LAHONGBANG_%25B6%25F3%25C8%25AB%25B9%25E6.jpg" alt="라홍방마라탕 강남직영점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w278_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250205_76%2F1738733939497SRa1h_JPEG%2F%25C7%25C3%25B7%25B9%25C0%25CC%25BD%25BA%25BF%25EB-%25B8%25B6%25B6%25F3%25C5%25C1.jpg" alt="라홍방마라탕 강남직영점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w278_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250205_216%2F1738733939477xVMkA_JPEG%2F%25C7%25C3%25B7%25B9%25C0%25CC%25BD%25BA%25BF%25EB_%25B8%25B6%25B6%25F3%25BC%25A7%25B1%25C5.jpg" alt="라홍방마라탕 강남직영점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마라탕 (100g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">2,200원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마라샹궈 (100g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,300원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마라로제샹궈 (100g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,300원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">꿔바로우 (소)</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,900원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">레몬크림새우 (소)</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">반반새우 (대)</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,900원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">11:00 오픈</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가격 유연</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">빠른 점심</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 강남구 역삼동 619-2 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 07-1378-1413
</div>
<div style="text-align:center"><a href="/dinner/gangnam/restaurant/라홍방마라탕 강남직영점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 라홍방마라탕 강남직영점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'sushimaiu', text: '스시마이우 강남CGV점 — 접시당 1,890원 가성비 스시 점심', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250530_187%2F1748604268283eBsTC_JPEG%2FKakaoTalk_20250530_193317976.jpg" alt="스시마이우 강남CGV점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍣 가성비 스시 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 4,717건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1,890원~22,000원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💸 가성비</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">역삼동 619-4 장연빌딩에 있는 회전초밥 형태의 가성비 스시 매장입니다. 평점 4.3은 본 가이드 5곳 중 가장 낮지만, <strong>리뷰 4,717건</strong>으로 표본이 두 번째로 두텁고 접시당 1,890원이라는 가격 구조가 명확한 차별점입니다. 평점이 다소 낮은 이유는 회전초밥 특성상 기대치 편차가 함께 쌓인 것으로 해석됩니다. 먹은 만큼만 계산하는 구조라 점심 예산을 스스로 통제할 수 있고, 인기 6선 포장 22,000원으로 테이크아웃 점심도 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"가격이 착하다 · 가볍게 먹기 좋다 · 연어 종류가 많다" 같은 평이 자주 언급되었습니다. 가격 구조와 점심 가성비가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w560_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250530_187%2F1748604268283eBsTC_JPEG%2FKakaoTalk_20250530_193317976.jpg" alt="스시마이우 강남CGV점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w278_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210115_24%2F1610694138779bEnaF_PNG%2FTtOJgutLUEthEud5Eh6thO6c.png" alt="스시마이우 강남CGV점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w278_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210115_132%2F1610694138691LlpTU_PNG%2FbSwlSBqprYqR7P7ZA1wMaFcK.png" alt="스시마이우 강남CGV점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">연어양파초밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">1,890원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">연어스테이크초밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">1,890원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">연어뱃살초밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">1,890원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생새우초밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">1,890원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">성게알초밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">1,890원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">인기 6선(12p) 포장</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원 · <strong>인기</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예산 통제</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">테이크아웃</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 강남구 역삼동 619-4 장연빌딩 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 02-555-4034
</div>
<div style="text-align:center"><a href="/dinner/gangnam/restaurant/스시마이우 강남CGV점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 스시마이우 강남CGV점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'pug', text: '퍼그피자하우스 강남점 — 점심 데이트·팀 점심 1순위', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260309_60%2F1773041549791LllnD_PNG%2F%25B3%25D7%25C0%25CC%25B9%25F61.png" alt="퍼그피자하우스 강남점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💑 점심 데이트 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 5,215건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,800원~25,800원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">역삼동 812-13 1층에 있는 수제 피자·파스타 매장입니다. 평점 4.9에 리뷰 5,215건으로 본 가이드에서 표본이 가장 두텁고, 주차·예약이 모두 되며 데이트 키워드가 함께 매칭되는 곳입니다. 미트 라구 치즈스파게티 9,300원·로제 베이컨 치즈스파게티 8,800원으로 점심 단품 진입 부담이 낮고, 11:00 영업 시작이라 이른 점심 데이트나 팀 점심에 잘 맞습니다. 예약 필수 키워드가 묶여 있어 점심 피크는 미리 자리를 잡아두는 편이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"피자가 쫄깃하다 · 분위기가 좋다 · 데이트하기 좋다 · 예약하고 가는 게 낫다" 같은 평이 자주 언급되었습니다. 메뉴 만족도와 점심 데이트 수요가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w560_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260309_60%2F1773041549791LllnD_PNG%2F%25B3%25D7%25C0%25CC%25B9%25F61.png" alt="퍼그피자하우스 강남점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w278_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260322_255%2F1774150091637xq2ag_PNG%2F%25BD%25C5%25B8%25DE%25B4%25BA2.png" alt="퍼그피자하우스 강남점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w278_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260122_281%2F1769059395965BRJ9E_PNG%2F%25B4%25EB%25C1%25F6_2.png" alt="퍼그피자하우스 강남점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">로제 베이컨 치즈스파게티</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,800원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미트 라구 치즈스파게티</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,300원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">파이브치즈 피자</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,800원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">반반피자</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,800원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">트러플 머쉬룸 뇨끼 피자</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,800원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">트러플 새우 관자 피자</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,800원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">팀 점심</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 강남구 역삼동 812-13 1층 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1498-7007
</div>
<div style="text-align:center"><a href="/dinner/gangnam/restaurant/퍼그피자하우스 강남점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 퍼그피자하우스 강남점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'yukpum', text: '육품 강남본점 — 점심 찌개·고기 든든하게', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;quality=100&amp;type=f640_380&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250507_200%2F17465937000103XCs8_JPEG%2FKakaoTalk_20250507_122005476.jpg" alt="육품 강남본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍖 고기 점심 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 1,859건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000원~72,000원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">👥 단체 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">역삼동 817-8에 있는 돼지구이 전문점입니다. 평점 4.5에 리뷰 1,859건으로 표본이 안정적이고, 고기뿐 아니라 <strong>통돼지김치찌개·남도애호박찌개·육품된장술밥이 각 10,000원</strong>이라 점심에는 찌개·식사류로 든든하게 한 끼를 해결할 수 있다는 점이 차별점입니다. 저녁에는 720시간 숙성삼겹살 18,000원 같은 고기 메뉴로 회식 단체석까지 받는 곳이라, 점심엔 가볍게·저녁엔 회식으로 시간대별 활용이 갈리는 식당입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"숙성 삼겹이 맛있다 · 찌개가 든든하다 · 단체로 가기 좋다" 같은 평이 자주 언급되었습니다. 점심 찌개 만족도와 저녁 회식 수요가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w560_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250507_200%2F17465937000103XCs8_JPEG%2FKakaoTalk_20250507_122005476.jpg" alt="육품 강남본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w278_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250507_243%2F1746593690146HcsKS_JPEG%2FKakaoTalk_20250507_114617915_11.jpg" alt="육품 강남본점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&amp;type=w278_sharpen&amp;src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250507_59%2F1746593695312D6mRH_JPEG%2FKakaoTalk_20250507_115008845.jpg" alt="육품 강남본점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">통돼지김치찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · <strong>점심 최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">남도애호박찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">육품된장술밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">720시간 숙성삼겹살 170g</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">이베리코목살</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">육품돼지한모듬 510g</p><p style="font-size:12px;color:#5f5e5a;margin:0">52,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 찌개</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">저녁 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">든든한 한 끼</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 강남구 역삼동 817-8 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 0507-1351-4102
</div>
<div style="text-align:center"><a href="/dinner/gangnam/restaurant/육품 강남본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 육품 강남본점 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>농민백암순대 역삼직영점</strong><br><span style="font-size:11px;color:#888780">한식·순대국</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.6<br><span style="font-size:11px;color:#888780">4,173건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">11,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">든든한 한식 + 표본 두터움</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>라홍방마라탕 강남직영점</strong><br><span style="font-size:11px;color:#888780">중식·마라탕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">2,186건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">2,200원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">혼밥 + 가격 유연</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>스시마이우 강남CGV점</strong><br><span style="font-size:11px;color:#888780">일식·스시</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">4,717건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">1,890원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">접시당 가성비 + 예산 통제</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>퍼그피자하우스 강남점</strong><br><span style="font-size:11px;color:#888780">양식·피자</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">5,205건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">8,800원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">데이트 + 주차·예약</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>육품 강남본점</strong><br><span style="font-size:11px;color:#888780">고기구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">1,858건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">10,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">점심 찌개 + 저녁 회식</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심은 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍚 든든한 한식 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>농민백암순대 역삼직영점</strong> — 국밥 11,000원, 정식 17,000원. 표본이 두터운 한식 점심 정석.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 혼자 빠르게 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>라홍방마라탕 강남직영점</strong> — 마라탕 100g 2,200원. 양 조절로 예산 맞추기 쉬운 혼밥 옵션.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍣 가성비 스시 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>스시마이우 강남CGV점</strong> — 접시당 1,890원. 먹은 만큼 계산해 점심 예산 통제가 쉽습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 점심 데이트·팀 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>퍼그피자하우스 강남점</strong> — 파스타 8,800원부터, 주차·예약 가능. 분위기 있는 점심 자리.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍖 고기로 든든하게</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>육품 강남본점</strong> — 점심 찌개류 10,000원. 저녁에는 회식 단체석으로 시간대별 활용.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>농민백암순대 역삼직영점</strong>은 웨이팅 맛집으로 묶입니다. 점심 12시 피크보다 11시대 또는 1시 이후 방문이 자리 잡기에 안전합니다.</li>
<li><strong>퍼그피자하우스 강남점</strong>은 예약 필수 키워드가 있습니다. 점심 데이트·팀 점심은 미리 예약하시면 좌석 확보가 안전합니다.</li>
<li><strong>라홍방마라탕 강남직영점·퍼그피자하우스 강남점</strong>은 11:00 영업 시작이라 이른 점심이 가능합니다. 나머지는 영업시간이 매장 게시 기준이라 방문 전 확인이 안전합니다.</li>
<li><strong>스시마이우 강남CGV점</strong>은 회전초밥 구조라 접시 수에 따라 가격이 달라집니다. 점심 예산을 먼저 정해두면 통제하기 쉽습니다.</li>
<li>전용 주차장이 명시된 곳은 <strong>퍼그피자하우스 강남점</strong>입니다. 나머지는 인근 공영주차장 또는 대중교통(강남역) 이용을 권장드립니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 강남역에서 든든한 한식 점심은 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>농민백암순대 역삼직영점</strong>이 1순위입니다. 국밥 11,000원·정식 17,000원으로 한 그릇 점심이 든든하고, 평점 4.6·리뷰 4,173건으로 표본이 두텁습니다. 웨이팅 맛집이라 점심 피크보다 11시대나 1시 이후가 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 혼자 빠르게 점심 먹을 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>라홍방마라탕 강남직영점</strong>이 잘 맞습니다. 마라탕 100g당 2,200원으로 양을 조절해 점심 예산을 맞추기 쉽고, 혼밥 손님 비중이 높습니다. 11:00 오픈이라 이른 점심도 가능합니다. 스시 쪽이면 <strong>스시마이우 강남CGV점</strong>도 혼밥 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가성비 좋은 스시 점심은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>스시마이우 강남CGV점</strong>이 접시당 1,890원으로 가격 구조가 명확합니다. 평점 4.3으로 본 가이드에서 가장 낮지만 리뷰 4,717건으로 표본이 두텁고, 먹은 만큼만 계산하는 구조라 점심 예산을 스스로 통제할 수 있습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 데이트·팀 점심이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>퍼그피자하우스 강남점</strong>이 1순위입니다. 평점 4.9·리뷰 5,205건으로 표본이 가장 두텁고 주차·예약이 모두 됩니다. 파스타 8,800원부터라 점심 단품 부담이 낮고, 예약 필수 키워드가 있어 피크 시간엔 미리 자리를 잡아두는 편이 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점 4.3 스시집을 왜 포함했나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>스시마이우 강남CGV점</strong>은 평점 4.3으로 본 가이드 5곳 중 가장 낮지만, 리뷰 4,717건으로 표본이 두 번째로 두텁고 접시당 1,890원이라는 가격 차별점이 명확합니다. 회전초밥 특성상 기대치 편차가 함께 쌓여 평점이 낮은 편이니, 가성비 스시 옵션으로 보시는 편이 정확합니다. 평점만 기준이면 <strong>퍼그피자하우스 강남점</strong>(4.9)이 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심에 고기를 먹고 싶으면 부담스럽지 않나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>육품 강남본점</strong>은 점심에 통돼지김치찌개·남도애호박찌개·육품된장술밥이 각 10,000원이라 찌개·식사류로 든든하게 한 끼가 가능합니다. 저녁에는 720시간 숙성삼겹살 18,000원 등 고기 메뉴로 회식 단체석까지 받는 식당이라 시간대별로 활용이 갈립니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/gangnam', text: '강남역 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">강남역 285곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">강남역·역삼동 285곳에서 점심 한 끼에 들어가는 식당을 카테고리별로 필터링해, 검색 의도 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰·메뉴 구성·점심 적합성 4가지를 함께 본 결과, 한식·중식·일식·양식·고기로 점심 선택지가 다섯 갈래로 자연스럽게 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px"><strong>스시마이우 강남CGV점</strong>은 평점 4.3으로 5곳 중 가장 낮지만 리뷰 4,717건으로 표본이 두 번째로 두텁고 접시당 1,890원이라는 가격 구조가 명확해 가성비 스시 옵션으로 포함했습니다. 평점·표본을 함께 보면 <strong>퍼그피자하우스 강남점(4.9·5,205건)</strong>이 가장 안정적입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">평점 우선이면 <strong>퍼그피자하우스 강남점</strong>·<strong>라홍방마라탕</strong>, 표본 우선이면 <strong>퍼그피자하우스</strong>·<strong>스시마이우</strong>·<strong>농민백암순대</strong>, 점심 가성비 우선이면 <strong>스시마이우</strong>·<strong>라홍방마라탕</strong>이 안정 후보입니다. 카테고리가 모두 달라 검색 의도가 겹치지 않으니 그날 먹고 싶은 종류로 분리해서 고르시면 됩니다.</p>
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
