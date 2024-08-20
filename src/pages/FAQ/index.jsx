import React from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";
import Banner from "./Banner";
import FAQContainer from "./FAQContainer";


const index = () => {

  return (
    <>
      <Banner />
      <FAQContainer />
    </>
  );
};

export default index;
