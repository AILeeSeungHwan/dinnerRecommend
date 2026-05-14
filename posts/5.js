const post = {
  id: 5,
  sections: [
    {
      type: 'intro',
      html: "<p>삼성역 점심 맛집을 검색하면 너무 많은 결과가 나옵니다. 859곳의 데이터에서 실제로 방문할 만한 5곳만 선별하였습니다.</p><p>평균 평점 4.8점입니다. 가격대는 10,000원부터 시작하며, 2026년 5월 기준이며, 접근성·회전율·세트 메뉴·가격을 위주로 비교하였습니다.</p><p>소개 순서: 무탄 코엑스, 솥내음 스타필드 코엑스몰점, 개성집, 멘쇼쿠 코엑스점, 수림복국 선릉 삼성 별관.</p>",
    },
    {
      type: 'toc',
    },
    {
      type: 'h2',
      id: "criteria",
      text: "삼성역 점심 맛집 선정 기준 (평점·리뷰·메뉴)",
      gradientStyle: { from: '#FF6B6B', to: '#4ECDC4' },
    },
    {
      type: 'body',
      html: "<p>삼성역 일대 점심 식당 가운데 평점·리뷰·메뉴 데이터가 모두 확인된 곳을 추렸습니다. 전체 859곳을 지역·카테고리·평점 기준으로 필터링한 뒤, 평점 4.4점 이상이면서 방문자 리뷰가 일정 수 이상 누적된 5곳을 선별했습니다.</p><p>이 글에 실린 식당들의 평균 평점은 <strong>4.8점</strong>이며, 누적 리뷰 수는 약 <strong>15,518건</strong>입니다. 1인 11,000원~18,500원 사이가 일반적이며, 접근성·회전율·세트 메뉴·가격을(를) 비교 기준으로 삼았습니다.</p><p>리뷰·평점 정보는 2026년 5월 기준이며, 영업시간·가격·메뉴 구성은 매장 사정에 따라 달라질 수 있어 방문 전에 한 번 더 확인하시는 편이 좋습니다.</p>",
    },
    {
      type: 'h2',
      id: "무탄-코엑스",
      text: "무탄 코엑스 — 평점 4.9·리뷰 7774건",
      gradientStyle: { from: '#4facfe', to: '#00f2fe' },
    },
    {
      type: 'image',
      src: "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251219_15%2F1766155988350c47ot_JPEG%2FIMG_6626.jpeg",
      alt: "무탄 코엑스 대표 사진",
      caption: "무탄 코엑스",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a>는 중식 카테고리에 속하는 식당으로입니다. 누적 리뷰 7,774건에 평점 4.9점으로, 같은 카테고리 안에서도 검증된 표본 크기에 속합니다.</p><p>1인 기준 가격대는 10,000원에서 18,000원 사이로 형성되어 있습니다. 이 카테고리 평균 시작가(11,000원)와 비슷한 수준입니다.</p><p>혼자 빠르게 한 끼 해결하기 좋습니다 점심 시간 회전이 빠른 편이라 직장인 점심으로 적합합니다 단체석·룸이 있어 회식이나 모임 자리로도 가능합니다 분위기가 무난한 편이라 가벼운 데이트로도 무리가 없습니다</p><p style=\"font-size:.85rem;color:var(--muted)\">📌 주차 가능 · 예약 가능 · 영업시간 11 AM–9:30 PM · 위치 영동대로</p><p>방문 후기에서 자주 언급되는 부분은 맛·웨이팅 쪽입니다.</p><p style=\"border-left:3px solid var(--border);padding-left:12px;color:var(--muted);font-size:.92rem\">한 방문자는 \"대기가 있었지만 기다리기 힘들지 않았고, 음식이 맛있고 양이 많아요\"고 적어두었습니다.</p><div style=\"margin:18px 0 8px;text-align:center\"><a href=\"/dinner/samseong/restaurant/무탄 코엑스\" style=\"display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:12px;background:linear-gradient(135deg,#FF6B6B 0%,#FFD93D 100%);color:#1a1a22;font-weight:800;font-size:.92rem;text-decoration:none;box-shadow:0 4px 14px rgba(255,107,107,.35);transition:transform .15s\">🍽 무탄 코엑스 메뉴·리뷰·위치 보기 →</a></div>",
    },
    {
      type: 'h2',
      id: "솥내음-스타필드-코엑스몰점",
      text: "솥내음 스타필드 코엑스몰점 — 리뷰 4,967건이 쌓인 곳",
      gradientStyle: { from: '#43e97b', to: '#38f9d7' },
    },
    {
      type: 'image',
      src: "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241119_154%2F1732017976177Al1KO_JPEG%2F078A6103.jpg",
      alt: "솥내음 스타필드 코엑스몰점 대표 사진",
      caption: "솥내음 스타필드 코엑스몰점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/솥내음 스타필드 코엑스몰점\">솥내음 스타필드 코엑스몰점</a>은 한식 카테고리에 속하는 식당으로, 대표 메뉴은 <strong>신메뉴 불쭈꾸미 솥밥 15,900원</strong>입니다. 누적 리뷰 4,967건에 평점 4.9점으로, 같은 카테고리 안에서도 검증된 표본 크기에 속합니다.</p><p>대표 메뉴와 가격은 다음과 같습니다.</p><table style=\"width:100%;border-collapse:collapse;font-size:.86rem;margin:10px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:7px 6px;text-align:left\">메뉴</th><th style=\"padding:7px 6px;text-align:right\">가격</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\">신메뉴 불쭈꾸미 솥밥</td><td style=\"padding:7px 6px;text-align:right\">15,900원</td></tr></tbody></table><p>혼자 빠르게 한 끼 해결하기 좋습니다 점심 시간 회전이 빠른 편이라 직장인 점심으로 적합합니다 분위기가 무난한 편이라 가벼운 데이트로도 무리가 없습니다 점심 12시·저녁 7시 같은 피크 시간대에는 웨이팅을 각오해야 합니다</p><p style=\"font-size:.85rem;color:var(--muted)\">📌 주차 가능 · 예약 가능 · 영업시간 10:30 · 위치 삼성동 159</p><p>방문 후기에서 자주 언급되는 부분은 웨이팅·양·맛 쪽입니다.</p><p style=\"border-left:3px solid var(--border);padding-left:12px;color:var(--muted);font-size:.92rem\">한 방문자는 \"솥내음 스타필드 코엑스점 에서 푸짐하게 점심 식사하고 왔어요\"고 적어두었습니다.</p><div style=\"margin:18px 0 8px;text-align:center\"><a href=\"/dinner/samseong/restaurant/솥내음 스타필드 코엑스몰점\" style=\"display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:12px;background:linear-gradient(135deg,#FF6B6B 0%,#FFD93D 100%);color:#1a1a22;font-weight:800;font-size:.92rem;text-decoration:none;box-shadow:0 4px 14px rgba(255,107,107,.35);transition:transform .15s\">🍽 솥내음 스타필드 코엑스몰점 메뉴·리뷰·위치 보기 →</a></div>",
    },
    {
      type: 'h2',
      id: "개성집",
      text: "개성집 — 점심 10천원대부터",
      gradientStyle: { from: '#fa709a', to: '#fee140' },
    },
    {
      type: 'image',
      src: "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20260413_102%2F1776048681916W9E9s_JPEG%2F%25BE%25D7%25BC%25C7%25C4%25C6.jpg",
      alt: "개성집 대표 사진",
      caption: "개성집",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/개성집\">개성집</a>은 한식 카테고리에 속하는 식당으로, 대표 메뉴은 <strong>삼겹살 14,000원</strong>입니다. 누적 리뷰 2,655건에 평점 4.9점으로, 같은 카테고리 안에서도 검증된 표본 크기에 속합니다.</p><p>1인 기준 가격대는 10,000원에서 20,000원 사이로 형성되어 있습니다. 이 카테고리 평균 시작가(11,000원)와 비슷한 수준입니다.</p><p>메뉴는 삼겹살 14,000원 등이 있습니다.</p><p>점심 시간 회전이 빠른 편이라 직장인 점심으로 적합합니다 분위기가 무난한 편이라 가벼운 데이트로도 무리가 없습니다 가격 대비 양·구성이 합리적이라는 평이 많습니다</p><p style=\"font-size:.85rem;color:var(--muted)\">📌 주차 가능 · 예약 가능</p><p>방문 후기에서 자주 언급되는 부분은 국물·재료·서비스 쪽입니다.</p><div style=\"margin:18px 0 8px;text-align:center\"><a href=\"/dinner/samseong/restaurant/개성집\" style=\"display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:12px;background:linear-gradient(135deg,#FF6B6B 0%,#FFD93D 100%);color:#1a1a22;font-weight:800;font-size:.92rem;text-decoration:none;box-shadow:0 4px 14px rgba(255,107,107,.35);transition:transform .15s\">🍽 개성집 메뉴·리뷰·위치 보기 →</a></div>",
    },
    {
      type: 'h2',
      id: "멘쇼쿠-코엑스점",
      text: "멘쇼쿠 코엑스점 — 일식 전문점",
      gradientStyle: { from: '#667EEA', to: '#764BA2' },
    },
    {
      type: 'image',
      src: "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251219_103%2F1766130978486IALhb_PNG%2FKakaoTalk_20251219_100424859.png",
      alt: "멘쇼쿠 코엑스점 대표 사진",
      caption: "멘쇼쿠 코엑스점",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/멘쇼쿠 코엑스점\">멘쇼쿠 코엑스점</a>은 일식 카테고리에 속하는 식당으로, 대표 메뉴은 <strong>풀 토핑 라멘 17,500원</strong>입니다. 평점 4.4점에 리뷰 122건으로 안정적인 평가가 쌓여 있습니다.</p><p>1인 기준 가격대는 13,000원에서 17,500원 사이로 형성되어 있습니다. 카테고리 평균 시작가 11,000원과 비교하면 약 2,000원 높은 편으로, 단가 대비 메뉴 구성이나 재료를 우선시한 곳에 가깝습니다.</p><p>메뉴는 풀 토핑 라멘 17,500원, 백라멘 13,500원, 홍라멘 13,500원 등이 있습니다.</p><p>혼자 빠르게 한 끼 해결하기 좋습니다 점심 시간 회전이 빠른 편이라 직장인 점심으로 적합합니다 분위기가 무난한 편이라 가벼운 데이트로도 무리가 없습니다</p><p style=\"font-size:.85rem;color:var(--muted)\">📌 주차 가능 · 영업시간 11 AM–9 PM · 위치 테헤란로 87길</p><p>방문 후기에서 자주 언급되는 부분은 국물·분위기·맛 쪽입니다.</p><div style=\"margin:18px 0 8px;text-align:center\"><a href=\"/dinner/samseong/restaurant/멘쇼쿠 코엑스점\" style=\"display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:12px;background:linear-gradient(135deg,#FF6B6B 0%,#FFD93D 100%);color:#1a1a22;font-weight:800;font-size:.92rem;text-decoration:none;box-shadow:0 4px 14px rgba(255,107,107,.35);transition:transform .15s\">🍽 멘쇼쿠 코엑스점 메뉴·리뷰·위치 보기 →</a></div>",
    },
    {
      type: 'h2',
      id: "수림복국-선릉-삼성-별관",
      text: "수림복국 선릉 삼성 별관 — 기타 전문점",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'image',
      src: "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20251222_225%2F1766412183665XDgXT_JPEG%2FKakaoTalk_20251222_230235675.jpg",
      alt: "수림복국 선릉 삼성 별관 대표 사진",
      caption: "수림복국 선릉 삼성 별관",
    },
    {
      type: 'body',
      html: "<p><a href=\"/dinner/samseong/restaurant/수림복국 선릉 삼성 별관\">수림복국 선릉 삼성 별관</a>은 기타 카테고리에 속하는 식당으로입니다.</p><p>점심 시간 회전이 빠른 편이라 직장인 점심으로 적합합니다 가격 대비 양·구성이 합리적이라는 평이 많습니다</p><p style=\"font-size:.85rem;color:var(--muted)\">📌 예약 가능 · 영업시간 10:00 · 위치 삼성동 144-21</p><p>방문 후기에서 자주 언급되는 부분은 맛·분위기·국물 쪽입니다.</p><div style=\"margin:18px 0 8px;text-align:center\"><a href=\"/dinner/samseong/restaurant/수림복국 선릉 삼성 별관\" style=\"display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:12px;background:linear-gradient(135deg,#FF6B6B 0%,#FFD93D 100%);color:#1a1a22;font-weight:800;font-size:.92rem;text-decoration:none;box-shadow:0 4px 14px rgba(255,107,107,.35);transition:transform .15s\">🍽 수림복국 선릉 삼성 별관 메뉴·리뷰·위치 보기 →</a></div>",
    },
    {
      type: 'h2',
      id: "compare",
      text: "삼성역 점심 5곳 한눈에 비교 (평점·가격대·대표메뉴)",
      gradientStyle: { from: '#f7971e', to: '#ffd200' },
    },
    {
      type: 'body',
      html: "<table style=\"width:100%;border-collapse:collapse;font-size:.85rem;margin:12px 0\"><thead><tr style=\"border-bottom:2px solid var(--border)\"><th style=\"padding:8px 6px;text-align:left\">식당</th><th style=\"padding:8px 6px;text-align:center\">평점</th><th style=\"padding:8px 6px;text-align:center\">리뷰</th><th style=\"padding:8px 6px;text-align:center\">가격대</th><th style=\"padding:8px 6px;text-align:left\">한줄평</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/무탄 코엑스\">무탄 코엑스</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">7774건</td><td style=\"padding:7px 6px;text-align:center\">10,000~18,000원</td><td style=\"padding:7px 6px\">룸 있음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/솥내음 스타필드 코엑스몰점\">솥내음 스타필드 코엑스몰점</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">4967건</td><td style=\"padding:7px 6px;text-align:center\">15,900원</td><td style=\"padding:7px 6px\">웨이팅 각오</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/개성집\">개성집</a></td><td style=\"padding:7px 6px;text-align:center\">4.9</td><td style=\"padding:7px 6px;text-align:center\">2655건</td><td style=\"padding:7px 6px;text-align:center\">10,000~20,000원</td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/멘쇼쿠 코엑스점\">멘쇼쿠 코엑스점</a></td><td style=\"padding:7px 6px;text-align:center\">4.4</td><td style=\"padding:7px 6px;text-align:center\">122건</td><td style=\"padding:7px 6px;text-align:center\">13,000~17,500원</td><td style=\"padding:7px 6px\">혼밥 편한 곳</td></tr><tr style=\"border-bottom:1px solid var(--border)\"><td style=\"padding:7px 6px\"><a href=\"/dinner/samseong/restaurant/수림복국 선릉 삼성 별관\">수림복국 선릉 삼성 별관</a></td><td style=\"padding:7px 6px;text-align:center\">5</td><td style=\"padding:7px 6px;text-align:center\">0건</td><td style=\"padding:7px 6px;text-align:center\"></td><td style=\"padding:7px 6px\">가격 대비 양 많음</td></tr></tbody></table>",
    },
    {
      type: 'h2',
      id: "by-situation",
      text: "상황별 삼성역 점심 추천 (혼밥·점심·접대·모임)",
      gradientStyle: { from: '#A8EDEA', to: '#FED6E3' },
    },
    {
      type: 'body',
      html: "<ul><li><strong>가성비 우선:</strong> 개성집, 수림복국 선릉 삼성 별관 — 합리적인 가격에 만족스러운 식사가 가능합니다.</li><li><strong>분위기 중시:</strong> 무탄 코엑스, 솥내음 스타필드 코엑스몰점 — 데이트나 특별한 날에 추천합니다.</li><li><strong>단체·회식:</strong> 무탄 코엑스 — 단체석 또는 룸이 있어 회식에 적합합니다.</li><li><strong>혼밥:</strong> 무탄 코엑스, 솥내음 스타필드 코엑스몰점 — 1인 식사가 부담 없는 곳입니다.</li><li><strong>평점 최고:</strong> 수림복국 선릉 삼성 별관 (평점 5점) — 방문자 평가가 가장 높습니다.</li><li><strong>리뷰 최다:</strong> 무탄 코엑스 (리뷰 7774건) — 가장 많은 방문자가 검증한 식당입니다.</li></ul>",
    },
    {
      type: 'h2',
      id: "tips",
      text: "삼성역 점심 방문 전 체크포인트 (예약·주차·웨이팅)",
      gradientStyle: { from: '#FFD700', to: '#FF6B35' },
    },
    {
      type: 'body',
      html: "<ul><li>솥내음 스타필드 코엑스몰점은 점심 피크 시간(12시~12시 30분)에 대기가 있을 수 있습니다. 11시 50분 이전에 방문하시는 것을 추천드립니다.</li><li>무탄 코엑스, 솥내음 스타필드 코엑스몰점은 사전에 예약하고 방문하시는 것이 좋습니다. 특히 주말 저녁에는 예약이 필수입니다.</li><li>주차 가능한 곳: 무탄 코엑스, 솥내음 스타필드 코엑스몰점, 개성집.</li><li>수림복국 선릉 삼성 별관 등은 전용 주차장이 없습니다. 대중교통 이용을 권장드립니다.</li><li>점심 메뉴가 저녁보다 저렴한 경우가 많습니다. 런치 세트 메뉴 여부를 미리 확인하시고 방문하시면 좋겠습니다.</li></ul>",
    },
    {
      type: 'cta',
      href: "/dinner/samseong",
      text: "삼성역 전체 맛집 보기 →",
    },
    {
      type: 'ending',
      html: "<p>2026년 5월 기준 정보입니다. 영업시간이나 가격은 변동될 수 있으므로, 방문 전에 한 번 확인하시는 것을 권장드립니다. 아래 관련 글도 함께 참고해 주시기 바랍니다.</p>",
    }
  ],
}

export default post
