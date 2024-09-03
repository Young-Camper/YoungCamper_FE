import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { GlobalStyle } from "./style/globalStyle";
import styled from "styled-components";
import Nav from "./layouts/nav/Nav";
import Footer from "./layouts/footer/Footer";
import "../src/style/font.css";
import "./lib/lang/i18n";

import { RecoilRoot, useRecoilState } from "recoil";
import { languageState } from "./context/recoil/languageState";
import { useTranslation } from "react-i18next";
import useMediaQueries from "./hooks/useMediaQueries";

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
  margin-top: ${(props) => (props.$isDesktop ? "73px" : "52px")};
`;

const Layout = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const { i18n } = useTranslation();
  const { isDesktop } = useMediaQueries();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n, setLanguage]);

  return (
    <BackGroundColor>
      <Nav />
      <Wrapper $isDesktop={isDesktop}>
        <Outlet /> {/* pages의 페이지가 적용 */}
      </Wrapper>
      <Footer />
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Layout />
      </RecoilRoot>
    </>
  );
}

export default App;
