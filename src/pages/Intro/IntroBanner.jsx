import React from "react";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const IntroBanner = () => {
  const { isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const { t } = useTranslation();

  return (
    <S.IntroBanner $isDesktop={isDesktop}>
      <S.IntroImg src={`${mediaUrl}Intro/intro_banner.png`} />
      <S.IntroWrapper $isDesktop={isDesktop}>
        <S.IntroTitle $isDesktop={isDesktop}>
          {t(`about.bannerSubtitle`)}
        </S.IntroTitle>
        <S.IntroLogo $isDesktop={isDesktop}>YOUNG CAMP</S.IntroLogo>
      </S.IntroWrapper>
    </S.IntroBanner>
  );
};

export default IntroBanner;
