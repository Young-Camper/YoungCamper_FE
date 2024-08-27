import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import TimeTable from "./TimeTable";
import Attention from "../../components/ui/Attention";
import useMediaQueries from "../../hooks/useMediaQueries";
import ArtistModal from "./ArtistModal"; // 모달을 독립적으로 관리

const Index = () => {
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
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
      />
      {isDesktop ? (
        <ContentWrapper>
          <TimeTable
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            onArtistClick={handleOpenModal} // 모달 열기 핸들러 전달
          />
          <Attention />
        </ContentWrapper>
      ) : (
        <>
          <TimeTable
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            onArtistClick={handleOpenModal} // 모달 열기 핸들러 전달
          />
          <Attention />
        </>
      )}

      {/* 모달을 항상 렌더링하고 상태로 제어 */}
      {modalOpen && (
        <ArtistModal artist={clickedArtist} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default Index;
