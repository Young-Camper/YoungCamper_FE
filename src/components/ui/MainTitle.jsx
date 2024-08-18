import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 280px;
  padding: var(--Spacing-0, 0px) var(--line-height-2xs, 20px);
  flex-direction: column;
  justify-content: center;
  align-items: start;

  color: var(--text-real-black, #0a0b0a);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
`;

const MainTitle = ({ title }) => {
  return <Wrapper>{title}</Wrapper>;
};

export default MainTitle;
