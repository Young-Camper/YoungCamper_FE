import React, { useState, useRef } from "react";
import InputModal from "./InputModal";
import * as S from "./ReviewInputSectionStyle";

//lib(비속어 필터링)
import Filter from "badwords-ko";

import { ReviewValidation } from "../hooks/ReviewValidation";
import useMediaQueries from "../../../hooks/useMediaQueries";

const ReviewInputSection = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  const [review, setReview] = useState("");
  const [password, setPassword] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]);

  // 모달 로직
  const { showModal, setShowModal, modalMessage, handleInputButtonClick } =
    ReviewValidation();

  // 사진 로직
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + imagePreviews.length > 5) {
      alert("최대 5개까지 이미지를 추가할 수 있습니다.");
      return;
    }

    const newPreviews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });

    Promise.all(newPreviews).then((loadedImages) => {
      setImagePreviews((prevImages) => [...prevImages, ...loadedImages]);
    });
  };

  // 이미지 삭제 함수
  const handleRemoveImage = (index) => {
    setImagePreviews((prevImages) => prevImages.filter((_, i) => i !== index));
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
            <img src={`${mediaUrl}Review/gallery.png`} alt="gallery" />
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
          <S.InputButton
            onClick={() => handleInputButtonClick(review, password)}
          >
            입력
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
    </S.Textarea>
  );
};

export default ReviewInputSection;
