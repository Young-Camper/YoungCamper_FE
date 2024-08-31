import React from "react";
import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";
import TitleSet from "./TitleSet";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: ${(props) => (props.$isDesktop ? "280px" : "150px")};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--sds-size-space-600);
  align-self: stretch;

  opacity: var(--sds-size-stroke-border);
  background: var(--Base-Base-White, #fafafa);
`;
const BannerWrapper = styled.div`
  /* 가운데 정렬 */
  margin: 0 auto;
  /* margin: ${(props) => (props.$isDesktop ? " 0 auto" : "")}; */
  padding: ${(props) =>
    (props.$isTablet || props.$isMobile) &&
    "0 4px"}; /* TitleSet.jsx padding: 20px => 합 24px*/

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const MainTitle = ({ mainText, subText }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <Wrapper $isMobile={isMobile} $isTablet={isTablet} $isDesktop={isDesktop}>
      <BannerWrapper
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <TitleSet mainText={mainText} subText={subText} isBanner={isDesktop} />
      </BannerWrapper>
    </Wrapper>
  );
};

export default MainTitle;
