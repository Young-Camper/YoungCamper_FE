import React from "react";
import Category from "./Category";
import ProfileList from "./ProfileList";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const Section = ({ title, subtitle, profiles, activeTab }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "ko" ? 0 : 1;

  return (
    <>
      <S.SectionWrapper
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <Category>{title}</Category>
        <S.Subtitle $isDesktop={isDesktop}>{subtitle}</S.Subtitle>
        {currentLang === 1 && activeTab === "students" &&
        <S.TermDescription $isDesktop={isDesktop}>* PR: Public Relations</S.TermDescription>
        }
      </S.SectionWrapper>
      <ProfileList $isDesktop={isDesktop} profiles={profiles} />
    </>
  );
};

export default Section;
