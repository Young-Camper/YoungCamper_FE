import React, { useEffect, useState } from "react";
import TitleSet from "../../../components/ui/TitleSet";
import { getAdmin } from "../../../lib/apis/api/getAdmin";
import * as S from "../../Notification/main/Style";
import Subtitle from "../../Notification/main/Subtitle";
import { Link, useNavigate } from "react-router-dom";
import { DeleteBtn } from "../style";

const index = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      title: "타이틀1",
      date: "2024-08-27",
    },
    {
      id: 2,
      title: "타이틀2",
      date: "2024-08-27",
    },
    {
      id: 3,
      title: "타이틀3",
      date: "2024-08-27",
    },
    {
      id: 4,
      title: "타이틀4",
      date: "2024-08-27",
    },
    {
      id: 5,
      title: "타이틀5",
      date: "2024-08-27",
    },
  ]);

  // ============== FE TEST CODE ==============
  // useEffect(() => {
  //   const getAdminData = async () => {
  //     const response = await getAdmin();
  //     setData(response.data);
  //   };
  //   getAdminData();
  // }, []);

  // ============== BE TEST CODE - get 요청 ==============
  useEffect(() => {
    const getAdminData = async () => {
      try {
        const response = await axios.get("/api/admin"); // API 엔드포인트를 실제로 사용하고자 하는 URL로 대체하세요
        setData(response.data);
        console.log("성공!", response.data);
      } catch (error) {
        console.error("Failed to fetch admin data:", error);
      }
    };

    getAdminData();
  }, []);

  return (
    <>
      <TitleSet mainText="관리자 페이지" />
      <DeleteBtn onClick={() => navigate("/admin42794/write")}>작성</DeleteBtn>
      <S.ContentWrapper>
        <Subtitle
          num="번호"
          title="제목"
          date="날짜"
          $paddingBottom="0"
          color="black"
          $fontWeight="700"
          $marginTop="0"
          $marginBottom="0"
        />
        <S.ContentContainer>
          {data.map((item, index) => (
            <Link to={`/admin42794/list/${item.id}`} key={index}>
              <Subtitle num={item.num} title={item.title} date={item.date} />
            </Link>
          ))}
        </S.ContentContainer>
      </S.ContentWrapper>
    </>
  );
};

export default index;
