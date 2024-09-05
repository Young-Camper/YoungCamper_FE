import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import Section from "./Section";
import Pagenation from "../FAQ/Pagenation";
import { studentCommitteeProfiles, youngCamperProfiles } from "../../data/profileData";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const index = () => {
  const [activeTab, setActiveTab] = useState('students'); // 초기 활성 탭 설정
  const [currentPage, setCurrentPage] = useState(1);
  const { isDesktop, isTablet, isMobile } = useMediaQueries();

  // 탭에 따라 프로필 데이터를 선택
  const profilesToDisplay = activeTab === 'students' 
    ? studentCommitteeProfiles 
    : youngCamperProfiles;

  // 소개글 변경될 수 있어 구분해둠
  const subtitle = activeTab === 'students' 
  ? "각 단과대학 불교동아리 회장단으로 구성되어 있습니다." 
  : "본 홈페이지를 제작한 TF팀으로 동국대학교 학생들로 구성되어 있습니다.";

  const itemsPerPage = 9; // 페이지당 항목 수
  const indexOfLastProfile = currentPage * itemsPerPage;
  const indexOfFirstProfile = indexOfLastProfile - itemsPerPage;
  const currentProfiles = profilesToDisplay.slice(indexOfFirstProfile, indexOfLastProfile);
  const totalProfiles = profilesToDisplay.length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 328, behavior: "smooth" });
  }

  return (
    <>
      <MainTitle
        mainText="기획단"
        subText=""
      />
      <S.ContentWrapper $isDesktop={isDesktop}>
        <S.TabBar $isDesktop={isDesktop}>
          <S.TabButton $isDesktop={isDesktop}
            isActive={activeTab === 'students'} 
            onClick={() => setActiveTab('students')}
          >
            학생 기획 위원단
          </S.TabButton>
          <S.TabButton $isDesktop={isDesktop}
            isActive={activeTab === 'campers'} 
            onClick={() => setActiveTab('campers')}
          >
            영캠퍼
          </S.TabButton>
        </S.TabBar>
        <Section 
          title={activeTab === 'students' ? "학생 기획 위원단" : "영캠퍼"}
          subtitle={subtitle}
          profiles={isDesktop ? profilesToDisplay : currentProfiles}
        />

        {(isTablet || isMobile) && (
          <Pagenation
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalItems={totalProfiles}
            paginate={paginate}
          />
        )}
      </S.ContentWrapper>
    </>
  );
};

export default index;
