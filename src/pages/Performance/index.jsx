import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import TimeTable from "./TimeTable";
import Attention from "../../components/ui/Attention";
import useMediaQueries from "../../hooks/useMediaQueries";
import ArtistModal from "./ArtistModal"; // 모달을 독립적으로 관리

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedArtist, setClickedArtist] = useState(null);

  const handleOpenModal = (artist) => {
    setClickedArtist(artist);
    setModalOpen(true);
  };

  return (
    <>
      <MainTitle
        mainText="공연안내"
        subText="이번 영캠프에서는 특별한 무대들이 준비되어 있어요!"
      />
      <ContentWrapper
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <TimeTable
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          onArtistClick={handleOpenModal} // 모달 열기 핸들러 전달
        />
        <Attention />
      </ContentWrapper>
      {modalOpen && (
        <ArtistModal artist={clickedArtist} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default index;
