import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import styled from "styled-components";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
`;

const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard; /* 폰트 변경 */
`;

const Layout = () => {
  return (
    <BackGroundColor>
      <Header />
      <Nav />
      <Wrapper>
        <Outlet /> {/* pages의 페이지가 적용 */}
      </Wrapper>
      <Footer />
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
