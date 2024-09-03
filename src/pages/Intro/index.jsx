import React from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";

const index = () => {
  return (
    <ContentWrapper>
      <MainTitle
        mainText="영캠프 소개"
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
      />
    </ContentWrapper>
  );
};

export default index;
