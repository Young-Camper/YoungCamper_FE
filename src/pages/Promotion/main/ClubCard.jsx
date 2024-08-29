import React from 'react';
import { Link } from 'react-router-dom';
import * as S from "../style";

const ClubCard = ({ club }) => {
    const hasImage = club.image;
    
    return (
        <S.CardContainer hasImage={hasImage} src={club.image}>
          <S.SchoolBadge>{club.school}</S.SchoolBadge>
          <S.ClubName>{club.name}</S.ClubName>
        </S.CardContainer>
      
    );
  }
  

export default ClubCard;
