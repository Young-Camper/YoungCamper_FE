import React, { useRef } from "react";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";
import { Link } from "react-router-dom";

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
          </S.ContentWrapper>
          <S.ContentWrapper>
            {artist.music.length > 1 && <S.SubText>대표곡</S.SubText>}
            <S.MusicWrapper>
              {artist.music.map((music, index) => (
                <a
                  href={music.youtubeURL}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.ModalMusic>
                    {music.title}
                    <img src={`${mediaUrl}Performance/Social.png`} />
                  </S.ModalMusic>
                </a>
              ))}
            </S.MusicWrapper>
          </S.ContentWrapper>
        </S.ModalContent>
      </S.Modal>
    </S.ModalContainer>
  );
};

export default ArtistModal;
