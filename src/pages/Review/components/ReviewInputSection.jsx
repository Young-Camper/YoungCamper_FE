import React, { useState } from "react";
import InputModal from "./InputModal";
import * as S from "./ReviewInputSectionStyle";
import { ReviewValidation } from "../hooks/ReviewValidation";
import useMediaQueries from "../../../hooks/useMediaQueries";
import useImageUpload from "../hooks/useImageUpload";
import { uploadFilesToS3 } from "../hooks/uploadFilesToS3";
import { postReview } from "../../../lib/apis/api/postReview";

// lib(비속어 필터링)
import Filter from "badwords-ko";

const ReviewInputSection = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const filter = new Filter(); // 비속어 필터링 함수

  const [review, setReview] = useState("");
  const [password, setPassword] = useState("");

  // 모달 로직
  const { showModal, setShowModal, modalMessage, handleInputButtonClick } =
    ReviewValidation();

  // 이미지 업로드 훅 사용
  const {
    imagePreviews,
    inputRef,
    handleButtonClick,
    handleFileChange,
    handleRemoveImage,
    uploadedFiles, // 파일 리스트를 받아와야 함
    setImagePreviews, // 추가한 상태 관리 함수
    uploadMessage,
  } = useImageUpload(5);

  // Review post 처리
  const handleSubmit = async () => {
    // 리뷰 입력과 비밀번호 검증
    handleInputButtonClick(review, password);

    const fileUrls = await uploadFilesToS3(uploadedFiles, setUploadMessage); // S3에 파일 업로드 후 URL 반환
    if (fileUrls.length > 0) {
      try {
        // 리뷰 Request body로 변환
        const reviewData = {
          password: password,
          content: filter.clean(review), // 비속어 필터링 적용
          imageUrls: fileUrls, // S3에서 반환된 파일 URL 사용
        };
        // 서버로 전송
        const response = await postReview(reviewData);

        if (response) {
          alert("Review submitted successfully!");
          setReview("");
          setPassword("");
          setImagePreviews([]); // 이미지 미리보기 초기화
        } else {
          alert("Failed to submit review.");
        }
      } catch (error) {
        console.error("Error submitting review:", error);
        alert("Error submitting review.");
      }
    }
  };

  // 비밀번호 로직
  const handlePasswordChange = (e) => {
    setPassword(e.target.value.replace(/\D/g, "")); // 숫자가 아닌 입력 제거
  };

  return (
    <S.Textarea $isMobile={isMobile}>
      <S.Review $isMobile={isMobile} $isTablet={isTablet}>
        <S.ReviewInput
          value={review}
          onChange={(e) => setReview(e.target.value)}
          $isMobile={isMobile}
          $isTablet={isTablet}
          maxLength={499}
          placeholder="모든 후기는 익명이며, 500자 이내로 작성해 주세요. (비방, 욕설 등은 숨김처리 됩니다.)"
        />
        <S.ImagePreviewContainer $isMobile={isMobile}>
          {imagePreviews.map((preview, index) => (
            <S.ImagePreviewBox key={index} $isMobile={isMobile}>
              <img
                src={preview}
                alt={`미리보기 ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <S.ImageCanel onClick={() => handleRemoveImage(index)}>
                X
              </S.ImageCanel>
            </S.ImagePreviewBox>
          ))}
        </S.ImagePreviewContainer>

        <S.Divider />
        <S.PhotoInputContainer>
          <S.PhotoButton
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            onClick={handleButtonClick}
          >
            <img src={`${mediaUrl}Review/gellery.png`} alt="gellery" />
            사진
          </S.PhotoButton>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            multiple
          />
          <S.InputButton onClick={handleSubmit}>입력</S.InputButton>
        </S.PhotoInputContainer>
      </S.Review>
      <S.PasswordWrapper>
        <S.PasswordContainer>
          <S.PasswordLabel
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            비밀번호
          </S.PasswordLabel>
          <S.PasswordInput
            value={password}
            onChange={handlePasswordChange}
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            type="password"
            placeholder="숫자 4자리를 입력해주세요."
            maxLength={4}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </S.PasswordContainer>
      </S.PasswordWrapper>
      {showModal && (
        <InputModal
          title="입력 오류"
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
      {uploadMessage && <pre>{uploadMessage}</pre>}
    </S.Textarea>
  );
};

export default ReviewInputSection;
