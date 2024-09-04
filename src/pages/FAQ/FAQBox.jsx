import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import * as S from "./style";
import PropTypes from 'prop-types';
import useMediaQueries from "../../hooks/useMediaQueries";
import 'bootstrap/dist/css/bootstrap.min.css';

const mediaUrl = import.meta.env.VITE_MEDIA_URL;

const openImageDesktop = `${mediaUrl}FAQ/FAQ_1.png`;
const closeImageDesktop = `${mediaUrl}FAQ/FAQ_2.png`;
const openImageMobile = `${mediaUrl}FAQ/FAQ_3.png`;
const closeImageMobile = `${mediaUrl}FAQ/FAQ_4.png`;

const FAQBox = ({ question, answer, isOpen, onClick }) => {
  const { isMobile } = useMediaQueries();

  const openImage = isMobile
    ? openImageMobile
    : openImageDesktop;

  const closeImage = isMobile
    ? closeImageMobile 
    : closeImageDesktop;

  return (
    <S.FAQBox onClick={onClick}>
      <S.FAQContent>
        <S.FAQText1 $isMobile={isMobile} >
          <span className="a-text">Q. </span>{question}
        </S.FAQText1>
        <S.FAQButton $isMobile={isMobile}>
          <img
            src={isOpen ? closeImage : openImage} 
            alt={isOpen ? '닫기' : '보기'} 
          />
        </S.FAQButton>
      </S.FAQContent>
      <Collapse isOpen={isOpen}>
        <S.AnswerBox>
          <S.FAQText2 $isMobile={isMobile} >
            <span className="a-text">A. </span>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </S.FAQText2>
        </S.AnswerBox>
      </Collapse>
    </S.FAQBox>
  );
};

export default FAQBox;
