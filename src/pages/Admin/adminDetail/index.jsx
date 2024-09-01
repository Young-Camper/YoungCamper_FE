import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContentWrapper } from "../../../style/commonStyle";
import * as S from "../../Notification/detail/Style";
import TitleSet from "../../../components/ui/TitleSet";
import { deleteAdmin } from "../../../lib/apis/api/deleteAdmin";
import { getAdmin } from "../../../lib/apis/api/getAdmin";
import { DeleteBtn } from "../style";
import useMediaQueries from "../../../hooks/useMediaQueries";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const { id } = useParams();
  const [data, setData] = useState({
    id: id,
    title: "제목이욧",
    date: "2024-08-27",
    content:
      "어짜구저짜구본문어짜구저짜구본문어짜구저짜구본문어짜구저짜구본문어짜구저짜구본문",
    image:
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/07/21/4a6e5d86-eafd-4c4c-a252-faf00c45cfcc.jpg",
  });

  // id 값으로 개별 컨텐츠 get 요청
  useEffect(() => {
    const getAdminData = async () => {
      const response = await getAdmin(id);
      setData(response.data);
    };
    getAdminData();
  }, []);

  //삭제 요청
  const handleAdminDelete = async () => {
    const check = confirm("삭제하시겠습니까?");

    // test code
    if (check) {
      const response = await deleteAdmin(id);
      console.log("admin delete: ", response);

      // state 확인
      alert("id: " + id + " | pw: " + pw);

      // 실패했을 때

      // 성공했을 때
      alert("삭제되었습니다");
      navigate("/admin42794/list");
    }
  };

  return (
    <div>
      <ContentWrapper $isDesktop={isDesktop}>
        <TitleSet mainText="상세 페이지" />
        <DeleteBtn $isDesktop={isDesktop} onClick={handleAdminDelete}>
          삭제
        </DeleteBtn>
        <S.TitleWrapper $isDesktop={isDesktop}>
          <S.Title $isDesktop={isDesktop}>{data.title}</S.Title>
          <S.InfoContainer $isDesktop={isDesktop}>
            <S.Info>작성인: 관리자</S.Info>
            <S.Info>등록일: {data.date}</S.Info>
          </S.InfoContainer>
          <S.Line />
          <S.ContentWrapper $isDesktop={isDesktop}>
            {data.image != "" && (
              <S.ContentImgContainer>
                <S.ContentImg src={data.image} alt="이미지" />
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
