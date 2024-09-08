import React, { useState } from "react";
import * as S from "./HomeStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const mediaUrl = import.meta.env.VITE_MEDIA_URL;

const CTABanner = () => {
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);

  const handleMouseOver10 = () => {
    setIsHoveringCTA(true);
  };
  const handleMouseOut10 = () => {
    setIsHoveringCTA(false);
  };

  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const { t } = useTranslation();

  return (
    <S.CTASection>
      <S.SectionBanner $isDesktop={isDesktop}>
        <S.GridTextWrapper $isDesktop={isDesktop}>
          <S.GridText $isDesktop={isDesktop}>
            · Youngcamp Festival · Youngcamp Festival · Youngcamp Festival ·
            Youngcamp Festival · Youngcamp Festival · Youngcamp Festival ·
            Youngcamp Festival · Youngcamp Festival · Youngcamp Festival ·
            Youngcamp Festival · Youngcamp Festival · Youngcamp Festival ·
            Youngcamp Festival · Youngcamp Festival
          </S.GridText>
        </S.GridTextWrapper>
      </S.SectionBanner>
      <S.GridBox $isTablet={isTablet} $isDesktop={isDesktop}>
        <S.VectorImg src={`${mediaUrl}Home/Vector.png`} />
        <S.GridTitle $isTablet={isTablet} $isDesktop={isDesktop}>
          JOIN WITH US !
        </S.GridTitle>
        <S.GridBtnFrame $isTablet={isTablet} $isDesktop={isDesktop}>
          <Link to={"/promotion"}>
            <S.GridBtn
              $isDesktop={isDesktop}
              $ishoveringCTA={isHoveringCTA}
              onMouseOver={handleMouseOver10}
              onMouseOut={handleMouseOut10}
            >
              <S.GridBtnText
                $isDesktop={isDesktop}
                $ishoveringCTA={isHoveringCTA}
              >
                {t("home.join")}
              </S.GridBtnText>
            </S.GridBtn>
          </Link>
        </S.GridBtnFrame>
      </S.GridBox>
    </S.CTASection>
  );
};

export default CTABanner;
