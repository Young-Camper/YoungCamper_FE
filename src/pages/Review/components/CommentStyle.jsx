import styled from "styled-components";
import useMediaQueries from "../../../hooks/useMediaQueries";

// 댓글 전체 컨테이너
export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) =>
    props.isMobile ? "20px" : props.isTablet ? "12px" : "24px"};
  padding: ${(props) => (props.isMobile ? "20px" : "24px")};
`;

// CommentItem 스타일

export const CommentBox = styled.div`
  width: 100%;
  max-width: 1020px;
  padding: ${(props) => (props.isMobile ? "12px" : "10px")};
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => (props.isMobile ? "20px" : "24px")};
`;

export const CommentHeader = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentNumber = styled.div`
  color: #4a5e6d;
  font-size: ${(props) => (props.isMobile ? "14px" : "20px")};
  font-family: "Montserrat";
  font-weight: 400;
  line-height: 30px;
  font-size: ${(props) => (props.isMobile ? "14px" : "20px")};
  word-wrap: break-word;
`;

export const CommentText = styled.div`
  align-self: stretch;
  color: #4a5e6d;
  font-size: ${(props) => (props.isMobile ? "12px" : "22px")};
  font-family: "Pretendard";
  font-weight: 400;
  line-height: ${(props) => (props.isMobile ? "20px" : "30px")};
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
  font-size: ${(props) => (props.isMobile ? "12px" : "16px")};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: ${(props) => (props.isMobile ? "18px" : "24px")};

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
`;

export const DeleteIconContainer = styled.div`
  display: flex;
  }
`;

export const DeleteText = styled.div`
  color: #4a5e6d;
  font-size: ${(props) => (props.isMobile ? "12px" : "16px")};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: ${(props) => (props.isMobile ? "18px" : "24px")};
  word-wrap: break-word;
`;

export const CommentDivider = styled.div`
  align-self: stretch;
  height: 0;
  border: 1px solid #ced7de;
`;

export const ImageWrapper = styled.div`
  width: ${(props) => (props.isMobile ? "75px" : "107px")};
  height: ${(props) => (props.isMobile ? "75px" : "107px")};
  border-radius: 8px;
  border: 1px solid #ced7de;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};

  & > div {
    position: absolute;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.7);
    z-index: 1;
  }
`;

//후기 input 필드로 옮기기
// export const ImagePlaceholder = styled.div`
//   color: #ced7de;
//   font-size: 24px;
//   font-family: "Noto Sans KR", sans-serif;
//   font-weight: 400;
//   line-height: 38.83px;
//   word-wrap: break-word;
// `;

export const CommentContent = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
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
