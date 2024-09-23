import React, { useState, useRef, useEffect } from "react";
import * as S from "./Style";
import Subtitle from "./Subtitle";
import Urgent from "./Urgent";
import { Link } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";
import Loading from "../../../components/ui/Loading";
import { searchNotice } from "../../../lib/apis/api/searchNotice";
import { getAnnouncements } from "../../../lib/apis/api/getAnnouncements";
import { useTranslation } from "react-i18next";

const Content = ({ keyword }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;
  const maxPage = 5;
  const { isTablet, isDesktop, isMobile } = useMediaQueries();
  const contentWrapperRef = useRef(null);

  const { t, i18n } = useTranslation();

  // 현재 언어 코드
  const currentLanguage = i18n.language;
  // const isEnglish = lang === "en";

  // 공지사항 리스트 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnnouncements(currentLanguage);
        setData(response.data.data);
      } catch (error) {
        // console.error("Error fetching announcements:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentLanguage]);

  // 공지 검색
  useEffect(() => {
    if (keyword) {
      const fetchSearchData = async () => {
        setLoading(true);
        try {
          const response = await searchNotice(keyword, currentLanguage);
          setData(response.data.data);
        } catch (error) {
          // console.error("Error searching notices:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchSearchData();
    }
  }, [keyword, currentLanguage]);

  // ============ 공지사항 필더링 부분 =====================
  const filteredUrgentItems = data.filter(
    (item) =>
      item.isPinned === true &&
      ((item.title?.toLowerCase() || "").includes(keyword.toLowerCase()) ||
        (item.content?.toLowerCase() || "").includes(keyword.toLowerCase()))
  );

  const filteredRegularItems = data.filter(
    (item) =>
      item.isPinned !== true &&
      ((item.title?.toLowerCase() || "").includes(keyword.toLowerCase()) ||
        (item.content?.toLowerCase() || "").includes(keyword.toLowerCase()))
  );

  // 최신순으로 정렬
  const sortedUrgentItems = [...filteredUrgentItems].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const sortedRegularItems = [...filteredRegularItems].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // num 매기기
  const numberedRegularItems = sortedRegularItems.map((item, index) => ({
    ...item,
    num: sortedRegularItems.length - index,
  }));

  // 긴급 공지사항과 일반 공지사항을 결합
  const combinedItems = [...sortedUrgentItems, ...numberedRegularItems];

  // 페이지당 아이템 가져오기
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return combinedItems.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentPageItems();

  //글자수 관리
  // 제목이 모바일에서 18자를 넘으면 "..." 처리
  const truncateTitle = (title) => {
    return isMobile && title.length > 20 ? title.slice(0, 20) + "..." : title;
  };

  //============= 페이지네이션 부분 =====================

  const totalPages = Math.ceil(combinedItems.length / itemsPerPage);

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

  // 받아오는 날짜 데이터 포맷팅
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  return (
    <S.ContentWrapper
      $isDesktop={isDesktop}
      $isMobile={isMobile}
      ref={contentWrapperRef}
    >
      {/* 제목 표시 부분 */}
      <Subtitle
        num={t(`notice.num`)}
        title={t(`notice.title`)}
        date={isDesktop ? t(`notice.date`) : null}
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
        {loading ? (
          <Loading />
        ) : currentItems.length > 0 ? (
          currentItems.map((item) => (
            <Link to={`/notification/${item.id}`} key={item.id}>
              <Subtitle
                num={item.isPinned ? <Urgent /> : item.num}
                title={truncateTitle(item.title)}
                date={formatDate(item.createdAt)}
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
          <S.NoResults>{t(`notice.noresult`)}</S.NoResults>
        )}
      </S.ContentContainer>
      {combinedItems.length > 0 && (
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
