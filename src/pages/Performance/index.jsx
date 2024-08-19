import React from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import A from "./A";
import B from "./B";

const index = () => {
  return (
    <ContentWrapper>
      <MainTitle title="공연안내" />
      <A />
      <B />
    </ContentWrapper>
  );
};

export default index;
