import React from 'react'
import { styled } from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";


export const FAQWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: ${(props) =>
    props.isMobile
      ? "52px 24px" /* 모바일 뷰 */
      : props.isTablet
      ? "70px 20px"  /* 태블릿 뷰 */
      : "132px 0px"}; /* 데스크탑 뷰 */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) =>
    props.isMobile
      ? "30px"
      : props.isTablet 
      ? "40px" 
      : "30px"};
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

/* text의 경우 모바일 뷰에서만 달라짐 */
export const FAQText1 = styled.div`
  color: #0068FF;
  font-family: ${(props) => (props.isMobile ? "Montserrat" : "Pretendard")};
  font-size: ${(props) => (props.isMobile ? "18px" : "24px")};
  font-weight: ${(props) => (props.isMobile ? "400" : "600")};
  line-height: ${(props) => (props.isMobile ? "22px" : "28px")};
  letter-spacing: ${(props) => (props.isMobile ? "-0.09px" : "0.48px")};
`;

export const FAQText2 = styled.div`
  color: #0A0B0A;
  font-family: ${(props) => (props.isMobile ? "Montserrat" : "Pretendard")};
  font-size: ${(props) => (props.isMobile ? "18px" : "24px")};
  font-weight: ${(props) => (props.isMobile ? "400" : "600")};
  line-height: ${(props) => (props.isMobile ? "22px" : "28px")};
  letter-spacing: ${(props) => (props.isMobile ? "-0.09px" : "0.48px")};
`;

export const FAQButton = styled.div`
  display: flex;
  width: ${(props) => (props.isMobile ? "28px" : "46px")};
  height: ${(props) => (props.isMobile ? "28px" : "46px")};
  justify-content: center;
  align-items: center;
`;

export const FAQButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AnswerBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  padding: 12px 16px;
  align-items: center;
  border-radius: 0px 0px 8px 8px;
  border-top: solid 1px #CED7DE;
  background: rgba(0, 104, 255, 0.12);
`;

