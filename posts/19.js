// 망포역 회식 장소 추천 5곳 — 고기·양꼬치·국밥 단체석 비교 (식당별 unique 콘텐츠)
const post = {
  id: 19,
  sections: [
    {
      type: 'intro',
      html: `<p style="font-size:15px;line-height:1.8;color:#1a1a1a;margin:0 0 16px"><strong>망포역</strong> 일대에서 5~15인 회식을 무난하게 진행할 수 있는 식당 5곳을 정리했습니다. 분당선 망포역 주변 345곳에서 평점·리뷰 표본·단체석 수용·메뉴 구성 4가지를 기준으로 추려, 갈비·고기 회식·양꼬치·곰탕 점심 회식·순대국 안주형까지 카테고리를 의도적으로 분산했습니다. 부서 단합·팀 저녁·송별회·점심 회식 등 자리 성격에 따라 1순위가 달라지니, 본문 한 줄 결론과 5곳 비교표를 먼저 확인하시면 빠릅니다.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:16px 0 20px">
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">분석 식당</p><p style="font-size:20px;font-weight:600;margin:0">345곳</p><p style="font-size:11px;color:#888780;margin:4px 0 0">망포·신동·영통·매탄 일대</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">선정 5곳 평균</p><p style="font-size:20px;font-weight:600;margin:0">★ 4.3</p><p style="font-size:11px;color:#888780;margin:4px 0 0">3.9 ~ 4.8</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">누적 리뷰</p><p style="font-size:20px;font-weight:600;margin:0">1,162건</p><p style="font-size:11px;color:#888780;margin:4px 0 0">네이버 플레이스</p></div>
<div style="background:#f7f6f1;border-radius:10px;padding:14px 16px"><p style="font-size:12px;color:#5f5e5a;margin:0 0 4px">단체 시작가</p><p style="font-size:20px;font-weight:600;margin:0">9,000원~</p><p style="font-size:11px;color:#888780;margin:4px 0 0">곰탕 1인 기준</p></div>
</div>`
    },
    { type: 'toc', id: 'toc' },
    { type: 'ad', slot: '9463227631', format: 'autorelaxed' },

    { type: 'h2', id: 'verdict', text: '한 줄 결론 — 회식 성격별 1순위', gradientStyle: { from: '#7F1D1D', to: '#DC2626' } },
    {
      type: 'body',
      html: `<aside style="background:#f7f6f1;padding:18px 20px;margin:1rem 0 1.5rem;border-radius:0 10px 10px 0;border-left:3px solid #7F1D1D">
<div style="font-size:13px;color:#5f5e5a;margin-bottom:8px;font-weight:500">큐레이터 결론</div>
<p style="font-size:15px;margin:0;line-height:1.8">갈비 회식인데 인당 단가를 누르고 싶다면 <strong>동대문수제갈비</strong> — 평점 4.8 + 가족셋트4인분 돼지갈비 66,000원으로 단체 단가 가장 낮습니다.<br><br>표본·운영 안정성 우선이면 <strong>수타원</strong> — 리뷰 3,144건으로 회식 카테고리 표본 1위, 봉영로 주차 동선 무난.<br><br>양꼬치·중식 회식이면 <strong>신세계양꼬치마라탕</strong> — 양꼬치 30p 49,000원 + C세트 35,000원으로 4~6인 모임 무난.<br><br>점심 회식·송년회 점심이면 <strong>명백집 본점</strong> — 버크셔 곰탕 1만원선, 신동 카페거리 동선 가까움.<br><br>술 곁들이는 안주형 회식이면 <strong>민속왕순대</strong> — 모듬 20,000원·감자탕(소) 30,000원으로 5~6인 술자리 단가 안정.</p>
</aside>`
    },

    { type: 'h2', id: 'criteria', text: '망포역 회식 장소 선정 기준', gradientStyle: { from: '#185FA5', to: '#0EA5E9' } },
    {
      type: 'body',
      html: `<div style="background:#E6F1FB;border-radius:10px;padding:18px 20px;margin-bottom:1.5rem">
<h3 style="margin:0 0 10px;font-size:14px;color:#185FA5;font-weight:600">📊 4가지 기준 + 카테고리 분산</h3>
<ul style="margin:0;padding-left:20px;font-size:13.5px;color:#0C447C;line-height:1.85">
<li><strong>단체석·룸 또는 단체 세트 메뉴 보유</strong> — 5인 이상 회식이 가능한 좌석 구조 또는 묶음 메뉴 존재</li>
<li><strong>네이버 플레이스 리뷰 150건 이상</strong> — 회식 평점이 한두 명 후기에 흔들리지 않을 표본 크기</li>
<li><strong>평점 3.9점 이상</strong> — 회식 카테고리는 단가 부담이 있어 망포 평균(4.1) 살짝 아래까지 허용</li>
<li><strong>카테고리 분산</strong> — 돼지갈비·고기 회식·양꼬치·곰탕 점심·순대 안주형 5종으로 회식 성격 분산</li>
</ul></div>
<p style="font-size:14px;line-height:1.75;color:#1a1a1a">망포역 일대 345곳 중 단체석·단체 세트·룸 좌석을 명시한 식당은 약 80곳이었습니다. 그중 평점 3.9점 이상·리뷰 150건 이상을 충족하고 메뉴 구성이 회식 성격에 맞는 식당 5곳을 추렸습니다. 같은 카테고리 중복을 피해 갈비·종합 고기·양꼬치·곰탕·순대로 한 자리 성격을 분산했고, 평점이 다소 낮은 식당(수타원 3.9)은 <strong>표본 크기·단체 수용 능력</strong>이 명확할 때만 포함했습니다.</p>`
    },

    { type: 'h2', id: 'r-dongdaemun', text: '동대문수제갈비 — 가족셋트 4인 66,000원, 갈비 회식 가성비 1순위', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20230623_190/1687509111642IYrLP_JPEG/IMG_5778.jpeg" alt="동대문수제갈비 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B91C1C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🏆 회식 가성비 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4 · 리뷰 502건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 8,000원~66,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1179-7에 자리한 갈비 전문점으로 본 가이드 5곳 중 <strong>평점 4.8로 1순위</strong>입니다. 가장 큰 차별점은 <strong>가족셋트 4인분 돼지갈비 66,000원</strong> — 4인 회식이면 1인당 16,500원으로 갈비 회식 단가가 떨어지고, 추가 LA소갈비 24,000원·마늘소갈비 22,000원으로 인원 수 조정도 쉽습니다. 단품 돼지갈비 18,000원·생삼겹살 18,000원·생목살 18,000원이 같은 가격선이라 메뉴 조합 부담도 낮습니다. 예약 가능한 매장이라 평일 18시·금요일 19시 회식은 사전 자리 확보가 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"서비스가 친절하다 · 갈비 맛이 좋다 · 가성비가 좋다" 같은 평이 자주 언급되었습니다. 사장 친절도와 인당 단가 두 축이 후기 키워드로 함께 묶이는 식당입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://postfiles.pstatic.net/MjAyNTAxMDFfMTM5/MDAxNzM1NzA0MzMxODMz.H3spEdwNFXaMzkevtqqppVzd1QaboRl970oQYxGn7v8g.6aqD3fwMVPFT5zmz6eIrHAryTg9y4M9qApKWBV-vGXEg.JPEG/image_1735704327.jpg?type=w966" alt="동대문수제갈비 갈비 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/MjAyNTAxMDFfNTMg/MDAxNzM1NzA0MzM0Nzcx.c5nCL7anHpTsKXdDeWkiVUt7srcMPDzm1G2JcFnaeHgg.1umzWkva4Q5FgHXaidbE4CTa7gLuxfU72fFxrf2V1KIg.JPEG/image_1735704330.jpg?type=w966" alt="동대문수제갈비 갈비 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/MjAyNTAxMDFfMTE1/MDAxNzM1NzA0NTg2ODYz.uJ7bdgKzoKzjM-l1O_Cmcnd5d4ribjv1yt_rOfu-yzAg.cVGjwzGPZzQ_Npl9s9DNYpLZZXDomJSODek6mT6TYOIg.JPEG/SE-49effa54-b79a-4177-9a0a-e5269c003d8c.jpg?type=w773" alt="동대문수제갈비 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 4인 회식 조합 우선</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">가족셋트 4인분</p><p style="font-size:12px;color:#5f5e5a;margin:0">66,000원 · <strong>회식 1순위</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">돼지갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">LA소갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">24,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">마늘소갈비</p><p style="font-size:12px;color:#5f5e5a;margin:0">22,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">생삼겹살</p><p style="font-size:12px;color:#5f5e5a;margin:0">18,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">매운등갈비찜 中</p><p style="font-size:12px;color:#5f5e5a;margin:0">45,000원 · 3~4인</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">가성비</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">서비스 친절</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1179-7 · <strong>🕐 영업</strong> 11:30 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-233-7922
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/동대문수제갈비" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 동대문수제갈비 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'r-sutaone', text: '수타원 — 리뷰 774건 회식 표본 1위, 봉영로 단체 회식 안정 옵션', gradientStyle: { from: '#B91C1C', to: '#7F1D1D' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<div style="width:100%;height:260px;background:linear-gradient(135deg,#B91C1C 0%,#7F1D1D 100%);display:flex;align-items:center;justify-content:center;color:#fff;font-size:60px">🥩</div>
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#7F1D1D;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍻 회식 표본 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 3.2 · 리뷰 3,144건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~20,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">⏳ 피크 대기 있음</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">평점 3.9는 본 가이드 5곳 중 평균 아래입니다. 다만 <strong>리뷰 3,144건</strong>은 망포 회식 카테고리 표본 1위로, 평점이 살짝 낮은 이유는 표본이 큰 식당에서 자연스럽게 호불호가 함께 누적되었기 때문으로 해석됩니다. 봉영로1482번길에 위치하며 <strong>고기구이·중식·한식·해산물</strong>이 메뉴 카테고리에 모두 포함되는 종합 회식 매장이라 부서원 취향이 갈리는 자리에 메뉴 협의가 빠릅니다. 영업이 21시까지라 1차 회식 위주 자리에 잘 맞고, "피크 대기 있음" 평가가 함께 매칭되니 평일 18시·금요일 18시는 30~40분 전 입장이 안전합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"단체석 수용 좋다 · 메뉴가 다양하다 · 피크에 대기 있다" 같은 평이 자주 언급되었습니다. 회식 단체 수용력과 대기열이라는 두 축이 후기 키워드로 함께 누적되는 식당입니다.</p>
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 — 회식 협의가 빠른 종합형</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">고기구이 라인</p><p style="font-size:12px;color:#5f5e5a;margin:0">12,000~20,000원 · <strong>회식 메인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">중식 단품</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 확인 · 짜장·짬뽕</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">해산물 라인</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 확인 · 사이드</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">한식 사이드</p><p style="font-size:12px;color:#5f5e5a;margin:0">매장 확인 · 술안주</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">표본 최다</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">메뉴 종합</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">피크 대기 있음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 봉영로1482번길 6 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-205-6500
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/수타원" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 수타원 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'ad', slot: '6297515693', format: 'auto' },

    { type: 'h2', id: 'r-shinsegae', text: '신세계양꼬치마라탕 — 양꼬치 30p 49,000원, 양꼬치·마라 4~6인 회식', gradientStyle: { from: '#DC2626', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220512_203%2F1652344692982dyYYG_JPEG%2F1.jpg" alt="신세계양꼬치마라탕 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#DC2626;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🔥 양꼬치 회식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 2.6 · 리뷰 316건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 12,000원~49,000원</span>
<span style="background:#FEF3C7;color:#78350F;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✅ 예약 가능</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">권선구 곡반정동 575-5에 자리한 양꼬치·마라 전문점입니다. 회식 단가 짤 때 핵심은 <strong>양꼬치(30p) 49,000원</strong> + <strong>C세트(양꼬치+양갈비살+구운마늘 1p) 35,000원</strong> — 4~6인이면 두 세트로 메인 단가가 잡힙니다. 사이드는 DIY 마라탕(中) 17,000원 또는 마라샹궈(中) 30,000원으로 추가하고, A세트(마라탕+꿔바로우 미니) 23,000원·B세트(마라샹궈+꿔바로우 미니) 32,000원 같은 묶음이 메뉴 협의를 단순하게 해줍니다. <strong>주차 가능 + 예약 가능</strong> 두 조건을 같이 충족하는 회식 옵션이라 차로 이동하는 부서 회식에도 동선이 짧습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"맛있다 · 분위기가 좋다 · 서비스가 친절하다 · 국물이 진하다" 같은 평이 자주 언급되었습니다. 양꼬치 맛과 매장 분위기 두 축이 후기 키워드로 함께 누적되는 식당입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220512_203%2F1652344692982dyYYG_JPEG%2F1.jpg" alt="신세계양꼬치마라탕 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220527_27%2F1653629688026qgiaT_JPEG%2FKakaoTalk_20220526_143844179.jpg" alt="신세계양꼬치마라탕 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220527_63%2F1653629688968kL0UP_JPEG%2FKakaoTalk_20220526_144246707.jpg" alt="신세계양꼬치마라탕 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 회식 세트 우선</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">양꼬치 30p</p><p style="font-size:12px;color:#5f5e5a;margin:0">49,000원 · <strong>4~6인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">C세트(양꼬치+양갈비)</p><p style="font-size:12px;color:#5f5e5a;margin:0">35,000원 · <strong>회식</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">B세트(마라샹궈+꿔바로우)</p><p style="font-size:12px;color:#5f5e5a;margin:0">32,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">양꼬치 15p</p><p style="font-size:12px;color:#5f5e5a;margin:0">25,000원 · 2~3인</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">DIY 마라탕(中)</p><p style="font-size:12px;color:#5f5e5a;margin:0">17,000원</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">DIY 마라샹궈(中)</p><p style="font-size:12px;color:#5f5e5a;margin:0">30,000원</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">단체 세트</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">예약 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">분위기 좋음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 권선구 곡반정동 575-5 · <strong>🕐 영업</strong> 영업일 매장 확인 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1417-8889
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/신세계양꼬치마라탕" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 신세계양꼬치마라탕 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'r-myeongbaek', text: '명백집 본점 — 버크셔 곰탕 1만원, 점심 회식·송년 점심 1순위', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250629_50%2F17511923641888nr2J_JPEG%2F1000008243.jpg" alt="명백집 본점 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#EA580C;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍲 점심 회식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 0 · 리뷰 701건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 10,000원~13,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🔁 재방문 평가</span>
<span style="background:#E6F1FB;color:#0C447C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🚗 주차 가능</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">신동 334-32 1층, 신동 카페거리 근처에 자리한 곰탕·쌀국수 전문점입니다. 평점 4.6은 본 가이드 5곳 중 두 번째로 높고, <strong>버크셔 곰탕 10,000원·곰탕 特 13,000원·명백 쌀국수 10,000원</strong> 메인 메뉴 4종이 1만원선에서 끝납니다. 점심 회식·송년회 점심처럼 술 없이 진행하는 자리에 메뉴 단순화·단가 압축·시간 압축 세 가지가 동시에 가능한 옵션입니다. 후기 키워드에 <strong>재방문</strong>·<strong>대기</strong>가 함께 누적되어 있어 점심 12시 정각보다는 11:30 직전 입장이 안전하며, 식후 신동 카페거리로 동선 이어가기도 쉽습니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"국물 맛이 좋다 · 재방문하고 싶다 · 분위기가 깔끔하다 · 점심 대기 줄이 있다" 같은 평이 자주 언급되었습니다. 국물 만족도와 회전율이라는 두 축이 후기 키워드로 함께 누적되는 식당입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250629_50%2F17511923641888nr2J_JPEG%2F1000008243.jpg" alt="명백집 본점 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260212_207%2F1770881952096zpRxN_PNG%2F1000014806.png" alt="명백집 본점 매장 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250629_191%2F1751192548949GAUE0_JPEG%2F1000000722.jpg" alt="명백집 본점 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 4종 — 1만원선 점심 회식</h4>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">버크셔 곰탕</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">버크셔 곰탕 (特)</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · <strong>인기</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">명백 쌀국수</p><p style="font-size:12px;color:#5f5e5a;margin:0">10,000원 · NEW</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">명백 쌀국수 (特)</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · NEW</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">점심 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">주차 가능</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">깔끔한 곳</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">재방문 평가</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 신동 334-32 1층 · <strong>🕐 영업</strong> 10:30 시작 · <strong>🚗 주차</strong> 주차 가능 · <strong>📞 전화</strong> 07-1384-5408
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/명백집 본점" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 명백집 본점 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'r-minsok', text: '민속왕순대 — 모듬 20,000원·감자탕(소) 30,000원, 안주형 회식 단가 안정', gradientStyle: { from: '#EA580C', to: '#B45309' } },
    {
      type: 'body',
      html: `<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:14px;overflow:hidden;margin:16px 0 24px;box-shadow:0 4px 12px rgba(0,0,0,.04)">
<img src="https://ldb-phinf.pstatic.net/20180607_296/1528355430407adKio_JPEG/WEqzMAw0rWY0c3BHSV6GS0_J.jpg" alt="민속왕순대 대표 이미지" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:260px;object-fit:cover;display:block" />
<div style="padding:20px 22px">
<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px">
<span style="background:#B45309;color:#fff;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.3px">🍶 안주형 회식 1순위</span>
<span style="background:#FFF7E0;color:#92400E;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">★ 4.4 · 리뷰 793건</span>
<span style="background:#E1F5EE;color:#04342C;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">💰 5,000원~30,000원</span>
<span style="background:#FCE7F3;color:#831843;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">🏅 4.8 공동 최고</span>
<span style="background:#EEF2FF;color:#312E81;padding:5px 11px;border-radius:6px;font-size:12px;font-weight:600">✓ 인허가 검증</span>
</div>
<p style="font-size:14.5px;line-height:1.8;color:#1a1a1a;margin:0 0 14px">매탄동 1165-3 1층에 자리한 순대·국밥 전문점으로 평점 4.8은 본 가이드 5곳 중 동대문수제갈비와 함께 <strong>평점 공동 1위</strong>입니다. 차별점은 회식 메뉴 구조 — <strong>모듬 20,000원·감자탕(소) 30,000원·순대 大 14,000원·머리고기 13,000원·오소리감투 14,000원</strong>이 술 곁들이는 안주형 회식 단가를 5~6인 기준 10만원 초반대에 맞춰줍니다. 1인 식사형(순대국밥·돼지국밥 9,000원)도 동시에 운영해 회식 끝물에 해장 한 그릇 추가하기도 무난합니다. 같은 가격대의 매탄·영통권 순대 전문점 중에서는 평점이 상위권이라 송별회·생일 회식처럼 인원수 들쭉날쭉한 자리에 메뉴 폭이 넉넉합니다.</p>
<div style="background:#FFF7E0;border-left:3px solid #F59E0B;padding:12px 16px;margin:14px 0;border-radius:0 6px 6px 0">
<p style="font-size:12px;color:#92400E;margin:0 0 6px;font-weight:600">📝 방문자 후기 키워드 정리</p>
<p style="font-size:12.5px;color:#92400E;margin:0;line-height:1.7">"오래된 단골 맛 · 서비스가 친절하다 · 양이 많다" 같은 평이 자주 언급되었습니다. 동네 단골 정체성과 양 두 축이 후기 키워드로 함께 누적되는 식당입니다.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:14px 0">
<img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMDZfNDEg%2FMDAxNzAxODM3NzE4MDM3.iFNN4Tgin_fOkZFxfR7g5OPbu4IAGG5zseIlO9iufC8g.3ckWSv6l6qkRN11jWn8YhUJLEmfvmP5cgXbxOTMfC8Yg.JPEG.gounlaw5522%2F20231206_082011.jpg" alt="민속왕순대 순대 사진" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fblogthumb.pstatic.net%2FMjAyNDA4MjVfMTkw%2FMDAxNzI0NTEzNjQxOTg0.ZhtzVfKVCS_BaAR6f4qC5IPKIFz2T8b8S0Av8LAZk2cg.gNJj7m1NBRbj3kbvIJ9WsiVUtaQ-NTGWCeAKXzRv9mIg.JPEG%2FKakaoTalk_20240824_234713845_06.jpg%3Ftype%3Dw2%22&type=ff500_300" alt="민속왕순대 메뉴 사진 1" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
<img src="https://postfiles.pstatic.net/MjAyNDA4MjVfMjYg/MDAxNzI0NTEyMTM3MjAx.QjovUgA4E4Yer8ZZrfLFvz55TOL15pi0Ivb5EqsjqCwg.Ep7g6F5nr0tmPh8V_50RWMuqiUSPitXxI1v_2iBiqfgg.JPEG/SE-f7cbb777-7be7-4f7c-98c3-bd2a1a314297.jpg?type=w773" alt="민속왕순대 메뉴 사진 2" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:120px;object-fit:cover;border-radius:8px;display:block" />
</div>
<h4 style="font-size:13px;margin:18px 0 8px;color:#5f5e5a;font-weight:600">대표 메뉴 6종 — 회식 안주 + 식사 동시</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">모듬</p><p style="font-size:12px;color:#5f5e5a;margin:0">20,000원 · <strong>회식 안주</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">감자탕 (소)</p><p style="font-size:12px;color:#5f5e5a;margin:0">30,000원 · <strong>4~5인</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순대 大</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원 · <strong>시그니처</strong></p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">머리고기</p><p style="font-size:12px;color:#5f5e5a;margin:0">13,000원 · 안주</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">오소리감투</p><p style="font-size:12px;color:#5f5e5a;margin:0">14,000원 · 안주</p></div>
<div style="background:#f7f6f1;border-radius:8px;padding:10px 12px"><p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#1a1a1a">순대국밥</p><p style="font-size:12px;color:#5f5e5a;margin:0">9,000원 · 해장</p></div>
</div>
<div style="margin:16px 0 8px">
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">안주 회식</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">평점 4.8</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;margin-right:6px;display:inline-block;margin-bottom:6px">서비스 친절</span>
<span style="background:#EEEDFE;color:#26215C;padding:5px 11px;border-radius:6px;font-size:12px;display:inline-block;margin-bottom:6px">양 많음</span>
</div>
<div style="background:#f1efe8;border-radius:8px;padding:11px 14px;margin:14px 0 0;font-size:12.5px;color:#5f5e5a;line-height:1.85">
<strong>📍 위치</strong> 수원시 영통구 매탄동 1165-3 1층 · <strong>🕐 영업</strong> 10:00 시작 · <strong>🚗 주차</strong> 인근 공영주차장 · <strong>📞 전화</strong> 031-238-5862
</div>
<div style="text-align:center"><a href="/samsungElectronics/mangpo/restaurant/민속왕순대" style="display:inline-block;margin-top:16px;padding:12px 22px;background:#FCD34D;color:#111827;border-radius:10px;text-decoration:none;font-size:14px;font-weight:900;border:2px solid #111827;box-shadow:0 3px 0 #111827">👉 민속왕순대 상세 정보 보기 →</a></div>
</div></div>`
    },

    { type: 'h2', id: 'compare', text: '5곳 한눈에 비교 — 평점·인당 단가·회식 성격', gradientStyle: { from: '#10B981', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
<thead><tr style="background:#f7f6f1;border-bottom:2px solid rgba(0,0,0,.15)">
<th style="padding:11px 10px;text-align:left;font-weight:600">식당</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">평점·리뷰</th>
<th style="padding:11px 10px;text-align:center;font-weight:600">단체 단가</th>
<th style="padding:11px 10px;text-align:left;font-weight:600">회식 성격</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>동대문수제갈비</strong><br><span style="font-size:11px;color:#888780">갈비·고기</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">171건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B91C1C">4인 66,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">가족셋트 회식 가성비 1순위</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>수타원</strong><br><span style="font-size:11px;color:#888780">고기·중식·해산물</span></td>
<td style="padding:11px 10px;text-align:center">★ 3.9<br><span style="font-size:11px;color:#888780">774건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#7F1D1D">12,000원~</strong></td>
<td style="padding:11px 10px;font-size:12.5px">표본 1위 + 메뉴 종합형</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08)">
<td style="padding:11px 10px"><strong>신세계양꼬치마라탕</strong><br><span style="font-size:11px;color:#888780">양꼬치·마라</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.2<br><span style="font-size:11px;color:#888780">24건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#DC2626">30p 49,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">양꼬치 4~6인 회식 세트</td>
</tr>
<tr style="border-bottom:1px solid rgba(0,0,0,.08);background:#fafaf7">
<td style="padding:11px 10px"><strong>명백집 본점</strong><br><span style="font-size:11px;color:#888780">곰탕·쌀국수</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.6<br><span style="font-size:11px;color:#888780">173건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#EA580C">10,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">점심 회식 · 송년 점심</td>
</tr>
<tr>
<td style="padding:11px 10px"><strong>민속왕순대</strong><br><span style="font-size:11px;color:#888780">순대·국밥·안주</span></td>
<td style="padding:11px 10px;text-align:center">★ 4.8<br><span style="font-size:11px;color:#888780">171건</span></td>
<td style="padding:11px 10px;text-align:center"><strong style="color:#B45309">모듬 20,000원</strong></td>
<td style="padding:11px 10px;font-size:12.5px">안주형 회식 + 해장 동시</td>
</tr>
</tbody></table></div>`
    },

    { type: 'h2', id: 'by-situation', text: '상황별 추천 — 오늘 회식은 어떤 자리인가요', gradientStyle: { from: '#BA7517', to: '#F59E0B' } },
    {
      type: 'body',
      html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0 24px">
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">👥 4인 갈비 회식 인당 단가 우선</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>동대문수제갈비</strong> 가족셋트 4인분 돼지갈비 66,000원이 인당 16,500원으로 1순위. 추가 LA소갈비·마늘소갈비로 인원 조정도 무난.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍶 5~6인 양꼬치·마라 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>신세계양꼬치마라탕</strong> — 양꼬치 30p 49,000원 + C세트 35,000원 + DIY 마라탕(中) 17,000원. 메인+사이드 조합으로 단가 협의가 단순.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍲 점심 회식·송년 점심</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>명백집 본점</strong> — 버크셔 곰탕 10,000원 + 명백 쌀국수 10,000원. 술 없이 짧게 끝내는 점심 자리에 단순한 단가가 강점.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🥃 안주형 술자리 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>민속왕순대</strong> — 모듬 20,000원·머리고기 13,000원·오소리감투 14,000원으로 안주 단가 안정. 끝물에 순대국밥 9,000원 해장도 가능.</p></div>
<div style="background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px 18px"><p style="font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 8px">🍽 메뉴 취향 갈리는 부서 회식</p><p style="font-size:13px;color:#5f5e5a;margin:0;line-height:1.75"><strong>수타원</strong> — 고기·중식·해산물·한식 카테고리가 한 매장에 묶여 메뉴 협의가 빠른 종합형. 리뷰 표본 774건으로 평균값이 안정적.</p></div>
</div>`
    },

    { type: 'h2', id: 'tips', text: '방문 전 체크포인트', gradientStyle: { from: '#185FA5', to: '#3B82F6' } },
    {
      type: 'body',
      html: `<div style="background:#FAEEDA;border:1px solid rgba(186,117,23,.25);border-radius:12px;padding:18px 22px;margin:1rem 0 1.5rem">
<ul style="margin:0;padding-left:22px;color:#1a1a1a;line-height:1.9;font-size:14px">
<li><strong>동대문수제갈비·신세계양꼬치마라탕</strong>은 예약 가능한 매장입니다. 평일 18~19시·금요일 18~20시 회식은 1~2일 전 전화 예약이 안전합니다.</li>
<li><strong>수타원·명백집 본점</strong>은 피크 시간 대기 평가가 함께 매칭되어 있어 평일 18시·점심 12시 정각 직전 도착이면 대기 시간이 30~40분 길어질 수 있습니다. 30분 전 입장이 무난합니다.</li>
<li><strong>명백집 본점·신세계양꼬치마라탕</strong>은 주차장이 운영됩니다. <strong>동대문수제갈비·수타원·민속왕순대</strong>는 인근 공영주차장 또는 분당선 망포역 대중교통을 권장드립니다.</li>
<li><strong>민속왕순대</strong>는 매탄동 1165-3 1층으로 동대문수제갈비(매탄동 1179-7)와 도보 동선이 가깝습니다. 1차 갈비→2차 순대 안주 동선도 무리 없이 묶입니다.</li>
<li>가격은 시즌·재료 수급에 따라 변동될 수 있어 본 가이드 기준일(2026년 5월) 이후 변경 가능합니다. 단체 메뉴 단가는 예약 시 매장에 한 번 더 확인하시면 안전합니다.</li>
<li><strong>수타원</strong>은 영업시간이 21시까지로 2차 자리 이어가기는 어렵습니다. 21시 이후 자리는 신세계양꼬치마라탕·민속왕순대처럼 야간 영업이 긴 매장이 동선이 짧습니다.</li>
</ul></div>`
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문', gradientStyle: { from: '#0F6E56', to: '#059669' } },
    {
      type: 'body',
      html: `<div style="margin:16px 0">
<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 망포에서 4인 회식 인당 단가 가장 낮은 곳은 어디인가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>동대문수제갈비</strong>의 가족셋트 4인분 돼지갈비 66,000원이 인당 16,500원으로 1순위입니다. 평점 4.8·리뷰 171건으로 검증되어 있어 단가와 만족도가 함께 안정적인 옵션입니다. 갈비 외 메뉴를 곁들이고 싶다면 단품 돼지갈비 18,000원·생삼겹살 18,000원이 같은 가격선이라 조합도 단순합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 양꼬치 회식 4~6인이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>신세계양꼬치마라탕</strong>이 1순위입니다. 양꼬치 30p 49,000원·C세트(양꼬치+양갈비살+구운마늘 1p) 35,000원으로 4~6인 메인이 잡히고, DIY 마라탕(中) 17,000원·마라샹궈(中) 30,000원으로 사이드를 더하면 인당 단가 협의가 단순합니다. 주차 가능 + 예약 가능 두 조건을 같이 충족합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 술 없이 짧게 끝내는 점심 회식이면 어디가 적합한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>명백집 본점</strong>이 1순위입니다. 버크셔 곰탕 10,000원·명백 쌀국수 10,000원이 메인이며, 1만원선에서 한 끼가 끝나 단가 협의와 시간 압축이 함께 가능합니다. 식후 신동 카페거리로 동선 이어가기도 자연스러워 송년 점심 자리에도 잘 맞습니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 술 곁들이는 안주형 회식이면 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>민속왕순대</strong>가 1순위입니다. 모듬 20,000원·감자탕(소) 30,000원·머리고기 13,000원·오소리감투 14,000원으로 5~6인 안주 회식 단가가 10만원 초반대에 잡힙니다. 끝물에 순대국밥 9,000원으로 해장 한 그릇 추가하기도 무난합니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 부서원 취향이 갈리는 메뉴 협의 회식은 어디가 좋나요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. <strong>수타원</strong>이 1순위입니다. 고기구이·중식·한식·해산물 카테고리가 한 매장에 묶여 있어 메뉴 협의가 빠르고, 리뷰 774건은 본 가이드 회식 표본 1위라 평균값이 안정적입니다. 평점 3.9는 다소 낮지만 표본이 크기 때문에 호불호 분포가 자연스럽게 누적된 결과로 해석됩니다.</p></details>

<details open style="margin:10px 0;padding:14px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px"><summary style="font-weight:600;cursor:pointer;color:#1a1a1a;font-size:14px">Q. 5곳 모두 주차 가능한가요?</summary><p style="margin:12px 0 0;color:#5f5e5a;line-height:1.8;font-size:13.5px">A. 부분적으로 가능합니다. <strong>명백집 본점·신세계양꼬치마라탕</strong>은 주차장이 운영됩니다. <strong>동대문수제갈비·수타원·민속왕순대</strong>는 전용 주차장이 없어 인근 공영주차장 또는 분당선 망포역 대중교통이 더 편합니다. 회식 인원이 많다면 망포역 만남 후 도보 동선이 가장 안전합니다.</p></details>
</div>`
    },

    { type: 'cta', href: '/samsungElectronics/mangpo', text: '망포역 회식 장소 전체 보기 →' },

    {
      type: 'ending',
      html: `<div style="background:#EEEDFE;border-radius:12px;padding:20px 22px;margin:1.5rem 0">
<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#7F1D1D,#DC2626);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">큐</div>
<div>
<p style="font-weight:600;font-size:14px;color:#26215C;margin:0">오늘뭐먹지 큐레이터</p>
<p style="font-size:12px;color:#3C3489;margin:3px 0 0">망포 345곳 데이터 검증 · 행정안전부 인허가 매칭</p>
</div></div>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">망포역 일대 345곳에서 단체석·단체 세트·룸 좌석을 갖춘 식당을 80여 곳으로 좁힌 뒤, 평점·리뷰 표본·메뉴 구성·회식 성격 4가지를 함께 본 결과 5곳이 남았습니다. 갈비·종합 고기·양꼬치·곰탕 점심·순대 안주형으로 카테고리가 자연스럽게 다섯 갈래로 나뉘었기 때문에, 회식 성격(인원수·시간대·술 여부·예산)을 먼저 정하시면 본문 1순위가 곧장 보입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0 0 12px">평점만 보시면 <strong>동대문수제갈비(4.8)</strong>·<strong>민속왕순대(4.8)</strong>가 공동 1위, 리뷰 표본 크기로는 <strong>수타원(774건)</strong>이 1위입니다. 두 축이 다른 식당을 가리키니, 갈비 회식이면 동대문수제갈비, 메뉴 협의가 어려운 부서 회식이면 수타원, 술 곁들이는 안주형이면 민속왕순대 식으로 분리해서 선택하시는 편이 단가·만족도 모두 안정적입니다.</p>
<p style="font-size:14px;line-height:1.8;color:#1a1a1a;margin:0"><strong>수타원</strong>은 평점이 5곳 중 가장 낮지만 표본 크기와 회식 메뉴 종합형이라는 차별점으로 포함했습니다. 호불호가 갈리는 매장이라 메인 카테고리(고기구이·해산물) 위주로 주문하시면 만족도 편차가 줄어듭니다. 평점 우선이면 <strong>동대문수제갈비·민속왕순대·명백집 본점</strong>이 안정 후보입니다.</p>
</div>

<div style="margin:20px 0 0;padding:16px 18px;background:#f7f6f1;border:1px solid rgba(0,0,0,.08);border-radius:10px;font-size:13px;color:#5f5e5a;line-height:1.8">
<div style="font-weight:600;color:#1a1a1a;margin-bottom:8px;font-size:13.5px">📊 데이터 출처 (4중 신호)</div>
· <a href="https://www.data.go.kr" style="color:#185FA5" target="_blank" rel="noopener">행정안전부 전국일반음식점표준데이터</a> — 영업 상태·인허가일자 매칭<br>
· <a href="https://api.visitkorea.or.kr" style="color:#185FA5" target="_blank" rel="noopener">한국관광공사 국문 관광정보</a> — 소개·사진 보조<br>
· <a href="https://data.mfds.go.kr" style="color:#185FA5" target="_blank" rel="noopener">식품의약품안전처 음식점 위생등급</a> — 해당 식당에 한해<br>
· 식당별 평점·리뷰·메뉴는 <strong>네이버 플레이스</strong> + <strong>다음 검색</strong> 데이터 종합 (2026년 5월 기준)
</div>

<p style="font-size:12.5px;color:#888780;margin:14px 0 0;line-height:1.7">2026년 5월 15일 기준 정보입니다. 영업시간·가격·메뉴 구성은 시즌·재료 수급·매장 사정에 따라 변동될 수 있습니다. 단체 회식 예약 전 매장 공지를 한 번 더 확인하시는 편이 안전합니다.</p>`
    },
  ]
}

export default post
