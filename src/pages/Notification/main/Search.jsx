import { useState } from "react";
import * as S from "./Style";
import SearchIcon from "../../../assets/images/Notification/SearchIcon.png";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  //추후 변경 필요
  const keywordChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(keyword);
  };

  return (
    <S.SearchWrapper as="form" onSubmit={handleSubmit}>
      <S.SearchContainer>
        <S.SearchInput
          placeholder="검색어를 입력해주세요."
          type="text"
          value={keyword}
          onChange={keywordChangeHandler}
        />
        <S.SearhIcon src={SearchIcon} onClick={handleSubmit} />
      </S.SearchContainer>
    </S.SearchWrapper>
  );
};

export default Search;
