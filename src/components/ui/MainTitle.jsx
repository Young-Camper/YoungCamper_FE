import React from "react";
import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";
import TitleSet from "./TitleSet";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: ${(props) =>
    props.isMobile
      ? "100px" /* 모바일 미반영 */
      : props.isTablet
      ? "180px" /* 테블릿 미반영 */
      : "280px"}; /* 데스크탑 280px */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--sds-size-space-600);
  align-self: stretch;

  opacity: var(--sds-size-stroke-border);
  background: var(--Base-Base-White, #fafafa);
  font-size: ${(props) =>
    props.isMobile
      ? "20px" /* 모바일 미반영 */
      : props.isTablet
      ? "30px" /* 테블릿 미반영 */
      : "40px"}; /* 데스크탑 40px */
`;
const BannerWrapper = styled.div`
  padding: 0px 180px;

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
    <Wrapper isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
      <BannerWrapper>
        <TitleSet mainText={mainText} subText={subText} />
      </BannerWrapper>
    </Wrapper>
  );
};

export default MainTitle;
