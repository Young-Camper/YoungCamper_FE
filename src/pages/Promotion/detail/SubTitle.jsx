import React from 'react';
import * as S from "../style";
import clubData from "../../../data/clubData.json";
import useMediaQueries from '../../../hooks/useMediaQueries';

const SubTitle = ({ id }) => {
  const mediaUrl = import.meta.env.VITE_MEDIA_URL; 
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  const clubId = parseInt(id, 10);
  const club = clubData.find(club => club.id === clubId);

  const hasInstaLink = !!club.insta; 

  return (
    <S.Wrapper $isMobile={isMobile} $isTablet={isTablet}>
      <S.SchoolBadgeDetail>{club.school}</S.SchoolBadgeDetail>
      <S.TextAndButton>
        <S.SchoolText>{club.name}</S.SchoolText>
        {hasInstaLink && (
          <S.CTAButton $isDesktop={isDesktop} href={club.insta} target="_blank" rel="noopener noreferrer">
            <S.InstagramImage 
              src={`${mediaUrl}Promotion/insta.png`} 
              alt="Instagram"
              $isDesktop={isDesktop}
            />
            <S.InstaText>인스타그램</S.InstaText>
          </S.CTAButton>
        )}
      </S.TextAndButton>
    </S.Wrapper>
  );
};

export default SubTitle;
