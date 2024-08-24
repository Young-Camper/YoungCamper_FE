import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

const Comment = () => {
  return <Container>커멘트</Container>;
};

export default Comment;
