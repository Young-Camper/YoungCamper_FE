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
}) => {
  return (
    <S.SubTitleWrapper
      paddingBottom={paddingBottom}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <S.NumContainer color={color}>{num}</S.NumContainer>
      <S.TitleContainer fontWeight={fontWeight}>{title}</S.TitleContainer>
      <S.NumContainer color={color}>{date}</S.NumContainer>
    </S.SubTitleWrapper>
  );
};

export default Subtitle;
