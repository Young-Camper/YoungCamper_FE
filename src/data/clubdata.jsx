//ClubSlider

import styled from "styled-components";
const mediaUrl = import.meta.env.VITE_MEDIA_URL;

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
  rgba(10, 11, 10, 0.48) 100%), url(${props => props.$bgImage}) lightgray 50% / cover no-repeat;
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
    font-size: ${(props)=> (props.$isDesktop ? "28px" : props.$isTablet ? "17.774px" : "15px")};
    width: 100%; height: auto;
    line-height: ${(props)=> (props.$isDesktop ? "36px" : props.$isTablet ? "22.452px" : "20px")}; 
    letter-spacing: ${(props)=> (props.$isDesktop ? "-1.4px" : props.$isTablet ? "-0.889px" : "-0.7px")};
  `;

export const ClubImages = [
    {id: 1, imageurl: `${mediaUrl}Home/Club/clubEmpty.png`, tag: "경영대학", name: "다붓다붓", link: "./promotion/1"},
    {id: 2, imageurl: `${mediaUrl}Home/Club/club2.png`, tag: "경찰사법대", name: "캠폴스테이", link: "./promotion/2"},
    {id: 3, imageurl: `${mediaUrl}Home/Club/club3.png`, tag: "공과대학", name: "공양미 300석", link: "./promotion/3"},
    {id: 4, imageurl: `${mediaUrl}Home/Club/club4.png`, tag: "문과대학", name: "나를 찾아가는 여행", link: "./promotion/4"},
    {id: 5, imageurl: `${mediaUrl}Home/Club/club5.png`, tag: "미래융합대학", name: "퓨처핸접", link: "./promotion/5"},
    {id: 6, imageurl: `${mediaUrl}Home/Club/clubEmpty.png`, tag: "바이오시스템대학", name: "야단법석", link: "./promotion/6"},
    {id: 7, imageurl: `${mediaUrl}Home/Club/club7.png`, tag: "법과대학", name: "불법단체", link: "./promotion/7"},
    {id: 8, imageurl: `${mediaUrl}Home/Club/clubEmpty.png`, tag: "불교대학", name: "가람수호", link: "./promotion/8"},
    {id: 9, imageurl: `${mediaUrl}Home/Club/club9.png`, tag: "사범대학", name: "불사대", link: "./promotion/9"},
    {id: 10, imageurl: `${mediaUrl}Home/Club/club10.png`, tag: "사회과학대학", name: "템플애플", link: "./promotion/10"},
    {id: 11, imageurl: `${mediaUrl}Home/Club/club11.png`, tag: "약학대학", name: "약사여래", link: "./promotion/11"},
    {id: 12, imageurl: `${mediaUrl}Home/Club/club12.png`, tag: "예술대학", name: "진선미", link: "./promotion/12"},
    {id: 13, imageurl: `${mediaUrl}Home/Club/club13.png`, tag: "이과대학", name: "자연과함께", link: "./promotion/13"}, 
    {id: 14, imageurl: `${mediaUrl}Home/Club/clubEmpty.png`, tag: "AI융합대학", name: "부따이", link: "./promotion/14"}, 
    {id: 15, imageurl: `${mediaUrl}Home/Club/clubEmpty.png`, tag: "일반대학원", name: "동국청년불자회", link: "./promotion/15"}, 
    {id: 16, imageurl: `${mediaUrl}Home/Club/club16.png`, tag: "불교학생회", name: "동불", link: "./promotion/16"}, 
]