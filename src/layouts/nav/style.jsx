import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    padding: 19px 20px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px #9747FF dotted;
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
    flex: 1 1 0;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    display: flex;
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

export const StyledLink = styled(Link)`
  color: #0A0B0A;
  font-size: 20px;
  font-family: "Pretendard"; // 여기 도와주세요~
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
  text-align: center;

  justify-content: center;
  align-items: center;
  gap: 4px;
  display:flex;
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
  background-color: rgb(0 0 0 / 71%);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
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