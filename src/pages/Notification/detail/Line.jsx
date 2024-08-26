import * as S from "./Style";

const Title = () => {
  return (
    <S.TitleWrapper>
      <Urgent />
      <S.Title>[분류]공지사항입니다요</S.Title>
      <S.InfoContainer>
        <S.Info>작성인: 관리자</S.Info>
        <S.Info>등록일: 2024.00.00</S.Info>
      </S.InfoContainer>
    </S.TitleWrapper>
  );
};

export default Title;
