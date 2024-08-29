import React from 'react';
import ProfileCard from './ProfileCard';
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const ProfileList = ({ profiles }) => {
  const { isDesktop } = useMediaQueries();

  return (
    <S.ProfileListWrapper $isDesktop={isDesktop}>
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </S.ProfileListWrapper>
  );
};

export default ProfileList;