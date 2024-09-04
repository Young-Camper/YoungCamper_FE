import React from 'react';
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const ProfileCard = ({ profile }) => {
	const { isDesktop } = useMediaQueries();

	return (
	  <S.ProfileCard $isDesktop={isDesktop}>
		<div className="description">{profile.description}</div> {/* 상세 설명 추가 */}
		<img src={profile.image} alt={profile.name} />
		<div className="text-container">
		  <name>{profile.name}</name>
		  <div className="roleBox">
		  <role>{profile.role}</role>
		  </div>
		</div>
	  </S.ProfileCard>
	);
  };
  
  export default ProfileCard;