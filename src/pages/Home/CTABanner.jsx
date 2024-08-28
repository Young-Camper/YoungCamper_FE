import React, { useState }  from 'react'
import * as S from "./HomeStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const CTABanner = () => {

  const [isHoveringCTA, setIsHoveringCTA] = useState(false);

  const handleMouseOver10 = () => {
    setIsHoveringCTA(true);
  };
  const handleMouseOut10 = () => {
    setIsHoveringCTA(false);
  };

  return (
    <S.CTASection>
      <S.SectionBanner>
        <S.GridSliderBox>
          <Slider {...settings}>
            <S.GridText>·  Youngcamp Festival ·  Youngcamp Festival  ·  Youngcamp Festival ·  Youngcamp Festival
            ·  Youngcamp Festival ·  Youngcamp Festival  ·  Youngcamp Festival ·  Youngcamp Festival
            </S.GridText>
          </Slider>  
        </S.GridSliderBox>
      </S.SectionBanner>
      
      <S.GridBox>
        <S.VectorImg src = ".\src\assets\images\Home\Vector.png" />
        <S.GridTitle>JOIN WITH US !</S.GridTitle>
        <S.GridBtnFrame>
        <Link to={"/promotion"}>
          <S.GridBtn ishoveringCTA={isHoveringCTA}
              onMouseOver={handleMouseOver10}
              onMouseOut={handleMouseOut10}>
            <S.GridBtnText ishoveringCTA={isHoveringCTA}>영캠프 참가하기</S.GridBtnText>
          </S.GridBtn>
        </Link>
        </S.GridBtnFrame>
      </S.GridBox>
    </S.CTASection>
  )
}

export default CTABanner
