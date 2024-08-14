import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={"/"}>홈</Link>
      <Link to={"/location"}>장소 안내</Link>
      <Link to={"/performance"}>공연</Link>
      <Link to={"/notification"}>공지</Link>
      <Link to={"/promotion"}>홍보</Link>
      <Link to={"/FAQ"}>FAQ</Link>
      <Link to={"/review"}>후기</Link>
      <Link to={"/about"}>영캠퍼 소개</Link>
    </Wrapper>
  );
};

export default Nav;
