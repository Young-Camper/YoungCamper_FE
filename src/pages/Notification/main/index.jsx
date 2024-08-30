import React, { useState } from "react";
import { ContentWrapper } from "../../../style/commonStyle";
import styled from "styled-components";
import Search from "./Search";
import Content from "./Content";
import MainTitle from "../../../components/ui/MainTitle";

const Wrapper = styled.div`
  width: 100%;
`;

const index = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <Wrapper>
      <MainTitle
        mainText="공지사항"
        subText="아래 내용을 꼭 확인하시고, 모두가 즐거운 축제가 되도록 함께해 주세요!"
      />
      <ContentWrapper>
        <Search onSearch={handleSearch} />
        <Content keyword={searchKeyword} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default index;
