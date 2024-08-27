import React, { useState, useEffect } from 'react';
import FAQBox from "./FAQBox";
import * as S from "./style";
import { ContentWrapper } from "../../style/commonStyle";
import faqData from "../../data/faqData.json";
import useMediaQueries from "../../hooks/useMediaQueries";


const FAQContainer = () => {
  const [faqs, setFaqs] = useState([]);
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  useEffect(() => {
    // JSON 데이터를 상태로 설정
    setFaqs(faqData);
  }, []);

  return (
    <>
      {isDesktop ? (
        <ContentWrapper>
          <S.FAQWrapper isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
            {faqs.map((faq, index) => (
              <FAQBox key={index} question={faq.question} answer={faq.answer} />
            ))}
          </S.FAQWrapper>
        </ContentWrapper>
      ) : ( 
        <S.FAQWrapper isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
          {faqs.map((faq, index) => (
            <FAQBox key={index} question={faq.question} answer={faq.answer} />
          ))}
        </S.FAQWrapper>
      )}
    </>
  );
};

export default FAQContainer