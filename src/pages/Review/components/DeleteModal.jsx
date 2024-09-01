import React, { useState } from "react";

import useMediaQueries from "../../../hooks/useMediaQueries";

import * as S from "../components/CommentStyle";

const DeleteModal = ({ onClose, onConfirm }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // 비밀번호 입력 시 상태 업데이트
  const handlePasswordChange = (e) => {
    setPassword(e.target.value.replace(/\D/g, "")); // 숫자가 아닌 입력 제거
  };

  // 가시성 변경 함수
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <S.ModalWrapper>
      <S.ModalContent
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <S.ModalBox
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <S.ModalText
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            후기를 삭제하려면 <br />
            비밀번호 4자리를 입력해주세요!
          </S.ModalText>
          <S.PasswordInputWrapper>
            <S.PasswordInput
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              maxLength={4}
              inputMode="numeric"
              pattern="[0-9]*"
            />
            <S.PasswordIcon
              onClick={togglePasswordVisibility}
              $isMobile={isMobile}
            >
              <S.PasswordIconImage
                src={
                  isPasswordVisible
                    ? `${mediaUrl}Review/viewnum.png`
                    : `${mediaUrl}Review/visnum.png`
                }
                alt="toggle view"
              />
            </S.PasswordIcon>
          </S.PasswordInputWrapper>
          <S.ModalActions
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            <S.CancelButton onClick={onClose}>취소</S.CancelButton>
            <S.ConfirmButton onClick={onConfirm}>확인</S.ConfirmButton>
          </S.ModalActions>
        </S.ModalBox>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default DeleteModal;
