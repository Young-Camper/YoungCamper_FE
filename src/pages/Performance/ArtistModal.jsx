import React, { useRef } from "react";
import * as S from "./style";
import CloseBtn from "../../assets/images/timetable/closeBtn.png";
import YoutubeBtn from "../../assets/images/timetable/Social.png";
import useMediaQueries from "../../hooks/useMediaQueries";

const ArtistModal = ({ artist, setModalOpen }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const modal = useRef();

  const handleCloseModal = (event) => {
    if (modal.current && !modal.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  return (
    <S.ModalContainer
      onClick={handleCloseModal}
      $isMobile={isMobile}
      $isTablet={isTablet}
      $isDesktop={isDesktop}
    >
      <S.Modal
        ref={modal}
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <S.ModalCloseBtn
          onClick={() => setModalOpen(false)}
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <img src={CloseBtn} alt="X" />
        </S.ModalCloseBtn>
        <S.ModalContent
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <S.ModalPosterImg
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            <img src={artist.artist_image} />
          </S.ModalPosterImg>
          <S.ContentWrapper>
            <S.ArtistName
              $isMobile={isMobile}
              $isTablet={isTablet}
              $isDesktop={isDesktop}
            >
              <S.Line>{artist.name}</S.Line>
            </S.ArtistName>
            <S.DetailText
              $isMobile={isMobile}
              $isTablet={isTablet}
              $isDesktop={isDesktop}
            >
              {artist.etc}
            </S.DetailText>
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.SubText>대표곡</S.SubText>
            <S.ModalMusic>
              {artist.music} <img src={YoutubeBtn} />
            </S.ModalMusic>
          </S.ContentWrapper>
        </S.ModalContent>
      </S.Modal>
    </S.ModalContainer>
  );
};

export default ArtistModal;
