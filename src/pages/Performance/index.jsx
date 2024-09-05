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
        <Attention
          attention1="∙ 안전을 위해 스태프의 안내를 따라주세요!"
          attention2="∙ 퇴장 시 재 입장이 불가합니다!"
          attention3="∙ 공연장 내 물품 보관이 불가합니다!"
        />
      </ContentWrapper>
      {modalOpen && (
        <ArtistModal artist={clickedArtist} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default index;
