//ClubSlider

import Club1 from "../assets/images/Home/club/card_경찰사법대.png";
import Club2 from "../assets/images/Home/club/card_공과대학.png";
import Club3 from "../assets/images/Home/club/card_문과대학.png";
import Club4 from "../assets/images/Home/club/card_미래융합대학.png";
import Club5 from "../assets/images/Home/club/card_법과대학.png";
import Club6 from "../assets/images/Home/club/card_사범대학.png";
import Club7 from "../assets/images/Home/club/card_사회과학대학.png";
import Club8 from "../assets/images/Home/club/card_약학대학.png";
import Club9 from "../assets/images/Home/club/card_예술대학.png";
import Club10 from "../assets/images/Home/club/card_이과대학.png";
import Club11 from "../assets/images/Home/club/card_불교학생회.png";

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
    /* margin-left: ${(props)=> (props.$isDesktop ? "-10px" : "0px")};
    padding-right: ${(props)=> (props.$isDesktop ? "10px" : "0px")}; */
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
  width: auto;
  height: ${(props)=> (props.$isDesktop ? "40px" : "auto")}; /*tablet 19.48387px*/
  padding: ${(props)=> (props.$isDesktop ? "8px 18px" : "3.742px 8.419px")};
  border-radius: ${(props)=> (props.$isDesktop ? "100px" : "46.774px")};
  border: ${(props)=> (props.$isDesktop ? "1px solid #FAFAFA" : "0.468px solid #FAFAFA")};
  display: flex;
  color: var(--new-main-white, #FAFAFA);
  text-align: center;

  /* Primary/Desktop/Body3 */
  font-family: MonARegular; /*MonRegular*/
  font-size: ${(props)=> (props.$isDesktop ? "16px" : "7.484px")}; 
  line-height: ${(props)=> (props.$isDesktop ? "24px" : "11.226px")};
  letter-spacing: ${(props)=> (props.$isDesktop ? "-0.16px" : "-0.019px")}; /*-0.04px*/
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
    font-size: ${(props)=> (props.$isDesktop ? "28px" : props.$isTablet ? "17.774px" : "15px")};
    width: 100%; height: auto;
    line-height: ${(props)=> (props.$isDesktop ? "36px" : "22.452px")}; /*48px*/
    letter-spacing: ${(props)=> (props.$isDesktop ? "-1.4px" : "-0.889px")}; /*-1.9px*/
  `;

export const ClubImages = [
    {id: 1, imageurl: Club1, tag: "경찰사법대", name: "캠폴스테이"},
    {id: 2, imageurl: Club2, tag: "공과대학", name: "공양미 300석"},
    {id: 3, imageurl: Club3, tag: "문과대학", name: "나를 찾아가는 여행"},
    {id: 4, imageurl: Club4, tag: "미래융합대학", name: "퓨처핸접"},
    {id: 5, imageurl: Club5, tag: "법과대학", name: "불법단체"},
    {id: 6, imageurl: Club6, tag: "사범대학", name: "불사대"},
    {id: 7, imageurl: Club7, tag: "사회과학대학", name: "템플애플"},
    {id: 8, imageurl: Club8, tag: "약학대학", name: "약사여래"},
    {id: 9, imageurl: Club9, tag: "예술대학", name: "진선미"},
    {id: 10, imageurl: Club10, tag: "이과대학", name: "자연과함께"}, 
    {id: 11, imageurl: Club11, tag: "불교학생회", name: "동불"}, 
]