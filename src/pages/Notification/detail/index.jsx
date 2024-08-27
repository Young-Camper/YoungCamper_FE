import React from "react";
import styled from "styled-components";
import MainTitle from "../../../components/ui/MainTitle";
import { ContentWrapper } from "../../../style/commonStyle";
import Content from "./Content.jsx";
import TitleSet from "../../../components/ui/TitleSet.jsx";

const Wrapper = styled.div``;

const index = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TitleSet
          mainText="공지사항"
          subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
        />
        <Content />
      </ContentWrapper>
    </Wrapper>
  );
};

export default index;
