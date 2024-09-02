import logo_kr from "../../assets/images/Nav/Logo_kr.png";
import logo_en from "../../assets/images/Nav/Logo_en.png";
import { useState } from "react";
import useMediaQueries from "../../hooks/useMediaQueries";
import menubar from "../../assets/images/Nav/Menubar.png";
import closeicon from "../../assets/images/Nav/CloseIcon.png";
import Instagram from "../../assets/images/Nav/Instagram.png";
import Youtube from "../../assets/images/Nav/Youtube.png";
import SideNav from "../../assets/images/Nav/SideNav.png";
import * as S from "./style";
import { useTranslation } from "react-i18next";
import i18n from "../../lib/lang/i18n";
import { useRecoilState } from "recoil";
import { languageState } from "../../context/recoil/languageState";

const Nav = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [lang, setLang] = useRecoilState(languageState);
  const isChecked = lang === "en"; // 영어일 때 체크 상태를 true로 설정

  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggle = () => {
    const newLang = isChecked ? "ko" : "en"; // 토글 상태에 따라 언어 결정
    setLang(newLang); // Recoil 상태 업데이트
    i18n.changeLanguage(newLang); // i18n 언어 변경
    localStorage.setItem("language", newLang); // localStorage에 언어 상태 저장
  };

  return (
    <>
      {isDesktop && (
        <S.Wrapper>
          <S.Container>
            <S.FlexContainer>
              <S.StyledLink to={"/"}>
                {isChecked ? (
                  <S.LogoEn src={logo_en} alt="Logo_en" />
                ) : (
                  <S.LogoKr src={logo_kr} alt="Logo_kr" />
                )}
              </S.StyledLink>
              <S.StyledLink to={"/notification"}>
                {t(`nav.notification`)}
              </S.StyledLink>
              <S.StyledLink to={"/promotion"}>{t(`nav.club`)}</S.StyledLink>
              <S.StyledLink to={"/performance"}>
                {t(`nav.performance`)}
              </S.StyledLink>
              <S.StyledLink to={"/location"}>{t(`nav.location`)}</S.StyledLink>
              <S.StyledLink to={"/review"}>{t(`nav.review`)}</S.StyledLink>
              <S.StyledLink to={"/FAQ"}>{t(`nav.faq`)}</S.StyledLink>
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
      {isTablet && <S.Wrapper>{/* Tablet view 관련 내용 생략 */}</S.Wrapper>}
      {isMobile && (
        <S.Wrapper>
          <S.Container>
            <S.FlexContainer>
              {modalOpen && (
                <S.SideNav>
                  <S.NavMobile>
                    <S.Header>
                      <S.HeaderContent>
                        <S.MenubarOpened
                          menubar={menubar}
                          onClick={() => setModalOpen(false)}
                        />
                        <S.LogoWrapper>
                          <S.StyledLink
                            to={"/"}
                            onClick={() => setModalOpen(false)}
                          >
                            {isChecked ? (
                              <S.LogoEn src={logo_en} alt="Logo_en" />
                            ) : (
                              <S.LogoKr src={logo_kr} alt="Logo_kr" />
                            )}
                          </S.StyledLink>
                        </S.LogoWrapper>
                        <S.ModalCloseBtn
                          closeicon={closeicon}
                          onClick={() => setModalOpen(false)}
                        />
                      </S.HeaderContent>
                    </S.Header>
                    <S.SideNavLinks>
                      <S.SideNavSet>
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
                            <img src={SideNav} width={"44px"} height={"44px"} />
                            {t("nav.club")}
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
                            <S.SideNavSnsIcon icon={Instagram} />
                          </a>
                          <a
                            href="https://www.youtube.com/@youngcamp_dgu"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <S.SideNavSnsIcon icon={Youtube} />
                          </a>
                        </S.SideNavIconContainer>
                      </S.SideNavSNS>
                    </S.SideNavEtc>
                  </S.NavMobile>
                </S.SideNav>
              )}
              <S.StyledLink to={"/"}>
                {isChecked ? (
                  <S.LogoEn src={logo_en} alt="Logo_en" />
                ) : (
                  <S.LogoKr src={logo_kr} alt="Logo_kr" />
                )}
              </S.StyledLink>
              <S.MenubarContainer>
                <S.MenubarWrapper>
                  <S.Menubar
                    menubar={menubar}
                    onClick={() => setModalOpen(true)}
                  />
                </S.MenubarWrapper>
              </S.MenubarContainer>
            </S.FlexContainer>
          </S.Container>
        </S.Wrapper>
      )}
    </>
  );
};

export default Nav;
