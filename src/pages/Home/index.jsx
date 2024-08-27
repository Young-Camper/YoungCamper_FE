import React from "react";
import { ContentWrapper } from "../../style/commonStyle";
import HomeTitle from "./HomeTitle";
import Video from "./Video";
import ClubInfo from "./ClubInfo";
import Notice from "./Notice";
import Social from "./Social";
import CTABanner from "./CTABanner";

const index = () => {
  return (
    <ContentWrapper>
      <HomeTitle />
      <Video />
      <ClubInfo />
      <Notice />
      <Social />
      <CTABanner />
    </ContentWrapper>

  )  
} 

export default index;
