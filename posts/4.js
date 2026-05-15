// 판교역 혼밥 1만원대 5선 — 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 4,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>판교역</strong> 일대에서 혼밥 한 끼를 1만원 안팎으로 해결할 수 있는 식당 5곳을 정리했습니다. 신분당선·경강선 판교역 주변 902곳에서 평점·리뷰 표본·가격대·운영 시간 4가지를 기준으로 추려, 일본식 라마 · 한식뷔페 · 분식 · 마라탕 · 샤브샤브까지 5종으로 카테고리를 분산했습니다. 점심 1시간 회전형 식사부터 저녁 가볍게 혼술까지 시나리오를 함께 묶었습니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">902곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">판교·서현·야탑·수정 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.2</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.0 ~ 4.4</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">5,336건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">2,900원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">1인 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">평점·리뷰 검증 1순위는 <strong>니고라멘</strong> (★ 4.4 · 리뷰 641건, 니고라멘 10,500원). 1만원으로 무한리필이 필요하면 <strong>두끼 분당서현점</strong> (일반 11,900원 떡볶이 무한). 한식뷔페로 30첩 밥상 푸짐하게면 <strong>자연별곡 NC 야탑점</strong> (12,900원, 리뷰 3,889건 표본 최다). 매콤한 한 그릇 마라탕이면 <strong>춘리마라탕 야탑점</strong> (1인 마라탕 10,900원, 새벽 01:00까지 영업). 샤브샤브 1만원선 단품이면 <strong>삼청동샤브 판교아이스퀘어점</strong> (멸치샤브 우삼겹 12,900원).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 시작가 5,900~16,000원</strong> — 판교 1만원대 점심 표준 가격대</li>
<li><strong>네이버 플레이스 리뷰 200건 이상</strong> — 평균값이 흔들리지 않을 표본 크기</li>
<li><strong>평점 4.0점 이상</strong> — 가성비 카테고리 평균선</li>
<li><strong>카테고리 분산</strong> — 라멘·한식뷔페·분식·마라탕·샤브샤브 5종으로 검색 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">판교역 일대 902곳 중 단품 1만원선으로 혼밥 가능한 식당은 약 60곳이었습니다. 그중 평점·리뷰 표본·메뉴 구성·운영 시간이 안정적인 식당 5곳을 추렸습니다. 같은 카테고리 중복을 피해 라멘·한식뷔페·분식·마라탕·샤브샤브로 한 끼 선택지를 분산했고, 평점이 4.0 ~ 4.4 사이로 표본 신뢰도가 어느 정도 확보된 식당만 포함했습니다.</p>`
    },

    { type: 'h2', id: 'nigoramen', text: '니고라멘 — 평점 4.4 · 리뷰 641건 라멘 1순위', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220910_43%2F1662769543537tJ8ZK_JPEG%2F1662769543300.jpg" alt="니고라멘 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 라멘 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 641건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 500원~16,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점 1순위(★ 4.4)이자 라멘 카테고리 표본 1위(641건)</strong>입니다. 수내동 21-1 MS프라자 1층 107호, 판교역에서 분당선 한 정거장 거리이지만 점심 혼밥·저녁 가볍게 한 그릇 시나리오가 함께 누적되는 매장입니다. 니고라멘·초라멘 10,500원이 시그니처 단품으로 1인 1만원선 식사가 무난하며, 토핑(챠슈·계란·멘마·김)을 500원~3,000원 단위로 추가할 수 있어 단가 조정이 자유롭습니다. "맛있다 · 웨이팅" 키워드가 후기에 누적되어 있어 12시~13시 피크 시간은 대기 가능성이 있습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 웨이팅 있다" 같은 평이 자주 언급되었습니다. 라멘 단품 만족도와 점심 피크 시간 대기가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 + 토핑</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">니고라멘</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,500원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">초라멘</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오코노미야끼</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">가라아게 5P</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,500원 · <strong>사이드</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">교자 6pcs</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,500원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">챠슈·계란·멘마 추가</p><p style="font-size:12px;color:#5f5e5a;margin:0">500~3,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 1만원선</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">웨이팅 맛집</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 수내동 21-1 MS프라자 1층 107호 · <strong>🕐 영업</strong> 17:00 시작 (점심 운영 매장 확인) · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1448-2525
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/니고라멘" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 니고라멘 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'dukki', text: '두끼 분당서현점 — 1만1,900원 떡볶이 무한리필', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20231025_48/1698201638191Ed7F9_PNG/%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6.png" alt="두끼 분당서현점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍡 무한리필</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 208건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 5,900~11,900원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">서현동 248-2 다두프라자 2층 201·202호, 분당선 서현역 도보 동선의 떡볶이 무한리필 매장입니다. <strong>일반 11,900원</strong> 한 가지 가격으로 떡·라면사리·튀김·어묵·즉석조리 사이드까지 무한 이용 가능해 1만원선 1인 한 끼 시나리오에 단가가 가장 명확합니다. 평점 4.3 · 리뷰 208건이 누적되어 있어 카테고리 검증 표본도 안정적이고, 학생·미취학 아동 가격(9,900원·5,900원)이 따로 있어 가족 혼합 단체에도 부담이 적습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"서비스 친절하다 · 맛있다" 같은 평이 자주 언급되었습니다. 무한리필 운영과 매장 응대 만족도가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3FautoRotate%3Dtrue%26quality%3D100%26type%3Df640_380%26src%3Dhttps%253A%252F%252Fldb-phinf.pstatic.net%252F20231025_48%252F1698201638191Ed7F9_PNG%22" alt="두끼 분당서현점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/MjAyMzEyMThfMTI4/MDAxNzAyODc5ODQxMjg2.OjDanChjR8F0uAKUMTmgnmFxBK2D3w4vGHZwC9p8ufog.zCwMm8bErsvf5pmA9BxlWnmfVC9CMlEYAVWg0L0M-S8g.JPEG/01.jpeg" alt="두끼 분당서현점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/20151224_274/soldecember_1450919610979CwBRA_JPEG/DSC04159.jpg?type=w773" alt="두끼 분당서현점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 가격 4종</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">일반</p><p style="font-size:12px;color:#5f5e5a;margin:0">11,900원 · <strong>무한리필</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">중·고등학생</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">초등학생</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미취학아동</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,900원 · <strong>최저가</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">무한리필</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">가족 혼합</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 서현동 248-2 다두프라자 2층 201·202호 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 031-707-7770
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/두끼 분당서현점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 두끼 분당서현점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'natural', text: '자연별곡 NC 야탑점 — 30첩 밥상 12,900원 · 표본 1위', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240619_181%2F1718778057716wLrUL_JPEG%2F1718778057457.jpg" alt="자연별곡 NC 야탑점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍚 한식뷔페</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.0 · 리뷰 3,889건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 5,900~17,900원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">👨‍👩‍👧 가족 외식</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.0 · <strong>리뷰 3,889건</strong>으로 본 가이드 5곳 중 표본 최다 매장입니다. 야탑동 357-1 8층, NC백화점 내 한식뷔페로 30첩 밥상 12,900원(솥밥 미제공)부터 시작해 제육볶음·코다리찜·소불고기 정식이 1만원대 후반까지 라인업 되어 있습니다. 한 끼 밑반찬을 무한 셀프로 가져갈 수 있어 1만원선 1인 식사에서 식단 다양성을 가장 넓게 확보 가능합니다. 초등 9,900원·미취학 5,900원 차등 가격까지 있어 가족 외식·단체 점심 시나리오에서도 단가가 명확합니다. "맛있다 · 가성비" 키워드가 후기에 누적되었습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 가성비 좋다" 같은 평이 자주 언급되었습니다. 30첩 밥상 한식뷔페와 1만원선 단가가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240619_181%2F1718778057716wLrUL_JPEG%2F1718778057457.jpg" alt="자연별곡 NC 야탑점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240619_204%2F17187780577167NgIo_JPEG%2F1718778057513.jpg" alt="자연별곡 NC 야탑점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240619_267%2F17187780577166FUVB_JPEG%2F1718778057499.jpg" alt="자연별곡 NC 야탑점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">30첩 밥상 (솥밥 미제공)</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,900원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">제육볶음 30첩 밥상</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">코다리찜 30첩 밥상</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소불고기 30첩 밥상</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,900원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">초등 30첩 밥상</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">미취학 30첩 밥상</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,900원 · <strong>최저가</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한식뷔페</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가족 외식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 야탑동 357-1 8층 · <strong>🕐 영업</strong> 20:30 종료 · <strong>🚗 주차</strong> NC백화점 주차장 · <strong>📞 전화</strong> 07-1374-0891
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/자연별곡 NC 야탑점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 자연별곡 NC 야탑점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'chunli', text: '춘리마라탕 야탑점 — 1인 마라탕 10,900원 · 새벽 01:00까지', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240319_204%2F1710819193037xtiZh_JPEG%2F1710819192862.jpg" alt="춘리마라탕 야탑점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🌶 마라탕 1인분</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.1 · 리뷰 354건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 2,900~29,900원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌙 01:00 영업</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">야탑동 366-3 2층 204호, 분당선 야탑역 도보 동선에 자리잡고 있는 마라탕 매장입니다. <strong>대한민국 대표 마라탕 1인분 10,900원</strong>이 점심 혼밥 시그니처이며, 꿔바로우 미니(5pc) 6,900원을 사이드로 묶으면 1만원선~1만8천원선까지 단가 조정이 가능합니다. <strong>새벽 01:00까지 영업</strong>이라 야근 후 늦은 한 끼·심야 마라탕 시나리오에 차별점이 명확하고, 평점 4.1 · 리뷰 354건이 누적되어 카테고리 검증 표본도 안정적입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"매운맛 단계 선택 가능 · 1인 마라탕 회전 빠름 · 사이드 꿔바로우 만족" 같은 평이 자주 언급되었습니다. 1인분 단가와 심야 영업이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240319_204%2F1710819193037xtiZh_JPEG%2F1710819192862.jpg" alt="춘리마라탕 야탑점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240319_165%2F1710819193037s9rZJ_JPEG%2F1710819192912.jpg" alt="춘리마라탕 야탑점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240319_30%2F1710819193037oqGoS_JPEG%2F1710819192890.jpg" alt="춘리마라탕 야탑점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 5종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">대표 마라탕 1인분</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,900원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">대표 마라탕 2~3인분</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마라샹궈 1인분</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마라샹궈 2~3인분</p><p style="font-size:12px;color:#5f5e5a;margin:0">29,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">꿔바로우 미니 5pc</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,900원 · <strong>사이드</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">심야 영업</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">매운 한 끼</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 야탑동 366-3 2층 204호 · <strong>🕐 영업</strong> 01:00 종료 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1470-9063
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/춘리마라탕 야탑점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 춘리마라탕 야탑점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'samcheong', text: '삼청동샤브 판교아이스퀘어점 — 멸치샤브 우삼겹 12,900원', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240605_295%2F1717550829148kfFRD_JPEG%2F1717550828975.jpg" alt="삼청동샤브 판교아이스퀘어점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 1인 샤브</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.0 · 리뷰 244건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,900~16,400원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">수정구 시흥동 296-3 파미어스몰 2층, 판교아이스퀘어 동선 안의 1인 샤브샤브 매장입니다. <strong>멸치샤브 우삼겹 12,900원</strong>이 시작가로 본 가이드 1만원대 카테고리 안에 깔끔하게 들어옵니다. 멸치샤브·된장샤브·간장샤브 3가지 베이스에 우삼겹·목심·쭈꾸미 토핑을 조합하면 12,900~16,400원선까지 단가가 자연스럽게 올라가며, 1인 1냄비 운영이라 혼밥 시나리오에 동선이 깔끔합니다. 평점 4.0 · 리뷰 244건은 본 5곳 중 평점은 평균선이지만, "맛있다 · 국물맛 · 분위기" 키워드가 함께 매칭되어 한 끼 만족도가 안정적인 편입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 국물맛 진하다 · 분위기 깔끔하다" 같은 평이 자주 언급되었습니다. 1인 샤브샤브 운영과 매장 분위기가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240605_295%2F1717550829148kfFRD_JPEG%2F1717550828975.jpg" alt="삼청동샤브 판교아이스퀘어점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240605_70%2F1717550829148XKDjQ_JPEG%2F1717550828995.jpg" alt="삼청동샤브 판교아이스퀘어점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240605_138%2F1717550829148ZTqex_JPEG%2F1717550828930.jpg" alt="삼청동샤브 판교아이스퀘어점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 베이스·토핑 조합</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">멸치샤브 우삼겹</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,900원 · <strong>시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">멸치샤브 목심</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">된장샤브 우삼겹</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">멸치샤브 우삼겹+쭈꾸미</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">간장샤브 우삼겹</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,900원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">된장샤브 목심+쭈꾸미</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,400원 · <strong>최고가</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">1인 1냄비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">국물맛 검증</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">판교아이스퀘어</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 수정구 시흥동 296-3 파미어스몰 2층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 파미어스몰 주차장 · <strong>📞 전화</strong> 031-752-7216
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/삼청동샤브 판교아이스퀘어점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 삼청동샤브 판교아이스퀘어점 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>니고라멘</strong><br><span style="font-size:11px;color:#888780">라멘·일식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">641건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">10,500원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 토핑 자유</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>두끼 분당서현점</strong><br><span style="font-size:11px;color:#888780">분식·무한리필</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">208건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">5,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">11,900원 떡볶이 무한</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>자연별곡 NC 야탑점</strong><br><span style="font-size:11px;color:#888780">한식뷔페</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">3,889건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">5,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">30첩 밥상 + 표본 1위</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>춘리마라탕 야탑점</strong><br><span style="font-size:11px;color:#888780">마라탕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.1<br><span style="font-size:11px;color:#888780">354건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">2,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">1인분 + 새벽 01:00 영업</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>삼청동샤브 판교아이스퀘어점</strong><br><span style="font-size:11px;color:#888780">샤브샤브</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">244건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">12,900원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">1인 1냄비 + 베이스 3종</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심은 어떤 분위기인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 1만원 안팎 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>니고라멘</strong> 10,500원 또는 <strong>춘리마라탕 야탑점</strong> 1인분 10,900원. 두 곳 모두 회전이 빠른 단품 식당입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍡 무한리필·푸짐한 양</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>두끼 분당서현점</strong> 11,900원으로 떡·라면사리·튀김 무한. 점심 회식 가벼운 단체에도 단가가 명확합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍚 한식 정식·가족 외식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>자연별곡 NC 야탑점</strong> — 30첩 밥상 12,900원, 초등·미취학 차등 가격까지 있어 가족 혼합 단체에 무난합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌙 야근 후 늦은 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>춘리마라탕 야탑점</strong> — 새벽 01:00까지 영업. 매운 한 그릇으로 야간 시나리오 1순위입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 1인 1냄비·국물 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>삼청동샤브 판교아이스퀘어점</strong> — 멸치샤브 우삼겹 12,900원 시작, 베이스 3종·토핑 조합 자유.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>니고라멘</strong>은 17:00 영업 시작 데이터가 있어 점심 운영 여부는 매장에 한 번 확인하시는 편이 안전합니다. 토핑 추가는 500~3,000원선으로 단가가 자연스럽게 늘어납니다.</li>
<li><strong>춘리마라탕 야탑점</strong>은 새벽 01:00까지 영업이지만, 점심 12시·저녁 19시 피크 시간에 1인분 회전이 빠르게 일어나니 12시 직전 또는 13:30 입장이 안전합니다.</li>
<li><strong>자연별곡 NC 야탑점</strong>은 NC백화점 8층 매장으로 주말·공휴일 점심은 대기 가능성이 큽니다. 평일 11:30 또는 14:00 입장을 권장드립니다.</li>
<li><strong>두끼 분당서현점</strong>은 무한리필이지만 시간 제한이 있을 수 있어 매장 안내를 확인하시기 바랍니다. 미취학아동 5,900원·초등 9,900원 차등 가격이 별도입니다.</li>
<li><strong>삼청동샤브 판교아이스퀘어점</strong>은 파미어스몰 동선이며 매장 주차 안내가 별도 표기되지 않아 파미어스몰 공용 주차장 또는 대중교통 이용을 권장드립니다.</li>
<li>가격·메뉴 구성은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 판교 1만원 안팎으로 혼밥 한 그릇이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>니고라멘</strong>의 니고라멘 10,500원이 평점 1순위입니다. 평점 4.4 · 리뷰 641건으로 검증되어 있고, 토핑 추가도 500원 단위로 가능해 단가 조정이 자유롭습니다. 마라탕 한 그릇이 좋으시면 <strong>춘리마라탕 야탑점</strong> 1인분 10,900원이 차순위입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 무한리필로 푸짐하게 먹고 싶다면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>두끼 분당서현점</strong>이 1만1,900원 단가에 떡·라면사리·튀김 무한입니다. 초등 9,900원·미취학 5,900원 차등 가격까지 있어 가족 혼합 단체 점심에도 무난합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 야근 후 늦은 한 끼면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>춘리마라탕 야탑점</strong>이 새벽 01:00까지 영업입니다. 1인 마라탕 10,900원으로 단가도 1만원선 안에서 안정적입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가족 외식·식단 다양성이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>자연별곡 NC 야탑점</strong>이 1순위입니다. 30첩 밥상 12,900원에 밑반찬·식단 다양성이 가장 넓고, 초등·미취학 차등 가격까지 있어 가족 단체에 단가가 명확합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 1인 샤브샤브 가능한 곳이 있나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>삼청동샤브 판교아이스퀘어점</strong>이 1인 1냄비 운영입니다. 멸치샤브 우삼겹 12,900원 시작가로 1만원대 안에서 마무리 가능하고, 베이스 3종·토핑 조합이 자유롭습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 표본이 가장 많은 식당은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>자연별곡 NC 야탑점</strong>의 리뷰 3,889건이 본 5곳 중 표본 최다입니다. 평점만 보시면 <strong>니고라멘</strong>(4.4)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/pangyo/category/budget', text: '판교역 가성비 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">판교역 902곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">판교역 일대 902곳에서 1만원 안팎으로 혼밥 한 끼가 가능한 식당을 필터링해, 카테고리 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰·운영 시간·가격대 4가지를 함께 본 결과, 라멘·분식·한식뷔페·마라탕·샤브샤브로 한 끼 선택지가 자연스럽게 다섯 갈래로 나뉘었습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>니고라멘(4.4)</strong>이 1순위, 리뷰 표본 크기로는 <strong>자연별곡 NC 야탑점(3,889건)</strong>이 1순위입니다. 두 식당은 카테고리가 달라 검색 의도가 겹치지 않으니, 라멘 한 그릇이면 니고라멘, 한식 정식이면 자연별곡 식으로 분리해서 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">단가 1만원 이하 시작가가 필요하시면 <strong>두끼 분당서현점</strong>(미취학 5,900원·일반 11,900원)이 가장 명확하고, 야근 후 늦은 한 끼라면 <strong>춘리마라탕 야탑점</strong>(새벽 01:00 영업)이 차별점이 명확합니다. 평점 4.0 식당(자연별곡·삼청동샤브)은 표본 크기와 카테고리 차별점으로 포함했고, 메인 메뉴 위주로 주문하시면 만족도 편차가 적은 편입니다.</p>
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
