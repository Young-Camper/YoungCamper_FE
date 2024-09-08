import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import ImageModal from "./ImageModal";
import useMediaQueries from "../../../hooks/useMediaQueries";
import * as S from "../components/CommentStyle";
import { deleteReview } from "../../../lib/apis/api/deleteReview";
import { useTranslation } from "react-i18next";

const Comment = ({ comment, onDelete, sequenceNumber }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const { t } = useTranslation();

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async (password) => {
    try {
      const response = await deleteReview(comment.id, password);

      if ((response.status = 200)) {
        alert(t("review.deletealert")); // 한글 "리뷰가 삭제 되었습니다." -> 후기가 삭제~
        onDelete();
      } else {
        alert(t("review.deletefail"));
      }
    } catch (error) {
      console.error("Error deleting review:", error);

      if ((error.status = 400)) {
        alert(t("review.notmatch"));
      }
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setIsImageModalOpen(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  };

  const decodeHtmlEntities = (text) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
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
          {sequenceNumber}
        </S.CommentNumber>
      </S.CommentHeader>
      <S.CommentText
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        {decodeHtmlEntities(comment.content)}
      </S.CommentText>

      {comment.imageUrls && comment.imageUrls.length > 0 && (
        <S.CommentContent
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          {comment.imageUrls.map((url, index) => (
            <S.ImageWrapper
              key={index}
              $isMobile={isMobile}
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              $image={url}
              onClick={() => handleImageClick(url)}
            />
          ))}
        </S.CommentContent>
      )}

      <S.CommentFooter>
        <S.CommentDate
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          {formatDate(comment.createdAt)}
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
      {isImageModalOpen && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setIsImageModalOpen(false)}
        />
      )}
    </S.CommentBox>
  );
};

export default Comment;
