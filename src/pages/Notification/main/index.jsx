import React, { useState } from "react";
import { ContentWrapper } from "../../../style/commonStyle";
import styled from "styled-components";
import Search from "./Search";
import Content from "./Content";
import MainTitle from "../../../components/ui/MainTitle";

import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  width: 100%;
`;

const index = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const { t } = useTranslation();

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <Wrapper>
      <MainTitle
        mainText={t(`notice.maintitle`)}
        subText={t(`notice.subTitle`)}
      />
      <ContentWrapper>
        <Search onSearch={handleSearch} />
        <Content keyword={searchKeyword} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default index;
