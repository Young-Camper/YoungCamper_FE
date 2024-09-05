import React, { useEffect, useState } from "react";
import * as S from "./HomeStyle";
import { Link } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";
/* import data from "../../data/notice.json"; */
import Loading from "../../components/ui/Loading";
import { getAnnouncements } from "../../lib/apis/api/getAnnouncements";

const Notice = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  //공지 리스트 get
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnnouncement();
        setData(response.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //필독과 일반공지 구분
  const urgentNotices = data.filter((item) => item.isPinned === "yes");
  const nonUrgentNotices = data.filter((item) => item.isPinned === "no");

  let mainNotices = [];

  //필독공지 -> 최신순으로 4개 정렬
  if (urgentNotices.length >= 4) {
    mainNotices = urgentNotices.slice(-4).reverse();
  } else {
    const nonUrgentToAdd = 4 - urgentNotices.length;
    const addNotices = nonUrgentNotices.slice(0, nonUrgentToAdd).reverse();
    mainNotices = urgentNotices.reverse().concat(addNotices);
  }

  //공지가 4개 이하일 때
  const emptyNotices = Array(4 - mainNotices.length).fill({
    title: "등록된 공지가 없습니다.",
    isPinned: "no",
  });

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
      {loading ? (
        <Loading />
      ) : (
        <S.NoticeListSet $isDesktop={isDesktop} >
          {[
            ...mainNotices,
            ...Array(4 - mainNotices.length).fill({ isEmpty: true }),
          ].map((notice, index) => {
            const isEmpty = notice.isEmpty || notice === null; // notice가 null인 경우 빈 공지
            const id = isEmpty ? `empty-${index}` : notice.id;
            return (
              <S.NoticeListFrame
                key={id}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
              >
                <Link
                  to={isEmpty ? "#" : `/notification/${notice.num}`}
                  style={{ width: "100%" }}
                >
                  <S.NoticeList
                    $isTablet={isTablet}
                    $isDesktop={isDesktop}
                    ishovering={hoveredIndex === index}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={handleMouseOut}
                  >
                    <S.NoticeItemBox
                      $isTablet={isTablet}
                      $isDesktop={isDesktop}
                    >
                      <S.NoticeTag
                        $isDesktop={isDesktop}
                        ishovering={hoveredIndex === index}
                      >
                        {isEmpty
                          ? "전체"
                          : notice.isPinned === "yes"
                          ? "필독"
                          : "전체"}
                      </S.NoticeTag>
                      <S.NoticeText
                        $isTablet={isTablet}
                        $isDesktop={isDesktop}
                        ishovering={hoveredIndex === index}
                      >
                        {isEmpty ? "등록된 공지가 없습니다." : notice.title}
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
            );
          })}
        </S.NoticeListSet>
      )}
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