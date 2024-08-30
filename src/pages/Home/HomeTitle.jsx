import React, { useState } from "react";
import * as S from "./HomeStyle";
import { Link } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";

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
              src=".\src\assets\images\Home\Portal.png"
            />
          </S.SpaceImgBox>
        </S.SpaceBoxTop>
        {/* <S.TitlePoster $isDesktop={isDesktop}></S.TitlePoster> 주인공포스터 반영 예정 */}
        <S.TitleMainSet $isTablet={isTablet} $isDesktop={isDesktop}>
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
              {/* <S.TitleImg $isDesktop={isDesktop} src=".\src\assets\images\Home\Dawn.png" /> */}
              <S.TitleText
                ishoveringYoung={titleHover.young}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
              >
                YOUNG
              </S.TitleText>
              {isDesktop && (
                <S.TitleImg
                  $isDesktop={isDesktop}
                  ishoveringYoung={titleHover.young}
                  src=".\src\assets\images\Home\Portal.png"
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
              {/* <S.Rectangle></S.Rectangle> */}
              <S.TitleText
                ishoveringCamp={titleHover.camp}
                $isTablet={isTablet}
                $isDesktop={isDesktop}
              >
                CAMP
              </S.TitleText>
              {/* {isDesktop && (
                <S.TitleImg
                  $isDesktop={isDesktop}
                  src=".\src\assets\images\Home\Dawn.png"
                />
              )} */}
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
