import React from 'react'
import { styled } from "styled-components";

export const TabBar = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 1440px;
	padding: 83px 0px;
	margin: 0 auto
`;

export const TabButton = styled.button`
	width: 100%;
	height: 83px;
	font-size: 28px;
	cursor: pointer;
	border-top: 2px solid #0068FF;
	border-bottom: 2px solid #0068FF;
	background: ${(props) => (props.isActive ? '#0068FF' : '#fff')};
	color: ${(props) => (props.isActive ? '#fff' : '#0068FF')};
	font-family: "MonRegular";

	transition: 
		background 0.3s ease, 
		color 0.3s ease, 
		border-top 0.3s ease, 
		border-bottom 0.3s ease;

	&:hover {
		background: ${(props) => (props.isActive ? '#0068FF' : 'linear-gradient(102deg, #0068FF, #B9FF9C)')};
  		border-top: transparent;
		border-bottom: transparent;
		color: #fff;
	}
`;

export const SectionWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding: 48px 0px;
	gap: 24px;
`;

export const Category = styled.div`
	align-self: stretch;
	color: #000;
	font-family: "MonRegular";
	font-size: 28px;
	font-weight: 700;
	line-height: 161.8%; /* 45.304px */

	align-items: center;
`;

export const Subtitle = styled.div`
  	color: #637D92;
	font-family: "MonRegular";
	font-size: 22px;
	font-style: normal;
	font-weight: 400;
	line-height: 30px; /* 136.364% */
	letter-spacing: -0.11px;
`;

export const ProfileListWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: 24px;

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