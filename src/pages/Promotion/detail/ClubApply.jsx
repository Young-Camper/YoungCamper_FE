import React, { useState } from 'react';
import * as S from "../style";
import useMediaQueries from '../../../hooks/useMediaQueries';
import clubData from "../../../data/clubData.json";
import ClubModal from './ClubModal';


const ClubApply = ({id}) => {
    const { isMobile, isTablet, isDesktop } = useMediaQueries();
    const clubId = parseInt(id, 10);
    const club = clubData.find(club => club.id === clubId);

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    return (
        <>
            <S.ApplyButton $isDesktop={isDesktop} onClick={handleOpenModal}>
                동아리 가입하러가기
            </S.ApplyButton>
            {modalOpen && <ClubModal id={id} setModalOpen={setModalOpen} />}
        </>
    );
}

export default ClubApply