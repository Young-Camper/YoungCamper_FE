import React from "react";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useNavigate } from "react-router-dom";

const IntroContent = () => {
  const { isTablet, isDesktop } = useMediaQueries();
  const navigate = useNavigate();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  return (
    <>
      <S.MainText
        $isDesktop={isDesktop}
      >{`대한민국 최대 규모의 청년 불자의 축제, <영캠프>!`}</S.MainText>
      <S.ContentTitle $isDesktop={isDesktop}>
        불교 동아리들이 함께 모여 마음을 나누고, 서로를 응원하는 축제,
        <br />
        영캠프에 여러분을 초대합니다.
      </S.ContentTitle>
      <S.ContentText $isDesktop={isDesktop}>
        영캠프는 동국대학교 불교학생연합 학생기획위원단이 처음부터 끝까지
        정성스럽게 준비한 행사입니다
        <br />
        <br />
        이번 영캠프는 자승 대종사님의 깊은 뜻에서 비롯된 프로젝트입니다.
        <br />
        자승 스님께서는 대학생들에게 불교의 가르침을 널리 전파하고, 청년
        불자들이 마음껏 즐길 수 있는 축제의 장을 마련하고자 하셨습니다.
        <br />
        <br />
        스님의 입적 후, 돈관 이사장스님께서 이 염원을 이어 받아 영캠프가
        성공적으로 개최될 수 있게 물심양면 지원해 주셨습니다.
        <br />
        스님의 따뜻한 마음이 담긴 이 행사를 통해, 여러분 모두가 불교의
        아름다움과 깊이를 새롭게 느끼고, 함께하는 기쁨을 누리시길 바랍니다.
        <br />
        감사합니다.
        <br />
        <br />
        <br />- 동국대학교 불교학생연합 학생기획위원단 일동 -
      </S.ContentText>
      <S.YoungcampImg src={`${mediaUrl}Intro/youngcamp_intro.png`} />
      <S.BtnWrapper>
        <S.JoinBtn
          $isDesktop={isDesktop}
          $isTablet={isTablet}
          onClick={() => navigate("/performance")}
        >
          영캠프 행사 일정 보기
        </S.JoinBtn>
      </S.BtnWrapper>
    </>
  );
};

export default IntroContent;
