import React, { useState } from "react";
import * as S from "../style";
import { ContentWrapper } from "../../../style/commonStyle";
import TitleSet from "../../../components/ui/TitleSet";
import { adminLogin } from "../../../lib/apis/api/adminLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/admin/login", {
        username: id, // username을 입력된 값으로 설정
        password: pw, // password를 입력된 값으로 설정
      });

      // 로그인 성공 시 응답 처리
      console.log("Login response:", response);
      if (response.data.success) {
        alert("로그인 성공!");
        navigate("/admin42794/list");
      } else {
        setId("");
        setPw("");
        alert("로그인 실패: " + response.data.message);
      }
    } catch (error) {
      // 로그인 실패 시 오류 처리
      console.error("Login error:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
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
