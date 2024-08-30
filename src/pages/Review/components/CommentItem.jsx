import React from "react";
import trash from "../assets/trash.svg";
import {
  CommentBox,
  CommentHeader,
  CommentNumber,
  CommentText,
  CommentContent,
  CommentFooter,
  CommentDate,
  CommentActions,
  DeleteIconContainer,
  DeleteText,
  CommentDivider,
  ImageWrapper,
  // ImagePlaceholder,
} from "../components/CommentStyle";
import useMediaQueries from "../../../hooks/useMediaQueries";

const Comment = ({ comment }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <CommentBox isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
      <CommentHeader>
        <CommentNumber
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
        >
          {comment.id}
        </CommentNumber>
      </CommentHeader>
      <CommentText
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
      >
        {comment.text}
      </CommentText>

      {/* 이미지가 있을 때만 보여주기 */}
      {comment.image && (
        <CommentContent>
          <ImageWrapper
            isMobile={isMobile}
            isTablet={isTablet}
            isDesktop={isDesktop}
            image={comment.image}
          >
            {/* <ImagePlaceholder>+</ImagePlaceholder> */}
          </ImageWrapper>
        </CommentContent>
      )}

      <CommentFooter>
        <CommentDate
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
        >
          {comment.date}
        </CommentDate>
        <CommentActions>
          <DeleteIconContainer>
            <img src={trash} alt="Delete Icon" width="17" height="17" />
          </DeleteIconContainer>
          <DeleteText
            isMobile={isMobile}
            isTablet={isTablet}
            isDesktop={isDesktop}
          >
            삭제
          </DeleteText>
        </CommentActions>
      </CommentFooter>
      <CommentDivider />
    </CommentBox>
  );
};

export default Comment;
