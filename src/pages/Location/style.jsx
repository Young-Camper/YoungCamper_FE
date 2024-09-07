import styled from "styled-components";

//TransportContainer
// 아코디언 헤더 스타일

export const AccordionHeader = styled.div`
  align-self: stretch;
  max-width: 1444px;
  max-height: 130px;
  padding: ${(props) => (props.$isDesktop ? "48px 24px" : "24px 24px")};
  background: #ffffff;
  border-top: ${(props) =>
    props.index === 0 && !props.$isOpen && !props.$isHovered
      ? "2px solid #0068FF"
      : "2px transparent solid" };
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 2px solid #0068ff;

  ${(props) =>
    props.$isOpen
      ? `
        background: #0068FF;
        border-top: 2px transparent solid; 
        border-bottom: 2px transparent solid; 
      `
      : `
        background: white;
        &:hover {
          background: linear-gradient(102deg, #0068FF 0%, #B9FF9C 100%);
          border-top: 2px transparent solid;
          border-bottom: 2px transparent solid;
        }
      `}
`;

export const HeaderContent = styled.div`
  flex: 1 1 0;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

export const Title = styled.div`
  flex: 1 1 0;
  height: ${(props) => (props.$isDesktop ? "36px" : "24px")};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.$isOpen ? "#FFFFFF" : "#0068FF")};
  font-size: ${(props) => (props.$isDesktop ? "28px" : "16px")};
  font-family: "MonRegular";
  font-weight: 600;
  line-height: 36px;
  word-wrap: break-word;

  // Header에 호버 시 Title 색상 변경
  ${AccordionHeader}:hover & {
    color: #ffffff;
  }
`;

export const IconContainer = styled.div`
  width: 68px;
  align-self: stretch;
  padding: 12px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
`;

// 아코디언 내용 스타일
export const AccordionContent = styled.div`
  align-self: stretch;
  /* max-height: ${(props) =>
    props.index === 0 ? "771px" : "568px"}; // 열려있을 때만 높이 설정 */
  padding: ${(props) => (props.$isDesktop ? "48px 0px" : "24px 0px")};
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: height 0.3s ease; // 부드러운 높이 변화 애니메이션
  border: 2px solid #0068ff;
`;

export const ContentInner = styled.div`
  align-self: stretch;
  /* max-height: ${(props) =>
    props.index === 0 ? "489px" : "568px"}; // 열려있을 때만 높이 설정 */
  width: 100%;
  padding: ${(props) =>
    props.$isDesktop ? "48px 48px 0px 48px;" : "24px 24px 0px 24px"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  object-fit: contain;
`;

export const Placeholder = styled.img`
  justify-content: center;
  width: ${(props) => (props.$isDesktop ? "736px" : "100%")};
  /* height: 441px; */
  object-fit: contain;
  display: inline-flex;
  src: ${(props) => props.$img};
`;

export const Description = styled.div`
  flex: 1 1 0;
  color: #0a0b0a;
  font-size: ${(props) => (props.$isMobile ? "12px" : "20px")};
  font-family: "MonRegular";
  line-height: ${(props) => (props.$isMobile ? "18px" : "30px")};
  word-break: keep-all;
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  align-self: stretch;
  padding: ${(props) => (props.$isDesktop ? "48px" : "24px")};
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

//transport.jsx styled-component

//LocMap.jsx styled-component
export const LocContainer = styled.div`
  max-width: ${(props) => (props.$isMobile ? "100%" : "1100px")};
  /* max-height: ${(props) => (props.isMobile ? "auto" : "1317px")}; */
  padding: ${(props) => (props.$isMobile ? "12px " : "48px ")};
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${(props) => (props.$isMobile ? "12px" : "50px")};


`;

export const LocContentArea = styled.div`
  align-self: stretch;
  /* height: ${(props) => (props.$isMobile ? "448px" : "1234px")}; */
  padding: ${(props) => (props.$isMobile ? "12px" : "48px")};
  
  border: 1px #fafafa solid;
  border-radius: ${(props) => (props.$isMobile ? "20px" : "50px")};
  background: #fafafa;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LocTitle = styled.div`
  align-self: stretch;
  padding: ${(props) =>
    props.$isMobile ? "12px" : "48px 48px 0px 48px"}; /* 상단 패딩만 추가 */
  display: flex;
  justify-content: left;
  align-items: center;
  color: #0a0b0a;
  font-size: ${(props) => (props.$isMobile ? "18px" : "28px")};
  font-family: "MonSemiBold";

  line-heght: 24px;
  word-wrap: break-word;
`;

export const LocDescription = styled.div`
  align-self: stretch;
  padding: ${(props) => (props.$isMobile ? "12px" : "48px")};
  display: flex;
  justify-content: left;
  align-items: center;
  color: #0a0b0a;
  font-size: ${(props) => (props.$isMobile ? "12px" : "16px")};
  font-family: "MonRegular";
  font-weight: 400;
  word-break: keep-all;
  line-height: ${(props) => (props.$isMobile ? "18px" : "30px")};
`;

export const LocImageContainer = styled.div`
  align-self: stretch;
  /* height: ${(props) => (props.isMobile ? "310px" : "878px")}; */
  padding: ${(props) => (props.$isMobile ? "12px" : "48px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LocImage = styled.img`
  align-self: stretch;
  /* height: ${(props) => (props.ismobile ? "321px" : "782px")}; */
  width: ${(props) =>
    props.$isMobile
      ? "100%"
      : "100%"}; // 이미지 너비를 부모 컨테이너에 맞춰 꽉 채웁니다.
  src: ${(props) => props.src};

  border: 1px transparent soild;
  border-radius: 50px;
`;
//index.
export const Container = styled.div`
  padding: 0px 24px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;


  @media (max-width: 768px) {
    // isMobile 상태를 활용
    width: 100%; //
    height: auto; //
    padding: 0px;
    font-size: 16px;
    padding-top: 36px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* max-width 초과시, 가운데 정렬 */
  margin: 0 auto;

  /* 반응형 */
  max-width: 1900px;
  /* max-width: ${(props) =>
    props.$isDesktop ? "1900px" : props.$isTablet ? "768px" : "360px"}; */

  padding: 12px 12px;
  /* gap: ${(props) =>
    props.$isIntro ? "64px" : props.$isDesktop ? "100px" : "50px"}; */
`;

//transportway.jsx
export const WayContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.$isMobile ? "0px" : "24px")};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.$isMobile ? "20px" : "48px")};
`;

export const WaySection = styled.div`
  align-self: stretch;
  height: ${(props) =>
    props.$height || "auto"}; // height prop을 전달받아 동적으로 설정
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`;

export const WayTitleContainer = styled.div`
  align-self: stretch;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const WayTitleBadge = styled.div`
  padding: 4px 16px;
  border-radius: 100px;
  border: 2px #0068ff solid;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const WayTitleText = styled.div`
  text-align: center;
  color: #0068ff;
  font-size: ${(props) => (props.$isMobile ? "14px" : "24px")};
  font-family: "MonSemibold";
  line-height: 28px;
  word-break: keep-all;
`;

export const WaySectionTitle = styled.div`
  align-self: stretch;
  padding-left: 6px;
  padding-right: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > div {
    flex: 1 1 0;
    color: #0a0b0a;
    font-size: ${(props) => (props.$isMobile ? "14px" : "20px")};
    font-family: "MonSemibold";
    line-height: 28px;
    word-wrap: break-word;
    word-break: keep-all;
  }
`;

export const WayBusStopContainer = styled.div`
  align-self: stretch;
  padding-left: 6px;
  padding-right: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => (props.$isMobile ? "12px" : "24px")};
`;

export const WayBusStopInfo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 12px;
`;

export const WayBusStopName = styled.div`
  color: #0a0b0a;
  font-size: ${(props) => (props.$isMobile ? "14px" : "20px")};
  font-family: "MonSemibold";
  line-height: 28px;
  word-wrap: break-word;
`;

export const WayBusNumbers = styled.div`
  align-self: stretch;
  color: #0a0b0a;
  font-size: ${(props) => (props.$isMobile ? "12px" : "20px")};
  font-family: "MonRegular";
  font-weight: 400;
  line-height: 30px;
  word-wrap: break-word;
`;

export const WayImgContainer = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 12px;
  justify-content: center;
  align-items: center;
  display: inline-flex;

  border: 1px transparent soild;
  border-radius: ${(props) => (props.$isMobile? "20px":"50px" )};
`;

export const WayImg = styled.img`
  align-self: center;
  width: auto; // 이미지 너비를 부모 컨테이너에 맞춰 꽉 채웁니다.
  height: ${(props) => (props.$isMobile? "246px" : "498px")};
  src: ${(props) => props.src};

    width: ${(props) =>
    props.isMobile
      ? "100%"
      : "100%"}; // 이미지 너비를 부모 컨테이너에 맞춰 꽉 채웁니다.
  
`;