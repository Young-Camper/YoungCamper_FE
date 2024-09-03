import { useState } from "react";
// Nav.js
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
        <S.Wrapper>
          <S.Container>
            <S.FlexContainer>
              {/* 로고 */}
              <S.StyledLink to={"/"}>
                {isChecked ? (
                  <S.LogoEn src={`${mediaUrl}Nav/Logo_en.png`} alt="Logo_en" />
                ) : (
                  <S.LogoKr src={`${mediaUrl}Nav/Logo_kr.png`} alt="Logo_kr" />
                )}
              </S.StyledLink>

              {/* 영캠프 소개 */}
              <S.StyledLink to={"/Intro"}>
                {t(`nav.intro`)}</S.StyledLink>

              {/* 공지 */}
              <S.StyledLink to={"/notification"}>
                {t(`nav.notification`)}
              </S.StyledLink>

              {/* 동아리 */}
              <S.StyledLink to={"/promotion"}>{t(`nav.club`)}</S.StyledLink>

              {/* 공연 일정 */}
              <S.StyledLink to={"/performance"}>
                {t(`nav.performance`)}
              </S.StyledLink>

              {/* 장소 */}
              <S.StyledLink to={"/location"}>{t(`nav.location`)}</S.StyledLink>

              {/* 후기 */}
              <S.StyledLink to={"/review"}>{t(`nav.review`)}</S.StyledLink>

              {/* FAQ */}
              <S.StyledLink to={"/FAQ"}>{t(`nav.faq`)}</S.StyledLink>

              {/* 기획단 */}
              <S.StyledLink to={"/about"}>{t(`nav.about`)}</S.StyledLink>
              <S.LangToggleWrapper>
                <S.CheckBox
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleToggle} // 언어 변경 핸들러
                />
                <S.LangSlider>
                  <S.ToggleCircle />
                </S.LangSlider>
              </S.LangToggleWrapper>
            </S.FlexContainer>
          </S.Container>
        </S.Wrapper>
      )}
      {/* Tablet view 관련 내용 생략 */}
      {/* {isTablet && <S.Wrapper></S.Wrapper>} */}
      {(isMobile || isTablet) && (
        <S.Wrapper>
          <S.Container>
            <S.FlexContainer>
              {modalOpen && (
                <S.SideNav>
                  <S.NavMobile>
                    <S.Header>
                      <S.HeaderContent>
                        <S.MenubarOpened
                          menubar={`${mediaUrl}Nav/re_sideNav.png`}
                          onClick={() => setModalOpen(false)}
                        />
                        <S.LogoWrapper>
                          <S.StyledLink
                            to={"/"}
                            onClick={() => setModalOpen(false)}
                          >
                            {isChecked ? (
                              <S.LogoEn src={`${mediaUrl}Nav/Logo_en.png`} alt="Logo_en" />
                            ) : (
                              <S.LogoKr src={`${mediaUrl}Nav/Logo_kr.png`} alt="Logo_kr" />
                            )}
                          </S.StyledLink>
                        </S.LogoWrapper>
                        <S.ModalCloseBtn
                          closeicon={`${mediaUrl}Nav/exit.png`}
                          onClick={() => setModalOpen(false)}
                        />
                      </S.HeaderContent>
                    </S.Header>
                    <S.SideNavLinks>
                      <S.SideNavSet>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/Intro"}
                            onClick={() => setModalOpen(false)}
                          >
                            {t("nav.intro")}
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/notification"}
                            onClick={() => setModalOpen(false)}
                          >
                            {t("nav.notification")}
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/promotion"}
                            onClick={() => setModalOpen(false)}
                          >
                            <img src={`${mediaUrl}Nav/clubIcon.png`} width={"44px"} height={"44px"} />
                            {t("nav.club")}
                            <img src={`${mediaUrl}Nav/clubIcon.png`} width={"44px"} height={"44px"} />
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/performance"}
                            onClick={() => setModalOpen(false)}
                          >
                            {t("nav.performance")}
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/location"}
                            onClick={() => setModalOpen(false)}
                          >
                            {t("nav.location")}
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/review"}
                            onClick={() => setModalOpen(false)}
                          >
                            {t("nav.review")}
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/FAQ"}
                            onClick={() => setModalOpen(false)}
                          >
                            {t("nav.faq")}
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/about"}
                            onClick={() => setModalOpen(false)}
                          >
                            {t("nav.about")}
                          </S.StyledLink>
                        </S.SideNavLink>
                      </S.SideNavSet>
                    </S.SideNavLinks>
                    <S.SideNavEtc>
                      <S.SideNavLang>
                        <S.SideNavLangBtn>
                          <S.SideNavLangText
                            onClick={() => handleToggle(false)}
                          >
                            한국어
                          </S.SideNavLangText>
                          <S.SideNavLangText onClick={() => handleToggle(true)}>
                            ENG
                          </S.SideNavLangText>
                        </S.SideNavLangBtn>
                      </S.SideNavLang>
                      <S.SideNavSNS>
                        <S.SideNavIconContainer>
                          <a
                            href="https://www.instagram.com/youngcamp_dgu"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <S.SideNavSnsIcon icon={`${mediaUrl}Nav/Instagram.png`} />
                          </a>
                          <a
                            href="https://www.youtube.com/@youngcamp_dgu"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <S.SideNavSnsIcon icon={`${mediaUrl}Nav/Youtube.png`} />
                          </a>
                        </S.SideNavIconContainer>
                      </S.SideNavSNS>
                    </S.SideNavEtc>
                  </S.NavMobile>
                </S.SideNav>
              )}
              <S.StyledLink to={"/"}>
                {isChecked ? (
                  <S.LogoEn src={`${mediaUrl}Nav/Logo_en.png`} alt="Logo_en" />
                ) : (
                  <S.LogoKr src={`${mediaUrl}Nav/Logo_kr.png`} alt="Logo_kr" />
                )}
              </S.StyledLink>
              <S.MenubarContainer>
                <S.MenubarWrapper>
                  <S.Menubar
                    menubar={`${mediaUrl}Nav/sideNav.png`}
                    onClick={() => setModalOpen(true)}
                  />
                </S.MenubarWrapper>
              </S.MenubarContainer>
            </S.FlexContainer>
          </S.Container>
        </S.Wrapper>
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
