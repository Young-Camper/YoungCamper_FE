import { React, useEffect } from "react";
import styled from "styled-components";
import MainTitle from "../../../components/ui/MainTitle";
import Club from "./Club";
import useMediaQueries from "../../../hooks/useMediaQueries";
import * as S from "../style";
import { useTranslation } from "react-i18next";

const HighlightedText = styled.span`
  color: #0068ff;
`;

const Index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const { t } = useTranslation();
  const mainText = isMobile ? t("club.mbannerTitle") : t("club.bannerTitle");
  const highlightedNumber = "16";
  const subText = t("club.bannerSubtitle");

  useEffect(() => {
    // 페이지가 마운트될 때 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainTitle
        $isMobile={isMobile}
        mainText={
          <>
            {mainText}
            <HighlightedText>{highlightedNumber}</HighlightedText>
          </>
        }
        subText={subText}
      />
      <S.CardWrapper
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <Club />
      </S.CardWrapper>
    </>
  );
};

export default Index;
