import React, { useState, useRef } from "react";
import * as S from "./Style";
import Subtitle from "./Subtitle";
import data from "../../../data/notice.json";
import Urgent from "./Urgent";
import { Link } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";

const Content = ({ keyword }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const maxPage = 5;
  const { isTablet, isDesktop, isMobile } = useMediaQueries();
  const contentWrapperRef = useRef(null);

  // 공지사항 필터링 (긴급 및 일반 공지)
  const filteredUrgentItems = data.filter(
    (item) =>
      item.urgent === "yes" &&
      (item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.content.toLowerCase().includes(keyword.toLowerCase()))
  );

  const filteredRegularItems = data.filter(
    (item) =>
      item.urgent !== "yes" &&
      (item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.content.toLowerCase().includes(keyword.toLowerCase()))
  );

  // 필터링된 공지사항을 합침 (긴급 공지사항이 상단에 고정되도록)
  const filteredItems = [...filteredUrgentItems, ...filteredRegularItems];

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredItems.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentPageItems();

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(maxPage / 2), totalPages - maxPage + 1)
  );
  const endPage = Math.min(totalPages, startPage + maxPage - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const scrollToContentWrapper = () => {
    if (contentWrapperRef.current) {
      const topPosition =
        contentWrapperRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - 30, behavior: "smooth" });
    }
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollToContentWrapper();
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollToContentWrapper();
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollToContentWrapper();
  };

  return (
    <S.ContentWrapper
      $isDesktop={isDesktop}
      $isMobile={isMobile}
      ref={contentWrapperRef}
    >
      <Subtitle
        num="번호"
        title="제목"
        date={isDesktop ? "날짜" : null}
        color="black"
        fontFamily="MonSemiBold"
        fontWeight="600"
        $marginTop="0"
        $marginBottom="0"
        fontSize="16px"
        isDesktop={isDesktop}
        isTablet={isTablet}
        gap="0px"
      />
      <S.ContentContainer>
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <Link to={`/notification/${item.num}`} key={`${item.num}-${index}`}>
              <Subtitle
                num={item.urgent === "yes" ? <Urgent /> : item.num}
                title={item.title}
                date={item.date}
                fontSize={isDesktop ? "22px" : "18px"}
                isDesktop={isDesktop}
                isTablet={isTablet}
                isMobile={isMobile}
                paddingBottom="25px"
                paddingTop="25px"
              />
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
