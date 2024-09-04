const mediaUrl = import.meta.env.VITE_MEDIA_URL;
const sampleImage = `${mediaUrl}Promotion/emptyImage.png`;

export const studentCommitteeProfiles = [
	{ id: 1, name: "류용현", role: "단장", image: `${mediaUrl}About/S1.png`, description: "동국청년불자회 회장" },
	{ id: 2, name: "최윤정", role: "부단장", image: `${mediaUrl}About/S2.png`, description: "다붓다붓 회장" },

	{ id: 3, name: "박수영", role: "기획국장", image: sampleImage, description: "진선미 회장" },
	{ id: 4, name: "김민수", role: "기획국원", image: `${mediaUrl}About/S4.png`, description: "템플애플 부회장" },
	{ id: 5, name: "류아라", role: "기획국원", image: sampleImage, description: "동불 부회장" },
	{ id: 6, name: "문정민", role: "기획국원", image: sampleImage, description: "템플애플 회장" },
	{ id: 7, name: "신민경", role: "기획국원", image: sampleImage, description: "야단법석 부회장" },
	{ id: 8, name: "이현나", role: "기획국원", image: sampleImage, description: "불사대 회장" },
	{ id: 9, name: "최정환", role: "기획국원", image: sampleImage, description: "나를 찾아가는 여행 부회장" },
	{ id: 10, name: "최지원", role: "기획국원", image: sampleImage, description: "가람수호 회장" },
	{ id: 11, name: "채영서", role: "기획국원", image: `${mediaUrl}About/S11.png`, description: "캠폴스테이 부회장" },

	{ id: 12, name: "황진경", role: "홍보국장", image: `${mediaUrl}About/S12.png`, description: "퓨처핸접 부회장" },
	{ id: 13, name: "강준혁", role: "홍보국원", image: sampleImage, description: "공양미 300석 부회장" },
	{ id: 14, name: "김민수", role: "홍보국원", image: `${mediaUrl}About/S14.png`, description: "진선미 부회장" },
	{ id: 15, name: "김수민", role: "홍보국원", image: sampleImage, description: "나를 찾아가는 여행 회장" },
	{ id: 16, name: "김준범", role: "홍보국원", image: sampleImage, description: "자연과 함께 회장" },
	{ id: 17, name: "백희수", role: "홍보국원", image: `${mediaUrl}About/S17.png`, description: "자연과 함께 부회장" },
	{ id: 18, name: "양석우", role: "홍보국원", image: sampleImage, description: "다붓다붓 부회장" },
	{ id: 19, name: "이승협", role: "홍보국원", image: `${mediaUrl}About/S19.png`, description: "공양미 300석 회장" },

	{ id: 20, name: "정주은", role: "사무국장", image: sampleImage, description: "동국청년불자회 부회장" },
	{ id: 21, name: "김세연", role: "사무국원", image: `${mediaUrl}About/S21.png`, description: "부따이 부회장" },
	{ id: 22, name: "박제민", role: "사무국원", image: sampleImage, description: "캠폴스테이 회장" },
	{ id: 23, name: "송진형", role: "사무국원", image: sampleImage, description: "약사여래 부회장" },
	{ id: 24, name: "장재원", role: "사무국원", image: `${mediaUrl}About/S24.png`, description: "퓨처핸접 회장" },
	{ id: 25, name: "한서연", role: "사무국원", image: sampleImage, description: "약사여래 회장" },
	{ id: 26, name: "한수연", role: "사무국원", image: sampleImage, description: "불사대 부회장" },

	{ id: 27, name: "박누리", role: "총무국장", image: sampleImage, description: "부따이 회장" },
	{ id: 28, name: "김주하", role: "총무국원", image: `${mediaUrl}About/S28.png`, description: "불법단체 부회장" },
	{ id: 29, name: "박헌수", role: "총무국원", image: sampleImage, description: "야단법석 회장" },
	{ id: 30, name: "조원준", role: "총무국원", image: sampleImage, description: "불법단체 회장" },
	{ id: 31, name: "정현도", role: "총무국원", image: `${mediaUrl}About/S31.png`, description: "동불 회장" },
	{ id: 32, name: "황정민", role: "총무국원", image: sampleImage, description: "가람수호 부회장" }
];
  
  export const youngCamperProfiles = [
	{ id: 1, name: "황진경", role: "TF장", image: `${mediaUrl}About/Y3.png`, description: "융합보안학과 22\n\n" },
	{ id: 2, name: "김준범", role: "PM", image: `${mediaUrl}About/Y3.png`, description: "수학과 19\n\n" },
	{ id: 3, name: "이승협", role: "PM", image: `${mediaUrl}About/Y3.png`, description: "산업시스템공학과 20\n\n\n 공과대학 불교동아리,\n '공양미 300석'을 이끌고 있는\n이승협입니다! 영캠퍼의 PM을\n맡게 되어 영광입니다~!" },

	// 디자인
	{ id: 4, name: "한은서", role: "디자인", image: `${mediaUrl}About/Y3.png`, description: "상세 설명" },
	{ id: 5, name: "윤혜정", role: "디자인", image: `${mediaUrl}About/Y3.png`, description: "상세 설명" },
	{ id: 6, name: "이수빈", role: "디자인", image: `${mediaUrl}About/Y3.png`, description: "상세 설명" },
	
	// 백엔드
	{ id: 7, name: "김찬빈", role: "BE팀장", image: `${mediaUrl}About/Y3.png`, description: "융합보안학과 23" },
	{ id: 8, name: "김세은", role: "BE팀원", image: `${mediaUrl}About/Y3.png`, description: "가정교육학과 21" },
	{ id: 9, name: "임주혁", role: "BE팀원", image: `${mediaUrl}About/Y3.png`, description: "컴퓨터공학과 19" },

	// 프론트엔드1
	{ id: 10, name: "오찬주", role: "FE1팀장", image: `${mediaUrl}About/Y10.png`, description: "정치외교학전공 22\n\n\n안녕하세요 ☺️🍈\n축제도, 축제 사이트도\n재밌게 즐기실 바랄게요 👀" },
	{ id: 11, name: "강신지", role: "FE1팀원", image: `${mediaUrl}About/Y11.png`, description: "컴퓨터공학전공 21\n\n\n사이트를 구경하신 분들 모두\n행운 가득한 하루 되시길! 🍀✨" },
	{ id: 12, name: "백동민", role: "FE1팀원", image: `${mediaUrl}About/Y3.png`, description: "멀티미디어공학과 21" },
	{ id: 13, name: "이민수", role: "FE1팀원", image: `${mediaUrl}About/Y3.png`, description: "일어일문학과 17" },
	{ id: 14, name: "설현아", role: "FE2팀장", image: `${mediaUrl}About/Y14.png`, description: "융합보안학과 22\n\n\n영캠퍼 1기 영광이에요😆\n영캠프도, 사이트도 잘 즐겨주세요🔥\n(깃허브 맞팔해요! @hyeona01)" },
	{ id: 15, name: "김수빈", role: "FE2팀원", image: `${mediaUrl}About/Y3.png`, description: "불교학부 21" },
	{ id: 16, name: "오세인", role: "FE2팀원", image: `${mediaUrl}About/Y16.png`, description: "글로벌무역학과 24\n\n\n 영캠프 FE로 함께하게 되어\n매우 기쁩니다!😉 모두\n즐거운 축제 보내시길 바랍니다!🧡"},
	{ id: 17, name: "이유진", role: "FE2팀원", image: `${mediaUrl}About/Y3.png`, description: "멀티미디어소프트웨어공학전공 20" }
  ];