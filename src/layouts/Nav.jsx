import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_kr from "../assets/images/Nav/Logo_kr.png";
import { useState } from 'react';
// import { ContentWrapper } from "../style/commonStyle";

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

const LangSlider = styled.span`
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
    content: "KO";
    font-size: 12px;
    left: 55px; 
    top: 50%;
    transform: translateY(-50%);
    color: #000;
    transition: 0.4s;
  }

  &:after {
    position: absolute;
    content: "EN";
    font-size: 12px;
    right: 10px; 
    top: 50%;
    transform: translateY(-50%);
    color: transparent;
    transition: 0.4s;
  }

  &:before, &:after {
    pointer-events: none;
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
    transform: translateY(-50%) translateX(-45px); 
    color: transparent; 
  }

  &:checked + ${LangSlider}:after {
    transform: translateY(-50%) translateX(-45px); 
    color: #000; 
  }
`;

const ToggleCircle = styled.span`
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

const LangToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 44px;
`;

const Nav = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
    // 언어 변경 로직 추가
  };
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
      <LangToggleWrapper>
      <CheckBox type="checkbox" checked={isChecked} onChange={handleToggle} />
      <LangSlider>
        <ToggleCircle />
      </LangSlider>
    </LangToggleWrapper>
    </Wrapper>
  );
};  

export default Nav;
