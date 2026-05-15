// 삼성역 2차 술집 5곳 — 회식 1차 후 옮길 야장·포차 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 24,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">코엑스·테헤란로 회식 1차 후 자리 옮기기 좋은 <strong>삼성역 2차 술집</strong> 5곳을 정리하였습니다. 삼성역 일대 859곳 중 야장·치킨·와인바·이자카야 카테고리에서 새벽 영업·생맥주·라이브 음악·포차 감성 같은 결을 가진 매장을 추리고, 평점·리뷰 표본·시그니처 안주 4가지를 함께 본 결과 다섯 곳을 골랐습니다. 1차 분위기를 가볍게 이어 받을 수 있는 매장과 본격 술자리로 옮기는 매장을 함께 묶었으니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">859곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">야장·치킨·술집</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">2차 후보 풀</p><p style="font-size:20px;font-weight:600;margin:0">93곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">필터링 후 5곳</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.4</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">5,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">맥주 1잔 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 1차 뒤 어떤 2차로 옮기나요', gradientStyle: { from: '#312E81', to: '#1E1B4B' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #312E81">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">치킨+생맥주 2차면 <strong>만선호프 삼성동</strong> — 후라이드 19,000원·을지로골뱅이 28,000원·대형스크린·단체 가능. 캐주얼한 한 잔이면 <strong>생활맥주 삼성코엑스 2호점</strong> — 앵그리버드와 감자 24,000원·맥주 다양. 라이브 음악·아지트 분위기면 <strong>ASOBOY</strong> — 맥주 5,000원·칵테일 9,000원, 봉은사로 지하 1층. 포차 감성·새벽 3시까지면 <strong>못난이포차</strong> — 부추전 15,000원·골뱅이 18,000원. 칵테일 한 잔으로 마무리면 <strong>몰트바배럴</strong> — 진피즈·모스코뮬 20,000원, 2층 자리.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 1차와 결이 다른 매장만', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 2차 분위기 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>저녁·심야 영업 매장만</strong> — 16:00 이후 오픈, 새벽 영업 매장 포함</li>
<li><strong>술·안주 단가 5,000~28,000원</strong> — 1차 후 부담 없는 단가의 한 잔·간단 안주 매장</li>
<li><strong>분위기 결 분산</strong> — 생맥주 야장·캐주얼 펍·라이브 음악·포차·칵테일 바 5종</li>
<li><strong>본격 이자카야 카테고리는 제외</strong> — post 2(이자카야 메인)와 자리 성격 분리</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">삼성역 일대 야장·치킨·와인바·이자카야 카테고리 약 93곳에서 2차 자리에 어울리는 5곳을 분산했습니다. 본격 이자카야 매장(수다 삼성1호점·동어동락 등)은 별도 가이드(이자카야 BEST)에 두고, 이번 가이드는 <strong>"1차 후 가볍게 옮기는 매장"</strong>에 집중했습니다. 생맥주+치킨·캐주얼 펍·라이브 음악·포차 감성·칵테일 바 5종으로 분위기를 분산해, 1차에서 마신 결과 다음 자리 분위기를 다르게 잡고 싶을 때 한 페이지에서 골라 쓸 수 있도록 구성했습니다.</p>`
    },

    { type: 'h2', id: 'manseon', text: '만선호프 삼성동 — 후라이드 19,000원·생맥주+대형스크린 2차', gradientStyle: { from: '#F59E0B', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240618_215%2F1718681872008yVdxR_JPEG%2FIMG_8392.jpeg" alt="만선호프 삼성동 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#F59E0B,#DC2626)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F59E0B;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍗 치맥 2차 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 285건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000원~28,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📺 대형스크린</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">테헤란로 77길 9에 위치한 야장·치킨 매장입니다. <strong>대형스크린·생맥주·후라이드 치킨·을지로골뱅이</strong>가 핵심 라인업으로, 회식 1차 후 야구·축구 같은 스포츠 중계를 보면서 가볍게 한 잔 더 마실 수 있는 2차 자리에 매칭이 좋습니다. 단가가 15,000~28,000원선이라 5~10인 단체 자리에 1인 2~3만원선 부담으로 마칠 수 있고, "회식·기분 좋음·스트레스 받음" 평가가 함께 묶여 있어 부서 회식 1차 뒤 자연스러운 이동 동선을 만들어 줍니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"순살치킨 의외로 맛있다 · 생맥주 시원하다 · 대형스크린 분위기 좋다" 같은 평이 자주 언급되었습니다. 치킨+생맥주+중계 시청 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 안주 5종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">을지로골뱅이</p><p style="font-size:12px;color:#5f5e5a;margin:0">28,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">후라이드치킨</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">낙지소면</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">닭똥집튀김</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돈까스</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생맥주 1잔</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 안내</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">치맥 2차</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">대형스크린</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">생맥주</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 테헤란로 77길 9 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/만선호프 삼성동" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 만선호프 삼성동 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'craft-beer', text: '생활맥주 삼성코엑스 2호점 — 앵그리버드와 감자 24,000원', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240826_192%2F1724651872007l2YOe_JPEG%2FIMG_4729.jpeg" alt="생활맥주 삼성코엑스 2호점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#0F6E56,#059669)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0F6E56;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍺 캐주얼 펍</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 285건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~24,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍻 다양한 맥주</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성동 157-8 1층에 위치한 야장·캐주얼 펍입니다. <strong>크리스피 치킨·간장치킨(앵그리버드와 감자)·고급찐어묵탕</strong>이 핵심 안주이며, 12,000~24,000원선 단가로 2~4인 자리에 부담이 적습니다. 17:00 영업이라 회식 1차 후 자연스럽게 옮길 수 있는 시간대이고, "가성비·데이트" 평가가 함께 묶여 있어 1차가 끝난 뒤 둘 이상 옮기는 자리 또는 부서 사람 일부만 자리 옮기는 자유로운 분위기에 매칭이 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 재료 신선하다 · 기분 좋은 시간" 같은 평이 자주 언급되었습니다. 시그니처 치킨+맥주 조합 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 안주 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우리의 영혼을 담은 크리스피 치킨</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">앵그리버드와 감자 (간장)</p><p style="font-size:12px;color:#5f5e5a;margin:0">24,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">앵그리버드와 감자 (반달감자)</p><p style="font-size:12px;color:#5f5e5a;margin:0">24,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">김치 꽃게 우동</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">골빔면</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">고급찐어묵탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">캐주얼 펍</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">치킨+맥주</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">2~4인 자리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">데이트</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성동 157-8 1층 · <strong>🕐 영업</strong> 17:00 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/생활맥주 삼성코엑스 2호점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 생활맥주 삼성코엑스 2호점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'asoboy', text: 'ASOBOY — 라이브 음악 아지트, 맥주 5,000원·칵테일 9,000원', gradientStyle: { from: '#4338CA', to: '#A855F7' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240416_215%2F1713252272008yVdxR_JPEG%2FIMG_4823.jpeg" alt="ASOBOY 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#4338CA,#A855F7)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#4338CA;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🎵 라이브 음악</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 285건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 5,000원~9,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🏠 아지트 분위기</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">봉은사로 504 지하 1층에 위치한 야장·와인바·이자카야 결합 매장입니다. <strong>라이브 음악·생맥주·아지트 분위기</strong>가 핵심 차별점이며, 맥주 5,000원·양주 8,500원·칵테일 9,000원으로 본 가이드 5곳 중 단가가 가장 낮습니다. 19:00 영업이라 1차 후 22:00 즈음 자리 옮기기 좋은 시간대이며, "라이브음악·야장·생맥주·분위기 최고·가성비·주차 가능·데이트" 평가가 함께 묶여 있어 2~4인 자리에 분위기와 음악까지 챙기는 옵션으로 매칭이 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"분위기 아주 좋다 · 음악 좋다 · 아지트 같은 곳 · 서비스 친절하다" 같은 평이 자주 언급되었습니다. 라이브 음악과 매장 분위기 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 술·안주</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">맥주 1잔</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">양주 1잔</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">칵테일</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">안주 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원~ · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">와인 글라스</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 안내</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">라이브 음악</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 일정 안내</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">라이브 음악</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 봉은사로 504 지하 1층 · <strong>🕐 영업</strong> 19:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1306-4967
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/ASOBOY" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 ASOBOY 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'motnani', text: '못난이포차 — 새벽 3시까지 포차 감성', gradientStyle: { from: '#92400E', to: '#451A03' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240220_252%2F1708395672008yVdxR_JPEG%2FIMG_8392.jpeg" alt="못난이포차 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#92400E,#451A03)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#92400E;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🌙 새벽 3시</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 285건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000원~20,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍢 포차 감성</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성1동 152-23에 위치한 야장·이자카야 결합 포차입니다. <strong>새벽 3시까지 영업·포차 감성·부추전·골뱅이·동태전</strong>이 핵심 라인업이며, 1차가 늦게 끝나도 자리 옮기기 좋은 시간대 옵션입니다. 15,000~20,000원선의 전·골뱅이 안주로 2~4인 자리에 부담이 적고, "포차 감성·야장·고기·안주·기분 좋음·회식·스트레스 받음" 평가가 함께 묶여 있어 회식 1차 뒤 마무리 자리·심야 한 잔 자리에 매칭이 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"포차 감성 좋다 · 전 종류 푸짐하다 · 골뱅이 안주 인기 · 새벽까지 영업" 같은 평이 자주 언급되었습니다. 포차 분위기와 안주 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 안주 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">부추전</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">골뱅이</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">파전</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">동태전</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">두부김치</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">똥집</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">포차 감성</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">새벽 3시</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식 마무리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">전·골뱅이</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성1동 152-23 · <strong>🕐 영업</strong> 새벽 3시까지 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 02-3452-3660
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/못난이포차" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 못난이포차 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'malt-bar', text: '몰트바배럴 — 칵테일 한 잔 마무리, 2층 자리', gradientStyle: { from: '#4338CA', to: '#6366F1' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20160303_264/1456941908791gkNRl_JPEG/1762534335276.jpg" alt="몰트바배럴 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#4338CA,#6366F1)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#4338CA;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍸 칵테일 마무리</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 285건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 20,000원~</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🥂 논알콜 음료</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성동 151-29 이호빌딩 2층에 위치한 야장·바입니다. <strong>진피즈·모스코뮬 등 클래식 칵테일 20,000원선</strong>이 핵심 메뉴이며, 본 가이드 5곳 중 칵테일 단가가 가장 높은 매장이지만 클래식 바 분위기·논알콜 음료까지 함께 운영해 술자리 마무리·차분한 대화 자리에 매칭이 좋습니다. "가성비·데이트" 평가가 함께 묶여 있어 1차 후 둘이 옮기는 자리·접대 자리의 차분한 마무리에 적합합니다. 2층 위치라 1차 매장에서 도보 이동이 짧고, 음악·조명이 절제된 분위기입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"마티니 맛있다 · 논알콜 음료 만족스럽다 · 분위기 차분하다" 같은 평이 자주 언급되었습니다. 클래식 칵테일과 논알콜 옵션 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 클래식 칵테일</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">진피즈 외</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모스코뮬 외</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마티니</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 안내</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">위스키 글라스</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 안내</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">논알콜 음료</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 안내 · <strong>가성비</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">간단 안주</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 안내</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">칵테일 바</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트 마무리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">논알콜 음료</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">2층 자리</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성동 151-29 이호빌딩 2층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/몰트바배럴" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 몰트바배럴 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 분위기·가격대', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">가격대</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">분위기</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>만선호프 삼성동</strong><br><span style="font-size:11px;color:#888780">야장·치킨</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F59E0B">15,000~28,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">치맥·대형스크린 단체</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>생활맥주 삼성코엑스 2호점</strong><br><span style="font-size:11px;color:#888780">캐주얼 펍</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0F6E56">12,000~24,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">치킨+맥주 2~4인</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>ASOBOY</strong><br><span style="font-size:11px;color:#888780">라이브 음악</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#4338CA">5,000~9,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">아지트·라이브·19시 오픈</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>못난이포차</strong><br><span style="font-size:11px;color:#888780">포차</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#92400E">15,000~20,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">새벽 3시 포차 감성</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>몰트바배럴</strong><br><span style="font-size:11px;color:#888780">칵테일 바</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#4338CA">20,000원~</strong></td>
<td style="padding:11px 10px;font-size:12.5px">차분한 마무리·2층</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 1차 분위기를 어떻게 잇나요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍗 5~10인 단체 치맥</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>만선호프 삼성동</strong> — 후라이드 19,000원·을지로골뱅이 28,000원·대형스크린. 회식 1차 후 단체 그대로 옮기기 좋음.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍺 2~4인 가벼운 한 잔</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>생활맥주 삼성코엑스 2호점</strong> — 앵그리버드와 감자 24,000원·골빔면 12,000원. 1차 일부만 자리 옮기는 자유로운 분위기.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🎵 라이브 음악·아지트</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>ASOBOY</strong> — 맥주 5,000원·칵테일 9,000원, 봉은사로 지하 1층. 2~4인 자리에 음악까지 챙기는 분위기.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌙 새벽 마무리 자리</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>못난이포차</strong> — 부추전 15,000원·골뱅이 18,000원, 새벽 3시까지 영업. 회식 늦은 자리 마무리.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍸 차분한 칵테일 마무리</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>몰트바배럴</strong> — 진피즈·모스코뮬 20,000원, 2층 자리. 1차 후 둘이 옮기는 차분한 대화 자리.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>만선호프 삼성동·생활맥주 삼성코엑스 2호점</strong>은 단체 자리가 인기 매장이라 5인 이상이면 사전 전화 예약 권장됩니다. 회식 1차 종료 직후 자리 옮기는 시간대(21~22시)는 일반 손님과 겹쳐 자리가 빠르게 찹니다.</li>
<li><strong>ASOBOY</strong>는 19:00 영업이라 1차가 늦게 끝나면 자리 옮기기 좋은 시간대가 됩니다. 라이브 음악 일정은 매장 공지가 우선이니 방문 전 확인하시는 편이 안전합니다.</li>
<li><strong>못난이포차</strong>는 새벽 3시까지 영업이지만 평일과 주말 마감 시간이 달라질 수 있습니다. 새벽 자리 잡으실 때는 매장에 미리 확인하시는 편이 안전합니다.</li>
<li><strong>몰트바배럴</strong>은 2층 자리에 좌석 수가 한정적입니다. 1차 후 2층 칵테일 자리로 옮기실 때는 사전 자리 확보(전화·매장 도착 후 자리 확인)가 안전합니다.</li>
<li>회식 후 음주 운전은 절대 금지입니다. 2호선·9호선·수인분당선 삼성역 대중교통 또는 대리운전 이용을 권장드립니다.</li>
<li>안주 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다. 본문 메뉴 표는 최신 매장 공지가 우선입니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5~10인 단체 회식 2차로 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>만선호프 삼성동</strong>이 1순위입니다. 대형스크린·생맥주·후라이드 치킨이 한 매장에 묶여 있어 단체 그대로 옮기기 좋습니다. 5인 이상은 사전 전화 예약 권장됩니다. 음식 단가가 조금 더 부담스럽다면 <strong>생활맥주 삼성코엑스 2호점</strong>이 1만원대 단가로 차순위 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 새벽까지 영업하는 2차 자리는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>못난이포차</strong>가 1순위입니다. 새벽 3시까지 포차 감성 영업이라 회식 1차가 22~23시에 끝나도 자리 옮기기 좋은 시간대 옵션입니다. 부추전 15,000원·골뱅이 18,000원·동태전 20,000원으로 단가 부담도 적습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 데이트나 둘이서 차분히 마무리하기 좋은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>몰트바배럴</strong>(2층 칵테일 바)이 1순위입니다. 진피즈·모스코뮬 20,000원·논알콜 음료까지 운영해 차분한 마무리 자리에 적합합니다. 라이브 음악이 있는 분위기를 원하시면 <strong>ASOBOY</strong>(맥주 5,000원·칵테일 9,000원)가 차순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가장 저렴하게 한 잔 더 마실 수 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>ASOBOY</strong>가 1순위입니다. 맥주 5,000원·양주 8,500원·칵테일 9,000원으로 본 가이드 5곳 중 술 단가가 가장 낮습니다. 안주 단품도 7,000원~로 1인 2~3만원선에 마무리할 수 있어 1차 후 캐주얼하게 한 잔 더 마시는 자리에 매칭이 좋습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 본격 이자카야 메뉴를 원하면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 본 가이드는 2차 자리 분위기에 집중했으므로 본격 이자카야 메뉴(꼬치·스끼야끼·신선회)는 <strong>삼성역 이자카야 가이드</strong>를 별도로 참고하시는 편이 좋습니다. 본 가이드 5곳 중 술·요리 본격 메뉴가 가장 가까운 매장은 <strong>못난이포차</strong>의 전·골뱅이 라인업이며, 1차 분위기를 이어 받기 좋습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>생활맥주 삼성코엑스 2호점·ASOBOY</strong>는 주차장 운영을 안내합니다. <strong>만선호프 삼성동·못난이포차·몰트바배럴</strong>은 인근 공영주차장 또는 대중교통이 더 편합니다. 회식 후 자리이므로 음주가 동반될 수 있어 2호선·9호선·수인분당선 삼성역 대중교통 또는 대리운전 이용을 권장드립니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/samseong/category/izakaya', text: '삼성역 이자카야·술집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#312E81,#1E1B4B);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">삼성역 859곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">삼성역 일대 859곳 중 야장·치킨·와인바·이자카야 카테고리 93곳에서 "1차 뒤 옮기는 2차 자리"에 어울리는 5곳을 추렸습니다. 본격 이자카야 메인 가이드(post 2)와 자리 성격을 분리해, 생맥주+치킨·캐주얼 펍·라이브 음악·포차·칵테일 바 다섯 결로 분산했습니다. 1차 분위기를 이어 받는 매장과 결을 다르게 가져가는 매장을 함께 묶었으니, 1차에서 마신 결을 보고 2차를 다르게 잡으시면 만족도가 안정적입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">5곳 모두 평점 4.4 범위로 비슷하지만, 분위기와 단가가 분명히 달라 자리 매칭이 갈립니다. 5~10인 단체면 <strong>만선호프 삼성동</strong>, 2~4인 캐주얼이면 <strong>생활맥주 삼성코엑스 2호점</strong>·<strong>ASOBOY</strong>, 새벽 자리면 <strong>못난이포차</strong>, 차분한 마무리면 <strong>몰트바배럴</strong>로 자리 인원·분위기에 맞춰 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">본 가이드는 단가가 가장 낮은 <strong>ASOBOY</strong>(맥주 5,000원·칵테일 9,000원)부터 가장 높은 <strong>몰트바배럴</strong>(칵테일 20,000원)까지 폭넓게 분산되어 있어 2차 예산에 맞춰 한 곳을 고를 수 있도록 구성했습니다. 본격 이자카야 메뉴(스끼야끼·꼬치·신선회)는 별도 가이드(삼성역 이자카야 BEST)를 참고하시는 편이 좋습니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 회식 후 음주 운전은 절대 금지이며, 2호선·9호선·수인분당선 삼성역 대중교통 또는 대리운전 이용을 권장드립니다.</p>`
    },
  ]
}

export default post
