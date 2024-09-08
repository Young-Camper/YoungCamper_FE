import React from "react";
import * as S from "./CommentStyle";
import useMediaQueries from "../../../hooks/useMediaQueries";

const ImageModal = ({ imageUrl, onClose }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ImageModalContent
        $isMobile={isMobile}
        onClick={(e) => e.stopPropagation()}
      >
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        <S.Image src={imageUrl} alt="큰 이미지" />
      </S.ImageModalContent>
    </S.ModalOverlay>
  );
};

export default ImageModal;
