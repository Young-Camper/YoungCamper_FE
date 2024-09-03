import React from "react";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const IntroBanner = () => {
  const { isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  return (
    <S.IntroBanner $isDesktop={isDesktop}>
      <S.IntroImg src={`${mediaUrl}Intro/intro_banner.png`} />
      <S.IntroWrapper $isDesktop={isDesktop}>
        <S.IntroTitle $isDesktop={isDesktop}>
          대한민국 최대 규모 <br />
          청년 불자의 축제,
        </S.IntroTitle>
        <S.IntroLogo $isDesktop={isDesktop}>YOUNG CAMP</S.IntroLogo>
      </S.IntroWrapper>
    </S.IntroBanner>
  );
};

export default IntroBanner;
