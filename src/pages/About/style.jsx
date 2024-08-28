import React from 'react'
import { styled } from "styled-components";

export const ContentWrapper =styled.div`
	padding: ${(props) => props.$isDesktop ? "0px 170px" : "0px 0px" };
`

export const TabBar = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 1440px;
	padding: ${(props) => props.$isDesktop ? "83px 0px" : "0px 0px" };
	margin: 0 auto;
	margin-bottom: ${(props) => props.$isDesktop ? "100px" : "77px"};
`;

export const TabButton = styled.button`
	width: 100%;
	height: ${(props) => props.$isDesktop ? "83px" : "47px" };
	font-family: "MonRegular";
	font-size: ${(props) => props.$isDesktop ? "24px" : "14px" };
	font-weight: 600;
	line-height: 18px; /* 128.571% */
	letter-spacing: 0.14px;

	cursor: pointer;
	border-top: 2px solid #0068FF;
	border-bottom: 2px solid #0068FF;
	background: ${(props) => (props.isActive ? '#0068FF' : '#fff')};
	color: ${(props) => (props.isActive ? '#fff' : '#0068FF')};

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
	padding: ${(props) => props.$isMobile ? "39px 24px" : props.$isTablet ? "58px 24px" : "48px 0px" };
	gap: ${(props) => props.$isDesktop ? "24px" : "12px" };
	margin-bottom: ${(props) => props.$isDesktop ? "51px" : "12px"};
`;

export const Category = styled.div`
	align-self: stretch;
	color: #000;
	font-family: "MonRegular";
	font-size: ${(props) => props.$isDesktop ? "28px" : "20px" };
	font-weight: ${(props) => props.$isDesktop ? "700" : "600" };
	line-height: ${(props) => props.$isDesktop ? "48px" : "24px" };
	
	align-items: center;
`;

export const Subtitle = styled.div`
  	color: #637D92;
	font-family: "MonRegular";
	font-size: ${(props) => props.$isDesktop ? "22px" : "12px" };
	font-weight: 400;
	line-height: ${(props) => props.$isDesktop ? "30px" : "18px" };
	letter-spacing: ${(props) => props.$isDesktop ? "-0.11px" : "-0.06px" };
`;

export const ProfileListWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: 24px;
	padding: ${(props) => props.$isDesktop ? "48px 0px" : "24px 24px" };

	justify-content: center;
	/* 피그마엔 명시되어 있지 않지만 임의로 설정해둠*/
	/* 1440보다 넓은 화면 고려했을 때 이게 더 나은 것 같아서... */
`;

export const ProfileCard = styled.div`
	display: flex;
	
	min-width: 320px;
	max-width: 450px;
	flex-direction: column;
	align-items: center;
	flex: 1 0 0;
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