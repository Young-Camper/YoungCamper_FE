import styled from "styled-components";

// Login.jsx
export const FormWrapper = styled.form`
  width: 100%;
  height: 500px;
  background-color: #f9f9f9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
export const InputText = styled.input`
  width: 600px;
  border: 1px solid #424242;
  padding: 20px;
  font-size: 20px;
  color: #424242;
`;
export const BtnWrapper = styled.button`
  width: 100px;
  padding: 20px;
  background-color: #424242;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
`;

// Button Component
export const DeleteBtn = styled.div`
  position: fixed;
  right: 10%;
  bottom: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 110px;
  height: 64px;
  align-items: center;
  border-radius: var(--XXL, 100px);
  opacity: var(--sds-size-stroke-border);
  background: var(--new-main-primary, #0068ff);
  color: var(--new-main-white, #fafafa);
  text-align: center;

  /* Primary/Desktop/Button2 */
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: 0.16px;
`;

// adminWrite
export const AdminContainer = styled.div`
  display: flex;
  width: 1100px;
  padding: var(--XXL, 100px) 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
export const InputWrapper = styled.div`
  display: flex;
  padding: 0px var(--Spacing-l, 48px);
  flex-direction: column;
  align-items: center;
  gap: var(--Spacing-20, 20px);
  align-self: stretch;
`;
export const InputContainer = styled.div`
  padding: 10px 0;
  border-top: 1px solid #0068ff;
  border-bottom: 1px solid #0068ff;
`;
export const InputGrid = styled.div`
  display: flex;
  align-items: center;
`;
export const TextCotainer = styled.div`
  width: 180px;
  color: var(--Base-Base-Black, #0a0b0a);
  text-align: center;

  /* Primary/Desktop/Body1_regular */
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.11px;

  border-right: 1px solid #ced7de;
`;
export const InputArea = styled.input`
  width: 747px;
  height: 50px;
  flex-shrink: 0;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.11px;
  padding-left: 30px;
  margin: 10px 30px;
  border-radius: 5px;
  border: var(--Radius-Sharp, 1px) solid var(--new-grey-grey300, #ced7de);
  opacity: var(--sds-size-stroke-border);
  background: var(--new-main-white, #fafafa);
`;
export const InputContent = styled.textarea`
  display: flex;
  width: 1000px;
  height: 300px;
  padding: 30px 50px;
  align-items: flex-start;
  border-radius: 5px;
  border: 1px solid var(--new-grey-grey300, #ced7de);
  opacity: var(--sds-size-stroke-border);
  background: var(--new-main-white, #fafafa);
  resize: none;

  /* Primary/Desktop/Body2_regular */
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  letter-spacing: -0.1px;
`;
