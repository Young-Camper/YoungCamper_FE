import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 5px 0px 12px 0px;
  width: 100%; max-width: 1440px; 
  height: auto; max-height: 89px;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(32px);
`;

const NavBox = styled.div`
  display: flex;
  width: 100%; max-width: 1100px; 
  height: auto; max-height: 72px;
  padding: 14px 20px;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.img`
  display: flex;
  width: 113px;
  height: 41px;
`;

const NavItem = styled(Link)`
  color: var(--new-main-primary, #0068FF);
  width: auto; max-width: 69px;
  height: auto; max-height: 24px;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px; //20px
  font-style: normal;
  font-weight: 600;
  line-height: 24px; 
  letter-spacing: -0.1px;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 6px solid #B9FF9C;
    transition: all 0.2s ease-out;
  }
`;

const USBox = styled.div`
  width: 88px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: right;
  align-items: center;
  padding-left: 16px;
`;

const USImg = styled.img`
  width: var(--Spacing-20, 20px);
  height: 13px;
  flex-shrink: 0;
  margin-right: 16px;
`;

const Nav = () => {
  return (
    <Wrapper>
      <NavBox>
        <NavLogo src="./src/layouts/logo.png"/>
        <NavItem><Link to={"/"}>홈</Link></NavItem>
        <NavItem><Link to={"/notification"}>공지</Link></NavItem>
        <NavItem><Link to={"/promotion"}>홍보</Link></NavItem>
        <NavItem><Link to={"/performance"}>공연안내</Link></NavItem>
        <NavItem><Link to={"/location"}>장소안내</Link></NavItem>
        <NavItem><Link to={"/review"}>후기</Link></NavItem>
        <NavItem><Link to={"/FAQ"}>Q&A</Link></NavItem>
        <NavItem><Link to={"/about"}>영캠퍼</Link></NavItem>
        <USBox>  
          <USImg src=".\src\layouts\united-states-flag-icon 1.png"/>
          <USImg src=".\src\layouts\united-states-flag-icon 1.png"/>
        </USBox>
      </NavBox>
      
    </Wrapper>
  );
};

export default Nav;
