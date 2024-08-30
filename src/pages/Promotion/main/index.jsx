import React from "react";
import styled from "styled-components";
import MainTitle from "../../../components/ui/MainTitle";
import Club from "./Club";
import useMediaQueries from "../../../hooks/useMediaQueries";
import * as S from "../style";

const HighlightedText = styled.span`
  color: #0068FF;
`;

const Index = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mainText = "영캠프와 함께하는 동아리 ";
  const highlightedNumber = "16";
  const subText = "동아리의 각 불교 동아리를 살펴볼까요?";

  return (
    <>
      <MainTitle
        mainText={
          <>
            {mainText}
            <HighlightedText>{highlightedNumber}</HighlightedText>
          </>
        }
        subText={subText}
      />
      <S.CardWrapper $isMobile={isMobile} $isTablet={isTablet} $isDesktop={isDesktop}>
        <Club />
      </S.CardWrapper>
    </>
  );
};

export default Index;
