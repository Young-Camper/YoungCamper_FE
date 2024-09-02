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

	position: relative; /* 추가: 상대적 위치 설정 */
	

  	img {
		background: #F6F6F6;
		border-radius: 12px;
		opacity: 0.8;
		width: 100%;
		height: 290px;
		object-fit: cover;
		margin-bottom: 10px;

		position: relative; /* 상대적 위치 설정 */
		z-index: 1; 
  	}

	.text-container {
		display: flex;
		width: 100%;
		max-width: 350px;
		padding: 28px 12px;
		justify-content: space-between;
		align-items: center;

		font-family: "MonRegular";
	}

	name {
		display: flex;
		align-items: center;
		height: 40px;
		color: var(--Color-text-primary, #333);
		font-size: 32px;
		font-style: normal;
		font-weight: 700;

		line-height: 22px;
    	margin: 0;
	}

	.roleBox {
		display: flex;
		align-items: center;
		height: 40px;
		border-radius: 100px;
		border: 1px solid #E8E8E8;
		background: #FFF;
		padding: 8px 16px;
		margin: 0;
	}

	role {
		font-size: 16px;
		font-weight: 400;
		color: #0A0B0A;
	}

	.description {
		display: none; /* 기본적으로 숨김 */
		position: absolute; /* 오버레이 효과를 위해 */
		font-family: "MonRegular";
		color: #4A5E6D; /* 텍스트 색상 조정 */
		text-align: right;
		font-size: 20px;
		padding: 28px 32px;
		bottom: 105px;
		right: 0;
		z-index: 2;
	}

	&:hover {
		.description {
			display: block; /* hover 시 표시 */
		}

		name, role {
			background: var(--gradient, linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%));
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.roleBox {
		    position: relative;
			border: 1px solid transparent;
			border-radius: 100px;
			background-image: linear-gradient(#fff, #fff), 
			linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%);
			background-origin: padding-box, border-box, content-box;
			background-clip: padding-box, border-box, content-box;	
		}
			
		/* 이미지 위에 그라데이션 오버레이 추가 */
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 290px; /* 이미지 높이와 동일하게 설정 */
			background: linear-gradient(104deg, rgba(185, 255, 156, 0.20) 0%, rgba(0, 104, 255, 0.20) 100%);
			z-index: 2; /* 오버레이가 이미지 위로 위치하도록 설정 */
			border-radius: 12px; /* 이미지의 border-radius와 동일하게 설정 */
		}
	}
`;
