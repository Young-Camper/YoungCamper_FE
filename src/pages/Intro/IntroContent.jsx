import React from "react";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IntroContent = () => {
  const { isTablet, isDesktop, isMobile } = useMediaQueries();
  const navigate = useNavigate();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const { t } = useTranslation();
  const title = isMobile ? t("about.mtitle") : t("about.title");
  const subtitle = isMobile ? t("about.msubtitle") : t("about.subtitle");
  const content = isDesktop ? t("about.dcontent") : t("about.mcontent");

  return (
    <>
      <S.MainText $isDesktop={isDesktop} $isMobile={isMobile}>
        {title}
      </S.MainText>
      <S.ContentTitle $isDesktop={isDesktop} $isMobile={isMobile}>
        {subtitle}
      </S.ContentTitle>
      <S.ContentText $isDesktop={isDesktop}>{content}</S.ContentText>
      <S.YoungcampImg src={`${mediaUrl}Intro/youngcamp_intro.png`} />
      <S.BtnWrapper>
        <S.JoinBtn
          $isDesktop={isDesktop}
          $isTablet={isTablet}
          onClick={() => navigate("/performance")}
        >
          {t(`about.btn`)}
        </S.JoinBtn>
      </S.BtnWrapper>
    </>
  );
};

export default IntroContent;
