import React from 'react';
import * as S from "./style";

const Section = () => {
    return (
        <S.Container>
            {/*-------------Section1------------
            <S.SloganSection>
                <S.SloganBox>
                    <S.SloganText1>Take a Look at What</S.SloganText1>
                    <S.EclipseImg src=".\src\pages\Home\Eclipse.png" />
                    <S.SloganText2>We Can Do For You</S.SloganText2>
                </S.SloganBox>
                <S.SloganDetail>
                    <S.DetailText1>영캠프 두줄 소개 블라블라</S.DetailText1>
                    <S.DetailTextBox>
                        <S.DetailText2>영캠프</S.DetailText2>
                        <S.DetailText3>D-1</S.DetailText3>
                    </S.DetailTextBox>
                </S.SloganDetail>
            </S.SloganSection>
            {/*-------------Section2------------*/}
            <S.CardSection1>
                <S.SectionText1>THE YOUNGCAMP</S.SectionText1>
                <S.CardSection2>
                    <S.CardSectionBox>
                        <S.SectionText2>영캠프는 페스티벌</S.SectionText2>
                        <S.SectionText3>영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 젊은이들의 에너지와 불교의 깊은 가르침이 어우러져 새로운 경험과 영감을 제공합니다.</S.SectionText3>
                    </S.CardSectionBox>
                </S.CardSection2>
            </S.CardSection1>
            <S.TabBar>
                <S.TabBox>공지</S.TabBox>
                <S.TabBox>일정</S.TabBox>
                <S.TabBox>장소</S.TabBox>
                <S.TabBox>후기</S.TabBox>
            </S.TabBar>
        </S.Container>


    )

}

export default Section