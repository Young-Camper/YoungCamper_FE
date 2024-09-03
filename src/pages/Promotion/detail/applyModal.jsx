import React, { useRef } from 'react';
import * as S from "../style";

const ApplyModal = ({ setModalOpen }) => {
    const mediaUrl = import.meta.env.VITE_MEDIA_URL; // 환경 변수에서 AWS S3 URL 가져오기
    const modalRef = useRef();

    const handleCloseModal = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalOpen(false);
        }
    };

    return (
        <S.ModalContainer onClick={handleCloseModal}>
            <S.Modal ref={modalRef}>
                <S.ModalCloseBtn onClick={() => setModalOpen(false)}>
                    <img src={`${mediaUrl}Promotion/close.png`} alt="Close" />
                </S.ModalCloseBtn>
            </S.Modal>
        </S.ModalContainer>
    );
};

export default ApplyModal;
