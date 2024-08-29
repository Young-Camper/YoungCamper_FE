import React, { useState } from "react";

//components
import DeleteModal from "./DeleteModal";

//hooks
import useMediaQueries from "../../../hooks/useMediaQueries";

//styles
import trash from "../assets/trash.svg";
import {
  CommentBox,
  CommentHeader,
  CommentNumber,
  CommentText,
  CommentContent,
  CommentFooter,
  CommentDate,
  CommentActions,
  DeleteIconContainer,
  DeleteText,
  CommentDivider,
  ImageWrapper,
} from "../components/CommentStyle";

const Comment = ({ comment }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

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
    <CommentBox
      $isMobile={isMobile}
      $isTablet={isTablet}
      $isDesktop={isDesktop}
    >
      <CommentHeader>
        <CommentNumber
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          {comment.id}
        </CommentNumber>
      </CommentHeader>
      <CommentText
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        {comment.text}
      </CommentText>

      {/* 이미지가 있을 때만 보여주기 */}
      {comment.image && (
        <CommentContent>
          <ImageWrapper
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            image={comment.image}
          >
            {/* <ImagePlaceholder>+</ImagePlaceholder> */}
          </ImageWrapper>
        </CommentContent>
      )}

      <CommentFooter>
        <CommentDate
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          {comment.date}
        </CommentDate>
        <CommentActions>
          <DeleteIconContainer onClick={handleDeleteClick}>
            <img src={trash} alt="Delete Icon" width="17" height="17" />
          </DeleteIconContainer>
          <DeleteText
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            삭제
          </DeleteText>
        </CommentActions>
      </CommentFooter>
      <CommentDivider />
      {isModalOpen && (
        <DeleteModal
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      )}
    </CommentBox>
  );
};

export default Comment;
