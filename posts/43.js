// 판교역 일식·스시 맛집 추천 5곳 — 식당별 unique 콘텐츠
const post = {
  id: 43,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>판교역</strong> 일대에서 스시·규카츠·라멘 같은 일식 한 끼를 찾을 때 갈 만한 식당 5곳을 정리했습니다. 판교테크노밸리 직장인이 많은 동네라 일식·스시 카테고리만 따로 추려, 평점·리뷰 표본·메뉴 구성·운영 안정성 4가지 기준으로 골랐습니다. 점심 스시 가성비, 규카츠 회식, 점심 초밥 세트, 분위기 데이트까지 상황별 1순위가 다르니 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">902곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">판교·삼평·동판교 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.5</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.3 ~ 4.8</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">7,960건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">12,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">점심 세트 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">평점·표본 둘 다 안정적인 일식이면 <strong>규카츠정 판교점</strong> — 평점 4.8점·리뷰 2,937건으로 검증 1순위.<br><br>가성비 점심 스시면 <strong>스시가 좋아서</strong> (평점 4.7점·리뷰 490건, 12,000원~22,000원).<br><br>표본 가장 두꺼운 데이트 일식이면 <strong>카츠쇼신</strong> (평점 4.3점·리뷰 4,016건).<br><br>점심 초밥·우동 세트면 <strong>생선회관</strong> (점심 세트 12,000원~28,000원, 주차 가능).<br><br>삼평동 오피스 점심 일식이면 <strong>차차식당 판교</strong> (평점 4.3점·리뷰 507건).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '판교역 일식·스시 맛집 선정 기준', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 메뉴 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>일식 카테고리 매칭</strong> — 스시·규카츠·초밥세트·일식당으로 한 끼 선택지 분산</li>
<li><strong>네이버 플레이스 리뷰 표본</strong> — 평균값이 흔들리지 않을 만큼 리뷰가 쌓인 식당 우선</li>
<li><strong>평점 4.0점 이상</strong> — 판교 일식 카테고리 평균선 기준</li>
<li><strong>판교역 접근성</strong> — 삼평동·동판교 등 판교역 도보·차량 동선 위주로 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">판교·삼평·동판교 일대 902곳 중 일식·스시 한 끼에 들어가는 식당을 먼저 골라낸 뒤, 평점·리뷰 표본·메뉴 구성·운영 안정성이 안정적인 5곳을 추렸습니다. 같은 메뉴 중복을 피해 규카츠·스시·초밥세트·일식당으로 분산했고, 평점이 다소 낮은 식당(카츠쇼신·차차식당 판교 4.3)은 <strong>리뷰 표본 크기 또는 동선 차별점</strong>이 명확할 때만 포함했습니다.</p>`
    },

    { type: 'h2', id: 'gyukatsu', text: '규카츠정 판교점 — 평점 4.8·리뷰 2,937건, 일식 검증 1순위', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250805_107%2F1754389548092UfXzx_PNG%2F%25B1%25D4%25C4%25AB%25C3%25F7%25C1%25A4_%25BB%25E7%25C1%25F8.png" alt="규카츠정 판교점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 일식 검증 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 리뷰 2,937건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍱 규카츠 전문</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📝 블로그 815건</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>평점 4.8을 리뷰 2,937건·블로그 815건이라는 큰 표본 위에서 유지하는 게 핵심</strong>입니다. 삼평동 680 에이치스퀘어 S동 1층, 판교역에서 도보로 접근 가능합니다. 평점이 높으면서 표본까지 두꺼운 일식이 흔치 않은데, 이 식당은 둘 다 충족해 본 가이드 일식 카테고리 검증 1위입니다. 규카츠 단품 중심 운영이라 점심 회전이 빠르고, 일행 입맛이 갈려도 규카츠·정식으로 무난하게 정리됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"규카츠가 맛있다 · 서비스가 좋다 · 매장 분위기가 좋다" 같은 평이 자주 언급되었습니다. 단품 회전과 큰 표본 규모가 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250805_107%2F1754389548092UfXzx_PNG%2F%25B1%25D4%25C4%25AB%25C3%25F7%25C1%25A4_%25BB%25E7%25C1%25F8.png" alt="규카츠정 판교점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250805_165%2F1754389600348LMw38_PNG%2F%25B1%25D4%25C4%25AB%25C3%25F7%25C1%25A4_%25B4%25EB%25C7%25A5%25BB%25E7%25C1%25F8_2.png" alt="규카츠정 판교점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230527_266%2F1685147105488p0LoN_PNG%2F%25B1%25D7%25B8%25B25.png" alt="규카츠정 판교점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (규카츠 전문)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">규카츠 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">규카츠 + 메밀</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">규카츠 카레</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드·음료</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">규카츠 전문</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 추천</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">리뷰 많음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 경기 성남시 분당구 삼평동 680 에이치스퀘어 S동 1층 115호 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 070-4323-6201
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/규카츠정 판교점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 규카츠정 판교점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'sushi', text: '스시가 좋아서 — 12,000원대 시작, 점심 가성비 스시 1순위', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3FautoRotate%3Dtrue%26quality%3D100%26type%3Df640_380%26src%3Dhttps%253A%252F%252Fldb-phinf.pstatic.net%252F20180107_194%252F15153361432648qaDz_JPEG%252FF6G9zB9N5i5ZMi0A1BGN5rYK.jpg%22&type=ff500_300" alt="스시가 좋아서 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍣 가성비 스시 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 490건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~22,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📝 블로그 154건</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>점심 스시를 12,000원선부터 먹을 수 있는 게 가장 큰 무기</strong>입니다. 삼평동 721, 평점 4.7점·리뷰 490건으로 가성비 스시 카테고리에서 검증 신뢰가 안정적입니다. 11:30~21:30 영업이라 점심·저녁 모두 가능하고, 22,000원선까지 올라가도 부담이 크지 않아 판교 직장인 점심 스시 자리로 잘 맞습니다. 친절하다는 평가가 함께 누적되어 혼밥·소규모 자리에도 무난합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"가성비가 좋다 · 점심 스시로 만족스럽다 · 응대가 친절하다" 같은 평이 자주 언급되었습니다. 점심 가격대와 친절 평가가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (스시 전문)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">점심 스시 세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원선 · <strong>최저가·시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모둠 초밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원선 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특선 스시</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우동·사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 스시</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">친절</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 경기 성남시 분당구 삼평동 721 · <strong>🕐 영업</strong> 11:30~21:30 (매장 공지 우선) · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-781-4920
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/스시가 좋아서" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 스시가 좋아서 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'katsu', text: '카츠쇼신 — 리뷰 4,010건 표본 최다, 분위기 데이트 일식', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3FautoRotate%3Dtrue%26quality%3D100%26type%3Df640_380%26src%3Dhttps%253A%252F%252Fldb-phinf.pstatic.net%252F20251014_250%252F1760412496145oBag6_JPEG%252FKakaoTalk_20250424_155526692.jpg%22&type=ff500_300" alt="카츠쇼신 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💑 데이트 일식 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 4,016건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~22,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 사진 명소</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.3은 본 가이드 평균(4.5) 아래입니다. 다만 <strong>리뷰 4,016건은 본 가이드 5곳 중 가장 많은 표본</strong>이라, 동판교에서 일식·돈카츠 검색 의도가 가장 두꺼운 식당입니다. 동판교로177번길 25 2층 204호, 분위기 좋다·사진 잘 나온다는 평가가 함께 누적되어 데이트·기념일 가벼운 일식 자리로 잘 맞습니다. 평점이 평균 아래인 만큼 호불호가 갈리는 표본이 함께 쌓인 것으로 보이므로, 대표 돈카츠·정식 위주로 주문하시면 만족도 편차가 줄어듭니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"매장 분위기가 좋다 · 사진이 잘 나온다 · 데이트로 자주 온다" 같은 평이 자주 언급되었습니다. 분위기와 큰 표본 규모가 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (돈카츠·일식)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">대표 돈카츠 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원선 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">로스·히레카츠</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특선 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원선</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드·음료</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">데이트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">사진 명소</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">리뷰 많음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 경기 성남시 분당구 동판교로177번길 25 2층 204호 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 050-71473-8690
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/카츠쇼신" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 카츠쇼신 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'saengseon', text: '생선회관 — 점심 초밥·우동 세트 12,000원선, 주차 가능', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251028_251%2F1761642111689VhXBq_JPEG%2FIMG_9323.jpeg" alt="생선회관 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍱 점심 초밥 세트 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 17건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~28,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>점심 초밥·우동 세트 메뉴가 10종으로 가장 구체적으로 정리된 식당</strong>입니다. 삼평동 618 판교우림W시티 1층 129호, 평점 4.5이지만 리뷰 17건으로 표본이 5곳 중 가장 작아 이 점을 함께 짚어 둡니다. 다만 점심 우동세트 12,000원부터 광어연어·특초밥 세트까지 가격이 명확히 공개되어 있어 예산을 잡고 가기 쉽고, 주차가 되어 차로 이동하는 점심 자리에 유리합니다. 17:30 저녁 영업도 운영되니 점심 세트는 영업일 매장 확인이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 재방문 의사가 있다 · 점심 세트 구성이 알차다" 같은 평이 자주 언급되었습니다. 명확한 세트 가격과 주차 편의가 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251028_251%2F1761642111689VhXBq_JPEG%2FIMG_9323.jpeg" alt="생선회관 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251013_163%2F1760306050183D3yBy_JPEG%2FIMG_9007.jpeg" alt="생선회관 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251013_234%2F1760306050157ENUkl_JPEG%2FIMG_9012.jpeg" alt="생선회관 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 (점심 세트)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우동세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">얼큰김치우동세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">불초밥세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모둠초밥세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">광어연어세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특초밥세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">28,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 세트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">초밥·우동</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">예산 잡기 쉬움</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 경기 성남시 분당구 삼평동 618 판교우림W시티 1층 129호 · <strong>🕐 영업</strong> 점심·17:30 저녁 (영업일 매장 확인) · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 031-628-8889
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/생선회관" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 생선회관 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'chacha', text: '차차식당 판교 — 삼평동 오피스 점심 일식 옵션', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20230508_186/1683501767086xccC1_JPEG/KakaoTalk_20230429_161239363.jpg" alt="차차식당 판교 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏢 오피스 점심 일식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 507건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍱 일식당</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📝 블로그 36건</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">삼평동 678 삼환하이펙스 A동 지하 1층에 있어 <strong>판교테크노밸리 오피스 점심 동선이 짧은</strong> 일식당입니다. 평점 4.3점·리뷰 507건으로 본 가이드 평균(4.5) 아래지만, 카츠쇼신(4,010건)과 달리 표본이 중간 규모라 동선·접근성에서 차별점이 명확합니다. 오피스 빌딩 지하라 점심에 빠르게 한 끼 해결하고 자리로 복귀하기 좋은 위치입니다. 평점이 평균 아래인 만큼 대표 메뉴 위주로 주문하시면 만족도 편차가 줄어듭니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 점심에 빠르게 먹기 좋다 · 오피스에서 가깝다" 같은 평이 자주 언급되었습니다. 오피스 점심 동선과 빠른 회전이 후기 키워드로 함께 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (일식당)</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">덮밥·정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우동·소바</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">초밥·롤</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">사이드·음료</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 문의</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">오피스 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">삼평동</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">빠른 회전</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 경기 성남시 분당구 삼평동 678 삼환하이펙스 A동 지하1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 0507-1364-5023
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/차차식당 판교" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 차차식당 판교 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>규카츠정 판교점</strong><br><span style="font-size:11px;color:#888780">규카츠</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">2,937건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점·표본 둘 다 1순위</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>스시가 좋아서</strong><br><span style="font-size:11px;color:#888780">스시</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.7<br><span style="font-size:11px;color:#888780">490건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">12,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">점심 가성비 스시</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>카츠쇼신</strong><br><span style="font-size:11px;color:#888780">돈카츠·일식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">4,010건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">12,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 최다 + 분위기 데이트</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>생선회관</strong><br><span style="font-size:11px;color:#888780">초밥·우동 세트</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">17건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">12,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">점심 세트 명확 + 주차 가능</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>차차식당 판교</strong><br><span style="font-size:11px;color:#888780">일식당</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">506건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">매장 문의</strong></td>
<td style="padding:11px 10px;font-size:12.5px">삼평동 오피스 점심 동선</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 일식은 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍱 실패 없는 점심 일식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>규카츠정 판교점</strong> — 평점 4.8·리뷰 2,937건. 평점과 표본 둘 다 안정적이라 일행 데려가기 부담 없는 1순위입니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍣 가성비 점심 스시</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>스시가 좋아서</strong> — 점심 스시 12,000원선부터. 11:30~21:30 영업으로 점심·저녁 모두 가능, 혼밥에도 무난합니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💑 분위기 데이트 일식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>카츠쇼신</strong> — 동판교, 분위기 좋다·사진 잘 나온다 평가. 리뷰 4,010건으로 표본이 가장 두껍습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🚗 차로 가는 점심 초밥 세트</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>생선회관</strong> — 점심 세트 12,000~28,000원 가격이 명확하고 주차 가능. 예산을 잡고 가기 쉽습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🏢 빠른 오피스 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>차차식당 판교</strong> — 삼평동 오피스 빌딩 지하, 점심에 빠르게 먹고 자리 복귀하기 좋은 동선입니다.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>생선회관</strong>은 점심 세트와 17:30 저녁 영업이 함께 운영됩니다. 점심 세트는 영업일·시간을 매장에 한 번 더 확인하시는 편이 안전합니다.</li>
<li><strong>생선회관</strong>만 주차가 확인됩니다. <strong>규카츠정 판교점·스시가 좋아서·카츠쇼신·차차식당 판교</strong>는 전용 주차장 정보가 확인되지 않아 인근 공영주차장 또는 신분당선 판교역 대중교통이 더 편합니다.</li>
<li><strong>규카츠정 판교점·차차식당 판교</strong>는 오피스 빌딩 내·인근이라 평일 점심 12시 피크엔 대기가 생길 수 있습니다. 11:30~11:50 입장이 여유롭습니다.</li>
<li><strong>카츠쇼신·차차식당 판교</strong>는 평점 4.3으로 본 가이드 평균(4.5) 아래입니다. 대표 돈카츠·정식 위주로 주문하시면 만족도 편차가 줄어듭니다.</li>
<li>일부 식당은 메뉴별 단품 가격이 공개되어 있지 않아 본문에 "매장 문의"로 표기했습니다. 정확한 가격은 방문 시 확인하시는 편이 안전합니다.</li>
<li>메뉴 가격·영업시간은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 판교역에서 실패 없는 점심 일식은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>규카츠정 판교점</strong>이 1순위입니다. 평점 4.8을 리뷰 2,937건·블로그 815건이라는 큰 표본 위에서 유지해, 평점과 검증 신뢰가 둘 다 안정적입니다. 일행을 데려가도 부담이 적은 선택지입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심에 가성비로 스시 먹기 좋은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>스시가 좋아서</strong>가 1순위입니다. 점심 스시를 12,000원선부터 먹을 수 있고 평점 4.7·리뷰 490건으로 검증이 안정적입니다. 11:30~21:30 영업이라 점심·저녁 모두 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 세트 가격을 미리 알고 가고 싶은 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>생선회관</strong>이 1순위입니다. 점심 우동세트 12,000원부터 광어연어·특초밥 세트까지 가격이 명확히 공개되어 예산을 잡고 가기 쉽고, 주차도 가능합니다. 다만 리뷰 17건으로 표본은 작은 편입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 데이트·기념일 일식이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>카츠쇼신</strong>이 후보입니다. 동판교에 있고 분위기 좋다·사진 잘 나온다는 평가가 함께 누적되며 리뷰 4,010건으로 표본이 가장 두껍습니다. 평점 4.3으로 평균 아래라 대표 돈카츠·정식 위주로 주문하시면 만족도 편차가 줄어듭니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>생선회관</strong>만 주차가 확인되고, <strong>규카츠정 판교점·스시가 좋아서·카츠쇼신·차차식당 판교</strong>는 전용 주차장 정보가 확인되지 않아 인근 공영주차장 또는 신분당선 판교역 대중교통이 더 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 낮은 식당도 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>카츠쇼신·차차식당 판교</strong>는 평점 4.3으로 본 가이드 평균(4.5) 이하지만, 카츠쇼신은 리뷰 4,010건으로 표본이 가장 두껍고, 차차식당 판교는 삼평동 오피스 점심 동선이라는 차별점이 명확해 포함했습니다. 평점만 기준이면 <strong>규카츠정 판교점</strong>(4.8)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/pangyo', text: '판교역 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">판교 902곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">판교·삼평·동판교 일대 902곳에서 일식·스시 한 끼에 들어가는 식당을 필터링해, 메뉴 분산까지 고려해 5곳을 정리했습니다. 평점·리뷰 표본·메뉴 구성·운영 안정성 4가지를 함께 본 결과 규카츠·스시·돈카츠·초밥세트·일식당으로 선택지가 자연스럽게 갈렸습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 우선이면 <strong>규카츠정 판교점(4.8)</strong>이 1순위, 리뷰 표본 크기로는 <strong>카츠쇼신(4,010건)</strong>이 1순위입니다. 메뉴가 달라 검색 의도가 겹치지 않으니, 규카츠면 규카츠정, 가성비 스시면 스시가 좋아서, 분위기 데이트면 카츠쇼신 식으로 분리해서 고르시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>카츠쇼신·차차식당 판교</strong>는 평점 4.3으로 평균 아래지만, 카츠쇼신은 표본 최다, 차차식당 판교는 오피스 점심 동선이라는 차별점으로 포함했습니다. 호불호가 갈리는 식당이라 대표 메뉴 위주로 주문하시면 만족도 편차가 줄어듭니다. 평점 우선이면 규카츠정·스시가 좋아서·생선회관이 안정 후보입니다.</p>
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
