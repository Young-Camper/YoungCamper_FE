import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { postAnnouncement } from "../../../lib/apis/api/postAnnouncement";

import * as S from "../style";
import TitleSet from "../../../components/ui/TitleSet";
import { DeleteBtn } from "../style";
import { ShowListContainer } from "../../Notification/detail/Style";
import { ContentWrapper } from "../../../style/commonStyle";

const index = () => {
  const { isDesktop } = useMediaQueries();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [isPinned, setIsPinned] = useState(false);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handlePinnedChange = (e) => setIsPinned(e.target.checked);

  // 이미지 선택 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUrl(file);
    }
  };

  // 이미지 미리보기 URL
  const imagePreviewUrl = imageUrl ? URL.createObjectURL(imageUrl) : null;

  // ====== api post ======
  const handleAdminPost = async () => {
    const check = confirm("작성하시겠습니까?");

    if (check) {
      try {
        const response = await postAnnouncement(
          title,
          content,
          imageUrl, // presignedurl 변경 필요
          fileUrl,
          isPinned
        );

        console.log("admin post response: ", response);
        alert("작성되었습니다");
        navigate("/admin42794/list");
      } catch (error) {
        console.error("Failed to post admin data: ", error);
        alert("작성에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("취소되었습니다.");
    }
  };

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
              <S.TextCotainer>이미지</S.TextCotainer>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <S.TextCotainer>필독 여부</S.TextCotainer>
              <S.RadioBtn
                type="checkbox"
                checked={isPinned}
                onChange={handlePinnedChange}
                $isChecked={isPinned}
              />
              <p>{isPinned ? "필독 공지" : "일반 공지"}</p>
            </S.InputGrid>
          </S.InputContainer>
          {imageUrl && (
            <>
              이미지 미리보기 :
              <S.PreviewImg src={imagePreviewUrl} />
            </>
          )}
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
