import React, { useState } from "react";
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
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  const urgentItems = data.filter((item) => item.urgent === "yes");
  const regularItems = data.filter((item) => item.urgent !== "yes");

  const filteredUrgentItems = urgentItems.filter(
    (item) =>
      (item.title &&
        item.title.toLowerCase().includes(keyword.toLowerCase())) ||
      (item.content &&
        item.content.toLowerCase().includes(keyword.toLowerCase()))
  );

  const filteredRegularItems = regularItems.filter(
    (item) =>
      (item.title &&
        item.title.toLowerCase().includes(keyword.toLowerCase())) ||
      (item.content &&
        item.content.toLowerCase().includes(keyword.toLowerCase()))
  );

  const filteredItems = [...filteredUrgentItems, ...filteredRegularItems];

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const urgentCount = urgentItems.length;
    const regularItemsForCurrentPage = filteredRegularItems.slice(
      startIndex,
      startIndex + Math.max(itemsPerPage - urgentCount, 0)
    );
    return [...urgentItems, ...regularItemsForCurrentPage];
  };

  const totalPages = Math.ceil(
    (filteredRegularItems.length + urgentItems.length) / itemsPerPage
  );

  const currentItems = getCurrentPageItems();

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
    <S.ContentWrapper $isDesktop={isDesktop}>
      <Subtitle
        num="번호"
        title="제목"
        date={isDesktop ? "날짜" : null}
        $paddingBottom="0"
        color="black"
        $fontWeight="700"
        $marginTop="0"
        $marginBottom="0"
        fontSize="16px"
        isDesktop={isDesktop}
        isTablet={isTablet}
        gap="0px"
      />
      <S.ContentContainer>
        {filteredUrgentItems.slice(0, itemsPerPage).map((item) => (
          <Link to={`/notification/${item.num}`} key={item.num}>
            <Subtitle
              num={<Urgent />}
              title={item.title}
              date={item.date}
              fontSize={isDesktop ? "24px" : "18px"}
              isDesktop={isDesktop}
              isTablet={isTablet}
            />
          </Link>
        ))}
        {filteredItems.length > 0 ? (
          currentItems.slice(urgentItems.length).map((item) => (
            <Link to={`/notification/${item.num}`} key={item.num}>
              <Subtitle
                num={item.num}
                title={item.title}
                date={item.date}
                fontSize={isDesktop ? "24px" : "18px"}
                isDesktop={isDesktop}
                isTablet={isTablet}
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
