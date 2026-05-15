// 영통구청 회식 장소 추천 5곳 — 매탄동 단체석·룸 비교 (식당별 unique 콘텐츠)
const post = {
  id: 13,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>영통구청</strong> 회식 장소를 매탄동·신동 일대 548곳 중에서 5곳으로 추렸습니다. 단체석·룸 운영 여부, 5~12인 수용 가능성, 1인 단가 2~5만원선, 카테고리 분산(한우·돼지구이·곱창·감자탕·중식)을 함께 고려했고, 부서 회식·팀 디너·간단한 외부 미팅까지 상황별로 맞을 만한 식당을 분리해 두었습니다. 본문 한 줄 결론 박스에서 1순위·차순위를 먼저 확인하실 수 있습니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">548곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">매탄·신동·영통구 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.7</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.3 ~ 4.8</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 블로그 후기</p><p style="font-size:20px;font-weight:600;margin:0">3,008건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 블로그 합계</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">1인 단가대</p><p style="font-size:20px;font-weight:600;margin:0">2~5만원</p><p style="font-size:11px;color:#888780;margin:4px 0 0">회식 표준 범위</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">팀·부서 디너이면 <strong>고반식당 수원영통구청점</strong> — 블로그 후기 954건 누적, 박포 생갈비 19,000원 시작, 주차·예약 동시 가능. 단체 한우·한돈 비교 회식이면 <strong>양화돼교</strong> — 한우등심 600g 79,000원·단체가능 태그까지 매칭. 곱창·전골 회식이면 <strong>순우리곱창 본점</strong> (한우곱창전골 49,000원). 부장님 식사·간단한 점심 회식이면 <strong>노대감감자탕매탄본점</strong> (뼈다귀감자탕 대 39,000원). 짜장면·짬뽕 마무리 자리이면 <strong>야수각</strong> (탕짜 22,000원·탕짬 27,000원).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 5가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>단체석·룸 운영 또는 5인 이상 수용 가능</strong> — 회식 카테고리 기본 조건</li>
<li><strong>1인 단가 2~5만원선</strong> — 부서 회식·팀 디너 표준 가격대</li>
<li><strong>네이버 블로그 후기 90건 이상</strong> — 평점 표본이 흔들려도 후기 본문이 검증 자료</li>
<li><strong>매탄동·신동 영통구청 도보권</strong> — 부서 회식 동선 단축</li>
<li><strong>카테고리 분산</strong> — 한우(소고기구이)·돼지구이+한돈·곱창·감자탕·중식 5종</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">영통구청 일대 548곳에서 단체석·룸 운영이 가능한 후보는 약 50곳이었습니다. 같은 카테고리가 겹치지 않도록 5종으로 분산해 최종 5곳을 추렸고, 평점은 네이버 플레이스 표기를 그대로 인용하되 신뢰 신호는 <strong>네이버 블로그 누적 후기 수</strong>를 더 비중 있게 보았습니다. 평점이 4.0대 후반으로 표기된 식당도 블로그 후기가 50건 미만이면 후보에서 제외했습니다.</p>`
    },

    { type: 'h2', id: 'goban', text: '고반식당 수원영통구청점 — 팀 디너 한우·한돈 단체 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240402_151%2F1712037617356PcuKD_JPEG%2FKakaoTalk_20240314_101950315_15.jpg" alt="고반식당 수원영통구청점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 회식·모임 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 블로그 954건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 16,000원~93,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 블로그 후기 누적 1위</strong>인 한우·한돈 전문 식당입니다. 매탄동 1265-5 1층, 영통구청 사거리에서 도보 거리이며 주차장과 예약을 동시에 운영합니다. 박포 생갈비 19,000원·박포 양념갈비 18,000원으로 부서 회식 시작 가격이 부담스럽지 않고, 인원이 늘어나면 <strong>어울림 모둠(840g) 93,000원</strong>이나 <strong>우대갈비 270g 39,900원</strong>으로 한 단계 올려 잡기 좋습니다. 16:00 영업 시작이라 점심 단체 회식보다는 평일 저녁 6~7시 입장, 토·일 저녁 시간대가 안정적입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"서비스가 좋다 · 맛있다 · 재료가 신선하다" 같은 평이 자주 언급되었습니다. 한우·한돈 비교 라인업과 직원 응대가 함께 묶여 누적되는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240402_151%2F1712037617356PcuKD_JPEG%2FKakaoTalk_20240314_101950315_15.jpg" alt="고반식당 수원영통구청점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240402_58%2F1712037637812b5TVg_JPEG%2FKakaoTalk_20240314_101950315_05.jpg" alt="고반식당 수원영통구청점 갈비 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240417_26%2F1713316313684bUOff_PNG%2F%25BF%25B5%25C5%25EB%25B1%25B8%25C3%25BB%25C1%25A1_%25B1%25E2%25B8%25B0_%25BB%25FD%25B8%25C6%25C1%25D6_3%252B1_%25C0%25CC%25BA%25A5%25C6%25AE%2528ver2%2529.png" alt="고반식당 수원영통구청점 이벤트" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 한우·한돈 라인업</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">박포 생갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원 · <strong>회식 시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">박포 양념갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우대갈비 270g</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,900원 · <strong>프리미엄</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">고반한우 안심 130g</p><p style="font-size:12px;color:#5f5e5a;margin:0">49,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">숙성생삼겹살</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">어울림 모둠 840g</p><p style="font-size:12px;color:#5f5e5a;margin:0">93,000원 · <strong>단체 시그니처</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">팀 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">한우·한돈</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1265-5 1층 · <strong>🕐 영업</strong> 16:00 시작 · <strong>🚗 주차</strong> 매장 주차장 운영 · <strong>📞 전화</strong> 07-1439-0736
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/고반식당 수원영통구청점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 고반식당 수원영통구청점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'yanghwa', text: '양화돼교 — 한우·한돈 비교 회식 + 단체가능 태그 확보', gradientStyle: { from: '#DC2626', to: '#F97316' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20240906_48%2F1725588273886by8hE_JPEG%2Fimage.jpg" alt="양화돼교 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 한우+한돈 비교</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 블로그 192건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 15,000원~90,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">👥 단체가능 태그</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1265-4 2층 202호에 위치한 한우·한돈 비교 라인업 식당입니다. 본 가이드 5곳 중 유일하게 <strong>"단체가능·가성비·주차가능·데이트·깔끔한곳"</strong> 5개 태그가 모두 매칭되어, 팀 회식 동선이 점심·저녁 모두 가능하다는 점이 차별점입니다. 1인 시작가 15,000원(생삼겹살·한돈 명품냉삼) 라인부터 <strong>한우등심 압도적 가성비 600g 79,000원</strong>, <strong>한우 한돈 세트 600g 90,000원</strong>까지 인원수·예산에 따라 단계별로 잡기 좋습니다. 15:00 영업 시작이라 평일 저녁 회식·주말 점심 가족 모임 양쪽 옵션으로 잘 맞습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"분위기가 좋다 · 양이 많다 · 맛있다" 같은 평이 자주 언급되었습니다. 한우·한돈 동시 라인업과 인테리어가 함께 묶여 누적되는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250913_173%2F175771987413641DRq_JPEG%2F1000021239.jpg" alt="양화돼교 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20240906_145%2F17255883032896p8GH_JPEG%2Fimage.jpg" alt="양화돼교 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250913_44%2F1757719872041GJql7_JPEG%2F1000021421.jpg" alt="양화돼교 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 한우·한돈 비교 라인업</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한돈 명품냉삼</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원 · <strong>시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">일미리꽃삼</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">제주 흑 오겹살</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">NO9차돌박이</p><p style="font-size:12px;color:#5f5e5a;margin:0">28,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우등심 600g</p><p style="font-size:12px;color:#5f5e5a;margin:0">79,000원 · <strong>한우 시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 한돈 세트 600g</p><p style="font-size:12px;color:#5f5e5a;margin:0">90,000원 · <strong>비교 세트</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한우+한돈</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">데이트 매장</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1265-4 2층 202호 · <strong>🕐 영업</strong> 15:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1433-1663
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/양화돼교" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827;">👉 양화돼교 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'sunoori', text: '순우리곱창 본점 — 곱창·전골 회식 + 블로그 1,052건 표본', gradientStyle: { from: '#9F1239', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250916_285%2F1758021436517VK1nh_JPEG%2FScreenshot_20250301_181556_Samsung_Internet.jpg" alt="순우리곱창 본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#9F1239;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">📊 표본 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 블로그 1,052건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 3,500원~59,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">⏳ 웨이팅 매장</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 네이버 블로그 후기 1,052건으로 표본 최다</strong>인 곱창 전문점입니다. 매탄동 873 효원빌라 1층, 영통구청 도보권에 위치합니다. 한우 알곱창·납작대창·소막창을 한 자리에서 비교할 수 있고, 4명 이상 회식이면 <strong>한우곱창전골 중(2인) 49,000원·대(3~4인) 59,000원</strong>을 메인으로 잡고 알곱창 250g(25,000원)을 1~2개 추가하는 흐름이 가장 흔합니다. 16:30 영업 시작이라 점심 회식보다는 저녁 회식·1차 자리에 맞으며, 웨이팅 매장으로 표기되어 있으니 5인 이상이면 평일에도 예약을 권장드립니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 웨이팅이 있다 · 재방문 의사 · 서비스가 좋다" 같은 평이 자주 언급되었습니다. 알곱창·대창 회전이 빠르고 직원 응대가 함께 묶여 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 곱창·대창·전골</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">날치알볶음밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,500원 · <strong>최저가 사이드</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">냉김치말이국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">납작대창 250g+</p><p style="font-size:12px;color:#5f5e5a;margin:0">24,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">알곱창(한우) 250g+</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우곱창전골 중(2인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">49,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우곱창전골 대(3~4인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">59,000원 · <strong>회식 메인</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">곱창 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 권장</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">전골 메인</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 873 효원빌라 · <strong>🕐 영업</strong> 16:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1310-8932
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/순우리곱창 본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 순우리곱창 본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'nodegam', text: '노대감감자탕매탄본점 — 부장님 식사·점심 단체 옵션', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210813_241%2F1628832304499qFijL_JPEG%2F%25B3%25EB%25B4%25EB%25B0%25A8%25B0%25A8%25C0%25DA%25C5%25C1_%25B0%25A3%25C6%25C7.jpg" alt="노대감감자탕매탄본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍲 부장님 식사 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 블로그 443건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 29,000원~45,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍚 점심 단체 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 866-18에 위치한 감자탕 전문점으로, 본 가이드 5곳 중 유일하게 <strong>국·찌개·전골 라인업</strong>으로 회식 메뉴를 구성할 수 있는 식당입니다. 뼈다귀감자탕 소(29,000원)~대(39,000원), 묵은지뼈찜 중(38,000원)~대(45,000원) 라인으로 인원수에 맞게 단계별 주문이 가능하고, 4~6인 부서 점심 회식이 자주 잡히는 매장입니다. 고기 라인업이 부담스러운 부장님 식사·접대 자리에도 부드럽게 들어맞으며, 평점 4.8 표기와 블로그 443건이 함께 매칭됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 뼈찜 시그니처 · 볶음밥 강추" 같은 평이 자주 언급되었습니다. 메인 메뉴 만족도와 마무리 볶음밥이 함께 묶여 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 5종 — 인원별 사이즈</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">뼈다귀감자탕 소</p><p style="font-size:12px;color:#5f5e5a;margin:0">29,000원 · <strong>2인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">뼈다귀감자탕 중</p><p style="font-size:12px;color:#5f5e5a;margin:0">34,000원 · <strong>3~4인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">뼈다귀감자탕 대</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원 · <strong>4~6인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">묵은지뼈찜 중</p><p style="font-size:12px;color:#5f5e5a;margin:0">38,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">묵은지뼈찜 대</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">볶음밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">마무리 추천 메뉴</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 단체</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">부장님 식사</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">전골 메인</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">국물맛 검증</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 866-18 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 07-1328-5070
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/노대감감자탕매탄본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 노대감감자탕매탄본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'yasugak', text: '야수각 — 짜장·짬뽕 마무리 회식 + 가성비 단체석', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230629_219%2F16880484653708jLC8_JPEG%2F1687877413942.jpg" alt="야수각 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F59E0B;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 마무리 회식 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 블로그 451건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,000원~27,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💸 가성비 단체</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1172 1층 야수각은 짜장·짬뽕·탕수육 라인을 1인 1만원 안팎으로 잡을 수 있는 중식당입니다. 본 가이드 5곳 중 <strong>1인 부담이 가장 적은 회식 옵션</strong>으로, 1차 고기 회식 다음 2차 가벼운 마무리 또는 점심 단체 식사 자리에 잘 맞습니다. 4명 이상이면 <strong>탕짜(탕수육+짜장면) 22,000원·탕짬(탕수육+짬뽕) 27,000원</strong>을 메인 세트로 잡고 유니짜장면(8,000원)·간짬뽕(15,000원)을 라인업에 추가하는 흐름이 흔합니다. 11:30 영업 시작이라 점심·저녁 모두 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"주차가 편하다 · 맛있다 · 매장이 깔끔하다" 같은 평이 자주 언급되었습니다. 가성비 단품 라인업과 매장 동선이 함께 묶여 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 짜장·짬뽕·세트</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">유니짜장면</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원 · <strong>시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">육미간짜장</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">야수간짜장(고기폭탄)</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">간짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">탕짜(탕수육+짜장면)</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원 · <strong>회식 세트</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">탕짬(탕수육+짬뽕)</p><p style="font-size:12px;color:#5f5e5a;margin:0">27,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">2차 마무리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 단체</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">짜장·짬뽕</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1172 1층 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 07-1486-9307
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/야수각" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 야수각 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 인원·예산·시그니처 매칭', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·블로그</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">1인 시작가</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">회식 차별점</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>고반식당 수원영통구청점</strong><br><span style="font-size:11px;color:#888780">한우·한돈 구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">블로그 954건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">16,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">팀 디너 한우+한돈 + 예약·주차 동시 가능</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>양화돼교</strong><br><span style="font-size:11px;color:#888780">한우·한돈 구이</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">블로그 192건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">15,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">단체가능 태그 + 한우·한돈 비교 세트 90,000원</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>순우리곱창 본점</strong><br><span style="font-size:11px;color:#888780">곱창·전골</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">블로그 1,052건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#9F1239">24,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">한우곱창전골 + 표본 최다 검증</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>노대감감자탕매탄본점</strong><br><span style="font-size:11px;color:#888780">감자탕·뼈찜</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">블로그 443건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">29,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">점심 단체·부장님 식사 + 인원별 사이즈 3종</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>야수각</strong><br><span style="font-size:11px;color:#888780">중식·짜장·짬뽕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">블로그 451건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F59E0B">8,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">2차 마무리·점심 단체 + 1인 1만원 안팎</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 회식은 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">👥 팀·부서 디너 (8~12인)</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>고반식당 수원영통구청점</strong> — 박포 갈비 라인 + 어울림 모둠 840g 93,000원으로 인원 단위가 커도 흐름이 깔끔합니다. 예약·주차 동시 가능이라 회식 동선이 정리됩니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 한우·한돈 비교 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>양화돼교</strong> — 한우등심 600g 79,000원과 한우 한돈 세트 600g 90,000원을 같은 자리에서 비교 가능. 단체가능 태그까지 매칭됩니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍢 곱창·전골 4~6인 자리</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>순우리곱창 본점</strong> — 한우곱창전골 대 59,000원을 메인으로 알곱창·대창을 추가 주문. 블로그 1,052건 표본으로 검증.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍚 부장님 식사·점심 단체</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>노대감감자탕매탄본점</strong> — 감자탕·뼈찜 라인이 부드러워 어른 자리에 잘 맞습니다. 인원에 맞춰 소·중·대 사이즈로 흐름 조정 가능.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 2차 마무리·가성비 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>야수각</strong> — 탕짜·탕짬 세트로 6~8인 자리도 4~5만원선 마무리 가능. 1차 고기 회식 다음 2차 옵션 1순위.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>고반식당·양화돼교·순우리곱창</strong>은 매장 주차장 또는 인접 빌딩 주차장을 운영합니다. 5인 이상 회식이면 평일에도 예약을 권장드리며, 영통구청 사거리 일대는 평일 저녁 6~8시 주차장 만차가 자주 발생합니다.</li>
<li><strong>고반식당·양화돼교</strong>는 15:00~16:00 영업 시작이라 점심 회식 옵션으로는 맞지 않습니다. 점심 단체이면 노대감감자탕·야수각 두 곳을 우선 검토하시기 바랍니다.</li>
<li><strong>순우리곱창 본점</strong>은 웨이팅 매장으로 표기되어 있어 5~10인 단체는 평일에도 사전 전화 예약이 안전합니다. 16:30 영업 시작이라 17시 전후 입장이 회전 흐름상 가장 안정적입니다.</li>
<li><strong>노대감감자탕</strong>은 영업시간 표기가 누락되어 있어, 점심 단체 예약 전 반드시 매장 전화(07-1328-5070)로 시간·인원 수용 가능 여부를 확인하시기 바랍니다.</li>
<li><strong>야수각</strong>은 회전이 빠른 단품 중식이라 8인 이상 단체는 매장에 미리 입장 시간을 알려주는 편이 좋습니다. 인근 공영주차장 또는 매탄프라자 빌딩 주차장 동선을 미리 확인하시기 바랍니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능성이 있습니다. 회식 예약 시 1인당 예산을 한 번 더 매장에 확인하시는 편이 안전합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 영통구청에서 가장 가성비 좋은 회식 장소는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 1인 부담이 가장 적은 옵션은 <strong>야수각</strong>(짜장면 8,000원 시작, 탕짜·탕짬 세트 22,000~27,000원)입니다. 고기 회식이면 <strong>양화돼교</strong>의 한돈 명품냉삼 15,000원, <strong>고반식당</strong>의 숙성생삼겹살 16,000원이 시작 가격으로 가장 부담이 적습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 8~12인 팀 디너로 잡으려면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>고반식당 수원영통구청점</strong>이 1순위입니다. 박포 갈비 19,000원선 + 어울림 모둠 840g 93,000원으로 인원이 늘어도 메뉴 흐름이 깔끔하고, 주차·예약이 동시 가능합니다. 한우 비교 라인업이 필요하면 <strong>양화돼교</strong>의 한우 한돈 세트 600g 90,000원이 차순위 옵션입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 회식 가능한 곳은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>노대감감자탕매탄본점</strong>(감자탕 소·중·대 라인)과 <strong>야수각</strong>(11:30 영업 시작)이 점심 단체 자리에 잘 맞습니다. 고반식당·양화돼교·순우리곱창은 15:00 이후 영업 시작이라 점심 회식 옵션에서는 빠집니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 곱창·전골 회식은 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>순우리곱창 본점</strong>이 1순위입니다. 한우곱창전골 중(2인) 49,000원·대(3~4인) 59,000원을 메인으로 잡고 알곱창 250g(25,000원)을 추가하는 흐름이 가장 흔합니다. 블로그 후기 1,052건으로 본 가이드 5곳 중 표본이 가장 많습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 주차장이 있는 식당은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>고반식당·양화돼교·순우리곱창</strong> 3곳은 매장 주차장 또는 빌딩 주차장이 운영됩니다. <strong>노대감감자탕·야수각</strong>은 매장 주차가 없어 인근 공영주차장 또는 매탄프라자 빌딩 주차장 이용을 권장드리며, 평일 저녁 6~8시 일대 주차 혼잡이 자주 발생합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점 4.8 표기 식당이 많은 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 네이버 플레이스 표기 평점이 가이드 5곳 중 4곳에서 4.8로 매칭되어 있습니다. 본 가이드는 평점만 신뢰하지 않고 <strong>네이버 블로그 누적 후기 수</strong>를 함께 봤습니다. 블로그 표본 기준이면 <strong>순우리곱창(1,052건)</strong>, <strong>고반식당(954건)</strong>, <strong>야수각(451건)</strong>, <strong>노대감감자탕(443건)</strong> 순으로 안정적입니다. 양화돼교는 192건으로 표본은 적지만 단체가능 태그·예약 동시 운영이 차별점입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/samsungElectronics/yeongtongGu', text: '영통구청 회식 장소 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">영통구청 548곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">영통구청 일대 548곳에서 회식 장소 카테고리로 1차 필터링한 뒤, 단체석·룸 운영·5인 이상 수용 가능성·1인 단가 2~5만원선·매탄동·신동 도보권을 함께 적용해 약 50곳으로 좁혔습니다. 같은 카테고리가 겹치지 않도록 한우(소고기구이)·돼지구이+한돈·곱창·감자탕·중식 5종으로 분산해 최종 5곳을 추렸습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">네이버 플레이스 표기 평점은 4곳이 4.8로 동일하게 매칭되어, 평점만으로는 5곳을 줄 세우기 어려운 카테고리였습니다. 그래서 본 가이드는 <strong>네이버 블로그 누적 후기 수</strong>를 신뢰 신호로 비중 있게 보았고, 그 기준으로는 <strong>순우리곱창(1,052건)</strong>이 표본 1위, <strong>고반식당(954건)</strong>이 차순위로 안정적입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">평점 우선이시면 고반식당·양화돼교·노대감감자탕·야수각 4곳이 동률(4.8)이라 카테고리·예산·영업 시작 시간으로 선택을 분리하시면 됩니다. 가성비 우선이시면 야수각(시작가 8,000원), 한우·한돈 비교가 필요하시면 양화돼교, 블로그 표본 검증 우선이시면 순우리곱창이 각각의 1순위입니다. 단체석·룸은 5인 이상이면 평일에도 사전 예약을 권장드립니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 회식 예약 전 매장 전화로 시간·인원·1인 예산을 한 번 더 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
