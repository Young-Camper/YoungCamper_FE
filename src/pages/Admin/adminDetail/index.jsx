import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { getAnnouncement } from "../../../lib/apis/api/getAnnouncement";

import * as S from "../../Notification/detail/Style";
import * as St from "../style";
import TitleSet from "../../../components/ui/TitleSet";
import { ContentWrapper } from "../../../style/commonStyle";
import Loading from "../../../components/ui/Loading";

import { useRecoilValue } from "recoil";
import { adminState } from "../../../context/recoil/adminState";
import ViewNotice from "./ViewNotice";
import UpdateNotice from "./UpdateNotice";

const index = () => {
  const { isDesktop } = useMediaQueries();
  const { id } = useParams();

  const [data, setData] = useState({});
  const [enData, setEnData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();
  const isAdmin = useRecoilValue(adminState);

  // == 로컬 환경 테스트를 위해 주석처리 ==
  // 관리자 여부 확인
  // useEffect(() => {
  //   if (!isAdmin) {
  //     alert("관리자 권한이 필요합니다.");
  //     navigate("/admin42794");
  //   }
  // }, [isAdmin, navigate]);

  // ====== api get ======
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const koResponse = await getAnnouncement(id, "ko");
        const enResponse = await getAnnouncement(id, "en");
        console.log("koResponse", koResponse.data.data);
        console.log("enResponse", enResponse.data.data);
        setData(koResponse.data.data);
        setEnData(enResponse.data.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <ContentWrapper $isDesktop={isDesktop}>
        <TitleSet mainText="상세 페이지" />
        <S.TitleWrapper $isDesktop={isDesktop}>
          {isEditing ? (
            <UpdateNotice
              data={data}
              enData={enData}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ) : (
            <ViewNotice setIsEditing={setIsEditing} data={data} />
          )}

          <S.ShowListWrapper>
            <Link to="/admin42794/list">
              <S.ShowListContainer $isDesktop={isDesktop}>
                목록보기
              </S.ShowListContainer>
            </Link>
          </S.ShowListWrapper>
        </S.TitleWrapper>
      </ContentWrapper>
    </div>
  );
};

export default index;
