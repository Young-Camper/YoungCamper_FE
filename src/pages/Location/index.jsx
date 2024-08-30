import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
//import TimeTable from "./TimeTable";
import Attention from "../../components/ui/Attention";
import LocMap from "./LocMap";
import Transport from "./transport"

import useMediaQueries from "../../hooks/useMediaQueries";



const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      <MainTitle
        mainText="장소안내"
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
      />
      
      { isDesktop ? (
      <ContentWrapper>
        <Transport />
        <LocMap />
        <Attention />
      </ContentWrapper>
  ) : (
    <>
      <Transport />
      <LocMap />
      <Attention />
    </>
  )}
  </>
  );
};

export default index;
