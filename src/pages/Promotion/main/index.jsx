import React from "react";
import MainTitle from "../../../components/ui/MainTitle";
import Club from "./Club";
import useMediaQueries from "../../../hooks/useMediaQueries";
import * as S from "../style";


const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  return (
    <>
    <MainTitle
        mainText="영캠프와 함께하는 동아리 16"
        subText="동아리의 각 불교 동아리를 살펴볼까요?"
      />
      <S.CardWrapper $isMobile={isMobile} $isTablet={isTablet} $isDesktop={isDesktop}>
        <Club />
      </S.CardWrapper>
    </>
  );
};

export default index;

