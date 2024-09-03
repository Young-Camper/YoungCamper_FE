import React, {useState} from "react";
import * as S from "./style";
import TitleSet from "../../components/ui/TitleSet";
import styled from "styled-components";

import useMediaQueries from "../../hooks/useMediaQueries";

const Container = styled.div`
  width: 1100px;
  height: 1317px;
  padding: 0 48px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) { // isMobile 상태를 활용
    width: 100%; // 화면 너비에 맞춰 꽉 채우기
    height: auto; // 높이 자동 조절
    padding: 24px; // 패딩 조절
  }
`;

const ContentArea = styled.div`
  align-self: stretch;
  height: 1234px;
  padding: 48px;
  background: white;
  border: 2px #0068FF solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
      align-self: stretch;
  height: 388px;
  padding: 0px;
  background-color: white;
  border: 1px solid #0068FF;
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  }
`;

const Title = styled.div`
  align-self: stretch;
  padding: 48px 48px 0; /* 상단 패딩만 추가 */
  display: inline-flex;
  justify-content: left;
  align-items: center;
  color: #0A0B0A;
  font-size: 28px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
  @media (min-width: 768px) {
    align-self: stretch;
    padding: 12px;
    display: inline-flex;
    align-items: center;
  
    & > div {
      flex: 1 1 0;
      color: #0A0B0A;
      font-size: 16px;
      font-family: 'Montserrat';
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0.16px;
      word-wrap: break-word;
    }
  }
`;

const Description = styled.div`
  align-self: stretch;
  padding: 48px;
  display: inline-flex;
  justify-content: left;
  align-items: center;
  color: #0A0B0A;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
  }
`;

const ImageContainer = styled.div`
  align-self: stretch;
  height: 878px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
      height: auto; // 모바일에서는 높이를 자동으로 조절합니다.
      padding: 12px; 
  }
`;

const Image = styled.img`
  align-self: stretch;
  height: 782px;

  @media (max-width: 768px) {
      width: 100%; // 이미지 너비를 부모 컨테이너에 맞춰 꽉 채웁니다.
      height: auto; // 이미지 높이를 자동으로 조절합니다.
  }
`;

export const FloorSelector = styled.div`
  align-self: stretch;
  height: 83px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    height: 47px;
  }
`;

export const FloorButton = styled.div`
  flex: 1 1 0;
  align-self: stretch;
  padding: 48px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 28px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
  border: 2px #0068FF solid;

  ${props => props.active ? `
    background: #0068FF;
    color: #FAFAFA;

    // active 상태일 때 hover 효과를 덮어쓰도록 설정
    &:hover {
      background: #0068FF; // hover 시 배경색 유지
      color: #FAFAFA; // hover 시 글자색 유지
    }
  ` : `
    background: white;
    color: #0068FF;
    &:hover {
      background: linear-gradient(102deg, #0068FF 0%, #B9FF9C 100%);
      color: #FAFAFA;
    }
  `}
`;

const LocMap = () => {
  const [floor,setFloor] = useState(1);
  const isMobile = useMediaQueries("max-width", 768);
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  const floorData = {
    1: {
      title: "1층 현장 배치도",
      description: "영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다.",
      image: "{`${mediaUrl}Location/1_floor_img.png`}",
    },
    2: {
      title: "2층 현장 배치도",
      description: "영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다.",
      image: "{`${mediaUrl}Location/1_floor_img.png`}",
    },
  };
  return (
    <>
      <TitleSet
        mainText="배치도"
        subText="잠깐 입장하기 전에 주요 시설 위치 확인 해야지!"
      />
      <Container>
        <FloorSelector>
          <FloorButton active={floor === 1} onClick={() => setFloor(1)}>1층</FloorButton>
          <FloorButton active={floor === 2} onClick={() => setFloor(2)}>2층</FloorButton>
        </FloorSelector>
        <ContentArea>
          <Title>{floorData[floor].title}</Title>
          <Description>
            {floorData[floor].description}
          </Description>
          <ImageContainer>
            <Image src={floorData[floor].image} />
          </ImageContainer>
      </ContentArea>
      </Container>

    </>
  );
};

export default LocMap;