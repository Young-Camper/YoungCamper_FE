import React, { useState } from "react";
import * as S from "../style";
import { ContentWrapper } from "../../../style/commonStyle";
import TitleSet from "../../../components/ui/TitleSet";
import { adminLogin } from "../../../lib/apis/api/adminLogin";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // 로직
    // 1. 클라이언트가 서버에 접속 시 세션 ID를 발급 받는다.
    // 2. 클라이언트는 세션 ID에 대해 쿠키를 사용해 브라우저에 저장한다.

    // test code
    // const response = await adminLogin(id, pw);
    // console.log("login page: ", response);

    // state 확인
    alert("id: " + id + " | pw: " + pw);

    // 실패했을 때
    setId("");
    setPw("");

    // 성공했을 때
    navigate("/admin42794/list");
  };

  return (
    <>
      <ContentWrapper>
        <TitleSet mainText="관리자 로그인" subText="ID와 PW를 입력해주세요.">
          로그인
        </TitleSet>
        <S.FormWrapper onSubmit={handleLoginSubmit}>
          <div>
            <div>ID: </div>
            <S.InputText
              type="text"
              placeholder="ID를 입력해주세요."
              onChange={handleIdChange}
              value={id}
            />
          </div>
          <div>
            <div>PW: </div>
            <S.InputText
              type="password"
              placeholder="PW를 입력해주세요."
              autoComplete="off"
              onChange={handlePwChange}
              value={pw}
            />
          </div>
          <S.BtnWrapper>확인</S.BtnWrapper>
        </S.FormWrapper>
      </ContentWrapper>
    </>
  );
};

export default index;
