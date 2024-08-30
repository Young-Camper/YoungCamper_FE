//ClubSlider

import Club1 from "../assets/images/Home/club/card_동아리1.png";
import Club2 from "../assets/images/Home/club/card_동아리2.png";
import Club3 from "../assets/images/Home/club/card_동아리3.png";
import Club4 from "../assets/images/Home/club/card_동아리4.png";
import Club5 from "../assets/images/Home/club/card_동아리5.png";
import Club6 from "../assets/images/Home/club/card_동아리6.png";
import Club7 from "../assets/images/Home/club/card_동아리7.png";
import Club8 from "../assets/images/Home/club/card_동아리8.png";
import Club9 from "../assets/images/Home/club/card_동아리9.png";
import Club10 from "../assets/images/Home/club/card_동아리10.png";
import Club11 from "../assets/images/Home/club/card_동아리11.png";

import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 10px;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  .slick-slide {
    margin: ${(props)=> (props.$isDesktop ? "0px 10px" : "0px 4.68px")};
  }
  .slick-track {
    display: flex;
    margin-left: ${(props)=> (props.$isDesktop ? "-10px" : "0px")};
    padding-right: ${(props)=> (props.$isDesktop ? "10px" : "0px")};
  }
  `;

export const ClubCardImg = styled.div`    
  width: ${(props)=> (props.$isDesktop ? "350px" : "163.71px")};
  height: ${(props)=> (props.$isDesktop ? "276px" : "129.097px")};
  padding: ${(props)=> (props.$isDesktop ? "36px" : "16.839px")};
  border-radius: ${(props)=> (props.$isDesktop ? "40px" : "18.71px")};
  margin-right: ${(props)=> (props.$isDesktop ? "10px" : "0px")};
  gap: ${(props)=> (props.$isDesktop ? "10px" : "4.677px")};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(10, 11, 10, 0.00) 0%,
  rgba(10, 11, 10, 0.48) 100%), url(${props => props.bgImage}) lightgray 50% / cover no-repeat;
  object-fit: cover;
  display: flex;
  justify-content: flex-end;
  position: relative;
  `;

export const CardNameTag = styled.div`
  width: ${(props)=> (props.$isDesktop ? "95px" : "auto")}; /*tablet 44.83871px*/
  height: ${(props)=> (props.$isDesktop ? "40px" : "auto")}; /*tablet 19.48387px*/
  padding: ${(props)=> (props.$isDesktop ? "8px 18px" : "3.742px 8.419px")};
  border-radius: ${(props)=> (props.$isDesktop ? "100px" : "46.774px")};
  border: ${(props)=> (props.$isDesktop ? "1px solid #FAFAFA" : "0.468px solid #FAFAFA")};
  display: flex;
  color: var(--new-main-white, #FAFAFA);
  text-align: center;

  /* Primary/Desktop/Body3 */
  font-family: MonRegular;
  font-size: ${(props)=> (props.$isDesktop ? "13px" : "7.484px")}; /*desktop 16px*/
  line-height: ${(props)=> (props.$isDesktop ? "24px" : "11.226px")};
  letter-spacing: ${(props)=> (props.$isDesktop ? "-0.04px" : "-0.019px")};
  bottom: ${(props)=> (props.$isDesktop ? "70px" : "44.52px")};
  left: ${(props)=> (props.$isDesktop ? "36px" : "16.84px")};
  font-style: normal;
  font-weight: 400;
  position: absolute;
`

export const CardName = styled.div`
    z-index: 1;
    color: var(--Base-Base-White, #FAFAFA);
    /* Primary/Desktop/Hero2_regular */
    font-family: MonRegular;
    font-style: normal;
    font-weight: 400;
    position: absolute;
    bottom: ${(props)=> (props.$isDesktop ? "20px" : "16.84px")};
    left: ${(props)=> (props.$isDesktop ? "36px" : "16.84px")};
    font-size: ${(props)=> (props.$isDesktop ? "38px" : "17.774px")};
    width: ${(props)=> (props.$isDesktop ? "278px" : "130px")};
    height: ${(props)=> (props.$isDesktop ? "auto" : "23px")};
    line-height: ${(props)=> (props.$isDesktop ? "48px" : "22.452px")};
    letter-spacing: ${(props)=> (props.$isDesktop ? "-1.9px" : "-0.889px")};
  `;

export const ClubImages = [
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