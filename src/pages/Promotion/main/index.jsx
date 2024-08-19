import React from "react";
import MainTitle from "../../../components/ui/MainTitle";
import { ContentWrapper } from "../../../style/commonStyle";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <ContentWrapper>
      <MainTitle title="홍보" />
      <Link to={"/promotion/1"}>1번 디테일 페이지</Link>
      <br />
      <Link to={"/promotion/2"}>2번 디테일 페이지</Link>
      <br />
      <Link to={"/promotion/3"}>3번 디테일 페이지</Link>
      <br />
    </ContentWrapper>
  );
};

export default index;
