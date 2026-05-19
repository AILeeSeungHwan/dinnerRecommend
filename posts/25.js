// 영통역 데이트 맛집 — 뷰·분위기·예약 가능 5선 (식당별 unique 콘텐츠)
const post = {
  id: 25,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>영통역</strong>·매탄·신동카페거리·망포 일대에서 데이트 한 끼·기념일 가벼운 외식에 어울리는 식당 5곳을 정리했습니다. 영통 일대 679곳 중 데이트·분위기·뷰맛집·웨이팅맛집 태그가 잡힌 식당을 추리고, 카테고리는 일식·이탈리아·태국·일식 오마카세·카페 디저트까지 분산해 같은 "데이트" 검색 의도여도 비싼 정찬·가벼운 점심 데이트·디저트 마무리까지 시나리오를 나눠 묶었습니다. 본문 한 줄 결론과 비교표를 먼저 보시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">679곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">영통·매탄·신동·망포</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.4</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.0 ~ 4.8</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">1,287건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">디저트 시작가</p><p style="font-size:20px;font-weight:600;margin:0">4,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">카페 음료 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #C026D3">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">기념일 일식 정찬이면 <strong>좋은소식</strong> — 평점 4.8·리뷰 428건, 영통 데이트 일식 평점 1위입니다.<br><br>한 끼에 오마카세 가성비를 잡으시려면 <strong>오마카세 스시이찌 수원신동점</strong> — 런치 스시오마카세 29,000원.<br><br>데이트 파스타·뇨끼는 <strong>라루치아 본점</strong> — 봉골레알리오올리오 18,000원·뇨끼 21,000원.<br><br>가벼운 점심 데이트·이국 분위기는 <strong>타이테라스 신동카페거리점</strong> — 평점 4.2·리뷰 386건, 신동카페거리 태국 요리.<br><br>식사 후 카페 마무리는 <strong>어펙트커피</strong> — 시그니처 퍼펙트라떼 5,300원, 데이트 카페 1순위입니다.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '영통역 데이트 맛집 선정 기준', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">데이트 카테고리 분산 + 4가지 기준</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>데이트·분위기·뷰맛집 태그</strong> 1개 이상 + 매장 분위기 검증</li>
<li><strong>리뷰 표본 150건 이상</strong> — 데이트 만족도 편차 검증 가능한 표본 크기</li>
<li><strong>평점 4.0점 이상</strong> — 데이트 카테고리 평균선 (영통 전체 평균 약 4.0 동등)</li>
<li><strong>카테고리 분산</strong> — 일식 정찬·이탈리아·태국·오마카세·카페 디저트로 데이트 코스 구성 자유도 확보</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">영통 일대 679곳 중 데이트·분위기·뷰맛집 태그가 잡힌 식당은 약 60곳이었습니다. 그중 평점·리뷰 표본·메뉴 구성·매장 분위기가 데이트 시나리오에 안정적인 식당 5곳을 추렸습니다. 같은 일식이라도 정찬(좋은소식)·런치 오마카세(스시이찌)로 분산했고, 양식은 이탈리아 파스타(라루치아 본점), 동남아 분위기는 태국(타이테라스), 디저트 코스 마무리는 카페(어펙트커피)로 시나리오를 나눴습니다.</p>`
    },

    { type: 'h2', id: 'joeun', text: '좋은소식 — 평점 4.8 영통 데이트 일식 정찬 1순위', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20220915_280/1663238934576Css2O_JPEG/20220831_143420.jpg" alt="좋은소식 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">⭐ 일식 정찬 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 리뷰 852건</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 뷰맛집</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💑 데이트</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>평점 4.8점</strong>은 본 가이드 5곳 중 가장 높은 수치입니다. 리뷰 852건은 표본·평점 동시에 검증된 매장임을 보여줍니다. 영통동 48번지 3층 302호에 위치한 일식당으로, "데이트·뷰맛집·서비스좋음·리뷰많음" 네 가지 태그가 함께 매칭되어 영통 데이트 일식 1순위로 묶입니다. <strong>11:30 영업 시작</strong>이라 점심 데이트도 가능하고, 매장 분위기·뷰가 함께 잡히는 식당이라 기념일 가벼운 외식부터 결혼기념일 정찬까지 폭이 넓습니다. 주차 가능 매장이라 차량 동선까지 부담이 적은 곳입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"초밥 샤리가 특히 맛있다 · 서비스가 친절하다 · 매장 분위기가 좋다" 같은 평이 자주 언급되었습니다. 초밥 본연의 맛과 서비스·뷰가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://blog.kakaocdn.net/dn/mEy4P/btsM0tg67v3/21U4RY2boFVrTtEUHRZ2bK/img.png" alt="좋은소식 매장 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://blog.kakaocdn.net/dn/nsIuX/btsM0J5vEg3/reTXExu4jWKakdQjNstaJk/img.png" alt="좋은소식 매장 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://blog.kakaocdn.net/dn/yAPyf/btsM0IFycyS/iK8NIRKJ89AIEby0o09ljk/img.png" alt="좋은소식 메뉴 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴</h4>
<p style="font-size:13px;color:#5f5e5a;line-height:1.75;margin:0 0 8px">초밥·일식 코스를 시즌별로 운영하는 정찬 식당입니다. 본 가이드 기준 매장 메뉴판 변동이 있어 단가는 매장 직접 확인을 권장드리며, 평일 점심 데이트 옵션·기념일 디너 정찬 모두 가능한 라인업이 잡혀 있습니다. 사케·디저트 사이드도 메뉴판에 포함됩니다.</p>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">뷰맛집</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서비스좋음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 영통동 48 3층 302호 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1307-1228
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/좋은소식" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 좋은소식 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'sushiichi', text: '오마카세 스시이찌 수원신동점 — 런치 오마카세 29,000원 가성비', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20240402_68/1712047540382oWo7B_JPEG/KakaoTalk_20240402_131745327_07.jpg" alt="오마카세 스시이찌 수원신동점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#185FA5;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍣 오마카세 가성비</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 1,903건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 29,000원~39,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍱 런치 가성비</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신동 933-8 1층 102호에 위치한 <strong>오마카세 전문점</strong>입니다. <strong>런치 스시오마카세 29,000원·디너 스시오마카세 39,000원</strong> 두 가지 가격대만으로 메뉴가 단순화되어 있어 첫 데이트에서 메뉴 결정 부담이 적은 편입니다. 평점 4.5점·리뷰 1,903건이 누적되었고, "가성비·점심추천·단체가능·데이트·깔끔한곳·서비스좋음" 여섯 가지 태그가 함께 매칭되어 평일 점심 데이트·기념일 가벼운 외식 옵션으로 묶입니다. <strong>11:00 영업 시작</strong>이라 점심 데이트가 가능한 매장이며, 단체 가능 매장이라 양가 식사·소규모 가족 모임까지 활용도가 넓습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"런치 오마카세 가성비가 좋다 · 매장이 깔끔하다 · 서비스가 친절하다" 같은 평이 자주 언급되었습니다. 런치 단가 만족도와 매장 컨디션이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://postfiles.pstatic.net/MjAyNTEwMjJfMTIy/MDAxNzYxMTE5ODAzMjIy.KNhc1CoqlPaRVx3cpatMMZfqvzWC7mX90f9OOtfourkg.f2_QN0QjTt9-pQMNggkAWKny7UX1sgaoP0jsIqzgB2kg.JPEG/36d7f6c7c031a6e763cd7d4935588c6a.jpg?type=w773" alt="오마카세 스시이찌 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/MjAyNTAxMDdfMjEz/MDAxNzM2MjYxMzgwNzM2.CKoyjl4TGiyfEu-RbF8U4hwm_BNoSYqG0rlmNt-NhwAg.htBjerNEjS7FToMD2f4uXkNvnNnzLlbgAr8ljELaPSog.JPEG/IMG_6668.jpg?type=w773" alt="오마카세 스시이찌 코스 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/MjAyNTA3MTVfMTEx/MDAxNzUyNTU3MzI3Nzgw.9FHkTZCMx-pLX3LoWLvOKlStvYheeWxYovcWR5syjJwg.T_D1b7sc_PASjf5SpePA_JV1fRG504Lf22aL5dWT-C4g.JPEG/KakaoTalk_20250715_133945565_19.jpg?type=w773" alt="오마카세 스시이찌 코스 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 2종</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">런치 스시오마카세</p><p style="font-size:12px;color:#5f5e5a;margin:0">29,000원 · <strong>런치 가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디너 스시오마카세</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원 · <strong>시그니처</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">런치 가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">깔끔한 곳</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 933-8 1층 102호 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 07-1446-5802
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/오마카세 스시이찌 수원신동점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 오마카세 스시이찌 수원신동점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'larucia', text: '라루치아 본점 — 이탈리아 파스타·뇨끼 데이트 단골 옵션', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241011_139%2F1728626470381SRSg3_JPEG%2F3A30B2DA-A210-4B61-9EE3-939BF0EF0D92.jpeg" alt="라루치아 본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍝 데이트 파스타</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 2,286건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000원~40,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🕯 웨이팅맛집</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신동 975번지에 위치한 <strong>이탈리아 본점</strong>입니다. 평점 4.2점·리뷰 2,286건이 누적되었고, "리뷰많음·점심추천·데이트·웨이팅맛집" 네 가지 태그가 함께 매칭되어 영통 데이트 파스타 단골 옵션으로 묶입니다. <strong>11:00 영업 시작</strong>이라 점심 데이트가 가능하고, 봉골레알리오올리오 18,000원·살몬&치즈 샐러드 15,000원·뇨끼 21,000원·꽃등심 스테이크 39,000원까지 메뉴 단가가 단계별로 잡혀 있어 평일 점심 데이트부터 기념일 스테이크 정찬까지 시나리오가 분산됩니다. <strong>파스타 세트(2인) 40,000원</strong>은 첫 데이트 메뉴 결정 부담을 줄이는 옵션입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"파스타가 맛있다 · 데이트 분위기에 잘 맞는다 · 웨이팅이 발생한다" 같은 평이 자주 언급되었습니다. 이탈리아 정통 메뉴 만족도와 데이트 분위기가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241011_139%2F1728626470381SRSg3_JPEG%2F3A30B2DA-A210-4B61-9EE3-939BF0EF0D92.jpeg" alt="라루치아 본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241011_119%2F1728626475354Xcpg1_JPEG%2FB9EED9F5-D764-4E94-8A5F-7F933BBCFD20.jpeg" alt="라루치아 본점 파스타 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241011_265%2F1728626475261zXp3K_JPEG%2FEFF0A1A2-AA78-4266-ADDC-24E57FA5F6B6.jpeg" alt="라루치아 본점 뇨끼 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">살몬&치즈 샐러드</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">봉골레알리오올리오</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">스테이크샐러드</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">뇨끼</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">꽃등심 스테이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">파스타 세트 (2인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">40,000원 · <strong>2인 세트</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">웨이팅맛집</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">파스타 단골</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 975 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 07-1414-6095
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/라루치아 본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 라루치아 본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'thai', text: '타이테라스 신동카페거리점 — 신동카페거리 이국 분위기 점심 데이트', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20180313_269/1520871434178k05T0_JPEG/5soa4pz9hibdd19ryHousi7Q.jpg" alt="타이테라스 신동카페거리점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0F6E56;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🌴 이국 분위기</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 1,355건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 11,900원~45,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🕯 데이트 분위기</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신동 998번지 101호에 위치한 <strong>태국 요리 전문점</strong>입니다. 평점 0점·리뷰 1,355건이 누적되어 본 가이드 5곳 중 두 번째로 표본이 안정적이며, "리뷰많음·점심추천·주차가능·데이트·웨이팅맛집·깔끔한곳" 여섯 가지 태그가 함께 매칭됩니다. <strong>신동카페거리 한가운데 위치</strong>해 식사 후 카페 코스 동선이 자연스러우며, <strong>11:00 영업 시작</strong>이라 평일 점심 데이트부터 주말 가벼운 외식까지 시나리오가 넓습니다. 1인 11,900원선 단가부터 시작해 코스 45,000원까지 메뉴 단가가 분산되어 있고, 태국 요리 특유의 향신료가 데이트 식사에 분위기를 더해주는 매장입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"소고기쌀국수 국물이 깔끔하다 · 고기가 부드럽다 · 매장 분위기가 좋다 · 서비스가 친절하다" 같은 평이 자주 언급되었습니다. 태국 요리 본연의 맛과 데이트 분위기·서비스가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3FautoRotate%3Dtrue%26quality%3D100%26type%3Df640_380%26src%3Dhttps%253A%252F%252Fldb-phinf.pstatic.net%252F20180313_226%252F1520871433906uibQO_JPEG%252Fs987L-ZG6jfNW64ZO9JbnfTN.jpg%22&type=ff500_300" alt="타이테라스 신동카페거리점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjJfMjY0%2FMDAxNjIxNjYyNTk5NzY2.y3XXtnEVYw502Exze8wNqvGOfLqVVhtACQ8NgapSpsog.eTy-HVIKoVb0jwziVIopmyF412018n6vKxRV90MTOVEg.JPEG.jma9293%2FIMG_3416.jpg" alt="타이테라스 신동카페거리점 요리 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/MjAyNDA1MjlfNTQg/MDAxNzE2OTA5MzYxMzE2.wscHqcip5rbdxN46kHwV3Z3J1VF24yBkmn6ZaDJKhLIg.2m7yEwlTeILM39clzCBGiE-35ETWVfIomrn4VqpxkX8g.JPEG/IMG_4019.jpg?type=w773" alt="타이테라스 신동카페거리점 요리 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 가격대</h4>
<p style="font-size:13px;color:#5f5e5a;line-height:1.75;margin:0 0 8px">쌀국수·팟타이·태국 카레가 메인이며, 1인 11,900원선 단품부터 코스 45,000원까지 라인업이 잡혀 있습니다. 본 가이드 기준 시즌 메뉴 변동이 있어 단품·코스 단가는 매장에 직접 확인하시는 편이 안전합니다. 데이트 코스 첫 식사로 적합한 단가 범위입니다.</p>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소고기쌀국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,900원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">팟타이</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">태국 카레</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">팟크라파오</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">2인 세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원선</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">신동카페거리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">웨이팅맛집</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 998 101호 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1307-8018
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/타이테라스 신동카페거리점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 타이테라스 신동카페거리점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'affect', text: '어펙트커피 — 식사 후 데이트 코스 마무리 카페 1순위', gradientStyle: { from: '#92400E', to: '#451A03' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260105_112%2F1767585037222vC3PH_JPEG%2F725C8CA0-A33A-43A2-9882-17F69443D36E.jpeg" alt="어펙트커피 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#92400E;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">☕ 데이트 코스 마무리</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 892건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 4,000원~5,800원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💑 데이트 카페</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1252-3 1층에 위치한 <strong>스페셜티 카페</strong>입니다. 평점 4.1점은 본 가이드 5곳 중 좋은소식과 함께 공동 최상위, 리뷰 892건으로 표본도 안정적입니다. "가성비·주차가능·데이트·리뷰많음·깔끔한곳" 다섯 가지 태그가 함께 매칭되어 식사 후 데이트 코스 마무리 카페로 1순위입니다. <strong>아메리카노 4,000원·시그니처 퍼펙트라떼 5,300원·돌체라떼 5,000원</strong> 단가가 합리적이라 부담 없이 한 잔을 마무리하기 좋은 곳입니다. 매탄동 위치라 좋은소식·라루치아 본점 식사 후 5~10분 이동 거리이며, 신동카페거리권 매장과는 동선이 다르니 사전에 위치 확인이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"커피 맛이 좋다 · 매장이 깔끔하다 · 데이트 분위기가 좋다 · 가성비가 있다" 같은 평이 자주 언급되었습니다. 음료 품질과 매장 분위기·가격대가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260105_112%2F1767585037222vC3PH_JPEG%2F725C8CA0-A33A-43A2-9882-17F69443D36E.jpeg" alt="어펙트커피 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251220_2%2F1766229936771lMQhG_JPEG%2FIMG_7027.jpeg" alt="어펙트커피 음료 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260105_244%2F1767585038763PUhlc_JPEG%2FIMG_7215.jpeg" alt="어펙트커피 음료 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 음료 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아메리카노</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디카페인 아메리카노</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">카페라떼</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돌체라떼</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">바닐라라떼</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,300원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">시그니처 퍼펙트라떼</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,300원 · <strong>시그니처</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트 코스</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">깔끔한 곳</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1252-3 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 031-216-1112
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtong/restaurant/어펙트커피" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 어펙트커피 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>좋은소식</strong><br><span style="font-size:11px;color:#888780">일식·초밥</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">428건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 뷰맛집</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>오마카세 스시이찌 수원신동점</strong><br><span style="font-size:11px;color:#888780">일식 오마카세</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">151건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#185FA5">29,000원</strong><br><span style="font-size:11px;color:#888780">런치 코스</span></td>
<td style="padding:11px 10px;font-size:12.5px">런치 오마카세 가성비</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>라루치아 본점</strong><br><span style="font-size:11px;color:#888780">이탈리아·파스타</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">151건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">15,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">파스타 데이트 단골</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>타이테라스 신동카페거리점</strong><br><span style="font-size:11px;color:#888780">태국</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">386건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0F6E56">11,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">신동카페거리 + 이국 분위기</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>어펙트커피</strong><br><span style="font-size:11px;color:#888780">카페·디저트</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">171건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#92400E">4,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">데이트 코스 마무리 카페</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 데이트는 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🎂 기념일 정찬 일식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>좋은소식</strong> — 평점 4.8·리뷰 428건·뷰맛집 태그. 영통 데이트 일식 평점 1순위로, 결혼기념일·생일 정찬에 적합한 분위기·서비스가 함께 누적된 매장입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍣 런치 오마카세 가성비</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>오마카세 스시이찌 수원신동점</strong> — 런치 스시오마카세 29,000원. 첫 데이트에서 메뉴 부담 없이 오마카세를 경험하시려는 분에게 적합한 단가입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍝 데이트 파스타·뇨끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>라루치아 본점</strong> — 봉골레알리오올리오 18,000원·뇨끼 21,000원·꽃등심 스테이크 39,000원. 평일 점심 데이트부터 기념일 스테이크 정찬까지 단가가 분산되어 있습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌴 신동카페거리 동선</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>타이테라스 신동카페거리점</strong> — 신동카페거리 한가운데 위치. 식사 후 카페 코스 동선이 자연스러우며 이국 분위기로 첫 데이트 어색함을 완화하는 옵션입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">☕ 식사 후 카페 마무리</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>어펙트커피</strong> — 시그니처 퍼펙트라떼 5,300원·아메리카노 4,000원. 평점 4.8점 매탄동 카페로 좋은소식·라루치아 본점 식사 후 5~10분 이동 가능 동선입니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>좋은소식</strong>은 3층 매장이라 엘리베이터 동선이 필요한 매장입니다. 거동 불편하신 가족과 함께면 사전에 매장 동선을 확인하시는 편이 안전합니다. 기념일 자리는 평일 저녁이라도 예약을 권장드립니다.</li>
<li><strong>오마카세 스시이찌 수원신동점</strong>은 런치·디너 코스만 운영합니다. 단품 메뉴는 없으니 도착 후 결정 부담은 없지만 시간을 충분히 잡고 방문하시는 편이 좋습니다(코스 70~90분 예상).</li>
<li><strong>라루치아 본점</strong>은 "웨이팅맛집" 태그가 잡혀 있어 주말 12시~13시·19시 시간대엔 자리 잡기 어려울 수 있습니다. 점심 데이트는 11:30 입장·디너는 18:00 입장이 안전합니다.</li>
<li><strong>타이테라스 신동카페거리점</strong>은 신동카페거리 주차 혼잡 구역입니다. 전용 주차장이 있지만 주말 피크엔 만차될 수 있어 매장 인근 공영주차장도 함께 확인하시는 편이 좋습니다.</li>
<li><strong>어펙트커피</strong>는 매탄동에 위치해 신동카페거리·영통역과 동선이 다릅니다. 신동에서 식사 후 카페면 도보보다 차량 이동(5~10분)이 안전합니다.</li>
<li>5곳 모두 메뉴 가격·코스 구성은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 영통역에서 평점 가장 높은 데이트 식당은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>좋은소식</strong>이 평점 4.8점·리뷰 428건으로 본 가이드 5곳 중 평점·표본 동시 1위입니다. 영통동 48번지 3층, 일식 정찬 매장이며 "데이트·뷰맛집·서비스좋음" 태그가 함께 매칭되어 기념일·결혼기념일 정찬에 적합합니다. 카페 카테고리에선 <strong>어펙트커피</strong>(★4.8·171건)가 공동 1위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 데이트로 부담 없이 갈 수 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>타이테라스 신동카페거리점</strong>의 소고기쌀국수 11,900원이 1인 단가 최저가입니다. <strong>라루치아 본점</strong>의 살몬&치즈 샐러드 15,000원, <strong>오마카세 스시이찌 수원신동점</strong>의 런치 스시오마카세 29,000원이 점심 데이트 시나리오에 적합한 단가 범위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 기념일 정찬에 가장 어울리는 식당은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>좋은소식</strong>이 1순위입니다. 평점 4.8·뷰맛집·데이트 태그가 함께 매칭되어 결혼기념일·생일 정찬에 적합합니다. 차순위는 <strong>라루치아 본점</strong>의 꽃등심 스테이크 39,000원·파스타 세트 40,000원이 기념일 코스 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 식사 후 카페까지 한 동선으로 잡으려면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 신동카페거리 동선이면 <strong>타이테라스 신동카페거리점</strong>(식사) + 신동카페거리 내 카페 도보 5분. 매탄동 동선이면 <strong>어펙트커피</strong>가 데이트 코스 마무리 카페로 1순위입니다. <strong>좋은소식</strong>·<strong>라루치아 본점</strong> 식사 후엔 매탄동 어펙트커피까지 차량 5~10분 이동이 안정적입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평일 데이트에 웨이팅 부담 없이 가려면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>오마카세 스시이찌 수원신동점</strong>이 평일 런치 시간에 자리 잡기 비교적 수월합니다. <strong>좋은소식</strong>은 평일 점심·저녁 모두 예약을 권장드리며, <strong>라루치아 본점</strong>·<strong>타이테라스</strong>는 "웨이팅맛집" 태그가 잡혀 있어 12시·19시 피크 시간대를 30분 전후로 피하시는 편이 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>좋은소식·타이테라스·어펙트커피</strong>는 주차 가능 매장으로 잡혀 있고, <strong>오마카세 스시이찌·라루치아 본점</strong>은 인근 공영주차장 또는 매장 인근 빌딩 주차장 이용을 권장드립니다. 신동카페거리 주차장은 주말 피크에 만차될 수 있어 사전 확인이 안전합니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/samsungElectronics/yeongtong', text: '영통역 데이트 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">영통 679곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">영통 일대 679곳에서 데이트·분위기·뷰맛집·웨이팅맛집 태그가 잡힌 식당을 필터링한 뒤, 카테고리 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰·운영시간·매장 분위기 4가지를 함께 본 결과, 일식 정찬·런치 오마카세·이탈리아 파스타·태국 이국 분위기·카페 디저트로 데이트 시나리오가 자연스럽게 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 기준이면 <strong>좋은소식·어펙트커피(4.8)</strong>가 공동 1위입니다. 단, 좋은소식은 일식 정찬 카테고리·어펙트커피는 카페 카테고리라 검색 의도가 다릅니다. 메인 식사면 좋은소식, 마무리 카페면 어펙트커피로 분리해서 선택하시면 됩니다. 표본 크기 기준이면 <strong>타이테라스 신동카페거리점(386건)</strong>이 1위로, 평점 4.2점이 안정적으로 누적된 식당입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>오마카세 스시이찌 수원신동점</strong>·<strong>라루치아 본점</strong>은 평점 4.0점으로 본 가이드 5곳 중 평균 아래입니다. 다만 두 곳 모두 단가 차별점(런치 오마카세 29,000원·파스타 단가 분산)과 데이트 시나리오 적합성이 명확해 후보에 포함했습니다. 평점 우선이면 좋은소식·어펙트커피로, 단가·시나리오 우선이면 라루치아·스시이찌·타이테라스로 선택하시면 됩니다.</p>
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
