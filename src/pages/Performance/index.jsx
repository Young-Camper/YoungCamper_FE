import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import TimeTable from "./TimeTable";
import Attention from "../../components/ui/Attention";
import useMediaQueries from "../../hooks/useMediaQueries";
import ArtistModal from "./ArtistModal"; // 모달을 독립적으로 관리
import { useTranslation } from "react-i18next";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedArtist, setClickedArtist] = useState(null);
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const Gap = () => {
    if (isMobile) {
      return currentLanguage === "en" ? "0px" : "7px";
    }
    return "24px";
  };

  const caution = isMobile
    ? t("caution.mcaution", { returnObjects: true })
    : t("caution.caution", { returnObjects: true });

  const handleOpenModal = (artist) => {
    setClickedArtist(artist);
    setModalOpen(true);
  };

  return (
    <>
      <MainTitle
        mainText={t("schedule.bannerTitle")}
        subText={t("schedule.subtitle")}
        gap={Gap}
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
          attention1={caution[0]}
          attention2={caution[1]}
          attention3={caution[2]}
        />
      </ContentWrapper>
      {modalOpen && (
        <ArtistModal artist={clickedArtist} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default index;
