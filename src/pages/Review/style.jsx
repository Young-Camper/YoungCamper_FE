import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) => (props.$isMobile ? "0px" : "100px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  row-gap: ${(props) => (props.$isMobile ? "20px" : "50px")};
`;

export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${(props) =>
    props.$isMobile ? "40px 24px" : props.$isTablet ? "30px" : "48px"};
  box-sizing: border-box;
  row-gap: 24px;
  font-family: "MonSemiBold";
  margin-bottom: ${(props) => (props.$isMobile ? "20px" : "50px")};
`;

export const Textfiled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${(props) => (props.$isMobile ? "20px 0px" : "0px 20px")};
  box-sizing: border-box;
  text-align: left;
`;

export const Comments = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  text-align: left;
  font-size: ${(props) =>
    props.isMobile ? "18px" : props.isTablet ? "20px" : "22px"};
  color: #323f49;
  font-family: Pretendard;
`;
