import React from 'react';
import Category from './Category';
import ProfileList from './ProfileList';
import * as S from "./style";

const Section = ({ title, subtitle, profiles }) => {
  return (
    <>
    <S.SectionWrapper>
      <Category>{title}</Category>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.SectionWrapper>
    <ProfileList profiles={profiles} />
    </>
  );
};

export default Section;