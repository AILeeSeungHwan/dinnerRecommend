// 판교역 접대·비즈니스 식사 5선 — 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 22,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>판교역</strong>에서 비즈니스 식사·접대·격식 있는 자리에 어울리는 4만원~9만원선 프리미엄 식당 5곳을 정리했습니다. 신분당선·경강선 판교역 일대 902곳에서 평점·리뷰 표본·가격대·예약 가능 4가지를 기준으로 추려, 일식 코스·일식 샤브샤브·한우 단품·한식 보쌈·일식 샤브 + 스키야키까지 5종으로 메뉴를 분산했습니다. 부서장 외부 식사·고객 접대·기념일·임원 회식까지 시나리오를 함께 묶었습니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">902곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">판교·백현·서현·아브뉴프랑</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.3</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.0 ~ 4.9</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">1,665건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">최고가</p><p style="font-size:20px;font-weight:600;margin:0">90,000원</p><p style="font-size:11px;color:#888780;margin:4px 0 0">1인 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">평점 1순위 일식 코스 접대는 <strong>꿰다 판교아브뉴프랑점</strong> (★ 4.9 · 봄과 장 코스 75,000원 단일 단가, 예약·주차 가능). 따뜻한 코스로 격식 있는 자리면 <strong>너와집 백합 샤브샤브 백현점</strong> (백합특선 59,000원·백합진수 79,000원). 한우 단품으로 부서장 외부 식사면 <strong>하누소 The Hill</strong> (꽃등심 63,000원·살치살 72,000원·우마카세 85,000원). 한식 보쌈·낙지 코스 접대면 <strong>오봉집 서현역점</strong> (낙지스페셜 59,000원·매생이연포보쌈 59,000원). 일식 스키야키 4만원선이면 <strong>화수목 샤브샤브 스키야키</strong> (관동 한우 스키야키전골 43,000원).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 메뉴 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>1인 단가 4만원~9만원선</strong> — 비즈니스 접대 표준 가격대</li>
<li><strong>네이버 플레이스 리뷰 200건 이상</strong> — 접대 자리 만족도 표본 안정성</li>
<li><strong>평점 4.0점 이상</strong> — 접대 단가 대비 평균 만족도</li>
<li><strong>메뉴 분산 + 예약 가능 표기</strong> — 일식 코스·샤브샤브·한우·한식 보쌈으로 의도 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">판교역 일대 902곳 중 4만원 이상 코스·단품 라인이 있고 평점·리뷰 표본이 안정적인 식당은 약 35곳이었습니다. 그중 예약·주차·매장 분위기가 함께 안정적인 식당 5곳을 추렸습니다. 같은 메뉴 중복을 피해 일식 코스·일식 샤브·한우 단품·한식 보쌈·일식 스키야키로 접대 의도를 분산했고, 4만3천원선부터 9만원선까지 단가를 펼쳐 자리 격에 맞춰 선택 가능하도록 정리했습니다.</p>`
    },

    { type: 'h2', id: 'kkweda', text: '꿰다 판교아브뉴프랑점 — 평점 4.9 일식 코스 75,000원 접대', gradientStyle: { from: '#4338CA', to: '#1E1B4B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20260302_86/17724249627445LuFU_JPEG/IMG_6583.jpg" alt="꿰다 판교아브뉴프랑점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#4338CA;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 일식 코스 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 383건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 75,000원 단일 코스</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점 1순위(★ 4.9)</strong>인 일식 코스 접대 매장입니다. 삼평동 740 판교 호반 써밋 플레이스 1층 143호, <strong>아브뉴프랑 동선</strong> 안에 자리잡고 있어 접대 자리 식후 카페·티타임 동선까지 짧게 묶을 수 있습니다. <strong>봄과 장 코스 75,000원 단일 단가</strong>로 운영되어 사전 예산 계산이 명확하고, 코스 구성도 감자 냉수프·보리 샐러드·찐 전복과 가지·새우 카넬로니·맑은 닭 국·로스트 비프·아나고 가츠동·레어치즈 케이크로 짜여 있어 한 자리에서 자연스러운 흐름을 만들 수 있습니다. 예약·주차 모두 가능해 부서장 외부 식사·고객 접대 사전 준비에 부담이 적고, 17:00 영업 시작이라 디너 접대 1순위입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"분위기 좋다 · 재방문 하고 싶다 · 맛있다" 같은 평이 자주 언급되었습니다. 75,000원 단일 코스에 대한 만족도와 매장 분위기가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://ldb-phinf.pstatic.net/20260302_86/17724249627445LuFU_JPEG/IMG_6583.jpg" alt="꿰다 판교아브뉴프랑점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://ldb-phinf.pstatic.net/20260302_110/1772424870487G1KUC_JPEG/8514E5B2-3A8B.jpg" alt="꿰다 판교아브뉴프랑점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://ldb-phinf.pstatic.net/20260302_86/17724249627445LuFU_JPEG/IMG_6583.jpg" alt="꿰다 판교아브뉴프랑점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 (봄과 장 코스)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디너 봄과 장 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">75,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">런치 봄과 장 코스</p><p style="font-size:12px;color:#5f5e5a;margin:0">75,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">전채</p><p style="font-size:12px;color:#5f5e5a;margin:0">감자 냉수프·보리 샐러드</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">중간</p><p style="font-size:12px;color:#5f5e5a;margin:0">찐 전복과 가지·새우 카넬로니</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">메인</p><p style="font-size:12px;color:#5f5e5a;margin:0">로스트 비프·아나고 가츠동</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">디저트</p><p style="font-size:12px;color:#5f5e5a;margin:0">레어치즈 케이크</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">접대</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">평점 1위</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 삼평동 740 판교 호반 써밋 플레이스 1층 143호 · <strong>🕐 영업</strong> 17:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1410-4775
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/꿰다 판교아브뉴프랑점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 꿰다 판교아브뉴프랑점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'neowajip', text: '너와집 백합 샤브샤브 백현점 — 따뜻한 코스 접대 39,000~79,000원', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20251016_163/1760584967628Eb1Dc_JPEG/%BC%BF%C7%C12.jpg" alt="너와집 백합 샤브샤브 백현점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 샤브 코스 접대</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 436건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 35,000~79,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">백현동 490-9 동선의 일식 백합 샤브샤브 매장입니다. <strong>너와집 정식 39,000원·종일 백합 정식 45,000원·백합특선 59,000원·백합진수 79,000원</strong>으로 코스 단가가 단계별로 명확해 자리 격에 맞춰 선택이 쉽고, 예약·주차 모두 가능해 임원 회식·고객 접대 사전 준비에 부담이 적습니다. 17:00 영업 시작이라 디너 접대 시간대 매칭이 깔끔하고, 따뜻한 한 끼 시나리오라 가을·겨울·우천 시 접대 자리에도 잘 맞습니다. 평점 0점·리뷰 436건이 누적되어 표본 안정성도 확보됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물 깊다 · 코스 구성 충실 · 매장 분위기 차분하다" 같은 평이 자주 언급되었습니다. 코스 단가 명확성과 접대 자리 분위기가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 (코스 단가 단계)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">일품요리</p><p style="font-size:12px;color:#5f5e5a;margin:0">35,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">너와집 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">주말특선</p><p style="font-size:12px;color:#5f5e5a;margin:0">43,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">종일 백합 정식</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">백합특선·봄의향연·가을특선</p><p style="font-size:12px;color:#5f5e5a;margin:0">59,000원 · <strong>접대 표준</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">백합진수</p><p style="font-size:12px;color:#5f5e5a;margin:0">79,000원 · <strong>최고가</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">접대</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">샤브 코스</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 백현동 490-9 · <strong>🕐 영업</strong> 17:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1379-8107
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/너와집 백합 샤브샤브 백현점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 너와집 백합 샤브샤브 백현점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'hanusoo', text: '하누소 The Hill — 한우 단품 부서장 외부 식사 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241025_43%2F1729820213816uihPp_JPEG%2FIMG_4036.jpeg" alt="하누소 The Hill 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 한우 단품 접대</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 2.2 · 리뷰 247건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 53,000~85,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">백현동 500-9, 한우 단품·우마카세 라인을 갖춘 매장입니다. <strong>한우 등심(130g) 53,000원·꽃등심 63,000원·특안심(샤또브리앙) 130g 65,000원·살치살·새우살·안창살 각 130g 72,000원·한우우마카세 85,000원</strong>으로 부위별 단가가 명확해 접대 자리에서 손님 취향에 맞춰 선택할 수 있습니다. 예약·주차 모두 가능해 부서장 외부 식사·임원 회식 사전 준비 부담이 적고, "주차 편함 · 분위기 좋음" 키워드가 후기에 매칭됩니다. 평점 4.0은 본 5곳 평균보다 약간 낮지만 한우 단품 라인업의 명확성과 단가 폭이 차별점입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"주차 편함 · 한우 단품 품질 좋다 · 매장 분위기 차분하다" 같은 평이 자주 언급되었습니다. 부위별 단가와 차량 접근성이 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241025_43%2F1729820213816uihPp_JPEG%2FIMG_4036.jpeg" alt="하누소 The Hill 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241025_269%2F1729820216117XbBV0_JPEG%2FIMG_4067.jpeg" alt="하누소 The Hill 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241025_75%2F1729820224194qNGTl_JPEG%2FIMG_4035.jpeg" alt="하누소 The Hill 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 (한우 부위별 단품)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 등심(130g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">53,000원 · <strong>시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 꽃등심(130g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">63,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특안심 샤또브리앙(130g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">65,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">살치살·새우살·안창살(130g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">72,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 우마카세</p><p style="font-size:12px;color:#5f5e5a;margin:0">85,000원 · <strong>코스</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">명품갈비탕·솥밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원 · <strong>식사</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">접대</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한우 부위별</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약·주차</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">우마카세</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 백현동 500-9 · <strong>🕐 영업</strong> 17:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1428-9980
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/하누소 The Hill" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 하누소 The Hill 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'obongjip', text: '오봉집 서현역점 — 한식 보쌈·낙지 접대 13,000~59,000원', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20250319_176/1742366253049KnYV5_JPEG/11.jpg" alt="오봉집 서현역점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍚 한식 보쌈 접대</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 606건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 13,000~59,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">서현동 248-2 2층 203호, 분당선 서현역 도보 동선의 한식 보쌈·낙지 매장입니다. <strong>오봉집 낙지스페셜·매생이연포보쌈 각 59,000원·오봉집 제낙스페셜 57,000원·오봉집 제육스페셜 55,000원</strong>으로 접대 단가 라인이 명확하고, 33,000원선 매생이연포탕·오봉집 보쌈(부드러운 가브리살)·얼큰낙지전골 32,000원선까지 두 사람 접대에서 4~6인 부서 단위 식사까지 단가 폭이 넓습니다. 평점 0점·리뷰 606건이 누적되어 표본 안정성도 확보되고, 주차 가능 표시까지 있어 차량 동선 접대에도 부담이 적습니다. 16:00 영업 시작이라 디너 접대 시간대 매칭이 자연스럽습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 서비스 친절하다 · 보쌈·낙지 단가 명확" 같은 평이 자주 언급되었습니다. 한식 보쌈 접대 라인업과 매장 응대 만족도가 함께 묶이는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 (접대 라인업)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">직화낙지볶음(2인 이상)</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">조개탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">얼큰낙지전골·매생이연포탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">32,000~33,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오봉집 보쌈 (가브리살)</p><p style="font-size:12px;color:#5f5e5a;margin:0">33,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오봉집 제육·제낙스페셜</p><p style="font-size:12px;color:#5f5e5a;margin:0">55,000~57,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오봉집 낙지스페셜·매생이연포보쌈</p><p style="font-size:12px;color:#5f5e5a;margin:0">59,000원 · <strong>시그니처</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">접대</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한식 보쌈·낙지</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서현역 도보</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 서현동 248-2 2층 203호 · <strong>🕐 영업</strong> 16:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1389-5315
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/오봉집 서현역점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 오봉집 서현역점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'hwasumok', text: '화수목 샤브샤브 스키야키 — 일식 4만3천원선 부담 적은 접대', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250417_106%2F1744892505152bVNqK_JPEG%2FR5_01776.JPG" alt="화수목 샤브샤브 스키야키 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 스키야키 접대</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 3,840건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 18,000~43,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">서현동 273-2 대현빌딩 1층, 분당선 서현역 도보 동선의 일식 샤브샤브·스키야키 매장입니다. 평점 4.1 · <strong>리뷰 3,840건</strong>으로 본 가이드 5곳 중 표본 1위이며, 단가는 런치 1만8천원 시작 ~ 디너 한우 스키야키전골 43,000원까지 펼쳐 있어 4만원선 부담 적은 접대 자리에 깔끔하게 들어옵니다. 가벼운 접대·동료 외부 식사·소규모 미팅 점심까지 활용 가능한 단가가 차별점입니다. "맛있다 · 분위기" 키워드가 후기에 매칭됩니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 매장 분위기 좋다 · 단가 부담 적다" 같은 평이 자주 언급되었습니다. 스키야키 코스와 부담 적은 접대 시나리오가 함께 묶이는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250417_106%2F1744892505152bVNqK_JPEG%2FR5_01776.JPG" alt="화수목 샤브샤브 스키야키 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250417_223%2F1744892667782Twlkj_JPEG%2FR5_01875.JPG" alt="화수목 샤브샤브 스키야키 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250417_106%2F1744892505152bVNqK_JPEG%2FR5_01776.JPG" alt="화수목 샤브샤브 스키야키 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 (런치·디너 라인업)</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">런치 소고기 샤브샤브</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">런치 스키야키 전골</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소고기 샤브샤브</p><p style="font-size:12px;color:#5f5e5a;margin:0">23,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">와규 샤브샤브·관동 와규 스키야키전골</p><p style="font-size:12px;color:#5f5e5a;margin:0">36,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우모듬 샤브샤브</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">관동 한우 스키야키전골</p><p style="font-size:12px;color:#5f5e5a;margin:0">43,000원 · <strong>시그니처</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">접대</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">스키야키</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 성남시 분당구 서현동 273-2 대현빌딩 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 031-703-7313
</div>
<div style="text-align:center"><a href="/pangyo/restaurant/화수목 샤브샤브 스키야키" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 화수목 샤브샤브 스키야키 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·가격·상황별 매칭', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">접대 단가</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">차별점</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>꿰다 판교아브뉴프랑점</strong><br><span style="font-size:11px;color:#888780">일식 코스</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.9<br><span style="font-size:11px;color:#888780">244건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#4338CA">75,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 단일 코스</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>너와집 백합 샤브샤브 백현점</strong><br><span style="font-size:11px;color:#888780">일식 샤브</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.1<br><span style="font-size:11px;color:#888780">400건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">59,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">단가 단계별 4종 + 예약</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>하누소 The Hill</strong><br><span style="font-size:11px;color:#888780">한우 단품</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">216건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">63,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">부위별 단가 + 우마카세</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>오봉집 서현역점</strong><br><span style="font-size:11px;color:#888780">한식 보쌈·낙지</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.3<br><span style="font-size:11px;color:#888780">208건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">55,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">스페셜 라인 + 주차</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>화수목 샤브샤브 스키야키</strong><br><span style="font-size:11px;color:#888780">스키야키</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.1<br><span style="font-size:11px;color:#888780">598건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">36,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">4만원선 부담 적은 접대</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 접대는 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🏆 격식 디너 접대</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>꿰다 판교아브뉴프랑점</strong> — ★ 4.9 · 봄과 장 코스 75,000원 단일 단가. 예약·주차 모두 가능.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥢 따뜻한 코스 접대</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>너와집 백합 샤브샤브 백현점</strong> — 단가 39,000원·45,000원·59,000원·79,000원 단계별. 가을·겨울 시즌 1순위.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 한우 단품 부서장 식사</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>하누소 The Hill</strong> — 등심 53,000원·꽃등심 63,000원·우마카세 85,000원. 부위별 단가가 명확.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍚 한식 보쌈 임원 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>오봉집 서현역점</strong> — 낙지스페셜·매생이연포보쌈 각 59,000원. 4~6인 부서 단위 식사 단가 적합.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💼 4만원선 부담 적은 접대</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>화수목 샤브샤브 스키야키</strong> — 한우 스키야키전골 43,000원. 가벼운 접대·소규모 미팅 점심 단가에 적합.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>꿰다 판교아브뉴프랑점·너와집 백합 샤브샤브 백현점·하누소 The Hill</strong>은 17:00 영업 시작 매장입니다. 디너 접대 시간대에 깔끔하게 들어오고, 예약 가능 표시가 있어 사전 자리 확보가 가능합니다.</li>
<li><strong>꿰다 판교아브뉴프랑점</strong>은 75,000원 단일 코스 운영이라 단가 계산이 가장 명확합니다. 사전 인원 확정 후 예약하시면 식사 흐름이 자연스럽게 잡힙니다.</li>
<li><strong>너와집 백합 샤브샤브 백현점·하누소 The Hill·화수목 샤브샤브 스키야키·오봉집 서현역점</strong>은 모두 주차 가능 표시가 있어 차량 접대 동선에도 부담이 적습니다.</li>
<li><strong>하누소 The Hill</strong>의 한우 단품은 130g 기준 단가입니다. 손님 인원수에 따라 부위 조합으로 단가 폭을 조정할 수 있으며, 단체 4인 이상은 우마카세 코스(85,000원)가 식사 흐름이 더 자연스럽습니다.</li>
<li><strong>오봉집 서현역점</strong>은 디너 16:00 영업 시작이고, 낙지스페셜·매생이연포보쌈 각 59,000원이 접대 단가 시그니처입니다. 점심 운영 여부는 매장에 한 번 확인하시기 바랍니다.</li>
<li>접대 자리는 코스·단품 단가가 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다. 사전 예약 시 단가를 다시 확인하시는 편이 안전합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 판교 접대 자리 평점 1순위는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>꿰다 판교아브뉴프랑점</strong>이 ★ 4.9로 1순위입니다. 봄과 장 코스 75,000원 단일 단가에 예약·주차 모두 가능해 부서장 외부 식사·고객 접대 사전 준비 부담이 가장 적습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 한우 단품으로 접대 자리면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>하누소 The Hill</strong>이 1순위입니다. 등심 53,000원·꽃등심 63,000원·살치살·새우살·안창살 각 72,000원·우마카세 85,000원으로 부위별 단가가 명확합니다. 단체 4인 이상은 우마카세 코스가 흐름이 자연스럽습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 4만원선 부담 적은 접대 자리는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>화수목 샤브샤브 스키야키</strong>의 관동 한우 스키야키전골 43,000원이 1순위입니다. 평점 4.1 · 리뷰 598건으로 본 5곳 중 표본 1위라 평균값 흔들림도 적습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 따뜻한 한 끼 코스로 접대하면?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>너와집 백합 샤브샤브 백현점</strong>이 1순위입니다. 너와집 정식 39,000원·종일 백합 정식 45,000원·백합특선 59,000원·백합진수 79,000원으로 단가 단계가 명확해 자리 격에 맞춰 선택이 쉽고, 예약·주차 모두 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 한식 보쌈·낙지 접대도 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>오봉집 서현역점</strong>이 한식 접대 옵션입니다. 낙지스페셜·매생이연포보쌈 각 59,000원이 시그니처이며, 매생이연포탕·얼큰낙지전골 32,000원선까지 라인이 펼쳐 있어 4~6인 부서 단위 식사에 단가가 적합합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점 4.0 식당이 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>하누소 The Hill</strong>은 평점 4.0으로 본 5곳 평균보다 약간 낮지만, 한우 부위별 단가가 명확해 부서장 외부 식사·고객 접대에서 손님 취향에 맞춘 부위 조합이 가능하다는 차별점으로 포함했습니다. 평점만 보시면 <strong>꿰다 판교아브뉴프랑점</strong>(4.9)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/pangyo/category/group', text: '판교역 회식·접대 식당 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">판교역 902곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">판교역 일대 902곳에서 4만원~9만원선 프리미엄 라인업과 예약·주차가 함께 안정적인 식당 35곳 중, 평점·리뷰·가격대·메뉴 다양성 4가지를 종합해 5곳을 정리했습니다. 메뉴는 일식 코스·일식 샤브·한우 단품·한식 보쌈·일식 스키야키 5종으로 분산했고, 단가는 4만3천원~9만원선까지 펼쳐 자리 격에 맞춰 선택 가능하도록 구성했습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>꿰다 판교아브뉴프랑점(★ 4.9)</strong>이 1순위, 리뷰 표본 크기로는 <strong>화수목 샤브샤브 스키야키(598건)</strong>가 1순위입니다. 두 식당은 단가 폭과 운영 방식이 달라 접대 시나리오가 겹치지 않으니, 75,000원 단일 코스 격식 자리면 꿰다, 4만원선 부담 적은 자리면 화수목 식으로 분리해 선택하시면 됩니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">한우 단품 부서장 외부 식사면 <strong>하누소 The Hill</strong>(부위별 단가), 따뜻한 코스 접대면 <strong>너와집 백합 샤브샤브 백현점</strong>(단가 단계별 4종), 한식 보쌈 임원 회식이면 <strong>오봉집 서현역점</strong>(낙지스페셜 59,000원) 식으로 시나리오별 분류가 명확합니다. 평점 4.0 식당(하누소)은 한우 부위별 단가라는 차별점으로 포함했고, 4인 이상 단체는 우마카세 코스(85,000원)가 식사 흐름이 더 자연스럽습니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 코스·단품 단가는 시즌·재료 수급에 따라 변동될 수 있어 접대 자리 사전 예약 시 단가를 다시 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
