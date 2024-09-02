import React from "react";
import * as S from "./Style";

const Subtitle = ({
  num,
  title,
  date,
  paddingBottom,
  color,
  marginTop,
  marginBottom,
  fontSize,
  fontFamily,
  fontWeight,
  isDesktop,
  isTablet,
  gap,
}) => {
  return (
    <S.SubTitleWrapper
      paddingBottom={paddingBottom}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <S.NumContainer color={color} $isDesktop={isDesktop} $isTablet={isTablet}>
        {num}
      </S.NumContainer>

      {!isDesktop && (
        <S.TitleDateContainer gap={gap}>
          <S.TitleContainer fontSize={fontSize}>{title}</S.TitleContainer>
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
          <S.TitleContainer fontSize={fontSize}>{title}</S.TitleContainer>
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
