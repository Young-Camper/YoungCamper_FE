import React, { useState } from "react";

//xomponents
import { ContentWrapper } from "../../style/commonStyle";
import Comment from "./components/comment";
import MainTitle from "../../components/ui/MainTitle";
import InputModal from "./components/InputModal";
import TitleSet from "../../components/ui/TitleSet";

//hooks
import useMediaQueries from "../../hooks/useMediaQueries";
import { useReviewValidation } from "./hooks/eviewValidation";

//styles
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
} from "./style";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [review, setReview] = useState("");
  const [password, setPassword] = useState("");

  const { showModal, setShowModal, modalMessage, handleInputButtonClick } =
    useReviewValidation();

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
              <Divider />
              <PhotoInputContainer>
                <PhotoButton
                  $isMobile={isMobile}
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                >
                  <img src={galleryImage} alt="gallery" />
                  사진
                  <input type="file" />
                </PhotoButton>
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
