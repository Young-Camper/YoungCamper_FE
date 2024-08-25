import React, { useState } from "react";
import * as S from "./Style";
import Subtitle from "./Subtitle";
import data from "../../../data/notice.json";

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const maxPage = 5;

  // 전체 페이지 수 계산
  const totalPage = Math.ceil(data.length / itemsPerPage);

  // 현재 페이지에 맞는 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(maxPage / 2), totalPage - maxPage + 1)
  );
  const endPage = Math.min(totalPage, startPage + maxPage - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPage));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.ContentWrapper>
      <Subtitle
        num="번호"
        title="제목"
        date="날짜"
        $paddingBottom="0"
        color="black"
        $fontWeight="700"
        $marginTop="0"
        $marginBottom="0"
      />
      <S.ContentContainer>
        {currentItems.map((item, index) => (
          <Subtitle
            key={index}
            num={item.num}
            title={item.title}
            date={item.date}
          />
        ))}
      </S.ContentContainer>
      <S.Pagination>
        {startPage > 1 && (
          <S.PageArrow onClick={handlePrevClick}>&lt;</S.PageArrow>
        )}
        {pageNumbers.map((number) => (
          <S.PageNumber
            key={number}
            $isActive={number === currentPage}
            onClick={() => handleClick(number)}
          >
            {number}
          </S.PageNumber>
        ))}
        {endPage < totalPage && (
          <S.PageArrow onClick={handleNextClick}>&gt;</S.PageArrow>
        )}
      </S.Pagination>
    </S.ContentWrapper>
  );
};

export default Content;
