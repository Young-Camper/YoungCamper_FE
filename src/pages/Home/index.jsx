import React from "react";
import useMediaQueries from "../../hooks/useMediaQueries";
import HomeTitle from "./HomeTitle";
import Video from "./Video";
import ClubInfo from "./ClubInfo";
import Notice from "./Notice";
import Social from "./Social";
import CTABanner from "./CTABanner";
import * as S from "./HomeStyle";
import styled from "styled-components";


const index = () => {

  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  

  return (
    <>
    <HomeTitle />
    <Video />
    <ClubInfo />
    <Notice />
    <Social />
    <CTABanner />
    </>
  )  
} 

export default index;