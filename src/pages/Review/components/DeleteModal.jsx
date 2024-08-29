// DeleteModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import viewnum from "../assets/viewnum.png";
import visnum from "../assets/visnum.png";
import useMediaQueries from "../../../hooks/useMediaQueries";

const DeleteModal = ({ onClose, onConfirm }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

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
    <ModalWrapper>
      <ModalContent
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <ModalBox
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          <ModalText
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            후기를 삭제하려면 <br />
            비밀번호 4자리를 입력해주세요!
          </ModalText>
          <PasswordInputWrapper>
            <PasswordInput
              type={isPasswordVisible ? "text" : "password"} // 가시성에 따라 input 타입 변경
              value={password}
              onChange={handlePasswordChange}
              maxLength={4} // 최대 4자리까지만 입력 가능
              inputMode="numeric" // 모바일에서 숫자 키패드 표시
              pattern="[0-9]*" // 숫자만 입력 가능하게 설정
            />
            <PasswordIcon
              onClick={togglePasswordVisibility}
              $isMobile={isMobile}
              $isTablet={isTablet}
              $isDesktop={isDesktop}
            >
              <PasswordIconImage
                src={isPasswordVisible ? viewnum : visnum}
                alt="toggle view"
                $isMobile={isMobile}
              />
            </PasswordIcon>
          </PasswordInputWrapper>
          <ModalActions
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            <CancelButton onClick={onClose}>취소</CancelButton>
            <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
          </ModalActions>
        </ModalBox>
      </ModalContent>
    </ModalWrapper>
  );
};

export default DeleteModal;

// 스타일 컴포넌트
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: ${(props) => (props.$isMobile ? "340px" : "564px")};
  height: ${(props) => (props.$isMobile ? "365.59px" : "442px")};
  padding: ${(props) => (props.$isMobile ? "10px 20px" : "48px 80px")};
  background: white;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const ModalBox = styled.div`
  padding: ${(props) => (props.$isMobile ? "48px 20px" : "16px 0 48px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.$isMobile ? "20px" : "40px")};
`;

const ModalText = styled.div`
  text-align: center;
  color: #474747;
  font-size: ${(props) => (props.$isMobile ? "18px" : "27px")};
  font-family: "MonRegular";
  font-weight: 400;
  line-height: 38px;
  overflow-wrap: break-word;
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  width: ${(props) => (props.$isMobile ? "300px" : "320px")};
  height: ${(props) => (props.$isMobile ? "96px" : "96px")};
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 24px 20px;
  background: #fafafa;
  border-radius: 16px;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 0px 150px 0px 0px;
  color: #474747;
  font-size: 18px;
  font-family: "MonRegular";
  line-height: 24px;
  border: none;
  border-radius: 8px;
  text-align: center;
  outline: none;
`;

const PasswordIcon = styled.div`
  width: ${(props) => (props.$isMobile ? "32px" : "48px")};
  height: ${(props) => (props.$isMobile ? "32px" : "48px")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PasswordIconImage = styled.img`
  width: ${(props) => (props.$isMobile ? "32px" : "48px")};
  height: auto;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => (props.$isMobile ? "0px 0px 10px 0px" : "0 12px")};
`;

const CancelButton = styled.button`
  flex: 1;
  height: 45px;
  background: white;
  border: 1px solid #637d92;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: "MonRegular";
  color: #637d92;
  cursor: pointer;

  &:hover {
    background-color: #637d92;
    color: #ffffff;
  }
`;

const ConfirmButton = styled.button`
  flex: 1;
  height: 45px;
  background: white;
  border: 1px solid #0068ff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: "MonRegular";
  color: #0068ff;
  cursor: pointer;
  margin-left: 12px;

  &:hover {
    background-color: #0068ff;
    color: #ffffff;
  }
`;
