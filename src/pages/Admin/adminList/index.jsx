import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { getAnnouncements } from "../../../lib/apis/api/getAnnouncements";
import { deleteAnnouncements } from "../../../lib/apis/api/deleteAnnouncements";

import * as S from "../../Notification/main/Style";
import TitleSet from "../../../components/ui/TitleSet";
import Loading from "../../../components/ui/Loading";
import Subtitle from "../../Notification/main/Subtitle";
import { ContentWrapper } from "../../../style/commonStyle";
import { DeleteBtn } from "../style";
import { DeleteCheckBox } from "../style";

const index = () => {
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const { isTablet, isDesktop } = useMediaQueries();
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      title: "제목1",
      content: "본문1",
      date: "2024.09.04",
    },
    {
      id: 2,
      title: "제목2",
      content: "본문2",
      date: "2024.09.04",
    },
  ]);
  const [ids, setIds] = useState([]);

  const handleCheckboxChange = (id) => {
    if (ids.includes(id)) {
      setIds(ids.filter((selectedId) => selectedId !== id));
    } else {
      setIds([...ids, id]);
    }
  };

  // ======= api get =======
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getAnnouncements();
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
        if (isMounted) {
          setError("데이터를 가져오는 중 오류가 발생했습니다.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  // ======= api delete =======
  const handleAdminDelete = async () => {
    if (ids.length > 0) {
      const check = confirm("삭제하시겠습니까?");
      if (check) {
        try {
          const response = await deleteAnnouncements(ids);
          console.log("admin delete: ", response);
          alert("삭제되었습니다");
          navigate("/admin42794/list");
        } catch (error) {
          console.error("Error delete announcements:", error);
        }
      }
    } else {
      alert("선택된 게시글이 없습니다.");
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <ContentWrapper>
        <TitleSet mainText="관리자 페이지" />
        <DeleteBtn
          $isDelete={false}
          $isDesktop={isDesktop}
          onClick={() => navigate("/admin42794/write")}
        >
          작성
        </DeleteBtn>
        <DeleteBtn
          $isDelete={true}
          $isDesktop={isDesktop}
          onClick={handleAdminDelete}
        >
          선택한 게시글 삭제하기
        </DeleteBtn>
        <S.ContentWrapper $isDesktop={isDesktop}>
          <Subtitle
            num="번호"
            title="제목"
            date={isDesktop ? "날짜" : null}
            $paddingBottom="0"
            color="black"
            $fontWeight="700"
            $marginTop="0"
            $marginBottom="0"
            fontSize="16px"
            isDesktop={isDesktop}
            isTablet={isTablet}
            gap="0px"
          />
          <S.ContentContainer>
            {data.length > 1 ? (
              data.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    position: "relative",
                  }}
                >
                  <DeleteCheckBox
                    type="checkbox"
                    onChange={() => handleCheckboxChange(item.id)}
                    checked={ids.includes(item.id)}
                    $isChecked={ids.includes(item.id)}
                  />
                  <Link to={`/admin42794/list/${item.id}`}>
                    <Subtitle
                      num={item.id}
                      title={item.title}
                      date={item.date}
                      fontSize={isDesktop ? "24px" : "18px"}
                      isDesktop={isDesktop}
                      isTablet={isTablet}
                    />
                  </Link>
                </div>
              ))
            ) : (
              <>작성된 글이 없습니다.</>
            )}
          </S.ContentContainer>
        </S.ContentWrapper>
      </ContentWrapper>
    </div>
  );
};

export default index;
