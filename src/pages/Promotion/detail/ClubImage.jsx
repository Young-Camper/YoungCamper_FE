import React from 'react';
import * as S from "../style";
import useMediaQueries from '../../../hooks/useMediaQueries';
import clubData from "../../../data/clubData.json";
import { Link } from 'react-router-dom';

const ClubImage = ({ id }) => {
    const { isMobile, isTablet, isDesktop } = useMediaQueries();
    const clubId = parseInt(id, 10);
    const club = clubData.find(club => club.id === clubId);

    const hasImage = club ? club.image : '';
    const imageUrl = hasImage ? hasImage : ''; 
    return (
        <>
        <Link to={`/promotion`} style={{ textDecoration: 'none' }}>
        <S.BackContainer $isDesktop={isDesktop}>
            
            <S.BackButton  >
                <S.ArrowIcon $isDesktop={isDesktop} src="/src/assets/images/Promotion/arrowback.png" alt="Back Arrow" />
                <S.BackText $isDesktop={isDesktop}>뒤로가기</S.BackText>
            </S.BackButton>
            
        </S.BackContainer>
        </Link>
        <S.ClubImage 
                $isDesktop={isDesktop} 
                hasImage={!!hasImage} 
                src={imageUrl} 
            />
            </>
    );
};

export default ClubImage;
