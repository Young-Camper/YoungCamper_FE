import {Link} from "react-router-dom"
import styled from "styled-components";

export const MainContainer = styled.div`
  padding: ${(props) => (props.$isDesktop ? "5px 168px;" : "12px 20px")};
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
`;

export const Container = styled.div`
    max-width: 1400px;
    align-self: stretch;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;

    border-top: 1px solid var(--new-main-grey, #637d92);

    @media only screen and (min-width: 1024px) {
        height: 391px;
    }
    @media only screen and (max-width: 1023px) {
        height: 343px;
    }
`;

export const Main = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 28px;

  @media only screen and (min-width: 1024px) {
    height: 233px;
  }
  @media only screen and (max-width: 1023px) {
    height: 195px;
  }
`;

export const Navigation = styled.div`
  align-self: stretch;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => (props.$isDesktop ? "#0a0b0a;" : "white")};
  font-size: ${(props) => (props.$isTablet ? "24px" : "20px")};
  font-family: "MonRegular";
  font-weight: 400;
  font-style: normal;
  line-height: ${(props) => (props.$isDesktop ? "30px" : "32px")};
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 6px;
  display: flex;
  /* letter-spacing: -1.2px; */
`;

// 로고 이미지
export const Logo = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (min-width: 1024px) {
    img{
      width: 123px;
      height: 45px;
    }
  }
  @media only screen and (max-width: 1023px) {
    img{
        width: 55px;
        height: 20px;
    }
  }
`;

// 텍스트 그룹
export const Section = styled.div`
  align-self: stretch;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 28px;
`;

// 텍스트 줄
export const List = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  color: #0A0B0A;
  font-family: 'MonRegular';
  font-weight: 400;
  word-wrap: break-word;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;

  
    }
  @media only screen and (max-width: 1023px) {
    font-size: 12px;
    line-height: 18px;

  }
`;

// 이메일과 연락처 줄
export const ContactInfoContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  @media only screen and (min-width: 1024px) {
    height: 56px;
    }
  @media only screen and (max-width: 1023px) {
    height: 44px;
  }
`;

export const ContactInfoRow = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ContactLabel = styled.div`
  color: #637D92;
  font-family: 'MonRegular';
  word-wrap: break-word;
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  @media only screen and (max-width: 1023px) {
    font-size: 12px;
    font-weight: 600;

  }
`;

export const ContactText = styled.div`
  color: #0A0B0A;
  font-family: 'MonRegular';
  font-weight: 400;
  word-wrap: break-word;
  
`;

export const Sub = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (min-width: 1024px) {
    height: 62px;
    gap: 12px;

    }
  @media only screen and (max-width: 1023px) {
    height: 52px;
    gap: 8px;
  }
`;

export const Content = styled.div`
  word-wrap: break-word;
  @media only screen and (min-width: 1024px) {
    color: #92A5B5;
    font-size: 16px;
    font-family: 'MonRegular';
    font-weight: 400;
    line-height: 24px;
    }
  @media only screen and (max-width: 1023px) {
    color: #637D92;
  font-size: 13px;
  font-family: 'MonRegular';
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.25px;
    }
`;

export const Action = styled.div`
  align-self: stretch;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const IconContainer = styled.div`
  width: 26px;
  height: 26px;
  position: relative;
`;

export const Icon = styled.img`
  
`;
