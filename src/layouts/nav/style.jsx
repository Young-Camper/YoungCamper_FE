import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    padding: 19px 20px;
    overflow: hidden;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 18px;
  }

  @media only screen and (max-width: 1023px) {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
  }
  
  padding: ${(props) => (props.$isDesktop ? "5px 168px;" : "12px 20px")};
  display: flex;
  gap: 18px;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.$isDesktop ? "73px" : "52px")};
>>>>>>> develop

  //상단 고정
  position: fixed;
  top: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 99;
`;

export const Container = styled.div`
  @media only screen and (min-width: 1024px) {
    align-self: stretch;
    padding: 5px 5%;
    background: white;
    backdrop-filter: blur(64px);
    justify-content: center;
    align-items: center;
    display: inline-flex;
  }
  @media only screen and (max-width: 1023px) {
    /* flex: 1 1 0;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    display: flex; */
    width: 100%;
    height: 100%;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: inline-flex;
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)) {
  }
`;

export const FlexContainer = styled.div`
  @media only screen and (min-width: 1024px) {
    flex: 1 1 0;
    height: 73px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  @media only screen and (max-width: 1023px) {
    /* width: 360px; */
    width: 100vw;
    align-self: stretch;
    padding: 12px 20px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    background-color: white;
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)) {
  }
`;

export const SideNavWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (max-width: 1023px) {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    background-color: #0068ff;
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)) {
  }
`;

export const SideNav1111 = styled.div`
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (max-width: 1023px) {
    width: 100%;
    height: 50px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 2px #fafafa solid;
    justify-content: center;
    align-items: center;
    display: inline-flex;

    /* flex-direction: column; */
    /* gap: 16px; */
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)) {
  }
=======
  flex-direction: ${(props) => (props.$isDesktop ? "row" : "")};
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  max-width: 1440px;
>>>>>>> develop
`;

export const Logo = styled.img`
  width: ${(props) => (props.$isDesktop ? "123px" : "72px")};
  height: ${(props) =>
    props.$isDesktop
      ? props.$isEnglish
        ? "60px"
        : "45px"
      : props.$isEnglish
      ? ""
      : "26px"};
`;
export const LogoKr = styled.img`
  @media only screen and (min-width: 1024px) {
    width: 123px;
    height: 45px;
  }
  @media only screen and (max-width: 1023px) {
    width: 72px;
    height: 26px;
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)) {
  }
`;
export const LogoEn = styled.img`
  @media only screen and (min-width: 1024px) {
    width: 123px;
    height: 76.13px;
  }
  @media only screen and (max-width: 1023px) {
    width: 72px;
    /* height: 26px; */
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)) {
  }
`;

export const StyledLink = styled(Link)`
  color: #0a0b0a;
  font-size: 20px;
  font-family: "MonRegular";
  font-weight: 400;
  line-height: 30px;
  word-wrap: break-word;
export const LogoLink = styled(Link)``;

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

export const LangSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e8eaea;
  transition: 0.4s;
  border-radius: 24.44px;
  box-shadow: 0px 2.933px 3.911px 1.467px rgba(0, 0, 0, 0.1) inset;

  &:before {
    z-index: 0;
    position: absolute;
    content: "한국어";
    font-size: 12px;
    left: 45px;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
    transition: 0.4s;
    font-family: "MonSemiBold";
  }

  &:after {
    z-index: 0;
    position: absolute;
    content: "ENG";
    font-size: 12px;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: transparent;
    transition: 0.4s;
    font-family: "MonSemiBold";
  }

  &:before {
    /* color: #e8eaea; */
  }
  &:after {
    pointer-events: none;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${LangSlider} {
    background-color: #0068FF;
  }

  &:focus + ${LangSlider} {
    box-shadow: 0 0 1px #0068ff;
  }

  &:checked + ${LangSlider}:before {
    transform: translateY(-50%) translateX(-45px);
    color: transparent;
  }

  &:checked + ${LangSlider}:after {
    transform: translateY(-50%) translateX(-45px);
    color: #ffffff;
  }
`;

export const ToggleCircle = styled.span`
  position: absolute;
  content: "";
  height: 34.22px;
  width: 34.22px;
  left: 4.89px;
  bottom: 4.89px;
  background: linear-gradient(180deg, white 0%, #e8eaea 100%);
  box-shadow: 0.978px 0.489px 2.933px rgba(0, 0, 0, 0.25);
  transition: 0.4s;
  border-radius: 50%;
  z-index: 900;
  ${CheckBox}:checked + ${LangSlider} & {
    transform: translateX(45px);
  }
`;

export const LangToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 44px;
`;

//MobileNav.jsx

export const NavBar = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Menubar = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const LogoWrapper = styled.div``;

// 전체 화면을 가리는 사이드 네비게이션 스타일
export const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: opacity 0.3s ease;
`;

// 사이드 네비게이션 내부 스타일
export const NavMobile = styled.div`
  width: 100%;
  background: #0068ff;
  color: white;
  display: flex;
  flex-direction: column;
`;

// 상단 네비게이션 스타일
export const TopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

// 헤더 스타일
export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
`;

// 헤더 내용 스타일
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.$isMobile ? "52px" : "56px")};
  justify-content: space-between;
  padding: 12px 20px;
`;

// 메뉴바 열기 버튼 스타일
export const MenubarOpened = styled.img`
  cursor: pointer;
  width: 28px;
  height: 28px;
`;

// 사이드 네비게이션 링크 스타일
export const SideNavLinks = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  /* margin-top: 50px; */
`;

// 사이드 네비게이션 링크 셋 스타일
export const SideNavSet = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

// 사이드 네비게이션 링크 스타일
export const SideNavLink = styled.div`
  width: 100%;
  padding: 8px 0px;
  border-bottom: 2px solid white;
  font-family: "MonRegular";
  font-weight: 400;
`;

// 사이드 네비게이션 기타 스타일
export const SideNavEtc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0px;
`;

// 사이드 네비게이션 언어 설정 스타일
export const SideNavLang = styled.div`
  /* margin-bottom: 20px; */
`;

// 사이드 네비게이션 언어 버튼 스타일
export const SideNavLangBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 48px;
`;

// 사이드 네비게이션 언어 텍스트 스타일
export const SideNavLangText = styled.span`
  margin: 0 10px;
  cursor: pointer;
  font-size: 18px;
  color: #b9ff9c;
  border-bottom: 1px solid #b9ff9c;
`;

// 사이드 네비게이션 SNS 스타일
export const SideNavSNS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 사이드 네비게이션 SNS 아이콘 컨테이너 스타일
export const SideNavIconContainer = styled.div`
  display: flex;
  gap: 12px;
`;

// 사이드 네비게이션 SNS 아이콘 스타일
export const SideNavSnsIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

// 사이드 네비게이션 닫기 버튼 스타일
export const ModalCloseBtn = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const NavIcon = styled.img`
  width: 24px;
  height: 24px;
`;
