import React from 'react'
import { ContentWrapper } from "../../style/commonStyle";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const Banner = props => {
	const { isMobile, isTablet, isDesktop } = useMediaQueries();
	
  return (
	<S.BannerWrapper>
		<ContentWrapper>
		<S.TitleWrapper isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
			<S.MainTitle>FAQ</S.MainTitle>
			<S.SubTitle>자주 물어보는 질문에 대한 답변을 정리했어요.</S.SubTitle>
		</S.TitleWrapper>
		</ContentWrapper>
	</S.BannerWrapper>
  )
}

export default Banner