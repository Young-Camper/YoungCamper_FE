import styled from "styled-components";
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* max-width 초과시, 가운데 정렬 */
  margin: 0 auto;
  max-width: 1100px;

  padding: ${(props) =>
    props.$isDesktop
      ? "100px 0px"
      : props.$isTablet
      ? "50px 48px"
      : "50px 24px"};

  gap: 64px;
`;
export const IntroBanner = styled.div`
  position: relative;
  height: ${(props) => (props.$isDesktop ? "583px" : "200px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`;
export const IntroImg = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: ${(props) => (props.$isDesktop ? "24px 168px" : "0 24px")};
  z-index: 1;
`;
export const IntroTitle = styled.div`
  color: var(--new-main-white, #fafafa);

  /* desktop/display2_eb */
  font-family: "MonExtraBold";
  font-size: ${(props) => (props.$isDesktop ? "38px" : "24px")};
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "48px" : "30px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-1.14px" : "-0.72px")};
`;
export const IntroLogo = styled.div`
  color: var(--new-main-white, #fafafa);
  font-family: "MonAExtraBold";
  font-size: ${(props) => (props.$isDesktop ? "48px" : "30px")};
  font-style: normal;
  line-height: normal;
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.96px" : "-0.6px")};
`;
export const MainText = styled.div`
  display: flex;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  color: var(--Contextual-Text-Primary, #000);
  text-align: center;

  /* desktop/H1_eb */
  font-family: ${(props) =>
    props.$isDesktop ? "MonExtraBold" : "MonSemiBold"};
  font-size: ${(props) => (props.$isDesktop ? "32px" : "18px")};
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "38px" : "24px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.96px" : "-0.18px")};
`;
export const ContentTitle = styled.div`
  color: var(--Contextual-Text-Primary, #000);
  text-align: center;

  /* desktop/H3_sb */
  font-family: "MonSeimiBold";
  font-size: ${(props) => (props.$isDesktop ? "24px" : "16px")};
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "28px" : "22px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.24px" : "-0.16px")};
`;
export const ContentText = styled.div`
  width: 548px;
  color: var(--new-grey-grey800, #637d92);
  text-align: center;

  /* desktop/Body2_reg */
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "20px" : "12px")};
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "30px" : "18px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.2px" : "-0.12px")};
`;
export const YoungcampImg = styled.img`
  width: 100%;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  padding: ${(props) =>
    props.$isDesktop ? "0 48px" : props.$isTablet ? "0 24px" : "0 12px"};
`;
export const JoinBtn = styled.div`
  height: ${(props) => (props.$isDesktop ? "68px" : "45px")};
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
  font-size: ${(props) => (props.$isDesktop ? "20px" : "12px")};
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "28px" : "18px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.2px" : "-0.12px")};
`;
