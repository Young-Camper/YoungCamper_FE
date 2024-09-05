import React, {useState} from 'react'
import * as S from "./HomeStyle";
import ClubSlider from './ClubSlider';
import { Link } from "react-router-dom";
import useMediaQueries from "../../hooks/useMediaQueries";

const ClubInfo = () =>  {
  const [isHoveringClub, setIsHoveringClub] = useState(false);

  const handleMouseOver4 = () => {
    setIsHoveringClub(true);
  };
  const handleMouseOut4 = () => {
    setIsHoveringClub(false);
  };

  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <S.ClubInfoSection $isTablet={isTablet} $isDesktop={isDesktop}>
      
        <S.ClubTitleBox $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.ClubTitle $isTablet={isTablet} $isDesktop={isDesktop}>영캠프 동아리와 함께해보세요</S.ClubTitle>
        </S.ClubTitleBox>
        <S.GalleryBox $isTablet={isTablet} $isDesktop={isDesktop}>
          <S.Gallery $isTablet={isTablet} $isDesktop={isDesktop}>{<ClubSlider />}</S.Gallery>
        </S.GalleryBox>
        <S.ClubFrameBox $isTablet={isTablet} $isDesktop={isDesktop}>
          <Link to={"./promotion"}>
            <S.ClubBtnBox $isTablet={isTablet} $isDesktop={isDesktop} $ishoveringClub={isHoveringClub}
              onMouseOver={handleMouseOver4}
              onMouseOut={handleMouseOut4} >
              <S.ClubBtnText $isDesktop={isDesktop} $ishoveringClub={isHoveringClub}>동아리 보러가기</S.ClubBtnText>
            </S.ClubBtnBox>
            </Link>
        </S.ClubFrameBox>
      
    </S.ClubInfoSection>
  )
}

export default ClubInfo
