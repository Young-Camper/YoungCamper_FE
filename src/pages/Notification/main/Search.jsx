import React, { useState } from "react";
import * as S from "./Style";
import SearchIcon from "../../../assets/images/Notification/SearchIcon.png";
import useMediaQueries from "../../../hooks/useMediaQueries";

const Search = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const { isDesktop } = useMediaQueries();

  const keywordChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <S.SearchWrapper $isDesktop={isDesktop} as="form" onSubmit={handleSubmit}>
      <S.SearchContainer>
        <S.SearchInput
          placeholder="검색어를 입력해주세요."
          type="text"
          value={keyword}
          onChange={keywordChangeHandler}
        />
        <S.SearchIcon src={SearchIcon} onClick={handleSubmit} />
      </S.SearchContainer>
    </S.SearchWrapper>
  );
};

export default Search;
