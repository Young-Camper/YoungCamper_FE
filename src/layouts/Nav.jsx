import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_kr from "../assets/images/Nav/Logo_kr.png";
import { useState } from 'react';

const Wrapper = styled.div`
  /* background-color: #f4ffdd; */
  display: flex; 
  align-Items: center;
  justify-content: space-around; 
  width: 100%;
  height: 100%;
  padding : 5px 48px;
  margin: 0 auto;
`;

const LogoKr = styled.img`
  height: 45px;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
`;

const LangSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 88px;
  height: 44px;
`;

const LangSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #E8EAEA;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 24.44px;
  box-Shadow: 0px 2.933333396911621px 3.9111111164093018px 1.4666666984558105px rgba(0, 0, 0, 0.10) inset;  

  &:before {
    position: absolute;
    content: "";
    /* content: "한국어"; */
    font-size: 12px;
    height: 34.22px;
    width: 34.22px;
    left: 4.89px;
    bottom: 4.89px;
    background: linear-gradient(180deg, white 0%, #E8EAEA 100%);
    box-Shadow: 0.9777777791023254px 0.4888888895511627px 2.933333396911621px rgba(0, 0, 0, 0.25);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 9999px;
  }
`;

const CheckBox = styled.input`
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
    -webkit-transform: translateX(45px);
    -ms-transform: translateX(45px);
    transform: translateX(45px);
    content: "";
    /* content: "영어"; */
    font-size: 12px;
  }
`;

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Wrapper>
      <StyledLink to={"/"}>
        <LogoKr src={logo_kr} alt="Logo_kr" />
      </StyledLink>
      <StyledLink to={"/notification"}>공지</StyledLink>
      <StyledLink to={"/promotion"}>홍보</StyledLink>
      <StyledLink to={"/performance"}>공연일정</StyledLink>
      <StyledLink to={"/location"}>장소</StyledLink>
      <StyledLink to={"/review"}>후기</StyledLink>
      <StyledLink to={"/FAQ"}>FAQ</StyledLink>
      <StyledLink to={"/about"}>영캠퍼</StyledLink>
      <LangSwitch>
        <CheckBox
        type="checkbox"
        checked={isActive}
        onChange={() => setIsActive(!isActive)} >
        </CheckBox>
        <LangSlider>
        </LangSlider>
        
      </LangSwitch>
    </Wrapper>
  );
};  

export default Nav;
