import React, { useState, useEffect } from 'react';
import FAQBox from "./FAQBox";
import * as S from "./style";
import { ContentWrapper } from "../../style/commonStyle";
import faqData from "../../data/faqData.json";

const FAQContainer = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // JSON 데이터를 상태로 설정
    setFaqs(faqData);
  }, []);

  return (
    <ContentWrapper>
      <S.FAQWrapper>
        {faqs.map((faq, index) => (
          <FAQBox key={index} question={faq.question} answer={faq.answer} />
        ))}
      </S.FAQWrapper>
    </ContentWrapper>
  );
};

export default FAQContainer