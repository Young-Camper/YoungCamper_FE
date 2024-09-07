import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import ImageModal from "./ImageModal";
import useMediaQueries from "../../../hooks/useMediaQueries";
import * as S from "../components/CommentStyle";
import { deleteReview } from "../../../lib/apis/api/deleteReview";
import { useTranslation } from "react-i18next";

const Comment = ({ comment, onDelete }) => {
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
        alert(t("review.deletealert"));
        onDelete();
      } else {
        alert(t("review.deletefail"));
      }
    } catch (error) {
      // Error 객체의 구조와 내용을 명확히 출력
      console.error("Error deleting review:", error);

      if (error.response) {
        // 서버로부터의 응답이 있는 경우
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        alert(`Error: ${error.response.data.message || t("review.notmatch")}`);
      } else if (error.request) {
        // 요청이 만들어졌지만 서버에서 응답이 없을 경우
        console.error("No response received:", error.request);
        alert("서버로부터 응답이 없습니다.");
      } else {
        // 요청 설정 중에 오류가 발생한 경우
        console.error("Error setting up the request:", error.message);
        alert(`요청 오류: ${error.message}`);
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
          {comment.sequence}
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
