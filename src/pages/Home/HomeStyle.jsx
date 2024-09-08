import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const mediaUrl = import.meta.env.VITE_MEDIA_URL;

const SliderObject = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

//1.HomeTitle
export const TitleSection = styled.div`
  width: 100%;
  height: ${(props) =>
    props.$isDesktop ? "800px" : props.$isTablet ? "972px" : "812px"};
  padding: ${(props) =>
    props.$isDesktop ? "0px" : props.$isTablet ? "96px 0px" : "64px 0px"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(black, black);
  animation-name: titleAct;
  animation-delay: 500ms;
  animation-duration: 1500ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  @keyframes titleAct {
    from {
      background: black;
      background-blend-mode: normal;
    }
    to {
      background: linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%);
      background-blend-mode: color-burn;
    }
  }
`;

export const SpaceBoxTop = styled.div`
  @media only screen and (max-width: 1023px) {
    width: 100vw;
    height: ${(props) => (props.$isTablet ? "105px" : "83px")};
    padding: ${(props) => (props.$isTablet ? "16px 96px" : "0px 24px")};
    border-bottom: ${(props) =>
      props.$isTablet ? "5px solid #FAFAFA" : "2px solid #FAFAFA"};
    display: flex;
    align-items: center;
    align-self: stretch;
  }
`;

export const SpaceBoxBottom = styled(SpaceBoxTop)`
  border-top: ${(props) =>
    props.$isTablet
      ? "5px solid #FAFAFA"
      : props.$isMobile
      ? "2px solid #FAFAFA"
      : ""};
  border-bottom: 0;
  margin-bottom: 0px;
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
`;
export const SpacePortal = styled.img`
  width: ${(props) =>
    props.$isTablet ? "55px" : props.$isMobile ? "55px" : "0px"};
  height: ${(props) =>
    props.$isTablet ? "55px" : props.$isMobile ? "55px" : "0px"};
`;

export const TitleMainSet = styled.div`
  width: 100vw;
  height: ${(props) =>
    props.$isDesktop ? "340px" : props.$isTablet ? "501px" : "225px"};
  margin: ${(props) => (props.$isDesktop ? "0px" : "0px")};
  justify-content: ${(props) => (props.$isDesktop ? "center" : "flex-start")};
  display: flex;
  flex-direction: column;
  align-self: stretch;
  position: relative;
`;
export const TitleDetailBox = styled.div`
  width: 100%;
  height: auto;
`;

export const TitleDetailSet = styled.div`
  @media only screen and (min-width: 1024px) and (max-width: 1199px) {
    width: 95%;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 80%;
  }
  width: 70%;
  height: 93px;
  transform: translate(50%);
  position: absolute;
  margin-top: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

export const TitleMiniText1 = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 36px;
  color: var(--Base-Real-White, #fff);
  text-align: right;
  font-family: MonRegular;
  font-size: var(--fontSize-28, 28px);
  font-style: normal;
  line-height: 36px;
  letter-spacing: -0.28px;
  display: flex;
  position: absolute;
  white-space: pre;
`;

export const TitleMiniText2 = styled(TitleMiniText1)`
  max-width: 145px;
  max-height: 36px;
  padding: 36px 21px 0px 0px;
`;

export const TitleMiniText3 = styled.div`
  width: auto;
  height: 100%;
  max-height: 36px;
  color: var(--Base-Real-White, #fff);
  text-align: center;
  font-family: MonRegular;
  font-size: var(--fontSize-28, 28px);
  font-style: normal;
  line-height: 36px;
  letter-spacing: -0.28px;
  display: flex;
  position: absolute;
  right: 0px;
  top: 21px;
`;

export const TitleMiniText4 = styled(TitleMiniText3)`
  max-width: 234px;
  max-height: 36px;
  top: 57px;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: ${(props) =>
    props.$isDesktop ? "120px" : props.$isTablet ? "105px" : "83px"};
  padding: ${(props) =>
    props.$isDesktop ? "0px" : props.$isTablet ? "0px 96px" : "0px"};
  gap: ${(props) =>
    props.$isDesktop ? "36px" : props.$isTablet ? "0px" : "-12px"};
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  display: flex;
  margin-bottom: -10px;
`;

export const TextBox = styled.div`
  width: ${(props) =>
    props.$isDesktop ? "100%" : props.$isTablet ? "576px" : "360px"};
  height: ${(props) =>
    props.$isDesktop ? "120px" : props.$isTablet ? "105px" : "83px"};
  padding: ${(props) => (props.$isMobile ? "0px 0px 0px 12px" : "0px")};
  gap: ${(props) => (props.$isDesktop ? "36px" : "20px")};
  display: ${(props) => (props.$isMobile ? "" : "flex")};
  align-items: center;
  justify-content: ${(props) => (props.$isDesktop ? "center" : "flex-start")};
  text-align: left;
  position: relative;
  flex: 1 0 0;
`;

export const TextBox2 = styled(TextBox)`
  justify-content: ${(props) => (props.$isTablet ? "" : "center")};
`;

export const TitlePortal = styled.div`
  width: ${(props) => (props.$isDesktop ? "90px" : "45px")};
  height: ${(props) => (props.$isDesktop ? "90px" : "45px")};
  background-image: ${(props) =>
    props.$ishoveringYoung
      ? `url(${mediaUrl}Home/Portal_B.png)`
      : props.$ishoveringFestival
      ? `url(${mediaUrl}Home/Portal_B.png)`
      : `url(${mediaUrl}Home/Portal.png)`};
  margin-left: ${(props) =>
    props.$ishoveringYoung
      ? "-650px" /*90+36+488+36*/
      : props.$ishoveringFestival
      ? "-807px" /*90+36+645+36*/
      : "0"};
  background-size: cover;
  transition: all 800ms ease-out;
`;

export const TitleDawn = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${mediaUrl}Home/Dawn_B.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  opacity: ${(props) => (props.$ishoveringCamp ? "1" : "0")};
  margin-left: ${(props) => (props.$ishoveringCamp ? "426px" : "0")};
  transition: all 800ms ease-out;
`;

export const TitleText = styled.div`
  max-width: ${(props) =>
    props.$isDesktop ? "645px" : props.$isTablet ? "484px" : "377px"};
  height: ${(props) =>
    props.$isDesktop ? "146px" : props.$isTablet ? "110px" : "85px"};
  font-size: ${(props) =>
    props.$isDesktop
      ? "120px"
      : props.$isTablet
      ? "90px"
      : "60px"}; /*mobile 70px*/
  letter-spacing: ${(props) =>
    props.$isDesktop ? "2.4px" : props.$isTablet ? "1.8px" : "1.4px"};
  color: var(--new-main-white, #fafafa);
  text-align: left;
  font-family: "MonAExtraBold";
  font-style: normal;
  line-height: normal;
  display: flex;C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\chrome-dev-profile
  justifty-content: flex-start;

  @media (min-width: 1024px) {
    margin-left: ${(props) =>
      props.$ishoveringFestival
        ? "-645px"
        : props.$ishoveringCamp
        ? "-126px"
        : props.$ishoveringYoung
        ? "-490.32px"
        : "0"};
  
  color: ${(props) =>
    props.$ishoveringYoung
      ? `#0A0B0A`
      : props.$ishoveringCamp
      ? `#0A0B0A`
      : props.$ishoveringFestival
      ? `#0A0B0A`
      : `#FAFAFA)`};
  }
  transition: all 800ms ease-out;
`;

export const Rectangle = styled.div`
  width: 201px;
  height: 122px;
  display: flex;
  align-items: flex-end;
  border-radius: var(--XXL, 100px);
  margin-left: 91.5px;
  background: var(--new-main-white, #fafafa);
`;

export const TitleListSet = styled.div`
  width: 100%;
  height: ${(props) =>
    props.$isDesktop ? "auto" : props.$isTablet ? "auto" : "249px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const TitleList = styled.div`
  width: 100%;
  height: ${(props) =>
    props.$isDesktop ? "130px" : props.$isTablet ? "80px" : "80px"};
  padding: ${(props) =>
    props.$isDesktop
      ? "12px 256px"
      : props.$isTablet
      ? "12px 96px"
      : "12px 16.72px"};
  @media only screen and (min-width: 1024px) and (max-width: 1300px) {
    padding: 12px 180px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  position: relative;
  transition: background 0.3s ease-out;
  background: ${(props) => {
    if (props.$ishoveringPlace) return "#FAFAFA";
    if (props.$ishoveringDate) return "#FAFAFA";
    return "";
  }};
  border-top: ${(props) => {
    if (props.$ishoveringPlace) return "none";
    if (props.$ishoveringDate) return "none";
    if (props.$ishoveringWith) return "none";
    return "2px solid #FAFAFA";
  }};
`;

export const TitleList2 = styled(TitleList)`
  background: ${(props) => (props.$ishoveringWith ? "#0A0B0A" : "#FAFAFA")};
`;

export const TitleLine = styled.div`
  width: 100%;
  border: 1px solid var(--new-main-white, #fafafa);
`;
export const TitleFrameImg = styled.div`
  width: ${(props) => (props.$isDesktop ? "65px" : "45px")};
  height: ${(props) => (props.$isDesktop ? "65px" : "45px")};
  background-image: ${(props) =>
    props.$ishoveringPlace
      ? `url(${mediaUrl}Home/Dawn_Blue.png)`
      : props.$ishoveringDate
      ? `url(${mediaUrl}Home/Dawn_Blue.png)`
      : `url(${mediaUrl}Home/Dawn.png)`};
  background-size: cover;
  transition: background-image 0.3s ease-out;
`;

export const TitleFrameImg2 = styled.div`
  width: ${(props) => (props.$isDesktop ? "65px" : "45px")};
  height: ${(props) => (props.$isDesktop ? "65px" : "45px")};
  background-image: url(${mediaUrl}Home/Dawn_Blue.png);
  background-size: cover;
  transition: background-image 0.3s ease-out;
`;

export const TitleFrameText = styled.div`
  width: auto;
  height: auto;
  color: ${(props) =>
    props.$ishoveringPlace
      ? "#0068FF"
      : props.$ishoveringDate
      ? "#0068FF"
      : "white"};
  transition: color 0.3s ease-out;
  text-align: center;
  font-family: MonRegular;
  font-style: normal;
  font-size: ${(props) =>
    props.$isDesktop ? "38px" : props.$isTablet ? "30px" : "21px"};
  line-height: ${(props) =>
    props.$isDesktop ? "48px" : props.$isTablet ? "38px" : "32px"};
  letter-spacing: ${(props) =>
    props.$isDesktop ? "-0.38px" : props.$isTablet ? "-1.6px" : "-1.2px"};
  white-space: pre;
  @media only screen and (min-width: 1024px) and (max-width: 1100px) {
    font-size: 35px;
  }
`;

export const TitleFrameText2 = styled(TitleFrameText)`
  color: ${(props) => (props.$ishoveringWith ? "white" : "#0068FF")};
`;

export const TitleFrameBox = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;
  gap: ${(props) => (props.$isDesktop ? "36px" : "12px")};
`;

export const ArrowImgBox = styled.div`
  width: ${(props) => (props.$isDesktop ? "65.0894px" : "45.6px")};
  height: ${(props) =>
    props.$isDesktop ? "106px" : props.$isTablet ? "81px" : "59px"};
  display: flex;
  padding: var(--Spacing-0, 0px) var(--sds-size-space-600);
  justify-content: right;
  align-items: center;
  gap: 10px;
`;

export const ArrowImg = styled.div`
  width: ${(props) => (props.$isDesktop ? "49.205px" : "34.453px")};
  height: ${(props) => (props.$isDesktop ? "42.845px" : "30px")};
  flex-shrink: 0;
  background-image: ${(props) =>
    props.$ishoveringPlace
      ? `url(${mediaUrl}Home/ArrowBlue.png)`
      : props.$ishoveringDate
      ? `url(${mediaUrl}Home/ArrowBlue.png)`
      : `url(${mediaUrl}Home/ArrowWhite.png)`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transition: background-image 0.3s ease-out;
`;

export const ArrowImg2 = styled(ArrowImg)`
  background-image: url(${mediaUrl}Home/ArrowBlue.png);
`;

//2.  Video
export const VideoSection = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.$isDesktop ? "83px 0px 0px 0px" : "50px 0px")};
  gap: ${(props) => (props.$isTablet ? "96px" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--Base-Real-White, #fff);
`;

export const VideoSectionBox = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.$isDesktop ? "0px 144px" : "48px 0px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
`;

export const VideoBox = styled.video`
  width: 100%;
  max-width: 100%; //자동 확대되는 것을 제한하기 위해 시도
  height: 100%;
  max-height: 100%;
  gap: ${(props) =>
    props.$isDesktop ? "17.998px" : props.$isTablet ? "0px" : "10px"};
  justify-content: flex-end;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  /* background: var(--new-main-black, #0a0b0a); */
  object-fit: contain;
`;

/* export const VideoIFrame = styled.video`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
`; */

export const VideoBtn = styled.div`
  position: absolute;
  margin-top: ${(props) =>
    props.$isDesktop
      ? "-116px"
      : props.$isTablet
      ? "-90px"
      : "-58px"}; /*48+68*/
  transform: translateX(-50%);
  width: auto;
  height: auto;
  padding: ${(props) =>
    props.$isDesktop
      ? "20px 28px"
      : props.$isTablet
      ? "12px 16px"
      : "8px 12px"};
  border-radius: 100px;
  opacity: var(--sds-size-stroke-border);
  background: var(
    --gradient,
    linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
  );

  color: var(--new-main-white, #fafafa);
  text-align: center;
  font-family: MonSemiBold;
  font-size: ${(props) =>
    props.$isDesktop ? "20px" : props.$isTablet ? "12px" : "9px"};
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "28px" : "18px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.2px" : "-0.12px")};
`;

export const CardSecionBox = styled.div`
  width: ${(props) => (props.$isDesktop ? "100%" : "100%")};
  height: ${(props) =>
    props.$isDesktop ? "auto" : props.$isTablet ? "302px" : "auto"};
  padding: ${(props) =>
    props.$isDesktop ? "48px 144px" : props.$isTablet ? "48px" : "24px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const CardText1 = styled.div`
  width: ${(props) =>
    props.$isDesktop ? "100%" : props.$isTablet ? "768px" : "100%"};
  height: ${(props) =>
    props.$isDesktop ? "auto" : props.$isTablet ? "51px" : "auto"};
  font-size: ${(props) => (props.$isMobile ? "30px" : "60px")};
  letter-spacing: ${(props) => (props.$isMobile ? "0.6px" : "1.2px")};
  color: #000;
  text-align: center;
  font-family: "MonAExtraBold";
  font-style: normal;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDetailBox = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.$isMobile ? "0px 48px" : "24px 48px")};
  display: flex;
  justify-content: center;
`;

export const CardText2 = styled.div`
  width: 100%;
  height: auto;
  font-size: ${(props) =>
    props.$isDesktop ? "20px" : props.$isTablet ? "16px" : "12px"};
  line-height: ${(props) => (props.$isDesktop ? "30px" : "24px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.2px" : "-0.16px")};
  align-self: center;
  color: var(--Secondary-Secondary1000, #323f49);
  font-family: MonRegular;
  font-style: normal;
  white-space: pre-line;
  text-align: center;
`;

export const CardButtonBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: ${(props) => (props.$isDesktop ? "24px" : "48px 24px")};
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

export const CardButton = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: ${(props) => (props.$isDesktop ? "20px 24px" : "12px 16px")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-radius: var(--XXL, 100px);
  border: 1px solid #000;
  background: var(--Base-Real-White, #fff);
  border: ${(props) => (props.$ishoveringVideo ? "none" : "1px solid black")};

  font-family: MonRegular;
  font-size: ${(props) => (props.$isDesktop ? "20px" : "12px")};
  line-weight: ${(props) => (props.$isDesktop ? "30px" : "18px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.2px" : "-0.12px")};
  font-style: normal;
  color: ${(props) => (props.$ishoveringVideo ? "white" : "#0A0B0A")};
  transition: all 0.3s ease-out;

  &:hover {
    background: var(
      --gradient,
      linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
    );
  }
`;

//3.ClubInfo
export const ClubInfoSection = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) =>
    props.$isDesktop
      ? "100px 144px"
      : props.$isTablet
      ? "50px 12px"
      : "50px 24px"};
  align-items: center;
  background: var(
    --gradient_2,
    linear-gradient(
      104deg,
      rgba(185, 255, 156, 0.2) 0%,
      rgba(0, 104, 255, 0.2) 100%
    )
  );
  justify-content: center;
`;

export const ClubTitleBox = styled.div`
  width: ${(props) => (props.$isDesktop ? "1100px" : "100%")};
  height: auto;
  padding: ${(props) => (props.$isDesktop ? "48px" : "24px")};
  display: flex;
  align-items: center;
  align-self: center;
`;

export const ClubTitle = styled.div`
  align-self: stretch;
  color: var(--new-main-black, #0a0b0a);
  font-style: normal;
  width: auto;
  height: auto;
  font-family: ${(props) =>
    props.$isDesktop ? "MonExtraBold" : "MonSemiBold"};
  font-size: ${(props) =>
    props.$isDesktop ? "38px" : props.$isTablet ? "20px" : "18px"};
  line-height: ${(props) => (props.$isDesktop ? "48px" : "28px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-1.9px" : "-0.2px")};
`;

export const GalleryBox = styled.div`
  width: 100%;
  height: ${(props) =>
    props.$isDesktop ? "372px" : props.$isTablet ? "372px" : "auto"};
  padding: 48px 0px;
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0px var(--Spacing-0, 0px);
`;

export const Gallery = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const ClubFrameBox = styled.div`
  width: 100%;
  height: auto;
  padding: 48px 24px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ClubBtnBox = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.$isDesktop ? "20px 24px" : "12px 16px")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 100px;
  border: 1px solid #000;
  background: var(--Base-Real-White, #fff);
  border: ${(props) => (props.$ishoveringClub ? "none" : "1px solid black")};

  &:hover {
    background: var(
      --gradient,
      linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
    );
  }
`;
export const ClubBtnText = styled.div`
  width: 100%;
  height: auto;
  color: ${(props) => (props.$ishoveringClub ? "white" : "black")};
  text-align: center;

  font-family: MonRegular;
  font-style: normal;
  font-size: ${(props) =>
    props.$isDesktop ? "20px" : props.$isTablet ? "16px" : "12px"};
  line-height: ${(props) => (props.$isDesktop ? "30px" : "18px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.2px" : "-0.06px")};
  transition: all 0.3s ease;
`;

//4.Notice
export const NoticeSection = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) =>
    props.$isDesktop
      ? "100px 144px"
      : props.$isTablet
      ? "50px 24px"
      : "50px 12px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const NoticeTitleSet = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.$isDesktop ? "48px" : "24px")};
  display: flex;
  align-items: left;
  border-top: 1px solid var(--new-main-grey, #637d92);
  flex-direction: ${(props) => (props.$isDesktop ? "row" : "column")};
  justify-content: ${(props) => (props.$isDesktop ? "space-between" : "")};
`;

export const NoticeTitleText = styled.div`
  width: ${(props) =>
    props.$isDesktop ? "auto" : props.$isTablet ? "539px" : "256px"};
  height: auto;
  color: var(--new-main-black, #0a0b0a);

  font-family: ${(props) =>
    props.$isDesktop ? "MonExtraBold" : "MonSemiBold"};
  font-style: normal;
  font-size: ${(props) =>
    props.$isDesktop ? "38px" : props.$isTablet ? "20px" : "18px"};
  line-height: ${(props) => (props.$isDesktop ? "48px" : "28px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-1.9px" : "-0.2px")};
  align-self: left;
  white-space: nowrap;
`;

export const NoticeBtnBox = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.$isDesktop ? "0px" : "48px 24px")};
`;

export const NoticeBtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: ${(props) => (props.$isDesktop ? "20px 24px" : "12px 16px")};
  justify-content: center;
  align-items: center;
  border-radius: var(--XXL, 100px);
  color: ${(props) => (props.$ishovering ? "white" : "black")};
  border: ${(props) => (props.$ishovering ? "none" : "1px solid black")};
  text-align: center;
  transition: all 0.2s ease-out;

  font-family: MonRegular;
  font-size: ${(props) =>
    props.$isDesktop ? "20px" : props.$isTablet ? "16px" : "12px"};
  font-style: normal;
  line-height: ${(props) =>
    props.$isDesktop ? "30px" : props.$isTablet ? "24px" : "18px"};
  letter-spacing: ${(props) =>
    props.$isDesktop ? "-0.2px" : props.$isTablet ? "-0.16px" : "-0.12px"};

  &:hover {
    background: var(
      --gradient,
      linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
    );
  }
`;

export const NoticeListSet = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.$isDesktop ? "48px" : "0px ")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const NoticeListFrame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
`;

export const NoticeList = styled.div`
  width: 100%;
  height: ${(props) => (props.$isDesktop ? "120px" : "90px ")};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid var(--new-main-primary, #0068ff);
  background: ${(props) =>
    props.$ishovering
      ? "linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%)"
      : "white"};
  transition: background 0.2s ease;
`;

export const NoticeItemBox = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 20px 12px 16px;
  justify-content: left;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
`;

export const NoticeTag = styled.div`
  width: auto;
  height: auto;
  padding: ${(props) => (props.$isDesktop ? "8px 18px" : "8px 12px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--XXL, 100px);
  border: 1px solid;
  white-space: pre;

  text-align: center;
  font-family: MonRegular;
  font-size: ${(props) => (props.$isDesktop ? "16px" : "12px")};
  line-height: ${(props) => (props.$isDesktop ? "24px" : "normal")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.16px" : "-0.06px")};
  /* margin-right: ${(props) => (props.$isDesktop ? "28px" : "22px")}; */

  font-style: normal;

  color: ${(props) => (props.$ishovering ? "#FAFAFA" : "#0068FF")};
  border-color: ${(props) => (props.$ishovering ? "#FAFAFA" : "#0068FF")};
  transition: all 0.2s ease-out;
`;

export const NoticeText = styled.div`
  width: auto;
  /* height: ${(props) => (props.$isDesktop ? "36px" : "24px")}; */
  color: ${(props) => (props.$ishovering ? "white" : "black")};
  font-family: MonRegular;
  font-size: ${(props) =>
    props.$isDesktop ? "28px" : props.$isTablet ? "18px" : "14px"};
  line-height: ${(props) =>
    props.$isDesktop ? "normal" : props.$isTablet ? "36px" : "24px"};
  letter-spacing: ${(props) =>
    props.$isDesktop ? "-1.68px" : props.$isTablet ? "-1.4px" : "-0.16px"};
  font-style: normal;
  transition: all 0.2s ease-out;
  padding: 17px 10px;
`;

export const ArrowImg3 = styled.div`
  width: ${(props) => (props.$isDesktop ? "34.45px" : "25.156px")};
  height: ${(props) => (props.$isDesktop ? "30px" : "21.905px")};
  display: flex;
  text-align: right;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) =>
    props.$ishovering
      ? `url(${mediaUrl}Home/ArrowWhite.png)`
      : `url(${mediaUrl}Home/ArrowBlue.png)`};
  transition: all 0.2s ease-out;
`;

export const ArrowImg2Box = styled.div`
  width: ${(props) => (props.$isDesktop ? "63px" : "46px")};
  height: ${(props) => (props.$isDesktop ? "49px" : "35.778px")};
  gap: ${(props) => (props.$isDesktop ? "10px" : "7.302px")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-image 0.3s ease;
`;

//5.Social
export const SocialSection = styled.div`
  width: 100%;
  height: ${(props) =>
    props.$isDesktop ? "820px" : props.$isTablet ? "576px" : "400px"};
  padding: ${(props) => (props.$isDesktop ? "100px 0px" : "50px 12px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const SocialContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.$isDesktop ? "620px" : "100%")};
  padding: ${(props) => (props.$isDesktop ? "0px 144px" : "0px 12px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const SocialTop = styled.div`
  width: 100%;
  height: ${(props) => (props.$isDesktop ? "144px" : "72px")};
  padding: ${(props) => (props.$isDesktop ? "48px" : "24px")};
  display: flex;
  align-items: center;
  border-top: 1px solid var(--new-main-grey, #637d92);
`;

export const SocialTitle = styled.div`
  align-self: stretch;
  color: var(--new-main-black, #0a0b0a);
  font-family: ${(props) =>
    props.$isDesktop ? "MonExtraBold" : "MonSemiBold"};
  font-style: normal;
  width: auto;
  height: ${(props) => (props.$isDesktop ? "46px" : "24px")};
  font-size: ${(props) =>
    props.$isDesktop ? "38px" : props.$isTablet ? "20px" : "18px"};
  line-height: ${(props) => (props.$isDesktop ? "normal" : "24px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-1.52px" : "0.4px")};
`;

export const SocialBottom = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: ${(props) => (props.$isDesktop ? "476px" : "228px")};
  padding: ${(props) => (props.$isDesktop ? "48px" : "24px 0px")};
`;

export const SocialFrame = styled.div`
  width: ${(props) => (props.$isDesktop ? "479px" : "225px")};
  height: ${(props) => (props.$isDesktop ? "380px" : "180px")};
  margin: ${(props) => (props.$isDesktop ? "0px 10px" : "0px 5px")};
  padding: ${(props) => (props.$isDesktop ? "24px" : "12px")};
  display: flex;
  flex-shrink: 0;
  border-radius: 40px;
  background-color: #fafafa;
  background-image: url(${(props) => props.$BgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 1;

  &:hover {
    border: 2px solid var(--new-main-primary, #0068ff);
    background-color: transparent; /* 배경 제거 */
    background-image: linear-gradient(
        102deg,
        rgba(0, 104, 255, 0.4) 23.99%,
        rgba(185, 255, 156, 0.4) 98.08%
      ),
      url(${(props) => props.$BgImage});
  }
  transition: all 0.3s ease-out;
`;

export const SocialSliderBox = styled.div`
  width: 100%;
  height: 100%;

  .slick-slide {
    margin: ${(props) => (props.$isDesktop ? "0px 10px" : "0px 4.737px")};
  }
  .slick-track {
    display: flex;
    align-items: flex-start;
  }
  .slick-prev:before,
  .slick-next:before {
    opacity: 0;
  }
`;

export const SocialBtn = styled.button`
  width: auto;
  height: auto;
  opacity: 1;
  &:hover,
  &:focus,
  &:active {
    opacity: 1; /* 호버 및 클릭 상태에서도 불투명도 유지 */
    outline: none;
  }
`;

export const ArrowBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  padding: ${(props) => (props.$isDesktop ? "16px 14px" : "10px 8px")};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: var(
    --gradient_2,
    linear-gradient(
      104deg,
      rgba(185, 255, 156, 0.2) 0%,
      rgba(0, 104, 255, 0.2) 100%
    )
  );
`;

export const NextArrow = styled.div`
  background: url(${mediaUrl}Home/SocialArrow.png),
    /* 다음 화살표 이미지 경로 */
      var(
        --gradient_2,
        linear-gradient(
          104deg,
          rgba(185, 255, 156, 0.2) 0%,
          rgba(0, 104, 255, 0.2) 100%
        )
      );
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: ${(props) => (props.$isDesktop ? "32px" : "16px")};
  height: ${(props) => (props.$isDesktop ? "26px" : "13px")};
  right: -25px;
  position: absolute;
  border-radius: 50px;
  z-index: 1;
`;

export const PrevArrow = styled(NextArrow)`
  transform: translateY(-50%) rotate(180deg);
  left: -10px;
`;

export const FrameCard = styled.div`
  width: 100%;
  height: auto;
  gap: ${(props) => (props.$isDesktop ? "12px" : "5.684px")};
  bottom: ${(props) => (props.$isDesktop ? "24px" : "11.37px")};
  padding-top: ${(props) => (props.$isDesktop ? "232px" : "107px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
`;

export const IconImg = styled.div`
  width: ${(props) => (props.$isDesktop ? "40px" : "20px")};
  height: ${(props) => (props.$isDesktop ? "40px" : "20px")};
  background-image: url(${(props) => props.$IconImage});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  margin-bottom: ${(props) => (props.$isDesktop ? "96px" : "48px")};
`;

export const WebImg = styled.div`
  width: ${(props) => (props.$isDesktop ? "32px" : "10.421px")};
  height: ${(props) => (props.$isDesktop ? "32px" : "10.421px")};
  background-image: url(${(props) => props.$IconImage});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  margin-bottom: ${(props) => (props.$isDesktop ? "96px" : "48px")};
`;

export const FrameBox = styled.div`
  width: 100%;
  height: auto;
  padding-right: ${(props) => (props.$isDesktop ? "24px" : "0px")}; /*11.37px*/
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FrameText = styled.div`
  width: ${(props) => (props.$isDesktop ? "auto" : "122px")}; /*desktop 260px*/
  height: ${(props) => (props.$isDesktop ? "96px" : "46px")};
  font-size: ${(props) => (props.$isDesktop ? "42px" : "18px")};
  line-height: ${(props) => (props.$isDesktop ? "48px" : "22.737px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-1.9px" : "-0.9px")};
  color: var(--Base-Base-Black, #0a0b0a);
  font-family: MonRegular;
  font-style: normal;
  flex-direction: column;
`;

export const FrameImg = styled.a`
  width: ${(props) => (props.$isDesktop ? "45.6px" : "21.6px")};
  height: ${(props) => (props.$isDesktop ? "49px" : "23.2px")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowImg4 = styled.div`
  width: ${(props) => (props.$isDesktop ? "34.453px" : "16.32px")};
  height: ${(props) => (props.$isDesktop ? "30px" : "14.211px")};
  background-image: url(${mediaUrl}Home/ArrowBlack.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  background: var(--new-main-white, #fafafa);
  overflow: hidden;
  padding-bottom: ${(props) => (props.$isDesktop ? "10px" : "0px")};
`;

export const GridTextWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.$isDesktop ? "10px 0px" : "8px 0px")};
`;

export const GridText = styled.div`
  width: 100%;
  height: auto;
  color: var(--new-main-black, #0a0b0a);
  font-family: MonRegular;
  font-style: normal;
  font-size: ${(props) => (props.$isDesktop ? "16px" : "12px")};
  line-height: ${(props) => (props.$isDesktop ? "24px" : "18px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.16px" : "-0.12px")};
  flex-direction: row;
  word-spacing: 5px;

  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: scroll 30s linear infinite; /* 스크롤 애니메이션 적용 */

  &:before {
    content: "";
    display: inline-block;
    width: 100%; /* 텍스트 앞에 빈 공간을 추가 */
  }

  & > span {
    margin-right: 50px; /* 텍스트 간격 조절 */
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

export const GridBox = styled.div`
  width: 100%;
  height: ${(props) =>
    props.$isDesktop ? "474px" : props.$isTablet ? "438px" : "309px"};
  padding: ${(props) =>
    props.$isDesktop ? "96px" : props.$isTablet ? "24px" : "96px 24px"};
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: var(
    --gradient,
    linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
  );
`;

export const GridTitle = styled.div`
  width: ${(props) =>
    props.$isDesktop ? "100%" : props.$isTablet ? "720px" : "312px"};
  height: ${(props) =>
    props.$isDesktop ? "98px" : props.$isTablet ? "51px" : "102px"};
  font-size: ${(props) => (props.$isDesktop ? "80px" : "42px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "1.6px" : "0.84px")};
  color: var(--new-main-white, #fafafa);
  text-align: center;
  font-family: "MonAExtraBold";
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;
  text-shadow: 1px 1px black, -1px -1px black, 1px 2px black, -1px 2px black;
`;

export const VectorImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const GridBtnFrame = styled.div`
  width: 222px;
  height: ${(props) =>
    props.$isDesktop ? "70px" : props.$isTablet ? "81px" : "45px"};
  padding-top: ${(props) => (props.$isTablet ? "36px" : "")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GridBtn = styled.div`
  width: ${(props) => (props.$isDesktop ? "203px" : "112px")};
  height: ${(props) => (props.$isDesktop ? "70px" : "45px")};
  padding: ${(props) => (props.$isDesktop ? "20px 28px" : "12px 16px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--XXL, 100px);
  border: 1px solid #000; /*var(--sds-size-stroke-border)*/
  background: var(--Base-Real-White, #fff);

  &:hover {
    background: var(
      --gradient,
      linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
    );
    border: 1px solid black;
  }
`;

export const GridBtnText = styled.div`
  color: var(--new-main-black, #0a0b0a);
  text-align: center;

  /* Primary/Desktop/Body1_regular */
  font-family: MonRegular;
  font-size: ${(props) =>
    props.$isDesktop ? "20px" : "10px"}; /*desktop 22px - 12*/
  line-height: ${(props) => (props.$isDesktop ? "normal" : "18px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.11px" : "-0.06px")};
  font-style: normal;

  color: ${(props) => (props.$ishoveringCTA ? `white` : `black`)};
`;
