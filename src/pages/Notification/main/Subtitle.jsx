import React from "react";
import * as S from "./Style";
import { languageState } from "../../../context/recoil/languageState";
import { useRecoilValue } from "recoil";

const Subtitle = ({
  num,
  title,
  date,
  paddingBottom,
  paddingTop,
  color,
  marginTop,
  marginBottom,
  fontSize,
  fontFamily,
  fontWeight,
  isDesktop,
  isTablet,
  isMobile,
  gap,
}) => {
  const lang = useRecoilValue(languageState);
  const isEnglish = lang === "en";

  return (
    <S.SubTitleWrapper
      $paddingBottom={paddingBottom}
      $paddingTop={paddingTop}
      $marginTop={marginTop}
      $marginBottom={marginBottom}
    >
      <S.NumContainer color={color} $isDesktop={isDesktop} $isTablet={isTablet}>
        {num}
      </S.NumContainer>

      {!isDesktop && (
        <S.TitleDateContainer gap={gap}>
          <S.TitleContainer
            fontSize={fontSize}
            $isDesktop={isDesktop}
            $isMobile={isMobile}
            $isEnglish={isEnglish}
          >
            {title}
          </S.TitleContainer>
          <S.DateContainer
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            $isDesktop={isDesktop}
          >
            {date}
          </S.DateContainer>
        </S.TitleDateContainer>
      )}

      {isDesktop && (
        <>
          <S.TitleContainer
            fontSize={fontSize}
            $isDesktop={isDesktop}
            $isMobile={isMobile}
            $isEnglish={true}
          >
            {title}
          </S.TitleContainer>
          <S.DateContainer
            color={color}
            $fontSize={fontSize}
            $isDesktop={isDesktop}
            $isTablet={isTablet}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
          >
            {date}
          </S.DateContainer>
        </>
      )}
    </S.SubTitleWrapper>
  );
};

export default Subtitle;
