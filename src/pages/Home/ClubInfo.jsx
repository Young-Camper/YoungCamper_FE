import React, {useState} from 'react'
import * as S from "./HomeStyle";
import ClubSlider from './ClubSlider';
import { Link } from "react-router-dom";

const ClubInfo = () =>  {
  const [isHoveringClub, setIsHoveringClub] = useState(false);

  const handleMouseOver4 = () => {
    setIsHoveringClub(true);
  };
  const handleMouseOut4 = () => {
    setIsHoveringClub(false);
  };

  return (
    <S.ClubInfoSection>
      <S.ClubInfoBox>
        <S.ClubTitleBox>
          <S.ClubTitle>영캠프 동아리와 함께해보세요</S.ClubTitle>
        </S.ClubTitleBox>
        <S.GalleryBox>
          <S.Gallery><ClubSlider /></S.Gallery>
        </S.GalleryBox>
        <S.ClubFrameBox>
          <Link to={"./promotion"}>
            <S.ClubBtnBox  ishoveringClub={isHoveringClub}
              onMouseOver={handleMouseOver4}
              onMouseOut={handleMouseOut4} >
              <S.ClubBtnText ishoveringClub={isHoveringClub}>동아리 보러가기</S.ClubBtnText>
            </S.ClubBtnBox>
            </Link>
        </S.ClubFrameBox>
      </S.ClubInfoBox>
    </S.ClubInfoSection>
  )
}

export default ClubInfo
