// 삼성역 이자카야·술집 5곳 — 코엑스·테헤란로 직장인 검증 (식당별 unique 콘텐츠)
const post = {
  id: 2,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">코엑스·테헤란로 일대 직장인이 회식 1차로 자주 찾는 <strong>삼성역 이자카야·일식 술집</strong> 5곳을 정리하였습니다. 삼성역 일대 859곳에서 이자카야·일식 술집 카테고리 32곳을 추리고, 시그니처 메뉴·평점·리뷰 누적·예약 가능 여부를 함께 본 결과 다섯 곳을 골랐습니다. 꼬치집·신선회 술집·스키야키 정식·사케 소믈리에 매장·숙성회 코스까지 결이 모두 다르니, 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠르게 후보를 좁히실 수 있습니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">859곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">삼성역·코엑스·테헤란로</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">이자카야 카테고리</p><p style="font-size:20px;font-weight:600;margin:0">32곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">필터링 후 5곳 선정</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.4</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">7,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">단품 꼬치 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 어떤 자리에 어디가 맞나요', gradientStyle: { from: '#4338CA', to: '#1E1B4B' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #4338CA">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">팀 회식 1차에 가성비·프라이빗룸까지 챙긴다면 <strong>수다 삼성1호점</strong> — 스끼야끼 33,000원·모듬숙성회 48,000원에 프라이빗룸·새벽 2시까지 영업이 묶인 일식 이자카야입니다. 꼬치 한 접시에 술 한 잔이 목적이면 <strong>야키도리 수다</strong> (모듬꼬치 5종 18,000원·새벽 2시 마감). 신선한 회·해산물 안주가 핵심이면 <strong>동어동락 삼성2호점</strong> (활고등어회 45,000원·새벽 2시). 사케 페어링이 필요하면 <strong>란주쿠 삼성점</strong> (사케 소믈리에·시작가 7,000원). 숙성회+덮밥류 코스로 가벼운 데이트라면 <strong>키친바락</strong> (모듬 숙성회 40,000원, 디저트 평이 좋은 매장).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 코엑스·테헤란로 동선</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 가격대 7,000~65,000원</strong> — 단품 꼬치부터 회식 코스까지 폭넓게 커버</li>
<li><strong>네이버 플레이스 평점 4.3 이상</strong> — 이자카야 카테고리 평균선 위</li>
<li><strong>시그니처 메뉴가 명확한 식당</strong> — 꼬치·스키야키·숙성회·사케 페어링·코스 등 결이 분명한 곳</li>
<li><strong>삼성역·삼성중앙역·선릉역 도보권</strong> — 회식 1차 직장인 동선 우선</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">삼성역 일대 이자카야·일식 술집 32곳 중 시그니처 메뉴·예약 환경·운영 안정성이 안정적인 식당 5곳을 추렸습니다. 회식 1차로 적합한 큰 매장(수다·동어동락)과 데이트·가벼운 술자리에 적합한 작은 매장(키친바락·야키도리 수다)을 함께 포함해 자리 성격이 달라도 한 곳은 맞도록 분산했습니다. 메뉴 결이 비슷한 동일 브랜드 분점(수다 삼성2호점 등)은 1호점·2호점 중 평점·메뉴 다양성이 더 큰 한 곳만 골랐습니다.</p>`
    },

    { type: 'h2', id: 'suda', text: '수다 삼성1호점 — 스키야키·모듬숙성회 회식 1차 1순위', gradientStyle: { from: '#4338CA', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240220_240%2F1708395066437pYJiF_JPEG%2FIMG_5283.jpeg" alt="수다 삼성1호점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#4338CA,#1E1B4B)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#4338CA;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 회식 1차 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 285건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 25,000원~48,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🏠 프라이빗룸</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">테헤란로 87길 53, 삼성역 4번 출구에서 도보로 접근 가능한 일식 이자카야입니다. <strong>스끼야끼·사시미·프라이빗룸</strong>이 한 매장에 묶여 있어 4~8인 회식 1차 자리에 적합합니다. 새벽 2시까지 영업하므로 1차가 늦게 끝나도 자리 회수 압박이 적습니다. 모듬숙성회 2인 48,000원·스끼야끼 33,000원이 시그니처라인이고, 단품 꼬치(34,000원)와 사이드(우니한판 25,000원)까지 더하면 4인 기준 인당 4~5만원선이 표준입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"분위기 좋다 · 맛있다 · 서비스 친절하다" 같은 평이 자주 언급되었습니다. 프라이빗룸 회식 자리에 만족도가 함께 묶여 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모듬숙성회 2인</p><p style="font-size:12px;color:#5f5e5a;margin:0">48,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모듬꼬치</p><p style="font-size:12px;color:#5f5e5a;margin:0">34,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">스끼야끼</p><p style="font-size:12px;color:#5f5e5a;margin:0">33,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">조개탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">28,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우니한판</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우니단새우</p><p style="font-size:12px;color:#5f5e5a;margin:0">35,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">회식 1차</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">프라이빗룸</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">새벽 2시 마감</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">사시미 시그니처</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 테헤란로87길 53 · <strong>🕐 영업</strong> 새벽 2시까지 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-596-3584
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/수다 삼성1호점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 수다 삼성1호점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'yakitori', text: '야키도리 수다 — 꼬치 한 접시에 술 한 잔, 새벽 2시 마감', gradientStyle: { from: '#7C3AED', to: '#A855F7' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240219_146%2F1708319400540pXVH4_JPEG%2FIMG_5189.jpeg" alt="야키도리 수다 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#7C3AED,#4338CA)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 285건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 11,000원~35,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 새벽 2시 마감</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성동 153-29 지하 1층, 꼬치와 사이드 안주에 집중한 작은 일식 술집입니다. <strong>모듬꼬치 5종 18,000원·치킨가라아게 12,000원·나고야 날개튀김 14,000원</strong>이 핵심 안주이며, 단가가 낮아 2~3인 가벼운 술자리에 부담이 적습니다. 데이트 평가가 함께 묶여 있어 회식 자리보다는 둘이 마시고 가는 동선에 더 가까운 매장입니다. 새벽 2시까지 영업이라 1차 후 자리를 잠시 옮기고 싶은 분에게도 옵션이 됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"모둠꼬치 맛있다 · 가라아게 인기 · 분위기 좋다" 같은 평이 자주 언급되었습니다. 꼬치 한 접시에 사이드 안주가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모듬꼬치 5종</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모듬 오뎅</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우니단새우</p><p style="font-size:12px;color:#5f5e5a;margin:0">35,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">나고야 날개튀김</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">치킨 난반</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">치킨가라아게</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>가성비</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">2~3인 술자리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">꼬치 시그니처</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">새벽 2시</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성동 153-29 지하1층 · <strong>🕐 영업</strong> 새벽 2시까지 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/야키도리 수다" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 야키도리 수다 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'dongeo', text: '동어동락 삼성2호점 — 신선회·해산물 안주 우선', gradientStyle: { from: '#1E40AF', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240227_99%2F1708995428066HJDXi_JPEG%2FIMG_0184.jpeg" alt="동어동락 삼성2호점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#1E40AF,#0EA5E9)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#1E40AF;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🐟 회·해산물 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 285건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 32,000원~49,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 새벽 2시</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼성로 92길 27 1층, <strong>일식·이자카야·야장</strong>이 결합된 매장입니다. 활고등어회·봄도다리 국수회 같은 제철 해산물이 메뉴의 절반 이상을 차지하므로, 회·해산물 중심 안주를 원하는 자리에 가장 적합합니다. 데이트·회식 평가가 함께 묶이고 단체석도 운영해 4~8인 모임도 수용 가능합니다. PM 4~AM 2 영업이라 늦은 저녁 1차나 2차로 자리를 잡기에도 좋습니다. 주차 가능·예약 운영을 안내하므로 평일 저녁이라도 사전 확인을 권장드립니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"재료 신선하다 · 분위기 좋다 · 맛있다" 같은 평이 자주 언급되었습니다. 활어회 신선도와 술자리 분위기가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 제철 해산물 중심</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">활고등어회+양념장+초밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">봄도다리 국수회</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,900원 · 3~5월 제철</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">봄도다리 세꼬시</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,900원 · 제철</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">국수회+세꼬시 세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">60,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">단새우+우니+감태+연어알</p><p style="font-size:12px;color:#5f5e5a;margin:0">59,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">통영 삼배체굴 4pcs</p><p style="font-size:12px;color:#5f5e5a;margin:0">30,000원 · 한정</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">신선회</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 삼성로92길 27 1층 · <strong>🕐 영업</strong> PM 4~AM 2 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1350-4938
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/동어동락 삼성2호점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 동어동락 삼성2호점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'lanjuku', text: '란주쿠 삼성점 — 사케 페어링·시작가 7,000원', gradientStyle: { from: '#312E81', to: '#6366F1' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240419_201%2F1713511812691J0OYK_JPEG%2FIMG_3812.jpeg" alt="란주쿠 삼성점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#312E81,#6366F1)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#312E81;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍶 사케 페어링</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 122건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 7,000원~65,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🔓 코르키지 없음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">봉은사로 82길 31, <strong>사케 소믈리에 운영·코르키지 없음</strong>이 핵심 차별점인 일식 이자카야입니다. 시작가 7,000원으로 본 가이드 5곳 중 가장 낮아 가벼운 한 잔에 안주 한 접시만 곁들이고 싶을 때 부담이 적습니다. 와라야키(짚불 그릴) 18,000원·한우1++ 채끝살 65,000원이 양극단으로 묶여 있어 자리 성격에 따라 단가 조절이 자유롭습니다. 17:30 영업 시작이라 1차 저녁 시간대 진입에 무리가 없습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 재료 신선하다 · 재방문 의사 있음" 같은 평이 자주 언급되었습니다. 사케 페어링과 안주 만족도가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우1++ 채끝살</p><p style="font-size:12px;color:#5f5e5a;margin:0">65,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">와라야키 살짝 익힌 안주</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">제주갈치 안주</p><p style="font-size:12px;color:#5f5e5a;margin:0">35,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">초당옥수수 카키아게</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해산물모즈쿠</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">포테이토사라다</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>가성비</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">사케 소믈리에</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">코르키지 없음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">단체가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 봉은사로82길 31 · <strong>🕐 영업</strong> 17:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1357-3844
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/란주쿠 삼성점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 란주쿠 삼성점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'kitchen-barack', text: '키친바락 — 숙성회·디저트, 가벼운 데이트 옵션', gradientStyle: { from: '#6366F1', to: '#A855F7' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241028_88%2F1730064793773uF1u4_JPEG%2FIMG_8273.jpeg" alt="키친바락 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block;background:linear-gradient(135deg,#6366F1,#A855F7)" onerror="this.style.display='none'" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#6366F1;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💑 가벼운 데이트</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 82건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 20,000원~55,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍰 디저트 평 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">대치동 956-11, 삼성역 4번 출구에서 551m 거리의 작은 일식 이자카야입니다. 본 가이드 5곳 중 <strong>리뷰 표본이 가장 작지만 평점은 카테고리 평균선</strong>이고, 숙성회·고등어 초절임·문어 트러플 같은 코스성 단품이 강합니다. 리뷰 키워드에 "디저트·크림 카레 덮밥"이 함께 묶여 있어 식사 마무리에 가벼운 디저트까지 챙기고 싶은 데이트 자리에 더 가깝습니다. 단가가 1인 4~5만원선이라 본격 회식보다는 2~3인 자리에 더 적합합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"서비스 친절하다 · 재료 신선하다 · 분위기 좋다 · 재방문 의사 있음" 같은 평이 자주 언급되었습니다. 숙성회 만족도와 매장 분위기가 함께 묶이는 후기 패턴입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모듬 숙성회</p><p style="font-size:12px;color:#5f5e5a;margin:0">40,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">광어 단새우 성게알 말이</p><p style="font-size:12px;color:#5f5e5a;margin:0">55,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">초절임 고등어</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">인생편육 (문어 트러플)</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">닭껍질 만두</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">크림 카레 덮밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>디저트성</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">2~3인 자리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">숙성회</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 강남구 대치동 956-11 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 매장 공지 우선
</div>
<div style="text-align:center"><a href="/dinner/samseong/restaurant/키친바락" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 키친바락 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·가격·자리 성격', gradientStyle: { from: '#10B981', to: '#059669' } },
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
<td style="padding:11px 10px"><strong>수다 삼성1호점</strong><br><span style="font-size:11px;color:#888780">이자카야·일식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#4338CA">25,000~48,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">스끼야끼+프라이빗룸 + 새벽 2시</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>야키도리 수다</strong><br><span style="font-size:11px;color:#888780">이자카야·꼬치</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#7C3AED">11,000~35,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">꼬치 5종 18,000원 + 새벽 2시</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>동어동락 삼성2호점</strong><br><span style="font-size:11px;color:#888780">일식·이자카야·야장</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">285건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#1E40AF">32,000~49,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">활어회·해산물 안주 중심</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>란주쿠 삼성점</strong><br><span style="font-size:11px;color:#888780">이자카야·일식·야장</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">122건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#312E81">7,000~65,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">사케 소믈리에 + 코르키지 없음</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>키친바락</strong><br><span style="font-size:11px;color:#888780">이자카야</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">82건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#6366F1">20,000~55,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">숙성회+디저트, 2~3인 데이트</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 자리 성격에 맞게', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">👥 4~8인 팀 회식 1차</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>수다 삼성1호점</strong> — 프라이빗룸·스끼야끼·모듬숙성회 조합. 새벽 2시 영업이라 자리 회수 압박이 적습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍶 사케 페어링 자리</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>란주쿠 삼성점</strong> — 사케 소믈리에 운영·코르키지 없음. 본인 사케 가져가 페어링하는 자리에 적합합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🐟 회·해산물 안주 우선</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>동어동락 삼성2호점</strong> — 활고등어회·봄도다리·통영 굴까지 제철 해산물 라인업. 회식·데이트 모두 수용.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍢 꼬치 + 한 잔, 2~3인</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>야키도리 수다</strong> — 모듬꼬치 5종 18,000원·가라아게 12,000원으로 단가 부담이 낮은 작은 술자리.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 데이트·기념일 가벼운 자리</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>키친바락</strong> — 숙성회+디저트성 덮밥류, 2~3인 자리에 분위기가 잘 맞습니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>수다 삼성1호점·동어동락 삼성2호점</strong>은 새벽 2시까지 영업입니다. 1차가 늦게 끝나도 자리 회수 압박이 적지만, 마감 1시간 전 라스트오더가 있으니 메뉴 추가는 미리 챙겨두시는 편이 안전합니다.</li>
<li><strong>수다 삼성1호점</strong>의 프라이빗룸은 인원 수에 따라 사전 예약이 필수입니다. 평일 저녁이라도 4인 이상이면 당일 전화 예약을 권장드립니다.</li>
<li><strong>란주쿠 삼성점</strong>은 코르키지 없음(BYOB) 운영이라 본인 사케·와인을 가져가 페어링 가능합니다. 단, 매장 공지가 우선이니 방문 전 확인이 안전합니다.</li>
<li><strong>동어동락 삼성2호점</strong>의 봄도다리 라인업은 3~5월 제철 한정 메뉴입니다. 시즌 외 방문 시에는 활고등어회·연어알 라인업으로 대체됩니다.</li>
<li><strong>키친바락</strong>은 리뷰 표본이 작은 매장(82건)이므로 처음 방문하시는 분은 모듬 숙성회 40,000원·인생편육 20,000원 같은 시그니처 위주로 주문하시면 만족도 편차가 줄어듭니다.</li>
<li>이자카야는 새벽 영업 매장이 많아 주말과 평일 마감 시간이 다를 수 있습니다. 본 가이드 기준일(2026년 5월) 이후 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 삼성역 이자카야 회식 1차에 가장 무난한 곳은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>수다 삼성1호점</strong>이 1순위입니다. 스끼야끼 33,000원·모듬숙성회 48,000원·프라이빗룸·새벽 2시 마감이 한 매장에 묶여 있어 4~8인 회식에 적합합니다. 단체석을 동시에 운영하는 옵션이라면 <strong>동어동락 삼성2호점</strong>도 차순위로 좋습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가장 저렴하게 한 잔 가볍게 마실 수 있는 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>란주쿠 삼성점</strong>의 시작가 7,000원이 본 가이드 5곳 중 가장 낮습니다. 포테이토사라다 13,000원·초당옥수수 카키아게 15,000원 같은 사이드 안주로 단가를 1인 2~3만원선에 맞출 수 있습니다. 꼬치 중심이면 <strong>야키도리 수다</strong>의 모듬꼬치 5종 18,000원이 차순위.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 데이트·기념일 자리로 적합한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>키친바락</strong>이 1순위입니다. 모듬 숙성회 40,000원과 디저트성 덮밥류가 함께 묶여 있어 2~3인 자리에 분위기가 잘 맞습니다. 시그니처 메뉴가 강한 데이트라면 <strong>동어동락 삼성2호점</strong>의 단새우+우니+감태+연어알 59,000원도 좋은 선택입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 새벽까지 영업하는 매장은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>수다 삼성1호점·야키도리 수다·동어동락 삼성2호점</strong>이 새벽 2시까지 영업합니다. 1차가 늦어져도 자리 회수 압박이 없고, 2차로 동선이 짧은 매장입니다. 단, 마감 1시간 전 라스트오더 운영 매장이 많으니 추가 메뉴는 미리 챙겨두시는 편이 좋습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>수다 삼성1호점·동어동락 삼성2호점·란주쿠 삼성점·야키도리 수다</strong>는 주차장 운영을 안내합니다. <strong>키친바락</strong>은 인근 공영주차장 또는 대중교통이 더 편리합니다. 회식 자리는 대부분 음주가 동반되므로 2호선·9호선·수인분당선 삼성역 대중교통을 권장드립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 비슷한데 어느 곳이 가장 신뢰할 수 있나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 평점은 5곳 모두 4.3~4.4 범위로 비슷하지만, 식당별 강점이 다릅니다. 회식·프라이빗룸은 <strong>수다 삼성1호점</strong>, 해산물 안주는 <strong>동어동락 삼성2호점</strong>, 사케 페어링은 <strong>란주쿠 삼성점</strong> 순으로 매칭됩니다. 본 가이드는 평점뿐 아니라 시그니처 메뉴·자리 성격을 기준으로 5곳을 분산했으니, 자리 목적에 맞춰 고르시면 됩니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/samseong/category/izakaya', text: '삼성역 이자카야·술집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#4338CA,#7C3AED);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">삼성역 859곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">삼성역 일대 859곳에서 이자카야·일식 술집 카테고리 32곳을 추리고, 시그니처 메뉴·자리 성격·운영 시간·예약 환경 네 가지를 함께 본 결과 5곳으로 압축했습니다. 회식 1차 큰 매장(수다·동어동락)과 가벼운 술자리 작은 매장(야키도리 수다·키친바락·란주쿠)을 함께 포함해 4~8인 회식부터 2~3인 데이트까지 한 곳에서 골라 쓸 수 있도록 분산했습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">5곳 모두 평점 4.3~4.4 범위로 비슷하지만, 시그니처 메뉴와 자리 성격이 달라 선택지는 자연스럽게 갈립니다. 평점만으로는 한 곳을 고르기 어려우니, 자리 인원·예산·동선을 기준으로 비교표와 상황별 추천을 함께 보시면 빠릅니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>키친바락</strong>은 리뷰 표본이 82건으로 5곳 중 가장 작습니다. 평점은 4.3으로 카테고리 평균선이지만, 처음 방문하시는 분은 시그니처 메뉴(모듬 숙성회·인생편육) 위주로 주문하시면 만족도 편차를 줄일 수 있습니다. 검증 표본이 가장 큰 식당은 <strong>수다 삼성1호점</strong>(285건)·<strong>동어동락 삼성2호점</strong>(285건)·<strong>야키도리 수다</strong>(285건) 세 곳입니다.</p>
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
