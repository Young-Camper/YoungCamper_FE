import React from "react";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const ProfileCard = ({ profile, language }) => {
  const { isDesktop } = useMediaQueries();
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "ko" ? 0 : 1;

  return (
    <S.ProfileCard $isDesktop={isDesktop}>
      <div className="description">{profile.description[currentLang]}</div>
      <img src={profile.image} alt={profile.name[currentLang]} />
      <div className="text-container">
        <name>{profile.name[currentLang]}</name>
        <div className="roleBox">
          <role>{profile.role[currentLang]}</role>
        </div>
      </div>
    </S.ProfileCard>
  );
};

export default ProfileCard;
