import React from 'react'
import { styled } from "styled-components";


export const FAQWrapper = styled.div`
  display: flex;
  width: 1100px;
  padding: 132px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const FAQBox = styled.div`
  display: flex;
  width: 100%;
  min-width: 240px;
  min-height: 80px;

  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-direction: column;

  border-radius: 8px;
  border: solid 1px #CED7DE;
  background: #FFFFFF;
`;

export const FAQContent = styled.div`
  display: flex;
  padding: 12px 16px;
  min-height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const FAQTextContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
`;

export const FAQText1 = styled.div`
  color: #0068FF;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px; /* 116.667% */
  letter-spacing: 0.48px;
`;

export const FAQText2 = styled.div`
  color: #0A0B0A;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.48px;
`;

export const FAQButton = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  align-items: center;
`;

export const AnswerBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  padding: 12px 16px;
  align-items: center;
  border-radius: 0px 0px 8px 8px;
  background: #E7EBEF;
`;

