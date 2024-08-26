import React, { useState } from "react";
import * as S from "./Style";
import Subtitle from "./Subtitle";
import data from "../../../data/notice.json";
import Urgent from "./Urgent";
import { Link } from "react-router-dom";

const Content = ({ keyword }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const maxPage = 5; // 최대 페이지 번호 수

  // 필독 공지, 일반 공지 분리
  const urgentItems = data.filter((item) => item.urgent === "yes");
  const regularItems = data.filter((item) => item.urgent !== "yes");

  // 검색어에 맞는 필독 공지 필터링
  const filteredUrgentItems = urgentItems.filter(
    (item) =>
      (item.title &&
        item.title.toLowerCase().includes(keyword.toLowerCase())) ||
      (item.content &&
        item.content.toLowerCase().includes(keyword.toLowerCase()))
  );

  // 검색어에 맞는 일반 공지 필터링
  const filteredRegularItems = regularItems.filter(
    (item) =>
      (item.title &&
        item.title.toLowerCase().includes(keyword.toLowerCase())) ||
      (item.content &&
        item.content.toLowerCase().includes(keyword.toLowerCase()))
  );

  // 검색된 필독 공지 + 검색된 일반 공지
  const filteredItems = [...filteredUrgentItems, ...filteredRegularItems];

  // 현재 페이지에 맞는 데이터 계산
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;

    // 필독 공지사항 개수
    const urgentCount = urgentItems.length;

    // 현재 페이지에서 표시할 일반 공지사항 (필독 제외)
    const regularItemsForCurrentPage = filteredRegularItems.slice(
      startIndex,
      startIndex + Math.max(itemsPerPage - urgentCount, 0)
    );

    return [...urgentItems, ...regularItemsForCurrentPage];
  };

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(
    (filteredRegularItems.length + urgentItems.length) / itemsPerPage
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
        {/* 필독 공지사항 표시 */}
        {filteredUrgentItems.slice(0, itemsPerPage).map((item, index) => (
          <Link to={`/notification/${item.num}`}>
            <Subtitle num={<Urgent />} title={item.title} date={item.date} />
          </Link>
        ))}
        {filteredItems.length > 0 ? (
          currentItems.slice(urgentItems.length).map((item, index) => (
            <Link to={`/notification/${item.num}`}>
              <Subtitle num={item.num} title={item.title} date={item.date} />
            </Link>
          ))
        ) : (
          <S.NoResults>등록된 게시글이 없습니다.</S.NoResults>
        )}
      </S.ContentContainer>
      {filteredItems.length > 0 && (
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
      )}
    </S.ContentWrapper>
  );
};

export default Content;
