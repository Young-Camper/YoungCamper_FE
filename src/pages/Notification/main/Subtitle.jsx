import React from "react";
import * as S from "./Style";

const Subtitle = ({
  num,
  title,
  date,
  paddingBottom,
  color,
  fontWeight,
  marginTop,
  marginBottom,
  fontSize,
  isDesktop,
  gap,
}) => {
  return (
    <S.SubTitleWrapper
      paddingBottom={paddingBottom}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <S.NumContainer color={color}>{num}</S.NumContainer>

      {!isDesktop && (
        <S.TitleDateContainer gap={gap}>
          <S.TitleContainer fontWeight={fontWeight} fontSize={fontSize}>
            {title}
          </S.TitleContainer>
          <S.DateContainer>{date}</S.DateContainer>
        </S.TitleDateContainer>
      )}

      {isDesktop && (
        <>
          <S.TitleContainer fontWeight={fontWeight} fontSize={fontSize}>
            {title}
          </S.TitleContainer>
          <S.NumContainer color={color}>{date}</S.NumContainer>
        </>
      )}
    </S.SubTitleWrapper>
  );
};

export default Subtitle;
