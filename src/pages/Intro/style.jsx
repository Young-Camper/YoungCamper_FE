import styled from "styled-components";

export const IntroBanner = styled.div`
  position: relative;
  height: 583px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`;
export const IntroImg = styled.img`
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
  object-fit: cover;
`;
export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 24px 168px;
  z-index: 1;
`;
export const IntroTitle = styled.div`
  color: var(--new-main-white, #fafafa);

  /* desktop/display2_eb */
  font-family: "MonExtraBold";
  font-size: var(--fontSize-38, 38px);
  font-style: normal;
  line-height: 48px; /* 126.316% */
  letter-spacing: -1.14px;
`;
export const IntroLogo = styled.div`
  color: var(--new-main-white, #fafafa);
  font-family: "MonAExtraBold";
  font-size: 48px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.96px;
`;
export const MainText = styled.div`
  display: flex;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  color: var(--Contextual-Text-Primary, #000);

  /* desktop/H1_eb */
  font-family: "MonExtraBold";
  font-size: var(--fontSize-32, 32px);
  font-style: normal;
  font-weight: var(--fontWeight-extrabold, 800);
  line-height: 38px; /* 118.75% */
  letter-spacing: -0.96px;
`;
export const ContentTitle = styled.div`
  color: var(--Contextual-Text-Primary, #000);
  text-align: center;

  /* desktop/H3_sb */
  font-family: "MonSeimiBold";
  font-size: var(--fontSize-24, 24px);
  font-style: normal;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.24px;
`;
export const ContentText = styled.div`
  width: 548px;
  color: var(--new-grey-grey800, #637d92);
  text-align: center;

  /* desktop/Body2_reg */
  font-family: "MonRegular";
  font-size: var(--fontSize-20, 20px);
  font-style: normal;
  line-height: 30px; /* 150% */
  letter-spacing: -0.2px;
`;
export const YoungcampImg = styled.img`
  width: 1100px;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  padding: 0 48px;
`;
export const JoinBtn = styled.div`
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 100px;
  background: var(
    --gradient,
    linear-gradient(102deg, #0068ff 23.99%, #b9ff9c 98.08%)
  );

  color: var(--new-main-white, #fafafa);
  text-align: center;

  /* desktop/Body2_sb */
  font-family: "MonSeimiBold";
  font-size: var(--fontSize-20, 20px);
  font-style: normal;
  line-height: 28px; /* 140% */
  letter-spacing: -0.2px;
`;
