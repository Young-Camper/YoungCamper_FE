import React, { useEffect, useState } from "react";
import * as S from "./style";
import TitleSet from "../../components/ui/TitleSet";
import { timetable, lineup } from "../../data/timetable";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const TimeTable = ({ onArtistClick }) => {
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  // -------------------------- hooks --------------------------
  const { isDesktop, isMobile } = useMediaQueries();
  const [artists, setArtists] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setArtists(lineup);
  }, []);

  // -------------------------- functions --------------------------
  // 해당 시간의 아티스트 정보를 반환
  const getArtistsByTime = (time) => {
    return artists.filter((artist) => artist.time === time);
  };

  // -------------------------- components --------------------------
  const PerformanceTable = (event) => {
    const currentArtists = getArtistsByTime(event.time);
    const index = event.index[i18n.language === "ko" ? 0 : 1];

    return (
      <S.Section
        key={event.id}
        $isDesktop={isDesktop}
        $isRight={event.id % 2 == 0}
      >
        <S.EventTime
          $isDesktop={isDesktop}
          $isEvent={event.is_event}
          $imageURL={event.cover_image}
        >
          <S.TimeText $isEvent={event.is_event}>{event.time}</S.TimeText>
        </S.EventTime>
        <S.ArtistWrapper>
          <S.EventName $isDesktop={isDesktop}>
            <S.SmallText $isDesktop={isDesktop}>{index}</S.SmallText>
            <S.EventText $isDesktop={isDesktop} $isRight={event.id % 2 == 0}>
              {currentArtists[0]?.name}
              <S.Arrow
                src={`${mediaUrl}Performance/arrow_icon.png`}
                onClick={() => {
                  onArtistClick(currentArtists[0]);
                }}
                $isDesktop={isDesktop}
              />
            </S.EventText>
          </S.EventName>
        </S.ArtistWrapper>
      </S.Section>
    );
  };

  const GuideTable = (event) => {
    const name = event.name[i18n.language === "ko" ? 0 : 1];

    return (
      <S.Section
        key={event.id}
        $isRight={event.id % 2 == 0}
        $isDesktop={isDesktop}
      >
        <S.GuideTime $isDesktop={isDesktop}>{event.time}</S.GuideTime>
        <S.GuideName $isDesktop={isDesktop}>{name}</S.GuideName>
      </S.Section>
    );
  };

  // -------------------------- return --------------------------

  return (
    <>
      <S.Container $isDesktop={isDesktop}>
        {timetable &&
          timetable.map((event) =>
            event.is_event ? PerformanceTable(event) : GuideTable(event)
          )}
      </S.Container>
    </>
  );
};

export default TimeTable;
