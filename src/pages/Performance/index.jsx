import React, { useState, useEffect } from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import TimeTable from "./TimeTable";
import Attention from "../../components/ui/Attention";
import useMediaQueries from "../../hooks/useMediaQueries";
import ArtistModal from "./ArtistModal";
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

  const caution = t("caution.caution", { returnObjects: true });

  const handleOpenModal = (artist) => {
    setClickedArtist(artist);
    setModalOpen(true);
  };

  // 모달 열렸을 때 스크롤 막기
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

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
          onArtistClick={handleOpenModal}
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
