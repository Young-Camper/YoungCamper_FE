import React, { useState, useRef } from "react";

// Components
import { ContentWrapper } from "../../style/commonStyle";
import CommentSection from "./components/CommentSection";
import MainTitle from "../../components/ui/MainTitle";
import TitleSet from "../../components/ui/TitleSet";
import ReviewInputSection from "./components/ReviewInputSection";

// Hooks
import useMediaQueries from "../../hooks/useMediaQueries";

// Styles
import * as S from "./style";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      <MainTitle
        mainText="후기"
        subText="앞으로 더욱 성장할 수 있도록 솔직한 후기를 남겨주세요"
      />
      <S.Container $isMobile={isMobile}>
        <S.TitleWrapper $isMobile={isMobile} $isTablet={isTablet}>
          <TitleSet
            mainText="의견을 들려주세요."
            subText="여러분의 속마음이 듣고 싶어요"
          />
        </S.TitleWrapper>

        <S.Textfiled $isMobile={isMobile}>
          <ReviewInputSection />
        </S.Textfiled>
        <S.Comments $isMobile={isMobile} $isTablet={isTablet}>
          <CommentSection />
        </S.Comments>
      </S.Container>
    </>
  );
};

export default index;
