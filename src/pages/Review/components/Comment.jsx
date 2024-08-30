// Comment.jsx
import React, { useState } from "react";
import CommentItem from "./CommentItem";
import {
  CommentsContainer,
  PaginationContainer,
  PageButton,
  CurrentPageButton,
} from "../components/CommentStyle";

// 더미 데이터 생성
const dummyComments = [
  { id: 1, text: "영캠프 짱이예요.", date: "2024.08.02 18:23:24", image: null },
  {
    id: 2,
    text: "영캠프 짱이에요.",
    date: "2024.08.02 18:23:24",
    image: "https://via.placeholder.com/107x107",
  },
  {
    id: 3,
    text: "후기 작성이 쉽네요.",
    date: "2024.08.02 18:23:24",
    image: null,
  },
  {
    id: 4,
    text: "다시 참여하고 싶어요!",
    date: "2024.08.02 18:23:24",
    image: null,
  },
  {
    id: 5,
    text: "최고의 캠프였어요.",
    date: "2024.08.02 18:23:24",
    image: "https://via.placeholder.com/107x107",
  },
  { id: 6, text: "매년 기대됩니다.", date: "2024.08.02 18:23:24", image: null },
];

const itemsPerPage = 5; // 페이지 당 댓글 수

const Comment = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지에 보여줄 댓글을 계산
  const currentItems = dummyComments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(dummyComments.length / itemsPerPage);

  // 페이지 변경 핸들러
  const handlePageClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <CommentsContainer>
      {currentItems.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      {/* 페이지 네비게이션 */}
      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
          page === currentPage ? (
            <CurrentPageButton key={page}>{page}</CurrentPageButton>
          ) : (
            <PageButton key={page} onClick={() => handlePageClick(page)}>
              {page}
            </PageButton>
          )
        )}
      </PaginationContainer>
    </CommentsContainer>
  );
};

export default Comment;
