import React, { useState } from 'react';
import * as S from "./style";
import PropTypes from 'prop-types';
import useMediaQueries from "../../hooks/useMediaQueries";

import openImage from './Chevron down.png';
import closeImage from './Chevron up.png';

const FAQBox = ({ question, answer }) => {
	const { isMobile, isTablet, isDesktop } = useMediaQueries();
	
	const [isOpen, setIsOpen] = useState(false); // 답변을 보여줄지 여부
  
	const handleToggle = () => {
	  setIsOpen(prevState => !prevState); // 상태 토글
	};
  
	return (
		<S.FAQBox>
		  <S.FAQContent>
			<S.FAQTextContainer>
				<S.FAQText1>
				Q.
				</S.FAQText1>
				<S.FAQText2>
				영캠퍼가 누구야?
				</S.FAQText2>
			</S.FAQTextContainer>
			<S.FAQButton onClick={handleToggle}>
				<img 
				src={isOpen ? closeImage : openImage} 
				alt={isOpen ? '닫기 이미지' : '보기 이미지'} 
				/>
			</S.FAQButton>
		  </S.FAQContent>
		  {isOpen && (
			<S.AnswerBox>
				<S.FAQTextContainer>
				<S.FAQText3>
				A.
				</S.FAQText3>
				<S.FAQText2>
				대단한 사람들이지~
				</S.FAQText2>
				</S.FAQTextContainer>
			</S.AnswerBox>
		  )}
		</S.FAQBox>
	);
  }
  
  FAQBox.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
  };
  
  export default FAQBox;