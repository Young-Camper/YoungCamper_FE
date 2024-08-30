import React, { useRef } from 'react';
import CloseIcon from '../../../assets/images/Promotion/close.png';
import * as S from "../style";


const ApplyModal = () => {
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
                    <img src={CloseIcon} alt="Close" />
                </S.ModalCloseBtn>
            </S.Modal>
        </S.ModalContainer>
    );
};
export default ApplyModal