import React, { useState, useEffect } from 'react';
import FAQBox from "./FAQBox";
import * as S from "./style";

import faqData from "../../data/faqData.json";
import useMediaQueries from "../../hooks/useMediaQueries";


const FAQContainer = ({ currentPage, itemsPerPage }) => {
  const [faqs, setFaqs] = useState([]);
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  useEffect(() => {
    // JSON 데이터를 상태로 설정
    setFaqs(faqData);
  }, []);

  // 현재 페이지에 맞는 FAQ 항목 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFaqs = faqs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <S.FAQWrapper isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
      {currentFaqs.map((faq, index) => (
        <FAQBox key={index} question={faq.question} answer={faq.answer} />
      ))}
    </S.FAQWrapper>
  );
};

export default FAQContainer