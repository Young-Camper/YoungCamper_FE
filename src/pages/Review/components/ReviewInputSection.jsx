import React, { useState } from "react";
import InputModal from "./InputModal";
import * as S from "./ReviewInputSectionStyle";
import { ReviewValidation } from "../hooks/ReviewValidation";
import useMediaQueries from "../../../hooks/useMediaQueries";
import useImageUpload from "../hooks/useImageUpload";
import { uploadFilesToS3 } from "../hooks/uploadFilesToS3";
import { postReview } from "../../../lib/apis/api/postReview";
import Loading from "../../../components/ui/Loading"; // 컴포넌트 이름 대문자로 수정

// 비속어 필터링 라이브러리
import Filter from "badwords-ko";

const ReviewInputSection = ({ onSuccess }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const filter = new Filter();

  const [review, setReview] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false); // 초기 로딩 상태 false로 수정

  const { handleInputButtonClick } = ReviewValidation();

  const {
    imagePreviews,
    inputRef,
    handleButtonClick,
    handleFileChange,
    handleRemoveImage,
    uploadedFiles,
    setImagePreviews,
    uploadMessage,
    setUploadMessage,
    resetUpload, // 추가된 초기화 함수
  } = useImageUpload(5);

  // 리뷰 등록 API 처리
  const handleSubmit = async () => {
    setLoading(true); // 로딩 시작

    handleInputButtonClick(review, password);

    // 필수 입력 확인
    if (!password && !review) {
      setModalMessage(
        "후기를 작성하지 않았습니다.\n500자 이내 후기를 작성해주세요."
      );
      setShowModal(true);
      setLoading(false);
      return;
    }

    // 리뷰 텍스트 길이 확인
    if (review.length < 10) {
      setModalMessage("10자 이상 후기를 작성해주세요.");
      setShowModal(true);
      setLoading(false);
      return;
    }

    // 비밀번호 길이 확인
    if (password.length < 4) {
      setModalMessage(
        "비밀번호를 입력하지 않았습니다.\n숫자 4자리 비밀번호를 입력해주세요."
      );
      setShowModal(true);
      setLoading(false);
      return;
    }

    let fileUrls = [];
    if (uploadedFiles.length > 0) {
      setUploadMessage("이미지 업로드 중입니다...");
      try {
        fileUrls = await uploadFilesToS3(uploadedFiles, setUploadMessage);
      } catch (error) {
        setModalMessage("이미지 업로드에 실패했습니다.");
        setShowModal(true);
        setLoading(false);
        return;
      }
    }

    const reviewData = {
      password: password,
      content: filter.clean(review),
      imageUrls: fileUrls,
    };

    console.log("Submitting review data:", reviewData);

    try {
      const response = await postReview(reviewData);

      if (response) {
        alert("감사합니다. 영캠프 후기가 등록되었습니다.");
        setReview("");
        setPassword("");
        setUploadMessage("");
        onSuccess(); // 부모 컴포넌트에 성공 알림
      } else {
        setModalMessage("리뷰 제출에 실패했습니다.");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error submitting review:", error);

      // 서버의 상세한 오류 메시지를 모달에 표시
      if (error.response && error.response.data) {
        setModalMessage(
          `오류: ${
            error.response.data.message || "리뷰 제출 중 오류가 발생했습니다."
          }`
        );
      } else {
        setModalMessage("리뷰 제출 중 오류가 발생했습니다.");
      }
      setShowModal(true);
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.replace(/\D/g, "")); // 숫자만 입력 가능하게 처리
  };

  return loading ? (
    <Loading />
  ) : (
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
        <S.PhotoInputContainer $isMobile={isMobile}>
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
