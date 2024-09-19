import styled from "styled-components";

const mediaUrl = import.meta.env.VITE_MEDIA_URL;

// Club
export const gridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isMobile
      ? "repeat(1, 1fr)"
      : props.$isTablet
      ? "repeat(2, 1fr)"
      : "repeat(3, 1fr)"};
  row-gap: 22px;
  column-gap: 22px;
`;

export const CardWrapper = styled.div`
  padding: ${(props) =>
    props.$isMobile
      ? "24px 5px"
      : props.$isTablet
      ? "48px 23px"
      : props.$isDesktop
      ? "148px 178px"
      : "0px"};
`;

// ClubCard
export const CardContainer = styled.div`
  background-image: ${(props) =>
    props.$hasclubimage
      ? `url(${props.src})`
      : "linear-gradient(to bottom, #00000000, rgba(10, 11, 10, 0.48))"};
  background-size: cover;
  background-position: center;
  padding: 24px 36px;
  position: relative;
  border-radius: 40px;
  color: #fafafa;
  overflow: hidden;
  text-align: left;
  height: 279px;
  font-family: "MonRegular";
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.68px;
  transition: all 0.3s ease;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, #00000000, rgba(10, 11, 10, 0.48));
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  &:hover {
    outline: 4px solid #0068ff;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.48);
      z-index: 1;
    }

    & > * {
      position: absolute;
      z-index: 2;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 35px;
      right: 24px;
      width: 51.48px;
      height: 40px;
      background-color: #fafafa;
      border-radius: 25px;
      background-image: url(${`${mediaUrl}Promotion/arrow.png`});
      background-size: 26px 22px;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 2;
    }
  }
`;

export const SchoolBadge = styled.div`
  padding: 8px 18px;
  border-radius: 100px;
  border: 1px solid #fff;
  display: inline-block;
  position: absolute;
  bottom: 72px;
  left: 36px;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04px;
`;

export const ClubName = styled.h3`
  font-size: 28px;
  margin: 0;
  position: absolute;
  bottom: 24px;
  left: 36px;
`;

//페이지네이션
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;

export const PageNumber = styled.span`
  margin: 0 4px;
  cursor: pointer;
  padding: 10px 15px;
  border: 1px solid #ddd;
  font-family: "MonRegular";
  font-size: 16px;
  background-color: ${(props) => (props.$isActive ? "#e7ebef" : "white")};
  color: black;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: #e7ebef;
  }
`;

//Detail

export const ContentWrapperFix = styled.div`
  padding: ${(props) =>
    props.$isMobile ? "0px 24px" : props.$isTablet ? "0px 48px" : "0px 170px"};
  border-bottom: ${(props) =>
    props.$isDesktop ? "none" : "1px solid #0A0B0A"};

  //상단 고정
  position: fixed;
  margin: 0 auto;
  width: 100%;
  top: ${(props) => (props.$isDesktop ? "73px" : "52px")};
  background-color: #fff;
  z-index: 90;
`;

export const ContentWrapper = styled.div`
  padding: ${(props) =>
    props.$isMobile ? "0px 24px" : props.$isTablet ? "0px 48px" : "0px 170px"};

  margin-top: ${(props) => (props.$isDesktop ? "70px" : "50px")};
`;

export const BackContainer = styled.div`
  height: ${(props) => (props.$isDesktop ? "70px" : "50px")};
  padding: ${(props) => (props.$isDesktop ? "0px 12px" : "0px 0px")};
  display: flex;
  border-bottom: ${(props) =>
    props.$isDesktop ? "1px solid #0A0B0A" : "none"};
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ArrowIcon = styled.img`
  width: ${(props) => (props.$isDesktop ? "28px" : "20px")};
  height: auto;
  fill: var(
    --gradient,
    linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
  );
`;

export const BackText = styled.span`
  font-size: ${(props) => (props.$isDesktop ? "22px" : "14px")};
  font-family: "MonRegular";
  opacity: var(--sds-size-stroke-border);

  background: var(
    --gradient,
    linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ClubImage = styled.div`
  height: ${(props) => (props.$isDesktop ? "619px" : "450px")};
  width: 100%;
  background-image: ${(props) =>
    props.$hasimage
      ? `url(${props.src})`
      : "linear-gradient(to bottom, #00000000, rgba(10, 11, 10, 0.48))"};
  background-size: ${(props) => (props.$isLong ? "contain" : "cover")};
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #dae1e7;
`;

//SubTitle
export const Wrapper = styled.div`
  padding: ${(props) =>
    props.$isMobile ? "24px" : props.$isTablet ? "24px" : "50px 0px 48px 0px"};
`;

export const SchoolBadgeDetail = styled.div`
  padding: 8px 12px;
  border-radius: 100px;
  border: 1px solid #000;
  display: inline-block;
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "16px" : "12px")};
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04px;
  margin-bottom: ${(props) => (props.$isDesktop ? "36px" : "12px")};
  color: #0a0b0a;
`;

export const TextAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  height: ${(props) => (props.$isDesktop ? "80px" : "45px")};
`;

export const SchoolText = styled.div`
  font-family: "MonExtraBold";
  font-size: ${(props) => (props.$isDesktop ? "38px" : "22px")};
  font-style: normal;
  color: #0a0b0a;
`;

export const CTAButton = styled.a`
  padding: ${(props) => (props.$isDesktop ? "20px 24px" : "5.91px 10.35px")};
  border-radius: 100px;
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "20px" : "8.87px")};
  font-style: normal;
  color: #0a0b0a;
  background: transparent;
  cursor: pointer;
  gap: ${(props) => (props.$isDesktop ? "12px" : "5.91px")};
`;

export const InstaText = styled.div``;

export const InstagramImage = styled.img`
  width: ${(props) => (props.$isDesktop ? "40px" : "22.17px")};
`;

// ClubContent
export const ClubContentWrapper = styled.div`
  padding: ${(props) => (props.$isDesktop ? "50px 0px" : "24px")};
  align-items: center;
`;

export const TextBox = styled.div`
  padding: ${(props) => (props.$isDesktop ? "48px 24px" : "0px")};
  margin-bottom: ${(props) => (props.$isDesktop ? "0px" : "24px")};
  flex: ${(props) => (props.$isDesktop && props.hasImage ? "1" : "none")};
`;

export const TextGroup = styled.div`
  margin-bottom: ${(props) => (props.$isDesktop ? "48px" : "36px")};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  font-family: "MonSemiBold";
  font-size: ${(props) => (props.$isDesktop ? "24px" : "20px")};
  margin-bottom: ${(props) => (props.$isDesktop ? "28px" : "12px")};
`;

export const Content = styled.p`
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "16px" : "14px")};
  line-height: 1.5;
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$isMobile ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ImageBox = styled.img`
  height: auto;
  max-width: ${(props) => (props.$isMobile ? "100%" : "40%")};
  object-fit: contain;
  border-radius: 12px;
`;

export const ApplyButton = styled.div`
  height: ${(props) => (props.$isDesktop ? "70px" : "45px")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--Spacing-20, 20px) var(--sds-size-space-600);
  border-radius: 100px;
  border: 1px solid #000;
  background: var(--Base-Real-White, #fff);
  font-family: "MonRegular";
  font-style: normal;
  font-size: ${(props) => (props.$isDesktop ? "22px" : "12px")};
  margin-bottom: ${(props) =>
    props.$isDesktop ? "126px" : props.$isTable ? "72px" : "24px"};
  transition: 0.3s ease;

  &:hover {
    background: var(
      --gradient,
      linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
    );
    border: none;
    color: #fff;
  }
`;

//ClubModal
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(51, 51, 51, 0.8);
  z-index: 1000;
`;

export const Modal = styled.div`
  width: ${(props) => (props.$isMobile ? "275px" : "600px")};
  background: #fff;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
`;

export const ModalCloseBtn = styled.div`
  position: absolute;
  top: ${(props) => (props.$isMobile ? "12px" : "28px")};
  right: ${(props) => (props.$isMobile ? "12px" : "28px")};
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const ModalText = styled.p`
  margin-top: ${(props) => (props.$isMobile ? "13px" : "28px")};
  margin-bottom: ${(props) => (props.$isMobile ? "13px" : "24px")};
  font-size: ${(props) => (props.$isMobile ? "16px" : "24px")};
  text-align: center;
  line-height: 22px;
  background: var(
    --gradient,
    linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${(props) => (props.$isMobile ? "MonSemiBold" : "MonExtraBold")};
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%);
  margin-bottom: ${(props) => (props.$isMobile ? "24px" : "60px")};
`;

export const ModalFooter = styled.div`
  text-align: center;
  padding: 0px 48px;
`;

export const QaApply = styled.p`
  font-family: "MonRegular";
  margin-bottom: 36px;
  font-size: ${(props) => (props.$isMobile ? "12px" : "20px")};
  font-family: ${(props) => (props.$isMobile ? "MonRegular" : "MonSemiBold")};
  color: #637d92;
  line-height: ${(props) => (props.$isMobile ? "18px" : "30px")};
  white-space: pre-wrap;
`;

export const ApplyLinkSize = styled.p`
  font-family: "MonRegular";
  color: #0068ff;
  margin-bottom: ${(props) => (props.$isMobile ? "24px" : "60px")};
  font-size: ${(props) => (props.$isMobile ? "12px" : "18px")};
`;
