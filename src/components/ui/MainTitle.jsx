import React from "react";
import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";
import { ContentWrapper } from "../../style/commonStyle";

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
const BannerWrapper = styled(ContentWrapper)`
  padding: 0px 228px; /* 180px + 48px */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;
const MainText = styled.div`
  color: var(--new-main-black, #0a0b0a);
  text-align: center;

  /* Primary/Desktop/Hero2 */
  font-family: Montserrat;
  font-size: 38px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -3.04px;
`;
const SubText = styled.div`
  color: var(--new-grey-grey600, #92a5b5);

  /* Primary/Desktop/Body2_regular */
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.1px;
`;

const MainTitle = ({ title }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <Wrapper isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
      <BannerWrapper>
        <MainText>{title}</MainText>
        {/* 아래 글은 추후 props로 수정될 예정입니다. */}
        <SubText>
          영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한
          축제입니다.
        </SubText>
      </BannerWrapper>
    </Wrapper>
  );
};

export default MainTitle;
