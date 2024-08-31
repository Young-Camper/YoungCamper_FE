import React, { useState } from "react";
import * as S from "./HomeStyle";
import { Link } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";

const mediaUrl = import.meta.env.VITE_MEDIA_URL;

const HomeTitle = () => {
  const [titleHover, setTitleHover] = useState({
    young: false,
    camp: false,
    festival: false,
    date: false,
    place: false,
    with: false,
  });

  const handleMouseOver = (key) => {
    setTitleHover((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseOut = (key) => {
    setTitleHover((prev) => ({ ...prev, [key]: false }));
  };

  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <S.TitleSection $isTablet={isTablet} $isDesktop={isDesktop}>
      <S.TitleSpaceSet $isTablet={isTablet} $isMobile={isMobile}>
        <S.SpaceBoxTop $isTablet={isTablet}>
          <S.SpaceImgBox>
            <S.SpacePortal
              $isTablet={isTablet}
              $isMobile={isMobile}
              src={`${mediaUrl}Home/Portal.png`}
            />
          </S.SpaceImgBox>
        </S.SpaceBoxTop>
        <S.TitleMainSet $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.TitleMiniText1>who’s our 주인공</S.TitleMiniText1>
          <S.TitleMiniText2>youngcamp</S.TitleMiniText2>
          <S.TitleMiniText3>youngcamp</S.TitleMiniText3>
          <S.TitleMiniText4>dongguk university</S.TitleMiniText4>
          <S.TitleBox
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            onMouseOver={() => handleMouseOver("young")}
            onMouseOut={() => handleMouseOut("young")}
            ishoveringYoung={titleHover.young}
          >
            <S.TextBox
              $isTablet={isTablet}
              $isMobile={isMobile}
              $isDesktop={isDesktop}
            >
              <S.TitleText
                ishoveringYoung={titleHover.young}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
              >
                YOUNG
              </S.TitleText>
              {isDesktop && (
                <S.TitlePortal
                  $isDesktop={isDesktop}
                  ishoveringYoung={titleHover.young}
                />
              )}
            </S.TextBox>
          </S.TitleBox>
          <S.TitleBox
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            onMouseOver={() => handleMouseOver("camp")}
            onMouseOut={() => handleMouseOut("camp")}
            ishoveringCamp={titleHover.camp}
          >
            <S.TextBox2
              $isTablet={isTablet}
              $isMobile={isMobile}
              $isDesktop={isDesktop}
            >
              <S.TitleText
                ishoveringCamp={titleHover.camp}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
              >
                CAMP
              </S.TitleText>
              {isDesktop && (<S.TitleDawn ishoveringCamp={titleHover.camp}></S.TitleDawn>)}
            </S.TextBox2>
          </S.TitleBox>
          <S.TitleBox
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            onMouseOver={() => handleMouseOver("festival")}
            onMouseOut={() => handleMouseOut("festival")}
            ishoveringFestival={titleHover.festival}
          >
            <S.TextBox
              $isTablet={isTablet}
              $isMobile={isMobile}
              $isDesktop={isDesktop}
            >
              <S.TitleText
                ishoveringFestival={titleHover.festival}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
              >
                FESTIVAL
              </S.TitleText>
              {isDesktop && (
                <S.TitlePortal
                  $isDesktop={isDesktop}
                  ishoveringFestival={titleHover.festival}
                />
              )}
            </S.TextBox>
          </S.TitleBox>
          {(isTablet || isMobile) && <S.SpaceBoxBottom $isTablet={isTablet} />}
        </S.TitleMainSet>
      </S.TitleSpaceSet>

      <S.TitleListSet $isTablet={isTablet} $isDesktop={isDesktop}>
        <S.TitleList
          $isTablet={isTablet}
          $isDesktop={isDesktop}
          onMouseOver={() => handleMouseOver("date")}
          onMouseOut={() => handleMouseOut("date")}
        >
          <S.TitleFrameBox $isDesktop={isDesktop}>
            <S.TitleFrameImg
              $isDesktop={isDesktop}
              ishoveringDate={titleHover.date}
            ></S.TitleFrameImg>
            <S.TitleFrameText
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              ishoveringDate={titleHover.date}
            >
              2024.09.24
            </S.TitleFrameText>
          </S.TitleFrameBox>
          <S.ArrowImgBox $isTablet={isTablet} $isDesktop={isDesktop}>
            <Link to={"/performance"}>
              <S.ArrowImg
                $isDesktop={isDesktop}
                ishoveringDate={titleHover.date}
              ></S.ArrowImg>
            </Link>
          </S.ArrowImgBox>
        </S.TitleList>
        <S.TitleList
          $isTablet={isTablet}
          $isDesktop={isDesktop}
          onMouseOver={() => handleMouseOver("place")}
          onMouseOut={() => handleMouseOut("place")}
        >
          <S.TitleFrameBox $isDesktop={isDesktop}>
            <S.TitleFrameImg
              $isDesktop={isDesktop}
              ishoveringPlace={titleHover.place}
            ></S.TitleFrameImg>
            <S.TitleFrameText
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              ishoveringPlace={titleHover.place}
            >
              장충체육관
            </S.TitleFrameText>
          </S.TitleFrameBox>
          <S.ArrowImgBox $isTablet={isTablet} $isDesktop={isDesktop}>
            <Link to={"/location"}>
              <S.ArrowImg
                $isDesktop={isDesktop}
                ishoveringPlace={titleHover.place}
              ></S.ArrowImg>
            </Link>
          </S.ArrowImgBox>
        </S.TitleList>
        <S.TitleList
          $isTablet={isTablet}
          $isDesktop={isDesktop}
          onMouseOver={() => handleMouseOver("with")}
          onMouseOut={() => handleMouseOut("with")}
        >
          <S.TitleFrameBox $isDesktop={isDesktop}>
            <S.TitleFrameImg
              $isDesktop={isDesktop}
              ishoveringWith={titleHover.with}
            ></S.TitleFrameImg>
            <S.TitleFrameText
              $isTablet={isTablet}
              $isDesktop={isDesktop}
              ishoveringWith={titleHover.with}
            >
              YOUNGCAMP 함께하기
            </S.TitleFrameText>
          </S.TitleFrameBox>
          <S.ArrowImgBox $isTablet={isTablet} $isDesktop={isDesktop}>
            <Link to={"./promotion"}>
              <S.ArrowImg
                $isDesktop={isDesktop}
                ishoveringWith={titleHover.with}
              ></S.ArrowImg>
            </Link>
          </S.ArrowImgBox>
        </S.TitleList>{" "}
        <S.TitleLine></S.TitleLine>
      </S.TitleListSet>
    </S.TitleSection>
  );
};

export default HomeTitle;
