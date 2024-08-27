import React from "react";
import MainTitle from "../../components/ui/MainTitle";
import FAQContainer from "./FAQContainer";
import useMediaQueries from "../../hooks/useMediaQueries";


const index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      <MainTitle mainText="FAQ" subText="자주 물어보는 질문에 대한 답변을 정리했어요." />
      <FAQContainer />
    </>
  );
};

export default index;
