// 영통구청 점심 맛집 추천 5곳 — 매탄동 카테고리별 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 20,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>영통구청</strong> 일대 548곳에서 평일 점심 시간(11:00~14:00)에 영업하는 식당 중 카테고리별로 5곳을 추렸습니다. 중식·아시아·한식 백반·소고기 점심특선·칼국수까지 다섯 갈래로 분산해, 가성비 한 끼·점심특선·1인 점심·외부 미팅까지 상황별로 다른 1순위를 골라 두었습니다. 본문 한 줄 결론 박스에서 빠르게 확인하실 수 있습니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">548곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">매탄·신동·영통구 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평점</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.2~4.8</p><p style="font-size:11px;color:#888780;margin:4px 0 0">평점 표기 기준</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 블로그 후기</p><p style="font-size:20px;font-weight:600;margin:0">686건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 블로그 합계</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">점심 시작가</p><p style="font-size:20px;font-weight:600;margin:0">3,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">한식 반찬 단품 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">짜장면·짬뽕 한 그릇으로 빠르게 마무리이면 <strong>도야짬뽕 영통구청점</strong> — 짜장면 7,000원·도야짬뽕 10,000원, 점심추천·혼밥가능 태그까지 매칭. 텐동·쌀국수 1인 점심이면 <strong>덴포</strong> (덴포텐동 13,000원·아롱사태 쌀국수 12,000원, 주차 가능). 한우 점심특선이면 <strong>간사이등심 2층 퀸즈</strong> (등심 정식 점심특선 25,000원·육회밥 12,000원). 칼국수·전골 한 그릇이면 <strong>수원육칼밥 본점</strong> (장칼국수 9,000원·수원 육칼밥 10,000원). 한식 백반·찌개 정식이면 <strong>진미회관</strong> (김치찌개 9,000원·생태찌개 16,000원).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 5가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>점심 시간 영업 (10:30~12:00 시작)</strong> — 평일 11~13시 점심 동선에 맞는 식당</li>
<li><strong>1인 점심 시작가 3,000~25,000원선</strong> — 직장인 점심 표준 가격대</li>
<li><strong>네이버 블로그 후기 50건 이상</strong> — 점심 후기 본문이 누적된 식당</li>
<li><strong>매탄동·신동·영통구청 사거리 도보권</strong> — 점심 1시간 회전 동선</li>
<li><strong>카테고리 분산</strong> — 중식·아시아·한우 점심특선·칼국수·한식 백반 5종</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">영통구청 일대 548곳 중 점심 시간 영업이 확인된 식당은 약 60곳이었습니다. 그중 같은 카테고리가 겹치지 않도록 5종으로 분산해 5곳을 추렸고, 평점은 네이버 플레이스 표기를 그대로 인용하되 신뢰 신호는 <strong>네이버 블로그 후기 수</strong>를 함께 보았습니다. 블로그 표본이 50건 미만인 식당은 평점이 4.5 이상이라도 후보에서 제외했습니다.</p>`
    },

    { type: 'h2', id: 'doya', text: '도야짬뽕 영통구청점 — 짜장·짬뽕 한 그릇 점심 1순위', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240821_64%2F1724218045011t1IdD_JPEG%2FA9Y03902.jpg" alt="도야짬뽕 영통구청점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 중식 점심 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 블로그 100건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 4,000원~23,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍜 점심추천 태그</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🙋 혼밥 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1267-3 1층에 위치한 짜장·짬뽕 전문점입니다. 본 가이드 5곳 중 유일하게 <strong>"점심추천·혼밥가능·데이트·뷰맛집·서비스좋음" 7개 태그</strong>가 모두 매칭되어, 1인 점심부터 2~3인 가벼운 외부 미팅까지 자리에 잘 맞습니다. <strong>10:30 영업 시작</strong>이라 11시대 일찍 들어가시면 12시 피크를 피할 수 있고, 짜장면 7,000원·도야짬뽕 10,000원이 직장인 점심 표준 가격대 안에 들어옵니다. 4~5인 자리에서는 탕수육 13,000원·해물누룽지탕 23,000원을 추가해 1만원대 후반까지 잡기 좋습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물맛이 진하다 · 양이 많다 · 매장 분위기가 좋다 · 서비스 친절하다" 같은 평이 자주 언급되었습니다. 짬뽕 국물 만족도와 매장 동선이 함께 묶여 누적되는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240821_89%2F1724218158178DBInA_JPEG%2FP20240227_150202541_311AE9CD-202C-430C-ABE6-8B8E5D82D85D.JPG" alt="도야짬뽕 영통구청점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240821_64%2F1724218045011t1IdD_JPEG%2FA9Y03902.jpg" alt="도야짬뽕 영통구청점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240821_64%2F1724218045011t1IdD_JPEG%2FA9Y03902.jpg" alt="도야짬뽕 영통구청점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 짜장·짬뽕·세트</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">군만두</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,000원 · <strong>최저가 사이드</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짜장면</p><p style="font-size:12px;color:#5f5e5a;margin:0">7,000원 · <strong>점심 시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">도야짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">소고기짬뽕</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">탕수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해물누룽지탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">23,000원 · <strong>2~3인</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">혼밥 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 7,000원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">10:30 오픈</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1267-3 1층 · <strong>🕐 영업</strong> 10:30 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 07-1440-3888
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/도야짬뽕 영통구청점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 도야짬뽕 영통구청점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'denpo', text: '덴포 — 텐동·쌀국수 1인 점심 + 주차 가능', gradientStyle: { from: '#0EA5E9', to: '#1E40AF' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250304_215%2F1741024438317tOgox_JPEG%2F%25C0%25FC%25C3%25BC%25BC%25A61.jpg" alt="덴포 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#0EA5E9;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🙋 1인 점심 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 블로그 91건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~18,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍜 점심추천 태그</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1263-4 1층 107호에 위치한 텐동·쌀국수 전문점입니다. 본 가이드 5곳 중 유일하게 <strong>아시아음식 카테고리</strong>로, 일식 텐동과 베트남식 쌀국수를 한 자리에서 고를 수 있다는 점이 차별점입니다. 덴포텐동 13,000원·아롱사태 쌀국수 12,000원이 1인 점심 표준 가격대이고, 매콤한 맛이면 <strong>매운 텐동 소스 변경(+500원)</strong>이나 <strong>XO 사천 양념장 추가(+1,000원)</strong>로 옵션 조정이 가능합니다. 11:30 영업 시작·주차 가능 매장이라 차로 이동하는 점심·잠깐 들르는 외부 미팅에 잘 맞습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 재료가 신선하다 · 양이 많다" 같은 평이 자주 언급되었습니다. 텐동 튀김 회전과 쌀국수 국물이 함께 묶여 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 텐동·쌀국수·국밥</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아롱사태 쌀국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>점심 시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">직화 쌀국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아롱사태 국밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">덴포텐동</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">에비텐동</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">스페셜 텐동</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>프리미엄</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">1인 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">텐동·쌀국수</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">매운맛 조절</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1263-4 1층 107호 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1437-0469
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/덴포" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 덴포 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'kansai', text: '간사이등심 2층 퀸즈 — 한우 점심특선 12,000원~25,000원', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20201130_235/16067215601540EFjb_JPEG/Y0p58JgvsKRLCAFIer0NVaOn.jpg" alt="간사이등심 2층 퀸즈 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 점심특선 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 블로그 330건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~179,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🍱 점심추천 태그</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1265-3 2층 간사이등심 퀸즈는 본 가이드 5곳 중 유일하게 <strong>한우 점심특선 메뉴</strong>를 운영하는 식당입니다. 평점 표기는 4.2로 다른 4곳보다 낮지만, 블로그 후기 330건이 누적되어 검증 신호는 안정적입니다. <strong>등심 정식(점심특선) 130g 25,000원·살치 정식(점심특선) 130g 33,000원</strong>이 메인 옵션이고, 더 가볍게 가시려면 <strong>육회밥(점심특선) 12,000원</strong>이 1인 점심 시작가입니다. 11:00 영업 시작이라 11~13시 점심 동선에 잘 맞고, 주차·예약 동시 가능이라 외부 손님 점심·접대 자리로도 쓰입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 반찬이 정갈하다 · 육회 비빔밥·냉면 맛보기 구성이 풍성하다" 같은 평이 자주 언급되었습니다. 점심특선 구성 만족도가 후기 키워드로 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 점심특선·디너 한판</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">육회밥(점심특선)</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000원 · <strong>점심 시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">등심(점심) 추가 130g</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">등심 정식(점심특선)</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">살치 정식(점심특선)</p><p style="font-size:12px;color:#5f5e5a;margin:0">33,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">살치살/새우살 130g</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">반판 등심 300g</p><p style="font-size:12px;color:#5f5e5a;margin:0">79,000원 · <strong>2인</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심특선</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한우 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">접대 옵션</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1265-3 2층 간사이등심 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1425-6671
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/간사이등심 2층 퀸즈" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 간사이등심 2층 퀸즈 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'yuk-kal', text: '수원육칼밥 본점 — 칼국수·전골 한 그릇 점심 9,000원선', gradientStyle: { from: '#F97316', to: '#C2410C' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251031_214%2F1761866965796CfQwI_JPEG%2F%25C0%25B0%25C4%25AE%25B9%25E4%25B7%25CE%25B0%25ED_%25BA%25AF%25C8%25AF%25B5%25CA.jpg" alt="수원육칼밥 본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍜 칼국수·전골 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 블로그 129건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 9,000원~28,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1264-1 2층 202호에 위치한 칼국수·만두 전문점입니다. 본 가이드 5곳 중 유일하게 <strong>"육칼밥"이라는 자체 시그니처 메뉴</strong>를 가진 식당으로, 장칼국수 9,000원이 1인 점심 최저 시작가이고 <strong>수원 육칼밥 10,000원·수원 육칼면 10,000원</strong>이 메인 1인 점심 옵션입니다. 든든하게 드시려면 <strong>육칼밥 바삭세트(육칼밥+고기튀김) 13,000원</strong>, 2~3인 자리이면 <strong>육칼전골(소고기 200g) 25,000원·석갈비 2인 28,000원</strong>까지 가능합니다. 11:00 영업 시작이라 11~13시 동선에 잘 맞습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물맛이 진하다 · 맛있다 · 양이 많다" 같은 평이 자주 언급되었습니다. 장칼국수 국물과 한 그릇 구성이 함께 묶여 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 칼국수·세트·전골</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수원 장칼국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수원 육칼밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">수원 육칼면</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">육칼밥 바삭세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>세트</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한판 육전 250g</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">육칼전골(소고기 200g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원 · <strong>2~3인</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한 그릇 점심</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">칼국수·전골</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1264-1 2층 202호 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1309-2507
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/수원육칼밥 본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 수원육칼밥 본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'jinmi', text: '진미회관 — 한식 백반·찌개 정식 3,000원~16,000원', gradientStyle: { from: '#F97316', to: '#DC2626' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220217_27%2F1645079312393LaA6g_JPEG%2F1645079277354.jpg" alt="진미회관 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#F97316;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍚 한식 백반 옵션</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.8 · 블로그 36건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 3,000원~16,000원</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1269-3에 위치한 한식 백반·찌개 전문점입니다. 본 가이드 5곳 중 <strong>한식 정식(찌개·구이) 카테고리</strong>를 담당하며, 김치찌개 9,000원이 1인 점심 표준 가격이고 <strong>생태찌개 16,000원</strong>이 시그니처 메뉴입니다. 든든하게 드시려면 차돌박이(한우 100g) 15,000원·생삼겹(국내산 180g) 15,000원으로 한 단계 올려 잡기 좋고, 후식된장(3,000원)을 추가하시면 마무리까지 정식 구성이 완성됩니다. 11:30 영업 시작·주차·예약 동시 가능이라 외부 손님 한식 점심 옵션으로도 무난합니다. 블로그 후기는 36건으로 본 가이드 5곳 중 표본이 가장 적지만, 카테고리 대표성과 가격 접근성을 우선해 포함했습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 밑반찬이 정갈하다 · 다시 갈 식당" 같은 평이 자주 언급되었습니다. 생태찌개·밑반찬 구성이 함께 묶여 누적되는 키워드입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 찌개·구이·면</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">후식된장</p><p style="font-size:12px;color:#5f5e5a;margin:0">3,000원 · <strong>추가 메뉴</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">칡물냉면</p><p style="font-size:12px;color:#5f5e5a;margin:0">5,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">김치찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>점심 시작가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생삼겹(국내산 180g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">차돌박이(한우 100g)</p><p style="font-size:12px;color:#5f5e5a;margin:0">15,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생태찌개</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원 · <strong>시그니처</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">한식 백반</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">찌개 정식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">예약 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1269-3 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 031-212-9266
</div>
<div style="text-align:center"><a href="/samsungElectronics/yeongtongGu/restaurant/진미회관" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 진미회관 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 점심 시작가·카테고리·시그니처', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·블로그</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">점심 시작가</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">시그니처 메뉴</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>도야짬뽕 영통구청점</strong><br><span style="font-size:11px;color:#888780">중식·짬뽕</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">블로그 100건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">7,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">도야짬뽕 10,000원 + 점심추천·혼밥</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>덴포</strong><br><span style="font-size:11px;color:#888780">텐동·쌀국수</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">블로그 91건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#0EA5E9">12,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">덴포텐동 13,000원 + 주차 가능</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>간사이등심 2층 퀸즈</strong><br><span style="font-size:11px;color:#888780">한우 점심특선</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">블로그 330건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">12,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">등심 정식 점심특선 25,000원</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>수원육칼밥 본점</strong><br><span style="font-size:11px;color:#888780">칼국수·전골</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">블로그 129건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#F97316">9,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">수원 육칼밥 10,000원 + 예약 가능</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>진미회관</strong><br><span style="font-size:11px;color:#888780">한식 백반·찌개</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">블로그 36건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">9,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">생태찌개 16,000원 + 밑반찬 정갈</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 점심은 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 1만원 안팎 한 끼</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>도야짬뽕 영통구청점</strong> — 짜장면 7,000원·도야짬뽕 10,000원이 1인 점심 표준 가격대. 점심추천·혼밥가능 태그로 1인 자리에도 부담이 적습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🙋 1인 점심·외부 미팅</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>덴포</strong> — 텐동 13,000원·쌀국수 12,000원, 주차 가능 매장. 매운맛 조절 옵션이 있어 호불호가 갈리지 않는 자리에 맞춥니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 한우 점심특선·접대</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>간사이등심 2층 퀸즈</strong> — 등심 정식 25,000원·살치 정식 33,000원. 외부 손님 점심·간단 접대 자리에 맞춥니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍜 칼국수·국물 한 그릇</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>수원육칼밥 본점</strong> — 장칼국수 9,000원·육칼밥 10,000원. 든든하게 가시면 육칼밥 바삭세트 13,000원으로 한 단계 올리기 좋습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍚 한식 정식·찌개 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>진미회관</strong> — 김치찌개 9,000원·생태찌개 16,000원. 밑반찬 구성이 정갈하다는 후기가 누적된 한식 백반 옵션.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>덴포·간사이등심·수원육칼밥·진미회관</strong> 4곳은 매장 주차장 또는 빌딩 주차장이 운영됩니다. <strong>도야짬뽕 영통구청점</strong>은 전용 주차장이 없어 인근 공영주차장 또는 매탄프라자 빌딩 주차장을 이용하시기 바랍니다.</li>
<li>점심 12:00~13:00 피크 시간은 5곳 모두 회전이 빠릅니다. 도야짬뽕은 10:30, 간사이등심·수원육칼밥은 11:00 영업 시작이라 <strong>11~11:30 일찍 입장</strong>하시면 피크 대기를 피할 수 있습니다.</li>
<li><strong>간사이등심 2층 퀸즈</strong>의 점심특선 메뉴(등심 정식·살치 정식·육회밥)는 점심 시간대 한정으로 제공될 수 있어, 방문 전 매장 전화(07-1425-6671)로 시간대 운영 여부를 한 번 확인하시는 편이 안전합니다.</li>
<li><strong>수원육칼밥 본점</strong>은 2층에 위치합니다. 엘리베이터·계단 동선이 길어 단체 점심 시 입장 시간을 5~10분 더 여유 있게 잡으시는 편이 좋습니다.</li>
<li><strong>진미회관</strong>은 블로그 후기 표본(36건)이 본 가이드 5곳 중 가장 적습니다. 평점은 4.8 표기이지만 표본 크기 한계가 있으니, 한식 정식 첫 방문이시면 김치찌개·생태찌개 등 시그니처 메뉴 위주로 주문하시면 만족도 편차를 줄일 수 있습니다.</li>
<li>메뉴 가격·점심특선 운영은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 영통구청에서 가장 저렴한 점심 한 끼는 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>도야짬뽕 영통구청점</strong>의 짜장면 7,000원이 1인 점심 최저가입니다. 점심추천·혼밥가능 태그까지 매칭되어 1인 자리에도 부담이 없습니다. 한식 옵션이면 <strong>수원육칼밥 본점</strong>의 장칼국수 9,000원이 차순위 시작가입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 1인 점심·혼밥 가능한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>도야짬뽕 영통구청점</strong>(혼밥가능 태그)과 <strong>덴포</strong>(점심추천·혼밥 가능 자리)가 1순위입니다. 둘 다 단품 메뉴 중심이라 회전이 빠르고, 도야짬뽕은 10:30 영업 시작이라 점심 동선을 빠르게 정리할 수 있습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 한우 점심특선이 있는 식당은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>간사이등심 2층 퀸즈</strong>가 본 가이드 5곳 중 유일한 한우 점심특선 옵션입니다. 등심 정식(점심특선) 25,000원·살치 정식 33,000원·육회밥 12,000원이 점심 시간대 메뉴 라인업입니다. 점심 시간대 한정 운영 가능성이 있어 방문 전 매장 전화 확인을 권장드립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 외부 손님·접대 점심으로는 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>간사이등심 2층 퀸즈</strong>(점심특선·예약 가능)와 <strong>진미회관</strong>(한식 정식·밑반찬 정갈) 두 곳이 무난합니다. 한우 라인이 필요하시면 간사이등심, 부드러운 한식 백반·찌개 정식이 필요하시면 진미회관이 자리에 맞습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>덴포·간사이등심 2층 퀸즈·수원육칼밥 본점·진미회관</strong> 4곳은 매장 주차장 또는 빌딩 주차장이 운영됩니다. <strong>도야짬뽕 영통구청점</strong>은 전용 주차장이 없어 인근 공영주차장 또는 매탄프라자 빌딩 주차장을 이용하시는 편이 편리합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점 4.2 식당도 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>간사이등심 2층 퀸즈(★4.2·블로그 330건)</strong>와 <strong>수원육칼밥 본점(★4.2·블로그 129건)</strong> 두 곳은 평점이 다른 3곳(4.8)보다 낮지만 블로그 후기 누적량이 안정적입니다. 본 가이드는 점심 카테고리 분산을 위해 한우 점심특선·칼국수 카테고리를 각각 대표하는 옵션으로 두 곳을 포함했습니다. 평점만 기준이면 도야짬뽕·덴포·진미회관(모두 ★4.8 표기)이 우선 후보입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/samsungElectronics/yeongtongGu', text: '영통구청 점심 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">영통구청 548곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">영통구청 일대 548곳에서 점심 시간(10:30~12:00 영업 시작) 영업이 확인된 식당으로 1차 필터링한 뒤, 1인 점심 3,000~25,000원선, 블로그 후기 50건 이상, 매탄동·신동·영통구청 사거리 도보권을 함께 적용해 약 60곳으로 좁혔습니다. 같은 카테고리가 겹치지 않도록 중식·아시아·한우 점심특선·칼국수·한식 백반 5종으로 분산해 최종 5곳을 추렸습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>도야짬뽕·덴포·진미회관</strong> 3곳이 ★4.8 표기로 우선 후보가 되고, 블로그 후기 누적량으로 보시면 <strong>간사이등심(330건)·수원육칼밥(129건)·도야짬뽕(100건)</strong> 순으로 표본이 안정적입니다. 진미회관은 블로그 36건으로 표본이 가장 적지만 한식 백반·찌개 카테고리 대표성을 위해 포함했습니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">가성비 1인 점심이면 도야짬뽕(짜장면 7,000원)이 1순위, 1인 일식·아시아 점심이면 덴포, 한우 점심특선이면 간사이등심, 칼국수 한 그릇이면 수원육칼밥, 한식 정식·찌개이면 진미회관 식으로 카테고리·예산·자리 성격에 따라 분리해서 선택하시면 됩니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성·점심특선 운영은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 방문 전 매장 공지 또는 매장 전화로 한 번 더 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
