import React, { useState } from 'react';
import * as S from "./style";
import PropTypes from 'prop-types';

import openImage from '../../assets/images/FAQ_1.png';
import closeImage from '../../assets/images/FAQ_2.png';

const FAQBox = ({ question, answer }) => {

	const [isOpen, setIsOpen] = useState(false); // 답변을 보여줄지 여부
  
	return (
		<S.FAQBox>
		  <S.FAQContent>
			<S.FAQTextContainer>
				<S.FAQText1>Q.</S.FAQText1>
				<S.FAQText2>{question}</S.FAQText2>
			</S.FAQTextContainer>
			<S.FAQButton onClick={() => setIsOpen(!isOpen)}>
				<img 
				src={isOpen ? closeImage : openImage} 
				alt={isOpen ? '닫기' : '보기'} 
				/>
			</S.FAQButton>
		  </S.FAQContent>
		  {isOpen && (
			<S.AnswerBox>
			<S.FAQTextContainer>
			<S.FAQText1>A.</S.FAQText1>
			<S.FAQText2>{answer}</S.FAQText2>
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