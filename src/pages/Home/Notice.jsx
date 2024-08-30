import React, { useState }  from 'react'
import * as S from "./HomeStyle";
import { Link } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";

const Notice = () => {
  const [isHoveringNotice1, setIsHoveringNotice1] = useState(false);
  const [isHoveringNotice2, setIsHoveringNotice2] = useState(false);
  const [isHoveringNotice3, setIsHoveringNotice3] = useState(false);
  const [isHoveringNotice4, setIsHoveringNotice4] = useState(false);
  const [isHoveringNotice5, setIsHoveringNotice5] = useState(false);

  const handleMouseOver5 = () => {
    setIsHoveringNotice1(true);
  };
  const handleMouseOut5 = () => {
    setIsHoveringNotice1(false);
  };
  const handleMouseOver6 = () => {
    setIsHoveringNotice2(true);
  };
  const handleMouseOut6 = () => {
    setIsHoveringNotice2(false);
  };
  const handleMouseOver7 = () => {
    setIsHoveringNotice3(true);
  };
  const handleMouseOut7 = () => {
    setIsHoveringNotice3(false);
  };
  const handleMouseOver8 = () => {
    setIsHoveringNotice4(true);
  };
  const handleMouseOut8 = () => {
    setIsHoveringNotice4(false);
  };
  const handleMouseOver9 = () => {
    setIsHoveringNotice5(true);
  };
  const handleMouseOut9 = () => {
    setIsHoveringNotice5(false);
  };

  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <S.NoticeSection $isTablet={isTablet} $isDesktop={isDesktop}>
      <S.NoticeContent $isDesktop={isDesktop}>
        <S.NoticeTitleSet $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.NoticeTitleText $isTablet={isTablet} $isDesktop={isDesktop}>
            주요 공지사항을 확인해보세요
          </S.NoticeTitleText>
          <Link to={"/notification"}>
            <S.NoticeBtnBox
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              ishoveringNotice5={isHoveringNotice5}
              onMouseOver={handleMouseOver9}
              onMouseOut={handleMouseOut9}
            >
              {isDesktop && (
                <S.NoticeBtn
                  $isDesktop={isDesktop}
                  ishoveringNotice5={isHoveringNotice5}
                >
                  더 알아보기
                </S.NoticeBtn>
              )}
            </S.NoticeBtnBox>
          </Link>
        </S.NoticeTitleSet>
        <S.NoticeListSet $isDesktop={isDesktop}>
          <S.NoticeListFrame $isTablet={isTablet} $isDesktop={isDesktop}>
            <S.NoticeList
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              ishoveringNotice1={isHoveringNotice1}
              onMouseOver={handleMouseOver5}
              onMouseOut={handleMouseOut5}
            >
              <S.NoticeItemBox $isTablet={isTablet} $isDesktop={isDesktop}>
                <S.NoticeTag
                  $isDesktop={isDesktop}
                  ishoveringNotice1={isHoveringNotice1}
                >
                  전체
                </S.NoticeTag>
                <S.NoticeText
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  ishoveringNotice1={isHoveringNotice1}
                >
                  [공지] 공지사항입니다.{" "}
                </S.NoticeText>
              </S.NoticeItemBox>
              <S.ArrowImg2Box $isDesktop={isDesktop}>
                <S.ArrowImg2
                  $isDesktop={isDesktop}
                  ishoveringNotice1={isHoveringNotice1}
                />
              </S.ArrowImg2Box>
            </S.NoticeList>
            <S.NoticeList
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              ishoveringNotice2={isHoveringNotice2}
              onMouseOver={handleMouseOver6}
              onMouseOut={handleMouseOut6}
            >
              <S.NoticeItemBox $isTablet={isTablet} $isDesktop={isDesktop}>
                <S.NoticeTag
                  $isDesktop={isDesktop}
                  ishoveringNotice2={isHoveringNotice2}
                >
                  전체
                </S.NoticeTag>
                <S.NoticeText
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  ishoveringNotice2={isHoveringNotice2}
                >
                  [공지] 공지사항입니다.{" "}
                </S.NoticeText>
              </S.NoticeItemBox>
              <S.ArrowImg2Box $isDesktop={isDesktop}>
                <S.ArrowImg2
                  $isDesktop={isDesktop}
                  ishoveringNotice2={isHoveringNotice2}
                />
              </S.ArrowImg2Box>
            </S.NoticeList>
            <S.NoticeList
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              ishoveringNotice3={isHoveringNotice3}
              onMouseOver={handleMouseOver7}
              onMouseOut={handleMouseOut7}
            >
              <S.NoticeItemBox $isTablet={isTablet} $isDesktop={isDesktop}>
                <S.NoticeTag
                  $isDesktop={isDesktop}
                  ishoveringNotice3={isHoveringNotice3}
                >
                  전체
                </S.NoticeTag>
                <S.NoticeText
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  ishoveringNotice3={isHoveringNotice3}
                >
                  [공지] 공지사항입니다.{" "}
                </S.NoticeText>
              </S.NoticeItemBox>
              <S.ArrowImg2Box $isDesktop={isDesktop}>
                <S.ArrowImg2
                  $isDesktop={isDesktop}
                  ishoveringNotice3={isHoveringNotice3}
                />
              </S.ArrowImg2Box>
            </S.NoticeList>
            <S.NoticeList
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              ishoveringNotice4={isHoveringNotice4}
              onMouseOver={handleMouseOver8}
              onMouseOut={handleMouseOut8}
            >
              <S.NoticeItemBox $isTablet={isTablet} $isDesktop={isDesktop}>
                <S.NoticeTag
                  $isDesktop={isDesktop}
                  ishoveringNotice4={isHoveringNotice4}
                >
                  전체
                </S.NoticeTag>
                <S.NoticeText
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  ishoveringNotice4={isHoveringNotice4}
                >
                  [공지] 공지사항입니다.{" "}
                </S.NoticeText>
              </S.NoticeItemBox>
              <S.ArrowImg2Box $isDesktop={isDesktop}>
                {" "}
                <S.ArrowImg2
                  $isDesktop={isDesktop}
                  ishoveringNotice4={isHoveringNotice4}
                />
              </S.ArrowImg2Box>
            </S.NoticeList>
          </S.NoticeListFrame>
          <Link to={"/notification"}>
          {(isTablet || isMobile)
            && (<S.NoticeBtnBox
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              ><S.NoticeBtn
                $isDesktop={isDesktop}
                ishoveringNotice5={isHoveringNotice5}
              >
                더 알아보기
              </S.NoticeBtn></S.NoticeBtnBox>
            )}</Link>
        </S.NoticeListSet>
      </S.NoticeContent>
    </S.NoticeSection>
  );
};

export default Notice;





{/* <S.NoticeList ishoveringNotice1={isHoveringNotice1}
onMouseOver={handleMouseOver5}
onMouseOut={handleMouseOut5}>
  <S.NoticeItemBox>
    <S.NoticeTag ishoveringNotice1={isHoveringNotice1}>전체</S.NoticeTag>
    <S.NoticeText ishoveringNotice1={isHoveringNotice1}>[공지] 공지사항입니다. </S.NoticeText>
  </S.NoticeItemBox>
  <S.ArrowImg2Box><S.ArrowImg2 ishoveringNotice1={isHoveringNotice1} /></S.ArrowImg2Box>
</S.NoticeList> */}

/* const Notices = [
  { id: 1, 
    tag: '전체', 
    text: '[공지] 공지사항입니다.',  },
  { id: 2, 
    tag: '전체', 
    text: '[공지] 공지사항입니다.', },
  { id: 3, 
    tag: '전체', 
    text: '[공지] 공지사항입니다.', },
  { id: 4, 
    tag: '전체', 
    text: '[공지] 공지사항입니다.',  },
]; */

/* const Notices = [
  { id: 1, 
    tag: '전체', 
    text: '[공지] 공지사항입니다.', 
    isHovering: isHoveringNotice1, 
    handleMouseOver: handleMouseOver5, 
    handleMouseOut: handleMouseOut5 },
  { id: 2, 
    tag: '전체', 
    text: '[공지] 공지사항입니다.', 
    isHovering: isHoveringNotice2, 
    handleMouseOver: handleMouseOver6, 
    handleMouseOut: handleMouseOut6 },
  { id: 3, 
    tag: '전체', 
    text: '[공지] 공지사항입니다.', 
    isHovering: isHoveringNotice3, 
    handleMouseOver: handleMouseOver7, 
    handleMouseOut: handleMouseOut7 },
  { id: 4, 
    tag: '전체', 
    text: '[공지] 공지사항입니다.', 
    isHovering: isHoveringNotice4, 
    handleMouseOver: handleMouseOver8, 
    handleMouseOut: handleMouseOut8 },
]; */
/* 
const NoticeList = () => {

  const [noticeHover, setNoticeHover] = useState({});

  const handleMouseOver = (id) => {
    setNoticeHover((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseOut = (id) => {
    setNoticeHover((prev) => ({ ...prev, [id]: false }));
  };

  const onMouseOver = (id) => {
    handleMouseOver((prev) => ({ ...prev, [id]: true }));
  };

  const onMouseOut = (id) => {
    handleMouseOut((prev) => ({ ...prev, [id]: false }));
  };

  return Notices.map((notice) => (
    <S.NoticeList
      key={notice.id}
      isHovering={!!hovering[notice.id]}
      onMouseOver={() => handleMouseOver(notice.id)}
      onMouseOut={() => handleMouseOut(notice.id)}
    >
      <S.NoticeItemBox>
        <S.NoticeTag ishoveringNotice={notice.isHovering}>{notice.tag}</S.NoticeTag>
        <S.NoticeText ishoveringNotice={notice.isHovering}>{notice.text}</S.NoticeText>
      </S.NoticeItemBox>
      <S.ArrowImg2Box>
        <S.ArrowImg2 ishoveringNotice={notice.isHovering} />
      </S.ArrowImg2Box>
    </S.NoticeList>
  ));
};
 */