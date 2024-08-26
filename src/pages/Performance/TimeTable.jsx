import React, { useEffect, useState } from "react";
import * as S from "./style";
import TitleSet from "../../components/ui/TitleSet";
import { timetable, lineup } from "../../data/timetable";
import ArtistModal from "./ArtistModal";
import Arrow from "../../assets/images/timetable/arrow_icon.png";

const TimeTable = ({ modalOpen, setModalOpen }) => {
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
      <S.Container>
        {timetable.map((event) => {
          const currentArtists = getArtistsByTime(event.time);

          return event.is_event ? (
            event.id === 2 /* 수계식 */ ? (
              <S.Section key={event.id} isright={event.id}>
                <S.EventTime src={event.cover_image} />
                <S.EventName>{event.name}</S.EventName>
              </S.Section>
            ) : (
              <S.Section key={event.id} isright={event.id}>
                <S.EventTime src={event.cover_image} />
                <S.ArtistWrapper>
                  <S.EventName>
                    <S.SmallText>{event.index}</S.SmallText>
                    {currentArtists.length > 1 ? (
                      <>
                        <S.EventText>
                          {currentArtists[0]?.name}
                          <S.Arrow
                            src={Arrow}
                            onClick={() => {
                              handleOpenModal(currentArtists[0]);
                            }}
                          />
                        </S.EventText>
                        <S.EventTextRight>
                          {currentArtists[1]?.name}
                          <S.Arrow
                            src={Arrow}
                            onClick={() => {
                              handleOpenModal(currentArtists[1]);
                            }}
                          />
                        </S.EventTextRight>
                      </>
                    ) : (
                      <S.EventText>
                        {currentArtists[0]?.name}
                        <S.Arrow
                          src={Arrow}
                          onClick={() => {
                            handleOpenModal(currentArtists[0]);
                          }}
                        />
                      </S.EventText>
                    )}
                  </S.EventName>
                </S.ArtistWrapper>
              </S.Section>
            )
          ) : (
            <S.Section key={event.id} isright={event.id}>
              <S.GuideTime>{event.time}</S.GuideTime>
              <S.GuideName>{event.name}</S.GuideName>
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
