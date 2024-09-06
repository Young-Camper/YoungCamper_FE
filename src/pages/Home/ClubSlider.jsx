import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "../../data/clubdata";
import useMediaQueries from "../../hooks/useMediaQueries";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ClubSlider() {
  const { isDesktop, isTablet } = useMediaQueries();
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    draggable: false, // 드래그 비활성화
    swipe: false, // 터치 스와이프 비활성화
    touchMove: false, // 터치 이동 비활성화
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.4, // 1280px 이하
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3.2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "ko" ? 0 : 1;

  return (
    <S.SliderContainer $isDesktop={isDesktop}>
      <Slider {...settings}>
        {S.ClubImages.map((image) => (
          <Link to={image.link ? image.link : ""} key={image.id}>
            <S.ClubCardImg
              $isDesktop={isDesktop}
              $isTablet={isTablet}
              key={image.id}
              $bgImage={image.imageurl}
            >
              <S.CardNameTag $isDesktop={isDesktop} $isTablet={isTablet}>
                {image.tag[currentLang]}
              </S.CardNameTag>
              <S.CardName $isDesktop={isDesktop} $isTablet={isTablet}>
                {image.name}
              </S.CardName>
            </S.ClubCardImg>
          </Link>
        ))}
      </Slider>
    </S.SliderContainer>
  );
}

export default ClubSlider;
