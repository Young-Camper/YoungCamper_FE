import React, { useState, useEffect } from "react";
import useMediaQueries from "../../../hooks/useMediaQueries";

import { updateAnnouncement } from "../../../lib/apis/api/updateAnnouncement";
import { uploadFilesToS3 } from "../../Review/hooks/uploadFilesToS3";
import useImageUpload from "../../Review/hooks/useImageUpload";

import * as S from "../style";

const UpdateNotice = ({ data, enData, isEditing, setIsEditing }) => {
  const { isDesktop } = useMediaQueries();

  const [koTitle, setKoTitle] = useState("");
  const [enTitle, setEnTitle] = useState("");
  const [koContent, setKoContent] = useState("");
  const [enContent, setEnContent] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isPinned, setIsPinned] = useState(false);

  const handleKoTitleChange = (e) => setKoTitle(e.target.value);
  const handleEnTitleChange = (e) => setEnTitle(e.target.value);
  const handleKoContentChange = (e) => setKoContent(e.target.value);
  const handleEnContentChange = (e) => setEnContent(e.target.value);
  const handlePinnedChange = (e) => setIsPinned(e.target.checked);

  const {
    imagePreviews,
    uploadedFiles,
    handleFileChange,
    handleRemoveImage,
    resetUpload,
    uploadMessage,
    setUploadMessage,
  } = useImageUpload(5);

  useEffect(() => {
    setKoTitle(data.title);
    setEnTitle(enData.title);
    setKoContent(data.content);
    setEnContent(enData.content);
    setIsPinned(data.isPinned);
    setImageUrl(data.imageUrl);
  }, []);

  // ====== api patch ======
  const handleUpdate = async () => {
    const check = confirm("수정하시겠습니까?");
    if (check) {
      try {
        let updatedImageUrl = imageUrl;

        if (uploadedFiles.length > 0) {
          setUploadMessage("공지 수정 중");
          const uploadedFileUrls = await uploadFilesToS3(
            uploadedFiles,
            setUploadMessage
          );
          updatedImageUrl =
            uploadedFileUrls.length > 0 ? uploadedFileUrls[0] : null;
        }

        const requestBody = {
          imageUrl: updatedImageUrl,
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

        const response = await updateAnnouncement(
          data.announcementId,
          requestBody
        );
        console.log("admin patch response: ", response);
        alert("수정되었습니다");
        setUploadMessage("");
        setIsEditing(false);
      } catch (error) {
        console.error("Failed to post admin data: ", error);
        alert("작성에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("취소되었습니다.");
    }
  };

  return (
    <div>
      <S.DeleteBtn $isDesktop={isDesktop} onClick={handleUpdate}>
        수정
      </S.DeleteBtn>
      <S.DeleteBtn
        $isDesktop={isDesktop}
        $isDelete={true}
        onClick={handleUpdate}
      >
        취소
      </S.DeleteBtn>
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
          {imagePreviews.length > 0 ? (
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
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                      }}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div>게시된 이미지입니다. 수정은 상단 파일선택을 눌러주세요.</div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ position: "relative", margin: "5px" }}>
                  <img
                    src={imageUrl}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                    }}
                  >
                    x
                  </button>
                </div>
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
      </S.AdminContainer>
    </div>
  );
};

export default UpdateNotice;
