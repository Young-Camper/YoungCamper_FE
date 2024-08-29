import React from "react";
import styled from "styled-components";
import warningIcon from "../assets/warning.svg";
import useMediaQueries from "../../../hooks/useMediaQueries";

const InputModal = ({ message, onClose }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <ModalWrapper>
      <ModalContent
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <WarningImage src={warningIcon} alt="warning" $isMobile={isMobile} />
        <MessageContainer
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          {/* 줄바꿈을 위한 코드 */}
          {message.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </MessageContainer>
        <ButtonContainer>
          <Button
            onClick={onClose}
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            확인
          </Button>
        </ButtonContainer>
      </ModalContent>
    </ModalWrapper>
  );
};

export default InputModal;

// Modal 스타일드 컴포넌트

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
  width: ${(props) => (props.$isMobile ? "340px" : "588px")};
  height: ${(props) => (props.$isMobile ? "252px" : "463px")};
  padding: ${(props) => (props.$isMobile ? "10px 20px" : "48px 80px")};
  background: white;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WarningImage = styled.img`
  width: ${(props) => (props.$isMobile ? "75px" : "auto")};
  height: ${(props) => (props.$isMobile ? "75px" : "auto")};
`;

const MessageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #474747;
  font-size: ${(props) => (props.$isMobile ? "18px" : "25px")};
  font-family: "MonRegular";
  font-weight: 400;
  line-height: ${(props) => (props.$isMobile ? "24px" : "38px")};
  padding: ${(props) => (props.$isMobile ? "20px 0px" : "16px 0 48px")};
  word-wrap: break-word;
`;

const ButtonContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
  gap: 24px;
`;

const Button = styled.button`
  color: #0068ff;
  flex: 1;
  height: ${(props) => (props.$isMobile ? "45px" : "70px")}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.$isMobile ? "12px 16px" : "20px 24px")};
  background: white;
  border-radius: 100px;
  border: 1px solid #0068ff;
  font-size: ${(props) => (props.$isMobile ? "14px" : "22px")};
  font-family: "MonRegular", sans-serif;
  font-weight: 400;
  line-height: ${(props) => (props.$isMobile ? "20px" : "30px")};
  text-align: center;

  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0068ff;
    color: #ffffff;
  }
`;
