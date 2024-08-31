import React from "react";
import * as S from "./HomeStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQueries from "../../hooks/useMediaQueries";
import social from "../../data/social";

const mediaUrl = import.meta.env.VITE_MEDIA_URL;

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
             {social.map((social, index) => (
                <S.SocialFrame $isTablet={isTablet} $isDesktop={isDesktop}>
                  <S.FrameCard $isDesktop={isDesktop}>
                    <S.InstaBg $isDesktop={isDesktop} >
                      <S.InstaIcon
                        maskImage={social.image}
                      >  </S.InstaIcon> {/*이미지파일*/}
                    </S.InstaBg>
                    <S.FrameBox $isDesktop={isDesktop}>
                      <S.FrameText $isDesktop={isDesktop}>{social.name}</S.FrameText>
                      <S.FrameImg 
                        $isDesktop={isDesktop}
                        href={social.link} target="_blank" rel="noopener noreferrer">
                          <S.ArrowImg2
                          $isDesktop={isDesktop}
                          src={`${mediaUrl}Home/Arrow_B.png`} />
                          
                      </S.FrameImg>
                    </S.FrameBox>
                  </S.FrameCard>
                </S.SocialFrame>
              ))}

            </Slider>
          </S.SocialSliderBox>
        </S.SocialBottom>
      </S.SocialContainer>
    </S.SocialSection>
  );
};

export default Social;