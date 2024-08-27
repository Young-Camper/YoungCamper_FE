import React from 'react'
import * as S from "./HomeStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 3000,
  slidesToShow: 2.1,
  slidesToScroll: 1,
};

const Social = () => {
  return (
    <S.SocialSection>
      <S.SocialContainer>
        <S.SocialTop>
            <S.SocialTitle>최근 소식을 팔로우해보세요</S.SocialTitle>
        </S.SocialTop>
        <S.SocialBottom>
         <S.SocialSliderBox><Slider {...settings}> 
            <S.SocialFrame> {/*영캠프 인스타그램*/}
                <S.FrameCard>
                  <S.InstaBg>
                    <S.InstaIcon></S.InstaIcon>
                  </S.InstaBg>
                  <S.FrameBox>
                    <S.FrameText>Youngcamp Instagram</S.FrameText>
                    <S.SocialArrowImg src=".\src\assets\images\Arrow_B.png" />
                  </S.FrameBox>
                </S.FrameCard>
            </S.SocialFrame>
            <S.SocialFrame>  {/*동국대 인스타그램*/}
                <S.FrameCard>
                  <S.InstaBg>
                    <S.InstaIcon></S.InstaIcon>
                  </S.InstaBg>
                  <S.FrameBox>
                    <S.FrameText>Dongguk Univ Instagram</S.FrameText>
                    <S.SocialArrowImg src=".\src\assets\images\Arrow_B.png" />
                  </S.FrameBox>
                </S.FrameCard>
            </S.SocialFrame>
            <S.SocialFrame> {/*동국대 홈페이지*/}
                <S.FrameCard>
                  <S.InstaBg>
                    <S.InstaIcon></S.InstaIcon>
                  </S.InstaBg>
                  <S.FrameBox>
                    <S.FrameText>Dongguk Univ Website</S.FrameText>
                    <S.SocialArrowImg src=".\src\assets\images\Arrow_B.png" />
                  </S.FrameBox>
                </S.FrameCard>
            </S.SocialFrame>
          </Slider></S.SocialSliderBox>
        </S.SocialBottom>
      </S.SocialContainer>
    </S.SocialSection>
  )
}

export default Social
