import React from 'react';
import { Link } from 'react-router-dom';
import * as S from "../style";

const ClubCard = ({ club }) => {
    const mediaUrl = import.meta.env.VITE_MEDIA_URL;
    const hasclubimage = club.image;
    const imageUrl = hasclubimage ? `${mediaUrl}Promotion/${club.image}` : ''; 

    return (
      <Link to={`/promotion/${club.id}`} style={{ textDecoration: 'none' }}>
        <S.CardContainer $hasclubimage={hasclubimage} src={imageUrl}>
          <S.SchoolBadge>{club.school}</S.SchoolBadge>
          <S.ClubName>{club.name}</S.ClubName>
        </S.CardContainer>
      </Link>
    );
}

export default ClubCard;
