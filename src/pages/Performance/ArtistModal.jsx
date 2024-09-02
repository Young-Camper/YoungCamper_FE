import React, { useRef } from "react";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const ArtistModal = ({ artist, setModalOpen }) => {
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  const { isMobile } = useMediaQueries();
  const modal = useRef();

  const handleCloseModal = (event) => {
    if (modal.current && !modal.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  return (
    <S.ModalContainer onClick={handleCloseModal}>
      <S.Modal ref={modal} $isMobile={isMobile}>
        <S.ModalCloseBtn onClick={() => setModalOpen(false)}>
          <img src={`${mediaUrl}Performance/closeBtn.png`} alt="X" />
        </S.ModalCloseBtn>
        <S.ModalContent $isMobile={isMobile}>
          <S.ModalPosterImg $isMobile={isMobile}>
            <img src={artist.artist_image} />
          </S.ModalPosterImg>
          <S.ContentWrapper>
            <S.ArtistName $isMobile={isMobile}>
              <S.Line>{artist.name}</S.Line>
            </S.ArtistName>
            <S.DetailText $isMobile={isMobile}>{artist.etc}</S.DetailText>
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.SubText>대표곡</S.SubText>
            <S.ModalMusic>
              {artist.music} <img src={`${mediaUrl}Performance/Social.png`} />
            </S.ModalMusic>
          </S.ContentWrapper>
        </S.ModalContent>
      </S.Modal>
    </S.ModalContainer>
  );
};

export default ArtistModal;
