import React from 'react';
import * as S from "../style";
import { useNavigate } from 'react-router-dom';
import useMediaQueries from '../../../hooks/useMediaQueries';

const BackPage = () => {
    const { isMobile, isTablet, isDesktop } = useMediaQueries();
    const mediaUrl = import.meta.env.VITE_MEDIA_URL;
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div onClick={handleBackClick} style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <S.BackContainer $isDesktop={isDesktop}>
                <S.BackButton>
                    <S.ArrowIcon 
                        $isDesktop={isDesktop} 
                        src={`${mediaUrl}Promotion/arrowback.png`}
                        alt="Back Arrow" 
                    />
                </S.BackButton>
            </S.BackContainer>
        </div>
    );
}

export default BackPage;
