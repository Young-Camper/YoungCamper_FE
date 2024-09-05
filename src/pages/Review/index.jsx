import React, { useState } from "react";

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

const Index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [refreshComments, setRefreshComments] = useState(false); // 리뷰 리프레시 상태 추가

  // 성공 알림 콜백 함수
  const handleSuccess = () => {
    console.log("리랜더링 전달 성공!"); // 디버깅용 로그
    setRefreshComments((prev) => !prev); // 상태를 토글하여 CommentSection 재렌더링 유도
  };

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
