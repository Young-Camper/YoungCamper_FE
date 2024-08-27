import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  box-sizing: border-box;
  gap: 50px;
  text-align: left;
  font-size: 20px;
  color: #0a0b0a;
  font-family: "Pretendard", sans-serif;
`;

// 화면 넓이에 따라 폰트사이즈 조절 추가 필요

export const TitleSet = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 48px;
  box-sizing: border-box;
  gap: 24px;
  font-size: 38px;
  font-family: "Montserrat", sans-serif;
`;

export const Title = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.08em;
  font-weight: 800;
`;

export const Subtitle = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 22px;
  color: #637d92;
`;

// 여기부터 수정 필요

export const Textfiled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px;
  box-sizing: border-box;
  text-align: left;
  font-size: 20px;
  color: #cfcece;
  font-family: Pretendard;
`;

export const Textarea = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px;
  box-sizing: border-box;
  text-align: left;
  font-size: 20px;
  color: #cfcece;
  font-family: Pretendard;
`;

export const Review = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #fafafa;
  border: 1px solid #ced7de;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  gap: 15px;
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
  font-size: 20px;
  color: #323f49;
  font-family: Pretendard;
`;
