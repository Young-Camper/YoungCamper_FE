import React, { useState } from "react";

// Components
import DeleteModal from "./DeleteModal";

// Hooks
import useMediaQueries from "../../../hooks/useMediaQueries";

// Styles
import * as S from "../components/CommentStyle";

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

  const handleConfirmDelete = () => {
    // 실제 삭제 로직 추가 예정
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
        {comment.text}
      </S.CommentText>

      {/* 이미지가 있을 때만 보여주기 */}
      {comment.image && (
        <S.CommentContent>
          <S.ImageWrapper
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            image={comment.image}
          ></S.ImageWrapper>
        </S.CommentContent>
      )}

      <S.CommentFooter>
        <S.CommentDate
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          {comment.date}
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
          onConfirm={handleConfirmDelete}
        />
      )}
    </S.CommentBox>
  );
};

export default Comment;
