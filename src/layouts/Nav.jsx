import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_kr from "../assets/images/Nav/Logo_kr.png";
import { useState } from 'react';

const Wrapper = styled.div`
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
`;

const Container = styled.div`
  align-self: stretch;
  padding: 5px 144px;
  background: white;
  backdrop-filter: blur(64px);
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const FlexContainer = styled.div`
  flex: 1 1 0;
  height: 73px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;


const LogoKr = styled.img`
  width: 123px;
  height: 45px;
`;

const StyledLink = styled(Link)`
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
      <Container>
        <FlexContainer>
          <StyledLink to={"/"}>
            <LogoKr src={logo_kr} alt="Logo_kr" />
          </StyledLink>
          <StyledLink to={"/notification"}>공지</StyledLink>
          <StyledLink to={"/promotion"}>동아리</StyledLink>
          <StyledLink to={"/performance"}>공연일정</StyledLink>
          <StyledLink to={"/location"}>장소</StyledLink>
          <StyledLink to={"/review"}>후기</StyledLink>
          <StyledLink to={"/FAQ"}>FAQ</StyledLink>
          <StyledLink to={"/about"}>기획단</StyledLink>
          <LangToggleWrapper>
            <CheckBox type="checkbox" checked={isChecked} onChange={handleToggle} />
            <LangSlider>
              <ToggleCircle />
            </LangSlider>
          </LangToggleWrapper>
      </FlexContainer>
    </Container>
    </Wrapper>
  );
};  

export default Nav;
