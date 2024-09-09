import React, { useState } from "react";
import * as S from "./style";
import TitleSet from "./locTitleSet";
import styled from "styled-components";

import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";


const LocMap = () => {
  const { isMobile } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const { t } = useTranslation();

  return (
    <>
      <TitleSet
        mainText={t("location.title2")}
        subText={t("location.Subtitle2")}
      />
      <S.LocContainer $isMobile={isMobile}>
        <S.LocContentArea $isMobile={isMobile}>
          <S.LocTitle $isMobile={isMobile}>{t("location.seatingChart")}</S.LocTitle>
          <S.LocImageContainer $isMobile={isMobile}>
            {!isMobile && (
              <S.LocImage src={`${mediaUrl}Location/location_pic.png`} $isMobile={isMobile} />
            )}
            {isMobile && (
              <S.LocImage
                src={`${mediaUrl}Location/location_pic.png`}
                $isMobile={isMobile}
              />
            )}
          </S.LocImageContainer>
        </S.LocContentArea>
      </S.LocContainer>
    </>
  );
};

export default LocMap;
