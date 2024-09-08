import React, { useState } from "react";
import * as S from "./style";
import TitleSet from "./locTitleSet";
import styled from "styled-components";

import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";


const LocMap = () => {
  const [floor, setFloor] = useState(1);
  const { isMobile } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const { t } = useTranslation();

  const floorData = {
    1: {
      title: "좌석배치도",
      image: `${mediaUrl}Location/location_pic.png`,
      image_mobile: `${mediaUrl}Location/location_pic.png`,
    },
    2: {
      title: "좌석배치도",
      image: `${mediaUrl}Location/location_pic.png`,
      image_mobile: `${mediaUrl}Location/location_pic.png`,
    },
  };
  return (
    <>
      <TitleSet
        mainText={t("location.title2")}
        subText={t("location.Subtitle2")}
      />
      <S.LocContainer $isMobile={isMobile}>
        <S.LocContentArea $isMobile={isMobile}>
          <S.LocTitle $isMobile={isMobile}>{floorData[floor].title}</S.LocTitle>
          <S.LocImageContainer $isMobile={isMobile}>
            {!isMobile && (
              <S.LocImage src={floorData[floor].image} $isMobile={isMobile} />
            )}
            {isMobile && (
              <S.LocImage
                src={floorData[floor].image_mobile}
                $isMobile={isMobile}
              />
            )}
          </S.LocImageContainer>
        </S.LocContentArea>
      </S.LocContainer>
    </>
  );
};

export default LocMap;
