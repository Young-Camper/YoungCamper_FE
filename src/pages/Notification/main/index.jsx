import React, { useState } from "react";
import MainTitle from "../../../components/ui/MainTitle";
import { ContentWrapper } from "../../../style/commonStyle";
import styled from "styled-components";
import Search from "./Search";
import Content from "./Content";
import TitleSet from "../../../components/ui/TitleSet";

const Wrapper = styled.div``;

const index = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <TitleSet
          mainText="공지사항"
          subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
        />
        <Search onSearch={handleSearch} />
        <Content keyword={searchKeyword} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default index;
