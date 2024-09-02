import React from "react";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const MainTitle = ({ mainText, subText }) => {
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const { isDesktop } = useMediaQueries();

  return (
    <S.Wrapper $isDesktop={isDesktop}>
      <S.BannerWrapper $isDesktop={isDesktop}>
        <S.BannerTitle>
          <S.MainText $isDesktop={isDesktop}>{mainText}</S.MainText>
          <S.SubText $isDesktop={isDesktop}>{subText}</S.SubText>
        </S.BannerTitle>
        <S.BannerImg
          $isDesktop={isDesktop}
          imageUrl={`${mediaUrl}Banner/banner_img.png`}
        />
      </S.BannerWrapper>
    </S.Wrapper>
  );
};

export default MainTitle;
