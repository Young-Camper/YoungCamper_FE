import React from "react";
import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";

const Wrapper = styled.div`
  display: flex;
  /* width: ${(props) => props.$isDesktop && "1100px"}; */
  /* 반응형 */
  width: ${(props) =>
    props.$isDesktop ? "1100px" : props.$isTablet ? "672px" : "360px"};

  padding: ${(props) =>
    props.$isBanner
      ? "0 48px"
      : props.$isDesktop
      ? "48px 0"
      : "30px 20px"}; /* 데스크탑 48px, 모바일|태블릿 0 36px */

  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  /* 768px ~ 1150px 사이의 별도 padding 값 적용 (기존 1110일 때 좌우 padding 0) */
  @media (min-width: 768px) and (max-width: 1150px) {
    padding: ${(props) =>
      props.$isBanner ? "0 68px" : props.$isDesktop ? "48px 20px" : ""};
  }
`;
const MainText = styled.div`
  color: var(--text-black, #0a0b0a);

  /* Primary/Desktop/Hero2 */
  font-family: MonAExtraBold;
  font-size: ${(props) =>
    props.$isDesktop ? "38px" : "20px"}; /* 데스크탑 38px, 모바일+태블릿 20px */
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -3.04px;
`;
const SubText = styled.div`
  color: var(--text-grey800, #637d92);

  /* Primary/Desktop/Body1_regular */
  font-family: MonARegular;
  font-size: ${(props) =>
    props.$isDesktop ? "22px" : "12px"}; /* 데스크탑 22px, 모바일+태블릿 12px */
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.11px;
`;

const TitleSet = ({ mainText, subText, isBanner }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <Wrapper $isDesktop={isDesktop} $isTablet={isTablet} $isBanner={isBanner}>
      <MainText
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        {mainText}
      </MainText>
      <SubText $isMobile={isMobile} $isTablet={isTablet} $isDesktop={isDesktop}>
        {subText}
      </SubText>
    </Wrapper>
  );
};

export default TitleSet;
