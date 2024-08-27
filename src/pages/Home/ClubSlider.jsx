import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./HomeStyle";
import Club1 from "../../assets/images/club/card_동아리1.png"
import Club2 from "../../assets/images/club/card_동아리2.png"
import Club3 from "../../assets/images/club/card_동아리3.png"
import Club4 from "../../assets/images/club/card_동아리4.png"
import Club5 from "../../assets/images/club/card_동아리5.png"
import Club6 from "../../assets/images/club/card_동아리6.png"
import Club7 from "../../assets/images/club/card_동아리7.png"
import Club8 from "../../assets/images/club/card_동아리8.png"
import Club9 from "../../assets/images/club/card_동아리9.png"
import Club10 from "../../assets/images/club/card_동아리10.png"
import Club11 from "../../assets/images/club/card_동아리11.png"

import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ClubImages = [
    {id: 1, imageurl: Club1},
    {id: 2, imageurl: Club2},
    {id: 3, imageurl: Club3},
    {id: 4, imageurl: Club4},  
    {id: 5, imageurl: Club5},  
    {id: 6, imageurl: Club6},  
    {id: 7, imageurl: Club7},  
    {id: 8, imageurl: Club8},  
    {id: 9, imageurl: Club9},  
    {id: 10, imageurl: Club10},  
    {id: 11, imageurl: Club11},  
]

function ClubSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };



    return (
        <SliderContainer>
            <Slider {...settings}>

                {ClubImages.map((image) => (
                    <S.ClubCardImg key={image.id} bgImage = {image.imageurl}/>  
                ))}
                
            </Slider>
        </SliderContainer>
    );
}

export default ClubSlider;
