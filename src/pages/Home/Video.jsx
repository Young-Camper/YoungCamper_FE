import React from 'react'
import * as S from "./HomeStyle";
import VideoSrc from "../../assets/video/video-1.mp4";
import useMediaQueries from "../../hooks/useMediaQueries";

const Video = () => {

  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return(
    <S.VideoSection
    $isTablet={isTablet}
    $isMobile={isMobile}
    $isDesktop={isDesktop}>
      <S.VideoSectionBox $isDesktop={isDesktop} $isTablet={isTablet} $isMobile={isMobile}>
        <S.VideoBox $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.VideoIFrame src={VideoSrc} autoPlay loop muted></S.VideoIFrame>
          <S.VideoFrame $isDesktop={isDesktop}>
            <S.VideoFrameText $isTablet={isTablet} $isDesktop={isDesktop}>홍보영상 보러가기</S.VideoFrameText>
            <S.VideoFrameImg $isMobile={isMobile} $isDesktop={isDesktop} src=".\src\assets\images\Home\Arrow.png" />
          </S.VideoFrame>
        </S.VideoBox>
      </S.VideoSectionBox>
      <S.CardSecionBox $isTablet={isTablet} $isDesktop={isDesktop}>
        <S.CardText1 $isTablet={isTablet} $isDesktop={isDesktop}>THE YOUNGCAMP</S.CardText1>
        <S.CardDetailBox $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.CardText2 $isTablet={isTablet} $isDesktop={isDesktop}>지루한 일상을 탈출하고 싶으신가요?{"\n"}{"\n"}
          동국대학교 연합 불교 동아리에서 연합해서 만든,{"\n"}
          단 하루뿐인 특별한 축제,{"\n"}{"\n"}
          영캠프에 오신 걸 환영합니다!</S.CardText2>
        </S.CardDetailBox>
      </S.CardSecionBox>
      
      
    </S.VideoSection>
  )
}

export default Video