import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useImageUpload from "../../Review/hooks/useImageUpload";
import { postAnnouncement } from "../../../lib/apis/api/postAnnouncement";
import { uploadFilesToS3 } from "../../Review/hooks/uploadFilesToS3";
import { Link } from "react-router-dom";

import * as S from "../style";
import TitleSet from "../../../components/ui/TitleSet";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { DeleteBtn } from "../style";
import { ShowListContainer } from "../../Notification/detail/Style";
import { ContentWrapper } from "../../../style/commonStyle";
import { useRecoilState } from "recoil";
import { adminState } from "../../../context/recoil/adminState";
// import { getAdminCheck } from "../../../lib/apis/api/getAdminCheck";

const Index = () => {
  const { isDesktop } = useMediaQueries();
  const navigate = useNavigate();
  const [koTitle, setKoTitle] = useState("");
  const [enTitle, setEnTitle] = useState("");
  const [koContent, setKoContent] = useState("");
  const [enContent, setEnContent] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const [isPinned, setIsPinned] = useState(false);
  const inputRef = useRef(null);
  const [isAdmin, setIsAdmin] = useRecoilState(adminState);

  const {
    imagePreviews,
    uploadedFiles,
    handleFileChange,
    handleRemoveImage,
    resetUpload,
    uploadMessage,
    setUploadMessage,
  } = useImageUpload(5);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getAdminCheck();
  //       if (response.data.isAdmin) {
  //         setIsAdmin(true);
  //       } else {
  //         alert("관리자 권한이 필요합니다.");
  //         navigate("/admin42794");
  //       }
  //     } catch (error) {
  //       console.error("Error admin check:", error);
  //       alert("관리자 권한 확인 중 오류가 발생했습니다.");
  //       navigate("/admin42794");
  //     }
  //   };

  //   fetchData();
  // }, [isAdmin, navigate]);

  const handleKoTitleChange = (e) => setKoTitle(e.target.value);
  const handleEnTitleChange = (e) => setEnTitle(e.target.value);
  const handleKoContentChange = (e) => setKoContent(e.target.value);
  const handleEnContentChange = (e) => setEnContent(e.target.value);
  const handlePinnedChange = (e) => setIsPinned(e.target.checked);

  const handleAdminPost = async () => {
    const check = confirm("작성하시겠습니까?");
    if (check) {
      try {
        let imageUrl = null;

        if (uploadedFiles.length > 0) {
          setUploadMessage("공지 등록중");
          const uploadedFileUrls = await uploadFilesToS3(
            uploadedFiles,
            setUploadMessage
          );
          imageUrl = uploadedFileUrls.length > 0 ? uploadedFileUrls[0] : null;
        }

        const requestBody = {
          imageUrl: imageUrl || null,
          fileUrl: fileUrl || null,
          isPinned,
          contents: [
            {
              languageCode: "ko",
              title: koTitle,
              content: koContent,
            },
            {
              languageCode: "en",
              title: enTitle,
              content: enContent,
            },
          ],
        };

        console.log("Request Body:", requestBody);

        const response = await postAnnouncement(requestBody);
        console.log("admin post response: ", response);
        alert("작성되었습니다");
        setUploadMessage("");
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
              <S.TextCotainer>제목(ko)</S.TextCotainer>
              <S.InputArea
                placeholder="제목을 입력하세요"
                value={koTitle}
                onChange={handleKoTitleChange}
              />
            </S.InputGrid>
            <S.InputGrid>
              <S.TextCotainer>제목(en)</S.TextCotainer>
              <S.InputArea
                placeholder="제목을 입력하세요"
                value={enTitle}
                onChange={handleEnTitleChange}
              />
            </S.InputGrid>
            <S.InputGrid>
              <S.TextCotainer>이미지</S.TextCotainer>
              <input
                type="file"
                accept="image/*"
                multiple
                ref={inputRef}
                onChange={handleFileChange}
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
          {imagePreviews.length > 0 && (
            <>
              <div>이미지 미리보기 :</div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {imagePreviews.map((preview, index) => (
                  <div
                    key={index}
                    style={{ position: "relative", margin: "5px" }}
                  >
                    <img
                      src={preview}
                      alt={`preview-${index}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      style={{ position: "absolute", top: "5px", right: "5px" }}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
          ko:
          <S.InputContent
            placeholder="내용을 입력하세요"
            value={koContent}
            onChange={handleKoContentChange}
          />
          en:
          <S.InputContent
            placeholder="내용을 입력하세요"
            value={enContent}
            onChange={handleEnContentChange}
          />
        </S.InputWrapper>
        <Link to="/admin42794/list">
          <ShowListContainer>목록보기</ShowListContainer>
        </Link>
      </S.AdminContainer>
    </ContentWrapper>
  );
};

export default Index;
