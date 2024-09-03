import React from 'react';
import * as S from "../style";
import useMediaQueries from '../../../hooks/useMediaQueries';
import clubData from "../../../data/clubData.json";


const ClubImage = ({ id }) => {
    const mediaUrl = import.meta.env.VITE_MEDIA_URL; 
    const { isMobile, isTablet, isDesktop } = useMediaQueries();
    const clubId = parseInt(id, 10);
    const club = clubData.find(club => club.id === clubId);

    const hasimage = club ? club.image : '';
    const imageUrl = hasimage ? `${mediaUrl}Promotion/${club.detailImg}` : ''; 

    return (
        <>
        <S.ClubImage 
            $isDesktop={isDesktop} 
            $hasimage="true"
            src={imageUrl} 
        />
        </>
    );
};

export default ClubImage;
