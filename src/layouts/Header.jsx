import React from "react";
import styled from "styled-components";
import useMediaQueries from "../hooks/useMediaQueries";

//반응형 활용 예시 코드
//추후 피그마 보고 수정할 것
const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.isMobile ? "#ffe6ea" : props.isTablet ? "#f0e6ea" : "#d3c0e0"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) =>
    props.isMobile ? "10px" : props.isTablet ? "15px" : "20px"};
`;

const Header = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    //Wrapper 컴포넌트에 isMobile, isTablet, isDesktop 값을 props로 전달
    //주의: props 할때 dom문제로 인해 props하는 앞에 "$"를 쓰지 않으면 콘솔에 error 뜸!
    //밑 코드의 $isMobile 처럼 "$" 붙이기!
    <Wrapper $isMobile={isMobile} $isTablet={isTablet} $isDesktop={isDesktop}>
      {isMobile && <span>Mobile Header</span>}
      {isTablet && <span>Tablet Header</span>}
      {isDesktop && <span>Desktop Header</span>}
    </Wrapper>
  );
};

export default Header;
