// DesktopNav.js
import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const DesktopNav = ({ logoSrc, isEnglish, handleToggle }) => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <S.Wrapper $isDesktop={isDesktop}>
      <S.Container $isDesktop={isDesktop}>
        <S.StyledLink $isTablet={isTablet} to={"/"}>
          <S.Logo
            $isDesktop={true}
            $isEnglish={isEnglish}
            src={logoSrc}
            alt="Logo"
          />
        </S.StyledLink>
        {[
          "Intro",
          "notification",
          "promotion",
          "performance",
          "location",
          "review",
          "FAQ",
          "about",
        ].map((path, index) => (
          <S.StyledLink $isDesktop={isDesktop} key={index} to={`/${path}`}>
            {t(`nav.${path}`)}
          </S.StyledLink>
        ))}
        <S.LangToggleWrapper>
          <S.CheckBox
            type="checkbox"
            checked={isEnglish}
            onChange={handleToggle}
          />
          <S.LangSlider>
            <S.ToggleCircle />
          </S.LangSlider>
        </S.LangToggleWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default DesktopNav;
