import React, { useState, useEffect, useRef } from "react";
import CommentItem from "./CommentItem";
import {
  CommentsContainer,
  PaginationContainer,
  PageButton,
  CurrentPageButton,
} from "../components/CommentStyle";

import { getReviews } from "../../../lib/apis/api/getReviews";

const itemsPerPage = 5; // 페이지 당 댓글 수
const maxPageButtons = 5; // 한 번에 보여줄 페이지 버튼 수

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const commentsRef = useRef(null); // 섹션 상단으로 스크롤하기 위한 ref

  // API를 통해 리뷰 데이터를 불러오는 함수
  const fetchComments = async (page = 1) => {
    try {
      // API 호출
      const data = await getReviews(page - 1, itemsPerPage, "createdAt,desc");

      if (data && data.content) {
        setComments(data.content); // 리뷰 목록 설정
        setTotalPages(data.totalPages); // 전체 페이지 수 설정
      } else {
        console.error("Unexpected data structure:", data);
        setComments([]); // 응답 데이터가 없거나 구조가 다를 경우 빈 배열로 설정
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments(currentPage); // 현재 페이지의 리뷰를 불러옴
  }, [currentPage]);

  // 페이지 네비게이션 버튼 범위 계산
  const getPageRange = () => {
    const start =
      Math.floor((currentPage - 1) / maxPageButtons) * maxPageButtons + 1;
    const end = Math.min(start + maxPageButtons - 1, totalPages);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  // 페이지 변경 핸들러
  const handlePageClick = (page) => {
    setCurrentPage(page); // 현재 페이지 설정
    if (commentsRef.current) {
      commentsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // 다음 페이지 그룹으로 이동
  const handleNextPageGroup = () => {
    const nextPage = Math.min(currentPage + maxPageButtons, totalPages);
    setCurrentPage(nextPage);
    if (commentsRef.current) {
      commentsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // 이전 페이지 그룹으로 이동
  const handlePrevPageGroup = () => {
    const prevPage = Math.max(currentPage - maxPageButtons, 1);
    setCurrentPage(prevPage);
    if (commentsRef.current) {
      commentsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <CommentsContainer ref={commentsRef}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      {/* 페이지 네비게이션 */}
      <PaginationContainer>
        {/* 이전 그룹으로 이동하는 버튼 */}
        {currentPage > maxPageButtons && (
          <PageButton onClick={handlePrevPageGroup}>{"<"}</PageButton>
        )}
        {/* 페이지 버튼 */}
        {getPageRange().map((page) =>
          page === currentPage ? (
            <CurrentPageButton key={page}>{page}</CurrentPageButton>
          ) : (
            <PageButton key={page} onClick={() => handlePageClick(page)}>
              {page}
            </PageButton>
          )
        )}
        {/* 다음 그룹으로 이동하는 버튼 */}
        {Math.floor((currentPage - 1) / maxPageButtons) <
          Math.floor((totalPages - 1) / maxPageButtons) && (
          <PageButton onClick={handleNextPageGroup}>{">"}</PageButton>
        )}
      </PaginationContainer>
    </CommentsContainer>
  );
};

export default CommentSection;
