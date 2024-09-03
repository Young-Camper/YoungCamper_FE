import React, { useEffect, useState } from "react";
import * as S from "./style";
import TitleSet from "../../components/ui/TitleSet";
import { timetable, lineup } from "../../data/timetable";
import useMediaQueries from "../../hooks/useMediaQueries";

const TimeTable = ({ onArtistClick }) => {
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  // -------------------------- hooks --------------------------
  const { isDesktop } = useMediaQueries();
  const [artists, setArtists] = useState([]);

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
            <S.SmallText $isDesktop={isDesktop}>{event.index}</S.SmallText>
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
    return (
      <S.Section
        key={event.id}
        $isRight={event.id % 2 == 0}
        $isDesktop={isDesktop}
      >
        <S.GuideTime $isDesktop={isDesktop}>{event.time}</S.GuideTime>
        <S.GuideName $isDesktop={isDesktop}>{event.name}</S.GuideName>
      </S.Section>
    );
  };

  // -------------------------- return --------------------------

  return (
    <>
      <TitleSet
        mainText="타임테이블"
        subText={
          <>
            신나는 음악, 감동적인 퍼포먼스, 그리고 깜짝 이벤트까지!
            <br />
            공연을 즐기며 여러분만의 특별한 추억을 만들어보세요!
          </>
        }
      />
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
