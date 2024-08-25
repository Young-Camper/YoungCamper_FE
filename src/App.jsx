import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import styled from "styled-components";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import "../src/style/font.css";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: start;
  align-items: start;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
`;

const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
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
