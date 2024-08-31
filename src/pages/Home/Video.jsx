import React, { useState } from "react";
import * as S from "./HomeStyle";
import VideoSrc from "../../assets/video/video-1.mp4";
import useMediaQueries from "../../hooks/useMediaQueries";
import { Link } from "react-router-dom";

const Video = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  const [isHoveringVideo, setIsHoveringVideo] = useState(false);

  const handleMouseOver = () => {
    setIsHoveringVideo(true);
  };
  const handleMouseOut = () => {
    setIsHoveringVideo(false);
  };

  return (
    <S.VideoSection
      $isTablet={isTablet}
      $isMobile={isMobile}
      $isDesktop={isDesktop}
    >
      <S.VideoSectionBox
        $isDesktop={isDesktop}
        $isTablet={isTablet}
        $isMobile={isMobile}
      >
        <S.VideoBox
          $isTablet={isTablet}
          $isDesktop={isDesktop}
          src={VideoSrc}
          autoPlay
          loop
          muted
        >
          <S.VideoBtn $isTablet={isTablet} $isDesktop={isDesktop}>
            영상 보러가기
          </S.VideoBtn>
        </S.VideoBox>
      </S.VideoSectionBox>
      <S.CardSecionBox $isTablet={isTablet} $isDesktop={isDesktop}>
        <S.CardText1 $isTablet={isTablet} $isMobile={isMobile}>
          THE YOUNGCAMP
        </S.CardText1>
        
        <S.CardDetailBox $isMobile={isMobile}>
          <S.CardText2 $isTablet={isTablet} $isDesktop={isDesktop}>
            지루한 일상을 탈출하고 싶으신가요?{"\n"}
            {"\n"}
            동국대학교 연합 불교 동아리에서 연합해서 만든, 단 하루뿐인 특별한
            축제,{"\n"}
            {"\n"}
            영캠프에 오신 걸 환영합니다!
          </S.CardText2>
        </S.CardDetailBox>
        
        <Link to="/about" style={{ width: '100%' }}>
          <S.CardButtonBox $isDesktop={isDesktop}>
          
            <S.CardButton
              $isDesktop={isDesktop}
              ishoveringVideo={isHoveringVideo}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              영캠프 더 알아보기
            </S.CardButton>
            
          </S.CardButtonBox>
          </Link>
        
      </S.CardSecionBox>
    </S.VideoSection>
  );
};

export default Video;

{/* <Link to={"/about"}>
</Link> */}