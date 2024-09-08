import React, { useState } from "react";
import * as S from "./Style";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const Search = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const { isDesktop, isMobile } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const { t } = useTranslation();

  const keywordChangeHandler = (event) => {
    setKeyword(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <S.SearchWrapper $isDesktop={isDesktop} as="form" onSubmit={handleSubmit}>
      <S.SearchContainer $isMobile={isMobile}>
        <S.SearchInput
          placeholder={t(`notice.search`)}
          type="text"
          value={keyword}
          onChange={keywordChangeHandler}
        />
        <S.SearchIcon
          src={`${mediaUrl}Notification/SearchIcon.png`}
          onClick={handleSubmit}
        />
      </S.SearchContainer>

      {results && results.length === 0 && (
        <S.NoResults>등록된 게시글이 없습니다.</S.NoResults>
      )}
    </S.SearchWrapper>
  );
};

export default Search;
