import React, { useEffect } from "react";
import * as S from "./CommentStyle";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { useBodyScrollLock } from "../hooks/useBodtScrollLock";

const ImageModal = ({ imageUrl, onClose }) => {
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const { isMobile } = useMediaQueries();
  const { lockScroll, openScroll } = useBodyScrollLock(); // 스크롤 잠금 훅 사용

  useEffect(() => {
    lockScroll(); // 모달이 열릴 때 스크롤 잠금

    return () => {
      openScroll(); // 모달이 닫힐 때 스크롤 해제
    };
  }, [lockScroll, openScroll]);

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ImageModalContent
        $isMobile={isMobile}
        onClick={(e) => e.stopPropagation()}
      >
        <S.CloseButton onClick={onClose}>
          <img src={`${mediaUrl}Review/delete-circle.svg`} alt="Close" />
        </S.CloseButton>
        <img src={imageUrl} alt="큰 이미지" />
      </S.ImageModalContent>
    </S.ModalOverlay>
  );
};

export default ImageModal;
