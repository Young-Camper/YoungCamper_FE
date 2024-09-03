import React from "react";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const IntroBanner = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  return (
    <S.IntroBanner>
      <S.IntroImg src={`${mediaUrl}Intro/intro_banner.png`} />
      <S.IntroWrapper>
        <S.IntroTitle>
          대한민국 최대 규모 <br />
          청년 불자의 축제,
        </S.IntroTitle>
        <S.IntroLogo>YOUNG CAMP</S.IntroLogo>
      </S.IntroWrapper>
    </S.IntroBanner>
  );
};

export default IntroBanner;
