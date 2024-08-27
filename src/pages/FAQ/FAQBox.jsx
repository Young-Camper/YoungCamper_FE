import React, { useState } from 'react';
import * as S from "./style";
import PropTypes from 'prop-types';
import useMediaQueries from "../../hooks/useMediaQueries";

import openImageDesktop from '../../assets/images/FAQ/FAQ_1.png';
import closeImageDesktop from '../../assets/images/FAQ/FAQ_2.png';
import openImageMobile from '../../assets/images/FAQ/FAQ_3.png';
import closeImageMobile from '../../assets/images/FAQ/FAQ_4.png';

const FAQBox = ({ question, answer }) => {
	const { isDesktop } = useMediaQueries(); 
	const [isOpen, setIsOpen] = useState(false); // 답변을 보여줄지 여부

	const openImage = isDesktop 
		? openImageDesktop 
		: openImageMobile;

  	const closeImage = isDesktop 
		? closeImageDesktop 
		: closeImageMobile; // 태블릿은 모바일 이미지와 동일함
  
	return (
		<S.FAQBox>
		  <S.FAQContent>
			<S.FAQTextContainer>
				<S.FAQText1 isDesktop={isDesktop}>Q.</S.FAQText1>
				<S.FAQText2 isDesktop={isDesktop}>{question}</S.FAQText2>
			</S.FAQTextContainer>
			<S.FAQButton isDesktop={isDesktop} onClick={() => setIsOpen(!isOpen)}>
				<img
				src={isOpen ? closeImage : openImage} 
				alt={isOpen ? '닫기' : '보기'} 
				/>
			</S.FAQButton>
		  </S.FAQContent>
		  {isOpen && (
			<S.AnswerBox>
			<S.FAQTextContainer>
			<S.FAQText1 isDesktop={isDesktop}>A.</S.FAQText1>
			<S.FAQText2 isDesktop={isDesktop}>{answer}</S.FAQText2>
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