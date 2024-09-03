import styled from "styled-components";

export const Wrapper = styled.div`
align-self: stretch;
height: 390px;
padding-left: 48px;
padding-right: 48px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-star 1   
`;

export const ImgTest = styled.img`
  width: 1000px;
  height: 800px;
  margin: 0 auto;
  display: block;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const FAQWrapper = styled.div`
  display: flex;
  width: 1100px;
  // padding: 132px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`

export const FAQBox = styled.div`
  display: flex;
  width: 100%;
  min-width: 240px;
  min-height: 80px;

  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-direction: column;

  border-radius: 8px;
  border: solid 1px #CED7DE;
  background: #FFFFFF;
`;

export const FAQContent = styled.div`
  display: flex;
  padding: 12px 16px;
  min-height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const FAQTextContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
`;

export const FAQText1 = styled.div`
  color: #0068FF;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px; /* 116.667% */
  letter-spacing: 0.48px;
`;

export const FAQText2 = styled.div`
  color: #0A0B0A;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.48px;
`;

export const FAQButton = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  align-items: center;
`;

export const AnswerBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  padding: 12px 16px;
  align-items: center;
  border-radius: 0px 0px 8px 8px;
  background: #E7EBEF;
`;

/*----------------------------------------------------------------*/

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   padding-top: 50px;
//   padding-bottom: 50px;
//   display: inline-flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 50px;
// `;

// const TextSection = styled.div`
//   height: 193px;
//   padding: 48px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   gap: 24px;
// `;

// const Title = styled.div`
//   align-self: stretch;
//   color: #0A0B0A;
//   font-size: 38px;
//   font-family: 'Montserrat';
//   font-weight: 800;
//   word-wrap: break-word;
// `;

// const SubTitle = styled.div`
//   align-self: stretch;
//   color: #637D92;
//   font-size: 22px;
//   font-family: 'Montserrat';
//   font-weight: 400;
//   word-wrap: break-word;
// `;

export const MapSection = styled.div`
align-self: stretch;
padding-left: 24px;
padding-right: 24px;
padding-top: 48px;
padding-bottom: 48px;
background: white;
border-top: 2px #0068FF solid;
display: inline-flex;
justify-content: center;
align-items: center;
flex-direction: column;

min-width: 240px;
min-height: 80px;
${props => props.last && `
  border-bottom: 2px #0068FF solid;
`}

&:hover {
    background: linear-gradient(102deg, #0068FF 0%, #B9FF9C 100%);
    color: rbga(0,0,0);

  }
`;

export const MapContainer = styled.div`
width: 100%;
height: 100%;
padding-left: 48px;
padding-right: 48px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const MapHeader = styled.div`
  flex: 1 1 0;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-direction: row;
`;

export const MapTitleContainer = styled.div`
  flex: 1 1 0;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  flex-direction: row;
  
`;

export const MapTitle = styled.div`
  color: #0068FF;
  font-size: 28px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

export const ButtonWrapper = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
`;

export const Buttoncontainer = styled.div`

width: 68px;
align-self: stretch;
padding-left: 10px;
padding-right: 10px;
padding-top: 12px;
padding-bottom: 12px;
display: flex;
justify-content: center;
align-items: center;
`;
// export const Button = styled.div`
//   width: 44px;
//   height: 44px;
//   left: 2px;
//   top: 2px;
//   position: absolute;
//   background: #0068FF;
// `;

export const AnswerInnerContainer = styled.div`
  align-self: stretch;
  height: 489px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnswerGrayBox = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  background: #E3E3E3;
`;

export const AnswerTextContainer = styled.div`
display: flex;
width: 100%;
gap: 6px;
`;

export const AnswerText = styled.div`
  flex: 1 1 0;
  color: #0A0B0A;
  font-size: 22px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

export const AnswerContent = styled.div`
  align-self: stretch;
  padding: 48px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  > div {
    flex: 1 1 0;
    color: #0A0B0A;
    font-size: 22px;
    font-family: 'Pretendard';
    font-weight: 400;
    line-height: 30px;
    word-wrap: break-word;

    /* Collapse 애니메이션을 위한 스타일 */
    max-height: ${(props) => (props.isOpen === "true" ? '500px' : '0')}; /* 펼쳐졌을 때 최대 높이, 접혔을 때 0 */
    overflow: hidden;
    transition: max-height 0.3s ease-in-out; /* 부드러운 애니메이션 */
  }
`;

// 아코디언 헤더 스타일
export const AccordionHeader = styled.div`
  align-self: stretch;
  maxWidth: 1004px;
  maxHeight: 130px;
  padding: ${props => (props.isDesktop ? '48px 24px' : '24px 24px')};
  background: #FFFFFF;
  border-top: 2px #0068FF solid;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: ${props => (props.index === 2 ? '2px #0068FF solid' : '2px transparent solid')}; // 조건부 border-bottom 스타일 적용

  // isOpen 상태와 hover 상태를 함께 고려하여 스타일 적용
  ${props => 
    props.isOpen 
      ? `
        background: #0068FF;
        border-top: 2px transparent solid; // 열린 상태일 때 윗 border 제거
        border-bottom: 2px transparent solid; // 열린 상태일 때 아랫 border 제거
      ` 
      : `
        background: white;
        &:hover {
          background: linear-gradient(102deg, #0068FF 0%, #B9FF9C 100%);
          border-top: 2px transparent solid;
          border-bottom: 2px transparent solid; // hover 시 아랫 border 제거
        }
      `
  }
`;

export const HeaderContent = styled.div`
  flex: 1 1 0;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;

export const Title = styled.div`
  flex: 1 1 0;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.isOpen ? "#FFFFFF" : "#0068FF"};
  font-size: 28px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 36px;
  word-wrap: break-word;

  // Header에 호버 시 Title 색상 변경
  ${AccordionHeader}:hover & { 
    color: #FFFFFF;
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
  max-height: ${props => ((props.index === 0) ? '771px' : '282px')}; // 열려있을 때만 높이 설정
  padding: ${props => (props.isOpen ? '48px 48px' : '0')}; 
  maxWidth: 1004px;
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  
  transition: height 0.3s ease; // 부드러운 높이 변화 애니메이션

  gap: 12px;
`;

export const ContentInner = styled.div`
  align-self: stretch;
  max-height: ${props => (props.index === 0 ? '489px' : '186px')}; // 열려있을 때만 높이 설정
  padding: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;

  border 1px #FFFFFF solid;
`;

export const Placeholder = styled.div`
  align-self: stretch;
  justify-content: center;
  width: 700px;
  height: 441px;
  background: #E3E3E3;
  border: 1px #E3E3E3 solid;
  display: flex;
`;

export const Description = styled.div`
  flex: 1 1 0;
  color: #0A0B0A;
  font-size: 20px;
  font-family: 'Prentendard';
  font-weight: 400;
  line-height: 30px;
  word-wrap: break-word;

`;

export const DescriptionContainer = styled.div`
  align-self: stretch;
  padding: 48px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
`;