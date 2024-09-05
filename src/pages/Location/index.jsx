import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import Attention from "../../components/ui/Attention";
import LocMap from "./LocMap";
import Transport from "./transport";
import Transport from "./transport";

import * as S from "./style";

import useMediaQueries from "../../hooks/useMediaQueries";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      <MainTitle
        mainText="장소안내"
        subText="장충체육관에서 여러분을 기다립니다."
      />

      {isDesktop ? (
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
