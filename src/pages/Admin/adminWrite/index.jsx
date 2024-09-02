import React, { useState } from "react";
import TitleSet from "../../../components/ui/TitleSet";
import { DeleteBtn } from "../style";
import * as S from "../style";
import { Link, useNavigate } from "react-router-dom";
import { postAdmin } from "../../../lib/apis/api/postAdmin";
import { ShowListContainer } from "../../Notification/detail/Style";
import axios from "axios";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { ContentWrapper } from "../../../style/commonStyle";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // ============== BE TEST CODE - post 요청 ==============

  const handleAdminPost = async () => {
    const check = confirm("작성하시겠습니까?");

    if (check) {
      try {
        axios;
        // POST로 보낼 데이터 작성 → 테스트할 json 형식에 맞춰 변경해주세요!
        const data = {
          title: "title",
          category: "category",
          content: "content",
          images: ["img1", "img2"],
        };

        // POST 요청
        const response = await axios.post("/api/admin", data); // API 엔드포인트

        // 응답 로그
        console.log("admin post response: ", response);

        // 성공했을 때
        alert("작성되었습니다");
        navigate("/admin42794/list");
      } catch (error) {
        // 실패했을 때
        console.error("Failed to post admin data: ", error);
        alert("작성에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("취소되었습니다.");
    }
  };

  // post 요청
  // const handleAdminPost = async () => {
  //   const check = confirm("작성하시겠습니까?");

  //   // test code
  //   if (check) {
  //     // const response = await postAdmin(data);
  //     // console.log("admin post: ", response);
  //     alert(title + category + content);

  //     // 실패했을 때

  //     // 성공했을 때
  //     alert("작성되었습니다");
  //     navigate("/admin42794/list");
  //   }
  // };

  return (
    <ContentWrapper $isDesktop={isDesktop}>
      <TitleSet mainText="작성 페이지" />
      <DeleteBtn $isDesktop={isDesktop} onClick={handleAdminPost}>
        작성
      </DeleteBtn>
      <S.AdminContainer>
        <S.InputWrapper>
          <S.InputContainer>
            <S.InputGrid>
              <S.TextCotainer>제목</S.TextCotainer>
              <S.InputArea
                placeholder="제목을 입력하세요"
                onChange={handleTitleChange}
              />
            </S.InputGrid>
            <S.InputGrid>
              <S.TextCotainer>카테고리</S.TextCotainer>
              <S.InputArea
                placeholder="카테고리를 입력하세요"
                onChange={handleCategoryChange}
              />
            </S.InputGrid>
          </S.InputContainer>
          <S.InputContent onChange={handleContentChange} />
        </S.InputWrapper>
        <Link to="/admin42794/list">
          <ShowListContainer>목록보기</ShowListContainer>
        </Link>
      </S.AdminContainer>
    </ContentWrapper>
  );
};

export default index;
