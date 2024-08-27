import React from "react";
import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";

const Wrapper = styled.div`
  display: flex;
  width: ${(props) => props.$isDesktop && "1100px"};
  padding: ${(props) =>
    props.$isDesktop
      ? "48px"
      : "30px 20px"}; /* 데스크탑 48px, 모바일+태블릿 0 36px */
  flex-direction: column;
  align-items: flex-start;
  gap: ${(props) =>
    props.$isDesktop ? "24px" : "12px"}; /* 데스크탑 24px, 모바일+태블릿 12px */
`;
const MainText = styled.div`
  color: var(--text-black, #0a0b0a);

  /* Primary/Desktop/Hero2 */
  font-family: Montserrat;
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
  font-family: Montserrat;
  font-size: ${(props) =>
    props.$isDesktop ? "22px" : "12px"}; /* 데스크탑 22px, 모바일+태블릿 12px */
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.11px;
`;

const TitleSet = ({ mainText, subText }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <Wrapper $isMobile={isMobile} $isTablet={isTablet} $isDesktop={isDesktop}>
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
