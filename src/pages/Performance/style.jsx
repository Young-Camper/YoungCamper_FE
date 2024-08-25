import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: pink;
  padding: 100px;
  font-size: 50px;
`;
export const ImgTest = styled.img`
  border-radius: 50px;
  width: 140px;
`;

// ArtistModal.jsx
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0 0 0 / 71%);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Modal = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 700px;
  height: 500px;

  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background: #000000;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
`;

export const ModalCloseBtn = styled.span`
  cursor: pointer;

  z-index: 1000;
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
`;

export const ModalPosterImg = styled.img`
  height: 50%;
`;

export const ModalContent = styled.div`
  padding: 40px;
  color: white;
`;

export const ModalDetail = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

export const ModalTitle = styled.h2`
  padding: 0;
  font-size: 40px;
  margin: 16px 0;
`;

export const ModalOverview = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;
