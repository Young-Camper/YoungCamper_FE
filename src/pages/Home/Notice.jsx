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

  const urgentNotices = data.filter((item) => item.urgent === "yes");
  const nonUrgentNotices = data.filter((item) => item.urgent === "no");

  let mainNotices = [];

  if (urgentNotices.length >= 4) {
    mainNotices = urgentNotices.slice(-4);
    console.log("4UpmainNotices:", mainNotices);
  } else {
    mainNotices = urgentNotices.concat(
      nonUrgentNotices.slice(0, 4 - urgentNotices.length)
    );
    console.log("4DownmainNotices:", mainNotices);
  }

  return (
    <S.NoticeSection $isTablet={isTablet} $isDesktop={isDesktop}>
      <S.NoticeTitleSet $isTablet={isTablet} $isDesktop={isDesktop}>
        <S.NoticeTitleText $isTablet={isTablet} $isDesktop={isDesktop}>
          주요 공지사항을 확인해보세요
        </S.NoticeTitleText>
        <Link to={"/notification"}>
          {isDesktop && (
            <S.NoticeBtn
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              ishovering={hoveredIndex === "button"}
              onMouseOver={() => handleMouseOver("button")}
              onMouseOut={handleMouseOut}
            >
              더 알아보기
            </S.NoticeBtn>
          )}
        </Link>
      </S.NoticeTitleSet>
      <S.NoticeListSet $isDesktop={isDesktop}>
        {mainNotices.map((notice, index) => (
          <S.NoticeListFrame
            key={notice.id}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            <Link to={`/notification/${notice.num}`} style={{ width: "100%" }}>
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
                    {notice.urgent === "yes" ? "필독" : "전체"}
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
                  <S.ArrowImg3
                    $isDesktop={isDesktop}
                    ishovering={hoveredIndex === index}
                  />
                </S.ArrowImg2Box>
              </S.NoticeList>
            </Link>
          </S.NoticeListFrame>
        ))}
      </S.NoticeListSet>

      {(isTablet || isMobile) && (
        <Link to={"/notification"} style={{ width: "100%" }}>
          <S.NoticeBtnBox>
            <S.NoticeBtn
              $isDesktop={isDesktop}
              $isTablet={isTablet}
              ishovering={hoveredIndex === "button"}
            >
              더 알아보기
            </S.NoticeBtn>
          </S.NoticeBtnBox>
        </Link>
      )}
    </S.NoticeSection>
  );
};

export default Notice;
