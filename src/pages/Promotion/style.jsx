import styled from "styled-components";
import Arrow from '../../assets/images/Promotion/arrow.png';


// Club
export const gridContainer = styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
    props.isMobile ? "repeat(1, 1fr)" : props.isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
    row-gap: 22px;
    column-gap: 22px;
`;

export const CardWrapper = styled.div`
    padding: ${(props) =>
        props.isMobile
        ? "24px 5px"
        : props.isTablet
        ? "48px 23px"
        : props.isDesktop
        ? "148px 178px"
        : "0px"};
`;


// ClubCard
export const CardContainer = styled.div`
    background-image: ${props => props.hasImage ? `url(${props.src})` : 'linear-gradient(to bottom, #00000000, rgba(10, 11, 10, 0.48))'};
    background-size: cover;
    background-position: center;
    padding: 24px 36px;
    position: relative;
    border-radius: 40px;
    color: #FAFAFA;
    overflow: hidden;
    text-align: left;
    height: 279px;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.68px;
    transition: all 0.3s ease;
    cursor: pointer; 

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, #00000000, rgba(10, 11, 10, 0.48));
        z-index: 1;
    }

    > * {
        position: relative;
        z-index: 2;
    }

    &:hover {
        outline: 2px solid #0068FF;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.48);
            z-index: 1;
        }

        & > * {
            position: absolute;
            z-index: 2;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 35px;
            right: 24px;
            width: 51.48px;
            height: 40px;
            background-color: #FAFAFA; 
            border-radius: 25px; 
            background-image: url(${Arrow});
            background-size: 26px 22px;
            background-repeat: no-repeat;
            background-position: center;
            z-index: 2;
        }
    }
`;

export const SchoolBadge = styled.div`
    padding: 8px 18px;
    border-radius: 100px;
    border: 1px solid #fff;
    display: inline-block;
    position: absolute;
    bottom: 72px;
    left: 36px;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.04px;
`;

export const ClubName = styled.h3`
    font-size: 28px;
    margin: 0;
    position: absolute;
    bottom: 24px;
    left: 36px;
`;

//페이지네이션
export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 24px 0;
`;

export const PageNumber = styled.span`
    margin: 0 4px;
    cursor: pointer;
    padding: 10px 15px;
    border: 1px solid #ddd;
    font-size: 16px;
    font-weight: 400;
    background-color: ${(props) => (props.$isActive ? "#e7ebef" : "white")};
    color: black;
    border-radius: 10px;
    border: none;

    &:hover {
        background-color: #e7ebef;
    }
`;

//Detail
export const ClubDetail = styled.div`
    padding: ${(props) =>
        props.isDesktop
        ? "0px 170px"
        : "0px"};

`;

export const ContentWrapper = styled.div`
    padding: ${(props) =>
        props.isMobile
        ? "0px 24px"
        : props.isTablet
        ? "0px 72px"
        : "0px"};
`;

//ClubImage
export const BackContainer = styled.div`
    height: ${(props) =>
        props.isDesktop
        ? "78px"
        : "45px"};
    background-color: #E7EBEF;
    padding: 24px 12px;
    display: flex;
`;

export const BackButton = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ArrowIcon = styled.img`
    width: ${(props) =>
        props.isDesktop
        ? "44px"
        : "20px"};
    height: auto;
`;

export const BackText = styled.span`
    font-size: ${(props) =>
        props.isDesktop
        ? "22px"
        : "14px"};
    font-weight: 400;
    color: #000; 
`;

export const ClubImage = styled.div`
    height: ${(props) => (props.isDesktop ? '619px' : '450px')};
    width: 100%;
    background-image: ${props =>
        props.hasImage 
            ? `url(${props.src})` 
            : 'linear-gradient(to bottom, #00000000, rgba(10, 11, 10, 0.48))'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
`;

//SubTitle
export const Wrapper = styled.div`
    padding: 48px 0; 
`;

export const SchoolBadgeDetail = styled.div`
    padding: 8px 18px;
    border-radius: 100px;
    border: 1px solid #000;
    display: inline-block;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.04px;
    margin-bottom: 36px;
    color: #0A0B0A; 
`;

export const TextAndButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SchoolText = styled.div`
    font-size: 38px;
    font-style: normal;
    font-weight: 800;
    color: #0A0B0A;
`;

export const CTAButton = styled.a`
    padding: ${(props) => (props.isDesktop ? '20px 24px' : '5.91px 10.35px')};
    border-radius: 100px;
    border: 1px solid #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${(props) => (props.isDesktop ? '20px' : '8.87px')};
    font-style: normal;
    font-weight: 400;
    color: #0A0B0A; 
    background: transparent; 
    cursor: pointer;
    gap: ${(props) => (props.isDesktop ? '12px' : '5.91px')};
`;

export const InstaText = styled.div`
`;

export const InstagramImage = styled.img`
    width: ${(props) => (props.isDesktop ? '40px' : '22.17px')};
`;

// ClubContent
export const ClubContentWrapper = styled.div`
    padding: ${(props) => (props.isDesktop ? "50px 0px" : "24px")};
    display: flex;
    flex-direction: ${(props) => (props.isDesktop && props.hasImage ? "row" : "column")};
    justify-content: ${(props) => (props.isDesktop && props.hasImage ? "space-between" : "flex-start")};
    align-items: flex-start;
`;

export const TextBox = styled.div`
    padding: ${(props) => (props.isDesktop ? "48px 24px" : "0px")};
    margin-bottom: ${(props) => (props.isDesktop ? "0px" : "24px")};
    flex: ${(props) => (props.isDesktop && props.hasImage ? "1" : "none")};
    display: ${(props) => (props.hasImage || !props.isMobile ? "block" : "none")};  /* Hide on mobile if no image */
`;

export const TextGroup = styled.div`
    margin-bottom: ${(props) => (props.isDesktop ? "48px" : "36px")};

    &:last-child {
        margin-bottom: 0; 
    }
`;

export const Title = styled.h2`
    font-size: ${(props) => (props.isDesktop ? "24px" : "20px")};
    margin-bottom: ${(props) => (props.isDesktop ? "28px" : "12px")};
`;

export const Content = styled.p`
    font-size: ${(props) => (props.isDesktop ? "16px" : "14px")};
    line-height: 1.5;
`;

export const ImageBox = styled.div`
    margin-top: ${(props) => (props.isDesktop ? "0px" : "24px")};
    width: ${(props) => (props.isDesktop ? "50%" : "100%")};
    height: ${(props) => (props.isDesktop ? '478px' : '207px')};
    background-image: ${(props) => (props.hasImage ? `url(${props.src})` : 'none')};
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    display: ${(props) => (props.hasImage || !props.isMobile ? "block" : "none")};  /* Hide if no image on mobile */
`;

//ClubApply
export const StyledContainer = styled.div`
    background: var(--gradient, linear-gradient(102deg, #0068FF 23.99%, #B9FF9C 98.08%));
    height: ${(props) => (props.isDesktop ? '118px' : '93px')};
    padding: 24px;
    position: relative; /* To position the button absolutely */
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Button styled component
export const StyledButton = styled.a`
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
    padding: ${(props) =>
        props.isDesktop
        ? "20px 28px"
        : "13.5px 16px"};
    border-radius: 100px;
    text-decoration: none;
    font-size: ${(props)=> props.isDesktop? "22px":"12px"};
    position: absolute;
    font-style: normal;
    font-weight: 400;
    right: 24px; 
`;