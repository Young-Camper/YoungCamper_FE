import { React, useEffect, useState } from "react";
import * as S from "./HomeStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQueries from "../../hooks/useMediaQueries";
import socialData from "../../data/social.jsx";
import { useTranslation } from "react-i18next";

const mediaUrl = import.meta.env.VITE_MEDIA_URL;

const Social = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const { t } = useTranslation();

  const getSlidesToShow = () => {
    if (window.matchMedia("(min-width: 0) and (max-width: 399px)").matches) {
      return 1.2;
    } else if (
      window.matchMedia("(min-width: 400px) and (max-width: 490px)").matches
    ) {
      return 2;
    } else if (
      window.matchMedia("(min-width: 491px) and (max-width: 1000px)").matches
    ) {
      return 3;
    } else {
      return 2.2;
    }
  };

  const slidesToShow = getSlidesToShow();
  const slidesToScroll = slidesToShow;

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <S.PrevArrow
      {...props} // currentSlide를 DOM 요소에 전달하지 않음
      aria-disabled={currentSlide === 0 ? true : false}
    />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <S.NextArrow
      {...props} // slideCount를 DOM 요소에 전달하지 않음
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    />
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 3000,
    slidesToShow: slidesToScroll,

    arrows: true,
    prevArrow: (
      <SlickArrowLeft $isDesktop={isDesktop}>
    
      </SlickArrowLeft>
    ),
    nextArrow: (
      <SlickArrowRight $isDesktop={isDesktop}>
      
      </SlickArrowRight>
    ),
  };

  return (
    <S.SocialSection $isTablet={isTablet} $isDesktop={isDesktop}>
      <S.SocialContainer $isDesktop={isDesktop}>
        <S.SocialTop $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.SocialTitle $isTablet={isTablet} $isDesktop={isDesktop}>
            {t("home.follow")}
          </S.SocialTitle>
        </S.SocialTop>
        <S.SocialBottom $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.SocialSliderBox $isDesktop={isDesktop}>
            <Slider {...settings}>
              {socialData.map((social, index) => (
                <S.SocialFrame
                  key={social.id}
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  $BgImage={social.bgimage}
                >
                  <S.FrameCard $isDesktop={isDesktop}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer">
                    <S.FrameBox $isDesktop={isDesktop}>
                      {/* {console.log('social.image matches:', social.image)} */}
                      {social.image === `${mediaUrl}Home/WebIcon.png` ? (
                        <S.WebImg
                          $isDesktop={isDesktop}
                          $IconImage={social.image}
                        />
                      ) : (
                        <S.IconImg
                          $isDesktop={isDesktop}
                          $IconImage={social.image}
                        />
                      )}
                      <S.FrameText $isDesktop={isDesktop}>
                        {social.name}
                      </S.FrameText>
                      <S.FrameImg
                        $isDesktop={isDesktop}
                      >
                        <S.ArrowImg4 $isDesktop={isDesktop} />
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
