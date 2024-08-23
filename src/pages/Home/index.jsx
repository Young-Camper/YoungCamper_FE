import React from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import Title from "./title";
import Section from "./section";

const index = () => {
  return (
    <ContentWrapper>
      <MainTitle title="홈페이지" />
      <Title />
      <Section />
    </ContentWrapper>

  )  
} 

export default index;
