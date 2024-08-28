import React from 'react'
import { styled } from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";


export const FAQWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  padding: ${(props) =>
    props.isMobile
      ? "52px 24px" /* 모바일 뷰 */
      : props.isTablet
      ? "80px 48px"  /* 태블릿 뷰 */
      : "132px 170px"}; /* 데스크탑 뷰 */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
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

  cursor: pointer;
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

/* text의 경우 데스크탑 뷰에서만 달라짐 */
export const FAQText1 = styled.div`
  color: #0068FF;
  font-family: ${(props) => (props.isDesktop ? "PretendardRegular" : "MonRegular")};
  font-size: ${(props) => (props.isDesktop ? "24px" : "18px")};
  font-weight: ${(props) => (props.isDesktop ? "600" : "400")};
  line-height: ${(props) => (props.isDesktop ? "28px" : "22px")};
  letter-spacing: ${(props) => (props.isDesktop ? "0.48px" : "-0.09px")};
`;

export const FAQText2 = styled.div`
  color: #0A0B0A;
  font-family: ${(props) => (props.isDesktop ? "PretendardRegular" : "MonRegular")};
  font-size: ${(props) => (props.isDesktop ? "24px" : "18px")};
  font-weight: ${(props) => (props.isDesktop ? "600" : "400")};
  line-height: ${(props) => (props.isDesktop ? "28px" : "22px")};
  letter-spacing: ${(props) => (props.isDesktop ? "0.48px" : "-0.09px")};
`;

export const FAQButton = styled.div`
  display: flex;
  width: ${(props) => (props.isDesktop ? "46px" : "28px")};
  height: ${(props) => (props.isDesktop ? "46px" : "28px")};
  justify-content: center;
  align-items: center;
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

export const PagenationWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0px;
  justify-content: center;
  gap: 20px;

    button {
      margin: 0 5px;
      padding: 10px 15px;
      background-color: #fff;
      cursor: pointer;
      border-radius: 10px;
      
      &:hover {
        background-color: #e7ebef;
      }
        
      &.active {
        background-color: #E7EBEF;
        color: #000;
    }
  }
`