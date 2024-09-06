import React from "react";
import useMediaQueries from "../../hooks/useMediaQueries";

import * as S from "./style";
import { useTranslation } from "react-i18next";

const transportway = () => {
  const { isMobile } = useMediaQueries();
  const { t } = useTranslation();

  return (
    <S.WayContainer $isMobile={isMobile}>
      <S.WaySection $height={isMobile ? 80 : 96}>
        <S.WayTitleContainer>
          <S.WayTitleBadge>
            <S.WayTitleText $isMobile={isMobile}>
              {t("location.subway")}
            </S.WayTitleText>
          </S.WayTitleBadge>
        </S.WayTitleContainer>
        <S.WaySectionTitle $isMobile={isMobile}>
          <div> {t("location.subwayContent")}</div>
        </S.WaySectionTitle>
      </S.WaySection>
      <S.WaySection $height={isMobile ? 116 : 232} $isMobile={isMobile}>
        <S.WayTitleContainer>
          <S.WayTitleBadge>
            <S.WayTitleText $isMobile={isMobile}>
              {" "}
              {t("location.bus")}
            </S.WayTitleText>
          </S.WayTitleBadge>
        </S.WayTitleContainer>
        <S.WayBusStopContainer>
          <S.WayBusStopInfo>
            <S.WayBusStopName $isMobile={isMobile}>
              {t("location.buslocation")}
            </S.WayBusStopName>
            <S.WayBusNumbers $isMobile={isMobile}>
              {t("location.busnumber")}
            </S.WayBusNumbers>
          </S.WayBusStopInfo>
          <S.WayBusStopInfo>
            <S.WayBusStopName $isMobile={isMobile}>
              {t("location.station")}
            </S.WayBusStopName>
            <S.WayBusNumbers $isMobile={isMobile}>
              {t("location.stationNum")}
            </S.WayBusNumbers>
          </S.WayBusStopInfo>
        </S.WayBusStopContainer>
      </S.WaySection>
    </S.WayContainer>
  );
};

export default transportway;
