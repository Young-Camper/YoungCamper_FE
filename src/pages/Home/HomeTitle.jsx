import React, { useState } from 'react'
import * as S from "./HomeStyle";
import { Link } from "react-router-dom";

const HomeTitle = () => {
  const [isHoveringDate, setIsHoveringDate] = useState(false);
  const [isHoveringPlace, setIsHoveringPlace] = useState(false);
  const [isHoveringWith, setIsHoveringWith] = useState(false);

  

  const handleMouseOver1 = () => {
    setIsHoveringDate(true);
  };
  const handleMouseOut1 = () => {
    setIsHoveringDate(false);
  };
  const handleMouseOver2 = () => {
    setIsHoveringPlace(true);
  };
  const handleMouseOut2 = () => {
    setIsHoveringPlace(false);
  };
  const handleMouseOver3 = () => {
    setIsHoveringWith(true);
  };
  const handleMouseOut3 = () => {
    setIsHoveringWith(false);
  };

  return(
    <S.TitleBackground>
        <S.TitleBox>
            <S.Line></S.Line>
            <S.TextBox1>
              <S.TitleImg src=".\src\assets\images\Dawn.png" />
              <S.TitleText1>YOUNGCAMP</S.TitleText1>
              <S.TitleImg src=".\src\assets\images\Portal.png" />
            </S.TextBox1>
            <S.Line></S.Line>
            <S.TextBox2>
              <S.Rectangle></S.Rectangle>
              <S.TextBox3>
                <S.TitleText2>FESTIVAL</S.TitleText2>             
                <S.TitleImg src=".\src\assets\images\Dawn.png" />
              </S.TextBox3>
            </S.TextBox2>
            <S.Line></S.Line>
        </S.TitleBox>
        <S.TextBox2></S.TextBox2>
        <S.Line></S.Line>
          <S.TitleList
          onMouseOver={handleMouseOver1}
          onMouseOut={handleMouseOut1}>
            <S.TitleFrameBox>
              <S.TitleFrameImg ishoveringDate={isHoveringDate}></S.TitleFrameImg>
              <S.TitleFrameText ishoveringDate={isHoveringDate}>2024.09.24</S.TitleFrameText>
            </S.TitleFrameBox>
            <S.ArrowImgBox>
              <Link to={"/performance"}>
                <S.ArrowImg ishoveringDate={isHoveringDate}></S.ArrowImg>
              </Link>
            </S.ArrowImgBox>
        </S.TitleList>
        <S.Line></S.Line>
        <S.TitleList
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}>
          <S.TitleFrameBox>
            <S.TitleFrameImg ishoveringPlace={isHoveringPlace}></S.TitleFrameImg>
            <S.TitleFrameText ishoveringPlace={isHoveringPlace}>장충체육관</S.TitleFrameText>
          </S.TitleFrameBox>
          <S.ArrowImgBox>
            <Link to={"/location"}>
              <S.ArrowImg ishoveringPlace={isHoveringPlace}></S.ArrowImg>
            </Link>
          </S.ArrowImgBox>
        </S.TitleList>
        <S.Line></S.Line>
        <S.TitleList
        onMouseOver={handleMouseOver3}
        onMouseOut={handleMouseOut3}>
          <S.TitleFrameBox>
            <S.TitleFrameImg ishoveringWith={isHoveringWith}></S.TitleFrameImg>
            <S.TitleFrameText ishoveringWith={isHoveringWith}>YOUNGCAMP 함께하기</S.TitleFrameText>
          </S.TitleFrameBox>
          <S.ArrowImgBox>
            <Link to={"./promotion"}>
              <S.ArrowImg ishoveringWith={isHoveringWith}></S.ArrowImg>
            </Link>
          </S.ArrowImgBox>
        </S.TitleList>
        <S.Line></S.Line>
    </S.TitleBackground>
  )
}

export default HomeTitle