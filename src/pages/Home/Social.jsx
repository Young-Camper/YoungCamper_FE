import {React, useEffect, useState} from "react";
import * as S from "./HomeStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQueries from "../../hooks/useMediaQueries";
import socialData from "../../data/social.jsx";

const mediaUrl = import.meta.env.VITE_MEDIA_URL;

const Social = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  const getSlidesToShow = () => {
    if (window.matchMedia("(min-width: 0) and (max-width: 399px)").matches) {
      return 1.2; 
    } else if (window.matchMedia("(min-width: 400px) and (max-width: 1000px)").matches) {
      return 3; 
    } else (window.matchMedia("(min-width: 1001px)").matches) 
      return 2.2; 

  };
  
  const slidesToShow = getSlidesToShow();
  const slidesToScroll = slidesToShow; 


  const settings = {
    dots: true,
    infinite: false,
    speed: 3000,
    slidesToShow: slidesToScroll,
    
    arrows: true,
    prevArrow: <S.PrevArrow $isDesktop={isDesktop}><S.SocialBtn/></S.PrevArrow>,
    nextArrow: <S.NextArrow $isDesktop={isDesktop}><S.SocialBtn/></S.NextArrow>,
  };



  /* const result = selectedNode.style.removeProperty(width); */

  return (
    
    <S.SocialSection $isTablet={isTablet} $isDesktop={isDesktop}>
      <S.SocialContainer $isDesktop={isDesktop}>
        <S.SocialTop $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.SocialTitle $isTablet={isTablet} $isDesktop={isDesktop}>
            최근 소식을 팔로우해보세요
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
                  <S.FrameCard $isDesktop={isDesktop}>
                    <S.FrameBox $isDesktop={isDesktop}>
                      <S.IconImg
                        $isDesktop={isDesktop}
                        $IconImage={social.image}
                      />
                      <S.FrameText $isDesktop={isDesktop}>
                        {social.name}
                      </S.FrameText>
                      <S.FrameImg
                        $isDesktop={isDesktop}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
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
