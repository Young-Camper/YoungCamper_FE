import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import FAQContainer from "./FAQContainer";
import useMediaQueries from "../../hooks/useMediaQueries";
import Pagenation from "./Pagenation";
import faqData from "../../data/faqData_ko.json";
import { useTranslation } from "react-i18next";

const index = () => {
  const { isMobile } = useMediaQueries();
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();

  const itemsPerPage = isMobile ? 5 : faqData.length; // 모바일에서는 질문 4개, 나머지 뷰에선 모두 보이게

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 178, behavior: "smooth" });
  } // 페이지 번호를 클릭했을 때, 페이지 번호 상태 업데이트


  return (
    <>
      <MainTitle mainText="FAQ" subText={t(`faq.subTitle`)} />
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
