import styled from "styled-components";

const UrgentWrapper = styled.div`
  background-color: #0068ff;
  border-radius: 100px;
  max-width: 80px;
  display: flex;
  padding: 8px 18px;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.16px;
`;

const Urgent = () => {
  return <UrgentWrapper>필독</UrgentWrapper>;
};

export default Urgent;
