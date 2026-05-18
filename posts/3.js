// 잠실 회식 장소 — 심층 가이드 (식당별 unique 콘텐츠)
const post = {
  id: 3,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px">잠실 일대에서 10~20명 회식·팀 디너에 적합한 식당 5곳을 정리하였습니다. 송파구 잠실·방이·석촌·송파동 일대 1,149곳에서 평점·리뷰 표본·단체석/룸 여부·가격대 4가지를 기준으로 추려, 한우곱창·고기·양꼬치·장어한우·중식 5종으로 카테고리를 분산하였습니다. 6인 회식부터 20인 부서 단위 모임까지 인원·예산이 다른 시나리오마다 1순위를 따로 골라 두었으니 본문 한 줄 결론과 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">1,149곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">송파구 잠실 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.3</p><p style="font-size:11px;color:#888780;margin:4px 0 0">3.9 ~ 4.8</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">1,818건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">시작가</p><p style="font-size:20px;font-weight:600;margin:0">6,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">한우곱창 단품 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 상황별 1순위', gradientStyle: { from: '#534AB7', to: '#A855F7' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #534AB7">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">6~8인 팀 회식에 평점·웨이팅 모두 검증된 1순위는 <strong>진성한우곱창 방이직영점</strong> — 평점 4.8·리뷰 766건, 한우곱창 19,000원선. 임원 회식·접대 자리이면 <strong>잠실장어와 한우</strong> — 1++ 한우 갈비살 39,000원에 장어와 한우 동시 운영, 지하 단체석. 4~6인 부서 모임에 1인 2만원선이면 <strong>화반 방이점</strong> — 숙성삼겹 18,000원, 화반Set 510g 3인 59,000원. 1차 양꼬치·마라요리 회식이면 <strong>경미양꼬치</strong> — 양꼬치 16,000원·고급양갈비 30,000원. 1만원대 첫 회식·해장 점심이면 <strong>난랑</strong> — 짜장면 9,000원·동파육 43,000원, 중식 단체석 옵션.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '선정 기준 — 어떻게 5곳을 골랐는가', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>단체가능·룸·웨이팅맛집 태그 + 단체 인원 수용</strong> — 회식 5인 이상 수용 가능 검증</li>
<li><strong>네이버 플레이스 리뷰 130건 이상</strong> — 회식 평점이 흔들리지 않을 표본 크기</li>
<li><strong>평점 3.9점 이상</strong> — 회식 카테고리 평균선 유지</li>
<li><strong>카테고리 분산</strong> — 한우곱창·고기숙성·양꼬치·장어한우·중식 5종으로 회식 선택 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">잠실 일대 1,149곳에서 회식 가능 태그(단체·룸·웨이팅맛집)와 평점 3.9+ 조건을 통과한 식당은 약 30곳이었습니다. 그중 인원 수용력·메뉴 다양성·1인 평균 예산이 안정적인 5곳을 추렸습니다. 같은 카테고리(고기집) 중복을 피해 한우곱창·숙성삼겹·양꼬치·장어한우·중식으로 회식 선택지를 분산하였고, 평점이 다소 낮은 식당(난랑 3.9)은 <strong>중식 단체 옵션</strong>이 명확할 때만 포함하였습니다.</p>`
    },

    { type: 'h2', id: 'jinseong', text: '진성한우곱창 방이직영점 — 평점 4.8 회식 1순위 한우곱창집', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180324_284%2F1521861825526a011O_JPEG%2F97KmMvl1HibFiKkDo31fE7xR.jpg" alt="진성한우곱창 방이직영점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 회식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 1,738건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 6,000원~20,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">⏰ 웨이팅맛집</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px"><strong>본 가이드 5곳 중 평점 4.8로 1위</strong>인 한우곱창 전문점입니다. 방이동 60번지 1층, 잠실 방이먹자골목 안쪽에 위치하며 8호선 방이역과 잠실역 모두 도보권입니다. 리뷰 1,738건은 평점이 단순 신규 효과가 아니라 충분한 표본으로 누적된 수치이고, "웨이팅맛집·서비스좋음·리뷰많음" 세 태그가 동시에 매칭되는 식당입니다. 16:00 영업 시작이라 회식 1차 6시 입장이 표준 동선이며, 평일 저녁 7~8시 피크에는 30분 이상 대기가 발생할 수 있어 단체 회식은 사전 전화 확인을 권장드립니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있음 · 서비스 친절 · 재료 신선 · 웨이팅 가치" 같은 평이 자주 언급되었습니다. 직접 담근 김치 3종 세트가 함께 나온다는 후기와 곱창·대창·막창 모두 인기라는 평이 묶여 누적되는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180324_284%2F1521861825526a011O_JPEG%2F97KmMvl1HibFiKkDo31fE7xR.jpg" alt="진성한우곱창 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211210_214%2F1639085202410qGtUc_JPEG%2FScreenshot_20211210-062352_Whale.jpg" alt="진성한우곱창 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180324_284%2F1521861825526a011O_JPEG%2F97KmMvl1HibFiKkDo31fE7xR.jpg" alt="진성한우곱창 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우곱창</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우대창</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우막창</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">깍두기절임마늘양밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>마무리</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">멸치국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">6,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">직접담근김치3종</p><p style="font-size:12px;color:#5f5e5a;margin:0">기본찬 포함</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">6~8인 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">평점 1위</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">웨이팅 발생</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서비스 친절</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 방이동 60 1층 · <strong>🕐 영업</strong> 16:00 시작 · <strong>🚗 주차</strong> 인근 공영주차장 이용 · <strong>📞 전화</strong> 02-422-3469
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/진성한우곱창 방이직영점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 진성한우곱창 방이직영점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'hwaban', text: '화반 방이점 — 1인 2만원선 숙성삼겹 회식 표준 옵션', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250314_3%2F1741914630890vT8mz_JPEG%2FDSC02006.jpg" alt="화반 방이점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥩 숙성고기 회식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 1,783건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 13,000원~59,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.5점·리뷰 1,783건으로 잠실 회식 카테고리 평균 위에 자리한 숙성고기 전문점입니다. 방이동 67-7 1층, 11:30 영업 시작으로 <strong>점심 회식·저녁 회식 모두 가능</strong>한 운영 시간이 특징입니다. 1인 시작가 13,000원·숙성삼겹 180g 18,000원으로 1인 평균 예산 2만원대 안에서 회식이 가능하고, 3인 화반Set 510g 59,000원이 메인 회식 옵션입니다. "리뷰많음·가성비·주차가능·데이트" 네 태그가 동시에 매칭되어 회식 후 2차로 자리 옮기지 않고 길게 이어지는 식사 모임에도 적합합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"숙성된 고기 풍미 · 밑반찬 친절 · 분위기 좋음" 같은 평이 자주 언급되었습니다. 한우 꽃등심 130g 38,000원 옵션과 숙성 부위별 다양성이 회식 메인 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250314_3%2F1741914630890vT8mz_JPEG%2FDSC02006.jpg" alt="화반 방이점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250314_205%2F1741914631025YUxgX_JPEG%2FDSC01975.jpg" alt="화반 방이점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250314_3%2F1741914630890vT8mz_JPEG%2FDSC02006.jpg" alt="화반 방이점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">숙성삼겹살 180g</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">화반Set 510g (3인)</p><p style="font-size:12px;color:#5f5e5a;margin:0">59,000원 · <strong>회식 메인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">숙성목살 180g</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">숙성갈매기살 150g</p><p style="font-size:12px;color:#5f5e5a;margin:0">19,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우꽃등심 130g</p><p style="font-size:12px;color:#5f5e5a;margin:0">38,000원 · <strong>프리미엄</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">벌집껍데기</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>최저가</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">4~6인 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 회식 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">숙성고기</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 방이동 67-7 1층 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1432-9306
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/화반 방이점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 화반 방이점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'jangeo', text: '잠실장어와 한우 — 임원 회식·접대 자리 1인 4~10만원선 옵션', gradientStyle: { from: '#1E40AF', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240812_204%2F1723444271046OKTtu_JPEG%2FKakaoTalk_20240810_180817073_14.jpg" alt="잠실장어와 한우 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#1E40AF;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍶 접대·임원 회식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.3 · 리뷰 2,170건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 35,000원~108,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">잠실동 186번지 지하 1층에 자리한 장어·한우 동시 운영 식당입니다. 평점 4.3점·리뷰 2,170건이 누적되어 카테고리 표준 범위 안에 있고, "리뷰많음·점심추천·주차가능·단체가능·서비스좋음" 다섯 태그가 한꺼번에 매칭되는 식당이라 임원 회식·외부 접대 자리에 안정적입니다. <strong>한우 갈비살 1++ 100g 39,000원</strong>·<strong>국산 민물장어 1kg 108,000원</strong>이 메인 옵션으로, 1인 평균 4~10만원 예산이 표준입니다. 지하 단체석 구조라 외부 시선이 차단되어 회식 분위기를 만들기 좋고, 11:00 영업 시작이라 점심 비즈니스 미팅도 가능합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"장어 초벌 후 구워 먹는 방식 · 주차 편함 · 서비스 친절" 같은 평이 자주 언급되었습니다. 직접 보고 장어와 한우를 골라 주문하는 동선이 회식 자리 만족도로 묶여 누적되는 키워드입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240812_204%2F1723444271046OKTtu_JPEG%2FKakaoTalk_20240810_180817073_14.jpg" alt="잠실장어와 한우 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240812_98%2F1723444270276WEj2i_JPEG%2FKakaoTalk_20240810_180817073_21.jpg" alt="잠실장어와 한우 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240812_204%2F1723444271046OKTtu_JPEG%2FKakaoTalk_20240810_180817073_14.jpg" alt="잠실장어와 한우 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 한우·장어 동시 운영</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">국산 민물장어 1kg</p><p style="font-size:12px;color:#5f5e5a;margin:0">108,000원 · <strong>프리미엄</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 갈비살 1++ 100g</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 부채살 1++ 100g</p><p style="font-size:12px;color:#5f5e5a;margin:0">35,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우제비추리 100g</p><p style="font-size:12px;color:#5f5e5a;margin:0">37,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우안심 1++ 100g</p><p style="font-size:12px;color:#5f5e5a;margin:0">39,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한우 꽃등심 1++ 100g</p><p style="font-size:12px;color:#5f5e5a;margin:0">48,000원 · <strong>인기</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">접대·임원</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">지하 단체석</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">장어·한우</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">주차 가능</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 잠실동 186 지하 1층 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-422-1487
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/잠실장어와 한우" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 잠실장어와 한우 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'gyeongmi', text: '경미양꼬치 — 16,000원 양꼬치·30,000원 양갈비 가성비 회식', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171223_154%2F1513963371082s4gi3_JPEG%2FTJQurwMl3CCfaLSabPaV2U4J.jpg" alt="경미양꼬치 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 양꼬치·중식 회식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.5 · 리뷰 1,058건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 16,000원~38,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🌶 가성비</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 4.5점·리뷰 1,058건이 누적된 방이동 양꼬치 전문점입니다. 방이동 63-6번지, 진성한우곱창과 같은 골목 안에 있어 1차·2차를 같은 동네에서 묶기에 좋습니다. "가성비·리뷰많음·서비스좋음" 세 태그가 매칭되어 있고, 양꼬치 16,000원·고급양갈비 30,000원·찹쌀탕수육 20,000원 라인업이라 1인 평균 2만원선 회식이 가능합니다. 16:00 영업 시작으로 저녁 회식 전용 운영이며, 양고기·마라요리·중식 단품을 한 자리에서 묶어 시키는 동선이 가능한 식당입니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"양꼬치 풍미 · 중식 메뉴 풍부 · 가성비 양호" 같은 평이 자주 언급되었습니다. 마라소룽샤·찹쌀탕수육 같은 중식 단품과 양꼬치 동시 주문이 가능하다는 점이 후기 키워드로 함께 묶입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171223_154%2F1513963371082s4gi3_JPEG%2FTJQurwMl3CCfaLSabPaV2U4J.jpg" alt="경미양꼬치 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNjAxMjJfOTUg%2FMDAxNzY5MDU3NDU2NDE3.aI4QXiA4z9Uumd8W5xnOaHm6DmnB6JiaExXFQHLIHxIg.gkT7Oy4E9s_Ppwz3oaicEj5dPTDtgbShsm7DE-XqsfMg.JPEG%2F47164306-F3DD-4EF9-AE78-D94254FD56FF.jpeg" alt="경미양꼬치 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171223_154%2F1513963371082s4gi3_JPEG%2FTJQurwMl3CCfaLSabPaV2U4J.jpg" alt="경미양꼬치 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">양꼬치</p><p style="font-size:12px;color:#5f5e5a;margin:0">16,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">고급양갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">30,000원 · <strong>프리미엄</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">양갈비살</p><p style="font-size:12px;color:#5f5e5a;margin:0">21,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">찹쌀탕수육</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">경장육슬</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마라소룽샤</p><p style="font-size:12px;color:#5f5e5a;margin:0">38,000원 · <strong>매운맛</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">4~8인 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">양꼬치+중식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서비스 친절</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 방이동 63-6 · <strong>🕐 영업</strong> 16:00 시작 · <strong>🚗 주차</strong> 인근 공영주차장 이용 · <strong>📞 전화</strong> 07-1305-2292
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/경미양꼬치" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 경미양꼬치 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'nanrang', text: '난랑 — 1만원 짜장면·5만원 동파육 중식 단체석 옵션', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221226_250%2F1672044970043VWYMD_JPEG%2F20221222_161039503.jpg" alt="난랑 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🥢 1만원대 회식</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 3.4 · 리뷰 1,163건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,000원~53,000원</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 3.4점은 본 가이드 5곳 중 가장 낮은 편입니다. 다만 <strong>리뷰 1,163건</strong>으로 표본이 안정적이고, "점심추천·주차가능·단체가능·리뷰많음·깔끔한곳" 다섯 태그가 동시에 매칭되는 중식당입니다. 방이동 36-7번지, 짜장면 9,000원·간짜장 10,000원·군만두 8,000원 라인업으로 <strong>1차 점심 회식·해장 회식</strong>이 가능한 1만원대 가성비 옵션이고, 동파육 43,000원·생등심탕수육 30,000원 같은 코스 메뉴로 단체 회식까지 확장 가능합니다. 평점이 다소 낮은 이유는 단품 회전이 빠른 식당 특성상 호불호 평가가 함께 누적된 것으로 해석되며, 메인 메뉴(짜장·동파육·탕수육) 위주로 주문하시면 만족도 편차가 줄어듭니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"동파육 부드러움 · 단체 회식 무난 · 매장 깔끔" 같은 평이 자주 언급되었습니다. 1만원대 점심 단품 회전과 중식 단체 코스가 동시에 매칭되는 운영 방식이 후기 키워드로 묶입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">짜장면</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · <strong>최저가</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">간짜장</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">군만두</p><p style="font-size:12px;color:#5f5e5a;margin:0">8,000원 · <strong>최저</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생등심탕수육 (S)</p><p style="font-size:12px;color:#5f5e5a;margin:0">30,000원 · <strong>회식</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">동파육 (S)</p><p style="font-size:12px;color:#5f5e5a;margin:0">43,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">동파육 (M)</p><p style="font-size:12px;color:#5f5e5a;margin:0">53,000원 · <strong>단체</strong></p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">중식 단체</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">1만원 시작</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 송파구 방이동 36-7 · <strong>🕐 영업</strong> 11:00 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 02-425-0034
</div>
<div style="text-align:center"><a href="/dinner/jamsil/restaurant/난랑" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 난랑 상세 정보 보기 →</a></div>
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
<td style="padding:11px 10px"><strong>진성한우곱창 방이직영점</strong><br><span style="font-size:11px;color:#888780">한우곱창</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">766건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">6,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">평점 1위 + 웨이팅맛집</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>화반 방이점</strong><br><span style="font-size:11px;color:#888780">숙성고기</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.5<br><span style="font-size:11px;color:#888780">176건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">13,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">숙성삼겹·꽃등심 + 주차</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>잠실장어와 한우</strong><br><span style="font-size:11px;color:#888780">장어·한우</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.0<br><span style="font-size:11px;color:#888780">361건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#1E40AF">35,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">임원·접대 + 지하 단체석</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>경미양꼬치</strong><br><span style="font-size:11px;color:#888780">양꼬치·중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.4<br><span style="font-size:11px;color:#888780">132건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">16,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">양꼬치+마라요리 가성비</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>난랑</strong><br><span style="font-size:11px;color:#888780">중식</span></td>
<td style="padding:11px 10px;text-align:center">★ 3.9<br><span style="font-size:11px;color:#888780">283건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">8,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">짜장 9천원 + 중식 단체석</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 회식 인원·예산이 다를 때', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">👥 6~8인 부서 회식 (평점 우선)</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>진성한우곱창 방이직영점</strong>이 평점 4.8로 1순위입니다. 한우곱창 19,000원선, 1인 평균 3~4만원 예산. 방이먹자골목 안쪽이라 2차 동선이 가깝습니다.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍶 임원 회식·외부 접대</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>잠실장어와 한우</strong> — 한우 갈비살 1++ 39,000원·민물장어 108,000원. 지하 단체석으로 외부 시선 차단, 1인 평균 4~10만원 접대 예산에 맞춤.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥩 4~6인 숙성고기 정통 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>화반 방이점</strong> — 숙성삼겹 18,000원, 한우 꽃등심 38,000원. 11:30 영업이라 점심 회식도 가능, 주차장 운영.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🌶 가성비 회식·양고기 중식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>경미양꼬치</strong> — 양꼬치 16,000원, 마라소룽샤 38,000원. 1인 2만원선 가벼운 부서 회식, 양고기+중식 동시 옵션.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍜 1만원 점심 회식·해장</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>난랑</strong> — 짜장면 9,000원, 동파육 43,000원. 점심 회식이나 1만원대 가벼운 단체 모임용 중식 옵션.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>진성한우곱창 방이직영점·경미양꼬치</strong>는 방이동 골목 안쪽 식당이라 전용 주차장이 없습니다. 2호선·8호선 잠실역 또는 8호선 방이역 도보권이며 단체 회식 시 대중교통을 권장드립니다.</li>
<li><strong>화반 방이점·잠실장어와 한우</strong>는 주차장이 운영되지만 평일 저녁 7~8시 피크에는 만차될 수 있어 6시 30분 전 입장이 안전합니다.</li>
<li><strong>진성한우곱창 방이직영점</strong>은 평점 4.8·웨이팅맛집 태그로 평일 저녁도 30분~1시간 대기가 발생할 수 있습니다. 6인 이상 회식은 매장 전화로 사전 확인을 권장드립니다.</li>
<li><strong>잠실장어와 한우</strong>는 지하 1층 구조로 임원·접대 회식에 적합한 분위기이지만, 단체 인원(8인+) 예약은 매장 전화로 확정해 두시는 편이 안전합니다.</li>
<li><strong>난랑</strong>은 평점 3.9로 본 가이드 5곳 중 평균 이하입니다. 메인 메뉴(짜장·동파육·탕수육) 위주 주문 시 만족도 편차가 줄어듭니다.</li>
<li>메뉴 가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 잠실에서 평점이 가장 높은 회식 식당은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>진성한우곱창 방이직영점</strong>이 평점 4.8·리뷰 766건으로 본 가이드 5곳 중 1위입니다. 한우곱창·대창·막창 라인업이고, 1인 평균 3~4만원 예산입니다. 다만 웨이팅맛집이라 평일 저녁 30분 이상 대기가 발생할 수 있습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 임원 회식·접대 자리에 적합한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>잠실장어와 한우</strong>가 1순위입니다. 지하 1층 단체석 구조로 외부 시선이 차단되고, 한우 1++ 갈비살 39,000원·국산 민물장어 108,000원으로 1인 4~10만원 접대 예산에 맞춤입니다. 평점 4.0·리뷰 361건으로 운영 안정성도 확인되어 있습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 1인 2만원선 회식이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>화반 방이점</strong>의 숙성삼겹 180g 18,000원·화반Set 510g 59,000원(3인)이 1순위입니다. 차순위는 <strong>경미양꼬치</strong> — 양꼬치 16,000원·찹쌀탕수육 20,000원으로 양고기+중식 동시 회식이 가능합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 점심 회식·해장 회식 1만원선 옵션은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>난랑</strong>의 짜장면 9,000원·간짜장 10,000원이 1순위 가벼운 점심 회식 옵션입니다. 11:00 영업 시작에 단체가능 태그가 매칭되어 있어 부서 점심 회식이나 1만원대 가벼운 단체 모임에 무난합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 중 주차 가능한 곳은?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>화반 방이점·잠실장어와 한우·난랑</strong>은 주차장이 운영됩니다. <strong>진성한우곱창 방이직영점·경미양꼬치</strong>는 방이동 골목 안쪽이라 인근 공영주차장 또는 잠실역·방이역 대중교통이 더 편합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 평점이 낮은 식당도 포함된 이유는?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>난랑</strong>은 평점 3.9로 본 가이드 평균(4.3) 이하이지만, 리뷰 283건으로 표본이 안정적이고 1만원대 짜장면·중식 단체석으로 점심 회식·해장 회식 옵션이 명확해 포함하였습니다. 평점만 기준이면 진성한우곱창(4.8)이 1순위입니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/dinner/jamsil/category/group', text: '잠실 회식 장소 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#534AB7,#A855F7);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">잠실 1,149곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">잠실 일대 1,149곳에서 단체가능·룸·웨이팅맛집 태그 + 평점 3.9+ 조건으로 필터링한 약 30곳 중, 인원 수용력·메뉴 다양성·1인 평균 예산을 함께 본 결과 5곳을 정리하였습니다. 한우곱창·숙성삼겹·장어한우·양꼬치·중식 다섯 카테고리로 회식 선택지가 자연스럽게 나뉘었고, 1인 시작가는 6,000원(곱창 단품)부터 35,000원(한우 1++)까지 폭넓게 분포합니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>진성한우곱창 방이직영점(4.8)</strong>이 1순위이지만 웨이팅맛집이라 평일 저녁 30분~1시간 대기가 발생할 수 있습니다. 평점·예약 안정성을 함께 본다면 <strong>화반 방이점(4.5)</strong> — 주차장 운영에 11:30 영업 시작으로 점심 회식까지 가능합니다. 임원·접대 자리이면 <strong>잠실장어와 한우</strong>의 지하 단체석이 분위기상 가장 안정적입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>난랑</strong>은 평점이 3.9로 5곳 중 가장 낮지만 리뷰 283건의 표본과 짜장면 9,000원 단가, 중식 단체석 옵션으로 점심 회식·해장 회식에 차별점이 명확해 포함하였습니다. 메인 메뉴(짜장·동파육·탕수육) 위주 주문이면 만족도 편차가 줄어듭니다. 평점 우선이면 진성한우곱창·화반 방이점·경미양꼬치가 안정 후보입니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 단체 회식은 방문 전 매장 전화로 인원·룸 사용 가능 여부를 한 번 더 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
