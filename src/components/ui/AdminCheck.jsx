import React, { useEffect, useState } from "react";
import * as S from "./style";
import { getAdminCheck } from "../../lib/apis/api/getAdminCheck";
import { adminLogout } from "../../lib/apis/api/adminLogout";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { adminState } from "../../context/recoil/adminState";

const AdminCheck = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useRecoilState(adminState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAdminCheck();
        setIsAdmin(response.data);
        console.log("admin check:", response.data);
      } catch (error) {
        console.error("Error admin check:", error);
      }
    };

    fetchData();
  }, [setIsAdmin]);

  // ======= 로그아웃 =======
  const handleAdminLogout = async () => {
    const check = confirm("admin 로그아웃 하십니까🤓?");
    if (check) {
      try {
        await adminLogout();
        alert("로그아웃 되었습니다!");
        setIsAdmin(false);
        navigate("/");
      } catch (error) {
        console.error("Error admin logout:", error);
      }
    }
  };

  // ======= 관리자 여부 확인 =======
  const handleAdminCheck = async () => {
    try {
      const response = await getAdminCheck();
      alert(response.data);
      // setIsAdmin(response.data);
    } catch (error) {
      console.error("Error admin check:", error);
    }
  };

  return (
    isAdmin && (
      <S.AdminLogout>
        <h4 onClick={handleAdminLogout} style={{ color: "red" }}>
          관리자 로그아웃
        </h4>
        <div>
          <h4 onClick={() => navigate("/admin42794/list")}>
            공지 글 조회 및 삭제
          </h4>
          <h4 onClick={() => navigate("/admin42794/write")}>공지 글 작성</h4>
          <h4 onClick={() => navigate("/review")}>후기 삭제</h4>
          <h4 onClick={handleAdminCheck}>Admin Check</h4>
        </div>
      </S.AdminLogout>
    )
  );
};

export default AdminCheck;
