import React, { useState } from "react";
import * as S from "./style";
import TitleSet from "../../components/ui/TitleSet";
import artists from "../../data/artists.json";
import ArtistModal from "./ArtistModal";

const TimeTable = ({ modalOpen, setModalOpen }) => {
  const [clickedArtist, setClickedArtist] = useState({});

  const handleOpenModal = (artist) => {
    setModalOpen(true);
    setClickedArtist(artist);
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
      <div style={{ display: "flex", gap: "30px", padding: "100px 0px" }}>
        {artists &&
          artists.map((artist) => (
            <div key={artist.id}>
              <img
                src={artist.imgURL}
                onClick={() => handleOpenModal(artist)}
              />
              <div>{artist.name}</div>
              <div>{artist.time}</div>
              <div>{artist.etc}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TimeTable;
