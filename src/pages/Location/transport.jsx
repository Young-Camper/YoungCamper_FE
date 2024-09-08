import React from "react";
import * as S from "./style";
import TitleSet from "./locTitleSet";
import TransportContainer from "./TransportContainer";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const Transport = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const { t } = useTranslation();

  return (
    <>
      {!isMobile && (
        <TitleSet $isDesktop={isDesktop} mainText={t("location.title")} />
      )}
      <S.Container>
        <TransportContainer />
      </S.Container>
    </>
  );
};

export default Transport;
