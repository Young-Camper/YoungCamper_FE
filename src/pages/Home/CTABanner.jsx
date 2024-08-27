import React from 'react'
import * as S from "./HomeStyle";

const CTABanner = () => {
  return (
    <S.CTASection>
      <S.SectionBanner>
        <S.GridText1>·</S.GridText1>
        <S.GridText2>Youngcamp Festival</S.GridText2>
      </S.SectionBanner>
      <S.GridBox>
        <S.VectorImg src = ".\src\assets\images\Vector.png" />
        <S.GridTitle>JOIN WITH US !</S.GridTitle>
        <S.GridBtnFrame>
          <S.GridBtn>
            <S.GridBtnText>영캠프 참가하기</S.GridBtnText>
          </S.GridBtn>
        </S.GridBtnFrame>
      </S.GridBox>
    </S.CTASection>
  )
}

export default CTABanner
