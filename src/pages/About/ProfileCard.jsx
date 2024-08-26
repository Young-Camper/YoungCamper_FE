import React from 'react';
import * as S from "./style";

const ProfileCard = ({ profile }) => {
	return (
	  <S.ProfileCard>
		<img src={profile.image} alt={profile.name} />
		<div className="text-container">
		  <name>{profile.name}</name>
		  <role>{profile.role}</role>
		</div>
	  </S.ProfileCard>
	);
  };
  
  export default ProfileCard;