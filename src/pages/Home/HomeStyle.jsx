import styled from "styled-components";
import dawn from '../../assets/images/Home/Dawn.png';
import dawn_B from '../../assets/images/Home/Dawn_B.png';
import arrow from '../../assets/images/Home/Arrow.png';
import arrow_B from '../../assets/images/Home/Arrow_B.png';
import ellipse_B from '../../assets/images/Home/Ellipse_B.png';
import instashape from '../../assets/images/Home/Instashape.png';
import webicon from '../../assets/images/Home/Webicon.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//1.HomeTitle
export const TitleSection = styled.div`
  width: 100%;
  height: 941px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  background: var(--gradient, linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%));
`;

export const TitleMainSet = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  padding: 36px var(--Spacing-0, 0px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: -12px;
`;

export const TitleListSet = styled.div`
  width: 100%;
  height: 432px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 144px;
  display: flex;
  min-width: 680px;
  padding: var(--Spacing-0, 0px) 256px;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;

export const TextBox = styled.div`
  width: 928px;
  height: 144px;
  display: flex;
  align-items: center;
  gap: 36px;
  flex: 1 0 0;
`;

export const Line = styled.div`
  width: 100%;
  height: var(--Spacing-0, 2px);
  border: 2px solid #FAFAFA;
`;


export const TitleImg = styled.img`
  width: 90px;
  height: 90px;
  stroke-width: 1px;
`;

export const TitleText = styled.div`
  width: auto; max-width: 753px;
  height: 171px;
  color: var(--new-main-white, #FAFAFA);
  text-align: center;
  font-family: "MonAExtraBold";
  font-size: 140px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2.8px;
`;

export const Rectangle = styled.div`
  width: 201px;
  height: 122px;
  display: flex;
  align-items: flex-end;
  border-radius: var(--XXL, 100px);
  margin-left: 91.5px;
  background: var(--new-main-white, #FAFAFA);
`;

export const TitleList = styled.div`
  width: 100%;
  height: 114px;
  display: flex;
  padding: 12px 256px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  position: relative;

  &:hover {
    background: #FAFAFA;
  }
`;
export const TitleFrameImg = styled.div`
  width: 90px;
  height: 90px;
  background-image: ${(props)=>
    props.ishoveringPlace ? `url(${dawn_B})` : 
    props.ishoveringDate ? `url(${dawn_B})` : 
    props.ishoveringWith ? `url(${dawn_B})` : `url(${dawn})`};
  background-size: cover;
`;

export const TitleFrameText = styled.div`
  width: auto; /*max-width: 490px;*/
  height: auto; max-height: 59px;
  color: ${(props)=>
    props.ishoveringPlace ? "black" : 
    props.ishoveringDate ? "black" : 
    props.ishoveringWith ? "black" : "white"};
  text-align: center;
  /* Primary/Desktop/Hero1_regular */
  font-family: MonRegular;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -2.4px;
`;

export const TitleFrameBox = styled.div`
  width: auto; //max-width: 616px;
  height: auto; max-height: 90px;
  display: flex;
  align-items: center;
  gap: 36px;
`;

export const ArrowImgBox = styled.div`
  width: 65.0894px;
  height: 90px;
  display: flex;
  padding: var(--Spacing-0, 0px) var(--sds-size-space-600);
  justify-content: right;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

export const ArrowImg = styled.div`
  width: 49.205px;
  height: 42.845px;
  flex-shrink: 0;
  background-image: ${(props)=>
    props.ishoveringPlace ? `url(${arrow_B})` :
    props.ishoveringDate ? `url(${arrow_B})` : 
    props.ishoveringWith ? `url(${arrow_B})` :`url(${arrow})`};
  background-repeat: no-repeat;
`;

//2. Video
export const VideoSection = styled.div`
  width: 100%;
  height: 1024px;
  display: flex;
  padding-top: 83px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--Base-Real-White, #FFF);
`;

export const VideoSectionBox = styled.div`
  width: 100%;
  height: 941px;
  display: flex;
  padding: var(--Spacing-0, 0px) 144px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
`;

export const VideoBox =styled.div`
  width: 812px;
  height: 459px;
  display: flex;
  padding: var(--sds-size-space-600) 36px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1 0 0;
  gap: 17.998px;
  background: var(--new-main-black, #0A0B0A);
`;

export const VideoIFrame = styled.video`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

export const VideoFrame = styled.div`
  width: 740px;
  height: 45.6px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 24px;
  gap: 10px;
  align-self: center;
  box-shadow: 0px 84px 24px 0px rgba(0, 0, 0, 0.00), 
  0px 54px 22px 0px rgba(0, 0, 0, 0.02), 0px 30px 18px 0px rgba(0, 0, 0, 0.06), 
  0px 14px 14px 0px rgba(0, 0, 0, 0.10), 0px 3px 7px 0px rgba(0, 0, 0, 0.12);
`;

export const VideoFrameText = styled.div`
  width:auto; /*max-height: 200px;*/
  height: 34px;
  color: var(--new-main-white, #FAFAFA);
  text-align: center;
  /* Primary/Desktop/H2_regular */
  font-family: MonRegular;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.68px;
`;

export const VideoFrameImg = styled.img`
  width: 34.45px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardSecionBox = styled.div`
  width: 1152px;
  height: 482px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px;
  gap: var(--sds-size-space-600);
`;

export const CardText1 = styled.div`
  width: 1152px;
  height: 98px;
  color: #000;
  text-align: center;
  font-family: "MonAExtraBold";
  font-size: 80px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDetailBox = styled.div`
  width: 1152px;
  height: 482px;
  display: flex;
  padding: 48px;
  justify-content: center;  
`;

export const CardText2 = styled.div`
  width: 566px;
  height: 216px;
  align-self: center;
  color: var(--Secondary-Secondary1000, #323F49);
  font-family: MonRegular;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -1.68px;
  white-space: pre-line;
  text-align: center;
`;

//3.ClubInfo
export const ClubInfoSection = styled.div`
  width: 100%;
  height: 882px;
  align-items: center;
  background: var(--gradient_2, linear-gradient(104deg, 
  rgba(185, 255, 156, 0.20) 0%, rgba(0, 104, 255, 0.20) 100%));
  padding: var(--XXL, 100px) var(--Spacing-0, 0px);
  justify-content: center;
  `;

export const ClubInfoBox = styled.div`
  width: 100%;
  height: 682px;
  display: flex;
  padding: var(--Spacing-0, 0px) 144px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ClubTitleBox = styled.div`
  width: 1100px;
  height: 144px;
  display: flex;
  padding: 48px;
  align-items: center;
  align-self: center;
`;

export const ClubTitle = styled.div`
  width: auto; /*456px;*/
  height: 46px;
  align-self: stretch;
  color: var(--new-main-black, #0A0B0A);
  /* Primary/Desktop/Hero2 */
  font-family: MonExtraBold;
  font-size: 38px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -1.52px;
`;

export const GalleryBox = styled.div`
  width: 1152px;
  height: 372px;
  display: flex;
  padding: 48px var(--Spacing-0, 0px);
  align-items: center;
  align-content: center;
  gap: 0px var(--Spacing-0, 0px);
`;

export const Gallery = styled.div`
  width: 1152px;
  height: 276px;
  overflow: hidden;
`;

export const ClubFrameBox = styled.div`
  width: 1152px;
  height: 166px;
  display: flex;
  padding: 48px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const ClubBtnBox = styled.div`
  width: 1104px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  padding: var(--Spacing-20, 20px) var(--sds-size-space-600);
  flex-direction: column;
  border-radius: 100px;
  border: 1px solid #000;
  background: var(--Base-Real-White, #FFF);
  border: ${(props)=> (props.ishoveringClub ? 'none' : '1px solid black')};

  &:hover {
    background: var(--gradient, linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%));
  }
`
export const ClubBtnText = styled.div`
  color: ${(props)=> (props.ishoveringClub ? "white" : "black")};
  text-align: center;

  /* Primary/Desktop/Body2_regular */
  font-family: MonRegular;
  font-size: ${(props)=> (props.ishoveringClub ? "23px" : "20px")};
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.1px;
  transition: 0.3s ease;
`;

//4.Notice
export const NoticeSection = styled.div`
  display: flex;
  width: 100%;
  height: 942px;
  padding: var(--XXL, 100px) 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const NoticeContent = styled.div`
  width: 100%;
  height: 742px;
  display: flex;
  padding: 0px 144px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoticeTitleSet = styled.div`
  width: 1100px;
  height: 166px;
  display: flex;
  padding: var(--Spacing-l, 48px);
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--new-main-grey, #637D92);
  opacity: var(--sds-size-stroke-border);
  display: flex;
  flex-direction: row;
`;

export const NoticeTitleText = styled.div`
  width: auto; //456px
  height: 46px;
  align-self: center;
  color: var(--new-main-black, #0A0B0A);
  /* Primary/Desktop/Hero2 */
  font-family: MonSemiBold;
  font-size: 38px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -1.52px;
  gap: 24px;
`;

export const NoticeBtnBox = styled.div`
  width: 145px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const NoticeBtn = styled.div`
  display: flex;
  padding: var(--Spacing-20, 20px) 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--XXL, 100px);
  border: 1px solid #000;
  color: ${(props)=> (props.ishoveringNotice5 ? "white" : "black")};
  border: ${(props)=> (props.ishoveringNotice5 ? 'none' : '1px solid black')};
  text-align: center;
  transition: all 0.3s ease-out;

  &:hover {
    background: var(--gradient, linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%));
  }

  /* Primary/Desktop/Body2_regular */
  font-family: MonRegular;  
  font-size: 18px; /*20px*/
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.1px;
`;

export const NoticeListSet = styled.div`
  width: 1100px;
  height: 756px;
  display: flex;
  padding: var(--Spacing-l, 48px);
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const NoticeListFrame = styled.div`
  width: 1004px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

export const NoticeList = styled.div`
  width: 1004px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid var(--new-main-grey, #637D92);
  background: ${(props)=> 
    props.ishoveringNotice1 ? 'linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%)' : 
    props.ishoveringNotice2 ? 'linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%)' : 
    props.ishoveringNotice3 ? 'linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%)' : 
    props.ishoveringNotice4 ? 'linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%)' : 'white'};

`;

export const NoticeItemBox = styled.div`
  width: 941px;
  height: 93px;
  display: flex;
  padding: 12px var(--Spacing-20, 20px) 12px 16px;
  justify-content: left;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
`;

export const NoticeTag =styled.div`
  width: 66px;
  height: 40px;
  display: flex;
  padding: 8px 0px; //18px
  justify-content: center;
  align-items: center;
  border-radius: var(--XXL, 100px);
  border: 1px solid;

  text-align: center;
  /* Primary/Desktop/Body3 */
  font-family: MonRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.04px;
  margin-right: 28px;

  color: ${(props)=> 
    props.ishoveringNotice1 ? "#FAFAFA" : 
    props.ishoveringNotice2 ? "#FAFAFA" : 
    props.ishoveringNotice3 ? "#FAFAFA" : 
    props.ishoveringNotice4 ? "#FAFAFA" : "#0068FF"};
  border-color: ${(props)=> 
    props.ishoveringNotice1 ? "#FAFAFA" : 
    props.ishoveringNotice2 ? "#FAFAFA" : 
    props.ishoveringNotice3 ? "#FAFAFA" : 
    props.ishoveringNotice4 ? "#FAFAFA" : "#0068FF"};
`;

export const NoticeText = styled.div`
  width: 787px;
  height: 35px;
  color: ${(props)=> 
    props.ishoveringNotice1 ? "white" : 
    props.ishoveringNotice2 ? "white" : 
    props.ishoveringNotice3 ? "white" : 
    props.ishoveringNotice4 ? "white" : "black"};
  /* Primary/Desktop/H2_regular */
  font-family: MonRegular;
  font-size: 25px; //28px
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.68px;

`;

export const ArrowImg2 = styled.div`
  width: 34.45px;
  height: 30px;
  display: flex;
  text-align: right;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props)=>
    props.ishoveringNotice1 ? `url(${arrow})` :
    props.ishoveringNotice2 ? `url(${arrow})` :
    props.ishoveringNotice3 ? `url(${arrow})` :
    props.ishoveringNotice4 ? `url(${arrow})` : `url(${arrow_B})`};
`;

export const ArrowImg2Box = styled.div`
  width: 63px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

//5.Social
export const SocialSection = styled.div`
  width: 100%;
  height: 820px;
  display: flex;
  padding: var(--XXL, 100px) 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const SocialContainer = styled.div`
  width: 100%;
  height: 620px;
  display: flex;
  padding: 0px 144px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const SocialTop = styled.div`
  width: 1100px;
  height: 144px;
  display: flex;
  padding: var(--Spacing-l, 48px);
  align-items: center;
  border-top: 1px solid var(--new-main-grey, #637D92);
`;

export const SocialTitle = styled.div`
  width: auto; //422px;
  height: 46px;
  align-self: stretch;
  color: var(--new-main-black, #0A0B0A);
  /* Primary/Desktop/Hero2 */
  font-family: MonRegular;
  font-size: 38px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -1.52px;
`;

export const SocialBottom = styled.div`
  width: 1152px;
  height: 476px;
  display: flex;
  padding: var(--Spacing-l, 48px);
  align-items: flex-start;
`

export const SocialFrame = styled.div`
  width: 479px;
  height: 380px;
  display: flex;
  padding: 24px;
  flex-shrink: 0;
  border-radius: 40px;
  opacity: var(--sds-size-stroke-border);
  background: var(--Base-Base-White, #FAFAFA);
  margin: 0px 10px;
  position: relative;
  box-sizing: border-box;

  &:hover {
    border: 2px solid var(--new-main-primary, #0068FF);
    background: linear-gradient(102deg, rgba(0, 104, 255, 0.40) 23.99%, rgba(185, 255, 156, 0.40) 98.08%);
  }
`;

export const SocialSliderBox = styled.div`
  width: 100%;
  height: 100%;
   .slick-slide {
    margin: 0 10px;
  }
   .slick-track {
    display: flex;
    align-items: flex-start;
  }
`;

export const FrameCard = styled.div`
  width: 431px;
  height: 148px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
  position: absolute;
  bottom: 24px;
  box-sizing: border-box; /* 패딩을 포함한 전체 너비 조정 */
`;

export const InstaBg = styled.div`
  width: var(--size-medium, 40px);
  height: var(--size-medium, 40px);
  flex-shrink: 0;
  background: url(${ellipse_B});
  display: flex;
  justify-content: center;
  align-items: center
`;
export const InstaIcon = styled.div`
  width: 28px;
  height: 26px;
  opacity: var(--sds-size-stroke-border);
  background: var(--Secondary-Secondary100, #E7EBEF);
  mask-image: url(${instashape});
  mask-repeat: no-repeat;
  mask-size: 100%;
`;

export const WebIcon = styled.div`
  width: 28px;
  height: 26px;
  opacity: var(--sds-size-stroke-border);
  background: var(--Secondary-Secondary100, #E7EBEF);
  mask-image: url(${webicon});
  mask-repeat: no-repeat;
  mask-size: 100%;
`;

export const FrameBox = styled.div`
  width: 431px;
  height: 92px;
  display: flex;
  justify-content: space-between;
  padding-right: 24px;
  align-items: flex-end;
`;

export const FrameText = styled.div`
  width: auto; max-width: 260px;
  height: 92px;
  color: var(--Base-Base-Black, #0A0B0A);
  /* Primary/Desktop/Hero2_regular */
  font-family: MonRegular;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.9px;
`;

export const FrameImg = styled.div`
  width: 45.6px;
  height: 49px;
  display: flex;
  height: 49px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;


//6.CTA 배너
export const CTASection = styled.div`
  width: 100%;
  height: 521px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionBanner = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  background: var(--new-main-white, #FAFAFA);
  overflow: hidden;
  padding-bottom: 16px;
`;

export const GridSliderBox= styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row; 
  align-items: center;
  position: relative;

  .slick-track {
    display: flex;
  }
`;

export const GridText = styled.div`
  width: auto;
  height: 18px;
  color: var(--new-main-black, #0A0B0A);
  /* Primary/Mobile/Button2 */
  font-family: MonRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.14px;
  padding: 100%;
  display: inline-flex;
  align-items: center;
  white-space: nowrap; 
  padding-right: 100%;
  animation: scroll 20s linear infinite; /* 스크롤 애니메이션 적용 */
  
  @keyframes scroll {
    from {transform: translateX(0);}
    to {transform: translateX(-100%);}
  }
`;

export const GridBox = styled.div`
  width: 100%;
  height: 471px;
  display: flex;
  padding: 96px var(--Spacing-0, 0px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  background: var(--gradient, linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%));
`;

export const GridTitle = styled.div`
  width: 100%;
  height: 98px;
  color: var(--new-main-white, #FAFAFA);
  text-align: center;
  font-family: "MonAExtraBold";
  font-size: 80px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  text-shadow: 
        2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, 
        0 2px 0 black, 2px 0 0 black, -2px 0 0 black; /* 다중 그림자를 사용하여 테두리 효과 */
`;

export const VectorImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const GridBtnFrame = styled.div`
  width: 222px;
  height: 67px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GridBtn = styled.div`
  width: 203px;
  height: 67px;
  display: flex;
  padding: 20px 28px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--XXL, 100px);
  border: 1px solid #000; /*var(--sds-size-stroke-border)*/
  background: var(--Base-Real-White, #FFF);

  &:hover {
    background: var(--gradient, linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%));
    border: 1px solid white;
  }
`;

export const GridBtnText = styled.div`
  width: 147px;
  height: 27px;
  color: var(--new-main-black, #0A0B0A);
  text-align: center;

  /* Primary/Desktop/Body1_regular */
  font-family: MonRegular;
  font-size: 20px; /*22px*/
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.11px;

  color: ${(props)=> props.ishoveringCTA ? `white` : `black`};

`;

