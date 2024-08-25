import React from "react";
import styled from "styled-components";
import MainTitle from "../../../components/ui/MainTitle";
import { ContentWrapper } from "../../../style/commonStyle";
import Content from "./Content.jsx";

const Wrapper = styled.div``;

const index = () => {
  return (
    <Wrapper>
      <MainTitle title="공지사항" />
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </Wrapper>
  );
};

export default index;
