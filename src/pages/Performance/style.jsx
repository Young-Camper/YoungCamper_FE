import styled from "styled-components";

// TimeTable.jsx
export const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  width: ${(props) =>
    props.$isDesktop ? "1000px" : props.$isTablet ? "727px" : ""};
  /* props.$isDesktop ? "1000px" : props.$isTablet ? "727px" : "320px"}; */
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.$isTablet || props.$isMobile) && "0 auto"};
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${(props) =>
    props.$isDesktop && props.$isRight % 2 == 1 ? "0" : "auto"};
  height: ${(props) =>
    props.$isEvent && (props.$isTablet || props.$isMobile) && "250px"};
`;
export const EventTime = styled.div`
  width: ${(props) => (props.$isDesktop ? "250px" : "90px")};
  height: ${(props) => (props.$isDesktop || props.$isEvent ? "250px" : "90px")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    var(--new-main-primary, #0068ff);

  color: var(--new-main-white, #fafafa);

  /* btn/pressed/a */
  text-shadow: 0px 84px 24px rgba(0, 0, 0, 0), 0px 54px 22px rgba(0, 0, 0, 0.02),
    0px 30px 18px rgba(0, 0, 0, 0.06), 0px 14px 14px rgba(0, 0, 0, 0.1),
    0px 3px 7px rgba(0, 0, 0, 0.12);

  /* Primary/Mobile/Body1 */
  font-family: Montserrat;
  font-size: ${(props) => (props.$isDesktop ? "32px" : "18px")};
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.09px;
`;
export const EventName = styled.div`
  display: flex;
  width: ${(props) =>
    props.$isDesktop ? "500px" : props.$isTablet ? "637px" : "60vw"};
  /* props.$isDesktop ? "500px" : props.$isTablet ? "637px" : "230px"}; */
  height: ${(props) => (props.$isDesktop || props.$isEvent ? "250px" : "90px")};
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  background: var(--new-main-primary, #0068ff);
  color: var(--Base-Real-White, #fff);

  /* Primary/Desktop/H1_regular */
  font-family: Montserrat;
  font-size: ${(props) => (props.$isDesktop ? "32px" : "24px")};
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.6px;
`;
export const SmallText = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  color: var(--new-main-white, #fafafa);

  /* Primary/Desktop/H1_regular */
  font-family: Montserrat;
  font-size: ${(props) => (props.$isDesktop ? "32px" : "24px")};
  font-style: normal;
  font-weight: ${(props) => (props.$isDesktop ? "400" : "800")};
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.6px;
`;
export const EventText = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  color: var(--new-main-white, #fafafa);

  /* Primary/Desktop/Hero1_regular */
  font-family: Montserrat;
  font-size: ${(props) => (props.$isDesktop ? "48px" : "28px")};
  font-style: normal;
  font-weight: 400;
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

  /* Primary/Desktop/H1_regular */
  font-family: Montserrat;
  font-size: ${(props) => (props.$isDesktop ? "32px" : "18px")};
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.6px;
`;
export const GuideName = styled.div`
  display: flex;

  width: ${(props) =>
    props.$isDesktop ? "500px" : props.$isTablet ? "637px" : "60vw"};
  /* props.$isDesktop ? "500px" : props.$isTablet ? "637px" : "230px"}; */
  height: ${(props) => (props.$isDesktop ? "100px" : "90px")};

  padding: 0 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  opacity: var(--sds-size-stroke-border);
  background: var(--new-main-grey, #637d92);

  color: var(--Base-Real-White, #fff);

  /* Primary/Desktop/H1_regular */
  font-family: Montserrat;
  font-size: ${(props) => (props.$isDesktop ? "32px" : "24px")};
  font-style: normal;
  font-weight: 400;
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
`;

export const Modal = styled.div`
  position: absolute;
  overflow: scroll;
  top: ${(props) => (props.$isDesktop ? "10%" : "10%")};

  width: ${(props) => (props.$isDesktop ? "580px" : "340px")};
  /* min-height: ${(props) => (props.$isDesktop ? "780px" : "")}; */

  padding: ${(props) =>
    props.$isDesktop ? "10px 40px 48px 40px" : "10px 20px 40px 20px"};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.$isDesktop ? "20px" : "")};
  border-radius: var(--sds-size-radius-200);
  background: #fff;

  /* shadow/modal_1 */
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);
`;
export const ModalCloseBtn = styled.div`
  cursor: pointer;
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 10px;
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
  justify-content: start;
`;

export const ArtistName = styled.div`
  color: var(--new-main-black, #0a0b0a);

  /* Primary/Desktop/H1 */
  font-family: Montserrat;
  font-size: ${(props) => (props.$isDesktop ? "32px" : "24px")};
  font-style: normal;
  font-weight: 800;
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.92px;

  padding-top: ${(props) => (props.$isDesktop ? "" : "25px")};
`;
export const Line = styled.span`
  border-bottom: 1px solid #0068ff;
`;

export const DetailText = styled.div`
  color: var(--new-grey-grey900, #4a5e6d);

  /* Primary/Desktop/Body3 */
  font-family: Montserrat;
  font-size: ${(props) => (props.$isDesktop ? "16px" : "12px")};
  font-style: normal;
  font-weight: 400;
  line-height: ${(props) => (props.$isDesktop ? "24px" : "normal")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.04px" : "-0.06px")};

  padding: ${(props) => (props.$isDesktop ? "15px 0 30px 0" : "15px 0 25px 0")};
`;
export const SubText = styled.div`
  padding-bottom: 10px;
  color: var(--new-grey-grey900, #4a5e6d);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  letter-spacing: 0.4px;
`;
export const ModalMusic = styled.div`
  color: var(--Secondary-Secondary900, #4a5e6d);

  /* Primary/Desktop/Body3 */
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.04px;

  display: flex;
  align-items: center;
  gap: 10px;
`;
