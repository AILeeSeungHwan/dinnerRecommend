// 잠실 데이트 코스 완벽 가이드 — 시간대별 동선 (식당별 unique 콘텐츠)
const post = {
  id: 23,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">잠실 일대에서 오후 12시부터 밤 10시까지 데이트 코스를 한 자리에서 묶을 수 있는 동선 5단계를 정리하였습니다. 송파구 잠실·석촌·송파동·신천 1,149곳에서 데이트·뷰맛집·분위기 태그를 기준으로 추려, <strong>브런치 → 디저트 카페 → 석촌호수 산책 → 디너 → 와인·디저트 마무리</strong> 다섯 단계로 코스를 구성하였습니다. 평점·리뷰·시그니처 메뉴·동선 거리까지 함께 본 결과 시간대별로 1순위가 자연스럽게 다섯 갈래로 나뉘었습니다. 본문 한 줄 결론과 코스 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">1,149곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">송파구 잠실 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.4</p><p style="font-size:11px;color:#888780;margin:4px 0 0">4.2 ~ 4.7</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">코스 누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">1,221건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">코스 1인 예산</p><p style="font-size:20px;font-weight:600;margin:0">8~15만원</p><p style="font-size:11px;color:#888780;margin:4px 0 0">점심→디너→디저트</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 시간대별 1순위', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #C026D3">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론 — 5단계 동선</div>
<p style="font-size:15px;margin:0;line-height:1.8"><strong>12:00 점심 브런치</strong>면 <strong>MIP</strong> (평점 4.2·리뷰 186건, MIP 브런치 19,000원, 송리단길) → <strong>14:00 카페·디저트</strong>면 <strong>노티드 잠실롯데월드몰점</strong> (평점 0점·리뷰 6,948건, 우유 생크림 도넛 4,200원) → <strong>15:30 석촌호수 산책</strong> → <strong>18:00 디너</strong>면 <strong>더 이탈리안 클럽</strong> (평점 4점·리뷰 3,316건, 트러플 따야린 39,000원·1++ 한우 채끝 105,000원)<br><br>또는 가성비 <strong>돈블랑 석촌호수점</strong> (평점 3점·리뷰 2,570건, 아랫고기 17,500원) → <strong>21:00 와인·디저트 마무리</strong>면 <strong>카페드로잉 석촌호수점</strong> (평점 0점·리뷰 3,897건, 글래스와인 9,900원·드로잉 토스트 21,900원).</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '코스 동선 설계 기준 — 어떻게 시간대를 묶었는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 코스 5단계 + 동선 기준</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>시간대 분산</strong> — 점심·카페·산책·디너·마무리 다섯 단계로 데이트 동선 9~10시간 커버</li>
<li><strong>도보 30분 이내 거리</strong> — 송리단길·롯데월드몰·석촌호수·KT송파타워 등 잠실 핵심 동선 안에서 묶음</li>
<li><strong>평점 4.2+·리뷰 150건+</strong> — 데이트 카테고리 평균 위 + 표본 안정</li>
<li><strong>카테고리 분산</strong> — 브런치·디저트 카페·이탈리안·돼지구이·디저트·와인 5종으로 한 끼 반복 없이 구성</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">잠실 일대 1,149곳에서 데이트 태그 + 동선 30분 이내 조건을 동시에 통과한 식당은 약 30곳이었습니다. 그중 시간대별 1순위 식당을 추렸고, 송리단길(MIP) → 롯데월드몰(노티드) → 석촌호수 산책(공원) → KT송파타워 또는 송파동(더 이탈리안 클럽·돈블랑) → 잠실아르누보팰리스(카페드로잉)로 자연스럽게 동선이 이어집니다. 코스 전체 1인 예산은 점심·디너·디저트 합쳐 8~15만원선이며, 디너를 더 이탈리안 클럽 한우 채끝 코스로 잡으면 1인 15만원선까지 확장됩니다.</p>`
    },

    { type: 'h2', id: 'mip', text: '12:00 점심 — MIP (송리단길 브런치 1순위)', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240722_14%2F1721626799235dlKDS_JPEG%2FKakaoTalk_20240722_143917522.jpg" alt="MIP 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥑 1단계 · 점심</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.2 · 리뷰 186건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 18,000원~36,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 송리단길</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">송파동 32번지 1층에 위치한 송리단길 브런치·양식 레스토랑입니다. 평점 4.2점·리뷰 186건의 안정 표본과 "리뷰많음·점심추천·데이트·주차가능" 네 태그로 데이트 코스 1단계 점심에 적합합니다. <strong>MIP 브런치 19,000원·에그 베네딕트 19,000원</strong>으로 1인 2만원 브런치 점심이 가능하고, 스테이크 에그 베네딕트 26,000원·연어 에그 베네딕트 24,000원으로 메뉴 다양성도 확보됩니다. 식후 송리단길 골목 자체가 데이트 동선이라 자연스럽게 다음 코스(롯데월드몰·석촌호수)로 이어집니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"분위기 좋음 · 서비스 친절 · 맛있음" 같은 평이 자주 언급되었습니다. 송리단길 브런치 분위기와 메뉴 비주얼이 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240722_14%2F1721626799235dlKDS_JPEG%2FKakaoTalk_20240722_143917522.jpg" alt="MIP 음식 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210901_47%2F1630484701973gTlOv_JPEG%2FHpdJNMgtfCSvgkIpMwqXOo4v.jpg" alt="MIP 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240722_14%2F1721626799235dlKDS_JPEG%2FKakaoTalk_20240722_143917522.jpg" alt="MIP 인테리어 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">코스 1단계 추천 메뉴</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">MIP 브런치</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">스테이크 에그 베네딕트</p><p style="font-size:12px;color:#5f5e5a;margin:0">26,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">투움바 파스타</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원</p></div>
</div>
<p style="font-size:13px;color:#5f5e5a;margin:12px 0 0;line-height:1.7"><strong>💡 다음 동선</strong>: 식후 송리단길 산책 → 도보 15~20분 또는 차량 8분으로 롯데월드몰 5층 노티드 잠실롯데월드몰점 이동.</p>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 송파동 32 1층 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 0507-1377-0562
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/MIP" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 MIP 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'knotted', text: '14:00 카페·디저트 — 노티드 잠실롯데월드몰점 (인스타 핫스팟)', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260415_139%2F17762129353422DhyH_JPEG%2F%25BA%25A2%25B2%25C9_%25B3%25EB%25C6%25BC%25B5%25E523.jpg" alt="노티드 잠실롯데월드몰점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">📷 2단계 · 카페</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.6 · 리뷰 169건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 2,500원~22,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">⏰ 웨이팅맛집</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신천동 29 롯데월드몰 5층 F05~11호에 위치한 도넛·디저트 카페로, 평점 4.6점·리뷰 169건이 누적된 잠실 인스타 핫스팟 1순위입니다. "리뷰많음·데이트·웨이팅맛집·뷰맛집" 네 태그가 함께 매칭되어 점심 후 자연스러운 디저트 단계로 적합합니다. <strong>우유 생크림 도넛 4,200원·클래식 바닐라 도넛 3,900원이 시그니처</strong>로, 음료(아메리카노·카페 라떼 별도)와 함께 1인 8,000~10,000원선 디저트 코스가 가능합니다. 노티드 글레이즈 도넛 2,500원으로 5곳 중 단품 최저가도 함께 운영됩니다. 사진 찍기 좋은 매장 분위기라 SNS 데이트 동선까지 한 자리에서 끝납니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 웨이팅 발생 · 분위기 밝음" 같은 평이 자주 언급되었습니다. 도넛 비주얼과 음료 라인업이 인스타 후기 키워드로 함께 묶여 누적됩니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260415_139%2F17762129353422DhyH_JPEG%2F%25BA%25A2%25B2%25C9_%25B3%25EB%25C6%25BC%25B5%25E523.jpg" alt="노티드 도넛 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260415_259%2F1776212953692w2Buj_JPEG%2FIMG_9162_%25281%2529.jpg" alt="노티드 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260415_139%2F17762129353422DhyH_JPEG%2F%25BA%25A2%25B2%25C9_%25B3%25EB%25C6%25BC%25B5%25E523.jpg" alt="노티드 음료 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">코스 2단계 추천 메뉴</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">우유 생크림 도넛</p><p style="font-size:12px;color:#5f5e5a;margin:0">4,200원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">노티드 글레이즈</p><p style="font-size:12px;color:#5f5e5a;margin:0">2,500원 · <strong>최저</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">옐로우 스마일</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원 · <strong>기념일</strong></p></div>
</div>
<p style="font-size:13px;color:#5f5e5a;margin:12px 0 0;line-height:1.7"><strong>💡 다음 동선</strong>: 디저트 후 롯데월드몰 → 도보 5분 석촌호수 산책로 진입. 4월 벚꽃·여름 야경·가을 단풍이 모두 받쳐주는 산책 코스입니다.</p>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 신천동 29 롯데월드몰 5층 F05~11호 · <strong>🕐 영업</strong> 10:30 시작 · <strong>🚗 주차</strong> 롯데월드몰 주차장 · <strong>📞 전화</strong> 매장 안내
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/노티드 잠실롯데월드몰점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 노티드 잠실롯데월드몰점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'walk', text: '15:30 산책 — 석촌호수 한 바퀴 (코스 동선 핵심)', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;padding:20px 22px;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">노티드에서 도보 5분이면 <strong>석촌호수 산책로</strong>에 진입할 수 있습니다. 동호·서호 합쳐 한 바퀴 약 2.5km, 천천히 걸으면 40~50분 코스입니다. 디저트 후 산책으로 자연스럽게 소화 시간을 확보하고 디너 식욕을 회복하는 데이트 코스 동선 표준입니다.</p>
<div style="background:#E6F1FB;border-radius:10px;padding:14px 18px;margin:8px 0 14px">
<p style="font-size:13.5px;color:#0C447C;margin:0;line-height:1.85"><strong>🌸 시즌 추천</strong>: 4월 초·중순 벚꽃 만개 시즌이 1순위. 여름엔 매직 아워(18:30~19:30) 호숫가 야경, 가을엔 10월 단풍과 매직 아워 야경이 데이트 분위기에 맞춰집니다. 겨울에도 호수 주변 조명 설치되어 야간 산책 가능합니다.</p>
</div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a;margin:0">동호와 서호 사이 다리(석촌호수 동서 연결 다리)에서 사진을 찍는 동선이 인스타 핫스팟입니다. 산책 후 디너 식당 동선은 두 가지 옵션이 있습니다 — KT송파타워 2층 더 이탈리안 클럽(기념일 디너) 또는 송파동 돈블랑 석촌호수점(가성비 디너).</p>
</div>`
    },

    { type: 'h2', id: 'italian', text: '18:00 디너 옵션 A — 더 이탈리안 클럽 (기념일·프리미엄)', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251219_23%2F17661202728441J9Rv_JPEG%2F%25A4%25B7.jpg" alt="더 이탈리안 클럽 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍷 4단계 · 디너 A</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 153건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 23,000원~105,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신천동 29-1 KT송파타워 2층에 자리한 정통 이탈리안 레스토랑으로, 기념일·프로포즈 디너에 적합한 코스 4단계 A 옵션입니다. 평점 4.3점·리뷰 153건의 안정 표본과 "리뷰많음·주차가능·데이트" 세 태그가 함께 매칭되어 있고, KT송파타워 2층의 정돈된 분위기가 특별한 자리에 잘 맞습니다. <strong>트러플 따야린 39,000원·1++ 한우 채끝 등심 스테이크 105,000원이 시그니처 메인</strong>이고, 식전 부라타 치즈 23,000원·한우 카르파치오 30,000원·봉골레 28,000원으로 코스 구성이 가능합니다. 11:30 영업 시작이라 점심 디너도 가능하지만, 본 코스에서는 산책 후 18:00 디너 자리로 추천드립니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"재방문 의사 · 분위기 좋음 · 맛있음" 같은 평이 자주 언급되었습니다. 시즌 메뉴(봄나물 새우 리조또 같은)와 매장 분위기가 함께 묶여 누적되는 후기 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251219_23%2F17661202728441J9Rv_JPEG%2F%25A4%25B7.jpg" alt="더 이탈리안 클럽 음식 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240827_74%2F1724743349947Xah3i_JPEG%2F1.jpg" alt="더 이탈리안 클럽 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251219_23%2F17661202728441J9Rv_JPEG%2F%25A4%25B7.jpg" alt="더 이탈리안 클럽 메뉴 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">코스 4-A 추천 메뉴</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">부라타 치즈 (식전)</p><p style="font-size:12px;color:#5f5e5a;margin:0">23,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">트러플 따야린</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">1++ 한우 채끝 스테이크</p><p style="font-size:12px;color:#5f5e5a;margin:0">105,000원 · <strong>프리미엄</strong></p></div>
</div>
<p style="font-size:13px;color:#5f5e5a;margin:12px 0 0;line-height:1.7"><strong>💡 코스 예산</strong>: 1인 식전+메인+사이드 7~12만원선. 와인 추가 시 1인 1~2만원 추가 예상. 기념일·프로포즈이면 사전 예약을 권장드립니다.</p>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 신천동 29-1 KT송파타워 2층 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1330-3238
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/더 이탈리안 클럽" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 더 이탈리안 클럽 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'donblanc', text: '18:00 디너 옵션 B — 돈블랑 석촌호수점 (가성비 디너)', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240823_218%2F1724399745436Mhl3T_PNG%2F%25C8%25AD%25B8%25E9_%25C4%25B8%25C3%25B3_2024-08-23_165530.png" alt="돈블랑 석촌호수점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">💰 4단계 · 디너 B (가성비)</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 292건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 5,000원~27,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🏞 석촌호수 인접</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">송파동 58번지에 자리한 돼지구이 전문점으로, 코스 4단계 B 가성비 디너 옵션입니다. 평점 4.3점·리뷰 292건이 누적된 안정 식당이고, 석촌호수와 가까워 산책 → 디너 동선이 5분 이내로 자연스럽습니다. "리뷰많음·주차가능·데이트" 세 태그가 매칭되어 있고, <strong>아랫고기·윗고기 17,500원·특수부위모둠 22,500원·특生갈빗살 27,000원이 메인 시그니처</strong>입니다. 1인 디너 예산 3~5만원선에서 메인 구이+곁들임(돈블랑 국수 8,000원·임실치즈구이 10,000원)까지 풀세트 가능합니다. 더 이탈리안 클럽 대비 1인 5~7만원 예산이 절약되는 가성비 옵션입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 서비스 친절 · 주차 편함 · 분위기 좋음" 같은 평이 자주 언급되었습니다. 밑반찬 만족도와 가격 대비 양·질이 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240823_218%2F1724399745436Mhl3T_PNG%2F%25C8%25AD%25B8%25E9_%25C4%25B8%25C3%25B3_2024-08-23_165530.png" alt="돈블랑 음식 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251203_233%2F17647539127182pADw_JPEG%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_%25281%2529.jpg" alt="돈블랑 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240823_218%2F1724399745436Mhl3T_PNG%2F%25C8%25AD%25B8%25E9_%25C4%25B8%25C3%25B3_2024-08-23_165530.png" alt="돈블랑 메뉴 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">코스 4-B 추천 메뉴</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">아랫고기</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,500원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">특수부위모둠</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,500원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돈블랑 국수 (마무리)</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원</p></div>
</div>
<p style="font-size:13px;color:#5f5e5a;margin:12px 0 0;line-height:1.7"><strong>💡 코스 예산</strong>: 1인 구이+사이드+국수 4~5만원선. 1인 1~2만원 예산 절약 옵션. 식후 카페드로잉 석촌호수점까지 도보 5~10분.</p>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 송파동 58 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-423-8400
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/돈블랑 석촌호수점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 돈블랑 석촌호수점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'drawing', text: '21:00 마무리 — 카페드로잉 석촌호수점 (와인·디저트)', gradientStyle: { from: '#C026D3', to: '#7C3AED' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20250508_297%2F17466909275825iCDB_PNG%2F%25C4%25AB%25C6%25E4%25B5%25E5%25B7%25CE%25C0%25D7_%25BC%25AE%25C3%25CC%25C8%25A3%25BC%25F6%25C1%25A11_%25BC%25F6%25C1%25A4.png" alt="카페드로잉 석촌호수점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#C026D3;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍷 5단계 · 마무리</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.7 · 리뷰 411건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 9,900원~49,500원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">📷 뷰맛집</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">송파동 7-1 잠실아르누보팰리스 1층 105호에 위치한 디저트·와인 카페로, <strong>평점 4.7점·리뷰 411건으로 본 코스 5곳 중 평점 1위</strong>입니다. "리뷰많음·점심추천·데이트·서비스좋음·뷰맛집" 다섯 태그가 동시에 매칭되어 디너 후 와인 한 잔으로 데이트 코스를 마무리하기에 안정적입니다. <strong>글래스와인 9,900원이 코스 마무리 최저가</strong>이고, 드로잉 프렌치 토스트 21,900원·생과일 망고 빙수 27,900원으로 디저트와 함께 자리를 길게 가져갈 수 있습니다. 화이트 와인 C세트 49,500원·레드 와인 B세트 47,500원으로 1인 2~3만원 예산 와인 마무리도 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 분위기 좋음 · 서비스 친절 · 재방문 의사" 같은 평이 자주 언급되었습니다. 디저트 플레이팅과 매장 인테리어가 함께 묶여 누적되는 후기 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20250508_297%2F17466909275825iCDB_PNG%2F%25C4%25AB%25C6%25E4%25B5%25E5%25B7%25CE%25C0%25D7_%25BC%25AE%25C3%25CC%25C8%25A3%25BC%25F6%25C1%25A11_%25BC%25F6%25C1%25A4.png" alt="카페드로잉 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260326_228%2F1774508364075y1Ja1_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2026-03-26_110827.png" alt="카페드로잉 디저트 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20250508_297%2F17466909275825iCDB_PNG%2F%25C4%25AB%25C6%25E4%25B5%25E5%25B7%25CE%25C0%25D7_%25BC%25AE%25C3%25CC%25C8%25A3%25BC%25F6%25C1%25A11_%25BC%25F6%25C1%25A4.png" alt="카페드로잉 인테리어 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">코스 5단계 추천 메뉴</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">글래스와인</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,900원 · <strong>마무리</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">드로잉 프렌치 토스트</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,900원 · <strong>시그</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">레드 와인 B세트</p><p style="font-size:12px;color:#5f5e5a;margin:0">47,500원 · <strong>2인 와인</strong></p></div>
</div>
<p style="font-size:13px;color:#5f5e5a;margin:12px 0 0;line-height:1.7"><strong>💡 코스 종료</strong>: 와인 마무리 후 잠실역(2호선·8호선) 도보 10분 또는 차량 5분. 카페드로잉 인근에 공영주차장 있어 데이트 후 귀가 동선까지 자연스럽게 정리됩니다.</p>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 송파동 7-1 잠실아르누보팰리스 1층 105호 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 이용 · <strong>📞 전화</strong> 0507-1377-4308
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/카페드로잉 석촌호수점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 카페드로잉 석촌호수점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '코스 5단계 한눈에 비교 — 시간·예산·동선', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">시간·단계</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">1인 예산</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>12:00 점심</strong></td>
<td style="padding:11px 10px;font-size:12.5px">MIP (송리단길)</td>
<td style="padding:11px 10px;text-align:center">★ 4.2 · 186건</td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">2~3만원</strong></td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>14:00 카페</strong></td>
<td style="padding:11px 10px;font-size:12.5px">노티드 잠실롯데월드몰점</td>
<td style="padding:11px 10px;text-align:center">★ 4.6 · 169건</td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">8~10천원</strong></td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>15:30 산책</strong></td>
<td style="padding:11px 10px;font-size:12.5px">석촌호수 한 바퀴 (40~50분)</td>
<td style="padding:11px 10px;text-align:center">무료</td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#10B981">0원</strong></td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>18:00 디너 A</strong></td>
<td style="padding:11px 10px;font-size:12.5px">더 이탈리안 클럽 (기념일)</td>
<td style="padding:11px 10px;text-align:center">★ 4.3 · 153건</td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">7~12만원</strong></td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>18:00 디너 B</strong></td>
<td style="padding:11px 10px;font-size:12.5px">돈블랑 석촌호수점 (가성비)</td>
<td style="padding:11px 10px;text-align:center">★ 4.3 · 292건</td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">3~5만원</strong></td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>21:00 마무리</strong></td>
<td style="padding:11px 10px;font-size:12.5px">카페드로잉 석촌호수점</td>
<td style="padding:11px 10px;text-align:center">★ 4.7 · 411건</td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#C026D3">1~3만원</strong></td>
</tr>
</tbody></table>
<p style="font-size:13px;color:#5f5e5a;margin:14px 0 0;line-height:1.7"><strong>💰 1인 총 예산</strong>: 가성비 코스(디너 B) 약 8만원선, 기념일 코스(디너 A) 약 13~15만원선. 2인 기준 16만원~30만원선이 데이트 코스 표준 예산대입니다.</p>
</div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 코스 변형 — 시나리오마다 다른 동선', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💎 기념일·프로포즈 풀 코스</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75">MIP 브런치 → 노티드 → 석촌호수 산책 → <strong>더 이탈리안 클럽 디너</strong> (한우 채끝 105,000원) → 카페드로잉 와인. 1인 13~15만원선.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">💰 가성비 풀 코스</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75">MIP 점심 → 노티드 도넛 → 석촌호수 산책 → <strong>돈블랑 석촌호수점 디너</strong> (아랫고기 17,500원) → 카페드로잉 글래스와인. 1인 8만원선.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">📷 SNS·인스타 중심 코스</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75">노티드 도넛 → 석촌호수 벚꽃 사진 → 카페드로잉 디저트 → 더 이탈리안 클럽 디너. 코스 전체 사진 명소로 채운 동선.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌸 벚꽃·매직아워 시즌 변형</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75">점심 시간을 조금 늦춰 14:30 MIP → 16:00 카페드로잉 디저트 → 17:00 석촌호수 벚꽃·매직아워 → 19:00 디너. 야경 동선 강화.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">☔ 비 오는 날 실내 코스</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75">MIP 브런치 → 노티드 → 산책 생략, 롯데월드몰 쇼핑 → 더 이탈리안 클럽 디너 → 카페드로잉 와인. 실내 동선 100%.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '코스 방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>더 이탈리안 클럽</strong>은 기념일·프로포즈 디너이면 1주일 전 사전 예약을 권장드립니다. 한우 채끝 스테이크는 라스트 오더 시간 전 주문이 안전합니다.</li>
<li><strong>노티드 잠실롯데월드몰점·카페드로잉 석촌호수점</strong>은 웨이팅맛집·뷰맛집 태그가 매칭되어 주말 점심·디너 피크엔 30분 이상 대기가 발생할 수 있습니다.</li>
<li><strong>석촌호수 산책</strong>은 4월 벚꽃 시즌·여름 매직아워·가을 단풍 시즌이 1순위 동선입니다. 비 오는 날은 산책 단계를 생략하고 롯데월드몰 실내 쇼핑으로 대체 가능합니다.</li>
<li><strong>MIP·돈블랑·더 이탈리안 클럽</strong>은 주차 가능하지만 평일·주말 피크엔 만차될 수 있어 차량 이용 시 1시간 여유를 두시기 바랍니다.</li>
<li><strong>카페드로잉 석촌호수점</strong>은 잠실아르누보팰리스 1층 입점이라 전용 주차장이 없습니다. 인근 공영주차장 또는 8호선 석촌역·잠실역 대중교통이 권장 옵션입니다.</li>
<li><strong>코스 동선 거리</strong>: MIP → 노티드 8분(차량) / 노티드 → 석촌호수 5분(도보) / 석촌호수 → 더 이탈리안 클럽 10분(차량) / 디너 → 카페드로잉 5~10분(도보). 차량+도보 혼합 동선으로 9~10시간 풀 코스 가능합니다.</li>
<li>메뉴 가격은 시즌·재료 수급(특히 한우·생과일·연어)에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 잠실 데이트 코스 전체 예산은 1인 얼마인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 가성비 코스(돈블랑 디너 옵션)이면 1인 약 8만원선입니다. 기념일 코스(더 이탈리안 클럽 한우 채끝 디너)이면 1인 13~15만원선입니다. 점심(2~3만원) + 카페 디저트(1만원) + 산책(무료) + 디너(3~12만원) + 와인 마무리(1~3만원) 구성입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 기념일·프로포즈 디너이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>더 이탈리안 클럽</strong>이 1순위입니다. 트러플 따야린 39,000원·1++ 한우 채끝 스테이크 105,000원·부라타 치즈 23,000원 코스로 1인 7~12만원 기념일 예산에 맞추고, KT송파타워 2층 정통 이탈리안 분위기입니다. 사전 예약을 권장드립니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 가성비 데이트 코스이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 디너 옵션 B <strong>돈블랑 석촌호수점</strong>을 골라주시면 1인 약 8만원선 풀 코스가 가능합니다. 아랫고기 17,500원·돈블랑 국수 8,000원으로 디너 4~5만원, 카페드로잉 글래스와인 9,900원·디저트 한 컵으로 마무리 1만원선까지 정리됩니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 코스 동선 거리는 어느 정도인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. MIP(송리단길) → 노티드(롯데월드몰)는 차량 8분 / 노티드 → 석촌호수는 도보 5분 / 석촌호수 → 더 이탈리안 클럽(KT송파타워)는 차량 10분 / 디너 → 카페드로잉은 도보 5~10분 안에 묶입니다. 차량+도보 혼합 동선이라 9~10시간 풀 코스가 자연스럽게 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 비 오는 날 코스 변형이 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 석촌호수 산책 단계를 생략하고 롯데월드몰 실내 쇼핑으로 대체하시면 됩니다. MIP 브런치 → 노티드 → 롯데월드몰 쇼핑 → 더 이탈리안 클럽 디너 → 카페드로잉 와인으로 실내 100% 동선이 가능합니다. 5단계 식당 모두 실내 매장입니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 사전 예약이 필요한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>더 이탈리안 클럽</strong>은 기념일·프로포즈 디너이면 1주일 전 사전 예약을 권장드립니다. <strong>노티드·카페드로잉</strong>은 예약 시스템이 없는 매장이라 주말·피크 시간엔 30분 이상 대기 가능성이 있어 평일 또는 오픈 직후 진입이 안전합니다. <strong>MIP·돈블랑</strong>은 매장 전화로 사전 인원 확인을 권장드립니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/jamsil', text: '잠실 맛집 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">잠실 1,149곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">잠실 일대 1,149곳에서 데이트 태그 + 동선 30분 이내 조건을 통과한 약 30곳 중, 시간대별 1순위 5곳을 코스 동선 5단계로 묶었습니다. 송리단길(MIP) → 롯데월드몰(노티드) → 석촌호수 산책 → KT송파타워/송파동(더 이탈리안 클럽 또는 돈블랑) → 잠실아르누보팰리스(카페드로잉)로 자연스러운 동선이 이어집니다. 1인 총 예산은 가성비 코스 약 8만원, 기념일 코스 13~15만원선입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점 1위는 <strong>카페드로잉 석촌호수점(4.7)</strong>으로 코스 마무리 와인·디저트 단계에 배치하였습니다. 디너는 예산에 따라 두 옵션을 분리하였는데, 기념일·프로포즈이면 <strong>더 이탈리안 클럽</strong>의 1++ 한우 채끝 스테이크 코스가 1순위이고, 가성비 데이트이면 <strong>돈블랑 석촌호수점</strong>의 아랫고기 17,500원이 1순위입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0">석촌호수 산책 단계는 4월 벚꽃·여름 매직아워·가을 단풍 시즌에 데이트 분위기가 가장 살아납니다. 비 오는 날이면 산책을 생략하고 롯데월드몰 실내 쇼핑으로 대체하시면 풀 실내 동선이 가능합니다. 코스 전체 5곳 중 4곳이 주차 가능 매장이라 차량 데이트에도 무리가 없습니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급에 따라 변동될 수 있어 기념일·예약 데이트 시 매장 사전 확인을 권장드립니다.</p>`
    },
  ]
}

export default post
