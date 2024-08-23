import React from 'react'
import * as S from "./style";
import VideoSrc from "./video-1.mp4";

const Title = () => {
  return (
    <S.HeroBanner>
        <S.HeroText1>
          <S.Title1>YOUNGCAMP</S.Title1>
          <S.TitleImg src=".\src\pages\Home\Portal.png"/>
        </S.HeroText1>
        <S.Line></S.Line>
        <S.HeroText2>
          <S.TitleImg src=".\src\pages\Home\Dawn.png"/>
          <S.Title2>FESTIVAL</S.Title2>
          <S.TitleImg src=".\src\pages\Home\Dawn.png"/>
        </S.HeroText2>
        <S.Line></S.Line>
        <S.VideoBoxTop>
          <S.Video src={VideoSrc} autoPlay loop muted />
        </S.VideoBoxTop>
        <S.VideoBoxBottom>
          <S.BottomText>홍보영상 보러가기</S.BottomText>
          <S.BottomImg src=".\src\pages\Home\pointer.png" />
        </S.VideoBoxBottom>
        <S.ScrollHero>
          <S.Vertical></S.Vertical>
          <S.ScrollText>YOUNGCAMP</S.ScrollText>
        </S.ScrollHero>
    </S.HeroBanner>
  )
}

export default Title
