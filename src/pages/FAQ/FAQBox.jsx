import React, { useState } from 'react';
import * as S from "./style";
import PropTypes from 'prop-types';
import useMediaQueries from "../../hooks/useMediaQueries";

import openImageDesktop from '../../assets/images/FAQ/FAQ_1.png';
import closeImageDesktop from '../../assets/images/FAQ/FAQ_2.png';
import openImageMobile from '../../assets/images/FAQ/FAQ_3.png';
import closeImageMobile from '../../assets/images/FAQ/FAQ_4.png';

const FAQBox = ({ question, answer, isOpen, onClick }) => {
	const { isMobile, isTablet, isDesktop } = useMediaQueries();

	const openImage = isMobile
		? openImageMobile
		: openImageDesktop;

  	const closeImage = isMobile
		? closeImageMobile 
		: closeImageDesktop; // 태블릿은 데스크탑 이미지와 동일함
  
	return (
		<S.FAQBox onClick={onClick}>
		  <S.FAQContent>
			<S.FAQTextContainer>
				<S.FAQText1 $isMobile={isMobile}>Q.</S.FAQText1>
				<S.FAQText2 $isMobile={isMobile}>{question}</S.FAQText2>
			</S.FAQTextContainer>
			<S.FAQButton $isMobile={isMobile}>
				<img
				src={isOpen ? closeImage : openImage} 
				alt={isOpen ? '닫기' : '보기'} 
				/>
			</S.FAQButton>
		  </S.FAQContent>
		  {isOpen && (
			<S.AnswerBox isOpen={isOpen}>
			<S.FAQTextContainer>
			<S.FAQText3 $isMobile={isMobile}>A.</S.FAQText3>
			<S.FAQText2 $isMobile={isMobile} dangerouslySetInnerHTML={{ __html: answer }} /> 
			</S.FAQTextContainer>
			</S.AnswerBox>
		  )}
		</S.FAQBox>
	);
  };
  
  FAQBox.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
  };
  
  export default FAQBox;