import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: ${(props) => (props.$isDesktop ? "280px" : "150px")};
  padding: ${(props) => (props.$isDesktop ? "0 20px" : "0 24px")};
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  opacity: var(--sds-size-stroke-border);
  background: var(
    --gradient_2,
    linear-gradient(
      104deg,
      rgba(185, 255, 156, 0.2) 0%,
      rgba(0, 104, 255, 0.2) 100%
    )
  );
`;
export const BannerWrapper = styled.div`
  width: 1110px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const MainText = styled.div`
  color: var(--new-main-black, #0a0b0a);

  /* desktop/display2_eb */
  font-family: "MonExtraBold";
  font-size: ${(props) => (props.$isDesktop ? "38px" : "20px")};
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "48px" : "28px")};
  letter-spacing: ${(props) => (props.$isDesktop ? "-1.9px" : "-1px")};
  /* white-space: nowrap; */
`;

export const SubText = styled.div`
  color: var(--new-grey-grey800, #637d92);

  /* desktop/Body2_reg */
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "20px" : "12px")};
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "30px" : "18px")}; /* 150% */
  letter-spacing: ${(props) => (props.$isDesktop ? "-0.2px" : "-0.06px")};
`;

export const BannerImg = styled.img`
  width: ${(props) => (props.$isDesktop ? "230px" : "124px")};
  height: ${(props) => (props.$isDesktop ? "186px" : "100px")};
  object-fit: contain;
`;

export const AdminLogout = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  color: #fff;
  background-color: #111;
  z-index: 100;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
