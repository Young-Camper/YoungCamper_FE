import React, { useState, useEffect, useRef } from "react";
import Comment from "./CommentItem";
import {
  CommentsContainer,
  PaginationContainer,
  PageButton,
  CurrentPageButton,
} from "../components/CommentStyle";
import { getReviews } from "../../../lib/apis/api/getReviews";
import Loading from "../../../components/ui/Loading";

const itemsPerPage = 5;
const maxPageButtons = 5;

const CommentSection = ({ refresh }) => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const commentsRef = useRef(null);
  const isFetching = useRef(false);

  const fetchComments = async (page = 1, forceFirstPage = false) => {
    if (isFetching.current) return;
    isFetching.current = true;
    setLoading(true);
    try {
      const fetchPage = forceFirstPage ? 1 : page;
      const data = await getReviews(
        fetchPage - 1,
        itemsPerPage,
        "createdAt,desc"
      );

      if (data && data.content) {
        const processedComments = data.content.map((comment) => ({
          ...comment,
          imageUrls: comment.imageUrls.map((url) => url.replace(/\s/g, "%20")),
        }));
        setComments(processedComments);
        setTotalPages(data.totalPages);
      } else {
        console.error("Unexpected data structure:", data);
        setComments([]);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  };

  // 새 리뷰 등록 시 무조건 1페이지로 이동 및 페치
  useEffect(() => {
    if (refresh) {
      setCurrentPage(1);
      fetchComments(1, true);
    }
  }, [refresh]);

  // 현재 페이지 변경 시 댓글 페치
  useEffect(() => {
    fetchComments(currentPage);
  }, [currentPage]);

  // comments 상태가 변경되면 리렌더링
  useEffect(() => {
    if (comments.length === 0 && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [comments]);

  const getPageRange = () => {
    const start =
      Math.floor((currentPage - 1) / maxPageButtons) * maxPageButtons + 1;
    const end = Math.min(start + maxPageButtons - 1, totalPages);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    if (commentsRef.current) {
      commentsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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

  const handleDeleteComment = () => {
    fetchComments(currentPage); // 현재 페이지를 다시 불러옴
  };

  return loading ? (
    <Loading />
  ) : (
    <CommentsContainer ref={commentsRef}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={handleDeleteComment}
        />
      ))}
      <PaginationContainer>
        {currentPage > maxPageButtons && (
          <PageButton onClick={handlePrevPageGroup}>{"<"}</PageButton>
        )}
        {getPageRange().map((page) =>
          page === currentPage ? (
            <CurrentPageButton key={page}>{page}</CurrentPageButton>
          ) : (
            <PageButton key={page} onClick={() => handlePageClick(page)}>
              {page}
            </PageButton>
          )
        )}
        {Math.floor((currentPage - 1) / maxPageButtons) <
          Math.floor((totalPages - 1) / maxPageButtons) && (
          <PageButton onClick={handleNextPageGroup}>{">"}</PageButton>
        )}
      </PaginationContainer>
    </CommentsContainer>
  );
};

export default CommentSection;
