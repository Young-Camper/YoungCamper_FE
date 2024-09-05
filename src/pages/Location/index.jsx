import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import Attention from "../../components/ui/Attention";
import LocMap from "./LocMap";
import Transport from "./transport"

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
      <S.Wrapper
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <Transport />
        <LocMap />
        <Attention />
      </S.Wrapper>
  </>
  );
};

export default index;