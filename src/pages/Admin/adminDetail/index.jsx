import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { getAnnouncement } from "../../../lib/apis/api/getAnnouncement";

import * as S from "../../Notification/detail/Style";
import TitleSet from "../../../components/ui/TitleSet";
import { ContentWrapper } from "../../../style/commonStyle";

const index = () => {
  const { isDesktop } = useMediaQueries();
  const { id } = useParams();
  const [data, setData] = useState({});

  // ====== api get ======
  useEffect(() => {
    const getData = async () => {
      const response = await getAnnouncement(id);
      setData(response.data);
    };
    getData();
    console.log("id:", id);
  }, []);

  return (
    <div>
      <ContentWrapper $isDesktop={isDesktop}>
        <TitleSet mainText="상세 페이지" />
        <S.TitleWrapper $isDesktop={isDesktop}>
          <S.Title $isDesktop={isDesktop}>{data.title}</S.Title>
          <S.InfoContainer $isDesktop={isDesktop}>
            <S.Info>작성인: 관리자</S.Info>
            <S.Info>등록일: {data.createdAt}</S.Info>
          </S.InfoContainer>
          <S.Line />
          <S.ContentWrapper $isDesktop={isDesktop}>
            {data.imageUrl != "" && (
              <S.ContentImgContainer>
                <S.ContentImg src={data.imageUrl} alt="이미지" />
              </S.ContentImgContainer>
            )}
            <S.ContentText $isDesktop={isDesktop}>{data.content}</S.ContentText>
          </S.ContentWrapper>
          <S.ShowListWrapper>
            <Link to="/admin42794/list">
              <S.ShowListContainer $isDesktop={isDesktop}>
                목록보기
              </S.ShowListContainer>
            </Link>
          </S.ShowListWrapper>
        </S.TitleWrapper>
      </ContentWrapper>
    </div>
  );
};

export default index;
