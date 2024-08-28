import React from 'react'
import * as S from "./HomeStyle";
import VideoSrc from "../../assets/video/video-1.mp4";

const Video = () => {
  return(
    <S.VideoSection>
      <S.VideoSectionBox>
        <S.VideoBox>
          <S.VideoIFrame src={VideoSrc} autoPlay loop muted></S.VideoIFrame>
          <S.VideoFrame>
            <S.VideoFrameText>홍보영상 보러가기</S.VideoFrameText>
            <S.VideoFrameImg src=".\src\assets\images\Home\Arrow.png" />
          </S.VideoFrame>
        </S.VideoBox>
        <S.CardSecionBox>
          <S.CardText1>THE YOUNGCAMP</S.CardText1>
          <S.CardDetailBox>
            <S.CardText2>지루한 일상을 탈출하고 싶으신가요?{"\n"}{"\n"}
            동국대학교 연합 불교 동아리에서 연합해서 만든,{"\n"}
            단 하루뿐인 특별한 축제,{"\n"}{"\n"}
            영캠프에 오신 걸 환영합니다!</S.CardText2>
          </S.CardDetailBox>
        </S.CardSecionBox>
      </S.VideoSectionBox>
      
    </S.VideoSection>
  )
}

export default Video