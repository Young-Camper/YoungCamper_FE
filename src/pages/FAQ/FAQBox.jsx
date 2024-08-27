import React, { useState } from 'react';
import * as S from "./style";
import PropTypes from 'prop-types';
import useMediaQueries from "../../hooks/useMediaQueries";


import openImage from '../../assets/images/FAQ/FAQ_1.png';
import closeImage from '../../assets/images/FAQ/FAQ_2.png';

const FAQBox = ({ question, answer }) => {
	const { isMobile } = useMediaQueries(); 
	const [isOpen, setIsOpen] = useState(false); // 답변을 보여줄지 여부
  
	return (
		<S.FAQBox>
		  <S.FAQContent>
			<S.FAQTextContainer>
				<S.FAQText1 isMobile={isMobile}>Q.</S.FAQText1>
				<S.FAQText2 isMobile={isMobile}>{question}</S.FAQText2>
			</S.FAQTextContainer>
			<S.FAQButton isMobile={isMobile} onClick={() => setIsOpen(!isOpen)}>
				<S.FAQButtonImage 
				src={isOpen ? closeImage : openImage} 
				alt={isOpen ? '닫기' : '보기'} 
				/>
			</S.FAQButton>
		  </S.FAQContent>
		  {isOpen && (
			<S.AnswerBox>
			<S.FAQTextContainer>
			<S.FAQText1 isMobile={isMobile}>A.</S.FAQText1>
			<S.FAQText2 isMobile={isMobile}>{answer}</S.FAQText2>
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