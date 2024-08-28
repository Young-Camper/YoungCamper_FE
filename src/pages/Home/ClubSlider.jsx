import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./HomeStyle";
import Club1 from "../../assets/images/Home/club/card_동아리1.png"
import Club2 from "../../assets/images/Home/club/card_동아리2.png"
import Club3 from "../../assets/images/Home/club/card_동아리3.png"
import Club4 from "../../assets/images/Home/club/card_동아리4.png"
import Club5 from "../../assets/images/Home/club/card_동아리5.png"
import Club6 from "../../assets/images/Home/club/card_동아리6.png"
import Club7 from "../../assets/images/Home/club/card_동아리7.png"
import Club8 from "../../assets/images/Home/club/card_동아리8.png"
import Club9 from "../../assets/images/Home/club/card_동아리9.png"
import Club10 from "../../assets/images/Home/club/card_동아리10.png"
import Club11 from "../../assets/images/Home/club/card_동아리11.png"

import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 10px;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  .slick-slide {
    margin: 0 10px;
  }
  .slick-track {
    display: flex;
    margin-left: -10px;
    padding-right: 10px;
  }
  `;

  const ClubCardImg = styled.div`    
    display: flex;
    width: 350px;
    height: 276px;
    padding: 36px;
    flex-direction: column;
    margin-right: 10px;
    flex-shrink: 0;
    border-radius: 40px;
    background: linear-gradient(180deg, rgba(10, 11, 10, 0.00) 0%,
    rgba(10, 11, 10, 0.48) 100%), url(${props => props.bgImage}) lightgray 50% / cover no-repeat;
    object-fit: cover;
    display: flex;
    justify-content: flex-end;
    position: relative;
  `;

  const CardNameTag = styled.div`
    width: 95px; max-width: 95px;
    height: 40px;
    display: flex;
    padding: 8px 18px;
    border-radius: var(--XXL, 100px);
    border: 1px solid var(--Base-Base-White, #FAFAFA);

    color: var(--new-main-white, #FAFAFA);
    text-align: center;

    /* Primary/Desktop/Body3 */
    font-family: MonRegular;
    font-size: 13px; /*16px*/
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.04px;
    position: absolute;
    bottom: 70px;
    left: 36px;
  `

  const CardName = styled.div`
    z-index: 1;
    width: 278px;
    height: auto;
    color: var(--Base-Base-White, #FAFAFA);
    /* Primary/Desktop/Hero2_regular */
    font-family: MonRegular;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 126.316% */
    letter-spacing: -1.9px;
    position: absolute;
    bottom: 20px;
    left: 36px;
  `;

const ClubImages = [
    {id: 1, imageurl: Club1, tag: "경영대학", name: "동아리이름"},
    {id: 2, imageurl: Club2, tag: "경영대학", name: "동아리이름"},
    {id: 3, imageurl: Club3, tag: "경영대학", name: "동아리이름"},
    {id: 4, imageurl: Club4, tag: "경영대학", name: "동아리이름"},
    {id: 5, imageurl: Club5, tag: "경영대학", name: "동아리이름"},
    {id: 6, imageurl: Club6, tag: "경영대학", name: "동아리이름"},
    {id: 7, imageurl: Club7, tag: "경영대학", name: "동아리이름"},
    {id: 8, imageurl: Club8, tag: "경영대학", name: "동아리이름"},
    {id: 9, imageurl: Club9, tag: "경영대학", name: "동아리이름"},
    {id: 10, imageurl: Club10, tag: "경영대학", name: "동아리이름"}, 
    {id: 11, imageurl: Club11, tag: "경영대학", name: "동아리이름"}, 
]

function ClubSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };


    return (
        <SliderContainer>
            <Slider {...settings}>

                {ClubImages.map((image) => (
                    <ClubCardImg key={image.id} bgImage = {image.imageurl} >
                        <CardNameTag>{image.tag}</CardNameTag>
                        <CardName>{image.name}</CardName>
                    </ClubCardImg>

                ))}
                
            </Slider>
        </SliderContainer>
    );
}

export default ClubSlider;
