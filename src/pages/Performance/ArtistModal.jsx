import React, { useRef } from "react";
import * as S from "./style";
import CloseBtn from "../../assets/images/timetable/closeBtn.png";
import YoutubeBtn from "../../assets/images/timetable/Social.png";

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
        <S.ModalCloseBtn onClick={() => setModalOpen(false)}>
          <img src={CloseBtn} alt="X" />
        </S.ModalCloseBtn>
        <S.ModalPosterImg src={artist.artist_image} />
        <S.ModalContent>
          <S.ArtistName>
            <S.Line>{artist.name}</S.Line>
          </S.ArtistName>
          <S.DetailText>{artist.etc}</S.DetailText>
          <S.SubText>대표곡</S.SubText>
          <S.ModalMusic>
            {artist.music} <img src={YoutubeBtn} />
          </S.ModalMusic>
        </S.ModalContent>
      </S.Modal>
    </S.ModalContainer>
  );
};

export default ArtistModal;
