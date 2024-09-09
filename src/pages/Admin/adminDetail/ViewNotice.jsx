import React from "react";
import useMediaQueries from "../../../hooks/useMediaQueries";

import * as S from "../../Notification/detail/Style";

const ViewNotice = ({ data, setIsEditing }) => {
  const { isDesktop } = useMediaQueries();

  return (
    <>
      <S.Title $isDesktop={isDesktop}>{data.title}</S.Title>
      <S.InfoContainer $isDesktop={isDesktop}>
        <S.Info>작성인: 관리자</S.Info>
        <S.Info>등록일: {data.createdAt}</S.Info>
      </S.InfoContainer>
      <S.Line />
      <S.ContentWrapper $isDesktop={isDesktop}>
        {data.imageUrl !== "" && (
          <S.ContentImgContainer>
            <S.ContentImg src={data.imageUrl} alt="이미지" />
          </S.ContentImgContainer>
        )}
        <S.ContentText $isDesktop={isDesktop}>{data.content}</S.ContentText>
      </S.ContentWrapper>
      <button onClick={() => setIsEditing(true)}>수정</button>
    </>
  );
};

export default ViewNotice;
