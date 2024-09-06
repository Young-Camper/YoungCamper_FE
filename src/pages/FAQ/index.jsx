import React, { useState, useEffect } from "react";
import MainTitle from "../../components/ui/MainTitle";
import FAQContainer from "./FAQContainer";
import useMediaQueries from "../../hooks/useMediaQueries";
import Pagenation from "./Pagenation";
import { faq_ko } from "../../data/faqData_ko";
import { faq_en } from "../../data/faqData_en";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { isMobile } = useMediaQueries();
  const [currentPage, setCurrentPage] = useState(1);
  const { t, i18n } = useTranslation();
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const currentLanguage = i18n.language;
    setFaqData(currentLanguage === "ko" ? faq_ko : faq_en);
  }, [i18n.language]);

  // 모바일일 때는 5개, 그렇지 않으면 전체 데이터를 보여줌
  const itemsPerPage = isMobile ? 5 : faqData.length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 178, behavior: "smooth" });
  };

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

export default Index;
