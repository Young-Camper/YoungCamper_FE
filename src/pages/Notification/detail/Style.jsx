import styled from "styled-components";

//title.jsx

export const TitleWrapper = styled.div`
  margin-top: 98px;
  gap: 30px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: var(--text-primary, #222);
  font-family: "PretendardSemiBold";
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 48px;
  margin-left: 5px;
`;

export const Info = styled.div`
  color: var(--text-grey600, #92a5b5);
  font-family: "PretendardRegular";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const Line = styled.div`
  height: 1.5px;
  align-self: stretch;
  background-color: #92a5b5;
`;

export const ContentWrapper = styled.div`
  margin-top: 48px;
  margin-bottom: 98px;
`;

export const ContentImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ContentImg = styled.img`
  margin-bottom: 48px;
`;

export const ContentText = styled.div`
  color: var(--text-grey1000, #323f49);
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  letter-spacing: -0.05px;
`;

//showlist.jsx

export const ShowListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 98px;
`;

export const ShowListContainer = styled.div`
  border-radius: var(--XXL, 100px);
  border: 1px solid var(--new-grey-grey300, #ced7de);
  opacity: var(--sds-size-stroke-border);
  background: var(--new-main-white, #fafafa);
  display: flex;
  padding: 20px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  max-width: 120px;
  color: #0068ff;
  text-align: center;
  font-family: "MonSemiBold";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`;

export const NoResult = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
`;
