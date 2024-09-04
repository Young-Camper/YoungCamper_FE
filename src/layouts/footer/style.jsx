import {Link} from "react-router-dom"
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--new-main-grey, #637d92);
`;

export const Container = styled.div`
  max-width: 1400px;
  /* padding: 48px; */
  padding: ${(props) => (props.$isDesktop ? "48px 48px;" : "24px 24px;")};
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* gap: 28px; */
  gap: ${(props) => (props.$isDesktop ? "28px;" : "24px;")};
`;

export const Main = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 28px;
`;

export const Navigation = styled.div`
  align-self: stretch;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledLink = styled(Link)`
  justify-content: center;
  align-items: center;
  display: flex;
`;

// 로고 이미지
export const Logo = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  img{
    width: ${(props) => (props.$isDesktop ? "161px;" : "55px;")};
    height: ${(props) => (props.$isDesktop ? "59px;" : "20px;")};  
  }
`;

// 텍스트 그룹
export const Section = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => (props.$isDesktop ? "28px;" : "24px;")};
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
    font-weight: 400;
    line-height: 18px;

  }
`;

export const ContactText = styled.div`
  color: #0A0B0A;
  font-family: 'MonRegular';
  word-wrap: break-word;
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  @media only screen and (max-width: 1023px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
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
  font-size: 12px;
  font-family: 'MonRegular';
  font-weight: 400;
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
