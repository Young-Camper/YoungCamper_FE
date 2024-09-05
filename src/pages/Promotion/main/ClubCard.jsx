import React from "react";
import { Link } from "react-router-dom";
import * as S from "../style";
import { useTranslation } from "react-i18next";

const ClubCard = ({ club }) => {
  const { i18n } = useTranslation();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const hasclubimage = club.image;
  const imageUrl = hasclubimage ? `${mediaUrl}Promotion/${club.image}` : "";

  const currentLang = i18n.language === "ko" ? 0 : 1;

  return (
    <Link to={`/promotion/${club.id}`} style={{ textDecoration: "none" }}>
      <S.CardContainer $hasclubimage={hasclubimage} src={imageUrl}>
        <S.SchoolBadge>{club.school[currentLang]}</S.SchoolBadge>
        <S.ClubName>{club.name}</S.ClubName>
      </S.CardContainer>
    </Link>
  );
};

export default ClubCard;
