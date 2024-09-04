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

  // ======= api get =======
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

  return (
    isAdmin && (
      <>
        <S.AdminLogout onClick={handleAdminLogout}>
          관리자 로그아웃
        </S.AdminLogout>
      </>
    )
  );
};

export default AdminCheck;
