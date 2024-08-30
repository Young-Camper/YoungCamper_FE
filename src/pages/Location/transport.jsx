import React from "react";
import * as S from "./style";
import TitleSet from "../../components/ui/TitleSet";
import TransportContainer from "./TransportContainer";
import styled from "styled-components";

const Container = styled.div`

  padding: 0 48px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Transport = () => {

  return (
    <>
      <TitleSet
        mainText="오시는 길"
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
      />
      <Container>
        <TransportContainer/>
      </Container>
    </>
  );
};

export default Transport;