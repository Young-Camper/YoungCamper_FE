import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import FAQContainer from "./FAQContainer";
import useMediaQueries from "../../hooks/useMediaQueries";
import Pagenation from "./Pagenation";
import faqData from "../../data/faqData.json";


const index = () => {
  const { isMobile } = useMediaQueries();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobile ? 4 : faqData.length; // 모바일에서는 질문 4개, 나머지 뷰에선 모두 보이게

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  } // 페이지 번호를 클릭했을 떄, 페이지 번호 상태 업데이트

  return (
    <>
      <MainTitle mainText="FAQ" subText="자주 물어보는 질문에 대한 답변을 정리했어요." />
      <FAQContainer currentPage={currentPage} itemsPerPage={itemsPerPage} />
      {isMobile && (
        <Pagenation
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          totalItems={faqData.length}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default index;
