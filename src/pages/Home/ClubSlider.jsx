import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "../../data/clubdata";
import useMediaQueries from "../../hooks/useMediaQueries";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ClubSlider() {
  const { isDesktop, isTablet } = useMediaQueries();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef(null); // Slider 참조

  useEffect(() => {
    // 브라우저 저장소(로컬 스트리지)에 마지막 슬라이드 저장
    const savedSlide = localStorage.getItem('lastSlide');
    if (savedSlide && sliderRef.current) {
      sliderRef.current.slickGoTo(parseInt(savedSlide, 10)); // 슬라이더를 저장된 인덱스로 이동
    }
  }, []);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 1700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    draggable: false, // 드래그 비활성화
    swipe: false, // 터치 스와이프 비활성화
    touchMove: false, // 터치 이동 비활성화
    afterChange: (current) => {
      // 슬라이드 변경 시 로컬 스토리지에 인덱스 저장
      localStorage.setItem('lastSlide', current);
      setCurrentSlide(current);
      console.log('index',current);
    },
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
      <Slider ref={sliderRef} {...settings}>
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
