const restaurants = [
  {"name": "철수포차", "type": "야장·포차·이자카야", "priceRange": "25000~40000", "cat": ["야장", "이자카야", "치킨"], "e": "🍻", "rt": 3.8, "cnt": 52, "addr": "선릉로 112길 31", "hours": "PM 5–AM 5 (일 휴무)", "tags": ["야장", "막걸리", "생맥주", "포차감성"], "moods": ["기분 좋음", "스트레스 받음", "회식"], "wx": ["맑음", "덥고 습함"], "scene": ["야장에 맥주", "가볍게 술", "포차"], "rv": ["마시기 좋은 곳. 막걸리와 생맥주가 정말 맛있음 (실제 Google 리뷰, 3.8★)", "아늑하고 편안한 분위기. 힙한 곳. (실제 Google 리뷰)"], "lat": 37.5118983, "lng": 127.0460031, "exit4": false},
  {"name": "못난이포차", "type": "야장·포차", "priceRange": "15000~25000", "cat": ["야장", "이자카야"], "e": "🏮", "rt": 3.6, "cnt": 77, "addr": "삼성1동 152-23", "hours": "영업시간 미확인", "tags": ["포차감성", "야장", "안주", "고기"], "moods": ["기분 좋음", "스트레스 받음", "회식"], "wx": ["맑음", "덥고 습함"], "scene": ["야장에 맥주", "포차 분위기", "친구랑 가볍게"], "rv": ["OMG this place is amazing! Staff incredibly friendly and meat SO good! (실제 Google 리뷰, 3.6★)", "Indoor pocha vibes. Service a little slow but food worth the wait! (실제 Google 리뷰)"], "lat": 37.510277, "lng": 127.055947, "exit4": false},
  {"name": "ASOBOY", "type": "라이브바·야장", "priceRange": "15000~25000", "cat": ["야장", "와인바", "이자카야"], "e": "🎸", "rt": 4.5, "cnt": 109, "addr": "봉은사로 504 지하 1층", "hours": "PM 7–AM 2 (매일)", "tags": ["라이브음악", "야장", "생맥주", "분위기최고"], "moods": ["기분 좋음", "데이트", "회식", "스트레스 받음"], "wx": ["맑음", "흐림", "덥고 습함"], "scene": ["야장에 맥주", "음악 들으며 한잔", "라이브바"], "rv": ["The greatest bar on earth — not an exaggeration. One of a kind atmosphere, friendliest people, great music. (실제 Google 리뷰, 4.5★)", "Spacious, clean, kind staff, great draft beer — live music nights are amazing! (실제 Google 리뷰)"], "lat": 37.5129121, "lng": 127.0541264, "exit4": false},
  {"name": "만선호프 삼성동", "type": "야장·호프", "priceRange": "15000~25000", "cat": ["야장", "치킨"], "e": "⛺", "rt": 5.0, "cnt": 2, "addr": "테헤란로 77길 9", "hours": "영업시간 미확인", "tags": ["야장", "대형스크린", "생맥주", "치킨"], "moods": ["기분 좋음", "회식", "스트레스 받음"], "wx": ["맑음", "덥고 습함"], "scene": ["야장에 맥주", "경기 보면서 치맥", "친구들이랑"], "rv": ["Samsung Manseon famous for its night market and large screens. Beer refreshing and snacks delicious. (실제 Google 리뷰, 5.0★)"], "lat": 37.5070809, "lng": 127.0543849, "exit4": false},
  {"name": "다빈치호프", "type": "야장·호프", "cat": ["야장", "치킨"], "e": "🎯", "rt": 4.1, "cnt": 36, "addr": "테헤란로 108길 11 대치동", "hours": "영업시간 미확인", "tags": ["야장", "다트", "당구", "피자", "생맥주"], "moods": ["기분 좋음", "스트레스 받음", "회식"], "wx": ["맑음", "흐림"], "scene": ["야장에 맥주", "다트 치면서 한잔", "친구들이랑 게임"], "rv": ["Better than I thought — enjoy beer in comfort, darts and pool tables available. (실제 Google 리뷰, 4.1★)"], "lat": 37.5086544, "lng": 127.0661619, "exit4": false},
  {"name": "데일리비어 삼성점", "type": "치킨·크래프트맥주", "priceRange": "18000~28000", "cat": ["치킨", "야장", "이자카야"], "e": "🍗", "rt": 4.3, "cnt": 336, "addr": "삼성로 104길 18 삼성1동", "hours": "PM 5–AM 2 (일 ~자정)", "tags": ["크래프트맥주", "치킨", "생맥주", "치맥"], "moods": ["기분 좋음", "회식", "스트레스 받음"], "wx": ["맑음", "흐림", "덥고 습함"], "scene": ["야장에 맥주", "치맥", "크래프트 맥주", "퇴근 후 한잔"], "rv": ["Best place to find varieties of beer on tap — NE IPA + fried chicken is beer and chicken heaven! (실제 Google 리뷰, 4.3★)", "Amazing crispy tender chicken — Pyrex measuring cup beer adds to the charm! (실제 Google 리뷰)"], "lat": 37.5109669, "lng": 127.0562369, "exit4": false},
  {"name": "데일리비어 삼성코엑스 2호점", "type": "치킨·크래프트맥주", "cat": ["치킨", "야장"], "e": "🍺", "rt": 4.8, "cnt": 60, "addr": "삼성1동 157-8", "hours": "영업시간 미확인", "tags": ["크래프트맥주", "치킨", "코엑스"], "moods": ["기분 좋음", "회식", "혼밥"], "wx": ["맑음", "흐림"], "scene": ["야장에 맥주", "치맥", "코엑스 근처"], "rv": ["Large and clean store — delicious meal! If you love English pubs you must come here! (실제 Google 리뷰, 4.8★)"], "lat": 37.5084442, "lng": 127.0565894, "exit4": false},
  {"name": "깐부치킨 삼성점", "type": "치킨·맥주", "priceRange": "18000~28000", "cat": ["치킨", "야장"], "e": "🐓", "rt": 3.9, "cnt": 435, "addr": "삼성로 96길 3", "hours": "PM 4–AM 2 (일 ~AM 12:30)", "tags": ["치킨", "생맥주", "코엑스도보", "치맥"], "moods": ["기분 좋음", "회식", "스트레스 받음"], "wx": ["맑음", "흐림", "덥고 습함"], "scene": ["야장에 맥주", "치맥", "친구들이랑 치킨"], "rv": ["Great chicken — crispy, garlic sauce and coleslaw quite special. (실제 Google 리뷰, 3.9★)", "Jensen Huang visited here — now most popular chicken in Seoul! (실제 Google 리뷰)"], "lat": 37.5086633, "lng": 127.056181, "exit4": false},
  {"name": "깐부치킨 삼성역점", "type": "치킨·맥주", "cat": ["치킨", "야장"], "e": "🐔", "rt": 3.9, "cnt": 153, "addr": "테헤란로 104길 9 대치동", "hours": "PM 1–자정 (주말 PM 2~)", "tags": ["치킨", "생맥주", "치맥", "심야"], "moods": ["기분 좋음", "회식", "혼밥"], "wx": ["맑음", "흐림"], "scene": ["치맥", "퇴근 후 치킨", "야장에 맥주"], "rv": ["Crispy succulent chicken — opens till late on Friday. (실제 Google 리뷰, 3.9★)"], "lat": 37.5085934, "lng": 127.065208, "exit4": false},
  {"name": "삼성동치킨 삼성점", "type": "치킨·이자카야", "priceRange": "25000~40000", "cat": ["치킨", "야장"], "e": "🍖", "rt": 4.1, "cnt": 98, "addr": "삼성1동 77-7", "hours": "PM 5:30–11 (토일 휴무)", "tags": ["치킨", "생맥주", "마늘간장"], "moods": ["기분 좋음", "회식", "스트레스 받음"], "wx": ["맑음", "흐림"], "scene": ["치맥", "야장에 맥주", "친구들이랑 치킨"], "rv": ["Garlic Soy Chicken is to die for — caramelised garlic+light soy on skin! (실제 Google 리뷰, 4.1★)", "Amazing fried chicken, ice cold beer, rose tteokbokki — owner beyond nice. (실제 Google 리뷰)"], "lat": 37.514747, "lng": 127.0589833, "exit4": false},
  {"name": "낙지&닭 삼성점", "type": "치킨·낙지", "priceRange": "18000~28000", "cat": ["치킨", "야장"], "e": "🐙", "rt": 3.9, "cnt": 92, "addr": "삼성로 104길 24", "hours": "PM 5–AM 5 (매일)", "tags": ["치킨", "낙지", "심야5시", "야장"], "moods": ["기분 좋음", "스트레스 받음", "회식"], "wx": ["맑음", "흐림", "덥고 습함"], "scene": ["야장에 맥주", "심야 안주", "낙지에 치킨"], "rv": ["Fried octopus and chicken complement each other perfectly. A variety of beers! (실제 Google 리뷰, 3.9★)"], "lat": 37.5111037, "lng": 127.0566786, "exit4": false},
  {"name": "BHC치킨 삼성", "type": "치킨·프랜차이즈", "priceRange": "18000~28000", "cat": ["치킨", "야장"], "e": "🍟", "rt": 3.7, "cnt": 205, "addr": "삼성1동 77-9 1층 2층", "hours": "12 PM–11 PM", "tags": ["치킨", "뿌링클", "치맥"], "moods": ["기분 좋음", "혼밥", "회식"], "wx": ["맑음", "흐림"], "scene": ["치맥", "야장에 맥주"], "rv": ["BHC chicken should be on every traveler's wish list! (실제 Google 리뷰, 3.7★)"], "lat": 37.5146945, "lng": 127.0594025, "exit4": false},
  {"name": "피카소", "type": "로컬치킨·호프", "priceRange": "18000~28000", "cat": ["치킨", "야장"], "e": "🎨", "rt": 3.7, "cnt": 7, "addr": "삼성1동 165 인근", "hours": "PM 4–AM 12 (토일 휴무)", "tags": ["30년된집", "두부김치", "로컬", "생맥주"], "moods": ["기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림"], "scene": ["야장에 맥주", "로컬 동네술집"], "rv": ["30-year-old neighborhood pub — tofu kimchi more famous than chicken. (실제 Google 리뷰, 3.7★)"], "lat": 37.5139676, "lng": 127.0641893, "exit4": false},
  {"name": "닭금터", "type": "치킨·야장", "priceRange": "15000~25000", "cat": ["치킨", "야장"], "e": "🌟", "rt": 4.0, "cnt": 64, "addr": "삼성1동 106-6", "hours": "PM 4–자정 (토 PM 5~11, 일 휴무)", "tags": ["치킨", "야장", "저녁맥주"], "moods": ["기분 좋음", "회식"], "wx": ["맑음", "흐림"], "scene": ["치맥", "야장에 맥주"], "rv": ["In the evening it's a bar for chicken and beer — so crowded, arrive early. (실제 Google 리뷰, 4.0★)"], "lat": 37.5151154, "lng": 127.060746, "exit4": false},
  {"name": "치킨뱅이 삼성3호점", "type": "치킨·야장", "cat": ["치킨", "야장"], "e": "🐣", "rt": 3.8, "cnt": 45, "addr": "대치동 1000-1", "hours": "PM 5–자정 (토일 PM 5~11)", "tags": ["치킨", "골뱅이", "생맥주"], "moods": ["기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림"], "scene": ["야장에 맥주", "치킨"], "rv": ["Crispy and delicious chicken. Chicken Bangi + golbaengi great combo! (실제 Google 리뷰, 3.8★)"], "lat": 37.5079324, "lng": 127.0655738, "exit4": false},
  {"name": "골목길와인집", "type": "와인바", "priceRange": "25000~40000", "cat": ["와인바", "이자카야"], "e": "🍷", "rt": 4.9, "cnt": 13, "addr": "테헤란로 81길 58-4 1층", "hours": "PM 6–자정 (매일)", "tags": ["와인바", "외부음식허용", "골목길", "데이트"], "moods": ["데이트", "기분 좋음", "축하할 일 있음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["데이트", "와인 한잔", "분위기 있게", "조용히 한잔"], "rv": ["Wine bar tucked in alleyway — cozy, quiet, accepts outside food! Most romantic bar near COEX. (실제 Google 리뷰, 4.9★)", "Friendly owner recommended wine just right for my taste. Perfect date spot. (실제 Google 리뷰)"], "lat": 37.5103406, "lng": 127.0560618, "exit4": false},
  {"name": "MaltBarBARREL", "type": "위스키바", "priceRange": "25000~40000", "cat": ["와인바", "이자카야"], "e": "🥃", "rt": 4.4, "cnt": 313, "addr": "삼성로 104길 10 2층", "hours": "PM 6–AM 2 (매일)", "tags": ["위스키700종", "스카치", "버번", "프라이빗룸"], "moods": ["데이트", "기분 좋음", "축하할 일 있음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["위스키 한잔", "특별한 날 바", "조용히 한잔"], "rv": ["Over 700 bottles — bartender Jay makes custom cocktails and recommends best whiskies. (실제 Google 리뷰, 4.4★)", "Incredibly cozy. Excellent selection of Scotch, American, Japanese whiskey. (실제 Google 리뷰)"], "lat": 37.5107202, "lng": 127.0554776, "exit4": false},
  {"name": "SIDE A", "type": "와인바·카페", "cat": ["와인바", "양식"], "e": "💿", "rt": 4.7, "cnt": 26, "addr": "삼성1동 75-8", "hours": "AM 11–자정 (일 휴무)", "tags": ["희귀맥주", "와인바", "테라스", "숨겨진명소"], "moods": ["데이트", "기분 좋음", "혼밥"], "wx": ["맑음", "흐림"], "scene": ["낮맥주", "와인 한잔", "숨겨진 바"], "rv": ["Hard-to-find beer, great atmosphere, friendly owner — perfect terrace lunch. (실제 Google 리뷰, 4.7★)"], "lat": 37.5135148, "lng": 127.0541434, "exit4": false},
  {"name": "데블스도어 코엑스", "type": "크래프트맥주바", "priceRange": "15000~25000", "cat": ["와인바", "야장"], "e": "🚪", "rt": 3.9, "cnt": 794, "addr": "영동대로 513 스타필드코엑스", "hours": "PM 11:30–자정 (금토 ~AM 1)", "tags": ["하우스브루어리", "크래프트맥주", "코엑스"], "moods": ["기분 좋음", "회식", "데이트"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["야장에 맥주", "크래프트 맥주", "퇴근 후 한잔"], "rv": ["Local pub with homebrewed beers on tap — from light ales to darker stouts. (실제 Google 리뷰, 3.9★)", "Helles lager quite refreshing and ice cold. (실제 Google 리뷰)"], "lat": 37.5118857, "lng": 127.0597601, "exit4": false},
  {"name": "미주이자카야", "type": "이자카야·프라이빗룸", "priceRange": "25000~40000", "cat": ["이자카야", "야장"], "e": "🏮", "rt": 4.9, "cnt": 8, "addr": "대치동 944-24", "hours": "PM 5–AM 3 (일 휴무)", "tags": ["프라이빗룸", "이자카야", "블루투스스피커"], "moods": ["기분 좋음", "데이트", "회식"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["야장에 맥주", "이자카야 프라이빗룸", "소그룹 술자리"], "rv": ["Private room at Izakaya Miju — food excellent, staff gave us Bluetooth! (실제 Google 리뷰, 4.9★)", "Perfect for 4+ people — chat and have fun privately. (실제 Google 리뷰)"], "lat": 37.5065462, "lng": 127.060289, "exit4": false},
  {"name": "이자카야한잔 삼성본점", "type": "이자카야", "priceRange": "25000~40000", "cat": ["이자카야", "야장"], "e": "🍢", "rt": 3.6, "cnt": 109, "addr": "삼성1동 149-31번지 1층", "hours": "PM 5–AM 2 (매일)", "tags": ["이자카야", "사시미", "숯불꼬치", "테라스", "하이볼"], "moods": ["기분 좋음", "회식", "데이트"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["야장에 맥주", "이자카야 안주", "퇴근 후 한잔"], "rv": ["Wonderful cozy atmosphere with private tables — sashimi fresh. Highball perfect pairing! (실제 Google 리뷰, 3.6★)"], "lat": 37.511122, "lng": 127.0561411, "exit4": false},
  {"name": "신라스테이 삼성 루프탑바", "type": "루프탑바", "priceRange": "15000~25000", "cat": ["와인바", "야장"], "e": "🌇", "rt": 5.0, "cnt": 2, "addr": "영동대로 506 삼성1동", "hours": "영업시간 미확인", "tags": ["루프탑바", "한강뷰", "서울전망"], "moods": ["데이트", "기분 좋음", "축하할 일 있음"], "wx": ["맑음", "흐림"], "scene": ["야장에 맥주", "루프탑 야장", "데이트 바"], "rv": ["Rooftop bar with incredible views over Seoul — enter via the hotel. (실제 Google 리뷰, 5.0★)"], "lat": 37.5099423, "lng": 127.0632158, "exit4": true},
  {"name": "이화수전통육개장", "type": "한식·육개장", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🥩", "rt": 3.8, "cnt": 135, "addr": "테헤란로 86길 16 대치동", "hours": "10:30 AM–10 PM (매일)", "tags": ["육개장", "얼큰", "해장", "소고기"], "moods": ["피곤함", "스트레스 받음", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "얼큰한 국물", "소고기 국밥", "혼자 밥"], "rv": ["Their yukgaejang is one of the best ever. Must eat here if you want best yukgaejang! (실제 Google 리뷰, 3.8★)", "Excellent soup. Reasonably priced. Definite GO place for lunch. (실제 Google 리뷰)"], "lat": 37.5062885, "lng": 127.0591551, "exit4": false},
  {"name": "중앙해장 삼성점", "type": "국밥·해장국", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🥣", "rt": 4.3, "cnt": 5713, "addr": "영동대로 86길 17", "hours": "7 AM–10 PM", "tags": ["내장국밥", "해장", "아침가능", "리뷰5000+"], "moods": ["피곤함", "스트레스 받음", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "따뜻한 국물", "혼자 밥", "아침 식사"], "rv": ["Quick service, great quality and quantity. Perfect spot for hangover soup. (실제 Google 리뷰, 4.3★)", "Best hangover soup — intestines clean, broth rich. Soul food. (실제 Google 리뷰)"], "lat": 37.5083134, "lng": 127.0654678, "exit4": false},
  {"name": "전통백암순대국", "type": "국밥·순대국", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🫙", "rt": 4.2, "cnt": 447, "addr": "테헤란로 81길 37", "hours": "6 AM–9 PM (일 휴무)", "tags": ["순대국밥", "새벽6시오픈", "가성비최고", "로컬현지인"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "아침 식사", "가성비 밥", "혼자 밥"], "rv": ["Super amazing traditional soondae guk for very reasonable prices — filled with locals. (실제 Google 리뷰, 4.2★)"], "lat": 37.5092921, "lng": 127.0562078, "exit4": false},
  {"name": "박서방순대국밥", "type": "국밥·순대국", "cat": ["국밥", "국물", "한식"], "e": "🍖", "rt": 4.0, "cnt": 733, "addr": "삼성1동 156-5", "hours": "10 AM–3:30 PM, 4:30–10 PM (일 휴무)", "tags": ["순대국밥", "오래된집", "신선재료", "잡내없음"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥", "로컬 국밥"], "rv": ["Oldest self-owned blood sausage stew in Samseong-dong. All ingredients fresh, less fatty. (실제 Google 리뷰, 4.0★)"], "lat": 37.5086639, "lng": 127.0559972, "exit4": false},
  {"name": "진양재순대 삼성점", "type": "국밥·순대국", "cat": ["국밥", "국물", "한식"], "e": "🫗", "rt": 4.5, "cnt": 68, "addr": "삼성1동 166-3", "hours": "10 AM–9 PM (토 ~3 PM, 일 휴무)", "tags": ["수제순대", "국물깔끔", "잡내없음", "혼밥"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥", "깔끔한 국밥"], "rv": ["Sundae soup clean, free of unpleasant odor. Homemade sundae, plenty of garnish. (실제 Google 리뷰, 4.5★)"], "lat": 37.5126261, "lng": 127.0653936, "exit4": false},
  {"name": "전주소고기해장국", "type": "국밥·소고기해장국", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🍲", "rt": 4.5, "cnt": 104, "addr": "테헤란로 81길 46-3 1층", "hours": "8 AM–10 PM (일 휴무)", "tags": ["소고기해장국", "아침가능", "빈대떡", "영어가능"], "moods": ["피곤함", "스트레스 받음", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "아침 식사", "혼자 밥"], "rv": ["Spicy beef soup — innards well cleaned, no funky smell. Owner speaks fluent English. (실제 Google 리뷰, 4.5★)"], "lat": 37.5098966, "lng": 127.0562583, "exit4": false},
  {"name": "이여곰탕 강남삼성", "type": "국밥·곰탕", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🫕", "rt": 4.5, "cnt": 17, "addr": "삼성로 548", "hours": "10 AM–자정 (화~토 24h)", "tags": ["곰탕", "쌀국수곰탕", "서울4대곰탕", "국물깔끔"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥", "국물 맛집"], "rv": ["Seoul 4 best Korean beef bone soup. Broth clean, meat delicious. (실제 Google 리뷰, 4.5★)"], "lat": 37.510618, "lng": 127.0550396, "exit4": false},
  {"name": "신사골감자탕", "type": "국밥·감자탕", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🦴", "rt": 4.1, "cnt": 154, "addr": "삼성로 104길 8", "hours": "9 AM–자정 (거의 24시간)", "tags": ["감자탕", "뼈고기많음", "24시간", "가성비최고"], "moods": ["피곤함", "스트레스 받음", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "심야 밥", "24시간 식사"], "rv": ["8,000won pork backbone soup — so much meat on the bone. Excellent value. (실제 Google 리뷰, 4.1★)"], "lat": 37.5106558, "lng": 127.0553088, "exit4": false},
  {"name": "재수돈감자탕 삼성점", "type": "국밥·감자탕", "cat": ["국밥", "국물", "한식"], "e": "🔥", "rt": 4.7, "cnt": 14, "addr": "테헤란로 87길 57", "hours": "11 AM–AM 5 (일 ~AM 2)", "tags": ["감자탕", "심야영업", "깔끔인테리어", "국물깔끔"], "moods": ["피곤함", "스트레스 받음", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "심야 밥", "새벽 식사"], "rv": ["COEX 바로 앞 감자탕 맛집! 국물 깔끔하고 잡내 없어요. (실제 Google 리뷰, 4.7★)"], "lat": 37.5112895, "lng": 127.0571996, "exit4": false},
  {"name": "담이온 강남경찰서점", "type": "국밥·돼지국밥", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🌙", "rt": 4.0, "cnt": 61, "addr": "영동대로 86길 11", "hours": "24시간 영업", "tags": ["돼지국밥", "24시간", "야식", "양많음"], "moods": ["피곤함", "스트레스 받음", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림", "맑음"], "scene": ["심야 밥", "야식", "24시간"], "rv": ["Food portion very generous — authentic local dining after 10pm! (실제 Google 리뷰, 4.0★)"], "lat": 37.5080982, "lng": 127.0651151, "exit4": false},
  {"name": "일품돼지국밥 삼성역본점", "type": "국밥·돼지국밥", "cat": ["국밥", "국물", "한식"], "e": "🐷", "rt": 3.9, "cnt": 16, "addr": "테헤란로 87길 17", "hours": "24시간 영업", "tags": ["돼지국밥", "24시간", "태블릿주문", "외국인편리"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림", "맑음"], "scene": ["혼자 밥", "심야 밥", "24시간"], "rv": ["As solo foreign traveler — tablet ordering made everything stress-free. (실제 Google 리뷰, 3.9★)"], "lat": 37.5089172, "lng": 127.0584825, "exit4": false},
  {"name": "외고집설렁탕", "type": "국밥·설렁탕", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🍚", "rt": 4.2, "cnt": 1150, "addr": "삼성로 555", "hours": "11 AM–9 PM (일 휴무)", "tags": ["설렁탕", "미슐랭", "국물담백"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥", "담백한 국물"], "rv": ["Michelin awarded multiple times. Add salt manually — once adjusted, delicious. (실제 Google 리뷰, 4.2★)"], "lat": 37.5110533, "lng": 127.054161, "exit4": false},
  {"name": "이남장 삼성점", "type": "국밥·설렁탕", "cat": ["국밥", "국물", "한식"], "e": "🐂", "rt": 4.2, "cnt": 1040, "addr": "삼성1동 165-12", "hours": "10 AM–9 PM", "tags": ["설렁탕", "소고기국밥", "삼성역최고"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥"], "rv": ["Best seolleongtang near Samsung station — friendly staff. (실제 Google 리뷰, 4.2★)"], "lat": 37.5135668, "lng": 127.0644469, "exit4": false},
  {"name": "곰탕LAB", "type": "국밥·곰탕", "cat": ["국밥", "국물", "한식"], "e": "🔬", "rt": 4.5, "cnt": 27, "addr": "테헤란로 517 현대백화점 10층", "hours": "11 AM–3 PM, 5–10 PM", "tags": ["곰탕", "미슐랭", "소고기조개국물", "고급국밥", "데이트"], "moods": ["데이트", "기분 좋음", "피곤함"], "wx": ["비", "눈", "쌀쌀함", "흐림", "맑음"], "scene": ["고급 국밥", "데이트 식사", "특별한 국물"], "rv": ["Michelin Guide recognition. Beef and clam soup — rich broth, subtle sweetness. (실제 Google 리뷰, 4.5★)"], "lat": 37.508572, "lng": 127.0597394, "exit4": true},
  {"name": "아오내순대 코엑스", "type": "국밥·순대국", "cat": ["국밥", "국물", "한식"], "e": "🏙️", "rt": 4.5, "cnt": 13, "addr": "테헤란로 87길 36 도심공항타워", "hours": "11 AM–3 PM, 5–9 PM", "tags": ["순대국밥", "코엑스", "고기많음", "줄섬"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥", "코엑스 식사"], "rv": ["Always a long line — best sundae gukbap I've ever had! (실제 Google 리뷰, 4.5★)"], "lat": 37.5104744, "lng": 127.0583785, "exit4": false},
  {"name": "남산옥 삼성점", "type": "국밥·돼지국밥", "cat": ["국밥", "국물", "한식"], "e": "🌃", "rt": 3.6, "cnt": 426, "addr": "테헤란로 108길 15", "hours": "24시간 (금토 ~오후9시)", "tags": ["24시간", "곱창전골", "야식"], "moods": ["피곤함", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림", "맑음"], "scene": ["심야 밥", "24시간", "야식"], "rv": ["Simple 24hr diner — great value, pork belly delicious. (실제 Google 리뷰, 3.6★)"], "lat": 37.5084772, "lng": 127.0661832, "exit4": false},
  {"name": "김명자굴국밥", "type": "국밥·굴국밥", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🦪", "rt": 4.1, "cnt": 143, "addr": "삼성로 96길 9", "hours": "9 AM–9 PM (토일 휴무)", "tags": ["굴국밥", "굴신선함", "매생이굴국", "숨겨진명소", "가성비최고"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥"], "rv": ["Very fresh oysters — direct sourced. Fantastic and very cheap. (실제 Google 리뷰, 4.1★)"], "lat": 37.5088619, "lng": 127.0566717, "exit4": false},
  {"name": "원조양평해장국 삼성동점", "type": "국밥·해장국", "cat": ["국밥", "국물", "한식"], "e": "🍜", "rt": 3.9, "cnt": 226, "addr": "삼성1동 161-8", "hours": "10:30 AM–10 PM", "tags": ["양평해장국", "선지국밥", "얼큰국물"], "moods": ["피곤함", "스트레스 받음", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "얼큰한 국물"], "rv": ["Best on rainy day — pig intestine soup super peppery. Very local! (실제 Google 리뷰, 3.9★)"], "lat": 37.514029, "lng": 127.063577, "exit4": false},
  {"name": "삼성동 뼈다귀집", "type": "국밥·뼈해장국", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🫀", "rt": 4.0, "cnt": 9, "addr": "삼성로 100길 16", "hours": "11 AM–11 PM", "tags": ["뼈해장국", "9천원", "초가성비"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "가성비 밥"], "rv": ["삼성동 한복판 9,000원짜리 뼈해장국 — 국물 진하고 고기양 많아요. (실제 Google 리뷰, 4.0★)"], "lat": 37.5096888, "lng": 127.0566963, "exit4": false},
  {"name": "본가신의주찹쌀순대", "type": "국밥·순대국", "cat": ["국밥", "국물", "한식"], "e": "🥩", "rt": 3.8, "cnt": 293, "addr": "삼성1동 107-4", "hours": "24시간 영업", "tags": ["찹쌀순대", "24시간", "야식"], "moods": ["피곤함", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림", "맑음"], "scene": ["심야 밥", "24시간"], "rv": ["Popular Korean pork intestine soup. Soup hot and tasty. (실제 Google 리뷰, 3.8★)"], "lat": 37.515019, "lng": 127.060744, "exit4": false},
  {"name": "제주은희네해장국 대치점", "type": "국밥·해장국", "cat": ["국밥", "국물", "한식"], "e": "🌊", "rt": 4.2, "cnt": 165, "addr": "삼성로 84길 15", "hours": "10 AM–3 PM, 5–10 PM (일 휴무)", "tags": ["해장국", "야채풍부", "물회"], "moods": ["피곤함", "스트레스 받음", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥", "얼큰한 국물"], "rv": ["Real authentic Korean stew — generous portions, fast service. (실제 Google 리뷰, 4.2★)"], "lat": 37.505623, "lng": 127.0588863, "exit4": false},
  {"name": "하동관 코엑스몰", "type": "국밥·설렁탕", "cat": ["국밥", "국물", "한식"], "e": "🏛️", "rt": 4.0, "cnt": 1102, "addr": "영동대로 513 코엑스몰", "hours": "10:30 AM–7 PM", "tags": ["설렁탕", "오래된브랜드", "코엑스"], "moods": ["피곤함", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥"], "rv": ["Had lunch and dinner again — really very good and tasty. (실제 Google 리뷰, 4.0★)"], "lat": 37.5111468, "lng": 127.0596712, "exit4": false},
  {"name": "남다른감자탕 삼성역점", "type": "국밥·감자탕", "cat": ["국밥", "국물", "한식"], "e": "🫙", "rt": 4.0, "cnt": 82, "addr": "테헤란로 92길 13", "hours": "11 AM–9 PM", "tags": ["감자탕", "프랜차이즈", "깔끔"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥"], "rv": ["Gamjatang neat and delicious — trendy interior. (실제 Google 리뷰, 4.0★)"], "lat": 37.5071236, "lng": 127.0614101, "exit4": true},
  {"name": "강남이백순대국", "type": "국밥·순대국", "cat": ["국밥", "국물", "한식"], "e": "🎵", "rt": 5.0, "cnt": 2, "addr": "테헤란로 84길 26", "hours": "영업시간 미확인", "tags": ["순대국밥", "K팝음악", "국물깔끔"], "moods": ["피곤함", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥"], "rv": ["K팝 BGM 흐르는 순대국집 — 국물 깔끔하고 잘 간이 됐어요. (실제 Google 리뷰, 5.0★)"], "lat": 37.505474, "lng": 127.0589282, "exit4": false},
  {"name": "24시 본가신의주찹쌀순대", "type": "국밥·순대국", "cat": ["국밥", "국물", "한식"], "e": "🕛", "rt": 3.9, "cnt": 159, "addr": "삼성1동 162-12", "hours": "24시간 영업", "tags": ["찹쌀순대", "24시간", "야식", "새우젓"], "moods": ["피곤함", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림", "맑음"], "scene": ["심야 밥", "24시간", "야식"], "rv": ["새우젓의 자연스러운 감칠맛. The best kimchi!!!! (실제 Google 리뷰, 3.9★)"], "lat": 37.5148701, "lng": 127.0649492, "exit4": false},
  {"name": "삼성대주옥 삼성역 본점", "type": "한식·곱탕", "priceRange": "9000~15000", "cat": ["한식", "국물", "국밥"], "e": "🍲", "rt": 4.9, "cnt": 40, "addr": "테헤란로 81길 32", "hours": "10:30 AM–11:30 PM", "tags": ["한우곱탕", "보쌈"], "moods": ["스트레스 받음", "피곤함", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["따뜻한 국물", "혼자 밥"], "rv": ["한우 곱탕과 보쌈이 훌륭해요. (실제 Google 리뷰, 4.9★)"], "lat": 37.509048, "lng": 127.056609, "exit4": false},
  {"name": "우도옥 삼성동코엑스몰", "type": "한식·소고기국밥", "priceRange": "8000~12000", "cat": ["한식", "국물", "국밥"], "e": "🍛", "rt": 4.9, "cnt": 242, "addr": "봉은사로 82길 29", "hours": "11:30 AM–10:00 PM", "tags": ["한우국밥", "서울TOP3", "국물최고"], "moods": ["피곤함", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥"], "rv": ["Top 3 Korean beef stew in Seoul — A+++++! (실제 Google 리뷰, 4.9★)"], "lat": 37.5113202, "lng": 127.055531, "exit4": false},
  {"name": "낭동고집 삼성점", "type": "K-BBQ", "priceRange": "9000~15000", "cat": ["한식", "고기구이"], "e": "🔥", "rt": 4.8, "cnt": 55, "addr": "삼성로 517 1층", "hours": "11 AM–2 PM, 5–11 PM", "tags": ["K-BBQ", "삼겹살", "회식"], "moods": ["회식", "스트레스 받음", "기분 좋음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["고기 구이", "회식", "친구들이랑 고기"], "rv": ["Best Korean BBQ — 직원이 굽는 방법까지 알려줘요. (실제 Google 리뷰, 4.8★)"], "lat": 37.5081263, "lng": 127.055277, "exit4": false},
  {"name": "영동가든 한국BBQ", "type": "한식·고기구이", "priceRange": "9000~15000", "cat": ["한식", "고기구이"], "e": "🍖", "rt": 4.9, "cnt": 49, "addr": "봉은사로 112길 6", "hours": "11 AM–10 PM", "tags": ["돼지고기", "깔끔", "친절", "로컬BBQ"], "moods": ["회식", "기분 좋음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["고기 구이", "회식"], "rv": ["Cozy and friendly local BBQ — clean place. (실제 Google 리뷰, 4.9★)"], "lat": 37.514509, "lng": 127.064782, "exit4": false},
  {"name": "국보가든 삼성본점", "type": "한식·한우구이", "priceRange": "9000~15000", "cat": ["한식", "고기구이"], "e": "🐄", "rt": 4.8, "cnt": 46, "addr": "삼성로 608 우창빌딩", "hours": "11:30 AM–11 PM", "tags": ["한우구이", "프라이빗룸", "접대용", "고급BBQ"], "moods": ["축하할 일 있음", "회식", "데이트"], "wx": ["맑음", "흐림"], "scene": ["특별한 날 고기", "고급 한우"], "rv": ["고기 품질 훌륭하고 반찬도 맛있어요. 간장게장까지 제공! (실제 Google 리뷰, 4.8★)"], "lat": 37.5138721, "lng": 127.053257, "exit4": false},
  {"name": "곰바위", "type": "한식·한우곱창", "priceRange": "9000~15000", "cat": ["한식", "고기구이"], "e": "🐻", "rt": 4.1, "cnt": 1234, "addr": "영동대로 115길 10", "hours": "11 AM–10 PM", "tags": ["한우곱창", "고급BBQ", "정원"], "moods": ["축하할 일 있음", "데이트", "회식"], "wx": ["맑음", "흐림"], "scene": ["특별한 날 고기", "고급 한우곱창"], "rv": ["재료 고품질이고 분위기 완벽해요. 소장 구이가 하이라이트! (실제 Google 리뷰, 4.1★)"], "lat": 37.514848, "lng": 127.058769, "exit4": false},
  {"name": "웨어하우스 43 삼성", "type": "한식·한우구이", "cat": ["한식", "고기구이"], "e": "🏭", "rt": 4.2, "cnt": 609, "addr": "테헤란로 534 글라스타워 지하 1층", "hours": "11:30 AM–10 PM (일 휴무)", "tags": ["한우", "와인페어링", "드라이에이징"], "moods": ["데이트", "축하할 일 있음", "회식"], "wx": ["맑음", "흐림"], "scene": ["특별한 날 고기", "고급 한우"], "rv": ["고기가 입에서 녹아요. 와인 선택도 훌륭해요. (실제 Google 리뷰, 4.2★)"], "lat": 37.507996, "lng": 127.062784, "exit4": true},
  {"name": "오봉집", "type": "한식·보쌈", "priceRange": "9000~15000", "cat": ["한식"], "e": "🥢", "rt": 4.7, "cnt": 263, "addr": "테헤란로 81길 62", "hours": "11 AM–2:30 PM, 5–10 PM", "tags": ["보쌈", "낙지볶음", "가성비"], "moods": ["스트레스 받음", "피곤함", "허전함", "회식"], "wx": ["비", "흐림", "쌀쌀함", "맑음"], "scene": ["보쌈", "혼자 밥", "회식"], "rv": ["보쌈 고기 부드럽고 낙지볶음 크고 신선해요. (실제 Google 리뷰, 4.7★)"], "lat": 37.5105771, "lng": 127.055835, "exit4": false},
  {"name": "소트늠 코엑스몰", "type": "한식·솥밥", "priceRange": "9000~15000", "cat": ["한식"], "e": "🫙", "rt": 4.9, "cnt": 4809, "addr": "영동대로 513 코엑스몰", "hours": "10:30 AM–10:00 PM", "tags": ["솥밥", "전복", "스테이크솥밥", "혼밥"], "moods": ["혼밥", "피곤함", "허전함"], "wx": ["비", "눈", "쌀쌀함", "맑음", "흐림"], "scene": ["혼자 밥", "솥밥", "코엑스 식사"], "rv": ["솥밥 최고! 숭늉까지 진짜 한국 음식. (실제 Google 리뷰, 4.9★)"], "lat": 37.5133578, "lng": 127.0588175, "exit4": false},
  {"name": "모도우 삼성", "type": "한식·코스", "priceRange": "9000~15000", "cat": ["한식"], "e": "🪷", "rt": 4.6, "cnt": 153, "addr": "테헤란로 87길 35", "hours": "11:30 AM–3 PM, 5–10 PM", "tags": ["프라이빗룸", "코스요리", "고급한식"], "moods": ["데이트", "축하할 일 있음", "기분 좋음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["특별한 날", "데이트", "고급 한식"], "rv": ["프라이빗 룸에서 고급 한식 코스. (실제 Google 리뷰, 4.6★)"], "lat": 37.5099923, "lng": 127.0580737, "exit4": false},
  {"name": "뻘밭 피꽃", "type": "해산물·꼬막", "priceRange": "9000~15000", "cat": ["한식"], "e": "🦪", "rt": 4.5, "cnt": 83, "addr": "테헤란로 87길 21 지하 1층", "hours": "10 AM–10 PM (토일 휴무)", "tags": ["꼬막비빔밥", "해산물", "가성비"], "moods": ["혼밥", "피곤함", "허전함"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["혼자 밥", "가성비 식사", "해산물"], "rv": ["꼬막 비빔밥 강추 — 5년 넘게 단골인 가성비 맛집. (실제 Google 리뷰, 4.5★)"], "lat": 37.5090167, "lng": 127.0582363, "exit4": false},
  {"name": "남해안집 삼성점", "type": "해산물·이자카야", "priceRange": "25000~40000", "cat": ["한식", "이자카야", "야장"], "e": "🌊", "rt": 4.8, "cnt": 6, "addr": "테헤란로 83길 14", "hours": "AM 11–AM 1 (토일 휴무)", "tags": ["신선해산물", "금태구이", "이자카야"], "moods": ["기분 좋음", "회식", "데이트"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["야장에 맥주", "해산물 안주", "술 한잔"], "rv": ["삼성역 근처에 이런 곳이! 성게, 금태구이, 콘노와타까지. 이자카야 분위기 최고. (실제 Google 리뷰, 4.8★)"], "lat": 37.5084716, "lng": 127.0578396, "exit4": false},
  {"name": "도명골 청국장", "type": "한식·청국장", "priceRange": "9000~15000", "cat": ["한식", "국물"], "e": "🫗", "rt": 4.5, "cnt": 156, "addr": "삼성1동 166-3", "hours": "11 AM–9:30 PM (일 휴무)", "tags": ["청국장", "된장찌개", "오피스맛집"], "moods": ["피곤함", "혼밥", "허전함"], "wx": ["비", "흐림", "쌀쌀함"], "scene": ["혼자 밥", "가성비 식사", "된장찌개"], "rv": ["최고 품질 청국장 식당 — 직장인들의 숨겨진 단골. (실제 Google 리뷰, 4.5★)"], "lat": 37.512631, "lng": 127.065384, "exit4": false},
  {"name": "일상정원 코엑스점", "type": "일식·전골", "cat": ["일식", "국물"], "e": "🫕", "rt": 4.8, "cnt": 694, "addr": "봉은사로 524 오크우드호텔 코엑스별관", "hours": "11 AM–9:30 PM", "tags": ["스키야키", "모츠나베", "전골"], "moods": ["데이트", "기분 좋음", "피곤함"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["데이트", "따뜻한 전골", "비 오는 날"], "rv": ["비 오는 날 모츠나베가 완벽했어요. (실제 Google 리뷰, 4.8★)"], "lat": 37.512814, "lng": 127.0571753, "exit4": false},
  {"name": "멘쇼쿠 코엑스점", "type": "일식·라멘", "priceRange": "12000~18000", "cat": ["일식", "국물"], "e": "🍜", "rt": 4.9, "cnt": 2553, "addr": "테헤란로 87길 36 도심공항타워", "hours": "11 AM–9 PM", "tags": ["라멘", "흑마늘오일", "혼밥"], "moods": ["혼밥", "피곤함", "허전함"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["혼자 밥", "라멘", "따뜻한 국물"], "rv": ["Black garlic oil ramen was fantastic — rich and unique! (실제 Google 리뷰, 4.9★)"], "lat": 37.5103325, "lng": 127.058494, "exit4": false},
  {"name": "해화장", "type": "횟집·해산물", "priceRange": "25000~40000", "cat": ["일식", "이자카야"], "e": "🐟", "rt": 4.9, "cnt": 47, "addr": "테헤란로 81길 47 1층", "hours": "PM 5–AM 12 (일 휴무)", "tags": ["신선회", "어선인테리어", "코르키지"], "moods": ["데이트", "축하할 일 있음", "회식"], "wx": ["비", "흐림", "쌀쌀함", "맑음"], "scene": ["데이트", "특별한 날", "신선한 회"], "rv": ["진짜 어선 인테리어! 신선한 제철 회 — 코르키지 가능. (실제 Google 리뷰, 4.9★)"], "lat": 37.5101856, "lng": 127.0556188, "exit4": false},
  {"name": "동어동락 삼성2호점", "type": "해산물·이자카야", "cat": ["일식", "이자카야", "야장"], "e": "🦑", "rt": 4.8, "cnt": 95, "addr": "삼성로 92길 27 1층", "hours": "PM 4–AM 2", "tags": ["신선회", "해산물", "이자카야"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림", "쌀쌀함", "비"], "scene": ["야장에 맥주", "회 안주", "이자카야"], "rv": ["최고의 회! 서비스도 훌륭해요. (실제 Google 리뷰, 4.8★)"], "lat": 37.5083513, "lng": 127.0584737, "exit4": false},
  {"name": "카포 아키 삼성", "type": "일식·오마카세", "cat": ["일식"], "e": "🍣", "rt": 4.5, "cnt": 122, "addr": "테헤란로 610 B2", "hours": "PM 5:30–AM 12:30 (일 휴무)", "tags": ["오마카세", "스시", "특별한날"], "moods": ["데이트", "축하할 일 있음", "기분 좋음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["특별한 날", "데이트", "오마카세"], "rv": ["스시가 예술 수준. (실제 Google 리뷰, 4.5★)", "Nigiri melted like butter — chef skills impeccable. (실제 Google 리뷰)"], "lat": 37.5088502, "lng": 127.0645371, "exit4": false},
  {"name": "부타이 일막", "type": "일식·돈카츠", "cat": ["일식"], "e": "🍱", "rt": 4.3, "cnt": 697, "addr": "테헤란로 88길 22", "hours": "11:15 AM–3 PM, 5–8:30 PM (일 휴무)", "tags": ["돈카츠", "두꺼운로스", "히말라야소금"], "moods": ["혼밥", "피곤함", "허전함"], "wx": ["맑음", "흐림"], "scene": ["혼자 밥", "점심", "돈카츠"], "rv": ["서울 두 번째로 맛있는 돈카츠. (실제 Google 리뷰, 4.3★)"], "lat": 37.506185, "lng": 127.0600424, "exit4": false},
  {"name": "야키토리 수다", "type": "이자카야·야키토리", "priceRange": "25000~40000", "cat": ["이자카야", "일식", "야장"], "e": "🍢", "rt": 4.7, "cnt": 50, "addr": "테헤란로 87길 53", "hours": "PM 4–AM 2 (금토 AM 3)", "tags": ["야키토리", "하이볼", "이자카야"], "moods": ["회식", "기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림", "쌀쌀함", "비"], "scene": ["야장에 맥주", "이자카야", "야키토리에 하이볼"], "rv": ["야키토리+어묵탕 세트 최고 가성비! (실제 Google 리뷰, 4.7★)"], "lat": 37.5113152, "lng": 127.0572031, "exit4": false},
  {"name": "란주쿠 삼성점", "type": "이자카야", "cat": ["이자카야", "일식", "야장"], "e": "🍾", "rt": 4.0, "cnt": 206, "addr": "봉은사로 82길 31", "hours": "PM 5:30–PM 11:50", "tags": ["이자카야", "사케소믈리에", "코르키지없음"], "moods": ["데이트", "축하할 일 있음", "회식"], "wx": ["맑음", "흐림"], "scene": ["야장에 맥주", "이자카야", "사케"], "rv": ["사케 소믈리에 있는 이자카야. 코르키지 없음. (실제 Google 리뷰, 4.0★)"], "lat": 37.5111479, "lng": 127.0555628, "exit4": false},
  {"name": "무탄 코엑스", "type": "중식·퓨전", "priceRange": "10000~18000", "cat": ["중식"], "e": "🥡", "rt": 4.9, "cnt": 7605, "addr": "영동대로 513 코엑스몰 B1", "hours": "11 AM–9:30 PM", "tags": ["자장면", "짬뽕", "어향동고", "코엑스핫플"], "moods": ["기분 좋음", "회식", "데이트", "혼밥"], "wx": ["맑음", "흐림", "비"], "scene": ["코엑스 식사", "중식", "회식"], "rv": ["코엑스 최고 중식당. 어향동고가 압권! (실제 Google 리뷰, 4.9★)", "Dongpo pork melts in your mouth — truly exceptional. (실제 Google 리뷰)"], "lat": 37.5113197, "lng": 127.0583612, "exit4": false},
  {"name": "일일향 삼성점", "type": "중식", "priceRange": "10000~18000", "cat": ["중식"], "e": "🥟", "rt": 4.2, "cnt": 335, "addr": "테헤란로 83길 20", "hours": "11:30 AM–9:30 PM", "tags": ["짬뽕", "짜장면", "가성비"], "moods": ["혼밥", "피곤함", "스트레스 받음"], "wx": ["맑음", "흐림", "비"], "scene": ["혼자 밥", "가성비 중식", "짬뽕"], "rv": ["짬뽕이 맛있어서 모든 테이블에서 주문. (실제 Google 리뷰, 4.2★)"], "lat": 37.5087186, "lng": 127.0575117, "exit4": false},
  {"name": "사천하우스 삼성점", "type": "중식·마라", "priceRange": "10000~18000", "cat": ["중식"], "e": "🌶️", "rt": 4.0, "cnt": 752, "addr": "테헤란로 87길 29", "hours": "11:30 AM–9 PM", "tags": ["마라탕", "사천요리", "매운맛"], "moods": ["스트레스 받음", "회식", "기분 좋음"], "wx": ["맑음", "흐림", "비"], "scene": ["매운 음식", "마라", "스트레스 해소"], "rv": ["마라 플레이버가 정말 맛있어요. (실제 Google 리뷰, 4.0★)"], "lat": 37.5096878, "lng": 127.0582138, "exit4": false},
  {"name": "연화산", "type": "중식·해물짬뽕", "priceRange": "10000~18000", "cat": ["중식"], "e": "🐙", "rt": 4.1, "cnt": 330, "addr": "테헤란로 92길 11", "hours": "11 AM–9:30 PM (일 휴무)", "tags": ["짬뽕", "해물가득", "해장"], "moods": ["피곤함", "스트레스 받음", "허전함"], "wx": ["비", "흐림", "쌀쌀함"], "scene": ["해장", "짬뽕", "가성비 식사"], "rv": ["해산물 짬뽕 압권. 낙지가 통째로! (실제 Google 리뷰, 4.1★)"], "lat": 37.5072584, "lng": 127.061354, "exit4": true},
  {"name": "천미미 삼성점", "type": "중식·요리", "priceRange": "10000~18000", "cat": ["중식"], "e": "🦐", "rt": 4.7, "cnt": 71, "addr": "삼성로 534", "hours": "11 AM–3 PM, 5–9:30 PM", "tags": ["어향동고", "탕수육", "가족모임"], "moods": ["회식", "축하할 일 있음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["회식", "특별한 날 중식"], "rv": ["낙지 짜장면이 진짜 별미! (실제 Google 리뷰, 4.7★)"], "lat": 37.5097337, "lng": 127.0556436, "exit4": false},
  {"name": "솔트랑 스테이크 삼성", "type": "스테이크하우스", "priceRange": "35000~70000", "cat": ["스테이크"], "e": "🥩", "rt": 5.0, "cnt": 180, "addr": "테헤란로 610 지하 1층", "hours": "11:30 AM–9:30 PM", "tags": ["스테이크", "소금스테이크", "특별한날"], "moods": ["기분 좋음", "축하할 일 있음", "데이트"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["특별한 날", "데이트 스테이크", "기념일"], "rv": ["Steak incredibly tender and juicy — Signature Salt Steak was a new experience. (실제 Google 리뷰, 5.0★)", "T-bone cooked to perfection — fantastic evening. (실제 Google 리뷰)"], "lat": 37.5088502, "lng": 127.0645371, "exit4": false},
  {"name": "부처스컷 삼성", "type": "스테이크하우스", "cat": ["스테이크", "양식"], "e": "🔪", "rt": 4.1, "cnt": 563, "addr": "테헤란로 87길 삼성동", "hours": "11:30 AM–3 PM, 5–10 PM", "tags": ["스테이크", "안심", "랍스터"], "moods": ["데이트", "축하할 일 있음", "회식"], "wx": ["맑음", "흐림"], "scene": ["특별한 날", "스테이크 데이트"], "rv": ["Refined steakhouse — fillet mignon cooked to perfection. (실제 Google 리뷰, 4.1★)"], "lat": 37.508668, "lng": 127.0583335, "exit4": false},
  {"name": "아웃백 스테이크하우스 코엑스", "type": "스테이크하우스", "cat": ["스테이크", "양식"], "e": "🍴", "rt": 4.2, "cnt": 1001, "addr": "영동대로 513 스타필드코엑스 1층", "hours": "11 AM–9 PM", "tags": ["스테이크", "패밀리", "코엑스"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["스테이크", "코엑스 식사", "패밀리"], "rv": ["Service attentive and good. Ambience nicer than expected. (실제 Google 리뷰, 4.2★)"], "lat": 37.5112399, "lng": 127.0590004, "exit4": false},
  {"name": "마노 디 셰프 삼성", "type": "이탈리안", "cat": ["양식"], "e": "🍝", "rt": 4.3, "cnt": 906, "addr": "테헤란로 87길 21", "hours": "11 AM–3 PM, 5–9:30 PM", "tags": ["파스타", "피자", "뇨키", "무료발렛"], "moods": ["데이트", "기분 좋음", "회식"], "wx": ["맑음", "흐림"], "scene": ["데이트", "파스타", "이탈리안 식사"], "rv": ["Gnocchi impressive! Pasta really creamy and rich. (실제 Google 리뷰, 4.3★)"], "lat": 37.5090435, "lng": 127.0583118, "exit4": false},
  {"name": "글로브 비스트로 파르나스몰", "type": "이탈리안", "cat": ["양식"], "e": "🍷", "rt": 4.1, "cnt": 388, "addr": "파르나스타워 B1 파르나스몰", "hours": "7:30 AM–10 PM (주말 10 AM~)", "tags": ["이탈리안", "칵테일", "라자냐"], "moods": ["데이트", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["데이트", "분위기 있는 식사"], "rv": ["Surprisingly photogenic — warm yellow lights. Lamb with green jelly delicious. (실제 Google 리뷰, 4.1★)"], "lat": 37.5092083, "lng": 127.0615349, "exit4": true},
  {"name": "THE PLACE Italian Urban Bistro", "type": "이탈리안", "cat": ["양식"], "e": "🫕", "rt": 4.1, "cnt": 937, "addr": "영동대로 513 코엑스몰 J102호", "hours": "10 AM–10 PM", "tags": ["파스타", "피자", "라자냐", "코엑스"], "moods": ["데이트", "기분 좋음", "회식"], "wx": ["맑음", "흐림"], "scene": ["코엑스 식사", "이탈리안", "데이트"], "rv": ["Pasta perfectly cooked — great spot to relax after shopping. (실제 Google 리뷰, 4.1★)"], "lat": 37.5115619, "lng": 127.060183, "exit4": false},
  {"name": "매드포갈릭 봉은사아이파크", "type": "이탈리안", "cat": ["양식"], "e": "🧄", "rt": 4.3, "cnt": 412, "addr": "영동대로 520 지하 1층", "hours": "11 AM–9 PM", "tags": ["갈릭스테이크", "갈릭피자", "파스타"], "moods": ["데이트", "회식", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["데이트", "마늘 요리"], "rv": ["Garlic snow pizza 4.5 stars — garlic lovers paradise! (실제 Google 리뷰, 4.3★)"], "lat": 37.5138071, "lng": 127.0609973, "exit4": false},
  {"name": "소이연남 코엑스점", "type": "태국음식", "cat": ["양식"], "e": "🌿", "rt": 4.9, "cnt": 413, "addr": "삼성동 도심공항타워 지하", "hours": "11 AM–4 PM, 5–9 PM", "tags": ["팟타이", "태국요리", "이국적"], "moods": ["기분 좋음", "데이트", "피곤함"], "wx": ["비", "흐림", "쌀쌀함"], "scene": ["이국적인 식사", "태국 음식", "데이트"], "rv": ["Best Thai food in COEX. (실제 Google 리뷰, 4.9★)"], "lat": 37.510311, "lng": 127.0585076, "exit4": false},
  {"name": "American Table", "type": "브런치·양식", "cat": ["양식"], "e": "🥞", "rt": 4.3, "cnt": 141, "addr": "삼성1동 110-1", "hours": "8 AM–10 PM (주말 11 AM~)", "tags": ["브런치", "아침가능", "카페"], "moods": ["기분 좋음", "데이트", "혼밥"], "wx": ["맑음", "흐림"], "scene": ["브런치", "아침 식사", "가벼운 식사"], "rv": ["Nice brunch spot — tasty international dishes. Cozy vibe. (실제 Google 리뷰, 4.3★)"], "lat": 37.5157828, "lng": 127.0657303, "exit4": false},
  {"name": "크라이 치즈버거 삼성역점", "type": "버거", "priceRange": "12000~18000", "cat": ["버거"], "e": "🍔", "rt": 4.5, "cnt": 3002, "addr": "테헤란로 616 대치동", "hours": "10:30 AM–9 PM", "tags": ["스매시버거", "인앤아웃스타일", "가성비"], "moods": ["혼밥", "피곤함", "허전함"], "wx": ["맑음", "흐림"], "scene": ["혼자 밥", "빠른 식사", "가성비 버거"], "rv": ["Best smash burger in Korea — super fresh ingredients! (실제 Google 리뷰, 4.5★)"], "lat": 37.509051, "lng": 127.0652863, "exit4": false},
  {"name": "브루클린 더 버거조인트 삼성", "type": "버거", "cat": ["버거"], "e": "🍟", "rt": 4.3, "cnt": 1167, "addr": "봉은사로 84길 10", "hours": "11 AM–9:30 PM", "tags": ["두꺼운버거", "칠리프라이", "고구마튀김"], "moods": ["회식", "혼밥", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["버거", "혼자 밥"], "rv": ["최고의 버거!! 재료 신선하고 고기 뜨거울 때 나와요. (실제 Google 리뷰, 4.3★)"], "lat": 37.512581, "lng": 127.0555616, "exit4": false},
  {"name": "더 피자 스탠드", "type": "피자·스포츠바", "priceRange": "18000~30000", "cat": ["양식", "버거", "야장"], "e": "🍺", "rt": 4.8, "cnt": 774, "addr": "삼성로 81길 39 1층", "hours": "11:30 AM–3 PM, 5 PM–자정", "tags": ["피자", "생맥주", "스포츠바", "야장"], "moods": ["회식", "기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림", "덥고 습함"], "scene": ["야장에 맥주", "스포츠바", "피자에 맥주"], "rv": ["Local favorite sports bar — Honey pizza is out of this world! (실제 Google 리뷰, 4.8★)"], "lat": 37.50363, "lng": 127.0544539, "exit4": false},
  {"name": "고든 램지 스트리트 버거", "type": "버거", "cat": ["버거"], "e": "👨‍🍳", "rt": 4.0, "cnt": 249, "addr": "테헤란로 517 현대백화점 무역센터", "hours": "10:30 AM–8 PM", "tags": ["고든램지", "나초", "캐주얼버거"], "moods": ["혼밥", "피곤함", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["버거", "가벼운 식사"], "rv": ["Nachos incredibly crispy and cheesy. (실제 Google 리뷰, 4.0★)"], "lat": 37.5085949, "lng": 127.0597186, "exit4": true},
  {"name": "캘리포니아 피자 키친 코엑스", "type": "피자", "priceRange": "18000~30000", "cat": ["양식", "버거"], "e": "🍕", "rt": 4.3, "cnt": 1043, "addr": "영동대로 513 코엑스몰", "hours": "11 AM–10 PM", "tags": ["피자", "가족식사", "코엑스"], "moods": ["기분 좋음", "회식", "데이트"], "wx": ["맑음", "흐림"], "scene": ["피자", "코엑스 식사", "패밀리"], "rv": ["Original California Club pizza fresh and delicious. (실제 Google 리뷰, 4.3★)"], "lat": 37.5107539, "lng": 127.0599324, "exit4": false},
  {"name": "둘둘치킨 삼성역점", "type": "치킨·호프", "priceRange": "18000~28000", "cat": ["치킨", "야장"], "e": "🐓", "rt": 3.7, "cnt": 138, "addr": "테헤란로 69길 9 디엠피빌딩", "hours": "PM 1–AM 8 (매일)", "tags": ["둘둘치킨", "치맥", "야장", "심야"], "moods": ["기분 좋음", "스트레스 받음", "회식"], "wx": ["맑음", "흐림", "덥고 습함"], "scene": ["야장에 맥주", "치맥", "퇴근 후 치킨"], "rv": ["Good place for 치맥. Standard local fried chicken/beer joint. (실제 Google 리뷰, 3.7★)", "Nice place to have a pub after work. Food very nice, environment slightly noisy. (실제 Google 리뷰)"], "lat": 37.506488, "lng": 127.0522973, "exit4": false},
  {"name": "둘둘치킨 삼성2호점", "type": "치킨·호프", "cat": ["치킨", "야장"], "e": "🐔", "rt": 3.7, "cnt": 78, "addr": "영동대로 85길 6", "hours": "오후 영업 (매일)", "tags": ["둘둘치킨", "치맥", "야장", "4번출구"], "moods": ["기분 좋음", "스트레스 받음", "회식"], "wx": ["맑음", "흐림", "덥고 습함"], "scene": ["야장에 맥주", "치맥", "퇴근 후 치킨"], "rv": ["Near the subway station. Food very nice but environment slightly crowded and noisy. (실제 Google 리뷰, 3.7★)", "Great mood good service. Chicken really tasty. (실제 Google 리뷰)"], "lat": 37.5073769, "lng": 127.0629351, "exit4": true},
  {"name": "B&D 치킨닭갈비", "type": "치킨·닭갈비", "priceRange": "18000~28000", "cat": ["치킨", "한식"], "e": "🍗", "rt": 4.0, "cnt": 152, "addr": "삼성동 152-59", "hours": "AM 11–PM 10 (매일)", "tags": ["닭갈비", "치킨", "삼성역도보"], "moods": ["기분 좋음", "회식", "혼밥"], "wx": ["맑음", "흐림"], "scene": ["닭갈비", "치킨", "혼자 밥"], "rv": ["Good dakgalbi. Not oily at all. Good service too. (실제 Google 리뷰, 4.0★)", "Chicken stir-fry cooked on hot plate — orange aprons provided to protect. (실제 Google 리뷰)"], "lat": 37.510675, "lng": 127.0563548, "exit4": false},
  {"name": "최고야 닭갈비", "type": "치킨·닭갈비", "cat": ["치킨", "한식"], "e": "🔥", "rt": 3.6, "cnt": 143, "addr": "삼성로 100길 23-2", "hours": "AM 11–PM 11 (토 ~PM 10)", "tags": ["닭갈비", "볶음밥", "삼성역도보"], "moods": ["기분 좋음", "회식", "혼밥"], "wx": ["맑음", "흐림"], "scene": ["닭갈비", "혼자 밥"], "rv": ["Came from Okinawa — food was amazing here! (실제 Google 리뷰, 3.6★)", "Good place for lunch — waited 15min but food ready when seated. (실제 Google 리뷰)"], "lat": 37.5101363, "lng": 127.0573954, "exit4": false},
  {"name": "숯칼 숯불닭구이칼국수", "type": "치킨·닭구이", "priceRange": "18000~28000", "cat": ["치킨", "한식", "국물"], "e": "🍜", "rt": 4.4, "cnt": 86, "addr": "삼성로 91길 38", "hours": "AM 11–PM 10:30 (주말 ~PM 10)", "tags": ["숯불닭구이", "칼국수", "가성비", "혼밥"], "moods": ["혼밥", "피곤함", "기분 좋음"], "wx": ["맑음", "흐림", "비", "쌀쌀함"], "scene": ["혼자 밥", "닭구이에 칼국수", "가성비 식사"], "rv": ["Charcoal grilled chicken + kalguksu set absolutely delicious — cleared the bowl twice! (실제 Google 리뷰, 4.4★)", "Great local restaurant with excellent value — frequented by office workers after work. (실제 Google 리뷰)"], "lat": 37.5065283, "lng": 127.0531322, "exit4": false},
  {"name": "치킨잇수다 삼성점", "type": "치킨·이자카야", "cat": ["치킨", "야장"], "e": "🍻", "rt": 3.7, "cnt": 56, "addr": "테헤란로 87길", "hours": "PM 5–AM 2 (매일)", "tags": ["치킨", "골뱅이", "이자카야", "생맥주"], "moods": ["기분 좋음", "스트레스 받음", "회식"], "wx": ["맑음", "흐림", "덥고 습함"], "scene": ["야장에 맥주", "치킨에 맥주", "퇴근 후 한잔"], "rv": ["Came from Greece — Best chicken, soju-beer I had in Korea. (실제 Google 리뷰, 3.7★)"], "lat": 37.5105473, "lng": 127.0575486, "exit4": false},
  {"name": "BBQ치킨 삼성역점", "type": "치킨·프랜차이즈", "cat": ["치킨", "야장"], "e": "🍟", "rt": 4.0, "cnt": 4, "addr": "삼성로 103길 12", "hours": "영업시간 미확인", "tags": ["BBQ황금올리브", "치맥"], "moods": ["기분 좋음", "혼밥", "회식"], "wx": ["맑음", "흐림"], "scene": ["치맥", "야장에 맥주"], "rv": ["Great Chicken — staff very nice and accommodating. (실제 Google 리뷰, 4.0★)"], "lat": 37.5103886, "lng": 127.053406, "exit4": false},
  {"name": "꼬끼오치킨호프", "type": "치킨·호프", "cat": ["치킨", "야장"], "e": "🐧", "rt": 3.9, "cnt": 248, "addr": "역삼동 827-1", "hours": "PM 4–AM 2 (토 PM 5~AM 1, 일 PM 5~자정)", "tags": ["치킨", "생맥주", "오래된집", "1985년개업"], "moods": ["기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림"], "scene": ["야장에 맥주", "치킨", "로컬 동네술집"], "rv": ["Since 1985 — fried chicken has hint of curry flavor, thick batter crispy and delicious! (실제 Google 리뷰, 3.9★)", "Best fried chicken I've ever eaten — the basics done right. (실제 Google 리뷰)"], "lat": 37.496794, "lng": 127.0303, "exit4": false},
  {"name": "쉐이크쉑 코엑스", "type": "버거·밀크쉐이크", "priceRange": "12000~18000", "cat": ["버거"], "e": "🍔", "rt": 4.2, "cnt": 464, "addr": "영동대로 513 코엑스몰", "hours": "AM 10:30–PM 10 (매일)", "tags": ["쉐이크쉑", "밀크쉐이크", "스매시버거", "코엑스"], "moods": ["기분 좋음", "데이트", "혼밥"], "wx": ["맑음", "흐림"], "scene": ["버거", "코엑스 식사", "데이트"], "rv": ["Burgers and fries small but absolutely delicious. Shakes are the true star! (실제 Google 리뷰, 4.2★)", "Very clean and spacious — right next to cinema and pop mart. (실제 Google 리뷰)"], "lat": 37.5126683, "lng": 127.058709, "exit4": false},
  {"name": "파이어벨 코엑스점", "type": "버거·수제버거", "priceRange": "12000~18000", "cat": ["버거"], "e": "🔔", "rt": 4.4, "cnt": 26, "addr": "테헤란로 87길 46 오크우드 B2", "hours": "영업시간 미확인", "tags": ["수제버거", "트러플버거", "코엑스"], "moods": ["데이트", "기분 좋음", "혼밥"], "wx": ["맑음", "흐림"], "scene": ["버거", "데이트", "수제버거"], "rv": ["Doctor Leo burger packed with ingredients — truffle mayo sauce incredible. (실제 Google 리뷰, 4.4★)", "Legitimate American chili burger and fries. Highly recommend. (실제 Google 리뷰)"], "lat": 37.5124377, "lng": 127.0573563, "exit4": false},
  {"name": "요로트릭 버거", "type": "버거·수제버거", "cat": ["버거"], "e": "🌮", "rt": 4.4, "cnt": 31, "addr": "대치동 943-9", "hours": "AM 11–PM 7:45 (토일 휴무)", "tags": ["수제버거", "칠리치즈프라이", "직장인맛집"], "moods": ["혼밥", "피곤함", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["버거", "혼자 밥", "점심"], "rv": ["Top 3 burgers I've ever had — chili cheese fries large enough for two! (실제 Google 리뷰, 4.4★)", "Burgers delicious — buns fluffy, patties juicy. (실제 Google 리뷰)"], "lat": 37.5066528, "lng": 127.0589639, "exit4": false},
  {"name": "트레인버거 삼성역", "type": "버거·수제버거·맥주", "priceRange": "12000~18000", "cat": ["버거", "야장"], "e": "🚂", "rt": 5.0, "cnt": 4, "addr": "영동대로 85길 38", "hours": "AM 10–PM 9 (일 영업)", "tags": ["수제버거", "맥주", "야장", "삼성역"], "moods": ["기분 좋음", "혼밥"], "wx": ["맑음", "흐림"], "scene": ["버거에 맥주", "야장", "혼자 밥"], "rv": ["Wanted a burger and beer — only place nearby that serves both! Handmade, delicious, portions generous. (실제 Google 리뷰, 5.0★)", "New restaurant near Samseong Station — clean, nice design, reasonable price. (실제 Google 리뷰)"], "lat": 37.5066045, "lng": 127.0605641, "exit4": false},
  {"name": "바스버거 삼성역점", "type": "버거·수제버거", "cat": ["버거"], "e": "🧀", "rt": 4.1, "cnt": 11, "addr": "테헤란로 114길 16", "hours": "영업시간 미확인", "tags": ["수제버거", "치킨버거", "감자칩무료"], "moods": ["혼밥", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["버거", "혼자 밥", "빠른 식사"], "rv": ["Top-tier franchise — chicken burger rivals famous joints. Self-serve potato chips a welcome addition. (실제 Google 리뷰, 4.1★)"], "lat": 37.5086085, "lng": 127.066559, "exit4": false},
  {"name": "맥도날드 삼성역점", "type": "버거·패스트푸드", "priceRange": "12000~18000", "cat": ["버거"], "e": "🍟", "rt": 3.9, "cnt": 975, "addr": "삼성로 92길 29", "hours": "AM 7–AM 12 (매일)", "tags": ["맥도날드", "불고기버거", "빠른식사"], "moods": ["혼밥", "피곤함"], "wx": ["맑음", "흐림", "비"], "scene": ["빠른 식사", "혼자 밥", "버거"], "rv": ["Korean McDonald's just built different — food actually looks like the pictures, tastes fresher. (실제 Google 리뷰, 3.9★)"], "lat": 37.5082947, "lng": 127.0587727, "exit4": false},
  {"name": "맥도날드 코엑스점", "type": "버거·패스트푸드", "cat": ["버거"], "e": "🍔", "rt": 4.0, "cnt": 2082, "addr": "영동대로 513 코엑스", "hours": "AM 6–AM 12 (매일)", "tags": ["맥도날드", "불고기버거", "코엑스"], "moods": ["혼밥", "피곤함"], "wx": ["맑음", "흐림", "비"], "scene": ["빠른 식사", "코엑스 식사", "버거"], "rv": ["McD's in Korea is just nicer — bulgogi cheeseburger delicious, service excellent. (실제 Google 리뷰, 4.0★)"], "lat": 37.5092914, "lng": 127.062139, "exit4": true},
  {"name": "롯데리아 선릉점", "type": "버거·패스트푸드", "cat": ["버거"], "e": "🌶️", "rt": 3.8, "cnt": 403, "addr": "테헤란로 423", "hours": "AM 7–PM 10 (토일 ~PM 8)", "tags": ["롯데리아", "스파이시치킨버거", "가성비"], "moods": ["혼밥", "피곤함"], "wx": ["맑음", "흐림"], "scene": ["빠른 식사", "혼자 밥", "가성비 버거"], "rv": ["Lotteria's spicy chicken burger — like Chik-fil-a spicy chicken but half the price. (실제 Google 리뷰, 3.8★)"], "lat": 37.5061651, "lng": 127.0529875, "exit4": false},
  {"name": "더차이홍", "type": "중식·짜장짬뽕", "priceRange": "10000~18000", "cat": ["중식"], "e": "🥟", "rt": 4.1, "cnt": 144, "addr": "삼성역 근처", "hours": "AM 10–PM 9:30 (토 ~PM 8:30, 일 휴무)", "tags": ["짜장면", "짬뽕", "간짜장", "가성비"], "moods": ["혼밥", "피곤함", "스트레스 받음"], "wx": ["비", "흐림", "쌀쌀함"], "scene": ["혼자 밥", "가성비 중식", "짬뽕"], "rv": ["Jjajangmyeon delicious, chicken with garlic sauce amazing. Owners very friendly and inexpensive. 10/10 (실제 Google 리뷰, 4.1★)", "Dishes generally tasty — fully enough to enjoy Korean Chinese food at reasonable prices. (실제 Google 리뷰)"], "lat": 37.5081948, "lng": 127.0582195, "exit4": false},
  {"name": "딤딤섬 파르나스타워", "type": "중식·딤섬", "priceRange": "10000~18000", "cat": ["중식"], "e": "🫕", "rt": 4.3, "cnt": 321, "addr": "테헤란로 521 파르나스타워", "hours": "AM 10:30–PM 9:20 (매일)", "tags": ["딤섬", "홍콩식", "BBQ오리", "코엑스"], "moods": ["데이트", "기분 좋음", "회식"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["데이트", "딤섬", "특별한 중식"], "rv": ["Dim sum consistently excellent — flavors and quality surpass more showy establishments. (실제 Google 리뷰, 4.3★)", "BBQ duck noodles amazing — a cherished bi-weekly ritual. (실제 Google 리뷰)"], "lat": 37.5085865, "lng": 127.0604196, "exit4": true},
  {"name": "왕푸징마라탕 코엑스", "type": "중식·마라탕", "priceRange": "10000~18000", "cat": ["중식"], "e": "🌶️", "rt": 3.8, "cnt": 24, "addr": "삼성동 159-7 현대백화점", "hours": "AM 11–PM 9 (매일)", "tags": ["마라탕", "마라샹궈", "무게주문", "코엑스"], "moods": ["스트레스 받음", "회식", "기분 좋음"], "wx": ["맑음", "흐림", "비"], "scene": ["매운 음식", "마라", "스트레스 해소"], "rv": ["First malatang ever — like milky jjamppong, pick your own veggies and noodles. So good! (실제 Google 리뷰, 3.8★)", "Mala xiang guo is the way to go — spicy stir-fry better than the soup. (실제 Google 리뷰)"], "lat": 37.5086154, "lng": 127.0597808, "exit4": true},
  {"name": "서래향 삼성점", "type": "중식·고급중화", "priceRange": "10000~18000", "cat": ["중식"], "e": "🦐", "rt": 3.9, "cnt": 234, "addr": "영동대로 86길 28", "hours": "AM 11–PM 9:30 (매일)", "tags": ["탕수육", "짬뽕", "프라이빗룸", "고급중식"], "moods": ["회식", "데이트", "축하할 일 있음"], "wx": ["맑음", "흐림"], "scene": ["고급 중식", "회식", "특별한 날"], "rv": ["Tangsuyuk really delicious — batter thin and sirloin thick and soft. Cold jjambbong with cod refreshing. (실제 Google 리뷰, 3.9★)", "Variety of rare dishes at great price — shark fin soup and crab fried rice with XO sauce. (실제 Google 리뷰)"], "lat": 37.5082339, "lng": 127.0664776, "exit4": false},
  {"name": "호성각", "type": "중식·짜장짬뽕", "cat": ["중식"], "e": "🫙", "rt": 3.9, "cnt": 199, "addr": "테헤란로 81길 16", "hours": "AM 11–PM 9:30 (일 휴무)", "tags": ["짜장면", "짬뽕", "깐풍기", "가성비"], "moods": ["혼밥", "피곤함", "스트레스 받음"], "wx": ["비", "흐림", "쌀쌀함"], "scene": ["혼자 밥", "가성비 중식", "짬뽕"], "rv": ["Partner craving Jjajangmyeon — worth the walk from COEX. Owners served extra jjambbong mid-meal — so good! (실제 Google 리뷰, 3.9★)", "Jjambbong, gochujang jjajang, kkanpunggi all very tasty. (실제 Google 리뷰)"], "lat": 37.5081672, "lng": 127.057125, "exit4": false},
  {"name": "차이린 삼성점", "type": "중식·고급중화", "cat": ["중식"], "e": "🍱", "rt": 4.1, "cnt": 568, "addr": "삼성동 71-24", "hours": "AM 11:30–PM 9:30 (매일)", "tags": ["짬뽕", "탕수육", "고급중식"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["회식", "고급 중식"], "rv": ["Found by chance — great food, portions big enough for doggy bag! Owner friendly and helpful. (실제 Google 리뷰, 4.1★)"], "lat": 37.5145703, "lng": 127.0532692, "exit4": false},
  {"name": "마라차이즈", "type": "중식·마라탕", "cat": ["중식"], "e": "🥡", "rt": 4.3, "cnt": 111, "addr": "테헤란로 64길 17", "hours": "AM 11–PM 9 (토 ~PM 6, 일 휴무)", "tags": ["마라탕", "가성비", "커스텀", "혼밥"], "moods": ["혼밥", "피곤함", "스트레스 받음"], "wx": ["비", "흐림", "쌀쌀함", "맑음"], "scene": ["혼자 밥", "마라", "매운 음식"], "rv": ["My favorite lunch place in Gangnam — very quick, choose your own ingredients and spicy level. (실제 Google 리뷰, 4.3★)", "Ingredients fresh — hearty meal for 7,000-8,000 won per person. (실제 Google 리뷰)"], "lat": 37.5041432, "lng": 127.0513605, "exit4": false},
  {"name": "담소소사골순대국 삼성1호점", "type": "한식·순대국·담소", "priceRange": "8000~12000", "cat": ["국밥", "국물", "한식"], "e": "🫗", "rt": 3.8, "cnt": 104, "addr": "대치동 956-4 드림빌딩", "hours": "AM 8:30–PM 11 (토일 ~PM 10)", "tags": ["순대국", "소사골", "해장", "담소"], "moods": ["피곤함", "스트레스 받음", "허전함", "혼밥"], "wx": ["비", "눈", "쌀쌀함", "흐림"], "scene": ["해장", "혼자 밥", "아침 식사"], "rv": ["Five stars for value — Yukaejang and soon tofu both excellent, very reasonably priced. (실제 Google 리뷰, 3.8★)", "Great broth, really rich! Prices also reasonable! Highly recommended. (실제 Google 리뷰)"], "lat": 37.5060413, "lng": 127.059692, "exit4": false},
  {"name": "명우등심 삼성점", "type": "한우·고기구이", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🐄", "rt": 4.2, "cnt": 397, "addr": "봉은사로 86길 30 2층", "hours": "AM 11:30–PM 10 (매일)", "tags": ["한우", "등심", "육회비빔밥", "고급BBQ"], "moods": ["데이트", "회식", "축하할 일 있음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["특별한 날 고기", "고급 한우", "회식"], "rv": ["Hanwoo beef so good — raw beef bibimbap pretty good. Free coffee after meal! (실제 Google 리뷰, 4.2★)", "Korean beef has excellent quality and tastes delicious. (실제 Google 리뷰)"], "lat": 37.5114106, "lng": 127.0568534, "exit4": false},
  {"name": "명우돈가", "type": "한식·삼겹살", "priceRange": "9000~15000", "cat": ["고기구이", "한식"], "e": "🥩", "rt": 4.6, "cnt": 274, "addr": "삼성로 96길 6", "hours": "AM 9–PM 11 (매일)", "tags": ["삼겹살", "한우", "코르키지가능", "친절"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["고기 구이", "회식", "친구들이랑 고기"], "rv": ["Brilliant Korean BBQ — beef and pork both served with good portion, staff attentive. (실제 Google 리뷰, 4.6★)", "Melt in your mouth meat — staff cook to perfection, patient and kind with non-Korean speakers. (실제 Google 리뷰)"], "lat": 37.5084569, "lng": 127.0566561, "exit4": false},
  {"name": "한국돈거래소", "type": "한식·고기구이", "cat": ["고기구이", "한식"], "e": "💰", "rt": 4.3, "cnt": 110, "addr": "삼성로 100길 23-6", "hours": "AM 11–PM 10 (매일)", "tags": ["삼겹살", "소고기", "BBQ", "혼밥가능"], "moods": ["회식", "혼밥", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["고기 구이", "혼자 밥", "회식"], "rv": ["As solo traveler — no 2-person minimum policy, very helpful choosing meat selections. (실제 Google 리뷰, 4.3★)", "Excellent food and service — from Spain and they explained all ways to eat the food. (실제 Google 리뷰)"], "lat": 37.5102629, "lng": 127.0573328, "exit4": false},
  {"name": "이화옥 삼성한국BBQ", "type": "한식·고기구이", "cat": ["고기구이", "한식"], "e": "🔥", "rt": 4.3, "cnt": 47, "addr": "테헤란로 83길 40", "hours": "AM 11–PM 9:30 (일 휴무)", "tags": ["한국BBQ", "삼겹살", "삼성역도보"], "moods": ["회식", "기분 좋음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["고기 구이", "회식", "친구들이랑 고기"], "rv": ["Amazing place for delicious grilled Korean beef. Staff very courteous and helpful. (실제 Google 리뷰, 4.3★)", "Best place to enjoy Korean BBQ and Korean beef. (실제 Google 리뷰)"], "lat": 37.5100687, "lng": 127.0568747, "exit4": false},
  {"name": "보름새 삼성점", "type": "한우·파인다이닝BBQ", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🌕", "rt": 4.2, "cnt": 593, "addr": "테헤란로 81길 36", "hours": "AM 11:30–PM 10 (매일)", "tags": ["한우", "미슐랭", "드라이에이징", "파인다이닝"], "moods": ["데이트", "축하할 일 있음", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["특별한 날 고기", "미슐랭 한우", "데이트 고기"], "rv": ["Michelin experience — dry and wet aged beef really delicious. One of my favorite Hanwoo places! (실제 Google 리뷰, 4.2★)", "Beef perfect — not fatty but still tender. Service great, atmosphere nice. (실제 Google 리뷰)"], "lat": 37.5092786, "lng": 127.056619, "exit4": false},
  {"name": "맛찬들왕소금구이 삼성직영점", "type": "삼겹살·소금구이", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🧂", "rt": 4.5, "cnt": 28, "addr": "삼성로 104길 23", "hours": "AM 11–AM 3 (일 ~PM 11)", "tags": ["삼겹살", "목살", "소금구이", "심야영업"], "moods": ["회식", "기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["고기 구이", "야장에 맥주", "회식"], "rv": ["Try their pork jowl BBQ — they cook for you, best in the area. (실제 Google 리뷰, 4.5★)", "Open until 2AM — authentic yakiniku at this late hour. Samgyeopsal exquisite. (실제 Google 리뷰)"], "lat": 37.5114019, "lng": 127.0565805, "exit4": false},
  {"name": "돈주는남자", "type": "삼겹살·제주흑돼지", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🐖", "rt": 4.5, "cnt": 154, "addr": "삼성1동 162-19", "hours": "PM 5–PM 10 (토일 PM 4:30~PM 9:30)", "tags": ["제주흑돼지", "삼겹살", "라면사리", "4번출구근처"], "moods": ["회식", "기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["고기 구이", "회식", "제주흑돼지"], "rv": ["Jeju black pork super juicy and flavorful — staff friendly, helping with grilling. Great vibes! (실제 Google 리뷰, 4.5★)", "Best pork BBQ in neighbourhood — ramyun at the end was amazing. (실제 Google 리뷰)"], "lat": 37.5144293, "lng": 127.0643594, "exit4": false},
  {"name": "육성급", "type": "삼겹살·한우", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🏆", "rt": 4.5, "cnt": 167, "addr": "테헤란로 79길 25", "hours": "AM 11–PM 2:30, PM 4–PM 10 (일 휴무)", "tags": ["삼겹살", "한우", "영어메뉴", "혼밥가능"], "moods": ["혼밥", "기분 좋음", "회식"], "wx": ["맑음", "흐림"], "scene": ["고기 구이", "혼자 밥", "영어가능"], "rv": ["Super Korean restaurant — English menu available, staff helpful and friendly. Will not exit hungry! (실제 Google 리뷰, 4.5★)", "Pork very delicious, all side dishes excellent. Very friendly staff. (실제 Google 리뷰)"], "lat": 37.508356, "lng": 127.0547205, "exit4": false},
  {"name": "백녀가 삼성점", "type": "한우·코스BBQ", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🥢", "rt": 4.6, "cnt": 7, "addr": "삼성로 571", "hours": "AM 10–PM 10 (매일)", "tags": ["한우", "장어구이", "코스", "수냉면"], "moods": ["데이트", "축하할 일 있음", "회식"], "wx": ["맑음", "흐림"], "scene": ["특별한 날 고기", "한우 코스", "데이트"], "rv": ["Of all premium BBQ restaurants, this remains my absolute favorite — quality consistently exceptional. (실제 Google 리뷰, 4.6★)", "Good all around — eel was something different, one of their specialties. (실제 Google 리뷰)"], "lat": 37.5123554, "lng": 127.0532605, "exit4": false},
  {"name": "고설우 한우오마카세", "type": "한우·오마카세", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🎯", "rt": 4.9, "cnt": 7, "addr": "테헤란로 87길 33 B1F", "hours": "AM 11–PM 10 (매일)", "tags": ["한우오마카세", "프라이빗룸", "코르키지없음", "코엑스"], "moods": ["축하할 일 있음", "데이트", "회식"], "wx": ["맑음", "흐림"], "scene": ["특별한 날 고기", "한우 오마카세", "기념일"], "rv": ["Korean Beef Course Cuisine — fine-dining-level service. Perfect for formal gatherings and anniversaries. (실제 Google 리뷰, 4.9★)", "Corkage-free policy — hanok-style restaurant with luxurious interior. Highly recommended! (실제 Google 리뷰)"], "lat": 37.5098065, "lng": 127.0578853, "exit4": false},
  {"name": "삼환소한마리 삼성점", "type": "한식·소한마리무제한", "priceRange": "9000~15000", "cat": ["고기구이", "한식"], "e": "🐂", "rt": 3.6, "cnt": 240, "addr": "영동대로 112길 10", "hours": "AM 11–PM 3, PM 5–PM 10 (토일 연속)", "tags": ["소한마리", "무제한리필", "한우", "코엑스"], "moods": ["회식", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["고기 구이", "회식", "무제한 고기"], "rv": ["All-you-can-eat beef refill in Gangnam near COEX — eat as many different cuts as you want! (실제 Google 리뷰, 3.6★)", "Very nice place, fantastic food! (실제 Google 리뷰)"], "lat": 37.5150001, "lng": 127.0611113, "exit4": false},
  {"name": "진밀옥 삼성동", "type": "보쌈·낙지볶음", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🦑", "rt": 4.6, "cnt": 20, "addr": "테헤란로 81길 16", "hours": "AM 10:50–PM 10 (토일 ~PM 9)", "tags": ["보쌈", "낙지볶음", "조개탕", "100인석"], "moods": ["회식", "피곤함", "허전함"], "wx": ["비", "흐림", "쌀쌀함", "맑음"], "scene": ["회식", "보쌈", "단체 식사"], "rv": ["Bossam so soft and savory, stir-fried octopus moist and delicious! Spacious 100-person room. (실제 Google 리뷰, 4.6★)", "Rich broth made with Korean beef and beef bones — portions so generous I thought it was double. (실제 Google 리뷰)"], "lat": 37.5082112, "lng": 127.0571281, "exit4": false},
  {"name": "불고기브라더스 코엑스", "type": "한식·불고기", "priceRange": "9000~15000", "cat": ["고기구이", "한식"], "e": "🍖", "rt": 3.4, "cnt": 135, "addr": "삼성동 159", "hours": "AM 11–PM 9 (매일)", "tags": ["불고기", "코엑스", "빠른식사", "영어메뉴"], "moods": ["혼밥", "피곤함", "회식"], "wx": ["맑음", "흐림"], "scene": ["코엑스 식사", "불고기", "혼자 밥"], "rv": ["Great option for quick and filling lunch/dinner — foreigner friendly, all menu has English translations. (실제 Google 리뷰, 3.4★)", "Got the Korean bulgogi — tasted good. Shrimp tempura was great. (실제 Google 리뷰)"], "lat": 37.511419, "lng": 127.0588399, "exit4": false},
  {"name": "웨어하우스43 삼성", "type": "한우·프리미엄BBQ", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🏭", "rt": 4.2, "cnt": 609, "addr": "테헤란로 534 글라스타워 지하1층", "hours": "AM 11:30–PM 10 (일 휴무)", "tags": ["한우", "프리미엄BBQ", "단체석", "와인리스트", "회식"], "moods": ["회식", "축하할 일 있음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["회식", "특별한 날 고기", "고급 한우"], "rv": ["서울 최고의 한우 식당 중 하나 — 입에서 녹는 고기, 훌륭한 와인 리스트. (실제 Google 리뷰, 4.2★)", "입이 쩍 벌어지는 한우 경험 — 두껍고 육즙 풍부하며 부드럽고 감칠맛. 꼭 방문하세요! (실제 Google 리뷰)"], "lat": 37.507996, "lng": 127.0627848, "exit4": true},
  {"name": "대도식당 삼성점", "type": "한우·BBQ", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🥩", "rt": 4.0, "cnt": 897, "addr": "삼성로 545 대도빌딩 1-3층", "hours": "AM 10–PM 10 (매일)", "tags": ["한우", "등심", "역사있는집", "회식", "밥도둑"], "moods": ["회식", "축하할 일 있음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["회식", "특별한 날 고기", "고급 한우"], "rv": ["40번 이상 방문 — 대도 삼성은 역대 최애 식당. 200g 등심 55,000원, 그 값 충분히 함. (실제 Google 리뷰, 4.0★)", "서울 최고 한우 BBQ 중 하나 — 마지막에 먹는 김치볶음밥은 필수. (실제 Google 리뷰)"], "lat": 37.5101752, "lng": 127.0544314, "exit4": false},
  {"name": "경천아인 2237", "type": "한우·프리미엄코스", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🎎", "rt": 4.3, "cnt": 548, "addr": "테헤란로 421", "hours": "AM 11:30–PM 10 (일 휴무)", "tags": ["한우", "코르키지없음", "갈비탕", "프라이빗룸", "비즈니스"], "moods": ["회식", "축하할 일 있음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["비즈니스 회식", "특별한 날 고기", "고급 한우"], "rv": ["몇 년 만에 최고의 갈비탕 — 비즈니스 손님 모시기 좋은 곳. 콜키지 없으니 와인 가져오세요! (실제 Google 리뷰, 4.3★)", "맛있고 품질 좋은 한우에 훌륭한 서비스. 룸 예약 가능. (실제 Google 리뷰)"], "lat": 37.505969, "lng": 127.0525395, "exit4": false},
  {"name": "아우정 한우", "type": "한우·프리미엄", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🏮", "rt": 4.0, "cnt": 83, "addr": "테헤란로 87길 45", "hours": "AM 11–PM 11 (매일)", "tags": ["한우", "와인리스트", "고급분위기", "유명인운영"], "moods": ["회식", "축하할 일 있음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["특별한 날 고기", "비즈니스 회식", "데이트"], "rv": ["연예인 부부 운영 — 마블링 훌륭하고 부드러운 고기. 가격이 아깝지 않은 퀄리티. 100% 재방문! (실제 Google 리뷰, 4.0★)", "프리미엄 모둠A 정말 맛있음 — 와인 리스트 보기 편하고 직원 친절. (실제 Google 리뷰)"], "lat": 37.5106332, "lng": 127.0574963, "exit4": false},
  {"name": "등심팩토리", "type": "한우·BBQ", "cat": ["고기구이", "한식"], "e": "🔬", "rt": 4.1, "cnt": 161, "addr": "삼성로 100길 23-8", "hours": "PM 5–PM 11 (일 휴무)", "tags": ["한우", "숯불", "코르키지없음", "단체석", "회식"], "moods": ["회식", "기분 좋음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["회식", "고급 한우", "숯불구이"], "rv": ["훌륭한 한우 BBQ — 고기 맛있고 직원 친절히 맞아줌. 콜키지 없음! (실제 Google 리뷰, 4.1★)", "정말 맛있는 고기. 진짜 숯불 구이. 콜키지 없음. (실제 Google 리뷰)"], "lat": 37.51036, "lng": 127.0573112, "exit4": false},
  {"name": "우와해 선릉본점", "type": "한우·BBQ·24시", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "⭐", "rt": 4.8, "cnt": 142, "addr": "삼성동 테헤란로 69길 8", "hours": "24시간 (매일)", "tags": ["한우", "24시간", "1++한우", "세트메뉴", "회식"], "moods": ["회식", "기분 좋음", "축하할 일 있음"], "wx": ["맑음", "흐림", "비"], "scene": ["회식", "특별한 날 고기", "24시간 고기"], "rv": ["고기 완전 최고 — 육즙 풍부하고 풍미 가득. 자리세 있지만 음식 훌륭, 마지막 요거트도 굿. (실제 Google 리뷰, 4.8★)", "모든 게 최고 — 1++++ 한우, 반찬, 소스 다 좋음. 원하는 부위 직접 선택! (실제 Google 리뷰)"], "lat": 37.506439, "lng": 127.0527894, "exit4": false},
  {"name": "마초갈비 삼성동", "type": "갈비·삼겹살", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🍖", "rt": 4.2, "cnt": 88, "addr": "삼성로 96길 7", "hours": "AM 11–AM 5 (토 ~PM 10, 일 ~PM 10)", "tags": ["갈비", "삼겹살", "심야영업", "회식"], "moods": ["회식", "기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림"], "scene": ["회식", "고기 구이", "심야 식사"], "rv": ["최고의 한식 구이 식당 중 하나 — 양념 소갈비 정말 맛있고 부드러움. (실제 Google 리뷰, 4.2★)", "이 근처 최고 KBBQ — 양념갈비에 냉면 조합 최고. (실제 Google 리뷰)"], "lat": 37.5089134, "lng": 127.05635, "exit4": false},
  {"name": "우정소갈비 코엑스점", "type": "갈비·한식BBQ", "priceRange": "9000~15000", "cat": ["고기구이", "한식"], "e": "🐮", "rt": 4.4, "cnt": 20, "addr": "삼성동 영동대로 112길 6 정원빌딩", "hours": "AM 11–PM 10 (일 휴무)", "tags": ["갈비", "한우", "코엑스", "영어메뉴", "회식"], "moods": ["회식", "축하할 일 있음", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["회식", "특별한 날 고기", "갈비"], "rv": ["코엑스 바로 옆 신상 맛집 — 합리적인 가격, 영어 메뉴 있음! (실제 Google 리뷰, 4.4★)", "생일 파티로 방문 — 고기 품질 탁월, 강추. (실제 Google 리뷰)"], "lat": 37.5148766, "lng": 127.0606972, "exit4": false},
  {"name": "풍년집 대치점", "type": "갈비·한식", "priceRange": "9000~15000", "cat": ["고기구이", "한식"], "e": "🌾", "rt": 4.3, "cnt": 237, "addr": "대치동 956-16", "hours": "AM 11–PM 11 (매일)", "tags": ["갈비", "소갈비", "가성비", "단골집", "회식"], "moods": ["회식", "기분 좋음", "허전함"], "wx": ["맑음", "흐림"], "scene": ["회식", "고기 구이", "갈비"], "rv": ["양념 소갈비 맛있음 — 된장라면 훌륭, 사장님 엄청 친절. (실제 Google 리뷰, 4.3★)", "가성비 좋은 양념 소갈비. (실제 Google 리뷰)"], "lat": 37.5055706, "lng": 127.0593066, "exit4": false},
  {"name": "다이닝갈비", "type": "갈비·한식BBQ", "cat": ["고기구이", "한식"], "e": "🍽️", "rt": 4.6, "cnt": 14, "addr": "테헤란로 81길 62-4", "hours": "PM 4–PM 10:30 (매일)", "tags": ["갈비", "트러플리조또", "예약필수", "회식"], "moods": ["회식", "데이트", "축하할 일 있음"], "wx": ["맑음", "흐림"], "scene": ["회식", "특별한 날 고기", "갈비"], "rv": ["월요일도 만석 — 예약 필수! 완벽하게 구운 갈비에 트러플 리조또 조합. (실제 Google 리뷰, 4.6★)", "양념갈비 맛있고 양 많음. 돼지고기 부드럽고 육즙 풍부. (실제 Google 리뷰)"], "lat": 37.5105798, "lng": 127.0559432, "exit4": false},
  {"name": "봉산집 삼성동점", "type": "한식·차돌박이", "priceRange": "9000~15000", "cat": ["고기구이", "한식"], "e": "🫙", "rt": 3.9, "cnt": 478, "addr": "삼성로 564", "hours": "AM 11–PM 9 (매일)", "tags": ["차돌박이", "된장찌개", "단체", "가성비", "회식"], "moods": ["회식", "혼밥", "피곤함"], "wx": ["맑음", "흐림"], "scene": ["회식", "가성비 고기", "차돌박이"], "rv": ["차돌박이 BBQ 완전 대박 — 전문 맛집, 음식과 서비스 훌륭. (실제 Google 리뷰, 3.9★)"], "lat": 37.5119104, "lng": 127.0543383, "exit4": false},
  {"name": "동인동 갈비찜", "type": "갈비찜·전통한식", "priceRange": "9000~15000", "cat": ["고기구이", "한식"], "e": "🥘", "rt": 4.0, "cnt": 227, "addr": "영동대로 85길 20-7", "hours": "AM 11:10–PM 9:30 (토일 휴무)", "tags": ["갈비찜", "해물파전", "회식", "단체"], "moods": ["회식", "기분 좋음", "허전함"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["회식", "갈비찜", "전통 한식"], "rv": ["매콤한 갈비찜과 파전 맛있음 — 퇴근 후 모임 최고, 합리적인 가격. (실제 Google 리뷰, 4.0★)", "갈비찜 부드럽고 적당히 매콤. (실제 Google 리뷰)"], "lat": 37.5073963, "lng": 127.0616563, "exit4": true},
  {"name": "백코프하우스 코엑스", "type": "갈비·BBQ·코엑스", "priceRange": "25000~50000", "cat": ["고기구이", "한식"], "e": "🏠", "rt": 3.9, "cnt": 115, "addr": "영동대로 513 코엑스 지하1층 P106", "hours": "AM 11–PM 10 (매일)", "tags": ["갈비", "메가박스", "코엑스", "단체", "회식"], "moods": ["회식", "기분 좋음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["코엑스 식사", "회식", "갈비"], "rv": ["이 동네 최고 LA갈비 중 하나 — 쇼핑몰 입구 바로 옆, 점심 메뉴 가성비 굿. (실제 Google 리뷰, 3.9★)"], "lat": 37.5132091, "lng": 127.0596728, "exit4": false},
  {"name": "오봉집 삼성", "type": "보쌈·낙지볶음", "cat": ["고기구이", "한식"], "e": "🥬", "rt": 4.7, "cnt": 263, "addr": "테헤란로 81길 62", "hours": "AM 11–PM 2:30, PM 5–PM 10 (토일 PM 11:30~PM 10)", "tags": ["보쌈", "낙지볶음", "조개탕", "회식", "단체"], "moods": ["회식", "기분 좋음", "피곤함"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["회식", "보쌈", "단체 식사"], "rv": ["보쌈 잘 준비됨, 깔끔한 맛. 대왕 낙지 식감 좋고 신선! (실제 Google 리뷰, 4.7★)", "양과 질 대비 가격 매우 합리적. 영어 가능한 직원 있음. (실제 Google 리뷰)"], "lat": 37.5105771, "lng": 127.0558358, "exit4": false},
  {"name": "수다 삼성2호점", "type": "이자카야·일식", "priceRange": "25000~40000", "cat": ["이자카야", "일식"], "e": "🏮", "rt": 4.2, "cnt": 350, "addr": "삼성로 100길 23-15", "hours": "PM 4–AM 2 (금토 ~AM 3)", "tags": ["이자카야", "프라이빗룸", "단체석", "야키토리", "회식"], "moods": ["회식", "기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림"], "scene": ["회식", "이자카야", "단체 술자리"], "rv": ["훌륭한 인테리어와 활기찬 분위기 — 직원 프로답고 친절, 음식 탁월. (실제 Google 리뷰, 4.2★)", "음식과 분위기 모두 최고. 모임 장소로 딱. (실제 Google 리뷰)"], "lat": 37.51085, "lng": 127.0568116, "exit4": false},
  {"name": "수다 삼성1호점", "type": "이자카야·일식", "cat": ["이자카야", "일식"], "e": "🍶", "rt": 4.3, "cnt": 338, "addr": "테헤란로 87길 53", "hours": "PM 4–AM 2 (금토 ~AM 3)", "tags": ["이자카야", "스키야키", "사시미", "프라이빗룸", "회식"], "moods": ["회식", "기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림"], "scene": ["회식", "이자카야", "단체 술자리"], "rv": ["룸이라 자유롭게 대화 가능 — 스키야키 훌륭, 스시 크기 넉넉. (실제 Google 리뷰, 4.3★)", "분위기 좋음. 굴 적당히 맛있음. (실제 Google 리뷰)"], "lat": 37.511002, "lng": 127.057317, "exit4": false},
  {"name": "요란 이자카야", "type": "이자카야·사시미", "priceRange": "25000~40000", "cat": ["이자카야", "일식"], "e": "🦑", "rt": 4.9, "cnt": 51, "addr": "삼성동 49-11", "hours": "영업시간 미확인", "tags": ["이자카야", "사시미", "프라이빗룸", "에이징생선", "회식"], "moods": ["회식", "데이트", "축하할 일 있음"], "wx": ["맑음", "흐림"], "scene": ["회식", "이자카야", "생선회"], "rv": ["모둠 사시미 — 광어, 연어, 도화새우, 문어. 데이트나 모임에 완벽! (실제 Google 리뷰, 4.9★)", "단체 룸 많음 — 숙성 생선 탕 맛있음, 사장님 매우 친절. (실제 Google 리뷰)"], "lat": 37.5125515, "lng": 127.0506245, "exit4": false},
  {"name": "이자카야 열", "type": "이자카야·프라이빗룸", "cat": ["이자카야"], "e": "🔟", "rt": 4.0, "cnt": 152, "addr": "역삼동 823-6 2층", "hours": "PM 4–AM 1 (금토 ~AM 2, 일 휴무)", "tags": ["이자카야", "프라이빗룸", "코르키지없음", "회식"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["회식", "이자카야", "프라이빗룸"], "rv": ["룸에서 콜키지 없이 와인 즐기기 딱. 세트메뉴 추천! (실제 Google 리뷰, 4.0★)", "음식과 분위기 모두 좋음 — 조용히 대화하기 좋은 룸. (실제 Google 리뷰)"], "lat": 37.4936946, "lng": 127.0291054, "exit4": false},
  {"name": "이자카야나무 서초점", "type": "이자카야·프라이빗룸", "cat": ["이자카야"], "e": "🌳", "rt": 4.0, "cnt": 68, "addr": "서초동 1307-17", "hours": "PM 3:30–AM 5 (매일)", "tags": ["이자카야", "프라이빗룸", "데이트", "회식"], "moods": ["데이트", "회식", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["회식", "이자카야", "프라이빗룸"], "rv": ["강남역 근처 조용한 골목 — 프라이빗 대화 가능한 룸. (실제 Google 리뷰, 4.0★)", "진짜 좋은 룸바 — 넓고 편안한 룸, 단체 모임에 최적. (실제 Google 리뷰)"], "lat": 37.5000654, "lng": 127.0256509, "exit4": false},
  {"name": "P.F.창스 코엑스", "type": "중식·아시안퓨전", "priceRange": "10000~18000", "cat": ["중식"], "e": "🥢", "rt": 4.1, "cnt": 388, "addr": "영동대로 517 코엑스몰 B1", "hours": "AM 11–PM 9 (매일)", "tags": ["PF창스", "아시안퓨전", "단체", "코엑스", "회식"], "moods": ["회식", "기분 좋음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["회식", "코엑스 식사", "중식"], "rv": ["몽골리안 비프와 다이너마이트 새우 완전 맛있음 — 양 넉넉하고 가성비 좋음. (실제 Google 리뷰, 4.1★)", "산라탕 맛있음 — 깔끔하고 잘 관리된 공간, 부스 자리 매우 편안. (실제 Google 리뷰)"], "lat": 37.5133715, "lng": 127.0595589, "exit4": false},
  {"name": "도원스타일 무역센터점", "type": "중식·고급코스", "priceRange": "10000~18000", "cat": ["중식"], "e": "🌸", "rt": 4.2, "cnt": 119, "addr": "삼성동 159-7 현대백화점 무역센터점 10층", "hours": "AM 11–PM 10 (매일)", "tags": ["중식", "호텔레스토랑", "코스", "회식", "비즈니스"], "moods": ["회식", "축하할 일 있음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["비즈니스 회식", "특별한 중식", "코스"], "rv": ["전복 짜장면 — 독특함! 특별한 날에 완벽. (실제 Google 리뷰, 4.2★)", "신선한 재료, 완벽한 중식. (실제 Google 리뷰)"], "lat": 37.5088357, "lng": 127.0599213, "exit4": true},
  {"name": "이화원 삼성점", "type": "중식·호텔레스토랑", "priceRange": "10000~18000", "cat": ["중식"], "e": "🏯", "rt": 4.2, "cnt": 302, "addr": "테헤란로 87길 46", "hours": "AM 11:30–PM 2:30, PM 6–PM 10 (매일)", "tags": ["중식", "호텔레스토랑", "딤섬", "프라이빗룸", "비즈니스"], "moods": ["회식", "데이트", "축하할 일 있음"], "wx": ["맑음", "흐림"], "scene": ["비즈니스 회식", "특별한 중식", "호텔 레스토랑"], "rv": ["10년째 코스 요리 먹으러 찾는 곳 — 짬뽕이 특히 맛있고 룸 예약 가능. (실제 Google 리뷰, 4.2★)", "기념일 식사로 최고. 매우 정통 중식에 훌륭한 서비스. (실제 Google 리뷰)"], "lat": 37.5107929, "lng": 127.0581856, "exit4": false},
  {"name": "마노디셰프 삼성", "type": "이탈리안·파스타", "priceRange": "15000~25000", "cat": ["양식", "이탈리안"], "e": "🍝", "rt": 4.3, "cnt": 906, "addr": "테헤란로 87길 21", "hours": "AM 11–PM 3, PM 5–PM 9:30 (매일)", "tags": ["파스타", "피자", "이탈리안", "단체", "회식"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["회식", "이탈리안", "파스타"], "rv": ["지금껏 먹어본 최고의 마늘빵 — 얇고 바삭한 피자 크러스트. 영어 메뉴, 2시간 무료주차! (실제 Google 리뷰, 4.3★)", "넓고 편한 테이블, 홀 넓음 — 단체에 딱! (실제 Google 리뷰)"], "lat": 37.5090435, "lng": 127.0583118, "exit4": false},
  {"name": "더 이탈리안 클럽 현대무역센터", "type": "이탈리안", "cat": ["양식", "이탈리안"], "e": "🇮🇹", "rt": 4.9, "cnt": 11, "addr": "테헤란로 517 현대백화점 무역센터점 10층", "hours": "AM 11–PM 2:30, PM 5–PM 10 (매일)", "tags": ["이탈리안", "백화점", "피자", "파스타", "회식"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["회식", "이탈리안", "특별한 양식"], "rv": ["아라비아타 매콤하고 정말 맛있음 — 부라타 치즈와 가니시 환상 조합! (실제 Google 리뷰, 4.9★)", "음식 맛있고 직원 친절 — 꼭 다시 방문할 것! (실제 Google 리뷰)"], "lat": 37.5085949, "lng": 127.0597186, "exit4": true},
  {"name": "치폴라 로쏘", "type": "이탈리안·파스타", "cat": ["양식", "이탈리안"], "e": "🧅", "rt": 4.0, "cnt": 387, "addr": "삼성동 91-25", "hours": "AM 11:30–PM 10 (매일)", "tags": ["이탈리안", "파스타", "글루텐프리", "리조또", "회식"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["회식", "이탈리안", "파스타"], "rv": ["해산물 로제 리조또 훌륭 — 분위기 정말 좋고 아늑. 글루텐프리 옵션 있음. (실제 Google 리뷰, 4.0★)", "맛있는 이탈리안 식사 — 금요일 저녁에도 사람 많지 않아 여유롭게 즐길 수 있음. (실제 Google 리뷰)"], "lat": 37.5152583, "lng": 127.060392, "exit4": false},
  {"name": "매드포갈릭 봉은사 아이파크타워", "type": "양식·이탈리안", "cat": ["양식", "이탈리안"], "e": "🧄", "rt": 4.3, "cnt": 412, "addr": "영동대로 520 봉은사 아이파크타워 지하1층", "hours": "AM 11–PM 9 (매일)", "tags": ["이탈리안", "마늘", "스테이크", "피자", "회식"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["회식", "이탈리안", "양식"], "rv": ["메뉴들에 완전 반했음 — 갈릭스노우 피자 4.5점. 늦은 시간도 직원 친절. (실제 Google 리뷰, 4.3★)", "마늘과 베이컨 넣은 철판 볶음밥 최고 — 세트 메뉴 좋음. (실제 Google 리뷰)"], "lat": 37.5138071, "lng": 127.0609973, "exit4": false},
  {"name": "THE PLACE 이탈리안 비스트로 코엑스", "type": "이탈리안·코엑스", "cat": ["양식", "이탈리안"], "e": "🍕", "rt": 4.1, "cnt": 937, "addr": "영동대로 513 코엑스 지하1층", "hours": "AM 10–PM 10 (매일)", "tags": ["이탈리안", "파스타", "피자", "코엑스", "회식"], "moods": ["회식", "기분 좋음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["코엑스 식사", "회식", "이탈리안"], "rv": ["넓고 예쁘게 꾸며진 공간 — 파스타 완벽하게 조리됨, 피자 만족스러움. 빠르고 친절한 서비스. (실제 Google 리뷰, 4.1★)", "문어 알리오 올리오와 레몬 오징어 파스타 맛있음 — 가족 단위 앉을 자리 많음. (실제 Google 리뷰)"], "lat": 37.5115619, "lng": 127.060183, "exit4": false},
  {"name": "ebt 코엑스점", "type": "이탈리안·스테이크", "priceRange": "35000~70000", "cat": ["양식", "이탈리안"], "e": "🥂", "rt": 4.2, "cnt": 43, "addr": "영동대로 513 코엑스목 B1 I103호", "hours": "AM 11–PM 10 (매일)", "tags": ["이탈리안", "스테이크", "파스타", "코엑스", "회식"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["코엑스 식사", "회식", "이탈리안"], "rv": ["스테이크 아주 잘 구워짐, 파스타 맛있음 — 식품 알레르기 배려해줌. 코엑스 방문시 추천! (실제 Google 리뷰, 4.2★)", "음식과 서비스 좋음 — 매니저가 와인 시음도 제안해줌. (실제 Google 리뷰)"], "lat": 37.5120743, "lng": 127.0591725, "exit4": false},
  {"name": "페리지 이탈리안", "type": "이탈리안·파인다이닝", "cat": ["양식", "이탈리안"], "e": "🌙", "rt": 4.7, "cnt": 85, "addr": "봉은사로 68길 6-5", "hours": "PM 5–PM 10 (월일 휴무)", "tags": ["파인다이닝", "이탈리안", "파스타", "예약필수", "회식"], "moods": ["회식", "데이트", "축하할 일 있음"], "wx": ["맑음", "흐림"], "scene": ["특별한 날 양식", "이탈리안 파인다이닝", "기념일"], "rv": ["지금껏 먹어본 최고의 봉골레와 리조또 — 역대 최고 이탈리안 중 하나. CIA 출신 셰프! (실제 Google 리뷰, 4.7★)", "믿기 힘든 음식 — 서비스 탁월, 분위기 아늑. 내 인생 최고의 식사 중 하나. (실제 Google 리뷰)"], "lat": 37.5112619, "lng": 127.0494907, "exit4": false},
  {"name": "치즈룸 멜팅샵 파르나스몰", "type": "이탈리안·치즈케이크", "cat": ["양식", "이탈리안"], "e": "🧀", "rt": 4.3, "cnt": 250, "addr": "테헤란로 521 파르나스몰 지하1층", "hours": "AM 10:30–PM 10 (매일)", "tags": ["치즈케이크", "파스타", "치즈", "코엑스", "회식"], "moods": ["회식", "데이트", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["코엑스 식사", "치즈케이크", "이탈리안"], "rv": ["다시 찾을 가치 있는 놀라운 치즈케이크 — 아라비아타 파스타 맛있음. (실제 Google 리뷰, 4.3★)", "느끼하지 않고 정말 맛있음 — 항상 노력하는 곳. (실제 Google 리뷰)"], "lat": 37.5090474, "lng": 127.060893, "exit4": true},
  {"name": "포모도로 코엑스", "type": "이탈리안·파스타", "cat": ["양식", "이탈리안"], "e": "🍅", "rt": 3.4, "cnt": 126, "addr": "봉은사로 524 코엑스몰", "hours": "AM 11–PM 9 (매일)", "tags": ["이탈리안", "파스타", "코엑스", "회식"], "moods": ["회식", "기분 좋음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["코엑스 식사", "이탈리안", "회식"], "rv": ["자체 주문 시스템 편리 — 스파게티 카르보나라 예쁘게 플레이팅됨, 정통 이탈리안 맛! (실제 Google 리뷰, 3.4★)", "지금껏 먹어본 가장 맛있는 이탈리안 — 직원 친절, 강추! (실제 Google 리뷰)"], "lat": 37.5125207, "lng": 127.0588194, "exit4": false},
  {"name": "아웃백 코엑스점", "type": "스테이크·패밀리레스토랑", "priceRange": "35000~70000", "cat": ["스테이크", "양식"], "e": "🦘", "rt": 4.2, "cnt": 1001, "addr": "영동대로 513 스타필드 코엑스몰 지하1층", "hours": "AM 11–PM 9 (매일)", "tags": ["스테이크", "토마호크", "코엑스", "단체", "회식"], "moods": ["회식", "기분 좋음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["코엑스 식사", "회식", "스테이크"], "rv": ["서비스 세심하고 좋음 — 분위기 예상보다 훨씬 좋음. 음식과 분위기 모두 대박. (실제 Google 리뷰, 4.2★)", "직원 친절하고 영어 가능. (실제 Google 리뷰)"], "lat": 37.5112399, "lng": 127.0590004, "exit4": false},
  {"name": "오크우드 코엑스 레스토랑", "type": "호텔뷔페·양식", "cat": ["양식", "뷔페"], "e": "🏨", "rt": 4.2, "cnt": 53, "addr": "오크우드 프리미어 호텔 삼성동", "hours": "영업시간 미확인", "tags": ["호텔뷔페", "와인무제한", "회식", "연말파티"], "moods": ["회식", "축하할 일 있음", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["회식", "연말 파티", "뷔페"], "rv": ["믿기 힘들 정도로 저렴한 호텔 뷔페 — 10가지 와인과 스텔라 맥주 무제한 제공! (실제 Google 리뷰, 4.2★)", "모임 장소로 최고 — 음식 선택지가 많지는 않지만 맛있음. (실제 Google 리뷰)"], "lat": 37.51093, "lng": 127.058103, "exit4": false},
  {"name": "리춍 삼성동", "type": "중식·24시간", "cat": ["중식", "한식중식"], "e": "🏮", "priceRange": "7000~12000", "rt": 3.8, "cnt": 206, "addr": "삼성로 520", "hours": "24시간 (매일)", "tags": ["짜장면", "짬뽕", "24시간", "가성비", "삼성역4번출구근처"], "moods": ["혼밥", "피곤함", "스트레스 받음"], "wx": ["맑음", "흐림", "비"], "scene": ["심야 중식", "혼자 점심", "24시간"], "rv": ["27년 전통 정통 한국 중식. 항상 주문이 밀릴 정도로 바쁨. (실제 Google 리뷰, 3.8★)", "올드스쿨 한국 중식당. 클래식 그 자체. (실제 Google 리뷰)"], "lat": 37.5086967, "lng": 127.0559552, "exit4": false},
  {"name": "동강 중식", "type": "중식·가성비", "cat": ["중식", "한식중식"], "e": "🥡", "priceRange": "8000~13000", "rt": 3.9, "cnt": 131, "addr": "삼성동 169-6", "hours": "AM 11–PM 9 (매일)", "tags": ["짬뽕", "짜장면", "코엑스근처", "지하", "가성비"], "moods": ["혼밥", "피곤함", "허전함"], "wx": ["맑음", "흐림", "비"], "scene": ["혼자 점심", "가성비 중식", "짬뽕"], "rv": ["코엑스 근처 이 가격대에 중식당이 있다는 게 정말 만족. 삼선짬뽕·간짜장·군만두 맛있음. (실제 Google 리뷰, 3.9★)", "삼성역 근처 오래된 지하 중식당 — 점심엔 줄 서는 맛집. (실제 Google 리뷰)"], "lat": 37.5101537, "lng": 127.0643447, "exit4": false},
  {"name": "해정천", "type": "중식·심야", "cat": ["중식", "한식중식"], "e": "🌙", "priceRange": "9000~15000", "rt": 4.0, "cnt": 98, "addr": "삼성2동 127-13", "hours": "AM 11–PM 9 (매일)", "tags": ["짬뽕", "닭강정", "심야", "프라이빗룸", "삼성중앙역"], "moods": ["회식", "기분 좋음", "스트레스 받음"], "wx": ["맑음", "흐림"], "scene": ["회식", "심야 중식", "짬뽕"], "rv": ["골목 안 숨겨진 보석 — 2층에 룸 있어 분위기 있게 술 한잔 하기 좋음. 닭강정 바삭하고 딱 맵달. (실제 Google 리뷰, 4.0★)", "삼성중앙역 근처, 24시간. 분위기 나쁘지 않고 가격 훌륭. (실제 Google 리뷰)"], "lat": 37.5115698, "lng": 127.0507571, "exit4": false},
  {"name": "하이딜라오 코엑스", "type": "중식·훠궈", "cat": ["중식", "훠궈"], "e": "🍲", "priceRange": "25000~45000", "rt": 4.2, "cnt": 57, "addr": "테헤란로 87길 58 지하2층", "hours": "AM 10–AM 5 (매일)", "tags": ["훠궈", "핫팟", "24시간", "코엑스", "단체"], "moods": ["회식", "축하할 일 있음", "기분 좋음"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["회식", "훠궈", "단체 식사"], "rv": ["서비스가 정말 훌륭했음 — 직원 모두 세심하고 친절, 진심으로 환영받는 느낌. 음식도 신선하고 맛있음. (실제 Google 리뷰, 4.2★)", "중국 친구들도 알고 좋아하는 유명 훠궈 체인 — 정말 맛있는 쇼! (실제 Google 리뷰)"], "lat": 37.5115958, "lng": 127.0578128, "exit4": false},
  {"name": "훠궈야 파르나스몰", "type": "중식·훠궈", "cat": ["중식", "훠궈"], "e": "🔥", "priceRange": "25000~40000", "rt": 4.1, "cnt": 101, "addr": "테헤란로 521 파르나스몰 지하1층", "hours": "AM 11:30–PM 11 (매일)", "tags": ["훠궈", "핫팟", "코엑스", "단체", "세트메뉴"], "moods": ["회식", "기분 좋음", "쌀쌀함"], "wx": ["맑음", "흐림", "쌀쌀함"], "scene": ["회식", "훠궈", "단체 식사"], "rv": ["정통 중국식 훠궈를 즐길 수 있는 깔끔하고 캐주얼한 곳. 코엑스~현대백화점 연결통로에 위치. (실제 Google 리뷰, 4.1★)", "훌륭한 핫팟! 음식 맛있고 깔끔함. (실제 Google 리뷰)"], "lat": 37.5086378, "lng": 127.0603946, "exit4": true},
  {"name": "웨이루 파르나스타워", "type": "중식·고급·베이징덕", "cat": ["중식"], "e": "🦆", "priceRange": "60000~100000", "rt": 4.3, "cnt": 163, "addr": "테헤란로 521 파르나스타워 34층", "hours": "AM 11:30–PM 2:30, PM 6–PM 10 (매일)", "tags": ["베이징덕", "고급중식", "뷰맛집", "코엑스", "비즈니스"], "moods": ["회식", "데이트", "축하할 일 있음"], "wx": ["맑음", "흐림"], "scene": ["비즈니스 회식", "특별한 중식", "베이징덕"], "rv": ["베이징덕 전문 — 껍질 초극 바삭, 안은 촉촉. 강남 전경 한눈에 보이는 34층 뷰. (실제 Google 리뷰, 4.3★)", "오리 해체 쇼가 인상적 — 여름 특선 코스가 가치 있었음. (실제 Google 리뷰)"], "lat": 37.5091322, "lng": 127.0608511, "exit4": true},
  {"name": "더그레이트홍위안", "type": "중식·고급", "cat": ["중식"], "e": "🌟", "priceRange": "70000~150000", "rt": 4.5, "cnt": 121, "addr": "테헤란로 231 조선팰리스 36층", "hours": "PM 12–PM 3, PM 6–PM 10 (매일)", "tags": ["고급중식", "조선팰리스", "뷰", "비즈니스", "베이징덕"], "moods": ["회식", "데이트", "축하할 일 있음"], "wx": ["맑음", "흐림"], "scene": ["비즈니스 회식", "특별한 중식", "고급 코스"], "rv": ["뷰와 인테리어, 서비스 모두 최상급. '부처님이 담을 뛰어넘다' 수프가 특히 인상적. (실제 Google 리뷰, 4.5★)", "연예인도 찾는 최고급 중식당 — 예약은 2개월 전 1일부터. (실제 Google 리뷰)"], "lat": 37.5030846, "lng": 127.0415016, "exit4": false},
  {"name": "딤딤덕", "type": "중식·베이징덕·딤섬", "cat": ["중식"], "e": "🫧", "priceRange": "20000~40000", "rt": 4.3, "cnt": 12, "addr": "테헤란로 7길 22 한국과학기술회관 B104", "hours": "AM 11–PM 9 (토 ~PM 3, 일 휴무)", "tags": ["베이징덕", "딤섬", "가성비", "회식", "단체"], "moods": ["회식", "축하할 일 있음", "기분 좋음"], "wx": ["맑음", "흐림"], "scene": ["회식", "베이징덕", "단체 식사"], "rv": ["합리적인 가격에 베이징덕을 즐길 수 있는 곳 — 칠리새우와 딤섬 육즙 가득하고 술과 잘 어울림. (실제 Google 리뷰, 4.3★)", "동파육 덮밥이 부드럽고 맛있음 — 회식 장소로도 추천! (실제 Google 리뷰)"], "lat": 37.500256, "lng": 127.0309893, "exit4": false},
  {"name": "딤섬 청요리 전문점 하이보", "type": "중식·광동요리", "cat": ["중식"], "e": "🥟", "priceRange": "15000~30000", "rt": 3.9, "cnt": 257, "addr": "영동대로 85길 13 대치동", "hours": "AM 11–PM 10 (매일)", "tags": ["딤섬", "광동요리", "런치코스", "단체"], "moods": ["회식", "기분 좋음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["회식", "딤섬", "단체 식사"], "rv": ["막 쪄낸 딤섬과 튀김 딤섬 맛있음 — 런치코스 가성비 괜찮고 단체 모임 가능. (실제 Google 리뷰, 3.9★)", "딤섬 맛집이라는 소문 듣고 방문 — 분위기 고급스럽고 깔끔. (실제 Google 리뷰)"], "lat": 37.5069867, "lng": 127.0625426, "exit4": true},
  {"name": "호우섬 코엑스점", "type": "중식·딤섬", "cat": ["중식"], "e": "🫕", "priceRange": "15000~25000", "rt": 3.6, "cnt": 103, "addr": "영동대로 513 코엑스몰", "hours": "AM 11–PM 10 (매일)", "tags": ["딤섬", "마라탕", "코엑스", "단체"], "moods": ["회식", "기분 좋음", "데이트"], "wx": ["맑음", "흐림"], "scene": ["코엑스 식사", "딤섬", "중식"], "rv": ["마라탕+라주짜장 맛있음 — 딤섬도 좋고 코코넛 음료도 강추. (실제 Google 리뷰, 3.6★)", "코엑스에서 색다른 딤섬을 즐길 수 있는 곳. (실제 Google 리뷰)"], "lat": 37.5121513, "lng": 127.058789, "exit4": false}
,
{
  "name": "온천집 삼성점",
  "type": "한식·온천집",
  "priceRange": "15000~28000",
  "cat": [
    "한식",
    "고기구이"
  ],
  "e": "🍖",
  "rt": 4.5,
  "cnt": 1823,
  "addr": "테헤란로87길 36",
  "hours": "PM 11:30–AM 2 (매일)",
  "tags": [
    "에그인헬",
    "폭립",
    "심야식당",
    "SNS맛집",
    "웨이팅"
  ],
  "moods": [
    "기분 좋음",
    "스트레스 받음",
    "회식"
  ],
  "wx": [
    "맑음",
    "흐림",
    "쌀쌀함"
  ],
  "scene": [
    "야근 후 회식",
    "심야 허기",
    "SNS 찍으러"
  ],
  "rv": [
    "에그인헬 비주얼 대박. 야간에 줄 서는 집인데 맛도 기대 이상 (실제 Google 리뷰, 4.5★)",
    "폭립 양이 어마어마해요. 혼자 오면 배터짐 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "에그인헬",
      "price": 17000
    },
    {
      "name": "폭립",
      "price": 26000
    },
    {
      "name": "파스타",
      "price": 16000
    }
  ],
  "parking": false,
  "waiting": "웨이팅 있음",
  "vector": {
    "solo": 0.4,
    "group": 0.8,
    "alcohol": 0.6,
    "comfort_food": 0.8,
    "heavy_food": 0.85,
    "warm_food": 0.5,
    "fast_meal": 0.2,
    "date": 0.5
  },
  "lat": 37.5118,
  "lng": 127.0598,
  "exit4": false
},
{
  "name": "선릉 참숯갈비",
  "type": "갈비·한우",
  "priceRange": "22000~48000",
  "cat": [
    "고기구이",
    "한식"
  ],
  "e": "🥩",
  "rt": 4.4,
  "cnt": 654,
  "addr": "선릉로 120길 9",
  "hours": "PM 12–PM 11 (매일)",
  "tags": [
    "참숯갈비",
    "한우",
    "룸있음",
    "접대",
    "회식"
  ],
  "moods": [
    "회식",
    "축하",
    "데이트"
  ],
  "wx": [
    "맑음",
    "흐림",
    "쌀쌀함"
  ],
  "scene": [
    "팀회식",
    "기념일 외식",
    "접대"
  ],
  "rv": [
    "참숯 향 살아있는 갈비. 룸 있어서 조용히 먹기 좋아요 (실제 Google 리뷰, 4.4★)",
    "한우 마블링 보고 감동. 접대용으로 자주 씀 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "참숯갈비",
      "price": 27000
    },
    {
      "name": "한우등심",
      "price": 48000
    },
    {
      "name": "냉면",
      "price": 10000
    }
  ],
  "parking": false,
  "waiting": "예약 가능",
  "vector": {
    "solo": 0.1,
    "group": 0.9,
    "alcohol": 0.7,
    "comfort_food": 0.6,
    "heavy_food": 0.9,
    "warm_food": 0.4,
    "fast_meal": 0.1,
    "date": 0.7
  },
  "lat": 37.5093,
  "lng": 127.0494,
  "exit4": false
},
{
  "name": "코엑스 사보텐",
  "type": "일식·돈카츠",
  "priceRange": "13000~22000",
  "cat": [
    "일식"
  ],
  "e": "🍱",
  "rt": 4.1,
  "cnt": 2341,
  "addr": "영동대로 513 코엑스몰 B1",
  "hours": "AM 11–PM 10 (매일)",
  "tags": [
    "돈카츠",
    "왕새우",
    "코엑스",
    "혼밥가능",
    "런치세트"
  ],
  "moods": [
    "혼밥",
    "피곤함",
    "기분 좋음"
  ],
  "wx": [
    "맑음",
    "흐림",
    "비"
  ],
  "scene": [
    "코엑스 쇼핑 후",
    "혼자 조용히",
    "빠르게 한끼"
  ],
  "rv": [
    "왕새우 튀김 바삭하고 육즙 살아있어요. 코엑스 점심 단골 (실제 Google 리뷰, 4.1★)",
    "세트 구성 알차고 양 충분. 가성비 좋음 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "히레카츠세트",
      "price": 16500
    },
    {
      "name": "왕새우카츠세트",
      "price": 21000
    },
    {
      "name": "모둠카츠세트",
      "price": 22000
    }
  ],
  "parking": true,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.85,
    "group": 0.4,
    "alcohol": 0,
    "comfort_food": 0.7,
    "heavy_food": 0.6,
    "warm_food": 0.5,
    "fast_meal": 0.8,
    "date": 0.2
  },
  "lat": 37.5115,
  "lng": 127.0598,
  "exit4": false
},
{
  "name": "삼성동 황소고집",
  "type": "한우구이·정육식당",
  "priceRange": "30000~70000",
  "cat": [
    "고기구이",
    "한식"
  ],
  "e": "🐄",
  "rt": 4.6,
  "cnt": 512,
  "addr": "봉은사로 111길 28",
  "hours": "PM 12–PM 11 (일 휴무)",
  "tags": [
    "한우정육식당",
    "가성비한우",
    "마블링",
    "특별한날",
    "룸있음"
  ],
  "moods": [
    "축하",
    "회식",
    "데이트"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "기념일 외식",
    "특별한 날",
    "접대"
  ],
  "rv": [
    "정육점 직영이라 한우 가격이 놀라워요. 마블링 보면 기절 (실제 Google 리뷰, 4.6★)",
    "삼성동에서 이 퀄리티 한우를 이 가격에? 재방문 확정 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "한우채끝",
      "price": 38000
    },
    {
      "name": "한우등심",
      "price": 55000
    },
    {
      "name": "육회",
      "price": 28000
    }
  ],
  "parking": false,
  "waiting": "예약 가능",
  "vector": {
    "solo": 0.1,
    "group": 0.8,
    "alcohol": 0.6,
    "comfort_food": 0.5,
    "heavy_food": 0.9,
    "warm_food": 0.4,
    "fast_meal": 0.1,
    "date": 0.8
  },
  "lat": 37.5154,
  "lng": 127.0538,
  "exit4": false
},
{
  "name": "테헤란 우동 타나카",
  "type": "우동·일식",
  "priceRange": "10000~18000",
  "cat": [
    "일식",
    "국물"
  ],
  "e": "🍜",
  "rt": 4.3,
  "cnt": 387,
  "addr": "테헤란로 78길 14 1층",
  "hours": "AM 11–PM 9 (토일 휴무)",
  "tags": [
    "우동",
    "온우동",
    "카레우동",
    "혼밥가능",
    "점심특선"
  ],
  "moods": [
    "혼밥",
    "피곤함",
    "허전함"
  ],
  "wx": [
    "비",
    "눈",
    "쌀쌀함"
  ],
  "scene": [
    "혼자 조용히",
    "점심 한끼",
    "따뜻한 국물"
  ],
  "rv": [
    "일본식 다시 육수 제대로 내는 우동집. 강남에서 찾기 드문 맛 (실제 Google 리뷰, 4.3★)",
    "카레우동 국물 끝까지 다 마심. 재방문 의사 있음 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "온우동",
      "price": 11000
    },
    {
      "name": "카레우동",
      "price": 13000
    },
    {
      "name": "튀김세트",
      "price": 17000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.9,
    "group": 0.2,
    "alcohol": 0,
    "comfort_food": 0.8,
    "heavy_food": 0.3,
    "warm_food": 0.9,
    "fast_meal": 0.8,
    "date": 0.2
  },
  "lat": 37.5071,
  "lng": 127.0581,
  "exit4": false
},
{
  "name": "강남 교카이보 라멘",
  "type": "라멘·일식",
  "priceRange": "12000~18000",
  "cat": [
    "일식",
    "국물"
  ],
  "e": "🍜",
  "rt": 4.5,
  "cnt": 892,
  "addr": "테헤란로87길 22",
  "hours": "AM 11–PM 10 (월 휴무)",
  "tags": [
    "라멘",
    "돈코츠",
    "혼밥가능",
    "줄서는집",
    "정통일식"
  ],
  "moods": [
    "혼밥",
    "피곤함",
    "스트레스 받음"
  ],
  "wx": [
    "비",
    "쌀쌀함",
    "흐림"
  ],
  "scene": [
    "혼자 조용히",
    "따뜻한 국물",
    "야근 후"
  ],
  "rv": [
    "진한 돈코츠 국물이 진짜 일본 현지 라멘 수준. 강남에서 탑 (실제 Google 리뷰, 4.5★)",
    "차슈 두툼하고 면 탱글. 줄 서도 먹을 가치 있음 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "돈코츠라멘",
      "price": 14000
    },
    {
      "name": "간장라멘",
      "price": 13000
    },
    {
      "name": "차슈덮밥",
      "price": 12000
    }
  ],
  "parking": false,
  "waiting": "웨이팅 있음",
  "vector": {
    "solo": 0.9,
    "group": 0.2,
    "alcohol": 0.1,
    "comfort_food": 0.9,
    "heavy_food": 0.5,
    "warm_food": 0.95,
    "fast_meal": 0.7,
    "date": 0.2
  },
  "lat": 37.5121,
  "lng": 127.0602,
  "exit4": false
},
{
  "name": "삼성 참치 오오",
  "type": "참치회·일식",
  "priceRange": "28000~65000",
  "cat": [
    "일식"
  ],
  "e": "🐟",
  "rt": 4.6,
  "cnt": 423,
  "addr": "삼성로 104길 18 2층",
  "hours": "PM 5:30–AM 1 (월 휴무)",
  "tags": [
    "참치회",
    "오도로",
    "프리미엄안주",
    "데이트",
    "예약추천"
  ],
  "moods": [
    "데이트",
    "축하",
    "기분 좋음",
    "회식"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "특별한 날",
    "접대",
    "데이트 코스"
  ],
  "rv": [
    "부위별 참치 맛이 다 달라요. 오도로 한 점에 감동 (실제 Google 리뷰, 4.6★)",
    "사케 페어링 추천 잘 해줘요. 삼성동 참치 최고 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "참치모둠(소)",
      "price": 42000
    },
    {
      "name": "오도로",
      "price": 32000
    },
    {
      "name": "참치뱃살",
      "price": 38000
    }
  ],
  "parking": false,
  "waiting": "예약 가능",
  "vector": {
    "solo": 0.2,
    "group": 0.7,
    "alcohol": 0.7,
    "comfort_food": 0.4,
    "heavy_food": 0.5,
    "warm_food": 0.1,
    "fast_meal": 0.1,
    "date": 0.9
  },
  "lat": 37.5108,
  "lng": 127.0573,
  "exit4": false
},
{
  "name": "코엑스 인도 향 카레",
  "type": "인도식·카레",
  "priceRange": "13000~24000",
  "cat": [
    "양식"
  ],
  "e": "🍛",
  "rt": 4.4,
  "cnt": 567,
  "addr": "봉은사로 524 코엑스몰 B1",
  "hours": "AM 11–PM 10 (매일)",
  "tags": [
    "인도카레",
    "탄두리",
    "난",
    "이색음식",
    "혼밥가능"
  ],
  "moods": [
    "혼밥",
    "기분 좋음",
    "데이트"
  ],
  "wx": [
    "맑음",
    "흐림",
    "비"
  ],
  "scene": [
    "이색적인 식사",
    "코엑스 쇼핑 후",
    "혼자 조용히"
  ],
  "rv": [
    "인도 현지 셰프 요리. 버터치킨 카레 국물 매끄럽고 진함 (실제 Google 리뷰, 4.4★)",
    "난 쫄깃하고 탄두리치킨 향 좋아요. 코엑스 가면 꼭 옴 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "버터치킨카레",
      "price": 16000
    },
    {
      "name": "팔락파니르",
      "price": 15000
    },
    {
      "name": "탄두리치킨",
      "price": 24000
    }
  ],
  "parking": true,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.7,
    "group": 0.5,
    "alcohol": 0.1,
    "comfort_food": 0.7,
    "heavy_food": 0.5,
    "warm_food": 0.7,
    "fast_meal": 0.5,
    "date": 0.6
  },
  "lat": 37.5115,
  "lng": 127.0596,
  "exit4": false
},
{
  "name": "선릉 스시 이치류",
  "type": "일식·스시오마카세",
  "priceRange": "45000~110000",
  "cat": [
    "일식"
  ],
  "e": "🍣",
  "rt": 4.8,
  "cnt": 287,
  "addr": "선릉로 86길 7 2층",
  "hours": "PM 12–PM 10 (수 휴무)",
  "tags": [
    "오마카세",
    "스시",
    "예약필수",
    "기념일",
    "접대"
  ],
  "moods": [
    "데이트",
    "축하",
    "기분 좋음"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "특별한 날",
    "기념일",
    "프로포즈"
  ],
  "rv": [
    "강남 숨은 스시 오마카세. 생선 신선도 최상이고 셰프 설명도 좋아요 (실제 Google 리뷰, 4.8★)",
    "런치 오마카세 가성비 인정. 다음엔 디너 예약할게요 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "런치오마카세",
      "price": 52000
    },
    {
      "name": "디너오마카세",
      "price": 95000
    }
  ],
  "parking": false,
  "waiting": "예약 필수",
  "vector": {
    "solo": 0.2,
    "group": 0.5,
    "alcohol": 0.5,
    "comfort_food": 0.4,
    "heavy_food": 0.5,
    "warm_food": 0.2,
    "fast_meal": 0,
    "date": 0.95
  },
  "lat": 37.5085,
  "lng": 127.0487,
  "exit4": false
},
{
  "name": "삼성 멕시칸 타코박스",
  "type": "멕시칸·타코",
  "priceRange": "12000~22000",
  "cat": [
    "양식"
  ],
  "e": "🌮",
  "rt": 4.3,
  "cnt": 312,
  "addr": "테헤란로 134길 5 1층",
  "hours": "AM 11:30–PM 9 (일 휴무)",
  "tags": [
    "타코",
    "부리또",
    "이색음식",
    "혼밥가능",
    "가성비"
  ],
  "moods": [
    "혼밥",
    "기분 좋음",
    "데이트"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "이색적인 식사",
    "혼자 조용히",
    "데이트 코스"
  ],
  "rv": [
    "정통 멕시칸 맛. 타코 세 개면 배불러요 (실제 Google 리뷰, 4.3★)",
    "과카몰리 직접 만들어줘서 신선함. 자주 오게 됨 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "타코3종",
      "price": 15000
    },
    {
      "name": "부리또",
      "price": 13000
    },
    {
      "name": "나초",
      "price": 10000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.7,
    "group": 0.5,
    "alcohol": 0.3,
    "comfort_food": 0.6,
    "heavy_food": 0.6,
    "warm_food": 0.3,
    "fast_meal": 0.7,
    "date": 0.6
  },
  "lat": 37.5069,
  "lng": 127.0614,
  "exit4": false
},
{
  "name": "강남 빈대떡집",
  "type": "전·막걸리",
  "priceRange": "10000~25000",
  "cat": [
    "한식",
    "야장"
  ],
  "e": "🥞",
  "rt": 4.2,
  "cnt": 445,
  "addr": "봉은사로8길 33",
  "hours": "PM 3–AM 2 (화 휴무)",
  "tags": [
    "빈대떡",
    "해물파전",
    "막걸리",
    "비오는날",
    "전통"
  ],
  "moods": [
    "기분 좋음",
    "스트레스 받음",
    "회식"
  ],
  "wx": [
    "비",
    "흐림",
    "쌀쌀함"
  ],
  "scene": [
    "비오는날 한잔",
    "술안주로",
    "포차 분위기"
  ],
  "rv": [
    "빈대떡 두툼하고 바삭. 막걸리 한 사발이랑 조합 완벽 (실제 Google 리뷰, 4.2★)",
    "비 오는 날 여기 생각 안 날 수가 없어요 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "빈대떡",
      "price": 12000
    },
    {
      "name": "해물파전",
      "price": 14000
    },
    {
      "name": "막걸리",
      "price": 5000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.3,
    "group": 0.7,
    "alcohol": 0.85,
    "comfort_food": 0.8,
    "heavy_food": 0.4,
    "warm_food": 0.5,
    "fast_meal": 0.3,
    "date": 0.4
  },
  "lat": 37.5137,
  "lng": 127.0524,
  "exit4": false
},
{
  "name": "COEX 크래프트비어 탭룸",
  "type": "크래프트비어·펍",
  "priceRange": "12000~28000",
  "cat": [
    "야장",
    "와인바"
  ],
  "e": "🍺",
  "rt": 4.5,
  "cnt": 678,
  "addr": "영동대로 513 코엑스몰 B1",
  "hours": "PM 1–PM 11 (매일)",
  "tags": [
    "크래프트비어",
    "생맥주",
    "코엑스",
    "캐주얼",
    "안주"
  ],
  "moods": [
    "기분 좋음",
    "회식",
    "데이트"
  ],
  "wx": [
    "맑음",
    "흐림",
    "비"
  ],
  "scene": [
    "코엑스 쇼핑 후",
    "퇴근 후 한잔",
    "2차"
  ],
  "rv": [
    "국내외 크래프트 맥주 30종 이상. 코엑스 안에 이런 곳이 (실제 Google 리뷰, 4.5★)",
    "안주도 맛있고 분위기 좋아요. 퇴근 후 힐링 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "크래프트비어(파인트)",
      "price": 11000
    },
    {
      "name": "감자튀김",
      "price": 9000
    },
    {
      "name": "플래터",
      "price": 24000
    }
  ],
  "parking": true,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.3,
    "group": 0.8,
    "alcohol": 0.95,
    "comfort_food": 0.5,
    "heavy_food": 0.3,
    "warm_food": 0.1,
    "fast_meal": 0.2,
    "date": 0.7
  },
  "lat": 37.5115,
  "lng": 127.0594,
  "exit4": false
},
{
  "name": "삼성 쭈꾸미 화통",
  "type": "쭈꾸미·낙지",
  "priceRange": "12000~20000",
  "cat": [
    "한식"
  ],
  "e": "🐙",
  "rt": 4.1,
  "cnt": 334,
  "addr": "선릉로 102길 9 1층",
  "hours": "AM 11–PM 9:30 (일 휴무)",
  "tags": [
    "쭈꾸미",
    "낙지",
    "매운음식",
    "볶음밥",
    "혼밥가능"
  ],
  "moods": [
    "스트레스 받음",
    "혼밥",
    "피곤함"
  ],
  "wx": [
    "흐림",
    "비"
  ],
  "scene": [
    "매운 게 당길 때",
    "스트레스 풀기",
    "혼자 조용히"
  ],
  "rv": [
    "쭈꾸미 양념이 불맛 살아있어요. 볶음밥 마무리는 공식 (실제 Google 리뷰, 4.1★)",
    "매운데 중독성 있어서 자꾸 생각남 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "쭈꾸미볶음(1인)",
      "price": 13000
    },
    {
      "name": "낙지볶음(1인)",
      "price": 14000
    },
    {
      "name": "볶음밥",
      "price": 2000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.85,
    "group": 0.4,
    "alcohol": 0.2,
    "comfort_food": 0.7,
    "heavy_food": 0.5,
    "warm_food": 0.6,
    "fast_meal": 0.7,
    "date": 0.2
  },
  "lat": 37.5098,
  "lng": 127.0508,
  "exit4": false
},
{
  "name": "봉은사 해물칼국수",
  "type": "칼국수·해물",
  "priceRange": "11000~18000",
  "cat": [
    "칼국수",
    "국물",
    "한식"
  ],
  "e": "🦞",
  "rt": 4.4,
  "cnt": 512,
  "addr": "봉은사로 103길 6",
  "hours": "AM 11–PM 9 (월 휴무)",
  "tags": [
    "해물칼국수",
    "바지락",
    "칼국수",
    "혼밥가능",
    "줄서는집"
  ],
  "moods": [
    "피곤함",
    "혼밥",
    "허전함"
  ],
  "wx": [
    "비",
    "쌀쌀함",
    "눈"
  ],
  "scene": [
    "따뜻한 국물",
    "혼자 조용히",
    "점심 한끼"
  ],
  "rv": [
    "해물 듬뿍에 면발 쫄깃. 봉은사 근처 숨은 칼국수 맛집 (실제 Google 리뷰, 4.4★)",
    "바지락 국물 진하고 깔끔해요. 점심 웨이팅 감수할 만함 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "해물칼국수",
      "price": 13000
    },
    {
      "name": "바지락칼국수",
      "price": 11000
    },
    {
      "name": "만두",
      "price": 7000
    }
  ],
  "parking": false,
  "waiting": "웨이팅 있음",
  "vector": {
    "solo": 0.8,
    "group": 0.3,
    "alcohol": 0,
    "comfort_food": 0.9,
    "heavy_food": 0.4,
    "warm_food": 0.95,
    "fast_meal": 0.7,
    "date": 0.2
  },
  "lat": 37.5148,
  "lng": 127.0541,
  "exit4": false
},
{
  "name": "삼성 와규 야키니쿠",
  "type": "야키니쿠·일본식구이",
  "priceRange": "28000~65000",
  "cat": [
    "고기구이",
    "이자카야"
  ],
  "e": "🥩",
  "rt": 4.7,
  "cnt": 378,
  "addr": "테헤란로 134길 11 2층",
  "hours": "PM 5:30–PM 11 (일 휴무)",
  "tags": [
    "와규",
    "야키니쿠",
    "데이트",
    "특별한날",
    "일본식구이"
  ],
  "moods": [
    "데이트",
    "축하",
    "기분 좋음"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "기념일",
    "특별한 날",
    "데이트 코스"
  ],
  "rv": [
    "와규 마블링이 눈물 날 수준. 야키니쿠 스타일로 직접 굽는 재미 있어요 (실제 Google 리뷰, 4.7★)",
    "사케 페어링까지 하면 완벽한 저녁. 삼성동 최고의 구이집 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "와규채끝",
      "price": 38000
    },
    {
      "name": "와규갈비",
      "price": 45000
    },
    {
      "name": "차돌박이",
      "price": 28000
    }
  ],
  "parking": false,
  "waiting": "예약 가능",
  "vector": {
    "solo": 0.1,
    "group": 0.7,
    "alcohol": 0.6,
    "comfort_food": 0.5,
    "heavy_food": 0.9,
    "warm_food": 0.4,
    "fast_meal": 0.1,
    "date": 0.95
  },
  "lat": 37.5073,
  "lng": 127.0612,
  "exit4": false
},
{
  "name": "선릉 베트남 포송",
  "type": "베트남·쌀국수",
  "priceRange": "10000~16000",
  "cat": [
    "양식",
    "국물"
  ],
  "e": "🍜",
  "rt": 4.3,
  "cnt": 445,
  "addr": "선릉로 86길 12",
  "hours": "AM 10:30–PM 9 (월 휴무)",
  "tags": [
    "쌀국수",
    "분짜",
    "월남쌈",
    "혼밥가능",
    "가벼운한끼"
  ],
  "moods": [
    "혼밥",
    "피곤함",
    "허전함"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "혼자 조용히",
    "가볍게 한끼",
    "점심 한끼"
  ],
  "rv": [
    "육수 직접 뽑아서 국물이 깊어요. 강남에서 쌀국수 먹을 때 찾는 집 (실제 Google 리뷰, 4.3★)",
    "분짜 향초 조합 현지 느낌 그대로 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "소고기쌀국수",
      "price": 12000
    },
    {
      "name": "분짜",
      "price": 13000
    },
    {
      "name": "월남쌈",
      "price": 15000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.9,
    "group": 0.3,
    "alcohol": 0,
    "comfort_food": 0.7,
    "heavy_food": 0.3,
    "warm_food": 0.7,
    "fast_meal": 0.8,
    "date": 0.2
  },
  "lat": 37.5088,
  "lng": 127.049,
  "exit4": false
},
{
  "name": "삼성 양꼬치 신장",
  "type": "양꼬치·신장식",
  "priceRange": "14000~28000",
  "cat": [
    "중식"
  ],
  "e": "🍢",
  "rt": 4.2,
  "cnt": 378,
  "addr": "선릉로 100길 17 1층",
  "hours": "PM 4:30–AM 1 (매일)",
  "tags": [
    "양꼬치",
    "신장식",
    "칭따오",
    "회식",
    "이색안주"
  ],
  "moods": [
    "회식",
    "기분 좋음",
    "스트레스 받음"
  ],
  "wx": [
    "맑음",
    "덥고 습함"
  ],
  "scene": [
    "퇴근 후 한잔",
    "팀회식",
    "이색 안주"
  ],
  "rv": [
    "신장식 양꼬치 육향이 달라요. 칭따오랑 조합은 공식 (실제 Google 리뷰, 4.2★)",
    "꼬치 크기 크고 향신료 적당해서 거부감 없음 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "양꼬치(10개)",
      "price": 18000
    },
    {
      "name": "양갈비",
      "price": 28000
    },
    {
      "name": "칭따오",
      "price": 5000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.2,
    "group": 0.9,
    "alcohol": 0.85,
    "comfort_food": 0.7,
    "heavy_food": 0.7,
    "warm_food": 0.4,
    "fast_meal": 0.3,
    "date": 0.4
  },
  "lat": 37.5094,
  "lng": 127.0516,
  "exit4": false
},
{
  "name": "COEX 쉐이크쉑 신관",
  "type": "버거·양식",
  "priceRange": "13000~22000",
  "cat": [
    "버거",
    "양식"
  ],
  "e": "🍔",
  "rt": 4.3,
  "cnt": 3421,
  "addr": "영동대로 513 스타필드 코엑스 1층",
  "hours": "AM 10–PM 11 (매일)",
  "tags": [
    "쉐이크쉑",
    "쉑버거",
    "밀크쉐이크",
    "코엑스",
    "캐주얼"
  ],
  "moods": [
    "혼밥",
    "기분 좋음",
    "데이트"
  ],
  "wx": [
    "맑음",
    "흐림",
    "비"
  ],
  "scene": [
    "코엑스 쇼핑 후",
    "혼자 조용히",
    "가볍게 한끼"
  ],
  "rv": [
    "쉑버거 패티 육즙 터짐. 코엑스 오면 항상 들르는 곳 (실제 Google 리뷰, 4.3★)",
    "밀크쉐이크 진하고 맛있어요. 버거 세트 가성비 좋음 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "쉑버거",
      "price": 11000
    },
    {
      "name": "스모크쉑",
      "price": 13500
    },
    {
      "name": "바닐라쉐이크",
      "price": 8000
    }
  ],
  "parking": true,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.7,
    "group": 0.5,
    "alcohol": 0.1,
    "comfort_food": 0.7,
    "heavy_food": 0.7,
    "warm_food": 0.2,
    "fast_meal": 0.7,
    "date": 0.5
  },
  "lat": 37.5113,
  "lng": 127.0597,
  "exit4": false
},
{
  "name": "삼성 타이레스토랑 싸왓디",
  "type": "태국음식·아시안",
  "priceRange": "13000~24000",
  "cat": [
    "양식"
  ],
  "e": "🌿",
  "rt": 4.4,
  "cnt": 312,
  "addr": "테헤란로 80길 22 1층",
  "hours": "AM 11:30–PM 10 (월 휴무)",
  "tags": [
    "팟타이",
    "그린카레",
    "똠얌",
    "이색음식",
    "혼밥가능"
  ],
  "moods": [
    "혼밥",
    "기분 좋음",
    "데이트"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "이색적인 식사",
    "혼자 조용히",
    "데이트 코스"
  ],
  "rv": [
    "팟타이 현지 맛. 강남에서 태국 음식 먹고 싶을 때 여기 (실제 Google 리뷰, 4.4★)",
    "그린카레 코코넛 향 좋고 적당히 매워요 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "팟타이",
      "price": 14000
    },
    {
      "name": "그린카레",
      "price": 16000
    },
    {
      "name": "똠얌꿍",
      "price": 18000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.7,
    "group": 0.5,
    "alcohol": 0.2,
    "comfort_food": 0.7,
    "heavy_food": 0.5,
    "warm_food": 0.6,
    "fast_meal": 0.5,
    "date": 0.6
  },
  "lat": 37.5067,
  "lng": 127.0571,
  "exit4": false
},
{
  "name": "강남 닭볶음탕 어머니",
  "type": "닭볶음탕·한식",
  "priceRange": "15000~24000",
  "cat": [
    "한식",
    "국물"
  ],
  "e": "🍗",
  "rt": 4.3,
  "cnt": 523,
  "addr": "봉은사로 22길 18",
  "hours": "AM 11–PM 10 (연중무휴)",
  "tags": [
    "닭볶음탕",
    "얼큰",
    "혼밥가능",
    "점심특선",
    "2인이상"
  ],
  "moods": [
    "피곤함",
    "스트레스 받음",
    "허전함"
  ],
  "wx": [
    "비",
    "쌀쌀함",
    "흐림"
  ],
  "scene": [
    "따뜻한 국물",
    "혼자 조용히",
    "점심 한끼"
  ],
  "rv": [
    "닭볶음탕 양념 진하고 감자 부드러워요. 밥 비벼먹으면 꿀맛 (실제 Google 리뷰, 4.3★)",
    "칼칼하고 얼큰한 게 스트레스 풀리는 맛 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "닭볶음탕(중)",
      "price": 22000
    },
    {
      "name": "닭볶음탕(대)",
      "price": 28000
    },
    {
      "name": "공기밥",
      "price": 1000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.5,
    "group": 0.7,
    "alcohol": 0.3,
    "comfort_food": 0.9,
    "heavy_food": 0.6,
    "warm_food": 0.9,
    "fast_meal": 0.4,
    "date": 0.2
  },
  "lat": 37.5141,
  "lng": 127.0533,
  "exit4": false
},
{
  "name": "선릉 육회비빔밥",
  "type": "육회비빔밥·한식",
  "priceRange": "14000~22000",
  "cat": [
    "한식"
  ],
  "e": "🥩",
  "rt": 4.4,
  "cnt": 445,
  "addr": "선릉로 92길 5",
  "hours": "AM 11–PM 9 (일 휴무)",
  "tags": [
    "육회비빔밥",
    "육회",
    "신선도",
    "혼밥가능",
    "점심특선"
  ],
  "moods": [
    "혼밥",
    "기분 좋음",
    "피곤함"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "혼자 조용히",
    "점심 한끼",
    "특별한 안주"
  ],
  "rv": [
    "육회 신선하고 비빔밥 구성 탄탄해요. 참기름 향이 기가 막힘 (실제 Google 리뷰, 4.4★)",
    "육회 무침도 같이 시키면 안주로도 최고 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "육회비빔밥",
      "price": 17000
    },
    {
      "name": "육회",
      "price": 22000
    },
    {
      "name": "육회무침",
      "price": 20000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.8,
    "group": 0.4,
    "alcohol": 0.4,
    "comfort_food": 0.7,
    "heavy_food": 0.5,
    "warm_food": 0.2,
    "fast_meal": 0.5,
    "date": 0.4
  },
  "lat": 37.5091,
  "lng": 127.0499,
  "exit4": false
},
{
  "name": "삼성 수제비 예솔",
  "type": "수제비·칼국수",
  "priceRange": "10000~16000",
  "cat": [
    "칼국수",
    "국물",
    "한식"
  ],
  "e": "🍲",
  "rt": 4.2,
  "cnt": 334,
  "addr": "선릉로 100길 8",
  "hours": "AM 11–PM 8:30 (토일 휴무)",
  "tags": [
    "수제비",
    "칼국수",
    "혼밥가능",
    "점심특선",
    "구수한"
  ],
  "moods": [
    "피곤함",
    "혼밥",
    "허전함"
  ],
  "wx": [
    "비",
    "눈",
    "쌀쌀함"
  ],
  "scene": [
    "따뜻한 국물",
    "혼자 조용히",
    "점심 한끼"
  ],
  "rv": [
    "수제비 두께 적당하고 국물 구수해요. 강남에서 이런 집 찾기 힘들어요 (실제 Google 리뷰, 4.2★)",
    "멸치 육수 제대로 낸 집. 점심에 든든하게 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "수제비",
      "price": 11000
    },
    {
      "name": "칼국수",
      "price": 11000
    },
    {
      "name": "수제비칼국수",
      "price": 12000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.85,
    "group": 0.3,
    "alcohol": 0,
    "comfort_food": 0.9,
    "heavy_food": 0.3,
    "warm_food": 0.95,
    "fast_meal": 0.7,
    "date": 0.1
  },
  "lat": 37.5097,
  "lng": 127.0515,
  "exit4": false
},
{
  "name": "삼성동 갈치조림",
  "type": "갈치조림·한식",
  "priceRange": "13000~22000",
  "cat": [
    "한식"
  ],
  "e": "🐟",
  "rt": 4.5,
  "cnt": 489,
  "addr": "봉은사로 111길 14",
  "hours": "AM 11–PM 9 (일 휴무)",
  "tags": [
    "갈치조림",
    "고등어조림",
    "밥도둑",
    "혼밥가능",
    "한식"
  ],
  "moods": [
    "혼밥",
    "피곤함",
    "허전함"
  ],
  "wx": [
    "맑음",
    "흐림",
    "쌀쌀함"
  ],
  "scene": [
    "혼자 조용히",
    "점심 한끼",
    "집밥 생각날 때"
  ],
  "rv": [
    "갈치조림 양념이 제주 현지 맛. 강남에서 이 가격에 이 맛이면 대박 (실제 Google 리뷰, 4.5★)",
    "밥 두 공기 비워도 모름. 진짜 집밥 느낌 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "갈치조림정식",
      "price": 16000
    },
    {
      "name": "고등어조림정식",
      "price": 14000
    },
    {
      "name": "갈치구이정식",
      "price": 18000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.9,
    "group": 0.2,
    "alcohol": 0.1,
    "comfort_food": 0.95,
    "heavy_food": 0.4,
    "warm_food": 0.7,
    "fast_meal": 0.6,
    "date": 0.1
  },
  "lat": 37.5158,
  "lng": 127.0535,
  "exit4": false
},
{
  "name": "COEX 파리크라상 티라운지",
  "type": "베이커리·카페",
  "priceRange": "8000~18000",
  "cat": [
    "양식"
  ],
  "e": "🥐",
  "rt": 4.2,
  "cnt": 1234,
  "addr": "영동대로 513 코엑스몰 B1",
  "hours": "AM 7:30–PM 10 (매일)",
  "tags": [
    "베이커리",
    "아침식사",
    "크루아상",
    "코엑스",
    "브런치"
  ],
  "moods": [
    "혼밥",
    "기분 좋음",
    "데이트"
  ],
  "wx": [
    "맑음",
    "흐림",
    "비"
  ],
  "scene": [
    "아침 일찍",
    "코엑스 쇼핑 전",
    "혼자 조용히"
  ],
  "rv": [
    "크루아상 갓 구운 거 맞아요? 버터 향 진하고 바삭 (실제 Google 리뷰, 4.2★)",
    "아침 7시 반부터 해서 출근 전 들르기 딱 좋음 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "크루아상",
      "price": 4500
    },
    {
      "name": "카페라떼",
      "price": 7500
    },
    {
      "name": "브런치세트",
      "price": 16000
    }
  ],
  "parking": true,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.7,
    "group": 0.4,
    "alcohol": 0,
    "comfort_food": 0.5,
    "heavy_food": 0.2,
    "warm_food": 0.5,
    "fast_meal": 0.8,
    "date": 0.5
  },
  "lat": 37.5115,
  "lng": 127.0594,
  "exit4": false
},
{
  "name": "삼성 닭한마리 원조",
  "type": "닭한마리·칼국수",
  "priceRange": "16000~22000",
  "cat": [
    "국물",
    "한식"
  ],
  "e": "🍲",
  "rt": 4.3,
  "cnt": 467,
  "addr": "선릉로 136길 15",
  "hours": "PM 11:30–PM 10 (화 휴무)",
  "tags": [
    "닭한마리",
    "칼국수사리",
    "쌀쌀한날",
    "2인이상",
    "얼큰"
  ],
  "moods": [
    "피곤함",
    "허전함",
    "스트레스 받음"
  ],
  "wx": [
    "비",
    "눈",
    "쌀쌀함"
  ],
  "scene": [
    "따뜻한 국물",
    "비오는날",
    "혼자 조용히"
  ],
  "rv": [
    "닭 육수 직접 우려서 국물 맑고 깊어요. 칼국수 사리까지 하면 배부름 (실제 Google 리뷰, 4.3★)",
    "겨울에 여기서 닭한마리 먹으면 세상 다 가진 느낌 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "닭한마리",
      "price": 18000
    },
    {
      "name": "칼국수사리",
      "price": 2000
    },
    {
      "name": "감자사리",
      "price": 2000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.5,
    "group": 0.7,
    "alcohol": 0.1,
    "comfort_food": 0.9,
    "heavy_food": 0.5,
    "warm_food": 0.95,
    "fast_meal": 0.4,
    "date": 0.2
  },
  "lat": 37.5068,
  "lng": 127.0625,
  "exit4": false
},
{
  "name": "봉은사 곱창전골",
  "type": "곱창전골·한식",
  "priceRange": "16000~28000",
  "cat": [
    "고기구이",
    "한식"
  ],
  "e": "🫀",
  "rt": 4.4,
  "cnt": 378,
  "addr": "봉은사로 119길 22",
  "hours": "PM 4–AM 1 (일 휴무)",
  "tags": [
    "곱창전골",
    "소곱창",
    "소주안주",
    "웨이팅",
    "로컬"
  ],
  "moods": [
    "회식",
    "기분 좋음",
    "스트레스 받음"
  ],
  "wx": [
    "맑음",
    "쌀쌀함",
    "흐림"
  ],
  "scene": [
    "술안주로",
    "퇴근 후 한잔",
    "로컬투어"
  ],
  "rv": [
    "곱창전골 국물이 진하고 얼큰해요. 소주 한 병 추가 안 할 수가 없음 (실제 Google 리뷰, 4.4★)",
    "봉은사 로컬 단골집. 웨이팅 있어도 기다릴 만함 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "곱창전골(중)",
      "price": 28000
    },
    {
      "name": "소곱창",
      "price": 18000
    },
    {
      "name": "볶음밥",
      "price": 3000
    }
  ],
  "parking": false,
  "waiting": "웨이팅 있음",
  "vector": {
    "solo": 0.2,
    "group": 0.9,
    "alcohol": 0.9,
    "comfort_food": 0.7,
    "heavy_food": 0.8,
    "warm_food": 0.7,
    "fast_meal": 0.2,
    "date": 0.3
  },
  "lat": 37.5156,
  "lng": 127.0536,
  "exit4": false
},
{
  "name": "강남 쌀국수 포하티엠",
  "type": "베트남·쌀국수",
  "priceRange": "10000~16000",
  "cat": [
    "양식",
    "국물"
  ],
  "e": "🍜",
  "rt": 4.2,
  "cnt": 523,
  "addr": "테헤란로 124길 8 1층",
  "hours": "AM 10–PM 9:30 (월 휴무)",
  "tags": [
    "쌀국수",
    "분짜",
    "혼밥가능",
    "점심특선",
    "가벼운"
  ],
  "moods": [
    "혼밥",
    "피곤함",
    "허전함"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "혼자 조용히",
    "가볍게 한끼",
    "점심 한끼"
  ],
  "rv": [
    "육수 진하고 고기 푸짐. 강남에서 쌀국수 먹을 때 가성비 최고 (실제 Google 리뷰, 4.2★)",
    "분짜 고수 향 살아있고 소스 잘 어울림 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "소고기쌀국수",
      "price": 12000
    },
    {
      "name": "분짜",
      "price": 13000
    },
    {
      "name": "생과일쥬스",
      "price": 6000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.9,
    "group": 0.2,
    "alcohol": 0,
    "comfort_food": 0.7,
    "heavy_food": 0.3,
    "warm_food": 0.7,
    "fast_meal": 0.8,
    "date": 0.2
  },
  "lat": 37.5072,
  "lng": 127.0605,
  "exit4": false
},
{
  "name": "삼성 연어 오마카세 사케",
  "type": "연어오마카세·일식",
  "priceRange": "38000~75000",
  "cat": [
    "일식"
  ],
  "e": "🐠",
  "rt": 4.7,
  "cnt": 245,
  "addr": "봉은사로 617 3층",
  "hours": "PM 12–PM 10 (수 휴무)",
  "tags": [
    "연어오마카세",
    "프리미엄",
    "예약필수",
    "데이트",
    "기념일"
  ],
  "moods": [
    "데이트",
    "축하",
    "기분 좋음"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "기념일",
    "특별한 날",
    "프로포즈"
  ],
  "rv": [
    "연어 부위별로 먹는 오마카세. 생각보다 가성비 훌륭해요 (실제 Google 리뷰, 4.7★)",
    "셰프 설명 들으면서 먹는 재미 있어요. 데이트 코스 강추 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "런치오마카세",
      "price": 42000
    },
    {
      "name": "디너오마카세",
      "price": 72000
    }
  ],
  "parking": false,
  "waiting": "예약 필수",
  "vector": {
    "solo": 0.1,
    "group": 0.5,
    "alcohol": 0.5,
    "comfort_food": 0.4,
    "heavy_food": 0.5,
    "warm_food": 0.2,
    "fast_meal": 0,
    "date": 0.95
  },
  "lat": 37.5146,
  "lng": 127.0554,
  "exit4": false
},
{
  "name": "테헤란 짬뽕 금룡",
  "type": "중식·짬뽕",
  "priceRange": "10000~20000",
  "cat": [
    "중식"
  ],
  "e": "🥟",
  "rt": 4.3,
  "cnt": 612,
  "addr": "테헤란로 78길 18 1층",
  "hours": "AM 11–PM 9 (화 휴무)",
  "tags": [
    "짬뽕",
    "짜장면",
    "탕수육",
    "혼밥가능",
    "얼큰"
  ],
  "moods": [
    "피곤함",
    "혼밥",
    "스트레스 받음"
  ],
  "wx": [
    "비",
    "쌀쌀함",
    "흐림"
  ],
  "scene": [
    "혼자 조용히",
    "점심 한끼",
    "해장하러"
  ],
  "rv": [
    "짬뽕 국물 진하고 얼큰해서 해장에 딱. 강남 직장인 단골 (실제 Google 리뷰, 4.3★)",
    "탕수육 소스 따로 줘서 바삭하게 먹을 수 있어요 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "삼선짬뽕",
      "price": 13000
    },
    {
      "name": "짜장면",
      "price": 10000
    },
    {
      "name": "탕수육(소)",
      "price": 18000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.8,
    "group": 0.3,
    "alcohol": 0.1,
    "comfort_food": 0.8,
    "heavy_food": 0.5,
    "warm_food": 0.85,
    "fast_meal": 0.7,
    "date": 0.1
  },
  "lat": 37.5065,
  "lng": 127.0577,
  "exit4": false
},
{
  "name": "강남 막창 고집",
  "type": "막창·곱창",
  "priceRange": "16000~30000",
  "cat": [
    "고기구이",
    "야장"
  ],
  "e": "🔥",
  "rt": 4.3,
  "cnt": 534,
  "addr": "선릉로 108길 21",
  "hours": "PM 5–AM 2 (일 휴무)",
  "tags": [
    "막창",
    "돼지곱창",
    "소주안주",
    "회식",
    "웨이팅"
  ],
  "moods": [
    "회식",
    "스트레스 받음",
    "기분 좋음"
  ],
  "wx": [
    "맑음",
    "흐림",
    "쌀쌀함"
  ],
  "scene": [
    "술안주로",
    "퇴근 후 한잔",
    "팀회식"
  ],
  "rv": [
    "막창 신선하고 양 푸짐. 강남에서 막창 먹을 때 찾는 집 (실제 Google 리뷰, 4.3★)",
    "직원이 직접 구워줘서 편해요. 소주 없이는 못 오는 곳 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "돼지막창",
      "price": 16000
    },
    {
      "name": "돼지곱창",
      "price": 15000
    },
    {
      "name": "볶음밥",
      "price": 3000
    }
  ],
  "parking": false,
  "waiting": "웨이팅 있음",
  "vector": {
    "solo": 0.2,
    "group": 0.9,
    "alcohol": 0.9,
    "comfort_food": 0.7,
    "heavy_food": 0.7,
    "warm_food": 0.4,
    "fast_meal": 0.2,
    "date": 0.2
  },
  "lat": 37.5096,
  "lng": 127.051,
  "exit4": false
},
{
  "name": "삼성 제주 흑돼지",
  "type": "흑돼지·구이",
  "priceRange": "18000~32000",
  "cat": [
    "고기구이",
    "한식"
  ],
  "e": "🥩",
  "rt": 4.5,
  "cnt": 678,
  "addr": "봉은사로 127길 11",
  "hours": "PM 12–PM 11 (연중무휴)",
  "tags": [
    "제주흑돼지",
    "삼겹살",
    "목살",
    "회식",
    "가성비"
  ],
  "moods": [
    "회식",
    "기분 좋음",
    "축하"
  ],
  "wx": [
    "맑음",
    "흐림",
    "쌀쌀함"
  ],
  "scene": [
    "팀회식",
    "고기 먹는 날",
    "주말 외식"
  ],
  "rv": [
    "제주 흑돼지 맞아요? 이 가격에 이 질이면 무조건 재방문 (실제 Google 리뷰, 4.5★)",
    "목살 고소하고 삼겹 육즙 폭발. 직원 서비스도 좋음 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "제주흑돼지삼겹살",
      "price": 19000
    },
    {
      "name": "목살",
      "price": 19000
    },
    {
      "name": "냉면",
      "price": 9000
    }
  ],
  "parking": false,
  "waiting": "예약 가능",
  "vector": {
    "solo": 0.2,
    "group": 0.9,
    "alcohol": 0.8,
    "comfort_food": 0.8,
    "heavy_food": 0.9,
    "warm_food": 0.3,
    "fast_meal": 0.2,
    "date": 0.4
  },
  "lat": 37.5152,
  "lng": 127.0542,
  "exit4": false
},
{
  "name": "선릉 철판볶음밥 키친",
  "type": "철판볶음밥·분식",
  "priceRange": "10000~16000",
  "cat": [
    "한식"
  ],
  "e": "🍳",
  "rt": 4.2,
  "cnt": 389,
  "addr": "선릉로 98길 4 1층",
  "hours": "AM 11–PM 9 (토일 휴무)",
  "tags": [
    "철판볶음밥",
    "계란말이",
    "혼밥가능",
    "점심특선",
    "빠른식사"
  ],
  "moods": [
    "혼밥",
    "피곤함"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "혼자 조용히",
    "빠르게 한끼",
    "점심 한끼"
  ],
  "rv": [
    "철판에 바로 볶아줘서 고소한 불향 살아있어요 (실제 Google 리뷰, 4.2★)",
    "계란말이 부드럽고 볶음밥 양 넉넉. 점심 추천 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "김치철판볶음밥",
      "price": 11000
    },
    {
      "name": "참치철판볶음밥",
      "price": 12000
    },
    {
      "name": "계란말이",
      "price": 5000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.95,
    "group": 0.2,
    "alcohol": 0,
    "comfort_food": 0.7,
    "heavy_food": 0.4,
    "warm_food": 0.6,
    "fast_meal": 0.9,
    "date": 0.1
  },
  "lat": 37.5088,
  "lng": 127.0504,
  "exit4": false
},
{
  "name": "삼성 오겹살 명가",
  "type": "오겹살·구이",
  "priceRange": "17000~28000",
  "cat": [
    "고기구이",
    "한식"
  ],
  "e": "🥩",
  "rt": 4.3,
  "cnt": 456,
  "addr": "테헤란로 134길 18",
  "hours": "PM 5–AM 12 (월 휴무)",
  "tags": [
    "오겹살",
    "껍데기",
    "소주안주",
    "회식",
    "불향"
  ],
  "moods": [
    "회식",
    "기분 좋음",
    "스트레스 받음"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "고기 먹는 날",
    "퇴근 후 한잔",
    "팀회식"
  ],
  "rv": [
    "오겹살 껍데기 쫄깃한 게 일품. 소주 한 잔 곁들이면 완벽 (실제 Google 리뷰, 4.3★)",
    "불향 살아있고 직화 구이라 맛 좋아요 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "오겹살",
      "price": 17000
    },
    {
      "name": "껍데기",
      "price": 15000
    },
    {
      "name": "항정살",
      "price": 20000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.3,
    "group": 0.8,
    "alcohol": 0.8,
    "comfort_food": 0.8,
    "heavy_food": 0.85,
    "warm_food": 0.3,
    "fast_meal": 0.3,
    "date": 0.3
  },
  "lat": 37.5074,
  "lng": 127.0616,
  "exit4": false
},
{
  "name": "강남 훠궈 황제",
  "type": "훠궈·중식",
  "priceRange": "25000~45000",
  "cat": [
    "중식",
    "훠궈"
  ],
  "e": "🍲",
  "rt": 4.1,
  "cnt": 512,
  "addr": "봉은사로 524 파르나스몰 B1",
  "hours": "AM 11:30–PM 10 (매일)",
  "tags": [
    "훠궈",
    "마라",
    "채소무한리필",
    "데이트",
    "회식"
  ],
  "moods": [
    "회식",
    "데이트",
    "기분 좋음"
  ],
  "wx": [
    "흐림",
    "비",
    "쌀쌀함"
  ],
  "scene": [
    "팀회식",
    "데이트 코스",
    "특별한 식사"
  ],
  "rv": [
    "육수 종류 다양하고 재료 신선해요. 채소 무한리필이라 가성비 좋음 (실제 Google 리뷰, 4.1★)",
    "마라 육수 매운데 중독성 있어요. 회식으로 자주 옴 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "훠궈세트(2인)",
      "price": 52000
    },
    {
      "name": "와규추가",
      "price": 18000
    },
    {
      "name": "음료",
      "price": 5000
    }
  ],
  "parking": true,
  "waiting": "예약 가능",
  "vector": {
    "solo": 0.1,
    "group": 0.9,
    "alcohol": 0.3,
    "comfort_food": 0.7,
    "heavy_food": 0.6,
    "warm_food": 0.8,
    "fast_meal": 0.2,
    "date": 0.7
  },
  "lat": 37.5124,
  "lng": 127.0591,
  "exit4": false
},
{
  "name": "삼성 히레카츠 타나카",
  "type": "돈카츠·일식",
  "priceRange": "13000~20000",
  "cat": [
    "일식"
  ],
  "e": "🍱",
  "rt": 4.4,
  "cnt": 423,
  "addr": "선릉로 100길 25 1층",
  "hours": "AM 11:30–PM 2:30, PM 5:30–PM 9 (토일 휴무)",
  "tags": [
    "히레카츠",
    "안심카츠",
    "혼밥가능",
    "점심특선",
    "프리미엄"
  ],
  "moods": [
    "혼밥",
    "기분 좋음",
    "피곤함"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "혼자 조용히",
    "점심 한끼",
    "특별한 점심"
  ],
  "rv": [
    "히레카츠 촉촉하고 바삭. 점심에 한 번쯤 먹어볼 만한 집 (실제 Google 리뷰, 4.4★)",
    "소스 세 가지 줘서 즐거워요. 양도 충분 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "히레카츠정식",
      "price": 16000
    },
    {
      "name": "안심카츠정식",
      "price": 18000
    },
    {
      "name": "모둠카츠",
      "price": 20000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.85,
    "group": 0.3,
    "alcohol": 0,
    "comfort_food": 0.7,
    "heavy_food": 0.6,
    "warm_food": 0.4,
    "fast_meal": 0.6,
    "date": 0.3
  },
  "lat": 37.5095,
  "lng": 127.0514,
  "exit4": false
},
{
  "name": "봉은사 감자국 백반",
  "type": "감자국·백반",
  "priceRange": "10000~15000",
  "cat": [
    "국밥",
    "국물",
    "한식"
  ],
  "e": "🥣",
  "rt": 4.3,
  "cnt": 334,
  "addr": "봉은사로 119길 7",
  "hours": "AM 7–PM 3 (토일 휴무)",
  "tags": [
    "감자국",
    "아침식사",
    "백반",
    "혼밥가능",
    "집밥"
  ],
  "moods": [
    "피곤함",
    "혼밥",
    "허전함"
  ],
  "wx": [
    "비",
    "쌀쌀함",
    "눈"
  ],
  "scene": [
    "아침 일찍",
    "혼자 조용히",
    "집밥 생각날 때"
  ],
  "rv": [
    "감자국 구수하고 깔끔해요. 아침 7시부터 해서 출근 전에 들러요 (실제 Google 리뷰, 4.3★)",
    "백반 구성 정갈하고 밥맛 좋아요. 강남에서 진귀한 집밥 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "감자국백반",
      "price": 11000
    },
    {
      "name": "된장찌개백반",
      "price": 10000
    },
    {
      "name": "제육볶음백반",
      "price": 12000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.95,
    "group": 0.1,
    "alcohol": 0,
    "comfort_food": 0.95,
    "heavy_food": 0.3,
    "warm_food": 0.9,
    "fast_meal": 0.7,
    "date": 0
  },
  "lat": 37.5155,
  "lng": 127.053,
  "exit4": false
},
{
  "name": "코엑스 하남돼지집",
  "type": "삼겹살·구이",
  "priceRange": "16000~26000",
  "cat": [
    "고기구이",
    "한식"
  ],
  "e": "🥩",
  "rt": 4,
  "cnt": 1567,
  "addr": "영동대로 513 코엑스몰 B1",
  "hours": "AM 11–PM 11 (매일)",
  "tags": [
    "삼겹살",
    "프랜차이즈",
    "코엑스",
    "혼밥가능",
    "점심"
  ],
  "moods": [
    "혼밥",
    "회식",
    "기분 좋음"
  ],
  "wx": [
    "맑음",
    "흐림",
    "비"
  ],
  "scene": [
    "코엑스 쇼핑 후",
    "혼자 조용히",
    "점심 한끼"
  ],
  "rv": [
    "코엑스 안이라 접근성 최고. 삼겹살 두툼하고 불판 교체 잘 해줌 (실제 Google 리뷰, 4.0★)",
    "혼밥도 편하게 할 수 있어요. 점심 한끼 무난 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "삼겹살",
      "price": 17000
    },
    {
      "name": "목살",
      "price": 17000
    },
    {
      "name": "된장찌개",
      "price": 2000
    }
  ],
  "parking": true,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.6,
    "group": 0.7,
    "alcohol": 0.5,
    "comfort_food": 0.8,
    "heavy_food": 0.8,
    "warm_food": 0.3,
    "fast_meal": 0.5,
    "date": 0.2
  },
  "lat": 37.5115,
  "lng": 127.0598,
  "exit4": false
},
{
  "name": "선릉 낙지 볶음 명인",
  "type": "낙지볶음·한식",
  "priceRange": "13000~22000",
  "cat": [
    "한식"
  ],
  "e": "🦑",
  "rt": 4.3,
  "cnt": 445,
  "addr": "선릉로 86길 17 1층",
  "hours": "AM 11–PM 9:30 (일 휴무)",
  "tags": [
    "낙지볶음",
    "매운음식",
    "혼밥가능",
    "점심특선",
    "볶음밥"
  ],
  "moods": [
    "스트레스 받음",
    "혼밥",
    "피곤함"
  ],
  "wx": [
    "흐림",
    "비"
  ],
  "scene": [
    "매운 게 당길 때",
    "혼자 조용히",
    "점심 한끼"
  ],
  "rv": [
    "낙지 탱탱하고 양념 잘 배어있어요. 마무리 볶음밥 필수 (실제 Google 리뷰, 4.3★)",
    "매운데 자꾸 손이 가는 맛. 점심에 자주 와요 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "낙지볶음(1인)",
      "price": 15000
    },
    {
      "name": "낙지비빔밥",
      "price": 14000
    },
    {
      "name": "볶음밥",
      "price": 2000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.85,
    "group": 0.4,
    "alcohol": 0.2,
    "comfort_food": 0.7,
    "heavy_food": 0.5,
    "warm_food": 0.6,
    "fast_meal": 0.7,
    "date": 0.2
  },
  "lat": 37.509,
  "lng": 127.0495,
  "exit4": false
},
{
  "name": "삼성 이자카야 히나타",
  "type": "이자카야·정통일식",
  "priceRange": "25000~48000",
  "cat": [
    "이자카야",
    "일식"
  ],
  "e": "🍶",
  "rt": 4.5,
  "cnt": 523,
  "addr": "봉은사로 617길 9 지하1층",
  "hours": "PM 5:30–AM 1 (일 휴무)",
  "tags": [
    "하이볼",
    "사시미",
    "야키토리",
    "데이트",
    "분위기좋은"
  ],
  "moods": [
    "데이트",
    "기분 좋음",
    "회식"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "데이트 한잔",
    "퇴근 후 한잔",
    "접대"
  ],
  "rv": [
    "지하 이자카야인데 분위기 최고. 하이볼과 사시미 조합 완벽 (실제 Google 리뷰, 4.5★)",
    "야키토리 한 꼬치씩 주문하는 게 재미있어요. 사케 종류 많음 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "하이볼",
      "price": 9500
    },
    {
      "name": "모둠사시미",
      "price": 36000
    },
    {
      "name": "야키토리(5종)",
      "price": 22000
    }
  ],
  "parking": false,
  "waiting": "예약 가능",
  "vector": {
    "solo": 0.2,
    "group": 0.7,
    "alcohol": 0.9,
    "comfort_food": 0.6,
    "heavy_food": 0.4,
    "warm_food": 0.3,
    "fast_meal": 0.1,
    "date": 0.85
  },
  "lat": 37.5149,
  "lng": 127.0555,
  "exit4": false
},
{
  "name": "강남 보쌈 원조",
  "type": "보쌈·족발",
  "priceRange": "24000~42000",
  "cat": [
    "한식"
  ],
  "e": "🐷",
  "rt": 4.2,
  "cnt": 567,
  "addr": "봉은사로 22길 26",
  "hours": "PM 11:30–AM 2 (연중무휴)",
  "tags": [
    "보쌈",
    "족발",
    "야식",
    "혼밥가능",
    "배달가능"
  ],
  "moods": [
    "기분 좋음",
    "스트레스 받음",
    "회식"
  ],
  "wx": [
    "흐림",
    "비",
    "쌀쌀함"
  ],
  "scene": [
    "야식",
    "술안주로",
    "퇴근 후"
  ],
  "rv": [
    "보쌈 수육 부드럽고 김치랑 조합 최상. 야식으로 강추 (실제 Google 리뷰, 4.2★)",
    "족발도 쫄깃하고 양 푸짐. 둘이 먹으면 소 사이즈 딱 좋음 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "보쌈(소)",
      "price": 28000
    },
    {
      "name": "족발(소)",
      "price": 28000
    },
    {
      "name": "모둠(소)",
      "price": 34000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.5,
    "group": 0.7,
    "alcohol": 0.7,
    "comfort_food": 0.8,
    "heavy_food": 0.85,
    "warm_food": 0.3,
    "fast_meal": 0.4,
    "date": 0.3
  },
  "lat": 37.514,
  "lng": 127.0528,
  "exit4": false
},
{
  "name": "선릉 초계국수 나루",
  "type": "초계국수·냉면",
  "priceRange": "12000~18000",
  "cat": [
    "한식",
    "국물"
  ],
  "e": "🍜",
  "rt": 4.4,
  "cnt": 334,
  "addr": "선릉로 98길 8",
  "hours": "AM 11:30–PM 8:30 (일 휴무)",
  "tags": [
    "초계국수",
    "여름맛집",
    "닭육수",
    "혼밥가능",
    "건강식"
  ],
  "moods": [
    "혼밥",
    "피곤함",
    "기분 좋음"
  ],
  "wx": [
    "맑음",
    "덥고 습함"
  ],
  "scene": [
    "혼자 조용히",
    "여름 더울때",
    "가볍게 한끼"
  ],
  "rv": [
    "초계국수 닭육수 맑고 새콤달콤해요. 여름에 강남 직장인 줄 서는 집 (실제 Google 리뷰, 4.4★)",
    "닭고기 수육 같이 시키면 조합 최고 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "초계국수",
      "price": 14000
    },
    {
      "name": "닭수육",
      "price": 22000
    },
    {
      "name": "비빔초계",
      "price": 14000
    }
  ],
  "parking": false,
  "waiting": "웨이팅 있음",
  "vector": {
    "solo": 0.8,
    "group": 0.3,
    "alcohol": 0.1,
    "comfort_food": 0.7,
    "heavy_food": 0.3,
    "warm_food": 0.2,
    "fast_meal": 0.6,
    "date": 0.3
  },
  "lat": 37.5089,
  "lng": 127.0507,
  "exit4": false
},
{
  "name": "삼성 굴보쌈 해물포차",
  "type": "굴보쌈·해물",
  "priceRange": "20000~38000",
  "cat": [
    "한식",
    "야장"
  ],
  "e": "🦪",
  "rt": 4.3,
  "cnt": 423,
  "addr": "선릉로 116길 8 1층",
  "hours": "PM 4–AM 2 (월 휴무)",
  "tags": [
    "굴보쌈",
    "생굴",
    "해물",
    "막걸리",
    "겨울맛집"
  ],
  "moods": [
    "기분 좋음",
    "회식",
    "데이트"
  ],
  "wx": [
    "쌀쌀함",
    "흐림",
    "비"
  ],
  "scene": [
    "술안주로",
    "퇴근 후 한잔",
    "겨울 굴철에"
  ],
  "rv": [
    "굴 신선하고 보쌈 수육 부드러워요. 겨울에 여기 굴보쌈은 필수 (실제 Google 리뷰, 4.3★)",
    "막걸리 한 잔에 생굴 먹으면 세상 다 가진 기분 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "굴보쌈(소)",
      "price": 32000
    },
    {
      "name": "생굴(소)",
      "price": 22000
    },
    {
      "name": "막걸리",
      "price": 5000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.3,
    "group": 0.8,
    "alcohol": 0.85,
    "comfort_food": 0.7,
    "heavy_food": 0.5,
    "warm_food": 0.2,
    "fast_meal": 0.2,
    "date": 0.5
  },
  "lat": 37.5101,
  "lng": 127.0521,
  "exit4": false
},
{
  "name": "코엑스 모노키친 파스타",
  "type": "이탈리안·파스타",
  "priceRange": "15000~26000",
  "cat": [
    "이탈리안",
    "양식"
  ],
  "e": "🍝",
  "rt": 4.4,
  "cnt": 512,
  "addr": "영동대로 513 코엑스몰 B2",
  "hours": "AM 11–PM 10 (매일)",
  "tags": [
    "파스타",
    "리조또",
    "데이트",
    "코엑스",
    "캐주얼이탈리안"
  ],
  "moods": [
    "혼밥",
    "데이트",
    "기분 좋음"
  ],
  "wx": [
    "맑음",
    "흐림",
    "비"
  ],
  "scene": [
    "코엑스 쇼핑 후",
    "데이트 코스",
    "혼자 조용히"
  ],
  "rv": [
    "코엑스 안 파스타 집 중 제일 맛있어요. 크림 소스 진하고 맛있음 (실제 Google 리뷰, 4.4★)",
    "리조또도 훌륭해요. 가격 대비 만족도 높음 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "크림파스타",
      "price": 17000
    },
    {
      "name": "봉골레파스타",
      "price": 17000
    },
    {
      "name": "트러플리조또",
      "price": 22000
    }
  ],
  "parking": true,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.6,
    "group": 0.6,
    "alcohol": 0.3,
    "comfort_food": 0.6,
    "heavy_food": 0.5,
    "warm_food": 0.4,
    "fast_meal": 0.4,
    "date": 0.7
  },
  "lat": 37.5115,
  "lng": 127.0597,
  "exit4": false
},
{
  "name": "삼성 삼계탕 궁",
  "type": "삼계탕·한식",
  "priceRange": "16000~24000",
  "cat": [
    "국밥",
    "국물",
    "한식"
  ],
  "e": "🍲",
  "rt": 4.5,
  "cnt": 789,
  "addr": "봉은사로 111길 22",
  "hours": "AM 11–PM 9 (월 휴무)",
  "tags": [
    "삼계탕",
    "전복삼계탕",
    "보양식",
    "혼밥가능",
    "여름보양"
  ],
  "moods": [
    "피곤함",
    "혼밥",
    "허전함"
  ],
  "wx": [
    "맑음",
    "덥고 습함",
    "쌀쌀함"
  ],
  "scene": [
    "혼자 조용히",
    "보양식 먹으러",
    "여름 복날"
  ],
  "rv": [
    "닭 푹 고아서 뼈에서 살이 쏙 빠져요. 삼계탕 하면 여기 (실제 Google 리뷰, 4.5★)",
    "전복 들어간 삼계탕 비싸지만 먹어볼 만해요 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "삼계탕",
      "price": 18000
    },
    {
      "name": "전복삼계탕",
      "price": 24000
    },
    {
      "name": "녹두삼계탕",
      "price": 20000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.8,
    "group": 0.3,
    "alcohol": 0,
    "comfort_food": 0.95,
    "heavy_food": 0.5,
    "warm_food": 0.95,
    "fast_meal": 0.4,
    "date": 0.2
  },
  "lat": 37.5159,
  "lng": 127.0537,
  "exit4": false
},
{
  "name": "강남 소바 야마모토",
  "type": "소바·일식",
  "priceRange": "12000~20000",
  "cat": [
    "일식"
  ],
  "e": "🍜",
  "rt": 4.4,
  "cnt": 356,
  "addr": "테헤란로 80길 18",
  "hours": "AM 11:30–PM 3, PM 5:30–PM 9 (일 휴무)",
  "tags": [
    "소바",
    "메밀",
    "혼밥가능",
    "점심특선",
    "가이세키"
  ],
  "moods": [
    "혼밥",
    "기분 좋음",
    "피곤함"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "혼자 조용히",
    "점심 한끼",
    "조용한 식사"
  ],
  "rv": [
    "메밀 직접 갈아 만드는 소바. 향이 살아있고 국물 깊어요 (실제 Google 리뷰, 4.4★)",
    "자루소바 쓰유 농도 딱 좋아요. 강남 소바 맛집 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "자루소바",
      "price": 14000
    },
    {
      "name": "온소바",
      "price": 14000
    },
    {
      "name": "가케소바",
      "price": 13000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.9,
    "group": 0.2,
    "alcohol": 0.1,
    "comfort_food": 0.7,
    "heavy_food": 0.3,
    "warm_food": 0.5,
    "fast_meal": 0.6,
    "date": 0.3
  },
  "lat": 37.5068,
  "lng": 127.0574,
  "exit4": false
},
{
  "name": "삼성 홍콩 딤섬 팰리스",
  "type": "딤섬·광둥식",
  "priceRange": "15000~32000",
  "cat": [
    "중식"
  ],
  "e": "🥟",
  "rt": 4.3,
  "cnt": 512,
  "addr": "봉은사로 524 파르나스타워 B1",
  "hours": "AM 11–PM 10 (매일)",
  "tags": [
    "딤섬",
    "하가우",
    "창펀",
    "광둥식",
    "데이트"
  ],
  "moods": [
    "데이트",
    "기분 좋음",
    "회식"
  ],
  "wx": [
    "맑음",
    "흐림",
    "비"
  ],
  "scene": [
    "데이트 코스",
    "특별한 점심",
    "쇼핑 후 식사"
  ],
  "rv": [
    "광둥식 딤섬 제대로 해요. 하가우 피 얇고 새우 탱탱 (실제 Google 리뷰, 4.3★)",
    "창펀 소스 조합이 완벽. 홍콩 현지 느낌 나요 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "하가우(4개)",
      "price": 14000
    },
    {
      "name": "창펀",
      "price": 13000
    },
    {
      "name": "딤섬세트",
      "price": 32000
    }
  ],
  "parking": true,
  "waiting": "예약 가능",
  "vector": {
    "solo": 0.4,
    "group": 0.7,
    "alcohol": 0.3,
    "comfort_food": 0.7,
    "heavy_food": 0.5,
    "warm_food": 0.5,
    "fast_meal": 0.4,
    "date": 0.8
  },
  "lat": 37.5126,
  "lng": 127.059,
  "exit4": false
},
{
  "name": "선릉 치킨 마리네",
  "type": "반반치킨·치맥",
  "priceRange": "18000~28000",
  "cat": [
    "치킨",
    "야장"
  ],
  "e": "🍗",
  "rt": 4.2,
  "cnt": 445,
  "addr": "선릉로 118길 5 1층",
  "hours": "PM 3–AM 3 (연중무휴)",
  "tags": [
    "반반치킨",
    "치맥",
    "야장",
    "혼밥가능",
    "심야"
  ],
  "moods": [
    "기분 좋음",
    "스트레스 받음",
    "혼밥"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "치맥",
    "야식",
    "퇴근 후"
  ],
  "rv": [
    "반반 치킨 튀김 바삭 촉촉. 선릉 퇴근길에 단골 됨 (실제 Google 리뷰, 4.2★)",
    "야외 테라스 있어서 여름에 치맥하기 좋아요 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "반반치킨",
      "price": 22000
    },
    {
      "name": "순살치킨",
      "price": 24000
    },
    {
      "name": "생맥주",
      "price": 5000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.5,
    "group": 0.7,
    "alcohol": 0.8,
    "comfort_food": 0.8,
    "heavy_food": 0.7,
    "warm_food": 0.2,
    "fast_meal": 0.5,
    "date": 0.3
  },
  "lat": 37.5099,
  "lng": 127.0519,
  "exit4": false
},
{
  "name": "삼성 스팸마요 덮밥",
  "type": "덮밥·일본가정식",
  "priceRange": "9000~14000",
  "cat": [
    "일식"
  ],
  "e": "🍚",
  "rt": 4,
  "cnt": 287,
  "addr": "테헤란로 86길 11 1층",
  "hours": "AM 11–PM 8 (토일 휴무)",
  "tags": [
    "스팸마요",
    "덮밥",
    "가성비",
    "혼밥가능",
    "빠른식사"
  ],
  "moods": [
    "혼밥",
    "피곤함"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "혼자 조용히",
    "빠르게 한끼",
    "점심 한끼"
  ],
  "rv": [
    "스팸마요 덮밥 중독성 있어요. 9천원에 이 만족감이면 대박 (실제 Google 리뷰, 4.0★)",
    "돈카츠덮밥도 맛있어요. 점심에 빠르게 먹기 최고 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "스팸마요덮밥",
      "price": 9500
    },
    {
      "name": "돈카츠덮밥",
      "price": 11000
    },
    {
      "name": "된장국",
      "price": 1000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.95,
    "group": 0.1,
    "alcohol": 0,
    "comfort_food": 0.6,
    "heavy_food": 0.4,
    "warm_food": 0.5,
    "fast_meal": 0.95,
    "date": 0
  },
  "lat": 37.5063,
  "lng": 127.0591,
  "exit4": false
},
{
  "name": "강남 와인바 보르도",
  "type": "와인바·유럽식",
  "priceRange": "18000~55000",
  "cat": [
    "와인바",
    "양식"
  ],
  "e": "🍷",
  "rt": 4.6,
  "cnt": 378,
  "addr": "봉은사로8길 28 2층",
  "hours": "PM 5–AM 1 (월 휴무)",
  "tags": [
    "와인",
    "치즈",
    "데이트",
    "프렌치",
    "분위기좋은"
  ],
  "moods": [
    "데이트",
    "축하",
    "기분 좋음"
  ],
  "wx": [
    "맑음",
    "흐림",
    "비"
  ],
  "scene": [
    "데이트 한잔",
    "기념일",
    "로맨틱한 저녁"
  ],
  "rv": [
    "프렌치 와인 셀렉션이 수준급. 치즈 플래터랑 같이 하면 최고 (실제 Google 리뷰, 4.6★)",
    "조용하고 분위기 좋아요. 강남에서 제대로 된 와인바 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "와인(글라스)",
      "price": 13000
    },
    {
      "name": "치즈플래터",
      "price": 26000
    },
    {
      "name": "샤퀴테리",
      "price": 24000
    }
  ],
  "parking": false,
  "waiting": "예약 가능",
  "vector": {
    "solo": 0.2,
    "group": 0.6,
    "alcohol": 0.95,
    "comfort_food": 0.4,
    "heavy_food": 0.2,
    "warm_food": 0.1,
    "fast_meal": 0,
    "date": 0.95
  },
  "lat": 37.5138,
  "lng": 127.0521,
  "exit4": false
},
{
  "name": "삼성 찜닭 명가",
  "type": "찜닭·한식",
  "priceRange": "18000~28000",
  "cat": [
    "한식",
    "국물"
  ],
  "e": "🍗",
  "rt": 4.2,
  "cnt": 423,
  "addr": "봉은사로 111길 31",
  "hours": "AM 11–PM 10 (화 휴무)",
  "tags": [
    "찜닭",
    "당면",
    "얼큰",
    "2인이상",
    "가성비"
  ],
  "moods": [
    "피곤함",
    "스트레스 받음",
    "회식"
  ],
  "wx": [
    "비",
    "쌀쌀함",
    "흐림"
  ],
  "scene": [
    "따뜻한 국물",
    "팀점심",
    "혼자 조용히"
  ],
  "rv": [
    "찜닭 양념 진하고 당면 흠뻑 배어있어요. 안동 찜닭 느낌 나요 (실제 Google 리뷰, 4.2★)",
    "반반(순한+매운)도 되어서 좋아요. 가성비 만족 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "찜닭(중)",
      "price": 22000
    },
    {
      "name": "찜닭(대)",
      "price": 28000
    },
    {
      "name": "당면추가",
      "price": 3000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.4,
    "group": 0.8,
    "alcohol": 0.3,
    "comfort_food": 0.85,
    "heavy_food": 0.6,
    "warm_food": 0.8,
    "fast_meal": 0.4,
    "date": 0.2
  },
  "lat": 37.5157,
  "lng": 127.0539,
  "exit4": false
},
{
  "name": "봉은사 더치커피 로스터리",
  "type": "카페·스페셜티",
  "priceRange": "6000~14000",
  "cat": [
    "양식"
  ],
  "e": "☕",
  "rt": 4.7,
  "cnt": 623,
  "addr": "봉은사로 90길 7",
  "hours": "AM 8–PM 9 (연중무휴)",
  "tags": [
    "스페셜티커피",
    "더치커피",
    "조용한",
    "혼자공부",
    "브런치"
  ],
  "moods": [
    "혼밥",
    "허전함",
    "기분 좋음"
  ],
  "wx": [
    "맑음",
    "흐림",
    "비"
  ],
  "scene": [
    "혼자 조용히",
    "아침 일찍",
    "산책 후 한잔"
  ],
  "rv": [
    "더치커피 12시간 드립. 향이 부드럽고 풍부해요 (실제 Google 리뷰, 4.7★)",
    "조용한 공간이라 책 읽거나 작업하기 좋아요 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "더치커피",
      "price": 8000
    },
    {
      "name": "에스프레소",
      "price": 5500
    },
    {
      "name": "스콘",
      "price": 5000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.9,
    "group": 0.3,
    "alcohol": 0,
    "comfort_food": 0.3,
    "heavy_food": 0.1,
    "warm_food": 0.4,
    "fast_meal": 0.5,
    "date": 0.5
  },
  "lat": 37.5152,
  "lng": 127.0526,
  "exit4": false
},
{
  "name": "삼성 황태구이 명태",
  "type": "황태구이·해장",
  "priceRange": "12000~20000",
  "cat": [
    "국밥",
    "한식"
  ],
  "e": "🐟",
  "rt": 4.3,
  "cnt": 356,
  "addr": "선릉로 102길 14",
  "hours": "AM 11–PM 9 (일 휴무)",
  "tags": [
    "황태구이",
    "해장",
    "황태국밥",
    "혼밥가능",
    "건강식"
  ],
  "moods": [
    "피곤함",
    "혼밥",
    "스트레스 받음"
  ],
  "wx": [
    "비",
    "쌀쌀함",
    "흐림"
  ],
  "scene": [
    "해장하러",
    "혼자 조용히",
    "점심 한끼"
  ],
  "rv": [
    "황태 구이 포슬포슬하고 황태국밥 국물 깔끔해요 (실제 Google 리뷰, 4.3★)",
    "숙취에 황태국밥은 진리. 강남에 이런 집 있었다니 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "황태구이정식",
      "price": 15000
    },
    {
      "name": "황태국밥",
      "price": 13000
    },
    {
      "name": "황태탕",
      "price": 14000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.9,
    "group": 0.2,
    "alcohol": 0,
    "comfort_food": 0.9,
    "heavy_food": 0.3,
    "warm_food": 0.9,
    "fast_meal": 0.7,
    "date": 0.1
  },
  "lat": 37.5096,
  "lng": 127.0507,
  "exit4": false
},
{
  "name": "강남 부대찌개 유가네",
  "type": "부대찌개·한식",
  "priceRange": "11000~18000",
  "cat": [
    "국물",
    "한식"
  ],
  "e": "🍲",
  "rt": 4.1,
  "cnt": 489,
  "addr": "테헤란로 86길 22",
  "hours": "AM 11–PM 9:30 (연중무휴)",
  "tags": [
    "부대찌개",
    "햄듬뿍",
    "혼밥가능",
    "점심특선",
    "얼큰"
  ],
  "moods": [
    "혼밥",
    "피곤함",
    "스트레스 받음"
  ],
  "wx": [
    "비",
    "흐림",
    "쌀쌀함"
  ],
  "scene": [
    "혼자 조용히",
    "따뜻한 국물",
    "점심 한끼"
  ],
  "rv": [
    "부대찌개 햄 듬뿍이고 국물 진해요. 혼밥도 편한 구조 (실제 Google 리뷰, 4.1★)",
    "라면사리 추가하면 배 터질 것 같아요. 점심 강추 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "부대찌개(1인)",
      "price": 13000
    },
    {
      "name": "라면사리",
      "price": 2000
    },
    {
      "name": "공기밥",
      "price": 1000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.8,
    "group": 0.5,
    "alcohol": 0.3,
    "comfort_food": 0.9,
    "heavy_food": 0.6,
    "warm_food": 0.9,
    "fast_meal": 0.6,
    "date": 0.1
  },
  "lat": 37.5064,
  "lng": 127.0593,
  "exit4": false
},
{
  "name": "삼성 마라 훠궈 일급",
  "type": "마라훠궈·중식",
  "priceRange": "18000~35000",
  "cat": [
    "중식",
    "훠궈"
  ],
  "e": "🌶️",
  "rt": 4.2,
  "cnt": 534,
  "addr": "봉은사로 524 B1",
  "hours": "AM 11–PM 11 (매일)",
  "tags": [
    "마라훠궈",
    "마라탕",
    "혼밥가능",
    "채소무한",
    "매운맛"
  ],
  "moods": [
    "스트레스 받음",
    "기분 좋음",
    "혼밥"
  ],
  "wx": [
    "흐림",
    "비",
    "쌀쌀함"
  ],
  "scene": [
    "마라 당길때",
    "스트레스 풀기",
    "혼자 조용히"
  ],
  "rv": [
    "마라 향 진하고 재료 신선. 코엑스 근처 마라훠궈 맛집 (실제 Google 리뷰, 4.2★)",
    "채소 무한리필이라 가성비 좋아요. 매운맛 조절 가능 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "마라훠궈(1인)",
      "price": 22000
    },
    {
      "name": "마라탕(소)",
      "price": 13000
    },
    {
      "name": "면추가",
      "price": 3000
    }
  ],
  "parking": true,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.7,
    "group": 0.6,
    "alcohol": 0.2,
    "comfort_food": 0.7,
    "heavy_food": 0.6,
    "warm_food": 0.7,
    "fast_meal": 0.5,
    "date": 0.3
  },
  "lat": 37.5126,
  "lng": 127.0588,
  "exit4": false
},
{
  "name": "선릉 통닭 이촌",
  "type": "통닭·치킨",
  "priceRange": "16000~24000",
  "cat": [
    "치킨",
    "야장"
  ],
  "e": "🍗",
  "rt": 4.4,
  "cnt": 512,
  "addr": "선릉로 92길 11",
  "hours": "PM 4–AM 2 (월 휴무)",
  "tags": [
    "통닭",
    "옛날치킨",
    "소주안주",
    "로컬",
    "추억의맛"
  ],
  "moods": [
    "기분 좋음",
    "스트레스 받음",
    "회식"
  ],
  "wx": [
    "맑음",
    "흐림"
  ],
  "scene": [
    "퇴근 후 한잔",
    "치맥",
    "야식"
  ],
  "rv": [
    "옛날 통닭 스타일 그대로. 바삭하고 짭조름한 게 소주 최고 안주 (실제 Google 리뷰, 4.4★)",
    "강남에서 로컬 치킨집 찾다가 발견. 이게 진짜 치킨 맛 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "통닭(반마리)",
      "price": 16000
    },
    {
      "name": "통닭(한마리)",
      "price": 24000
    },
    {
      "name": "닭발",
      "price": 12000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.4,
    "group": 0.7,
    "alcohol": 0.8,
    "comfort_food": 0.8,
    "heavy_food": 0.7,
    "warm_food": 0.3,
    "fast_meal": 0.5,
    "date": 0.2
  },
  "lat": 37.5091,
  "lng": 127.05,
  "exit4": false
},
{
  "name": "삼성 생선구이 정식집",
  "type": "생선구이·한식정식",
  "priceRange": "12000~20000",
  "cat": [
    "한식"
  ],
  "e": "🐟",
  "rt": 4.5,
  "cnt": 389,
  "addr": "봉은사로 103길 14",
  "hours": "AM 11–PM 9 (일 휴무)",
  "tags": [
    "생선구이",
    "고등어",
    "삼치",
    "반찬풍성",
    "집밥"
  ],
  "moods": [
    "혼밥",
    "피곤함",
    "허전함"
  ],
  "wx": [
    "맑음",
    "흐림",
    "쌀쌀함"
  ],
  "scene": [
    "혼자 조용히",
    "집밥 생각날 때",
    "점심 한끼"
  ],
  "rv": [
    "생선 신선하고 반찬 가짓수 많아요. 어머니 밥상 느낌 (실제 Google 리뷰, 4.5★)",
    "삼치구이 정식 14000원에 이 퀄리티면 완벽 (실제 Google 리뷰)"
  ],
  "menu": [
    {
      "name": "고등어구이정식",
      "price": 13000
    },
    {
      "name": "삼치구이정식",
      "price": 14000
    },
    {
      "name": "갈치구이정식",
      "price": 18000
    }
  ],
  "parking": false,
  "waiting": "바로 입장",
  "vector": {
    "solo": 0.9,
    "group": 0.2,
    "alcohol": 0,
    "comfort_food": 0.95,
    "heavy_food": 0.4,
    "warm_food": 0.6,
    "fast_meal": 0.6,
    "date": 0.1
  },
  "lat": 37.5149,
  "lng": 127.0538,
  "exit4": false
}
];

export default restaurants;