import React, { useState } from "react";
import InputModal from "./InputModal";
import * as S from "./ReviewInputSectionStyle";
import { ReviewValidation } from "../hooks/ReviewValidation";
import useMediaQueries from "../../../hooks/useMediaQueries";
import useImageUpload from "../hooks/useImageUpload";
import { uploadFilesToS3 } from "../hooks/uploadFilesToS3";
import { postReview } from "../../../lib/apis/api/postReview";
import Loading from "../../../components/ui/Loading";
import Filter from "badwords-ko";
import { useTranslation } from "react-i18next";

const ReviewInputSection = ({ onSuccess }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const filter = new Filter();

  const [review, setReview] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputCount, setInputCount] = useState(0);

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
    resetUpload,
  } = useImageUpload(5);

  // 글자 수 계산 함수 (띄어쓰기는 항상 1글자로 계산)
  const calculateCharLength = (text) => {
    let length = 0;

    for (let i = 0; i < text.length; i++) {
      // trim() 제거하여 공백을 그대로 카운트
      const char = text[i];
      if (char === " ") {
        length += 1; // 띄어쓰기는 무조건 1로 계산
      } else if (char.match(/[\0-\x7f]/)) {
        length += 1; // 영어, 숫자 등 ASCII 범위 문자는 1로 계산
      } else {
        length += 1; // 한글 등 비 ASCII 문자는 1로 계산
      }
    }
    return length;
  };

  // 리뷰 입력값 변경 핸들러
  const handleReviewChange = (e) => {
    const inputText = e.target.value;
    const charLength = calculateCharLength(inputText);

    // 글자 수 계산하여 상태 업데이트
    setInputCount(charLength);

    // 500글자 초과 입력 방지
    if (charLength <= 500) {
      setReview(inputText);
    } else {
      // setModalMessage(t("review.under"));
      // setShowModal(true);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    handleInputButtonClick(review, password);

    // 필수 입력 확인
    if (!password && !review) {
      setModalMessage(t("review.noreview"));
      setShowModal(true);
      setLoading(false);
      return;
    }

    // 리뷰 텍스트 길이 확인
    if (inputCount < 10) {
      setModalMessage(t("review.ten"));
      setShowModal(true);
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
        resetUpload();
      } catch (error) {
        alert(t("review.fail"));
        setShowModal(true);
        setLoading(false);
        return;
      }
    }

    // 리뷰에서 \n을 다른 문자열로 대체
    const tempReview = review.replace(/\n/g, "<NEWLINE>");

    // 비속어 필터링 적용
    const cleanedReview = filter.clean(tempReview);

    // 필터링 후 다시 \n 복원
    const finalReview = cleanedReview.replace(/<NEWLINE>/g, "\n");

    const reviewData = {
      password: password,
      content: finalReview,
      imageUrls: fileUrls,
    };

    try {
      const response = await postReview(reviewData);

      if (response) {
        alert(t("review.submit"));
        setReview("");
        setPassword("");
        resetUpload();
        setUploadMessage("");
        onSuccess();
        setInputCount(0);
      } else {
        alert(t("review.nosubmit"));
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage(t("review.nosubmit"));
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.replace(/\D/g, ""));
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
          placeholder={t("review.ph")}
        />
        <S.inputCountWrapper>
          <S.inputCount $isMobile={isMobile} $isTablet={isTablet}>
            {inputCount} / 500
          </S.inputCount>
        </S.inputCountWrapper>
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
