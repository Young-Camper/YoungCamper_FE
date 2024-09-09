import styled from "styled-components";
import useMediaQueries from "../../../hooks/useMediaQueries";

// CommentSection 스타일

export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) =>
    props.$isMobile ? "20px" : props.$isTablet ? "12px" : "24px"};
  padding: ${(props) => (props.$isMobile ? "20px" : "24px")};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background-color: white;
  color: #0a0b0a;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e7ebef;
  }
`;

export const CurrentPageButton = styled(PageButton)`
  background-color: #e7ebef;
`;

// CommentItem 스타일

export const CommentBox = styled.div`
  width: 100%;
  max-width: 1020px;
  padding: ${(props) => (props.$isMobile ? "12px" : "10px")};
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => (props.$isMobile ? "20px" : "24px")};
`;

export const CommentHeader = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentNumber = styled.div`
  color: #4a5e6d;
  font-size: ${(props) => (props.$isMobile ? "14px" : "20px")};
  font-family: "MonSemiBold";
  font-weight: 400;
  line-height: 30px;
  word-wrap: break-word;
`;

export const CommentText = styled.div`
  white-space: pre-wrap;
  align-self: stretch;
  color: #4a5e6d;
  font-size: ${(props) => (props.$isMobile ? "12px" : "22px")};
  font-family: "MonRegular";
  font-weight: 400;
  line-height: ${(props) => (props.$isMobile ? "20px" : "30px")};
  word-wrap: break-word;
`;

export const CommentFooter = styled.div`
  align-self: stretch;
  display: inline-flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CommentDate = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #92a5b5;
  font-size: ${(props) => (props.$isMobile ? "12px" : "16px")};
  font-family: "MonRegular", sans-serif;
  font-weight: 400;
  line-height: ${(props) => (props.$isMobile ? "18px" : "24px")};
  word-wrap: break-word;
`;

export const CommentActions = styled.div`
  height: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const DeleteIconContainer = styled.div`
  display: flex;
`;

export const DeleteText = styled.div`
  color: #4a5e6d;
  font-size: ${(props) => (props.$isMobile ? "12px" : "16px")};
  font-family: "MonRegular", sans-serif;
  font-weight: 400;
  line-height: ${(props) => (props.$isMobile ? "18px" : "24px")};
  word-wrap: break-word;
`;

export const CommentDivider = styled.div`
  align-self: stretch;
  height: 0;
  border: 1px solid #ced7de;
`;

export const ImageWrapper = styled.div`
  width: ${(props) => (props.$isMobile ? "75px" : "107px")};
  height: ${(props) => (props.$isMobile ? "75px" : "107px")};
  border-radius: 8px;
  border: 1px solid #ced7de;
  background-size: cover;
  background-position: center;
  display: flex; /* 개별 이미지는 flex로 두고 정렬 */
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: ${({ $image }) => ($image ? `url(${$image})` : "none")};
  & > div {
    position: absolute;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.7);
    z-index: 1;
  }
`;

export const CommentContent = styled.div`
  display: ${(props) => (props.$isMobile ? "grid" : "inline-flex")};
  grid-template-columns: ${(props) =>
    props.$isMobile ? "repeat(3, 1fr)" : "none"};
  gap: 10px;
  margin-top: ${(props) => (props.$isMobile ? "10px" : "0")};
  justify-content: ${(props) => (props.$isMobile ? "center" : "flex-start")};
  align-items: ${(props) => (props.$isMobile ? "flex-start" : "flex-start")};
  flex-wrap: ${(props) => (props.$isMobile ? "wrap" : "wrap")};
`;

// DeleteModal 스타일

export const ModalWrapper = styled.div`
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

export const ModalContent = styled.div`
  width: ${(props) => (props.$isMobile ? "300px" : "564px")};
  height: ${(props) => (props.$isMobile ? "300px" : "442px")};
  padding: ${(props) => (props.$isMobile ? "10px 20px" : "48px 80px")};
  background: white;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const ModalBox = styled.div`
  padding: ${(props) => (props.$isMobile ? "48px 20px" : "16px 0 48px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.$isMobile ? "20px" : "40px")};
`;

export const ModalText = styled.div`
  text-align: center;
  color: #474747;
  font-size: ${(props) => (props.$isMobile ? "16px" : "27px")};
  font-family: "MonRegular";
  font-weight: 400;
  line-height: ${(props) => (props.$isMobile ? "25px" : "38px")};
  overflow-wrap: break-word;
  white-space: pre-line;
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  width: ${(props) => (props.$isMobile ? "250px" : "350px")};
  height: ${(props) => (props.$isMobile ? "40px" : "96px")};
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 24px 20px;
  background: #fafafa;
  border-radius: 16px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 0px;
  color: #474747;
  font-size: 18px;
  font-size: ${(props) => (props.$isMobile ? "14px" : "18px")};
  font-family: "MonRegular";
  line-height: 24px;
  border: none;
  border-radius: 8px;
  text-align: left;
  outline: none;
`;

export const PasswordIcon = styled.div`
  width: ${(props) => (props.$isMobile ? "32px" : "48px")};
  height: ${(props) => (props.$isMobile ? "32px" : "48px")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PasswordIconImage = styled.img`
  width: ${(props) => (props.$isMobile ? "30px" : "50px")};
  height: auto;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => (props.$isMobile ? "0px 0px 10px 0px" : "0 12px")};
`;

export const CancelButton = styled.button`
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

export const ConfirmButton = styled.button`
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

// ImageModal 스타일
export const ModalOverlay = styled.div`
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

export const ImageModalContent = styled.div`
  position: relative;
  width: ${(props) =>
    props.$isMobile ? "80vw" : "50vh"}; /* 정사각형 크기로 설정 */
  height: ${(props) =>
    props.$isMobile ? "80vw" : "50vh"}; /* 정사각형 크기로 설정 */
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 정사각형 안에 이미지를 채우기 */
    border-radius: 8px; /* 이미지에 둥근 모서리 적용 */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 3;

  img {
    width: 15px;
    height: 15px;
  }
`;
