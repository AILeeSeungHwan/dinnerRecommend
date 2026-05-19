// 영통구청 고기 맛집 추천 5곳 — 식당별 unique 콘텐츠
const post = {
  id: 47,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>영통구청</strong> 일대 매탄동·영통동에서 소고기·삼겹·갈비·곱창까지 고기 한 끼를 책임지는 식당 5곳을 정리했습니다. 영통구청 주변 548곳에서 평점·리뷰 표본·메뉴 구성·운영 안정성 4가지를 기준으로 추렸고, 소고기구이·냉삼·갈비·돼지구이로 카테고리를 분산했습니다. 회식·가족 외식·둘이 먹는 한 끼 등 상황별 1순위를 따로 골라 두었으니 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">548곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">매탄·영통·원천 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평점</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.9</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.9 ~ 5.0</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">4,203건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">8,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">찌개·식사류 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">소고기 회식이면 <strong>육끝 영통구청점</strong> — 평점 4.9·리뷰 1,593건에 주차·예약 모두 되고 갈비살 19,900원부터입니다. 둘이 가볍게 냉삼·삼겹이면 <strong>냉삼포차</strong> (평점 5.0·리뷰 1,024건, 매탄동). 갈비를 제대로 먹고 싶으면 <strong>석촌갈비</strong> (평점 5.0·리뷰 1,019건, 원천동). 동네 단골 돼지구이면 <strong>정가네 본점</strong> (평점 5.0·리뷰 493건, 영통동). 검증된 프랜차이즈 안정감이면 <strong>하남돼지집 수원삼성점</strong> (평점 5.0, 매탄동, 체인 표준).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>고기 카테고리 한정</strong> — 소고기구이·돼지고기구이·갈비·곱창으로 한정해 검색 의도 일치</li>
<li><strong>평점 4.5점 이상</strong> — 영통구청 고기 카테고리 상위 구간으로 컷</li>
<li><strong>리뷰 표본 + 차별점</strong> — 표본이 작은 곳은 메뉴·운영 차별점이 명확할 때만 포함</li>
<li><strong>카테고리 분산</strong> — 소고기·냉삼·갈비·돼지구이로 한 끼 선택지를 다섯 갈래로 분리</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">영통구청 일대 548곳 중 소·돼지 구이와 갈비·곱창에 들어가는 식당은 약 60곳이었습니다. 그중 평점·리뷰·메뉴 구성·운영 안정성이 함께 안정적인 5곳을 추렸습니다. 같은 부위·같은 분위기 중복을 피해 소고기 회식·냉삼·갈비·동네 돼지구이로 한 끼 선택지를 나눴고, 표본이 작은 식당은 평점과 차별점이 명확할 때만 넣었습니다.</p>`
    },

    { type: 'h2', id: 'yukkeut', text: '육끝 영통구청점 — 소고기 회식·예약 둘 다 잡는 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251014_201%2F1760451904987DKdQF_JPEG%2FKakaoTalk_20251014_104558082.jpg" alt="육끝 영통구청점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 회식·검증 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 1,593건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,000원~120,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>영통구청 고기 5곳 중 평점·표본·편의시설을 한 번에 만족하는 소고기구이집</strong>입니다. 매탄동 1266-3 1층, 평점 4.9에 리뷰 1,593건으로 본 가이드에서 표본이 가장 두텁습니다. 주차장과 예약이 모두 되고 단체석이 있어 팀 회식·가족 모임에 바로 묶이는 곳입니다. 11:30 영업 시작이라 점심 회식도 가능하며, 갈비살 19,900원·쫀덕갈비 15,900원으로 소고기치고 진입 부담이 낮은 편입니다. 블로그 후기 511건이 함께 누적되었습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"고기 질이 좋다 · 단체로 가기 좋다 · 직원이 친절하다 · 웨이팅 있다" 같은 평이 자주 언급되었습니다. 회식 수용력과 고기 질이 함께 묶여 누적되는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251014_201%2F1760451904987DKdQF_JPEG%2FKakaoTalk_20251014_104558082.jpg" alt="육끝 영통구청점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260106_76%2F1767688911723eb8Vm_JPEG%2F%25B8%25C0%25C0%25D5%25B4%25C2_%25B1%25B8%25BF%25EE%25B5%25EE%25BD%25C9%25BB%25E7%25C1%25F82.jpg" alt="육끝 영통구청점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251015_202%2F1760456388264yNtXw_PNG%2F%25C7%25D1%25BB%25F3%25C2%25F7%25B8%25B22.png" alt="육끝 영통구청점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">쫀덕갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,900원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">갈비살</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,900원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특갈비살</p><p style="font-size:12px;color:#5f5e5a;margin:0">26,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특등심</p><p style="font-size:12px;color:#5f5e5a;margin:0">28,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">토속 된장찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">전통 함흥식 물냉면</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">웨이팅 맛집</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1266-3 1층 109호 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1353-9835
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/육끝 영통구청점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 육끝 영통구청점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'naengsam', text: '냉삼포차 — 둘이 가볍게 냉동 삼겹 한 끼', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231230_103%2F1703884451848VUWLg_JPEG%2F1000021375.jpg" alt="냉삼포차 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 냉삼 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 5.0 · 리뷰 1,024건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 매장 문의</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 833-6 1층에 자리한 냉동 삼겹살 전문 포차형 매장입니다. 평점 5.0에 리뷰 1,024건으로, 표본이 천 건을 넘기면서도 만점을 유지한 점이 두드러집니다. 정통 고깃집보다 가볍고 캐주얼한 분위기라 퇴근 후 둘이서 부담 없이 한 잔 곁들이는 자리로 잘 맞습니다. 메뉴별 가격은 매장 게시 기준이 우선이라 방문 전 확인이 안전하며, 회전이 빠른 포차형이라 평일 저녁 피크에도 자리 흐름이 빠른 편입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"냉삼이 맛있다 · 분위기가 캐주얼하다 · 가볍게 한잔하기 좋다" 같은 평이 자주 언급되었습니다. 냉동 삼겹의 만족도와 포차형 분위기가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231230_103%2F1703884451848VUWLg_JPEG%2F1000021375.jpg" alt="냉삼포차 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231230_80%2F1703884451962QGaTa_JPEG%2F1000021377.jpg" alt="냉삼포차 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231230_235%2F1703884449387Ub4Oc_JPEG%2F1000021388.jpg" alt="냉삼포차 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 가격 매장 문의</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">냉동 삼겹살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">목살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">된장찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">냉면</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">캐주얼</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">둘이서</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">퇴근 후 한잔</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">회전 빠름</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 833-6 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 0507-1466-5161
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/냉삼포차" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 냉삼포차 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'seokchon', text: '석촌갈비 — 갈비 제대로 한 상, 원천동 노포 감성', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://d12zq4w4guyljn.cloudfront.net/750_750_20260405105615_photo1_817a19b9f22c.webp" alt="석촌갈비 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍖 갈비 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 5.0 · 리뷰 1,019건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 매장 문의</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">원천동 549-2에 있는 갈비 전문점입니다. 평점 5.0에 리뷰 1,019건으로 천 건대 표본을 유지한 만점 식당이며, 영통구청 권역에서 갈비 한 상을 제대로 차려 먹고 싶을 때 떠올릴 만한 곳입니다. 매탄동·영통동 상권과 떨어진 원천동 쪽이라 동선상 일부러 찾아가는 손님 비중이 큰 편이고, 그만큼 가족 단위·연배 있는 손님 방문이 누적되어 있습니다. 메뉴별 가격은 매장 게시 기준을 따르니 방문 전 확인하시는 편이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"갈비가 맛있다 · 가족 외식하기 좋다 · 오래된 단골집 느낌" 같은 평이 자주 언급되었습니다. 갈비 만족도와 가족 외식 수요가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 가격 매장 문의</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">양념 갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">냉면</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">된장찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">갈비 정석</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">노포 감성</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">단골 많음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 원천동 549-2 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-215-9232
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/석촌갈비" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 석촌갈비 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'jeongganae', text: '정가네 본점 — 영통동 동네 단골 돼지구이', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250920_34%2F17583547679759Kvky_JPEG%2FIMG_4799.jpeg" alt="정가네 본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍽️ 동네 단골 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 5.0 · 리뷰 493건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 매장 문의</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">영통동 980-3 C동 1층에 있는 돼지고기구이 식당입니다. 평점 5.0에 리뷰 493건으로 본 가이드 5곳 중 표본은 가장 작지만, 영통동 생활권 안에 있어 동네 단골 비중이 높고 평점이 흔들리지 않는다는 점이 차별점입니다. 화려한 회식보다 가까운 사람들과 부담 없이 삼겹·목살을 굽는 자리에 잘 맞고, 영통동 거주자라면 도보 접근이 가능한 위치입니다. 메뉴별 가격은 매장 게시 기준을 따릅니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"고기가 신선하다 · 동네에서 자주 가게 된다 · 사장님이 친절하다" 같은 평이 자주 언급되었습니다. 신선도와 동네 단골 만족도가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250920_34%2F17583547679759Kvky_JPEG%2FIMG_4799.jpeg" alt="정가네 본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250920_43%2F1758354570791kJjX7_JPEG%2FIMG_6123.jpeg" alt="정가네 본점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250920_121%2F1758354570642CQqkR_JPEG%2FIMG_5799.jpeg" alt="정가네 본점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 가격 매장 문의</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">삼겹살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">목살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">김치찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">된장찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">동네 단골</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">삼겹·목살</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">부담 없음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">영통동 도보권</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 영통동 980-3 C동 111호 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-204-8428
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/정가네 본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 정가네 본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'hanam', text: '하남돼지집 수원삼성점 — 검증된 프랜차이즈 안정감', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyNDA0MTZfOTMg/MDAxNzEzMjQ1Mjk5MTgx.S8QHcywC_ZKEGhCjvAcZweYojw3w4hJ6EdsOvWnSKaMg.T_hxQH5rjXSjqzD0vzxcII_hhODojwS5ugh8VuGUDYkg.JPEG/%EC%88%98_IMG_E8943.jpg?type=w773" alt="하남돼지집 수원삼성점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏢 프랜차이즈 안정</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 5.0 · 리뷰 68건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 매장 문의</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1267-5에 있는 하남돼지집 프랜차이즈 매장입니다. <strong>리뷰 68건으로 표본이 작아 평점 5.0을 그대로 받아들이긴 이르지만</strong>, 전국 단위로 메뉴·맛이 표준화된 체인이라 처음 가는 손님도 결과를 예측하기 쉽다는 점이 차별점입니다. 회식·가족 외식에서 실패 확률을 낮추고 싶을 때 무난한 선택지로 묶었습니다. 메뉴별 가격은 체인 정책과 매장 게시 기준을 따르니 방문 전 확인을 권장드립니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛이 일정하다 · 깔끔하다 · 무난하게 먹기 좋다" 같은 평이 자주 언급되었습니다. 체인 표준화와 매장 청결이 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 체인 표준 (가격 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생삼겹살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">목살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">항정살</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">된장찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">프랜차이즈</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">맛 표준화</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">실패 확률 낮음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1267-5 103·104호 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-214-9222
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/하남돼지집 수원삼성점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 하남돼지집 수원삼성점 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>육끝 영통구청점</strong><br><span style="font-size:11px;color:#888780">소고기구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">1,593건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">8,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 + 주차·예약</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>냉삼포차</strong><br><span style="font-size:11px;color:#888780">냉동 삼겹</span></td>
<td style="padding:11px 10px;text-align:center">★ 5.0<br><span style="font-size:11px;color:#888780">1,024건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#888780">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">캐주얼 + 둘이 가볍게</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>석촌갈비</strong><br><span style="font-size:11px;color:#888780">갈비</span></td>
<td style="padding:11px 10px;text-align:center">★ 5.0<br><span style="font-size:11px;color:#888780">1,019건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#888780">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">갈비 정석 + 가족 외식</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>정가네 본점</strong><br><span style="font-size:11px;color:#888780">돼지구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 5.0<br><span style="font-size:11px;color:#888780">493건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#888780">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">영통동 동네 단골</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>하남돼지집 수원삼성점</strong><br><span style="font-size:11px;color:#888780">돼지구이·체인</span></td>
<td style="padding:11px 10px;text-align:center">★ 5.0<br><span style="font-size:11px;color:#888780">68건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#888780">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표준화 + 실패 확률 낮음</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 고기는 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍻 팀 회식·가족 모임</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>육끝 영통구청점</strong> — 주차·예약 가능에 단체석. 갈비살 19,900원부터라 소고기 회식 진입 부담이 낮습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 둘이 가볍게 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>냉삼포차</strong> — 냉동 삼겹 캐주얼 매장. 퇴근 후 한 잔 곁들이는 부담 없는 자리.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍖 갈비 제대로 한 상</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>석촌갈비</strong> — 원천동 노포 감성 갈비 전문. 연배 있는 가족 외식에 잘 맞습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🏠 영통동 동네 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>정가네 본점</strong> — 영통동 도보권 돼지구이. 가까운 사람들과 부담 없이 굽는 자리.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🏢 실패 없이 무난하게</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>하남돼지집 수원삼성점</strong> — 체인 표준화로 결과 예측이 쉬움. 처음 가는 모임에 안전한 선택.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>육끝 영통구청점</strong>은 평점·리뷰 표본이 가장 두텁고 주차·예약이 모두 됩니다. 단체 회식은 미리 예약하시면 좌석 확보가 안전합니다.</li>
<li><strong>냉삼포차·석촌갈비·정가네 본점</strong>은 메뉴별 가격이 매장 게시 기준입니다. 방문 전 매장에 메뉴·가격을 한 번 확인하시는 편이 안전합니다.</li>
<li><strong>석촌갈비</strong>는 원천동 쪽이라 매탄동·영통동 상권과 동선이 다릅니다. 차량 이동을 고려하시면 좋습니다.</li>
<li><strong>하남돼지집 수원삼성점</strong>은 리뷰 68건으로 표본이 작아 평점 5.0을 그대로 일반화하기엔 이릅니다. 체인 표준이라는 안정성을 기준으로 보시는 편이 정확합니다.</li>
<li>전용 주차장이 명시되지 않은 매장은 인근 공영주차장 또는 대중교통 이용을 권장드립니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 영통구청에서 소고기 회식하기 좋은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>육끝 영통구청점</strong>이 1순위입니다. 평점 4.9·리뷰 1,593건으로 표본이 가장 두텁고 주차·예약·단체석이 모두 됩니다. 갈비살 19,900원·쫀덕갈비 15,900원으로 소고기치고 진입 부담이 낮아 팀 회식에 무난합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 둘이서 가볍게 삼겹 먹을 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>냉삼포차</strong>가 잘 맞습니다. 매탄동 833-6의 냉동 삼겹 포차형 매장으로 평점 5.0·리뷰 1,024건. 캐주얼한 분위기라 퇴근 후 한 잔 곁들이는 자리에 좋습니다. 동네 단골 분위기를 원하면 영통동의 <strong>정가네 본점</strong>도 차순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 갈비를 제대로 먹고 싶으면 어디로 가나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>석촌갈비</strong>가 갈비 전문입니다. 원천동 549-2에 있고 평점 5.0·리뷰 1,019건으로 천 건대 표본을 유지합니다. 연배 있는 가족 외식·정석 갈비 한 상을 원할 때 떠올릴 만한 곳입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차가 되나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>육끝 영통구청점</strong>만 주차장이 명시되어 있고, 나머지 <strong>냉삼포차·석촌갈비·정가네 본점·하남돼지집 수원삼성점</strong>은 전용 주차장이 명시되지 않아 인근 공영주차장 또는 대중교통이 더 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 메뉴 가격이 "매장 문의"로 표시된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 가격 데이터가 확인된 곳은 <strong>육끝 영통구청점</strong>뿐입니다. 나머지는 가격 정보가 정리되어 있지 않아 임의로 만들지 않고 "매장 문의"로 두었습니다. 방문 전 매장 게시 메뉴판을 확인하시는 편이 정확합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 모두 높은데 표본 차이는 어떻게 보나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 평점은 4.9~5.0으로 비슷하지만 리뷰 표본은 차이가 큽니다. <strong>육끝(1,593건)·냉삼포차(1,024건)·석촌갈비(1,019건)</strong>는 천 건대로 안정적이고, <strong>정가네 본점(493건)</strong>은 중간, <strong>하남돼지집(68건)</strong>은 표본이 작아 평점만으로 일반화하기엔 이릅니다. 표본 우선이면 앞 세 곳이 더 안전합니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/samsungElectronics/yeongtongGu', text: '영통구청 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">영통구청 548곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">영통구청 일대 548곳에서 소·돼지 구이와 갈비·곱창에 들어가는 식당을 필터링해, 부위·분위기 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰·메뉴 구성·운영 안정성 4가지를 함께 본 결과, 소고기 회식·냉삼·갈비·동네 돼지구이로 한 끼 선택지가 다섯 갈래로 자연스럽게 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px"><strong>하남돼지집 수원삼성점</strong>은 평점 5.0이지만 리뷰 68건으로 표본이 작아 평점을 그대로 일반화하기엔 이릅니다. 다만 전국 표준화된 체인이라 결과 예측이 쉽다는 차별점으로 포함했습니다. 표본이 가장 두터운 곳은 <strong>육끝 영통구청점(1,593건)</strong>입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">표본·편의시설을 함께 보면 <strong>육끝 영통구청점</strong>이 회식 1순위, 평점·표본 모두 안정적인 캐주얼 한 끼면 <strong>냉삼포차</strong>, 갈비 정석이면 <strong>석촌갈비</strong>입니다. 가격이 "매장 문의"인 곳은 임의로 만들지 않았으니 방문 전 메뉴판을 확인하시면 정확합니다.</p>
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
