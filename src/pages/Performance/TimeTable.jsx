import React, { useEffect, useState } from "react";
import * as S from "./style";
import TitleSet from "../../components/ui/TitleSet";
import { timetable, lineup } from "../../data/timetable";
import useMediaQueries from "../../hooks/useMediaQueries";

const TimeTable = ({ onArtistClick }) => {
  const mediaUrl = import.meta.VITE_MEDIA_URL;

  // 라인업 공개 여부 설정(true: 라인업 공개, false: 미공개)
  const lineupOpen = true;

  // -------------------------- hooks --------------------------
  const { isDesktop } = useMediaQueries();

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // 라인업 오픈 전 아티스트명 마크 처리
    const updatedLineup = !lineupOpen
      ? lineup.map((artist) => ({
          ...artist,
          name: "추후 공개",
        }))
      : lineup;
    setArtists(updatedLineup);
  }, []);

  // -------------------------- functions --------------------------
  // 해당 시간의 아티스트 정보를 반환
  const getArtistsByTime = (time) => {
    return artists.filter((artist) => artist.time === time);
  };

  // -------------------------- components --------------------------
  const PerformanceTable = (event) => {
    const currentArtists = getArtistsByTime(event.time);
    return event.id === 2 /* 수계식 레이아웃 예외처리 */ ? (
      <S.Section
        key={event.id}
        $isDesktop={isDesktop}
        $isRight={event.id}
        $isEvent={false}
      >
        <S.EventTime $isDesktop={isDesktop} $isEvent={false}>
          {event.time}
        </S.EventTime>
        <S.EventName $isDesktop={isDesktop} $isEvent={false}>
          {event.name}
        </S.EventName>
      </S.Section>
    ) : (
      <S.Section
        key={event.id}
        $isDesktop={isDesktop}
        $isRight={event.id}
        $isEvent={true}
      >
        <S.EventTime
          $isDesktop={isDesktop}
          $isEvent={true}
          $imageURL={event.cover_image}
          $lineupOpen={lineupOpen}
        >
          {event.time}
        </S.EventTime>
        <S.ArtistWrapper>
          <S.EventName $isDesktop={isDesktop} $isEvent={true}>
            <S.SmallText $isDesktop={isDesktop}>{event.index}</S.SmallText>
            {/* 라인업이 2인일 경우 레이아웃 처리 */}
            {currentArtists.length > 1 ? (
              <>
                <S.EventText $isDesktop={isDesktop}>
                  {currentArtists[0]?.name}
                  <S.Arrow
                    src={`${mediaUrl}Performance/arrow_icon.png`}
                    onClick={() => {
                      onArtistClick(currentArtists[0]);
                    }}
                    $isDesktop={isDesktop}
                  />
                </S.EventText>
                <S.EventTextRight $isDesktop={isDesktop}>
                  {currentArtists[1]?.name}
                  <S.Arrow
                    src={`${mediaUrl}Performance/arrow_icon.png`}
                    onClick={() => {
                      onArtistClick(currentArtists[1]);
                    }}
                    $isDesktop={isDesktop}
                  />
                </S.EventTextRight>
              </>
            ) : (
              <S.EventText $isDesktop={isDesktop}>
                {currentArtists[0]?.name}
                <S.Arrow
                  src={`${mediaUrl}Performance/arrow_icon.png`}
                  onClick={() => {
                    onArtistClick(currentArtists[0]);
                  }}
                  $isDesktop={isDesktop}
                />
              </S.EventText>
            )}
          </S.EventName>
        </S.ArtistWrapper>
      </S.Section>
    );
  };

  const GuideTable = (event) => {
    return (
      <S.Section key={event.id} $isRight={event.id} $isDesktop={isDesktop}>
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
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
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
