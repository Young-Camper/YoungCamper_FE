import React from 'react';
import * as S from "../style";
import useMediaQueries from '../../../hooks/useMediaQueries';
import clubData from "../../../data/clubData.json";

const ClubContent = ({ id }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const clubId = parseInt(id, 10);
  const club = clubData.find(club => club.id === clubId);
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  // playimg가 배열로 가정
  const playImgs = club.playimg ? (Array.isArray(club.playimg) ? club.playimg : [club.playimg]) : [];
  const hasImages = playImgs.length > 0;
  const hasSingleImage = playImgs.length === 1;

  return (
    <S.ClubContentWrapper $isDesktop={isDesktop}>
      <S.TextBox $isDesktop={isDesktop}>
        <S.TextGroup>
          <S.Title>동아리 한줄 소개</S.Title>
          <S.Content>{club.intro}</S.Content>
        </S.TextGroup>
        <S.TextGroup>
          <S.Title>취지 및 방향성</S.Title>
          <S.Content>{club.direction}</S.Content>
        </S.TextGroup>
      </S.TextBox>
      {hasImages && (
        <S.ImageGallery $hasSingleImage={hasSingleImage} $isMobile={isMobile}>
          {playImgs.map((img, index) => (
            <S.ImageBox
              key={index}
              src={`${mediaUrl}Promotion/${img}`}
              alt={`Image ${index}`}
              $isMobile={isMobile}
            />
          ))}
        </S.ImageGallery>
      )}
    </S.ClubContentWrapper>
  );
}

export default ClubContent;
