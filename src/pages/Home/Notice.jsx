import React, { useState } from "react";
import * as S from "./HomeStyle";
import { Link } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";
import data from "../../data/notice.json";

const Notice = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const recentNotices = data.slice(-4);

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
              ishovering={hoveredIndex === "button"}
              onMouseOver={() => handleMouseOver("button")}
              onMouseOut={handleMouseOut}
            >
              {isDesktop && (
                <S.NoticeBtn
                  $isDesktop={isDesktop}
                  ishovering={hoveredIndex === "button"}
                >
                  더 알아보기
                </S.NoticeBtn>
              )}
            </S.NoticeBtnBox>
          </Link>
        </S.NoticeTitleSet>
        <S.NoticeListSet $isDesktop={isDesktop}>
          {recentNotices.map((notice, index) => (
            <S.NoticeListFrame
              key={notice.id}
              $isTablet={isTablet}
              $isDesktop={isDesktop}
            >
              <Link to={`/notification/${notice.num}`}>
                <S.NoticeList
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  ishovering={hoveredIndex === index}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={handleMouseOut}
                >
                  <S.NoticeItemBox $isTablet={isTablet} $isDesktop={isDesktop}>
                    <S.NoticeTag
                      $isDesktop={isDesktop}
                      ishovering={hoveredIndex === index}
                    >
                      {notice.tag}
                    </S.NoticeTag>
                    <S.NoticeText
                      $isTablet={isTablet}
                      $isDesktop={isDesktop}
                      ishovering={hoveredIndex === index}
                    >
                      {notice.title}
                    </S.NoticeText>
                  </S.NoticeItemBox>
                  <S.ArrowImg2Box $isDesktop={isDesktop}>
                    <S.ArrowImg2
                      $isDesktop={isDesktop}
                      ishovering={hoveredIndex === index}
                    />
                  </S.ArrowImg2Box>
                </S.NoticeList>
              </Link>
            </S.NoticeListFrame>
          ))}
          <Link to={"/notification"}>
            {(isTablet || isMobile) && (
              <S.NoticeBtnBox $isTablet={isTablet} $isDesktop={isDesktop}>
                <S.NoticeBtn
                  $isDesktop={isDesktop}
                  ishovering={hoveredIndex === "button"}
                >
                  더 알아보기
                </S.NoticeBtn>
              </S.NoticeBtnBox>
            )}
          </Link>
        </S.NoticeListSet>
      </S.NoticeContent>
    </S.NoticeSection>
  );
};

export default Notice;
