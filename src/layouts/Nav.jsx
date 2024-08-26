import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_kr from "../assets/images/Nav/Logo_kr.png";

const Wrapper = styled.div`
  width: 100%;
  background-color: #f4ffdd;
  display: flex;
  justify-content: space-around;
`;

const Logo_kr = styled.img`
  height: 45px;
`;

const Nav = () => {
  return (
    <Wrapper>
      <Link to={"/"}>
        <Logo_kr src={logo_kr} alt="Logo_kr" />
      </Link>
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
