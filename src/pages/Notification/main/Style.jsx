import styled from "styled-components";

//Search.jsx
export const SearchWrapper = styled.div`
  margin-top: 100px;
  justify-content: flex-end;
  display: flex;
  position: relative;
  margin-bottom: 50px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 287px;
  height: 48px;
  border: 1px solid #92a5b5;
  background-color: #fafafa;
  padding: 16px;
  border-radius: 9999px;
`;

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
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
  padding-top: ${(props) => props.paddingBottom || "25px"};
  padding-bottom: ${(props) => props.paddingBottom || "25px"};
`;

export const NumContainer = styled.div`
  padding: 14px;
  width: 15%;
  font-weight: 700;
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: ${(props) => props.color || "#92A5B5"};
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  padding: 14px;
  width: 75%;
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight || 600};
  display: flex;
  align-items: center;
`;

//Content.jsx

export const ContentWrapper = styled.div`
  margin-bottom: 100px;
`;

export const ContentContainer = styled.div`
  margin-bottom: 50px;
  cursor: pointer;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageNumber = styled.div`
  margin: 0 5px;
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${(props) => (props.$isActive ? "#e7ebef" : "white")};
  color: black;
  border-radius: 10px;

  &:hover {
    background-color: #e7ebef;
  }
`;

export const PageArrow = styled.div`
  margin: 0 5px;
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid #e7ebef;
  background-color: white;
  color: #92a5b5;
  border-radius: 4px;

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
`;
