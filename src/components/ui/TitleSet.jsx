import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 1100px;
  padding: 48px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
const MainText = styled.div`
  color: var(--text-black, #0a0b0a);

  /* Primary/Desktop/Hero2 */
  font-family: Montserrat;
  font-size: 38px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -3.04px;
`;
const SubText = styled.div`
  color: var(--text-grey800, #637d92);

  /* Primary/Desktop/Body1_regular */
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.11px;
`;

const TitleSet = ({ mainText, subText }) => {
  return (
    <Wrapper>
      <MainText>{mainText}</MainText>
      <SubText>{subText}</SubText>
    </Wrapper>
  );
};

export default TitleSet;
