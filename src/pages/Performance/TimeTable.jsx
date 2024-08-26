import React, { useEffect, useState } from "react";
import * as S from "./style";
import TitleSet from "../../components/ui/TitleSet";
import { timetable, lineup } from "../../data/timetable";
import ArtistModal from "./ArtistModal";
import Arrow from "../../assets/images/timetable/arrow_icon.png";
import useMediaQueries from "../../hooks/useMediaQueries";

const TimeTable = ({ modalOpen, setModalOpen }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  const lineupOpen = false; /* 라인업 공개 여부 */
  const [artists, setArtists] = useState([]);
  const [clickedArtist, setClickedArtist] = useState({});

  useEffect(() => {
    // 라인업 오픈 전 아티스트명 마크 처리
    const updatedLineup = lineupOpen
      ? lineup.map((artist) => ({
          ...artist,
          name: "추후 공개",
        }))
      : lineup;
    setArtists(updatedLineup);
  }, []);

  const handleOpenModal = (artist) => {
    setModalOpen(true);
    setClickedArtist(artist);
  };

  // 해당 시간의 아티스트 정보를 반환
  const getArtistsByTime = (time) => {
    return artists.filter((artist) => artist.time === time);
  };

  const TimeTableSection = () => {
    return (
      <S.Container
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        {timetable.map((event) => {
          const currentArtists = getArtistsByTime(event.time);

          return event.is_event ? (
            event.id === 2 /* 수계식 */ ? (
              <S.Section
                key={event.id}
                $isMobile={isMobile}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
                $isRight={event.id}
                $isEvent={false}
              >
                <S.EventTime
                  $isMobile={isMobile}
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  $isEvent={false}
                >
                  {event.time}
                </S.EventTime>
                {/* <S.EventTime src={event.cover_image} /> */}
                <S.EventName>{event.name}</S.EventName>
              </S.Section>
            ) : (
              <S.Section
                key={event.id}
                $isMobile={isMobile}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
                $isRight={event.id}
                $isEvent={true}
              >
                {/* <S.EventTime
                  src={event.cover_image}
                  $isMobile={isMobile}
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  $isEvent={true}
                /> */}
                <S.EventTime
                  $isMobile={isMobile}
                  $isTablet={isTablet}
                  $isDesktop={isDesktop}
                  $isEvent={true}
                >
                  {event.time}
                </S.EventTime>
                <S.ArtistWrapper>
                  <S.EventName
                    $isMobile={isMobile}
                    $isTablet={isTablet}
                    $isDesktop={isDesktop}
                    $isEvent={true}
                  >
                    <S.SmallText
                      $isMobile={isMobile}
                      $isTablet={isTablet}
                      $isDesktop={isDesktop}
                    >
                      {event.index}
                    </S.SmallText>
                    {currentArtists.length > 1 ? (
                      <>
                        <S.EventText
                          $isMobile={isMobile}
                          $isTablet={isTablet}
                          $isDesktop={isDesktop}
                        >
                          {currentArtists[0]?.name}
                          <S.Arrow
                            src={Arrow}
                            onClick={() => {
                              handleOpenModal(currentArtists[0]);
                            }}
                            $isMobile={isMobile}
                            $isTablet={isTablet}
                            $isDesktop={isDesktop}
                          />
                        </S.EventText>
                        <S.EventTextRight
                          $isMobile={isMobile}
                          $isTablet={isTablet}
                          $isDesktop={isDesktop}
                        >
                          {currentArtists[1]?.name}
                          <S.Arrow
                            src={Arrow}
                            onClick={() => {
                              handleOpenModal(currentArtists[1]);
                            }}
                            $isMobile={isMobile}
                            $isTablet={isTablet}
                            $isDesktop={isDesktop}
                          />
                        </S.EventTextRight>
                      </>
                    ) : (
                      <S.EventText
                        $isMobile={isMobile}
                        $isTablet={isTablet}
                        $isDesktop={isDesktop}
                      >
                        {currentArtists[0]?.name}
                        <S.Arrow
                          src={Arrow}
                          onClick={() => {
                            handleOpenModal(currentArtists[0]);
                          }}
                          $isMobile={isMobile}
                          $isTablet={isTablet}
                          $isDesktop={isDesktop}
                        />
                      </S.EventText>
                    )}
                  </S.EventName>
                </S.ArtistWrapper>
              </S.Section>
            )
          ) : (
            <S.Section
              key={event.id}
              $isRight={event.id}
              $isMobile={isMobile}
              $isTablet={isTablet}
              $isDesktop={isDesktop}
            >
              <S.GuideTime
                $isMobile={isMobile}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
              >
                {event.time}
              </S.GuideTime>
              <S.GuideName
                $isMobile={isMobile}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
              >
                {event.name}
              </S.GuideName>
            </S.Section>
          );
        })}
      </S.Container>
    );
  };

  return (
    <>
      {modalOpen && (
        <ArtistModal setModalOpen={setModalOpen} artist={clickedArtist} />
      )}
      <TitleSet
        mainText="타임테이블"
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
      />
      <TimeTableSection />
    </>
  );
};

export default TimeTable;
