import React, { useEffect, useState } from "react";
import * as S from "./HomeStyle";
import { Link } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";
import Loading from "../../components/ui/Loading";
import { getAnnouncements } from "../../lib/apis/api/getAnnouncements";
import { useTranslation } from "react-i18next";

const Notice = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [urgentNotices, setUrgentNotices] = useState([]);
  const [updatedNotices, setupdatedNotices] = useState([]);
  const [nonUrgentNotices, setNonUrgentNotices] = useState([]);
  const [mainNotices, setMainNotices] = useState([]);
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

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
        const response = await getAnnouncements(currentLanguage);
        setFilteredData(response.data.data);
      } catch (error) {
        // 오류 처리
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentLanguage]);

  useEffect(() => {
    // 필독 공지 필터링
    const urgentNotices = filteredData.filter((item) => item.isPinned === true);
    const nonUrgentNotices = filteredData.filter(
      (item) => item.isPinned === false
    );
    setUrgentNotices(urgentNotices);
    setNonUrgentNotices(nonUrgentNotices);
  }, [filteredData]);

  useEffect(() => {
    if (urgentNotices.length > 0 || nonUrgentNotices.length > 0) {
      let updatedNotices = [];

      //최신순으로 설정
      if (urgentNotices.length >= 4) {
        updatedNotices = urgentNotices
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4);
      } else {
        const nonUrgentToAdd = 4 - urgentNotices.length;
        const addNotices = nonUrgentNotices
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, nonUrgentToAdd);
        updatedNotices = urgentNotices
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .concat(addNotices);
      }

      // 공지사항 리스트 업데이트
      setMainNotices(updatedNotices.slice(0, 4));
    }
  }, [urgentNotices, nonUrgentNotices, t]);

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
              $ishovering={hoveredIndex === "button"}
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
          {[...mainNotices].map((notice, index) => {
            return (
              <S.NoticeListFrame
                key={index}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
              >
                <Link
                  to={`/notification/${notice.id}`}
                  style={{ width: "100%" }}
                >
                  <S.NoticeList
                    $isTablet={isTablet}
                    $isDesktop={isDesktop}
                    $ishovering={hoveredIndex === index}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={handleMouseOut}
                  >
                    <S.NoticeItemBox
                      $isTablet={isTablet}
                      $isDesktop={isDesktop}
                    >
                      <S.NoticeTag
                        $isDesktop={isDesktop}
                        $ishovering={hoveredIndex === index}
                      >
                        {notice.isPinned
                          ? t("home.noticeTagY")
                          : t("home.noticeTagN")}
                      </S.NoticeTag>
                      <S.NoticeText
                        $isTablet={isTablet}
                        $isDesktop={isDesktop}
                        $ishovering={hoveredIndex === index}
                      >
                        {`${t(notice.title)}`}
                      </S.NoticeText>
                    </S.NoticeItemBox>
                    <S.ArrowImg2Box $isDesktop={isDesktop}>
                      <S.ArrowImg3
                        $isDesktop={isDesktop}
                        $ishovering={hoveredIndex === index}
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
