import React from 'react'
import { styled } from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  width: 100vw;
  background-color: #FAFAFA;
`

export const TitleWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: ${(props) =>
    props.isMobile ? "100px" : props.isTablet ? "180px" : "280px"};
  padding: ${(props) => "0px 20px"};
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const MainTitle = styled.div`
  display: flex;
  width: 100vw;
  padding: 0px 38px;
  margin-bottom: 24px;

  color: var(--text-black, #0A0B0A);
  text-align: center;
  /* secondary/Desktop/Hero2 */
  font-family: "Sandoll GtNeoExt";
  font-size: ${(props) =>
    props.isMobile ? "20px" : props.isTablet ? "30px" : "38px"};
  font-style: normal;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -3.04px;
`;

export const SubTitle = styled.div`
  padding: 0px 38px;

  color: var(--text-grey600, #92A5B5);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.11px;
`;

export const FAQWrapper = styled.div`
  display: flex;
  width: 1100px;

  padding: 132px 0px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
`

export const FAQBox = styled.div`
  display: flex;
  width: 1100px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-direction: column; /* 세로 방향으로 배치 */

  border-radius: 8px;
  border: solid 1px #CED7DE;
  opacity: var(--sds-size-stroke-border);
  background: var(--Base-Real-White, #FFF);
`;

export const FAQContent = styled.div`
  display: flex;
  padding: 10px 15px;
  min-height: 80px;
  flex-direction: row; /* 질문과 버튼을 가로 방향으로 배치 */
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FAQTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

export const FAQText1 = styled.div`
  color: var(--main-primary, #05FB47);
  /* primary/Desktop/H2 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 116.667% */
  letter-spacing: 0.48px;
`;

export const FAQText2 = styled.div`
  opacity: var(--sds-size-stroke-border);
  color: var(--Base-Base-Black, #0A0B0A);
  /* primary/Desktop/H2 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.48px;
`;

export const FAQText3 = styled.div`
  color: #15B097;
  /* primary/Desktop/H2 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 116.667% */
  letter-spacing: 0.48px;
`;

export const FAQButton = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
`;

export const AnswerBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  padding: 10px 15px;
  align-items: center;
  align-self: stretch;

  border-radius: 0px 0px 8px 8px;
  border: var(--sds-size-stroke-border) solid var(--sds-color-border-default-default);
  opacity: var(--sds-size-stroke-border);

  background: var(--main-neutral100, #E7EBEF);
`;

