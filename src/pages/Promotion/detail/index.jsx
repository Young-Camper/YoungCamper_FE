import React from "react";
import { useParams } from "react-router-dom";
import * as S from "../style";
import useMediaQueries from "../../../hooks/useMediaQueries";
import ClubImage from "./ClubImage";
import SubTitle from "./SubTitle";
import ClubContent from "./ClubContent";
import ClubApply from "./ClubApply";
import BackPage from "./backPage";

const index = () => {
  const { id } = useParams();
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      <S.ClubDetail $isDesktop={isDesktop}>
        <BackPage></BackPage>
        <SubTitle id={id}></SubTitle>
        <ClubImage id={id}></ClubImage>
        <S.ContentWrapper $isMobile={isMobile} $isTablet={isTablet}>
          <ClubContent id={id}></ClubContent>
          <ClubApply id={id}></ClubApply>
        </S.ContentWrapper>
        
      </S.ClubDetail>
      
    </>
  )
};

export default index;
