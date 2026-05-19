// 홍대 가성비 점심 맛집 추천 5곳 — 식당별 unique 콘텐츠
const post = {
  id: 40,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>홍대</strong>에서 1만원대 안팎으로 점심 한 끼를 해결할 수 있는 가성비 식당 5곳을 정리했습니다. 마포구 홍대·합정 일대 89곳에서 평점·리뷰 표본·메뉴 결·운영 안정성 4가지를 기준으로 추려, 칼국수·한식·라멘·돈가스까지 카테고리를 분산했습니다. 직장인 점심·혼밥·줄 서서라도 먹는 인기 메뉴 등 상황별로 다른 1순위를 골라 두었으니 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">89곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">홍대·합정 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.5</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.3 ~ 4.7</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">40,482건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">1만원 안팎</p><p style="font-size:11px;color:#888780;margin:4px 0 0">단품 점심 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">평점·만족도 둘 다 가장 안정적인 점심이면 <strong>어서와칼국수 홍대합정점</strong> — 평점 4.7·리뷰 1,567건. 검증 표본이 가장 두터운 한식 점심이면 <strong>육지</strong> (평점 4.6·리뷰 11,425건). 줄 서서라도 먹는 돈가스·우동 단품이면 <strong>츠케루</strong> (리뷰 17,859건으로 표본 최다). 진한 라멘 한 그릇이면 <strong>오레노라멘 합정본점</strong> (평점 4.4·리뷰 6,170건). 혼밥·가벼운 일식 점심이면 <strong>소코아 홍대점</strong> (평점 4.3·리뷰 3,461건). 카테고리가 모두 달라 검색 의도가 겹치지 않으니 한 끼 결을 정하고 고르시면 빠릅니다.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 점심 1만원 안팎</strong> — 홍대 가성비 점심의 표준 가격대</li>
<li><strong>네이버 플레이스 리뷰 1,000건 이상</strong> — 평균값이 흔들리지 않을 두터운 표본</li>
<li><strong>평점 4.3점 이상</strong> — 가성비 카테고리 평균선 위로만 선정</li>
<li><strong>카테고리 분산</strong> — 칼국수·한식·돈가스·라멘·일식으로 점심 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">홍대·합정 일대 89곳 중 1만원대 점심에 들어가는 식당은 약 30여 곳이었습니다. 그중 평점·리뷰 표본·메뉴 구성이 안정적인 5곳을 추렸습니다. 같은 카테고리 중복을 피해 칼국수·한식·돈가스·라멘·일식으로 한 끼 선택지를 분산했고, 5곳 모두 평점 4.3 이상으로 가성비 카테고리 평균선 위에서만 골랐습니다. 홍대 식당은 메뉴 가격이 매장·시즌별로 변동이 잦아 가격은 추정 범위로 표기하고 정확한 금액은 매장 확인을 권장드립니다.</p>`
    },

    { type: 'h2', id: 'eoseowa', text: '어서와칼국수 홍대합정점 — 평점 4.7 가장 안정적인 점심', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://blog.kakaocdn.net/dn/bJ84Aq/dJMcagdhE8m/tvoPPMJM8fwRMKcRmJRPF1/img.jpg" alt="어서와칼국수 홍대합정점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#F97316,#DC2626);align-items:center;justify-content:center;font-size:64px">🍚</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 가성비 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 1,567건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1만원 안팎</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍜 칼국수 전문</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점이 가장 높은(4.7) 식당</strong>입니다. 마포구 어울마당로 37, 홍대 중심 상권에 있습니다. 리뷰 1,567건 표본 안에서 만족도가 거의 흔들리지 않는다는 점이 가성비 점심에서 실패 확률을 줄여주는 강점입니다. 칼국수 단품 중심 운영이라 점심 회전이 빨라 12시 피크에도 자리 잡기가 비교적 수월하며, 1만원 안팎의 단품 한 그릇으로 한 끼가 깔끔하게 끝나는 결입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물이 진하다 · 가성비가 좋다 · 점심에 빨리 나온다" 같은 평이 자주 언급되었습니다. 높은 평점과 빠른 점심 회전이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">칼국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">1만원 안팎 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">바지락 칼국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">1만원 안팎 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">만두</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">콩국수 (시즌)</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">비빔국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">공깃밥·사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">빠른 회전</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 우수</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 어울마당로 37 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 010-5819-9368
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/어서와칼국수 홍대합정점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 어서와칼국수 홍대합정점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'yukji', text: '육지 — 표본 1만건 넘는 검증 두터운 한식 점심', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyMjEwMTRfMjg0/MDAxNjY1NzA0NzgwNjMy.12bk01X7nuJk6emNeRVpwQ-O0EDS3mryBMgCGLBi7Hcg.aFiPbVbYkhS6S07QC48DCbo9dpVsPVKdiTf964ERkugg.JPEG.tjrfb3638/%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%989.jpg?type=w773" alt="육지 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#F97316,#DC2626);align-items:center;justify-content:center;font-size:64px">🍚</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 검증 표본 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.6 · 리뷰 11,425건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1~3만원대</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍚 한식 점심</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>리뷰 11,425건으로 검증 표본이 가장 두터운</strong> 한식 식당입니다. 마포구 독막로3길 34, 홍대·합정 사이에 있습니다. 평점 4.6이 1만 건이 넘는 표본 위에서 유지된다는 점은 사람이 아무리 많이 다녀가도 만족도가 잘 무너지지 않았다는 강한 신호입니다. 어서와칼국수가 단품 한 그릇으로 깔끔하게 끝나는 결이라면, 육지는 한식 메뉴를 든든하게 챙기는 점심에 더 가깝습니다. 네이버 블로그 후기 9,833건이 함께 누적되어 메뉴 사진·후기가 가장 풍부합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"고기 질이 좋다 · 양이 넉넉하다 · 점심에 든든하다" 같은 평이 자주 언급되었습니다. 두터운 검증 표본과 든든한 한식 점심이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">점심 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">고기 메뉴</p><p style="font-size:12px;color:#5f5e5a;margin:0">2~3만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">찌개·국물류</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">밥·면류</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">음료·주류</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">든든한 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">직장인 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 검증</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 독막로3길 34 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역·합정역 도보) · <strong>📞 전화</strong> 0503-7150-6574
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/육지" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 육지 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'tsukeru', text: '츠케루 — 줄 서서라도 먹는 돈가스·우동 단품', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3FautoRotate%3Dtrue%26quality%3D100%26type%3Df640_380%26src%3Dhttps%253A%252F%252Fldb-phinf.pstatic.net%252F20220828_271%252F1661695172553uWUQj_JPEG%252F1577789261938-9.jpg%22&type=ff500_300" alt="츠케루 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#0EA5E9,#1E40AF);align-items:center;justify-content:center;font-size:64px">🍣</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 표본 최다 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 17,859건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1만원 안팎</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍱 돈가스·우동</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 리뷰 표본이 가장 많은(17,859건)</strong> 일식 단품집입니다. 마포구 와우산로23길 9, 홍대 중심 상권에 있습니다. 평점 4.4가 1만 8천 건에 가까운 표본 위에서 유지된다는 점은 회전이 매우 빠른 인기 단품집임에도 만족도가 안정적이라는 뜻입니다. 점심 피크에 줄이 생기는 편이지만 단품 회전이 빨라 대기 시간이 길게 늘어지지는 않습니다. 1만원 안팎으로 돈가스·우동 한 그릇이 깔끔하게 끝나는 결이라 가성비 점심에 잘 맞습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"돈가스가 바삭하다 · 줄이 빨리 빠진다 · 가성비가 좋다" 같은 평이 자주 언급되었습니다. 단품 회전 속도와 줄 서는 인기가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">등심 돈가스</p><p style="font-size:12px;color:#5f5e5a;margin:0">1만원 안팎 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우동</p><p style="font-size:12px;color:#5f5e5a;margin:0">1만원 안팎 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">치즈 돈가스</p><p style="font-size:12px;color:#5f5e5a;margin:0">1만원 안팎</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">카레</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">덮밥류</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단품 회전</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">줄 서는 인기</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 최다</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 와우산로23길 9 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 02-322-1335
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/츠케루" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 츠케루 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'oreno', text: '오레노라멘 합정본점 — 진한 라멘 한 그릇 1만원대', gradientStyle: { from: '#1E40AF', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyNjA1MDdfMzcg/MDAxNzc4MTUxOTUwNDc5.VzJg0S2DWioBvA7v635uY5keg6mt0ZBd7CRrTzAvQk4g.WgzipplQoN5TWB8SJlxYBOAXHbJP0No8G8jMl5oxRJUg.PNG/%EC%98%A4%EB%A0%88%EB%85%B8%EB%9D%BC%EB%A9%98.PNG?type=w773" alt="오레노라멘 합정본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#0EA5E9,#1E40AF);align-items:center;justify-content:center;font-size:64px">🍣</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#1E40AF;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍜 라멘 점심 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 6,170건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1~2만원대</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍜 라멘 전문</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.4·리뷰 6,170건으로 <strong>진한 라멘 한 그릇으로 점심을 해결하기 좋은</strong> 합정 라멘 전문점입니다. 마포구 독막로8길 16, 합정역 인근에 있습니다. 츠케루가 돈가스·우동 단품 회전 중심이라면, 오레노라멘은 진한 국물 라멘 한 그릇에 집중하는 결이라 같은 일식이라도 점심 의도가 갈립니다. 표본이 6천 건을 넘어 후기가 충분히 쌓여 있고, 네이버 블로그 후기 4,241건이 함께 누적되어 메뉴 사진을 미리 참고하기 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물이 진하다 · 면발이 좋다 · 한 그릇으로 든든하다" 같은 평이 자주 언급되었습니다. 진한 라멘 국물과 한 그릇 점심이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돈코츠 라멘</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">차슈 라멘</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마제소바</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">교자</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">덮밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">라멘 전문</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">진한 국물</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 검증</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 독막로8길 16 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (합정역 도보) · <strong>📞 전화</strong> 02-322-3539
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/오레노라멘 합정본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 오레노라멘 합정본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'socoa', text: '소코아 홍대점 — 혼밥·가벼운 일식 점심', gradientStyle: { from: '#0EA5E9', to: '#312E81' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyMzEyMjFfMjM0/MDAxNzAzMTU5ODkwMjA3.mgNywjgzOPgLnSKORyasWlcwKhRXUt80Z9ocoQJkO74g.OKh19Cao1wu6u_9ba-UklCHdzTFueHazJF3ReDLxkuAg.JPEG.whichshinhwa/KakaoTalk_20231221_164950615.jpg?type=w966" alt="소코아 홍대점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#0EA5E9,#1E40AF);align-items:center;justify-content:center;font-size:64px">🍣</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍱 혼밥 점심 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 3,461건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1만원 안팎</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍱 일식 단품</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.3·리뷰 3,461건으로 <strong>혼밥으로 가볍게 일식 점심을 해결하기 좋은</strong> 곳입니다. 마포구 와우산로15길 49, 홍대 중심 상권에 있습니다. 줄 서는 츠케루나 진한 라멘의 오레노라멘에 비해 좀 더 차분하게 한 끼를 끝내는 결이라, 점심 시간에 빠르게 혼자 먹기 좋은 단품 중심 메뉴 구성입니다. 평점이 본 가이드에서 가장 낮지만 4.3으로 가성비 카테고리 평균선 위에 있고, 네이버 블로그 후기 1,123건이 함께 누적되어 메뉴 사진을 미리 참고하기 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"혼밥하기 좋다 · 가성비가 괜찮다 · 점심에 부담 없다" 같은 평이 자주 언급되었습니다. 혼밥 편의성과 가벼운 일식 점심이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">덮밥류</p><p style="font-size:12px;color:#5f5e5a;margin:0">1만원 안팎 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우동·소바</p><p style="font-size:12px;color:#5f5e5a;margin:0">1만원 안팎 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돈가스</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">튀김류</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">초밥·롤</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가벼운 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">일식 단품</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 검증</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 와우산로15길 49 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 070-8867-2510
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/소코아 홍대점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 소코아 홍대점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·표본·점심 결 매칭', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">점심 결</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">차별점</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>어서와칼국수 홍대합정점</strong><br><span style="font-size:11px;color:#888780">칼국수</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">1,567건</span></td>
<td style="padding:11px 10px;text-align:center">단품</td>
<td style="padding:11px 10px;font-size:12.5px">평점 최고 + 빠른 회전</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>육지</strong><br><span style="font-size:11px;color:#888780">한식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.6<br><span style="font-size:11px;color:#888780">11,425건</span></td>
<td style="padding:11px 10px;text-align:center">든든</td>
<td style="padding:11px 10px;font-size:12.5px">검증 표본 1만건+ </td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>츠케루</strong><br><span style="font-size:11px;color:#888780">돈가스·우동</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">17,859건</span></td>
<td style="padding:11px 10px;text-align:center">단품</td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 + 줄 서는 인기</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>오레노라멘 합정본점</strong><br><span style="font-size:11px;color:#888780">라멘</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">6,170건</span></td>
<td style="padding:11px 10px;text-align:center">한 그릇</td>
<td style="padding:11px 10px;font-size:12.5px">진한 라멘 국물</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>소코아 홍대점</strong><br><span style="font-size:11px;color:#888780">일식 단품</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">3,461건</span></td>
<td style="padding:11px 10px;text-align:center">가볍게</td>
<td style="padding:11px 10px;font-size:12.5px">혼밥 가벼운 일식</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심은 어떤 결인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍜 실패 줄이는 깔끔한 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>어서와칼국수 홍대합정점</strong> — 평점 4.7로 만족도가 거의 흔들리지 않습니다. 단품 회전이 빨라 점심 피크에도 무난합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍚 든든한 한식 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>육지</strong> — 리뷰 11,425건으로 검증 표본이 가장 두텁습니다. 한식 메뉴를 든든하게 챙기는 점심에 잘 맞습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍱 줄 서서라도 단품</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>츠케루</strong> — 리뷰 17,859건으로 표본 최다. 돈가스·우동 단품 회전이 빨라 대기가 길게 늘어지지 않습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍜 진한 라멘 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>오레노라멘 합정본점</strong> — 평점 4.4·리뷰 6,170건. 진한 국물 라멘 한 그릇으로 점심을 해결하기 좋습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍣 혼밥 가볍게</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>소코아 홍대점</strong> — 평점 4.3·리뷰 3,461건. 차분하게 혼자 일식 단품 한 끼를 끝내기 좋습니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li>5곳 모두 전용 주차장이 없습니다. 홍대입구역·합정역 대중교통 이용을 권장드리며, 점심 동선은 도보 기준으로 잡으시는 편이 편합니다.</li>
<li><strong>츠케루</strong>는 점심 피크에 줄이 생기는 편입니다. 단품 회전이 빨라 대기가 길게 늘어지지는 않지만, 시간이 빠듯하면 11:30 전후 입장이 안전합니다.</li>
<li><strong>육지</strong>는 표본이 1만 건을 넘는 인기 식당이라 주말 점심엔 대기가 생길 수 있습니다. 평일 점심에 방문하시는 편이 더 여유롭습니다.</li>
<li><strong>소코아 홍대점</strong>은 평점 4.3으로 본 가이드에서 가장 낮지만 가성비 카테고리 평균선 위에 있습니다. 평점·만족도를 최우선으로 한다면 어서와칼국수·육지가 더 안정적입니다.</li>
<li>홍대 식당은 메뉴 가격이 매장·시즌별로 변동이 잦습니다. 본문 가격은 추정 범위이며 정확한 금액은 방문 시 매장 확인을 권장드립니다.</li>
<li>점심 마감·브레이크타임이 매장별로 다릅니다. 늦은 점심을 계획한다면 방문 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 홍대에서 가성비 점심으로 실패 확률이 낮은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>어서와칼국수 홍대합정점</strong>이 1순위입니다. 평점 4.7·리뷰 1,567건으로 표본 안에서 만족도가 거의 흔들리지 않고, 단품 회전이 빨라 점심 피크에도 무난합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 검증 표본이 가장 두터운 점심은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 한식이면 <strong>육지</strong>(리뷰 11,425건), 일식 단품이면 <strong>츠케루</strong>(리뷰 17,859건)가 표본이 가장 두텁습니다. 둘 다 평점이 표본 위에서 안정적으로 유지되는 점이 강점입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 줄 서서라도 먹을 만한 단품집은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>츠케루</strong>입니다. 점심 피크에 줄이 생기지만 돈가스·우동 단품 회전이 빨라 대기가 길게 늘어지지 않습니다. 1만원 안팎으로 한 그릇이 깔끔하게 끝납니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 혼밥으로 가볍게 점심 먹기 좋은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>소코아 홍대점</strong>이 무난합니다. 평점 4.3·리뷰 3,461건으로 차분하게 일식 단품 한 끼를 끝내기 좋습니다. 진한 라멘을 원하면 <strong>오레노라멘 합정본점</strong>도 혼밥에 잘 맞습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 5곳 모두 전용 주차장이 없습니다. 홍대입구역·합정역 대중교통 이용을 권장드리며, 점심 동선은 도보 기준으로 잡으시는 편이 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 가격은 대략 어느 정도인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 단품(칼국수·돈가스·우동·일식 단품)은 대체로 1만원 안팎, 라멘·한식 메뉴는 1~2만원대가 중심입니다. 매장·시즌별 변동이 잦아 본문 가격은 추정 범위이며, 정확한 금액은 방문 시 매장 확인을 권장드립니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/hongdae', text: '홍대 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">홍대 89곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">홍대·합정 일대 89곳에서 1만원 안팎으로 점심이 가능한 식당을 필터링해, 카테고리 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰 표본·메뉴 결·운영 안정성 4가지를 함께 본 결과 칼국수·한식·돈가스·라멘·일식으로 한 끼 선택지가 자연스럽게 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>어서와칼국수 홍대합정점(4.7)</strong>이 1순위, 리뷰 표본 크기로는 <strong>츠케루(17,859건)</strong>가 1순위입니다. 카테고리가 모두 달라 검색 의도가 겹치지 않으니, 깔끔한 단품이면 어서와칼국수, 든든한 한식이면 육지 식으로 분리해서 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>소코아 홍대점</strong>은 평점이 5곳 중 가장 낮지만 4.3으로 가성비 카테고리 평균선 위에 있어 혼밥·가벼운 일식 점심 옵션으로 포함했습니다. 평점·만족도를 최우선으로 한다면 어서와칼국수·육지가 안정 후보이고, 표본 크기 우선이면 츠케루·오레노라멘이 두텁습니다.</p>
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
