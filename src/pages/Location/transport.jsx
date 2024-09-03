import React from "react";
import * as S from "./style";
import TitleSet from "../../components/ui/TitleSet";
import TransportContainer from "./TransportContainer";
import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";

const Container = styled.div`
  padding: 0px 48px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) { // isMobile 상태를 활용
    width: 100%; // 
    height: auto; // 
    padding: 0px;
    font-size: 16px;
  }
`;

const Transport = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      <TitleSet isDesktop={isDesktop}
        mainText="오시는 길"
      />
      <Container>
        <TransportContainer/>
      </Container>
    </>
  );
};

export default Transport;