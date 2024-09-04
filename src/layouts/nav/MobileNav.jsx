import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const MobileNav = ({
  logoSrc,
  isEnglish,
  handleToggle,
  modalOpen,
  setModalOpen,
}) => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  return (
    <S.Wrapper $isDesktop={isDesktop}>
      <S.Container $isDesktop={isDesktop}>
        {/* 네비게이션 바 */}
        <S.NavBar>
          <S.TopNav>
            <S.StyledLink to={"/"}>
              <S.Logo
                $isDesktop={false}
                $isEnglish={isEnglish}
                src={logoSrc}
                alt="Logo"
              />
            </S.StyledLink>

            <S.Menubar
              src={`${mediaUrl}Nav/sideNav.png`}
              onClick={() => {
                setModalOpen(true);
              }}
              alt="메뉴바"
            />
          </S.TopNav>
        </S.NavBar>

        {/* 사이드 내비게이션 */}
        {modalOpen && (
          <S.SideNav>
            <S.NavMobile>
              <S.Header $isMobile={isMobile}>
                <S.HeaderContent>
                  <S.MenubarOpened
                    src={`${mediaUrl}Nav/re_sideNav.png`}
                    onClick={() => setModalOpen(false)}
                  />
                  <S.LogoWrapper>
                    <S.StyledLink to={"/"} onClick={() => setModalOpen(false)}>
                      <S.Logo
                        $isDesktop={false}
                        $isEnglish={isEnglish}
                        src={logoSrc}
                        alt="Logo"
                      />
                    </S.StyledLink>
                  </S.LogoWrapper>
                  <S.ModalCloseBtn
                    src={`${mediaUrl}Nav/exit.png`}
                    onClick={() => setModalOpen(false)}
                  />
                </S.HeaderContent>
              </S.Header>
              <S.SideNavLinks>
                <S.SideNavSet>
                  {[
                    "Intro",
                    "notification",
                    "promotion",
                    "performance",
                    "location",
                    "review",
                    "FAQ",
                    "about",
                  ].map((path, index) => (
                    <S.SideNavLink key={index}>
                      <S.StyledLink
                        $isTablet={isTablet}
                        to={`/${path}`}
                        onClick={() => setModalOpen(false)}
                        onMouseOver={() => handleMouseOver("date")}
                        onMouseOut={() => handleMouseOut("date")}
                        ishoveringDate={titleHover.date}
                      >
                        {/* 양 옆에 이미지 추가 */}
                        {path === "promotion" ? (
                          <>
                            <S.NavIcon
                              src={`${mediaUrl}Nav/clubIcon.png`}
                              alt="Icon Left"
                            />
                            {t(`nav.${path}`)}
                            <S.NavIcon
                              src={`${mediaUrl}Nav/clubIcon.png`}
                              alt="Icon Right"
                            />
                          </>
                        ) : (
                          t(`nav.${path}`)
                        )}
                      </S.StyledLink>
                    </S.SideNavLink>
                  ))}
                </S.SideNavSet>

                <S.SideNavEtc>
                  <S.SideNavLang>
                    <S.SideNavLangBtn>
                      <S.SideNavLangText onClick={() => handleToggle(false)}>
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
                        <S.SideNavSnsIcon
                          src={`${mediaUrl}Nav/Instagram.png`}
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/@youngcamp_dgu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <S.SideNavSnsIcon src={`${mediaUrl}Nav/Youtube.png`} />
                      </a>
                    </S.SideNavIconContainer>
                  </S.SideNavSNS>
                </S.SideNavEtc>
              </S.SideNavLinks>
            </S.NavMobile>
          </S.SideNav>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default MobileNav;
