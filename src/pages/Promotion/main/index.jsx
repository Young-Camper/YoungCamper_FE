import React from "react";
import MainTitle from "../../../components/ui/MainTitle";
import Club from "./club";
import useMediaQueries from "../../../hooks/useMediaQueries";
import * as S from "../style";


const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  return (
    <>
    <MainTitle
        mainText="영캠프와 함께하는 동아리 16"
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
      />
      <S.CardWrapper isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
        <Club />
      </S.CardWrapper>
    </>
  );
};

export default index;

