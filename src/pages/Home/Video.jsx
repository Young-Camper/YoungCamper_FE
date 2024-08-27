import React from 'react'
import * as S from "./HomeStyle";
import VideoSrc from "../../assets/video-1.mp4";

const Video = () => {
  return(
    <S.VideoSection>
      <S.VideoSectionBox>
        <S.VideoBox>
          <S.VideoIFrame src={VideoSrc} autoPlay loop muted></S.VideoIFrame>
          <S.VideoFrame>
            <S.VideoFrameText>홍보영상 보러가기</S.VideoFrameText>
            <S.VideoFrameImg src=".\src\assets\images\Arrow.png" />
          </S.VideoFrame>
        </S.VideoBox>
        <S.CardSecionBox>
          <S.CardText1>THE YOUNGCAMP</S.CardText1>
          <S.CardDetailBox>
            <S.CardText2>영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 
                젊은이들의 에너지와 불교의 깊은 가르침이 어우러져 새로운 경험과 영감을 제공합니다.</S.CardText2>
          </S.CardDetailBox>
        </S.CardSecionBox>
      </S.VideoSectionBox>
      
    </S.VideoSection>
  )
}

export default Video