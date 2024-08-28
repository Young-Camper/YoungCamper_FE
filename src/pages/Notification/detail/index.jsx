import React from "react";
import styled from "styled-components";
import MainTitle from "../../../components/ui/MainTitle";
import { ContentWrapper } from "../../../style/commonStyle";
import Content from "./Content.jsx";

const Wrapper = styled.div``;

const index = () => {
  return (
    <Wrapper>
      <MainTitle
        mainText="공지사항"
        subText="래 내용을 꼭 확인하시고, 모두가 즐거운 축제가 되도록 함께해 주세요!"
      />
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </Wrapper>
  );
};

export default index;
