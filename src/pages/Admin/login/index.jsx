import React, { useState } from "react";

import * as S from "../style";
import TitleSet from "../../../components/ui/TitleSet";
import { ContentWrapper } from "../../../style/commonStyle";
import { adminLogin } from "../../../lib/apis/api/adminLogin";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { adminState } from "../../../context/recoil/adminState";

const index = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isAdmin, setIsAdmin] = useRecoilState(adminState);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await adminLogin(id, pw);

      console.log("Login response:", response);
      if (response.status === 200) {
        alert("로그인 성공!");
        setIsAdmin(true);
        navigate("/admin42794/list");
      } else {
        setId("");
        setPw("");
        setIsAdmin(false);
        alert("ID, Password를 다시 확인해주세요.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsAdmin(false);
      alert("ID, Password를 다시 확인해주세요.");

      if (error.response) {
        alert("ID, Password를 다시 확인해주세요.");
        console.log(
          "로그인 실패: " + (error.response.data.message || "서버 에러 발생")
        );
      } else {
        // 서버 응답이 없는 경우 (네트워크 문제 등)
        alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      }

      setId("");
      setPw("");
    }
  };

  return (
    <>
      <ContentWrapper>
        <TitleSet mainText="관리자 로그인" subText="ID와 PW를 입력해주세요.">
          로그인
        </TitleSet>
        <S.FormWrapper onSubmit={handleLogin}>
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
