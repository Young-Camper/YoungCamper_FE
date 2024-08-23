import React from "react";
import * as S from "./style";
import { ContentWrapper } from "../../style/commonStyle";
import TitleSet from "../../components/ui/TitleSet";

const index = () => {
  return (
    <ContentWrapper>
      <TitleSet
        mainText="관리자 페이지"
        subText="관리자 ID와 PW를 입력해주세요."
      >
        로그인
      </TitleSet>
      <S.FormWrapper>
        <div>
          <div>ID: </div>
          <S.InputText placeholder="ID를 입력해주세요." />
        </div>
        <div>
          <div>PW: </div>
          <S.InputText placeholder="PW를 입력해주세요." />
        </div>
        <S.BtnWrapper>확인</S.BtnWrapper>
      </S.FormWrapper>
    </ContentWrapper>
  );
};

export default index;
