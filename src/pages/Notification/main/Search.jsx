import React, { useState } from "react";
import * as S from "./Style";
import SearchIcon from "../../../assets/images/Notification/SearchIcon.png";
import useMediaQueries from "../../../hooks/useMediaQueries";

const Search = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const { isDesktop } = useMediaQueries();

  const keywordChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchResults = await onSearch(keyword);
    setResults(searchResults);
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

      {results && results.length === 0 && (
        <S.NoResults>등록된 게시글이 없습니다.</S.NoResults>
      )}
    </S.SearchWrapper>
  );
};

export default Search;
