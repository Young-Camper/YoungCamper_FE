import React from "react";
import MainTitle from "../../../components/ui/MainTitle";
import { ContentWrapper } from "../../../style/commonStyle";
import { useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();

  return (
    <ContentWrapper>
      <MainTitle title="홍보 디테일" />
      <div>{id}번째 페이지</div>
    </ContentWrapper>
  );
};

export default index;
