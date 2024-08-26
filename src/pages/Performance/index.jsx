import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import TimeTable from "./TimeTable";
import Attention from "../../components/ui/Attention";
import useMediaQueries from "../../hooks/useMediaQueries";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <MainTitle
        mainText="공연안내"
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
      />
      {isDesktop ? (
        <ContentWrapper>
          <TimeTable modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <Attention />
        </ContentWrapper>
      ) : (
        <>
          <TimeTable modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <Attention />
        </>
      )}
    </>
  );
};

export default index;
