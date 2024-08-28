import React, { useState } from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import Section from "./Section";
import { studentCommitteeProfiles, youngCamperProfiles } from "../../data/profileData";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const index = () => {
  const [activeTab, setActiveTab] = useState('students'); // 초기 활성 탭 설정
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  // 탭에 따라 프로필 데이터를 선택
  const profilesToDisplay = activeTab === 'students' 
    ? studentCommitteeProfiles 
    : youngCamperProfiles;

  // 소개글 변경될 수 있어 구분해둠
  const subtitle = activeTab === 'students' 
  ? "영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다." 
  : "영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다.";


  return (
    <>
      <MainTitle
        mainText="기획단"
        subText="영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다."
      />
      {isDesktop ? (
      <ContentWrapper>
        <S.TabBar>
          <S.TabButton 
            isActive={activeTab === 'students'} 
            onClick={() => setActiveTab('students')}
          >
            학생 기획 위원단
          </S.TabButton>
          <S.TabButton 
            isActive={activeTab === 'campers'} 
            onClick={() => setActiveTab('campers')}
          >
            영캠퍼
          </S.TabButton>
        </S.TabBar>
        <Section 
          title={activeTab === 'students' ? "학생 기획 위원단" : "영캠퍼"}
          subtitle={subtitle}
          profiles={profilesToDisplay} 
        />
      </ContentWrapper>
      ) : (
        <>
          <S.TabBar>
            <S.TabButton 
              isActive={activeTab === 'students'} 
              onClick={() => setActiveTab('students')}
            >
              학생 기획 위원단
            </S.TabButton>
            <S.TabButton 
              isActive={activeTab === 'campers'} 
              onClick={() => setActiveTab('campers')}
            >
              영캠퍼
            </S.TabButton>
          </S.TabBar>
          <Section 
            title={activeTab === 'students' ? "학생 기획 위원단" : "영캠퍼"}
            subtitle={subtitle}
            profiles={profilesToDisplay} 
          />
        </>
      )}
    </>
  );
};

export default index;
