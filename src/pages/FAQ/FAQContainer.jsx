import React, { useState, useEffect } from "react";
import FAQBox from "./FAQBox";
import * as S from "./style";
import { useTranslation } from "react-i18next";
import useMediaQueries from "../../hooks/useMediaQueries";

// 다국어 FAQ 데이터
import { faq_en } from "../../data/faqData_en";
import { faq_ko } from "../../data/faqData_ko";

const FAQContainer = ({ currentPage, itemsPerPage }) => {
  const [faqs, setFaqs] = useState([]);
  const [openFaqs, setOpenFaqs] = useState({}); // 개별 질문의 열림 상태 관리
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = i18n.language;

    const faqData = currentLanguage === "ko" ? faq_ko : faq_en;
    setFaqs(faqData);
  }, [i18n.language]);

  const toggleFaq = (key) => {
    setOpenFaqs((prevOpenFaqs) => ({
      ...prevOpenFaqs,
      [key]: !prevOpenFaqs[key],
    }));
  };

  // 현재 페이지에 맞는 FAQ 항목 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFaqs = faqs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <S.FAQWrapper
      $isMobile={isMobile}
      $isTablet={isTablet}
      $isDesktop={isDesktop}
    >
      {currentFaqs.map((faq, index) => {
        const key = `${currentPage}-${index}`; // 페이지 번호와 인덱스를 결합한 고유 키 생성
        return (
          <FAQBox
            key={key}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFaqs[key]}
            onClick={() => toggleFaq(key)}
          />
        );
      })}
    </S.FAQWrapper>
  );
};

export default FAQContainer;
