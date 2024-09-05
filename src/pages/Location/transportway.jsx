import React from 'react';
import useMediaQueries from "../../hooks/useMediaQueries";

import * as S from "./style";

const transportway =  () => {
  const { isMobile } = useMediaQueries();
  return (
    <S.WayContainer $ismobile = {isMobile}>
      <S.WaySection $height={96}>
        <S.WayTitleContainer>
          <S.WayTitleBadge>
            <S.WayTitleText  $ismobile= {isMobile}>지하철</S.WayTitleText>
          </S.WayTitleBadge>
        </S.WayTitleContainer>
        <S.WaySectionTitle $ismobile= {isMobile}>
          <div>지하철 3호선 동대입구역 5번출구 (체육관 직접연결)</div>
        </S.WaySectionTitle>
      </S.WaySection>
      <S.WaySection $height={232} $ismobile= {isMobile}>
        <S.WayTitleContainer>
          <S.WayTitleBadge>
            <S.WayTitleText $ismobile= {isMobile}>버스</S.WayTitleText>
          </S.WayTitleBadge>
        </S.WayTitleContainer>
        <S.WayBusStopContainer>
          <S.WayBusStopInfo>
            <S.WayBusStopName $ismobile= {isMobile}>장충체육관앞</S.WayBusStopName>
            <S.WayBusNumbers $ismobile= {isMobile}>02-201(서울) N13, 144, 301, 7212</S.WayBusNumbers>
          </S.WayBusStopInfo>
          <S.WayBusStopInfo>
            <S.WayBusStopName $ismobile= {isMobile}>동대입구역.장충동</S.WayBusStopName>
            <S.WayBusNumbers $ismobile= {isMobile}>02-222(서울) 05, 02, 03</S.WayBusNumbers>
          </S.WayBusStopInfo>
        </S.WayBusStopContainer>
      </S.WaySection>
    </S.WayContainer>
  );
}

export default transportway;