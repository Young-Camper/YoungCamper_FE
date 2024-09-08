import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { getAnnouncement } from "../../../lib/apis/api/getAnnouncement";

import * as S from "../../Notification/detail/Style";
import TitleSet from "../../../components/ui/TitleSet";
import { ContentWrapper } from "../../../style/commonStyle";
import Loading from "../../../components/ui/Loading";
import { useRecoilValue } from "recoil";
import { adminState } from "../../../context/recoil/adminState";

const index = () => {
  const { isDesktop } = useMediaQueries();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const isAdmin = useRecoilValue(adminState);

  // 관리자 여부 확인
  useEffect(() => {
    if (!isAdmin) {
      alert("관리자 권한이 필요합니다.");
      navigate("/admin42794");
    }
  }, [isAdmin, navigate]);

  // ====== api get ======
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAnnouncement(id);
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        // console.error("Error fetching announcement:", err);
        setLoading(false);
      }
    };

    if (id && isAdmin) {
      getData();
    }
  }, [id, isAdmin]);

  return loading ? (
    <Loading />
  ) : (
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
