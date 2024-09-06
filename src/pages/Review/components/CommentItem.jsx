import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import useMediaQueries from "../../../hooks/useMediaQueries";
import * as S from "../components/CommentStyle";
import { deleteReview } from "../../../lib/apis/api/deleteReview";
import { useTranslation } from "react-i18next";

const Comment = ({ comment, onDelete }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);
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

        if (typeof onDelete === "function") {
          // console.log("onDelete 함수가 호출됩니다."); // 추가 디버깅 로그
          onDelete(comment.id); // 삭제된 댓글의 ID를 부모 컴포넌트로 전달
        } else {
          // console.error("onDelete가 함수가 아닙니다. onDelete:", onDelete);
        }
      } else {
        // console.error(
        //   `Unexpected response structure or status: ${response.data}`
        // );
        alert(t("review.deletefail"));
      }
    } catch (error) {
      // console.error("리뷰 삭제 실패:", error);
      alert(t("review.notmatch"));
    }
    setIsModalOpen(false); // 모달을 닫습니다.
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  }

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
        {comment.content}
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
    </S.CommentBox>
  );
};

export default Comment;
