import React, { useState } from "react";

// Components
import { ContentWrapper } from "../../style/commonStyle";
import CommentSection from "./components/CommentSection";
import MainTitle from "../../components/ui/MainTitle";
import TitleSet from "../../components/ui/TitleSet";
import ReviewInputSection from "./components/ReviewInputSection";
import { useTranslation } from "react-i18next";

// Hooks
import useMediaQueries from "../../hooks/useMediaQueries";

// Styles
import * as S from "./style";

const Index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [refreshComments, setRefreshComments] = useState(0);
  const { t } = useTranslation();

  const handleSuccess = () => {
    setRefreshComments((prev) => prev + 1);
  };

  return (
    <>
      <MainTitle
        mainText={t("review.bannerTitle")}
        subText={t("review.bannerSubtitle")}
      />
      <S.Container $isMobile={isMobile}>
        <S.TitleWrapper $isMobile={isMobile} $isTablet={isTablet} />
        <S.Textfiled $isMobile={isMobile}>
          {/* ReviewInputSection에 onSuccess prop 전달 */}
          <ReviewInputSection onSuccess={handleSuccess} />
        </S.Textfiled>
        <S.Comments $isMobile={isMobile} $isTablet={isTablet}>
          {/* refresh 상태 변화에 따라 CommentSection 리렌더링 */}
          <CommentSection refresh={refreshComments} />
        </S.Comments>
      </S.Container>
    </>
  );
};

export default Index;
