//ClubSlider

const mediaUrl = import.meta.env.VITE_MEDIA_URL;

/*const Club2 = `${mediaUrl}Home/club2.png`
const Club3 = `${mediaUrl}Home/club3.png`
const Club4 = `${mediaUrl}Home/club4.png`
const Club5 = `${mediaUrl}Home/club5.png`
const Club7 = `${mediaUrl}Home/club7.png`
const Club9 = `${mediaUrl}Home/club9.png`
const Club10 = `${mediaUrl}Home/club10.png`
const Club11 = `${mediaUrl}Home/club11.png`
const Club12 = `${mediaUrl}Home/club12.png`
const Club13 = `${mediaUrl}Home/club13.png`
const Club16 = `${mediaUrl}Home/club16.png` */
import styled from "styled-components";

/* import Club2 from "../assets/images/Promotion/club2.png"; */
import Club3 from "../assets/images/Promotion/club3.png";
import Club4 from "../assets/images/Promotion/club4.png";
import Club5 from "../assets/images/Promotion/club5.png";
import Club7 from "../assets/images/Promotion/club7.png";
import Club9 from "../assets/images/Promotion/club9.png";
import Club10 from "../assets/images/Promotion/club10.png";
import Club11 from "../assets/images/Promotion/club11.png";
import Club12 from "../assets/images/Promotion/club12.png";
import Club13 from "../assets/images/Promotion/club13.png";
import Club16 from "../assets/images/Promotion/club16.png";


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
    padding-left: ${(props)=> (props.$isDesktop ? "-10px" : "0px")};
    padding-right: ${(props)=> (props.$isDesktop ? "10px" : "0px")};
  }
  `;

export const ClubCardImg = styled.div`    
  width: ${(props)=> (props.$isDesktop ? "350px" : props.$isTablet ? "240px" : "163.71px")};
  height: ${(props)=> (props.$isDesktop ? "276px" : props.$isTablet ? "190px" : "129.097px")};
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
  width: auto; height: auto;
  padding: ${(props)=> (props.$isDesktop ? "8px 18px" : "3.742px 8.419px")};
  border-radius: ${(props)=> (props.$isDesktop ? "100px" : "46.774px")};
  border: ${(props)=> (props.$isDesktop ? "1px solid #FAFAFA" : "0.468px solid #FAFAFA")};
  display: flex;
  color: var(--new-main-white, #FAFAFA);
  text-align: center;

  font-family: MonARegular; 
  font-size: ${(props)=> (props.$isDesktop ? "16px" : props.$isTablet ? "12px" : "7.484px")}; 
  line-height: ${(props)=> (props.$isDesktop ? "24px" : props.$isTablet ? "18px" : "11.226px")};
  letter-spacing: ${(props)=> (props.$isDesktop ? "-0.16px" : props.$isTablet ? "-0.12px" : "-0.075px")}; 
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
    font-size: ${(props)=> (props.$isDesktop ? "28px" : props.$isTablet ? "17.774px" : "17.774px")};
    width: 100%; height: auto;
    line-height: ${(props)=> (props.$isDesktop ? "36px" : props.$isTablet ? "22.452px" : "22.452px")}; 
    letter-spacing: ${(props)=> (props.$isDesktop ? "-1.4px" : props.$isTablet ? "-0.889px" : "-0.889px")};
  `;

export const ClubImages = [
    {id: 1, tag: "경영대학", name: "다붓다붓"},
    {id: 2, imageurl: `${mediaUrl}Home/club2.png`, tag: "경찰사법대", name: "캠폴스테이"},
    {id: 3, imageurl: Club3, tag: "공과대학", name: "공양미 300석"},
    {id: 4, imageurl: Club4, tag: "문과대학", name: "나를 찾아가는 여행"},
    {id: 5, imageurl: Club5, tag: "미래융합대학", name: "퓨처핸접"},
    {id: 6, tag: "바이오시스템대학", name: "야단법석"},
    {id: 7, imageurl: Club7, tag: "법과대학", name: "불법단체"},
    {id: 8, tag: "불교대학", name: "가람수호"},
    {id: 9, imageurl: Club9, tag: "사범대학", name: "불사대"},
    {id: 10, imageurl: Club10, tag: "사회과학대학", name: "템플애플"},
    {id: 11, imageurl: Club11, tag: "약학대학", name: "약사여래"},
    {id: 12, imageurl: Club12, tag: "예술대학", name: "진선미"},
    {id: 13, imageurl: Club13, tag: "이과대학", name: "자연과함께"}, 
    {id: 14, tag: "AI융합대학", name: "부따이"}, 
    {id: 15, tag: "일반대학원", name: "동국청년불자회"}, 
    {id: 16, imageurl: Club16, tag: "불교학생회", name: "동불"}, 
]