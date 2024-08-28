import React, { useState } from 'react'
import * as S from "./HomeStyle";
import { Link } from "react-router-dom";

const HomeTitle = () => {

  const [titleHover, setTitleHover] = useState({
    date: false,
    place: false,
    with: false,
  });

  const handleMouseOver = (key) => {
    setTitleHover((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseOut = (key) => {
    setTitleHover((prev) => ({ ...prev, [key]: false }));
  };

  return(
    <S.TitleSection>
        <S.TitleMainSet>
            <S.TitleBox>
              <S.TextBox>
              <S.TitleImg src=".\src\assets\images\Home\Dawn.png" />
              <S.TitleText>YOUNG</S.TitleText>
              <S.TitleImg src=".\src\assets\images\Home\Portal.png" />
              </S.TextBox>
            </S.TitleBox>
            <S.TitleBox>
              <S.TextBox>
                <S.Rectangle></S.Rectangle>
                <S.TitleText>CAMP</S.TitleText>             
                <S.TitleImg src=".\src\assets\images\Home\Dawn.png" />
              </S.TextBox>
            </S.TitleBox>
            <S.TitleBox>
              <S.TextBox>
                <S.TitleText>FESTIVAL</S.TitleText>
              </S.TextBox>
            </S.TitleBox>
        </S.TitleMainSet>
        <S.TitleListSet>
          <S.Line></S.Line>
          <S.TitleList
          onMouseOver={() =>handleMouseOver('date')}
          onMouseOut={() =>handleMouseOut('date')}>
            <S.TitleFrameBox>
              <S.TitleFrameImg ishoveringDate={titleHover.date}></S.TitleFrameImg>
              <S.TitleFrameText ishoveringDate={titleHover.date}>2024.09.24</S.TitleFrameText>
            </S.TitleFrameBox>
            <S.ArrowImgBox>
              <Link to={"/performance"}>
                <S.ArrowImg ishoveringDate={titleHover.date}></S.ArrowImg>
              </Link>
            </S.ArrowImgBox>
          </S.TitleList>
        <S.Line></S.Line>
        <S.TitleList
          onMouseOver={() =>handleMouseOver('place')}
          onMouseOut={() =>handleMouseOut('place')}>
          <S.TitleFrameBox>
            <S.TitleFrameImg ishoveringPlace={titleHover.place}></S.TitleFrameImg>
            <S.TitleFrameText ishoveringPlace={titleHover.place}>장충체육관</S.TitleFrameText>
          </S.TitleFrameBox>
          <S.ArrowImgBox>
            <Link to={"/location"}>
              <S.ArrowImg ishoveringPlace={titleHover.place}></S.ArrowImg>
            </Link>
          </S.ArrowImgBox>
        </S.TitleList>
        <S.Line></S.Line>
        <S.TitleList
        onMouseOver={() =>handleMouseOver('with')}
        onMouseOut={() =>handleMouseOut('with')}>
          <S.TitleFrameBox>
            <S.TitleFrameImg ishoveringWith={titleHover.with}></S.TitleFrameImg>
            <S.TitleFrameText ishoveringWith={titleHover.with}>YOUNGCAMP 함께하기</S.TitleFrameText>
          </S.TitleFrameBox>
          <S.ArrowImgBox>
            <Link to={"./promotion"}>
              <S.ArrowImg ishoveringWith={titleHover.with}></S.ArrowImg>
            </Link>
          </S.ArrowImgBox>
        </S.TitleList>
        <S.Line></S.Line>
        </S.TitleListSet>
    </S.TitleSection>
  )
}

export default HomeTitle