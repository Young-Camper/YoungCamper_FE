import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import Section from "./Section";
import Pagenation from "../FAQ/Pagenation";
import {
  studentCommitteeProfiles,
  youngCamperProfiles,
} from "../../data/profileData";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [activeTab, setActiveTab] = useState("students"); // 초기 활성 탭 설정
  const { isDesktop, isTablet, isMobile } = useMediaQueries();
  const { t } = useTranslation();

  // 탭별로 currentPage 상태를 분리
  const [currentPageByTab, setCurrentPageByTab] = useState({
    students: 1,
    campers: 1,
  });

  // 탭에 따라 프로필 데이터를 선택
  const profilesToDisplay =
    activeTab === "students" ? studentCommitteeProfiles : youngCamperProfiles;

  const subtitle =
    activeTab === "students"
      ? "각 단과대학 불교동아리 회장단으로 구성되어 있습니다."
      : "본 홈페이지를 제작한 TF팀으로 동국대학교 학생들로 구성되어 있습니다.";

  const itemsPerPage = 9;
  const indexOfLastProfile = currentPageByTab[activeTab] * itemsPerPage;
  const indexOfFirstProfile = indexOfLastProfile - itemsPerPage;
  const currentProfiles = profilesToDisplay.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );
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
        mainText={t("member.bannerTitle")}
        subText={t("member.bannerSubtitle")}
      />
      <S.ContentWrapper $isDesktop={isDesktop}>
        <S.TabBar $isDesktop={isDesktop}>
          <S.TabButton
            $isDesktop={isDesktop}
            isActive={activeTab === "students"}
            onClick={() => handleTabChange("students")}
          >
            {t("member.com")}
          </S.TabButton>
          <S.TabButton
            $isDesktop={isDesktop}
            isActive={activeTab === "campers"}
            onClick={() => handleTabChange("campers")}
          >
            {t("member.maker")}
          </S.TabButton>
        </S.TabBar>

        <Section
          title={activeTab === "students" ? t("member.com") : t("member.maker")}
          subtitle={t("member.comIntro")}
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
