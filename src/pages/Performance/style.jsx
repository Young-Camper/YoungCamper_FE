import styled from "styled-components";

// TimeTable.jsx
export const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${(props) => (props.isright % 2 == 1 ? "0" : "auto")};
`;
export const EventTime = styled.img`
  width: 250px;
  height: 250px;
`;
export const EventName = styled.div`
  display: flex;
  width: 500px;
  height: 250px;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  opacity: var(--sds-size-stroke-border);
  background: var(--new-main-primary, #0068ff);
  color: var(--Base-Real-White, #fff);

  /* Primary/Desktop/H1_regular */
  font-family: Montserrat;
  font-size: 32px;
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
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
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
  font-size: 48px;
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
  width: 40px;
  margin-left: 24px;
`;
export const GuideTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100px;
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
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.6px;
`;
export const GuideName = styled.div`
  display: flex;
  width: 500px;
  height: var(--XXL, 100px);
  padding: 0 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  opacity: var(--sds-size-stroke-border);
  background: var(--new-main-grey, #637d92);

  color: var(--Base-Real-White, #fff);

  /* Primary/Desktop/H1_regular */
  font-family: Montserrat;
  font-size: 32px;
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
  /* background-color: rgb(0 0 0 / 71%); */
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Modal = styled.div`
  position: absolute;
  top: 22%;

  width: 580px;
  min-height: 780px;

  padding: 10px 40px 48px 40px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
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

export const ModalPosterImg = styled.img`
  height: 400px;
  object-fit: contain;
  align-self: stretch;
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
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 36px; /* 112.5% */
  letter-spacing: -1.92px;
`;
export const Line = styled.span`
  border-bottom: 1px solid #0068ff;
`;

export const DetailText = styled.div`
  color: var(--new-grey-grey900, #4a5e6d);

  /* Primary/Desktop/Body3 */
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.04px;

  padding: 15px 0 30px 0;
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
`;
