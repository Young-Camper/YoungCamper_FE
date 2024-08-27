import React, { useRef } from "react";
import * as S from "./style";

const ArtistModal = ({ artist, setModalOpen }) => {
  const modal = useRef();

  const handleCloseModal = (event) => {
    if (modal.current && !modal.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  return (
    <S.ModalContainer onClick={handleCloseModal}>
      <S.Modal ref={modal}>
        <S.ModalCloseBtn onClick={() => setModalOpen(false)}>X</S.ModalCloseBtn>
        <S.ModalPosterImg src={artist.imgURL} />
        <S.ModalContent>
          <S.ModalDetail></S.ModalDetail>
          <S.ModalTitle>{artist.name}</S.ModalTitle>
          <S.ModalOverview>{artist.etc}</S.ModalOverview>
          <S.ModalOverview>{artist.time}</S.ModalOverview>
        </S.ModalContent>
      </S.Modal>
    </S.ModalContainer>
  );
};

export default ArtistModal;
