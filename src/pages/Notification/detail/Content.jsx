import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./Style";
import Urgent from "../main/Urgent";
import ShowList from "./ShowList";
import useMediaQueries from "../../../hooks/useMediaQueries";
import Loading from "../../../components/ui/Loading";
import { getAnnouncement } from "../../../lib/apis/api/getAnnouncement";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { num } = useParams();
  const [notice, setNotice] = useState(null);
  const { isDesktop } = useMediaQueries();
  const [loading, setLoading] = useState(true);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // 받아오는 날짜 데이터 포맷팅
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getAnnouncement(num);
        // console.log(response);
        if (response.data) {
          const content = response.data.contents.find(
            (c) => c.languageCode === currentLanguage
          );
          setNotice({
            ...response.data,
            title: content ? content.title : "",
            content: content ? content.content : "",
          });
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [num, currentLanguage]);

  return (
    <>
      <S.TitleWrapper $isDesktop={isDesktop}>
        {loading ? (
          <Loading />
        ) : notice ? (
          <>
            {notice.isPinned && (
              <S.UrgentWrapper>
                <Urgent />
              </S.UrgentWrapper>
            )}
            <S.Title $isDesktop={isDesktop}>{notice.title}</S.Title>
            <S.InfoContainer $isDesktop={isDesktop}>
              <S.Info>{t("notice.write")}</S.Info>
              <S.Info>{formatDate(notice.createdAt)}</S.Info>
            </S.InfoContainer>
            <S.Line />
            <S.ContentWrapper $isDesktop={isDesktop}>
              {notice.imageUrl ? (
                <S.ContentImgContainer>
                  <S.ContentImg src={notice.imageUrl} alt="공지 이미지" />
                </S.ContentImgContainer>
              ) : null}
              <S.ContentText $isDesktop={isDesktop}>
                {notice.content}
              </S.ContentText>
            </S.ContentWrapper>
            <ShowList />
          </>
        ) : (
          <S.NoResult>등록된 게시글이 없습니다.</S.NoResult>
        )}
      </S.TitleWrapper>
    </>
  );
};

export default Content;
