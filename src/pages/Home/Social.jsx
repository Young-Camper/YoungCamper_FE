import React from "react";
import * as S from "./HomeStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQueries from "../../hooks/useMediaQueries";

const Social = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  const settings = {
    dots: false,
    infinite: false,
    speed: 3000,
    slidesToShow: isDesktop ? 2.2 : isTablet ? 3 : 1.2,
    slidesToScroll: 1,
  };

  return (
    <S.SocialSection $isTablet={isTablet} $isDesktop={isDesktop}>
      <S.SocialContainer $isDesktop={isDesktop}>
        <S.SocialTop $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.SocialTitle $isDesktop={isDesktop}>
            최근 소식을 팔로우해보세요
          </S.SocialTitle>
        </S.SocialTop>
        <S.SocialBottom $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.SocialSliderBox $isDesktop={isDesktop}>
            <Slider {...settings}>
              <S.SocialFrame $isTablet={isTablet} $isDesktop={isDesktop}>{/*영캠프 인스타그램*/}
                <S.FrameCard $isDesktop={isDesktop}>
                  <S.InstaBg $isDesktop={isDesktop}>
                    <S.InstaIcon $isDesktop={isDesktop}></S.InstaIcon>
                  </S.InstaBg>
                  <S.FrameBox $isDesktop={isDesktop}>
                    <S.FrameText $isDesktop={isDesktop}>
                      Youngcamp Instagram
                    </S.FrameText>
                    <S.FrameImg $isDesktop={isDesktop}>
                      <S.ArrowImg2
                        $isDesktop={isDesktop}
                        src=".\src\assets\images\Home\Arrow_B.png"
                      />
                    </S.FrameImg>
                  </S.FrameBox>
                </S.FrameCard>
              </S.SocialFrame>
              <S.SocialFrame $isTablet={isTablet} $isDesktop={isDesktop}>{/*동국대 인스타그램*/}
                <S.FrameCard $isDesktop={isDesktop}>
                  <S.InstaBg $isDesktop={isDesktop}>
                    <S.InstaIcon $isDesktop={isDesktop}></S.InstaIcon>
                  </S.InstaBg>
                  <S.FrameBox $isDesktop={isDesktop}>
                    <S.FrameText $isDesktop={isDesktop}>
                      Dongguk Univ Instagram
                    </S.FrameText>
                    <S.FrameImg $isDesktop={isDesktop}>
                      <S.ArrowImg2
                        $isDesktop={isDesktop}
                        src=".\src\assets\images\Home\Arrow_B.png"
                      />
                    </S.FrameImg>
                  </S.FrameBox>
                </S.FrameCard>
              </S.SocialFrame>
              <S.SocialFrame $isTablet={isTablet} $isDesktop={isDesktop}>{/*동국대 홈페이지*/}
                <S.FrameCard $isDesktop={isDesktop}>
                  <S.InstaBg $isDesktop={isDesktop}>
                    <S.WebIcon $isDesktop={isDesktop}></S.WebIcon>
                  </S.InstaBg>
                  <S.FrameBox $isDesktop={isDesktop}>
                    <S.FrameText $isDesktop={isDesktop}>
                      Dongguk Univ Website
                    </S.FrameText>
                    <S.FrameImg $isDesktop={isDesktop}>
                      <S.ArrowImg2
                        $isDesktop={isDesktop}
                        src=".\src\assets\images\Home\Arrow_B.png"
                      />
                    </S.FrameImg>
                  </S.FrameBox>
                </S.FrameCard>
              </S.SocialFrame>
            </Slider>
          </S.SocialSliderBox>
        </S.SocialBottom>
      </S.SocialContainer>
    </S.SocialSection>
  );
};

export default Social;
