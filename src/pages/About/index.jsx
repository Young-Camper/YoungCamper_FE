import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import Section from "./Section";
import Pagenation from "../FAQ/Pagenation";
import { studentCommitteeProfiles, youngCamperProfiles } from "../../data/profileData";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const Index = () => {
  const { isDesktop, isTablet, isMobile } = useMediaQueries();

  // 탭별로 currentPage 상태를 분리
  const [currentPageByTab, setCurrentPageByTab] = useState({
    students: 1,
    campers: 1,
  });

  const [activeTab, setActiveTab] = useState('students'); // 초기 활성 탭 설정

  // 현재 탭에 따라 프로필 데이터를 선택
  const profilesToDisplay = activeTab === 'students'
    ? studentCommitteeProfiles
    : youngCamperProfiles;

  const subtitle = activeTab === 'students' 
    ? "학생 기획 위원단 소개"
    : "영캠퍼 소개";

  const itemsPerPage = 9;
  const indexOfLastProfile = currentPageByTab[activeTab] * itemsPerPage;
  const indexOfFirstProfile = indexOfLastProfile - itemsPerPage;
  const currentProfiles = profilesToDisplay.slice(indexOfFirstProfile, indexOfLastProfile);
  const totalProfiles = profilesToDisplay.length;

  const paginate = (pageNumber) => {
    setCurrentPageByTab((prev) => ({
      ...prev,
      [activeTab]: pageNumber,
    }));
    window.scrollTo({ top: 328, behavior: "smooth" });
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    // 탭 변경 시 해당 탭의 페이지를 1로 초기화
    setCurrentPageByTab((prev) => ({
      ...prev,
      [tabName]: 1,
    }));
  };

  return (
    <>
      <MainTitle
        mainText="기획단"
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
      />
      <S.ContentWrapper $isDesktop={isDesktop}>
        <S.TabBar $isDesktop={isDesktop}>
          <S.TabButton 
            $isDesktop={isDesktop}
            isActive={activeTab === 'students'}
            onClick={() => handleTabChange('students')}
          >
            학생 기획 위원단
          </S.TabButton>
          <S.TabButton 
            $isDesktop={isDesktop}
            isActive={activeTab === 'campers'}
            onClick={() => handleTabChange('campers')}
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
            currentPage={currentPageByTab[activeTab]}
            totalItems={totalProfiles}
            paginate={paginate}
          />
        )}
      </S.ContentWrapper>
    </>
  );
};

export default Index;
