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
  height: ${(props) => props.$isDesktop ? "941px" : props.$isTablet ? "972px" : "812px"};
  padding: ${(props) => props.$isDesktop ? "0px" : props.$isTablet ? "96px" : "64px"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  background: var(--gradient, linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%));
`;

export const TitleSpaceSet = styled.div`
@media only screen and (max-width: 1023px){
  width: ${(props) => props.$isTablet ? "768px" : "360px"};
  height: ${(props) => props.$isTablet ? "501px" : "391px"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}`;

export const SpaceBoxTop = styled.div`
@media only screen and (max-width: 1023px){
  width: ${(props) => props.$isTablet ? "768px" : "360px"};
  height: ${(props) => props.$isTablet ? "105px" : "83px"};
  padding: ${(props) => props.$isTablet ? "16px 96px" : "0px 24px"};
  border-bottom: ${(props) => props.$isTablet ? "5px solid #FAFAFA" : "2px solid #FAFAFA"};
  display: flex;
  align-items: center;
  align-self: stretch;
}`;

export const SpaceBoxBottom = styled(SpaceBoxTop)`
  border-top: ${(props) => props.$isTablet ? "5px solid #FAFAFA" : 
    props.$isMobile ? "2px solid #FAFAFA" : ""};
  border-bottom: 0;
  margin-bottom: -36px;
`;

export const SpaceImgBox = styled.div`
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    width: 576px;
    height: 73px;
    display: flex;
    padding-left: 12px;
    align-items: flex-start;
    gap: var(--Spacing-20, 20px);
    flex: 1 0 0;
    align-self: stretch;
  }
`
export const SpacePortal = styled.img`
  width: ${(props) => props.$isTablet ? "55px" : props.$isMobile ? "55px" : "0px"};
  height: ${(props) => props.$isTablet ? "55px" : props.$isMobile ? "55px" : "0px"};
`;

export const TitleMainSet = styled.div`
  width: 100vw;
  height: ${(props) => props.$isDesktop ? "480px" : props.$isTablet ? "501px" : "225px"};
  padding: ${(props) => props.$isDesktop ? "36px" : "0px"};
  justify-content: ${(props) => props.$isDesktop ? "center" : "flex-start"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: ${(props) => props.$isDesktop ? "144px" : props.$isTablet ? "105px" : "83px"};
  padding: ${(props) => props.$isDesktop ? "0px 256px" : props.$isTablet ? "0px 96px" : "0px"};
  gap: ${(props) => props.$isDesktop ? "36px" : "0px"};
  align-items: ${(props) => props.$isDesktop ? "" : "flex-start" };
  justify-content: ${(props) => props.$isDesktop ? "" : "flex-start" };
  display: flex;
  margin-bottom: -12px;
`;

export const TextBox = styled.div`
  width: ${(props) => props.$isDesktop ? "928px" : props.$isTablet ? "576px" : "360px"};
  height: ${(props) => props.$isDesktop ? "144px" : props.$isTablet ? "105px" : "83px"};
  padding: ${(props) => props.$isMobile ? "0px 12px" : "0px"};
  gap: ${(props) => props.$isDesktop ? "36px" : "20px"};
  display: flex;
  align-items: center;
  flex: 1 0 0;  
`;

export const TitleImg = styled.img`
  width: ${(props) => props.$isDesktop ? "90px" : "45px"};
  height: ${(props) => props.$isDesktop ? "90px" : "45px"};
`;

export const TitleText = styled.div`
  max-width: ${(props) => props.$isDesktop ? "753px" : props.$isTablet ? "484px" : "377px"};
  height: ${(props) => props.$isDesktop ? "171px" : props.$isTablet ? "110px" : "85px"};
  font-size: ${(props) => props.$isDesktop ? "140px" : props.$isTablet ? "90px" : "60px"}; /*mobile 70px*/
  letter-spacing: ${(props) => props.$isDesktop ? "2.8px" : props.$isTablet ? "1.8px" : "1.4px"};
  color: var(--new-main-white, #FAFAFA);
  text-align: center;
  font-family: "MonAExtraBold";
  font-style: normal;
  font-weight: 800;
  line-height: normal;
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

export const TitleListSet = styled.div`
  width: 100vw;
  height: ${(props) => props.$isDesktop ? "432px" : props.$isTablet ? "315px" : "249px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleList = styled.div`
  width: 100%;
  height: ${(props) => props.$isDesktop ? "144px" : props.$isTablet ? "105px" : "59px"};
  padding: ${(props) => props.$isDesktop ? "12px 256px" : props.$isTablet ? "12px 96px" : "12px 16.72px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  position: relative;
  border-top: 2px solid var(--new-main-white, #FAFAFA);

  &:hover {
    background: #FAFAFA;
  }
`;

export const TitleLine = styled.div`
  width: 100%;
  border: 1px solid var(--new-main-white, #FAFAFA);
`
export const TitleFrameImg = styled.div`
  width: ${(props) => props.$isDesktop ? "90px" : "45px"};
  height: ${(props) => props.$isDesktop ? "90px" : "45px"};
  background-image: ${(props)=>
    props.ishoveringPlace ? `url(${dawn_B})` : 
    props.ishoveringDate ? `url(${dawn_B})` : 
    props.ishoveringWith ? `url(${dawn_B})` : `url(${dawn})`};
  background-size: cover;
`;

export const TitleFrameText = styled.div`
  width: auto;
  height: auto;
  color: ${(props)=>
    props.ishoveringPlace ? "black" : 
    props.ishoveringDate ? "black" : 
    props.ishoveringWith ? "black" : "white"};
  text-align: center;
  font-family: MonRegular;
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.$isDesktop ? "48px" : props.$isTablet ? "32px" : "20px"}; /*mobile 24px*/
  line-height: ${(props) => props.$isDesktop ? "normal" : props.$isTablet ? "38px" : "32px"};
  letter-spacing: ${(props) => props.$isDesktop ? "-2.4px" : props.$isTablet ? "-1.6px" : "-1.2px"};
`;

export const TitleFrameBox = styled.div`
  width: auto; //max-width: 616px;
  height: auto; max-height: 90px;
  display: flex;
  align-items: center;
  gap: ${(props) => props.$isDesktop ? "36px" : "12px"};
`;

export const ArrowImgBox = styled.div`
  width: ${(props) => props.$isDesktop ? "65.0894px" : "45.6px"};
  height: ${(props) => props.$isDesktop ? "90px" : props.$isTablet ? "81px" : "59px"};
  display: flex;
  padding: var(--Spacing-0, 0px) var(--sds-size-space-600);
  justify-content: right;
  align-items: center;
  gap: 10px;
`;

export const ArrowImg = styled.div`
  width: ${(props) => props.$isDesktop ? "49.205px" : "34.453px"};
  height: ${(props) => props.$isDesktop ? "42.845px" : "30px"};
  flex-shrink: 0;
  background-image: ${(props)=>
    props.ishoveringPlace ? `url(${arrow_B})` :
    props.ishoveringDate ? `url(${arrow_B})` : 
    props.ishoveringWith ? `url(${arrow_B})` :`url(${arrow})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

//2. Video
export const VideoSection = styled.div`
  width: 100%;
  height: ${(props) => props.$isMobile ? "812px" : "1024px"};
  padding: ${(props) => props.$isDesktop ? "83px 144px" : "50px 0px"};
  gap: ${(props) => props.$isTablet ? "96px" : "0px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--Base-Real-White, #FFF);
`;

export const VideoSectionBox = styled.div`
  width: 100%;
  height: ${(props) => props.$isTablet ? "486px" : props.$isMobile ? "316px" : "100%"};
  padding: ${(props) => props.$isDesktop ? "0px" : "48px 0px"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
`;

export const VideoBox =styled.div`
  width: ${(props) => props.$isDesktop ? "812px" : "100vw"};
  height: ${(props) => props.$isDesktop ? "459px" : props.$isTablet ? "390px" : "220px"};
  gap: ${(props) => props.$isDesktop ? "17.998px" : "10px"};
  /* margin: 24px 0px;
  padding: 0px 36px; */
  padding: ${(props) => props.$isDesktop ? "24px 36px" : "0px 0px"};
  justify-content: ${(props) => props.$isTablet ? "flex-end" : "center"};
  align-items: ${(props) => props.$isTablet ? "flex-end" : "center"};
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1 0 0;
  background: var(--new-main-black, #0A0B0A);
`;

export const VideoIFrame = styled.video`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
`;

export const VideoFrame = styled.div`
  width: ${(props) => props.$isDesktop ? "740px" : "264px"};
  height: ${(props) => props.$isDesktop ? "45.6px" : "23px"};
  gap: ${(props) => props.$isDesktop ? "10px" : "0px"};
  bottom: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  box-shadow: 0px 84px 24px 0px rgba(0, 0, 0, 0.00), 
  0px 54px 22px 0px rgba(0, 0, 0, 0.02), 0px 30px 18px 0px rgba(0, 0, 0, 0.06), 
  0px 14px 14px 0px rgba(0, 0, 0, 0.10), 0px 3px 7px 0px rgba(0, 0, 0, 0.12);
`;

export const VideoFrameText = styled.div`
  width: ${(props) => props.$isDesktop ? "auto" : "auto"}; /*desk:200px - 107px*/
  height: ${(props) => props.$isDesktop ? "36px" : "auto"}; /*spacing/20*/
  font-size: ${(props) => props.$isDesktop ? "28px" : props.$isTablet ? "14px" :"10px"}; /*mobile:14px*/
  line-height: ${(props) => props.$isDesktop ? "normal" : "20px"};
  letter-spacing: ${(props) => props.$isDesktop ? "-1.68px" : "-0.07px"};
  color: var(--new-main-white, #FAFAFA);
  text-align: center;
  /* Primary/Desktop/H2_regular */
  font-family: MonRegular;
  font-style: normal;
  font-weight: 400;
`;

export const VideoFrameImg = styled.img`
  width: ${(props) => props.$isDesktop ? "34.45px" : "24px"};
  height: ${(props) => props.$isDesktop ? "30px" : "23px"};
  gap: ${(props) => props.$isMobile ? "10px" : ""};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardSecionBox = styled.div`
  width: ${(props) => props.$isDesktop ? "1152px" : "100%"};
  height: ${(props) => props.$isDesktop ? "482px" : props.$isTablet ? "302px" : "279px"};
  padding: ${(props) => props.$isTablet ? "48px 96px" : "48px 0px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const CardText1 = styled.div`
  width: ${(props) => props.$isDesktop ? "1152px" : props.$isTablet ? "768px" : "360px"};
  height: ${(props) => props.$isDesktop ? "98px" : props.$isTablet ? "51px" : "102px"};
  font-size: ${(props) => props.$isDesktop ? "80px" : "42px"};
  letter-spacing: ${(props) => props.$isDesktop ? "1.6px" : "0.84px"};
  color: #000;
  text-align: center;
  font-family: "MonAExtraBold";
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDetailBox = styled.div`
  width: ${(props) => props.$isDesktop ? "1152px" : props.$isTablet ? "768px" : "360px"};
  height: ${(props) => props.$isDesktop ? "264px" : props.$isTablet ? "auto" : "auto"}; /*tablet: 60px mobile: 80px*/
  padding: ${(props) => props.$isDesktop ? "24px 48px" : "0px 48px"};
  display: flex;
  justify-content: center; 
`;

export const CardText2 = styled.div`
  width: ${(props) => props.$isDesktop ? "566px" : props.$isTablet ? "480px" : "264px"};
  height: ${(props) => props.$isDesktop ? "216px" : props.$isTablet ? "auto" : "auto"}; /*tablet: 60px mobile: 80px*/
  font-size: ${(props) => props.$isDesktop ? "28px" : props.$isTablet ? "14px" : "10px"}; /*mobile: 14px*/
  line-height: ${(props) => props.$isDesktop ? "36px" : "20px"};
  letter-spacing: ${(props) => props.$isDesktop ? "-1.68px" : "-0.07px"};
  align-self: center;
  color: var(--Secondary-Secondary1000, #323F49);
  font-family: MonRegular;
  font-style: normal;
  font-weight: 400;
  white-space: pre-line;
  text-align: center;
`;

//3.ClubInfo
export const ClubInfoSection = styled.div`
  width: 100%;
  height: ${(props) => props.$isDesktop ? "882px" : props.$isTablet ? "490px" : "598px"};
  padding: ${(props) => props.$isDesktop ? "100px 0px" : props.$isTablet ? "50px 12px" : "50px 24px"};
  align-items: center;
  background: var(--gradient_2, linear-gradient(104deg, 
  rgba(185, 255, 156, 0.20) 0%, rgba(0, 104, 255, 0.20) 100%));
  justify-content: center;
  `;

export const ClubInfoBox = styled.div`
  width: 100%;
  height: ${(props) => props.$isDesktop ? "682px" : "auto"};
  display: flex;
  padding: ${(props) => props.$isDesktop ? "var(--Spacing-0, 0px) 144px" : "0px"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ClubTitleBox = styled.div`
  width: ${(props) => props.$isDesktop ? "1100px" : props.$isTablet ? "720px" : "336px"};
  height: ${(props) => props.$isDesktop ? "144px" : "72px"};
  padding: ${(props) => props.$isDesktop ? "48px" : "24px"};
  display: flex;
  align-items: center;
  align-self: center;
`;

export const ClubTitle = styled.div`
  align-self: stretch;
  color: var(--new-main-black, #0A0B0A);
  font-style: normal;
  width: ${(props) => props.$isDesktop ? "auto" : "auto"}; /*desktop 456px, width 256px*/
  height: ${(props) => props.$isDesktop ? "46px" : "24px"}; 
  font-family: ${(props) => props.$isDesktop ? "MonExtraBold" : "MonSemiBold"}; 
  font-size: ${(props) => props.$isDesktop ? "38px" : "20px"}; 
  font-weight: ${(props) => props.$isDesktop ? "800" : "600"}; 
  line-height: ${(props) => props.$isDesktop ? "48px" : "24px"}; 
  letter-spacing: ${(props) => props.$isDesktop ? "-1.52px" : "0.4px"};  

`;

export const GalleryBox = styled.div`
  width: ${(props) => props.$isDesktop ? "1152px" : props.$isTablet ? "720px" : "336px"};
  height: ${(props) => props.$isDesktop ? "372px" : props.$isTablet ? "225px" : "177px"};
  padding: ${(props) => props.$isTablet ? "24px 0px" : "48px 0px"};
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0px var(--Spacing-0, 0px);
`;

export const Gallery = styled.div`
  width: ${(props) => props.$isDesktop ? "1152px" : props.$isTablet ? "720px" : "336px"};
  height: ${(props) => props.$isDesktop ? "276px" : "129px"};
  overflow: hidden;
`;

export const ClubFrameBox = styled.div`
  width: ${(props) => props.$isDesktop ? "1152px" : props.$isTablet ? "720px" : "336px"};
  height: ${(props) => props.$isDesktop ? "166px" : "141px"};
  padding: ${(props) => props.$isDesktop ? "48px" : "48px 24px"};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const ClubBtnBox = styled.div`
  width: ${(props) => props.$isDesktop ? "1104px" : props.$isTablet ? "672px" : "288px"};
  height: ${(props) => props.$isDesktop ? "70px" : "45px"};
  padding: ${(props) => props.$isDesktop ? "20px 24px" : "12px 16px"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
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
  line-height: ${(props)=> (props.$isDesktop ? "24px" : "18px")};
  letter-spacing: ${(props)=> (props.$isDesktop ? "-0.1px" : "-0.06px")};
  text-align: center;

  /* Primary/Desktop/Body2_regular */
  font-family: MonRegular;
  font-size: ${(props)=> {
    if(props.$isDesktop){
      return props.ishoveringClub ? "23px" : "20px";
    }else{
      return props.ishoveringClub ? "15px" : "12px";
    }
  }};
  font-style: normal;
  font-weight: 400;
  transition: 0.3s ease;
`;

//4.Notice
export const NoticeSection = styled.div`
  display: flex;
  width: 100%;
  height: ${(props)=> (props.$isDesktop ? "942px" : "673px")};
  padding: ${(props)=> (props.$isDesktop ? "100px 0px" : props.$isTablet ? "50px 24px" : "50px 12px")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const NoticeContent = styled.div`
  width: 100%;
  height: ${(props)=> (props.$isDesktop ? "742px" : "100%")};
  padding: ${(props)=> (props.$isDesktop ? "0px 144px" : "16px")};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const NoticeTitleSet = styled.div`
  width: ${(props)=> (props.$isDesktop ? "1100px" : props.$isTablet ? "720px" : "336px")};
  height: ${(props)=> (props.$isDesktop ? "166px" : "72px")};
  padding: ${(props)=> (props.$isDesktop ? "48px" : "24px")};
  display: flex;
  align-items: left;
  border-top: 1px solid var(--new-main-grey, #637D92);
  opacity: var(--sds-size-stroke-border);
  display: flex;
  flex-direction: ${(props)=> (props.$isDesktop ? "row" : "column")};
  justify-content: ${(props)=> (props.$isDesktop ? "space-between" : "")};
`;

export const NoticeTitleText = styled.div`
  width: ${(props)=> (props.$isDesktop ? "auto" : props.$isTablet ? "539px" : "256px")}; /*desktp 456px*/
  height: ${(props)=> (props.$isDesktop ? "46px" : "auto")}; /*tablet 24px*/
  font-size: ${(props)=> (props.$isDesktop ? "38px" : props.$isTablet ? "20px" : "18px")}; /*mobile 20px*/ 
  font-weight: ${(props)=> (props.$isDesktop ? "800" : "600")}; 
  line-height: ${(props)=> (props.$isDesktop ? "normal" : "24px")}; 
  letter-spacing: ${(props)=> (props.$isDesktop ? "-1.52px" : "0.4px")}; 
  align-self: left; /*center*/
  color: var(--new-main-black, #0A0B0A);
  /* Primary/Desktop/Hero2 */
  font-family: MonExtraBold;
  font-style: normal;
  gap: 24px;
`;

export const NoticeBtnBox = styled.div`
  width: ${(props)=> (props.$isDesktop ? "145px" : props.$isTablet ? "672px" : "288px")}; 
  height: ${(props)=> (props.$isDesktop ? "70px" : "45px")}; 
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const NoticeBtn = styled.div`
  display: flex;
  padding: ${(props)=> (props.$isDesktop ? "20px 24px" : "12px 16px")};
  margin: ${(props)=> (props.$isDesktop ? "0px" : "48px 24px")}; 
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  border-radius: var(--XXL, 100px);
  /* border: 1px solid #000; */
  color: ${(props)=> (props.ishoveringNotice5 ? "white" : "black")};
  border: ${(props)=> (props.ishoveringNotice5 ? 'none' : '1px solid black')};
  text-align: center;
  transition: all 0.3s ease-out;

  &:hover {
    background: var(--gradient, linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%));
  }

  /* Primary/Desktop/Body2_regular */
  font-family: MonRegular;  
  font-size: ${(props)=> (props.$isDesktop ? "17px" : "12px")}; /*desktop 20px*/
  line-height: ${(props)=> (props.$isDesktop ? "24px" : "18px")}; 
  letter-spacing: ${(props)=> (props.$isDesktop ? "-0.1px" : "-0.06px")}; 
  font-style: normal;
  font-weight: 400;
`;

export const NoticeListSet = styled.div`
  width: ${(props)=> (props.$isDesktop ? "1100px" : "100%")}; 
  height: ${(props)=> (props.$isDesktop ? "576px" : "100%")}; 
  padding: ${(props)=> (props.$isDesktop ? "48px" : "0px ")}; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const NoticeListFrame = styled.div`
  width: ${(props)=> (props.$isDesktop ? "1004px" : props.$isTablet ? "720px" : "336px ")}; 
  height: ${(props)=> (props.$isDesktop ? "480px" : props.$isTablet ? "360px" : "360px ")}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
`;

export const NoticeList = styled.div`
  width: ${(props)=> (props.$isDesktop ? "1004px" : props.$isTablet ? "720px" : "336px ")}; 
  height: ${(props)=> (props.$isDesktop ? "120px" : props.$isTablet ? "90px" : "90px ")}; 
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
  width: ${(props)=> (props.$isDesktop ? "941px" : props.$isTablet ? "674px" : "290px ")}; 
  width: ${(props)=> (props.$isDesktop ? "94px" : "82px")}; 
  display: flex;
  padding: 12px 20px 12px 16px;
  justify-content: left;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
`;

export const NoticeTag =styled.div`
  width: ${(props)=> (props.$isDesktop ? "66px" : "47px")}; 
  height: ${(props)=> (props.$isDesktop ? "40px" : "31px")}; 
  padding: ${(props)=> (props.$isDesktop ? "8px 0px" : "8px 0px")}; /*desktop 18px tablet 12px*/
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--XXL, 100px);
  border: 1px solid;

  text-align: center;
  /* Primary/Desktop/Body3 */
  font-family: ${(props)=> (props.$isDesktop ? "MonRegular" : "MonSemiBold")}; 
  font-size: ${(props)=> (props.$isDesktop ? "16px" : "12px")}; 
  font-weight: ${(props)=> (props.$isDesktop ? "400" : "600")}; 
  line-height: ${(props)=> (props.$isDesktop ? "24px" : "normal")}; 
  letter-spacing: ${(props)=> (props.$isDesktop ? "-0.04px" : "-0.06px")}; 
  margin-right: ${(props)=> (props.$isDesktop ? "28px" : "22px")}; 
  font-style: normal;

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
  width: ${(props)=> (props.$isDesktop ? "787px" : props.$isTablet ? "539px" : "155px")}; 
  height: ${(props)=> (props.$isDesktop ? "36px" : "24px")}; 
  color: ${(props)=> 
    props.ishoveringNotice1 ? "white" : 
    props.ishoveringNotice2 ? "white" : 
    props.ishoveringNotice3 ? "white" : 
    props.ishoveringNotice4 ? "white" : "black"};
  /* Primary/Desktop/H2_regular */
  font-family: MonRegular;
  font-size: ${(props)=> (props.$isDesktop ? "25px" : props.$isTablet ? "16px" : "14px")}; /*mobile 16px*/ 
  line-height: ${(props)=> (props.$isDesktop ? "normal" : "24px")}; 
  letter-spacing: ${(props)=> (props.$isDesktop ? "-1.68px" : "-0.04px")}; 
  font-style: normal;
  font-weight: 400;
`;

export const ArrowImg2 = styled.div`
  width: ${(props)=> (props.$isDesktop ? "34.45px" : "25.156px")}; 
  height: ${(props)=> (props.$isDesktop ? "30px" : "21.905px")}; 
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
  width: ${(props)=> (props.$isDesktop ? "63px" : "46px")}; 
  height: ${(props)=> (props.$isDesktop ? "49px" : "35.778px")}; 
  gap: ${(props)=> (props.$isDesktop ? "10px" : "7.302px")}; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

//5.Social
export const SocialSection = styled.div`
  width: 100%; 
  height: ${(props)=> (props.$isDesktop ? "820px" : props.$isTablet ? "576px" : "400px")}; 
  padding: ${(props)=> (props.$isDesktop ? "100px 0px" : "50px 12px")}; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const SocialContainer = styled.div`
  width: 100%;
  height: ${(props)=> (props.$isDesktop ? "620px" : "100%")}; 
  padding: ${(props)=> (props.$isDesktop ? "0px 144px" : "0px 12px")}; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const SocialTop = styled.div`
  width: ${(props)=> (props.$isDesktop ? "1100px" : props.$isTablet ? "744px" : "336px")}; 
  height: ${(props)=> (props.$isDesktop ? "144px" : "72px")}; 
  padding: ${(props)=> (props.$isDesktop ? "48px" : "24px")}; 
  display: flex;
  align-items: center;
  border-top: 1px solid var(--new-main-grey, #637D92);
`;

export const SocialTitle = styled.div`
  align-self: stretch;
  color: var(--new-main-black, #0A0B0A);
  /* Primary/Desktop/Hero2 */
  font-family: MonRegular;
  font-style: normal;
  width: ${(props)=> (props.$isDesktop ? "auto" : "auto")};  /*desktop 422px tablet 238px*/
  height: ${(props)=> (props.$isDesktop ? "46px" : "24px")};  
  font-size: ${(props)=> (props.$isDesktop ? "38px" : "20px")};  
  font-weight: ${(props)=> (props.$isDesktop ? "800" : "600")};  
  line-height: ${(props)=> (props.$isDesktop ? "normal" : "24px")};  
  letter-spacing: ${(props)=> (props.$isDesktop ? "-1.52px" : "0.4px")};  
`;

export const SocialBottom = styled.div`
  display: flex;
  align-items: flex-start;
  width: ${(props)=> (props.$isDesktop ? "1152px" : props.$isTablet ? "744px" : "336px")};
  height: ${(props)=> (props.$isDesktop ? "476px" : "228px")};
  padding: ${(props)=> (props.$isDesktop ? "48px" : "24px 0px")};
`

export const SocialFrame = styled.div`
  width: ${(props)=> (props.$isDesktop ? "479px" : "226.895px")};
  height: ${(props)=> (props.$isDesktop ? "380px" : "180px")};
  margin: ${(props)=> (props.$isDesktop ? "0px 10px" : "0px 4.737px")};
  padding: ${(props)=> (props.$isDesktop ? "24px" : "11.37px")};
  display: flex;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--Base-Base-White, #FAFAFA);
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
    margin: ${(props)=> (props.$isDesktop ? "0px 10px" : "0px 4.737px")};
  }
   .slick-track {
    display: flex;
    align-items: flex-start;
  }
`;

export const FrameCard = styled.div`
  width: ${(props)=> (props.$isDesktop ? "431px" : "226.895px")};
  height: ${(props)=> (props.$isDesktop ? "148px" : "70.6px")};
  gap: ${(props)=> (props.$isDesktop ? "12px" : "5.684px")};
  bottom: ${(props)=> (props.$isDesktop ? "24px" : "11.37px")};
  display: flex;
  flex-direction: column;
  align-self: stretch;
  position: absolute;
  box-sizing: border-box; /* 패딩을 포함한 전체 너비 조정 */
  padding-right: 0;
`;

export const InstaBg = styled.div`
  width: ${(props)=> (props.$isDesktop ? "40px" : "18.947px")};
  height: ${(props)=> (props.$isDesktop ? "40px" : "18.947px")};
  flex-shrink: 0;
  background: url(${ellipse_B}); 
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  
`;
export const InstaIcon = styled.div`
  width: ${(props)=> (props.$isDesktop ? "28px" : "13.263px")};
  height: ${(props)=> (props.$isDesktop ? "26px" : "12.316px")};
  opacity: var(--sds-size-stroke-border);
  background: var(--Secondary-Secondary100, #E7EBEF);
  mask-image: url(${instashape});
  mask-repeat: no-repeat;
  mask-size: 100%;
  mask-position: center;  
  position: absolute;
`;

export const WebIcon = styled.div`
  width: ${(props)=> (props.$isDesktop ? "28px" : "10.421px")};
  height: ${(props)=> (props.$isDesktop ? "26px" : "10.421px")};
  opacity: var(--sds-size-stroke-border);
  background: var(--Secondary-Secondary100, #E7EBEF);
  mask-image: url(${webicon});
  mask-repeat: no-repeat;
  mask-size: 100%;
`;

export const FrameBox = styled.div`
  width: ${(props)=> (props.$isDesktop ? "431px" : "204px")};
  height: ${(props)=> (props.$isDesktop ? "96px" : "70px")};
  padding-right: ${(props)=> (props.$isDesktop ? "24px" : "0px")}; /*11.37px*/
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FrameText = styled.div`
  width: ${(props)=> (props.$isDesktop ? "auto" : "122px")}; /*desktop 260px*/
  height: ${(props)=> (props.$isDesktop ? "96px" : "46px")};
  font-size: ${(props)=> (props.$isDesktop ? "38px" : "18px")};
  line-height: ${(props)=> (props.$isDesktop ? "48px" : "22.737px")};
  letter-spacing: ${(props)=> (props.$isDesktop ? "-1.9px" : "-0.9px")};
  color: var(--Base-Base-Black, #0A0B0A);
  /* Primary/Desktop/Hero2_regular */
  font-family: MonRegular;
  font-style: normal;
  font-weight: 400;
`;

export const FrameImg = styled.div`
  width: ${(props)=> (props.$isDesktop ? "45.6px" : "21.6px")};
  height: ${(props)=> (props.$isDesktop ? "49px" : "23.2px")};
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: ${(props)=> (props.$isDesktop ? "50px" : "42px")};
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
  font-style: normal;
  font-weight: 600;
  font-size: ${(props)=> (props.$isDesktop ? "14px" : "8px")};
  line-height: ${(props)=> (props.$isDesktop ? "18px" : "12px")};
  letter-spacing: ${(props)=> (props.$isDesktop ? "0.14px" : "-0.04px")};
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
  height: ${(props)=> (props.$isDesktop ? "474px" : props.$isTablet ? "438px" : "309px")};
  padding: ${(props)=> (props.$isDesktop ? "96px" : props.$isTablet ? "24px" : "96px 24px")};
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: var(--gradient, linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%));
`;

export const GridTitle = styled.div`
  width: ${(props)=> (props.$isDesktop ? "100%" : props.$isTablet ? "720px" : "312px")};
  height: ${(props)=> (props.$isDesktop ? "98px" : props.$isTablet ? "51px" : "102px")};
  font-size: ${(props)=> (props.$isDesktop ? "80px" : "42px")};
  letter-spacing: ${(props)=> (props.$isDesktop ? "1.6px" : "0.84px")};
  color: var(--new-main-white, #FAFAFA);
  text-align: center;
  font-family: "MonAExtraBold";
  font-style: normal;
  font-weight: 800;
  line-height: normal; 
  text-transform: uppercase;
  text-shadow: 
        2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, 
        0 2px 0 black, 2px 0 0 black, -2px 0 0 black;
`;

export const VectorImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const GridBtnFrame = styled.div`
  width: 222px; 
  height: ${(props)=> (props.$isDesktop ? "70px" : props.$isTablet ? "81px" : "45px")};
  padding-top: ${(props)=> (props.$isTablet ? "36px" : "")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GridBtn = styled.div`
  width: ${(props)=> (props.$isDesktop ? "203px" : "112px")};
  height: ${(props)=> (props.$isDesktop ? "70px" : "45px")};
  padding: ${(props)=> (props.$isDesktop ? "20px 28px" : "12px 16px")};
  display: flex;
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
  width: ${(props)=> (props.$isDesktop ? "147px" : "80px")};
  height: ${(props)=> (props.$isDesktop ? "27px" : "18px")};
  color: var(--new-main-black, #0A0B0A);
  text-align: center;

  /* Primary/Desktop/Body1_regular */
  font-family: MonRegular;
  font-size: ${(props)=> (props.$isDesktop ? "20px" : "10px")}; /*desktop 22px - 12*/
  line-height: ${(props)=> (props.$isDesktop ? "normal" : "18px")};
  letter-spacing: ${(props)=> (props.$isDesktop ? "-0.11px" : "-0.06px")};
  font-style: normal;
  font-weight: 400;

  color: ${(props)=> props.ishoveringCTA ? `white` : `black`};

`;

