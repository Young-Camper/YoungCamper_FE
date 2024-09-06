import React, {useState} from "react";
import * as S from "./style";
import TitleSet from "./locTitleSet";
import styled from "styled-components";

import useMediaQueries from "../../hooks/useMediaQueries";

export const FloorSelector = styled.div`
  align-self: stretch;
  height: ${props=>props.ismobile ? '47px':'83px'};
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FloorButton = styled.div`
  flex: 1 1 0;
  align-self: stretch;
  padding: ${ props => props.ismobile ?
    '16px 8px'
    : '48px 24px'};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${props => props.ismobile ? '16px' : '24px'};
  font-family: "MonRegular";
  word-wrap: break-word;
  border: 2px #0068FF solid;
  border-bottom: none;

  ${props => props.active ? `
    background: #0068FF;
    color: #FAFAFA;

    // active 상태일 때 hover 효과를 덮어쓰도록 설정
    &:hover {
      background: #0068FF; // hover 시 배경색 유지
      color: #FAFAFA; // hover 시 글자색 유지
      border: 2px transparent solid
    };
  ` : `
    background: white;
    color: #0068FF;
    &:hover {
      background: linear-gradient(102deg, #0068FF 0%, #B9FF9C 100%);
      color: #FAFAFA;
    };
  `}
`;

const LocMap = () => {
  const [floor,setFloor] = useState(1);
  const { isMobile} = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  const floorData = {
    1: {
      title: "1층 현장 배치도",
      description:
        "영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다.",
      image: `${mediaUrl}Location/location_pic.png`,
      image_mobile: `${mediaUrl}Location/location_pic.png`
    },
    2: {
      title: "2층 현장 배치도",
      description:
        "영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다.",
      image: `${mediaUrl}Location/location_pic.png`,
      image_mobile: `${mediaUrl}Location/location_pic.png`
    },
  };
  return (
    <>
      <TitleSet
        mainText="배치도"
        subText="잠깐 입장하기 전에 주요 시설 위치 확인 해야지!"
      />
      <S.LocContainer ismobile = {isMobile}>
        <FloorSelector ismobile = {isMobile} >
          <FloorButton active={floor === 1} onClick={() => setFloor(1)} ismobile = {isMobile}>배치도</FloorButton>
        </FloorSelector>
        <S.LocContentArea ismobile = {isMobile}>
            <S.LocTitle ismobile = {isMobile} >{floorData[floor].title}</S.LocTitle>
            <S.LocDescription ismobile = {isMobile} > {floorData[floor].description} </S.LocDescription>
          <S.LocImageContainer ismobile = {isMobile}>
            { !isMobile && <S.LocImage src={floorData[floor].image} ismobile={isMobile} /> }
            { isMobile && <S.LocImage src={floorData[floor].image_mobile} ismobile={isMobile} /> }
          </S.LocImageContainer>
      </S.LocContentArea>
      </S.LocContainer>

    </>
  );
};

export default LocMap;
