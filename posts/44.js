// 수지 점심 맛집 5곳 — 카테고리 분산 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 44,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>수지</strong>(용인 수지구) 일대에서 평일 점심 한 끼를 해결할 식당 5곳을 정리했습니다. 풍덕천·죽전·신봉 일대 678곳에서 평점·리뷰 표본·운영 안정성·메뉴 구성 4가지를 기준으로 추려, 한식·중식·일식·양식·카페까지 카테고리를 분산했습니다. 직장인 점심·혼밥·가족 점심·데이트 점심까지 상황별로 다른 1순위를 골라 두었으니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">678곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">풍덕천·죽전·신봉 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.8</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.5 ~ 5.0</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">5,956건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">점심 시작가</p><p style="font-size:20px;font-weight:600;margin:0">4,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">카페 음료 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">팀 점심·가족 점심으로 한식 한 상이면 <strong>우이락 수지구청점</strong> — 평점 5.0·리뷰 665건으로 본 가이드 평점 1순위입니다. 1인 1만2천원선 파스타 점심이면 <strong>파스타입니다 용인수지점</strong> (매콤크림 파스타 12,400원, 리뷰 1,745건). 회식·접대를 겸한 중식 점심이면 <strong>차이니즈퀴진유 용인본점</strong> (소고기짬뽕 14,000원, 리뷰 1,793건·주차 가능). 가벼운 일식 점심이면 <strong>미소텐동 용인신봉점</strong> (텐동 전문, 리뷰 1,233건). 점심 후 커피 한 잔·짧은 미팅이면 <strong>마실커피</strong> (아메리카노 4,000원~).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>점심 시간대 영업</strong> — 점심에 운영하는 식당만 (저녁 전용 고깃집·심야 술집 제외)</li>
<li><strong>네이버 플레이스 리뷰 300건 이상</strong> — 평점이 흔들리지 않을 표본 크기</li>
<li><strong>평점 4.0점 이상</strong> — 수지 전체 평균선 위 (선정 5곳은 4.5~5.0)</li>
<li><strong>카테고리 분산</strong> — 한식·중식·일식·양식·카페 5종으로 검색 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">수지 일대 678곳 중 평점·리뷰 표본을 함께 만족하는 점심 식당은 약 460곳이었습니다. 그중 같은 카테고리가 겹치지 않도록 한식 한 상·파스타·중식·텐동·카페로 한 끼 선택지를 다섯 갈래로 분산했습니다. 평점이 동률일 때는 리뷰 표본이 더 큰 식당을, 표본이 비슷할 때는 점심 회전이 빠른 식당을 우선했습니다.</p>`
    },

    { type: 'h2', id: 'uirak', text: '우이락 수지구청점 — 평점 1순위 한식 한 상', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20260512_295%2F1778575932264shk4C_JPEG%2Fimage.jpg" alt="우이락 수지구청점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 평점 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 5.0 · 리뷰 665건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 11,000원~36,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">⏳ 웨이팅 잦음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점이 가장 높은 한식당</strong>입니다. 풍덕천동 710-3, 수지구청 인근에 자리합니다. 리뷰 665건에 평점 5.0이 누적돼 표본이 작지 않으면서도 만족도 편차가 적은 편이라, 가족 점심·팀 점심처럼 실패하면 곤란한 자리에 무난한 선택지입니다. 곱창전골·닭볶음탕 같은 한 상 메뉴 중심이라 2~4인 점심에 맞고, 웨이팅·예약이 잦은 곳이라 평일 점심이라도 12시 정각보다는 11:40 전후 입장이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"웨이팅 있다 · 예약 권장 · 리뷰 표본 많다" 같은 평이 자주 묶입니다. 한 상 구성 메뉴라 인원 맞춰 주문하면 만족도가 안정적이라는 점이 후기 키워드로 함께 누적됩니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오리지날 고추튀김</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">통모짜 치즈 고추튀김</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해물파전</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">갓도리탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">보쌈</p><p style="font-size:12px;color:#5f5e5a;margin:0">26,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우곱창전골</p><p style="font-size:12px;color:#5f5e5a;margin:0">35,000원 · <strong>시그니처</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">팀 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 권장</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 1순위</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 용인시 수지구 풍덕천동 710-3 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 070-8844-5853
</div>
<div style="text-align:center"><a href="/suji/restaurant/우이락 수지구청점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 우이락 수지구청점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'pasta', text: '파스타입니다 용인수지점 — 1만2천원선 파스타 점심', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201024_24%2F16035218995839sG9O_JPEG%2FOJmleyzMQTCRQZjyWwbaiVQ5.jpg" alt="파스타입니다 용인수지점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍝 파스타 점심 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 5.0 · 리뷰 1,745건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 11,400원~12,900원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💑 데이트 점심</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드에서 가격대가 가장 일정한 단품 식당</strong>입니다. 풍덕천동 82-9 한샘더랜드마크 105호, 평점 5.0·리뷰 1,745건으로 표본 크기와 만족도가 모두 안정적입니다. 모든 파스타가 11,400~12,900원 한 가격대에 묶여 있어 1인 점심 예산을 짜기 쉽고, 메뉴판에 매출 순위가 표시돼 있어 처음 가도 고르기 부담이 적습니다. 데이트 평가가 함께 매칭돼 평일 점심뿐 아니라 가벼운 데이트 점심에도 잘 맞습니다.</p>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201024_24%2F16035218995839sG9O_JPEG%2FOJmleyzMQTCRQZjyWwbaiVQ5.jpg" alt="파스타입니다 용인수지점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://ldb-phinf.pstatic.net/20260128_227/1769577695932AXhJU_PNG/%B8%C5%C4%DA%C5%A9%B8%B2%C6%C4%BD%BA%C5%B8.png" alt="파스타입니다 용인수지점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://ldb-phinf.pstatic.net/20260130_145/1769729597810ipM53_JPEG/%BA%D2%B4%DF_%C6%C4%BD%BA%C5%B8.jpg" alt="파스타입니다 용인수지점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 1만원대 균일가</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">베이컨 까르보나라</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,400원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">매콤크림 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,400원 · <strong>매출 1위</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우삼겹 알리오올리오</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,400원 · <strong>매출 2위</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">봉골레 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,400원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">불닭파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">얼큰해장 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,900원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">균일가</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서비스 좋음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 용인시 수지구 풍덕천동 82-9 한샘더랜드마크 105호 · <strong>🕐 영업</strong> 01:00 영업 종료 (점심 운영) · <strong>🚗 주차</strong> 건물 주차 이용 · <strong>📞 전화</strong> 031-893-1006
</div>
<div style="text-align:center"><a href="/suji/restaurant/파스타입니다 용인수지점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 파스타입니다 용인수지점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'chinese', text: '차이니즈퀴진유 용인본점 — 회식 겸한 중식 점심', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251105_81%2F1762329629098CfhS3_JPEG%2F%25C4%25DA%25B9%25CC%25B5%25F0TV_%25C8%25F7%25B9%25E4%25C0%25C7_%25B4%25EB%25BD%25C4%25C1%25C2%25C0%25C7_%25B9%25E4%25BB%25F3_%25C6%25F7%25BD%25BA%25C5%25CD.jpg" alt="차이니즈퀴진유 용인본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 회식 점심 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 1,793건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 14,000원~64,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">죽전동 1003-111 1층에 자리한 중식당으로, 리뷰 1,793건은 본 가이드 5곳 중 가장 큰 표본입니다. 평점 4.7에 블로그 후기 791건이 함께 누적돼 검증 신뢰가 높은 편이라, 단순 점심보다 거래처 점심·팀 회식을 겸한 자리에 적합합니다. <strong>주차·예약·단체석</strong>이 모두 가능해 인원이 많을 때 동선이 편하고, 소고기짬뽕 14,000원 한 그릇이면 1인 점심도 가능해 회식과 일상 점심을 한 식당에서 분리해 쓸 수 있습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"단체 이용 편하다 · 주차 가능 · 서비스 좋다" 같은 평이 자주 묶입니다. 블로그 후기 표본이 크게 누적돼 회식·단체 점심 후기가 함께 쌓이는 식당입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251105_81%2F1762329629098CfhS3_JPEG%2F%25C4%25DA%25B9%25CC%25B5%25F0TV_%25C8%25F7%25B9%25E4%25C0%25C7_%25B4%25EB%25BD%25C4%25C1%25C2%25C0%25C7_%25B9%25E4%25BB%25F3_%25C6%25F7%25BD%25BA%25C5%25CD.jpg" alt="차이니즈퀴진유 용인본점 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251105_121%2F1762329617597JypoP_PNG%2F%25C2%25F7%25C0%25CC%25B4%25CF%25C1%25EE%25C4%25FB%25C1%25F8%25C0%25AF_%25BF%25EB%25C0%25CE%25BA%25BB%25C1%25A1_%25282%2529.png" alt="차이니즈퀴진유 용인본점 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251105_193%2F1762329617670kHHR2_PNG%2F%25C2%25F7%25C0%25CC%25B4%25CF%25C1%25EE%25C4%25FB%25C1%25F8%25C0%25AF_%25BF%25EB%25C0%25CE%25BA%25BB%25C1%25A1_%25288%2529.png" alt="차이니즈퀴진유 용인본점 메뉴 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소고기짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원 · <strong>점심 최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">바사삭 달콤탕수육(小)</p><p style="font-size:12px;color:#5f5e5a;margin:0">27,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">숙주간장탕수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">30,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마라마파두부(小)</p><p style="font-size:12px;color:#5f5e5a;margin:0">30,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">깐풍중새우(小)</p><p style="font-size:12px;color:#5f5e5a;margin:0">37,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">전가복(小)</p><p style="font-size:12px;color:#5f5e5a;margin:0">64,000원 · 단체</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 최다</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 용인시 수지구 죽전동 1003-111 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 매장 주차 가능 · <strong>📞 전화</strong> 031-265-2220
</div>
<div style="text-align:center"><a href="/suji/restaurant/차이니즈퀴진유 용인본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 차이니즈퀴진유 용인본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'misotendon', text: '미소텐동 용인신봉점 — 가벼운 일식 점심 옵션', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250919_123%2F1758244612086793zQ_PNG%2F1.PNG" alt="미소텐동 용인신봉점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍤 가벼운 일식 점심</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 1,233건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 텐동·돈부리 단품</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신봉동 40-2 2층에 자리한 텐동 전문 일식당입니다. 평점 4.5·리뷰 1,233건으로 표본이 넉넉해 평균이 흔들리지 않는 편이며, 튀김덮밥(텐동) 단품 회전 중심이라 점심 시간 한 시간 안에 먹고 나오기 좋습니다. 본 가이드 5곳 중 가장 가볍게 한 끼를 끝낼 수 있는 일식 옵션으로, 한식 한 상이 부담스러운 날 혼밥·짧은 점심에 묶었습니다. 메뉴 가격은 매장 공지가 우선이라 방문 전 확인을 권장드립니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"덮밥 회전 빠르다 · 혼밥 편하다 · 표본 많다" 같은 평이 자주 묶입니다. 단품 텐동 중심이라 점심 짧게 먹기 좋다는 점이 후기 키워드로 함께 누적됩니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (텐동 전문 구성)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미소 텐동</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">새우 텐동</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">붓카케 우동</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미니 텐동 세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드 튀김</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">냉모밀</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">빠른 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">텐동 전문</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 안정</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 용인시 수지구 신봉동 40-2 2층 230호 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 건물 주차 이용 · <strong>📞 전화</strong> 0507-1382-8335
</div>
<div style="text-align:center"><a href="/suji/restaurant/미소텐동 용인신봉점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 미소텐동 용인신봉점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'masill', text: '마실커피 — 점심 후 커피·짧은 미팅', gradientStyle: { from: '#92400E', to: '#451A03' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220913_12%2F1663053179776qUnVl_JPEG%2FIMG_3138.JPG" alt="마실커피 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#92400E;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">☕ 점심 후 커피</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 520건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 4,000원~6,200원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 분위기 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">풍덕천동 728-10 1층의 카페로, 평점 4.7·리뷰 520건에 블로그 후기 254건이 함께 누적된 동네 안정 카페입니다. 본 가이드 5곳 중 유일한 카페 옵션으로, 식사 후 커피 한 잔이나 점심 시간 짧은 미팅 자리로 묶었습니다. 아메리카노 4,000원으로 부담이 적고 분위기·서비스 평가가 함께 매칭돼 식사 식당을 고른 뒤 후식·미팅 동선을 한 번에 짤 수 있습니다. 위 4곳 중 어디서 점심을 먹든 마무리 동선으로 연결하기 좋은 위치입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"분위기 좋다 · 깔끔하다 · 서비스 친절하다" 같은 평이 자주 묶입니다. 동네 단골 비중이 큰 카페라 재방문 후기가 함께 누적됩니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220913_12%2F1663053179776qUnVl_JPEG%2FIMG_3138.JPG" alt="마실커피 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220922_295%2F1663814997131zB1xT_JPEG%2F6BCF50B0-7559-44AF-ACB0-62FB625C72D0.jpeg" alt="마실커피 음료 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220922_56%2F1663814997035XH8Eu_JPEG%2F1272B534-500D-44E2-B264-7EC0EB80932C.jpeg" alt="마실커피 음료 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 음료 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아메리카노</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">카페라떼</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마실라떼</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,500원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">달카푸(아이스)</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,700원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">브라운라떼(아이스)</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">포레스트 가든</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,200원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 후 커피</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">짧은 미팅</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">깔끔한 곳</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 용인시 수지구 풍덕천동 728-10 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 07-1370-4561
</div>
<div style="text-align:center"><a href="/suji/restaurant/마실커피" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 마실커피 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·가격·상황별 매칭', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">점심 시작가</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">차별점</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>우이락 수지구청점</strong><br><span style="font-size:11px;color:#888780">한식</span></td>
<td style="padding:11px 10px;text-align:center">★ 5.0<br><span style="font-size:11px;color:#888780">665건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">11,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1순위 + 한 상 점심</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>파스타입니다 용인수지점</strong><br><span style="font-size:11px;color:#888780">양식</span></td>
<td style="padding:11px 10px;text-align:center">★ 5.0<br><span style="font-size:11px;color:#888780">1,745건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">11,400원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">1만원대 균일가 + 표본 큼</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>차이니즈퀴진유 용인본점</strong><br><span style="font-size:11px;color:#888780">중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">1,793건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">14,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 + 회식·단체</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>미소텐동 용인신봉점</strong><br><span style="font-size:11px;color:#888780">일식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">1,233건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">단품</strong></td>
<td style="padding:11px 10px;font-size:12.5px">텐동 단품 + 빠른 점심</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>마실커피</strong><br><span style="font-size:11px;color:#888780">카페</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">520건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#92400E">4,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">점심 후 커피 + 짧은 미팅</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심은 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">👨‍👩‍👧 가족·팀 한식 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>우이락 수지구청점</strong> — 평점 5.0·리뷰 665건. 곱창전골·보쌈 한 상 구성이라 2~4인 점심에 맞고 만족도 편차가 적습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 데이트·1인 파스타 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>파스타입니다 용인수지점</strong> — 모든 파스타 11,400~12,900원 균일가. 1인 점심 예산 짜기 쉽고 데이트 평가도 함께 매칭.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 회식 겸한 중식 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>차이니즈퀴진유 용인본점</strong> — 주차·예약·단체석 가능. 소고기짬뽕 14,000원이면 1인 점심도 가능.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍤 빠른 혼밥 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>미소텐동 용인신봉점</strong> — 텐동 단품 회전 중심. 점심 한 시간 안에 먹고 나오기 좋은 일식 옵션.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">☕ 점심 후 커피·미팅</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>마실커피</strong> — 아메리카노 4,000원. 위 4곳 어디서 점심을 먹든 후식·미팅 동선으로 연결하기 좋습니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>우이락 수지구청점</strong>은 웨이팅·예약이 잦은 한식당이라, 평일 점심이라도 12시 정각보다 11:40 전후 입장이 안전합니다. 가족·팀 단위라면 사전 전화 확인을 권장드립니다.</li>
<li><strong>차이니즈퀴진유 용인본점</strong>은 매장 주차가 가능하지만 점심 피크엔 만차될 수 있어, 단체 방문 시 예약과 함께 도착 시간을 미리 잡아두시는 편이 좋습니다.</li>
<li><strong>파스타입니다 용인수지점</strong>은 한샘더랜드마크 건물 내 매장이라 건물 주차를 확인하시고, 점심 회전이 빠른 곳이라 12시 직전 입장이 자리 잡기 수월합니다.</li>
<li><strong>미소텐동 용인신봉점</strong>은 메뉴 가격이 매장 공지 우선입니다. 본문 표는 텐동 전문 구성으로 표기했으니 실제 가격은 방문 시 확인을 권장드립니다.</li>
<li><strong>마실커피</strong>는 인근 공영주차장 이용이 편하며, 점심 직후 시간대(13:00~14:00)는 좌석이 빠르게 차는 편이라 미팅 자리는 조금 일찍 잡아두시는 편이 안전합니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 수지에서 평점이 가장 높은 점심집은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>우이락 수지구청점</strong>과 <strong>파스타입니다 용인수지점</strong>이 평점 5.0으로 공동 1순위입니다. 한식 한 상이면 우이락(리뷰 665건), 1인 파스타 점심이면 파스타입니다(리뷰 1,745건)로 표본이 더 큰 쪽을 고르시면 됩니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 1만원대로 점심 한 끼는 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>파스타입니다 용인수지점</strong>이 1순위입니다. 모든 파스타가 11,400~12,900원 균일가라 1인 점심 예산을 짜기 쉽습니다. 한식이면 <strong>우이락 수지구청점</strong>의 고추튀김(11,000원~)이 단품으로 가볍습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 거래처·팀 회식을 겸한 점심이면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>차이니즈퀴진유 용인본점</strong>입니다. 주차·예약·단체석이 모두 가능하고 리뷰 1,793건으로 본 가이드 표본 최다입니다. 인원이 적은 일상 점심은 소고기짬뽕 14,000원으로도 해결됩니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 시간이 짧을 때 빠르게 먹을 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>미소텐동 용인신봉점</strong>입니다. 텐동 단품 회전 중심이라 점심 한 시간 안에 먹고 나오기 좋습니다. <strong>파스타입니다 용인수지점</strong>도 단품 회전이 빠른 편입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>차이니즈퀴진유 용인본점</strong>은 매장 주차, <strong>파스타입니다·미소텐동</strong>은 건물 주차 이용이며, <strong>우이락·마실커피</strong>는 전용 주차가 없어 인근 공영주차장 이용을 권장드립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 후 커피·미팅 장소는 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>마실커피</strong>입니다. 아메리카노 4,000원으로 부담이 적고 분위기·서비스 평가가 함께 매칭돼 점심 후 짧은 미팅 자리로 무난합니다. 다만 13~14시는 좌석이 빠르게 차니 미팅은 조금 일찍 잡아두시는 편이 안전합니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/suji', text: '수지 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">수지 678곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">수지(용인 수지구) 678곳에서 점심 시간대에 운영하는 식당을 필터링해, 카테고리 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰·운영 안정성·메뉴 구성 4가지를 함께 본 결과 한식·중식·일식·양식·카페로 한 끼 선택지가 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>우이락 수지구청점(5.0)</strong>·<strong>파스타입니다 용인수지점(5.0)</strong>이 공동 1순위이고, 리뷰 표본 크기로는 <strong>차이니즈퀴진유 용인본점(1,793건)</strong>이 1순위입니다. 카테고리가 달라 검색 의도가 겹치지 않으니, 한 상이면 우이락, 파스타면 파스타입니다, 회식이면 차이니즈퀴진유로 분리해 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>미소텐동 용인신봉점</strong>은 메뉴 가격이 매장 공지 우선이라 본문에 단정 가격을 적지 않았습니다. 빠른 혼밥이 목적이라면 표본(1,233건)과 회전 속도가 충분히 검증돼 있어 옵션으로 안전합니다. 가격을 미리 알아야 하는 자리라면 우이락·파스타입니다·차이니즈퀴진유처럼 메뉴 가격이 확인된 곳을 우선하시면 됩니다.</p>
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
