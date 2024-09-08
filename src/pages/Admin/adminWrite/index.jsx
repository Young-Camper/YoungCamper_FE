import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { postAnnouncement } from "../../../lib/apis/api/postAnnouncement";

import * as S from "../style";
import TitleSet from "../../../components/ui/TitleSet";
import { DeleteBtn } from "../style";
import { ShowListContainer } from "../../Notification/detail/Style";
import { ContentWrapper } from "../../../style/commonStyle";
import { useRecoilValue } from "recoil";
import { adminState } from "../../../context/recoil/adminState";

const index = () => {
  const { isDesktop } = useMediaQueries();
  const navigate = useNavigate();
  const [koTitle, setKoTitle] = useState("");
  const [enTitle, setEnTitle] = useState("");
  const [koContent, setKoContent] = useState("");
  const [enContent, setEnContent] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [isPinned, setIsPinned] = useState(false);

  const isAdmin = useRecoilValue(adminState);

  // 관리자 여부 확인
  // useEffect(() => {
  //   if (!isAdmin) {
  //     alert("관리자 권한이 필요합니다.");
  //     navigate("/admin42794");
  //   }
  // }, [isAdmin, navigate]);

  // 핸들러
  const handleKoTitleChange = (e) => setKoTitle(e.target.value);
  const handleEnTitleChange = (e) => setEnTitle(e.target.value);
  const handleKoContentChange = (e) => setKoContent(e.target.value);
  const handleEnContentChange = (e) => setEnContent(e.target.value);
  const handlePinnedChange = (e) => setIsPinned(e.target.checked);
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
    // if (isAdmin) {
    const check = confirm("작성하시겠습니까?");
    if (check) {
      try {
        const response = await postAnnouncement(
          imageUrl, // presignedurl 변경 필요
          fileUrl,
          isPinned,
          koContent,
          enContent,
          koTitle,
          enTitle
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
    // }
    // else {
    //   alert("관리자 권한이 없습니다.");
    // }
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
              <S.TextCotainer>제목(ko)</S.TextCotainer>
              <S.InputArea
                placeholder="제목을 입력하세요"
                onChange={handleKoTitleChange}
              />
            </S.InputGrid>
            <S.InputGrid>
              <S.TextCotainer>제목(en)</S.TextCotainer>
              <S.InputArea
                placeholder="제목을 입력하세요"
                onChange={handleEnTitleChange}
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
          ko:
          <S.InputContent onChange={handleKoContentChange} />
          en:
          <S.InputContent onChange={handleEnContentChange} />
        </S.InputWrapper>
        <Link to="/admin42794/list">
          <ShowListContainer>목록보기</ShowListContainer>
        </Link>
      </S.AdminContainer>
    </ContentWrapper>
  );
};

export default index;
