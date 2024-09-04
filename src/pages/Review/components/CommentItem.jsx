// Comment.js
import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import useMediaQueries from "../../../hooks/useMediaQueries";
import * as S from "../components/CommentStyle";
import { deleteReview } from "../../../lib/apis/api/deleteReview";

const Comment = ({ comment }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  // 삭제 모달 로직
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async (password) => {
    try {
      // 리뷰 삭제 API 호출
      await deleteReview(comment.id, password);
      alert("리뷰가 성공적으로 삭제되었습니다.");
      // 여기에 리뷰 삭제 후 목록 갱신을 위한 로직 추가 예정
    } catch (error) {
      console.error("리뷰 삭제 실패:", error);
      alert("리뷰 삭제에 실패하였습니다.");
    }
    setIsModalOpen(false);
  };

  return (
    <S.CommentBox
      $isMobile={isMobile}
      $isTablet={isTablet}
      $isDesktop={isDesktop}
    >
      <S.CommentHeader>
        <S.CommentNumber
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          {comment.id}
        </S.CommentNumber>
      </S.CommentHeader>
      <S.CommentText
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        {comment.content}
      </S.CommentText>

      {/* 이미지가 있을 때만 보여주기 */}
      {comment.imageUrls && comment.imageUrls.length > 0 && (
        <S.CommentContent>
          <S.ImageWrapper
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            image={comment.imageUrls[0]} // 첫 번째 이미지만 표시 (필요 시 다른 로직 적용 가능)
          ></S.ImageWrapper>
        </S.CommentContent>
      )}

      <S.CommentFooter>
        <S.CommentDate
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          {comment.createdAt}
        </S.CommentDate>
        <S.CommentActions>
          <S.DeleteIconContainer onClick={handleDeleteClick}>
            <img
              src={`${mediaUrl}Review/trash.png`}
              alt="Delete Icon"
              width="17"
              height="17"
            />
          </S.DeleteIconContainer>
          <S.DeleteText
            onClick={handleDeleteClick}
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            삭제
          </S.DeleteText>
        </S.CommentActions>
      </S.CommentFooter>
      <S.CommentDivider />
      {isModalOpen && (
        <DeleteModal
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete} // 비밀번호를 받아 삭제 처리
        />
      )}
    </S.CommentBox>
  );
};

export default Comment;
