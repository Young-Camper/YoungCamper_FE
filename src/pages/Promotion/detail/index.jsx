import React from "react";
import { useParams } from "react-router-dom";
import * as S from "../style";
import useMediaQueries from "../../../hooks/useMediaQueries";
import ClubImage from "./ClubImage";
import SubTitle from "./SubTitle";
import ClubContent from "./ClubContent";
import ClubApply from "./ClubApply";
import BackPage from "./BackPage";

const index = () => {
  const { id } = useParams();
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      <S.ContentWrapperFix $isDesktop={isDesktop} $isMobile={isMobile} $isTablet={isTablet}>
        <BackPage></BackPage>
        <SubTitle id={id}></SubTitle>
      </S.ContentWrapperFix>
      <S.ContentWrapper $isMobile={isMobile} $isTablet={isTablet} $isDesktop={isDesktop}>
          <ClubImage id={id}></ClubImage>
          <ClubContent id={id}></ClubContent>
          <ClubApply id={id}></ClubApply>
      </S.ContentWrapper>
      
    </>
  )
};

export default index;
