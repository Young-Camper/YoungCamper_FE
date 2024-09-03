// Nav.js
import { useState } from "react";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useRecoilState } from "recoil";
import { languageState } from "../../context/recoil/languageState";
import i18n from "../../lib/lang/i18n";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [lang, setLang] = useRecoilState(languageState);
  const isEnglish = lang === "en";

  const [modalOpen, setModalOpen] = useState(false);
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  const handleToggle = () => {
    const newLang = isEnglish ? "ko" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const logoSrc = `${mediaUrl}Nav/Logo_${isEnglish ? "en" : "kr"}.png`;

  return (
    <>
      {isDesktop && (
        <DesktopNav
          logoSrc={logoSrc}
          isEnglish={isEnglish}
          handleToggle={handleToggle}
        />
      )}
      {(isTablet || isMobile) && (
        <MobileNav
          logoSrc={logoSrc}
          isEnglish={isEnglish}
          handleToggle={handleToggle}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default Nav;
