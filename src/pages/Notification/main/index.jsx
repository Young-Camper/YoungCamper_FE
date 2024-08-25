import React from "react";
import MainTitle from "../../../components/ui/MainTitle";
import { ContentWrapper } from "../../../style/commonStyle";
import styled from "styled-components";
import Search from "./Search";
import Content from "./Content";

const Wrapper = styled.div``;

const index = () => {
  return (
    <Wrapper>
      <MainTitle title="공지 사항" />
      <ContentWrapper>
        <Search />
        <Content />
      </ContentWrapper>
    </Wrapper>
  );
};

export default index;
