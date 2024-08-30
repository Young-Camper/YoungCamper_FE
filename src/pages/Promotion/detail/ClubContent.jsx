import React from 'react';
import * as S from "../style";
import useMediaQueries from '../../../hooks/useMediaQueries';
import clubData from "../../../data/clubData.json";

const ClubContent = ({ id }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const clubId = parseInt(id, 10);
  const club = clubData.find(club => club.id === clubId);

  const hasImage = club ? club.playimg : '';
  const imageUrl = hasImage ? hasImage : ''; 

  return (
    <S.ClubContentWrapper $isDesktop={isDesktop} hasImage={hasImage}>
      <S.TextBox $isDesktop={isDesktop} hasImage={hasImage}>
        <S.TextGroup>
          <S.Title>동아리 한줄 소개</S.Title>
          <S.Content>{club.intro}</S.Content>
        </S.TextGroup>
        <S.TextGroup>
          <S.Title>취지 및 방향성</S.Title>
          <S.Content>{club.direction}</S.Content>
        </S.TextGroup>
      </S.TextBox>
      <S.ImageBox
        $isDesktop={isDesktop}
        hasImage={!!hasImage}
        src={imageUrl}
      />
    </S.ClubContentWrapper>
  );
}

export default ClubContent;
