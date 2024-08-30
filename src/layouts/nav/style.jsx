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
  
  @media only screen and (max-width:768px) {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
  }

  @media only screen and ((min-width: 769px) and (max-width: 1023px)){
    
  }
`;

export const Container = styled.div`
  @media only screen and (min-width: 1024px){
    align-self: stretch;
    padding: 5px 5%;
    background: white;
    backdrop-filter: blur(64px);
    justify-content: center;
    align-items: center;
    display: inline-flex;
  }
  @media only screen and (max-width:768px) {
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
  @media only screen and ((min-width: 769px) and (max-width: 1023px)){
    
  }
`;

export const FlexContainer = styled.div`
  @media only screen and (min-width: 1024px){
    flex: 1 1 0;
    height: 73px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  @media only screen and (max-width:768px) {
    /* width: 360px; */
    width: 100vw;
    align-self: stretch;
    padding: 12px 20px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    background-color: white;
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)){
    
  }
`;

export const SideNavWrapper = styled.div`
  @media only screen and (min-width: 1024px){

  }
  @media only screen and (max-width:768px) {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    background-color: #0068FF;
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)){
    
  }
`;

export const SideNav1111 = styled.div`
  @media only screen and (min-width: 1024px){
    
  }
  @media only screen and (max-width:768px) {
    width: 100%;
    height: 50px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 2px #FAFAFA solid;
    justify-content: center;
    align-items: center;
    display: inline-flex;

    /* flex-direction: column; */
    /* gap: 16px; */
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)){
    
  }
`;

export const SideLine = styled.div`
  width: 100vw;
  height: 0px;
  border: 2px #FAFAFA solid;
`

export const LogoKr = styled.img`
  @media only screen and (min-width: 1024px){
    width: 123px;
    height: 45px;
  }
  @media only screen and (max-width: 768px) {
    width: 72px;
    height: 26px; 
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)){

  }
`;
export const LogoEn = styled.img`
  @media only screen and (min-width: 1024px){
    width: 123px;
    height: 76.13px;
  }
  @media only screen and (max-width: 768px) {
    width: 72px;
    height: 26px; 
  }
  @media only screen and ((min-width: 769px) and (max-width: 1023px)){

  }
`;

export const StyledLink = styled(Link)`
  color: #0A0B0A;
  font-size: 20px;
  font-family: "PretendardSemibold";
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display:flex;
  @media only screen and (max-width: 1023px) {
    felx: 1 1 0;
    align-self: stretch;
    text-align: center;
    color: #FAFAFA;
    font-size: 24px;
    font-family: "MonRegular";
    font-weight: 400;
    line-height: 32px;
    word-wrap: break-word;
    gap: 12px;
  }
`;

export const LangSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #E8EAEA;
  transition: 0.4s;
  border-radius: 24.44px;
  box-shadow: 0px 2.933px 3.911px 1.467px rgba(0, 0, 0, 0.10) inset;


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
  }

  &:before, &:after {
    pointer-events: none;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${LangSlider} {
    background-color: #B9FF9C;
  }

  &:focus + ${LangSlider} {
    box-shadow: 0 0 1px #0068FF;
  }

  &:checked + ${LangSlider}:before {
    transform: translateY(-50%) translateX(-45px); 
    color: transparent; 
  }

  &:checked + ${LangSlider}:after {
    transform: translateY(-50%) translateX(-45px); 
    color: #000; 
  }
`;

export const ToggleCircle = styled.span`
  position: absolute;
  content: "";
  height: 34.22px;
  width: 34.22px;
  left: 4.89px;
  bottom: 4.89px;
  background: linear-gradient(180deg, white 0%, #E8EAEA 100%);
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

//mobile & tablet
export const MenubarContainer = styled.div`
  width: 28px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: flex;
`;

export const MenubarWrapper = styled.div`
  width: 28px;
  height: 28px;
  position: relative;
`;

export const Menubar = styled.button`
  width: 21px;
  height: 14px;
  left: 3.5px;
  top: 7px;
  position: absolute;
  background-image: url(${props => props.menubar});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

//modal = sidenav
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #0068FF;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Modal = styled.div`
  position:absolute;
  top:0;
  left:0;
  width: 100vw;;
  height: 100vh;
  /* background: #000000; */
  overflow: hidden;
  /* border-radius: 8px; */
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
`

// export const

export const ModalCloseBtn = styled.button`
  z-index: 1000;
  right: 25px;
  top: 15px;
  width: 21.91px;
  height: 21.91px;
  position: absolute;
  background-image: url(${props => props.closeicon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

//다시 짜기

export const SideNav = styled.div`
  position:absolute;
  top:0;
  left:0;
  z-index: 1200;
  width: 100vw;;
  height: 100vh;
  background-color: #0068FF;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;

  overflow: hidden;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
`;

export const NavMobile = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

//container 는 위에 중복

export const Header = styled.div`
  width: 100%;
  /* height: 100%; */
  height: 52px;
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: white;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

export const MenubarOpened = styled.button`
  z-index: 1000;
  transform: rotate(180deg);
  transform-origin: 0 0;
  width: 21px;
  height: 14px;
  left: 50px;
  top: 35px;
  position: absolute;

  background-image: url(${props => props.menubar});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: inline-flex;
`;

//sideNav

export const SideNavLinks = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export const SideNavSet = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

export const SideNavLink = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 2px solid #FAFAFA;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  gap: 12px;
`;

//언어 변경 및 SNS 링크들 

export const SideNavEtc = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export const SideNavLang = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
`;

export const SideNavLangBtn = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

export const SideNavLangText = styled.button`
  text-align: center;
  color: #B9FF9C;
  font-size: 18px;
  font-family: 'MonRegular';
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  border-bottom: 1px solid #B9FF9C;
`;

export const SideNavSNS = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 12px;
  display: inline-flex;

  justify-content: center;
  align-items: center;
`;

export const SideNavIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideNavSnsIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${props => props.icon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;  
`