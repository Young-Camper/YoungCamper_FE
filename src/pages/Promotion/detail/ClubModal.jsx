import React from 'react';
import * as S from "../style";
import clubData from "../../../data/clubData.json";

    const ClubModal = ({ setModalOpen, id }) => {
    const mediaUrl = import.meta.env.VITE_MEDIA_URL; // 환경 변수에서 AWS S3 URL 가져오기

    const handleCloseModal = (event) => {
        if (event.target === event.currentTarget) {
        setModalOpen(false);
        }
    };

    const clubId = parseInt(id, 10);
    const club = clubData.find(club => club.id === clubId);

    // club.applylink이 있는지 확인
    const applyLinkText = club.applylink ? (
        <a href={club.applylink} target="_blank" rel="noopener noreferrer">
        {club.applylink}
        </a>
    ) : (
        "없음"
    );

    return (
        <S.ModalContainer onClick={handleCloseModal}>
        <S.Modal>
            <S.ModalCloseBtn onClick={() => setModalOpen(false)}>
            <img src={`${mediaUrl}Promotion/close.png`} alt="Close" />
            </S.ModalCloseBtn>
            <S.ModalText>
            동아리에 가입하실 건가요?
            </S.ModalText>
            <S.Separator />
            <S.ModalFooter>
            <S.QaApply>아래 접속 시, <br/> 동아리 가입 페이지로 이동합니다.</S.QaApply>
            <S.ApplyLinkSize>{applyLinkText}</S.ApplyLinkSize> 
            </S.ModalFooter>
        </S.Modal>
        </S.ModalContainer>
    );
    };

export default ClubModal;
