import React from 'react';
import styled from 'styled-components';
import useMediaQueries from "../../hooks/useMediaQueries";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

const Section = styled.div`
  align-self: stretch;
  height: ${props => props.height || 'auto'}; // height prop을 전달받아 동적으로 설정
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`;

const TitleContainer = styled.div`
  align-self: stretch;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

`;

const TitleBadge = styled.div`
  padding: 4px 16px;
  border-radius: 100px;
  border: 2px #0068FF solid;
  display: inline-flex;
  justify-content: center;
  align-items: center;

`;

const TitleText = styled.div`
  text-align: center;
  color: #0068FF;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 28px;
  word-wrap: break-word;

`;

const SectionTitle = styled.div`
  align-self: stretch;
  padding-left: 6px;
  padding-right: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;


  & > div {
    flex: 1 1 0;
    color: #0A0B0A;
    font-size: 20px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    line-height: 28px;
    word-wrap: break-word;
  }
`;

const BusStopContainer = styled.div`
  align-self: stretch;
  height: 164px;
  padding-left: 6px;
  padding-right: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
`;

const BusStopInfo = styled.div`
  align-self: stretch;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 12px;
`;

const BusStopName = styled.div`
  color: #0A0B0A;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 28px;
  word-wrap: break-word;
`;

const BusNumbers = styled.div`
  align-self: stretch;
  color: #0A0B0A;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 30px;
  word-wrap: break-word;

`;

const transportway =  () => {
  return (
    <Container>
      <Section height={96}>
        <TitleContainer>
          <TitleBadge>
            <TitleText>지하철</TitleText>
          </TitleBadge>
        </TitleContainer>
        <SectionTitle>
          <div>지하철 3호선 동대입구역 5번출구 (체육관 직접연결)</div>
        </SectionTitle>
      </Section>
      <Section height={232}>
        <TitleContainer>
          <TitleBadge>
            <TitleText>버스</TitleText>
          </TitleBadge>
        </TitleContainer>
        <BusStopContainer>
          <BusStopInfo>
            <BusStopName>장충체육관앞</BusStopName>
            <BusNumbers>02-201(서울) N13, 144, 301, 7212</BusNumbers>
          </BusStopInfo>
          <BusStopInfo>
            <BusStopName>동대입구역.장충동</BusStopName>
            <BusNumbers>02-222(서울) 05, 02, 03</BusNumbers>
          </BusStopInfo>
        </BusStopContainer>
      </Section>
    </Container>
  );
}

export default transportway;