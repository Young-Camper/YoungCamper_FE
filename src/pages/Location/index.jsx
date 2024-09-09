import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import Attention from "../../components/ui/Attention";
import LocMap from "./LocMap";
import Transport from "./transport";

import * as S from "./style";

import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const { t } = useTranslation();
  const cautions = t("location.caution", { returnObjects: true });

  return (
    <>
      <MainTitle
        mainText={t("location.bannerTitle")}
        subText={t("location.bannerSubtitle")}
      />
      <S.Wrapper
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <Transport />
        <LocMap />
        <Attention attentions={cautions} />
      </S.Wrapper>
    </>
  );
};

export default index;
