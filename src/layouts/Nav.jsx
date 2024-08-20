import React from "react";
import { NavLink } from "react-router-dom"; // Link를 NavLink로 변경
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #f4ffdd;
  display: flex;
  justify-content: space-around;
`;

const Nav = () => {
  return (
    <Wrapper>
      <NavLink to={"/"} style={({isActive}) => ({ color: isActive ? 'blue' : 'black', })}>홈</NavLink>
      <NavLink to={"/location"} style={({isActive}) => ({ color: isActive ? 'blue' : 'black', })}>장소 안내</NavLink>
      <NavLink to={"/performance"} style={({isActive}) => ({ color: isActive ? 'blue' : 'black', })}>공연</NavLink>
      <NavLink to={"/notification"} style={({isActive}) => ({ color: isActive ? 'blue' : 'black', })}>공지</NavLink>
      <NavLink to={"/promotion"} style={({isActive}) => ({ color: isActive ? 'blue' : 'black', })}>홍보</NavLink>
      <NavLink to={"/FAQ"} style={({isActive}) => ({ color: isActive ? 'blue' : 'black', })}>FAQ</NavLink>
      <NavLink to={"/review"} style={({isActive}) => ({ color: isActive ? 'blue' : 'black', })}>후기</NavLink>
      <NavLink to={"/about"} style={({isActive}) => ({ color: isActive ? 'blue' : 'black', })}>영캠퍼 소개</NavLink>
    </Wrapper>
  );
};

export default Nav;
