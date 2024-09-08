import React from "react";
import * as S from "../style";
import clubData from "../../../data/clubData.json";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const SubTitle = ({ id }) => {
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  const clubId = parseInt(id, 10);
  const club = clubData.find((club) => club.id === clubId);

  const hasInstaLink = !!club.insta;

  const { t, i18n } = useTranslation();
  const languageIndex = i18n.language === "ko" ? 0 : 1;

  return (
    <S.Wrapper $isMobile={isMobile} $isTablet={isTablet}>
      <S.SchoolBadgeDetail $isDesktop={isDesktop}>
        {club.school[languageIndex]}
      </S.SchoolBadgeDetail>
      <S.TextAndButton $isDesktop={isDesktop}>
        <S.SchoolText $isDesktop={isDesktop}>{club.name}</S.SchoolText>
        {hasInstaLink && (
          <S.CTAButton
            $isDesktop={isDesktop}
            href={club.insta}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.InstagramImage
              src={`${mediaUrl}Promotion/insta.png`}
              alt="Instagram"
              $isDesktop={isDesktop}
            />
            <S.InstaText>{t("club.insta")}</S.InstaText>
          </S.CTAButton>
        )}
      </S.TextAndButton>
    </S.Wrapper>
  );
};

export default SubTitle;
