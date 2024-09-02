import React from 'react'
import * as S from "../style";
import { Link } from 'react-router-dom';
import useMediaQueries from '../../../hooks/useMediaQueries';

const BackPage = () => {
    const { isMobile, isTablet, isDesktop } = useMediaQueries();
    const mediaUrl = import.meta.env.VITE_MEDIA_URL; 

    return (
        <Link to={`/promotion`} style={{ textDecoration: 'none' }}>
                <S.BackContainer $isDesktop={isDesktop}>
                    <S.BackButton>
                        <S.ArrowIcon 
                            $isDesktop={isDesktop} 
                            src={`${mediaUrl}Promotion/arrowback.png`}
                            alt="Back Arrow" 
                        />
                        <S.BackText $isDesktop={isDesktop}>뒤로가기</S.BackText>
                    </S.BackButton>
                </S.BackContainer>
            </Link>
    )
}

export default BackPage