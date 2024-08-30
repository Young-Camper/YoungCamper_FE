import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "../../data/clubdata";
import useMediaQueries from "../../hooks/useMediaQueries";

function ClubSlider() {

    const { isDesktop, isTablet } = useMediaQueries();
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: isDesktop ? 3.1 : isTablet ? 4.1 : 2,
    };

    return (
        <S.SliderContainer $isDesktop={isDesktop}>
            <Slider {...settings}>
                {S.ClubImages.map((image) => (
                    <S.ClubCardImg $isDesktop={isDesktop} key={image.id} bgImage = {image.imageurl} >
                        <S.CardNameTag $isDesktop={isDesktop}>{image.tag}</S.CardNameTag>
                        <S.CardName $isDesktop={isDesktop}>{image.name}</S.CardName>
                    </S.ClubCardImg>

                ))}
                
            </Slider>
        </S.SliderContainer>
    );
}

export default ClubSlider;
