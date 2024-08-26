import React, { useState } from "react";
import MainTitle from "../../../components/ui/MainTitle";
import { ContentWrapper } from "../../../style/commonStyle";
import styled from "styled-components";
import Search from "./Search";
import Content from "./Content";

const Wrapper = styled.div``;

const Index = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <Wrapper>
      <MainTitle title="공지사항" />
      <ContentWrapper>
        <Search onSearch={handleSearch} />
        <Content keyword={searchKeyword} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Index;
