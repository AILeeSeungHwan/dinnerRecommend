// 홍대 데이트 맛집 추천 5곳 — 식당별 unique 콘텐츠
const post = {
  id: 39,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>홍대</strong>에서 분위기와 메뉴를 함께 잡을 수 있는 데이트 식당 5곳을 정리했습니다. 마포구 홍대·합정 일대 89곳에서 평점·리뷰 표본·분위기·메뉴 결 4가지를 기준으로 추려, 와인 다이닝부터 화덕피자·파스타까지 코스를 분산했습니다. 첫 데이트·기념일·가벼운 점심 데이트 등 상황별로 다른 1순위를 골라 두었으니 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">89곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">홍대·합정 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.4</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.0 ~ 4.8</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">11,672건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">1만원대~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">파스타 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">분위기·만족도 둘 다 안정적인 첫 데이트면 <strong>야닝</strong> — 평점 4.8·리뷰 976건. 와인 한잔에 분위기를 챙기는 기념일이면 <strong>탭샵 바 합정점</strong> (평점 4.5·리뷰 1,981건). 둘만의 조용한 자리면 <strong>틈</strong> (평점 4.7, 표본은 작지만 만족도 안정). 화덕피자·파스타로 든든하게 즐기는 데이트면 <strong>비스트로사랑방</strong> — 리뷰 5,352건으로 표본이 가장 두텁지만 평점 4.0으로 메뉴 선택에 따라 편차가 있으니 시그니처 위주 주문을 권장드립니다. 파스타가 메인인 가벼운 점심 데이트면 <strong>수지앤파스타</strong> (평점 4.2·리뷰 3,182건).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 코스 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>네이버 플레이스 리뷰 100건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>평점 4.0점 이상</strong> — 데이트 카테고리는 분위기 비중이 커 평점선을 다소 보수적으로 적용</li>
<li><strong>분위기 검증</strong> — 블로그 후기·플레이스 사진이 꾸준히 누적된 곳</li>
<li><strong>코스 분산</strong> — 다이닝·와인 바·화덕피자·파스타로 데이트 결을 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">홍대·합정 일대 89곳 중 데이트 분위기에 어울리는 곳은 약 20여 곳이었습니다. 그중 평점·리뷰 표본·분위기가 안정적인 5곳을 추렸습니다. 같은 결을 피해 다이닝·와인 바·화덕피자·파스타로 데이트 선택지를 분산했고, 평점이 경계선(4.0)인 식당(비스트로사랑방)은 <strong>표본 크기와 차별점</strong>이 명확할 때만 포함했습니다. 홍대 식당은 메뉴 가격이 매장·시즌별로 변동이 잦아 가격은 추정 범위로 표기하고 정확한 금액은 매장 확인을 권장드립니다.</p>`
    },

    { type: 'h2', id: 'yaning', text: '야닝 — 분위기·만족도 둘 다 안정적인 첫 데이트', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyNjAyMDNfNTIg/MDAxNzcwMDQ0NDU5ODkx.63n-Fz6oa1M9RNNYQFAqg9qHvOsTarxH2NxIVaIDDM0g.dh2DJuTCWW3H-HOGuIWjZw9dUuln6a01azmQf6DXzfEg.JPEG/IMG%EF%BC%BF1676.JPG?type=w773" alt="야닝 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#C026D3,#7C3AED);align-items:center;justify-content:center;font-size:64px">🍝</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 첫 데이트 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 리뷰 976건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1~3만원대</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 분위기 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점이 가장 높은(4.8) 식당</strong>입니다. 마포구 양화로6길 99-11, 홍대입구역 인근에 있습니다. 리뷰 976건 표본 안에서 만족도가 거의 흔들리지 않는다는 점이 첫 데이트에서 실패 확률을 줄여주는 강점입니다. 화려한 코스 다이닝보다는 메뉴 한두 개를 차분히 즐기며 대화에 집중하기 좋은 결이라, 서로를 알아가는 첫 만남에 부담이 적습니다. 네이버 블로그 후기 149건이 함께 누적되어 분위기·메뉴 사진 글을 미리 참고하기 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"분위기가 좋다 · 음식이 맛있다 · 데이트하기 좋다" 같은 평이 자주 언급되었습니다. 높은 평점과 차분한 데이트 분위기가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">시그니처 요리</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">파스타류</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">메인 요리</p><p style="font-size:12px;color:#5f5e5a;margin:0">2~3만원대</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디저트</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">와인·음료</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">첫 데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">차분한 자리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 우수</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 양화로6길 99-11 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 0502-5552-9437
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/야닝" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 야닝 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'tabshop', text: '탭샵 바 합정점 — 와인 한잔 챙기는 기념일 자리', gradientStyle: { from: '#7C3AED', to: '#4338CA' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyNTEyMjJfNzkg/MDAxNzY2MzkyNDIwMDYx.PhzD-mOfGRF08nPs9cFiBV_-DBBG6LQCWjwnlDUW2SYg.L19IfTNKRZ_4DeWZVt3BMjKBUCsiDTNg4L3quX_P_Uwg.JPEG/02_final.jpg?type=w773" alt="탭샵 바 합정점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#4338CA,#1E1B4B);align-items:center;justify-content:center;font-size:64px">🍶</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#7C3AED;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍷 기념일 와인 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 1,981건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 2~3만원대</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 분위기 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.5·리뷰 1,981건으로 <strong>평점과 표본이 함께 안정적인 와인 바</strong>입니다. 마포구 양화로 81, 합정역 인근에 있습니다. 야닝이 차분한 식사 데이트라면, 탭샵은 와인이나 가벼운 술 한잔에 안주를 곁들이며 분위기를 챙기는 쪽에 가까워 기념일·N주년 자리에 잘 맞습니다. 표본이 2천 건에 가까워 분위기·메뉴에 대한 후기가 충분히 쌓여 있어 첫 방문 전 참고하기 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"와인 종류가 다양하다 · 분위기가 좋다 · 안주가 괜찮다" 같은 평이 자주 언급되었습니다. 와인 셀렉션과 기념일 분위기가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">와인 (글라스)</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">치즈·샤퀴테리</p><p style="font-size:12px;color:#5f5e5a;margin:0">2~3만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">파스타·요리</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">맥주·하이볼</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샐러드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디저트</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">기념일</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">와인 한잔</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 검증</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 양화로 81 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (합정역 도보) · <strong>📞 전화</strong> 0507-1467-0765
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/탭샵 바 합정점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 탭샵 바 합정점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'teum', text: '틈 — 둘만의 조용한 자리 (표본 작지만 만족도 안정)', gradientStyle: { from: '#A855F7', to: '#6D28D9' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyNTAyMDhfMTY0/MDAxNzM4OTgwODA1ODI5.1yHYQyXNKrV9mXZlUl_ONLxVnc8nL1xVw0sdpURNOGcg.RTXueSSrk4mHwCoxDKQckk-Ba_Ht6Rc0rCVFqLJWn_gg.JPEG/KakaoTalk_20240911_165518012_08.jpg?type=w386" alt="틈 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#A855F7,#6D28D9);align-items:center;justify-content:center;font-size:64px">🍶</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#A855F7;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🤍 조용한 데이트 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 181건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1~3만원대</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 분위기 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.7·리뷰 181건으로 <strong>표본은 작지만 그 안에서 만족도가 안정적인</strong> 곳입니다. 마포구 와우산로3길 46, 홍대 골목 안쪽에 자리합니다. 표본 크기가 1천 건을 넘지 않아 비스트로사랑방·수지앤파스타만큼 후기가 두텁지는 않지만, 사람이 크게 몰리지 않는 만큼 둘만의 조용한 대화에 집중하기 좋은 결입니다. 떠들썩한 분위기를 피하고 한적하게 데이트하고 싶을 때 우선 후보입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"조용하다 · 분위기가 아늑하다 · 둘이 가기 좋다" 같은 평이 자주 언급되었습니다. 한적한 분위기와 조용한 데이트가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">시그니처 안주</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">요리류</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">와인·칵테일</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샐러드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디저트</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">음료</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">조용한 데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한적함</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 우수</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 와우산로3길 46 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 02-322-0825
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/틈" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 틈 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'sarangbang', text: '비스트로사랑방 — 화덕피자 데이트 (평점 한계 명시)', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyMzEyMjJfMTAw/MDAxNzAzMjE3NjQ4MDU3._rVG_yjGgp6J8VjQXdkWJ2TW3kqVDP74eEJr0RS7r8Ug.97H_wyz1rXCaX9RFUgfbJLQ34-EGXR2eqUNrPpqwg5kg.JPEG.mbk0207/_7021-24264-32757.jpg?type=w773" alt="비스트로사랑방 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#C026D3,#7C3AED);align-items:center;justify-content:center;font-size:64px">🍝</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.0 · 리뷰 5,352건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1~3만원대</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍕 화덕피자</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.0점은 본 가이드에서 가장 낮은 편입니다. 다만 <strong>리뷰 5,352건</strong>은 5곳 중 가장 두터운 표본이며, 평점이 경계선인 이유는 사람이 워낙 많이 다녀가 메뉴별·시간대별 호불호가 함께 쌓인 것으로 해석됩니다. <strong>화덕피자·파스타로 든든하게 즐기는 데이트</strong>에는 차별점이 분명합니다. 마포구 와우산로15길 40, 홍대 중심 상권에 있습니다. 네이버 블로그 후기 3,181건이 함께 누적되어 메뉴 사진·후기가 가장 풍부하니, 시그니처(화덕피자) 위주로 주문하시면 만족도 편차가 줄어듭니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"화덕피자가 맛있다 · 양이 넉넉하다 · 데이트로 무난하다" 같은 평이 자주 언급되었습니다. 시그니처 피자 만족도와 메뉴별 호불호가 함께 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">화덕피자</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">리조또</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샐러드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">스테이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">2~3만원대</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">와인·음료</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">화덕피자 데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">든든한 식사</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 최다</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">시그니처 위주 권장</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 와우산로15길 40 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 070-4799-0368
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/비스트로사랑방" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 비스트로사랑방 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'suzy', text: '수지앤파스타 — 파스타 메인 가벼운 점심 데이트', gradientStyle: { from: '#7C3AED', to: '#C026D3' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyNDAyMDVfMTc0/MDAxNzA3MTM2OTE1MzU4.lf18CDk0MdgNGVtKsr5zy-Bc7c6bSBnh9hcQkHocZgYg.eMHA21hSubFfkdSDXdyUJbktoclQWPHuceoMd1Jqv4Eg.JPEG.hyejin0008/SE-d2397254-0eab-4419-8115-e007c8a8aad5.jpg?type=w773" alt="수지앤파스타 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#C026D3,#7C3AED);align-items:center;justify-content:center;font-size:64px">🍝</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#7C3AED;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍝 점심 데이트 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 3,182건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 1~2만원대</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍝 파스타 전문</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.2·리뷰 3,182건으로 <strong>파스타가 메인인 가벼운 점심 데이트에 무난한</strong> 곳입니다. 마포구 독막로15길 3-18, 홍대·합정 사이 골목에 있습니다. 비스트로사랑방이 화덕피자 중심으로 든든하게 먹는 결이라면, 수지앤파스타는 파스타 한 접시에 가볍게 즐기는 점심 데이트에 가깝습니다. 네이버 블로그 후기 2,740건이 함께 누적되어 메뉴 사진·후기가 풍부한 편이라 첫 방문 전 참고하기 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"파스타가 맛있다 · 가성비가 괜찮다 · 점심에 부담 없다" 같은 평이 자주 언급되었습니다. 파스타 만족도와 가벼운 점심 데이트가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">크림 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오일 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">토마토 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">리조또</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">샐러드·사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">음료·와인</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">파스타 전문</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가볍게 즐기기</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 검증</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 독막로15길 3-18 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역·합정역 도보) · <strong>📞 전화</strong> 02-6397-8780
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/수지앤파스타" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 수지앤파스타 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·표본·데이트 결 매칭', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">데이트 결</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">차별점</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>야닝</strong><br><span style="font-size:11px;color:#888780">다이닝</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">976건</span></td>
<td style="padding:11px 10px;text-align:center">차분</td>
<td style="padding:11px 10px;font-size:12.5px">평점 최고 + 첫 데이트</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>탭샵 바 합정점</strong><br><span style="font-size:11px;color:#888780">와인 바</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">1,981건</span></td>
<td style="padding:11px 10px;text-align:center">기념일</td>
<td style="padding:11px 10px;font-size:12.5px">와인 셀렉션 + 표본 안정</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>틈</strong><br><span style="font-size:11px;color:#888780">분위기 술집</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">181건</span></td>
<td style="padding:11px 10px;text-align:center">조용</td>
<td style="padding:11px 10px;font-size:12.5px">한적한 둘만의 자리</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>비스트로사랑방</strong><br><span style="font-size:11px;color:#888780">화덕피자</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">5,352건</span></td>
<td style="padding:11px 10px;text-align:center">든든</td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 (시그니처 위주 권장)</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>수지앤파스타</strong><br><span style="font-size:11px;color:#888780">파스타</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">3,182건</span></td>
<td style="padding:11px 10px;text-align:center">가볍게</td>
<td style="padding:11px 10px;font-size:12.5px">파스타 메인 + 점심 데이트</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 데이트는 어떤 분위기인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 첫 데이트 실패 줄이기</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>야닝</strong> — 평점 4.8로 만족도가 거의 흔들리지 않아 서로를 알아가는 첫 만남에 부담이 적습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍷 기념일·N주년</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>탭샵 바 합정점</strong> — 평점 4.5·리뷰 1,981건. 와인 한잔에 분위기를 챙기는 자리라 기념일에 잘 맞습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🤍 조용히 둘만의 시간</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>틈</strong> — 평점 4.7. 표본은 작지만 사람이 크게 몰리지 않아 한적하게 대화에 집중하기 좋습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍕 든든하게 먹는 데이트</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>비스트로사랑방</strong> — 리뷰 5,352건으로 표본이 가장 두텁습니다. 화덕피자 시그니처 위주로 주문하면 만족도 편차가 줄어듭니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍝 가벼운 점심 데이트</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>수지앤파스타</strong> — 평점 4.2·리뷰 3,182건. 파스타 한 접시에 가볍게 즐기는 점심 데이트에 무난합니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li>5곳 모두 전용 주차장이 없습니다. 홍대입구역·합정역 대중교통 이용을 권장드리며, 데이트 동선은 도보 기준으로 잡으시는 편이 편합니다.</li>
<li><strong>비스트로사랑방·수지앤파스타</strong>는 표본이 두텁고 인기가 많아 주말 식사 시간엔 대기가 생길 수 있습니다. 데이트 일정이 있으면 미리 방문 시간을 조정하시는 편이 안전합니다.</li>
<li><strong>비스트로사랑방</strong>은 평점 4.0으로 본 가이드에서 가장 낮습니다. 메뉴별 호불호가 있으니 화덕피자 같은 시그니처 위주로 주문하시면 만족도 편차가 줄어듭니다.</li>
<li><strong>틈</strong>은 리뷰 표본이 181건으로 작은 편입니다. 후기가 두터운 곳을 원하면 탭샵 바 합정점·수지앤파스타가 더 안정적이고, 틈은 조용한 분위기를 우선할 때 선택하시는 편이 좋습니다.</li>
<li>홍대 식당은 메뉴 가격이 매장·시즌별로 변동이 잦습니다. 본문 가격은 추정 범위이며 정확한 금액은 방문 시 매장 확인을 권장드립니다.</li>
<li>분위기 중심 식당은 예약 가능 여부가 매장별로 다릅니다. 기념일·주말 데이트는 방문 전 예약 여부를 매장에 확인하시는 편이 안전합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 홍대 첫 데이트로 실패 확률이 낮은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>야닝</strong>이 1순위입니다. 평점 4.8·리뷰 976건으로 표본 안에서 만족도가 거의 흔들리지 않아 첫 만남에서 부담이 적습니다. 조용한 자리를 더 원하면 <strong>틈</strong>(평점 4.7)도 잘 맞습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 기념일·N주년 데이트면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>탭샵 바 합정점</strong>을 권장드립니다. 평점 4.5·리뷰 1,981건으로 와인 한잔에 분위기를 챙기는 자리라 기념일에 잘 맞습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 든든하게 먹는 데이트면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>비스트로사랑방</strong>의 화덕피자가 무난합니다. 리뷰 5,352건으로 표본이 가장 두텁고, 시그니처 피자 위주로 주문하면 만족도 편차가 줄어듭니다. 파스타 중심으로 가볍게면 <strong>수지앤파스타</strong>(평점 4.2)가 더 맞습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 5곳 모두 전용 주차장이 없습니다. 홍대입구역·합정역 대중교통 이용을 권장드리며, 데이트 동선은 도보 기준으로 잡으시는 편이 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 낮은 곳도 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>비스트로사랑방</strong>은 평점 4.0으로 본 가이드에서 가장 낮지만, 리뷰 5,352건으로 표본이 가장 두텁고 화덕피자라는 차별점이 명확해 포함했습니다. 평점·만족도 우선이면 <strong>야닝</strong>(4.8)·<strong>틈</strong>(4.7)이 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 예약은 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 예약 가능 여부는 매장별로 다릅니다. 분위기 중심 식당이 많아 기념일·주말 데이트는 방문 전 예약 여부를 매장에 직접 확인하시는 편이 안전합니다.</p></details>
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
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">홍대·합정 일대 89곳에서 데이트 분위기에 어울리는 식당을 필터링해, 코스 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰 표본·분위기·메뉴 결 4가지를 함께 본 결과 다이닝·와인 바·분위기 술집·화덕피자·파스타로 데이트 선택지가 자연스럽게 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>야닝(4.8)</strong>이 1순위, 리뷰 표본 크기로는 <strong>비스트로사랑방(5,352건)</strong>이 1순위입니다. 데이트 결이 달라 검색 의도가 겹치지 않으니, 차분한 첫 데이트면 야닝, 든든한 식사 데이트면 비스트로사랑방 식으로 분리해서 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>비스트로사랑방</strong>은 평점이 5곳 중 가장 낮지만 표본 크기와 화덕피자라는 차별점으로 포함했습니다. 메뉴별 호불호가 있으니 시그니처(화덕피자) 위주로 주문하시면 만족도 편차가 줄어듭니다. 평점 우선이면 야닝·틈·탭샵 바 합정점이 안정 후보입니다.</p>
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
