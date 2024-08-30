import React, { useState, useRef } from "react";

// Components
import { ContentWrapper } from "../../style/commonStyle";
import Comment from "./components/comment";
import MainTitle from "../../components/ui/MainTitle";
import InputModal from "./components/InputModal";
import TitleSet from "../../components/ui/TitleSet";

// Hooks
import useMediaQueries from "../../hooks/useMediaQueries";
import { useReviewValidation } from "./hooks/eviewValidation";

// Styles
import galleryImage from "./assets/gelleryImage.svg";
import {
  Container,
  Textfiled,
  Textarea,
  Review,
  Comments,
  ReviewInput,
  Divider,
  PhotoButton,
  InputButton,
  PhotoInputContainer,
  PasswordContainer,
  PasswordInput,
  PasswordLabel,
  PasswordWrapper,
  TitleWrapper,
  ImagePreviewBox,
  ImagePreviewContainer,
} from "./style";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [review, setReview] = useState("");
  const [password, setPassword] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]); // 이미지 미리보기 배열 상태

  // -------Modal---------
  const { showModal, setShowModal, modalMessage, handleInputButtonClick } =
    useReviewValidation();

  // ---------사진 Input----------
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // 파일 선택 핸들러 (5개 이상의 이미지를 업로드 하려 할 때 alret 구현)
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

    // 모든 프리뷰가 로딩될 때까지 대기(시간이 좀 걸려서 수정 필요.)
    Promise.all(newPreviews).then((loadedImages) => {
      setImagePreviews((prevImages) => [...prevImages, ...loadedImages]);
    });
  };

  return (
    <>
      <MainTitle
        mainText="후기"
        subText="앞으로 더욱 성장할 수 있도록 솔직한 후기를 남겨주세요"
      />
      <Container
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <TitleWrapper
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <TitleSet
            mainText="의견을 들려주세요."
            subText="여러분의 속마음이 듣고 싶어요"
          />
        </TitleWrapper>

        <Textfiled
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <Textarea
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            <Review>
              <ReviewInput
                value={review}
                onChange={(e) => setReview(e.target.value)}
                $isMobile={isMobile}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
                placeholder="모든 후기는 익명이며, 500자 이내로 작성해 주세요. (비방, 욕설 등은 숨김처리 됩니다.)"
              />
              <ImagePreviewContainer $isMobile={isMobile}>
                {imagePreviews.map((preview, index) => (
                  <ImagePreviewBox
                    key={index}
                    $isMobile={isMobile}
                    $isTablet={isTablet}
                    $isDesktop={isDesktop}
                  >
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
                  </ImagePreviewBox>
                ))}
              </ImagePreviewContainer>

              <Divider />
              <PhotoInputContainer>
                <PhotoButton
                  $isMobile={isMobile}
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  onClick={handleButtonClick}
                >
                  <img src={galleryImage} alt="gallery" />
                  사진
                </PhotoButton>
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }} // input 숨기기
                  multiple
                />
                <InputButton
                  onClick={() => handleInputButtonClick(review, password)}
                >
                  입력
                </InputButton>
              </PhotoInputContainer>
            </Review>
            <PasswordWrapper>
              <PasswordContainer>
                <PasswordLabel
                  $isMobile={isMobile}
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                >
                  비밀번호
                </PasswordLabel>
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  $isMobile={isMobile}
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  type="password"
                  placeholder="숫자 4자리를 입력해주세요."
                />
              </PasswordContainer>
            </PasswordWrapper>
          </Textarea>
        </Textfiled>
        <Comments>
          <Comment />
        </Comments>
        {showModal && (
          <InputModal
            title="입력 오류"
            message={modalMessage}
            onClose={() => setShowModal(false)}
          />
        )}
      </Container>
    </>
  );
};

export default index;
