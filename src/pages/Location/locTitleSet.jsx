import React from "react";
import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";

const Wrapper = styled.div`
  display: flex;
  width: ${(props) => (props.$isDesktop ? "1100px" : "100%")};
  /* 반응형 */
  /* width: ${(props) =>
    props.$isDesktop ? "1100px" : props.$isTablet ? "672px" : "360px"}; */

  padding: ${(props) => (props.$isDesktop ? "48px 24px" : "30px 20px")};

  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  /* 768px ~ 1150px 사이의 별도 padding 값 적용 (기존 1110일 때 좌우 padding 0) */
  @media (min-width: 768px) and (max-width: 1150px) {
    padding: ${(props) => props.$isDesktop && "48px 20px"};
  }
`;
const MainText = styled.div`
  color: var(--text-black, #0a0b0a);

  /* desktop/display2_eb */
  font-family: "MonExtraBold";
  font-size: ${(props) =>
    props.$isDesktop ? "38px" : "20px"}; /* 데스크탑 38px, 모바일+태블릿 20px */
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "48px" : "24px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-1.9px" : "0.4px")};
  padding: ${(props) =>(props.$isDesktop ? "0px 24px": "0px")};
`;
const SubText = styled.div`
  color: var(--text-grey800, #637d92);

  /* desktop/Body2_reg */
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "20px" : "12px")};
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "30px" : "18px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.2px" : "-0.06px")};
  padding: ${(props) =>(props.$isDesktop ? "0px 24px": "0px")};
`;

const TitleSet = ({ mainText, subText, isBanner }) => {
  const { isDesktop } = useMediaQueries();

  return (
    <Wrapper $isDesktop={isDesktop} $isBanner={isBanner}>
      <MainText $isDesktop={isDesktop}>{mainText}</MainText>
      <SubText $isDesktop={isDesktop}>{subText}</SubText>
    </Wrapper>
  );
};

export default TitleSet;
