import React from "react";
import Banner from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import TimeTable from "./TimeTable";

const index = () => {
  return (
    <>
      <Banner
        mainText="공연안내"
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
      />
      <ContentWrapper>
        <TimeTable />
      </ContentWrapper>
    </>
  );
};

export default index;
