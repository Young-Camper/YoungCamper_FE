import React from "react";
import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";

const Wrapper = styled.div`
  display: flex;
  padding: ${(props) => (props.$isDesktop ? "48px" : "30px")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;
const Container = styled.div`
  display: flex;
  padding: ${(props) => (props.$isDesktop ? "48px" : "20px")};
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  border-radius: 12px;
  border: 1.5px solid var(--main-neutral300, #ced7de);
  opacity: var(--sds-size-stroke-border);
`;
const MainText = styled.div`
  color: var(--Neutrals-Neutrals600, #726c6c);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  letter-spacing: 0.4px;
`;
const SubText = styled.div`
  color: var(--Neutrals-Neutrals600, #726c6c);
  font-family: "Apple SD Gothic Neo";
  font-size: ${(props) => (props.$isDesktop ? "18px" : "16px")};
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  letter-spacing: -0.45px;
`;

const Attention = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <Wrapper $isMobile={isMobile} $isTablet={isTablet} $isDesktop={isDesktop}>
      <Container
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <MainText
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          유의사항
        </MainText>
        <SubText
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          ∙ 영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한
          축제입니다. 젊은이들의 에너지와 불교의 깊은 가르침이 어우러져 새로운
          경험과 영감을 제공합니다. <br />
          ∙ 영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한
          축제입니다. 젊은이들의 에너지와 불교의 깊은 가르침이 어우러져 새로운
          경험과 영감을 제공합니다. <br />∙ 영캠프는 대한민국 대학 불교
          동아리들이 연합하여 주최하는 특별한 축제입니다. 젊은이들의 에너지와
          불교의 깊은 가르침이 어우러져 새로운 경험과 영감을 제공합니다.
        </SubText>
      </Container>
    </Wrapper>
  );
};

export default Attention;
