import React, { useState }  from 'react'
import * as S from "./HomeStyle";
import { Link } from "react-router-dom";

const Notice = () => {

  const [isHoveringNotice1, setIsHoveringNotice1] = useState(false);
  const [isHoveringNotice2, setIsHoveringNotice2] = useState(false);
  const [isHoveringNotice3, setIsHoveringNotice3] = useState(false);
  const [isHoveringNotice4, setIsHoveringNotice4] = useState(false);
  const [isHoveringNotice5, setIsHoveringNotice5] = useState(false);

  const handleMouseOver5 = () => { setIsHoveringNotice1(true); };
  const handleMouseOut5 = () => { setIsHoveringNotice1(false); };
  const handleMouseOver6 = () => { setIsHoveringNotice2(true); };
  const handleMouseOut6 = () => { setIsHoveringNotice2(false); };
  const handleMouseOver7 = () => { setIsHoveringNotice3(true); };
  const handleMouseOut7 = () => { setIsHoveringNotice3(false); };
  const handleMouseOver8 = () => { setIsHoveringNotice4(true); };
  const handleMouseOut8 = () => { setIsHoveringNotice4(false); };
  const handleMouseOver9 = () => { setIsHoveringNotice5(true); };
  const handleMouseOut9 = () => { setIsHoveringNotice5(false); };

  return (
    <S.NoticeSection>
      <S.NoticeContent>
        <S.NoticeTitleSet>
          <S.NoticeTitleText>
              주요 공지사항을 확인해보세요
          </S.NoticeTitleText>
          <Link to={"/notification"}>
          <S.NoticeBtnBox ishoveringNotice5={isHoveringNotice5}
              onMouseOver={handleMouseOver9}
              onMouseOut={handleMouseOut9}>
              <S.NoticeBtn ishoveringNotice5={isHoveringNotice5}>
                더 알아보기
              </S.NoticeBtn>
          </S.NoticeBtnBox>
          </Link>
        </S.NoticeTitleSet>
        <S.NoticeListSet>
            <S.NoticeListFrame>
                <S.NoticeList ishoveringNotice1={isHoveringNotice1}
                onMouseOver={handleMouseOver5}
                onMouseOut={handleMouseOut5}>
                  <S.NoticeItemBox>
                    <S.NoticeTag ishoveringNotice1={isHoveringNotice1}>전체</S.NoticeTag>
                    <S.NoticeText ishoveringNotice1={isHoveringNotice1}>[공지] 공지사항입니다. </S.NoticeText>
                  </S.NoticeItemBox>
                  <S.ArrowImg2Box><S.ArrowImg2 ishoveringNotice1={isHoveringNotice1} /></S.ArrowImg2Box>
                </S.NoticeList>
                <S.NoticeList ishoveringNotice2={isHoveringNotice2}
                onMouseOver={handleMouseOver6}
                onMouseOut={handleMouseOut6}>
                  <S.NoticeItemBox>
                    <S.NoticeTag ishoveringNotice2={isHoveringNotice2}>전체</S.NoticeTag>
                    <S.NoticeText ishoveringNotice2={isHoveringNotice2}>[공지] 공지사항입니다. </S.NoticeText>
                  </S.NoticeItemBox>
                  <S.ArrowImg2Box><S.ArrowImg2 ishoveringNotice2={isHoveringNotice2} /></S.ArrowImg2Box>
                </S.NoticeList>
                <S.NoticeList ishoveringNotice3={isHoveringNotice3}
                onMouseOver={handleMouseOver7}
                onMouseOut={handleMouseOut7}>
                  <S.NoticeItemBox>
                    <S.NoticeTag ishoveringNotice3={isHoveringNotice3}>전체</S.NoticeTag>
                    <S.NoticeText ishoveringNotice3={isHoveringNotice3}>[공지] 공지사항입니다. </S.NoticeText>
                  </S.NoticeItemBox>
                  <S.ArrowImg2Box><S.ArrowImg2 ishoveringNotice3={isHoveringNotice3} /></S.ArrowImg2Box>
                </S.NoticeList>
                <S.NoticeList ishoveringNotice4={isHoveringNotice4}
                onMouseOver={handleMouseOver8}
                onMouseOut={handleMouseOut8}>
                  <S.NoticeItemBox>
                    <S.NoticeTag ishoveringNotice4={isHoveringNotice4}>전체</S.NoticeTag>
                    <S.NoticeText ishoveringNotice4={isHoveringNotice4}>[공지] 공지사항입니다. </S.NoticeText>
                  </S.NoticeItemBox>
                  <S.ArrowImg2Box><S.ArrowImg2 ishoveringNotice4={isHoveringNotice4} /></S.ArrowImg2Box>
                </S.NoticeList>
            </S.NoticeListFrame>
        </S.NoticeListSet>
      </S.NoticeContent>
    </S.NoticeSection>
  )
}

export default Notice
