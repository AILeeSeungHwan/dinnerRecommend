// 홍대 포차·야장 술집 추천 5곳 — 식당별 unique 콘텐츠
const post = {
  id: 38,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>홍대</strong>에서 안주 한 접시에 소주·맥주를 곁들이는 포차·야장 술집 5곳을 정리했습니다. 마포구 홍대·합정 일대 89곳에서 평점·리뷰 표본·운영 안정성·분위기 4가지를 기준으로 추려, 노포 포차부터 감성 야장까지 분위기를 분산했습니다. 1차 회식·친구 모임·늦은 밤 한잔 등 상황별로 다른 1순위를 골라 두었으니 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">89곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">홍대·합정 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.5</p><p style="font-size:11px;color:#888780;margin:4px 0 0">3.8 ~ 4.9</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">11,760건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">1만원대~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">안주 1접시 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">사람 많고 회전 빠른 노포 포차 분위기면 <strong>역전포장마차 홍대점</strong> — 리뷰 5,201건으로 표본이 가장 두텁습니다.<br><br>평점·만족도까지 안정적인 한 곳이면 <strong>달봉비어 홍대점</strong> (평점 4.9).<br><br>닭요리 안주로 진득하게 마실 자리면 <strong>교도리 홍대본점</strong> (평점 4.9·닭갈비·닭발).<br><br>친구 모임·아늑한 한잔이면 <strong>낭만포차 홍대점</strong> (평점 4.6·리뷰 1,306건).<br><br>사람 많고 늦게까지 시끌벅적한 분위기를 원하면 <strong>새벽</strong> — 리뷰 4,327건으로 표본은 많지만 평점 3.8로 호불호가 갈리니 메인 안주 위주 주문을 권장드립니다.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '홍대 포차·야장 술집 선정 기준', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 분위기 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>네이버 플레이스 리뷰 100건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>평점 3.7점 이상</strong> — 술집 카테고리 평균선 (낮은 곳은 표본·차별점 명확할 때만)</li>
<li><strong>운영 안정성</strong> — 홍대 상권에서 꾸준히 누적된 리뷰·블로그 후기 보유</li>
<li><strong>분위기 분산</strong> — 노포 포차·닭요리 야장·감성 포차·시끌벅적 술집으로 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">홍대·합정 일대 89곳 중 포차·야장 성격을 가진 술집은 약 20여 곳이었습니다. 그중 평점·리뷰 표본·분위기가 안정적인 5곳을 추렸습니다. 같은 결을 피해 노포 포차·닭요리 안주·감성 야장·시끌벅적 술집으로 자리 선택지를 분산했고, 평점이 다소 낮은 식당(새벽)은 <strong>표본 크기와 차별점</strong>이 명확할 때만 포함했습니다. 홍대 술집은 메뉴 가격이 매장·시즌별로 변동이 잦아 가격은 추정 범위로 표기하고 정확한 금액은 매장 확인을 권장드립니다.</p>`
    },

    { type: 'h2', id: 'yeokjeon', text: '역전포장마차 홍대점 — 표본 가장 두터운 노포 포차', gradientStyle: { from: '#4338CA', to: '#1E1B4B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyMjExMjRfMjMw/MDAxNjY5MjY5MjkzOTMx.ce1uVabsSlq_8PrAuR1xL-w7A2yLrKkvwa2OQA9OnhAg.b0JrEyoVK3B-fN6bLIYmoPljv1nBnplxGs9yHuQfsjgg.JPEG.yours0208/IMG_9664.JPG?type=w773" alt="역전포장마차 홍대점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#4338CA;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 표본 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 5,201건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 안주 1만원대~</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 늦은 밤 영업</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 리뷰 표본이 가장 두터운(5,201건)</strong> 노포 스타일 포차입니다. 마포구 양화로 183, 홍대입구역에서 접근 가능합니다. 평점 4.4는 표본이 5천 건을 넘는 가게치고 안정적인 수치로, 사람이 워낙 많이 다녀가도 만족도가 크게 무너지지 않았다는 신호입니다. 단체 인원이 우르르 들어가 떠들썩하게 1차를 시작하기 좋은 전형적인 홍대 포차로, 골뱅이·계란말이·우동사리 같은 기본 안주 회전이 빠릅니다. 주말 밤 피크엔 대기가 생길 수 있어 이른 저녁 입장을 권장드립니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"양이 많다 · 포차 분위기가 산다 · 단체로 가기 좋다" 같은 평이 자주 언급되었습니다. 떠들썩한 1차 분위기와 기본 안주 회전이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 안주 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">계란말이</p><p style="font-size:12px;color:#5f5e5a;margin:0">1만원대 · <strong>기본 안주</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">골뱅이무침</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우동·라면</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">닭발</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오뎅탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소주·맥주</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">1차 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">노포 분위기</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 검증</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 양화로 183 · <strong>🕐 영업</strong> 영업일 매장 확인 (늦은 밤 운영) · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 02-322-3336
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/역전포장마차 홍대점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 역전포장마차 홍대점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'dalbong', text: '달봉비어 홍대점 — 평점 4.9 가장 안정적인 한잔', gradientStyle: { from: '#7C3AED', to: '#4338CA' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/20141215_123/kimsookyung__14186523678534X34U_JPEG/NaverBlog_20140205_233239.jpg?type=w773" alt="달봉비어 홍대점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#4338CA,#1E1B4B);align-items:center;justify-content:center;font-size:64px">🍶</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#7C3AED;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 만족도 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 314건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 안주 1~2만원대</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 분위기 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점이 가장 높은(4.9) 식당</strong>입니다. 마포구 어울마당로5길 7, 홍대 번화가 안쪽에 있습니다. 리뷰 314건은 표본이 아주 큰 편은 아니지만, 그 표본 안에서 만족도가 거의 흔들리지 않는다는 점이 강점입니다. 떠들썩한 대형 포차보다는 비교적 차분하게 한잔하기 좋은 결이라, 친구 둘셋이서 안주 한두 접시에 진득하게 이야기하기 좋은 자리입니다. 네이버 블로그 후기 126건이 함께 누적되어 분위기·안주에 대한 글이 꾸준한 편입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맥주가 시원하다 · 안주가 맛있다 · 분위기가 좋다" 같은 평이 자주 언급되었습니다. 높은 평점과 차분한 분위기가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 안주 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생맥주</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">치킨·튀김류</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소시지·안주 플래터</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">감자튀김</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마른안주</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소주·하이볼</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">소규모 모임</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">맥주 한잔</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 우수</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 어울마당로5길 7 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 02-324-6322
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/달봉비어 홍대점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 달봉비어 홍대점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'kyodori', text: '교도리 홍대본점 — 닭갈비·닭발 안주 진득한 야장', gradientStyle: { from: '#DC2626', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250226_98%2F1740562555528YyaSV_JPEG%2F%25B1%25B3%25B5%25B5%25B8%25AE_%25B8%25DE%25B4%25BA%25C6%25C7.jpg" alt="교도리 홍대본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#DC2626,#7F1D1D);align-items:center;justify-content:center;font-size:64px">🍗</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍗 닭요리 안주 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.9 · 리뷰 612건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 안주 1~2만원대</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 늦은 밤 영업</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.9·리뷰 612건으로 <strong>닭갈비·닭발을 안주 삼아 진득하게 마시기 좋은</strong> 야장 술집입니다. 마포구 와우산로 77, 홍대 중심 상권에 있습니다. 안주 한 가지로 자리를 오래 잡고 술잔을 채워가는 결이라 단순 1차보다는 2차로 옮겨 길게 머무는 모임에 더 잘 맞습니다. 같은 평점대인 달봉비어가 차분한 맥주 한잔이라면, 교도리는 매콤한 닭요리 안주에 소주를 곁들이는 쪽에 가깝습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"닭발이 맵고 맛있다 · 술 안주로 좋다 · 양이 넉넉하다" 같은 평이 자주 언급되었습니다. 매콤한 닭요리 안주와 술자리 궁합이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 안주 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">닭발</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">닭갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">닭똥집</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">계란찜</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">볶음밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · 마무리</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소주·맥주</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">2차 술자리</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">매콤 안주</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">친구 모임</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 우수</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 와우산로 77 · <strong>🕐 영업</strong> 영업일 매장 확인 (늦은 밤 운영) · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 02-336-5540
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/교도리 홍대본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 교도리 홍대본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'nangman', text: '낭만포차 홍대점 — 친구 모임 아늑한 감성 포차', gradientStyle: { from: '#A855F7', to: '#6D28D9' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://postfiles.pstatic.net/MjAyNjAzMDlfMjky/MDAxNzczMDIyNDI3ODEy.LiWpgzpWawAGj_vif0O6L5IeydKygfuzU4MbG1P3QZgg.Cg3tf-oofJuwPYIwZogKIagx02eZcx9ZMVszCr0l8lMg.JPEG/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_(2).jpg?type=w773" alt="낭만포차 홍대점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#4338CA,#1E1B4B);align-items:center;justify-content:center;font-size:64px">🍶</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#A855F7;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💬 친구 모임 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.6 · 리뷰 1,306건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 안주 1~2만원대</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌅 분위기 좋음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.6·리뷰 1,306건으로 <strong>표본 크기와 평점이 함께 안정적인 감성 포차</strong>입니다. 마포구 와우산로23길 35-6, 홍대 골목 안쪽에 있습니다. 역전포장마차가 떠들썩한 대형 노포라면, 낭만포차는 그보다 아늑한 분위기에서 친구 둘셋이 안주를 나누며 길게 이야기하기 좋은 결입니다. 네이버 블로그 후기 273건이 함께 누적되어 분위기·메뉴 사진 글이 꾸준한 편이라 첫 방문 전 참고하기 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"분위기가 아늑하다 · 안주 종류가 다양하다 · 친구랑 가기 좋다" 같은 평이 자주 언급되었습니다. 감성 포차 분위기와 다양한 안주 구성이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 안주 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">계란말이</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>기본 안주</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해물파전</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">곱창전골</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">닭발</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오뎅탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소주·맥주</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">친구 모임</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">아늑한 분위기</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">안주 다양</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">표본 검증</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 와우산로23길 35-6 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 010-2287-4668
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/낭만포차 홍대점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 낭만포차 홍대점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'saebyeok', text: '새벽 — 시끌벅적 표본 많은 술집 (평점 한계 명시)', gradientStyle: { from: '#312E81', to: '#1E1B4B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://img.insight.co.kr/static/2025/05/08/1200/img_20250508141812_q9ut7w4y.jpg" alt="새벽 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
<div style="display:none;width:100%;height:260px;background:linear-gradient(135deg,#4338CA,#1E1B4B);align-items:center;justify-content:center;font-size:64px">🍶</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 3.8 · 리뷰 4,327건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 안주 1~2만원대</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 늦은 밤 영업</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 3.8점은 본 가이드 5곳 중 가장 낮습니다. 다만 <strong>리뷰 4,327건</strong>은 역전포장마차 다음으로 많은 표본이며, 평점이 낮은 이유는 사람이 워낙 많이 몰리는 시끌벅적한 술집 특성상 호불호가 함께 쌓인 것으로 해석됩니다. <strong>홍대에서 사람 많고 늦게까지 떠들썩한 분위기</strong>를 일부러 찾는 자리에는 차별점이 분명합니다. 마포구 어울마당로 123, 홍대 번화가 한복판에 있습니다. 조용한 술자리를 원하면 달봉비어·낭만포차가 더 맞고, 새벽은 분위기 자체를 즐기는 모임에 한정해 추천드립니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"분위기가 시끌벅적하다 · 사람이 많다 · 늦게까지 논다" 같은 평이 자주 언급되었습니다. 떠들썩한 분위기와 호불호가 함께 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 안주 (가격은 매장 문의)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모둠 안주</p><p style="font-size:12px;color:#5f5e5a;margin:0">1~2만원대 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">계란말이</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>기본 안주</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">파전</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">닭발·똥집</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우동·라면</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소주·맥주</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">시끌벅적</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">늦은 밤</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 많음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">분위기 자체 즐기기</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 서울 마포구 어울마당로 123 · <strong>🕐 영업</strong> 영업일 매장 확인 (늦은 밤 운영) · <strong>🚗 주차</strong> 전용 주차 없음 (홍대입구역 도보) · <strong>📞 전화</strong> 매장 확인
</div>
<div style="text-align:center"><a href="/dinner/hongdae/restaurant/새벽" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 새벽 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·표본·분위기 매칭', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">술집</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">분위기</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">차별점</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>역전포장마차 홍대점</strong><br><span style="font-size:11px;color:#888780">노포 포차</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">5,201건</span></td>
<td style="padding:11px 10px;text-align:center">떠들썩</td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 + 단체 1차</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>달봉비어 홍대점</strong><br><span style="font-size:11px;color:#888780">맥주 술집</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">314건</span></td>
<td style="padding:11px 10px;text-align:center">차분</td>
<td style="padding:11px 10px;font-size:12.5px">평점 최고 + 소규모</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>교도리 홍대본점</strong><br><span style="font-size:11px;color:#888780">닭요리 야장</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">612건</span></td>
<td style="padding:11px 10px;text-align:center">진득</td>
<td style="padding:11px 10px;font-size:12.5px">닭발·닭갈비 안주</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>낭만포차 홍대점</strong><br><span style="font-size:11px;color:#888780">감성 포차</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.6<br><span style="font-size:11px;color:#888780">1,306건</span></td>
<td style="padding:11px 10px;text-align:center">아늑</td>
<td style="padding:11px 10px;font-size:12.5px">평점·표본 균형 + 친구 모임</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>새벽</strong><br><span style="font-size:11px;color:#888780">번화가 술집</span></td>
<td style="padding:11px 10px;text-align:center">★ 3.8<br><span style="font-size:11px;color:#888780">4,327건</span></td>
<td style="padding:11px 10px;text-align:center">시끌벅적</td>
<td style="padding:11px 10px;font-size:12.5px">표본 많음 (평점 한계 있음)</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 한잔은 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍻 단체 1차 떠들썩하게</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>역전포장마차 홍대점</strong> — 리뷰 5,201건으로 표본이 가장 두텁고 회전이 빠른 노포 포차. 인원 많은 1차에 무난합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍶 둘셋이 차분하게 한잔</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>달봉비어 홍대점</strong> — 평점 4.9로 만족도가 거의 흔들리지 않는 한 곳. 시원한 맥주에 가벼운 안주로 길게 대화하기 좋습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍗 매콤 안주에 소주 한잔</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>교도리 홍대본점</strong> — 평점 4.9, 닭발·닭갈비를 안주 삼아 진득하게 마시는 야장. 2차로 옮겨 길게 머물기 좋습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💬 친구 모임 아늑하게</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>낭만포차 홍대점</strong> — 평점 4.6·리뷰 1,306건. 떠들썩한 노포보다 한 단계 아늑한 감성 포차로 친구 모임에 잘 맞습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌙 시끌벅적 분위기 자체</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>새벽</strong> — 평점 3.8로 호불호는 갈리지만 사람 많고 늦게까지 떠들썩한 분위기를 일부러 찾는 자리엔 차별점이 분명합니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li>5곳 모두 전용 주차장이 없습니다. 홍대입구역·합정역 대중교통 이용을 권장드리며, 음주 자리인 만큼 차량 이용은 피하시는 편이 안전합니다.</li>
<li><strong>역전포장마차 홍대점·새벽</strong>은 주말 밤 피크에 사람이 크게 몰립니다. 자리를 잡으려면 이른 저녁(18~19시) 입장이 안전합니다.</li>
<li><strong>달봉비어 홍대점</strong>은 리뷰 표본이 314건으로 큰 편은 아니지만 평점 4.9로 만족도가 안정적입니다. 조용한 자리를 원할 때 우선 후보입니다.</li>
<li><strong>새벽</strong>은 평점 3.8로 본 가이드에서 가장 낮습니다. 조용한 술자리를 원하면 달봉비어·낭만포차가 더 맞고, 새벽은 떠들썩한 분위기를 즐기는 모임에 한정해 선택하시는 편이 좋습니다.</li>
<li>홍대 술집은 안주 가격이 매장·시즌별로 변동이 잦습니다. 본문 가격은 추정 범위이며 정확한 금액은 방문 시 매장 확인을 권장드립니다.</li>
<li>영업시간은 매장별로 다르고 늦은 밤까지 운영하는 곳이 많습니다. 마지막 주문 시간은 방문 전 매장 공지를 확인하시는 편이 안전합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 홍대에서 단체로 1차 하기 좋은 포차는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>역전포장마차 홍대점</strong>이 1순위입니다. 리뷰 5,201건으로 표본이 가장 두텁고 회전이 빠른 전형적인 노포 포차라 인원 많은 1차에 무난합니다. 주말 밤은 대기가 생길 수 있어 이른 저녁 입장을 권장드립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 둘셋이 조용히 한잔하기 좋은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>달봉비어 홍대점</strong>(평점 4.9)이 1순위입니다. 떠들썩한 대형 포차보다 차분한 결이라 친구 둘셋이 길게 대화하기 좋습니다. 아늑한 감성 쪽이면 <strong>낭만포차 홍대점</strong>(평점 4.6)도 잘 맞습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 안주 맛집으로 진득하게 마시려면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>교도리 홍대본점</strong>(평점 4.9)을 권장드립니다. 닭발·닭갈비를 안주 삼아 자리를 오래 잡고 마시는 결이라 2차로 옮겨 길게 머무는 모임에 잘 맞습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 5곳 모두 전용 주차장이 없습니다. 홍대입구역·합정역 대중교통 이용을 권장드리며, 음주 자리인 만큼 차량 이용은 피하시는 편이 안전합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 낮은 곳도 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>새벽</strong>은 평점 3.8로 본 가이드 평균 아래지만, 리뷰 4,327건으로 표본이 두 번째로 많고 사람 많고 떠들썩한 분위기라는 차별점이 명확해 포함했습니다. 평점·만족도 우선이면 <strong>달봉비어 홍대점·교도리 홍대본점</strong>(둘 다 4.9)이 1순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 안주 가격은 대략 어느 정도인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 홍대 포차·야장 안주는 대체로 1~2만원대가 중심입니다. 다만 매장·시즌별 변동이 잦아 본문 가격은 추정 범위로만 표기했으며, 정확한 금액은 방문 시 매장 확인을 권장드립니다.</p></details>
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
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">홍대·합정 일대 89곳에서 포차·야장 성격을 가진 술집을 필터링해, 분위기 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰 표본·운영 안정성·분위기 4가지를 함께 본 결과 노포 포차·맥주 술집·닭요리 야장·감성 포차·번화가 술집으로 자리 선택지가 자연스럽게 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>달봉비어 홍대점·교도리 홍대본점(둘 다 4.9)</strong>이 1순위, 리뷰 표본 크기로는 <strong>역전포장마차 홍대점(5,201건)</strong>이 1순위입니다. 분위기 결이 달라 검색 의도가 겹치지 않으니, 떠들썩한 1차면 역전포장마차, 차분한 한잔이면 달봉비어 식으로 분리해서 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>새벽</strong>은 평점이 5곳 중 가장 낮지만 표본 크기와 시끌벅적한 분위기라는 차별점으로 포함했습니다. 조용한 자리를 원하면 달봉비어·낭만포차가 더 맞고, 새벽은 분위기 자체를 즐기는 모임에 한정해 선택하시면 만족도 편차가 줄어듭니다.</p>
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
