import React, { useEffect, useState } from "react";
import * as S from "./style";
import { getAdminCheck } from "../../lib/apis/api/getAdminCheck";

const AdminCheck = () => {
  const [isAdmin, setIsAdmin] = useState(false);

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
  }, []);

  return (
    isAdmin && (
      <>
        <S.AdminCheckWrapper>관리자 로그아웃</S.AdminCheckWrapper>
      </>
    )
  );
};

export default AdminCheck;
