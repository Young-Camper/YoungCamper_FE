import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./Style";
import Urgent from "../main/Urgent";
import ShowList from "./ShowList";
import data from "../../../data/notice.json";

const Content = () => {
  const { num } = useParams();
  const [notice, setNotice] = useState(null);
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    // 공지사항 데이터 찾기
    const foundNotice = data.find((item) => item.num === parseInt(num, 10));
    setNotice(foundNotice);

    if (foundNotice) {
      import(`../../../assets/images/Notification/${foundNotice.image}`)
        .then((module) => setImagePath(module.default))
        .catch(() => setImagePath(null));
    }
  }, [num]);

  if (!notice) {
    return (
      <>
        <S.NoResult>해당 공지사항을 찾을 수 없습니다.</S.NoResult>
        <ShowList />
      </>
    );
  }

  return (
    <S.TitleWrapper>
      {notice.urgent === "yes" && <Urgent />}
      <S.Title>{notice.title}</S.Title>
      <S.InfoContainer>
        <S.Info>작성인: 관리자</S.Info>
        <S.Info>등록일: {notice.date}</S.Info>
      </S.InfoContainer>
      <S.Line />
      <S.ContentWrapper>
        {imagePath && (
          <S.ContentImgContainer>
            <S.ContentImg src={imagePath} alt="공지 이미지" />
          </S.ContentImgContainer>
        )}
        <S.ContentText>{notice.content}</S.ContentText>
      </S.ContentWrapper>
      <ShowList />
    </S.TitleWrapper>
  );
};

export default Content;
