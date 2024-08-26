import React from 'react';
import ProfileCard from './ProfileCard';
import * as S from "./style";

const ProfileList = ({ profiles }) => {
  return (
    <S.ProfileListWrapper>
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </S.ProfileListWrapper>
  );
};

export default ProfileList;