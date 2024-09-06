import React from "react";
import Category from "./Category";
import ProfileList from "./ProfileList";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const Section = ({ title, subtitle, profiles }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      <S.SectionWrapper
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <Category>{title}</Category>
        <S.Subtitle $isDesktop={isDesktop}>{subtitle}</S.Subtitle>
      </S.SectionWrapper>
      <ProfileList $isDesktop={isDesktop} profiles={profiles} />
    </>
  );
};

export default Section;
