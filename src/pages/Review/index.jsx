import React from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import {
  Container,
  TitleSet,
  Title,
  Subtitle,
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
  PhotoGrid,
} from "./style";
import Comment from "./components/comment";
import useMediaQueries from "../../hooks/useMediaQueries";

import galleryImage from "./assets/gelleryImage.svg";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  // const [images, setImages] = useState([null, null, null, null]); // 4개의 이미지를 관리

  // const handleImageUpload = (e, index) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const newImages = [...images];
  //       newImages[index] = reader.result; // 이미지 데이터를 상태에 저장
  //       setImages(newImages);
  //     };
  //     reader.readAsDataURL(file); // 파일을 읽고 base64로 변환
  //   }
  // };

  return (
    <ContentWrapper>
      <MainTitle title="후기" />
      <Container isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
        <TitleSet isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
          <Title isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
            의견을 들려주세요
          </Title>
          <Subtitle
            isMobile={isMobile}
            isTablet={isTablet}
            isDesktop={isDesktop}
          >
            여러분의 속마음이 듣고싶어요
          </Subtitle>
        </TitleSet>
        <Textfiled
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
        >
          <Textarea
            isMobile={isMobile}
            isTablet={isTablet}
            isDesktop={isDesktop}
          >
            <Review>
              <ReviewInput
                isMobile={isMobile}
                isTablet={isTablet}
                isDesktop={isDesktop}
                placeholder="모든 후기는 익명이며, 500자 이내로 작성해 주세요. (비방, 욕설 등은 숨김처리 됩니다.)"
              />
              <Divider />
              {/* <PhotoGrid>
                {images.map((image, index) => (
                  <PhotoBox key={index}>
                    {image ? (
                      <img src={image} alt={`uploaded-${index}`} />
                    ) : (
                      <div>+</div>
                    )}
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, index)}
                      accept="image/*"
                    />
                  </PhotoBox>
                ))}
              </PhotoGrid> */}
              <PhotoInputContainer>
                <PhotoButton
                  isMobile={isMobile}
                  isTablet={isTablet}
                  isDesktop={isDesktop}
                >
                  <img src={galleryImage} alt="gallery" />
                  사진
                  <input type="file" />
                </PhotoButton>
                <InputButton>입력</InputButton>
              </PhotoInputContainer>
            </Review>
            <PasswordWrapper>
              <PasswordContainer>
                <PasswordLabel
                  isMobile={isMobile}
                  isTablet={isTablet}
                  isDesktop={isDesktop}
                >
                  비밀번호
                </PasswordLabel>
                <PasswordInput
                  isMobile={isMobile}
                  isTablet={isTablet}
                  isDesktop={isDesktop}
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
      </Container>
    </ContentWrapper>
  );
};

export default index;
