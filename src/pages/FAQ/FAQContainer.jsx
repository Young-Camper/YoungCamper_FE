import React from 'react'
import FAQBox from "./FAQBox";
import * as S from "./style";
import { ContentWrapper } from "../../style/commonStyle";

const FAQContainer = props => {
  
  return (
    <ContentWrapper>
      <S.FAQWrapper>
        <FAQBox />
        <FAQBox />
        <FAQBox />
      </S.FAQWrapper>
    </ContentWrapper>
  )
}

export default FAQContainer