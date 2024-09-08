import React, { useState, useEffect } from "react";
import useMediaQueries from "../../../hooks/useMediaQueries";
import * as S from "../components/CommentStyle";
import { useTranslation } from "react-i18next";
import { useBodyScrollLock } from "../hooks/useBodtScrollLock";

const DeleteModal = ({ onClose, onConfirm }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { t } = useTranslation();
  const { lockScroll, openScroll } = useBodyScrollLock(); // 스크롤 잠금 훅 사용

  useEffect(() => {
    lockScroll(); // 모달이 열릴 때 스크롤 잠금

    return () => {
      openScroll(); // 모달이 닫힐 때 스크롤 해제
    };
  }, [lockScroll, openScroll]);

  // 비밀번호 입력 시 상태 업데이트
  const handlePasswordChange = (e) => {
    setPassword(e.target.value.replace(/\D/g, "")); // 숫자가 아닌 입력 제거
  };

  // 가시성 변경 함수
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // 비밀번호 확인 및 삭제 처리
  const handleConfirmClick = () => {
    onConfirm(password); // 입력된 비밀번호를 부모 컴포넌트로 전달
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
            {t("review.modaltext")}
          </S.ModalText>
          <S.PasswordInputWrapper $isMobile={isMobile}>
            <S.PasswordInput
              $isMobile={isMobile}
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
                $isMobile={isMobile}
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
            <S.CancelButton onClick={onClose}>
              {t("review.cancle")}
            </S.CancelButton>
            <S.ConfirmButton onClick={handleConfirmClick}>
              {t("review.check")}
            </S.ConfirmButton>
          </S.ModalActions>
        </S.ModalBox>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default DeleteModal;
