import React, { useState } from "react";
import InputModal from "./InputModal";
import * as S from "./ReviewInputSectionStyle";
import { ReviewValidation } from "../hooks/ReviewValidation";
import useMediaQueries from "../../../hooks/useMediaQueries";
import useImageUpload from "../hooks/useImageUpload";
import { uploadFilesToS3 } from "../hooks/uploadFilesToS3";
import { postReview } from "../../../lib/apis/api/postReview";
import Loading from "../../../components/ui/Loading"; // 컴포넌트 이름 대문자로 수정
import Filter from "badwords-ko"; // 비속어 필터링 라이브러리
import { useTranslation } from "react-i18next";

const ReviewInputSection = ({ onSuccess }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const filter = new Filter();

  const [review, setReview] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false); // 초기 로딩 상태 false로 수정

  const { t } = useTranslation();

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
      setModalMessage(t("review.noreview"));
      setShowModal(true);
      setLoading(false);
      return;
    }

    // 리뷰 텍스트 길이 확인
    if (review.length < 10) {
      setModalMessage(t("review.ten"));
      setShowModal(true);
      setLoading(false);
      return;
    }

    // 리뷰 텍스트 길이 확인 (공백 포함 500자 이내)
    if (review.length > 500) {
      setModalMessage(t("review.under"));
      setShowModal(true); // 모달 표시
      setLoading(false);
      return;
    }

    // 비밀번호 길이 확인
    if (password.length < 4) {
      setModalMessage(t("review.nopw"));
      setShowModal(true);
      setLoading(false);
      return;
    }

    let fileUrls = [];
    if (uploadedFiles.length > 0) {
      setUploadMessage(t("review.ing"));
      try {
        fileUrls = await uploadFilesToS3(uploadedFiles, setUploadMessage);
        resetUpload(); // 업로드 후 파일 및 미리보기 초기화
      } catch (error) {
        alert(t("review.fail"));
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

    try {
      const response = await postReview(reviewData);

      if (response) {
        alert(t("review.submit"));
        setReview("");
        setPassword("");
        resetUpload(); // 이미지 미리보기 초기화
        setUploadMessage("");
        onSuccess(); // 부모 컴포넌트에 성공 알림
      } else {
        alert(t("review.nosubmit"));
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage(t("review.nosubmit"));

      setShowModal(true);
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.replace(/\D/g, "")); // 숫자만 입력 가능하게 처리
  };

  // 리뷰 입력값 변경 핸들러
  const handleReviewChange = (e) => {
    const inputText = e.target.value;

    // 500자 초과 입력 방지
    if (inputText.length <= 500) {
      setReview(inputText);
    } else {
      // 500자를 초과하면 상태를 업데이트하지 않음
      setModalMessage(t("review.under"));
      setShowModal(true);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <S.Textarea $isMobile={isMobile}>
      <S.Review $isMobile={isMobile} $isTablet={isTablet}>
        <S.ReviewInput
          value={review}
          onChange={handleReviewChange}
          $isMobile={isMobile}
          $isTablet={isTablet}
          maxLength={500}
          placeholder={t("review.ph")}
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
            {t("review.photo")}
          </S.PhotoButton>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            multiple
          />
          <S.InputButton onClick={handleSubmit}>
            {t("review.enter")}
          </S.InputButton>
        </S.PhotoInputContainer>
      </S.Review>
      <S.PasswordWrapper>
        <S.PasswordContainer>
          <S.PasswordLabel
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            {t("review.pw")}
          </S.PasswordLabel>
          <S.PasswordInput
            value={password}
            onChange={handlePasswordChange}
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            type="password"
            placeholder={t("review.num")}
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
