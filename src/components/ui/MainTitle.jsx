import React from "react";
import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  /* 프롭스 */
  height: ${(props) =>
    props.isMobile ? "100px" : props.isTablet ? "180px" : "280px"};
  padding: ${(props) => "0px 20px"};
  flex-direction: column;
  justify-content: center;
  align-items: start;

  color: var(--text-real-black, #0a0b0a);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: ${(props) =>
    props.isMobile ? "20px" : props.isTablet ? "30px" : "40px"};
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const MainTitle = ({ title }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <Wrapper isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
      {title}
    </Wrapper>
  );
};

export default MainTitle;
