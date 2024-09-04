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
	padding: ${(props) => props.$isDesktop ? "100px 0px" : "0px 0px" };
	margin: 0 auto;
`;

export const TabButton = styled.button`
	width: 100%;
	height: ${(props) => props.$isDesktop ? "83px" : "47px" };
	font-family: "MonSemibold";
	font-size: ${(props) => props.$isDesktop ? "24px" : "14px" };
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
	padding: ${(props) => props.$isMobile ? "39px 24px" : props.$isTablet ? "46px 72px" : "46px 24px" };
	gap: ${(props) => props.$isDesktop ? "24px" : "12px" };
	max-width: 1440px;
	margin: 0 auto;
`;

export const Category = styled.div`
	align-self: stretch;
	color: #000;
	font-family: ${(props) => props.$isDesktop ? "MonExtrabold" : "MonSemibold" };
	font-size: ${(props) => props.$isDesktop ? "28px" : "20px" };
	line-height: ${(props) => props.$isDesktop ? "48px" : "24px" };
	
	align-items: center;
`;

export const Subtitle = styled.div`
  	color: #637D92;
	font-family: "MonRegular";
	font-size: ${(props) => props.$isDesktop ? "22px" : "12px" };
	line-height: ${(props) => props.$isDesktop ? "30px" : "18px" };
	letter-spacing: ${(props) => props.$isDesktop ? "-0.11px" : "-0.06px" };
`;

export const ProfileListWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: ${(props) => props.$isDesktop ? "24px" : "12px" };
	padding: ${(props) => props.$isDesktop ? "48px 0px" : "24px 24px" };
	max-width: 1440px;
	margin: ${(props) => props.$isDesktop ? "100px auto" : "0 auto" };
	justify-content: center;
`;

export const ProfileCard = styled.div`
	display: flex;
	
	min-width: ${(props) => props.$isDesktop ? "320px" : "150px" };
	max-width: ${(props) => props.$isDesktop ? "350px" : "150px" };
	flex-direction: column;
	align-items: center;
	flex: 1 0 0;
	box-sizing: border-box;
	border-radius: 24px;

	position: relative; /* 추가: 상대적 위치 설정 */
	

  	img {
		background: #F6F6F6;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		opacity: 0.8;
		width: 100%;
		height: ${(props) => props.$isDesktop ? "320px" : "144px" };
		object-fit: cover;
		object-fit: cover;
		position: relative; /* 상대적 위치 설정 */
		z-index: 1; 
  	}

	.text-container {
		display: flex;
		width: 100%;
		border-bottom-left-radius: 12px;
		border-bottom-right-radius: 12px;
		height: ${(props) => props.$isDesktop ? "96px" : "51px" };
		padding: ${(props) => props.$isDesktop ? "28px 24px" : "28px 12px" };
		justify-content: space-between;
		align-items: center;
		font-family: "MonRegular";
	}

	name {
		display: flex;
		align-items: center;
		color: var(--Color-text-primary, #333);
		font-size: ${(props) => props.$isDesktop ? "32px" : "18px" };
		font-style: normal;
		color: #333;
		line-height: ${(props) => props.$isDesktop ? "38px" : "24px" }; 
		letter-spacing: -0.32px;
        margin: 0;
	}

	.roleBox {
		display: flex;
		align-items: center;
		border-radius: 100px;
		border: 1px solid #CED7DE;
		background: #FFF;
		padding: ${(props) => props.$isDesktop ? "8px 16px" : "5px 8px" };
		margin: 0;
	}

	role {
		font-size: ${(props) => props.$isDesktop ? "16px" : "12px" };
		color: #0A0B0A;
		line-height: ${(props) => props.$isDesktop ? "24px" : "18px" };
		letter-spacing: -0.16px;
	}

	.description {
		display: none; /* 기본적으로 숨김 */
		position: absolute; /* 오버레이 효과를 위해 */
		font-family: "MonRegular";
		color: #4A5E6D; /* 텍스트 색상 조정 */
		text-align: center;
		font-size: ${(props) => props.$isDesktop ? "20px" : "9px" };
		line-height: ${(props) => props.$isDesktop ? "22px" : "13px" };
		letter-spacing: -0.16px;
		padding: 28px 32px;
		top: ${(props) => props.$isDesktop ? "138px" : "40px" }; /* 아래로 정렬은 238 */
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
			height: ${(props) => props.$isDesktop ? "320px" : "144px" };
			background: linear-gradient(104deg, rgba(185, 255, 156, 0.20) 0%, rgba(0, 104, 255, 0.20) 100%);
			z-index: 2; /* 오버레이가 이미지 위로 위치하도록 설정 */
			border-top-left-radius: 12px;
			border-top-right-radius: 12px;
		}
	}
`;
