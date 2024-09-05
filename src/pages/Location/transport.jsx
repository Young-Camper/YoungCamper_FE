import React from "react";
import * as S from "./style";
import TitleSet from "./locTitleSet";
import TransportContainer from "./TransportContainer";
import useMediaQueries from "../../hooks/useMediaQueries";




const Transport = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      <TitleSet isDesktop={isDesktop}
        mainText="오시는 길"
      />
      <S.Container>
        <TransportContainer/>
      </S.Container>
    </>
  );
};

export default Transport;