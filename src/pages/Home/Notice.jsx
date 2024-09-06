import React, { useEffect, useState } from "react";
import * as S from "./HomeStyle";
import { Link } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";
import Loading from "../../components/ui/Loading";
import { useTranslation } from "react-i18next";

const Notice = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

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
        const response = await getAnnouncements();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //필독과 일반공지 구분
  const urgentNotices =
    data && Array.isArray(data)
      ? data.filter((item) => item.isPinned === "true")
      : [];
  const nonUrgentNotices =
    data && Array.isArray(data)
      ? data.filter((item) => item.isPinned === "false")
      : [];
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
    title: t("home.noNotice"),
    isPinned: "no",
  });

  return (
    <S.NoticeSection $isTablet={isTablet} $isDesktop={isDesktop}>
      <S.NoticeTitleSet $isTablet={isTablet} $isDesktop={isDesktop}>
        <S.NoticeTitleText $isTablet={isTablet} $isDesktop={isDesktop}>
          {t("home.notice")}
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
              {t("home.moreNotice")}
            </S.NoticeBtn>
          )}
        </Link>
      </S.NoticeTitleSet>
      {loading ? (
        <Loading />
      ) : (
        <S.NoticeListSet $isDesktop={isDesktop}>
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
                          ? t("home.noticeTagY")
                          : notice.isPinned
                          ? t("home.noticeTagY]")
                          : t("home.noticeTagN")}
                      </S.NoticeTag>
                      <S.NoticeText
                        $isTablet={isTablet}
                        $isDesktop={isDesktop}
                        ishovering={hoveredIndex === index}
                      >
                        {isEmpty ? t("home.noNotice") : notice.title}
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
              {t("home.moreNotice")}
            </S.NoticeBtn>
          </S.NoticeBtnBox>
        </Link>
      )}
    </S.NoticeSection>
  );
};

export default Notice;
