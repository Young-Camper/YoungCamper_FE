import styled from "styled-components";

// TimeTable.jsx
export const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  width: ${(props) => (props.$isDesktop ? "1000px" : "")};
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.$isDesktop ? "" : "0 auto")};
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${(props) =>
    props.$isDesktop && props.$isRight % 2 == 1 ? "0" : "auto"};
`;
export const EventTime = styled.div`
  position: relative;
  width: ${(props) => (props.$isDesktop ? "250px" : "90px")};
  height: ${(props) => (props.$isDesktop || props.$isEvent ? "250px" : "90px")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: var(--sds-size-stroke-border);

  /* 수계식 투명도 적용 */
  background-color: var(--new-main-primary, #0068ff);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }

  /* 연예인 커버 이미지 설정 */
  background-image: url(${(props) => props.$imageURL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  /* == 텍스트 스타일 == */
  color: var(--new-main-white, #fafafa);

  /* btn/pressed/a */
  text-shadow: 0px 84px 24px rgba(0, 0, 0, 0), 0px 54px 22px rgba(0, 0, 0, 0.02),
    0px 30px 18px rgba(0, 0, 0, 0.06), 0px 14px 14px rgba(0, 0, 0, 0.1),
    0px 3px 7px rgba(0, 0, 0, 0.12);

  /* desktop/H1_reg */
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "32px" : "18px")};
  font-style: normal;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.09px;
`;
export const TimeText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 5;

  /* 글자 투명도 적용 안되게 설정 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${(props) => props.$isEvent && "0.5"};
    background: ${(props) => props.$isEvent && "#7992b4"};
    z-index: -1;
  }
`;

export const EventImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--primary-81, #9ec6ff);
  object-fit: cover;
`;

export const EventName = styled.div`
  display: flex;
  width: ${(props) => (props.$isDesktop ? "500px" : "60vw")};
  height: ${(props) => (props.$isDesktop || props.$isEvent ? "250px" : "90px")};
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  background: var(--new-main-primary, #0068ff);
  color: var(--Base-Real-White, #fff);

  /* desktop/H1_reg */
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "32px" : "24px")};
  font-style: normal;
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.6px;
`;
export const SmallText = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  color: var(--new-main-white, #fafafa);

  /* Primary/Desktop/H1_regular */
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "32px" : "24px")};
  font-style: normal;
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.6px;
`;
export const EventText = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  color: var(--new-main-white, #fafafa);

  /* desktop/display2_reg */
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "48px" : "28px")};
  font-style: normal;
  line-height: normal;
  letter-spacing: -2.4px;

  width: 100%;
  border-bottom: 1px solid #fff;
`;
export const EventTextRight = styled(EventText)`
  display: flex;
  justify-content: end;
  border: 0;
`;
export const Arrow = styled.img`
  width: ${(props) => (props.$isDesktop ? "40px" : "30px")};
  margin-left: ${(props) => (props.$isDesktop ? "24px" : "10px")};
`;
export const GuideTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.$isDesktop ? "250px" : "90px")};
  height: ${(props) => (props.$isDesktop || props.$isEvent ? "100px" : "90px")};
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    var(--new-main-grey, #637d92);

  color: var(--new-main-white, #fafafa);

  /* btn/pressed/a */
  text-shadow: 0px 84px 24px rgba(0, 0, 0, 0), 0px 54px 22px rgba(0, 0, 0, 0.02),
    0px 30px 18px rgba(0, 0, 0, 0.06), 0px 14px 14px rgba(0, 0, 0, 0.1),
    0px 3px 7px rgba(0, 0, 0, 0.12);

  /* desktop/H1_reg */
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "32px" : "18px")};
  font-style: normal;
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.6px;
`;
export const GuideName = styled.div`
  display: flex;

  width: ${(props) => (props.$isDesktop ? "500px" : "60vw")};
  height: ${(props) => (props.$isDesktop ? "100px" : "90px")};

  padding: 0 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  opacity: var(--sds-size-stroke-border);
  background: var(--new-main-grey, #637d92);

  color: var(--Base-Real-White, #fff);

  /* desktop/H1_reg */
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "32px" : "24px")};
  font-style: normal;
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.6px;
`;

// ArtistModal.jsx
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 40%);
`;

export const Modal = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${(props) => (props.$isMobile ? "340px" : "580px")};

  padding: ${(props) =>
    props.$isMobile ? "10px 20px 48px 20px" : "10px 40px 48px 40px"};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.$isMobile ? "" : "20px")};
  border-radius: var(--sds-size-radius-200);
  background: #fff;

  /* shadow/modal_1 */
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);
  gap: 10px;
`;
export const ModalCloseBtn = styled.div`
  cursor: pointer;
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  color: #111;
  img {
    height: 40px;
  }
`;

export const ModalPosterImg = styled.div`
  max-height: ${(props) => (props.$isMobile ? "300px" : "400px")};
  border-radius: 8px;
  align-self: stretch;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$isMobile ? "25px" : "30px")};
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const ArtistName = styled.div`
  color: var(--new-main-black, #0a0b0a);

  /* desktop/H1_eb */
  font-family: "MonExtraBold";
  font-size: ${(props) => (props.$isMobile ? "24px" : "32px")};
  font-style: normal;
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.92px;
`;
export const Line = styled.span`
  border-bottom: 2px solid #0068ff;
`;

export const DetailText = styled.div`
  color: var(--new-grey-grey900, #4a5e6d);

  /* desktop/Body2_reg */
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isMobile ? "12px" : "20px")};
  font-style: normal;
  line-height: ${(props) => (props.$isMobile ? "normal" : "24px")};
  letter-spacing: ${(props) => (props.$isMobile ? "-0.06px" : "-0.1px")};

  padding-top: 15px;
`;
export const SubText = styled.div`
  padding-bottom: 10px;
  color: var(--new-grey-grey900, #4a5e6d);

  /* desktop/Body2_sb */
  font-family: "MonSemiBold";
  font-size: 20px;
  font-style: normal;
  line-height: 24px; /* 120% */
  letter-spacing: 0.4px;
`;
export const ModalMusic = styled.div`
  color: var(--Secondary-Secondary900, #4a5e6d);

  /* desktop/Body2_reg */
  font-family: "MonRegular";
  font-size: 16px;
  font-style: normal;
  line-height: 24px; /* 150% */
  letter-spacing: -0.04px;

  display: flex;
  align-items: center;
  gap: 10px;
`;
