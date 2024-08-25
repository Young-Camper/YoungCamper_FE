import React, { useState } from "react";
import * as S from "./Style";
import Subtitle from "./Subtitle";
import data from "../../../data/notice.json";
import Urgent from "./Urgent";

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const maxPage = 5; // 최대 페이지 번호 수

  // 필독 공지, 일반 공지 분리
  const urgentItems = data.filter((item) => item.urgent === "yes");
  const regularItems = data.filter((item) => item.urgent !== "yes");

  // 현재 페이지에 맞는 데이터 계산
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;

    //필독 공지사항 개수
    const urgentCount = urgentItems.length;

    //일반 공지사항 개수
    const regularCount = Math.max(itemsPerPage - urgentCount, 0);

    return [
      ...urgentItems, // 필독 공지
      ...regularItems.slice(startIndex, startIndex + regularCount), // 일반 공지
    ];
  };

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(
    (regularItems.length + urgentItems.length) / itemsPerPage
  );

  // 현재 페이지에 맞는 데이터 계산
  const currentItems = getCurrentPageItems();

  // 현재 보여줄 페이지 번호 범위 계산
  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(maxPage / 2), totalPages - maxPage + 1)
  );
  const endPage = Math.min(totalPages, startPage + maxPage - 1);

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
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
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
        {/* 현재 페이지의 필독 공지 */}
        {urgentItems.slice(0, itemsPerPage).map((item, index) => (
          <Subtitle
            key={`urgent-${index}`}
            num={<Urgent />}
            title={item.title}
            date={item.date}
          />
        ))}
        {/* 현재 페이지의 일반 공지 */}
        {currentItems.slice(urgentItems.length).map((item, index) => (
          <Subtitle
            key={`regular-${index}`}
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
        {endPage < totalPages && (
          <S.PageArrow onClick={handleNextClick}>&gt;</S.PageArrow>
        )}
      </S.Pagination>
    </S.ContentWrapper>
  );
};

export default Content;
