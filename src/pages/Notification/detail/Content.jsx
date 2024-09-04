import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./Style";
import Urgent from "../main/Urgent";
import ShowList from "./ShowList";
import data from "../../../data/notice.json";
import useMediaQueries from "../../../hooks/useMediaQueries";

const Content = () => {
  const { num } = useParams();
  const [notice, setNotice] = useState(null);
  const { isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  useEffect(() => {
    // 공지사항 데이터 찾기
    const foundNotice = data.find((item) => item.num === parseInt(num, 10));
    setNotice(foundNotice);
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
    <>
      <S.TitleWrapper $isDesktop={isDesktop}>
        {notice.urgent === "yes" && (
          <S.UrgentWrapper>
            <Urgent />
          </S.UrgentWrapper>
        )}
        <S.Title $isDesktop={isDesktop}>{notice.title}</S.Title>
        <S.InfoContainer $isDesktop={isDesktop}>
          <S.Info>작성인: 관리자</S.Info>
          <S.Info>{notice.date}</S.Info>
        </S.InfoContainer>
        <S.Line />
        <S.ContentWrapper $isDesktop={isDesktop}>
          <S.ContentImgContainer>
            {notice.image && (
              <S.ContentImgContainer>
                <S.ContentImg
                  src={`${mediaUrl}Notification/${notice.image}`}
                  alt="공지 이미지"
                />
              </S.ContentImgContainer>
            )}
          </S.ContentImgContainer>

          <S.ContentText $isDesktop={isDesktop}>{notice.content}</S.ContentText>
        </S.ContentWrapper>
        <ShowList />
      </S.TitleWrapper>
    </>
  );
};

export default Content;
