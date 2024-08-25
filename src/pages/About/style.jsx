import React from 'react'
import { styled } from "styled-components";

export const SectionWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;

export const Category = styled.div`
	align-self: stretch;
	color: #000;
	font-family: "Noto Sans KR";
	font-size: 28px;
	font-weight: 700;
	line-height: 161.8%; /* 45.304px */
	padding: 32px 20px;
	margin-top: 48px;

	align-items: center;
`;

export const ProfileListWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: 25px;

	justify-content: center;
	/* 피그마엔 명시되어 있지 않지만 임의로 설정해둠*/
	/* 1440보다 넓은 화면 고려했을 때 이게 더 나은 것 같아서... */
`;

export const ProfileCard = styled.div`
	width: 350px;
	box-sizing: border-box;
	border-radius: 8px;
	

  	img {
		background: #F6F6F6;
		border-radius: 12px;
		opacity: 0.8;
		width: 100%;
		height: 290px;
		object-fit: cover;
		margin-bottom: 10px;
  	}

	.text-container {
		display: flex;
		width: 100%;
		max-width: 350px;
		padding: 28px 12px;
		justify-content: space-between;
		align-items: center;
	}

	name {
		color: var(--Color-text-primary, #333);

		font-family: Poppins;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;

		line-height: 22px;
    	margin: 0;
	}

	role {
		border-radius: 100px;
		border: 1px solid #E8E8E8;
		background: #FFF;
		font-size: 14px;
		padding: 5px 10px;
		margin: 0;
		color: #666;
		
	}
`;