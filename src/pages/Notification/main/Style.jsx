import styled from "styled-components";

//Search.jsx
export const SearchWrapper = styled.div`
  margin-top: ${(props) => (props.$isDesktop ? "50px" : "")};
  justify-content: flex-end;
  display: flex;
  width: 100%;
  margin-right: ${(props) => (props.$isDesktop ? "48px" : "20px")};
  margin-bottom: ${(props) => (props.$isDesktop ? "50px" : "")};
`;

export const SearchContainer = styled.div`
  position: relative;
  width: ${(props) => (props.$isMobile ? "200px" : "287px")};
  height: 48px;
  border: 1px solid #92a5b5;
  background-color: #fafafa;
  padding: ${(props) => (props.$isDesktop ? "0px 16px" : "0px 14px")};
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  font-style: normal;
  /* font-weight: 400; */
  padding-right: 20px;
  cursor: pointer;

  &::placeholder {
    color: #92a5b5;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 16px;
  height: 16px;
  z-index: 1;
`;

//SubTitle.jsx

export const SubTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e7ebef;
  padding-bottom: ${(props) => props.$paddingBottom || "0px"};
  padding-top: ${(props) => props.$paddingTop || "0px"};
  gap: 12px;
`;

export const NumContainer = styled.div`
  padding: 14px;
  width: ${(props) =>
    props.$isDesktop ? "15%" : props.$isTablet ? "20%" : "50%"};
  /* font-weight: 600; */
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: ${(props) => props.color || "#92A5B5"};
  display: flex;
  align-items: center;
  font-family: "MonSemiBold";

  @media (max-width: 345px) {
    padding: 14px 0px;
  }
`;

export const DateContainer = styled.div`
  padding: ${(props) => (props.$isDesktop ? "12px 10px" : "")};
  width: 106px;
  display: flex;
  justify-content: ${(props) => (props.$isDesktop ? "center" : "")};
  font-size: ${(props) => (props.$isDesktop ? "16px" : "14px")};
  line-height: ${(props) => (props.$isDesktop ? "24px" : "22px")};
  letter-spacing: -0.16px;
  color: ${(props) => props.color || "#92A5B5"};
  display: flex;
  align-items: center;
  font-family: ${(props) => props.fontFamily || "MonRegular"};
`;

export const TitleDateContainer = styled.div`
  display: flex;
  width: ${(props) => (props.$isDesktop ? "70%" : "100%")};
  flex-direction: column;
  padding: 15px 0px;
  gap: ${(props) => props.gap || "5px"};
  justify-content: center;
`;

export const TitleContainer = styled.div`
  padding: ${(props) => (props.$isDesktop ? "17px 10px" : "")};
  width: 100%;
  font-size: ${(props) => props.fontSize || "16px"};
  /* font-weight: 600; */
  line-height: ${(props) => (props.$isDesktop ? "30px" : "22px")};
  display: block;
  align-items: center;
  font-family: "MonSemiBold";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 375px) {
    width: ${(props) => (props.$isEnglish ? "180px" : "200px")};
  }
`;

//Content.jsx

export const ContentWrapper = styled.div`
  width: 100%;
  padding: ${(props) => (props.$isMobile ? "0px 20px" : "0px 48px")};
`;

export const ContentContainer = styled.div`
  /* margin-bottom: 50px; */
  cursor: pointer;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const PageNumber = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-family: "MonRegular";
  /* font-weight: 400; */
  background-color: ${(props) => (props.$isActive ? "#e7ebef" : "white")};
  color: black;
  border-radius: 8px;

  &:hover {
    background-color: #e7ebef;
  }
`;

export const PageArrow = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid #e7ebef;
  background-color: white;
  color: #92a5b5;
  border-radius: 8px;

  &:hover {
    background-color: #e7ebef;
  }
`;

export const NoResults = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e7ebef;
  font-family: "MonSemiBold";
`;
