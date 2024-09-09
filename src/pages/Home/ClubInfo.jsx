import React, { useState } from "react";
import * as S from "./HomeStyle";
import ClubSlider from "./ClubSlider";
import { Link } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const ClubInfo = () => {
  const [isHoveringClub, setIsHoveringClub] = useState(false);
  const { t } = useTranslation();

  const handleMouseOver4 = () => {
    setIsHoveringClub(true);
  };
  const handleMouseOut4 = () => {
    setIsHoveringClub(false);
  };

  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <S.ClubInfoSection $isTablet={isTablet} $isDesktop={isDesktop}>
      <S.ClubTitleBox $isTablet={isTablet} $isDesktop={isDesktop}>
        <S.ClubTitle $isTablet={isTablet} $isDesktop={isDesktop}>
          {t("home.club")}
        </S.ClubTitle>
      </S.ClubTitleBox>
      <S.GalleryBox $isTablet={isTablet} $isDesktop={isDesktop}>
        <S.Gallery $isTablet={isTablet} $isDesktop={isDesktop}>
          {<ClubSlider />}
        </S.Gallery>
      </S.GalleryBox>
      <S.ClubFrameBox $isTablet={isTablet} $isDesktop={isDesktop}>
        <Link to={"./promotion"}>
          <S.ClubBtn
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            $ishoveringClub={isHoveringClub}
            onMouseOver={handleMouseOver4}
            onMouseOut={handleMouseOut4}
          >
            {t("home.moreClub")}
           {/*  <S.ClubBtnText
              $isDesktop={isDesktop}
              $ishoveringClub={isHoveringClub}
            >
              
            </S.ClubBtnText> */}
          </S.ClubBtn>
        </Link>
      </S.ClubFrameBox>
    </S.ClubInfoSection>
  );
};

export default ClubInfo;
