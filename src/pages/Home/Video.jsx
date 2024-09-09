import React, { useState } from "react";
import * as S from "./HomeStyle";
import useMediaQueries from "../../hooks/useMediaQueries";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const mediaUrl = import.meta.env.VITE_MEDIA_URL;

const Video = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  const [isHoveringVideo, setIsHoveringVideo] = useState(false);

  const handleMouseOver = () => {
    setIsHoveringVideo(true);
  };
  const handleMouseOut = () => {
    setIsHoveringVideo(false);
  };

  const { t } = useTranslation();
  const welcome = isMobile ? t("home.mwelcome") : t("home.welcome");

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
          src={`${mediaUrl}Home/YoungcampVideoF.mov`}
          autoPlay
          loop
          muted
          playsInline
        />
        <Link
          to={`https://youtube.com/@youngcamp_dgu?si=varFM5dZcDp2CaaU`}
          style={{ width: "100%" }}
        >
          <S.VideoBtnBox $isMobile={isMobile}>
            <S.VideoBtnText $isTablet={isTablet} $isDesktop={isDesktop}>
              영상 보러가기
            </S.VideoBtnText>
            <S.VideoBtnImg
              $isTablet={isTablet}
              $isDesktop={isDesktop}
            ></S.VideoBtnImg>
          </S.VideoBtnBox>
        </Link>
      </S.VideoSectionBox>
      <S.CardSecionBox $isTablet={isTablet} $isDesktop={isDesktop}>
        <S.CardText1 $isTablet={isTablet} $isMobile={isMobile}>
          THE YOUNGCAMP
        </S.CardText1>

        <S.CardDetailBox $isMobile={isMobile}>
          <S.CardText2 $isTablet={isTablet} $isDesktop={isDesktop}>
            {welcome}
          </S.CardText2>
        </S.CardDetailBox>

        <Link to="/intro" style={{ width: "100%" }}>
          <S.CardButtonBox $isDesktop={isDesktop}>
            <S.CardButton
              $isDesktop={isDesktop}
              $ishoveringVideo={isHoveringVideo}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {t("home.more")}
            </S.CardButton>
          </S.CardButtonBox>
        </Link>
      </S.CardSecionBox>
    </S.VideoSection>
  );
};

export default Video;
