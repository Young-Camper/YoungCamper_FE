import React from 'react';
import Category from './Category';
import ProfileList from './ProfileList';
import * as S from "./style";

const Section = ({ title, profiles }) => {
  return (
    <S.SectionWrapper>
      <Category>{title}</Category>
      <ProfileList profiles={profiles} />
    </S.SectionWrapper>
  );
};

export default Section;