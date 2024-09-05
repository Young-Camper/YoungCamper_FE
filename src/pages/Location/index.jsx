import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import Attention from "../../components/ui/Attention";
import LocMap from "./LocMap";
import Transport from "./transport";

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
          <Attention
            attention1="∙ 화장실은 2층에 위치해있으며, 사용 시 대기시간이 발생할 수 있습니다."
            attention2="∙ 방문 시 안전을 위해 현장 통제를 따라주시길 바랍니다."
            attention3="∙ 층 간 이동은 불가합니다."
          />
        </ContentWrapper>
      ) : (
        <>
          <Transport />
          <LocMap />
          <Attention
            attention1="∙ 화장실은 2층에 위치해있으며, 사용 시 대기시간이 발생할 수 있습니다."
            attention2="∙ 방문 시 안전을 위해 현장 통제를 따라주시길 바랍니다."
            attention3="∙ 층 간 이동은 불가합니다."
          />
        </>
      )}
    </>
  );
};

export default index;
