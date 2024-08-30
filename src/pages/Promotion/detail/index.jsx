import React from "react";
import { useParams } from "react-router-dom";
import * as S from "../style";
import useMediaQueries from "../../../hooks/useMediaQueries";
import ClubImage from "./ClubImage";
import SubTitle from "./SubTitle";
import ClubContent from "./ClubContent";
import ClubApply from "./ClubApply";
import { Link } from 'react-router-dom';

const index = () => {
  const { id } = useParams();
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      <S.ClubDetail $isDesktop={isDesktop}>
        <ClubImage id={id}></ClubImage>
        <S.ContentWrapper $isMobile={isMobile} $isTablet={isTablet}>
          <SubTitle id={id}></SubTitle>
          <ClubContent id={id}></ClubContent>
          <ClubApply id={id}></ClubApply>
        </S.ContentWrapper>
        
      </S.ClubDetail>
      
    </>
  )
};

export default index;
