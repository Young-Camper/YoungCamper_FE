import React, { useState }  from 'react'
import * as S from "./HomeStyle";

const Notice = () => {

  const [isHoveringNotice, setIsHoveringNotice] = useState(false);
  const handleMouseOver5 = () => {
    setIsHoveringNotice(true);
  };
  const handleMouseOut5 = () => {
    setIsHoveringNotice(false);
  };

  return (
    <S.NoticeSection>
      <S.NoticeContent>
        <S.NoticeTitleSet>
            <S.NoticeTitleBox>
                <S.NoticeTitleText>
                    주요 공지사항을 확인해보세요
                </S.NoticeTitleText>
            </S.NoticeTitleBox>
            <S.NoticeBtnBox>
                <S.NoticeBtn>더 알아보기</S.NoticeBtn>
            </S.NoticeBtnBox>
        </S.NoticeTitleSet>
        <S.NoticeListSet>
            <S.NoticeListFrame>
                <S.NoticeList ishoveringNotice={isHoveringNotice}
                onMouseOver={handleMouseOver5}
                onMouseOut={handleMouseOut5}>
                  <S.NoticeItemBox>
                    <S.NoticeTag>전체</S.NoticeTag>
                    <S.NoticeText ishoveringNotice={isHoveringNotice}>[공지] 공지사항입니다. </S.NoticeText>
                  </S.NoticeItemBox>
                  <S.ArrowImg2 src=".\src\assets\images\Arrow_B.png" />
                </S.NoticeList>
                <S.NoticeList>
                  <S.NoticeItemBox>
                    <S.NoticeTag>전체</S.NoticeTag>
                    <S.NoticeText>[공지] 공지사항입니다. </S.NoticeText>
                  </S.NoticeItemBox>
                  <S.ArrowImg2 src=".\src\assets\images\Arrow_B.png" />
                </S.NoticeList>
                <S.NoticeList>
                  <S.NoticeItemBox>
                    <S.NoticeTag>전체</S.NoticeTag>
                    <S.NoticeText>[공지] 공지사항입니다. </S.NoticeText>
                  </S.NoticeItemBox>
                  <S.ArrowImg2 src=".\src\assets\images\Arrow_B.png" />
                </S.NoticeList>
                <S.NoticeList>
                  <S.NoticeItemBox>
                    <S.NoticeTag>전체</S.NoticeTag>
                    <S.NoticeText>[공지] 공지사항입니다. </S.NoticeText>
                  </S.NoticeItemBox>
                  <S.ArrowImg2 src=".\src\assets\images\Arrow_B.png" />
                </S.NoticeList>
            </S.NoticeListFrame>
        </S.NoticeListSet>
      </S.NoticeContent>
    </S.NoticeSection>
  )
}

export default Notice
