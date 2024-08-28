import React from "react"
import * as S from "./style";

const Pagenation = ({ itemsPerPage, currentPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  } // 전체 페이지 수만큼 페이지 번호 배열 생성

  return (
    <S.PagenationWrapper>
	  {/* 페이지 번호 버튼 생성 */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
    </S.PagenationWrapper>
  );
};

export default Pagenation;