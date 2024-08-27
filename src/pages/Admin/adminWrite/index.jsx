import React, { useState } from "react";
import TitleSet from "../../../components/ui/TitleSet";
import { DeleteBtn } from "../style";
import * as S from "../style";
import { Link, useNavigate } from "react-router-dom";
import { postAdmin } from "../../../lib/apis/api/postAdmin";
import { ShowListContainer } from "../../Notification/detail/Style";

const index = () => {
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

  // post 요청
  const handleAdminPost = async () => {
    const check = confirm("작성하시겠습니까?");

    // test code
    if (check) {
      // const response = await postAdmin(data);
      // console.log("admin post: ", response);
      alert(title + category + content);

      // 실패했을 때

      // 성공했을 때
      alert("작성되었습니다");
      navigate("/admin42794/list");
    }
  };
  return (
    <>
      <TitleSet mainText="작성 페이지" />
      <DeleteBtn onClick={handleAdminPost}>작성</DeleteBtn>
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
    </>
  );
};

export default index;
