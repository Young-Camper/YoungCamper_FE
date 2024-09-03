import React from "react";
import { ContentWrapper } from "../../style/commonStyle";
import useMediaQueries from "../../hooks/useMediaQueries";
import IntroBanner from "./IntroBanner";
import IntroContent from "./IntroContent";

const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  return (
    <>
      <IntroBanner />
      <ContentWrapper
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
        $isIntro={true}
      >
        <IntroContent />
      </ContentWrapper>
    </>
  );
};

export default index;
